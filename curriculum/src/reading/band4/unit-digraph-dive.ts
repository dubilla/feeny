import type { UnitSeed } from "../../schema/pack";

/**
 * Reading Band 4 · Digraph Dive
 * Lesson 1 introduces sh (start and end of words).
 * Lesson 2 adds ch and th.
 * Lesson 3 mixes all three plus a wh/ck stretch.
 */
export const digraphDive: UnitSeed = {
  id: "read-u-digraphs",
  bandId: "reading-b4",
  title: "Digraph Dive",
  icon: "🤿",
  lessons: [
    {
      id: "read-l-digraphs-1",
      title: "The Sh Sound",
      primarySkillId: "read-digraphs",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-digraphs-1-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Shark starts with S-H! Tap the word that starts like shark." },
            options: [
              { id: "a", label: "sip" },
              { id: "b", label: "ship" },
              { id: "c", label: "hip" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-digraphs-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word starts with sh?",
              spokenText: "Which word starts with S-H? Sound each one out!",
            },
            options: [
              { id: "a", label: "shop" },
              { id: "b", label: "stop" },
              { id: "c", label: "top" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-digraphs-1-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "A big ship! Which letters start the word ship?",
            },
            template: "___ip 🚢",
            bank: [
              { id: "a", label: "th" },
              { id: "b", label: "fr" },
              { id: "c", label: "sh" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-digraphs-1-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "fish" }, right: { visual: { kind: "emoji", value: "🐟" } } },
              { id: "p2", left: { label: "shirt" }, right: { visual: { kind: "emoji", value: "👕" } } },
              { id: "p3", left: { label: "shell" }, right: { visual: { kind: "emoji", value: "🐚" } } },
            ],
          },
        },
        {
          id: "read-e-digraphs-1-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word ends with sh?",
              spokenText: "Which word ends with S-H? Read them all the way to the end!",
            },
            options: [
              { id: "a", label: "dish" },
              { id: "b", label: "dip" },
              { id: "c", label: "kid" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-digraphs-1-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Sheep starts with S-H! Tap the picture that starts like sheep." },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🌳" } },
              { id: "b", visual: { kind: "emoji", value: "🧀" } },
              { id: "c", visual: { kind: "emoji", value: "🦈" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-digraphs-1-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "You brush your teeth with it! Which letters end the word brush?",
            },
            template: "bru___ 🪥",
            bank: [
              { id: "a", label: "ch" },
              { id: "b", label: "sh" },
              { id: "c", label: "st" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-digraphs-1-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Put the words in order to make a sentence! The capital letter goes first.",
            },
            items: [
              { id: "w1", label: "big" },
              { id: "w2", label: "The" },
              { id: "w3", label: "is" },
              { id: "w4", label: "ship" },
            ],
            correctOrder: ["w2", "w4", "w3", "w1"],
          },
        },
      ],
    },
    {
      id: "read-l-digraphs-2",
      title: "Ch and Th",
      primarySkillId: "read-digraphs",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-digraphs-2-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Cheese starts with C-H! Tap the word that starts like cheese." },
            options: [
              { id: "a", label: "chip" },
              { id: "b", label: "ship" },
              { id: "c", label: "dip" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-digraphs-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word starts with ch?",
              spokenText: "Which word starts with C-H? Sound each one out!",
            },
            options: [
              { id: "a", label: "kick" },
              { id: "b", label: "chick" },
              { id: "c", label: "sick" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-digraphs-2-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "Yum, cheese! Which letters start the word cheese?",
            },
            template: "___eese 🧀",
            bank: [
              { id: "a", label: "sh" },
              { id: "b", label: "th" },
              { id: "c", label: "ch" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-digraphs-2-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "chick" }, right: { visual: { kind: "emoji", value: "🐥" } } },
              { id: "p2", left: { label: "cherry" }, right: { visual: { kind: "emoji", value: "🍒" } } },
              { id: "p3", left: { label: "thumb" }, right: { visual: { kind: "emoji", value: "👍" } } },
            ],
          },
        },
        {
          id: "read-e-digraphs-2-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word starts with th?",
              spokenText: "Which word starts with T-H? Sound them out!",
            },
            options: [
              { id: "a", label: "tin" },
              { id: "b", label: "thin" },
              { id: "c", label: "fin" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-digraphs-2-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Listen for the end! Tap the word that ends with T-H." },
            options: [
              { id: "a", label: "bat" },
              { id: "b", label: "ban" },
              { id: "c", label: "bath" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-digraphs-2-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "You brush these every night! Which letters end the word teeth?",
            },
            template: "tee___ 🦷",
            bank: [
              { id: "a", label: "th" },
              { id: "b", label: "ch" },
              { id: "c", label: "sh" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-digraphs-2-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Put the words in order to make a sentence! The capital letter goes first.",
            },
            items: [
              { id: "w1", label: "is" },
              { id: "w2", label: "little" },
              { id: "w3", label: "The" },
              { id: "w4", label: "chick" },
            ],
            correctOrder: ["w3", "w4", "w1", "w2"],
          },
        },
      ],
    },
    {
      id: "read-l-digraphs-3",
      title: "Digraph Mix-Up",
      primarySkillId: "read-digraphs",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-digraphs-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word starts with wh?",
              spokenText: "New sound! W and H together make one sound, like in wheel. Which word starts with W-H?",
            },
            options: [
              { id: "a", label: "whale" },
              { id: "b", label: "wave" },
              { id: "c", label: "well" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-digraphs-3-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "Quack, quack! Which letters end the word duck?",
            },
            template: "du___ 🦆",
            bank: [
              { id: "a", label: "sh" },
              { id: "b", label: "ck" },
              { id: "c", label: "th" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-digraphs-3-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Cheese starts with C-H! Tap the word that starts like cheese." },
            options: [
              { id: "a", label: "shin" },
              { id: "b", label: "thin" },
              { id: "c", label: "chin" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-digraphs-3-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "whale" }, right: { visual: { kind: "emoji", value: "🐋" } } },
              { id: "p2", left: { label: "sock" }, right: { visual: { kind: "emoji", value: "🧦" } } },
              { id: "p3", left: { label: "shark" }, right: { visual: { kind: "emoji", value: "🦈" } } },
            ],
          },
        },
        {
          id: "read-e-digraphs-3-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word ends with ck?",
              spokenText: "Which word ends with ck? Read them all the way to the end!",
            },
            options: [
              { id: "a", label: "rot" },
              { id: "b", label: "rock" },
              { id: "c", label: "rod" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-digraphs-3-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "It goes round and round! Which letters start the word wheel?",
            },
            template: "___eel 🛞",
            bank: [
              { id: "a", label: "wh" },
              { id: "b", label: "sh" },
              { id: "c", label: "ch" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-digraphs-3-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen for the end! Tap the picture whose name ends with S-H.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐟" } },
              { id: "b", visual: { kind: "emoji", value: "🌳" } },
              { id: "c", visual: { kind: "emoji", value: "🦆" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-digraphs-3-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Put the words in order to make a sentence! The capital letter goes first.",
            },
            items: [
              { id: "w1", label: "can" },
              { id: "w2", label: "quack" },
              { id: "w3", label: "The" },
              { id: "w4", label: "duck" },
            ],
            correctOrder: ["w3", "w4", "w1", "w2"],
          },
        },
      ],
    },
  ],
};
