import type { UnitSeed } from "../../schema/pack";

/**
 * Band 4 · Sight Word Stars
 * High-frequency words: the, and, you, said, come, here, like, see.
 * Lesson 1 introduces the, and, see, you.
 * Lesson 2 introduces said, come, here, like.
 * Lesson 3 mixes all eight with trickier look-alike distractors.
 */
export const sightWordStars: UnitSeed = {
  id: "read-u-sight",
  bandId: "reading-b4",
  title: "Sight Word Stars",
  icon: "⭐",
  lessons: [
    {
      id: "read-l-sight-1",
      title: "Star Words",
      primarySkillId: "read-sight-words",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-sight-1-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word the! The, like the cat, the dog, the sun!" },
            options: [
              { id: "a", label: "them" },
              { id: "b", label: "the" },
              { id: "c", label: "that" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sight-1-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word and! And, like cats and dogs!" },
            options: [
              { id: "a", label: "and" },
              { id: "b", label: "add" },
              { id: "c", label: "ant" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sight-1-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "🐶",
              spokenText: "Listen: I see a dog. Tap the missing word!",
            },
            template: "I ___ a dog.",
            bank: [
              { id: "a", label: "tree" },
              { id: "b", label: "blue" },
              { id: "c", label: "see" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-sight-1-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word you! You, like I see you!" },
            options: [
              { id: "a", label: "yes" },
              { id: "b", label: "your" },
              { id: "c", label: "you" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-sight-1-05",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Make the sentence: I see you! Tap the words in order.",
            },
            items: [
              { id: "a", label: "see" },
              { id: "b", label: "I" },
              { id: "c", label: "you" },
            ],
            correctOrder: ["b", "a", "c"],
          },
        },
        {
          id: "read-e-sight-1-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "🐱 🐶",
              spokenText: "Listen: I see a cat and a dog. Tap the missing word!",
            },
            template: "I see a cat ___ a dog.",
            bank: [
              { id: "a", label: "and" },
              { id: "b", label: "the" },
              { id: "c", label: "you" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-sight-1-07",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word see! See, like I see the moon!" },
            options: [
              { id: "a", label: "she" },
              { id: "b", label: "see" },
              { id: "c", label: "set" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sight-1-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the same words!",
              spokenText: "Match each star word to its twin! Find the pairs that look the same.",
            },
            pairs: [
              { id: "p1", left: { label: "the" }, right: { label: "the" } },
              { id: "p2", left: { label: "and" }, right: { label: "and" } },
              { id: "p3", left: { label: "you" }, right: { label: "you" } },
            ],
          },
        },
      ],
    },
    {
      id: "read-l-sight-2",
      title: "More Star Words",
      primarySkillId: "read-sight-words",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-sight-2-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word said! Said, like the hen said cluck!" },
            options: [
              { id: "a", label: "sad" },
              { id: "b", label: "said" },
              { id: "c", label: "say" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sight-2-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word come! Come, like come and play!" },
            options: [
              { id: "a", label: "come" },
              { id: "b", label: "came" },
              { id: "c", label: "cone" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sight-2-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "🐶",
              spokenText: "Listen: Come here, dog! Tap the missing word!",
            },
            template: "Come ___, dog!",
            bank: [
              { id: "a", label: "hat" },
              { id: "b", label: "he" },
              { id: "c", label: "here" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-sight-2-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word like! Like, like I like apples!" },
            options: [
              { id: "a", label: "lake" },
              { id: "b", label: "like" },
              { id: "c", label: "bike" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sight-2-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "🍎",
              spokenText: "Listen: I like apples. Tap the missing word!",
            },
            template: "I ___ apples.",
            bank: [
              { id: "a", label: "like" },
              { id: "b", label: "lake" },
              { id: "c", label: "look" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-sight-2-06",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Make the sentence: Come and see! Tap the words in order.",
            },
            items: [
              { id: "a", label: "and" },
              { id: "b", label: "see" },
              { id: "c", label: "Come" },
            ],
            correctOrder: ["c", "a", "b"],
          },
        },
        {
          id: "read-e-sight-2-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "🐔",
              spokenText: "Listen: The hen said cluck. Tap the missing word!",
            },
            template: "The hen ___ cluck.",
            bank: [
              { id: "a", label: "sad" },
              { id: "b", label: "said" },
              { id: "c", label: "see" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-sight-2-08",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word here! Here, like come here!" },
            options: [
              { id: "a", label: "her" },
              { id: "b", label: "have" },
              { id: "c", label: "here" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "read-l-sight-3",
      title: "Sight Word Champs",
      primarySkillId: "read-sight-words",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-sight-3-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word said! Said, like the fox said hello!" },
            options: [
              { id: "a", label: "said" },
              { id: "b", label: "side" },
              { id: "c", label: "and" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sight-3-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "🐷",
              spokenText: "Listen: Come and see the pig! Tap the missing word!",
            },
            template: "Come ___ see the pig!",
            bank: [
              { id: "a", label: "ant" },
              { id: "b", label: "and" },
              { id: "c", label: "an" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-sight-3-03",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Make the sentence: You like the cat! Tap the words in order.",
            },
            items: [
              { id: "a", label: "the" },
              { id: "b", label: "You" },
              { id: "c", label: "cat" },
              { id: "d", label: "like" },
            ],
            correctOrder: ["b", "d", "a", "c"],
          },
        },
        {
          id: "read-e-sight-3-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word here! Here, like the bus is here!" },
            options: [
              { id: "a", label: "hare" },
              { id: "b", label: "here" },
              { id: "c", label: "have" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sight-3-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "🥛",
              spokenText: "Listen: Do you like milk? Tap the missing word!",
            },
            template: "Do ___ like milk?",
            bank: [
              { id: "a", label: "yes" },
              { id: "b", label: "yell" },
              { id: "c", label: "you" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-sight-3-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the same words!",
              spokenText: "Match each star word to its twin! Find the pairs that look the same.",
            },
            pairs: [
              { id: "p1", left: { label: "said" }, right: { label: "said" } },
              { id: "p2", left: { label: "come" }, right: { label: "come" } },
              { id: "p3", left: { label: "here" }, right: { label: "here" } },
            ],
          },
        },
        {
          id: "read-e-sight-3-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "🐸",
              spokenText: "Listen: Come and see the frog! Tap the missing word!",
            },
            template: "Come and ___ the frog!",
            bank: [
              { id: "a", label: "see" },
              { id: "b", label: "say" },
              { id: "c", label: "sun" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-sight-3-08",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word come! Come, like come here, you two!" },
            options: [
              { id: "a", label: "came" },
              { id: "b", label: "some" },
              { id: "c", label: "come" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
  ],
};
