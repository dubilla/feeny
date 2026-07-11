import Foundation

/// Pure adaptivity logic — no SwiftData, no UI. Everything takes plain values
/// and returns plain values so it's directly unit-testable.
enum ProgressEngine {
    enum UnitState: Equatable {
        /// Below the kid's placement band: unlocked and freely playable, but
        /// never auto-completed — no crown, no checkmark, no "you already know
        /// this." A kid can wander back here by choice; nothing is credited
        /// until they actually play it.
        case explore
        case completed
        /// The one unit to play next (pulsing on the map).
        case current
        case locked
    }

    /// Path states in pack order. Units below the placement band are
    /// `explore` (open but unearned); a unit is completed when all its lessons
    /// are done or it was skipped via challenge; the first incomplete unit
    /// at/after placement is current.
    static func unitStates(
        pack: SubjectPack,
        placementBandNumber: Int,
        completedLessonIds: Set<String>,
        completedUnitIds: Set<String>
    ) -> [String: UnitState] {
        let bandNumberById = Dictionary(uniqueKeysWithValues: pack.bands.map { ($0.id, $0.bandNumber) })
        var states: [String: UnitState] = [:]
        var currentAssigned = false

        for unit in pack.units {
            let bandNumber = bandNumberById[unit.bandId] ?? 1
            let allLessonsDone = unit.lessons.allSatisfy { completedLessonIds.contains($0.id) }
            // Completion always wins — an explore unit the kid chose to finish
            // earns its checkmark (the XP/egg were paid; the map must agree).
            if allLessonsDone || completedUnitIds.contains(unit.id) {
                states[unit.id] = .completed
            } else if bandNumber < placementBandNumber {
                // Below placement, still unplayed: open but unearned.
                states[unit.id] = .explore
            } else if !currentAssigned {
                states[unit.id] = .current
                currentAssigned = true
            } else {
                states[unit.id] = .locked
            }
        }
        return states
    }

    /// The next unplayed lesson within a unit (lessons unlock sequentially).
    static func nextLesson(in unit: LearningUnit, completedLessonIds: Set<String>) -> Lesson? {
        unit.lessons.first { !completedLessonIds.contains($0.id) }
    }

    static func updatedMastery(old: Double?, sessionAccuracy: Double) -> Double {
        let base = old ?? 0
        return TuningConstants.masteryKeep * base + TuningConstants.masteryLearn * sessionAccuracy
    }

    /// Jump-ahead: the last N completions were all near-perfect.
    static func shouldOfferChallenge(recentFirstTryAccuracies: [Double]) -> Bool {
        let recent = recentFirstTryAccuracies.suffix(TuningConstants.jumpAheadStreak)
        return recent.count >= TuningConstants.jumpAheadStreak
            && recent.allSatisfy { $0 >= TuningConstants.jumpAheadAccuracy }
    }

    /// Review insertion: the last N completions all went poorly.
    static func shouldInsertReview(recentFirstTryAccuracies: [Double]) -> Bool {
        let recent = recentFirstTryAccuracies.suffix(TuningConstants.reviewStreak)
        return recent.count >= TuningConstants.reviewStreak
            && recent.allSatisfy { $0 < TuningConstants.reviewAccuracy }
    }

    /// Placement assumes mastery of everything below the placed band. Derived
    /// at read time (not only seeded at placement) so skills that move bands or
    /// are added below a kid's placement after re-sequencing are still assumed —
    /// write-time seeding only knew the pack as it existed on placement day.
    static func effectiveMasteries(
        pack: SubjectPack,
        stored: [String: Double],
        placementBandNumber: Int
    ) -> [String: Double] {
        let bandNumberById = Dictionary(uniqueKeysWithValues: pack.bands.map { ($0.id, $0.bandNumber) })
        var result = stored
        for skill in pack.skills
        where (bandNumberById[skill.bandId] ?? 99) < placementBandNumber && result[skill.id] == nil {
            result[skill.id] = TuningConstants.assumedMasteryBelowPlacement
        }
        return result
    }

    /// "Power-up practice": the first lesson of the earliest unit teaching the
    /// weakest-mastery skill at or below the current band. Never shaming —
    /// always framed as a power-up.
    static func reviewLesson(
        pack: SubjectPack,
        masteries: [String: Double],
        currentBandNumber: Int
    ) -> Lesson? {
        let bandNumberById = Dictionary(uniqueKeysWithValues: pack.bands.map { ($0.id, $0.bandNumber) })
        let eligibleSkills = pack.skills.filter { (bandNumberById[$0.bandId] ?? 99) <= currentBandNumber }
        guard let weakest = eligibleSkills.min(by: { (masteries[$0.id] ?? 0) < (masteries[$1.id] ?? 0) }) else {
            return nil
        }
        for unit in pack.units {
            if let lesson = unit.lessons.first(where: { $0.primarySkillId == weakest.id }) {
                return lesson
            }
        }
        return nil
    }

    /// The jump-ahead quiz: a synthetic lesson sampling exercises evenly from
    /// the unit's remaining lessons.
    static func challengeLesson(unit: LearningUnit, completedLessonIds: Set<String>) -> Lesson {
        let remaining = unit.lessons.filter { !completedLessonIds.contains($0.id) }
        let pool = remaining.flatMap { $0.playableExercises }
        // Even sampling without randomness (deterministic, testable): stride across the pool.
        let target = TuningConstants.challengeExerciseCount
        let picked: [Exercise]
        if pool.count <= target {
            picked = pool
        } else {
            let step = Double(pool.count) / Double(target)
            picked = (0..<target).map { pool[min(pool.count - 1, Int(Double($0) * step))] }
        }
        return Lesson(
            id: "challenge-\(unit.id)",
            title: "Challenge: \(unit.title)",
            primarySkillId: remaining.first?.primarySkillId ?? unit.lessons[0].primarySkillId,
            sortOrder: 0,
            xpReward: GameEconomy.challengePassXP,
            exercises: picked
        )
    }
}
