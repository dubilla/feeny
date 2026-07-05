import type { UnitSeed } from "../../schema/pack";

/**
 * Band 3 · Rhyme Time
 * Hearing and matching rhymes.
 * Lesson 1 is all picture-based rhyme picking.
 * Lesson 2 mixes in written rhyme words and odd-one-out.
 * Lesson 3 stretches with word-only rhymes and trickier odd-one-outs.
 */
export const rhymeTime: UnitSeed = {
  id: "read-u-rhymes",
  bandId: "reading-b3",
  title: "Rhyme Time",
  icon: "🎵",
  lessons: [
    {
      id: "read-l-rhymes-1",
      title: "Sounds Alike",
      primarySkillId: "read-rhymes",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-rhymes-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "What rhymes with cat?",
              spokenText: "Cat! Which picture rhymes with cat? Is it hat, or fish?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🎩" } },
              { id: "b", visual: { kind: "emoji", value: "🐟" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-rhymes-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "What rhymes with dog?",
              spokenText: "Dog! Which picture rhymes with dog? Is it log, or sun?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "☀️" } },
              { id: "b", visual: { kind: "emoji", value: "🪵" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-rhymes-1-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Hen! Tap the picture that rhymes with hen!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍎" } },
              { id: "b", visual: { kind: "emoji", value: "🖊️" } },
              { id: "c", visual: { kind: "emoji", value: "🚌" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-rhymes-1-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the rhymes!",
              spokenText: "Match the pictures that rhyme! Cat rhymes with hat, and frog rhymes with log!",
            },
            pairs: [
              {
                id: "p1",
                left: { visual: { kind: "emoji", value: "🐱" } },
                right: { visual: { kind: "emoji", value: "🎩" } },
              },
              {
                id: "p2",
                left: { visual: { kind: "emoji", value: "🐸" } },
                right: { visual: { kind: "emoji", value: "🪵" } },
              },
            ],
          },
        },
        {
          id: "read-e-rhymes-1-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "What rhymes with bat?",
              spokenText: "Bat! Which picture rhymes with bat? Cat, dog, or milk?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐶" } },
              { id: "b", visual: { kind: "emoji", value: "🐱" } },
              { id: "c", visual: { kind: "emoji", value: "🥛" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-rhymes-1-06",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Frog! Tap the picture that rhymes with frog!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐝" } },
              { id: "b", visual: { kind: "emoji", value: "🪁" } },
              { id: "c", visual: { kind: "emoji", value: "🐶" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-rhymes-1-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which one does NOT rhyme?",
              spokenText: "Hat, bat, bus! Tap the one that does not rhyme with the others!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🎩" } },
              { id: "b", visual: { kind: "emoji", value: "🦇" } },
              { id: "c", visual: { kind: "emoji", value: "🚌" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-rhymes-1-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the rhymes!",
              spokenText: "Match the pictures that rhyme! Hen rhymes with pen, and dog rhymes with frog!",
            },
            pairs: [
              {
                id: "p1",
                left: { visual: { kind: "emoji", value: "🐔" } },
                right: { visual: { kind: "emoji", value: "🖊️" } },
              },
              {
                id: "p2",
                left: { visual: { kind: "emoji", value: "🐶" } },
                right: { visual: { kind: "emoji", value: "🐸" } },
              },
            ],
          },
        },
      ],
    },
    {
      id: "read-l-rhymes-2",
      title: "Rhyme Detectives",
      primarySkillId: "read-rhymes",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-rhymes-2-01",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Pen! Tap the picture that rhymes with pen!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐔" } },
              { id: "b", visual: { kind: "emoji", value: "🐷" } },
              { id: "c", visual: { kind: "emoji", value: "⚽" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-rhymes-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "What rhymes with log?",
              spokenText: "Log! Which picture rhymes with log? Frog, fish, or moon?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐟" } },
              { id: "b", visual: { kind: "emoji", value: "🐸" } },
              { id: "c", visual: { kind: "emoji", value: "🌙" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-rhymes-2-03",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the rhyming words!",
              spokenText: "Find the rhyming pairs! Cat, hat, dog, log — which words rhyme?",
            },
            pairs: [
              { id: "p1", left: { label: "cat" }, right: { label: "hat" } },
              { id: "p2", left: { label: "dog" }, right: { label: "log" } },
            ],
          },
        },
        {
          id: "read-e-rhymes-2-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which one does NOT rhyme?",
              spokenText: "Dog, log, hat! Tap the one that does not rhyme with the others!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐶" } },
              { id: "b", visual: { kind: "emoji", value: "🎩" } },
              { id: "c", visual: { kind: "emoji", value: "🪵" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-rhymes-2-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "🐱",
              spokenText: "Cat rhymes with... tap the word! Is it hat, pig, or bus?",
            },
            template: "cat rhymes with ___",
            bank: [
              { id: "a", label: "pig" },
              { id: "b", label: "hat" },
              { id: "c", label: "bus" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-rhymes-2-06",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Hen! Which word rhymes with hen? Ten, hat, or pig? Tap it!",
            },
            options: [
              { id: "a", label: "hat" },
              { id: "b", label: "pig" },
              { id: "c", label: "ten" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-rhymes-2-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "What rhymes with hat?",
              spokenText: "Hat! Which picture rhymes with hat? Bat, fish, or pen?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🦇" } },
              { id: "b", visual: { kind: "emoji", value: "🐟" } },
              { id: "c", visual: { kind: "emoji", value: "🖊️" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-rhymes-2-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the rhyming words!",
              spokenText: "Match the words that rhyme! Sun and fun, pig and wig, hen and ten!",
            },
            pairs: [
              { id: "p1", left: { label: "sun" }, right: { label: "fun" } },
              { id: "p2", left: { label: "pig" }, right: { label: "wig" } },
              { id: "p3", left: { label: "hen" }, right: { label: "ten" } },
            ],
          },
        },
      ],
    },
    {
      id: "read-l-rhymes-3",
      title: "Rhyme Masters",
      primarySkillId: "read-rhymes",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-rhymes-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which one does NOT rhyme?",
              spokenText: "Frog, log, cat! Tap the one that does not rhyme with the others!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐸" } },
              { id: "b", visual: { kind: "emoji", value: "🪵" } },
              { id: "c", visual: { kind: "emoji", value: "🐱" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-rhymes-3-02",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Dog! Which word rhymes with dog? Log, dig, or cat? Tap it!",
            },
            options: [
              { id: "a", label: "log" },
              { id: "b", label: "dig" },
              { id: "c", label: "cat" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-rhymes-3-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "☀️",
              spokenText: "Sun rhymes with... tap the word! Is it fun, sit, or pen?",
            },
            template: "sun rhymes with ___",
            bank: [
              { id: "a", label: "sit" },
              { id: "b", label: "pen" },
              { id: "c", label: "fun" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-rhymes-3-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the rhyming words!",
              spokenText: "Match the words that rhyme! Cat and bat, log and frog, pen and ten!",
            },
            pairs: [
              { id: "p1", left: { label: "cat" }, right: { label: "bat" } },
              { id: "p2", left: { label: "log" }, right: { label: "frog" } },
              { id: "p3", left: { label: "pen" }, right: { label: "ten" } },
            ],
          },
        },
        {
          id: "read-e-rhymes-3-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "What rhymes with pen?",
              spokenText: "Pen! Which picture rhymes with pen? Snake, pig, or hen?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐍" } },
              { id: "b", visual: { kind: "emoji", value: "🐔" } },
              { id: "c", visual: { kind: "emoji", value: "🐷" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-rhymes-3-06",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Log! Tap the picture that rhymes with log!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐝" } },
              { id: "b", visual: { kind: "emoji", value: "🐶" } },
              { id: "c", visual: { kind: "emoji", value: "🍎" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-rhymes-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word does NOT rhyme?",
              spokenText: "Hat, cat, pig! Tap the word that does not rhyme with the others!",
            },
            options: [
              { id: "a", label: "hat" },
              { id: "b", label: "pig" },
              { id: "c", label: "cat" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-rhymes-3-08",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "🐸",
              spokenText: "Frog rhymes with... tap the word! Is it dog, fish, or hat?",
            },
            template: "frog rhymes with ___",
            bank: [
              { id: "a", label: "dog" },
              { id: "b", label: "fish" },
              { id: "c", label: "hat" },
            ],
            correctChipId: "a",
          },
        },
      ],
    },
  ],
};
