import type { UnitSeed } from "../../schema/pack";

/**
 * Band 1 · Counting 1–5 · Count the Critters
 * Lesson 1 introduces 1–3 with tiny groups and lots of audio support.
 * Lesson 2 brings in 4 and 5. Lesson 3 mixes 1–5 and adds ordering.
 * Everything is solvable from the spoken prompt + visuals alone.
 */
export const countCritters: UnitSeed = {
  id: "math-u-count5",
  bandId: "math-b1",
  title: "Count the Critters",
  icon: "🐛",
  lessons: [
    {
      id: "math-l-count5-1",
      title: "One, Two, Three",
      primarySkillId: "math-count-to-10",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-count5-1-01",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many bugs?",
              spokenText: "Look! One little bug is crawling on a leaf. Count it, then tap the number. How many bugs?",
            },
            object: { kind: "emoji", value: "🐛" },
            count: 1,
            choices: [1, 2, 3],
          },
        },
        {
          id: "math-e-count5-1-02",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many chicks?",
              spokenText: "Two fluffy chicks are pecking for seeds. Count them one by one! How many chicks?",
            },
            object: { kind: "emoji", value: "🐥" },
            count: 2,
            choices: [1, 2, 3],
          },
        },
        {
          id: "math-e-count5-1-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the number two!",
            },
            options: [
              { id: "a", label: "1" },
              { id: "b", label: "2" },
              { id: "c", label: "3" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-count5-1-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which shows 3?",
              spokenText: "Which picture shows three frogs? Count each group and tap it!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐸🐸🐸" } },
              { id: "b", visual: { kind: "emoji", value: "🐸🐸" } },
              { id: "c", visual: { kind: "emoji", value: "🐸" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-count5-1-05",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many turtles?",
              spokenText: "Three slow turtles are walking to the pond. Count the turtles! How many are there?",
            },
            object: { kind: "emoji", value: "🐢" },
            count: 3,
            choices: [2, 3, 4],
          },
        },
        {
          id: "math-e-count5-1-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Count the ladybugs in each group, then tap the group and its matching number!",
            },
            pairs: [
              { id: "p1", left: { visual: { kind: "emoji", value: "🐞" } }, right: { label: "1" } },
              { id: "p2", left: { visual: { kind: "emoji", value: "🐞🐞" } }, right: { label: "2" } },
            ],
          },
        },
        {
          id: "math-e-count5-1-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which shows 2?",
              spokenText: "Which picture shows two kittens? Tap it!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐱" } },
              { id: "b", visual: { kind: "emoji", value: "🐱🐱🐱" } },
              { id: "c", visual: { kind: "emoji", value: "🐱🐱" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-count5-1-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the number three!",
            },
            options: [
              { id: "a", label: "3" },
              { id: "b", label: "1" },
              { id: "c", label: "2" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
    {
      id: "math-l-count5-2",
      title: "Four and Five",
      primarySkillId: "math-count-to-10",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-count5-2-01",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many bunnies?",
              spokenText: "Four bunnies are hopping in the garden. Count every bunny! How many do you see?",
            },
            object: { kind: "emoji", value: "🐰" },
            count: 4,
            choices: [3, 4, 5],
          },
        },
        {
          id: "math-e-count5-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which shows 4?",
              spokenText: "Which picture shows four bees? Count each group carefully!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐝🐝🐝" } },
              { id: "b", visual: { kind: "emoji", value: "🐝🐝🐝🐝" } },
              { id: "c", visual: { kind: "emoji", value: "🐝🐝🐝🐝🐝" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-count5-2-03",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many ducks?",
              spokenText: "Five ducks are splashing in the pond. Count them all! How many ducks?",
            },
            object: { kind: "emoji", value: "🦆" },
            count: 5,
            choices: [5, 4, 3],
          },
        },
        {
          id: "math-e-count5-2-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the number four!",
            },
            options: [
              { id: "a", label: "4" },
              { id: "b", label: "2" },
              { id: "c", label: "5" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-count5-2-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Count each group of little critters, then tap the group and its number!",
            },
            pairs: [
              { id: "p1", left: { visual: { kind: "emoji", value: "🐟🐟🐟" } }, right: { label: "3" } },
              { id: "p2", left: { visual: { kind: "emoji", value: "🐌🐌🐌🐌" } }, right: { label: "4" } },
              { id: "p3", left: { visual: { kind: "emoji", value: "🐜🐜🐜🐜🐜" } }, right: { label: "5" } },
            ],
          },
        },
        {
          id: "math-e-count5-2-06",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many butterflies?",
              spokenText: "Four pretty butterflies are flying in the sky. Count the butterflies!",
            },
            object: { kind: "emoji", value: "🦋" },
            count: 4,
            choices: [4, 5, 3],
          },
        },
        {
          id: "math-e-count5-2-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the number five!",
            },
            options: [
              { id: "a", label: "3" },
              { id: "b", label: "4" },
              { id: "c", label: "5" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-count5-2-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which shows 5?",
              spokenText: "Which picture shows five crabs? Count each group and tap it!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🦀🦀🦀🦀" } },
              { id: "b", visual: { kind: "emoji", value: "🦀🦀🦀🦀🦀" } },
              { id: "c", visual: { kind: "emoji", value: "🦀🦀🦀" } },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "math-l-count5-3",
      title: "Counting Champs",
      primarySkillId: "math-count-to-10",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-count5-3-01",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many octopuses?",
              spokenText: "Wow, look at all the octopuses in the sea! Count every single one. How many octopuses?",
            },
            object: { kind: "emoji", value: "🐙" },
            count: 5,
            choices: [3, 4, 5],
          },
        },
        {
          id: "math-e-count5-3-02",
          type: "ordering",
          payload: {
            prompt: {
              text: "Put them in order!",
              spokenText: "The numbers got all mixed up! Put them in order, starting at one and counting up to five.",
            },
            items: [
              { id: "a", label: "3" },
              { id: "b", label: "1" },
              { id: "c", label: "5" },
              { id: "d", label: "2" },
              { id: "e", label: "4" },
            ],
            correctOrder: ["b", "d", "a", "e", "c"],
          },
        },
        {
          id: "math-e-count5-3-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which shows 4?",
              spokenText: "Which picture shows four dolphins? Count carefully — they look alike!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐬🐬🐬🐬🐬" } },
              { id: "b", visual: { kind: "emoji", value: "🐬🐬🐬" } },
              { id: "c", visual: { kind: "emoji", value: "🐬🐬🐬🐬" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-count5-3-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the number five!",
            },
            options: [
              { id: "a", label: "2" },
              { id: "b", label: "5" },
              { id: "c", label: "4" },
              { id: "d", label: "3" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-count5-3-05",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many hedgehogs?",
              spokenText: "Four spiky hedgehogs are hiding in the leaves. Count the hedgehogs!",
            },
            object: { kind: "emoji", value: "🦔" },
            count: 4,
            choices: [2, 3, 4],
          },
        },
        {
          id: "math-e-count5-3-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Count the owls in each group, then tap the group and its matching number!",
            },
            pairs: [
              { id: "p1", left: { visual: { kind: "emoji", value: "🦉" } }, right: { label: "1" } },
              { id: "p2", left: { visual: { kind: "emoji", value: "🦉🦉🦉" } }, right: { label: "3" } },
              { id: "p3", left: { visual: { kind: "emoji", value: "🦉🦉🦉🦉🦉" } }, right: { label: "5" } },
            ],
          },
        },
        {
          id: "math-e-count5-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which group has 5?",
              spokenText: "Which group has five animals? Count each group carefully and tap it!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐴🐴🐴🐴🐴" } },
              { id: "b", visual: { kind: "emoji", value: "🐷🐷🐷🐷" } },
              { id: "c", visual: { kind: "emoji", value: "🐮🐮🐮" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-count5-3-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the number four!",
            },
            options: [
              { id: "a", label: "5" },
              { id: "b", label: "2" },
              { id: "c", label: "4" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
  ],
};
