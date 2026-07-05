import type { UnitSeed } from "../../schema/pack";

/**
 * Band 1 · Basic shapes · Shape Safari
 * Lesson 1: circles and squares. Lesson 2: triangles join in.
 * Lesson 3: rectangles, plus telling all four shapes apart.
 * Shape emoji carry the concept; real-world lookalikes (pizza, ball,
 * door, envelope) connect shapes to the world. No reading required.
 */
export const shapeSafari: UnitSeed = {
  id: "math-u-shapes",
  bandId: "math-b1",
  title: "Shape Safari",
  icon: "🔷",
  lessons: [
    {
      id: "math-l-shapes-1",
      title: "Circles and Squares",
      primarySkillId: "math-shapes-basic",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-shapes-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Find the circle!",
              spokenText: "A circle is round like a ball, with no corners at all. Which one is the circle? Tap it!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🔵" } },
              { id: "b", visual: { kind: "emoji", value: "🟦" } },
              { id: "c", visual: { kind: "emoji", value: "🔺" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-shapes-1-02",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the square!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🔵" } },
              { id: "b", visual: { kind: "emoji", value: "🟧" } },
              { id: "c", visual: { kind: "emoji", value: "🔻" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-shapes-1-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Find the square!",
              spokenText: "A square has four sides that are all the same size. Which one is the square? Tap it!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "⭕" } },
              { id: "b", visual: { kind: "emoji", value: "🔺" } },
              { id: "c", visual: { kind: "emoji", value: "🟦" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-shapes-1-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Round like a circle?",
              spokenText: "Which one is round like a circle? Look closely and tap it!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🎁" } },
              { id: "b", visual: { kind: "emoji", value: "⚽" } },
              { id: "c", visual: { kind: "emoji", value: "📐" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-shapes-1-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Find the circle!",
              spokenText: "One of these is a circle — round and smooth with no corners. Tap the circle!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🟤" } },
              { id: "b", visual: { kind: "emoji", value: "🔺" } },
              { id: "c", visual: { kind: "emoji", value: "🟨" } },
              { id: "d", visual: { kind: "emoji", value: "🔷" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-shapes-1-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Match each shape to the thing that looks like it! The ball is round like a circle, and the gift box is a square.",
            },
            pairs: [
              {
                id: "p1",
                left: { visual: { kind: "emoji", value: "🔵" } },
                right: { visual: { kind: "emoji", value: "⚽" } },
              },
              {
                id: "p2",
                left: { visual: { kind: "emoji", value: "🟦" } },
                right: { visual: { kind: "emoji", value: "🎁" } },
              },
            ],
          },
        },
        {
          id: "math-e-shapes-1-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Like a square?",
              spokenText: "Which one looks like a square, with four sides the same size? Tap it!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍕" } },
              { id: "b", visual: { kind: "emoji", value: "🎲" } },
              { id: "c", visual: { kind: "emoji", value: "🕰️" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-shapes-1-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the square!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🟠" } },
              { id: "b", visual: { kind: "emoji", value: "🔻" } },
              { id: "c", visual: { kind: "emoji", value: "🟪" } },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "math-l-shapes-2",
      title: "Triangle Time",
      primarySkillId: "math-shapes-basic",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-shapes-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Find the triangle!",
              spokenText: "A triangle has three sides and three pointy corners. Which one is the triangle? Tap it!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🔺" } },
              { id: "b", visual: { kind: "emoji", value: "🟦" } },
              { id: "c", visual: { kind: "emoji", value: "🔵" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-shapes-2-02",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the triangle!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🟧" } },
              { id: "b", visual: { kind: "emoji", value: "🔻" } },
              { id: "c", visual: { kind: "emoji", value: "⭕" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-shapes-2-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Like a triangle?",
              spokenText: "A slice of pizza looks like a triangle! Which one is shaped like a triangle? Tap it!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "⚽" } },
              { id: "b", visual: { kind: "emoji", value: "🎁" } },
              { id: "c", visual: { kind: "emoji", value: "🍕" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-shapes-2-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Match each shape to its look-alike! The cookie is round, the sail is a triangle, and the dice is a square.",
            },
            pairs: [
              {
                id: "p1",
                left: { visual: { kind: "emoji", value: "🔵" } },
                right: { visual: { kind: "emoji", value: "🍪" } },
              },
              {
                id: "p2",
                left: { visual: { kind: "emoji", value: "🔺" } },
                right: { visual: { kind: "emoji", value: "⛵" } },
              },
              {
                id: "p3",
                left: { visual: { kind: "emoji", value: "🟦" } },
                right: { visual: { kind: "emoji", value: "🎲" } },
              },
            ],
          },
        },
        {
          id: "math-e-shapes-2-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Find the square!",
              spokenText: "Do you remember the square, with its four equal sides? Tap the square!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🔻" } },
              { id: "b", visual: { kind: "emoji", value: "🟨" } },
              { id: "c", visual: { kind: "emoji", value: "🟠" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-shapes-2-06",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the circle!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🔷" } },
              { id: "b", visual: { kind: "emoji", value: "🔺" } },
              { id: "c", visual: { kind: "emoji", value: "🟩" } },
              { id: "d", visual: { kind: "emoji", value: "🟣" } },
            ],
            correctOptionId: "d",
          },
        },
        {
          id: "math-e-shapes-2-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Like a triangle?",
              spokenText: "Which one has three sides, just like a triangle? Tap it!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "📐" } },
              { id: "b", visual: { kind: "emoji", value: "🕰️" } },
              { id: "c", visual: { kind: "emoji", value: "✉️" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-shapes-2-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Triangle corners?",
              spokenText: "Picture a triangle with its pointy corners. How many corners does a triangle have? Tap the number!",
            },
            options: [
              { id: "a", label: "4" },
              { id: "b", label: "2" },
              { id: "c", label: "3" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "math-l-shapes-3",
      title: "Rectangle Roundup",
      primarySkillId: "math-shapes-basic",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-shapes-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Find the rectangle!",
              spokenText: "A rectangle is like a stretched-out square — two long sides and two short sides. A door is a rectangle! Tap it!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🚪" } },
              { id: "b", visual: { kind: "emoji", value: "⚽" } },
              { id: "c", visual: { kind: "emoji", value: "🔺" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-shapes-3-02",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the one shaped like a rectangle!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🔵" } },
              { id: "b", visual: { kind: "emoji", value: "📕" } },
              { id: "c", visual: { kind: "emoji", value: "🔻" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-shapes-3-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Like a rectangle?",
              spokenText: "Which one is shaped like a rectangle, with two long sides and two short sides? Tap it!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🎈" } },
              { id: "b", visual: { kind: "emoji", value: "🎲" } },
              { id: "c", visual: { kind: "emoji", value: "✉️" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-shapes-3-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Two things in each pair have the same shape! Match the round ones, the triangle ones, and the rectangle ones.",
            },
            pairs: [
              {
                id: "p1",
                left: { visual: { kind: "emoji", value: "🏀" } },
                right: { visual: { kind: "emoji", value: "🍩" } },
              },
              {
                id: "p2",
                left: { visual: { kind: "emoji", value: "⛺" } },
                right: { visual: { kind: "emoji", value: "📐" } },
              },
              {
                id: "p3",
                left: { visual: { kind: "emoji", value: "📱" } },
                right: { visual: { kind: "emoji", value: "🚪" } },
              },
            ],
          },
        },
        {
          id: "math-e-shapes-3-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Find the circle!",
              spokenText: "Time for a shape check! Which one is a circle — perfectly round with no corners? Tap it!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "📕" } },
              { id: "b", visual: { kind: "emoji", value: "🔺" } },
              { id: "c", visual: { kind: "emoji", value: "🟧" } },
              { id: "d", visual: { kind: "emoji", value: "🟢" } },
            ],
            correctOptionId: "d",
          },
        },
        {
          id: "math-e-shapes-3-06",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the square! Careful — one of these is a rectangle, not a square.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "⭕" } },
              { id: "b", visual: { kind: "emoji", value: "🟫" } },
              { id: "c", visual: { kind: "emoji", value: "🚪" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-shapes-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Like a square?",
              spokenText: "Which one looks like a square, with all four sides the same? Look very carefully!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "✉️" } },
              { id: "b", visual: { kind: "emoji", value: "🍩" } },
              { id: "c", visual: { kind: "emoji", value: "🧇" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-shapes-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Four equal sides?",
              spokenText: "Which shape has four sides that are all exactly the same size? Tap it!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🟦" } },
              { id: "b", visual: { kind: "emoji", value: "🔺" } },
              { id: "c", visual: { kind: "emoji", value: "⭕" } },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
  ],
};
