import SwiftUI

/// Tap tiles in order to fill the slots. Only the correct next tile locks in;
/// wrong taps wiggle and count as a mistake. Self-completing: submits when
/// every slot is filled — correct only with zero mistakes.
struct OrderingView: View {
    let payload: OrderingPayload
    let revealAnswer: Bool
    let submit: (Bool) -> Void

    @State private var placed: [String] = []
    @State private var mistakes = 0
    @State private var shakeItem: String?

    var body: some View {
        VStack(spacing: 56) {
            // Slots
            HStack(spacing: 16) {
                ForEach(0..<payload.correctOrder.count, id: \.self) { index in
                    slot(index: index)
                }
            }
            // Tiles
            HStack(spacing: 20) {
                ForEach(payload.items) { item in
                    tile(item)
                }
            }
        }
    }

    private func slot(index: Int) -> some View {
        Group {
            if index < placed.count, let item = payload.items.first(where: { $0.id == placed[index] }) {
                tileFaceView(item)
                    .frame(minWidth: 110, minHeight: Theme.minTouchTarget)
                    .background(Theme.correct.opacity(0.18))
                    .clipShape(RoundedRectangle(cornerRadius: 18))
                    .overlay(RoundedRectangle(cornerRadius: 18).stroke(Theme.correct, lineWidth: 4))
            } else {
                RoundedRectangle(cornerRadius: 18)
                    .strokeBorder(Theme.ink.opacity(0.25), style: StrokeStyle(lineWidth: 3, dash: [8]))
                    .frame(minWidth: 110, minHeight: Theme.minTouchTarget)
                    .background(Theme.card.opacity(0.4))
            }
        }
    }

    private func tile(_ item: OrderingItem) -> some View {
        let isPlaced = placed.contains(item.id)
        return Button {
            tap(item)
        } label: {
            tileFaceView(item)
                .frame(minWidth: 110, minHeight: Theme.minTouchTarget)
                .background(Theme.card)
                .clipShape(RoundedRectangle(cornerRadius: 18))
                .shadow(color: .black.opacity(0.08), radius: 6, y: 3)
        }
        .buttonStyle(SquishyButtonStyle())
        .disabled(isPlaced)
        .opacity(isPlaced ? 0.25 : 1)
        .modifier(ShakeEffect(shakes: shakeItem == item.id ? 2 : 0))
        .accessibilityIdentifier("answer-option")
    }

    private func tileFaceView(_ item: OrderingItem) -> some View {
        HStack(spacing: 8) {
            if let visual = item.visual {
                VisualView(visual: visual)
                    .font(.system(size: 36))
            }
            if let label = item.label {
                Text(label)
                    .font(Theme.title(34))
                    .foregroundStyle(Theme.ink)
            }
        }
        .padding(.horizontal, 20)
    }

    private func tap(_ item: OrderingItem) {
        let nextExpected = payload.correctOrder[placed.count]
        if item.id == nextExpected {
            withAnimation(.spring(response: 0.3, dampingFraction: 0.6)) {
                placed.append(item.id)
            }
            if placed.count == payload.correctOrder.count {
                submit(mistakes == 0)
            }
        } else {
            mistakes += 1
            withAnimation(.default) { shakeItem = item.id }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.4) { shakeItem = nil }
        }
    }
}
