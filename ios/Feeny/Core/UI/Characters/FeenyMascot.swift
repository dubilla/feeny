import SwiftUI

/// Feeny, the mascot — composed from the generated `FeenyPaths` layers with
/// a hand-coded rig: breathing (soft body squash), blinks, a hello wave, and
/// a celebrate hop. Geometry changes happen in `DesignAssets/feeny.svg` +
/// `tools/svg2shape.py`; only the rig lives here.
///
/// Reduce Motion: idle loops don't run, the wave becomes a still raised
/// wing, and the celebrate hop becomes a plain pose.
struct FeenyMascot: View {
    enum Pose {
        case idle
        /// Waves once on appear, then settles into idle.
        case wave
        case celebrate
    }

    var pose: Pose = .idle
    /// Character height in points (width follows the drawing's aspect).
    var size: CGFloat = 160

    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @State private var breathe = false
    @State private var blinking = false
    @State private var wingAngle: Double = 0
    @State private var hop = false

    // Palette (Theme tokens; the SVG's fills are preview-only).
    private let bodyColor = Theme.accent
    private let wingColor = Theme.accentDeep
    private let stemColor = Theme.stem

    var body: some View {
        ZStack {
            layer(FeenyPaths.stem, stemColor)
            layer(FeenyPaths.leafL, Theme.gold)
            layer(FeenyPaths.leafR, Theme.gold)
            layer(FeenyPaths.wingL, wingColor)
            layer(FeenyPaths.wingR, wingColor)
                // Shoulder joint — waves hello, flies up on celebrate.
                .rotationEffect(.degrees(wingAngle), anchor: UnitPoint(x: 0.78, y: 0.58))
            layer(FeenyPaths.footL, Theme.incorrect)
            layer(FeenyPaths.footR, Theme.incorrect)
            layer(FeenyPaths.body, bodyColor)
            layer(FeenyPaths.belly, Theme.background)
            eyes
            layer(FeenyPaths.cheekL, Theme.incorrect, opacity: 0.35)
            layer(FeenyPaths.cheekR, Theme.incorrect, opacity: 0.35)
            layer(FeenyPaths.beak, Theme.incorrect)
        }
        .scaleEffect(y: breathe ? 1.015 : 0.985, anchor: .bottom)
        // Modifier-form animation, like the map node pulse: an imperative
        // withAnimation(.repeatForever) never "settles", which blocks
        // XCUITest's wait-for-idle and kills the UI-test runner.
        .animation(reduceMotion ? nil : Theme.Motion.breathe.animation, value: breathe)
        .offset(y: hop ? -0.12 * size : 0)
        .aspectRatio(FeenyPaths.aspectRatio, contentMode: .fit)
        .frame(height: size)
        // Decorative company, never a control: touches pass through (matters
        // at Split View widths where the overlay can sit over real buttons).
        .allowsHitTesting(false)
        .accessibilityHidden(true)
        .task { await run() }
    }

    private var eyes: some View {
        ZStack {
            layer(FeenyPaths.eyeL, .white)
            layer(FeenyPaths.eyeR, .white)
            layer(FeenyPaths.pupilL, Theme.ink)
            layer(FeenyPaths.pupilR, Theme.ink)
        }
        // Blink = squash the whole eye group onto the eye line.
        .scaleEffect(y: blinking ? 0.08 : 1, anchor: UnitPoint(x: 0.5, y: 0.49))
    }

    private func layer(
        _ path: @escaping (CGRect) -> Path, _ color: Color, opacity: Double = 1
    ) -> some View {
        GeometryReader { geo in
            path(CGRect(origin: .zero, size: geo.size))
                .fill(color.opacity(opacity))
        }
    }

    // MARK: - Rig choreography

    private func run() async {
        if reduceMotion {
            // Still pose: a raised wing still says hello.
            if pose != .idle { wingAngle = -95 }
            return
        }
        switch pose {
        case .idle:
            startIdle()
        case .wave:
            await wave()
            startIdle()
        case .celebrate:
            withAnimation(Theme.Motion.press.animation) { wingAngle = -120 }
            withAnimation(.spring(response: 0.4, dampingFraction: 0.5)) { hop = true }
            try? await Task.sleep(for: .milliseconds(450))
            withAnimation(.spring(response: 0.45, dampingFraction: 0.6)) { hop = false }
            withAnimation(.spring(response: 0.5, dampingFraction: 0.7)) { wingAngle = 0 }
            startIdle()
        }
        await blinkLoop()
    }

    private func startIdle() {
        breathe = true  // animated by the modifier-form `.animation` above
    }

    private func wave() async {
        withAnimation(.spring(response: 0.4, dampingFraction: 0.55)) { wingAngle = -100 }
        try? await Task.sleep(for: .milliseconds(420))
        for _ in 0..<2 {
            withAnimation(.easeInOut(duration: 0.18)) { wingAngle = -78 }
            try? await Task.sleep(for: .milliseconds(180))
            withAnimation(.easeInOut(duration: 0.18)) { wingAngle = -102 }
            try? await Task.sleep(for: .milliseconds(180))
        }
        withAnimation(.spring(response: 0.5, dampingFraction: 0.7)) { wingAngle = 0 }
    }

    /// Occasional blinks forever (cancelled with the view's task).
    private func blinkLoop() async {
        while !Task.isCancelled {
            try? await Task.sleep(for: .milliseconds(Int.random(in: 2200...3600)))
            withAnimation(.easeIn(duration: 0.07)) { blinking = true }
            try? await Task.sleep(for: .milliseconds(90))
            withAnimation(.easeOut(duration: 0.1)) { blinking = false }
        }
    }
}
