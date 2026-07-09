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
        VStack(spacing: 32) {
            Text("How old are you?")
                .font(Theme.title(48))
                .foregroundStyle(Theme.ink)
            Text("This helps us find the perfect starting spot")
                .font(Theme.body(26))
                .foregroundStyle(Theme.ink.opacity(0.7))
            AgePicker { age in
                progressStore.setAge(years: age)
                withAnimation { stage = .intro }
            }
        }
        .padding(60)
        .onAppear {
            let name = progressStore.activeProfile?.name ?? ""
            speech.speak(name.isEmpty ? "How old are you?" : "How old are you, \(name)?")
        }
    }

    private var intro: some View {
        VStack(spacing: 32) {
            Text("🧭")
                .font(.system(size: 110))
            Text("Warm-Up Adventure!")
                .font(Theme.title(48))
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
        .padding(60)
        .onAppear {
            speech.speak("Let's go on a warm up adventure! Just try your best. Every answer helps!")
        }
    }

    private func questionView(_ exercise: Exercise) -> some View {
        VStack(spacing: 0) {
            HStack(spacing: 16) {
                Text("🧭")
                    .font(.system(size: 40))
                ProgressView(value: session.progress)
                    .progressViewStyle(.linear)
                    .tint(Theme.gold)
                    .scaleEffect(y: 3)
                    .animation(.spring, value: session.progress)
            }
            .padding(.bottom, 8)

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
            try? await Task.sleep(for: .seconds(10))
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

    private func interludeView(_ text: String) -> some View {
        Text(text)
            .font(Theme.title(40))
            .foregroundStyle(Theme.accent)
            .transition(.scale.combined(with: .opacity))
    }

    private var doneView: some View {
        let band = pack.bands.first { $0.bandNumber == session.placementBand }
        return VStack(spacing: 28) {
            ConfettiView(count: 50)
            Text("🎉")
                .font(.system(size: 100))
            Text("You're all set!")
                .font(Theme.title(48))
                .foregroundStyle(Theme.ink)
            if let band {
                Text("Your adventure starts in \(band.title)!")
                    .font(Theme.body(28))
                    .foregroundStyle(Theme.ink.opacity(0.75))
            }
            Text("+\(xpAwarded) XP")
                .font(Theme.title(38))
                .foregroundStyle(Theme.accent)
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
        let cheer = ["Nice try!", "Let's keep going!", "You're doing great!", "On to the next one!"].randomElement()!
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
