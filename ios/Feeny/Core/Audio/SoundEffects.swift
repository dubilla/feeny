import AVFoundation
import Observation

/// Tiny bundled reward sounds. Players are preloaded once; failures are
/// silent — a missing sound must never interrupt a lesson. Uses the ambient
/// audio category via the shared session, so the ring/silent switch wins.
@Observable
@MainActor
final class SoundEffects {
    enum Effect: String, CaseIterable {
        case correct
        case hatch
        case levelUp = "levelup"
    }

    @ObservationIgnored private var players: [Effect: AVAudioPlayer] = [:]

    init() {
        try? AVAudioSession.sharedInstance().setCategory(.ambient, options: .mixWithOthers)
        for effect in Effect.allCases {
            guard let url = Bundle.main.url(forResource: effect.rawValue, withExtension: "caf") else { continue }
            let player = try? AVAudioPlayer(contentsOf: url)
            player?.prepareToPlay()
            player?.volume = 0.6
            players[effect] = player
        }
    }

    func play(_ effect: Effect) {
        guard let player = players[effect] else { return }
        player.currentTime = 0
        player.play()
    }
}
