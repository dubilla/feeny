import SwiftUI

/// Big single-tap age buttons (4–10), answered by the kid — no parent gate.
/// Shared by profile creation and the placement age-ask for older profiles.
/// The spoken prompt carries the question; the numerals are the affordance.
struct AgePicker: View {
    var onPick: (Int) -> Void

    static let ages = Array(4...10)
    private let columns = [GridItem(.adaptive(minimum: 116), spacing: 20)]

    var body: some View {
        LazyVGrid(columns: columns, spacing: 20) {
            ForEach(Self.ages, id: \.self) { age in
                Button {
                    onPick(age)
                } label: {
                    Text("\(age)")
                        .font(Theme.title(48))
                        .foregroundStyle(Theme.ink)
                        .frame(width: 116, height: 116)
                        .background(Circle().fill(Theme.card))
                        .shadow(color: .black.opacity(0.08), radius: 8, y: 4)
                }
                .buttonStyle(SquishyButtonStyle())
                .accessibilityIdentifier("age-\(age)")
            }
        }
        .frame(maxWidth: 700)
    }
}
