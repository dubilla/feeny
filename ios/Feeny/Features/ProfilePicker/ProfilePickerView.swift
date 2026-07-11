import SwiftUI

/// "Who's playing?" — one tap per kid. First launch goes straight to create.
struct ProfilePickerView: View {
    @Environment(ProgressStore.self) private var progressStore
    @Environment(SpeechService.self) private var speech

    @State private var creating = false

    var body: some View {
        ZStack {
            Theme.background.ignoresSafeArea()
            if progressStore.profiles.isEmpty || creating {
                ProfileCreateView(canCancel: !progressStore.profiles.isEmpty) {
                    creating = false
                }
            } else {
                picker
            }
        }
    }

    private var picker: some View {
        VStack(spacing: Theme.Space.xxl) {
            Text("Who's playing?")
                .font(Theme.display(54))
                .foregroundStyle(Theme.ink)

            HStack(spacing: Theme.Space.xl) {
                ForEach(progressStore.profiles, id: \.persistentModelID) { profile in
                    ProfilePickCard(profile: profile) {
                        progressStore.select(profile)
                    }
                }
                if progressStore.profiles.count < 6 {
                    newProfileCard
                }
            }
        }
        .padding(Theme.Space.xxl)
        .onAppear { speech.speak("Who's playing today?") }
    }

    private var newProfileCard: some View {
        Button {
            creating = true
        } label: {
            VStack(spacing: 14) {
                Image(systemName: "plus")
                    .font(.system(size: 54, weight: .bold))
                    .foregroundStyle(Theme.accent)
                    .frame(width: 130, height: 130)
                    .background(Circle().fill(Theme.accent.opacity(0.12)))
                Text("New Explorer")
                    .font(Theme.title(24))
                    .foregroundStyle(Theme.accent)
                Text(" ")
                    .font(Theme.body(18))
            }
            .padding(24)
        }
        .buttonStyle(SquishyButtonStyle())
        .accessibilityIdentifier("new-profile-card")
    }
}

/// One kid's card: buddy breathes gently, so the picker feels alive without
/// blinking at anyone.
private struct ProfilePickCard: View {
    let profile: KidProfile
    let onPick: () -> Void

    @State private var breathe = false

    var body: some View {
        Button(action: onPick) {
            VStack(spacing: Theme.Space.m) {
                AvatarView(avatarId: profile.avatarId, size: 96)
                    .frame(width: 130, height: 130)
                    .background(Circle().fill(Theme.card))
                    .overlay(Circle().stroke(Theme.accent.opacity(0.35), lineWidth: 5))
                    .scaleEffect(y: breathe ? 1.02 : 1.0, anchor: .bottom)
                    .motion(Theme.Motion.breathe, value: breathe)
                Text(profile.name)
                    .font(Theme.title(26))
                    .foregroundStyle(Theme.ink)
                Text("Level \(GameEconomy.level(forXP: profile.xp))")
                    .font(Theme.caption(18))
                    .foregroundStyle(Theme.ink.opacity(0.55))
            }
            .padding(Theme.Space.l)
            .background(RoundedRectangle(cornerRadius: Theme.Radius.l).fill(Theme.card.opacity(0.6)))
            .shadow(color: .black.opacity(0.07), radius: 10, y: 5)
        }
        .buttonStyle(SquishyButtonStyle())
        .accessibilityIdentifier("profile-card")
        .accessibilityLabel("\(profile.name), level \(GameEconomy.level(forXP: profile.xp))")
        .onAppear { breathe = true }
    }
}
