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

    /// Records a finished lesson and returns the XP awarded.
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
        try? context.save()
        return xp
    }
}
