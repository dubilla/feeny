import SwiftUI

/// Tap 1 of 2–4 big cards. Emoji/label options; tap = answer.
struct MultipleChoiceImageView: View {
    let payload: MultipleChoiceImagePayload
    let revealAnswer: Bool
    let submit: (Bool) -> Void

    @State private var selectedId: String?

    var body: some View {
        HStack(spacing: 24) {
            ForEach(payload.options) { option in
                Button {
                    guard selectedId == nil else { return }
                    selectedId = option.id
                    submit(payload.isCorrect(optionId: option.id))
                } label: {
                    OptionCard(borderColor: borderColor(for: option.id)) {
                        VStack(spacing: 12) {
                            if let visual = option.visual {
                                VisualView(visual: visual)
                            }
                            if let label = option.label {
                                Text(label)
                                    .font(Theme.title(option.visual == nil ? 56 : 30))
                                    .foregroundStyle(Theme.ink)
                            }
                        }
                        .padding(20)
                    }
                }
                .buttonStyle(SquishyButtonStyle())
                .accessibilityIdentifier("answer-option")
            }
        }
    }

    private func borderColor(for optionId: String) -> Color {
        if revealAnswer && payload.isCorrect(optionId: optionId) {
            return Theme.correct
        }
        guard let selectedId, selectedId == optionId else { return .clear }
        return payload.isCorrect(optionId: optionId) ? Theme.correct : Theme.incorrect
    }
}

/// Renders an emoji (possibly a multi-character group scene) or a bundled asset.
struct VisualView: View {
    let visual: Visual

    var body: some View {
        switch visual.kind {
        case .emoji:
            Text(visual.value)
                .font(.system(size: visual.value.count > 4 ? 40 : 64))
                .multilineTextAlignment(.center)
        case .asset:
            Image(visual.value)
                .resizable()
                .scaledToFit()
                .frame(maxWidth: 120, maxHeight: 120)
        }
    }
}
