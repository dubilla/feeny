import SwiftUI

/// The egg ceremony: a big speckled egg the kid taps three times — wobble,
/// crack, POP — revealing a random Feenling. Duplicates pay the sparkle bonus
/// instead of a new friend, framed just as warmly.
struct EggHatchView: View {
    let subjectId: String
    let onDone: () -> Void

    @Environment(ProgressStore.self) private var progressStore
    @Environment(SpeechService.self) private var speech
    @Environment(SoundEffects.self) private var sounds

    @State private var tapCount = 0
    @State private var wobble = false
    @State private var result: ProgressStore.HatchResult?
    @State private var burstScale = 0.2
    @State private var shimmer = false

    private var rarityColor: Color {
        switch result?.feenling.rarity {
        case .shiny: Theme.gold
        case .rare: Theme.accent
        default: Theme.correct
        }
    }

    var body: some View {
        ZStack {
            Theme.background.ignoresSafeArea()
            RadialGradient(
                colors: [rarityColor.opacity(result == nil ? 0.12 : 0.35), .clear],
                center: .center, startRadius: 40, endRadius: 520
            )
            .ignoresSafeArea()
            .animation(.easeInOut(duration: 0.6), value: result != nil)

            if let result {
                revealed(result)
            } else {
                eggStage
            }
        }
        .onAppear { speech.speak("You earned an egg! Tap it to crack it open!") }
    }

    // MARK: - Egg

    private var eggStage: some View {
        VStack(spacing: 44) {
            Text("You earned an egg!")
                .font(Theme.title(48))
                .foregroundStyle(Theme.ink)

            Button {
                crackTap()
            } label: {
                EggShape()
                    .fill(
                        LinearGradient(
                            colors: [Color.white, Color(red: 1.0, green: 0.93, blue: 0.78)],
                            startPoint: .top, endPoint: .bottom
                        )
                    )
                    .overlay(eggSpeckles)
                    .overlay(crackLines)
                    .frame(width: 260, height: 330)
                    .shadow(color: .black.opacity(0.15), radius: 18, y: 12)
                    .rotationEffect(.degrees(wobble ? 7 : 0), anchor: .bottom)
            }
            .buttonStyle(SquishyButtonStyle())
            .accessibilityIdentifier("hatch-egg")
            .accessibilityLabel("Tap the egg")

            Text("Tap tap tap!")
                .font(Theme.body(26))
                .foregroundStyle(Theme.ink.opacity(0.55))
        }
    }

    private var eggSpeckles: some View {
        GeometryReader { geo in
            let w = geo.size.width, h = geo.size.height
            ForEach(Array([(0.3, 0.35), (0.62, 0.25), (0.48, 0.55), (0.7, 0.6), (0.35, 0.72)].enumerated()),
                    id: \.offset) { _, spot in
                Circle()
                    .fill(Theme.gold.opacity(0.35))
                    .frame(width: w * 0.09)
                    .position(x: w * spot.0, y: h * spot.1)
            }
        }
        .clipShape(EggShape())
    }

    private var crackLines: some View {
        CrackShape(progress: tapCount)
            .stroke(Theme.ink.opacity(0.5), style: StrokeStyle(lineWidth: 4, lineCap: .round, lineJoin: .round))
            .clipShape(EggShape())
    }

    private func crackTap() {
        tapCount += 1
        // Three rising knocks as the shell gives way.
        switch tapCount {
        case 1: sounds.play(.crack1)
        case 2: sounds.play(.crack2)
        default: sounds.play(.crack3)
        }
        withAnimation(.spring(response: 0.15, dampingFraction: 0.3)) { wobble = true }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.18) {
            withAnimation(.spring(response: 0.2, dampingFraction: 0.4)) { wobble = false }
        }
        // Exactly-once: a 4th rapid tap must not re-roll (and nil out) the
        // hatch while the reveal is still animating in.
        if tapCount == 3 {
            let hatch = progressStore.hatchEgg(subjectId: subjectId)
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.25) {
                sounds.play(.pop)
                withAnimation(.spring(response: 0.5, dampingFraction: 0.55)) {
                    result = hatch
                    burstScale = 1.0
                }
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
                    sounds.play(.reveal)
                }
                announce(hatch)
            }
        }
    }

    // MARK: - Reveal

    private func revealed(_ result: ProgressStore.HatchResult) -> some View {
        ZStack {
            VStack(spacing: 28) {
                Text(headline(result))
                    .font(Theme.title(46))
                    .foregroundStyle(Theme.ink)

                ZStack {
                    Circle()
                        .fill(rarityColor.opacity(0.18))
                        .frame(width: 320, height: 320)
                    Circle()
                        .stroke(rarityColor.opacity(0.7), lineWidth: result.feenling.rarity == .common ? 0 : 8)
                        .frame(width: 320, height: 320)
                        .hueRotation(.degrees(result.feenling.rarity == .shiny && shimmer ? 300 : 0))
                        .animation(
                            result.feenling.rarity == .shiny
                                ? .linear(duration: 2.2).repeatForever(autoreverses: false)
                                : .default,
                            value: shimmer
                        )
                    FeenlingSprite(feenling: result.feenling, size: 230, breathes: true)
                }
                .scaleEffect(burstScale)

                VStack(spacing: 8) {
                    Text(result.feenling.name)
                        .font(Theme.title(52))
                        .foregroundStyle(rarityColor)
                    Text(subtitle(result))
                        .font(Theme.body(26))
                        .foregroundStyle(Theme.ink.opacity(0.7))
                }

                Button(action: onDone) {
                    Text(result.isNew ? "Yay! New friend!" : "Sparkly!")
                        .font(Theme.title(28))
                        .foregroundStyle(.white)
                        .padding(.horizontal, 48)
                        .frame(height: Theme.minTouchTarget)
                        .background(Capsule().fill(rarityColor))
                }
                .buttonStyle(SquishyButtonStyle())
                .accessibilityIdentifier("collect-feenling")
            }

            ConfettiView()
        }
        .onAppear { shimmer = true }
    }

    private func headline(_ result: ProgressStore.HatchResult) -> String {
        switch result.feenling.rarity {
        case .shiny: "✨ A SHINY one! ✨"
        case .rare: "Wow, a rare one!"
        case .common: result.isNew ? "It's a new friend!" : "Hello again!"
        }
    }

    private func subtitle(_ result: ProgressStore.HatchResult) -> String {
        result.isNew
            ? "\(result.feenling.name) joined your collection!"
            : "You already have \(result.feenling.name) — Sparkle bonus +\(result.sparkleXP) XP!"
    }

    private func announce(_ result: ProgressStore.HatchResult?) {
        guard let result else { return }
        var line = "It's \(result.feenling.name)!"
        if result.feenling.rarity == .shiny { line = "Wow! A shiny one! " + line }
        if !result.isNew { line += " You have them already, so you get a sparkle bonus!" }
        speech.speak(line)
    }
}

// EggShape lives in Core/UI/Emblems.swift (shared with the home stat cluster).

/// Zigzag cracks that grow with each tap (1 → 2 segments visible).
struct CrackShape: Shape {
    let progress: Int

    func path(in rect: CGRect) -> Path {
        var p = Path()
        guard progress >= 1 else { return p }
        let w = rect.width, h = rect.height
        p.move(to: CGPoint(x: w * 0.15, y: h * 0.45))
        p.addLine(to: CGPoint(x: w * 0.32, y: h * 0.52))
        p.addLine(to: CGPoint(x: w * 0.45, y: h * 0.42))
        if progress >= 2 {
            p.addLine(to: CGPoint(x: w * 0.6, y: h * 0.55))
            p.addLine(to: CGPoint(x: w * 0.75, y: h * 0.44))
            p.addLine(to: CGPoint(x: w * 0.9, y: h * 0.5))
        }
        return p
    }
}
