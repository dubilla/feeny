import Foundation

/// Every tunable reward number lives here (mirrored in docs/ECONOMY.md).
enum GameEconomy {
    static let perfectLessonBonus = 5
    /// Finishing the placement warm-up always pays out, whatever the result —
    /// the quiz itself is the achievement.
    static let placementCompletionXP = 20
    static let challengePassXP = 40
    /// Finishing every lesson in a unit (or skipping it via challenge).
    static let unitCompletionXP = 25
    /// Hatching a Feenling you already have.
    static let sparkleBonusXP = 30

    /// Perfect = every exercise right on the first try.
    static func xpForLesson(baseReward: Int, firstTryAccuracy: Double) -> Int {
        firstTryAccuracy >= 1.0 ? baseReward + perfectLessonBonus : baseReward
    }

    /// XP needed to go from level `n` to `n + 1`. Fast early levels for the hook.
    static func xpToAdvance(from level: Int) -> Int {
        50 + 25 * (level - 1)
    }

    /// Level implied by a total XP amount. Levels start at 1 and are never stored —
    /// deriving from XP means the two can't drift apart.
    static func level(forXP xp: Int) -> Int {
        var level = 1
        var remaining = xp
        while remaining >= xpToAdvance(from: level) {
            remaining -= xpToAdvance(from: level)
            level += 1
        }
        return level
    }

    /// Progress within the current level, 0..<1, for progress rings.
    static func levelProgress(forXP xp: Int) -> Double {
        var level = 1
        var remaining = xp
        while remaining >= xpToAdvance(from: level) {
            remaining -= xpToAdvance(from: level)
            level += 1
        }
        return Double(remaining) / Double(xpToAdvance(from: level))
    }
}
