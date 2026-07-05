import { validateSubjectSeed, type SubjectSeed } from "./schema/pack";
import { mathSeed } from "./math";

export * from "./schema/exercises";
export * from "./schema/pack";

/** All subjects, validated. Importing this throws immediately on bad content. */
export const subjects: SubjectSeed[] = [mathSeed].map(validateSubjectSeed);
