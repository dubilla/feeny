import type { UnitSeed } from "../../schema/pack";

/**
 * Reading Band 6 · Magic E (F6, decoding-middle)
 * The silent e at the end of a VCe word makes the vowel "say its name"
 * (cap → cape). Long-vs-short IS genuinely audible, so listenAndPick is safe
 * here — but two guardrails are load-bearing:
 *   1. ANSWER-LEAK: a prompt never says "add an e" or "silent e" when the
 *      answer is the e-chip (or an e-containing word). Fills that add the
 *      magic e just ask "which letter finishes the word"; the spoken prompt
 *      names the word but never the letter/team it's testing.
 *   2. VCe EXCEPTION WORDS ARE BANNED everywhere, even as distractors:
 *      have, give, come, some, love (their e does NOT lengthen the vowel).
 * Lesson 1 teaches a_e and i_e; Lesson 2 teaches o_e and u_e.
 * Lesson 3 is minimal-pair short-vs-long contrast. Its option words
 *   (hope, cape, cub, tap...) aren't emoji-representable, so options are
 *   LABELS only (valid per schema) and the lesson leans listenAndPick +
 *   fillBlank cloze. Every fill bank is checked so only ONE chip solves.
 */
export const magicE: UnitSeed = {
  id: "read-u-silente",
  bandId: "reading-b6",
  title: "Magic E",
  icon: "✨",
  lessons: [
    {
      id: "read-l-silente-1",
      title: "A and I Magic",
      primarySkillId: "read-silent-e",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-silente-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word? 🎂",
              spokenText: "Look at the yummy picture! Which word names it?",
            },
            options: [
              { id: "a", label: "cake" },
              { id: "b", label: "cat" },
              { id: "c", label: "cap" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-silente-1-02",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the picture whose name rhymes with bike.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍎" } },
              { id: "b", visual: { kind: "emoji", value: "🪁" } },
              { id: "c", visual: { kind: "emoji", value: "🐝" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-silente-1-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "Up in the sky, an airplane zooms by! Which letter completes the word?",
            },
            template: "pl___ne ✈️",
            bank: [
              { id: "a", label: "a" },
              { id: "b", label: "e" },
              { id: "c", label: "i" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-silente-1-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word? 🐍",
              spokenText: "Which word names this long, slithery animal?",
            },
            options: [
              { id: "a", label: "snack" },
              { id: "b", label: "sock" },
              { id: "c", label: "snake" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-silente-1-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "A kite flying high on a windy day! Which letter completes the word?",
            },
            template: "k___te 🪁",
            bank: [
              { id: "a", label: "i" },
              { id: "b", label: "a" },
              { id: "c", label: "o" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-silente-1-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word? 🚲",
              spokenText: "Which word names this thing you ride and pedal?",
            },
            options: [
              { id: "a", label: "big" },
              { id: "b", label: "bike" },
              { id: "c", label: "bib" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-silente-1-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the picture whose name rhymes with snake.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🚗" } },
              { id: "b", visual: { kind: "emoji", value: "🐟" } },
              { id: "c", visual: { kind: "emoji", value: "🎂" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-silente-1-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "kite" }, right: { visual: { kind: "emoji", value: "🪁" } } },
              { id: "p2", left: { label: "snake" }, right: { visual: { kind: "emoji", value: "🐍" } } },
              { id: "p3", left: { label: "cake" }, right: { visual: { kind: "emoji", value: "🎂" } } },
            ],
          },
        },
      ],
    },
    {
      id: "read-l-silente-2",
      title: "O and U Magic",
      primarySkillId: "read-silent-e",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-silente-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word? 🦴",
              spokenText: "Which word names what a dog likes to chew?",
            },
            options: [
              { id: "a", label: "bone" },
              { id: "b", label: "ball" },
              { id: "c", label: "box" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-silente-2-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "A smooth gray stone by the path! Which letter completes the word?",
            },
            template: "st___ne 🪨",
            bank: [
              { id: "a", label: "a" },
              { id: "b", label: "o" },
              { id: "c", label: "u" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-silente-2-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word? 👃",
              spokenText: "Which word names the part of your face that smells things?",
            },
            options: [
              { id: "a", label: "note" },
              { id: "b", label: "net" },
              { id: "c", label: "nose" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-silente-2-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the picture whose name rhymes with bone.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "📱" } },
              { id: "b", visual: { kind: "emoji", value: "🍎" } },
              { id: "c", visual: { kind: "emoji", value: "🐟" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-silente-2-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "A cold ice cube in your drink! Which letter completes the word?",
            },
            template: "c___be 🧊",
            bank: [
              { id: "a", label: "a" },
              { id: "b", label: "o" },
              { id: "c", label: "u" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-silente-2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word? 🎵",
              spokenText: "Which word names a little bit of music you sing or play?",
            },
            options: [
              { id: "a", label: "not" },
              { id: "b", label: "note" },
              { id: "c", label: "nut" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-silente-2-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the picture whose name rhymes with nose.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🚗" } },
              { id: "b", visual: { kind: "emoji", value: "🌹" } },
              { id: "c", visual: { kind: "emoji", value: "🐱" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-silente-2-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "rope" }, right: { visual: { kind: "emoji", value: "🪢" } } },
              { id: "p2", left: { label: "bone" }, right: { visual: { kind: "emoji", value: "🦴" } } },
              { id: "p3", left: { label: "flute" }, right: { visual: { kind: "emoji", value: "🪈" } } },
            ],
          },
        },
      ],
    },
    {
      id: "read-l-silente-3",
      title: "Short or Long?",
      primarySkillId: "read-silent-e",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-silente-3-01",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen closely! Tap the word cape.",
            },
            options: [
              { id: "a", label: "cape" },
              { id: "b", label: "cap" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-silente-3-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Something red flaps behind the flying hero! Which word finishes the sentence?",
            },
            template: "The hero's red ___ flaps behind him.",
            bank: [
              { id: "a", label: "cap" },
              { id: "b", label: "cape" },
              { id: "c", label: "tap" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-silente-3-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen closely! Tap the word kit.",
            },
            options: [
              { id: "a", label: "kite" },
              { id: "b", label: "kit" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-silente-3-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word? 🌲",
              spokenText: "Which word names this tall evergreen tree?",
            },
            options: [
              { id: "a", label: "pine" },
              { id: "b", label: "pin" },
              { id: "c", label: "pen" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-silente-3-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "You send it to Grandma to say hello! Which word finishes it?",
            },
            template: "I write a ___ to Grandma.",
            bank: [
              { id: "a", label: "not" },
              { id: "b", label: "note" },
              { id: "c", label: "net" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-silente-3-06",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen closely! Tap the word hope.",
            },
            options: [
              { id: "a", label: "hop" },
              { id: "b", label: "hope" },
              { id: "c", label: "hot" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-silente-3-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "A baby bear has this special name! Which word finishes it?",
            },
            template: "The baby bear is a ___.",
            bank: [
              { id: "a", label: "cube" },
              { id: "b", label: "cub" },
              { id: "c", label: "cab" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-silente-3-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen closely! Tap the word tap.",
            },
            options: [
              { id: "a", label: "tape" },
              { id: "b", label: "tap" },
              { id: "c", label: "top" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
  ],
};
