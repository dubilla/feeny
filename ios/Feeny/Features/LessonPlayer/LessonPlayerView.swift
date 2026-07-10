import SwiftUI

/// Full-screen lesson experience: progress bar, spoken prompt, one exercise
/// at a time, feedback, then the completion celebration.
struct LessonPlayerView: View {
    /// Challenge = the jump-ahead quiz: pass marks the whole unit complete,
    /// fail is a cheerful no-op (no XP, nothing recorded).
    enum Mode: Equatable {
        case normal
        case challenge(unitId: String, subjectId: String)
    }

    /// After the stars, the ceremony can keep going: egg hatch (unit finished),
    /// then level-up (XP crossed a threshold) — in that order, each optional.
    private enum CeremonyStage {
        case stars
        case eggHatch
        case levelUp
    }

    @State private var session: LessonSession
    private let mode: Mode
    /// The unit this lesson belongs to, when launched from the map — needed to
    /// notice "that was the unit's last lesson". Review lessons pass nil.
    private let unit: LearningUnit?
    private let subjectId: String?
    @Environment(SpeechService.self) private var speech
    @Environment(SoundEffects.self) private var sounds
    @Environment(ProgressStore.self) private var progressStore
    @Environment(\.dismiss) private var dismiss

    @State private var rewards: ProgressStore.LessonRewards?
    @State private var ceremonyStage: CeremonyStage = .stars
    @State private var completionRecorded = false
    @State private var volumeNudgeDismissed = false

    init(lesson: Lesson, mode: Mode = .normal, unit: LearningUnit? = nil, subjectId: String? = nil) {
        _session = State(initialValue: LessonSession(lesson: lesson))
        self.mode = mode
        self.unit = unit
        self.subjectId = subjectId
    }

    private var challengePassed: Bool {
        session.firstTryAccuracy >= TuningConstants.challengePassAccuracy
    }

    private var completionTitle: String {
        switch mode {
        case .normal: "You did it!"
        case .challenge: challengePassed ? "Challenge champion!" : "So close!"
        }
    }

    var body: some View {
        ZStack {
            Theme.background.ignoresSafeArea()

            if case .complete = session.phase {
                ceremonyView
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
                .task(id: exerciseInstanceId(exercise)) {
                    // One gentle auto-replay if the kid stalls — usually
                    // means they missed the prompt. The id change on advance
                    // cancels the pending replay. 15s, not less: counting a
                    // big group legitimately takes past 10s, and a replay
                    // mid-count is noise, not help.
                    try? await Task.sleep(for: .seconds(15))
                    guard !Task.isCancelled else { return }
                    if case .answering = session.phase {
                        speakPrompt(exercise)
                    }
                }
            }
        }
        .overlay(alignment: .top) {
            if speech.shouldNudgeVolume && !volumeNudgeDismissed {
                VolumeNudgeBanner {
                    withAnimation { volumeNudgeDismissed = true }
                }
                .padding(.top, 16)
                .transition(.move(edge: .top).combined(with: .opacity))
            }
        }
        .animation(.spring(response: 0.4, dampingFraction: 0.8), value: speech.shouldNudgeVolume)
        .onChange(of: session.phase) { _, newPhase in
            handlePhaseChange(newPhase)
        }
        .onDisappear { speech.stop() }
    }

    // MARK: - Ceremony

    @ViewBuilder
    private var ceremonyView: some View {
        switch ceremonyStage {
        case .stars:
            LessonCompleteView(
                title: completionTitle,
                subtitle: (rewards?.unitCompleted ?? false)
                    ? "Whole unit finished! +\(GameEconomy.unitCompletionXP) XP bonus"
                    : nil,
                accuracy: session.firstTryAccuracy,
                xpAwarded: rewards?.xpEarned ?? 0
            ) {
                advancePastStars()
            }
        case .eggHatch:
            EggHatchView(subjectId: eggSubjectId ?? "math") {
                advancePastEgg()
            }
        case .levelUp:
            LevelUpView(level: GameEconomy.level(forXP: progressStore.totalXP)) {
                dismiss()
            }
        }
    }

    private var eggSubjectId: String? {
        if case .challenge(_, let subjectId) = mode { return subjectId }
        return subjectId
    }

    private func advancePastStars() {
        if let rewards, rewards.eggEarned, let eggSubjectId,
           progressStore.pendingEggCount(subjectId: eggSubjectId) > 0 {
            withAnimation { ceremonyStage = .eggHatch }
        } else {
            advanceToLevelUpOrDismiss()
        }
    }

    private func advancePastEgg() {
        advanceToLevelUpOrDismiss()
    }

    /// Checked last so sparkle-bonus XP from the hatch counts toward the level.
    private func advanceToLevelUpOrDismiss() {
        if let rewards, GameEconomy.level(forXP: progressStore.totalXP) > rewards.levelBefore {
            withAnimation { ceremonyStage = .levelUp }
        } else {
            dismiss()
        }
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
        case .tapMatchPairs(let payload):
            TapMatchPairsView(payload: payload, revealAnswer: revealAnswer) { session.submit(correct: $0) }
        case .listenAndPick(let payload):
            ListenAndPickView(payload: payload, revealAnswer: revealAnswer) { session.submit(correct: $0) }
        case .ordering(let payload):
            OrderingView(payload: payload, revealAnswer: revealAnswer) { session.submit(correct: $0) }
        case .fillBlankWordBank(let payload):
            FillBlankWordBankView(payload: payload, revealAnswer: revealAnswer) { session.submit(correct: $0) }
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
                sounds.play(.correct)
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
            guard !completionRecorded else { break }
            completionRecorded = true
            switch mode {
            case .normal:
                rewards = progressStore.recordCompletion(
                    lesson: session.lesson,
                    firstTryAccuracy: session.firstTryAccuracy,
                    unit: unit,
                    subjectId: subjectId
                )
            case .challenge(let unitId, let subjectId):
                rewards = challengePassed
                    ? progressStore.completeUnitViaChallenge(unitId: unitId, subjectId: subjectId)
                    : nil
            }
        case .answering:
            break
        }
    }
}
