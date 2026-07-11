import type { UnitSeed } from "../../schema/pack";

/**
 * Reading Band 2 · More Sound Friends (letters N–Z)
 * Orton-Gillingham three-part drill (letter → keyword → sound) modeled
 * entirely through word anchors — never raw phonemes.
 * Lessons 1–2 each sweep all 13 letters (shuffled); lesson 3 is mixed
 * review with the hardest discriminations (n/m, u/v).
 * q, x, y use letter↔keyword formats only (see FUNDATIONS_MAP.md).
 */
export const soundFriendsNZ: UnitSeed = {
  id: "read-u-soundfriends-nz",
  bandId: "reading-b2",
  title: "More Sound Friends",
  icon: "🦓",
  lessons: [
    {
      id: "read-l-soundfriends-nz-1",
      title: "Meet the Sounds",
      primarySkillId: "read-letter-sounds",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-soundfriends-nz-1-01",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Nest starts with N! Which letter starts the word nest?",
            },
            options: [
              { id: "a", label: "S" },
              { id: "b", label: "R" },
              { id: "c", label: "N" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-soundfriends-nz-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which picture starts like pig?",
              spokenText: "Pig starts with P! Which picture starts like pig?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍕" } },
              { id: "b", visual: { kind: "emoji", value: "🐶" } },
              { id: "c", visual: { kind: "emoji", value: "🍌" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-soundfriends-nz-1-03",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each letter to its picture!",
              spokenText: "The letter Q is for queen, and V is for volcano! Tap each letter, then its picture.",
            },
            pairs: [
              { id: "p1", left: { label: "Q" }, right: { visual: { kind: "emoji", value: "👑" } } },
              { id: "p2", left: { label: "V" }, right: { visual: { kind: "emoji", value: "🌋" } } },
            ],
          },
        },
        {
          id: "read-e-soundfriends-nz-1-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Rainbow starts with R! Which letter starts the word rainbow?",
            },
            options: [
              { id: "a", label: "P" },
              { id: "b", label: "R" },
              { id: "c", label: "W" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-soundfriends-nz-1-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Turtle starts with T! Which picture starts like turtle?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🌮" } },
              { id: "b", visual: { kind: "emoji", value: "🐸" } },
              { id: "c", visual: { kind: "emoji", value: "🍎" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-soundfriends-nz-1-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each letter to its picture!",
              spokenText: "Yo-yo, zebra, and box! Tap each letter, then its picture. Remember, box ends with X!",
            },
            pairs: [
              { id: "p1", left: { label: "Y" }, right: { visual: { kind: "emoji", value: "🪀" } } },
              { id: "p2", left: { label: "Z" }, right: { visual: { kind: "emoji", value: "🦓" } } },
              { id: "p3", left: { label: "X" }, right: { visual: { kind: "emoji", value: "📦" } } },
            ],
          },
        },
        {
          id: "read-e-soundfriends-nz-1-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Umbrella starts with U! Which letter starts the word umbrella?",
            },
            options: [
              { id: "a", label: "O" },
              { id: "b", label: "W" },
              { id: "c", label: "U" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-soundfriends-nz-1-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each letter to its picture!",
              spokenText: "Tap a letter, then tap the picture whose name starts with that letter!",
            },
            pairs: [
              { id: "p1", left: { label: "S" }, right: { visual: { kind: "emoji", value: "🐍" } } },
              { id: "p2", left: { label: "O" }, right: { visual: { kind: "emoji", value: "🐙" } } },
              { id: "p3", left: { label: "W" }, right: { visual: { kind: "emoji", value: "🐋" } } },
            ],
          },
        },
      ],
    },
    {
      id: "read-l-soundfriends-nz-2",
      title: "Sound Practice",
      primarySkillId: "read-letter-sounds",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-soundfriends-nz-2-01",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each letter to its picture!",
              spokenText: "Tap a letter, then tap the picture whose name starts with that letter!",
            },
            pairs: [
              { id: "p1", left: { label: "N" }, right: { visual: { kind: "emoji", value: "👃" } } },
              { id: "p2", left: { label: "T" }, right: { visual: { kind: "emoji", value: "🚂" } } },
              { id: "p3", left: { label: "S" }, right: { visual: { kind: "emoji", value: "⭐" } } },
            ],
          },
        },
        {
          id: "read-e-soundfriends-nz-2-02",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Zebra starts with Z! Which letter starts the word zebra?",
            },
            options: [
              { id: "a", label: "S" },
              { id: "b", label: "Z" },
              { id: "c", label: "N" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-soundfriends-nz-2-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which picture starts like otter?",
              spokenText: "Otter starts with O! Which picture starts like otter?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍊" } },
              { id: "b", visual: { kind: "emoji", value: "🐝" } },
              { id: "c", visual: { kind: "emoji", value: "🚗" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-soundfriends-nz-2-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Yo-yo starts with Y! Which letter starts the word yo-yo?",
            },
            options: [
              { id: "a", label: "W" },
              { id: "b", label: "V" },
              { id: "c", label: "Y" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-soundfriends-nz-2-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Sun starts with S! Which picture starts like sun?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🧦" } },
              { id: "b", visual: { kind: "emoji", value: "🍇" } },
              { id: "c", visual: { kind: "emoji", value: "🍎" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-soundfriends-nz-2-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each letter to its picture!",
              spokenText: "Queen, box, and umbrella! Tap each letter, then its picture. Remember, box ends with X!",
            },
            pairs: [
              { id: "p1", left: { label: "Q" }, right: { visual: { kind: "emoji", value: "👑" } } },
              { id: "p2", left: { label: "X" }, right: { visual: { kind: "emoji", value: "📦" } } },
              { id: "p3", left: { label: "U" }, right: { visual: { kind: "emoji", value: "☂️" } } },
            ],
          },
        },
        {
          id: "read-e-soundfriends-nz-2-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Watermelon starts with W! Which letter starts the word watermelon?",
            },
            options: [
              { id: "a", label: "M" },
              { id: "b", label: "W" },
              { id: "c", label: "S" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-soundfriends-nz-2-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each letter to its picture!",
              spokenText: "Tap a letter, then tap the picture whose name starts with that letter!",
            },
            pairs: [
              { id: "p1", left: { label: "V" }, right: { visual: { kind: "emoji", value: "🌋" } } },
              { id: "p2", left: { label: "R" }, right: { visual: { kind: "emoji", value: "🤖" } } },
              { id: "p3", left: { label: "P" }, right: { visual: { kind: "emoji", value: "🐧" } } },
            ],
          },
        },
      ],
    },
    {
      id: "read-l-soundfriends-nz-3",
      title: "Sound Mix-Up",
      primarySkillId: "read-letter-sounds",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-soundfriends-nz-3-01",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Which letter starts the word nest?",
            },
            options: [
              { id: "a", label: "M" },
              { id: "b", label: "W" },
              { id: "c", label: "N" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-soundfriends-nz-3-02",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Which letter starts the word umbrella?",
            },
            options: [
              { id: "a", label: "V" },
              { id: "b", label: "U" },
              { id: "c", label: "W" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-soundfriends-nz-3-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which picture starts like nest?",
              spokenText: "Nest starts with N! Which picture starts like nest?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "👃" } },
              { id: "b", visual: { kind: "emoji", value: "🍌" } },
              { id: "c", visual: { kind: "emoji", value: "🚗" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-soundfriends-nz-3-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each letter to its picture!",
              spokenText: "Umbrella and volcano! Tap each letter, then its picture.",
            },
            pairs: [
              { id: "p1", left: { label: "U" }, right: { visual: { kind: "emoji", value: "☂️" } } },
              { id: "p2", left: { label: "V" }, right: { visual: { kind: "emoji", value: "🌋" } } },
            ],
          },
        },
        {
          id: "read-e-soundfriends-nz-3-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Which letter starts the word volcano?",
            },
            options: [
              { id: "a", label: "V" },
              { id: "b", label: "W" },
              { id: "c", label: "U" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-soundfriends-nz-3-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which picture starts like turtle?",
              spokenText: "Turtle starts with T! Which picture starts like turtle?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍩" } },
              { id: "b", visual: { kind: "emoji", value: "🐸" } },
              { id: "c", visual: { kind: "emoji", value: "🐯" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-soundfriends-nz-3-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Which letter ends the word box?",
            },
            options: [
              { id: "a", label: "K" },
              { id: "b", label: "X" },
              { id: "c", label: "S" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-soundfriends-nz-3-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each letter to its picture!",
              spokenText: "Queen, yo-yo, and zebra! Tap each letter, then its picture.",
            },
            pairs: [
              { id: "p1", left: { label: "Q" }, right: { visual: { kind: "emoji", value: "👑" } } },
              { id: "p2", left: { label: "Y" }, right: { visual: { kind: "emoji", value: "🪀" } } },
              { id: "p3", left: { label: "Z" }, right: { visual: { kind: "emoji", value: "🦓" } } },
            ],
          },
        },
      ],
    },
  ],
};
