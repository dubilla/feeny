import SwiftUI

/// Post-profile home: one big card per subject, each leading to its own
/// skill map (and its own independent placement).
struct SubjectHomeView: View {
    @Environment(ContentStore.self) private var contentStore
    @Environment(ContentSyncService.self) private var syncService
    @Environment(ProgressStore.self) private var progressStore

    @State private var showCollection = false
    @State private var showParentGate = false
    @State private var showSettings = false

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
                    parentCorner
                }
                .padding(48)
            }
            .navigationDestination(for: String.self) { subjectId in
                SkillMapView(subjectId: subjectId)
                    .toolbar(.hidden, for: .navigationBar)
            }
        }
        .task { await syncService.refreshIfNeeded() }
        .fullScreenCover(isPresented: $showCollection) {
            CollectionView { showCollection = false }
        }
        .sheet(isPresented: $showParentGate) {
            ParentGateView { showSettings = true }
        }
        .sheet(isPresented: $showSettings) {
            ParentSettingsView()
        }
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

            streakChip
            collectionButton

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

    /// The streak flame: bright once a lesson is done today, asleep otherwise.
    /// A sleeping flame is an invitation ("wake it up!"), never a guilt trip.
    private var streakChip: some View {
        let streak = progressStore.streakDisplay
        return HStack(spacing: 8) {
            ZStack {
                Image(systemName: "flame.fill")
                    .font(.system(size: 30))
                    .foregroundStyle(
                        streak.isAwakeToday
                            ? AnyShapeStyle(LinearGradient(
                                colors: [Theme.gold, Theme.incorrect],
                                startPoint: .top, endPoint: .bottom
                            ))
                            : AnyShapeStyle(Theme.ink.opacity(0.25))
                    )
                if !streak.isAwakeToday {
                    Image(systemName: "zzz")
                        .font(.system(size: 15, weight: .bold))
                        .foregroundStyle(Theme.ink.opacity(0.45))
                        .offset(x: 16, y: -16)
                }
            }
            Text("\(streak.count)")
                .font(Theme.title(28))
                .foregroundStyle(streak.isAwakeToday ? Theme.incorrect : Theme.ink.opacity(0.45))
                .contentTransition(.numericText())
        }
        .padding(.horizontal, 22)
        .frame(height: 86)
        .background(Capsule().fill(Theme.card))
        .accessibilityIdentifier("streak-chip")
        .accessibilityLabel(
            streak.isAwakeToday
                ? "\(streak.count) day streak"
                : "Your streak flame is sleeping. Play a lesson to wake it up!"
        )
    }

    /// Quiet corner button for parents — deliberately small and low-contrast
    /// (this is the one tappable thing on screen NOT designed for kids).
    private var parentCorner: some View {
        HStack {
            Spacer()
            Button {
                showParentGate = true
            } label: {
                Image(systemName: "gearshape.fill")
                    .font(.system(size: 22))
                    .foregroundStyle(Theme.ink.opacity(0.25))
                    .frame(width: 56, height: 56)
            }
            .accessibilityIdentifier("parent-gate-button")
            .accessibilityLabel("Grown-up settings")
        }
    }

    /// Doorway to the Feenling album, with an egg badge when hatches are owed.
    private var collectionButton: some View {
        Button {
            showCollection = true
        } label: {
            ZStack(alignment: .topTrailing) {
                Image(systemName: "pawprint.fill")
                    .font(.system(size: 34))
                    .foregroundStyle(Theme.accent)
                    .frame(width: 86, height: 86)
                    .background(Circle().fill(Theme.card))
                let eggs = progressStore.pendingEggCount()
                if eggs > 0 {
                    Text("\(eggs)")
                        .font(Theme.title(18))
                        .foregroundStyle(.white)
                        .frame(width: 34, height: 34)
                        .background(Circle().fill(Theme.incorrect))
                }
            }
        }
        .buttonStyle(SquishyButtonStyle())
        .accessibilityIdentifier("collection-button")
        .accessibilityLabel("My Feenlings")
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
