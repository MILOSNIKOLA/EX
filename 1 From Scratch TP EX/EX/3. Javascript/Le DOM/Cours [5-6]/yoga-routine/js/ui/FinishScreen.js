/**
 * Finish Screen
 * Displays completion message and next actions
 */

export class FinishScreen {
  constructor(
    mainElement,
    levelManager,
    onRestart,
    onNextLevel,
    onBackToLevels,
  ) {
    this.main = mainElement;
    this.levelManager = levelManager;
    this.onRestart = onRestart;
    this.onNextLevel = onNextLevel;
    this.onBackToLevels = onBackToLevels;
  }

  /**
   * Render the finish screen
   */
  render() {
    const currentLevel = this.levelManager.getCurrentLevel();
    const levelData = this.levelManager.getCurrentLevelData();
    const nextLevel = this.levelManager.getNextLevel();
    const hasNextLevel =
      nextLevel && this.levelManager.isLevelUnlocked(nextLevel);

    let buttonsHtml = `
      <button class="btn btn-primary" id="restart-btn">
        🔁 Repeat Level
      </button>
    `;

    if (hasNextLevel) {
      buttonsHtml += `
        <button class="btn btn-secondary" id="next-btn">
          ➡️ Next Level
        </button>
      `;
    } else {
      buttonsHtml += `
        <button class="btn btn-secondary" id="back-btn">
          🏠 Back to Levels
        </button>
      `;
    }

    this.main.innerHTML = `
      <div class="finish-container">
        <div class="finish-header">
          <div class="celebration-emoji">🎉</div>
          <h2>Congratulations!</h2>
          <p class="level-title">${levelData.name} Completed</p>
        </div>

        <div class="finish-content">
          ${
            nextLevel
              ? `<p class="next-message">The next level <strong>${
                  this.levelManager.getAllLevels()[nextLevel].name
                }</strong> is now unlocked!</p>`
              : "<p class='final-message'>You have completed all levels! 🌟</p>"
          }
        </div>

        <div class="finish-buttons">
          ${buttonsHtml}
        </div>
      </div>
    `;

    this.attachEventListeners();
  }

  /**
   * Attach event listeners
   */
  attachEventListeners() {
    const restartBtn = this.main.querySelector("#restart-btn");
    const nextBtn = this.main.querySelector("#next-btn");
    const backBtn = this.main.querySelector("#back-btn");

    if (restartBtn) {
      restartBtn.addEventListener("click", () => this.onRestart());
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => this.onNextLevel());
    }

    if (backBtn) {
      backBtn.addEventListener("click", () => this.onBackToLevels());
    }
  }
}
