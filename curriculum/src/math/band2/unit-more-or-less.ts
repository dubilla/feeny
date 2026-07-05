import type { UnitSeed } from "../../schema/pack";

/**
 * Band 2 · Comparing quantities · More or Less
 * Lesson 1: which group has more. Lesson 2: which has fewer (plus one
 * sneaky "more" review). Lesson 3: same and equal, with close-together
 * counts as the stretch. All comparisons are emoji groups — no reading.
 */
export const moreOrLess: UnitSeed = {
  id: "math-u-compare",
  bandId: "math-b2",
  title: "More or Less",
  icon: "🐘",
  lessons: [
    {
      id: "math-l-compare-1",
      title: "Who Has More?",
      primarySkillId: "math-compare",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-compare-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which has more?",
              spokenText: "Two groups of elephants! Which group has more elephants? Tap it!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐘🐘" } },
              { id: "b", visual: { kind: "emoji", value: "🐘🐘🐘🐘🐘" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-compare-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which has more?",
              spokenText: "A monkey wants the bunch with more bananas! Which bunch has more? Tap it!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍌🍌🍌🍌🍌🍌" } },
              { id: "b", visual: { kind: "emoji", value: "🍌🍌🍌" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-compare-1-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the group that has more strawberries!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍓🍓🍓🍓" } },
              { id: "b", visual: { kind: "emoji", value: "🍓🍓🍓🍓🍓🍓🍓" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-compare-1-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which has more?",
              spokenText: "Woof woof! Which group has more puppies? Count both groups, then tap!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐶🐶🐶🐶🐶🐶🐶" } },
              { id: "b", visual: { kind: "emoji", value: "🐶🐶🐶🐶🐶" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-compare-1-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Match the groups that have the same amount! Count the red cars and the yellow taxis.",
            },
            pairs: [
              {
                id: "p1",
                left: { visual: { kind: "emoji", value: "🚗🚗🚗" } },
                right: { visual: { kind: "emoji", value: "🚕🚕🚕" } },
              },
              {
                id: "p2",
                left: { visual: { kind: "emoji", value: "🚗🚗🚗🚗🚗" } },
                right: { visual: { kind: "emoji", value: "🚕🚕🚕🚕🚕" } },
              },
            ],
          },
        },
        {
          id: "math-e-compare-1-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which has more?",
              spokenText: "Balloons for the party! Which bunch has more balloons? Tap it!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🎈🎈🎈🎈" } },
              { id: "b", visual: { kind: "emoji", value: "🎈🎈🎈🎈🎈🎈" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-compare-1-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the group that has more ants!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐜🐜🐜🐜🐜🐜🐜🐜" } },
              { id: "b", visual: { kind: "emoji", value: "🐜🐜🐜🐜🐜🐜" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-compare-1-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which has the most?",
              spokenText: "Three groups this time! Which group has the most chicks? Count each one!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐥🐥🐥" } },
              { id: "b", visual: { kind: "emoji", value: "🐥🐥🐥🐥🐥🐥🐥" } },
              { id: "c", visual: { kind: "emoji", value: "🐥🐥🐥🐥🐥" } },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "math-l-compare-2",
      title: "Who Has Fewer?",
      primarySkillId: "math-compare",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-compare-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which has fewer?",
              spokenText: "Fewer means not as many. Which group has fewer turtles? Tap it!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐢🐢🐢🐢🐢🐢" } },
              { id: "b", visual: { kind: "emoji", value: "🐢🐢🐢" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-compare-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which has fewer?",
              spokenText: "Which basket has fewer apples? Count both baskets, then tap the one with fewer!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍎🍎" } },
              { id: "b", visual: { kind: "emoji", value: "🍎🍎🍎🍎🍎" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-compare-2-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the group that has fewer bunnies!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐰🐰🐰🐰🐰🐰🐰" } },
              { id: "b", visual: { kind: "emoji", value: "🐰🐰🐰🐰" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-compare-2-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which has fewer?",
              spokenText: "Zoom! Which group has fewer airplanes flying in the sky? Tap it!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "✈️✈️✈️✈️✈️✈️" } },
              { id: "b", visual: { kind: "emoji", value: "✈️✈️✈️✈️✈️✈️✈️✈️" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-compare-2-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Match the treat groups that have the same amount! Count the donuts and the cupcakes.",
            },
            pairs: [
              {
                id: "p1",
                left: { visual: { kind: "emoji", value: "🍩🍩" } },
                right: { visual: { kind: "emoji", value: "🧁🧁" } },
              },
              {
                id: "p2",
                left: { visual: { kind: "emoji", value: "🍩🍩🍩🍩" } },
                right: { visual: { kind: "emoji", value: "🧁🧁🧁🧁" } },
              },
            ],
          },
        },
        {
          id: "math-e-compare-2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which has more?",
              spokenText: "Careful — this time find the group with MORE! Which group has more sailboats?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "⛵⛵⛵⛵" } },
              { id: "b", visual: { kind: "emoji", value: "⛵⛵⛵⛵⛵⛵" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-compare-2-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the group that has fewer stars!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "⭐⭐⭐⭐⭐" } },
              { id: "b", visual: { kind: "emoji", value: "⭐⭐⭐⭐⭐⭐⭐" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-compare-2-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which has the fewest?",
              spokenText: "Three groups of parrots! Which group has the fewest? Count each group, then tap it!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🦜🦜🦜🦜🦜🦜" } },
              { id: "b", visual: { kind: "emoji", value: "🦜🦜🦜🦜" } },
              { id: "c", visual: { kind: "emoji", value: "🦜🦜🦜" } },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "math-l-compare-3",
      title: "Same and Equal",
      primarySkillId: "math-compare",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-compare-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Same as 5 fingers?",
              spokenText: "Hold up one hand — that's five fingers! Tap the group that has the same amount as your five fingers.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐙🐙🐙🐙" } },
              { id: "b", visual: { kind: "emoji", value: "🐙🐙🐙🐙🐙" } },
              { id: "c", visual: { kind: "emoji", value: "🐙🐙🐙🐙🐙🐙" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-compare-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which has more?",
              spokenText: "Tricky one! These groups are very close. Count carefully — which group has more watermelons?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍉🍉🍉🍉🍉🍉🍉🍉" } },
              { id: "b", visual: { kind: "emoji", value: "🍉🍉🍉🍉🍉🍉🍉" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-compare-3-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen to the drums: boom, boom, boom — that was three! Tap the group with the same amount, three drums.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🥁🥁" } },
              { id: "b", visual: { kind: "emoji", value: "🥁🥁🥁🥁" } },
              { id: "c", visual: { kind: "emoji", value: "🥁🥁🥁" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-compare-3-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Match each cherry group to the lemon group with the same amount!",
            },
            pairs: [
              {
                id: "p1",
                left: { visual: { kind: "emoji", value: "🍒🍒🍒" } },
                right: { visual: { kind: "emoji", value: "🍋🍋🍋" } },
              },
              {
                id: "p2",
                left: { visual: { kind: "emoji", value: "🍒🍒🍒🍒🍒" } },
                right: { visual: { kind: "emoji", value: "🍋🍋🍋🍋🍋" } },
              },
              {
                id: "p3",
                left: { visual: { kind: "emoji", value: "🍒🍒" } },
                right: { visual: { kind: "emoji", value: "🍋🍋" } },
              },
            ],
          },
        },
        {
          id: "math-e-compare-3-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which has fewer?",
              spokenText: "The camels are lining up for a drink. Which group has fewer camels? Count carefully!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐫🐫🐫🐫🐫🐫🐫" } },
              { id: "b", visual: { kind: "emoji", value: "🐫🐫🐫🐫🐫🐫" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-compare-3-06",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the picture where the dogs and cats are equal — the same amount of each!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐶🐶🐶 🐱" } },
              { id: "b", visual: { kind: "emoji", value: "🐶🐶 🐱🐱" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-compare-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which has more?",
              spokenText: "Super tricky! Count both groups of penguins all the way. Which group has more?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐧🐧🐧🐧🐧 🐧🐧🐧🐧🐧" } },
              { id: "b", visual: { kind: "emoji", value: "🐧🐧🐧🐧🐧 🐧🐧🐧🐧" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-compare-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which is equal?",
              spokenText: "Which picture shows the same amount of suns and clouds — an equal amount of each?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "☀️☀️ ☁️☁️☁️" } },
              { id: "b", visual: { kind: "emoji", value: "☀️☀️☀️☀️ ☁️☁️" } },
              { id: "c", visual: { kind: "emoji", value: "☀️☀️☀️ ☁️☁️☁️" } },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
  ],
};
