import type { UnitSeed } from "../../schema/pack";

/**
 * Reading Band 6 · Bossy R (r-controlled vowels)
 * When R follows a vowel it bosses the vowel into a new sound.
 * L1 AR ("ar", like car) and L2 OR ("or", like corn) are each a DISTINCT,
 *   audible sound — ar vs or vs er contrasts are real, so listenAndPick across
 *   them is fair game.
 * L3 ER, IR, UR are ONE sound spelled three ways — so they are SPELLING facts,
 *   never listening facts: NEVER an ear-only er-vs-ir/ur discrimination, and
 *   NEVER two of {er, ir, ur} in a single fill-blank bank (that double-solves,
 *   since both would sound and read as the target). The one listenAndPick here
 *   contrasts the shared 'er' sound against ar/or (audible), not er vs ir vs ur.
 * R-teams are always spelled as letters in teaching spokenText ("Star ends
 *   with A-R!"), never as raw phoneme strings.
 */
export const bossyR: UnitSeed = {
  id: "read-u-rcontrolled",
  bandId: "reading-b6",
  title: "Bossy R",
  icon: "🚗",
  lessons: [
    {
      id: "read-l-rcontrolled-1",
      title: "AR",
      primarySkillId: "read-r-controlled",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-rcontrolled-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word has the ar sound?",
              spokenText: "A-R makes the 'ar' sound, like in car! Which word has the A-R sound?",
            },
            options: [
              { id: "a", label: "sit" },
              { id: "b", label: "barn" },
              { id: "c", label: "sun" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-rcontrolled-1-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "Twinkle, twinkle, a little star! Which letters finish the word star?",
            },
            template: "st___ ⭐",
            bank: [
              { id: "a", label: "ar" },
              { id: "b", label: "or" },
              { id: "c", label: "er" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-rcontrolled-1-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen for the 'ar' sound! Tap the picture whose name has the A-R sound.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🌽" } },
              { id: "b", visual: { kind: "emoji", value: "🐦" } },
              { id: "c", visual: { kind: "emoji", value: "🚗" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-rcontrolled-1-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "shark" }, right: { visual: { kind: "emoji", value: "🦈" } } },
              { id: "p2", left: { label: "arm" }, right: { visual: { kind: "emoji", value: "💪" } } },
              { id: "p3", left: { label: "park" }, right: { visual: { kind: "emoji", value: "🌳" } } },
            ],
          },
        },
        {
          id: "read-e-rcontrolled-1-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word has the ar sound?",
              spokenText: "Bossy R is at work again! Which word has the A-R sound?",
            },
            options: [
              { id: "a", label: "pin" },
              { id: "b", label: "top" },
              { id: "c", label: "farm" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-rcontrolled-1-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "Wave your arm up high! Which letters start the word arm?",
            },
            template: "___m 💪",
            bank: [
              { id: "a", label: "or" },
              { id: "b", label: "ar" },
              { id: "c", label: "ur" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-rcontrolled-1-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen carefully for the 'ar' sound! Tap the word that has the A-R sound.",
            },
            options: [
              { id: "a", label: "fin" },
              { id: "b", label: "dark" },
              { id: "c", label: "fun" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-rcontrolled-1-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word has the ar sound?",
              spokenText: "A-R says 'ar'! Read each word. Which one has the A-R sound?",
            },
            options: [
              { id: "a", label: "car" },
              { id: "b", label: "cot" },
              { id: "c", label: "cup" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
    {
      id: "read-l-rcontrolled-2",
      title: "OR",
      primarySkillId: "read-r-controlled",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-rcontrolled-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word has the or sound?",
              spokenText: "O-R makes the 'or' sound, like in for! Which word has the O-R sound?",
            },
            options: [
              { id: "a", label: "corn" },
              { id: "b", label: "cat" },
              { id: "c", label: "cot" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-rcontrolled-2-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "Time to eat with a fork! Which letters finish the word fork?",
            },
            template: "f___k 🍴",
            bank: [
              { id: "a", label: "or" },
              { id: "b", label: "ar" },
              { id: "c", label: "ur" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-rcontrolled-2-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen for the 'or' sound! Tap the picture whose name has the O-R sound.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "⭐" } },
              { id: "b", visual: { kind: "emoji", value: "🐴" } },
              { id: "c", visual: { kind: "emoji", value: "🐦" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-rcontrolled-2-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "corn" }, right: { visual: { kind: "emoji", value: "🌽" } } },
              { id: "p2", left: { label: "storm" }, right: { visual: { kind: "emoji", value: "⛈️" } } },
              { id: "p3", left: { label: "horn" }, right: { visual: { kind: "emoji", value: "🎺" } } },
            ],
          },
        },
        {
          id: "read-e-rcontrolled-2-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word has the or sound?",
              spokenText: "Bossy R strikes again! Which word has the O-R sound?",
            },
            options: [
              { id: "a", label: "net" },
              { id: "b", label: "north" },
              { id: "c", label: "note" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-rcontrolled-2-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "Boom! Thunder in a big storm! Which letters finish the word storm?",
            },
            template: "st___m ⛈️",
            bank: [
              { id: "a", label: "ar" },
              { id: "b", label: "ur" },
              { id: "c", label: "or" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-rcontrolled-2-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen for the 'or' sound! Tap the word that has the O-R sound.",
            },
            options: [
              { id: "a", label: "fit" },
              { id: "b", label: "fun" },
              { id: "c", label: "fort" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-rcontrolled-2-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word has the or sound?",
              spokenText: "O-R says 'or'! Read each word. Which one has the O-R sound?",
            },
            options: [
              { id: "a", label: "hen" },
              { id: "b", label: "horn" },
              { id: "c", label: "hat" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "read-l-rcontrolled-3",
      title: "ER, IR, UR — One Sound, Three Spellings",
      primarySkillId: "read-r-controlled",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-rcontrolled-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word is spelled with er?",
              spokenText: "E-R, I-R, and U-R all make the same 'er' sound! Her is spelled H-E-R. Which word is spelled with E-R?",
            },
            options: [
              { id: "a", label: "fern" },
              { id: "b", label: "girl" },
              { id: "c", label: "turtle" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-rcontrolled-3-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "The girl waved hello! Which letters finish the word girl?",
            },
            template: "g___l 👧",
            bank: [
              { id: "a", label: "ir" },
              { id: "b", label: "ar" },
              { id: "c", label: "or" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-rcontrolled-3-03",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "bird" }, right: { visual: { kind: "emoji", value: "🐦" } } },
              { id: "p2", left: { label: "turtle" }, right: { visual: { kind: "emoji", value: "🐢" } } },
              { id: "p3", left: { label: "shirt" }, right: { visual: { kind: "emoji", value: "👕" } } },
            ],
          },
        },
        {
          id: "read-e-rcontrolled-3-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word is spelled with ur?",
              spokenText: "U-R makes that same 'er' sound. Which word is spelled with U-R?",
            },
            options: [
              { id: "a", label: "bird" },
              { id: "b", label: "hurt" },
              { id: "c", label: "her" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-rcontrolled-3-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "A leafy green fern! Which letters finish the word fern?",
            },
            template: "f___n 🌿",
            bank: [
              { id: "a", label: "er" },
              { id: "b", label: "ar" },
              { id: "c", label: "or" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-rcontrolled-3-06",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Her, bird, and turtle all share the same 'er' sound! Tap the word that has that same 'er' sound.",
            },
            options: [
              { id: "a", label: "car" },
              { id: "b", label: "nurse" },
              { id: "c", label: "corn" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-rcontrolled-3-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "Ride the waves and surf! Which letters finish the word surf?",
            },
            template: "s___f 🏄",
            bank: [
              { id: "a", label: "ur" },
              { id: "b", label: "ar" },
              { id: "c", label: "or" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-rcontrolled-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word is spelled with ir?",
              spokenText: "I-R makes the 'er' sound too. Which word is spelled with I-R?",
            },
            options: [
              { id: "a", label: "surf" },
              { id: "b", label: "her" },
              { id: "c", label: "first" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
  ],
};
