/**
 * Timer / Exercise Manager
 * Handles exercise timer countdown and progression
 */

export const TIMER_STATE = Object.freeze({
  IDLE: "idle",
  RUNNING: "running",
  PAUSED: "paused",
  FINISHED: "finished",
});

export class Timer {
  /**
   * @param {Array<{pic:number,min:number}>} exercices
   * @param {object} callbacks
   * @param {(state:any)=>void} callbacks.onState
   * @param {()=>void} callbacks.onComplete
   * @param {(payload:{exercice:any, progress:any})=>void} [callbacks.onExerciseStart]
   * @param {(payload:{exercice:any, progress:any})=>void} [callbacks.onExerciseEnd]
   * @param {{exerciseIndex:number, minutes:number, seconds:number, state?:"idle"|"running"|"paused"|"finished"}} [initialState]
   */
  constructor(exercices, callbacks = {}, initialState = null) {
    this.exercices = JSON.parse(JSON.stringify(exercices)); // Deep copy
    this.currentIndex = Math.max(0, initialState?.exerciseIndex ?? 0);
    this.minutes = initialState?.minutes ?? this.exercices[this.currentIndex]?.min ?? 0;
    this.seconds = initialState?.seconds ?? 0;
    this.state = initialState?.state ?? TIMER_STATE.IDLE;

    // Single source of truth for ticking
    this.intervalId = null;

    // Flag to prevent any callbacks after stop() is called
    this.isStopped = false;

    // Callbacks (Timer never touches DOM)
    this.onState = typeof callbacks.onState === "function" ? callbacks.onState : () => {};
    this.onComplete =
      typeof callbacks.onComplete === "function" ? callbacks.onComplete : () => {};
    this.onExerciseStart =
      typeof callbacks.onExerciseStart === "function"
        ? callbacks.onExerciseStart
        : () => {};
    this.onExerciseEnd =
      typeof callbacks.onExerciseEnd === "function" ? callbacks.onExerciseEnd : () => {};
  }

  /**
   * Format seconds with leading zero
   */
  formatSeconds() {
    return this.seconds < 10 ? `0${this.seconds}` : `${this.seconds}`;
  }

  /**
   * Get current exercise data
   */
  getCurrentExercise() {
    return this.exercices[this.currentIndex];
  }

  /**
   * Get progress info
   */
  getProgress() {
    return {
      current: this.currentIndex + 1,
      total: this.exercices.length,
    };
  }

  /**
   * Start the countdown
   */
  start() {
    if (this.state === TIMER_STATE.RUNNING) return;
    // Guarantee only one active timer
    this.clearInterval();

    this.isStopped = false;
    this.state = TIMER_STATE.RUNNING;
    this.safeCallback(() => this.onExerciseStart({
      exercice: this.getCurrentExercise(),
      progress: this.getProgress(),
    }));
    this.emit();

    this.intervalId = setInterval(() => {
      // Double-check: exit immediately if stopped or not running
      if (this.isStopped || this.state !== TIMER_STATE.RUNNING) return;
      this.stepOneSecond();
      this.emit();
    }, 1000);
  }

  /**
   * Safely execute callback only if timer is not stopped
   */
  safeCallback(fn) {
    if (this.isStopped) return;
    try {
      fn();
    } catch (e) {
      console.error("Timer callback error:", e);
    }
  }

  /**
   * Clear interval helper
   */
  clearInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  /**
   * One second step (pure state update)
   */
  stepOneSecond() {
    // Guard: do nothing if stopped
    if (this.isStopped) return;

    if (this.minutes === 0 && this.seconds === 0) {
      // Exercise complete -> next, or finish
      this.safeCallback(() => this.onExerciseEnd({
        exercice: this.getCurrentExercise(),
        progress: this.getProgress(),
      }));
      this.currentIndex++;

      if (this.currentIndex < this.exercices.length) {
        this.minutes = this.exercices[this.currentIndex].min;
        this.seconds = 0;
        this.safeCallback(() => this.onExerciseStart({
          exercice: this.getCurrentExercise(),
          progress: this.getProgress(),
        }));
        return;
      }

      // All exercises complete - only trigger if not stopped
      if (!this.isStopped) {
        this.finish();
        this.safeCallback(() => this.onComplete());
      }
      return;
    }

    if (this.seconds === 0) {
      this.minutes = Math.max(0, this.minutes - 1);
      this.seconds = 59;
      return;
    }

    this.seconds = Math.max(0, this.seconds - 1);
  }

  /**
   * Get current timer status
   */
  getStatus() {
    return {
      state: this.state,
      exerciseIndex: this.currentIndex,
      minutes: this.minutes,
      seconds: this.formatSeconds(),
      exercice: this.getCurrentExercise(),
      progress: this.getProgress(),
    };
  }

  /**
   * Emit current state (Timer is logic-only)
   */
  emit() {
    this.onState(this.getStatus());
  }

  /**
   * Stop the timer completely
   * - Clears interval immediately
   * - Sets stopped flag to prevent any future callbacks
   * - Resets state to IDLE
   */
  stop() {
    // Set stopped flag FIRST to prevent any callbacks
    this.isStopped = true;
    
    // Clear interval immediately
    this.clearInterval();
    
    // Reset state
    this.state = TIMER_STATE.IDLE;
  }

  /**
   * Pause the timer
   */
  pause() {
    if (this.state !== TIMER_STATE.RUNNING) return;
    this.state = TIMER_STATE.PAUSED;
    this.emit();
  }

  /**
   * Resume the timer
   */
  resume() {
    if (this.state !== TIMER_STATE.PAUSED) return;
    this.state = TIMER_STATE.RUNNING;
    this.emit();
  }

  /**
   * Finish (terminal state)
   */
  finish() {
    // Don't finish if already stopped
    if (this.isStopped) return;
    
    this.state = TIMER_STATE.FINISHED;
    this.clearInterval();
    this.emit();
  }

  /**
   * Check if timer is in a stoppable state (running or paused)
   */
  isActive() {
    return this.state === TIMER_STATE.RUNNING || this.state === TIMER_STATE.PAUSED;
  }
}
