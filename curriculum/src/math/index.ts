import type { SubjectSeed } from "../schema/pack";
import { additionWithin10A } from "./band3/unit-addition-within-10-a";

/**
 * Math subject seed. Bands are the age-agnostic difficulty ladder (never
 * shown to kids as grades). Slice 1 ships one band-3 unit; the band ladder
 * is defined up front so later units slot in without schema churn.
 */
export const mathSeed: SubjectSeed = {
  id: "math",
  title: "Math",
  sortOrder: 1,
  bands: [
    { id: "math-b1", bandNumber: 1, title: "Counting Cove", description: "Counting to 10, shapes" },
    { id: "math-b2", bandNumber: 2, title: "Number Meadow", description: "Counting to 20, comparing quantities" },
    { id: "math-b3", bandNumber: 3, title: "Adding Forest", description: "Addition and subtraction within 10" },
    { id: "math-b4", bandNumber: 4, title: "Place Value Peaks", description: "Add/subtract within 20, place value to 100" },
    { id: "math-b5", bandNumber: 5, title: "Hundred Hills", description: "Add/subtract within 100, skip counting" },
    { id: "math-b6", bandNumber: 6, title: "Times Tide", description: "Intro multiplication, time and money" },
    { id: "math-b7", bandNumber: 7, title: "Fraction Falls", description: "Multiplication/division facts, intro fractions" },
    { id: "math-b8", bandNumber: 8, title: "Galaxy Grid", description: "Multi-digit operations, comparing fractions" },
  ],
  skills: [
    { id: "math-add-within-10", bandId: "math-b3", title: "Addition within 10" },
  ],
  units: [additionWithin10A],
  placementProbes: [
    // Slice 2 curates real probes per band; slice 1 has no placement flow.
  ],
};
