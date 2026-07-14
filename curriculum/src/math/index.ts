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
import { makeTenMachine } from "./band4/unit-make-ten-machine";
// Band 5 — Hundred Hills
import { skipCountExpress } from "./band5/unit-skip-count-express";
import { hundredChartHike } from "./band5/unit-hundred-chart-hike";
import { jumpAlongTrail } from "./band5/unit-jump-along-trail";
import { breakApartBuilders } from "./band5/unit-break-apart-builders";
import { friendlyNumberFixUp } from "./band5/unit-friendly-number-fix-up";
import { twoDigitTeamUp } from "./band5/unit-two-digit-team-up";
// Band 6 — Times Tide
import { groupGatherers } from "./band6/unit-group-gatherers";
import { clockClimbers } from "./band6/unit-clock-climbers";
import { coinCollectors } from "./band6/unit-coin-collectors";
// Band 7 — Fraction Falls
import { timesTableTrek } from "./band7/unit-times-table-trek";
import { sharingSquad } from "./band7/unit-sharing-squad";
import { fractionPicnic } from "./band7/unit-fraction-picnic";
// Band 8 — Galaxy Grid
import { bigNumberBlastoff } from "./band8/unit-big-number-blastoff";
import { multiplyMission } from "./band8/unit-multiply-mission";
import { fractionFrontier } from "./band8/unit-fraction-frontier";

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
    { id: "math-equal-groups", bandId: "math-b6", title: "Equal groups" },
    { id: "math-time-money", bandId: "math-b6", title: "Time and money" },
    { id: "math-mult-facts", bandId: "math-b7", title: "Times tables" },
    { id: "math-fractions-intro", bandId: "math-b7", title: "First fractions" },
    { id: "math-multi-digit", bandId: "math-b8", title: "Big number math" },
    { id: "math-compare-fractions", bandId: "math-b8", title: "Comparing fractions" },
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
    makeTenMachine,
    skipCountExpress,
    hundredChartHike,
    jumpAlongTrail,
    breakApartBuilders,
    friendlyNumberFixUp,
    twoDigitTeamUp,
    groupGatherers,
    clockClimbers,
    coinCollectors,
    timesTableTrek,
    sharingSquad,
    fractionPicnic,
    bigNumberBlastoff,
    multiplyMission,
    fractionFrontier,
  ],
  // 3 representative probes per band, drawn from mid-unit lessons.
  // Single-tap types only (MC / count / listen / fill-blank) so the
  // warm-up quiz stays fast and low-friction.
  placementProbes: [
    { bandNumber: 1, exerciseIds: ["math-e-count5-2-03", "math-e-count10-2-06", "math-e-shapes-2-02"] },
    { bandNumber: 2, exerciseIds: ["math-e-teens-2-01", "math-e-compare-2-04", "math-e-order20-2-05"] },
    { bandNumber: 3, exerciseIds: ["math-e-add10-a2-03", "math-e-sub10-2-02", "math-e-bonds10-2-07"] },
    { bandNumber: 4, exerciseIds: ["math-e-add20-2-02", "math-e-tensones-2-03", "math-e-doubles-2-06"] },
    { bandNumber: 5, exerciseIds: ["math-e-skip-2-05", "math-e-hundred-2-04", "math-e-jumps-2-07"] },
    { bandNumber: 6, exerciseIds: ["math-e-groups-2-01", "math-e-clock-2-03", "math-e-coins-2-02"] },
    { bandNumber: 7, exerciseIds: ["math-e-times-2-03", "math-e-share-2-02", "math-e-fracs-2-01"] },
    { bandNumber: 8, exerciseIds: ["math-e-bignum-2-01", "math-e-multbig-2-04", "math-e-fraccomp-2-04"] },
  ],
};
