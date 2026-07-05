import SwiftUI

/// Audio-first: the spoken prompt is the whole stimulus. A huge replay
/// button sits above the options; option cards carry no giveaway text.
struct ListenAndPickView: View {
    let payload: ListenAndPickPayload
    let revealAnswer: Bool
    let submit: (Bool) -> Void

    @State private var selectedId: String?
    @Environment(SpeechService.self) private var speech

    var body: some View {
        VStack(spacing: 48) {
            Button {
                speech.speak(payload.prompt.spoken)
            } label: {
                VStack(spacing: 8) {
                    Image(systemName: "ear.fill")
                        .font(.system(size: 48, weight: .bold))
                    Text("Hear it again")
                        .font(Theme.body(20))
                }
                .foregroundStyle(.white)
                .frame(width: 200, height: 130)
                .background(RoundedRectangle(cornerRadius: Theme.cornerRadius).fill(Theme.accent))
            }
            .buttonStyle(SquishyButtonStyle())

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
    }

    private func borderColor(for optionId: String) -> Color {
        if revealAnswer && payload.isCorrect(optionId: optionId) {
            return Theme.correct
        }
        guard let selectedId, selectedId == optionId else { return .clear }
        return payload.isCorrect(optionId: optionId) ? Theme.correct : Theme.incorrect
    }
}
