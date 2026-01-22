/**
 * Main Application
 * Orchestrates the entire yoga routine application
 */

import { levels } from "./data/levels.js";
import { DailyChallenge } from "./data/dailyChallenge.js";
import { LevelManager } from "./core/LevelManager.js";
import { Timer, TIMER_STATE } from "./core/Timer.js";
import { Storage } from "./core/Storage.js";
import { Feedback } from "./core/Feedback.js";
import { LevelScreen } from "./ui/LevelScreen.js";
import { RoutineScreen } from "./ui/RoutineScreen.js";
import { FinishScreen } from "./ui/FinishScreen.js";

class YogaApp {
  constructor() {
    // DOM elements
    this.mainElement = document.querySelector("main");
    this.headerElement = document.querySelector("h1");

    // Initialize managers
    this.levelManager = new LevelManager(levels);
    this.dailyChallenge = new DailyChallenge();
    this.settings = Storage.loadSettings();
    this.isPaused = false;

    // Fullscreen + wake lock
    this.wakeLock = null;

    // Initialize screens
    this.levelScreen = new LevelScreen(
      this.mainElement,
      this.levelManager,
      this.onLevelSelect.bind(this),
      this.onDailyChallengeSelect.bind(this),
    );

    this.routineScreen = new RoutineScreen(
      this.mainElement,
      {
        onBack: this.quitRoutine.bind(this),
        onQuit: this.quitRoutine.bind(this),
        onTogglePause: this.togglePause.bind(this),
        onSettingsChange: this.updateSettings.bind(this),
      },
    );

    this.finishScreen = new FinishScreen(
      this.mainElement,
      this.levelManager,
      this.restartLevel.bind(this),
      this.goToNextLevel.bind(this),
      this.goToLevelSelection.bind(this),
    );

    // Timer instance
    this.timer = null;
    this.isDailyChallenge = false;
  }

  /**
   * Stop and cleanup current timer (if any)
   * This is the single point of cleanup for timer state
   */
  stopCurrentTimer() {
    // Stop feedback FIRST to prevent any sounds/vibrations
    Feedback.stopAll();
    
    // Stop and nullify timer
    if (this.timer) {
      this.timer.stop();
      this.timer = null;
    }
    
    // Reset pause state
    this.isPaused = false;
  }

  /**
   * Quit routine and return to level selection
   */
  quitRoutine() {
    this.stopCurrentTimer();
    Storage.clearRoutineState();
    this.goToLevelSelection();
  }

  updateSettings(nextSettings) {
    this.settings = { ...this.settings, ...nextSettings };
    Storage.saveSettings(this.settings);
    // Force UI refresh if routine is mounted
    if (this.timer) {
      this.updateRoutineDisplay(this.timer.getStatus());
    }
  }

  togglePause() {
    if (!this.timer) return;
    this.isPaused = !this.isPaused;
    if (this.isPaused) this.timer.pause();
    else this.timer.resume();

    // Persist pause state immediately
    this.persistRoutineState(this.timer.getStatus());
    this.updateRoutineDisplay(this.timer.getStatus());
  }

  /**
   * Initialize the app
   */
  init() {
    // Auto-restore routine if present
    const savedRoutine = Storage.loadRoutineState();
    if (savedRoutine && savedRoutine.levelKey && levels[savedRoutine.levelKey]) {
      this.isDailyChallenge = !!savedRoutine.isDailyChallenge;
      this.levelManager.setCurrentLevel(savedRoutine.levelKey);
      this.startRoutine(savedRoutine);
      return;
    }

    this.goToLevelSelection();
  }

  /**
   * Show level selection screen
   */
  goToLevelSelection() {
    this.stopCurrentTimer();
    this.releaseWakeLock();
    this.exitFullscreen();
    Storage.clearRoutineState();
    this.headerElement.textContent = "Select Your Level";
    this.levelScreen.render(this.dailyChallenge);
  }

  /**
   * Handle level selection
   */
  onLevelSelect(levelKey) {
    // Anti-blocking: Always cleanup any existing timer before starting new level
    this.stopCurrentTimer();
    Storage.clearRoutineState();

    this.isDailyChallenge = false;
    this.levelManager.setCurrentLevel(levelKey);
    this.startRoutine();
  }

  /**
   * Handle daily challenge selection
   */
  onDailyChallengeSelect() {
    // Anti-blocking: Always cleanup any existing timer
    this.stopCurrentTimer();
    Storage.clearRoutineState();

    this.isDailyChallenge = true;
    const challengeLevel = this.dailyChallenge.getTodayChallenge();
    this.levelManager.setCurrentLevel(challengeLevel);
    this.startRoutine();
  }

  /**
   * Start routine for current level
   */
  startRoutine(restoredState = null) {
    this.stopCurrentTimer();
    const levelData = this.levelManager.getCurrentLevelData();
    const levelName = this.levelManager.getCurrentLevel().toUpperCase();

    this.headerElement.textContent = `${levelName} - Routine`;

    const exercices = levelData.exercices;

    // Create timer instance
    const initialState = restoredState
      ? {
          exerciseIndex: restoredState.exerciseIndex ?? 0,
          minutes: restoredState.minutes ?? 0,
          seconds: restoredState.seconds ?? 0,
          state: restoredState.isPaused ? TIMER_STATE.PAUSED : TIMER_STATE.IDLE,
        }
      : null;

    this.timer = new Timer(
      exercices,
      {
        onState: (status) => {
          this.persistRoutineState(status);
          this.updateRoutineDisplay(status);
        },
        onComplete: this.onRoutineComplete.bind(this),
        onExerciseStart: () => this.handleExerciseStart(),
        onExerciseEnd: () => this.handleExerciseEnd(),
      },
      initialState,
    );

    this.isPaused = !!restoredState?.isPaused;

    // Enter immersive mode on mobile (best-effort)
    this.enterFullscreen();
    this.requestWakeLock();

    // Start countdown (or render paused state)
    if (this.isPaused) {
      this.updateRoutineDisplay(this.timer.getStatus());
      this.persistRoutineState(this.timer.getStatus());
      return;
    }
    this.timer.start();
  }

  /**
   * Update routine display
   */
  updateRoutineDisplay(status) {
    this.routineScreen.render({
      ...status,
      isPaused: this.isPaused,
      settings: this.settings,
    });
  }

  persistRoutineState(status) {
    const previous = Storage.loadRoutineState();
    Storage.saveRoutineState({
      startedAt: previous?.startedAt ?? Date.now(),
      levelKey: this.levelManager.getCurrentLevel(),
      isDailyChallenge: this.isDailyChallenge,
      exerciseIndex: status.exerciseIndex,
      minutes: status.minutes,
      seconds: typeof status.seconds === "string" ? parseInt(status.seconds, 10) : status.seconds,
      isPaused: this.isPaused,
      timerState: status.state,
      updatedAt: Date.now(),
    });
  }

  handleExerciseStart() {
    // Guard: only play if timer is still active
    if (!this.timer || this.timer.isStopped) return;
    if (this.settings.soundEnabled) Feedback.playSound("ring.mp3", 0.25);
    if (this.settings.vibrationEnabled) Feedback.vibrate(30);
  }

  handleExerciseEnd() {
    // Guard: only play if timer is still active
    if (!this.timer || this.timer.isStopped) return;
    if (this.settings.soundEnabled) Feedback.playSound("ring.mp3", 0.35);
    if (this.settings.vibrationEnabled) Feedback.vibrate([40, 40, 40]);
  }

  /**
   * Handle routine completion
   */
  onRoutineComplete() {
    // Stats (per level)
    const levelKey = this.levelManager.getCurrentLevel();
    const stats = Storage.loadStats();
    const current = stats[levelKey] || { sessionsCompleted: 0, totalSeconds: 0 };
    const savedRoutine = Storage.loadRoutineState();
    const totalSecondsThisRun = savedRoutine?.startedAt
      ? Math.max(0, Math.floor((Date.now() - savedRoutine.startedAt) / 1000))
      : 0;
    stats[levelKey] = {
      sessionsCompleted: current.sessionsCompleted + 1,
      totalSeconds: current.totalSeconds + totalSecondsThisRun,
    };
    Storage.saveStats(stats);

    // Mark level as completed and unlock next
    this.levelManager.completeLevel();

    // If daily challenge, mark it as completed
    if (this.isDailyChallenge) {
      this.dailyChallenge.completeChallenge();
    }

    this.stopCurrentTimer();
    this.releaseWakeLock();
    this.exitFullscreen();
    Storage.clearRoutineState();
    this.headerElement.textContent = "Level Completed!";
    this.finishScreen.render();
  }

  /**
   * Restart current level
   */
  restartLevel() {
    this.startRoutine();
  }

  /**
   * Go to next level
   */
  goToNextLevel() {
    this.goToLevelSelection();
  }

  isMobile() {
    return (
      window.matchMedia?.("(pointer: coarse)")?.matches ||
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    );
  }

  async enterFullscreen() {
    try {
      if (!this.isMobile()) return;
      if (document.fullscreenElement) return;
      await document.documentElement.requestFullscreen?.();
    } catch {
      // ignore (browser may require user gesture)
    }
  }

  async exitFullscreen() {
    try {
      if (!document.fullscreenElement) return;
      await document.exitFullscreen?.();
    } catch {
      // ignore
    }
  }

  async requestWakeLock() {
    try {
      if (!("wakeLock" in navigator)) return;
      this.wakeLock = await navigator.wakeLock.request("screen");
    } catch {
      // ignore
    }
  }

  async releaseWakeLock() {
    try {
      await this.wakeLock?.release?.();
      this.wakeLock = null;
    } catch {
      // ignore
    }
  }
}

// Initialize app when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const app = new YogaApp();
  app.init();

  // Re-acquire wake lock if page becomes visible during a routine
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && app.timer && !app.isPaused) {
      app.requestWakeLock();
    }
  });

  // Service worker (PWA) - registered later when added
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
});
