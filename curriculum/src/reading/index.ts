import type { SubjectSeed } from "../schema/pack";
// Band 1 — Letter Lagoon (anchor units first: the letter-keyword drill is
// the classroom's daily opener — see FUNDATIONS_MAP.md keyword set)
import { letterFriendsAM } from "./band1/unit-letter-friends-am";
import { letterFriendsNZ } from "./band1/unit-letter-friends-nz";
import { abcAdventure } from "./band1/unit-abc-adventure";
import { letterParade } from "./band1/unit-letter-parade";
import { littleLetters } from "./band1/unit-little-letters";
// Band 2 — Sound Springs (anchor units first)
import { soundFriendsAM } from "./band2/unit-sound-friends-am";
import { soundFriendsNZ } from "./band2/unit-sound-friends-nz";
import { soundSafari } from "./band2/unit-sound-safari";
import { firstSounds } from "./band2/unit-first-sounds";
import { soundMatchUp } from "./band2/unit-sound-match-up";
// Band 3 — Word Woods
import { wordBuilders } from "./band3/unit-word-builders";
import { rhymeTime } from "./band3/unit-rhyme-time";
import { wordFamilies } from "./band3/unit-word-families";
// Band 4 — Team-Up Trail (Fundations L1 early-mid: digraphs → glued sounds,
// trick words in parallel — see curriculum/FUNDATIONS_MAP.md)
import { digraphDive } from "./band4/unit-digraph-dive";
import { moreSoundTeams } from "./band4/unit-more-sound-teams";
import { stickySounds } from "./band4/unit-sticky-sounds";
import { singAndHonk } from "./band4/unit-sing-and-honk";
import { sightWordStars } from "./band4/unit-sight-word-stars";
// Band 5 — Story Stream (blends → sentences → little stories)
import { blendBlast } from "./band5/unit-blend-blast";
import { superBlends } from "./band5/unit-super-blends";
import { sentenceBuilders } from "./band5/unit-sentence-builders";
import { questionQuest } from "./band5/unit-question-quest";
import { storyTime } from "./band5/unit-story-time";
// Band 6 — Fluency Falls (F6: the decoding middle — silent-e → vowel teams →
// r-controlled → syllable-aware word parts, THEN vocabulary/comprehension.
// Guardrails in curriculum/FUNDATIONS_MAP.md "F6 decisions of record".)
import { magicE } from "./band6/unit-magic-e";
import { teamVowels } from "./band6/unit-team-vowels";
import { bossyR } from "./band6/unit-bossy-r";
import { wordDetective } from "./band6/unit-word-detective";
import { wordPower } from "./band6/unit-word-power";
import { wordPartsWorkshop } from "./band6/unit-word-parts-workshop";
import { contextClues } from "./band6/unit-context-clues";
// Band 7 — Meaning Mountain
import { storySleuths } from "./band7/unit-story-sleuths";
import { orderTheTale } from "./band7/unit-order-the-tale";
import { mainIdeaMeadow } from "./band7/unit-main-idea-meadow";
// Band 8 — Inference Isle
import { clueHunters } from "./band8/unit-clue-hunters";
import { feelingsFinder } from "./band8/unit-feelings-finder";
import { idiomIsland } from "./band8/unit-idiom-island";

/**
 * Reading subject seed. Audio-first by design: bands 1–3 serve kids who
 * cannot read yet, so the spoken prompt is always the primary stimulus.
 */
export const readingSeed: SubjectSeed = {
  id: "reading",
  title: "Reading",
  sortOrder: 2,
  bands: [
    { id: "reading-b1", bandNumber: 1, title: "Letter Lagoon", description: "Knowing the letters" },
    { id: "reading-b2", bandNumber: 2, title: "Sound Springs", description: "Letter sounds" },
    { id: "reading-b3", bandNumber: 3, title: "Word Woods", description: "Building and reading small words" },
    { id: "reading-b4", bandNumber: 4, title: "Team-Up Trail", description: "Sound teams, sticky sounds, and star words" },
    { id: "reading-b5", bandNumber: 5, title: "Story Stream", description: "Blends, sentences, and little stories" },
    { id: "reading-b6", bandNumber: 6, title: "Fluency Falls", description: "Magic e, vowel teams, and reading smoothly" },
    { id: "reading-b7", bandNumber: 7, title: "Meaning Mountain", description: "Paragraph comprehension" },
    { id: "reading-b8", bandNumber: 8, title: "Inference Isle", description: "Reading between the lines" },
  ],
  skills: [
    { id: "read-letters-upper", bandId: "reading-b1", title: "Big letters" },
    { id: "read-letters-lower", bandId: "reading-b1", title: "Little letters" },
    { id: "read-letter-sounds", bandId: "reading-b2", title: "Letter sounds" },
    { id: "read-first-sounds", bandId: "reading-b2", title: "First sounds in words" },
    { id: "read-cvc", bandId: "reading-b3", title: "Small words" },
    { id: "read-rhymes", bandId: "reading-b3", title: "Rhymes" },
    { id: "read-digraphs", bandId: "reading-b4", title: "Sound teams" },
    { id: "read-glued", bandId: "reading-b4", title: "Sticky sounds" },
    { id: "read-sight-words", bandId: "reading-b4", title: "Sight words" },
    { id: "read-blends", bandId: "reading-b5", title: "Blends" },
    { id: "read-sentences", bandId: "reading-b5", title: "Sentences" },
    { id: "read-passages", bandId: "reading-b5", title: "Little stories" },
    { id: "read-silent-e", bandId: "reading-b6", title: "Magic e words" },
    { id: "read-vowel-teams", bandId: "reading-b6", title: "Vowel teams" },
    { id: "read-r-controlled", bandId: "reading-b6", title: "Bossy r words" },
    { id: "read-vocabulary", bandId: "reading-b6", title: "Word power" },
    { id: "read-word-parts", bandId: "reading-b6", title: "Word parts" },
    { id: "read-comprehension", bandId: "reading-b7", title: "Understanding stories" },
    { id: "read-sequencing", bandId: "reading-b7", title: "Story order" },
    { id: "read-inference", bandId: "reading-b8", title: "Reading between the lines" },
    { id: "read-figurative", bandId: "reading-b8", title: "Sayings and feelings" },
  ],
  units: [
    letterFriendsAM,
    letterFriendsNZ,
    abcAdventure,
    letterParade,
    littleLetters,
    soundFriendsAM,
    soundFriendsNZ,
    soundSafari,
    firstSounds,
    soundMatchUp,
    wordBuilders,
    rhymeTime,
    wordFamilies,
    digraphDive,
    moreSoundTeams,
    stickySounds,
    singAndHonk,
    sightWordStars,
    blendBlast,
    superBlends,
    sentenceBuilders,
    questionQuest,
    storyTime,
    magicE,
    teamVowels,
    bossyR,
    wordPartsWorkshop,
    wordPower,
    wordDetective,
    contextClues,
    storySleuths,
    orderTheTale,
    mainIdeaMeadow,
    clueHunters,
    feelingsFinder,
    idiomIsland,
  ],
  // 3 single-tap probes per band (listen / MC / fill-blank), mid-unit lessons.
  placementProbes: [
    { bandNumber: 1, exerciseIds: ["read-e-abc-2-02", "read-e-letters2-2-03", "read-e-lower-2-04"] },
    { bandNumber: 2, exerciseIds: ["read-e-soundfriends-am-2-03", "read-e-firstsounds-2-04", "read-e-soundmatch-2-03"] },
    { bandNumber: 3, exerciseIds: ["read-e-cvc-2-03", "read-e-rhymes-2-02", "read-e-families-2-01"] },
    { bandNumber: 4, exerciseIds: ["read-e-digraphs-2-01", "read-e-glued-2-02", "read-e-sight-2-04"] },
    { bandNumber: 5, exerciseIds: ["read-e-blends-2-03", "read-e-sentences-2-05", "read-e-stories-2-04"] },
    { bandNumber: 6, exerciseIds: ["read-e-silente-2-03", "read-e-vowelteams-2-03", "read-e-context-2-03"] },
    { bandNumber: 7, exerciseIds: ["read-e-sleuth-2-02", "read-e-order-2-06", "read-e-mainidea-2-04"] },
    { bandNumber: 8, exerciseIds: ["read-e-cluehunt-2-02", "read-e-feelings-2-04", "read-e-idioms-2-04"] },
  ],
};
