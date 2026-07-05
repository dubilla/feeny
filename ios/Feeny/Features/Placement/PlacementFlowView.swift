import SwiftUI

/// The "warm-up adventure": a short quiz that finds each kid's starting band.
/// Framing is deliberately warm — no wrong-answer buzzer, no red, every
/// answer gets a cheerful neutral response (a 5-year-old failing band-5
/// probes is the system working, not the kid failing).
struct PlacementFlowView: View {
    let pack: SubjectPack

    @State private var session: PlacementSession
    @State private var stage: Stage = .intro
    @State private var xpAwarded = 0
    @Environment(SpeechService.self) private var speech
    @Environment(ProgressStore.self) private var progressStore
    @Environment(\.dismiss) private var dismiss

    private enum Stage: Equatable {
        case intro
        case question
        case interlude(String)
        case done
    }

    init(pack: SubjectPack) {
        self.pack = pack
        _session = State(initialValue: PlacementSession(pack: pack))
    }

    var body: some View {
        ZStack {
            Theme.background.ignoresSafeArea()
            switch stage {
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
                stage = .question
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
