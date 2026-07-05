import type { UnitSeed } from "../../schema/pack";

/**
 * Band 2 · First sounds · sound → picture
 * "Which one starts with sss?" Options are emoji only, no labels.
 * Every item has exactly one picture with the target first sound
 * (watch out: cat and kite are both /k/, sun and snake both /s/, etc.).
 * Lesson 3 stretches to four options.
 */
export const firstSounds: UnitSeed = {
  id: "read-u-firstsounds",
  bandId: "reading-b2",
  title: "First Sounds",
  icon: "🎯",
  lessons: [
    {
      id: "read-l-firstsounds-1",
      title: "What Do You Hear?",
      primarySkillId: "read-first-sounds",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-firstsounds-1-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Listen: mmm, mmm! Which picture starts with mmm?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🌙" } },
              { id: "b", visual: { kind: "emoji", value: "🍎" } },
              { id: "c", visual: { kind: "emoji", value: "🐶" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-firstsounds-1-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Listen: sss, sss! Which picture starts with sss?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🎩" } },
              { id: "b", visual: { kind: "emoji", value: "🐍" } },
              { id: "c", visual: { kind: "emoji", value: "⚽" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-firstsounds-1-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen close!", spokenText: "Listen: buh, buh! Which picture starts with buh?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐟" } },
              { id: "b", visual: { kind: "emoji", value: "🥛" } },
              { id: "c", visual: { kind: "emoji", value: "🚌" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-firstsounds-1-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "S",
              spokenText: "This is the letter S! It says sss. Which picture starts with sss?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍎" } },
              { id: "b", visual: { kind: "emoji", value: "☀️" } },
              { id: "c", visual: { kind: "emoji", value: "🐷" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-firstsounds-1-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the sounds!",
              spokenText: "Match the two pictures that start with the same sound!",
            },
            pairs: [
              {
                id: "p1",
                left: { visual: { kind: "emoji", value: "🚌" } },
                right: { visual: { kind: "emoji", value: "⚽" } },
              },
              {
                id: "p2",
                left: { visual: { kind: "emoji", value: "🌙" } },
                right: { visual: { kind: "emoji", value: "🥛" } },
              },
            ],
          },
        },
        {
          id: "read-e-firstsounds-1-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Listen: d-d-d! Which picture starts with d-d-d?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐶" } },
              { id: "b", visual: { kind: "emoji", value: "🎩" } },
              { id: "c", visual: { kind: "emoji", value: "☀️" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-firstsounds-1-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "M",
              spokenText: "This is the letter M! It says mmm. Which picture starts with mmm?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍎" } },
              { id: "b", visual: { kind: "emoji", value: "🐟" } },
              { id: "c", visual: { kind: "emoji", value: "🥛" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-firstsounds-1-08",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Listen: h-h-h! Which picture starts with h-h-h?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "⚽" } },
              { id: "b", visual: { kind: "emoji", value: "🎩" } },
              { id: "c", visual: { kind: "emoji", value: "🐍" } },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "read-l-firstsounds-2",
      title: "Sound Detectives",
      primarySkillId: "read-first-sounds",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-firstsounds-2-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Listen: p-p-puh! Which picture starts with p-p-puh?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐷" } },
              { id: "b", visual: { kind: "emoji", value: "🥛" } },
              { id: "c", visual: { kind: "emoji", value: "🐍" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-firstsounds-2-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Listen: fff, fff! Which picture starts with fff?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🌙" } },
              { id: "b", visual: { kind: "emoji", value: "🦊" } },
              { id: "c", visual: { kind: "emoji", value: "🚌" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-firstsounds-2-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "B",
              spokenText: "This is the letter B! It says buh. Which picture starts with buh?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐱" } },
              { id: "b", visual: { kind: "emoji", value: "🎩" } },
              { id: "c", visual: { kind: "emoji", value: "⚽" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-firstsounds-2-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen close!", spokenText: "Listen: k-k-k! Which picture starts with k-k-k?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍎" } },
              { id: "b", visual: { kind: "emoji", value: "🪁" } },
              { id: "c", visual: { kind: "emoji", value: "🐶" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-firstsounds-2-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the sounds!",
              spokenText: "Match the two pictures that start with the same sound!",
            },
            pairs: [
              {
                id: "p1",
                left: { visual: { kind: "emoji", value: "🦊" } },
                right: { visual: { kind: "emoji", value: "🐟" } },
              },
              {
                id: "p2",
                left: { visual: { kind: "emoji", value: "☀️" } },
                right: { visual: { kind: "emoji", value: "🐍" } },
              },
            ],
          },
        },
        {
          id: "read-e-firstsounds-2-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Listen: c-c-c! Which picture starts with c-c-c?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐱" } },
              { id: "b", visual: { kind: "emoji", value: "🥛" } },
              { id: "c", visual: { kind: "emoji", value: "🍎" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-firstsounds-2-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "H",
              spokenText: "This is the letter H! It says h-h-h. Which picture starts with h-h-h?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🌙" } },
              { id: "b", visual: { kind: "emoji", value: "🐟" } },
              { id: "c", visual: { kind: "emoji", value: "🎩" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-firstsounds-2-08",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Listen: a-a-a! Which picture starts with a-a-a?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐶" } },
              { id: "b", visual: { kind: "emoji", value: "🍎" } },
              { id: "c", visual: { kind: "emoji", value: "🐍" } },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "read-l-firstsounds-3",
      title: "Super Sound Stars",
      primarySkillId: "read-first-sounds",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-firstsounds-3-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Listen: mmm, mmm! Which picture starts with mmm?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐟" } },
              { id: "b", visual: { kind: "emoji", value: "🥛" } },
              { id: "c", visual: { kind: "emoji", value: "🐍" } },
              { id: "d", visual: { kind: "emoji", value: "🎩" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-firstsounds-3-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Listen: sss, sss! Which picture starts with sss?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "☀️" } },
              { id: "b", visual: { kind: "emoji", value: "🐷" } },
              { id: "c", visual: { kind: "emoji", value: "🪁" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-firstsounds-3-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "F",
              spokenText: "This is the letter F! It says fff. Which picture starts with fff?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐱" } },
              { id: "b", visual: { kind: "emoji", value: "🦊" } },
              { id: "c", visual: { kind: "emoji", value: "⚽" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-firstsounds-3-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the sounds!",
              spokenText: "Three matches this time! Match the pictures that start with the same sound!",
            },
            pairs: [
              {
                id: "p1",
                left: { visual: { kind: "emoji", value: "🌙" } },
                right: { visual: { kind: "emoji", value: "🥛" } },
              },
              {
                id: "p2",
                left: { visual: { kind: "emoji", value: "🐍" } },
                right: { visual: { kind: "emoji", value: "☀️" } },
              },
              {
                id: "p3",
                left: { visual: { kind: "emoji", value: "🐱" } },
                right: { visual: { kind: "emoji", value: "🪁" } },
              },
            ],
          },
        },
        {
          id: "read-e-firstsounds-3-05",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen close!", spokenText: "Listen: buh, buh! Which picture starts with buh?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🎩" } },
              { id: "b", visual: { kind: "emoji", value: "🐟" } },
              { id: "c", visual: { kind: "emoji", value: "🚌" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-firstsounds-3-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Listen: p-p-puh! Which picture starts with p-p-puh?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐷" } },
              { id: "b", visual: { kind: "emoji", value: "🍎" } },
              { id: "c", visual: { kind: "emoji", value: "🌙" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-firstsounds-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "K",
              spokenText: "This is the letter K! It says k-k-k. Which picture starts with k-k-k?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐶" } },
              { id: "b", visual: { kind: "emoji", value: "☀️" } },
              { id: "c", visual: { kind: "emoji", value: "🪁" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-firstsounds-3-08",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Listen: fff, fff! Which picture starts with fff?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍎" } },
              { id: "b", visual: { kind: "emoji", value: "🐟" } },
              { id: "c", visual: { kind: "emoji", value: "🚌" } },
              { id: "d", visual: { kind: "emoji", value: "🌙" } },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
  ],
};
