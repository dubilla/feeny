import Foundation
import Observation

/// Pure lesson-flow engine: queue, retry re-queueing, first-try accuracy.
/// Duolingo rule: a missed exercise comes back at the end of the lesson until
/// answered right, capped at `maxRetries` attempts after the first.
/// No UI, no persistence — unit-tested directly.
@Observable
final class LessonSession {
    enum Phase: Equatable {
        case answering
        /// `revealAnswer` = retries exhausted; views highlight the right answer.
        case feedback(correct: Bool, revealAnswer: Bool)
        case complete
    }

    static let maxRetries = 2

    let lesson: Lesson
    private(set) var queue: [Exercise]
    private(set) var phase: Phase = .answering

    /// Exercises answered correctly on their very first attempt.
    private(set) var firstTryCorrect: Set<String> = []
    private var attempted: Set<String> = []
    private var failures: [String: Int] = [:]
    private var resolved: Set<String> = []

    private let totalCount: Int

    init(lesson: Lesson) {
        let playable = lesson.playableExercises
        self.lesson = lesson
        self.queue = playable
        self.totalCount = playable.count
    }

    var current: Exercise? { queue.first }

    /// 0...1, drives the top progress bar. Counts resolved exercises only.
    var progress: Double {
        totalCount == 0 ? 1 : Double(resolved.count) / Double(totalCount)
    }

    var firstTryAccuracy: Double {
        totalCount == 0 ? 1 : Double(firstTryCorrect.count) / Double(totalCount)
    }

    var isPerfect: Bool { firstTryAccuracy >= 1.0 }

    func submit(correct: Bool) {
        guard case .answering = phase, let exercise = current else { return }

        let isFirstAttempt = !attempted.contains(exercise.id)
        attempted.insert(exercise.id)

        if correct {
            if isFirstAttempt {
                firstTryCorrect.insert(exercise.id)
            }
            resolved.insert(exercise.id)
            phase = .feedback(correct: true, revealAnswer: false)
        } else {
            let failureCount = (failures[exercise.id] ?? 0) + 1
            failures[exercise.id] = failureCount
            let outOfRetries = failureCount > Self.maxRetries
            if outOfRetries {
                resolved.insert(exercise.id)
            }
            phase = .feedback(correct: false, revealAnswer: outOfRetries)
        }
    }

    /// Moves past the feedback phase to the next exercise (or completion).
    func advance() {
        guard case .feedback(let correct, let revealAnswer) = phase, let exercise = current else { return }
        queue.removeFirst()
        if !correct && !revealAnswer {
            queue.append(exercise)
        }
        phase = queue.isEmpty ? .complete : .answering
    }
}
