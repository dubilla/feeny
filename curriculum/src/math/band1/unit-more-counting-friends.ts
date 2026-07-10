import type { UnitSeed } from "../../schema/pack";

/**
 * Band 1 · Counting 6–10 · More Counting Friends
 * Lesson 1 introduces six and seven, lesson 2 practices eight and nine,
 * lesson 3 reaches all the way to ten and mixes 6–10 with ordering.
 */
export const moreCountingFriends: UnitSeed = {
  id: "math-u-count10",
  bandId: "math-b1",
  title: "More Counting Friends",
  icon: "🐞",
  lessons: [
    {
      id: "math-l-count10-1",
      title: "Six and Seven",
      primarySkillId: "math-count-to-10",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-count10-1-01",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many ladybugs?",
              spokenText: "Some ladybugs landed on a big flower. Count them one by one! How many ladybugs?",
            },
            object: { kind: "emoji", value: "🐞" },
            count: 6,
            choices: [5, 6, 7],
          },
        },
        {
          id: "math-e-count10-1-02",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many birds?",
              spokenText: "Some little birds are singing in the tree. Count the birds! How many are there?",
            },
            object: { kind: "emoji", value: "🐦" },
            count: 7,
            choices: [6, 7, 8],
          },
        },
        {
          id: "math-e-count10-1-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the number six!",
            },
            options: [
              { id: "a", label: "6" },
              { id: "b", label: "9" },
              { id: "c", label: "4" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-count10-1-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which shows 6?",
              spokenText: "Which picture shows six strawberries? Count each group and tap it!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍓🍓🍓🍓🍓" } },
              { id: "b", visual: { kind: "emoji", value: "🍓🍓🍓🍓🍓🍓🍓" } },
              { id: "c", visual: { kind: "emoji", value: "🍓🍓🍓🍓🍓🍓" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-count10-1-05",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many snails?",
              spokenText: "Some slow snails are sliding on the path. Count every snail!",
            },
            object: { kind: "emoji", value: "🐌" },
            count: 7,
            choices: [8, 7, 6],
          },
        },
        {
          id: "math-e-count10-1-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Count the chicks in each group, then tap the group and its matching number!",
            },
            pairs: [
              { id: "p1", left: { visual: { kind: "emoji", value: "🐤🐤🐤🐤🐤🐤" } }, right: { label: "6" } },
              { id: "p2", left: { visual: { kind: "emoji", value: "🐤🐤🐤🐤🐤🐤🐤" } }, right: { label: "7" } },
            ],
          },
        },
        {
          id: "math-e-count10-1-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which shows 7?",
              spokenText: "Which picture shows seven balloons? Count carefully before they float away!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🎈🎈🎈🎈🎈🎈" } },
              { id: "b", visual: { kind: "emoji", value: "🎈🎈🎈🎈🎈🎈🎈" } },
              { id: "c", visual: { kind: "emoji", value: "🎈🎈🎈🎈🎈🎈🎈🎈" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-count10-1-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the number seven!",
            },
            options: [
              { id: "a", label: "1" },
              { id: "b", label: "4" },
              { id: "c", label: "7" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "math-l-count10-2",
      title: "Eight and Nine",
      primarySkillId: "math-count-to-10",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-count10-2-01",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many flowers?",
              spokenText: "Flowers bloomed in the garden today! Count every flower. How many are there?",
            },
            object: { kind: "emoji", value: "🌸" },
            count: 8,
            choices: [7, 8, 9],
          },
        },
        {
          id: "math-e-count10-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which shows 8?",
              spokenText: "Which picture shows eight penguins? Count each group of waddling penguins!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐧🐧🐧🐧🐧🐧🐧🐧🐧" } },
              { id: "b", visual: { kind: "emoji", value: "🐧🐧🐧🐧🐧🐧🐧🐧" } },
              { id: "c", visual: { kind: "emoji", value: "🐧🐧🐧🐧🐧🐧🐧" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-count10-2-03",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many cars?",
              spokenText: "Cars are zooming down the road. Beep beep! Count the cars!",
            },
            object: { kind: "emoji", value: "🚗" },
            count: 9,
            choices: [9, 8, 10],
          },
        },
        {
          id: "math-e-count10-2-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the number eight!",
            },
            options: [
              { id: "a", label: "6" },
              { id: "b", label: "3" },
              { id: "c", label: "8" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-count10-2-05",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many sheep?",
              spokenText: "Some sleepy sheep are resting in the meadow. Count the sheep — but don't fall asleep!",
            },
            object: { kind: "emoji", value: "🐑" },
            count: 8,
            choices: [6, 7, 8],
          },
        },
        {
          id: "math-e-count10-2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which shows 9?",
              spokenText: "Which picture shows nine stars? Count each twinkly group!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "⭐⭐⭐⭐⭐⭐⭐⭐⭐" } },
              { id: "b", visual: { kind: "emoji", value: "⭐⭐⭐⭐⭐⭐⭐⭐" } },
              { id: "c", visual: { kind: "emoji", value: "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-count10-2-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Count the grapes in each bunch, then tap the bunch and its matching number!",
            },
            pairs: [
              { id: "p1", left: { visual: { kind: "emoji", value: "🍇🍇🍇🍇🍇🍇🍇" } }, right: { label: "7" } },
              { id: "p2", left: { visual: { kind: "emoji", value: "🍇🍇🍇🍇🍇🍇🍇🍇" } }, right: { label: "8" } },
              { id: "p3", left: { visual: { kind: "emoji", value: "🍇🍇🍇🍇🍇🍇🍇🍇🍇" } }, right: { label: "9" } },
            ],
          },
        },
        {
          id: "math-e-count10-2-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the number nine!",
            },
            options: [
              { id: "a", label: "6" },
              { id: "b", label: "9" },
              { id: "c", label: "8" },
              { id: "d", label: "7" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "math-l-count10-3",
      title: "All the Way to Ten",
      primarySkillId: "math-count-to-10",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-count10-3-01",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many cookies?",
              spokenText: "Yummy cookies are on the plate! Count every cookie before someone eats them!",
            },
            object: { kind: "emoji", value: "🍪" },
            count: 10,
            choices: [9, 10, 8],
          },
        },
        {
          id: "math-e-count10-3-02",
          type: "ordering",
          payload: {
            prompt: {
              text: "Put them in order!",
              spokenText: "These numbers got mixed up! Put them in order, from six all the way up to ten.",
            },
            items: [
              { id: "a", label: "8" },
              { id: "b", label: "6" },
              { id: "c", label: "10" },
              { id: "d", label: "7" },
              { id: "e", label: "9" },
            ],
            correctOrder: ["b", "d", "a", "e", "c"],
          },
        },
        {
          id: "math-e-count10-3-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which shows 10?",
              spokenText: "Which picture shows ten ants marching? Count each line of ants!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐜🐜🐜🐜 🐜🐜🐜🐜" } },
              { id: "b", visual: { kind: "emoji", value: "🐜🐜🐜🐜🐜 🐜🐜🐜🐜" } },
              { id: "c", visual: { kind: "emoji", value: "🐜🐜🐜🐜🐜 🐜🐜🐜🐜🐜" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-count10-3-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the number ten!",
            },
            options: [
              { id: "a", label: "6" },
              { id: "b", label: "10" },
              { id: "c", label: "9" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-count10-3-05",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many crabs?",
              spokenText: "Crabs are scuttling on the sand. Count the crabs — click, click, click!",
            },
            object: { kind: "emoji", value: "🦀" },
            count: 9,
            choices: [10, 9, 8],
          },
        },
        {
          id: "math-e-count10-3-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Count each group of animals, then tap the group and its matching number!",
            },
            pairs: [
              { id: "p1", left: { visual: { kind: "emoji", value: "🐢🐢🐢🐢🐢🐢" } }, right: { label: "6" } },
              { id: "p2", left: { visual: { kind: "emoji", value: "🦊🦊🦊🦊🦊🦊🦊🦊" } }, right: { label: "8" } },
              { id: "p3", left: { visual: { kind: "emoji", value: "🐭🐭🐭🐭🐭🐭🐭🐭🐭🐭" } }, right: { label: "10" } },
            ],
          },
        },
        {
          id: "math-e-count10-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which group has 10?",
              spokenText: "Which group has ten animals? Count each group carefully and tap it!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🦩🦩🦩🦩🦩 🦩🦩🦩🦩🦩" } },
              { id: "b", visual: { kind: "emoji", value: "🦄🦄🦄🦄🦄 🦄🦄🦄🦄" } },
              { id: "c", visual: { kind: "emoji", value: "🐳🐳🐳🐳🐳 🐳🐳🐳" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-count10-3-08",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many bugs?",
              spokenText: "So many wiggly bugs! Take your time and count all the way to the end. How many bugs?",
            },
            object: { kind: "emoji", value: "🐛" },
            count: 10,
            choices: [8, 9, 10],
          },
        },
      ],
    },
  ],
};
