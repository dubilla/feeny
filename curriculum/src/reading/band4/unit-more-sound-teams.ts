import type { UnitSeed } from "../../schema/pack";

/**
 * Reading Band 4 · More Sound Teams (F3)
 * Lesson 1 introduces wh at word starts — a SPELLING fact (wine–whine merger),
 *   so read-the-word / fill-blank / matching only; never ear-only wh vs w,
 *   never a bare "w" chip in a wh bank.
 * Lesson 2 teaches ck at word ends (the k sound after a short vowel).
 * Lesson 3 teaches bonus/floss endings ff, ll, ss — always spoken as letters
 *   ("Puff ends with F-F!"), never "double f".
 * Lesson 4 mixes wh/ck/ff/ll/ss with sh/ch/th review; asks without speaking
 *   the answer's spelling.
 */
export const moreSoundTeams: UnitSeed = {
  id: "read-u-digraphs2",
  bandId: "reading-b4",
  title: "More Sound Teams",
  icon: "🤝",
  lessons: [
    {
      id: "read-l-digraphs2-1",
      title: "The Wh Team",
      primarySkillId: "read-digraphs",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-digraphs2-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word starts with wh?",
              spokenText: "W and H team up at the start of some words. Which word starts with W-H?",
            },
            options: [
              { id: "a", label: "trip" },
              { id: "b", label: "lip" },
              { id: "c", label: "whip" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-digraphs2-1-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "Cats have whiskers on their face! Which letters start the word whisker?",
            },
            template: "___isker",
            bank: [
              { id: "a", label: "sh" },
              { id: "b", label: "wh" },
              { id: "c", label: "ch" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-digraphs2-1-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word starts with wh?",
              spokenText: "Look closely at the letters! Which word starts with W-H?",
            },
            options: [
              { id: "a", label: "whisk" },
              { id: "b", label: "wish" },
              { id: "c", label: "fish" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-digraphs2-1-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "white" }, right: { visual: { kind: "emoji", value: "⬜" } } },
              { id: "p2", left: { label: "wheat" }, right: { visual: { kind: "emoji", value: "🌾" } } },
              { id: "p3", left: { label: "whale" }, right: { visual: { kind: "emoji", value: "🐋" } } },
            ],
          },
        },
        {
          id: "read-e-digraphs2-1-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "Crack goes the whip! Which letters start the word whip?",
            },
            template: "___ip",
            bank: [
              { id: "a", label: "wh" },
              { id: "b", label: "sh" },
              { id: "c", label: "ch" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-digraphs2-1-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word starts with wh?",
              spokenText: "Sound each one out! Which word starts with W-H?",
            },
            options: [
              { id: "a", label: "chin" },
              { id: "b", label: "then" },
              { id: "c", label: "when" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-digraphs2-1-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "Tweet! You blow a whistle! Which letters start the word whistle?",
            },
            template: "___istle",
            bank: [
              { id: "a", label: "sh" },
              { id: "b", label: "wh" },
              { id: "c", label: "ch" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-digraphs2-1-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word starts with wh?",
              spokenText: "Read each one carefully! Which word starts with W-H?",
            },
            options: [
              { id: "a", label: "stiff" },
              { id: "b", label: "whiff" },
              { id: "c", label: "sniff" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "read-l-digraphs2-2",
      title: "The Ck Ending",
      primarySkillId: "read-digraphs",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-digraphs2-2-01",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Back ends with C-K! Tap the word that ends like back.",
            },
            options: [
              { id: "a", label: "kid" },
              { id: "b", label: "kick" },
              { id: "c", label: "kiss" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-digraphs2-2-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "A cozy sock! Which letters end the word sock?",
            },
            template: "so___ 🧦",
            bank: [
              { id: "a", label: "ck" },
              { id: "b", label: "sh" },
              { id: "c", label: "th" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-digraphs2-2-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word ends with ck?",
              spokenText: "Which word ends with C-K? Read them all the way to the end!",
            },
            options: [
              { id: "a", label: "pat" },
              { id: "b", label: "pan" },
              { id: "c", label: "pack" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-digraphs2-2-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen for the end! Tap the picture whose name ends like kick.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🔒" } },
              { id: "b", visual: { kind: "emoji", value: "🐝" } },
              { id: "c", visual: { kind: "emoji", value: "🍋" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-digraphs2-2-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "Beep beep, a big truck! Which letters end the word truck?",
            },
            template: "tru___ 🚚",
            bank: [
              { id: "a", label: "ll" },
              { id: "b", label: "ck" },
              { id: "c", label: "ss" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-digraphs2-2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word ends with ck?",
              spokenText: "Sound them out to the very end! Which word ends with C-K?",
            },
            options: [
              { id: "a", label: "nap" },
              { id: "b", label: "neck" },
              { id: "c", label: "net" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-digraphs2-2-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "clock" }, right: { visual: { kind: "emoji", value: "🕐" } } },
              { id: "p2", left: { label: "chick" }, right: { visual: { kind: "emoji", value: "🐥" } } },
              { id: "p3", left: { label: "brick" }, right: { visual: { kind: "emoji", value: "🧱" } } },
            ],
          },
        },
        {
          id: "read-e-digraphs2-2-08",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "You kick a ball with your foot! Which letters end the word kick?",
            },
            template: "ki___",
            bank: [
              { id: "a", label: "sh" },
              { id: "b", label: "th" },
              { id: "c", label: "ck" },
            ],
            correctChipId: "c",
          },
        },
      ],
    },
    {
      id: "read-l-digraphs2-3",
      title: "Bonus Letters",
      primarySkillId: "read-digraphs",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-digraphs2-3-01",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Puff ends with F-F! Tap the word that ends like puff.",
            },
            options: [
              { id: "a", label: "huff" },
              { id: "b", label: "hum" },
              { id: "c", label: "hut" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-digraphs2-3-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "Ding dong, a bell! Which letters end the word bell?",
            },
            template: "be___ 🔔",
            bank: [
              { id: "a", label: "ff" },
              { id: "b", label: "ss" },
              { id: "c", label: "ll" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-digraphs2-3-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word ends with ss?",
              spokenText: "Which word ends with S-S? Read them all the way to the end!",
            },
            options: [
              { id: "a", label: "kit" },
              { id: "b", label: "kiss" },
              { id: "c", label: "kid" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-digraphs2-3-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "doll" }, right: { visual: { kind: "emoji", value: "🪆" } } },
              { id: "p2", left: { label: "grass" }, right: { visual: { kind: "emoji", value: "🌿" } } },
              { id: "p3", left: { label: "bell" }, right: { visual: { kind: "emoji", value: "🔔" } } },
            ],
          },
        },
        {
          id: "read-e-digraphs2-3-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "A fancy dress! Which letters end the word dress?",
            },
            template: "dre___ 👗",
            bank: [
              { id: "a", label: "ll" },
              { id: "b", label: "ss" },
              { id: "c", label: "ff" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-digraphs2-3-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word ends with ll?",
              spokenText: "Which word ends with L-L? Sound them out!",
            },
            options: [
              { id: "a", label: "web" },
              { id: "b", label: "wet" },
              { id: "c", label: "well" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-digraphs2-3-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen for the end! Tap the picture whose name ends like hiss.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "👗" } },
              { id: "b", visual: { kind: "emoji", value: "🚗" } },
              { id: "c", visual: { kind: "emoji", value: "🐢" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-digraphs2-3-08",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "A tall, rocky cliff! Which letters end the word cliff?",
            },
            template: "cli___",
            bank: [
              { id: "a", label: "ff" },
              { id: "b", label: "ss" },
              { id: "c", label: "th" },
            ],
            correctChipId: "a",
          },
        },
      ],
    },
    {
      id: "read-l-digraphs2-4",
      title: "Sound Team Mix-Up",
      primarySkillId: "read-digraphs",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-digraphs2-4-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word starts with wh?",
              spokenText: "Look closely at the letters! Which word starts with W-H?",
            },
            options: [
              { id: "a", label: "wish" },
              { id: "b", label: "which" },
              { id: "c", label: "witch" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-digraphs2-4-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "Your neck holds up your head! Which letters end the word neck?",
            },
            template: "ne___",
            bank: [
              { id: "a", label: "ck" },
              { id: "b", label: "sh" },
              { id: "c", label: "th" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-digraphs2-4-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen for the end! Tap the word that ends like pick.",
            },
            options: [
              { id: "a", label: "rash" },
              { id: "b", label: "rat" },
              { id: "c", label: "rack" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-digraphs2-4-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "peach" }, right: { visual: { kind: "emoji", value: "🍑" } } },
              { id: "p2", left: { label: "grass" }, right: { visual: { kind: "emoji", value: "🌿" } } },
              { id: "p3", left: { label: "truck" }, right: { visual: { kind: "emoji", value: "🚚" } } },
            ],
          },
        },
        {
          id: "read-e-digraphs2-4-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word ends with ff?",
              spokenText: "Which word ends with F-F? Read them all the way to the end!",
            },
            options: [
              { id: "a", label: "still" },
              { id: "b", label: "stiff" },
              { id: "c", label: "stir" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-digraphs2-4-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "Snow is white! Which letters start the word white?",
            },
            template: "___ite",
            bank: [
              { id: "a", label: "th" },
              { id: "b", label: "ch" },
              { id: "c", label: "wh" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-digraphs2-4-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen for the end! Tap the word that ends like fish.",
            },
            options: [
              { id: "a", label: "wish" },
              { id: "b", label: "wick" },
              { id: "c", label: "will" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-digraphs2-4-08",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "You smell with your nose! Which letters end the word smell?",
            },
            template: "sme___",
            bank: [
              { id: "a", label: "ck" },
              { id: "b", label: "ll" },
              { id: "c", label: "sh" },
            ],
            correctChipId: "b",
          },
        },
      ],
    },
  ],
};
