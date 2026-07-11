import SwiftUI

/// Post-profile home — the north-star screen of the design language
/// (docs/DESIGN_LANGUAGE.md): greeting block, one stat cluster, a designed
/// card per subject, and a quiet grown-ups affordance. Calm at rest; every
/// touch answers with motion + sound.
struct SubjectHomeView: View {
    @Environment(ContentStore.self) private var contentStore
    @Environment(ContentSyncService.self) private var syncService
    @Environment(ProgressStore.self) private var progressStore
    @Environment(SoundEffects.self) private var soundEffects

    @State private var path: [String] = []
    @State private var showCollection = false
    @State private var showParentGate = false
    @State private var showSettings = false

    private static let subjectColor: [String: Color] = [
        "math": Theme.accent,
        "reading": Theme.teal,
    ]

    var body: some View {
        NavigationStack(path: $path) {
            ZStack {
                Theme.background.ignoresSafeArea()
                VStack(spacing: Theme.Space.xxl) {
                    header
                    if contentStore.packs.isEmpty {
                        Spacer()
                        ProgressView().controlSize(.large)
                        Text("Getting your adventures ready…")
                            .font(Theme.body(24))
                            .foregroundStyle(Theme.ink.opacity(0.7))
                    } else {
                        Spacer()
                        subjectCards
                    }
                    Spacer()
                    parentCorner
                }
                .padding(Theme.Space.xxl)
            }
            // Feeny stands at the page's edge and waves hello — the face of
            // the app, first thing every day (idle + blinks after).
            .overlay(alignment: .bottomLeading) {
                FeenyMascot(pose: .wave, size: 170)
                    .padding(.leading, Theme.Space.xxl)
                    .padding(.bottom, Theme.Space.l)
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

    // MARK: - Header

    private var header: some View {
        HStack(spacing: Theme.Space.l) {
            // Tapping your buddy hands the iPad over (back to the picker).
            Button {
                soundEffects.play(.tap)
                progressStore.deselectProfile()
            } label: {
                AvatarView(avatarId: progressStore.activeProfile?.avatarId ?? "round-violet", size: 68)
                    .frame(width: Theme.minTouchTarget, height: Theme.minTouchTarget)
                    .background(Circle().fill(Theme.card))
                    .overlay(Circle().stroke(Theme.accent.opacity(0.3), lineWidth: 4))
            }
            .buttonStyle(SquishyButtonStyle())
            .accessibilityIdentifier("switch-profile")
            .accessibilityLabel("Switch player")

            VStack(alignment: .leading, spacing: Theme.Space.xxs) {
                Text("Hi \(progressStore.activeProfile?.name ?? "friend")!")
                    .font(Theme.display(46))
                    .foregroundStyle(Theme.ink)
                Text("What do you want to play?")
                    .font(Theme.body(22))
                    .foregroundStyle(Theme.ink.opacity(0.6))
            }
            Spacer(minLength: Theme.Space.l)
            statCluster
        }
    }

    /// Streak, Feenlings, and level/XP as one composed cluster.
    private var statCluster: some View {
        let streak = progressStore.streakDisplay
        return HStack(spacing: 0) {
            // Streak flame: bright once a lesson is done today, asleep
            // otherwise — a sleeping flame is an invitation, never guilt.
            HStack(spacing: Theme.Space.xs) {
                FlameGlyph(size: 30, isLit: streak.isAwakeToday)
                Text("\(streak.count)")
                    .font(Theme.displayBold(28))
                    .foregroundStyle(streak.isAwakeToday ? Theme.incorrect : Theme.ink.opacity(0.45))
                    .contentTransition(.numericText())
            }
            .padding(.horizontal, Theme.Space.l)
            .accessibilityElement(children: .ignore)
            .accessibilityIdentifier("streak-chip")
            .accessibilityLabel(
                streak.isAwakeToday
                    ? "\(streak.count) day streak"
                    : "Your streak flame is sleeping. Play a lesson to wake it up!"
            )

            divider

            // Doorway to the Feenling album, with a badge when eggs wait.
            Button {
                soundEffects.play(.tap)
                showCollection = true
            } label: {
                ZStack(alignment: .topTrailing) {
                    HStack(spacing: Theme.Space.xs) {
                        EggGlyph(size: 24)
                        Text("\(progressStore.ownedFeenlingCounts.count)")
                            .font(Theme.displayBold(28))
                            .foregroundStyle(Theme.ink.opacity(0.8))
                    }
                    let eggs = progressStore.pendingEggCount()
                    if eggs > 0 {
                        Text("\(eggs)")
                            .font(Theme.heading(15))
                            .foregroundStyle(.white)
                            .padding(.horizontal, 7)
                            .frame(minWidth: 26, minHeight: 26)
                            .background(Capsule().fill(Theme.incorrect))
                            .offset(x: 16, y: -12)
                    }
                }
                .padding(.horizontal, Theme.Space.l)
                .frame(maxHeight: .infinity)
            }
            .buttonStyle(SquishyButtonStyle())
            .accessibilityIdentifier("collection-button")
            .accessibilityLabel(collectionLabel)

            // Level + XP on gold, closing the cluster.
            VStack(spacing: 2) {
                Text("Level \(GameEconomy.level(forXP: progressStore.totalXP))")
                    .font(Theme.caption(16))
                    .foregroundStyle(.white.opacity(0.95))
                    .fixedSize()
                Text("\(progressStore.totalXP) XP")
                    .font(Theme.displayBold(26))
                    .foregroundStyle(.white)
                    .contentTransition(.numericText())
                    .fixedSize()
            }
            .padding(.horizontal, Theme.Space.l)
            .frame(maxHeight: .infinity)
            .background(Theme.gold)
        }
        .frame(height: Theme.minTouchTarget)
        .background(Theme.card)
        .clipShape(Capsule())
        .shadow(color: Theme.ink.opacity(0.08), radius: 8, y: 4)
    }

    private var collectionLabel: String {
        let friends = progressStore.ownedFeenlingCounts.count
        let eggs = progressStore.pendingEggCount()
        var label = "My Feenlings: \(friends) friend\(friends == 1 ? "" : "s")"
        if eggs > 0 { label += ", \(eggs) egg\(eggs == 1 ? "" : "s") waiting" }
        return label
    }

    private var divider: some View {
        Rectangle()
            .fill(Theme.ink.opacity(0.08))
            .frame(width: 1.5, height: 44)
    }

    // MARK: - Subject cards

    // NOTE: fixed 350pt cards fit exactly two subjects in portrait (834pt);
    // a third subject pack needs a width-driven layout here first.
    private var subjectCards: some View {
        HStack(spacing: Theme.Space.xl) {
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

        return Button {
            soundEffects.play(.tap)
            path.append(pack.subjectId)
        } label: {
            VStack(spacing: Theme.Space.m) {
                SubjectEmblem(subjectId: pack.subjectId, size: 116)
                Text(subjectTitle(pack))
                    .font(Theme.display(42))
                    .foregroundStyle(.white)
                if placed {
                    VStack(spacing: Theme.Space.xs) {
                        Capsule()
                            .fill(.white.opacity(0.3))
                            .frame(width: 220, height: 10)
                            .overlay(alignment: .leading) {
                                Capsule()
                                    .fill(.white)
                                    .frame(width: 220 * fraction)
                            }
                        Text("\(doneCount) of \(allLessons.count) lessons")
                            .font(Theme.caption(17))
                            .foregroundStyle(.white.opacity(0.9))
                    }
                } else {
                    Text("Start your adventure!")
                        .font(Theme.body(20))
                        .foregroundStyle(.white.opacity(0.9))
                }
            }
            .frame(width: 350, height: 330)
            .background(RoundedRectangle(cornerRadius: Theme.Radius.xl).fill(color))
            .shadow(color: color.opacity(0.35), radius: 14, y: 7)
        }
        .buttonStyle(SquishyButtonStyle())
        .accessibilityIdentifier("subject-card-\(pack.subjectId)")
        .accessibilityLabel(subjectTitle(pack))
    }

    private func subjectTitle(_ pack: SubjectPack) -> String {
        pack.subjectId == "math" ? "Math" : pack.subjectId == "reading" ? "Reading" : pack.subjectId.capitalized
    }

    /// Quiet corner affordance for parents — words, not machinery. The one
    /// tappable thing on screen not designed for kids, so it whispers.
    private var parentCorner: some View {
        HStack {
            Spacer()
            Button {
                showParentGate = true
            } label: {
                Text("For grown-ups")
                    .font(Theme.caption(17))
                    .foregroundStyle(Theme.ink.opacity(0.38))
                    .padding(.horizontal, Theme.Space.m)
                    .frame(height: 56)
            }
            .accessibilityIdentifier("parent-gate-button")
            .accessibilityLabel("Grown-up settings")
        }
    }
}
