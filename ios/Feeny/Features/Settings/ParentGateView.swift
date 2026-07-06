import SwiftUI

/// The grown-up gate: press and hold for three full seconds. Trivial for an
/// adult, reliably beyond an impatient five-year-old's attention span —
/// and everything behind it confirms again before doing anything scary.
struct ParentGateView: View {
    let onPassed: () -> Void

    @Environment(\.dismiss) private var dismiss
    @State private var holdProgress: CGFloat = 0
    @State private var holding = false

    var body: some View {
        ZStack {
            Theme.background.ignoresSafeArea()
            VStack(spacing: 32) {
                HStack {
                    Button {
                        dismiss()
                    } label: {
                        Image(systemName: "xmark")
                            .font(.system(size: 22, weight: .bold))
                            .foregroundStyle(Theme.ink.opacity(0.4))
                            .frame(width: 56, height: 56)
                    }
                    .accessibilityIdentifier("close-parent-gate")
                    Spacer()
                }

                Spacer()

                Text("For grown-ups")
                    .font(Theme.title(40))
                    .foregroundStyle(Theme.ink)
                Text("Press and hold the button for 3 seconds")
                    .font(Theme.body(24))
                    .foregroundStyle(Theme.ink.opacity(0.6))

                ZStack {
                    Circle()
                        .stroke(Theme.ink.opacity(0.12), lineWidth: 10)
                        .frame(width: 190, height: 190)
                    Circle()
                        .trim(from: 0, to: holdProgress)
                        .stroke(Theme.accent, style: StrokeStyle(lineWidth: 10, lineCap: .round))
                        .frame(width: 190, height: 190)
                        .rotationEffect(.degrees(-90))
                    Circle()
                        .fill(holding ? Theme.accent : Theme.card)
                        .frame(width: 150, height: 150)
                        .shadow(color: .black.opacity(0.1), radius: 10, y: 5)
                    Image(systemName: "hand.raised.fill")
                        .font(.system(size: 52))
                        .foregroundStyle(holding ? .white : Theme.accent)
                }
                .accessibilityIdentifier("parent-gate-hold")
                .accessibilityLabel("Press and hold for three seconds")
                .onLongPressGesture(minimumDuration: 3.0) {
                    dismiss()
                    onPassed()
                } onPressingChanged: { pressing in
                    holding = pressing
                    if pressing {
                        withAnimation(.linear(duration: 3.0)) { holdProgress = 1 }
                    } else {
                        withAnimation(.easeOut(duration: 0.25)) { holdProgress = 0 }
                    }
                }

                Spacer()
                Spacer()
            }
            .padding(40)
        }
    }
}
