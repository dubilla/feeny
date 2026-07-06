import XCTest
@testable import Feeny

final class LessonSessionTests: XCTestCase {
    private func makeLesson(exerciseCount: Int) -> Lesson {
        let exercises = (0..<exerciseCount).map { index in
            Exercise(
                id: "e\(index)",
                payload: .countObjects(CountObjectsPayload(
                    prompt: ExercisePrompt(text: "How many?", spokenText: nil),
                    object: Visual(kind: .emoji, value: "⭐"),
                    count: 3,
                    choices: [2, 3, 4]
                ))
            )
        }
        return Lesson(
            id: "lesson",
            title: "Test",
            primarySkillId: "skill",
            sortOrder: 0,
            xpReward: 10,
            exercises: exercises
        )
    }

    func testAllCorrectFirstTryIsPerfect() {
        let session = LessonSession(lesson: makeLesson(exerciseCount: 3))
        for _ in 0..<3 {
            session.submit(correct: true)
            session.advance()
        }
        XCTAssertEqual(session.phase, .complete)
        XCTAssertEqual(session.firstTryAccuracy, 1.0)
        XCTAssertTrue(session.isPerfect)
    }

    func testMissedExerciseComesBackAtTheEnd() {
        let session = LessonSession(lesson: makeLesson(exerciseCount: 2))
        let missedId = session.current!.id

        session.submit(correct: false)
        XCTAssertEqual(session.phase, .feedback(correct: false, revealAnswer: false))
        session.advance()

        // e1 is next; the missed e0 is re-queued behind it.
        XCTAssertEqual(session.current?.id, "e1")
        session.submit(correct: true)
        session.advance()

        XCTAssertEqual(session.current?.id, missedId)
        session.submit(correct: true)
        session.advance()

        XCTAssertEqual(session.phase, .complete)
        // Correct on retry never counts toward first-try accuracy.
        XCTAssertEqual(session.firstTryAccuracy, 0.5)
    }

    func testAnswerRevealedAfterMaxRetriesAndLessonStillCompletes() {
        let session = LessonSession(lesson: makeLesson(exerciseCount: 1))

        session.submit(correct: false) // attempt 1
        XCTAssertEqual(session.phase, .feedback(correct: false, revealAnswer: false))
        session.advance()

        session.submit(correct: false) // attempt 2
        XCTAssertEqual(session.phase, .feedback(correct: false, revealAnswer: false))
        session.advance()

        session.submit(correct: false) // attempt 3 — retries exhausted, reveal
        XCTAssertEqual(session.phase, .feedback(correct: false, revealAnswer: true))
        session.advance()

        XCTAssertEqual(session.phase, .complete)
        XCTAssertEqual(session.firstTryAccuracy, 0.0)
    }

    func testProgressCountsResolvedExercises() {
        let session = LessonSession(lesson: makeLesson(exerciseCount: 4))
        XCTAssertEqual(session.progress, 0)
        session.submit(correct: true)
        session.advance()
        XCTAssertEqual(session.progress, 0.25)
    }

    func testUnsupportedExercisesAreExcluded() {
        var lesson = makeLesson(exerciseCount: 2)
        let withUnsupported = Lesson(
            id: lesson.id,
            title: lesson.title,
            primarySkillId: lesson.primarySkillId,
            sortOrder: lesson.sortOrder,
            xpReward: lesson.xpReward,
            exercises: lesson.exercises + [Exercise(id: "future", payload: .unsupported(type: "hologram3D"))]
        )
        lesson = withUnsupported
        let session = LessonSession(lesson: lesson)
        XCTAssertEqual(session.queue.count, 2)
    }
}
