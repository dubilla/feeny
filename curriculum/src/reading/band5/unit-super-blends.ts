import type { UnitSeed } from "../../schema/pack";

/**
 * Reading Band 5 · Super Blends
 * Follows Blend Blast (read-u-blends); does NOT reuse its words.
 * Lesson 1 introduces three-letter initial blends str, spl, scr, spr.
 * Lesson 2 teaches the digraph-blends shr and thr — ALWAYS spelled as
 *   letters in spokenText ("Shrimp starts with S-H-R!"), never raw phonemes.
 * Lesson 3 teaches final blends -nt, -sk, -ft (no -lk words).
 * Lesson 4 mixes L1–L3 with Blend Blast's blends (st, sn, sl, fl, pl, gr,
 *   tr, dr, cr, -st, -mp, -nd); as a review it never speaks the answer word
 *   nor spells the answer word — it names only the blend being tested.
 * fillBlankWordBank double-solve rule enforced: no second chip forms a real word.
 */
export const superBlends: UnitSeed = {
  id: "read-u-blends2",
  bandId: "reading-b5",
  title: "Super Blends",
  icon: "🦸",
  lessons: [
    {
      id: "read-l-blends2-1",
      title: "Three-Letter Blends",
      primarySkillId: "read-blends",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-blends2-1-01",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Street starts with S-T-R! Tap the word that starts like street.",
            },
            options: [
              { id: "a", label: "sap" },
              { id: "b", label: "strap" },
              { id: "c", label: "tap" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-blends2-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word starts with spl?",
              spokenText: "Which word starts with S-P-L? Sound each one out!",
            },
            options: [
              { id: "a", label: "splash" },
              { id: "b", label: "slash" },
              { id: "c", label: "sash" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-blends2-1-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "You watch your favorite shows on a screen! Which letters start the word screen?",
            },
            template: "___een 📺",
            bank: [
              { id: "a", label: "spr" },
              { id: "b", label: "scr" },
              { id: "c", label: "str" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-blends2-1-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word starts with spr?",
              spokenText: "Which word starts with S-P-R? Read each one out loud!",
            },
            options: [
              { id: "a", label: "sing" },
              { id: "b", label: "ring" },
              { id: "c", label: "spring" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-blends2-1-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "Cars drive down the street! Which letters start the word street?",
            },
            template: "___eet 🛣️",
            bank: [
              { id: "a", label: "scr" },
              { id: "b", label: "str" },
              { id: "c", label: "spr" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-blends2-1-06",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Sprout starts with S-P-R! Tap the word that starts like sprout.",
            },
            options: [
              { id: "a", label: "ray" },
              { id: "b", label: "pray" },
              { id: "c", label: "spray" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-blends2-1-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word starts with scr?",
              spokenText: "Which word starts with S-C-R? Sound them out!",
            },
            options: [
              { id: "a", label: "scrub" },
              { id: "b", label: "cub" },
              { id: "c", label: "rub" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-blends2-1-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Put the words in order to make a sentence! The capital letter goes first.",
            },
            items: [
              { id: "w1", label: "strong" },
              { id: "w2", label: "The" },
              { id: "w3", label: "spring" },
              { id: "w4", label: "is" },
            ],
            correctOrder: ["w2", "w3", "w4", "w1"],
          },
        },
      ],
    },
    {
      id: "read-l-blends2-2",
      title: "Blends with Sound Teams",
      primarySkillId: "read-blends",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-blends2-2-01",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Shrimp starts with S-H-R! Tap the word that starts like shrimp.",
            },
            options: [
              { id: "a", label: "ship" },
              { id: "b", label: "shrub" },
              { id: "c", label: "rub" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-blends2-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word starts with thr?",
              spokenText: "T, H, and R team up! Which word starts with T-H-R?",
            },
            options: [
              { id: "a", label: "three" },
              { id: "b", label: "tree" },
              { id: "c", label: "free" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-blends2-2-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "A tasty little shrimp! Which letters start the word shrimp?",
            },
            template: "___imp 🦐",
            bank: [
              { id: "a", label: "thr" },
              { id: "b", label: "shr" },
              { id: "c", label: "str" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-blends2-2-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word starts with thr?",
              spokenText: "Which word starts with T-H-R? Read each one carefully!",
            },
            options: [
              { id: "a", label: "row" },
              { id: "b", label: "tow" },
              { id: "c", label: "throw" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-blends2-2-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "The little green bush is a shrub! Which letters start the word shrub?",
            },
            template: "___ub 🌿",
            bank: [
              { id: "a", label: "shr" },
              { id: "b", label: "thr" },
              { id: "c", label: "str" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-blends2-2-06",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Three starts with T-H-R! Tap the word that starts like three.",
            },
            options: [
              { id: "a", label: "tree" },
              { id: "b", label: "thrill" },
              { id: "c", label: "till" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-blends2-2-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word starts with shr?",
              spokenText: "Which word starts with S-H-R? Sound each one out!",
            },
            options: [
              { id: "a", label: "shred" },
              { id: "b", label: "shed" },
              { id: "c", label: "sled" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-blends2-2-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "shrimp" }, right: { visual: { kind: "emoji", value: "🦐" } } },
              { id: "p2", left: { label: "three" }, right: { visual: { kind: "emoji", value: "3️⃣" } } },
            ],
          },
        },
      ],
    },
    {
      id: "read-l-blends2-3",
      title: "More Ending Blends",
      primarySkillId: "read-blends",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-blends2-3-01",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tent ends with N-T! Tap the word that ends like tent.",
            },
            options: [
              { id: "a", label: "ten" },
              { id: "b", label: "hunt" },
              { id: "c", label: "hut" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-blends2-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word ends with sk?",
              spokenText: "Which word ends with S-K? Read them all the way to the end!",
            },
            options: [
              { id: "a", label: "mask" },
              { id: "b", label: "mat" },
              { id: "c", label: "map" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-blends2-3-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "A present with a big bow — a gift! Which letters end the word gift?",
            },
            template: "gi___ 🎁",
            bank: [
              { id: "a", label: "nt" },
              { id: "b", label: "ft" },
              { id: "c", label: "sk" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-blends2-3-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word ends with nt?",
              spokenText: "Which word ends with N-T? Sound them out to the end!",
            },
            options: [
              { id: "a", label: "plan" },
              { id: "b", label: "plane" },
              { id: "c", label: "plant" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-blends2-3-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "You wear it over your face at a party! Which letters end the word mask?",
            },
            template: "ma___ 🎭",
            bank: [
              { id: "a", label: "sk" },
              { id: "b", label: "ft" },
              { id: "c", label: "nt" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-blends2-3-06",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Raft ends with F-T! Tap the word that ends like raft.",
            },
            options: [
              { id: "a", label: "rag" },
              { id: "b", label: "ran" },
              { id: "c", label: "lift" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-blends2-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word ends with nt?",
              spokenText: "Which word ends with N-T? Listen to the very end!",
            },
            options: [
              { id: "a", label: "ant" },
              { id: "b", label: "and" },
              { id: "c", label: "am" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-blends2-3-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Put the words in order to make a sentence! The capital letter goes first.",
            },
            items: [
              { id: "w1", label: "soft" },
              { id: "w2", label: "The" },
              { id: "w3", label: "is" },
              { id: "w4", label: "plant" },
            ],
            correctOrder: ["w2", "w4", "w3", "w1"],
          },
        },
      ],
    },
    {
      id: "read-l-blends2-4",
      title: "Blend Round-Up",
      primarySkillId: "read-blends",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-blends2-4-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word starts with shr?",
              spokenText: "Which word starts with S-H-R? Read each one carefully!",
            },
            options: [
              { id: "a", label: "shrub" },
              { id: "b", label: "shut" },
              { id: "c", label: "rub" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-blends2-4-02",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen for the end! Tap the word that ends like tent.",
            },
            options: [
              { id: "a", label: "hand" },
              { id: "b", label: "hunt" },
              { id: "c", label: "hut" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-blends2-4-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "What do you watch your favorite shows on? Finish the word!",
            },
            template: "___een 📺",
            bank: [
              { id: "a", label: "scr" },
              { id: "b", label: "spr" },
              { id: "c", label: "str" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-blends2-4-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word ends with sk?",
              spokenText: "Which word ends with S-K? Read all the way to the end!",
            },
            options: [
              { id: "a", label: "desk" },
              { id: "b", label: "dent" },
              { id: "c", label: "deck" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-blends2-4-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "Jump in the puddle and get wet! Finish the word!",
            },
            template: "___ash 💦",
            bank: [
              { id: "a", label: "spl" },
              { id: "b", label: "scr" },
              { id: "c", label: "str" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-blends2-4-06",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the picture whose name starts like grass.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍇" } },
              { id: "b", visual: { kind: "emoji", value: "🐌" } },
              { id: "c", visual: { kind: "emoji", value: "🚩" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-blends2-4-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word starts with dr?",
              spokenText: "Which word starts with D-R? Sound each one out!",
            },
            options: [
              { id: "a", label: "dip" },
              { id: "b", label: "rip" },
              { id: "c", label: "drip" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-blends2-4-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "mask" }, right: { visual: { kind: "emoji", value: "🎭" } } },
              { id: "p2", left: { label: "gift" }, right: { visual: { kind: "emoji", value: "🎁" } } },
              { id: "p3", left: { label: "tent" }, right: { visual: { kind: "emoji", value: "⛺" } } },
            ],
          },
        },
      ],
    },
  ],
};
