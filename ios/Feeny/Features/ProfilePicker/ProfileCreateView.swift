import SwiftUI

/// Build your buddy (face + color), (optionally) type a name, tap your age,
/// then pick your starter Feenling. Avatar-first because five-year-olds pick
/// pictures, not keyboards. The age anchors placement — stored, never shown.
struct ProfileCreateView: View {
    var canCancel: Bool = false
    var onDone: () -> Void = {}

    @Environment(ProgressStore.self) private var progressStore
    @Environment(SpeechService.self) private var speech
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    private enum Step {
        case buddy
        case age
        case starter
    }

    @State private var step: Step = .buddy
    @State private var goingBack = false
    @State private var selectedFace: AvatarFace?
    @State private var selectedTint: AvatarTint = .violet
    @State private var name = ""
    @State private var selectedAge: Int?

    private var selectedAvatar: String? {
        selectedFace.map { AvatarSpec(face: $0, tint: selectedTint).id }
    }

    private let columns = Array(repeating: GridItem(.fixed(124), spacing: 16), count: 4)

    var body: some View {
        VStack(spacing: Theme.Space.xl) {
            HStack {
                if canCancel || step != .buddy {
                    Button {
                        advance(back: true) {
                            switch step {
                            case .starter: step = .age
                            case .age: step = .buddy
                            case .buddy: onDone()
                            }
                        }
                    } label: {
                        Image(systemName: "chevron.left")
                            .font(.system(size: 26, weight: .bold))
                            .foregroundStyle(Theme.ink.opacity(0.5))
                            .frame(width: 64, height: 64)
                    }
                }
                Spacer()
            }

            // All wizard steps slide on the same curve (direction-aware;
            // Reduce Motion gets a crossfade instead of spatial movement).
            VStack(spacing: Theme.Space.xl) {
                switch step {
                case .buddy: buddyStep
                case .age: ageStep
                case .starter: starterStep
                }
            }
            .transition(stepTransition)
            .id(step)

            Spacer()
        }
        .padding(Theme.Space.xxl)
        .onAppear { speech.speak("Make your buddy! Pick a face and a color!") }
    }

    private var stepTransition: AnyTransition {
        if reduceMotion { return .opacity }
        let enter: Edge = goingBack ? .leading : .trailing
        let exit: Edge = goingBack ? .trailing : .leading
        return .asymmetric(
            insertion: .move(edge: enter).combined(with: .opacity),
            removal: .move(edge: exit).combined(with: .opacity)
        )
    }

    /// Step changes ride the settle curve (or a plain fade under RM).
    private func advance(back: Bool = false, _ change: () -> Void) {
        goingBack = back
        withAnimation(Theme.Motion.settle.resolved(reduceMotion: reduceMotion)) {
            change()
        }
    }

    // MARK: - Step 1: avatar + name

    @ViewBuilder
    private var buddyStep: some View {
        Text("Make your buddy!")
            .font(Theme.display(46))
            .foregroundStyle(Theme.ink)

        LazyVGrid(columns: columns, spacing: Theme.Space.m) {
            ForEach(AvatarFace.allCases) { face in
                Button {
                    selectedFace = face
                } label: {
                    AvatarFaceView(face: face, tint: selectedTint, size: 96)
                        .frame(width: 116, height: 116)
                        .background(Circle().fill(Theme.card))
                        .overlay(
                            Circle().stroke(
                                selectedFace == face ? Theme.accent : .clear,
                                lineWidth: 6
                            )
                        )
                        .scaleEffect(selectedFace == face ? 1.1 : 1.0)
                        .motion(Theme.Motion.press, value: selectedFace)
                }
                .buttonStyle(SquishyButtonStyle())
                .accessibilityIdentifier("avatar-option")
                .accessibilityLabel("\(face.rawValue) face")
            }
        }

        // Color swatches recolor the whole grid live.
        HStack(spacing: Theme.Space.m) {
            ForEach(AvatarTint.allCases) { tint in
                Button {
                    selectedTint = tint
                } label: {
                    Circle()
                        .fill(tint.main)
                        .frame(width: 56, height: 56)
                        .overlay(
                            Circle().stroke(
                                selectedTint == tint ? Theme.ink : .clear,
                                lineWidth: 5
                            )
                        )
                        .frame(width: Theme.minTouchTarget, height: Theme.minTouchTarget)
                }
                .buttonStyle(SquishyButtonStyle())
                .accessibilityIdentifier("tint-option")
                .accessibilityLabel("\(tint.rawValue) color")
            }
        }

        TextField("Your name (or skip it!)", text: $name)
            .font(Theme.title(28))
            .multilineTextAlignment(.center)
            .textFieldStyle(.plain)
            .padding(20)
            .frame(maxWidth: 440, minHeight: Theme.minTouchTarget)
            .background(RoundedRectangle(cornerRadius: 20).fill(Theme.card))
            .autocorrectionDisabled()

        Button {
            guard selectedFace != nil else { return }
            advance { step = .age }
            speech.speak(ageQuestion)
        } label: {
            Text("Let's Go!")
                .font(Theme.title(30))
                .foregroundStyle(.white)
                .padding(.horizontal, 64)
                .frame(height: Theme.minTouchTarget)
                .background(Capsule().fill(selectedFace == nil ? Color.gray.opacity(0.4) : Theme.accent))
        }
        .buttonStyle(SquishyButtonStyle())
        .disabled(selectedFace == nil)
        .accessibilityIdentifier("create-profile")
    }

    // MARK: - Step 2: age

    /// "How old are you, Maya?" — personalized when a name was typed.
    private var ageQuestion: String {
        let trimmed = name.trimmingCharacters(in: .whitespaces)
        return trimmed.isEmpty ? "How old are you?" : "How old are you, \(trimmed)?"
    }

    @ViewBuilder
    private var ageStep: some View {
        Text("How old are you?")
            .font(Theme.title(46))
            .foregroundStyle(Theme.ink)
        Text("This helps us find the perfect starting spot")
            .font(Theme.body(24))
            .foregroundStyle(Theme.ink.opacity(0.6))

        AgePicker { age in
            selectedAge = age
            advance { step = .starter }
            speech.speak("Now pick your first Feenling friend! It will come along on your adventure.")
        }
    }

    // MARK: - Step 3: starter Feenling

    @ViewBuilder
    private var starterStep: some View {
        Text("Pick your first Feenling!")
            .font(Theme.title(46))
            .foregroundStyle(Theme.ink)
        Text("Your little friend comes along on every adventure")
            .font(Theme.body(24))
            .foregroundStyle(Theme.ink.opacity(0.6))

        HStack(spacing: 32) {
            ForEach(CollectibleCatalog.starters) { starter in
                Button {
                    guard let avatar = selectedAvatar else { return }
                    progressStore.createProfile(
                        name: name,
                        avatarId: avatar,
                        starterFeenlingId: starter.id,
                        ageYears: selectedAge
                    )
                    onDone()
                } label: {
                    VStack(spacing: 14) {
                        FeenlingSprite(feenling: starter, size: 128, breathes: true)
                        Text(starter.name)
                            .font(Theme.title(30))
                            .foregroundStyle(Theme.ink)
                    }
                    .frame(width: 220, height: 240)
                    .background(RoundedRectangle(cornerRadius: Theme.cornerRadius).fill(Theme.card))
                    .shadow(color: .black.opacity(0.08), radius: 8, y: 4)
                }
                .buttonStyle(SquishyButtonStyle())
                .accessibilityIdentifier("starter-option")
            }
        }
    }
}
