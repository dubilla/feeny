import type { UnitSeed } from "../../schema/pack";

/**
 * Reading Band 6 · Word Parts Workshop (syllable-aware decoding)
 * Long words are read in beats: chunk them, read a chunk at a time, blend.
 * L1 compounds — two small words = two beats. L2 prefixes — read the first
 * chunk (un-, re-), then the rest. L3 suffixes — read the base, then the last
 * chunk (-er, -est, -ful). Three exercises (1-05, 2-08, 3-06) count beats by
 * ear via listenAndPick, using only clean, un-schwa'd words (rainbow,
 * butterfly, kangaroo); the naturally spoken whole word is the stimulus —
 * spokenText NEVER chunks it aloud (TTS renders "kan…ga…roo" badly).
 * spokenText names the rule so meaning carries, and never states the answer.
 */
export const wordPartsWorkshop: UnitSeed = {
  id: "read-u-wordparts",
  bandId: "reading-b6",
  title: "Word Parts Workshop",
  icon: "🧩",
  lessons: [
    {
      id: "read-l-wordparts-1",
      title: "Two Words, Two Beats",
      primarySkillId: "read-word-parts",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-wordparts-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "rain + bow = ?",
              spokenText: "Two small words snap together — two beats! Rain plus bow makes which word?",
            },
            options: [
              { id: "a", label: "rainbow" },
              { id: "b", label: "raincoat" },
              { id: "c", label: "bowrain" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-wordparts-1-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "🌻 Snap the words together!",
              spokenText: "Two words, two beats! Sun plus flower makes which word? Tap it!",
            },
            template: "sun + flower = ___",
            bank: [
              { id: "a", label: "sunny" },
              { id: "b", label: "sunset" },
              { id: "c", label: "sunflower" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-wordparts-1-03",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the two beats that build a word!",
              spokenText: "Every word here has two beats. Tap a beat, then tap the beat that finishes the word!",
            },
            pairs: [
              { id: "p1", left: { label: "cup" }, right: { label: "cake" } },
              { id: "p2", left: { label: "foot" }, right: { label: "ball" } },
              { id: "p3", left: { label: "tooth" }, right: { label: "brush" } },
            ],
          },
        },
        {
          id: "read-e-wordparts-1-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which two words make cupcake?",
              spokenText: "Break it into its two beats! Which two words make the word cupcake?",
            },
            options: [
              { id: "a", label: "cap and cake" },
              { id: "b", label: "cup and cake" },
              { id: "c", label: "cup and cane" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-wordparts-1-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "How many beats?",
              spokenText: "Clap the beats in the word rainbow! How many beats do you hear?",
            },
            options: [
              { id: "a", label: "1" },
              { id: "b", label: "2" },
              { id: "c", label: "3" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-wordparts-1-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "foot + ball = ?",
              spokenText: "Two words, two beats! Foot plus ball makes which word?",
            },
            options: [
              { id: "a", label: "ballfoot" },
              { id: "b", label: "football" },
              { id: "c", label: "footpath" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-wordparts-1-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "🌈 Pick the word that fits!",
              spokenText: "Read the sentence, then pick the word that fits best!",
            },
            template: "A bow of colors in the rain is a ___.",
            bank: [
              { id: "a", label: "rainbow" },
              { id: "b", label: "rainy" },
              { id: "c", label: "raincoat" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-wordparts-1-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word is made of two words?",
              spokenText: "Detective time! Which word is really two words — two beats — joined together?",
            },
            options: [
              { id: "a", label: "table" },
              { id: "b", label: "pancake" },
              { id: "c", label: "apple" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "read-l-wordparts-2",
      title: "Read the First Chunk",
      primarySkillId: "read-word-parts",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-wordparts-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Undo means NOT do.\nWhich word means NOT happy?",
              spokenText: "Read the first chunk, un-, then the rest! Un- means not. So which word means not happy?",
            },
            options: [
              { id: "a", label: "unhappy" },
              { id: "b", label: "rehappy" },
              { id: "c", label: "happier" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-wordparts-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Re- means do again.\nWhich word means to fill again?",
              spokenText: "Read the first chunk, re-, then the rest! Re- means again. So which word means to fill again?",
            },
            options: [
              { id: "a", label: "unfill" },
              { id: "b", label: "refill" },
              { id: "c", label: "filled" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-wordparts-2-03",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to what it means!",
              spokenText: "Read the first chunk, then the rest. Tap a word, then tap what it means!",
            },
            pairs: [
              { id: "p1", left: { label: "unhappy" }, right: { label: "not happy" } },
              { id: "p2", left: { label: "redo" }, right: { label: "do again" } },
              { id: "p3", left: { label: "unkind" }, right: { label: "not kind" } },
            ],
          },
        },
        {
          id: "read-e-wordparts-2-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Remember, un- means not. Tap the word that means NOT safe!",
            },
            options: [
              { id: "a", label: "resafe" },
              { id: "b", label: "unsafe" },
              { id: "c", label: "safely" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-wordparts-2-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Pick the word that fits!",
              spokenText: "My boot would not come off because the knot was tight. What did I have to do? Pick the word that means to undo the tie!",
            },
            template: "My boot stayed on, so I had to ___ the tight knot.",
            bank: [
              { id: "a", label: "untie" },
              { id: "b", label: "retie" },
              { id: "c", label: "tied" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-wordparts-2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Re- means do again.\nWhich word means to read again?",
              spokenText: "Read the first chunk, re-, then the rest! Re- means again. So which word means to read again?",
            },
            options: [
              { id: "a", label: "unread" },
              { id: "b", label: "reread" },
              { id: "c", label: "reader" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-wordparts-2-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Un- means not.\nWhich word means NOT locked?",
              spokenText: "Read the first chunk, un-, then the rest! Un- means not. So which word means not locked?",
            },
            options: [
              { id: "a", label: "relock" },
              { id: "b", label: "locked" },
              { id: "c", label: "unlocked" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-wordparts-2-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "How many beats?",
              spokenText: "Clap the beats in the word butterfly! How many beats do you hear?",
            },
            options: [
              { id: "a", label: "2" },
              { id: "b", label: "3" },
              { id: "c", label: "4" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "read-l-wordparts-3",
      title: "Read the Last Chunk",
      primarySkillId: "read-word-parts",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-wordparts-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "-er can mean more.\nWhich word means MORE tall?",
              spokenText: "Read the base, then the last chunk, -er! Adding -er can mean more. So which word means more tall?",
            },
            options: [
              { id: "a", label: "taller" },
              { id: "b", label: "tallest" },
              { id: "c", label: "tallish" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-wordparts-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "-est means the most.\nWhich word means the MOST big?",
              spokenText: "Read the base, then the last chunk, -est! -est means the most. So which word means the most big?",
            },
            options: [
              { id: "a", label: "bigger" },
              { id: "b", label: "biggest" },
              { id: "c", label: "big" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-wordparts-3-03",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the doing word to the person!",
              spokenText: "Adding -er can mean a person who does it. Tap a word, then tap the person who does it!",
            },
            pairs: [
              { id: "p1", left: { label: "teach" }, right: { label: "teacher" } },
              { id: "p2", left: { label: "sing" }, right: { label: "singer" } },
              { id: "p3", left: { label: "bake" }, right: { label: "baker" } },
            ],
          },
        },
        {
          id: "read-e-wordparts-3-04",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Pick the word that fits!",
              spokenText: "Read the base, then the last chunk, -ful! It means full of. A day full of joy is a what day? Pick the word!",
            },
            template: "A day full of joy is a ___ day.",
            bank: [
              { id: "a", label: "joyful" },
              { id: "b", label: "joyless" },
              { id: "c", label: "joying" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-wordparts-3-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "-ful means full of.\nWhich word means full of color?",
              spokenText: "Read the base, then the last chunk, -ful! It means full of. So which word means full of color?",
            },
            options: [
              { id: "a", label: "colorless" },
              { id: "b", label: "colorful" },
              { id: "c", label: "coloring" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-wordparts-3-06",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "How many beats?",
              spokenText: "Clap the beats in the word kangaroo! How many beats do you hear?",
            },
            options: [
              { id: "a", label: "2" },
              { id: "b", label: "3" },
              { id: "c", label: "4" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-wordparts-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "-ful means full of.\nWhich word means full of help?",
              spokenText: "Read the base, then the last chunk, -ful! It means full of. So which word means full of help?",
            },
            options: [
              { id: "a", label: "helper" },
              { id: "b", label: "helpful" },
              { id: "c", label: "helpless" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-wordparts-3-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Read the base, then the last chunk, -er! It can mean more. Tap the word that means MORE small!",
            },
            options: [
              { id: "a", label: "smallest" },
              { id: "b", label: "small" },
              { id: "c", label: "smaller" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
  ],
};
