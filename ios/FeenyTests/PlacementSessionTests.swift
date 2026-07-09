import XCTest
@testable import Feeny

final class PlacementSessionTests: XCTestCase {
    /// Builds a pack with 5 bands, one unit per band, 3 probes per band.
    private func makePack() -> SubjectPack {
        let bands = (1...5).map {
            Band(id: "math-b\($0)", bandNumber: $0, title: "Band \($0)", description: "d")
        }
        var units: [LearningUnit] = []
        var probes: [PlacementProbe] = []
        for band in 1...5 {
            let exercises = (1...3).map { index in
                Exercise(
                    id: "e-b\(band)-\(index)",
                    payload: .countObjects(CountObjectsPayload(
                        prompt: ExercisePrompt(text: "How many?", spokenText: nil),
                        object: Visual(kind: .emoji, value: "⭐"),
                        count: band,
                        choices: [band, band + 1]
                    ))
                )
            }
            let lesson = Lesson(
                id: "l-b\(band)", title: "L", primarySkillId: "s-b\(band)",
                sortOrder: 0, xpReward: 10, exercises: exercises
            )
            units.append(LearningUnit(
                id: "u-b\(band)", bandId: "math-b\(band)", title: "U\(band)",
                icon: "⭐", sortOrder: band, lessons: [lesson]
            ))
            probes.append(PlacementProbe(bandNumber: band, exerciseIds: exercises.map(\.id)))
        }
        return SubjectPack(
            subjectId: "math", version: 1, generatedAt: "now",
            bands: bands,
            skills: (1...5).map { Skill(id: "s-b\($0)", bandId: "math-b\($0)", title: "S", sortOrder: $0) },
            units: units,
            placementProbes: probes
        )
    }

    private func run(_ session: PlacementSession, answers: (Int) -> Bool) {
        var guardCount = 0
        while !session.isComplete && guardCount < 30 {
            session.submit(correct: answers(session.currentBand))
            guardCount += 1
        }
        XCTAssertTrue(session.isComplete, "placement never completed")
    }

    func testExplicitStartBandIsUsed() {
        let session = PlacementSession(pack: makePack(), startBand: 3, maxBand: 8)
        XCTAssertEqual(session.currentBand, 3, "staircase starts at the given band")
    }

    func testAllCorrectClimbsToTopBand() {
        let session = PlacementSession(pack: makePack())
        run(session) { _ in true }
        XCTAssertEqual(session.placementBand, 5)
    }

    func testAllWrongDescendsToBandOne() {
        let session = PlacementSession(pack: makePack())
        run(session) { _ in false }
        XCTAssertEqual(session.placementBand, 1)
    }

    func testPassesUpToBandThreeFailsAbove() {
        let session = PlacementSession(pack: makePack())
        run(session) { band in band <= 3 }
        XCTAssertEqual(session.placementBand, 3, "pass 3, fail 4 → reversal stops at 3")
    }

    func testFailsThreePassesBelowStopsAtTwo() {
        let session = PlacementSession(pack: makePack())
        run(session) { band in band <= 2 }
        XCTAssertEqual(session.placementBand, 2, "fail 3, pass 2 → reversal, ceiling is 2")
    }

    // MARK: - Age anchor mapping (pure TuningConstants math)

    func testNominalBandMapsAgeMinusThreeClamped() {
        XCTAssertEqual(TuningConstants.nominalBand(forAge: 3), 1, "below range clamps to 1")
        XCTAssertEqual(TuningConstants.nominalBand(forAge: 4), 1)
        XCTAssertEqual(TuningConstants.nominalBand(forAge: 7), 4)
        XCTAssertEqual(TuningConstants.nominalBand(forAge: 10), 7)
        XCTAssertEqual(TuningConstants.nominalBand(forAge: 11), 8)
        XCTAssertEqual(TuningConstants.nominalBand(forAge: 15), 8, "above range clamps to 8")
    }

    func testStartBandIsOneBelowNominalFlooredAtOne() {
        XCTAssertEqual(TuningConstants.placementStartBand(forAge: 4), 1)
        XCTAssertEqual(TuningConstants.placementStartBand(forAge: 5), 1)
        XCTAssertEqual(TuningConstants.placementStartBand(forAge: 7), 3)
        XCTAssertEqual(TuningConstants.placementStartBand(forAge: 10), 6)
    }

    func testMaxBandIsTwoAboveNominalCappedAtEight() {
        XCTAssertEqual(TuningConstants.placementMaxBand(forAge: 4), 3)
        XCTAssertEqual(TuningConstants.placementMaxBand(forAge: 7), 6)
        XCTAssertEqual(TuningConstants.placementMaxBand(forAge: 9), 8)
        XCTAssertEqual(TuningConstants.placementMaxBand(forAge: 10), 8)
    }

    // MARK: - Age-derived bands in the staircase

    func testPassingMaxBandIsTerminal() {
        let session = PlacementSession(pack: makePack(), startBand: 2, maxBand: 3)
        run(session) { _ in true }
        XCTAssertEqual(session.placementBand, 3, "passing maxBand places there; bands 4–5 stay for jump-ahead")
    }

    func testStartAndMaxBandsClampToBandsWithProbes() {
        // Pack has bands 1–5 only: start 6 and max 8 both clamp to 5.
        let session = PlacementSession(pack: makePack(), startBand: 6, maxBand: 8)
        XCTAssertEqual(session.currentBand, 5)
        run(session) { _ in true }
        XCTAssertEqual(session.placementBand, 5)
    }

    func testMaxBandNeverClampsBelowStartBand() {
        // Both clamp to band 5; maxBand is lifted to startBand, so passing
        // the start band is terminal rather than trapping the session.
        let session = PlacementSession(pack: makePack(), startBand: 8, maxBand: 5)
        XCTAssertEqual(session.currentBand, 5)
        session.submit(correct: true)
        session.submit(correct: true)
        XCTAssertTrue(session.isComplete)
        XCTAssertEqual(session.placementBand, 5)
    }

    // MARK: - Fast-rescue (anchored too high)

    func testFastRescueDescendsTwoBandsBeforeFirstCorrect() {
        let session = PlacementSession(pack: makePack(), startBand: 5, maxBand: 5)
        session.submit(correct: false)
        session.submit(correct: false)
        XCTAssertEqual(session.currentBand, 3, "0/2 with nothing right yet drops two bands")
        session.submit(correct: false)
        session.submit(correct: false)
        XCTAssertEqual(session.currentBand, 1, "still nothing right: two more down")
    }

    func testFastRescueClampsToLowestAvailableBand() {
        let session = PlacementSession(pack: makePack(), startBand: 2, maxBand: 5)
        session.submit(correct: false)
        session.submit(correct: false)
        XCTAssertEqual(session.currentBand, 1, "only one band below: rescue lands on the lowest")
    }

    func testNormalDescentAfterFirstCorrectAnswer() {
        let session = PlacementSession(pack: makePack(), startBand: 4, maxBand: 5)
        // 1/1 split decided wrong → fail band 4; the correct answer already
        // disarmed fast-rescue, so descend one band only.
        session.submit(correct: true)
        session.submit(correct: false)
        XCTAssertEqual(session.currentBand, 3, "after the first correct answer, failures descend one band")
    }

    func testQuestionCapIsRespected() {
        let session = PlacementSession(pack: makePack())
        var asked = 0
        while !session.isComplete && asked < 50 {
            // Alternate answers within each band to force tiebreaks and drag it out.
            session.submit(correct: asked % 2 == 0)
            asked += 1
        }
        XCTAssertLessThanOrEqual(session.askedCount, TuningConstants.placementMaxQuestions)
    }

    func testEmptyProbesCompletesImmediately() {
        var pack = makePack()
        pack = SubjectPack(
            subjectId: pack.subjectId, version: 1, generatedAt: "now",
            bands: pack.bands, skills: pack.skills, units: pack.units, placementProbes: []
        )
        let session = PlacementSession(pack: pack)
        XCTAssertTrue(session.isComplete)
        XCTAssertEqual(session.placementBand, 1)
    }
}
