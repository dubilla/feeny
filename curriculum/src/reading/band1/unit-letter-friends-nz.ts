import type { UnitSeed } from "../../schema/pack";

/**
 * Reading Band 1 · More Letter Friends
 * Letter names N–Z with the Feeny keyword set (see FUNDATIONS_MAP.md).
 * Lesson 1 = uppercase, lesson 2 = lowercase, lesson 3 = mixed review.
 * Band 1 kids are pre-readers: every exercise is solvable from the spoken
 * prompt + visuals alone; naming the target letter IS the task.
 */
export const letterFriendsNZ: UnitSeed = {
  id: "read-u-friends-nz",
  bandId: "reading-b1",
  title: "More Letter Friends",
  icon: "🌈",
  lessons: [
    {
      id: "read-l-friends-nz-1",
      title: "Big Letters N to Z",
      primarySkillId: "read-letters-upper",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-friends-nz-1-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "The letter N! N is for nest. Tap the letter N!" },
            options: [
              { id: "a", label: "M" },
              { id: "b", label: "N" },
              { id: "c", label: "W" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-friends-nz-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "S is for...", spokenText: "S is for sun! Tap the sun!" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "☀️" } },
              { id: "b", visual: { kind: "emoji", value: "🌙" } },
              { id: "c", visual: { kind: "emoji", value: "🌈" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-friends-nz-1-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "The letter Q! Q is for queen. Tap the letter Q!" },
            options: [
              { id: "a", label: "P" },
              { id: "b", label: "O" },
              { id: "c", label: "Q" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-friends-nz-1-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the letters!",
              spokenText: "T is for turtle, R is for rainbow, V is for volcano. Match each letter to its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "T" }, right: { visual: { kind: "emoji", value: "🐢" } } },
              { id: "p2", left: { label: "R" }, right: { visual: { kind: "emoji", value: "🌈" } } },
              { id: "p3", left: { label: "V" }, right: { visual: { kind: "emoji", value: "🌋" } } },
            ],
          },
        },
        {
          id: "read-e-friends-nz-1-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "U is for...", spokenText: "U is for umbrella! Tap the umbrella!" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍉" } },
              { id: "b", visual: { kind: "emoji", value: "📦" } },
              { id: "c", visual: { kind: "emoji", value: "☂️" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-friends-nz-1-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "The letter Z! Z is for zebra. Tap the letter Z!" },
            options: [
              { id: "a", label: "S" },
              { id: "b", label: "Z" },
              { id: "c", label: "N" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-friends-nz-1-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "W is for...", spokenText: "W is for watermelon! Tap the watermelon!" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍉" } },
              { id: "b", visual: { kind: "emoji", value: "🦦" } },
              { id: "c", visual: { kind: "emoji", value: "🐢" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-friends-nz-1-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the letters!",
              spokenText: "X is for box, P is for pig, Y is for yo-yo. Match each letter to its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "X" }, right: { visual: { kind: "emoji", value: "📦" } } },
              { id: "p2", left: { label: "P" }, right: { visual: { kind: "emoji", value: "🐷" } } },
              { id: "p3", left: { label: "Y" }, right: { visual: { kind: "emoji", value: "🪀" } } },
            ],
          },
        },
      ],
    },
    {
      id: "read-l-friends-nz-2",
      title: "Small Letters n to z",
      primarySkillId: "read-letters-lower",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-friends-nz-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "o is for...", spokenText: "The small letter o! O is for otter. Tap the otter!" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐢" } },
              { id: "b", visual: { kind: "emoji", value: "🦓" } },
              { id: "c", visual: { kind: "emoji", value: "🦦" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-friends-nz-2-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "The letter p! P is for pig. Tap the small letter p!" },
            options: [
              { id: "a", label: "p" },
              { id: "b", label: "q" },
              { id: "c", label: "b" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-friends-nz-2-03",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the letters!",
              spokenText: "N is for nest, S is for sun, W is for watermelon. Match each small letter to its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "n" }, right: { visual: { kind: "emoji", value: "🪺" } } },
              { id: "p2", left: { label: "s" }, right: { visual: { kind: "emoji", value: "☀️" } } },
              { id: "p3", left: { label: "w" }, right: { visual: { kind: "emoji", value: "🍉" } } },
            ],
          },
        },
        {
          id: "read-e-friends-nz-2-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "The letter u! U is for umbrella. Tap the small letter u!" },
            options: [
              { id: "a", label: "v" },
              { id: "b", label: "u" },
              { id: "c", label: "n" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-friends-nz-2-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "r is for...", spokenText: "The small letter r! R is for rainbow. Tap the rainbow!" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🌈" } },
              { id: "b", visual: { kind: "emoji", value: "🌋" } },
              { id: "c", visual: { kind: "emoji", value: "☂️" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-friends-nz-2-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "The letter q! Q is for queen. Tap the small letter q!" },
            options: [
              { id: "a", label: "g" },
              { id: "b", label: "p" },
              { id: "c", label: "q" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-friends-nz-2-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "t is for...", spokenText: "The small letter t! T is for turtle. Tap the turtle!" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🦓" } },
              { id: "b", visual: { kind: "emoji", value: "🐢" } },
              { id: "c", visual: { kind: "emoji", value: "🦦" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-friends-nz-2-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the letters!",
              spokenText: "V is for volcano, Y is for yo-yo, X is for box. Match each small letter to its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "v" }, right: { visual: { kind: "emoji", value: "🌋" } } },
              { id: "p2", left: { label: "y" }, right: { visual: { kind: "emoji", value: "🪀" } } },
              { id: "p3", left: { label: "x" }, right: { visual: { kind: "emoji", value: "📦" } } },
            ],
          },
        },
      ],
    },
    {
      id: "read-l-friends-nz-3",
      title: "Letter Friends Mix-Up",
      primarySkillId: "read-letters-lower",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-friends-nz-3-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "The letter V! V is for volcano. Tap the big letter V!" },
            options: [
              { id: "a", label: "V" },
              { id: "b", label: "U" },
              { id: "c", label: "W" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-friends-nz-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "n is for...", spokenText: "The small letter n! N is for nest. Tap the nest!" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "☂️" } },
              { id: "b", visual: { kind: "emoji", value: "🍉" } },
              { id: "c", visual: { kind: "emoji", value: "🪺" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-friends-nz-3-03",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the letters!",
              spokenText: "Z is for zebra, O is for otter, S is for sun. Match each letter to its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "Z" }, right: { visual: { kind: "emoji", value: "🦓" } } },
              { id: "p2", left: { label: "o" }, right: { visual: { kind: "emoji", value: "🦦" } } },
              { id: "p3", left: { label: "S" }, right: { visual: { kind: "emoji", value: "☀️" } } },
            ],
          },
        },
        {
          id: "read-e-friends-nz-3-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "The letter y! Y is for yo-yo. Tap the small letter y!" },
            options: [
              { id: "a", label: "v" },
              { id: "b", label: "y" },
              { id: "c", label: "j" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-friends-nz-3-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "Q is for...", spokenText: "Q is for queen! Tap the queen!" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🌈" } },
              { id: "b", visual: { kind: "emoji", value: "🐷" } },
              { id: "c", visual: { kind: "emoji", value: "👑" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-friends-nz-3-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "The letter t! T is for turtle. Tap the small letter t!" },
            options: [
              { id: "a", label: "t" },
              { id: "b", label: "f" },
              { id: "c", label: "l" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-friends-nz-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "w is for...", spokenText: "The small letter w! W is for watermelon. Tap the watermelon!" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🌋" } },
              { id: "b", visual: { kind: "emoji", value: "🍉" } },
              { id: "c", visual: { kind: "emoji", value: "🐢" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-friends-nz-3-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the letters!",
              spokenText: "R is for rainbow, X is for box, U is for umbrella. Match each letter to its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "r" }, right: { visual: { kind: "emoji", value: "🌈" } } },
              { id: "p2", left: { label: "X" }, right: { visual: { kind: "emoji", value: "📦" } } },
              { id: "p3", left: { label: "u" }, right: { visual: { kind: "emoji", value: "☂️" } } },
            ],
          },
        },
      ],
    },
  ],
};
