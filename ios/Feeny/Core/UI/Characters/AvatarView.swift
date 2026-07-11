import SwiftUI

/// The kid-buddy avatar system: ~8 faces × 6 tints, all drawn from
/// parameters in the Feenling style — avatars are a palette, not a cast,
/// so sameness across combos is fine by design.
///
/// `avatarId` format: "<face>-<tint>" (e.g. "bunny-teal"). Profiles created
/// before this system store an emoji; those render as-is (legacy fallback,
/// never migrated out from under a kid).

enum AvatarFace: String, CaseIterable, Identifiable {
    case round, bear, bunny, cat, fox, mouse, bird, frog
    var id: String { rawValue }
}

enum AvatarTint: String, CaseIterable, Identifiable {
    case violet, teal, coral, gold, green, berry
    var id: String { rawValue }

    var main: Color {
        switch self {
        case .violet: Color(red: 0.48, green: 0.35, blue: 0.92)
        case .teal: Color(red: 0.13, green: 0.62, blue: 0.74)
        case .coral: Color(red: 0.96, green: 0.54, blue: 0.37)
        case .gold: Color(red: 1.0, green: 0.76, blue: 0.18)
        case .green: Color(red: 0.25, green: 0.61, blue: 0.37)
        case .berry: Color(red: 0.79, green: 0.32, blue: 0.56)
        }
    }

    /// Shadow shade for inner ears and details.
    var deep: Color {
        switch self {
        case .violet: Color(red: 0.38, green: 0.27, blue: 0.75)
        case .teal: Color(red: 0.09, green: 0.47, blue: 0.57)
        case .coral: Color(red: 0.83, green: 0.41, blue: 0.26)
        case .gold: Color(red: 0.9, green: 0.63, blue: 0.0)
        case .green: Color(red: 0.18, green: 0.48, blue: 0.29)
        case .berry: Color(red: 0.65, green: 0.23, blue: 0.45)
        }
    }
}

struct AvatarSpec: Equatable {
    let face: AvatarFace
    let tint: AvatarTint

    var id: String { "\(face.rawValue)-\(tint.rawValue)" }

    static func parse(_ id: String) -> AvatarSpec? {
        let parts = id.split(separator: "-")
        guard parts.count == 2,
              let face = AvatarFace(rawValue: String(parts[0])),
              let tint = AvatarTint(rawValue: String(parts[1])) else { return nil }
        return AvatarSpec(face: face, tint: tint)
    }
}

/// Renders any stored avatarId: parametric face when it parses, the legacy
/// emoji otherwise.
struct AvatarView: View {
    let avatarId: String
    var size: CGFloat = 100

    var body: some View {
        if let spec = AvatarSpec.parse(avatarId) {
            AvatarFaceView(face: spec.face, tint: spec.tint, size: size)
        } else {
            Text(avatarId)
                .font(.system(size: size * 0.62))
                .frame(width: size, height: size)
                .accessibilityHidden(true)
        }
    }
}

/// One face drawn in a 100×100 design box.
struct AvatarFaceView: View {
    let face: AvatarFace
    let tint: AvatarTint
    var size: CGFloat = 100

    private var u: CGFloat { size / 100 }
    private let ink = Theme.ink
    private let cream = Theme.background

    var body: some View {
        ZStack {
            ears
            head
            features
        }
        .frame(width: size, height: size)
        .accessibilityHidden(true)
    }

    private var head: some View {
        Circle()
            .fill(tint.main)
            .frame(width: 72 * u, height: 72 * u)
            .position(x: 50 * u, y: 58 * u)
    }

    // MARK: - Ears / toppers (the silhouette carrier per face)

    @ViewBuilder
    private var ears: some View {
        switch face {
        case .round:
            EmptyView()
        case .bear:
            circleEar(x: 28, y: 26, r: 13)
            circleEar(x: 72, y: 26, r: 13)
        case .bunny:
            tallEar(x: 36)
            tallEar(x: 64)
        case .cat:
            triangleEar(cx: 31, flip: false)
            triangleEar(cx: 69, flip: true)
        case .fox:
            triangleEar(cx: 27, flip: false, wide: true)
            triangleEar(cx: 73, flip: true, wide: true)
        case .mouse:
            circleEar(x: 22, y: 30, r: 16)
            circleEar(x: 78, y: 30, r: 16)
        case .bird:
            featherTuft
        case .frog:
            Circle().fill(tint.main).frame(width: 22 * u, height: 22 * u)
                .position(x: 38 * u, y: 26 * u)
            Circle().fill(tint.main).frame(width: 22 * u, height: 22 * u)
                .position(x: 62 * u, y: 26 * u)
        }
    }

    private func circleEar(x: CGFloat, y: CGFloat, r: CGFloat) -> some View {
        ZStack {
            Circle().fill(tint.main).frame(width: 2 * r * u, height: 2 * r * u)
            Circle().fill(tint.deep).frame(width: 1.1 * r * u, height: 1.1 * r * u)
        }
        .position(x: x * u, y: y * u)
    }

    private func tallEar(x: CGFloat) -> some View {
        ZStack {
            Ellipse().fill(tint.main).frame(width: 18 * u, height: 44 * u)
            Ellipse().fill(cream).frame(width: 8 * u, height: 28 * u)
        }
        .position(x: x * u, y: 18 * u)
    }

    private func triangleEar(cx: CGFloat, flip: Bool, wide: Bool = false) -> some View {
        let w: CGFloat = wide ? 34 : 26
        return ZStack {
            TriangleEarShape().fill(tint.main)
            TriangleEarShape().fill(tint.deep)
                .scaleEffect(0.55, anchor: .bottom)
        }
        .frame(width: w * u, height: 30 * u)
        .scaleEffect(x: flip ? -1 : 1)
        .position(x: cx * u, y: 22 * u)
    }

    private var featherTuft: some View {
        ZStack {
            ForEach([(-18.0, 42.0), (0.0, 50.0), (18.0, 58.0)], id: \.0) { angle, x in
                Capsule()
                    .fill(tint.deep)
                    .frame(width: 7 * u, height: 20 * u)
                    .rotationEffect(.degrees(angle))
                    .position(x: x * u, y: 16 * u)
            }
        }
    }

    // MARK: - Face features

    @ViewBuilder
    private var features: some View {
        if face == .fox {
            Ellipse().fill(cream)
                .frame(width: 30 * u, height: 22 * u)
                .position(x: 50 * u, y: 74 * u)
        }
        if face == .frog {
            // Eyes ride the top bumps.
            eye(x: 38, y: 26)
            eye(x: 62, y: 26)
        } else {
            eye(x: 38, y: 52)
            eye(x: 62, y: 52)
        }
        // Cheeks.
        Circle().fill(.white.opacity(0.35))
            .frame(width: 12 * u, height: 12 * u)
            .position(x: 28 * u, y: 66 * u)
        Circle().fill(.white.opacity(0.35))
            .frame(width: 12 * u, height: 12 * u)
            .position(x: 72 * u, y: 66 * u)
        // Mouth: birds get a beak, everyone else a smile.
        if face == .bird {
            // tint.deep, not gold: a gold beak vanishes on the gold tint.
            BeakShape().fill(tint.deep)
                .frame(width: 16 * u, height: 12 * u)
                .position(x: 50 * u, y: 68 * u)
        } else {
            SmileShape()
                .stroke(ink.opacity(0.65), style: StrokeStyle(lineWidth: 2.5 * u, lineCap: .round))
                .frame(width: 18 * u, height: 8 * u)
                .position(x: 50 * u, y: face == .frog ? 74 * u : 72 * u)
        }
    }

    private func eye(x: CGFloat, y: CGFloat) -> some View {
        ZStack {
            Circle().fill(.white).frame(width: 17 * u, height: 17 * u)
            Circle().fill(ink).frame(width: 8 * u, height: 8 * u)
                .offset(y: 1.5 * u)
        }
        .position(x: x * u, y: y * u)
    }
}

// MARK: - Little shapes

struct TriangleEarShape: Shape {
    func path(in rect: CGRect) -> Path {
        var p = Path()
        p.move(to: CGPoint(x: 0, y: rect.height))
        p.addQuadCurve(
            to: CGPoint(x: rect.width * 0.62, y: 0),
            control: CGPoint(x: rect.width * 0.05, y: rect.height * 0.25)
        )
        p.addQuadCurve(
            to: CGPoint(x: rect.width, y: rect.height),
            control: CGPoint(x: rect.width * 0.95, y: rect.height * 0.4)
        )
        p.closeSubpath()
        return p
    }
}

struct SmileShape: Shape {
    func path(in rect: CGRect) -> Path {
        var p = Path()
        p.move(to: CGPoint(x: 0, y: 0))
        p.addQuadCurve(
            to: CGPoint(x: rect.width, y: 0),
            control: CGPoint(x: rect.width / 2, y: rect.height * 2)
        )
        return p
    }
}

struct BeakShape: Shape {
    func path(in rect: CGRect) -> Path {
        var p = Path()
        p.move(to: CGPoint(x: 0, y: rect.height * 0.3))
        p.addQuadCurve(
            to: CGPoint(x: rect.width, y: rect.height * 0.3),
            control: CGPoint(x: rect.width / 2, y: -rect.height * 0.3)
        )
        p.addQuadCurve(
            to: CGPoint(x: rect.width / 2, y: rect.height),
            control: CGPoint(x: rect.width * 0.9, y: rect.height * 0.8)
        )
        p.addQuadCurve(
            to: CGPoint(x: 0, y: rect.height * 0.3),
            control: CGPoint(x: rect.width * 0.1, y: rect.height * 0.8)
        )
        p.closeSubpath()
        return p
    }
}
