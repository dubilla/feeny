import Foundation

/// Every adaptivity knob in one place. Tune here, nowhere else.
enum TuningConstants {
    // Mastery EMA: new = keep·old + learn·sessionAccuracy
    static let masteryKeep = 0.7
    static let masteryLearn = 0.3
    static let practicedThreshold = 0.6
    static let masteredThreshold = 0.85
    /// Skills in bands below placement start here (assumed known, reviewable).
    static let assumedMasteryBelowPlacement = 0.8

    // Jump-ahead challenge: N consecutive lessons at ≥ threshold offers a skip quiz.
    static let jumpAheadStreak = 3
    static let jumpAheadAccuracy = 0.9
    static let challengeExerciseCount = 6
    static let challengePassAccuracy = 0.8

    // Review insertion: N consecutive lessons below threshold inserts practice.
    static let reviewStreak = 2
    static let reviewAccuracy = 0.5

    // Placement staircase
    /// Fallback start when no age is on the profile (age-anchored paths below).
    static let placementStartBand = 3
    static let probesPerBand = 2
    static let placementMaxQuestions = 12

    // Age anchor: band ≈ one year of ability (band 4 ≈ ±20 fits age 7,
    // band 7 ≈ ×/÷ fits ages 9–10). Placement starts one band easy for
    // confidence and is capped two above nominal — jump-ahead challenges
    // remain the path beyond that.
    static func nominalBand(forAge age: Int) -> Int {
        min(8, max(1, age - 3))
    }

    static func placementStartBand(forAge age: Int) -> Int {
        max(1, nominalBand(forAge: age) - 1)
    }

    static func placementMaxBand(forAge age: Int) -> Int {
        min(8, nominalBand(forAge: age) + 2)
    }
}
