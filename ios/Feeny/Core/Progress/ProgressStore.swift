import Foundation
import Observation
import SwiftData

/// The only type that touches SwiftData. Everything else sees plain values.
/// Every read/write is scoped to `activeProfile`; nothing works until the
/// profile picker selects one (siblings share the iPad, not their progress).
@Observable
@MainActor
final class ProgressStore {
    private let context: ModelContext
    private(set) var profiles: [KidProfile] = []
    private(set) var activeProfile: KidProfile?

    init(container: ModelContainer) {
        self.context = container.mainContext
        reloadProfiles()
    }

    // MARK: - Profiles

    func reloadProfiles() {
        profiles = (try? context.fetch(FetchDescriptor<KidProfile>(
            sortBy: [SortDescriptor(\.createdAt)]
        ))) ?? []
    }

    @discardableResult
    func createProfile(name: String, avatarId: String) -> KidProfile {
        let trimmed = name.trimmingCharacters(in: .whitespaces)
        let profile = KidProfile(name: trimmed.isEmpty ? "Explorer" : trimmed, avatarId: avatarId)
        context.insert(profile)
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

    func hasCompleted(lessonId: String) -> Bool {
        activeProfile?.completions.contains { $0.lessonId == lessonId } ?? false
    }

    /// Records a finished lesson, updates skill mastery, returns the XP awarded.
    @discardableResult
    func recordCompletion(lesson: Lesson, firstTryAccuracy: Double) -> Int {
        guard let profile = activeProfile else { return 0 }
        let xp = GameEconomy.xpForLesson(baseReward: lesson.xpReward, firstTryAccuracy: firstTryAccuracy)
        let completion = LessonCompletion(
            lessonId: lesson.id,
            firstTryAccuracy: firstTryAccuracy,
            xpEarned: xp
        )
        completion.profile = profile
        context.insert(completion)
        profile.xp += xp
        updateMastery(skillId: lesson.primarySkillId, sessionAccuracy: firstTryAccuracy)
        try? context.save()
        return xp
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

    /// Jump-ahead challenge passed: the whole unit counts as complete.
    @discardableResult
    func completeUnitViaChallenge(unitId: String, subjectId: String) -> Int {
        // The subject's progress row must exist (placement happens first).
        guard let profile = activeProfile, let progress = subjectProgress(for: subjectId) else { return 0 }
        if !progress.completedUnitIds.contains(unitId) {
            progress.completedUnitIds.append(unitId)
        }
        profile.xp += GameEconomy.challengePassXP
        try? context.save()
        return GameEconomy.challengePassXP
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
}
