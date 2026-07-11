import SwiftUI

/// The Duolingo-style path for one subject: bands top-to-bottom, unit nodes
/// winding down the screen. Reached from SubjectHomeView.
struct SkillMapView: View {
    let subjectId: String

    @Environment(ContentStore.self) private var contentStore
    @Environment(ContentSyncService.self) private var syncService
    @Environment(ProgressStore.self) private var progressStore
    @Environment(\.dismiss) private var dismiss

    @State private var activeLesson: LessonLaunch?
    @State private var selectedUnit: LearningUnit?
    @State private var showPlacement = false
    /// Bumped when the placement cover dismisses, so the map deliberately
    /// re-centers on the freshly-derived START (see mapContent's onChange).
    @State private var placementRecenter = 0

    /// What the player should run: a lesson, review framing, or a challenge.
    /// `unit` rides along so the player can spot unit completion (nil for
    /// review lessons, which float outside the path).
    struct LessonLaunch: Identifiable {
        let lesson: Lesson
        let mode: LessonPlayerView.Mode
        var unit: LearningUnit?
        var subjectId: String?
        var id: String { lesson.id }
    }

    private var pack: SubjectPack? { contentStore.pack(for: subjectId) }

    var body: some View {
        ZStack {
            Theme.background.ignoresSafeArea()
            if let pack {
                mapContent(pack)
            } else {
                loadingState
            }
        }
        .task {
            await syncService.refreshIfNeeded()
        }
        .onChange(of: contentStore.packs.isEmpty) { _, isEmpty in
            if !isEmpty { checkPlacement() }
        }
        .onAppear { checkPlacement() }
        .fullScreenCover(isPresented: $showPlacement, onDismiss: { placementRecenter += 1 }) {
            if let pack {
                PlacementFlowView(pack: pack, kidAge: progressStore.activeProfile?.currentAge)
            }
        }
        .fullScreenCover(item: $activeLesson) { launch in
            LessonPlayerView(lesson: launch.lesson, mode: launch.mode, unit: launch.unit, subjectId: launch.subjectId)
        }
        .sheet(item: $selectedUnit) { unit in
            if let pack {
                UnitDetailSheet(
                    unit: unit,
                    pack: pack,
                    state: unitStates(pack)[unit.id] ?? .locked,
                    onPlay: { launch in
                        selectedUnit = nil
                        // Give the sheet a beat to dismiss before the cover presents.
                        DispatchQueue.main.asyncAfter(deadline: .now() + 0.45) {
                            activeLesson = launch
                        }
                    }
                )
            }
        }
    }

    // MARK: - Derivations

    private func unitStates(_ pack: SubjectPack) -> [String: ProgressEngine.UnitState] {
        ProgressEngine.unitStates(
            pack: pack,
            placementBandNumber: progressStore.subjectProgress(for: pack.subjectId)?.placementBandNumber ?? 1,
            completedLessonIds: progressStore.completedLessonIds,
            completedUnitIds: Set(progressStore.subjectProgress(for: pack.subjectId)?.completedUnitIds ?? [])
        )
    }

    private func reviewSuggestion(_ pack: SubjectPack) -> Lesson? {
        let lessonIds = Set(pack.units.flatMap { $0.lessons.map(\.id) })
        let recent = progressStore.recentAccuracies(lessonIdsInSubject: lessonIds)
        guard ProgressEngine.shouldInsertReview(recentFirstTryAccuracies: recent) else { return nil }
        let states = unitStates(pack)
        let currentBand = pack.units.first { states[$0.id] == .current }
            .flatMap { unit in pack.bands.first { $0.id == unit.bandId }?.bandNumber } ?? 1
        return ProgressEngine.reviewLesson(
            pack: pack,
            masteries: progressStore.masteriesBySkill,
            currentBandNumber: currentBand
        )
    }

    private func checkPlacement() {
        guard let pack, !pack.placementProbes.isEmpty else { return }
        if progressStore.subjectProgress(for: pack.subjectId) == nil {
            showPlacement = true
        }
    }

    // MARK: - Pieces

    private var loadingState: some View {
        VStack(spacing: 20) {
            ProgressView().controlSize(.large)
            Text("Getting your adventure ready…")
                .font(Theme.body(24))
                .foregroundStyle(Theme.ink.opacity(0.7))
            if case .failed = syncService.status {
                Button {
                    Task { await syncService.refreshIfNeeded(force: true) }
                } label: {
                    Text("Try Again")
                        .font(Theme.title(24))
                        .foregroundStyle(.white)
                        .padding(.horizontal, 40)
                        .frame(height: Theme.minTouchTarget)
                        .background(Capsule().fill(Theme.accent))
                }
                .buttonStyle(SquishyButtonStyle())
            }
        }
    }

    private func mapContent(_ pack: SubjectPack) -> some View {
        let states = unitStates(pack)
        let unitsByBand = Dictionary(grouping: pack.units) { $0.bandId }
        let currentUnitId = pack.units.first(where: { states[$0.id] == .current })?.id

        return ScrollViewReader { proxy in
            ScrollView {
                VStack(spacing: 8) {
                    header

                    if let review = reviewSuggestion(pack) {
                        reviewCard(review)
                    }

                    ForEach(pack.bands.sorted { $0.bandNumber < $1.bandNumber }) { band in
                        if let units = unitsByBand[band.id], !units.isEmpty {
                            BandHeaderView(band: band)
                            ForEach(Array(units.enumerated()), id: \.element.id) { index, unit in
                                UnitNodeView(
                                    unit: unit,
                                    state: states[unit.id] ?? .locked,
                                    windingOffset: windingOffset(index)
                                ) {
                                    selectedUnit = unit
                                }
                                .id(unit.id)
                            }
                        }
                    }
                }
                .padding(.horizontal, 60)
                .padding(.bottom, 60)
            }
            .onAppear {
                if let currentUnitId {
                    proxy.scrollTo(currentUnitId, anchor: .center)
                }
            }
            // The first onAppear runs while placement is still on top of the
            // map, so it centers on band 1's START (no placement yet). When the
            // warm-up cover dismisses, re-center on the now-correct START.
            .onChange(of: placementRecenter) {
                if let currentUnitId {
                    proxy.scrollTo(currentUnitId, anchor: .center)
                }
            }
        }
    }

    private var header: some View {
        HStack(spacing: 18) {
            Button {
                dismiss()
            } label: {
                Image(systemName: "chevron.left")
                    .font(.system(size: 26, weight: .bold))
                    .foregroundStyle(Theme.ink.opacity(0.55))
                    .frame(width: 72, height: 72)
                    .background(Circle().fill(Theme.card))
            }
            .buttonStyle(SquishyButtonStyle())
            .accessibilityIdentifier("back-to-subjects")

            Text(subjectId == "math" ? "Math" : subjectId == "reading" ? "Reading" : subjectId.capitalized)
                .font(Theme.title(44))
                .foregroundStyle(Theme.accent)
            Spacer()
            // The kid's buddy rides along on their path.
            AvatarView(avatarId: progressStore.activeProfile?.avatarId ?? "round-violet", size: 54)
                .frame(width: 72, height: 72)
                .background(Circle().fill(Theme.card))
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
        .padding(.vertical, 20)
    }

    private func reviewCard(_ lesson: Lesson) -> some View {
        Button {
            activeLesson = LessonLaunch(lesson: lesson, mode: .normal, unit: nil, subjectId: subjectId)
        } label: {
            HStack(spacing: 16) {
                Text("⚡")
                    .font(.system(size: 44))
                VStack(alignment: .leading, spacing: 4) {
                    Text("Power-Up Practice!")
                        .font(Theme.title(26))
                        .foregroundStyle(.white)
                    Text("A quick boost to keep you strong")
                        .font(Theme.body(18))
                        .foregroundStyle(.white.opacity(0.85))
                }
                Spacer()
                Image(systemName: "play.circle.fill")
                    .font(.system(size: 40))
                    .foregroundStyle(.white)
            }
            .padding(24)
            .background(RoundedRectangle(cornerRadius: Theme.cornerRadius).fill(Theme.incorrect))
        }
        .buttonStyle(SquishyButtonStyle())
        .accessibilityIdentifier("review-card")
    }

    /// Gentle left-right winding for the path feel.
    private func windingOffset(_ index: Int) -> CGFloat {
        [0, -110, 0, 110][index % 4]
    }
}

struct BandHeaderView: View {
    let band: Band

    var body: some View {
        HStack(spacing: 14) {
            Rectangle().fill(Theme.ink.opacity(0.15)).frame(height: 3)
            VStack(spacing: 2) {
                Text(band.title)
                    .font(Theme.title(24))
                    .foregroundStyle(Theme.ink)
                Text(band.description)
                    .font(Theme.body(15))
                    .foregroundStyle(Theme.ink.opacity(0.55))
            }
            .fixedSize()
            Rectangle().fill(Theme.ink.opacity(0.15)).frame(height: 3)
        }
        .padding(.vertical, 18)
    }
}

struct UnitNodeView: View {
    let unit: LearningUnit
    let state: ProgressEngine.UnitState
    let windingOffset: CGFloat
    let onTap: () -> Void

    @State private var pulsing = false

    var body: some View {
        Button(action: onTap) {
            VStack(spacing: 8) {
                ZStack {
                    Circle()
                        .fill(fillColor)
                        .frame(width: 116, height: 116)
                        .shadow(color: shadowColor, radius: 10, y: 5)
                    if state == .current {
                        Circle()
                            .stroke(Theme.accent.opacity(0.45), lineWidth: 6)
                            .frame(width: 140, height: 140)
                            .scaleEffect(pulsing ? 1.08 : 0.96)
                            .motion(Theme.Motion.pulse, value: pulsing)
                    }
                    Text(unit.icon)
                        .font(.system(size: 52))
                        .saturation(state == .locked ? 0 : 1)
                        .opacity(state == .locked ? 0.45 : 1)
                    badge
                    if state == .current {
                        // Feeny camps beside wherever the kid is headed next.
                        FeenyMascot(pose: .idle, size: 84)
                            .offset(x: -112, y: 8)
                    }
                }
                Text(unit.title)
                    .font(Theme.body(20))
                    .foregroundStyle(Theme.ink.opacity(state == .locked ? 0.4 : 0.85))
            }
        }
        .buttonStyle(SquishyButtonStyle())
        .disabled(state == .locked)
        .offset(x: windingOffset)
        .padding(.vertical, 10)
        .onAppear {
            pulsing = state == .current
        }
        // After placement the START moves to a node that was already on screen
        // (behind the warm-up cover), so its onAppear won't re-fire — arm the
        // pulse when the state itself flips to current.
        .onChange(of: state) {
            pulsing = state == .current
        }
        .accessibilityIdentifier(state == .current ? "unit-node-current" : "unit-node")
    }

    private var fillColor: Color {
        switch state {
        case .explore: Theme.card
        case .completed: Theme.correct.opacity(0.85)
        case .current: Theme.card
        case .locked: Color(white: 0.88)
        }
    }

    private var shadowColor: Color {
        state == .locked ? .clear : .black.opacity(0.12)
    }

    @ViewBuilder
    private var badge: some View {
        switch state {
        case .explore:
            // Open but unearned — no badge. The kid can wander here by choice.
            EmptyView()
        case .completed:
            Image(systemName: "checkmark.circle.fill")
                .font(.system(size: 34))
                .foregroundStyle(Theme.correct)
                .background(Circle().fill(.white))
                .offset(x: 44, y: -44)
        case .current:
            Text("START")
                .font(Theme.title(16))
                .foregroundStyle(.white)
                .padding(.horizontal, 14)
                .padding(.vertical, 6)
                .background(Capsule().fill(Theme.accent))
                .offset(y: -74)
        case .locked:
            Image(systemName: "lock.fill")
                .font(.system(size: 22))
                .foregroundStyle(Theme.ink.opacity(0.35))
                .offset(x: 40, y: -40)
        }
    }
}
