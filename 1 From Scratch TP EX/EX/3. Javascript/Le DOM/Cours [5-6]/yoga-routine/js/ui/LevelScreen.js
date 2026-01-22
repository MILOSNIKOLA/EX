/**
 * Level Selection Screen
 * Displays available levels with unlock/completion status
 */

import { getLevelDuration } from "../data/levels.js";
import { Storage } from "../core/Storage.js";

export class LevelScreen {
  constructor(
    mainElement,
    levelManager,
    onLevelSelect,
    onDailyChallengeSelect,
  ) {
    this.main = mainElement;
    this.levelManager = levelManager;
    this.onLevelSelect = onLevelSelect;
    this.onDailyChallengeSelect = onDailyChallengeSelect;
  }

  /**
   * Render the level selection screen
   */
  render(dailyChallenge = null) {
    const levels = this.levelManager.getAllLevels();
    const stats = Storage.loadStats();
    const cards = Object.entries(levels)
      .map(([key, level]) => this.createLevelCard(key, level, stats[key]))
      .join("");

    const dailyChallengeHTML = dailyChallenge
      ? this.createDailyChallengeButton(dailyChallenge)
      : "";

    this.main.innerHTML = `
      <div class="levels-container">
        ${dailyChallengeHTML}
        ${cards}
      </div>
    `;

    this.attachEventListeners();
  }

  /**
   * Create daily challenge button
   */
  createDailyChallengeButton(dailyChallenge) {
    const isCompleted = dailyChallenge.isChallengeCompleted();
    const todayChallenge = dailyChallenge.getTodayChallenge();
    const completedClass = isCompleted ? "completed" : "";

    return `
      <div class="level-card daily-challenge ${completedClass}" id="daily-challenge">
        <div class="level-header">
          <h3 class="level-name">🎯 Daily Challenge</h3>
          <span class="level-difficulty">Daily</span>
        </div>
        
        <div class="level-info">
          <p class="challenge-level">Today's Level: <strong>${todayChallenge.toUpperCase()}</strong></p>
          <p class="challenge-reset">Resets at midnight</p>
        </div>

        <div class="level-status">
          ${isCompleted ? '<span class="badge badge-completed">✓ Completed Today</span>' : '<span class="badge badge-active">Active</span>'}
        </div>

        <button 
          class="btn-level-select btn-daily-challenge" 
          id="btn-daily-challenge"
          ${isCompleted ? "disabled" : ""}
        >
          ${isCompleted ? "✓ Completed" : "Start Challenge"}
        </button>
      </div>
    `;
  }

  /**
   * Create a level card
   */
  createLevelCard(key, level, stats = null) {
    const isUnlocked = this.levelManager.isLevelUnlocked(key);
    const isCompleted = this.levelManager.isLevelCompleted(key);
    const duration = getLevelDuration(key);
    const sessions = stats?.sessionsCompleted ?? 0;
    const totalSeconds = stats?.totalSeconds ?? 0;
    const totalMinutes = Math.round(totalSeconds / 60);

    const statusClass = isUnlocked ? "" : "locked";
    const completedClass = isCompleted ? "completed" : "";

    return `
      <div class="level-card ${statusClass} ${completedClass}" data-level="${key}">
        <div class="level-header">
          <h3 class="level-name">${level.name}</h3>
          <span class="level-difficulty">${level.difficulty}</span>
        </div>
        
        <div class="level-info">
          <p class="duration">⏱️ ${duration} min</p>
          <p class="exercise-count">${level.exercices.length} exercises</p>
          <p class="level-stats">🏁 ${sessions} sessions • ${totalMinutes} min total</p>
        </div>

        <div class="level-status">
          ${isCompleted ? '<span class="badge badge-completed">✓ Completed</span>' : ""}
          ${!isUnlocked ? '<span class="badge badge-locked">🔒 Locked</span>' : ""}
        </div>

        <button 
          class="btn-level-select" 
          data-level="${key}"
          ${!isUnlocked ? "disabled" : ""}
        >
          ${isUnlocked ? "Start" : "Locked"}
        </button>
      </div>
    `;
  }

  /**
   * Attach event listeners to level cards
   */
  attachEventListeners() {
    // Regular level buttons
    const buttons = this.main.querySelectorAll(
      ".btn-level-select:not(.btn-daily-challenge):not(:disabled)",
    );
    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const levelKey = e.target.dataset.level;
        this.onLevelSelect(levelKey);
      });
    });

    // Daily challenge button
    const dailyBtn = this.main.querySelector("#btn-daily-challenge");
    if (dailyBtn && !dailyBtn.disabled) {
      dailyBtn.addEventListener("click", () => {
        this.onDailyChallengeSelect();
      });
    }
  }
}
