import type { UnitSeed } from "../../schema/pack";

/**
 * Reading Band 6 · Context Clues
 * Figure out a tricky word's meaning from the sentence around it. The
 * clue sentence lives in prompt.text (kids read it); spokenText reads it
 * aloud warmly and asks the question. L1 obvious clues · L2 subtler
 * clues · L3 two-sentence clues.
 */
export const contextClues: UnitSeed = {
  id: "read-u-context",
  bandId: "reading-b6",
  title: "Context Clues",
  icon: "🔍",
  lessons: [
    {
      id: "read-l-context-1",
      title: "Clue Spotters",
      primarySkillId: "read-vocabulary",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-context-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The huge, gray elephant was gigantic.\n\nGigantic means…",
              spokenText: "Use the clues! The huge, gray elephant was gigantic. What does gigantic mean?",
            },
            options: [
              { id: "a", label: "very big" },
              { id: "b", label: "very small" },
              { id: "c", label: "very fast" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-context-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The baby was weary and fell fast asleep.\n\nWeary means…",
              spokenText: "Read the clue! The baby was weary and fell fast asleep. What does weary mean?",
            },
            options: [
              { id: "a", label: "hungry" },
              { id: "b", label: "tired" },
              { id: "c", label: "happy" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-context-1-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "The bright sun made the whole day luminous. Tap the word that means full of light!",
            },
            options: [
              { id: "a", label: "dark" },
              { id: "b", label: "bright" },
              { id: "c", label: "cold" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-context-1-04",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "It was raining hard, so Tim opened his ___.",
              spokenText: "Use the clue! It was raining hard, so Tim opened his what? Pick the word!",
            },
            template: "It was raining hard, so Tim opened his ___.",
            bank: [
              { id: "a", label: "umbrella" },
              { id: "b", label: "book" },
              { id: "c", label: "shoe" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-context-1-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The soup was piping hot, so Mia let it cool.\n\nPiping hot means…",
              spokenText: "Read the clue! The soup was piping hot, so Mia let it cool. What does piping hot mean?",
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
          id: "read-e-context-1-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The puppy was tiny, small enough to fit in a cup.\n\nTiny means…",
              spokenText: "Read the clue! The puppy was tiny, small enough to fit in a cup. What does tiny mean?",
            },
            options: [
              { id: "a", label: "very big" },
              { id: "b", label: "very loud" },
              { id: "c", label: "very small" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-context-1-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each fancy word to its meaning!",
              spokenText: "Tap a fancy word, then tap what it means!",
            },
            pairs: [
              { id: "p1", left: { label: "enormous" }, right: { label: "very big" } },
              { id: "p2", left: { label: "freezing" }, right: { label: "very cold" } },
              { id: "p3", left: { label: "delighted" }, right: { label: "very happy" } },
            ],
          },
        },
        {
          id: "read-e-context-1-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Deb was famished, so she ate a big lunch.\n\nFamished means…",
              spokenText: "Read the clue! Deb was famished, so she ate a big lunch. What does famished mean?",
            },
            options: [
              { id: "a", label: "very full" },
              { id: "b", label: "very tired" },
              { id: "c", label: "very hungry" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "read-l-context-2",
      title: "Hidden Clues",
      primarySkillId: "read-vocabulary",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-context-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The path was slippery, so Jack held the rail tightly.\n\nSlippery means…",
              spokenText: "Look for the clue! The path was slippery, so Jack held the rail tightly. What does slippery mean?",
            },
            options: [
              { id: "a", label: "easy to slip on" },
              { id: "b", label: "very dry" },
              { id: "c", label: "very warm" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-context-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The old dog was sluggish and moved very slowly.\n\nSluggish means…",
              spokenText: "Find the clue! The old dog was sluggish and moved very slowly. What does sluggish mean?",
            },
            options: [
              { id: "a", label: "very fast" },
              { id: "b", label: "slow" },
              { id: "c", label: "very loud" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-context-2-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "The room was silent; you could not hear a single sound. Tap the word that means no sound!",
            },
            options: [
              { id: "a", label: "loud" },
              { id: "b", label: "bright" },
              { id: "c", label: "quiet" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-context-2-04",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "The night was so dark that Sam used a ___ to see.",
              spokenText: "Use the clue! The night was so dark that Sam used a what to see? Pick the word!",
            },
            template: "The night was so dark that Sam used a ___ to see.",
            bank: [
              { id: "a", label: "pillow" },
              { id: "b", label: "spoon" },
              { id: "c", label: "flashlight" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-context-2-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Grandpa was generous and gave us all a treat.\n\nGenerous means…",
              spokenText: "Find the clue! Grandpa was generous and gave us all a treat. What does generous mean?",
            },
            options: [
              { id: "a", label: "grumpy" },
              { id: "b", label: "giving" },
              { id: "c", label: "sleepy" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-context-2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The stew smelled delicious, so everyone wanted some.\n\nDelicious means…",
              spokenText: "Read the clue! The stew smelled delicious, so everyone wanted some. What does delicious mean?",
            },
            options: [
              { id: "a", label: "tastes bad" },
              { id: "b", label: "tastes great" },
              { id: "c", label: "very cold" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-context-2-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its meaning!",
              spokenText: "Tap a word, then tap what it means!",
            },
            pairs: [
              { id: "p1", left: { label: "brave" }, right: { label: "not scared" } },
              { id: "p2", left: { label: "weary" }, right: { label: "very tired" } },
              { id: "p3", left: { label: "ancient" }, right: { label: "very old" } },
            ],
          },
        },
        {
          id: "read-e-context-2-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The clumsy puppy tripped over its own feet.\n\nClumsy means…",
              spokenText: "Find the clue! The clumsy puppy tripped over its own feet. What does clumsy mean?",
            },
            options: [
              { id: "a", label: "very neat" },
              { id: "b", label: "very fast" },
              { id: "c", label: "not graceful" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "read-l-context-3",
      title: "Clue Master",
      primarySkillId: "read-vocabulary",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-context-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The stray cat looked scrawny. You could see its bones through its thin fur.\n\nScrawny means…",
              spokenText: "Two clues to read! The stray cat looked scrawny. You could see its bones through its thin fur. What does scrawny mean?",
            },
            options: [
              { id: "a", label: "very thin" },
              { id: "b", label: "very fat" },
              { id: "c", label: "very fast" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-context-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Ben felt drowsy. He kept yawning and his eyes were closing.\n\nDrowsy means…",
              spokenText: "Read both clues! Ben felt drowsy. He kept yawning and his eyes were closing. What does drowsy mean?",
            },
            options: [
              { id: "a", label: "very awake" },
              { id: "b", label: "sleepy" },
              { id: "c", label: "very hungry" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-context-3-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "The wind was fierce. It knocked over trees and tore roofs off houses. Tap the word that means very strong!",
            },
            options: [
              { id: "a", label: "gentle" },
              { id: "b", label: "soft" },
              { id: "c", label: "powerful" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-context-3-04",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "The desert was dry and dusty. Nothing could grow in the ___ ground.",
              spokenText: "Read both clues! The desert was dry and dusty. Nothing could grow in the empty ground. Pick the word that means empty and bare!",
            },
            template: "Nothing could grow in the ___ ground.",
            bank: [
              { id: "a", label: "barren" },
              { id: "b", label: "muddy" },
              { id: "c", label: "soggy" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-context-3-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The clown was hilarious. Everyone laughed and laughed at his jokes.\n\nHilarious means…",
              spokenText: "Read both clues! The clown was hilarious. Everyone laughed and laughed at his jokes. What does hilarious mean?",
            },
            options: [
              { id: "a", label: "very sad" },
              { id: "b", label: "very funny" },
              { id: "c", label: "very quiet" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-context-3-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its meaning!",
              spokenText: "Clue master! Tap a word, then tap what it means!",
            },
            pairs: [
              { id: "p1", left: { label: "fierce" }, right: { label: "very strong" } },
              { id: "p2", left: { label: "drowsy" }, right: { label: "sleepy" } },
              { id: "p3", left: { label: "scrawny" }, right: { label: "very thin" } },
            ],
          },
        },
        {
          id: "read-e-context-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Mia was courageous. She was not afraid of the big, dark cave.\n\nCourageous means…",
              spokenText: "Read both clues! Mia was courageous. She was not afraid of the big, dark cave. What does courageous mean?",
            },
            options: [
              { id: "a", label: "brave" },
              { id: "b", label: "scared" },
              { id: "c", label: "silly" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-context-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The soup was bland. It had no salt and tasted like nothing at all.\n\nBland means…",
              spokenText: "Last one, clue master! The soup was bland. It had no salt and tasted like nothing at all. What does bland mean?",
            },
            options: [
              { id: "a", label: "full of flavor" },
              { id: "b", label: "no flavor" },
              { id: "c", label: "very spicy" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
  ],
};
