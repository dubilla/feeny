export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui", padding: "2rem" }}>
      <h1>Feeny content API</h1>
      <ul>
        <li>
          <a href="/api/v1/manifest">GET /api/v1/manifest</a>
        </li>
        <li>
          <a href="/api/v1/subjects/math/pack">GET /api/v1/subjects/math/pack</a>
        </li>
      </ul>
    </main>
  );
}
