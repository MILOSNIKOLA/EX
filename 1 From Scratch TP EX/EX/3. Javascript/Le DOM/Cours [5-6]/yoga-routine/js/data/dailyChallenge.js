/**
 * Daily Challenge Module
 * Manages daily challenge state, rotation, and persistence
 */

export class DailyChallenge {
  constructor() {
    this.storageKey = "yoga_dailyChallenge";
    this.dateKey = "yoga_dailyChallengeDate";
    this.challengeData = this.loadChallenge();
  }

  /**
   * Get today's challenge
   */
  getTodayChallenge() {
    const today = this.getTodayDate();

    if (this.challengeData.date !== today) {
      this.generateNewChallenge(today);
    }

    return this.challengeData.level;
  }

  /**
   * Generate new random challenge for the day
   */
  generateNewChallenge(date) {
    const levels = ["beginner", "easy", "medium", "hard"];
    const randomLevel = levels[Math.floor(Math.random() * levels.length)];

    this.challengeData = {
      date: date,
      level: randomLevel,
      completed: false,
      completedTime: null,
    };

    this.saveChallenge();
  }

  /**
   * Mark challenge as completed
   */
  completeChallenge() {
    this.challengeData.completed = true;
    this.challengeData.completedTime = new Date().toISOString();
    this.saveChallenge();
  }

  /**
   * Check if today's challenge is completed
   */
  isChallengeCompleted() {
    const today = this.getTodayDate();
    return this.challengeData.date === today && this.challengeData.completed;
  }

  /**
   * Get today's date as string (YYYY-MM-DD)
   */
  getTodayDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  /**
   * Save challenge to localStorage
   */
  saveChallenge() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.challengeData));
  }

  /**
   * Load challenge from localStorage
   */
  loadChallenge() {
    const saved = localStorage.getItem(this.storageKey);
    if (!saved) {
      const today = this.getTodayDate();
      this.generateNewChallenge(today);
      return this.challengeData;
    }
    return JSON.parse(saved);
  }

  /**
   * Reset challenge (for testing)
   */
  reset() {
    localStorage.removeItem(this.storageKey);
    this.challengeData = this.loadChallenge();
  }
}
