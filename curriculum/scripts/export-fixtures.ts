import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { subjects, type Exercise } from "../src/index";

/**
 * Exports one canonical fixture JSON per exercise type, pulled from real
 * curriculum content. These files are bundled into the iOS test target —
 * ExerciseDecodingTests must decode every one, keeping the Swift Codable
 * mirror honest against the zod schemas.
 */
const outDir = join(dirname(fileURLToPath(import.meta.url)), "..", "fixtures", "exercises");
mkdirSync(outDir, { recursive: true });

const byType = new Map<string, Exercise>();
for (const subject of subjects) {
  for (const unit of subject.units) {
    for (const lesson of unit.lessons) {
      for (const exercise of lesson.exercises) {
        if (!byType.has(exercise.type)) byType.set(exercise.type, exercise);
      }
    }
  }
}

for (const [type, exercise] of byType) {
  const file = join(outDir, `${type}.json`);
  writeFileSync(file, JSON.stringify(exercise, null, 2) + "\n");
  console.log(`wrote ${file}`);
}
console.log(`${byType.size} fixture(s) exported`);
