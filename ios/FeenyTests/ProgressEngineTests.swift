import XCTest
@testable import Feeny

final class ProgressEngineTests: XCTestCase {
    private func exercise(_ id: String) -> Exercise {
        Exercise(
            id: id,
            payload: .countObjects(CountObjectsPayload(
                prompt: ExercisePrompt(text: "?", spokenText: nil),
                object: Visual(kind: .emoji, value: "⭐"),
                count: 2,
                choices: [2, 3]
            ))
        )
    }

    private func makePack() -> SubjectPack {
        // 3 bands × 2 units × 2 lessons.
        let bands = (1...3).map { Band(id: "b\($0)", bandNumber: $0, title: "B\($0)", description: "d") }
        var units: [LearningUnit] = []
        for band in 1...3 {
            for unitIndex in 1...2 {
                let lessons = (1...2).map { lessonIndex in
                    Lesson(
                        id: "l-\(band)-\(unitIndex)-\(lessonIndex)",
                        title: "L",
                        primarySkillId: "skill-b\(band)",
                        sortOrder: lessonIndex,
                        xpReward: 10,
                        exercises: (1...8).map { exercise("e-\(band)-\(unitIndex)-\(lessonIndex)-\($0)") }
                    )
                }
                units.append(LearningUnit(
                    id: "u-\(band)-\(unitIndex)", bandId: "b\(band)", title: "U",
                    icon: "⭐", sortOrder: units.count, lessons: lessons
                ))
            }
        }
        return SubjectPack(
            subjectId: "math", version: 1, generatedAt: "now",
            bands: bands,
            skills: (1...3).map { Skill(id: "skill-b\($0)", bandId: "b\($0)", title: "S", sortOrder: $0) },
            units: units,
            placementProbes: []
        )
    }

    func testUnitStatesWithPlacementAtBandTwo() {
        let pack = makePack()
        let states = ProgressEngine.unitStates(
            pack: pack, placementBandNumber: 2, completedLessonIds: [], completedUnitIds: []
        )
        // Below placement: explorable, never auto-completed.
        XCTAssertEqual(states["u-1-1"], .explore)
        XCTAssertEqual(states["u-1-2"], .explore)
        // START lands on the placement band's first unit — never band 1.
        XCTAssertEqual(states["u-2-1"], .current)
        XCTAssertEqual(states["u-2-2"], .locked)
        XCTAssertEqual(states["u-3-1"], .locked)
    }

    func testUnitStatesPlacedAtBandOneStartsAtTheVeryFirstUnit() {
        let pack = makePack()
        let states = ProgressEngine.unitStates(
            pack: pack, placementBandNumber: 1, completedLessonIds: [], completedUnitIds: []
        )
        // Nothing below band 1, so no explore nodes; START is unit 1 of band 1.
        XCTAssertFalse(states.values.contains(.explore))
        XCTAssertEqual(states["u-1-1"], .current)
        XCTAssertEqual(states["u-1-2"], .locked)
    }

    func testUnitStatesPlacedAtTopBandMakesEverythingBelowExplore() {
        let pack = makePack()
        let states = ProgressEngine.unitStates(
            pack: pack, placementBandNumber: 3, completedLessonIds: [], completedUnitIds: []
        )
        XCTAssertEqual(states["u-1-1"], .explore)
        XCTAssertEqual(states["u-1-2"], .explore)
        XCTAssertEqual(states["u-2-1"], .explore)
        XCTAssertEqual(states["u-2-2"], .explore)
        XCTAssertEqual(states["u-3-1"], .current)
        XCTAssertEqual(states["u-3-2"], .locked)
    }

    func testFinishedExploreUnitBelowPlacementShowsCompleted() {
        let pack = makePack()
        // Placed at band 2; the kid wandered back and finished a band-1 unit.
        let states = ProgressEngine.unitStates(
            pack: pack,
            placementBandNumber: 2,
            completedLessonIds: ["l-1-1-1", "l-1-1-2"],
            completedUnitIds: []
        )
        XCTAssertEqual(states["u-1-1"], .completed, "played-through explore unit earns its checkmark")
        XCTAssertEqual(states["u-1-2"], .explore, "the untouched one stays explorable")
        XCTAssertEqual(states["u-2-1"], .current, "START is unaffected — still the placement band")
    }

    func testCompletingAllLessonsAdvancesCurrent() {
        let pack = makePack()
        let states = ProgressEngine.unitStates(
            pack: pack,
            placementBandNumber: 1,
            completedLessonIds: ["l-1-1-1", "l-1-1-2"],
            completedUnitIds: []
        )
        XCTAssertEqual(states["u-1-1"], .completed)
        XCTAssertEqual(states["u-1-2"], .current)
    }

    func testChallengeSkipMarksUnitCompleted() {
        let pack = makePack()
        let states = ProgressEngine.unitStates(
            pack: pack,
            placementBandNumber: 1,
            completedLessonIds: [],
            completedUnitIds: ["u-1-1"]
        )
        XCTAssertEqual(states["u-1-1"], .completed)
        XCTAssertEqual(states["u-1-2"], .current)
    }

    func testMasteryEMA() {
        XCTAssertEqual(ProgressEngine.updatedMastery(old: nil, sessionAccuracy: 1.0), 0.3, accuracy: 0.0001)
        XCTAssertEqual(ProgressEngine.updatedMastery(old: 0.5, sessionAccuracy: 1.0), 0.65, accuracy: 0.0001)
        XCTAssertEqual(ProgressEngine.updatedMastery(old: 0.8, sessionAccuracy: 0.0), 0.56, accuracy: 0.0001)
    }

    func testChallengeOfferRequiresHotStreak() {
        XCTAssertTrue(ProgressEngine.shouldOfferChallenge(recentFirstTryAccuracies: [0.5, 1.0, 0.95, 0.9]))
        XCTAssertFalse(ProgressEngine.shouldOfferChallenge(recentFirstTryAccuracies: [1.0, 0.85, 1.0]))
        XCTAssertFalse(ProgressEngine.shouldOfferChallenge(recentFirstTryAccuracies: [1.0, 1.0]))
    }

    func testReviewInsertionRequiresColdStreak() {
        XCTAssertTrue(ProgressEngine.shouldInsertReview(recentFirstTryAccuracies: [0.9, 0.4, 0.3]))
        XCTAssertFalse(ProgressEngine.shouldInsertReview(recentFirstTryAccuracies: [0.4, 0.6]))
        XCTAssertFalse(ProgressEngine.shouldInsertReview(recentFirstTryAccuracies: [0.3]))
    }

    func testReviewLessonPicksWeakestSkillAtOrBelowBand() {
        let pack = makePack()
        let lesson = ProgressEngine.reviewLesson(
            pack: pack,
            masteries: ["skill-b1": 0.3, "skill-b2": 0.7, "skill-b3": 0.1],
            currentBandNumber: 2
        )
        // skill-b3 is weakest overall but above the current band → b1 wins.
        XCTAssertEqual(lesson?.primarySkillId, "skill-b1")
    }

    func testChallengeLessonSamplesSixFromRemaining() {
        let pack = makePack()
        let unit = pack.units[0]
        let challenge = ProgressEngine.challengeLesson(unit: unit, completedLessonIds: ["l-1-1-1"])
        XCTAssertEqual(challenge.exercises.count, TuningConstants.challengeExerciseCount)
        XCTAssertTrue(challenge.exercises.allSatisfy { $0.id.hasPrefix("e-1-1-2") },
                      "samples only from the remaining (uncompleted) lesson")
        XCTAssertEqual(Set(challenge.exercises.map(\.id)).count, challenge.exercises.count, "no duplicates")
    }
}
