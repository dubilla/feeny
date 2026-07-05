import SwiftUI

/// The end-of-lesson ceremony: confetti, stars by accuracy, XP count-up.
struct LessonCompleteView: View {
    var title: String = "You did it!"
    let accuracy: Double
    let xpAwarded: Int
    let onDone: () -> Void

    @State private var displayedXP = 0
    @State private var starsShown = 0
    @Environment(SpeechService.self) private var speech

    private var starCount: Int {
        switch accuracy {
        case 1.0...: 3
        case 0.75..<1.0: 2
        default: 1
        }
    }

    var body: some View {
        ZStack {
            VStack(spacing: 36) {
                Text(title)
                    .font(Theme.title(52))
                    .foregroundStyle(Theme.ink)

                HStack(spacing: 20) {
                    ForEach(0..<3, id: \.self) { index in
                        Image(systemName: index < starCount ? "star.fill" : "star")
                            .font(.system(size: 64))
                            .foregroundStyle(Theme.gold)
                            .scaleEffect(index < starsShown ? 1 : 0.2)
                            .opacity(index < starsShown || index >= starCount ? 1 : 0)
                            .animation(.spring(response: 0.4, dampingFraction: 0.5).delay(Double(index) * 0.25), value: starsShown)
                    }
                }

                Text("+\(displayedXP) XP")
                    .font(Theme.title(44))
                    .foregroundStyle(Theme.accent)
                    .contentTransition(.numericText())
                    .monospacedDigit()

                Button(action: onDone) {
                    Text("Keep Going!")
                        .font(Theme.title(28))
                        .foregroundStyle(.white)
                        .padding(.horizontal, 48)
                        .frame(height: Theme.minTouchTarget)
                        .background(Capsule().fill(Theme.accent))
                }
                .buttonStyle(SquishyButtonStyle())
            }

            ConfettiView()
        }
        .onAppear {
            speech.speak(title == "You did it!" ? "You did it! Great work!" : title)
            starsShown = starCount
            Task {
                // Count the XP up in steps — the number ticking is the fun part.
                for step in stride(from: 0, through: xpAwarded, by: max(1, xpAwarded / 10)) {
                    withAnimation(.snappy) { displayedXP = step }
                    try? await Task.sleep(for: .milliseconds(80))
                }
                withAnimation(.snappy) { displayedXP = xpAwarded }
            }
        }
    }
}
