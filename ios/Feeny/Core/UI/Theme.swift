import SwiftUI

/// Kid-ergonomics hard rules + shared look. Rules that must not regress:
/// touch targets ≥ `minTouchTarget`, option cards ≥ `optionCardSide`,
/// pre-reader screens never rely on text-only affordances.
enum Theme {
    // Hard ergonomic minimums (points)
    static let minTouchTarget: CGFloat = 88
    static let optionCardSide: CGFloat = 160

    static let cornerRadius: CGFloat = 24

    // Palette — warm, high-chroma, no harsh reds
    static let background = Color(red: 1.0, green: 0.97, blue: 0.92)
    static let card = Color.white
    static let ink = Color(red: 0.24, green: 0.19, blue: 0.35)
    static let accent = Color(red: 0.48, green: 0.35, blue: 0.92)
    static let correct = Color(red: 0.22, green: 0.72, blue: 0.42)
    static let incorrect = Color(red: 0.98, green: 0.55, blue: 0.25)
    static let gold = Color(red: 1.0, green: 0.76, blue: 0.18)

    static func title(_ size: CGFloat = 34) -> Font {
        .system(size: size, weight: .heavy, design: .rounded)
    }

    static func body(_ size: CGFloat = 22) -> Font {
        .system(size: size, weight: .semibold, design: .rounded)
    }
}

/// Chunky press-down feel for every tappable card/button.
struct SquishyButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .scaleEffect(configuration.isPressed ? 0.94 : 1.0)
            .animation(.spring(response: 0.25, dampingFraction: 0.6), value: configuration.isPressed)
    }
}

/// Large tappable card used for answer options.
struct OptionCard<Content: View>: View {
    var borderColor: Color = .clear
    @ViewBuilder var content: Content

    var body: some View {
        content
            .frame(minWidth: Theme.optionCardSide, minHeight: Theme.optionCardSide)
            .background(Theme.card)
            .clipShape(RoundedRectangle(cornerRadius: Theme.cornerRadius))
            .overlay(
                RoundedRectangle(cornerRadius: Theme.cornerRadius)
                    .stroke(borderColor, lineWidth: 5)
            )
            .shadow(color: .black.opacity(0.08), radius: 8, y: 4)
    }
}

/// Replay-the-prompt button; present on every exercise screen.
struct SpeakerButton: View {
    let text: String
    @Environment(SpeechService.self) private var speech

    var body: some View {
        Button {
            speech.speak(text)
        } label: {
            Image(systemName: "speaker.wave.2.fill")
                .font(.system(size: 30, weight: .bold))
                .foregroundStyle(.white)
                .frame(width: Theme.minTouchTarget, height: Theme.minTouchTarget)
                .background(Circle().fill(Theme.accent))
        }
        .buttonStyle(SquishyButtonStyle())
        .accessibilityLabel("Hear it again")
    }
}
