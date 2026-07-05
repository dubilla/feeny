import SwiftUI

/// Post-profile home: one big card per subject, each leading to its own
/// skill map (and its own independent placement).
struct SubjectHomeView: View {
    @Environment(ContentStore.self) private var contentStore
    @Environment(ContentSyncService.self) private var syncService
    @Environment(ProgressStore.self) private var progressStore

    private static let subjectEmoji: [String: String] = ["math": "🔢", "reading": "📚"]
    private static let subjectColor: [String: Color] = [
        "math": Theme.accent,
        "reading": Color(red: 0.13, green: 0.62, blue: 0.74),
    ]

    var body: some View {
        NavigationStack {
            ZStack {
                Theme.background.ignoresSafeArea()
                VStack(spacing: 40) {
                    header
                    if contentStore.packs.isEmpty {
                        Spacer()
                        ProgressView().controlSize(.large)
                        Text("Getting your adventures ready…")
                            .font(Theme.body(24))
                            .foregroundStyle(Theme.ink.opacity(0.7))
                    } else {
                        subjectCards
                    }
                    Spacer()
                }
                .padding(48)
            }
            .navigationDestination(for: String.self) { subjectId in
                SkillMapView(subjectId: subjectId)
                    .toolbar(.hidden, for: .navigationBar)
            }
        }
        .task { await syncService.refreshIfNeeded() }
    }

    private var header: some View {
        HStack(spacing: 20) {
            // Tapping your buddy hands the iPad over (back to the picker).
            Button {
                progressStore.deselectProfile()
            } label: {
                Text(progressStore.activeProfile?.avatarId ?? "🙂")
                    .font(.system(size: 52))
                    .frame(width: 86, height: 86)
                    .background(Circle().fill(Theme.card))
                    .overlay(Circle().stroke(Theme.accent.opacity(0.3), lineWidth: 4))
            }
            .buttonStyle(SquishyButtonStyle())
            .accessibilityIdentifier("switch-profile")

            VStack(alignment: .leading, spacing: 2) {
                Text("Hi \(progressStore.activeProfile?.name ?? "friend")!")
                    .font(Theme.title(38))
                    .foregroundStyle(Theme.ink)
                Text("What do you want to play?")
                    .font(Theme.body(22))
                    .foregroundStyle(Theme.ink.opacity(0.6))
            }
            Spacer()
            VStack(spacing: 2) {
                Text("Level \(GameEconomy.level(forXP: progressStore.totalXP))")
                    .font(Theme.body(18))
                    .foregroundStyle(.white)
                Text("\(progressStore.totalXP) XP")
                    .font(Theme.title(26))
                    .foregroundStyle(.white)
                    .contentTransition(.numericText())
            }
            .padding(.horizontal, 28)
            .padding(.vertical, 12)
            .background(Capsule().fill(Theme.gold))
        }
    }

    private var subjectCards: some View {
        HStack(spacing: 36) {
            ForEach(contentStore.subjectsSorted, id: \.subjectId) { pack in
                subjectCard(pack)
            }
        }
    }

    private func subjectCard(_ pack: SubjectPack) -> some View {
        let allLessons = pack.units.flatMap { $0.lessons.map(\.id) }
        let doneCount = allLessons.filter { progressStore.completedLessonIds.contains($0) }.count
        let fraction = allLessons.isEmpty ? 0 : Double(doneCount) / Double(allLessons.count)
        let color = Self.subjectColor[pack.subjectId] ?? Theme.accent
        let placed = progressStore.subjectProgress(for: pack.subjectId) != nil

        return NavigationLink(value: pack.subjectId) {
            VStack(spacing: 18) {
                Text(Self.subjectEmoji[pack.subjectId] ?? "✨")
                    .font(.system(size: 84))
                Text(subjectTitle(pack))
                    .font(Theme.title(38))
                    .foregroundStyle(.white)
                if placed {
                    ProgressView(value: fraction)
                        .progressViewStyle(.linear)
                        .tint(.white)
                        .scaleEffect(y: 2.5)
                        .padding(.horizontal, 36)
                    Text("\(doneCount) of \(allLessons.count) lessons")
                        .font(Theme.body(18))
                        .foregroundStyle(.white.opacity(0.85))
                } else {
                    Text("Start your adventure!")
                        .font(Theme.body(20))
                        .foregroundStyle(.white.opacity(0.9))
                }
            }
            .frame(width: 340, height: 300)
            .background(RoundedRectangle(cornerRadius: 32).fill(color))
            .shadow(color: color.opacity(0.4), radius: 14, y: 7)
        }
        .buttonStyle(SquishyButtonStyle())
        .accessibilityIdentifier("subject-card-\(pack.subjectId)")
    }

    private func subjectTitle(_ pack: SubjectPack) -> String {
        pack.subjectId == "math" ? "Math" : pack.subjectId == "reading" ? "Reading" : pack.subjectId.capitalized
    }
}
