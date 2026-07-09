import SwiftUI

/// Grown-up controls for the active profile, reached only through the parent
/// gate. Plain adult styling on purpose — this screen is not for kids.
struct ParentSettingsView: View {
    @Environment(ProgressStore.self) private var progressStore
    @Environment(ContentStore.self) private var contentStore
    @Environment(\.dismiss) private var dismiss

    @State private var confirmingDelete = false
    @State private var resetSubjectIds: Set<String> = []

    var body: some View {
        NavigationStack {
            List {
                Section("Placement") {
                    ForEach(contentStore.subjectsSorted, id: \.subjectId) { pack in
                        placementRow(pack)
                    }
                }

                Section("Profile") {
                    ageRow
                    Button(role: .destructive) {
                        confirmingDelete = true
                    } label: {
                        Label("Delete this profile", systemImage: "trash")
                    }
                    .accessibilityIdentifier("settings-delete-profile")
                }

                Section {
                    LabeledContent("Profile", value: progressStore.activeProfile?.name ?? "—")
                    LabeledContent("Total XP", value: "\(progressStore.totalXP)")
                    LabeledContent(
                        "Level",
                        value: "\(GameEconomy.level(forXP: progressStore.totalXP))"
                    )
                } header: {
                    Text("About")
                } footer: {
                    Text("Redoing placement re-runs the warm-up quiz next time the subject opens, starting from your child's age. Finished lessons stay finished.")
                }
            }
            .navigationTitle("Grown-up settings")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) {
                    Button("Done") { dismiss() }
                        .accessibilityIdentifier("close-settings")
                }
            }
            .confirmationDialog(
                "Delete \(progressStore.activeProfile?.name ?? "this profile")? All progress, XP, and Feenlings will be gone forever.",
                isPresented: $confirmingDelete,
                titleVisibility: .visible
            ) {
                Button("Delete forever", role: .destructive) {
                    if let profile = progressStore.activeProfile {
                        progressStore.deleteProfile(profile)
                    }
                    dismiss()
                }
                .accessibilityIdentifier("confirm-delete-profile")
                Button("Cancel", role: .cancel) {}
            }
        }
    }

    @ViewBuilder
    private func placementRow(_ pack: SubjectPack) -> some View {
        let title = pack.subjectId == "math" ? "Math" : pack.subjectId == "reading" ? "Reading" : pack.subjectId.capitalized
        let progress = progressStore.subjectProgress(for: pack.subjectId)

        HStack {
            VStack(alignment: .leading, spacing: 2) {
                Text(title)
                if let progress {
                    Text("Placed in band \(progress.placementBandNumber)")
                        .font(.footnote)
                        .foregroundStyle(.secondary)
                } else {
                    Text(resetSubjectIds.contains(pack.subjectId) ? "Will re-run next time" : "Not placed yet")
                        .font(.footnote)
                        .foregroundStyle(.secondary)
                }
            }
            Spacer()
            Button("Redo placement") {
                progressStore.resetPlacement(
                    subjectId: pack.subjectId,
                    skillIdsInSubject: Set(pack.skills.map(\.id))
                )
                resetSubjectIds.insert(pack.subjectId)
            }
            .disabled(progress == nil)
            .accessibilityIdentifier("settings-redo-\(pack.subjectId)")
        }
    }

    /// Parent-side age correction; the kid answered this at profile creation.
    /// Redo-placement reads this — the kid is never re-asked.
    @ViewBuilder
    private var ageRow: some View {
        let currentAge = progressStore.activeProfile?.currentAge
        Stepper(
            value: Binding(
                get: { currentAge ?? 6 },
                set: { progressStore.setAge(years: $0) }
            ),
            in: 4...10
        ) {
            LabeledContent("Age", value: currentAge.map(String.init) ?? "Not set")
        }
        .accessibilityIdentifier("settings-age")
    }
}
