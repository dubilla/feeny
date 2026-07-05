import Foundation
import Observation
import SwiftData

/// The only type that touches SwiftData. Everything else sees plain values.
/// Slice 1 runs a single implicit profile; the profile picker arrives in slice 3.
@Observable
@MainActor
final class ProgressStore {
    private let context: ModelContext
    private(set) var activeProfile: KidProfile

    init(container: ModelContainer) {
        self.context = container.mainContext
        let existing = (try? context.fetch(FetchDescriptor<KidProfile>(
            sortBy: [SortDescriptor(\.createdAt)]
        ))) ?? []
        if let first = existing.first {
            activeProfile = first
        } else {
            let profile = KidProfile(name: "Explorer", avatarId: "🦊")
            context.insert(profile)
            try? context.save()
            activeProfile = profile
        }
    }

    var totalXP: Int { activeProfile.xp }

    func hasCompleted(lessonId: String) -> Bool {
        activeProfile.completions.contains { $0.lessonId == lessonId }
    }

    /// Records a finished lesson, updates skill mastery, returns the XP awarded.
    @discardableResult
    func recordCompletion(lesson: Lesson, firstTryAccuracy: Double) -> Int {
        let xp = GameEconomy.xpForLesson(baseReward: lesson.xpReward, firstTryAccuracy: firstTryAccuracy)
        let completion = LessonCompletion(
            lessonId: lesson.id,
            firstTryAccuracy: firstTryAccuracy,
            xpEarned: xp
        )
        completion.profile = activeProfile
        context.insert(completion)
        activeProfile.xp += xp
        updateMastery(skillId: lesson.primarySkillId, sessionAccuracy: firstTryAccuracy)
        try? context.save()
        return xp
    }

    // MARK: - Placement

    func subjectProgress(for subjectId: String) -> SubjectProgress? {
        let all = (try? context.fetch(FetchDescriptor<SubjectProgress>())) ?? []
        return all.first { $0.subjectId == subjectId && $0.profile === activeProfile }
    }

    /// Records placement, seeds assumed mastery for skills below the band,
    /// and pays the completion XP. Returns the XP awarded.
    @discardableResult
    func recordPlacement(pack: SubjectPack, bandNumber: Int) -> Int {
        if let existing = subjectProgress(for: pack.subjectId) {
            existing.placementBandNumber = bandNumber
            existing.placementAt = Date()
        } else {
            let progress = SubjectProgress(subjectId: pack.subjectId, placementBandNumber: bandNumber)
            progress.profile = activeProfile
            context.insert(progress)
        }

        let bandNumberById = Dictionary(uniqueKeysWithValues: pack.bands.map { ($0.id, $0.bandNumber) })
        for skill in pack.skills where (bandNumberById[skill.bandId] ?? 99) < bandNumber {
            if mastery(skillId: skill.id) == nil {
                let record = SkillMastery(skillId: skill.id, mastery: TuningConstants.assumedMasteryBelowPlacement)
                record.profile = activeProfile
                context.insert(record)
            }
        }

        activeProfile.xp += GameEconomy.placementCompletionXP
        try? context.save()
        return GameEconomy.placementCompletionXP
    }

    // MARK: - Mastery

    func mastery(skillId: String) -> SkillMastery? {
        let all = (try? context.fetch(FetchDescriptor<SkillMastery>())) ?? []
        return all.first { $0.skillId == skillId && $0.profile === activeProfile }
    }

    var masteriesBySkill: [String: Double] {
        let all = (try? context.fetch(FetchDescriptor<SkillMastery>())) ?? []
        return Dictionary(
            uniqueKeysWithValues: all.filter { $0.profile === activeProfile }.map { ($0.skillId, $0.mastery) }
        )
    }

    private func updateMastery(skillId: String, sessionAccuracy: Double) {
        if let record = mastery(skillId: skillId) {
            record.mastery = ProgressEngine.updatedMastery(old: record.mastery, sessionAccuracy: sessionAccuracy)
            record.lastPracticedAt = Date()
        } else {
            let record = SkillMastery(
                skillId: skillId,
                mastery: ProgressEngine.updatedMastery(old: nil, sessionAccuracy: sessionAccuracy)
            )
            record.profile = activeProfile
            context.insert(record)
        }
    }

    // MARK: - Challenge / path helpers

    /// Jump-ahead challenge passed: the whole unit counts as complete.
    @discardableResult
    func completeUnitViaChallenge(unitId: String, subjectId: String) -> Int {
        // The subject's progress row must exist (placement happens first).
        guard let progress = subjectProgress(for: subjectId) else { return 0 }
        if !progress.completedUnitIds.contains(unitId) {
            progress.completedUnitIds.append(unitId)
        }
        activeProfile.xp += GameEconomy.challengePassXP
        try? context.save()
        return GameEconomy.challengePassXP
    }

    var completedLessonIds: Set<String> {
        Set(activeProfile.completions.map { $0.lessonId })
    }

    /// First-try accuracies of recent completions for this subject's lessons,
    /// oldest → newest, for the review/challenge adjusters.
    func recentAccuracies(lessonIdsInSubject: Set<String>, limit: Int = 5) -> [Double] {
        activeProfile.completions
            .filter { lessonIdsInSubject.contains($0.lessonId) }
            .sorted { $0.completedAt < $1.completedAt }
            .suffix(limit)
            .map { $0.firstTryAccuracy }
    }
}
