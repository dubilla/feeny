import SwiftUI

/// Full-screen lesson experience: progress bar, spoken prompt, one exercise
/// at a time, feedback, then the completion celebration.
struct LessonPlayerView: View {
    @State private var session: LessonSession
    @Environment(SpeechService.self) private var speech
    @Environment(ProgressStore.self) private var progressStore
    @Environment(\.dismiss) private var dismiss

    @State private var xpAwarded: Int?

    init(lesson: Lesson) {
        _session = State(initialValue: LessonSession(lesson: lesson))
    }

    var body: some View {
        ZStack {
            Theme.background.ignoresSafeArea()

            if case .complete = session.phase {
                LessonCompleteView(
                    accuracy: session.firstTryAccuracy,
                    xpAwarded: xpAwarded ?? 0
                ) {
                    dismiss()
                }
            } else if let exercise = session.current {
                VStack(spacing: 0) {
                    header
                    promptBar(for: exercise)
                        .padding(.top, 8)
                    Spacer()
                    exerciseView(for: exercise)
                        .id(exerciseInstanceId(exercise))
                    Spacer()
                    feedbackArea
                        .frame(height: 130)
                }
                .padding(24)
                .onAppear { speakPrompt(exercise) }
                .onChange(of: exercise.id) {
                    speakPrompt(exercise)
                }
            }
        }
        .onChange(of: session.phase) { _, newPhase in
            handlePhaseChange(newPhase)
        }
        .onDisappear { speech.stop() }
    }

    private var header: some View {
        HStack(spacing: 16) {
            Button {
                speech.stop()
                dismiss()
            } label: {
                Image(systemName: "xmark")
                    .font(.system(size: 22, weight: .bold))
                    .foregroundStyle(Theme.ink.opacity(0.4))
                    .frame(width: 56, height: 56)
            }
            .accessibilityLabel("Leave lesson")

            ProgressView(value: session.progress)
                .progressViewStyle(.linear)
                .tint(Theme.correct)
                .scaleEffect(y: 3)
                .animation(.spring, value: session.progress)
        }
    }

    private func promptBar(for exercise: Exercise) -> some View {
        HStack(spacing: 20) {
            if let prompt = exercise.payload.prompt {
                SpeakerButton(text: prompt.spoken)
                Text(prompt.text)
                    .font(Theme.title(30))
                    .foregroundStyle(Theme.ink)
                    .minimumScaleFactor(0.6)
            }
            Spacer()
        }
    }

    @ViewBuilder
    private func exerciseView(for exercise: Exercise) -> some View {
        let revealAnswer = isRevealingAnswer
        switch exercise.payload {
        case .multipleChoiceImage(let payload):
            MultipleChoiceImageView(payload: payload, revealAnswer: revealAnswer) { session.submit(correct: $0) }
        case .countObjects(let payload):
            CountObjectsView(payload: payload, revealAnswer: revealAnswer) { session.submit(correct: $0) }
        case .unsupported:
            // playableExercises filters these out; defensive fallback only.
            Color.clear.onAppear { session.submit(correct: true) }
        }
    }

    private var isRevealingAnswer: Bool {
        if case .feedback(_, let reveal) = session.phase { return reveal }
        return false
    }

    @ViewBuilder
    private var feedbackArea: some View {
        switch session.phase {
        case .feedback(true, _):
            feedbackBanner(
                text: ["Great job!", "You got it!", "Amazing!", "Way to go!"].randomElement()!,
                color: Theme.correct,
                showContinue: false
            )
        case .feedback(false, let reveal):
            feedbackBanner(
                text: reveal ? "The answer is shown in green!" : "We'll try that one again!",
                color: Theme.incorrect,
                showContinue: true
            )
        default:
            Color.clear
        }
    }

    private func feedbackBanner(text: String, color: Color, showContinue: Bool) -> some View {
        HStack {
            Text(text)
                .font(Theme.title(28))
                .foregroundStyle(.white)
            Spacer()
            if showContinue {
                Button {
                    session.advance()
                } label: {
                    Text("Continue")
                        .font(Theme.title(24))
                        .foregroundStyle(color)
                        .padding(.horizontal, 32)
                        .frame(height: Theme.minTouchTarget - 20)
                        .background(Capsule().fill(.white))
                }
                .buttonStyle(SquishyButtonStyle())
            }
        }
        .padding(.horizontal, 28)
        .frame(maxWidth: .infinity)
        .frame(height: 100)
        .background(RoundedRectangle(cornerRadius: Theme.cornerRadius).fill(color))
        .transition(.move(edge: .bottom).combined(with: .opacity))
    }

    /// Retries re-serve the same exercise id; the instance id forces fresh @State
    /// in the exercise view each time it comes off the queue.
    private func exerciseInstanceId(_ exercise: Exercise) -> String {
        "\(exercise.id)-\(Int(session.progress * 1000))-\(session.queue.count)"
    }

    private func speakPrompt(_ exercise: Exercise) {
        if let prompt = exercise.payload.prompt {
            speech.speak(prompt.spoken)
        }
    }

    private func handlePhaseChange(_ phase: LessonSession.Phase) {
        switch phase {
        case .feedback(let correct, _):
            if correct {
                // Correct answers auto-advance — snappy, no extra tap for a 5-year-old.
                Task {
                    try? await Task.sleep(for: .seconds(1.1))
                    if case .feedback(true, _) = session.phase {
                        withAnimation { session.advance() }
                    }
                }
            }
        case .complete:
            speech.stop()
            if xpAwarded == nil {
                xpAwarded = progressStore.recordCompletion(
                    lesson: session.lesson,
                    firstTryAccuracy: session.firstTryAccuracy
                )
            }
        case .answering:
            break
        }
    }
}
