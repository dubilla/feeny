import type { SubjectSeed } from "../schema/pack";
// Band 1 — Counting Cove
import { countCritters } from "./band1/unit-count-critters";
import { moreCountingFriends } from "./band1/unit-more-counting-friends";
import { shapeSafari } from "./band1/unit-shape-safari";
// Band 2 — Number Meadow
import { bigNumberTrail } from "./band2/unit-big-number-trail";
import { moreOrLess } from "./band2/unit-more-or-less";
import { numberParade } from "./band2/unit-number-parade";
// Band 3 — Adding Forest
import { additionWithin10A } from "./band3/unit-addition-within-10-a";
import { takeAwayPicnic } from "./band3/unit-take-away-picnic";
import { numberBondBridge } from "./band3/unit-number-bond-bridge";
// Band 4 — Place Value Peaks
import { teenSumsTrek } from "./band4/unit-teen-sums-trek";
import { tensOnesTower } from "./band4/unit-tens-ones-tower";
import { doubleTrouble } from "./band4/unit-double-trouble";
// Band 5 — Hundred Hills
import { skipCountExpress } from "./band5/unit-skip-count-express";
import { hundredChartHike } from "./band5/unit-hundred-chart-hike";
import { twoDigitTeamUp } from "./band5/unit-two-digit-team-up";

/**
 * Math subject seed. Bands are the age-agnostic difficulty ladder (never
 * shown to kids as grades). Units are listed in path order: every unit of
 * band N precedes every unit of band N+1.
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
    { id: "math-count-to-10", bandId: "math-b1", title: "Counting to 10" },
    { id: "math-shapes-basic", bandId: "math-b1", title: "Shapes" },
    { id: "math-count-to-20", bandId: "math-b2", title: "Counting to 20" },
    { id: "math-compare", bandId: "math-b2", title: "Comparing quantities" },
    { id: "math-add-within-10", bandId: "math-b3", title: "Addition within 10" },
    { id: "math-sub-within-10", bandId: "math-b3", title: "Subtraction within 10" },
    { id: "math-add-sub-20", bandId: "math-b4", title: "Add & subtract within 20" },
    { id: "math-place-value", bandId: "math-b4", title: "Tens and ones" },
    { id: "math-skip-count", bandId: "math-b5", title: "Skip counting" },
    { id: "math-add-sub-100", bandId: "math-b5", title: "Add & subtract within 100" },
  ],
  units: [
    countCritters,
    moreCountingFriends,
    shapeSafari,
    bigNumberTrail,
    moreOrLess,
    numberParade,
    additionWithin10A,
    takeAwayPicnic,
    numberBondBridge,
    teenSumsTrek,
    tensOnesTower,
    doubleTrouble,
    skipCountExpress,
    hundredChartHike,
    twoDigitTeamUp,
  ],
  // 3 representative probes per band, drawn from mid-unit lessons.
  // Single-tap types only (MC / count / listen / fill-blank) so the
  // warm-up quiz stays fast and low-friction.
  placementProbes: [
    { bandNumber: 1, exerciseIds: ["math-e-count5-2-03", "math-e-count10-2-06", "math-e-shapes-2-02"] },
    { bandNumber: 2, exerciseIds: ["math-e-teens-2-01", "math-e-compare-2-04", "math-e-order20-2-05"] },
    { bandNumber: 3, exerciseIds: ["math-e-add10-a2-03", "math-e-sub10-2-02", "math-e-bonds10-2-07"] },
    { bandNumber: 4, exerciseIds: ["math-e-add20-2-02", "math-e-tensones-2-03", "math-e-doubles-2-06"] },
    { bandNumber: 5, exerciseIds: ["math-e-skip-2-05", "math-e-hundred-2-04", "math-e-2digit-2-03"] },
  ],
};
