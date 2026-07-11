import SwiftUI

/// Owned vector emblems — the identity layer that replaces emoji/SF Symbols
/// on redesigned screens. Everything is drawn in a 100×100 design box and
/// scales with `size`; colors are parameterized so emblems sit on any card.

// MARK: - Subject emblems

/// Sticker-style emblem for a subject card. Unknown subjects get a star.
struct SubjectEmblem: View {
    let subjectId: String
    var size: CGFloat = 110

    var body: some View {
        switch subjectId {
        case "math": MathEmblem(size: size)
        // The book's paths live in the middle band of the design box, so it
        // needs a nudge to hold its own next to the block stack.
        case "reading": ReadingEmblem(size: size).scaleEffect(1.3)
        default: StarEmblem(size: size)
        }
    }
}

/// Counting blocks: a friendly stack of three, dotted 1-2-3.
struct MathEmblem: View {
    var size: CGFloat = 110

    var body: some View {
        let u = size / 100
        ZStack {
            block(dots: 2, u: u)
                .rotationEffect(.degrees(-6))
                .position(x: 30 * u, y: 68 * u)
            block(dots: 3, u: u)
                .rotationEffect(.degrees(4))
                .position(x: 70 * u, y: 70 * u)
            block(dots: 1, u: u)
                .rotationEffect(.degrees(-3))
                .position(x: 49 * u, y: 33 * u)
        }
        .frame(width: size, height: size)
        .accessibilityHidden(true)
    }

    private func block(dots: Int, u: CGFloat) -> some View {
        let side = 34 * u
        return RoundedRectangle(cornerRadius: 8 * u)
            .fill(.white)
            .frame(width: side, height: side)
            .overlay(
                RoundedRectangle(cornerRadius: 8 * u)
                    .fill(LinearGradient(
                        colors: [.clear, Theme.ink.opacity(0.14)],
                        startPoint: .top, endPoint: .bottom
                    ))
            )
            .overlay(dotFace(dots, u: u))
            .shadow(color: Theme.ink.opacity(0.18), radius: 3 * u, y: 2 * u)
    }

    @ViewBuilder
    private func dotFace(_ count: Int, u: CGFloat) -> some View {
        let d = 8 * u
        let dot = Circle().fill(Theme.accent.opacity(0.82)).frame(width: d, height: d)
        switch count {
        case 1: dot
        case 2:
            HStack(spacing: 7 * u) { dot; dot }
        default:
            VStack(spacing: 4 * u) {
                HStack(spacing: 10 * u) { dot; dot }
                dot
            }
        }
    }
}

/// An open storybook: two pages, ink lines, a ribbon bookmark.
struct ReadingEmblem: View {
    var size: CGFloat = 110

    var body: some View {
        let u = size / 100
        ZStack {
            BookCoverShape()
                .fill(Theme.ink.opacity(0.22))
                .offset(y: 4 * u)
            BookPageShape(side: .left)
                .fill(.white)
                .overlay(pageLines(u: u, mirrored: false))
            BookPageShape(side: .right)
                .fill(.white)
                .overlay(
                    BookPageShape(side: .right)
                        .fill(Theme.ink.opacity(0.06))
                )
                .overlay(pageLines(u: u, mirrored: true))
            // Ribbon bookmark peeking from the spine top.
            RibbonShape()
                .fill(Theme.gold)
        }
        .frame(width: size, height: size)
        .shadow(color: Theme.ink.opacity(0.15), radius: 3 * u, y: 2 * u)
        .accessibilityHidden(true)
    }

    private func pageLines(u: CGFloat, mirrored: Bool) -> some View {
        VStack(alignment: .leading, spacing: 5 * u) {
            ForEach(0..<3, id: \.self) { i in
                Capsule()
                    .fill(Theme.teal.opacity(0.55))
                    .frame(width: (i == 2 ? 14 : 22) * u, height: 3.4 * u)
            }
        }
        .rotationEffect(.degrees(mirrored ? 4 : -4))
        .offset(x: (mirrored ? 14 : -14) * u, y: 2 * u)
    }
}

/// Fallback emblem for unknown subjects.
struct StarEmblem: View {
    var size: CGFloat = 110

    var body: some View {
        let u = size / 100
        StarShape()
            .fill(.white)
            .overlay(StarShape().fill(
                LinearGradient(colors: [.clear, Theme.ink.opacity(0.12)],
                               startPoint: .top, endPoint: .bottom)
            ))
            .frame(width: size, height: size)
            .shadow(color: Theme.ink.opacity(0.18), radius: 3 * u, y: 2 * u)
            .accessibilityHidden(true)
    }
}

// MARK: - Stat glyphs (small chrome icons drawn as paths)

/// The streak flame — awake (lit) or asleep (ashen).
struct FlameGlyph: View {
    var size: CGFloat = 30
    var isLit: Bool = true

    var body: some View {
        ZStack {
            FlameShape()
                .fill(isLit
                    ? AnyShapeStyle(LinearGradient(
                        colors: [Theme.gold, Theme.incorrect],
                        startPoint: .top, endPoint: .bottom))
                    : AnyShapeStyle(Theme.ink.opacity(0.25)))
            FlameShape()
                .fill(isLit ? Color.white.opacity(0.85) : Theme.background.opacity(0.7))
                .scaleEffect(0.45, anchor: .bottom)
                .offset(y: -0.06 * size)
        }
        .frame(width: size, height: size * 1.2)
        .accessibilityHidden(true)
    }
}

/// The Feenling egg — doorway to the collection.
struct EggGlyph: View {
    var size: CGFloat = 30

    var body: some View {
        ZStack {
            EggShape()
                .fill(LinearGradient(
                    colors: [Theme.accent.opacity(0.85), Theme.accent],
                    startPoint: .topLeading, endPoint: .bottomTrailing))
            // Speckles make it a creature egg, not a breakfast egg.
            Circle().fill(.white.opacity(0.7))
                .frame(width: size * 0.14, height: size * 0.14)
                .offset(x: -size * 0.12, y: -size * 0.18)
            Circle().fill(.white.opacity(0.55))
                .frame(width: size * 0.1, height: size * 0.1)
                .offset(x: size * 0.14, y: size * 0.02)
            Circle().fill(.white.opacity(0.45))
                .frame(width: size * 0.08, height: size * 0.08)
                .offset(x: -size * 0.04, y: size * 0.22)
        }
        .frame(width: size, height: size * 1.25)
        .accessibilityHidden(true)
    }
}

// MARK: - Shapes

struct FlameShape: Shape {
    func path(in rect: CGRect) -> Path {
        let w = rect.width, h = rect.height
        var p = Path()
        p.move(to: CGPoint(x: 0.5 * w, y: 0))
        // Right side: swoop out and down to the base.
        p.addCurve(to: CGPoint(x: 0.92 * w, y: 0.62 * h),
                   control1: CGPoint(x: 0.62 * w, y: 0.18 * h),
                   control2: CGPoint(x: 0.92 * w, y: 0.36 * h))
        p.addCurve(to: CGPoint(x: 0.5 * w, y: h),
                   control1: CGPoint(x: 0.92 * w, y: 0.86 * h),
                   control2: CGPoint(x: 0.74 * w, y: h))
        // Left side mirrors up, with a little flick inward near the top.
        p.addCurve(to: CGPoint(x: 0.08 * w, y: 0.62 * h),
                   control1: CGPoint(x: 0.26 * w, y: h),
                   control2: CGPoint(x: 0.08 * w, y: 0.86 * h))
        p.addCurve(to: CGPoint(x: 0.36 * w, y: 0.28 * h),
                   control1: CGPoint(x: 0.08 * w, y: 0.44 * h),
                   control2: CGPoint(x: 0.24 * w, y: 0.38 * h))
        p.addCurve(to: CGPoint(x: 0.5 * w, y: 0),
                   control1: CGPoint(x: 0.44 * w, y: 0.2 * h),
                   control2: CGPoint(x: 0.46 * w, y: 0.1 * h))
        p.closeSubpath()
        return p
    }
}

struct EggShape: Shape {
    func path(in rect: CGRect) -> Path {
        let w = rect.width, h = rect.height
        var p = Path()
        p.move(to: CGPoint(x: 0.5 * w, y: 0))
        p.addCurve(to: CGPoint(x: w, y: 0.62 * h),
                   control1: CGPoint(x: 0.82 * w, y: 0.02 * h),
                   control2: CGPoint(x: w, y: 0.36 * h))
        p.addCurve(to: CGPoint(x: 0.5 * w, y: h),
                   control1: CGPoint(x: w, y: 0.85 * h),
                   control2: CGPoint(x: 0.78 * w, y: h))
        p.addCurve(to: CGPoint(x: 0, y: 0.62 * h),
                   control1: CGPoint(x: 0.22 * w, y: h),
                   control2: CGPoint(x: 0, y: 0.85 * h))
        p.addCurve(to: CGPoint(x: 0.5 * w, y: 0),
                   control1: CGPoint(x: 0, y: 0.36 * h),
                   control2: CGPoint(x: 0.18 * w, y: 0.02 * h))
        p.closeSubpath()
        return p
    }
}

struct StarShape: Shape {
    func path(in rect: CGRect) -> Path {
        let c = CGPoint(x: rect.midX, y: rect.midY)
        let outer = min(rect.width, rect.height) * 0.48
        let inner = outer * 0.48
        var p = Path()
        for i in 0..<10 {
            let r = i.isMultiple(of: 2) ? outer : inner
            let a = CGFloat(i) / 10 * 2 * .pi - .pi / 2
            let pt = CGPoint(x: c.x + CoreGraphics.cos(a) * r, y: c.y + CoreGraphics.sin(a) * r)
            if i == 0 { p.move(to: pt) } else { p.addLine(to: pt) }
        }
        p.closeSubpath()
        return p
    }
}

/// The book's cover, slightly proud of the pages.
struct BookCoverShape: Shape {
    func path(in rect: CGRect) -> Path {
        let w = rect.width, h = rect.height
        var p = Path()
        p.move(to: CGPoint(x: 0.5 * w, y: 0.46 * h))
        p.addCurve(to: CGPoint(x: 0.06 * w, y: 0.36 * h),
                   control1: CGPoint(x: 0.34 * w, y: 0.36 * h),
                   control2: CGPoint(x: 0.16 * w, y: 0.32 * h))
        p.addLine(to: CGPoint(x: 0.06 * w, y: 0.72 * h))
        p.addCurve(to: CGPoint(x: 0.5 * w, y: 0.84 * h),
                   control1: CGPoint(x: 0.16 * w, y: 0.78 * h),
                   control2: CGPoint(x: 0.34 * w, y: 0.82 * h))
        p.addCurve(to: CGPoint(x: 0.94 * w, y: 0.72 * h),
                   control1: CGPoint(x: 0.66 * w, y: 0.82 * h),
                   control2: CGPoint(x: 0.84 * w, y: 0.78 * h))
        p.addLine(to: CGPoint(x: 0.94 * w, y: 0.36 * h))
        p.addCurve(to: CGPoint(x: 0.5 * w, y: 0.46 * h),
                   control1: CGPoint(x: 0.84 * w, y: 0.32 * h),
                   control2: CGPoint(x: 0.66 * w, y: 0.36 * h))
        p.closeSubpath()
        return p
    }
}

/// One open page; `side` picks the half.
struct BookPageShape: Shape {
    enum Side { case left, right }
    let side: Side

    func path(in rect: CGRect) -> Path {
        let w = rect.width, h = rect.height
        var p = Path()
        switch side {
        case .left:
            p.move(to: CGPoint(x: 0.5 * w, y: 0.44 * h))
            p.addCurve(to: CGPoint(x: 0.1 * w, y: 0.32 * h),
                       control1: CGPoint(x: 0.36 * w, y: 0.34 * h),
                       control2: CGPoint(x: 0.2 * w, y: 0.29 * h))
            p.addLine(to: CGPoint(x: 0.1 * w, y: 0.64 * h))
            p.addCurve(to: CGPoint(x: 0.5 * w, y: 0.76 * h),
                       control1: CGPoint(x: 0.2 * w, y: 0.61 * h),
                       control2: CGPoint(x: 0.36 * w, y: 0.66 * h))
        case .right:
            p.move(to: CGPoint(x: 0.5 * w, y: 0.44 * h))
            p.addCurve(to: CGPoint(x: 0.9 * w, y: 0.32 * h),
                       control1: CGPoint(x: 0.64 * w, y: 0.34 * h),
                       control2: CGPoint(x: 0.8 * w, y: 0.29 * h))
            p.addLine(to: CGPoint(x: 0.9 * w, y: 0.64 * h))
            p.addCurve(to: CGPoint(x: 0.5 * w, y: 0.76 * h),
                       control1: CGPoint(x: 0.8 * w, y: 0.61 * h),
                       control2: CGPoint(x: 0.64 * w, y: 0.66 * h))
        }
        p.closeSubpath()
        return p
    }
}

/// Bookmark ribbon draped over the spine.
struct RibbonShape: Shape {
    func path(in rect: CGRect) -> Path {
        let w = rect.width, h = rect.height
        var p = Path()
        let rw = 0.055 * w
        p.move(to: CGPoint(x: 0.5 * w - rw, y: 0.44 * h))
        p.addLine(to: CGPoint(x: 0.5 * w + rw, y: 0.44 * h))
        p.addLine(to: CGPoint(x: 0.5 * w + rw, y: 0.62 * h))
        p.addLine(to: CGPoint(x: 0.5 * w, y: 0.57 * h))
        p.addLine(to: CGPoint(x: 0.5 * w - rw, y: 0.62 * h))
        p.closeSubpath()
        return p
    }
}
