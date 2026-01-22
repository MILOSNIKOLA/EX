/**
 * Level Manager
 * Handles level progression, unlocking, and completion logic
 */

import { LEVEL_ORDER } from "../data/levels.js";
import { Storage } from "./Storage.js";

export class LevelManager {
  constructor(levels) {
    this.levels = levels;
    this.currentLevel = Storage.getCurrentLevel();
    this.loadPersistedState();
  }

  /**
   * Load persisted level state from localStorage
   */
  loadPersistedState() {
    const savedLevels = Storage.loadLevels();
    if (savedLevels) {
      Object.assign(this.levels, savedLevels);
    }
  }

  /**
   * Save current state to localStorage
   */
  saveState() {
    Storage.saveLevels(this.levels);
    Storage.setCurrentLevel(this.currentLevel);
  }

  /**
   * Get current level key
   */
  getCurrentLevel() {
    return this.currentLevel;
  }

  /**
   * Get current level data
   */
  getCurrentLevelData() {
    return this.levels[this.currentLevel];
  }

  /**
   * Get all levels
   */
  getAllLevels() {
    return this.levels;
  }

  /**
   * Set current level
   */
  setCurrentLevel(levelKey) {
    if (this.levels[levelKey]) {
      this.currentLevel = levelKey;
      this.saveState();
    }
  }

  /**
   * Mark level as completed
   */
  completeLevel() {
    this.levels[this.currentLevel].completed = true;
    this.unlockNextLevel();
    this.saveState();
  }

  /**
   * Unlock the next level in sequence
   */
  unlockNextLevel() {
    const currentIndex = LEVEL_ORDER.indexOf(this.currentLevel);
    if (currentIndex < LEVEL_ORDER.length - 1) {
      const nextLevelKey = LEVEL_ORDER[currentIndex + 1];
      this.levels[nextLevelKey].unlocked = true;
      this.saveState();
    }
  }

  /**
   * Check if a level is unlocked
   */
  isLevelUnlocked(levelKey) {
    return this.levels[levelKey]?.unlocked ?? false;
  }

  /**
   * Check if a level is completed
   */
  isLevelCompleted(levelKey) {
    return this.levels[levelKey]?.completed ?? false;
  }

  /**
   * Get next level key (if exists and unlocked)
   */
  getNextLevel() {
    const currentIndex = LEVEL_ORDER.indexOf(this.currentLevel);
    if (currentIndex < LEVEL_ORDER.length - 1) {
      return LEVEL_ORDER[currentIndex + 1];
    }
    return null;
  }

  /**
   * Reset all levels to initial state
   */
  reset() {
    Object.keys(this.levels).forEach((key, index) => {
      this.levels[key].unlocked = index === 0; // Only first is unlocked
      this.levels[key].completed = false;
    });
    this.currentLevel = "beginner";
    this.saveState();
  }
}
