import type { UnitSeed } from "../../schema/pack";

/**
 * Reading Band 7 · Order the Tale
 * Story sequencing. The `ordering` type is the star (arrange 3–4 events),
 * mixed with multipleChoiceImage "what happened FIRST / LAST?" questions
 * about mini-passages. Passages live in prompt.text; spokenText reads the
 * passage then the question. listenAndPick keeps the events in spokenText.
 * L1 obvious real-world sequences · L2 story-based · L3 four-step with
 * before/after language.
 */
export const orderTheTale: UnitSeed = {
  id: "read-u-order",
  bandId: "reading-b7",
  title: "Order the Tale",
  icon: "📚",
  lessons: [
    {
      id: "read-l-order-1",
      title: "First, Then, Last",
      primarySkillId: "read-sequencing",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-order-1-01",
          type: "ordering",
          payload: {
            prompt: {
              text: "Put the morning in order!",
              spokenText:
                "Put these in the right order: first you wake up, then you eat breakfast, then you go to school.",
            },
            items: [
              { id: "e1", label: "eat breakfast" },
              { id: "e2", label: "go to school" },
              { id: "e3", label: "wake up" },
            ],
            correctOrder: ["e3", "e1", "e2"],
          },
        },
        {
          id: "read-e-order-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Ivy woke up.\nThen she ate toast.\nThen she brushed her teeth.\n\nWhat did Ivy do FIRST?",
              spokenText:
                "Ivy woke up. Then she ate toast. Then she brushed her teeth. What did Ivy do first?",
            },
            options: [
              { id: "a", label: "ate toast" },
              { id: "b", label: "woke up" },
              { id: "c", label: "brushed her teeth" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-order-1-03",
          type: "ordering",
          payload: {
            prompt: {
              text: "How does a plant grow?",
              spokenText:
                "Put the plant in order: first a seed, then a little sprout, then a flower.",
            },
            items: [
              { id: "e1", label: "sprout" },
              { id: "e2", label: "flower" },
              { id: "e3", label: "seed" },
            ],
            correctOrder: ["e3", "e1", "e2"],
          },
        },
        {
          id: "read-e-order-1-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "First Max put on his socks.\nThen his shoes.\nThen he tied the laces.\n\nWhat did Max do LAST?",
              spokenText:
                "First Max put on his socks. Then his shoes. Then he tied the laces. What did Max do last?",
            },
            options: [
              { id: "a", label: "put on socks" },
              { id: "b", label: "tied the laces" },
              { id: "c", label: "put on shoes" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-order-1-05",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make a sandwich in order!",
              spokenText:
                "Put the snack in order: first get the bread, then add the cheese, then take a bite.",
            },
            items: [
              { id: "e1", label: "add cheese" },
              { id: "e2", label: "take a bite" },
              { id: "e3", label: "get bread" },
            ],
            correctOrder: ["e3", "e1", "e2"],
          },
        },
        {
          id: "read-e-order-1-06",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "Nina filled the tub with water. Then she climbed in. Then she washed her hair. What did Nina do first?",
            },
            options: [
              { id: "a", label: "climbed in" },
              { id: "b", label: "filled the tub" },
              { id: "c", label: "washed her hair" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-order-1-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The caterpillar ate leaves.\nThen it made a cocoon.\nThen it became a butterfly.\n\nWhat happened LAST?",
              spokenText:
                "The caterpillar ate leaves. Then it made a cocoon. Then it became a butterfly. What happened last?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍃" }, label: "ate leaves" },
              { id: "b", visual: { kind: "emoji", value: "🐛" }, label: "made a cocoon" },
              { id: "c", visual: { kind: "emoji", value: "🦋" }, label: "became a butterfly" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-order-1-08",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "First you plant a seed.\nThen it grows into a plant.\n\nFinish the sentence!",
              spokenText:
                "First you plant a seed. Then it grows into a plant. Finish the sentence: first you plant a what?",
            },
            template: "First you plant a ___.",
            bank: [
              { id: "a", label: "seed" },
              { id: "b", label: "tree" },
              { id: "c", label: "rock" },
            ],
            correctChipId: "a",
          },
        },
      ],
    },
    {
      id: "read-l-order-2",
      title: "Story Order",
      primarySkillId: "read-sequencing",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-order-2-01",
          type: "ordering",
          payload: {
            prompt: {
              text: "The Lost Kitten — put it in order!",
              spokenText:
                "Here is the story in order: the kitten ran off, then Mia looked everywhere, then Mia found the kitten. Put it in that order.",
            },
            items: [
              { id: "e1", label: "Mia looked everywhere" },
              { id: "e2", label: "Mia found the kitten" },
              { id: "e3", label: "the kitten ran off" },
            ],
            correctOrder: ["e3", "e1", "e2"],
          },
        },
        {
          id: "read-e-order-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Sam planted seeds.\nHe watered them each day.\nBright flowers grew.\n\nWhat did Sam do FIRST?",
              spokenText:
                "Sam planted seeds. He watered them each day. Bright flowers grew. What did Sam do first?",
            },
            options: [
              { id: "a", label: "watered them" },
              { id: "b", label: "planted seeds" },
              { id: "c", label: "picked flowers" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-order-2-03",
          type: "ordering",
          payload: {
            prompt: {
              text: "Baking cookies — put it in order!",
              spokenText:
                "Put the baking in order: first mix the dough, then bake the cookies, then eat them all up.",
            },
            items: [
              { id: "e1", label: "bake the cookies" },
              { id: "e2", label: "eat them up" },
              { id: "e3", label: "mix the dough" },
            ],
            correctOrder: ["e3", "e1", "e2"],
          },
        },
        {
          id: "read-e-order-2-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "The dog dug a deep hole. Then he dropped his bone in it. Then he covered it with dirt. What did the dog do last?",
            },
            options: [
              { id: "a", label: "dug a hole" },
              { id: "b", label: "covered it with dirt" },
              { id: "c", label: "found the bone" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-order-2-05",
          type: "ordering",
          payload: {
            prompt: {
              text: "The rainy day — put it in order!",
              spokenText:
                "Put the weather story in order: first the clouds rolled in, then the rain poured down, then a rainbow appeared.",
            },
            items: [
              { id: "e1", label: "the rain poured down" },
              { id: "e2", label: "a rainbow appeared" },
              { id: "e3", label: "the clouds rolled in" },
            ],
            correctOrder: ["e3", "e1", "e2"],
          },
        },
        {
          id: "read-e-order-2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Lily built a sandcastle.\nA big wave rolled in.\nThe castle washed away.\n\nWhat happened LAST?",
              spokenText:
                "Lily built a sandcastle. A big wave rolled in. The castle washed away. What happened last?",
            },
            options: [
              { id: "a", label: "built a castle" },
              { id: "b", label: "a wave rolled in" },
              { id: "c", label: "the castle washed away" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-order-2-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Ben's balloon floated up high.\nThen, with a bang, it popped!\n\nFinish the sentence!",
              spokenText:
                "Ben's balloon floated up high. Then, with a bang, it popped! Finish the sentence: first the balloon floated which way?",
            },
            template: "First the balloon floated ___.",
            bank: [
              { id: "a", label: "up" },
              { id: "b", label: "down" },
              { id: "c", label: "away" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-order-2-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The bird made a cozy nest.\nShe laid three little eggs.\nThe eggs hatched into chicks.\n\nWhat happened FIRST?",
              spokenText:
                "The bird made a cozy nest. She laid three little eggs. The eggs hatched into chicks. What happened first?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐥" }, label: "the eggs hatched" },
              { id: "b", visual: { kind: "emoji", value: "🥚" }, label: "she laid eggs" },
              { id: "c", visual: { kind: "emoji", value: "🪺" }, label: "she made a nest" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "read-l-order-3",
      title: "Before & After",
      primarySkillId: "read-sequencing",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-order-3-01",
          type: "ordering",
          payload: {
            prompt: {
              text: "Getting ready for school — put it in order!",
              spokenText:
                "Four steps! Put them in order: first wake up, then brush your teeth, then eat breakfast, then go to school.",
            },
            items: [
              { id: "e1", label: "brush teeth" },
              { id: "e2", label: "eat breakfast" },
              { id: "e3", label: "wake up" },
              { id: "e4", label: "go to school" },
            ],
            correctOrder: ["e3", "e1", "e2", "e4"],
          },
        },
        {
          id: "read-e-order-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Tom washed his hands before lunch.\nAfter lunch, he played outside.\n\nWhat did Tom do AFTER lunch?",
              spokenText:
                "Tom washed his hands before lunch. After lunch, he played outside. What did Tom do after lunch?",
            },
            options: [
              { id: "a", label: "washed his hands" },
              { id: "b", label: "played outside" },
              { id: "c", label: "made lunch" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-order-3-03",
          type: "ordering",
          payload: {
            prompt: {
              text: "The bug's life — put it in order!",
              spokenText:
                "Put the bug's life in order: first an egg, then a caterpillar, then a cocoon, then a butterfly.",
            },
            items: [
              { id: "e1", label: "caterpillar" },
              { id: "e2", label: "cocoon" },
              { id: "e3", label: "egg" },
              { id: "e4", label: "butterfly" },
            ],
            correctOrder: ["e3", "e1", "e2", "e4"],
          },
        },
        {
          id: "read-e-order-3-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Before the movie, Zoe fed the fish.\nThen she watched the movie.\nThen she went to bed.\n\nWhat did Zoe do BEFORE the movie?",
              spokenText:
                "Before the movie, Zoe fed the fish. Then she watched the movie. Then she went to bed. What did Zoe do before the movie?",
            },
            options: [
              { id: "a", label: "went to bed" },
              { id: "b", label: "fed the fish" },
              { id: "c", label: "ate popcorn" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-order-3-05",
          type: "ordering",
          payload: {
            prompt: {
              text: "Making lemonade — put it in order!",
              spokenText:
                "Four steps! Put them in order: first pick the lemons, then squeeze them, then add water, then take a sip.",
            },
            items: [
              { id: "e1", label: "squeeze them" },
              { id: "e2", label: "add water" },
              { id: "e3", label: "pick the lemons" },
              { id: "e4", label: "take a sip" },
            ],
            correctOrder: ["e3", "e1", "e2", "e4"],
          },
        },
        {
          id: "read-e-order-3-06",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "First Leo rolled up a snowman. Then he wrapped a scarf around it. After that he made a snowball. Last, he tossed it high. What did Leo do right after he built the snowman?",
            },
            options: [
              { id: "a", label: "tossed a snowball" },
              { id: "b", label: "wrapped on a scarf" },
              { id: "c", label: "went inside" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-order-3-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Nina put on her boots.\nThen she jumped in the puddles.\n\nFinish the sentence!",
              spokenText:
                "Nina put on her boots. Then she jumped in the puddles. Finish the sentence: Nina put on boots, blank, she jumped in puddles.",
            },
            template: "Nina put on boots ___ she jumped in puddles.",
            bank: [
              { id: "a", label: "before" },
              { id: "b", label: "after" },
              { id: "c", label: "under" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-order-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The seed sprouted.\nLeaves grew.\nA bud formed.\nThe flower bloomed.\n\nWhat happened LAST?",
              spokenText:
                "The seed sprouted. Leaves grew. A bud formed. The flower bloomed. What happened last?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🌱" }, label: "leaves grew" },
              { id: "b", visual: { kind: "emoji", value: "🌿" }, label: "the seed sprouted" },
              { id: "c", visual: { kind: "emoji", value: "🌸" }, label: "the flower bloomed" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
  ],
};
