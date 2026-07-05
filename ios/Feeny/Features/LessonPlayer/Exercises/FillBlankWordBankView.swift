import SwiftUI

/// A sentence/equation with one blank; tap a chip to fill it. Tap = answer.
struct FillBlankWordBankView: View {
    let payload: FillBlankWordBankPayload
    let revealAnswer: Bool
    let submit: (Bool) -> Void

    @State private var selectedChipId: String?

    var body: some View {
        VStack(spacing: 64) {
            // The template with its blank (filled once a chip is tapped).
            HStack(spacing: 12) {
                let parts = payload.templateParts
                if !parts.before.isEmpty {
                    Text(parts.before.trimmingCharacters(in: .whitespaces))
                        .font(Theme.title(46))
                        .foregroundStyle(Theme.ink)
                }
                blankView
                if !parts.after.isEmpty {
                    Text(parts.after.trimmingCharacters(in: .whitespaces))
                        .font(Theme.title(46))
                        .foregroundStyle(Theme.ink)
                }
            }

            HStack(spacing: 24) {
                ForEach(payload.bank) { chip in
                    Button {
                        guard selectedChipId == nil else { return }
                        selectedChipId = chip.id
                        submit(payload.isCorrect(chipId: chip.id))
                    } label: {
                        Text(chip.label)
                            .font(Theme.title(36))
                            .foregroundStyle(Theme.ink)
                            .padding(.horizontal, 36)
                            .frame(minWidth: 110, minHeight: Theme.minTouchTarget)
                            .background(Capsule().fill(Theme.card))
                            .overlay(Capsule().stroke(chipBorder(chip.id), lineWidth: 5))
                            .shadow(color: .black.opacity(0.08), radius: 6, y: 3)
                    }
                    .buttonStyle(SquishyButtonStyle())
                    .accessibilityIdentifier("answer-option")
                }
            }
        }
    }

    @ViewBuilder
    private var blankView: some View {
        let filledLabel = payload.bank.first { $0.id == selectedChipId }?.label
        if let filledLabel {
            Text(filledLabel)
                .font(Theme.title(46))
                .foregroundStyle(.white)
                .padding(.horizontal, 24)
                .frame(minHeight: 76)
                .background(
                    RoundedRectangle(cornerRadius: 16)
                        .fill(selectedIsCorrect ? Theme.correct : Theme.incorrect)
                )
        } else {
            RoundedRectangle(cornerRadius: 16)
                .strokeBorder(Theme.accent, style: StrokeStyle(lineWidth: 4, dash: [10]))
                .frame(width: 130, height: 76)
                .background(Theme.accent.opacity(0.08))
        }
    }

    private var selectedIsCorrect: Bool {
        selectedChipId.map { payload.isCorrect(chipId: $0) } ?? false
    }

    private func chipBorder(_ chipId: String) -> Color {
        if revealAnswer && payload.isCorrect(chipId: chipId) {
            return Theme.correct
        }
        guard selectedChipId == chipId else { return .clear }
        return payload.isCorrect(chipId: chipId) ? Theme.correct : Theme.incorrect
    }
}
