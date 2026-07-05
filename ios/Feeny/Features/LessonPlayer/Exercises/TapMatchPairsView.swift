import SwiftUI

/// Two columns of tiles; tap a left tile, then its right partner.
/// Self-completing: submits once every pair is matched — correct only if
/// there were zero mismatches along the way.
struct TapMatchPairsView: View {
    let payload: TapMatchPairsPayload
    let revealAnswer: Bool
    let submit: (Bool) -> Void

    @State private var selectedLeft: String?
    @State private var matched: Set<String> = []
    @State private var mistakes = 0
    @State private var shakeRight: String?
    @State private var rightOrder: [MatchPair] = []

    var body: some View {
        HStack(spacing: 60) {
            VStack(spacing: 20) {
                ForEach(payload.pairs) { pair in
                    tile(face: pair.left, matched: matched.contains(pair.id), selected: selectedLeft == pair.id) {
                        guard !matched.contains(pair.id) else { return }
                        selectedLeft = pair.id
                    }
                }
            }
            VStack(spacing: 20) {
                ForEach(rightOrder) { pair in
                    tile(face: pair.right, matched: matched.contains(pair.id), selected: false) {
                        tapRight(pair)
                    }
                    .modifier(ShakeEffect(shakes: shakeRight == pair.id ? 2 : 0))
                }
            }
        }
        .onAppear {
            // Deterministic shuffle-ish: reverse so pairs don't line up straight across.
            rightOrder = payload.pairs.count > 2 ? [payload.pairs[1], payload.pairs[2], payload.pairs[0]] : payload.pairs.reversed()
        }
    }

    private func tapRight(_ pair: MatchPair) {
        guard !matched.contains(pair.id), let left = selectedLeft else { return }
        if left == pair.id {
            withAnimation(.spring(response: 0.3, dampingFraction: 0.6)) {
                _ = matched.insert(pair.id)
            }
            selectedLeft = nil
            if matched.count == payload.pairs.count {
                submit(mistakes == 0)
            }
        } else {
            mistakes += 1
            withAnimation(.default) { shakeRight = pair.id }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.4) { shakeRight = nil }
        }
    }

    private func tile(face: TileFace, matched: Bool, selected: Bool, action: @escaping () -> Void) -> some View {
        Button(action: action) {
            HStack(spacing: 10) {
                if let visual = face.visual {
                    VisualView(visual: visual)
                        .font(.system(size: 40))
                }
                if let label = face.label {
                    Text(label)
                        .font(Theme.title(30))
                        .foregroundStyle(Theme.ink)
                }
            }
            .padding(.horizontal, 28)
            .frame(minWidth: 170, minHeight: Theme.minTouchTarget)
            .background(matched ? Theme.correct.opacity(0.25) : Theme.card)
            .clipShape(RoundedRectangle(cornerRadius: Theme.cornerRadius))
            .overlay(
                RoundedRectangle(cornerRadius: Theme.cornerRadius)
                    .stroke(matched ? Theme.correct : (selected ? Theme.accent : .clear), lineWidth: 5)
            )
            .shadow(color: .black.opacity(matched ? 0 : 0.08), radius: 8, y: 4)
            .opacity(matched ? 0.7 : 1)
        }
        .buttonStyle(SquishyButtonStyle())
        .disabled(matched)
        .accessibilityIdentifier("answer-option")
    }
}

/// Small horizontal wiggle for wrong taps — gentle, never harsh.
struct ShakeEffect: GeometryEffect {
    var shakes: CGFloat

    var animatableData: CGFloat {
        get { shakes }
        set { shakes = newValue }
    }

    func effectValue(size: CGSize) -> ProjectionTransform {
        ProjectionTransform(CGAffineTransform(translationX: sin(shakes * .pi * 2) * 8, y: 0))
    }
}
