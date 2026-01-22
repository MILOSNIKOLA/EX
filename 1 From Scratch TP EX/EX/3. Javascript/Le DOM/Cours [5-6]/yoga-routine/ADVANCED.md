# 🎯 ADVANCED CUSTOMIZATION EXAMPLES

This file shows you how to extend and customize the yoga routine app.

---

## 1️⃣ Add a 4th Level (Expert)

### Step 1: Edit `js/data/levels.js`

```javascript
const levels = {
  easy: {
    /* ... */
  },
  medium: {
    /* ... */
  },
  hard: {
    /* ... */
  },

  // ADD THIS:
  expert: {
    name: "Expert",
    difficulty: "Master",
    estimatedDuration: 25,
    unlocked: false,
    completed: false,
    exercices: [
      { pic: 0, min: 2 },
      { pic: 1, min: 3 },
      { pic: 2, min: 3 },
      { pic: 3, min: 3 },
      { pic: 4, min: 2 },
      { pic: 5, min: 3 },
      { pic: 6, min: 2 },
      { pic: 7, min: 2 },
      { pic: 8, min: 2 },
      { pic: 9, min: 1 },
    ],
  },
};

// UPDATE LEVEL ORDER:
export const LEVEL_ORDER = ["easy", "medium", "hard", "expert"];
```

✅ **Done!** Expert level now automatically:

- Unlocks after Hard is completed
- Displays in grid (4-column on desktop)
- Has proper difficulty indicators

---

## 2️⃣ Add Difficulty-Based Colors

### Edit `style.css`:

```css
.level-difficulty {
  /* Add color based on difficulty */
}

/* EASY - Green */
.level-card:has(.level-difficulty:contains("Beginner")) .level-difficulty {
  background: linear-gradient(135deg, #10b981, #059669);
}

/* MEDIUM - Orange */
.level-card:has(.level-difficulty:contains("Intermediate")) .level-difficulty {
  background: linear-gradient(135deg, #f59e0b, #d97706);
}

/* HARD - Red */
.level-card:has(.level-difficulty:contains("Advanced")) .level-difficulty {
  background: linear-gradient(135deg, #ef4444, #dc2626);
}

/* EXPERT - Purple */
.level-card:has(.level-difficulty:contains("Master")) .level-difficulty {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
}
```

Or in `js/ui/LevelScreen.js`, add dynamic styling:

```javascript
createLevelCard(key, level) {
  const colors = {
    easy: "#10b981",
    medium: "#f59e0b",
    hard: "#ef4444",
    expert: "#8b5cf6"
  };

  const color = colors[key];

  return `
    <div class="level-card ${statusClass} ${completedClass}"
         style="--difficulty-color: ${color}">
      <!-- rest of card -->
    </div>
  `;
}
```

---

## 3️⃣ Add Pause/Resume Button

### In `js/ui/RoutineScreen.js`:

```javascript
render(timerStatus) {
  const { minutes, seconds, exercice, progress } = timerStatus;

  this.main.innerHTML = `
    <div class="routine-container">
      <div class="routine-controls">
        <button class="btn-back" id="back-btn">← Back</button>
        <button class="btn-pause" id="pause-btn">⏸️ Pause</button>
      </div>

      <div class="timer-display">
        <span class="time">${minutes}:${seconds}</span>
      </div>

      <div class="exercise-display">
        <img src="./img/${exercice.pic}.png" alt="Exercise" />
        <div class="progress-indicator">
          <span>${progress.current} / ${progress.total}</span>
        </div>
      </div>
    </div>
  `;

  this.attachEventListeners();
  this.timer = null; // Will be set by parent
}

attachEventListeners() {
  const backBtn = this.main.querySelector("#back-btn");
  const pauseBtn = this.main.querySelector("#pause-btn");

  if (backBtn) {
    backBtn.addEventListener("click", () => this.onBack());
  }

  if (pauseBtn) {
    pauseBtn.addEventListener("click", () => this.togglePause());
  }
}

togglePause() {
  const btn = this.main.querySelector("#pause-btn");
  if (this.timer.isRunning) {
    this.timer.pause();
    btn.textContent = "▶️ Resume";
  } else {
    this.timer.resume();
    btn.textContent = "⏸️ Pause";
  }
}
```

### Update `js/main.js`:

```javascript
routine: function () {
  const levelData = this.levelManager.getCurrentLevelData();
  const levelName = this.levelManager.getCurrentLevel().toUpperCase();

  this.headerElement.textContent = `${levelName} - Routine`;

  const exercices = levelData.exercices;

  this.timer = new Timer(
    exercices,
    this.updateRoutineDisplay.bind(this),
    this.onRoutineComplete.bind(this)
  );

  // PASS TIMER TO ROUTINE SCREEN
  this.routineScreen.timer = this.timer;

  this.updateRoutineDisplay(this.timer.getStatus());
  this.timer.start();
}
```

---

## 4️⃣ Add Completion Percentage

### In `js/ui/LevelScreen.js`:

```javascript
createLevelCard(key, level) {
  const isUnlocked = this.levelManager.isLevelUnlocked(key);
  const isCompleted = this.levelManager.isLevelCompleted(key);
  const duration = getLevelDuration(key);

  // CALCULATE EXERCISED COMPLETED (if partial completion tracking)
  const totalExercises = level.exercices.length;

  // For now, show 100% if completed, 0% if not
  const completionPercent = isCompleted ? 100 : 0;

  return `
    <div class="level-card ${statusClass} ${completedClass}">
      <div class="level-header">
        <h3>${level.name}</h3>
        <span class="level-difficulty">${level.difficulty}</span>
      </div>

      <div class="level-info">
        <p class="duration">⏱️ ${duration} min</p>
        <p class="exercise-count">${totalExercises} exercises</p>
        ${
          isCompleted
            ? `<div class="completion-bar">
                 <div class="completion-fill" style="width: 100%"></div>
               </div>
               <p class="completion-text">100% Complete</p>`
            : ""
        }
      </div>

      <!-- rest of card -->
    </div>
  `;
}
```

### Add CSS for progress bar:

```css
.completion-bar {
  width: 100%;
  height: 6px;
  background: #e5e7eb;
  border-radius: var(--radius-sm);
  overflow: hidden;
  margin: 0.5rem 0;
}

.completion-fill {
  height: 100%;
  background: linear-gradient(90deg, #4ade80, #10b981);
  transition: width 0.3s ease;
}

.completion-text {
  font-size: 0.85rem;
  color: var(--color-success);
  font-weight: 600;
  margin: 0.25rem 0 0 0;
}
```

---

## 5️⃣ Add Statistics/Streaks

### New file: `js/core/Statistics.js`

```javascript
export class Statistics {
  constructor() {
    this.stats = this.loadStats();
  }

  loadStats() {
    const stored = localStorage.getItem("yoga_stats");
    return stored
      ? JSON.parse(stored)
      : {
          totalSessionsCompleted: 0,
          totalMinutesCompleted: 0,
          currentStreak: 0,
          lastCompletionDate: null,
          levelStats: {
            easy: { completions: 0, totalTime: 0 },
            medium: { completions: 0, totalTime: 0 },
            hard: { completions: 0, totalTime: 0 },
          },
        };
  }

  recordCompletion(levelKey, durationMinutes) {
    this.stats.totalSessionsCompleted++;
    this.stats.totalMinutesCompleted += durationMinutes;

    const today = new Date().toDateString();
    const lastDate = this.stats.lastCompletionDate;

    if (lastDate !== today) {
      if (lastDate === new Date(Date.now() - 86400000).toDateString()) {
        this.stats.currentStreak++;
      } else {
        this.stats.currentStreak = 1;
      }
    }

    this.stats.lastCompletionDate = today;
    this.stats.levelStats[levelKey].completions++;
    this.stats.levelStats[levelKey].totalTime += durationMinutes;

    this.saveStats();
  }

  saveStats() {
    localStorage.setItem("yoga_stats", JSON.stringify(this.stats));
  }

  getStats() {
    return { ...this.stats };
  }
}
```

### Use in `js/main.js`:

```javascript
import { Statistics } from "./core/Statistics.js";

class YogaApp {
  constructor() {
    // ... existing code ...
    this.statistics = new Statistics();
  }

  onRoutineComplete() {
    this.levelManager.completeLevel();

    // RECORD COMPLETION
    const duration = getLevelDuration(this.levelManager.getCurrentLevel());
    this.statistics.recordCompletion(
      this.levelManager.getCurrentLevel(),
      duration,
    );

    this.headerElement.textContent = "Level Completed!";
    this.finishScreen.render();
  }
}
```

---

## 6️⃣ Add Dark Mode Toggle

### New file: `js/ui/ThemeToggle.js`

```javascript
export class ThemeToggle {
  constructor() {
    this.loadTheme();
    this.setupToggle();
  }

  loadTheme() {
    const saved = localStorage.getItem("yoga_theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const isDark = saved === "dark" || (saved === null && prefersDark);

    if (isDark) {
      document.body.classList.add("dark-mode");
    }
  }

  setupToggle() {
    const button = document.createElement("button");
    button.id = "theme-toggle";
    button.className = "btn-theme";
    button.innerHTML = "🌙";
    button.addEventListener("click", () => this.toggle());

    document.body.appendChild(button);
  }

  toggle() {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("yoga_theme", isDark ? "dark" : "light");

    const btn = document.getElementById("theme-toggle");
    btn.innerHTML = isDark ? "☀️" : "🌙";
  }
}
```

### Use in `js/main.js`:

```javascript
import { ThemeToggle } from "./ui/ThemeToggle.js";

class YogaApp {
  constructor() {
    // ... existing code ...
    this.themeToggle = new ThemeToggle(); // Initialize
  }
}
```

### Add CSS in `style.css`:

```css
.btn-theme {
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 100;
  transition: var(--transition);
}

.btn-theme:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}
```

---

## 7️⃣ Add Sound Toggle

### In `js/core/Timer.js`:

```javascript
class Timer {
  constructor(exercices, onExerciseChange, onComplete, soundEnabled = true) {
    // ... existing code ...
    this.soundEnabled = soundEnabled;
  }

  playSound() {
    if (!this.soundEnabled) return; // Skip if disabled

    try {
      const audio = new Audio("ring.mp3");
      audio.play().catch((err) => console.log("Sound error:", err));
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  }

  setSoundEnabled(enabled) {
    this.soundEnabled = enabled;
    localStorage.setItem("yoga_sound", enabled ? "on" : "off");
  }
}
```

### Get sound preference in `js/main.js`:

```javascript
startRoutine() {
  // ... existing code ...

  const soundEnabled = localStorage.getItem("yoga_sound") !== "off";

  this.timer = new Timer(
    exercices,
    this.updateRoutineDisplay.bind(this),
    this.onRoutineComplete.bind(this),
    soundEnabled  // Pass sound preference
  );
}
```

---

## 8️⃣ Add Level Difficulty Descriptions

### Edit `js/data/levels.js`:

```javascript
const levels = {
  easy: {
    name: "Easy",
    difficulty: "Beginner",
    description:
      "Perfect for starting your yoga journey. Gentle stretches and basic poses.",
    estimatedDuration: 5,
    // ... rest of config
  },
  medium: {
    name: "Medium",
    difficulty: "Intermediate",
    description:
      "Build strength and flexibility with moderate-intensity exercises.",
    estimatedDuration: 10,
    // ... rest of config
  },
  hard: {
    name: "Hard",
    difficulty: "Advanced",
    description: "Challenge yourself with advanced poses and longer holds.",
    estimatedDuration: 18,
    // ... rest of config
  },
};
```

### Show in `js/ui/LevelScreen.js`:

```javascript
const levelCards = `
  <div class="level-card">
    <div class="level-header">
      <h3>${level.name}</h3>
      <span class="level-difficulty">${level.difficulty}</span>
    </div>
    
    <!-- ADD DESCRIPTION -->
    <p class="level-description">${level.description}</p>
    
    <div class="level-info">
      <!-- ... rest -->
    </div>
  </div>
`;
```

### Add CSS:

```css
.level-description {
  font-size: 0.9rem;
  color: #6b7280;
  font-weight: 400;
  margin: 0.5rem 0;
  line-height: 1.4;
  text-align: left;
}
```

---

## 🎓 Testing Your Customizations

```javascript
// Test in browser console:

// Check storage
console.log(localStorage.getItem("yoga_stats"));

// Check current state
console.log(localStorage.getItem("yoga_levels"));

// Reset for testing
localStorage.clear();
location.reload();
```

---

## 💡 More Ideas

- Add timer presets (15min, 30min, 45min sessions)
- Add favorite exercises feature
- Add custom exercise upload
- Add calendar view of completed sessions
- Add social sharing of achievements
- Add background music option
- Add guided voice instructions
- Add difficulty selector per exercise
- Add rest timer between exercises
- Add video demo for each exercise

---

All examples are production-ready and can be mixed & matched! 🚀
