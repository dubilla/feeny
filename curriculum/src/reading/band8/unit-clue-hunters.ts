import type { UnitSeed } from "../../schema/pack";

/**
 * Reading Band 8 · Clue Hunters
 * Top-band inference: read a 2–3 sentence passage and figure out the
 * UNSTATED fact from its clues. The passage lives in prompt.text (reading it
 * is the point); spokenText reads the passage aloud then asks the question so
 * a slower reader can still play. L1 = one strong clue, L2 = combine two
 * clues, L3 = trickier (the obvious surface answer is a tempting distractor).
 */
export const clueHunters: UnitSeed = {
  id: "read-u-cluehunt",
  bandId: "reading-b8",
  title: "Clue Hunters",
  icon: "🧭",
  lessons: [
    {
      id: "read-l-cluehunt-1",
      title: "One Big Clue",
      primarySkillId: "read-inference",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-cluehunt-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Maya shook her wet umbrella by the door.\nShe hung up her dripping coat.\n\nWhat is the weather like?",
              spokenText:
                "Maya shook her wet umbrella by the door. She hung up her dripping coat. Be a clue hunter — what is the weather like?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "☀️" }, label: "sunny" },
              { id: "b", visual: { kind: "emoji", value: "🌧️" }, label: "rainy" },
              { id: "c", visual: { kind: "emoji", value: "❄️" }, label: "snowy" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-cluehunt-1-02",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "Ben put on his mittens, a woolly hat, and a thick scarf before he went outside. What is the weather like?",
            },
            options: [
              { id: "a", label: "cold" },
              { id: "b", label: "hot" },
              { id: "c", label: "rainy" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-cluehunt-1-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Every plate on the table was empty.\nEveryone rubbed their full tummies and smiled.\n\nWhat just happened?",
              spokenText:
                "Every plate on the table was empty. Everyone rubbed their full tummies and smiled. What just happened?",
            },
            options: [
              { id: "a", label: "they just woke up" },
              { id: "b", label: "they finished eating" },
              { id: "c", label: "they went swimming" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-cluehunt-1-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Sara tiptoed past the baby's room.\nShe put one finger to her lips.\n\nWhat does Sara want?",
              spokenText:
                "Sara tiptoed past the baby's room. She put one finger to her lips. What does Sara want?",
            },
            options: [
              { id: "a", label: "to be quiet" },
              { id: "b", label: "to run fast" },
              { id: "c", label: "to sing loudly" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-cluehunt-1-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "The sand was hot and the waves were blue.\nKids built castles near the water.\n\nWhere are they?",
              spokenText:
                "The sand was hot and the waves were blue. Kids built castles near the water. Where are they? Finish the sentence!",
            },
            template: "They are at the ___.",
            bank: [
              { id: "a", label: "beach" },
              { id: "b", label: "zoo" },
              { id: "c", label: "farm" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-cluehunt-1-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Grandpa put on his glasses and opened a thick book.\nHe turned the pages slowly.\n\nWhat is Grandpa doing?",
              spokenText:
                "Grandpa put on his glasses and opened a thick book. He turned the pages slowly. What is Grandpa doing?",
            },
            options: [
              { id: "a", label: "cooking" },
              { id: "b", label: "reading" },
              { id: "c", label: "sleeping" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-cluehunt-1-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each clue to what it tells you!",
              spokenText: "Clue hunter time! Tap a clue, then tap what it tells you.",
            },
            pairs: [
              { id: "p1", left: { label: "a wet umbrella" }, right: { label: "it rained" } },
              { id: "p2", left: { label: "warm mittens" }, right: { label: "it is cold" } },
              { id: "p3", left: { label: "a sun hat" }, right: { label: "it is sunny" } },
            ],
          },
        },
        {
          id: "read-e-cluehunt-1-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "The dog wagged its tail and ran to the front door with its leash in its mouth. What does the dog want?",
            },
            options: [
              { id: "a", label: "to take a nap" },
              { id: "b", label: "to go for a walk" },
              { id: "c", label: "to hide" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "read-l-cluehunt-2",
      title: "Two Clues Together",
      primarySkillId: "read-inference",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-cluehunt-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Jia zipped up her backpack and waved goodbye to Mom.\nThe big yellow bus honked outside.\n\nWhere is Jia going?",
              spokenText:
                "Jia zipped up her backpack and waved goodbye to Mom. The big yellow bus honked outside. Put the two clues together — where is Jia going?",
            },
            options: [
              { id: "a", label: "to school" },
              { id: "b", label: "to the beach" },
              { id: "c", label: "to bed" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-cluehunt-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The lights were off and everyone hid behind the couch.\nA cake with candles waited on the table.\n\nWhat is about to happen?",
              spokenText:
                "The lights were off and everyone hid behind the couch. A cake with candles waited on the table. What is about to happen?",
            },
            options: [
              { id: "a", label: "a quiet nap" },
              { id: "b", label: "a surprise party" },
              { id: "c", label: "a rainstorm" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-cluehunt-2-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "Leo grabbed his glove and his bat. He ran to the field where his teammates were waiting. What is Leo about to do?",
            },
            options: [
              { id: "a", label: "play baseball" },
              { id: "b", label: "go swimming" },
              { id: "c", label: "take a nap" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-cluehunt-2-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "There were muddy paw prints across the floor.\nA plant lay knocked over, and Rex wagged his tail and looked guilty.\n\nWho made the mess?",
              spokenText:
                "There were muddy paw prints across the floor. A plant lay knocked over, and Rex wagged his tail and looked guilty. Who made the mess?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "👶" }, label: "the baby" },
              { id: "b", visual: { kind: "emoji", value: "🌬️" }, label: "the wind" },
              { id: "c", visual: { kind: "emoji", value: "🐕" }, label: "the dog" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-cluehunt-2-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "Emma packed a towel and her goggles and pulled on her swimsuit. She could hear splashing nearby. Where is Emma going?",
            },
            options: [
              { id: "a", label: "to school" },
              { id: "b", label: "to the pool" },
              { id: "c", label: "to the store" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-cluehunt-2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The sky turned dark grey and the wind began to howl.\nPeople rushed inside and slammed their windows shut.\n\nWhat is about to happen?",
              spokenText:
                "The sky turned dark grey and the wind began to howl. People rushed inside and slammed their windows shut. What is about to happen?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "☀️" }, label: "a sunny day" },
              { id: "b", visual: { kind: "emoji", value: "🎂" }, label: "a bake sale" },
              { id: "c", visual: { kind: "emoji", value: "⛈️" }, label: "a storm" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-cluehunt-2-07",
          type: "ordering",
          payload: {
            prompt: {
              text: "Put the story in order!",
              spokenText:
                "These three things happened to grow a flower. Put them in the right order, from first to last.",
            },
            items: [
              { id: "w1", label: "plant the seed" },
              { id: "w2", label: "water it each day" },
              { id: "w3", label: "a flower blooms" },
            ],
            correctOrder: ["w1", "w2", "w3"],
          },
        },
        {
          id: "read-e-cluehunt-2-08",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Kim's teammates lifted her onto their shoulders and cheered.\nShe held a shiny gold trophy over her head.\n\nWhat happened?",
              spokenText:
                "Kim's teammates lifted her onto their shoulders and cheered. She held a shiny gold trophy over her head. What happened? Finish the sentence!",
            },
            template: "Kim's team ___ the game.",
            bank: [
              { id: "a", label: "won" },
              { id: "b", label: "slept through" },
              { id: "c", label: "lost" },
            ],
            correctChipId: "a",
          },
        },
      ],
    },
    {
      id: "read-l-cluehunt-3",
      title: "Tricky Clues",
      primarySkillId: "read-inference",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-cluehunt-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The bowl on the floor was licked completely clean.\nWhiskers was curled up right beside it, purring.\n\nWho ate the food?",
              spokenText:
                "The bowl on the floor was licked completely clean. Whiskers was curled up right beside it, purring. Careful — who really ate the food?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐈" }, label: "the cat" },
              { id: "b", visual: { kind: "emoji", value: "🐕" }, label: "the dog" },
              { id: "c", visual: { kind: "emoji", value: "🐦" }, label: "the bird" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-cluehunt-3-02",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "Sam's shirt was soaked and water dripped from his hair. But there was not a single cloud in the whole sky. What made Sam wet?",
            },
            options: [
              { id: "a", label: "the rain" },
              { id: "b", label: "the swimming pool" },
              { id: "c", label: "the snow" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-cluehunt-3-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The clock said eight and it was dark outside.\nDad poured a bowl of cereal, and the birds were still fast asleep.\n\nWhat time of day is it?",
              spokenText:
                "The clock said eight and it was dark outside. Dad poured a bowl of cereal, and the birds were still fast asleep. Don't be fooled — what time of day is it?",
            },
            options: [
              { id: "a", label: "the middle of the night" },
              { id: "b", label: "early morning" },
              { id: "c", label: "the middle of the day" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-cluehunt-3-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Nina wore a big puffy coat and her breath made little clouds.\nShe licked a melting ice cream cone as she walked.\n\nWhat is the weather like?",
              spokenText:
                "Nina wore a big puffy coat and her breath made little clouds in the air. She licked a melting ice cream cone as she walked. What is the weather really like?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🔥" }, label: "hot" },
              { id: "b", visual: { kind: "emoji", value: "🌧️" }, label: "rainy" },
              { id: "c", visual: { kind: "emoji", value: "❄️" }, label: "cold" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-cluehunt-3-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "The 'monster' under the bed had a long swishy tail.\nIt said 'meow' and knocked over a slipper.\n\nWhat was it really?",
              spokenText:
                "The monster under the bed had a long swishy tail. It said meow and knocked over a slipper. What was it really? Finish the sentence!",
            },
            template: "The monster was really a ___.",
            bank: [
              { id: "a", label: "cat" },
              { id: "b", label: "dragon" },
              { id: "c", label: "ghost" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-cluehunt-3-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The crowd clapped as Maria bowed on the stage.\nShe held up her violin, and flowers landed at her feet.\n\nWhat did Maria just do?",
              spokenText:
                "The crowd clapped as Maria bowed on the stage. She held up her violin, and flowers landed at her feet. What did Maria just do?",
            },
            options: [
              { id: "a", label: "baked a cake" },
              { id: "b", label: "won a running race" },
              { id: "c", label: "played a concert" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-cluehunt-3-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each tricky clue to the real answer!",
              spokenText: "These clues are sneaky! Tap a clue, then tap the real answer.",
            },
            pairs: [
              { id: "p1", left: { label: "wet, but no clouds" }, right: { label: "the pool" } },
              { id: "p2", left: { label: "coat and ice cream" }, right: { label: "a cold day" } },
              { id: "p3", left: { label: "'meow' under the bed" }, right: { label: "a cat" } },
            ],
          },
        },
        {
          id: "read-e-cluehunt-3-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "The picnic blanket flapped and the paper napkins flew away. High above the park, kites zoomed and dived. What is it like outside?",
            },
            options: [
              { id: "a", label: "calm and still" },
              { id: "b", label: "very windy" },
              { id: "c", label: "snowy" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
  ],
};
