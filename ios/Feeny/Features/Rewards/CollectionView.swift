import SwiftUI

/// The Feenling album: every creature in the catalog, hatched ones in full
/// color, the rest as mystery silhouettes. Unhatched eggs wait at the top —
/// tap to crack (covers app-quit-before-hatch and challenge skips).
struct CollectionView: View {
    let onClose: () -> Void

    @Environment(ProgressStore.self) private var progressStore
    @Environment(ContentStore.self) private var contentStore

    /// Identifiable wrapper so a plain subject id can drive fullScreenCover(item:).
    private struct HatchTarget: Identifiable {
        let subjectId: String
        var id: String { subjectId }
    }

    @State private var hatching: HatchTarget?

    private let columns = Array(repeating: GridItem(.flexible(), spacing: 20), count: 6)

    var body: some View {
        ZStack {
            Theme.background.ignoresSafeArea()
            ScrollView {
                VStack(spacing: 28) {
                    header
                    pendingEggs
                    ForEach(subjectIds, id: \.self) { subjectId in
                        section(for: subjectId)
                    }
                }
                .padding(40)
            }
        }
        .fullScreenCover(item: $hatching) { target in
            EggHatchView(subjectId: target.subjectId) {
                hatching = nil
            }
        }
    }

    /// Subjects in pack order; falls back to the catalog if packs haven't synced.
    private var subjectIds: [String] {
        let fromPacks = contentStore.subjectsSorted.map(\.subjectId)
        return fromPacks.isEmpty ? ["math", "reading"] : fromPacks
    }

    private var header: some View {
        HStack(spacing: 18) {
            Button(action: onClose) {
                Image(systemName: "chevron.left")
                    .font(.system(size: 26, weight: .bold))
                    .foregroundStyle(Theme.ink.opacity(0.55))
                    .frame(width: 72, height: 72)
                    .background(Circle().fill(Theme.card))
            }
            .buttonStyle(SquishyButtonStyle())
            .accessibilityIdentifier("close-collection")

            Text("My Feenlings")
                .font(Theme.title(44))
                .foregroundStyle(Theme.accent)
            Spacer()
            let owned = progressStore.ownedFeenlingCounts.count
            Text("\(owned) of \(CollectibleCatalog.all.count)")
                .font(Theme.title(26))
                .foregroundStyle(.white)
                .padding(.horizontal, 24)
                .padding(.vertical, 12)
                .background(Capsule().fill(Theme.accent))
        }
    }

    @ViewBuilder
    private var pendingEggs: some View {
        let eggs = progressStore.pendingEggSubjectIds
        if !eggs.isEmpty {
            HStack(spacing: 20) {
                EggShape()
                    .fill(LinearGradient(
                        colors: [.white, Color(red: 1.0, green: 0.93, blue: 0.78)],
                        startPoint: .top, endPoint: .bottom
                    ))
                    .frame(width: 56, height: 70)
                    .shadow(color: .black.opacity(0.12), radius: 5, y: 3)
                VStack(alignment: .leading, spacing: 4) {
                    Text(eggs.count == 1 ? "You have an egg!" : "You have \(eggs.count) eggs!")
                        .font(Theme.title(28))
                        .foregroundStyle(.white)
                    Text("Tap to crack it open")
                        .font(Theme.body(20))
                        .foregroundStyle(.white.opacity(0.85))
                }
                Spacer()
                Image(systemName: "hand.tap.fill")
                    .font(.system(size: 36))
                    .foregroundStyle(.white)
            }
            .padding(24)
            .frame(minHeight: Theme.minTouchTarget)
            .background(RoundedRectangle(cornerRadius: Theme.cornerRadius).fill(Theme.gold))
            .onTapGesture {
                if let first = eggs.first { hatching = HatchTarget(subjectId: first) }
            }
            .accessibilityIdentifier("pending-egg-banner")
            .accessibilityAddTraits(.isButton)
        }
    }

    private func section(for subjectId: String) -> some View {
        let feenlings = CollectibleCatalog.feenlings(for: subjectId)
        let counts = progressStore.ownedFeenlingCounts

        return VStack(alignment: .leading, spacing: 18) {
            HStack(spacing: 12) {
                Text(CollectibleCatalog.familyName(for: subjectId))
                    .font(Theme.title(32))
                    .foregroundStyle(Theme.ink)
                let found = feenlings.filter { counts[$0.id] != nil }.count
                Text("\(found)/\(feenlings.count)")
                    .font(Theme.body(22))
                    .foregroundStyle(Theme.ink.opacity(0.5))
            }
            LazyVGrid(columns: columns, spacing: 20) {
                ForEach(feenlings) { feenling in
                    FeenlingCard(feenling: feenling, count: counts[feenling.id] ?? 0)
                }
            }
        }
    }
}

struct FeenlingCard: View {
    let feenling: Feenling
    let count: Int

    private var hatched: Bool { count > 0 }

    private var rarityColor: Color {
        switch feenling.rarity {
        case .shiny: Theme.gold
        case .rare: Theme.accent
        case .common: Theme.correct
        }
    }

    var body: some View {
        VStack(spacing: 8) {
            ZStack(alignment: .topTrailing) {
                // Drawn species show real art (true silhouettes when
                // unhatched); the long tail stays emoji until its art drop.
                FeenlingSprite(feenling: feenling, size: 84)
                    .grayscale(hatched ? 0 : 1)
                    .brightness(hatched ? 0 : -0.55)
                    .opacity(hatched ? 1 : 0.45)
                    .frame(maxWidth: .infinity)
                    .frame(height: 90)
                if count > 1 {
                    Text("×\(count)")
                        .font(Theme.title(17))
                        .foregroundStyle(.white)
                        .padding(.horizontal, 10)
                        .padding(.vertical, 4)
                        .background(Capsule().fill(rarityColor))
                }
            }
            Text(hatched ? feenling.name : "???")
                .font(Theme.body(18))
                .foregroundStyle(Theme.ink.opacity(hatched ? 0.85 : 0.4))
        }
        .padding(.vertical, 14)
        .frame(maxWidth: .infinity)
        .background(
            RoundedRectangle(cornerRadius: 20)
                .fill(hatched ? Theme.card : Color(white: 0.93))
        )
        .overlay(
            RoundedRectangle(cornerRadius: 20)
                .stroke(hatched ? rarityColor.opacity(feenling.rarity == .common ? 0 : 0.8) : .clear, lineWidth: 4)
        )
        .shadow(color: .black.opacity(hatched ? 0.07 : 0), radius: 6, y: 3)
        .accessibilityIdentifier(hatched ? "feenling-card" : "feenling-card-mystery")
    }
}
