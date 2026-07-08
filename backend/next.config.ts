import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@feeny/curriculum"],
  // Must be the MONOREPO root, not backend/: pnpm hoists the real package
  // store to ../node_modules/.pnpm, and Vercel's file tracing only includes
  // what lives under this root (a backend-scoped root ships lambdas missing
  // next's own runtime deps, e.g. next/dist/compiled/source-map).
  outputFileTracingRoot: join(dirname(fileURLToPath(import.meta.url)), ".."),
};

export default nextConfig;
