import type { UnitSeed } from "../../schema/pack";

/**
 * Band 3 · Star Words Grow (F4 trick-words track, skill read-sight-grow)
 * High-frequency trick words: of, was, do, has, have, they, are, from.
 * Lesson 1 introduces of, was, do, has.
 * Lesson 2 introduces have, they, are, from.
 * Lesson 3 mixes all eight with trickier look-alike distractors.
 *
 * Hazard notes:
 * - was/saw is a reversal trap: saw only ever appears as a printed distractor
 *   where the spoken prompt clearly says "was" (the printed word is the skill).
 * - of/off are never both present in one option set.
 * - Every fillBlankWordBank frame is chosen so ONLY the correct chip fits
 *   grammatically (has/have singular-plural frames, no "had"/"is" traps).
 */
export const sightWordsGrow: UnitSeed = {
  id: "read-u-sight-grow",
  bandId: "reading-b3",
  title: "Star Words Grow",
  icon: "🌟",
  lessons: [
    {
      id: "read-l-sightgrow-1",
      title: "New Star Words",
      primarySkillId: "read-sight-grow",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-sightgrow-1-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word was! Was, like the sun was hot!" },
            options: [
              { id: "a", label: "saw" },
              { id: "b", label: "was" },
              { id: "c", label: "wet" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sightgrow-1-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word of! Of, like a cup of milk!" },
            options: [
              { id: "a", label: "of" },
              { id: "b", label: "on" },
              { id: "c", label: "if" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sightgrow-1-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: The pig was big. Tap the missing word!",
            },
            template: "The pig ___ big.",
            bank: [
              { id: "a", label: "sat" },
              { id: "b", label: "was" },
              { id: "c", label: "saw" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-sightgrow-1-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word do! Do, like do you like ham?" },
            options: [
              { id: "a", label: "go" },
              { id: "b", label: "no" },
              { id: "c", label: "do" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-sightgrow-1-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: The cat has a hat. Tap the missing word!",
            },
            template: "The cat ___ a hat.",
            bank: [
              { id: "a", label: "has" },
              { id: "b", label: "hat" },
              { id: "c", label: "sun" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-sightgrow-1-06",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Make the sentence: Do you like ham? Tap the words in order.",
            },
            items: [
              { id: "a", label: "you" },
              { id: "b", label: "Do" },
              { id: "c", label: "ham" },
              { id: "d", label: "like" },
            ],
            correctOrder: ["b", "a", "d", "c"],
          },
        },
        {
          id: "read-e-sightgrow-1-07",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word has! Has, like the dog has a bone!" },
            options: [
              { id: "a", label: "had" },
              { id: "b", label: "ham" },
              { id: "c", label: "has" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-sightgrow-1-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the same words!",
              spokenText: "Match each star word to its twin! Find the pairs that look the same.",
            },
            pairs: [
              { id: "p1", left: { label: "of" }, right: { label: "of" } },
              { id: "p2", left: { label: "was" }, right: { label: "was" } },
              { id: "p3", left: { label: "do" }, right: { label: "do" } },
            ],
          },
        },
      ],
    },
    {
      id: "read-l-sightgrow-2",
      title: "More Star Words",
      primarySkillId: "read-sight-grow",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-sightgrow-2-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word have! Have, like I have a red ball!" },
            options: [
              { id: "a", label: "have" },
              { id: "b", label: "gave" },
              { id: "c", label: "hive" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sightgrow-2-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word they! They, like they run and play!" },
            options: [
              { id: "a", label: "them" },
              { id: "b", label: "they" },
              { id: "c", label: "then" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sightgrow-2-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: They have fun. Tap the missing word!",
            },
            template: "They ___ fun.",
            bank: [
              { id: "a", label: "ham" },
              { id: "b", label: "hat" },
              { id: "c", label: "have" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-sightgrow-2-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word are! Are, like we are best pals!" },
            options: [
              { id: "a", label: "art" },
              { id: "b", label: "ate" },
              { id: "c", label: "are" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-sightgrow-2-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: The letter is from Dad. Tap the missing word!",
            },
            template: "The letter is ___ Dad.",
            bank: [
              { id: "a", label: "from" },
              { id: "b", label: "frog" },
              { id: "c", label: "fun" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-sightgrow-2-06",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Make the sentence: They are my pals! Tap the words in order.",
            },
            items: [
              { id: "a", label: "are" },
              { id: "b", label: "They" },
              { id: "c", label: "pals" },
              { id: "d", label: "my" },
            ],
            correctOrder: ["b", "a", "d", "c"],
          },
        },
        {
          id: "read-e-sightgrow-2-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: We are happy. Tap the missing word!",
            },
            template: "We ___ happy.",
            bank: [
              { id: "a", label: "am" },
              { id: "b", label: "are" },
              { id: "c", label: "is" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-sightgrow-2-08",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word from! From, like a gift from Mom!" },
            options: [
              { id: "a", label: "frog" },
              { id: "b", label: "form" },
              { id: "c", label: "from" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "read-l-sightgrow-3",
      title: "Star Word Champs",
      primarySkillId: "read-sight-grow",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-sightgrow-3-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word was! Was, like the fox was fast!" },
            options: [
              { id: "a", label: "was" },
              { id: "b", label: "saw" },
              { id: "c", label: "wag" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sightgrow-3-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: Do you like milk? Tap the missing word!",
            },
            template: "___ you like milk?",
            bank: [
              { id: "a", label: "To" },
              { id: "b", label: "Do" },
              { id: "c", label: "Go" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-sightgrow-3-03",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Make the sentence: They are from the zoo! Tap the words in order.",
            },
            items: [
              { id: "a", label: "from" },
              { id: "b", label: "They" },
              { id: "c", label: "the zoo" },
              { id: "d", label: "are" },
            ],
            correctOrder: ["b", "d", "a", "c"],
          },
        },
        {
          id: "read-e-sightgrow-3-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word have! Have, like they have a big cat!" },
            options: [
              { id: "a", label: "has" },
              { id: "b", label: "have" },
              { id: "c", label: "gave" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sightgrow-3-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: A cup of milk. Tap the missing word!",
            },
            template: "A cup ___ milk.",
            bank: [
              { id: "a", label: "up" },
              { id: "b", label: "on" },
              { id: "c", label: "of" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-sightgrow-3-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the same words!",
              spokenText: "Match each star word to its twin! Find the pairs that look the same.",
            },
            pairs: [
              { id: "p1", left: { label: "they" }, right: { label: "they" } },
              { id: "p2", left: { label: "are" }, right: { label: "are" } },
              { id: "p3", left: { label: "from" }, right: { label: "from" } },
            ],
          },
        },
        {
          id: "read-e-sightgrow-3-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: They run fast. Tap the missing word!",
            },
            template: "___ run fast.",
            bank: [
              { id: "a", label: "They" },
              { id: "b", label: "The" },
              { id: "c", label: "She" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-sightgrow-3-08",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word has! Has, like Mom has a red hat!" },
            options: [
              { id: "a", label: "had" },
              { id: "b", label: "ham" },
              { id: "c", label: "has" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
  ],
};
