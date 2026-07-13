import SwiftUI

/// Fundations tap-out. The prompt speaks the whole word; the kid taps a row of
/// boxes left→right, each revealing its grapheme with a soft pop; the final tap
/// blends the whole word again. Kinesthetic practice — always warm-correct,
/// self-completing, no wrong answer (only the next box is tappable). Per-phoneme
/// audio is deliberately absent: TTS mangles isolated sounds (AUTHORING.md), so
/// all speech stays at the word level.
struct TapTheSoundsView: View {
    let payload: TapTheSoundsPayload
    let submit: (Bool) -> Void

    @State private var revealedCount = 0
    @State private var blending = false
    @Environment(SpeechService.self) private var speech
    @Environment(SoundEffects.self) private var sounds

    private var allRevealed: Bool { revealedCount >= payload.sounds.count }

    var body: some View {
        VStack(spacing: 40) {
            if let visual = payload.visual {
                VisualView(visual: visual)
            }

            HStack(spacing: 16) {
                ForEach(payload.sounds) { tile in
                    box(for: tile)
                }
            }

            Button {
                speech.speak(payload.prompt.spoken)
            } label: {
                HStack(spacing: 12) {
                    Image(systemName: "ear.fill")
                        .font(.system(size: 28, weight: .bold))
                    Text("Hear it again")
                        .font(Theme.body(20))
                }
                .foregroundStyle(.white)
                .frame(height: Theme.minTouchTarget)
                .padding(.horizontal, 32)
                .background(Capsule().fill(Theme.accent))
            }
            .buttonStyle(SquishyButtonStyle())

            // Without audio this is pure ritual — show the word so a nearby
            // grown-up or reading kid can still guide the tap-out.
            if speech.promptAudioUnavailable {
                Text(payload.word)
                    .font(Theme.title(30))
                    .foregroundStyle(Theme.ink)
                    .accessibilityIdentifier("tapsounds-fallback-text")
            }
        }
    }

    private func box(for tile: SoundTile) -> some View {
        let revealed = tile.id < revealedCount
        let isNext = tile.id == revealedCount && !blending
        return Button {
            tap(tile)
        } label: {
            ZStack {
                RoundedRectangle(cornerRadius: 18)
                    .fill(revealed ? Theme.correct.opacity(0.18) : Theme.card)
                    .overlay(
                        RoundedRectangle(cornerRadius: 18)
                            .stroke(
                                revealed ? Theme.correct : Theme.ink.opacity(isNext ? 0.5 : 0.2),
                                style: StrokeStyle(lineWidth: revealed ? 4 : 3, dash: revealed ? [] : [8])
                            )
                    )
                if revealed {
                    Text(tile.grapheme)
                        .font(Theme.title(44))
                        .foregroundStyle(Theme.ink)
                }
            }
            .frame(width: 96, height: Theme.minTouchTarget + 8)
            .scaleEffect(isNext ? 1.08 : 1)
        }
        .buttonStyle(SquishyButtonStyle())
        .disabled(!isNext)
        // Only the next box carries the shared answer id, so the UI-test
        // rotating-tap loop always advances the tap-out deterministically.
        .accessibilityIdentifier(isNext ? "answer-option" : "sound-box-\(tile.id)")
        .animation(.spring(response: 0.3, dampingFraction: 0.6), value: isNext)
        .animation(.spring(response: 0.3, dampingFraction: 0.6), value: revealed)
    }

    private func tap(_ tile: SoundTile) {
        guard tile.id == revealedCount, !blending else { return }
        sounds.play(.tap)
        revealedCount += 1
        if allRevealed {
            blending = true
            speech.speak(payload.word)
            // Let the blend land before advancing; no repeatForever animation
            // (kills the UI-test runner — see the idle-loop rule).
            DispatchQueue.main.asyncAfter(deadline: .now() + 1.1) {
                submit(true)
            }
        }
    }
}
