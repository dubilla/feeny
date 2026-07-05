import SwiftUI

/// Lightweight celebration confetti: Canvas + TimelineView, no dependencies.
struct ConfettiView: View {
    private struct Piece {
        let x: Double        // 0...1 horizontal position
        let delay: Double
        let speed: Double    // fall duration in seconds
        let size: Double
        let color: Color
        let spin: Double
    }

    private let pieces: [Piece]
    private let startDate = Date()

    init(count: Int = 80) {
        let palette: [Color] = [Theme.accent, Theme.correct, Theme.gold, .pink, .cyan]
        var generator = SystemRandomNumberGenerator()
        pieces = (0..<count).map { i in
            Piece(
                x: Double.random(in: 0...1, using: &generator),
                delay: Double.random(in: 0...0.8, using: &generator),
                speed: Double.random(in: 1.8...3.2, using: &generator),
                size: Double.random(in: 8...16, using: &generator),
                color: palette[i % palette.count],
                spin: Double.random(in: 2...6, using: &generator)
            )
        }
    }

    var body: some View {
        TimelineView(.animation) { timeline in
            Canvas { context, size in
                let elapsed = timeline.date.timeIntervalSince(startDate)
                for piece in pieces {
                    let t = elapsed - piece.delay
                    guard t > 0 else { continue }
                    let progress = (t / piece.speed).truncatingRemainder(dividingBy: 1)
                    let y = progress * (size.height + 40) - 20
                    let wobble = sin(t * 4 + piece.x * 10) * 18
                    let rect = CGRect(
                        x: piece.x * size.width + wobble,
                        y: y,
                        width: piece.size,
                        height: piece.size * 0.6
                    )
                    var pieceContext = context
                    pieceContext.translateBy(x: rect.midX, y: rect.midY)
                    pieceContext.rotate(by: .radians(t * piece.spin))
                    pieceContext.fill(
                        Path(roundedRect: CGRect(origin: CGPoint(x: -rect.width / 2, y: -rect.height / 2), size: rect.size), cornerRadius: 2),
                        with: .color(piece.color)
                    )
                }
            }
        }
        .allowsHitTesting(false)
    }
}
