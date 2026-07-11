import type { UnitSeed } from "../../schema/pack";

/**
 * Reading Band 4 · Sing and Honk
 * Glued (welded) -ng and -nk families, taught as whole chunks — the sequel to
 * Sticky Sounds (all/am/an). Lesson 1 = -ing/-ang/-ong (+ light -ung).
 * Lesson 2 = -ink/-ank/-unk (+ light -onk); exercises 02–04 single-tap for the
 * future probe pool. Lesson 3 = word building (ng vs nk banks; every bank
 * substitution-tested, no -an/-am chips) plus the audible ear contrasts
 * (fan/fang, win/wing, sang/sank).
 */
export const singAndHonk: UnitSeed = {
  id: "read-u-gluedng",
  bandId: "reading-b4",
  title: "Sing and Honk",
  icon: "🪿",
  lessons: [
    {
      id: "read-l-gluedng-1",
      title: "Sing and Ring",
      primarySkillId: "read-glued",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-gluedng-1-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "King ends with I-N-G! Tap the word that ends like king." },
            options: [
              { id: "a", label: "win" },
              { id: "b", label: "wing" },
              { id: "c", label: "wig" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-gluedng-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word ends with ang?",
              spokenText: "Which word ends with A-N-G? Read them all the way to the end!",
            },
            options: [
              { id: "a", label: "bang" },
              { id: "b", label: "bat" },
              { id: "c", label: "bad" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-gluedng-1-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Sing ends with I-N-G! Tap the picture whose name ends like sing." },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🚌" } },
              { id: "b", visual: { kind: "emoji", value: "🐸" } },
              { id: "c", visual: { kind: "emoji", value: "💍" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-gluedng-1-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word ends with ong?",
              spokenText: "Which word ends with O-N-G? Sound each one out!",
            },
            options: [
              { id: "a", label: "log" },
              { id: "b", label: "long" },
              { id: "c", label: "lot" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-gluedng-1-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "wing" }, right: { visual: { kind: "emoji", value: "🪽" } } },
              { id: "p2", left: { label: "song" }, right: { visual: { kind: "emoji", value: "🎵" } } },
              { id: "p3", left: { label: "ring" }, right: { visual: { kind: "emoji", value: "💍" } } },
            ],
          },
        },
        {
          id: "read-e-gluedng-1-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Hung ends with U-N-G! Tap the word that ends like hung." },
            options: [
              { id: "a", label: "sung" },
              { id: "b", label: "sun" },
              { id: "c", label: "sub" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-gluedng-1-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word ends with ing?",
              spokenText: "Which word ends with I-N-G? Read them all the way to the end!",
            },
            options: [
              { id: "a", label: "kit" },
              { id: "b", label: "kid" },
              { id: "c", label: "king" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-gluedng-1-08",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Hang ends with A-N-G! Tap the word that ends like hang." },
            options: [
              { id: "a", label: "rag" },
              { id: "b", label: "rang" },
              { id: "c", label: "ran" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "read-l-gluedng-2",
      title: "Wink and Honk",
      primarySkillId: "read-glued",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-gluedng-2-01",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "drink" }, right: { visual: { kind: "emoji", value: "🥤" } } },
              { id: "p2", left: { label: "bank" }, right: { visual: { kind: "emoji", value: "🏦" } } },
              { id: "p3", left: { label: "pink" }, right: { visual: { kind: "emoji", value: "🩷" } } },
            ],
          },
        },
        {
          id: "read-e-gluedng-2-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Pink ends with I-N-K! Tap the word that ends like pink." },
            options: [
              { id: "a", label: "win" },
              { id: "b", label: "wink" },
              { id: "c", label: "wig" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-gluedng-2-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word ends with ank?",
              spokenText: "Which word ends with A-N-K? Read them all the way to the end!",
            },
            options: [
              { id: "a", label: "tap" },
              { id: "b", label: "tan" },
              { id: "c", label: "tank" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-gluedng-2-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Bunk ends with U-N-K! Tap the picture whose name ends like bunk." },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🦨" } },
              { id: "b", visual: { kind: "emoji", value: "🚗" } },
              { id: "c", visual: { kind: "emoji", value: "🍞" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-gluedng-2-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word ends with onk?",
              spokenText: "Which word ends with O-N-K? Sound each one out!",
            },
            options: [
              { id: "a", label: "honk" },
              { id: "b", label: "hop" },
              { id: "c", label: "hot" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-gluedng-2-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Thank ends with A-N-K! Tap the word that ends like thank." },
            options: [
              { id: "a", label: "bad" },
              { id: "b", label: "bag" },
              { id: "c", label: "bank" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-gluedng-2-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🥤 Which word matches the picture?",
              spokenText: "Look at the picture, then tap the word that names it!",
            },
            options: [
              { id: "a", label: "drip" },
              { id: "b", label: "drink" },
              { id: "c", label: "drum" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-gluedng-2-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Put the words in order to make a sentence! The capital letter goes first.",
            },
            items: [
              { id: "w1", label: "wink" },
              { id: "w2", label: "The" },
              { id: "w3", label: "can" },
              { id: "w4", label: "skunk" },
            ],
            correctOrder: ["w2", "w4", "w3", "w1"],
          },
        },
      ],
    },
    {
      id: "read-l-gluedng-3",
      title: "Ng or Nk?",
      primarySkillId: "read-glued",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-gluedng-3-01",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Build the word!",
              spokenText: "The king sits on a throne! Which letters finish the word king?",
            },
            template: "ki___",
            bank: [
              { id: "a", label: "ng" },
              { id: "b", label: "nk" },
              { id: "c", label: "sh" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-gluedng-3-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Listen close! Tap the word wing!" },
            options: [
              { id: "a", label: "win" },
              { id: "b", label: "wig" },
              { id: "c", label: "wing" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-gluedng-3-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Build the word!",
              spokenText: "Pee-yew, a stinky skunk! Which letters finish the word skunk?",
            },
            template: "sku___ 🦨",
            bank: [
              { id: "a", label: "ng" },
              { id: "b", label: "nk" },
              { id: "c", label: "ck" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-gluedng-3-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Listen close! Tap the word fang!" },
            options: [
              { id: "a", label: "fan" },
              { id: "b", label: "fin" },
              { id: "c", label: "fang" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-gluedng-3-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Build the word!",
              spokenText: "Feeny hums a happy song! Which letters finish the word song?",
            },
            template: "so___ 🎵",
            bank: [
              { id: "a", label: "ng" },
              { id: "b", label: "nk" },
              { id: "c", label: "ff" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-gluedng-3-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Build the word!",
              spokenText: "A cold drink on a hot day! Which letters finish the word drink?",
            },
            template: "dri___ 🥤",
            bank: [
              { id: "a", label: "ck" },
              { id: "b", label: "nk" },
              { id: "c", label: "ng" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-gluedng-3-07",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Listen close! Tap the word sank!" },
            options: [
              { id: "a", label: "sat" },
              { id: "b", label: "sank" },
              { id: "c", label: "sang" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-gluedng-3-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Put the words in order to make a sentence! The capital letter goes first.",
            },
            items: [
              { id: "w1", label: "sing" },
              { id: "w2", label: "king" },
              { id: "w3", label: "The" },
              { id: "w4", label: "can" },
            ],
            correctOrder: ["w3", "w2", "w4", "w1"],
          },
        },
      ],
    },
  ],
};
