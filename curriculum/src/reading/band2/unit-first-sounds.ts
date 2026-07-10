import type { UnitSeed } from "../../schema/pack";

/**
 * Band 2 · First sounds · sound → picture
 * "Sock starts with S! Which picture starts like sock?" Options are emoji
 * only, no labels. The exemplar word must never name any option's emoji,
 * and no raw phoneme strings ("sss") — TTS mangles them (AUTHORING.md rules).
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
            prompt: { text: "Listen!", spokenText: "Mop starts with M! Which picture starts like mop?" },
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
            prompt: { text: "Tap what you hear!", spokenText: "Sock starts with S! Which picture starts like sock?" },
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
            prompt: { text: "Listen close!", spokenText: "Banana starts with B! Which picture starts like banana?" },
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
              spokenText: "This is the letter S! Sock starts with S. Which picture starts like sock?",
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
            prompt: { text: "Listen!", spokenText: "Door starts with D! Which picture starts like door?" },
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
              spokenText: "This is the letter M! Mop starts with M. Which picture starts like mop?",
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
            prompt: { text: "Tap what you hear!", spokenText: "Hippo starts with H! Which picture starts like hippo?" },
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
            prompt: { text: "Listen!", spokenText: "Penguin starts with P! Which picture starts like penguin?" },
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
            prompt: { text: "Tap what you hear!", spokenText: "Fire starts with F! Which picture starts like fire?" },
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
              spokenText: "This is the letter B! Banana starts with B. Which picture starts like banana?",
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
            prompt: { text: "Listen close!", spokenText: "Kangaroo starts with K! Which picture starts like kangaroo?" },
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
            prompt: { text: "Listen!", spokenText: "Corn starts with C! Which picture starts like corn?" },
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
              spokenText: "This is the letter H! Hippo starts with H. Which picture starts like hippo?",
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
            prompt: { text: "Tap what you hear!", spokenText: "Ant starts with A! Which picture starts like ant?" },
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
            prompt: { text: "Listen!", spokenText: "Mop starts with M! Which picture starts like mop?" },
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
            prompt: { text: "Tap what you hear!", spokenText: "Sock starts with S! Which picture starts like sock?" },
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
              spokenText: "This is the letter F! Fire starts with F. Which picture starts like fire?",
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
            prompt: { text: "Listen close!", spokenText: "Banana starts with B! Which picture starts like banana?" },
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
            prompt: { text: "Listen!", spokenText: "Penguin starts with P! Which picture starts like penguin?" },
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
              spokenText: "This is the letter K! Kangaroo starts with K. Which picture starts like kangaroo?",
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
            prompt: { text: "Tap what you hear!", spokenText: "Fire starts with F! Which picture starts like fire?" },
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
