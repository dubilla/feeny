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
        VStack(spacing: 44) {
            Text("Who's playing?")
                .font(Theme.title(52))
                .foregroundStyle(Theme.ink)

            HStack(spacing: 32) {
                ForEach(progressStore.profiles, id: \.persistentModelID) { profile in
                    profileCard(profile)
                }
                if progressStore.profiles.count < 6 {
                    newProfileCard
                }
            }
        }
        .padding(60)
        .onAppear { speech.speak("Who's playing today?") }
    }

    private func profileCard(_ profile: KidProfile) -> some View {
        Button {
            progressStore.select(profile)
        } label: {
            VStack(spacing: 14) {
                Text(profile.avatarId)
                    .font(.system(size: 76))
                    .frame(width: 130, height: 130)
                    .background(Circle().fill(Theme.card))
                    .overlay(Circle().stroke(Theme.accent.opacity(0.35), lineWidth: 5))
                Text(profile.name)
                    .font(Theme.title(26))
                    .foregroundStyle(Theme.ink)
                Text("Level \(GameEconomy.level(forXP: profile.xp))")
                    .font(Theme.body(18))
                    .foregroundStyle(Theme.ink.opacity(0.55))
            }
            .padding(24)
            .background(RoundedRectangle(cornerRadius: Theme.cornerRadius).fill(Theme.card.opacity(0.6)))
            .shadow(color: .black.opacity(0.07), radius: 10, y: 5)
        }
        .buttonStyle(SquishyButtonStyle())
        .accessibilityIdentifier("profile-card")
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
