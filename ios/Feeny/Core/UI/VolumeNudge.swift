import SwiftUI

/// Non-blocking banner for when spoken prompts are on but the hardware
/// volume is zero — a pre-reader would just get silent exercises. Icon-first
/// (animated speaker + up arrow) so it works without reading; warm tone,
/// dismissable with one big tap.
struct VolumeNudgeBanner: View {
    let onDismiss: () -> Void

    var body: some View {
        HStack(spacing: 20) {
            Image(systemName: "speaker.wave.3.fill")
                .font(.system(size: 36, weight: .bold))
                .foregroundStyle(Theme.accent)
                .symbolEffect(.variableColor.iterative, options: .repeating)

            VStack(alignment: .leading, spacing: 4) {
                Text("Turn me up!")
                    .font(Theme.title(26))
                    .foregroundStyle(Theme.ink)
                HStack(spacing: 6) {
                    Image(systemName: "speaker.fill")
                    Image(systemName: "arrow.up")
                }
                .font(.system(size: 18, weight: .bold))
                .foregroundStyle(Theme.ink.opacity(0.5))
            }

            Spacer(minLength: 12)

            Button(action: onDismiss) {
                Image(systemName: "xmark")
                    .font(.system(size: 22, weight: .bold))
                    .foregroundStyle(Theme.ink.opacity(0.4))
                    .frame(width: Theme.minTouchTarget, height: Theme.minTouchTarget)
            }
            .buttonStyle(SquishyButtonStyle())
            .accessibilityLabel("Dismiss")
        }
        .padding(.leading, 28)
        .padding(.vertical, 8)
        .background(
            RoundedRectangle(cornerRadius: Theme.cornerRadius)
                .fill(Theme.card)
                .shadow(color: .black.opacity(0.12), radius: 10, y: 4)
        )
        .frame(maxWidth: 480)
        .accessibilityIdentifier("volume-nudge")
    }
}
