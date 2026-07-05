import type { UnitSeed } from "../../schema/pack";

/**
 * Reading Band 5 · Word Detective
 * Vocabulary in context: figure out a fancy word from its sentence,
 * hunt opposites, and pick the word that fits. Context sentences live in
 * prompt.text (the kid reads them); spokenText only encourages + asks.
 */
export const wordDetective: UnitSeed = {
  id: "read-u-detective",
  bandId: "reading-b5",
  title: "Word Detective",
  icon: "🔍",
  lessons: [
    {
      id: "read-l-detective-1",
      title: "What Words Mean",
      primarySkillId: "read-passages",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-detective-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Mia was thrilled to see the puppy.\n\nThrilled means…",
              spokenText: "Read the clue like a detective! Then tap: what does thrilled mean?",
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
          id: "read-e-detective-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The soup was scalding hot.\nDad let it cool.\n\nScalding means…",
              spokenText: "Read the clue! Then tap: what does scalding mean?",
            },
            options: [
              { id: "a", label: "very cold" },
              { id: "b", label: "very hot" },
              { id: "c", label: "very sweet" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-detective-1-03",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the opposites!",
              spokenText: "Detective time! Tap each word, then tap its opposite.",
            },
            pairs: [
              { id: "p1", left: { label: "hot" }, right: { label: "cold" } },
              { id: "p2", left: { label: "big" }, right: { label: "small" } },
              { id: "p3", left: { label: "up" }, right: { label: "down" } },
            ],
          },
        },
        {
          id: "read-e-detective-1-04",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Pick the word that fits!",
              spokenText: "Read the sentence, then pick the word that fits best!",
            },
            template: "We got wet in the ___.",
            bank: [
              { id: "a", label: "rain" },
              { id: "b", label: "sun" },
              { id: "c", label: "sand" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-detective-1-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Ben whispered to his cat.\n\nWhispered means…",
              spokenText: "Read the clue like a detective! Then tap: what does whispered mean?",
            },
            options: [
              { id: "a", label: "sang loudly" },
              { id: "b", label: "yelled" },
              { id: "c", label: "talked very softly" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-detective-1-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Pick the word that fits!",
              spokenText: "Read the sentence, then pick the word that fits best!",
            },
            template: "The fish swims in the ___.",
            bank: [
              { id: "a", label: "sky" },
              { id: "b", label: "sea" },
              { id: "c", label: "bed" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-detective-1-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "What is the opposite of wet?",
              spokenText: "Detective quiz! What is the opposite of wet?",
            },
            options: [
              { id: "a", label: "dry" },
              { id: "b", label: "hot" },
              { id: "c", label: "big" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-detective-1-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Pat grinned at the funny joke.\n\nGrinned means…",
              spokenText: "One more clue! Read it, then tap: what does grinned mean?",
            },
            options: [
              { id: "a", label: "cried" },
              { id: "b", label: "jumped" },
              { id: "c", label: "smiled" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "read-l-detective-2",
      title: "Opposite Hunt",
      primarySkillId: "read-passages",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-detective-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The turtle was slow.\nThe rabbit was fast.\n\nWhat is the opposite of slow?",
              spokenText: "Read the clue! Then tap: what is the opposite of slow?",
            },
            options: [
              { id: "a", label: "big" },
              { id: "b", label: "fast" },
              { id: "c", label: "soft" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-detective-2-02",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the opposites!",
              spokenText: "Opposite hunt! Tap each word, then tap its opposite.",
            },
            pairs: [
              { id: "p1", left: { label: "day" }, right: { label: "night" } },
              { id: "p2", left: { label: "happy" }, right: { label: "sad" } },
              { id: "p3", left: { label: "open" }, right: { label: "shut" } },
            ],
          },
        },
        {
          id: "read-e-detective-2-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Pick the word that fits!",
              spokenText: "Read the sentence, then pick the word that fits best!",
            },
            template: "The sun is hot, but the snow is ___.",
            bank: [
              { id: "a", label: "cold" },
              { id: "b", label: "hot" },
              { id: "c", label: "big" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-detective-2-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The giant was enormous.\n\nEnormous means…",
              spokenText: "Read the clue like a detective! What does enormous mean?",
            },
            options: [
              { id: "a", label: "very fast" },
              { id: "b", label: "very small" },
              { id: "c", label: "very big" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-detective-2-05",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Word detective! Put the words in order to make a sentence.",
            },
            items: [
              { id: "w1", label: "fast" },
              { id: "w2", label: "is" },
              { id: "w3", label: "The" },
              { id: "w4", label: "pup" },
            ],
            correctOrder: ["w3", "w4", "w2", "w1"],
          },
        },
        {
          id: "read-e-detective-2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Liz was exhausted after the big race.\nShe sat down to rest.\n\nExhausted means…",
              spokenText: "Read the clue! Then tap: what does exhausted mean?",
            },
            options: [
              { id: "a", label: "very tired" },
              { id: "b", label: "very happy" },
              { id: "c", label: "very loud" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-detective-2-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Pick the word that fits!",
              spokenText: "Read the sentence, then pick the word that fits best!",
            },
            template: "A kitten is small, but a lion is ___.",
            bank: [
              { id: "a", label: "sad" },
              { id: "b", label: "fast" },
              { id: "c", label: "big" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-detective-2-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "What is the opposite of up?",
              spokenText: "Last one, detective! What is the opposite of up?",
            },
            options: [
              { id: "a", label: "top" },
              { id: "b", label: "down" },
              { id: "c", label: "off" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "read-l-detective-3",
      title: "Detective Pro",
      primarySkillId: "read-passages",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-detective-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The trail was muddy.\nJack's boots got so dirty!\n\nMuddy means…",
              spokenText: "Read the clue like a pro! Then tap: what does muddy mean?",
            },
            options: [
              { id: "a", label: "covered in mud" },
              { id: "b", label: "very clean" },
              { id: "c", label: "very dry" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-detective-3-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Pick the word that fits!",
              spokenText: "Read the sentence, then pick the word that fits best!",
            },
            template: "It was raining, so Sam used his ___.",
            bank: [
              { id: "a", label: "bed" },
              { id: "b", label: "cup" },
              { id: "c", label: "umbrella" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-detective-3-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Grandma was delighted with her gift.\nShe smiled and clapped!\n\nDelighted means…",
              spokenText: "Read the clue! Then tap: what does delighted mean?",
            },
            options: [
              { id: "a", label: "very sleepy" },
              { id: "b", label: "very happy" },
              { id: "c", label: "very cold" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-detective-3-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "moon" }, right: { visual: { kind: "emoji", value: "🌙" } } },
              { id: "p2", left: { label: "star" }, right: { visual: { kind: "emoji", value: "⭐" } } },
              { id: "p3", left: { label: "tree" }, right: { visual: { kind: "emoji", value: "🌳" } } },
            ],
          },
        },
        {
          id: "read-e-detective-3-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "What is the opposite of first?",
              spokenText: "Detective quiz! What is the opposite of first?",
            },
            options: [
              { id: "a", label: "best" },
              { id: "b", label: "next" },
              { id: "c", label: "last" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-detective-3-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Pick the word that fits!",
              spokenText: "Read the sentence, then pick the word that fits best!",
            },
            template: "The baby was sleepy, so Mom put him in his ___.",
            bank: [
              { id: "a", label: "crib" },
              { id: "b", label: "car" },
              { id: "c", label: "cup" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-detective-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Deb gobbled up her lunch.\nShe was so hungry!\n\nGobbled means…",
              spokenText: "Read the clue! Then tap: what does gobbled mean?",
            },
            options: [
              { id: "a", label: "sang" },
              { id: "b", label: "ate very fast" },
              { id: "c", label: "slept" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-detective-3-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Five words, detective pro! Put them in order to make a sentence.",
            },
            items: [
              { id: "w1", label: "pup" },
              { id: "w2", label: "home" },
              { id: "w3", label: "The" },
              { id: "w4", label: "ran" },
              { id: "w5", label: "happy" },
            ],
            correctOrder: ["w3", "w5", "w1", "w4", "w2"],
          },
        },
      ],
    },
  ],
};
