import { validateSubjectSeed, type SubjectSeed } from "./schema/pack";
import { mathSeed } from "./math";
import { readingSeed } from "./reading";

export * from "./schema/exercises";
export * from "./schema/pack";

/** All subjects, validated. Importing this throws immediately on bad content. */
export const subjects: SubjectSeed[] = [mathSeed, readingSeed].map(validateSubjectSeed);
