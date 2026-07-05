import SwiftUI

/// Slice-1 home: the math unit's lessons as big tappable cards.
/// Replaced by the full skill map in slice 2.
struct LessonListView: View {
    @Environment(ContentStore.self) private var contentStore
    @Environment(ContentSyncService.self) private var syncService
    @Environment(ProgressStore.self) private var progressStore

    @State private var activeLesson: Lesson?

    var body: some View {
        ZStack {
            Theme.background.ignoresSafeArea()

            VStack(spacing: 32) {
                header

                if contentStore.packs.isEmpty {
                    emptyState
                } else {
                    lessonGrid
                }
                Spacer()
            }
            .padding(40)
        }
        .task {
            await syncService.refreshIfNeeded()
        }
        .fullScreenCover(item: $activeLesson) { lesson in
            LessonPlayerView(lesson: lesson)
        }
    }

    private var header: some View {
        HStack {
            VStack(alignment: .leading, spacing: 4) {
                Text("Feeny")
                    .font(Theme.title(48))
                    .foregroundStyle(Theme.accent)
                Text("Hi \(progressStore.activeProfile.name)! \(progressStore.activeProfile.avatarId)")
                    .font(Theme.body(24))
                    .foregroundStyle(Theme.ink.opacity(0.7))
            }
            Spacer()
            xpBadge
        }
    }

    private var xpBadge: some View {
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

    @ViewBuilder
    private var emptyState: some View {
        VStack(spacing: 20) {
            if case .failed(let message) = syncService.status {
                Text("Hmm, we couldn't get your lessons.")
                    .font(Theme.title(28))
                    .foregroundStyle(Theme.ink)
                Text(message)
                    .font(.footnote)
                    .foregroundStyle(Theme.ink.opacity(0.5))
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
            } else {
                ProgressView()
                    .controlSize(.large)
                Text("Getting your lessons ready…")
                    .font(Theme.body(24))
                    .foregroundStyle(Theme.ink.opacity(0.7))
            }
        }
        .frame(maxWidth: .infinity)
        .padding(.top, 80)
    }

    private var lessonGrid: some View {
        VStack(alignment: .leading, spacing: 24) {
            ForEach(contentStore.subjectsSorted, id: \.subjectId) { pack in
                ForEach(pack.units) { unit in
                    VStack(alignment: .leading, spacing: 16) {
                        Text("\(unit.icon)  \(unit.title)")
                            .font(Theme.title(32))
                            .foregroundStyle(Theme.ink)

                        HStack(spacing: 20) {
                            ForEach(unit.lessons) { lesson in
                                lessonCard(lesson)
                            }
                        }
                    }
                }
            }
        }
    }

    private func lessonCard(_ lesson: Lesson) -> some View {
        let done = progressStore.hasCompleted(lessonId: lesson.id)
        return Button {
            activeLesson = lesson
        } label: {
            VStack(spacing: 10) {
                Image(systemName: done ? "checkmark.seal.fill" : "play.circle.fill")
                    .font(.system(size: 44))
                    .foregroundStyle(done ? Theme.correct : Theme.accent)
                Text(lesson.title)
                    .font(Theme.body(22))
                    .foregroundStyle(Theme.ink)
                    .multilineTextAlignment(.center)
            }
            .frame(width: 220, height: 150)
            .background(Theme.card)
            .clipShape(RoundedRectangle(cornerRadius: Theme.cornerRadius))
            .shadow(color: .black.opacity(0.08), radius: 8, y: 4)
        }
        .buttonStyle(SquishyButtonStyle())
        .accessibilityIdentifier("lesson-card")
    }
}

extension Lesson: Hashable {
    static func == (lhs: Lesson, rhs: Lesson) -> Bool { lhs.id == rhs.id }
    func hash(into hasher: inout Hasher) { hasher.combine(id) }
}
