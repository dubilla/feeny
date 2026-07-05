import type { UnitSeed } from "../../schema/pack";

/**
 * Band 2 · Numbers 11–20 · Big Number Trail
 * Lesson 1: eleven to fourteen. Lesson 2: fifteen to seventeen.
 * Lesson 3: eighteen, nineteen, twenty. Emoji groups are chunked in
 * fives so kids can count big quantities without losing their place.
 */
export const bigNumberTrail: UnitSeed = {
  id: "math-u-teens",
  bandId: "math-b2",
  title: "Big Number Trail",
  icon: "🦋",
  lessons: [
    {
      id: "math-l-teens-1",
      title: "Eleven to Fourteen",
      primarySkillId: "math-count-to-20",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-teens-1-01",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many butterflies?",
              spokenText: "So many butterflies! Count them one by one — go past ten! How many butterflies?",
            },
            object: { kind: "emoji", value: "🦋" },
            count: 11,
            choices: [10, 11, 12],
          },
        },
        {
          id: "math-e-teens-1-02",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the number twelve!",
            },
            options: [
              { id: "a", label: "12" },
              { id: "b", label: "21" },
              { id: "c", label: "20" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-teens-1-03",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many apples?",
              spokenText: "The apple tree dropped a big pile of apples! Count every apple in the orchard.",
            },
            object: { kind: "emoji", value: "🍎" },
            count: 12,
            choices: [12, 11, 13],
          },
        },
        {
          id: "math-e-teens-1-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which group has 11?",
              spokenText: "Which group has eleven chicks? Count by fives to go faster — five, ten, and then count on!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐤🐤🐤🐤🐤 🐤🐤🐤🐤🐤" } },
              { id: "b", visual: { kind: "emoji", value: "🐤🐤🐤🐤🐤 🐤🐤🐤🐤🐤 🐤" } },
              { id: "c", visual: { kind: "emoji", value: "🐤🐤🐤🐤🐤 🐤🐤🐤🐤🐤 🐤🐤" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-teens-1-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Count the stars in each group, then tap the group and its matching number!",
            },
            pairs: [
              {
                id: "p1",
                left: { visual: { kind: "emoji", value: "⭐⭐⭐⭐⭐ ⭐⭐⭐⭐⭐ ⭐" } },
                right: { label: "11" },
              },
              {
                id: "p2",
                left: { visual: { kind: "emoji", value: "⭐⭐⭐⭐⭐ ⭐⭐⭐⭐⭐ ⭐⭐⭐" } },
                right: { label: "13" },
              },
            ],
          },
        },
        {
          id: "math-e-teens-1-06",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many seashells?",
              spokenText: "Look at all the seashells on the beach! Count every shell. How many did you find?",
            },
            object: { kind: "emoji", value: "🐚" },
            count: 13,
            choices: [14, 12, 13],
          },
        },
        {
          id: "math-e-teens-1-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the number fourteen!",
            },
            options: [
              { id: "a", label: "4" },
              { id: "b", label: "40" },
              { id: "c", label: "14" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-teens-1-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which group has 12?",
              spokenText: "Which group has twelve daisies? Count each group carefully!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🌼🌼🌼🌼🌼 🌼🌼🌼🌼🌼 🌼🌼" } },
              { id: "b", visual: { kind: "emoji", value: "🌼🌼🌼🌼🌼 🌼🌼🌼🌼🌼 🌼🌼🌼" } },
              { id: "c", visual: { kind: "emoji", value: "🌼🌼🌼🌼🌼 🌼🌼🌼🌼🌼 🌼" } },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
    {
      id: "math-l-teens-2",
      title: "Fifteen, Sixteen, Seventeen",
      primarySkillId: "math-count-to-20",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-teens-2-01",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many bees?",
              spokenText: "Buzz buzz! The hive is busy today. Count every single bee. How many bees?",
            },
            object: { kind: "emoji", value: "🐝" },
            count: 15,
            choices: [14, 15, 16],
          },
        },
        {
          id: "math-e-teens-2-02",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the number fifteen!",
            },
            options: [
              { id: "a", label: "50" },
              { id: "b", label: "15" },
              { id: "c", label: "5" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-teens-2-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which group has 16?",
              spokenText: "Which group has sixteen strawberries? Count by fives — five, ten, fifteen — then count on!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍓🍓🍓🍓🍓 🍓🍓🍓🍓🍓 🍓🍓🍓🍓🍓" } },
              { id: "b", visual: { kind: "emoji", value: "🍓🍓🍓🍓🍓 🍓🍓🍓🍓🍓 🍓🍓🍓🍓🍓 🍓🍓" } },
              { id: "c", visual: { kind: "emoji", value: "🍓🍓🍓🍓🍓 🍓🍓🍓🍓🍓 🍓🍓🍓🍓🍓 🍓" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-teens-2-04",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many cars?",
              spokenText: "Wow, a big traffic jam! Count all the cars, one by one. How many cars are stuck?",
            },
            object: { kind: "emoji", value: "🚗" },
            count: 16,
            choices: [17, 16, 15],
          },
        },
        {
          id: "math-e-teens-2-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Count the balloons in each bunch, then tap the bunch and its matching number!",
            },
            pairs: [
              {
                id: "p1",
                left: { visual: { kind: "emoji", value: "🎈🎈🎈🎈🎈 🎈🎈🎈🎈🎈 🎈🎈🎈🎈🎈" } },
                right: { label: "15" },
              },
              {
                id: "p2",
                left: { visual: { kind: "emoji", value: "🎈🎈🎈🎈🎈 🎈🎈🎈🎈🎈 🎈🎈🎈🎈🎈 🎈🎈" } },
                right: { label: "17" },
              },
            ],
          },
        },
        {
          id: "math-e-teens-2-06",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the number seventeen!",
            },
            options: [
              { id: "a", label: "17" },
              { id: "b", label: "7" },
              { id: "c", label: "70" },
              { id: "d", label: "16" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-teens-2-07",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many dolphins?",
              spokenText: "A whole pod of dolphins is jumping in the waves! Count every dolphin.",
            },
            object: { kind: "emoji", value: "🐬" },
            count: 17,
            choices: [16, 18, 17],
          },
        },
        {
          id: "math-e-teens-2-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which group has 16?",
              spokenText: "Which group has sixteen ladybugs? Count carefully — the groups are very close!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐞🐞🐞🐞🐞 🐞🐞🐞🐞🐞 🐞🐞🐞🐞🐞 🐞🐞" } },
              { id: "b", visual: { kind: "emoji", value: "🐞🐞🐞🐞🐞 🐞🐞🐞🐞🐞 🐞🐞🐞🐞🐞 🐞" } },
              { id: "c", visual: { kind: "emoji", value: "🐞🐞🐞🐞🐞 🐞🐞🐞🐞🐞 🐞🐞🐞🐞🐞" } },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "math-l-teens-3",
      title: "Eighteen, Nineteen, Twenty!",
      primarySkillId: "math-count-to-20",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-teens-3-01",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many penguins?",
              spokenText: "A big waddle of penguins is marching on the ice! Count them all. How many penguins?",
            },
            object: { kind: "emoji", value: "🐧" },
            count: 18,
            choices: [17, 18, 19],
          },
        },
        {
          id: "math-e-teens-3-02",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the number nineteen!",
            },
            options: [
              { id: "a", label: "9" },
              { id: "b", label: "90" },
              { id: "c", label: "19" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-teens-3-03",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many pumpkins?",
              spokenText: "The pumpkin patch is full! Count every pumpkin — all the way up to the biggest number yet!",
            },
            object: { kind: "emoji", value: "🎃" },
            count: 20,
            choices: [18, 19, 20],
          },
        },
        {
          id: "math-e-teens-3-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which group has 18?",
              spokenText: "Which group has eighteen fish? Count by fives — five, ten, fifteen — then keep going!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐟🐟🐟🐟🐟 🐟🐟🐟🐟🐟 🐟🐟🐟🐟🐟 🐟🐟🐟" } },
              { id: "b", visual: { kind: "emoji", value: "🐟🐟🐟🐟🐟 🐟🐟🐟🐟🐟 🐟🐟🐟🐟🐟 🐟🐟🐟🐟" } },
              { id: "c", visual: { kind: "emoji", value: "🐟🐟🐟🐟🐟 🐟🐟🐟🐟🐟 🐟🐟🐟🐟🐟 🐟🐟" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-teens-3-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Count the sunflowers and the mushrooms, then tap each group and its matching number!",
            },
            pairs: [
              {
                id: "p1",
                left: { visual: { kind: "emoji", value: "🌻🌻🌻🌻🌻 🌻🌻🌻🌻🌻 🌻🌻🌻🌻🌻 🌻🌻🌻" } },
                right: { label: "18" },
              },
              {
                id: "p2",
                left: { visual: { kind: "emoji", value: "🍄🍄🍄🍄🍄 🍄🍄🍄🍄🍄 🍄🍄🍄🍄🍄 🍄🍄🍄🍄🍄" } },
                right: { label: "20" },
              },
            ],
          },
        },
        {
          id: "math-e-teens-3-06",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the number twenty!",
            },
            options: [
              { id: "a", label: "12" },
              { id: "b", label: "2" },
              { id: "c", label: "10" },
              { id: "d", label: "20" },
            ],
            correctOptionId: "d",
          },
        },
        {
          id: "math-e-teens-3-07",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many ducks?",
              spokenText: "The ducks are swimming in a long, long row. Count every duck! How many are there?",
            },
            object: { kind: "emoji", value: "🦆" },
            count: 19,
            choices: [20, 19, 18],
          },
        },
        {
          id: "math-e-teens-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which group has 20?",
              spokenText: "Which group has exactly twenty frogs? Count by fives if you can — five, ten, fifteen, twenty!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐸🐸🐸🐸🐸 🐸🐸🐸🐸🐸 🐸🐸🐸🐸🐸 🐸🐸🐸🐸" } },
              { id: "b", visual: { kind: "emoji", value: "🐸🐸🐸🐸🐸 🐸🐸🐸🐸🐸 🐸🐸🐸🐸🐸 🐸🐸🐸🐸🐸" } },
              { id: "c", visual: { kind: "emoji", value: "🐸🐸🐸🐸🐸 🐸🐸🐸🐸🐸 🐸🐸🐸🐸🐸 🐸🐸🐸" } },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
  ],
};
