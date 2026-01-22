/**
 * Local Storage Management
 * Handles persistence of game state
 */

const STORAGE_KEYS = {
  LEVELS: "yoga_levels",
  CURRENT_LEVEL: "yoga_currentLevel",
  SETTINGS: "yoga_settings",
  ROUTINE_STATE: "yoga_routineState",
  STATS: "yoga_stats",
};

export class Storage {
  /**
   * Save levels state to localStorage
   */
  static saveLevels(levels) {
    try {
      localStorage.setItem(STORAGE_KEYS.LEVELS, JSON.stringify(levels));
    } catch (error) {
      console.error("Error saving levels:", error);
    }
  }

  /**
   * Load levels state from localStorage
   */
  static loadLevels() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.LEVELS);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error("Error loading levels:", error);
      return null;
    }
  }

  /**
   * Save current level
   */
  static setCurrentLevel(levelKey) {
    try {
      localStorage.setItem(STORAGE_KEYS.CURRENT_LEVEL, levelKey);
    } catch (error) {
      console.error("Error saving current level:", error);
    }
  }

  /**
   * Get current level
   */
  static getCurrentLevel() {
    try {
      return localStorage.getItem(STORAGE_KEYS.CURRENT_LEVEL) || "beginner";
    } catch (error) {
      console.error("Error loading current level:", error);
      return "beginner";
    }
  }

  /**
   * Clear all stored data
   */
  static clear() {
    try {
      localStorage.removeItem(STORAGE_KEYS.LEVELS);
      localStorage.removeItem(STORAGE_KEYS.CURRENT_LEVEL);
      localStorage.removeItem(STORAGE_KEYS.SETTINGS);
      localStorage.removeItem(STORAGE_KEYS.ROUTINE_STATE);
      localStorage.removeItem(STORAGE_KEYS.STATS);
    } catch (error) {
      console.error("Error clearing storage:", error);
    }
  }

  /**
   * Settings (sound/vibration)
   */
  static getDefaultSettings() {
    return {
      soundEnabled: true,
      vibrationEnabled: true,
    };
  }

  static loadSettings() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      const defaults = Storage.getDefaultSettings();
      return stored ? { ...defaults, ...JSON.parse(stored) } : defaults;
    } catch (error) {
      console.error("Error loading settings:", error);
      return Storage.getDefaultSettings();
    }
  }

  static saveSettings(settings) {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch (error) {
      console.error("Error saving settings:", error);
    }
  }

  /**
   * Routine progress persistence
   */
  static saveRoutineState(state) {
    try {
      localStorage.setItem(STORAGE_KEYS.ROUTINE_STATE, JSON.stringify(state));
    } catch (error) {
      console.error("Error saving routine state:", error);
    }
  }

  static loadRoutineState() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.ROUTINE_STATE);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error("Error loading routine state:", error);
      return null;
    }
  }

  static clearRoutineState() {
    try {
      localStorage.removeItem(STORAGE_KEYS.ROUTINE_STATE);
    } catch (error) {
      console.error("Error clearing routine state:", error);
    }
  }

  /**
   * Stats (per level)
   */
  static loadStats() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.STATS);
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.error("Error loading stats:", error);
      return {};
    }
  }

  static saveStats(stats) {
    try {
      localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
    } catch (error) {
      console.error("Error saving stats:", error);
    }
  }
}
