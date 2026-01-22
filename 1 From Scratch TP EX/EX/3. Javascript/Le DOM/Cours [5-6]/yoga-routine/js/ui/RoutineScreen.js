/**
 * Routine Screen
 * Displays the active exercise timer
 */

export class RoutineScreen {
  constructor(mainElement, { onBack, onQuit, onTogglePause, onSettingsChange }) {
    this.main = mainElement;
    this.onBack = onBack;
    this.onQuit = onQuit;
    this.onTogglePause = onTogglePause;
    this.onSettingsChange = onSettingsChange;
    this.isMounted = false;

    // Cached DOM refs (set on mount)
    this.backBtn = null;
    this.quitBtn = null;
    this.pauseBtn = null;
    this.timeEl = null;
    this.imgEl = null;
    this.progressEl = null;
    this.soundToggle = null;
    this.vibrationToggle = null;
    this.containerEl = null;
  }

  /**
   * Render the routine screen with current exercise
   */
  render(timerStatus) {
    // Re-mount if container is missing from DOM (e.g. overwritten by another screen)
    if (!this.isMounted || !this.containerEl || !this.main.contains(this.containerEl)) {
      this.mount();
    }
    this.update(timerStatus);
  }

  /**
   * Create DOM once (no per-second innerHTML)
   */
  mount() {
    this.main.innerHTML = `
      <div class="routine-container">
        <button class="btn-back" id="back-btn">← Back</button>
        <button class="btn-quit" id="quit-btn">Quit Routine</button>
        <button class="btn-routine-action" id="pause-btn" type="button">Pause</button>
        
        <div class="timer-display">
          <span class="time" id="routine-time">00:00</span>
        </div>

        <div class="exercise-display">
          <img 
            src=""
            alt="Exercise"
            class="exercise-image"
            id="routine-exercise-img"
          />
          <div class="progress-indicator">
            <span class="progress-text" id="routine-progress">0 / 0</span>
          </div>
        </div>

        <div class="routine-settings" aria-label="Routine settings">
          <label class="toggle">
            <input id="toggle-sound" type="checkbox" />
            <span>Sound</span>
          </label>
          <label class="toggle">
            <input id="toggle-vibration" type="checkbox" />
            <span>Vibration</span>
          </label>
        </div>
      </div>
    `;

    this.containerEl = this.main.querySelector(".routine-container");
    this.backBtn = this.main.querySelector("#back-btn");
    this.quitBtn = this.main.querySelector("#quit-btn");
    this.pauseBtn = this.main.querySelector("#pause-btn");
    this.timeEl = this.main.querySelector("#routine-time");
    this.imgEl = this.main.querySelector("#routine-exercise-img");
    this.progressEl = this.main.querySelector("#routine-progress");
    this.soundToggle = this.main.querySelector("#toggle-sound");
    this.vibrationToggle = this.main.querySelector("#toggle-vibration");

    this.attachEventListeners();
    this.isMounted = true;
  }

  /**
   * Update only dynamic parts (text + image)
   */
  update(timerStatus) {
    const { minutes, seconds, exercice, progress, isPaused, settings } = timerStatus;

    if (this.timeEl) {
      this.timeEl.textContent = `${minutes}:${seconds}`;
    }
    if (this.imgEl && exercice) {
      this.imgEl.src = `./img/${exercice.pic}.png`;
      this.imgEl.alt = `Exercise ${exercice.pic}`;
    }
    if (this.progressEl && progress) {
      this.progressEl.textContent = `${progress.current} / ${progress.total}`;
    }

    if (this.pauseBtn) {
      this.pauseBtn.textContent = isPaused ? "Resume" : "Pause";
      this.pauseBtn.setAttribute("aria-pressed", isPaused ? "true" : "false");
    }

    if (this.containerEl) {
      this.containerEl.classList.toggle("is-paused", !!isPaused);
    }

    if (settings) {
      if (this.soundToggle) this.soundToggle.checked = !!settings.soundEnabled;
      if (this.vibrationToggle)
        this.vibrationToggle.checked = !!settings.vibrationEnabled;
    }
  }

  /**
   * Attach event listeners
   */
  attachEventListeners() {
    if (this.backBtn) {
      this.backBtn.addEventListener("click", () => this.onBack());
    }

    if (this.quitBtn) {
      this.quitBtn.addEventListener("click", () => {
        if (this.onQuit) this.onQuit();
      });
    }

    if (this.pauseBtn) {
      this.pauseBtn.addEventListener("click", () => this.onTogglePause());
    }

    const onSettingsToggle = () => {
      if (!this.onSettingsChange) return;
      this.onSettingsChange({
        soundEnabled: !!this.soundToggle?.checked,
        vibrationEnabled: !!this.vibrationToggle?.checked,
      });
    };

    if (this.soundToggle) {
      this.soundToggle.addEventListener("change", onSettingsToggle);
    }
    if (this.vibrationToggle) {
      this.vibrationToggle.addEventListener("change", onSettingsToggle);
    }
  }
}
