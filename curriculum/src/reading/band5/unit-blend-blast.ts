import type { UnitSeed } from "../../schema/pack";

/**
 * Reading Band 5 · Blend Blast
 * Blends: each letter keeps its own sound (unlike digraphs).
 * Lesson 1 introduces initial s-blends and l-blends (st, sn, sl, fl, pl).
 * Lesson 2 adds initial r-blends (gr, tr, dr, cr) mixed with lesson-1 review.
 * Lesson 3 stretches to final blends (-st, -mp, -nd, -lt) plus word building.
 */
export const blendBlast: UnitSeed = {
  id: "read-u-blends",
  bandId: "reading-b5",
  title: "Blend Blast",
  icon: "🚀",
  lessons: [
    {
      id: "read-l-blends-1",
      title: "S and L Blends",
      primarySkillId: "read-blends",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-blends-1-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Star starts with S-T! Tap the word that starts like star." },
            options: [
              { id: "a", label: "stop" },
              { id: "b", label: "sop" },
              { id: "c", label: "top" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-blends-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word starts with sn?",
              spokenText: "Which word starts with S-N? Sound each one out!",
            },
            options: [
              { id: "a", label: "sail" },
              { id: "b", label: "nail" },
              { id: "c", label: "snail" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-blends-1-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "Whee, down the snowy hill! Which letters start the word sled?",
            },
            template: "___ed 🛷",
            bank: [
              { id: "a", label: "fl" },
              { id: "b", label: "sl" },
              { id: "c", label: "st" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-blends-1-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "flag" }, right: { visual: { kind: "emoji", value: "🚩" } } },
              { id: "p2", left: { label: "snail" }, right: { visual: { kind: "emoji", value: "🐌" } } },
              { id: "p3", left: { label: "star" }, right: { visual: { kind: "emoji", value: "⭐" } } },
            ],
          },
        },
        {
          id: "read-e-blends-1-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word starts with pl?",
              spokenText: "Which word starts with P-L? Sound them out!",
            },
            options: [
              { id: "a", label: "pum" },
              { id: "b", label: "plum" },
              { id: "c", label: "lum" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-blends-1-06",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Flower starts with F-L! Tap the picture whose name starts like flower.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐌" } },
              { id: "b", visual: { kind: "emoji", value: "🚩" } },
              { id: "c", visual: { kind: "emoji", value: "🛷" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-blends-1-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "The red light says wait! Which letters start the word stop?",
            },
            template: "___op 🛑",
            bank: [
              { id: "a", label: "st" },
              { id: "b", label: "sl" },
              { id: "c", label: "pl" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-blends-1-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Put the words in order to make a sentence! The capital letter goes first.",
            },
            items: [
              { id: "w1", label: "fast" },
              { id: "w2", label: "The" },
              { id: "w3", label: "sled" },
              { id: "w4", label: "is" },
            ],
            correctOrder: ["w2", "w3", "w4", "w1"],
          },
        },
      ],
    },
    {
      id: "read-l-blends-2",
      title: "R Blends",
      primarySkillId: "read-blends",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-blends-2-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Green starts with G-R! Tap the word that starts like green." },
            options: [
              { id: "a", label: "gate" },
              { id: "b", label: "rake" },
              { id: "c", label: "grape" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-blends-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word starts with tr?",
              spokenText: "Which word starts with T-R? Sound each one out!",
            },
            options: [
              { id: "a", label: "truck" },
              { id: "b", label: "tuck" },
              { id: "c", label: "duck" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-blends-2-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Dragon starts with D-R! Tap the picture whose name starts like dragon.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍇" } },
              { id: "b", visual: { kind: "emoji", value: "🥁" } },
              { id: "c", visual: { kind: "emoji", value: "🚚" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-blends-2-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word starts with cr?",
              spokenText: "Which word starts with C-R? Read them out loud!",
            },
            options: [
              { id: "a", label: "cab" },
              { id: "b", label: "crab" },
              { id: "c", label: "grab" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-blends-2-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "Boom, boom, boom! Which letters start the word drum?",
            },
            template: "___um 🥁",
            bank: [
              { id: "a", label: "gr" },
              { id: "b", label: "pl" },
              { id: "c", label: "dr" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-blends-2-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "crab" }, right: { visual: { kind: "emoji", value: "🦀" } } },
              { id: "p2", left: { label: "truck" }, right: { visual: { kind: "emoji", value: "🚚" } } },
              { id: "p3", left: { label: "grapes" }, right: { visual: { kind: "emoji", value: "🍇" } } },
            ],
          },
        },
        {
          id: "read-e-blends-2-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "Slither in the grass! Which letters start the word snake?",
            },
            template: "___ake 🐍",
            bank: [
              { id: "a", label: "sn" },
              { id: "b", label: "cr" },
              { id: "c", label: "tr" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-blends-2-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Put the words in order to make a sentence! The capital letter goes first.",
            },
            items: [
              { id: "w1", label: "red" },
              { id: "w2", label: "truck" },
              { id: "w3", label: "The" },
              { id: "w4", label: "is" },
            ],
            correctOrder: ["w3", "w2", "w4", "w1"],
          },
        },
      ],
    },
    {
      id: "read-l-blends-3",
      title: "Blends at the End",
      primarySkillId: "read-blends",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-blends-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word ends with st?",
              spokenText: "Blends can end words too! Which word ends with S-T? Read all the way to the end!",
            },
            options: [
              { id: "a", label: "net" },
              { id: "b", label: "nest" },
              { id: "c", label: "ness" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-blends-3-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "Click, the light turns on! Which letters end the word lamp?",
            },
            template: "la___ 🪔",
            bank: [
              { id: "a", label: "nd" },
              { id: "b", label: "st" },
              { id: "c", label: "mp" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-blends-3-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen for the end! Tap the word that ends with N-D.",
            },
            options: [
              { id: "a", label: "hand" },
              { id: "b", label: "ham" },
              { id: "c", label: "hat" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-blends-3-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "hand" }, right: { visual: { kind: "emoji", value: "✋" } } },
              { id: "p2", left: { label: "nest" }, right: { visual: { kind: "emoji", value: "🪺" } } },
              { id: "p3", left: { label: "belt" }, right: { visual: { kind: "emoji", value: "🥋" } } },
            ],
          },
        },
        {
          id: "read-e-blends-3-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word ends with lt?",
              spokenText: "Which word ends with L-T? Read each one to the very end!",
            },
            options: [
              { id: "a", label: "belt" },
              { id: "b", label: "bell" },
              { id: "c", label: "bet" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-blends-3-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Build the word!",
              spokenText: "You dig in it at the beach! Which letters end the word sand?",
            },
            template: "sa___ 🏖️",
            bank: [
              { id: "a", label: "nd" },
              { id: "b", label: "mp" },
              { id: "c", label: "st" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-blends-3-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen for the end! Tap the picture whose name ends with M-P.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "✋" } },
              { id: "b", visual: { kind: "emoji", value: "🪺" } },
              { id: "c", visual: { kind: "emoji", value: "🦐" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-blends-3-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Put the words in order to make a sentence! The capital letter goes first.",
            },
            items: [
              { id: "w1", label: "soft" },
              { id: "w2", label: "The" },
              { id: "w3", label: "is" },
              { id: "w4", label: "nest" },
            ],
            correctOrder: ["w2", "w4", "w3", "w1"],
          },
        },
      ],
    },
  ],
};
