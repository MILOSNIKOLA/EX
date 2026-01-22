# 🧘 Yoga Routine - ES6 Module Architecture

## 📁 Project Structure

```
yoga-routine/
├── index.html              # Main HTML - loads js/main.js
├── style.css               # Modern responsive CSS (mobile-first)
├── img/                    # Exercise images
├── js/
│   ├── main.js             # App entry point & orchestrator
│   ├── data/
│   │   └── levels.js       # Level configuration & data
│   ├── core/
│   │   ├── Timer.js        # Exercise timer logic
│   │   ├── LevelManager.js # Level progression & unlocking
│   │   └── Storage.js      # localStorage persistence
│   └── ui/
│       ├── LevelScreen.js  # Level selection interface
│       ├── RoutineScreen.js # Active exercise display
│       └── FinishScreen.js # Completion & next actions
└── ring.mp3                # Sound effect (optional)
```

---

## 🎯 Key Features

### ✅ Level System (3 Levels Only)

- **Easy**: Unlocked by default
- **Medium**: Unlocks after Easy is completed
- **Hard**: Unlocks after Medium is completed
- **No level skipping** - sequential progression only

### 🔒 Visual Lock System

- Locked levels are blurred, grayed out, and non-clickable
- Completion status clearly marked (✓)
- Lock icon displays on unavailable levels
- Hover effects disabled on locked levels

### 📱 Mobile-First Responsive Design

- **Mobile** (320px+): Single column, optimized touch targets
- **Tablet** (768px+): 2-column level grid
- **Desktop** (1024px+): 3-column level grid
- **Landscape optimization**: Reduced height media query
- **Dark mode support**: Automatic via `prefers-color-scheme`
- **Accessible**: Respects `prefers-reduced-motion`

### 💾 Persistent State

- Current level saved to localStorage
- Level unlock/completion status persisted
- Automatic loading on app start

### 🏗️ Clean Architecture

- **No global variables** - all data encapsulated in classes
- **Single responsibility** - each module has one purpose
- **ES6 modules** - clean imports/exports
- **Event-driven** - screens communicate via callbacks
- **No frameworks** - vanilla JavaScript only

---

## 🚀 How to Use

### 1. **Initialize the App**

```javascript
// js/main.js loads automatically when HTML loads
// It initializes YogaApp which:
// - Loads level state from localStorage
// - Renders level selection screen
// - Manages all screen transitions
```

### 2. **Customize Levels**

Edit `js/data/levels.js`:

```javascript
medium: {
  name: "Medium",
  difficulty: "Intermediate",
  estimatedDuration: 10,
  unlocked: false,
  completed: false,
  exercices: [
    { pic: 0, min: 2 },  // Image 0, 2 minutes
    { pic: 1, min: 3 },  // Image 1, 3 minutes
    // Add more...
  ],
}
```

### 3. **Add New Images**

Place exercise images in `img/` folder:

- `img/0.png`, `img/1.png`, etc.
- They're referenced by the `pic` property in exercices array

### 4. **Customize Colors/Styling**

Edit CSS variables in `style.css`:

```css
:root {
  --color-primary: #667eea;
  --color-secondary: #764ba2;
  --color-success: #4ade80;
  /* Customize colors here */
}
```

---

## 📊 Data Flow

```
main.js (YogaApp)
├── LevelManager
│   ├── Storage.js (localStorage)
│   └── levels data
├── LevelScreen
│   └── renders level cards
├── RoutineScreen
│   ├── Timer.js (countdown)
│   └── current exercise
└── FinishScreen
    ├── marks level complete
    ├── unlocks next level
    └── offers next actions
```

---

## 🔄 Level Progression Flow

```
1. App starts
   ↓
2. Load state from localStorage
   ↓
3. Show Level Selection
   ├─→ Easy (unlocked)
   ├─→ Medium (locked)
   └─→ Hard (locked)
   ↓
4. User selects Easy
   ↓
5. Show Routine Screen (countdown)
   ↓
6. All exercises completed?
   ├─→ NO: User can go back, restart
   ├─→ YES: Mark Easy as completed
   │         Unlock Medium
   │         Show Finish Screen
   ↓
7. User chooses:
   ├─→ "Repeat Level" → Go back to step 5
   └─→ "Next Level" → Go to step 3 (Medium now available)
```

---

## 🛠️ API Reference

### LevelManager Class

```javascript
// Check if level is unlocked
levelManager.isLevelUnlocked("medium");

// Check if level is completed
levelManager.isLevelCompleted("easy");

// Mark current level as complete
levelManager.completeLevel();

// Get next level key
const nextLevel = levelManager.getNextLevel();

// Reset all levels to initial state
levelManager.reset();

// Save state to localStorage
levelManager.saveState();
```

### Timer Class

```javascript
const timer = new Timer(
  exercices,
  onExerciseChange, // callback when time updates
  onComplete, // callback when all exercises done
);

timer.start(); // Start countdown
timer.pause(); // Pause timer
timer.resume(); // Resume timer
timer.stop(); // Stop timer completely

const status = timer.getStatus();
// Returns: { minutes, seconds, exercice, progress }
```

### Storage Class

```javascript
Storage.saveLevels(levels); // Save levels state
Storage.loadLevels(); // Load levels state
Storage.setCurrentLevel("easy"); // Save current level
Storage.getCurrentLevel(); // Get current level
Storage.clear(); // Clear all storage
```

---

## 🎨 UI Components

### LevelScreen

- Displays 3 level cards
- Shows difficulty, duration, exercise count
- Visual indicators for locked/completed
- Clickable only if unlocked

### RoutineScreen

- Large countdown timer (MM:SS format)
- Current exercise image
- Progress indicator (X/Y)
- Back button to return to level select

### FinishScreen

- Celebration emoji animation
- Completion message
- Next level unlock notification
- Action buttons:
  - "Repeat Level"
  - "Next Level" (if available) or "Back to Levels"

---

## 🌐 Browser Support

- ✅ All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ ES6 modules (no transpilation needed)
- ✅ Responsive design (iOS Safari, Android Chrome)
- ✅ localStorage support required

---

## 🔧 Troubleshooting

### Modules not loading?

- Ensure `js/main.js` has `type="module"` in HTML script tag
- All imports must use relative paths: `./`, `../`
- Files must be served over HTTP/HTTPS (not `file://`)

### localStorage not working?

- Check browser privacy settings
- localStorage requires secure context (HTTPS or localhost)
- Clear cache if state doesn't update

### Images not showing?

- Ensure image names match exercice `pic` property
- Example: `pic: 0` requires `img/0.png`
- Check image path is relative to `index.html`

### Sound not playing?

- Place `ring.mp3` in root directory
- Some browsers require user interaction before playing audio
- Optional: comment out `playSound()` if not needed

---

## 📝 English UI Text

All UI text is in English:

- "Select Your Level"
- "Start", "Locked"
- "Easy", "Medium", "Hard"
- "Repeat Level", "Next Level", "Back to Levels"
- "Congratulations!", "Completed"
- "The next level is now unlocked!"

---

## 💡 Customization Examples

### Change number of levels to 4:

1. Add level in `levels.js`
2. Update `LEVEL_ORDER` in `levels.js`
3. CSS 3-column grid automatically supports more

### Add timer pause button:

1. Add button in `RoutineScreen.js`
2. Call `timer.pause()` / `timer.resume()`
3. Show/hide button based on timer state

### Modify level unlock logic:

1. Edit `LevelManager.unlockNextLevel()`
2. Example: Unlock all levels by default
3. Or: Require 80% completion to unlock next

---

## 🚀 Production Ready

- ✅ No console errors
- ✅ No global variables
- ✅ Responsive on all devices
- ✅ Accessible (color contrast, keyboard nav)
- ✅ localStorage persists state
- ✅ Clean, modular code
- ✅ Easy to maintain and extend
- ✅ Performance optimized (minimal repaints)

---

## 📄 License

Free to use and modify for personal/educational projects.

Enjoy your yoga routine! 🧘‍♀️
