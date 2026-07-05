import SwiftUI

/// Pick your animal, (optionally) type a name, go. Avatar-first because
/// five-year-olds pick pictures, not keyboards.
struct ProfileCreateView: View {
    var canCancel: Bool = false
    var onDone: () -> Void = {}

    @Environment(ProgressStore.self) private var progressStore
    @Environment(SpeechService.self) private var speech

    @State private var selectedAvatar: String?
    @State private var name = ""

    private static let avatars = ["🦊", "🐸", "🐼", "🦄", "🐙", "🦖", "🐨", "🐯", "🦉", "🐬", "🐢", "🐰"]
    private let columns = Array(repeating: GridItem(.fixed(120), spacing: 20), count: 6)

    var body: some View {
        VStack(spacing: 36) {
            HStack {
                if canCancel {
                    Button(action: onDone) {
                        Image(systemName: "chevron.left")
                            .font(.system(size: 26, weight: .bold))
                            .foregroundStyle(Theme.ink.opacity(0.5))
                            .frame(width: 64, height: 64)
                    }
                }
                Spacer()
            }

            Text("Pick your buddy!")
                .font(Theme.title(46))
                .foregroundStyle(Theme.ink)

            LazyVGrid(columns: columns, spacing: 20) {
                ForEach(Self.avatars, id: \.self) { avatar in
                    Button {
                        selectedAvatar = avatar
                    } label: {
                        Text(avatar)
                            .font(.system(size: 64))
                            .frame(width: 116, height: 116)
                            .background(Circle().fill(Theme.card))
                            .overlay(
                                Circle().stroke(
                                    selectedAvatar == avatar ? Theme.accent : .clear,
                                    lineWidth: 6
                                )
                            )
                            .scaleEffect(selectedAvatar == avatar ? 1.1 : 1.0)
                            .animation(.spring(response: 0.3, dampingFraction: 0.6), value: selectedAvatar)
                    }
                    .buttonStyle(SquishyButtonStyle())
                    .accessibilityIdentifier("avatar-option")
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
                guard let avatar = selectedAvatar else { return }
                progressStore.createProfile(name: name, avatarId: avatar)
                onDone()
            } label: {
                Text("Let's Go!")
                    .font(Theme.title(30))
                    .foregroundStyle(.white)
                    .padding(.horizontal, 64)
                    .frame(height: Theme.minTouchTarget)
                    .background(Capsule().fill(selectedAvatar == nil ? Color.gray.opacity(0.4) : Theme.accent))
            }
            .buttonStyle(SquishyButtonStyle())
            .disabled(selectedAvatar == nil)
            .accessibilityIdentifier("create-profile")

            Spacer()
        }
        .padding(48)
        .onAppear { speech.speak("Pick your animal buddy!") }
    }
}
