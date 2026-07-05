import type { UnitSeed } from "../../schema/pack";

/**
 * Band 4 · Question Quest
 * One-sentence comprehension. Most items are read aloud in full;
 * READ-IT-YOURSELF items (2–3 per lesson) put the sentence only in
 * prompt.text — spokenText cheers and asks the question without
 * reading the sentence, so the kid must decode it alone.
 */
export const questionQuest: UnitSeed = {
  id: "read-u-questions",
  bandId: "reading-b4",
  title: "Question Quest",
  icon: "❓",
  lessons: [
    {
      id: "read-l-questions-1",
      title: "Little Questions",
      primarySkillId: "read-sentences",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-questions-1-01",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen close! The cat naps on the bed. Tap where the cat naps!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🚌" } },
              { id: "b", visual: { kind: "emoji", value: "🛏️" } },
              { id: "c", visual: { kind: "emoji", value: "🪵" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-questions-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The pig eats an apple. What does the pig eat?",
              spokenText: "The pig eats an apple. What does the pig eat? Tap it!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍎" } },
              { id: "b", visual: { kind: "emoji", value: "🥛" } },
              { id: "c", visual: { kind: "emoji", value: "⚽" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-questions-1-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The dog is big. Is the dog big or little?",
              spokenText: "You can read this one! Read it yourself, then tap: is the dog big or little?",
            },
            options: [
              { id: "a", label: "little" },
              { id: "b", label: "big" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-questions-1-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen close! The hen has a pen. Tap what the hen has!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🖊️" } },
              { id: "b", visual: { kind: "emoji", value: "🪁" } },
              { id: "c", visual: { kind: "emoji", value: "🐟" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-questions-1-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The sun is hot. What is hot?",
              spokenText: "Your turn to read! Read the sentence yourself, then tap: what is hot?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🌙" } },
              { id: "b", visual: { kind: "emoji", value: "🥛" } },
              { id: "c", visual: { kind: "emoji", value: "☀️" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-questions-1-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match who to where!",
              spokenText: "The frog is on the log, and the cat is on the bed. Match each animal to where it is!",
            },
            pairs: [
              {
                id: "p1",
                left: { visual: { kind: "emoji", value: "🐸" } },
                right: { visual: { kind: "emoji", value: "🪵" } },
              },
              {
                id: "p2",
                left: { visual: { kind: "emoji", value: "🐱" } },
                right: { visual: { kind: "emoji", value: "🛏️" } },
              },
            ],
          },
        },
        {
          id: "read-e-questions-1-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "The fox can run fast. How does the fox run?",
              spokenText: "The fox can run fast! How does the fox run? Tap the word!",
            },
            template: "The fox runs ___.",
            bank: [
              { id: "a", label: "slow" },
              { id: "b", label: "fast" },
              { id: "c", label: "sad" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-questions-1-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The bat flies at night. When does the bat fly?",
              spokenText: "The bat flies at night. When does the bat fly? Tap the picture!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🌙" } },
              { id: "b", visual: { kind: "emoji", value: "☀️" } },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
    {
      id: "read-l-questions-2",
      title: "Who and What",
      primarySkillId: "read-sentences",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-questions-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The hen sat on the bus. Who sat on the bus?",
              spokenText: "The hen sat on the bus! Who sat on the bus? Tap the picture!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐷" } },
              { id: "b", visual: { kind: "emoji", value: "🐔" } },
              { id: "c", visual: { kind: "emoji", value: "🦊" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-questions-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The pen is red. What is red?",
              spokenText: "Read it all by yourself! Then tap: what is red?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🥛" } },
              { id: "b", visual: { kind: "emoji", value: "🐔" } },
              { id: "c", visual: { kind: "emoji", value: "🖊️" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-questions-2-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "The bee likes the apple.",
              spokenText: "The bee likes the apple! What does the bee like? Tap the word!",
            },
            template: "The bee likes the ___.",
            bank: [
              { id: "a", label: "apple" },
              { id: "b", label: "moon" },
              { id: "c", label: "bus" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-questions-2-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen close! The fish swims to the ball. Tap what the fish swims to!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🪁" } },
              { id: "b", visual: { kind: "emoji", value: "🎩" } },
              { id: "c", visual: { kind: "emoji", value: "⚽" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-questions-2-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The fox is on the log. Where is the fox?",
              spokenText: "Read the sentence yourself, then tap: where is the fox?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🪵" } },
              { id: "b", visual: { kind: "emoji", value: "🛏️" } },
              { id: "c", visual: { kind: "emoji", value: "🚌" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-questions-2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Sam said, I like milk. What does Sam like?",
              spokenText: "Sam said, I like milk! What does Sam like? Tap the picture!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍎" } },
              { id: "b", visual: { kind: "emoji", value: "🥛" } },
              { id: "c", visual: { kind: "emoji", value: "⚽" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-questions-2-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match who to what!",
              spokenText: "The pig has a ball, and the dog has a kite. Match each animal to what it has!",
            },
            pairs: [
              {
                id: "p1",
                left: { visual: { kind: "emoji", value: "🐷" } },
                right: { visual: { kind: "emoji", value: "⚽" } },
              },
              {
                id: "p2",
                left: { visual: { kind: "emoji", value: "🐶" } },
                right: { visual: { kind: "emoji", value: "🪁" } },
              },
            ],
          },
        },
        {
          id: "read-e-questions-2-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The snake is under the bed. Where is the snake?",
              spokenText: "The snake is under the bed! Is the snake under the bed, or on the bus? Tap it!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🚌" } },
              { id: "b", visual: { kind: "emoji", value: "🛏️" } },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "read-l-questions-3",
      title: "Big Questions",
      primarySkillId: "read-sentences",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-questions-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The cat and the dog nap. Who naps?",
              spokenText: "Read it yourself, then tap: who naps?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐱" } },
              { id: "b", visual: { kind: "emoji", value: "🐱🐶" } },
              { id: "c", visual: { kind: "emoji", value: "🐶" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-questions-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The kite is up and the ball is down. What is up?",
              spokenText: "The kite is up, and the ball is down. What is up? Tap the picture!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "⚽" } },
              { id: "b", visual: { kind: "emoji", value: "🪁" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-questions-3-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The bus is not fast. Is the bus fast?",
              spokenText: "Read carefully, then tap: is the bus fast?",
            },
            options: [
              { id: "a", label: "yes" },
              { id: "b", label: "no" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-questions-3-04",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "The moon comes out at night. When does the moon come out?",
              spokenText: "The moon comes out at night! When does the moon come out? Tap the word!",
            },
            template: "The moon comes out at ___.",
            bank: [
              { id: "a", label: "day" },
              { id: "b", label: "lunch" },
              { id: "c", label: "night" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-questions-3-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen close! The hen sees a snake and runs away. Tap what the hen sees!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐍" } },
              { id: "b", visual: { kind: "emoji", value: "🐟" } },
              { id: "c", visual: { kind: "emoji", value: "🪵" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-questions-3-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The pig can not hop. Can the pig hop?",
              spokenText: "Read it yourself! Then tap: can the pig hop?",
            },
            options: [
              { id: "a", label: "yes" },
              { id: "b", label: "no" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-questions-3-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match who to where!",
              spokenText: "The bee is on the apple, and the fox is on the bus. Match each animal to where it is!",
            },
            pairs: [
              {
                id: "p1",
                left: { visual: { kind: "emoji", value: "🐝" } },
                right: { visual: { kind: "emoji", value: "🍎" } },
              },
              {
                id: "p2",
                left: { visual: { kind: "emoji", value: "🦊" } },
                right: { visual: { kind: "emoji", value: "🚌" } },
              },
            ],
          },
        },
        {
          id: "read-e-questions-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Ben has a hat and a pen. What two things does Ben have?",
              spokenText: "Ben has a hat and a pen! What two things does Ben have? Tap the picture!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🎩⚽" } },
              { id: "b", visual: { kind: "emoji", value: "🪁🖊️" } },
              { id: "c", visual: { kind: "emoji", value: "🎩🖊️" } },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
  ],
};
