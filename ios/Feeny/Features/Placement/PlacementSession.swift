import Foundation
import Observation

/// The placement staircase. Serves 2 probes per band starting at band 3
/// (clamped to bands that actually have probes); 2/2 climbs, 0/2 descends,
/// 1/2 asks one tiebreak. Stops on direction reversal (would enter a band
/// already decided), band limits, or the question cap.
/// Pure logic; unit-tested. Age is never an input.
@Observable
final class PlacementSession {
    private let probesByBand: [Int: [Exercise]]
    private let availableBands: [Int]

    private(set) var currentBand: Int
    private(set) var askedCount = 0
    private(set) var isComplete = false

    private var correctInBand = 0
    private var wrongInBand = 0
    private var servedInBand = 0
    private var passedBands: Set<Int> = []
    private var failedBands: Set<Int> = []

    private(set) var currentExercise: Exercise?

    init(pack: SubjectPack) {
        var byBand: [Int: [Exercise]] = [:]
        let allExercises = Dictionary(
            uniqueKeysWithValues: pack.units
                .flatMap { $0.lessons }
                .flatMap { $0.exercises }
                .map { ($0.id, $0) }
        )
        for probe in pack.placementProbes {
            byBand[probe.bandNumber] = probe.exerciseIds.compactMap { allExercises[$0] }.filter { !$0.payload.isUnsupported }
        }
        probesByBand = byBand.filter { !$0.value.isEmpty }
        availableBands = probesByBand.keys.sorted()

        if availableBands.isEmpty {
            currentBand = 1
            isComplete = true
        } else {
            let preferred = TuningConstants.placementStartBand
            currentBand = availableBands.contains(preferred)
                ? preferred
                : availableBands.min(by: { abs($0 - preferred) < abs($1 - preferred) })!
            serveNext()
        }
    }

    /// Highest band the kid passed; band 1 if none. Unit 1 of this band is
    /// where their path starts.
    var placementBand: Int { passedBands.max() ?? availableBands.first ?? 1 }

    /// Rough progress for the UI bar (question count over the cap).
    var progress: Double {
        min(1, Double(askedCount) / Double(TuningConstants.placementMaxQuestions))
    }

    func submit(correct: Bool) {
        guard !isComplete else { return }
        askedCount += 1
        if correct { correctInBand += 1 } else { wrongInBand += 1 }

        if askedCount >= TuningConstants.placementMaxQuestions {
            settleBandByMajority()
            isComplete = true
            currentExercise = nil
            return
        }

        let probesNeeded = TuningConstants.probesPerBand
        if correctInBand == probesNeeded {
            pass(band: currentBand)
        } else if wrongInBand == probesNeeded {
            fail(band: currentBand)
        } else if servedInBand >= probesNeeded && correctInBand > 0 && wrongInBand > 0 {
            // 1/1 split → the tiebreak probe just answered decides.
            if correct { pass(band: currentBand) } else { fail(band: currentBand) }
        } else {
            serveNext()
        }
    }

    private func pass(band: Int) {
        passedBands.insert(band)
        guard let next = availableBands.first(where: { $0 > band }) else {
            isComplete = true
            currentExercise = nil
            return
        }
        if failedBands.contains(next) {
            // Reversal: we already failed above — this band is the ceiling.
            isComplete = true
            currentExercise = nil
            return
        }
        moveTo(band: next)
    }

    private func fail(band: Int) {
        failedBands.insert(band)
        guard let next = availableBands.last(where: { $0 < band }) else {
            isComplete = true
            currentExercise = nil
            return
        }
        if passedBands.contains(next) {
            // Reversal: we already passed below — that pass stands.
            isComplete = true
            currentExercise = nil
            return
        }
        moveTo(band: next)
    }

    private func moveTo(band: Int) {
        currentBand = band
        correctInBand = 0
        wrongInBand = 0
        servedInBand = 0
        serveNext()
    }

    private func serveNext() {
        let probes = probesByBand[currentBand] ?? []
        guard servedInBand < probes.count else {
            // Out of probes for this band: settle with what we have.
            if correctInBand > wrongInBand { passedBands.insert(currentBand) } else { failedBands.insert(currentBand) }
            isComplete = true
            currentExercise = nil
            return
        }
        currentExercise = probes[servedInBand]
        servedInBand += 1
    }

    private func settleBandByMajority() {
        if correctInBand > wrongInBand {
            passedBands.insert(currentBand)
        } else if wrongInBand > 0 {
            failedBands.insert(currentBand)
        }
    }
}
