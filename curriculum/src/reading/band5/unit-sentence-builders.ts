import type { UnitSeed } from "../../schema/pack";

/**
 * Band 5 · Sentence Builders
 * Building and completing simple sentences.
 * Lesson 1 uses three-word sentences; the spoken prompt reads the choices.
 * Lesson 2 grows to four-word sentences.
 * Lesson 3 stretches to five-word sentences and kid-read choices.
 */
export const sentenceBuilders: UnitSeed = {
  id: "read-u-sentences",
  bandId: "reading-b5",
  title: "Sentence Builders",
  icon: "🌉",
  lessons: [
    {
      id: "read-l-sentences-1",
      title: "Little Sentences",
      primarySkillId: "read-sentences",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-sentences-1-01",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Make the sentence: The dog runs! The capital letter goes first.",
            },
            items: [
              { id: "a", label: "runs" },
              { id: "b", label: "The" },
              { id: "c", label: "dog" },
            ],
            correctOrder: ["b", "c", "a"],
          },
        },
        {
          id: "read-e-sentences-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🐱",
              spokenText: "Look at the picture! Tap the sentence that matches: The cat sits, or The dog runs?",
            },
            options: [
              { id: "a", label: "The cat sits." },
              { id: "b", label: "The dog runs." },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sentences-1-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: The pig is big. Tap the missing word!",
            },
            template: "The pig is ___.",
            bank: [
              { id: "a", label: "bag" },
              { id: "b", label: "big" },
              { id: "c", label: "bug" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-sentences-1-04",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Make the sentence: I see a bus! Tap the words in order.",
            },
            items: [
              { id: "a", label: "a" },
              { id: "b", label: "see" },
              { id: "c", label: "I" },
              { id: "d", label: "bus" },
            ],
            correctOrder: ["c", "b", "a", "d"],
          },
        },
        {
          id: "read-e-sentences-1-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "☀️",
              spokenText: "Look at the picture! Tap the sentence that matches: The moon is out, or The sun is hot?",
            },
            options: [
              { id: "a", label: "The moon is out." },
              { id: "b", label: "The sun is hot." },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sentences-1-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: The moon is in the sky. Tap the missing word!",
            },
            template: "The ___ is in the sky.",
            bank: [
              { id: "a", label: "moon" },
              { id: "b", label: "mat" },
              { id: "c", label: "mop" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-sentences-1-07",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Make the sentence: The hen naps! The capital letter goes first.",
            },
            items: [
              { id: "a", label: "naps" },
              { id: "b", label: "hen" },
              { id: "c", label: "The" },
            ],
            correctOrder: ["c", "b", "a"],
          },
        },
        {
          id: "read-e-sentences-1-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the sentence that says: The dog is big!",
            },
            options: [
              { id: "a", label: "The dog is bad." },
              { id: "b", label: "The dog is big." },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "read-l-sentences-2",
      title: "Growing Sentences",
      primarySkillId: "read-sentences",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-sentences-2-01",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Make the sentence: The fox can run! The capital letter goes first.",
            },
            items: [
              { id: "a", label: "can" },
              { id: "b", label: "fox" },
              { id: "c", label: "The" },
              { id: "d", label: "run" },
            ],
            correctOrder: ["c", "b", "a", "d"],
          },
        },
        {
          id: "read-e-sentences-2-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: The frog can hop. Tap the missing word!",
            },
            template: "The frog can ___.",
            bank: [
              { id: "a", label: "hip" },
              { id: "b", label: "hat" },
              { id: "c", label: "hop" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-sentences-2-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🐟",
              spokenText: "Look at the picture! Tap the sentence that matches: The fish can swim, or The cat can nap?",
            },
            options: [
              { id: "a", label: "The cat can nap." },
              { id: "b", label: "The fish can swim." },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sentences-2-04",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Make the sentence: We like the sun! Tap the words in order.",
            },
            items: [
              { id: "a", label: "the" },
              { id: "b", label: "We" },
              { id: "c", label: "sun" },
              { id: "d", label: "like" },
            ],
            correctOrder: ["b", "d", "a", "c"],
          },
        },
        {
          id: "read-e-sentences-2-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: A bee can buzz. Tap the missing word!",
            },
            template: "A ___ can buzz.",
            bank: [
              { id: "a", label: "bee" },
              { id: "b", label: "bed" },
              { id: "c", label: "bat" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-sentences-2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🛏️",
              spokenText: "Look at the picture! Tap the sentence that matches: The cat naps on the bed, or The cat sits on the bus?",
            },
            options: [
              { id: "a", label: "The cat naps on the bed." },
              { id: "b", label: "The cat sits on the bus." },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sentences-2-07",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Make the sentence: The bat can fly! The capital letter goes first.",
            },
            items: [
              { id: "a", label: "fly" },
              { id: "b", label: "The" },
              { id: "c", label: "can" },
              { id: "d", label: "bat" },
            ],
            correctOrder: ["b", "d", "c", "a"],
          },
        },
        {
          id: "read-e-sentences-2-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each sentence to its picture!",
              spokenText: "Match each sentence to its picture! The pig is big. The sun is hot.",
            },
            pairs: [
              {
                id: "p1",
                left: { label: "The pig is big." },
                right: { visual: { kind: "emoji", value: "🐷" } },
              },
              {
                id: "p2",
                left: { label: "The sun is hot." },
                right: { visual: { kind: "emoji", value: "☀️" } },
              },
            ],
          },
        },
      ],
    },
    {
      id: "read-l-sentences-3",
      title: "Sentence Stars",
      primarySkillId: "read-sentences",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-sentences-3-01",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Make the sentence: I can see the moon! Tap the words in order.",
            },
            items: [
              { id: "a", label: "see" },
              { id: "b", label: "I" },
              { id: "c", label: "moon" },
              { id: "d", label: "can" },
              { id: "e", label: "the" },
            ],
            correctOrder: ["b", "d", "a", "e", "c"],
          },
        },
        {
          id: "read-e-sentences-3-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: The kite flies up high. Tap the missing word!",
            },
            template: "The ___ flies up high.",
            bank: [
              { id: "a", label: "kit" },
              { id: "b", label: "kite" },
              { id: "c", label: "bite" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-sentences-3-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🥛",
              spokenText: "Read each sentence yourself, then tap the one that matches the picture!",
            },
            options: [
              { id: "a", label: "The log is wet." },
              { id: "b", label: "The pen is red." },
              { id: "c", label: "The milk is cold." },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-sentences-3-04",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Make the sentence: You and I can play! Tap the words in order.",
            },
            items: [
              { id: "a", label: "and" },
              { id: "b", label: "play" },
              { id: "c", label: "You" },
              { id: "d", label: "I" },
              { id: "e", label: "can" },
            ],
            correctOrder: ["c", "a", "d", "e", "b"],
          },
        },
        {
          id: "read-e-sentences-3-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: The fox naps on the bed. Tap the missing word!",
            },
            template: "The fox naps on the ___.",
            bank: [
              { id: "a", label: "bad" },
              { id: "b", label: "bud" },
              { id: "c", label: "bed" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-sentences-3-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🐍",
              spokenText: "Read each sentence yourself, then tap the one that matches the picture!",
            },
            options: [
              { id: "a", label: "The snake is long." },
              { id: "b", label: "The bus is fast." },
              { id: "c", label: "The bee is little." },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sentences-3-07",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Make the sentence: The bus can go fast! The capital letter goes first.",
            },
            items: [
              { id: "a", label: "go" },
              { id: "b", label: "bus" },
              { id: "c", label: "fast" },
              { id: "d", label: "The" },
              { id: "e", label: "can" },
            ],
            correctOrder: ["d", "b", "e", "a", "c"],
          },
        },
        {
          id: "read-e-sentences-3-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the sentence that says: I like the moon!",
            },
            options: [
              { id: "a", label: "I like the milk." },
              { id: "b", label: "I see the moon." },
              { id: "c", label: "I like the moon." },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
  ],
};
