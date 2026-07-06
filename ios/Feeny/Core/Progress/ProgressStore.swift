import Foundation
import Observation
import SwiftData

/// The only type that touches SwiftData. Everything else sees plain values.
/// Every read/write is scoped to `activeProfile`; nothing works until the
/// profile picker selects one (siblings share the iPad, not their progress).
@Observable
@MainActor
final class ProgressStore {
    /// Everything a finished lesson (or passed challenge) pays out, so the
    /// player can sequence the ceremonies: stars → egg → level-up.
    struct LessonRewards {
        var xpEarned: Int
        /// Level implied by total XP *before* this event — compare against the
        /// live level after all bonuses (incl. sparkle) to detect a level-up.
        var levelBefore: Int
        var unitCompleted: Bool
        var eggEarned: Bool
        var streakEvent: StreakEngine.Event?
    }

    struct HatchResult {
        let feenling: Feenling
        let isNew: Bool
        /// Sparkle bonus paid for a duplicate (0 when new).
        let sparkleXP: Int
    }

    private let context: ModelContext
    /// Injected clock so streak tests can simulate days.
    private let now: () -> Date
    /// Injected RNG so hatch tests are deterministic.
    private var rng: any RandomNumberGenerator

    private(set) var profiles: [KidProfile] = []
    private(set) var activeProfile: KidProfile?

    init(
        container: ModelContainer,
        now: @escaping () -> Date = { Date() },
        rng: any RandomNumberGenerator = SystemRandomNumberGenerator()
    ) {
        self.context = container.mainContext
        self.now = now
        self.rng = rng
        reloadProfiles()
    }

    // MARK: - Profiles

    func reloadProfiles() {
        profiles = (try? context.fetch(FetchDescriptor<KidProfile>(
            sortBy: [SortDescriptor(\.createdAt)]
        ))) ?? []
    }

    @discardableResult
    func createProfile(name: String, avatarId: String, starterFeenlingId: String? = nil) -> KidProfile {
        let trimmed = name.trimmingCharacters(in: .whitespaces)
        let profile = KidProfile(name: trimmed.isEmpty ? "Explorer" : trimmed, avatarId: avatarId)
        context.insert(profile)
        if let starterId = starterFeenlingId, let starter = CollectibleCatalog.feenling(id: starterId) {
            profile.starterFeenlingId = starter.id
            let owned = OwnedFeenling(collectibleId: starter.id, subjectId: starter.subjectId, hatchedAt: now())
            owned.profile = profile
            context.insert(owned)
        }
        try? context.save()
        reloadProfiles()
        activeProfile = profile
        return profile
    }

    func select(_ profile: KidProfile) {
        activeProfile = profile
    }

    /// Back to the picker (e.g. handing the iPad to a sibling).
    func deselectProfile() {
        activeProfile = nil
    }

    var totalXP: Int { activeProfile?.xp ?? 0 }

    var starterFeenling: Feenling? {
        guard let id = activeProfile?.starterFeenlingId, !id.isEmpty else { return nil }
        return CollectibleCatalog.feenling(id: id)
    }

    func hasCompleted(lessonId: String) -> Bool {
        activeProfile?.completions.contains { $0.lessonId == lessonId } ?? false
    }

    /// Records a finished lesson: XP + mastery as before, plus unit-completion
    /// detection (bonus XP + egg) and the daily streak. Pass the containing
    /// unit when there is one — review lessons float free and never hatch eggs.
    @discardableResult
    func recordCompletion(
        lesson: Lesson,
        firstTryAccuracy: Double,
        unit: LearningUnit? = nil,
        subjectId: String? = nil
    ) -> LessonRewards {
        guard let profile = activeProfile else {
            return LessonRewards(xpEarned: 0, levelBefore: 1, unitCompleted: false, eggEarned: false, streakEvent: nil)
        }
        let levelBefore = GameEconomy.level(forXP: profile.xp)
        let doneBefore = completedLessonIds

        var xp = GameEconomy.xpForLesson(baseReward: lesson.xpReward, firstTryAccuracy: firstTryAccuracy)
        let completion = LessonCompletion(
            lessonId: lesson.id,
            firstTryAccuracy: firstTryAccuracy,
            xpEarned: xp
        )
        completion.profile = profile
        context.insert(completion)
        updateMastery(skillId: lesson.primarySkillId, sessionAccuracy: firstTryAccuracy)

        // Unit completion: only when THIS lesson closes it out (replays don't re-award).
        var unitCompleted = false
        if let unit, let subjectId {
            let wasComplete = unit.lessons.allSatisfy { doneBefore.contains($0.id) }
                || (subjectProgress(for: subjectId)?.completedUnitIds.contains(unit.id) ?? false)
            let doneNow = doneBefore.union([lesson.id])
            if !wasComplete && unit.lessons.allSatisfy({ doneNow.contains($0.id) }) {
                unitCompleted = true
                xp += GameEconomy.unitCompletionXP
                profile.pendingEggSubjectIds.append(subjectId)
            }
        }

        profile.xp += xp
        let streakEvent = updateStreak(profile)
        try? context.save()
        return LessonRewards(
            xpEarned: xp,
            levelBefore: levelBefore,
            unitCompleted: unitCompleted,
            eggEarned: unitCompleted,
            streakEvent: streakEvent
        )
    }

    // MARK: - Placement

    func subjectProgress(for subjectId: String) -> SubjectProgress? {
        guard let profile = activeProfile else { return nil }
        let all = (try? context.fetch(FetchDescriptor<SubjectProgress>())) ?? []
        return all.first { $0.subjectId == subjectId && $0.profile === profile }
    }

    /// Records placement, seeds assumed mastery for skills below the band,
    /// and pays the completion XP. Returns the XP awarded.
    @discardableResult
    func recordPlacement(pack: SubjectPack, bandNumber: Int) -> Int {
        guard let profile = activeProfile else { return 0 }
        if let existing = subjectProgress(for: pack.subjectId) {
            existing.placementBandNumber = bandNumber
            existing.placementAt = Date()
        } else {
            let progress = SubjectProgress(subjectId: pack.subjectId, placementBandNumber: bandNumber)
            progress.profile = profile
            context.insert(progress)
        }

        let bandNumberById = Dictionary(uniqueKeysWithValues: pack.bands.map { ($0.id, $0.bandNumber) })
        for skill in pack.skills where (bandNumberById[skill.bandId] ?? 99) < bandNumber {
            if mastery(skillId: skill.id) == nil {
                let record = SkillMastery(skillId: skill.id, mastery: TuningConstants.assumedMasteryBelowPlacement)
                record.profile = profile
                context.insert(record)
            }
        }

        profile.xp += GameEconomy.placementCompletionXP
        try? context.save()
        return GameEconomy.placementCompletionXP
    }

    // MARK: - Mastery

    func mastery(skillId: String) -> SkillMastery? {
        guard let profile = activeProfile else { return nil }
        let all = (try? context.fetch(FetchDescriptor<SkillMastery>())) ?? []
        return all.first { $0.skillId == skillId && $0.profile === profile }
    }

    var masteriesBySkill: [String: Double] {
        guard let profile = activeProfile else { return [:] }
        let all = (try? context.fetch(FetchDescriptor<SkillMastery>())) ?? []
        return Dictionary(
            uniqueKeysWithValues: all.filter { $0.profile === profile }.map { ($0.skillId, $0.mastery) }
        )
    }

    private func updateMastery(skillId: String, sessionAccuracy: Double) {
        guard let profile = activeProfile else { return }
        if let record = mastery(skillId: skillId) {
            record.mastery = ProgressEngine.updatedMastery(old: record.mastery, sessionAccuracy: sessionAccuracy)
            record.lastPracticedAt = Date()
        } else {
            let record = SkillMastery(
                skillId: skillId,
                mastery: ProgressEngine.updatedMastery(old: nil, sessionAccuracy: sessionAccuracy)
            )
            record.profile = profile
            context.insert(record)
        }
    }

    // MARK: - Challenge / path helpers

    /// Jump-ahead challenge passed: the whole unit counts as complete, which
    /// also pays the unit bonus and earns the egg — same as the long way.
    @discardableResult
    func completeUnitViaChallenge(unitId: String, subjectId: String) -> LessonRewards {
        // The subject's progress row must exist (placement happens first).
        guard let profile = activeProfile, let progress = subjectProgress(for: subjectId) else {
            return LessonRewards(xpEarned: 0, levelBefore: 1, unitCompleted: false, eggEarned: false, streakEvent: nil)
        }
        let levelBefore = GameEconomy.level(forXP: profile.xp)
        var xp = GameEconomy.challengePassXP
        var unitCompleted = false
        if !progress.completedUnitIds.contains(unitId) {
            progress.completedUnitIds.append(unitId)
            unitCompleted = true
            xp += GameEconomy.unitCompletionXP
            profile.pendingEggSubjectIds.append(subjectId)
        }
        profile.xp += xp
        let streakEvent = updateStreak(profile)
        try? context.save()
        return LessonRewards(
            xpEarned: xp,
            levelBefore: levelBefore,
            unitCompleted: unitCompleted,
            eggEarned: unitCompleted,
            streakEvent: streakEvent
        )
    }

    var completedLessonIds: Set<String> {
        Set((activeProfile?.completions ?? []).map { $0.lessonId })
    }

    /// First-try accuracies of recent completions for this subject's lessons,
    /// oldest → newest, for the review/challenge adjusters.
    func recentAccuracies(lessonIdsInSubject: Set<String>, limit: Int = 5) -> [Double] {
        (activeProfile?.completions ?? [])
            .filter { lessonIdsInSubject.contains($0.lessonId) }
            .sorted { $0.completedAt < $1.completedAt }
            .suffix(limit)
            .map { $0.firstTryAccuracy }
    }

    // MARK: - Feenlings

    var pendingEggSubjectIds: [String] {
        activeProfile?.pendingEggSubjectIds ?? []
    }

    func pendingEggCount(subjectId: String? = nil) -> Int {
        guard let subjectId else { return pendingEggSubjectIds.count }
        return pendingEggSubjectIds.filter { $0 == subjectId }.count
    }

    /// Hatch count per catalog id for the active profile (for the collection grid).
    var ownedFeenlingCounts: [String: Int] {
        Dictionary(
            uniqueKeysWithValues: (activeProfile?.feenlings ?? []).map { ($0.collectibleId, $0.count) }
        )
    }

    /// Cracks one pending egg for the subject: rolls the catalog, records the
    /// hatch, and pays the sparkle bonus on duplicates. Nil if no egg is owed.
    @discardableResult
    func hatchEgg(subjectId: String) -> HatchResult? {
        guard let profile = activeProfile,
              let index = profile.pendingEggSubjectIds.firstIndex(of: subjectId) else { return nil }
        profile.pendingEggSubjectIds.remove(at: index)

        let feenling = CollectibleCatalog.roll(subjectId: subjectId, using: &rng)
        let result: HatchResult
        if let existing = profile.feenlings.first(where: { $0.collectibleId == feenling.id }) {
            existing.count += 1
            profile.xp += GameEconomy.sparkleBonusXP
            result = HatchResult(feenling: feenling, isNew: false, sparkleXP: GameEconomy.sparkleBonusXP)
        } else {
            let owned = OwnedFeenling(collectibleId: feenling.id, subjectId: subjectId, hatchedAt: now())
            owned.profile = profile
            context.insert(owned)
            result = HatchResult(feenling: feenling, isNew: true, sparkleXP: 0)
        }
        try? context.save()
        return result
    }

    // MARK: - Streaks

    var streakDisplay: StreakEngine.Display {
        guard let profile = activeProfile else { return StreakEngine.Display(count: 0, isAwakeToday: false) }
        return StreakEngine.display(state: streakState(profile), now: now())
    }

    private func streakState(_ profile: KidProfile) -> StreakEngine.State {
        StreakEngine.State(
            streakCount: profile.streakCount,
            lastStreakDay: profile.lastStreakDay,
            lastNapDay: profile.lastNapDay
        )
    }

    private func updateStreak(_ profile: KidProfile) -> StreakEngine.Event {
        let update = StreakEngine.recordLesson(state: streakState(profile), now: now())
        profile.streakCount = update.state.streakCount
        profile.lastStreakDay = update.state.lastStreakDay
        profile.lastNapDay = update.state.lastNapDay
        return update.event
    }
}
