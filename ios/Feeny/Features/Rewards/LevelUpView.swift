import SwiftUI

/// Full-screen "LEVEL UP!" moment: badge stamps in, confetti, spoken cheer.
struct LevelUpView: View {
    let level: Int
    let onDone: () -> Void

    @Environment(SpeechService.self) private var speech
    @State private var stamped = false

    var body: some View {
        ZStack {
            Theme.background.ignoresSafeArea()
            RadialGradient(colors: [Theme.gold.opacity(0.35), .clear],
                           center: .center, startRadius: 30, endRadius: 500)
                .ignoresSafeArea()

            VStack(spacing: 36) {
                Text("LEVEL UP!")
                    .font(Theme.title(58))
                    .foregroundStyle(Theme.gold)
                    .scaleEffect(stamped ? 1 : 1.6)
                    .opacity(stamped ? 1 : 0)

                ZStack {
                    Circle()
                        .fill(Theme.gold)
                        .frame(width: 280, height: 280)
                        .shadow(color: Theme.gold.opacity(0.5), radius: 24, y: 10)
                    Circle()
                        .stroke(.white.opacity(0.6), lineWidth: 10)
                        .frame(width: 244, height: 244)
                    VStack(spacing: 0) {
                        Text("Level")
                            .font(Theme.title(30))
                            .foregroundStyle(.white.opacity(0.85))
                        Text("\(level)")
                            .font(.system(size: 120, weight: .black, design: .rounded))
                            .foregroundStyle(.white)
                            .contentTransition(.numericText())
                    }
                }
                .scaleEffect(stamped ? 1 : 0.3)
                .rotationEffect(.degrees(stamped ? 0 : -14))

                Text("You're getting so strong!")
                    .font(Theme.body(28))
                    .foregroundStyle(Theme.ink.opacity(0.7))

                Button(action: onDone) {
                    Text("Keep Going!")
                        .font(Theme.title(28))
                        .foregroundStyle(.white)
                        .padding(.horizontal, 48)
                        .frame(height: Theme.minTouchTarget)
                        .background(Capsule().fill(Theme.accent))
                }
                .buttonStyle(SquishyButtonStyle())
                .accessibilityIdentifier("level-up-continue")
            }

            ConfettiView()
        }
        .onAppear {
            withAnimation(.spring(response: 0.5, dampingFraction: 0.55).delay(0.1)) { stamped = true }
            speech.speak("Level up! You're level \(level)!")
        }
    }
}
