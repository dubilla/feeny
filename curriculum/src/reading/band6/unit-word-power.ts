import type { UnitSeed } from "../../schema/pack";

/**
 * Reading Band 6 · Word Power
 * Vocabulary muscle: synonyms (words that mean the same), antonyms
 * (opposites), and picking the stronger, more precise word. Kids here
 * read short sentences; spokenText still reads every prompt warmly.
 * L1 synonyms · L2 opposites · L3 the stronger word.
 */
export const wordPower: UnitSeed = {
  id: "read-u-wordpower",
  bandId: "reading-b6",
  title: "Word Power",
  icon: "💪",
  lessons: [
    {
      id: "read-l-wordpower-1",
      title: "Same Meaning",
      primarySkillId: "read-vocabulary",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-wordpower-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Glad means the same as…",
              spokenText: "Flex your word power! Which word means the same as glad?",
            },
            options: [
              { id: "a", label: "happy" },
              { id: "b", label: "sad" },
              { id: "c", label: "tired" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-wordpower-1-02",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the word that means the same as little!",
            },
            options: [
              { id: "a", label: "big" },
              { id: "b", label: "small" },
              { id: "c", label: "loud" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-wordpower-1-03",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the words that mean the same!",
              spokenText: "Tap a word, then tap the word that means the same thing!",
            },
            pairs: [
              { id: "p1", left: { label: "happy" }, right: { label: "glad" } },
              { id: "p2", left: { label: "big" }, right: { label: "huge" } },
              { id: "p3", left: { label: "fast" }, right: { label: "quick" } },
            ],
          },
        },
        {
          id: "read-e-wordpower-1-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word means the same as shout?",
              spokenText: "Word power time! Which word means the same as shout?",
            },
            options: [
              { id: "a", label: "walk" },
              { id: "b", label: "whisper" },
              { id: "c", label: "yell" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-wordpower-1-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Pick the word that means the same!",
              spokenText: "Read the sentence, then pick the word that means the same as glad!",
            },
            template: "Glad and ___ mean the same thing.",
            bank: [
              { id: "a", label: "sleepy" },
              { id: "b", label: "happy" },
              { id: "c", label: "angry" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-wordpower-1-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Chilly means the same as…",
              spokenText: "Brrr! Which word means the same as chilly?",
            },
            options: [
              { id: "a", label: "cold" },
              { id: "b", label: "hot" },
              { id: "c", label: "loud" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-wordpower-1-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the word that means the same as jump!",
            },
            options: [
              { id: "a", label: "sit" },
              { id: "b", label: "cry" },
              { id: "c", label: "hop" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-wordpower-1-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word means the same as smart?",
              spokenText: "Last one! Which word means the same as smart?",
            },
            options: [
              { id: "a", label: "silly" },
              { id: "b", label: "clever" },
              { id: "c", label: "slow" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "read-l-wordpower-2",
      title: "Opposites Attack",
      primarySkillId: "read-vocabulary",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-wordpower-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The opposite of hot is…",
              spokenText: "Flip it around! What is the opposite of hot?",
            },
            options: [
              { id: "a", label: "cold" },
              { id: "b", label: "warm" },
              { id: "c", label: "big" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-wordpower-2-02",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the opposites!",
              spokenText: "Tap a word, then tap its opposite!",
            },
            pairs: [
              { id: "p1", left: { label: "up" }, right: { label: "down" } },
              { id: "p2", left: { label: "day" }, right: { label: "night" } },
              { id: "p3", left: { label: "big" }, right: { label: "small" } },
            ],
          },
        },
        {
          id: "read-e-wordpower-2-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the word that is the opposite of fast!",
            },
            options: [
              { id: "a", label: "loud" },
              { id: "b", label: "quick" },
              { id: "c", label: "slow" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-wordpower-2-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The opposite of happy is…",
              spokenText: "What is the opposite of happy?",
            },
            options: [
              { id: "a", label: "glad" },
              { id: "b", label: "sad" },
              { id: "c", label: "tall" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-wordpower-2-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Pick the opposite that fits!",
              spokenText: "Read the sentence, then pick the word that fits best!",
            },
            template: "The sun is hot, but ice is ___.",
            bank: [
              { id: "a", label: "warm" },
              { id: "b", label: "cold" },
              { id: "c", label: "soft" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-wordpower-2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The opposite of high is…",
              spokenText: "Way up or way down? What is the opposite of high?",
            },
            options: [
              { id: "a", label: "tall" },
              { id: "b", label: "big" },
              { id: "c", label: "low" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-wordpower-2-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the word that is the opposite of wet!",
            },
            options: [
              { id: "a", label: "dry" },
              { id: "b", label: "damp" },
              { id: "c", label: "cold" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-wordpower-2-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Put the words in order to make a sentence: The dog is very big!",
            },
            items: [
              { id: "w1", label: "is" },
              { id: "w2", label: "The" },
              { id: "w3", label: "big" },
              { id: "w4", label: "dog" },
              { id: "w5", label: "very" },
            ],
            correctOrder: ["w2", "w4", "w1", "w5", "w3"],
          },
        },
      ],
    },
    {
      id: "read-l-wordpower-3",
      title: "Stronger Words",
      primarySkillId: "read-vocabulary",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-wordpower-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word means very, very big?",
              spokenText: "Grab the strongest word! Which one means very, very big?",
            },
            options: [
              { id: "a", label: "enormous" },
              { id: "b", label: "little" },
              { id: "c", label: "nice" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-wordpower-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word means very, very hungry?",
              spokenText: "So hungry! Which word means very, very hungry?",
            },
            options: [
              { id: "a", label: "full" },
              { id: "b", label: "happy" },
              { id: "c", label: "starving" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-wordpower-3-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the word that is stronger than happy!",
            },
            options: [
              { id: "a", label: "thrilled" },
              { id: "b", label: "okay" },
              { id: "c", label: "fine" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-wordpower-3-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the word to its stronger word!",
              spokenText: "Tap a word, then tap the stronger word that means a whole lot more!",
            },
            pairs: [
              { id: "p1", left: { label: "big" }, right: { label: "enormous" } },
              { id: "p2", left: { label: "happy" }, right: { label: "thrilled" } },
              { id: "p3", left: { label: "tired" }, right: { label: "exhausted" } },
            ],
          },
        },
        {
          id: "read-e-wordpower-3-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word means very, very cold?",
              spokenText: "Shiver! Which word means very, very cold?",
            },
            options: [
              { id: "a", label: "cool" },
              { id: "b", label: "freezing" },
              { id: "c", label: "warm" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-wordpower-3-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Pick the strongest word!",
              spokenText: "Read the sentence, then pick the word that shows it was really, really hot!",
            },
            template: "The soup was not just hot. It was ___!",
            bank: [
              { id: "a", label: "warm" },
              { id: "b", label: "scalding" },
              { id: "c", label: "cool" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-wordpower-3-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the word that means very, very small!",
            },
            options: [
              { id: "a", label: "tiny" },
              { id: "b", label: "big" },
              { id: "c", label: "tall" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-wordpower-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Rex did not just run. He ___ super fast!",
              spokenText: "Pick the strongest word! Rex did not just run, he did what super fast?",
            },
            options: [
              { id: "a", label: "sat" },
              { id: "b", label: "slept" },
              { id: "c", label: "sprinted" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
  ],
};
