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

    func testAllCorrectClimbsToTopBand() {
        let session = PlacementSession(pack: makePack())
        XCTAssertEqual(session.currentBand, 3, "staircase starts at band 3")
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
