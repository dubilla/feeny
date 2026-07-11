import XCTest
@testable import Feeny

/// The art registry's emoji fallback means a species-id typo silently
/// downgrades a drawn character back to emoji — these assertions make that
/// drift loud instead.
final class FeenlingArtTests: XCTestCase {
    /// Every species with drawn art, by design intent. Update alongside
    /// FeenlingArt when an art drop lands.
    private let drawnIds = [
        "math-dot", "math-shelly", "math-bloop",
        "reading-peep", "reading-chirp", "reading-hoot",
    ]

    func testDrawnSpeciesResolveInCatalogAndRegistry() {
        for id in drawnIds {
            XCTAssertNotNil(CollectibleCatalog.feenling(id: id), "\(id) missing from catalog")
            XCTAssertNotNil(FeenlingArt.art(for: id), "\(id) missing from art registry")
        }
    }

    func testAllStartersHaveDrawnArt() {
        for starter in CollectibleCatalog.starters {
            XCTAssertNotNil(FeenlingArt.art(for: starter.id),
                            "starter \(starter.id) must never fall back to emoji")
        }
    }

    func testDrawnArtHasSaneGeometry() {
        for id in drawnIds {
            let art = FeenlingArt.art(for: id)!
            XCTAssertFalse(art.layers.isEmpty)
            XCTAssertGreaterThan(art.aspectRatio, 0.5)
            XCTAssertLessThan(art.aspectRatio, 2.0)
            // Paths must produce non-empty geometry in a unit rect.
            let rect = CGRect(x: 0, y: 0, width: 100, height: 100)
            for layer in art.layers {
                XCTAssertFalse(layer.path(rect).isEmpty)
            }
        }
    }
}
