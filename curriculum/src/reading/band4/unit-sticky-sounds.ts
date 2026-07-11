import type { UnitSeed } from "../../schema/pack";

/**
 * Reading Band 4 · Sticky Sounds
 * Glued (welded) sounds: the -all, -am, and -an families, taught as whole chunks.
 * Lesson 1 introduces hearing and finding -all, -am, -an words by ear.
 * Lesson 2 mixes recognition: hear-and-pick plus word↔picture matching.
 * Lesson 3 stretches into building words from letter + chunk chips.
 */
export const stickySounds: UnitSeed = {
  id: "read-u-glued",
  bandId: "reading-b4",
  title: "Sticky Sounds",
  icon: "🍯",
  lessons: [
    {
      id: "read-l-glued-1",
      title: "Hear the Sticky Sounds",
      primarySkillId: "read-glued",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-glued-1-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Ball ends with A-L-L! Tap the word that ends like ball." },
            options: [
              { id: "a", label: "tap" },
              { id: "b", label: "tall" },
              { id: "c", label: "tan" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-glued-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word ends with am?",
              spokenText: "Which word ends with A-M? Read them all the way to the end!",
            },
            options: [
              { id: "a", label: "ham" },
              { id: "b", label: "hat" },
              { id: "c", label: "hop" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-glued-1-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Fan ends with A-N! Tap the picture whose name ends like fan." },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐟" } },
              { id: "b", visual: { kind: "emoji", value: "🎩" } },
              { id: "c", visual: { kind: "emoji", value: "🚐" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-glued-1-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word ends with all?",
              spokenText: "Which word ends with A-L-L? Sound each one out!",
            },
            options: [
              { id: "a", label: "wall" },
              { id: "b", label: "wig" },
              { id: "c", label: "win" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-glued-1-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "ham" }, right: { visual: { kind: "emoji", value: "🍖" } } },
              { id: "p2", left: { label: "ball" }, right: { visual: { kind: "emoji", value: "⚽" } } },
              { id: "p3", left: { label: "fan" }, right: { visual: { kind: "emoji", value: "🪭" } } },
            ],
          },
        },
        {
          id: "read-e-glued-1-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Jam ends with A-M! Tap the word that ends like jam." },
            options: [
              { id: "a", label: "rat" },
              { id: "b", label: "ram" },
              { id: "c", label: "rag" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-glued-1-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word ends with an?",
              spokenText: "Which word ends with A-N? Read them all the way to the end!",
            },
            options: [
              { id: "a", label: "mat" },
              { id: "b", label: "map" },
              { id: "c", label: "man" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-glued-1-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Put the words in order to make a sentence! The capital letter goes first.",
            },
            items: [
              { id: "w1", label: "ball" },
              { id: "w2", label: "The" },
              { id: "w3", label: "is" },
              { id: "w4", label: "small" },
            ],
            correctOrder: ["w2", "w1", "w3", "w4"],
          },
        },
      ],
    },
    {
      id: "read-l-glued-2",
      title: "Sticky Sound Mix-Up",
      primarySkillId: "read-glued",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-glued-2-01",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "clam" }, right: { visual: { kind: "emoji", value: "🦪" } } },
              { id: "p2", left: { label: "wall" }, right: { visual: { kind: "emoji", value: "🧱" } } },
              { id: "p3", left: { label: "can" }, right: { visual: { kind: "emoji", value: "🥫" } } },
            ],
          },
        },
        {
          id: "read-e-glued-2-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Small ends with A-L-L! Tap the word that ends like small." },
            options: [
              { id: "a", label: "fall" },
              { id: "b", label: "fan" },
              { id: "c", label: "fat" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-glued-2-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word ends with am?",
              spokenText: "Which word ends with A-M? Sound each one out!",
            },
            options: [
              { id: "a", label: "cap" },
              { id: "b", label: "cat" },
              { id: "c", label: "clam" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-glued-2-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Man ends with A-N! Tap the picture whose name ends like man." },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🧦" } },
              { id: "b", visual: { kind: "emoji", value: "🚐" } },
              { id: "c", visual: { kind: "emoji", value: "🍒" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-glued-2-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🧱 Which word matches the picture?",
              spokenText: "Look at the picture, then tap the word that names it!",
            },
            options: [
              { id: "a", label: "wig" },
              { id: "b", label: "wag" },
              { id: "c", label: "wall" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-glued-2-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word van!" },
            options: [
              { id: "a", label: "ran" },
              { id: "b", label: "van" },
              { id: "c", label: "man" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-glued-2-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word ends with an?",
              spokenText: "Plan ends with A-N! Which word ends like plan?",
            },
            options: [
              { id: "a", label: "can" },
              { id: "b", label: "cab" },
              { id: "c", label: "cap" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-glued-2-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Put the words in order to make a sentence! The capital letter goes first.",
            },
            items: [
              { id: "w1", label: "nap" },
              { id: "w2", label: "The" },
              { id: "w3", label: "can" },
              { id: "w4", label: "ram" },
            ],
            correctOrder: ["w2", "w4", "w3", "w1"],
          },
        },
      ],
    },
    {
      id: "read-l-glued-3",
      title: "Build Sticky Words",
      primarySkillId: "read-glued",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-glued-3-01",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Build the word!",
              spokenText: "Sweet jam on toast! Which letters finish the word jam?",
            },
            template: "j___ 🍞",
            bank: [
              { id: "a", label: "all" },
              { id: "b", label: "am" },
              { id: "c", label: "an" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-glued-3-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Build the word!",
              spokenText: "Beep beep, here comes the van! Which letters finish the word van?",
            },
            template: "v___ 🚐",
            bank: [
              { id: "a", label: "an" },
              { id: "b", label: "all" },
              { id: "c", label: "am" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-glued-3-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Build the word!",
              spokenText: "The tiny mouse is so small! Which letters finish the word small?",
            },
            template: "sm___ 🐭",
            bank: [
              { id: "a", label: "am" },
              { id: "b", label: "an" },
              { id: "c", label: "all" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-glued-3-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word ends with all?",
              spokenText: "Which word ends with A-L-L? Read them all the way to the end!",
            },
            options: [
              { id: "a", label: "ham" },
              { id: "b", label: "hall" },
              { id: "c", label: "hat" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-glued-3-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Build the word!",
              spokenText: "A pancake sizzles in the pan! Which letters finish the word pan?",
            },
            template: "p___ 🍳",
            bank: [
              { id: "a", label: "all" },
              { id: "b", label: "am" },
              { id: "c", label: "an" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-glued-3-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Ram ends with A-M! Tap the word that ends like ram." },
            options: [
              { id: "a", label: "clam" },
              { id: "b", label: "clap" },
              { id: "c", label: "clip" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-glued-3-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Build the word!",
              spokenText: "Yummy ham for lunch! Which letters finish the word ham?",
            },
            template: "h___ 🍖",
            bank: [
              { id: "a", label: "an" },
              { id: "b", label: "am" },
              { id: "c", label: "all" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-glued-3-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Put the words in order to make a sentence! The capital letter goes first.",
            },
            items: [
              { id: "w1", label: "man" },
              { id: "w2", label: "a" },
              { id: "w3", label: "The" },
              { id: "w4", label: "fan" },
              { id: "w5", label: "has" },
            ],
            correctOrder: ["w3", "w1", "w5", "w2", "w4"],
          },
        },
      ],
    },
  ],
};
