import Foundation
import SwiftData

/// On-device progress. Content is referenced by slug (lesson/skill IDs from packs),
/// never by relationship — packs are files, not SwiftData.

@Model
final class KidProfile {
    var name: String
    var avatarId: String
    var createdAt: Date
    var xp: Int

    @Relationship(deleteRule: .cascade, inverse: \LessonCompletion.profile)
    var completions: [LessonCompletion] = []

    init(name: String, avatarId: String) {
        self.name = name
        self.avatarId = avatarId
        self.createdAt = Date()
        self.xp = 0
    }
}

@Model
final class LessonCompletion {
    var lessonId: String
    var firstTryAccuracy: Double
    var completedAt: Date
    var xpEarned: Int
    var profile: KidProfile?

    init(lessonId: String, firstTryAccuracy: Double, xpEarned: Int) {
        self.lessonId = lessonId
        self.firstTryAccuracy = firstTryAccuracy
        self.completedAt = Date()
        self.xpEarned = xpEarned
    }
}
