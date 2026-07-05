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
    static let placementStartBand = 3
    static let probesPerBand = 2
    static let placementMaxQuestions = 10
}
