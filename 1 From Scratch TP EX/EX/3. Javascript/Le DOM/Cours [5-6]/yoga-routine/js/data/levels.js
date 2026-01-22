/**
 * Level Configuration
 * Defines exercises, duration, and initial states for each difficulty level
 */

export const levels = {
  beginner: {
    name: "Beginner",
    difficulty: "Beginner",
    tier: 1,
    estimatedDuration: 6,
    unlocked: true,
    completed: false,
    unlock_condition: { type: "day_one" },
    exercices: [
      { pic: 0, min: 1 },
      { pic: 1, min: 1 },
      { pic: 2, min: 1 },
    ],
  },
  easy: {
    name: "Steady",
    difficulty: "Beginner+",
    tier: 1,
    estimatedDuration: 9,
    unlocked: false,
    completed: false,
    unlock_condition: {
      type: "completions",
      level: "beginner",
      count: 1,
    },
    exercices: [
      { pic: 0, min: 1 },
      { pic: 1, min: 1 },
      { pic: 2, min: 1 },
      { pic: 3, min: 1 },
      { pic: 4, min: 1 },
    ],
  },
  medium: {
    name: "Flowing",
    difficulty: "Intermediate",
    tier: 2,
    estimatedDuration: 12,
    unlocked: false,
    completed: false,
    unlock_condition: {
      type: "or",
      conditions: [
        { type: "completions", level: "easy", count: 3 },
        { type: "streak", days: 7 },
      ],
    },
    exercices: [
      { pic: 0, min: 1 },
      { pic: 1, min: 2 },
      { pic: 2, min: 1 },
      { pic: 3, min: 2 },
      { pic: 4, min: 1 },
      { pic: 5, min: 1 },
    ],
  },
  hard: {
    name: "Strong",
    difficulty: "Advanced",
    tier: 2,
    estimatedDuration: 18,
    unlocked: false,
    completed: false,
    unlock_condition: {
      type: "or",
      conditions: [
        { type: "completions", level: "medium", count: 5 },
        { type: "streak", days: 14 },
      ],
    },
    exercices: [
      { pic: 0, min: 1 },
      { pic: 1, min: 2 },
      { pic: 2, min: 2 },
      { pic: 3, min: 2 },
      { pic: 4, min: 1 },
      { pic: 5, min: 2 },
      { pic: 6, min: 1 },
      { pic: 7, min: 1 },
      { pic: 8, min: 1 },
      { pic: 9, min: 1 },
    ],
  },
  extremehard: {
    name: "Extreme Hard",
    difficulty: "Expert",
    tier: 3,
    estimatedDuration: 30,
    unlocked: false,
    completed: false,
    unlock_condition: {
      type: "and",
      conditions: [
        { type: "completions", level: "hard", count: 10 },
        { type: "streak", days: 30 },
      ],
    },
    exercices: [
      { pic: 0, min: 2 },
      { pic: 1, min: 2 },
      { pic: 2, min: 3 },
      { pic: 3, min: 3 },
      { pic: 4, min: 2 },
      { pic: 5, min: 3 },
      { pic: 6, min: 2 },
      { pic: 7, min: 2 },
      { pic: 8, min: 2 },
      { pic: 9, min: 2 },
      { pic: 0, min: 2 },
      { pic: 1, min: 2 },
    ],
  },
};

/**
 * Get total duration for a level in minutes
 */
export const getLevelDuration = (levelKey) => {
  const exercices = levels[levelKey].exercices;
  return exercices.reduce((total, ex) => total + ex.min, 0);
};

/**
 * Get level order for progression (NEW: Beginner → Steady → Flowing → Strong → Extreme Hard)
 */
export const LEVEL_ORDER = [
  "beginner",
  "easy",
  "medium",
  "hard",
  "extremehard",
];
