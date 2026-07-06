import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { db } from "../src/db";
import { subjects } from "../src/db/schema";
import { buildSubjectPack } from "../src/lib/pack-builder";

/**
 * Exports every subject's full pack (same bytes the API serves) into
 * ios/BundledPacks/, which the app bundles as its offline fallback — a fresh
 * install must play with zero network. Run after `pnpm seed`; commit the
 * output so the Xcode build never depends on a running database.
 */
async function exportPacks() {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const outDir = path.resolve(here, "../../ios/BundledPacks");
  await mkdir(outDir, { recursive: true });

  const subjectRows = await db.select().from(subjects);
  if (subjectRows.length === 0) {
    throw new Error("no subjects in the database — run `pnpm seed` first");
  }

  for (const subject of subjectRows) {
    const pack = await buildSubjectPack(subject.id);
    if (!pack) throw new Error(`no content version for ${subject.id} — run \`pnpm seed\` first`);
    await writeFile(path.join(outDir, `${subject.id}.json`), JSON.stringify(pack));
    const exerciseCount = pack.units.reduce(
      (n, u) => n + u.lessons.reduce((m, l) => m + l.exercises.length, 0),
      0,
    );
    console.log(`${subject.id}.json: v${pack.version}, ${pack.units.length} units, ${exerciseCount} exercises`);
  }
  console.log(`Bundled packs written to ${outDir}`);
  process.exit(0);
}

exportPacks().catch((err) => {
  console.error(err);
  process.exit(1);
});
