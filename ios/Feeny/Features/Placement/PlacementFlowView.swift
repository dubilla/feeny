import SwiftUI

/// The "warm-up adventure": a short quiz that finds each kid's starting band.
/// Framing is deliberately warm — no wrong-answer buzzer, no red, every
/// answer gets a cheerful neutral response (a 5-year-old failing band-5
/// probes is the system working, not the kid failing).
struct PlacementFlowView: View {
    let pack: SubjectPack

    @State private var session: PlacementSession
    @State private var stage: Stage
    @State private var xpAwarded = 0
    @State private var volumeNudgeDismissed = false
    @Environment(SpeechService.self) private var speech
    @Environment(SoundEffects.self) private var sounds
    @Environment(ProgressStore.self) private var progressStore
    @Environment(\.dismiss) private var dismiss

    private enum Stage: Equatable {
        case askAge
        case intro
        case question
        case interlude(String)
        case done
    }

    /// `kidAge` is the profile's `currentAge` snapshot. Nil (profiles from
    /// before ages existed) asks the kid first, then runs the warm-up.
    init(pack: SubjectPack, kidAge: Int?) {
        self.pack = pack
        _stage = State(initialValue: kidAge == nil ? .askAge : .intro)
        // Placeholder; the real session is built when the warm-up starts,
        // once the age (and its start/max bands) is settled.
        _session = State(initialValue: PlacementSession(pack: pack))
    }

    var body: some View {
        ZStack {
            Theme.background.ignoresSafeArea()
            switch stage {
            case .askAge:
                askAge
            case .intro:
                intro
            case .question:
                if let exercise = session.currentExercise {
                    questionView(exercise)
                } else {
                    Color.clear.onAppear { finishIfComplete() }
                }
            case .interlude(let text):
                interludeView(text)
            case .done:
                doneView
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
    }

    /// Age-ask for profiles created before ages existed. Same big-button UI
    /// as profile creation; the answer is saved so it's never asked again.
    private var askAge: some View {
        VStack(spacing: Theme.Space.xl) {
            FeenyMascot(pose: .idle, size: 130)
            Text("How old are you?")
                .font(Theme.display(48))
                .foregroundStyle(Theme.ink)
            Text("This helps us find the perfect starting spot")
                .font(Theme.body(26))
                .foregroundStyle(Theme.ink.opacity(0.7))
            AgePicker { age in
                progressStore.setAge(years: age)
                withAnimation { stage = .intro }
            }
        }
        .padding(Theme.Space.xxl)
        .onAppear {
            let name = progressStore.activeProfile?.name ?? ""
            speech.speak(name.isEmpty ? "How old are you?" : "How old are you, \(name)?")
        }
    }

    /// Feeny invites the kid along — the mascot is the guide, not a quiz.
    private var intro: some View {
        VStack(spacing: Theme.Space.xl) {
            FeenyMascot(pose: .wave, size: 200)
            Text("Warm-Up Adventure!")
                .font(Theme.display(52))
                .foregroundStyle(Theme.ink)
            Text("Let's find the perfect spot for you to start.\nJust try your best — every answer helps!")
                .font(Theme.body(26))
                .foregroundStyle(Theme.ink.opacity(0.7))
                .multilineTextAlignment(.center)
            Button {
                startQuestions()
            } label: {
                Text("Let's Go!")
                    .font(Theme.title(30))
                    .foregroundStyle(.white)
                    .padding(.horizontal, 56)
                    .frame(height: Theme.minTouchTarget)
                    .background(Capsule().fill(Theme.accent))
            }
            .buttonStyle(SquishyButtonStyle())
            .accessibilityIdentifier("start-placement")
        }
        .padding(Theme.Space.xxl)
        .onAppear {
            speech.speak("Let's go on a warm up adventure! Just try your best. Every answer helps!")
        }
    }

    private func questionView(_ exercise: Exercise) -> some View {
        VStack(spacing: 0) {
            HStack(spacing: Theme.Space.m) {
                // The guide stays at the kid's side for the whole walk.
                FeenyMascot(pose: .idle, size: 56)
                ProgressView(value: session.progress)
                    .progressViewStyle(.linear)
                    .tint(Theme.gold)
                    .scaleEffect(y: 3)
                    .animation(.spring, value: session.progress)
            }
            .padding(.bottom, Theme.Space.xs)

            if let prompt = exercise.payload.prompt {
                HStack(spacing: 20) {
                    SpeakerButton(text: prompt.spoken)
                    Text(prompt.text)
                        .font(Theme.title(30))
                        .foregroundStyle(Theme.ink)
                        .minimumScaleFactor(0.6)
                    Spacer()
                }
                .padding(.top, 8)
            }

            Spacer()
            exerciseBody(exercise)
                .id(exercise.id)
            Spacer()
        }
        .padding(24)
        .onAppear { speakPrompt(exercise) }
        .task(id: exercise.id) {
            // One gentle auto-replay if the kid stalls — mirrors the lesson
            // player; a stalled pre-reader here hasn't learned the speaker
            // button yet. The id change on advance cancels the pending replay.
            try? await Task.sleep(for: .seconds(15))
            guard !Task.isCancelled else { return }
            if case .question = stage, session.currentExercise?.id == exercise.id {
                speakPrompt(exercise)
            }
        }
    }

    @ViewBuilder
    private func exerciseBody(_ exercise: Exercise) -> some View {
        switch exercise.payload {
        case .multipleChoiceImage(let payload):
            MultipleChoiceImageView(payload: payload, revealAnswer: false) { answer($0) }
        case .countObjects(let payload):
            CountObjectsView(payload: payload, revealAnswer: false) { answer($0) }
        case .tapMatchPairs(let payload):
            TapMatchPairsView(payload: payload, revealAnswer: false) { answer($0) }
        case .listenAndPick(let payload):
            ListenAndPickView(payload: payload, revealAnswer: false) { answer($0) }
        case .ordering(let payload):
            OrderingView(payload: payload, revealAnswer: false) { answer($0) }
        case .fillBlankWordBank(let payload):
            FillBlankWordBankView(payload: payload, revealAnswer: false) { answer($0) }
        case .unsupported:
            Color.clear.onAppear { answer(true) }
        }
    }

    /// Feeny cheers between questions — motion + a tiny palette tick.
    private func interludeView(_ text: String) -> some View {
        VStack(spacing: Theme.Space.l) {
            FeenyMascot(pose: .celebrate, size: 150)
            Text(text)
                .font(Theme.display(40))
                .foregroundStyle(Theme.accent)
        }
        .transition(.scale.combined(with: .opacity))
        .onAppear { sounds.play(.tick) }
    }

    /// Arrival: the kid's starting *place*, by name — never a band number.
    private var doneView: some View {
        let band = pack.bands.first { $0.bandNumber == session.placementBand }
        return VStack(spacing: Theme.Space.l) {
            ConfettiView(count: 50)
            FeenyMascot(pose: .celebrate, size: 190)
            Text("You're all set!")
                .font(Theme.display(50))
                .foregroundStyle(Theme.ink)
            if let band {
                VStack(spacing: Theme.Space.xs) {
                    Text("Your adventure starts in")
                        .font(Theme.body(26))
                        .foregroundStyle(Theme.ink.opacity(0.7))
                    Text(band.title)
                        .font(Theme.displayBold(44))
                        .foregroundStyle(Theme.accent)
                }
            }
            // White-on-gold chip (home-cluster idiom); raw gold text on the
            // cream background fails even the large-text contrast floor.
            Text("+\(xpAwarded) XP")
                .font(Theme.displayBold(32))
                .foregroundStyle(.white)
                .padding(.horizontal, Theme.Space.l)
                .padding(.vertical, Theme.Space.s)
                .background(Capsule().fill(Theme.gold))
            Button {
                dismiss()
            } label: {
                Text("See My Path!")
                    .font(Theme.title(28))
                    .foregroundStyle(.white)
                    .padding(.horizontal, 48)
                    .frame(height: Theme.minTouchTarget)
                    .background(Capsule().fill(Theme.accent))
            }
            .buttonStyle(SquishyButtonStyle())
            .accessibilityIdentifier("finish-placement")
        }
        .onAppear {
            sounds.play(.celebrate)
            let bandTitle = band?.title ?? "your starting spot"
            speech.speak("You're all set! Your adventure starts in \(bandTitle)!")
        }
    }

    /// Builds the real staircase anchored to the kid's age (start one band
    /// easy, cap two above nominal) — or the un-anchored fallback if the age
    /// is somehow still missing — and serves the first question.
    private func startQuestions() {
        if let age = progressStore.activeProfile?.currentAge {
            session = PlacementSession(
                pack: pack,
                startBand: TuningConstants.placementStartBand(forAge: age),
                maxBand: TuningConstants.placementMaxBand(forAge: age)
            )
        } else {
            session = PlacementSession(pack: pack)
        }
        stage = .question
    }

    /// Neutral, warm transition regardless of correctness.
    private func answer(_ correct: Bool) {
        session.submit(correct: correct)
        // No "Nice try!" here: the cheer is correctness-blind, and "nice try"
        // reads as consolation — wrong after a correct answer.
        let cheer = ["Let's keep going!", "You're doing great!", "On to the next one!"].randomElement()!
        withAnimation { stage = .interlude(cheer) }
        Task {
            try? await Task.sleep(for: .milliseconds(900))
            finishIfComplete()
        }
    }

    private func finishIfComplete() {
        if session.isComplete {
            if xpAwarded == 0 {
                xpAwarded = progressStore.recordPlacement(pack: pack, bandNumber: session.placementBand)
            }
            withAnimation { stage = .done }
        } else {
            withAnimation { stage = .question }
        }
    }

    private func speakPrompt(_ exercise: Exercise) {
        if let prompt = exercise.payload.prompt {
            speech.speak(prompt.spoken)
        }
    }
}
