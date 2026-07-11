import SwiftUI

/// Design tokens ("Storybook Modern") + kid-ergonomics hard rules.
/// Every size, color, radius, and duration on a redesigned screen comes from
/// here — see `docs/DESIGN_LANGUAGE.md`. Rules that must not regress:
/// touch targets ≥ `minTouchTarget`, option cards ≥ `optionCardSide`,
/// pre-reader screens never rely on text-only affordances.
enum Theme {
    // MARK: Hard ergonomic minimums (points)

    static let minTouchTarget: CGFloat = 88
    static let optionCardSide: CGFloat = 160

    // MARK: Palette — warm paper, ink purple, jewel accents; no harsh reds

    static let background = Color(red: 1.0, green: 0.97, blue: 0.92)
    static let card = Color.white
    static let ink = Color(red: 0.24, green: 0.19, blue: 0.35)
    static let accent = Color(red: 0.48, green: 0.35, blue: 0.92)
    static let teal = Color(red: 0.13, green: 0.62, blue: 0.74)
    static let correct = Color(red: 0.22, green: 0.72, blue: 0.42)
    static let incorrect = Color(red: 0.98, green: 0.55, blue: 0.25)
    static let gold = Color(red: 1.0, green: 0.76, blue: 0.18)

    // MARK: Type ramp
    // Display face = Feeny Display (Fraunces, soft+wonky, OFL — see
    // Resources/Fonts). It carries identity: greetings, card titles,
    // celebrations. SF Rounded carries reading: buttons, body, captions.

    /// Screen-level hero text (greeting, celebration headlines).
    /// `fixedSize` matches the `.system(size:)` tokens below — the whole
    /// ramp is fixed; kid screens are composed, not reflowable.
    static func display(_ size: CGFloat = 48) -> Font {
        .custom("FeenyDisplay-Semibold", fixedSize: size)
    }

    /// Display accents: numbers on chips, short shouts ("Power-Up!").
    static func displayBold(_ size: CGFloat = 30) -> Font {
        .custom("FeenyDisplay-Bold", fixedSize: size)
    }

    /// Section/card titles on unconverted screens, and big friendly CTAs.
    static func title(_ size: CGFloat = 34) -> Font {
        .system(size: size, weight: .heavy, design: .rounded)
    }

    /// Sub-section headings and labels that must stay ultra-legible.
    static func heading(_ size: CGFloat = 26) -> Font {
        .system(size: size, weight: .bold, design: .rounded)
    }

    static func body(_ size: CGFloat = 22) -> Font {
        .system(size: size, weight: .semibold, design: .rounded)
    }

    /// Quiet metadata (“12 of 40 lessons”); pair with lowered opacity.
    static func caption(_ size: CGFloat = 16) -> Font {
        .system(size: size, weight: .semibold, design: .rounded)
    }

    // MARK: Spacing scale (points)

    enum Space {
        static let xxs: CGFloat = 4
        static let xs: CGFloat = 8
        static let s: CGFloat = 12
        static let m: CGFloat = 16
        static let l: CGFloat = 24
        static let xl: CGFloat = 32
        static let xxl: CGFloat = 48
    }

    // MARK: Radius scale (points)

    enum Radius {
        static let s: CGFloat = 12
        static let m: CGFloat = 16
        static let l: CGFloat = 24
        static let xl: CGFloat = 32
    }

    /// Legacy alias; new code names its radius from `Radius`.
    static let cornerRadius: CGFloat = Radius.l
}

// MARK: - Motion tokens

/// A named animation plus its Reduce Motion stand-in. `reduced == nil`
/// means the motion is decorative and simply doesn't run (idle loops).
struct MotionToken {
    let animation: Animation
    let reduced: Animation?

    func resolved(reduceMotion: Bool) -> Animation? {
        reduceMotion ? reduced : animation
    }
}

extension Theme {
    enum Motion {
        /// Press-down squish on anything tappable.
        static let press = MotionToken(
            animation: .spring(response: 0.25, dampingFraction: 0.6),
            reduced: .easeOut(duration: 0.1)
        )
        /// Elements arriving/settling into place.
        static let settle = MotionToken(
            animation: .spring(response: 0.5, dampingFraction: 0.72),
            reduced: .easeOut(duration: 0.2)
        )
        /// Ambient idle loop (companion bob, breathing). Decorative.
        static let breathe = MotionToken(
            animation: .easeInOut(duration: 1.4).repeatForever(autoreverses: true),
            reduced: nil
        )
        /// Attention pulse on the current map node. Decorative.
        static let pulse = MotionToken(
            animation: .easeInOut(duration: 0.9).repeatForever(autoreverses: true),
            reduced: nil
        )
    }
}

extension View {
    /// Animate `value` changes with a motion token, honoring Reduce Motion.
    func motion<V: Equatable>(_ token: MotionToken, value: V) -> some View {
        modifier(MotionModifier(token: token, value: value))
    }
}

private struct MotionModifier<V: Equatable>: ViewModifier {
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    let token: MotionToken
    let value: V

    func body(content: Content) -> some View {
        content.animation(token.resolved(reduceMotion: reduceMotion), value: value)
    }
}

// MARK: - Shared controls

/// Chunky press-down feel for every tappable card/button.
struct SquishyButtonStyle: ButtonStyle {
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .scaleEffect(configuration.isPressed && !reduceMotion ? 0.94 : 1.0)
            .opacity(configuration.isPressed && reduceMotion ? 0.75 : 1.0)
            .animation(
                Theme.Motion.press.resolved(reduceMotion: reduceMotion),
                value: configuration.isPressed
            )
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
            .clipShape(RoundedRectangle(cornerRadius: Theme.Radius.l))
            .overlay(
                RoundedRectangle(cornerRadius: Theme.Radius.l)
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
