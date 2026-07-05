import SwiftUI

/// A scene of N objects to count, answered via a big number row.
struct CountObjectsView: View {
    let payload: CountObjectsPayload
    let revealAnswer: Bool
    let submit: (Bool) -> Void

    @State private var selectedChoice: Int?

    private let columns = [GridItem(.adaptive(minimum: 72), spacing: 12)]

    var body: some View {
        VStack(spacing: 40) {
            LazyVGrid(columns: columns, spacing: 12) {
                ForEach(0..<payload.count, id: \.self) { _ in
                    VisualView(visual: payload.object)
                        .font(.system(size: 56))
                }
            }
            .padding(24)
            .frame(maxWidth: 620)
            .background(Theme.card.opacity(0.6))
            .clipShape(RoundedRectangle(cornerRadius: Theme.cornerRadius))

            HStack(spacing: 24) {
                ForEach(payload.choices, id: \.self) { choice in
                    Button {
                        guard selectedChoice == nil else { return }
                        selectedChoice = choice
                        submit(payload.isCorrect(choice: choice))
                    } label: {
                        Text("\(choice)")
                            .font(Theme.title(48))
                            .foregroundStyle(Theme.ink)
                            .frame(width: 110, height: 110)
                            .background(Theme.card)
                            .clipShape(Circle())
                            .overlay(Circle().stroke(borderColor(for: choice), lineWidth: 5))
                            .shadow(color: .black.opacity(0.08), radius: 8, y: 4)
                    }
                    .buttonStyle(SquishyButtonStyle())
                    .accessibilityIdentifier("answer-option")
                }
            }
        }
    }

    private func borderColor(for choice: Int) -> Color {
        if revealAnswer && payload.isCorrect(choice: choice) {
            return Theme.correct
        }
        guard let selectedChoice, selectedChoice == choice else { return .clear }
        return payload.isCorrect(choice: choice) ? Theme.correct : Theme.incorrect
    }
}
