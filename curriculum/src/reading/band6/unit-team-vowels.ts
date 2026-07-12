import type { UnitSeed } from "../../schema/pack";

/**
 * Reading Band 6 · Team Vowels (F6, decoding-middle)
 * Two vowels team up to make one long sound (rain, tree, boat). Decisions of
 * record (violating any is a failure — see FUNDATIONS_MAP.md "F6"):
 *   - ai/ay and ee/ea are HOMOPHONES by ear: never ask a kid to pick between
 *     the two spellings of a team by listening. Spelling contrasts are
 *     read-the-word / fill-blank ONLY. Teams are spelled as letters when
 *     teaching ("Which word has the A-I team?"), but never named when they
 *     are the fill answer (that would leak the chip).
 *   - ow = long-o ONLY (snow, grow, bow, row, yellow). cow/now/down/how/owl
 *     NEVER appear, not even as distractors. ea = long-e ONLY: bread/head
 *     NEVER appear.
 *   - Cross-unit homophones (road/rode, made/maid, tail/tale, meet/meat) are
 *     avoided entirely; any silent-e-vs-team contrast would be read/fill only.
 *   - No fill bank may hold two chips that both make a real word in the blank
 *     (every bank below is double-solve checked).
 * L4 is mixed review and asks WITHOUT ever speaking the team spelling or the
 *   answer word — picture recognition, rhyme, and cloze only.
 */
export const teamVowels: UnitSeed = {
  id: "read-u-vowelteams",
  bandId: "reading-b6",
  title: "Team Vowels",
  icon: "🌈",
  lessons: [
    {
      id: "read-l-vowelteams-1",
      title: "AI and AY",
      primarySkillId: "read-vowel-teams",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-vowelteams-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word has A-I?",
              spokenText: "One of these words hides the A-I team. Which word has A-I?",
            },
            options: [
              { id: "a", label: "rain" },
              { id: "b", label: "ran" },
              { id: "c", label: "run" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-vowelteams-1-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "A slow little snail carries its shell! Which letters finish its name?",
            },
            template: "sn___l 🐌",
            bank: [
              { id: "a", label: "ai" },
              { id: "b", label: "oa" },
              { id: "c", label: "ee" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-vowelteams-1-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word? 🎨",
              spokenText: "Which word names what you do with a brush and lots of colors?",
            },
            options: [
              { id: "a", label: "pant" },
              { id: "b", label: "plant" },
              { id: "c", label: "paint" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-vowelteams-1-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the picture whose name rhymes with rain.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🚂" } },
              { id: "b", visual: { kind: "emoji", value: "🐱" } },
              { id: "c", visual: { kind: "emoji", value: "🌙" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-vowelteams-1-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word has A-Y?",
              spokenText: "One of these words ends with the A-Y team. Which word has A-Y?",
            },
            options: [
              { id: "a", label: "plan" },
              { id: "b", label: "play" },
              { id: "c", label: "plum" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-vowelteams-1-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "Horses munch on dry, golden hay! Which letters finish the word?",
            },
            template: "h___ 🌾",
            bank: [
              { id: "a", label: "oa" },
              { id: "b", label: "ay" },
              { id: "c", label: "ee" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-vowelteams-1-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the picture whose name rhymes with whale.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍎" } },
              { id: "b", visual: { kind: "emoji", value: "🐌" } },
              { id: "c", visual: { kind: "emoji", value: "🐝" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-vowelteams-1-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "rain" }, right: { visual: { kind: "emoji", value: "🌧️" } } },
              { id: "p2", left: { label: "snail" }, right: { visual: { kind: "emoji", value: "🐌" } } },
              { id: "p3", left: { label: "paint" }, right: { visual: { kind: "emoji", value: "🎨" } } },
            ],
          },
        },
      ],
    },
    {
      id: "read-l-vowelteams-2",
      title: "EE and EA",
      primarySkillId: "read-vowel-teams",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-vowelteams-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word has E-E?",
              spokenText: "One of these words hides the E-E team. Which word has E-E?",
            },
            options: [
              { id: "a", label: "tree" },
              { id: "b", label: "try" },
              { id: "c", label: "trip" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-vowelteams-2-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "Baa! A woolly sheep in the field! Which letters finish the word?",
            },
            template: "sh___p 🐑",
            bank: [
              { id: "a", label: "ee" },
              { id: "b", label: "ai" },
              { id: "c", label: "oa" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-vowelteams-2-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word? 🦭",
              spokenText: "Which word names this animal that swims and claps?",
            },
            options: [
              { id: "a", label: "sell" },
              { id: "b", label: "seal" },
              { id: "c", label: "sail" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-vowelteams-2-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the picture whose name rhymes with bee.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🌳" } },
              { id: "b", visual: { kind: "emoji", value: "🐱" } },
              { id: "c", visual: { kind: "emoji", value: "🌙" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-vowelteams-2-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "A sweet, fuzzy peach to eat! Which letters finish the word?",
            },
            template: "p___ch 🍑",
            bank: [
              { id: "a", label: "ee" },
              { id: "b", label: "ea" },
              { id: "c", label: "ai" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-vowelteams-2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word? 🦶",
              spokenText: "Which word names the two things at the bottom of your legs?",
            },
            options: [
              { id: "a", label: "fit" },
              { id: "b", label: "fat" },
              { id: "c", label: "feet" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-vowelteams-2-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the picture whose name rhymes with tree.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐝" } },
              { id: "b", visual: { kind: "emoji", value: "🐟" } },
              { id: "c", visual: { kind: "emoji", value: "🚗" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-vowelteams-2-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "leaf" }, right: { visual: { kind: "emoji", value: "🍃" } } },
              { id: "p2", left: { label: "peach" }, right: { visual: { kind: "emoji", value: "🍑" } } },
              { id: "p3", left: { label: "tree" }, right: { visual: { kind: "emoji", value: "🌳" } } },
            ],
          },
        },
      ],
    },
    {
      id: "read-l-vowelteams-3",
      title: "OA and OW",
      primarySkillId: "read-vowel-teams",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-vowelteams-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word has O-A?",
              spokenText: "One of these words hides the O-A team. Which word has O-A?",
            },
            options: [
              { id: "a", label: "boat" },
              { id: "b", label: "bat" },
              { id: "c", label: "bit" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-vowelteams-3-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "A goat with curvy horns climbs the hill! Which letters finish the word?",
            },
            template: "g___t 🐐",
            bank: [
              { id: "a", label: "oa" },
              { id: "b", label: "ow" },
              { id: "c", label: "ee" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-vowelteams-3-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word? 🧼",
              spokenText: "Which word names what you scrub with to get clean and bubbly?",
            },
            options: [
              { id: "a", label: "sop" },
              { id: "b", label: "soap" },
              { id: "c", label: "sip" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-vowelteams-3-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the picture whose name rhymes with boat.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐐" } },
              { id: "b", visual: { kind: "emoji", value: "🐟" } },
              { id: "c", visual: { kind: "emoji", value: "🍎" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-vowelteams-3-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "Cold white snow falls softly in winter! Which letters finish the word?",
            },
            template: "sn___ ❄️",
            bank: [
              { id: "a", label: "oa" },
              { id: "b", label: "ow" },
              { id: "c", label: "ai" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-vowelteams-3-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word? 🌱",
              spokenText: "Which word means to get bigger, like a little plant does?",
            },
            options: [
              { id: "a", label: "grab" },
              { id: "b", label: "grip" },
              { id: "c", label: "grow" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-vowelteams-3-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the picture whose name rhymes with grow.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐝" } },
              { id: "b", visual: { kind: "emoji", value: "❄️" } },
              { id: "c", visual: { kind: "emoji", value: "🚗" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-vowelteams-3-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "boat" }, right: { visual: { kind: "emoji", value: "⛵" } } },
              { id: "p2", left: { label: "soap" }, right: { visual: { kind: "emoji", value: "🧼" } } },
              { id: "p3", left: { label: "yellow" }, right: { visual: { kind: "emoji", value: "💛" } } },
            ],
          },
        },
      ],
    },
    {
      id: "read-l-vowelteams-4",
      title: "Vowel Team Round-Up",
      primarySkillId: "read-vowel-teams",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-vowelteams-4-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word? 🌧️",
              spokenText: "Which word names the water that falls from grey clouds?",
            },
            options: [
              { id: "a", label: "rain" },
              { id: "b", label: "ran" },
              { id: "c", label: "rid" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-vowelteams-4-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "A tall, leafy tree in the park! Which letters finish the word?",
            },
            template: "tr___ 🌳",
            bank: [
              { id: "a", label: "ai" },
              { id: "b", label: "ee" },
              { id: "c", label: "oa" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-vowelteams-4-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word? ⛵",
              spokenText: "Which word names the thing that floats and sails on the water?",
            },
            options: [
              { id: "a", label: "bat" },
              { id: "b", label: "boat" },
              { id: "c", label: "bit" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-vowelteams-4-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the picture whose name rhymes with tree.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐝" } },
              { id: "b", visual: { kind: "emoji", value: "🐱" } },
              { id: "c", visual: { kind: "emoji", value: "🌙" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-vowelteams-4-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the word!",
              spokenText: "A slow snail leaves a shiny trail! Which letters finish its name?",
            },
            template: "sn___l 🐌",
            bank: [
              { id: "a", label: "ai" },
              { id: "b", label: "oa" },
              { id: "c", label: "ee" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-vowelteams-4-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word? ❄️",
              spokenText: "Which word names the soft white flakes that fall in winter?",
            },
            options: [
              { id: "a", label: "snap" },
              { id: "b", label: "snip" },
              { id: "c", label: "snow" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-vowelteams-4-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the picture whose name rhymes with boat.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐐" } },
              { id: "b", visual: { kind: "emoji", value: "🍎" } },
              { id: "c", visual: { kind: "emoji", value: "🐟" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-vowelteams-4-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each word to its picture!",
              spokenText: "Read each word, then tap its picture!",
            },
            pairs: [
              { id: "p1", left: { label: "peach" }, right: { visual: { kind: "emoji", value: "🍑" } } },
              { id: "p2", left: { label: "snow" }, right: { visual: { kind: "emoji", value: "❄️" } } },
              { id: "p3", left: { label: "goat" }, right: { visual: { kind: "emoji", value: "🐐" } } },
            ],
          },
        },
      ],
    },
  ],
};
