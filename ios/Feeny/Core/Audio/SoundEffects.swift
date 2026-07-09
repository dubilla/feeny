import AVFoundation
import Observation

/// Tiny bundled reward sounds. Players are preloaded once; failures are
/// silent — a missing sound must never interrupt a lesson. The shared audio
/// session is owned by SpeechService (.playback + mixWithOthers, so narration
/// survives the mute switch); effects stay polite through low player volume
/// and a parent-facing toggle.
@Observable
@MainActor
final class SoundEffects {
    enum Effect: String, CaseIterable {
        case correct
        case hatch
        case levelUp = "levelup"
    }

    /// Parent-facing toggle from grown-up settings. Defaults to on.
    var isEnabled: Bool {
        didSet { UserDefaults.standard.set(isEnabled, forKey: Self.enabledDefaultsKey) }
    }

    static let enabledDefaultsKey = "feeny.soundEffectsEnabled"

    @ObservationIgnored private var players: [Effect: AVAudioPlayer] = [:]

    init() {
        isEnabled = UserDefaults.standard.object(forKey: Self.enabledDefaultsKey) as? Bool ?? true
        for effect in Effect.allCases {
            guard let url = Bundle.main.url(forResource: effect.rawValue, withExtension: "caf") else { continue }
            let player = try? AVAudioPlayer(contentsOf: url)
            player?.prepareToPlay()
            player?.volume = 0.6
            players[effect] = player
        }
    }

    func play(_ effect: Effect) {
        guard isEnabled, let player = players[effect] else { return }
        player.currentTime = 0
        player.play()
    }
}
