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

    // Slice 4 — all defaulted so profiles from earlier builds migrate in place.
    /// Catalog id of the starter picked at profile creation ("" pre-slice-4).
    var starterFeenlingId: String = ""
    /// One entry per unhatched egg; the value is the subject that earned it.
    var pendingEggSubjectIds: [String] = []
    var streakCount: Int = 0
    var lastStreakDay: Date?
    var lastNapDay: Date?

    // Age anchor (defaulted nil so pre-age profiles migrate in place).
    /// Whole years old, as answered by the kid (or corrected by a parent).
    var ageYears: Int?
    /// When `ageYears` was captured, so `currentAge` can advance with time.
    var ageCapturedAt: Date?

    /// Age today: `ageYears` plus whole years elapsed since capture.
    /// Nil until an age has been captured (old profiles).
    var currentAge: Int? { currentAge(asOf: Date()) }

    func currentAge(asOf date: Date) -> Int? {
        guard let ageYears, let ageCapturedAt else { return nil }
        let elapsed = Calendar.current.dateComponents([.year], from: ageCapturedAt, to: date).year ?? 0
        return ageYears + max(0, elapsed)
    }

    @Relationship(deleteRule: .cascade, inverse: \LessonCompletion.profile)
    var completions: [LessonCompletion] = []

    @Relationship(deleteRule: .cascade, inverse: \OwnedFeenling.profile)
    var feenlings: [OwnedFeenling] = []

    init(name: String, avatarId: String) {
        self.name = name
        self.avatarId = avatarId
        self.createdAt = Date()
        self.xp = 0
    }
}

/// One row per distinct Feenling a kid has hatched; duplicates bump `count`.
@Model
final class OwnedFeenling {
    var collectibleId: String
    var subjectId: String
    var count: Int
    var firstHatchedAt: Date
    var profile: KidProfile?

    init(collectibleId: String, subjectId: String, hatchedAt: Date) {
        self.collectibleId = collectibleId
        self.subjectId = subjectId
        self.count = 1
        self.firstHatchedAt = hatchedAt
    }
}

/// Per-subject position: set once by placement, extended by challenge skips.
@Model
final class SubjectProgress {
    var subjectId: String
    var placementBandNumber: Int
    var placementAt: Date
    /// Units completed wholesale via jump-ahead challenges (lesson-by-lesson
    /// completion lives in LessonCompletion).
    var completedUnitIds: [String]
    var profile: KidProfile?

    init(subjectId: String, placementBandNumber: Int) {
        self.subjectId = subjectId
        self.placementBandNumber = placementBandNumber
        self.placementAt = Date()
        self.completedUnitIds = []
    }
}

/// Mastery ledger, one row per (profile, skill). EMA updated after each lesson.
@Model
final class SkillMastery {
    var skillId: String
    var mastery: Double
    var lastPracticedAt: Date
    /// True for rows seeded at assumed mastery by placement (never practiced).
    /// Real practice clears it; redoing placement deletes only these rows.
    var seededByPlacement: Bool = false
    var profile: KidProfile?

    init(skillId: String, mastery: Double) {
        self.skillId = skillId
        self.mastery = mastery
        self.lastPracticedAt = Date()
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
