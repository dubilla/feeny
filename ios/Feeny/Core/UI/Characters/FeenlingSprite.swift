import SwiftUI

/// One paint-order layer of a compiled character (emitted by svg2shape.py).
struct CharacterLayer {
    let path: (CGRect) -> Path
    let color: Color
    var opacity: Double = 1
}

/// Which Feenling species have drawn art. Species missing here render via
/// their catalog emoji — the same never-crash posture as `.unsupported`
/// exercises, so content drops can outpace the art roster safely.
enum FeenlingArt {
    struct Art {
        let aspectRatio: CGFloat
        let layers: [CharacterLayer]
    }

    static func art(for feenlingId: String) -> Art? {
        switch feenlingId {
        case "math-dot": Art(aspectRatio: DotPaths.aspectRatio, layers: DotPaths.layers)
        case "math-shelly": Art(aspectRatio: ShellyPaths.aspectRatio, layers: ShellyPaths.layers)
        case "math-bloop": Art(aspectRatio: BloopPaths.aspectRatio, layers: BloopPaths.layers)
        case "reading-peep": Art(aspectRatio: PeepPaths.aspectRatio, layers: PeepPaths.layers)
        case "reading-chirp": Art(aspectRatio: ChirpPaths.aspectRatio, layers: ChirpPaths.layers)
        case "reading-hoot": Art(aspectRatio: HootPaths.aspectRatio, layers: HootPaths.layers)
        default: nil
        }
    }
}

/// Draws a Feenling: compiled vector art when we have it (one Canvas pass —
/// cheap enough for a 48-cell album), catalog emoji otherwise.
struct FeenlingSprite: View {
    let feenling: Feenling
    /// Height in points; width follows the drawing's aspect.
    var size: CGFloat = 100
    /// Subtle idle squash for reveal/companion moments. Off in grids.
    var breathes: Bool = false

    @State private var breathe = false

    var body: some View {
        Group {
            if let art = FeenlingArt.art(for: feenling.id) {
                Canvas { context, canvasSize in
                    let rect = CGRect(origin: .zero, size: canvasSize)
                    for layer in art.layers {
                        context.fill(
                            layer.path(rect),
                            with: .color(layer.color.opacity(layer.opacity))
                        )
                    }
                }
                .aspectRatio(art.aspectRatio, contentMode: .fit)
                .frame(height: size)
            } else {
                Text(feenling.emoji)
                    .font(.system(size: size * 0.82))
                    .frame(height: size)
            }
        }
        .scaleEffect(y: breathe ? 1.02 : 1.0, anchor: .bottom)
        .motion(Theme.Motion.breathe, value: breathe)
        .onAppear { if breathes { breathe = true } }
        .accessibilityHidden(true)
    }
}
