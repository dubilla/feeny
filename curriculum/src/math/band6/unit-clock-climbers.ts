import type { UnitSeed } from "../../schema/pack";

/**
 * Band 6 · Clock Climbers · Telling time
 * Lesson 1 reads o'clock times off the clock face.
 * Lesson 2 adds half past.
 * Lesson 3 mixes both and stretches to "one hour later".
 * Clock-face emoji (🕐…🕧) are the visual stimuli; every prompt is fully
 * carried by warm spokenText for kids who can't yet read a clock.
 */
export const clockClimbers: UnitSeed = {
  id: "math-u-clock",
  bandId: "math-b6",
  title: "Clock Climbers",
  icon: "⏰",
  lessons: [
    {
      id: "math-l-clock-1",
      title: "On the Hour",
      primarySkillId: "math-time-money",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-clock-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "What time is it? 🕒",
              spokenText:
                "Look at the clock! The little hand points to the three and the big hand points to the twelve. What time is it?",
            },
            options: [
              { id: "a", label: "2:00" },
              { id: "b", label: "3:00" },
              { id: "c", label: "4:00" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-clock-1-02",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the clock that shows six o'clock!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🕔" } },
              { id: "b", visual: { kind: "emoji", value: "🕕" } },
              { id: "c", visual: { kind: "emoji", value: "🕖" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-clock-1-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "What time is it? 🕘",
              spokenText:
                "The little hand points to the nine and the big hand points to the twelve. What time does the clock show?",
            },
            options: [
              { id: "a", label: "9:00" },
              { id: "b", label: "10:00" },
              { id: "c", label: "8:00" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-clock-1-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which shows 12 o'clock?",
              spokenText: "Which clock shows twelve o'clock, when both hands point straight up to the twelve?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🕛" } },
              { id: "b", visual: { kind: "emoji", value: "🕐" } },
              { id: "c", visual: { kind: "emoji", value: "🕚" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-clock-1-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "What time is it? 🕗",
              spokenText:
                "The big hand points to the twelve and the little hand points to the eight. What time is it?",
            },
            options: [
              { id: "a", label: "7:00" },
              { id: "b", label: "9:00" },
              { id: "c", label: "8:00" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-clock-1-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each clock to its time!",
              spokenText: "Match each clock to the time that it shows!",
            },
            pairs: [
              { id: "p1", left: { visual: { kind: "emoji", value: "🕐" } }, right: { label: "1:00" } },
              { id: "p2", left: { visual: { kind: "emoji", value: "🕓" } }, right: { label: "4:00" } },
              { id: "p3", left: { visual: { kind: "emoji", value: "🕙" } }, right: { label: "10:00" } },
            ],
          },
        },
        {
          id: "math-e-clock-1-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "It is ___ o'clock",
              spokenText:
                "The little hand points to the five and the big hand points to the twelve. It is five o'clock! Fill in the blank.",
            },
            template: "It is ___ o'clock",
            bank: [
              { id: "c1", label: "4" },
              { id: "c2", label: "5" },
              { id: "c3", label: "6" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-clock-1-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "What time is it? 🕑",
              spokenText:
                "The little hand points to the two and the big hand points to the twelve. What time does the clock show?",
            },
            options: [
              { id: "a", label: "2:00" },
              { id: "b", label: "3:00" },
              { id: "c", label: "1:00" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
    {
      id: "math-l-clock-2",
      title: "Half Past",
      primarySkillId: "math-time-money",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-clock-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "What time is it? 🕝",
              spokenText:
                "The big hand points down to the six, so it is half past! The little hand is just past the two. It is half past two. What time is it?",
            },
            options: [
              { id: "a", label: "2:30" },
              { id: "b", label: "2:00" },
              { id: "c", label: "3:30" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-clock-2-02",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the clock that shows half past four!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🕞" } },
              { id: "b", visual: { kind: "emoji", value: "🕟" } },
              { id: "c", visual: { kind: "emoji", value: "🕠" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-clock-2-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "What time is it? 🕧",
              spokenText:
                "The big hand points down to the six for half past, and the little hand is just past the twelve. It is half past twelve. What time is it?",
            },
            options: [
              { id: "a", label: "11:30" },
              { id: "b", label: "12:00" },
              { id: "c", label: "12:30" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-clock-2-04",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Half past 6 is ___",
              spokenText: "Half past six is the same as six thirty. Fill in the blank with the right time!",
            },
            template: "Half past 6 is ___",
            bank: [
              { id: "c1", label: "6:00" },
              { id: "c2", label: "6:30" },
              { id: "c3", label: "7:30" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-clock-2-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which shows half past 9?",
              spokenText: "Which clock shows half past nine, with the little hand just past the nine?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🕤" } },
              { id: "b", visual: { kind: "emoji", value: "🕣" } },
              { id: "c", visual: { kind: "emoji", value: "🕥" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-clock-2-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each clock to its time!",
              spokenText: "Match each clock to the half past time that it shows!",
            },
            pairs: [
              { id: "p1", left: { visual: { kind: "emoji", value: "🕜" } }, right: { label: "1:30" } },
              { id: "p2", left: { visual: { kind: "emoji", value: "🕡" } }, right: { label: "6:30" } },
              { id: "p3", left: { visual: { kind: "emoji", value: "🕥" } }, right: { label: "10:30" } },
            ],
          },
        },
        {
          id: "math-e-clock-2-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the clock that shows half past eight!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🕢" } },
              { id: "b", visual: { kind: "emoji", value: "🕣" } },
              { id: "c", visual: { kind: "emoji", value: "🕤" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-clock-2-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "What time is it? 🕞",
              spokenText:
                "The big hand points down to the six for half past, and the little hand is just past the three. What time is it?",
            },
            options: [
              { id: "a", label: "3:30" },
              { id: "b", label: "3:00" },
              { id: "c", label: "4:30" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
    {
      id: "math-l-clock-3",
      title: "One Hour Later",
      primarySkillId: "math-time-money",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-clock-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "One hour after 🕔 ?",
              spokenText: "It is five o'clock now. What time will it be one hour later?",
            },
            options: [
              { id: "a", label: "5:30" },
              { id: "b", label: "6:00" },
              { id: "c", label: "7:00" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-clock-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "What time is it? 🕡",
              spokenText:
                "The big hand points down to the six for half past, and the little hand is just past the six. What time is it?",
            },
            options: [
              { id: "a", label: "6:30" },
              { id: "b", label: "5:30" },
              { id: "c", label: "7:30" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-clock-3-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "One hour after 3 o'clock is ___ o'clock",
              spokenText:
                "It is three o'clock. One hour later the little hand moves to the next number. Fill in the blank!",
            },
            template: "One hour after 3 o'clock is ___ o'clock",
            bank: [
              { id: "c1", label: "2" },
              { id: "c2", label: "4" },
              { id: "c3", label: "5" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-clock-3-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "It is eight o'clock now. Tap the clock that shows one hour later!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🕘" } },
              { id: "b", visual: { kind: "emoji", value: "🕗" } },
              { id: "c", visual: { kind: "emoji", value: "🕙" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-clock-3-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "What time is it? 🕥",
              spokenText:
                "The big hand points down to the six for half past, and the little hand is just past the ten. What time is it?",
            },
            options: [
              { id: "a", label: "10:00" },
              { id: "b", label: "11:30" },
              { id: "c", label: "10:30" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-clock-3-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each clock to its time!",
              spokenText: "Match each clock to the time that it shows. Watch out, some are o'clock and some are half past!",
            },
            pairs: [
              { id: "p1", left: { visual: { kind: "emoji", value: "🕐" } }, right: { label: "1:00" } },
              { id: "p2", left: { visual: { kind: "emoji", value: "🕝" } }, right: { label: "2:30" } },
              { id: "p3", left: { visual: { kind: "emoji", value: "🕘" } }, right: { label: "9:00" } },
            ],
          },
        },
        {
          id: "math-e-clock-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "One hour after half past 2 🕝 ?",
              spokenText: "It is half past two. One hour later it will be half past the next number. What time is that?",
            },
            options: [
              { id: "a", label: "half past 1" },
              { id: "b", label: "half past 3" },
              { id: "c", label: "half past 4" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-clock-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "One hour after 🕛 ?",
              spokenText: "It is twelve o'clock now. What time will it be one hour later?",
            },
            options: [
              { id: "a", label: "11:00" },
              { id: "b", label: "1:00" },
              { id: "c", label: "2:00" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
  ],
};
