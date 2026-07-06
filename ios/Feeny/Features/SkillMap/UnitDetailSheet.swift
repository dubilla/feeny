import SwiftUI

/// Tapping a unit node opens this: its lessons in order, the next one
/// playable, plus the jump-ahead challenge when the kid is on a hot streak.
struct UnitDetailSheet: View {
    let unit: LearningUnit
    let pack: SubjectPack
    let state: ProgressEngine.UnitState
    let onPlay: (SkillMapView.LessonLaunch) -> Void

    @Environment(ProgressStore.self) private var progressStore
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        ZStack {
            Theme.background.ignoresSafeArea()
            VStack(spacing: 28) {
                Capsule()
                    .fill(Theme.ink.opacity(0.2))
                    .frame(width: 60, height: 6)
                    .padding(.top, 12)

                HStack(spacing: 16) {
                    Text(unit.icon)
                        .font(.system(size: 56))
                    Text(unit.title)
                        .font(Theme.title(36))
                        .foregroundStyle(Theme.ink)
                        .lineLimit(1)
                        .minimumScaleFactor(0.6)
                }

                if state == .golden {
                    Text("You already know this! Play any lesson for fun. 👑")
                        .font(Theme.body(22))
                        .foregroundStyle(Theme.ink.opacity(0.7))
                }

                lessonRows

                if showChallenge {
                    challengeButton
                }

                Spacer()
            }
            .padding(.horizontal, 48)
        }
        .presentationDetents([.medium, .large])
    }

    private var completedLessonIds: Set<String> { progressStore.completedLessonIds }

    private var nextLessonId: String? {
        ProgressEngine.nextLesson(in: unit, completedLessonIds: completedLessonIds)?.id
    }

    private var showChallenge: Bool {
        guard state == .current else { return false }
        let lessonIds = Set(pack.units.flatMap { $0.lessons.map(\.id) })
        let recent = progressStore.recentAccuracies(lessonIdsInSubject: lessonIds)
        return ProgressEngine.shouldOfferChallenge(recentFirstTryAccuracies: recent)
            && ProgressEngine.nextLesson(in: unit, completedLessonIds: completedLessonIds) != nil
    }

    private var lessonRows: some View {
        VStack(spacing: 16) {
            ForEach(unit.lessons) { lesson in
                lessonRow(lesson)
            }
        }
    }

    @ViewBuilder
    private func lessonRow(_ lesson: Lesson) -> some View {
        let done = completedLessonIds.contains(lesson.id)
        // Golden units are fully replayable; otherwise lessons unlock in order.
        let playable = done || state == .golden || lesson.id == nextLessonId

        Button {
            onPlay(SkillMapView.LessonLaunch(lesson: lesson, mode: .normal, unit: unit, subjectId: pack.subjectId))
        } label: {
            HStack(spacing: 18) {
                Image(systemName: done ? "checkmark.seal.fill" : (playable ? "play.circle.fill" : "lock.fill"))
                    .font(.system(size: 38))
                    .foregroundStyle(done ? Theme.correct : (playable ? Theme.accent : Theme.ink.opacity(0.3)))
                Text(lesson.title)
                    .font(Theme.body(24))
                    .foregroundStyle(Theme.ink.opacity(playable ? 1 : 0.45))
                Spacer()
                Text("+\(lesson.xpReward) XP")
                    .font(Theme.body(18))
                    .foregroundStyle(Theme.gold)
            }
            .padding(20)
            .frame(minHeight: Theme.minTouchTarget)
            .background(Theme.card)
            .clipShape(RoundedRectangle(cornerRadius: 20))
            .shadow(color: .black.opacity(playable ? 0.07 : 0), radius: 6, y: 3)
        }
        .buttonStyle(SquishyButtonStyle())
        .disabled(!playable)
        .accessibilityIdentifier(playable && !done ? "lesson-card" : "lesson-card-done")
    }

    private var challengeButton: some View {
        Button {
            let challenge = ProgressEngine.challengeLesson(unit: unit, completedLessonIds: completedLessonIds)
            onPlay(SkillMapView.LessonLaunch(
                lesson: challenge,
                mode: .challenge(unitId: unit.id, subjectId: pack.subjectId),
                unit: unit,
                subjectId: pack.subjectId
            ))
        } label: {
            HStack(spacing: 14) {
                Image(systemName: "bolt.fill")
                    .font(.system(size: 30))
                VStack(alignment: .leading, spacing: 2) {
                    Text("Challenge!")
                        .font(Theme.title(26))
                    Text("On fire? Skip ahead — pass and finish this whole unit!")
                        .font(Theme.body(17))
                        .opacity(0.9)
                }
                Spacer()
                Text("+\(GameEconomy.challengePassXP) XP")
                    .font(Theme.title(20))
            }
            .foregroundStyle(.white)
            .padding(22)
            .background(RoundedRectangle(cornerRadius: 20).fill(Theme.gold))
        }
        .buttonStyle(SquishyButtonStyle())
        .accessibilityIdentifier("challenge-button")
    }
}
