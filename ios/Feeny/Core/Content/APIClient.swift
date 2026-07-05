import Foundation

/// Thin client for the content API. Read-only, no auth (v1).
struct APIClient {
    enum APIError: LocalizedError {
        case badStatus(Int)
        case missingBaseURL

        var errorDescription: String? {
            switch self {
            case .badStatus(let code): "Server answered \(code)"
            case .missingBaseURL: "APIBaseURL missing from Info.plist"
            }
        }
    }

    enum PackResponse {
        case pack(data: Data, etag: String?)
        case notModified
    }

    let baseURL: URL
    private let session: URLSession = .shared

    /// Reads the base URL injected via xcconfig → Info.plist (Debug: localhost:3100).
    static func fromInfoPlist() throws -> APIClient {
        guard let raw = Bundle.main.object(forInfoDictionaryKey: "APIBaseURL") as? String,
              let url = URL(string: raw) else {
            throw APIError.missingBaseURL
        }
        return APIClient(baseURL: url)
    }

    func fetchManifest() async throws -> Manifest {
        let (data, response) = try await session.data(from: baseURL.appending(path: "api/v1/manifest"))
        try Self.checkOK(response)
        return try JSONDecoder().decode(Manifest.self, from: data)
    }

    /// Returns raw pack data so callers can validate-decode and cache the exact bytes.
    func fetchPack(subjectId: String, etag: String?) async throws -> PackResponse {
        var request = URLRequest(url: baseURL.appending(path: "api/v1/subjects/\(subjectId)/pack"))
        if let etag {
            request.setValue(etag, forHTTPHeaderField: "If-None-Match")
        }
        let (data, response) = try await session.data(for: request)
        let http = response as? HTTPURLResponse
        if http?.statusCode == 304 {
            return .notModified
        }
        try Self.checkOK(response)
        return .pack(data: data, etag: http?.value(forHTTPHeaderField: "ETag"))
    }

    private static func checkOK(_ response: URLResponse) throws {
        if let http = response as? HTTPURLResponse, !(200...299).contains(http.statusCode) {
            throw APIError.badStatus(http.statusCode)
        }
    }
}
