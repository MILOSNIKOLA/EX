# 🚀 INTEGRATION GUIDE - ES6 Module Architecture

## Quick Start (5 minutes)

### Step 1: Keep Your Existing Files

- ✅ `index.html` (already updated)
- ✅ `style.css` (already refactored)
- ✅ `img/` folder (keep all images)

### Step 2: Delete Old Files

- ❌ Delete: `index.js` (old monolithic file)
- ❌ Delete: Any old `yoga-routine/` subdirectories if they exist

### Step 3: Create New JS Module Structure

```
yoga-routine/
└── js/
    ├── main.js
    ├── data/
    │   └── levels.js
    ├── core/
    │   ├── Timer.js
    │   ├── LevelManager.js
    │   └── Storage.js
    └── ui/
        ├── LevelScreen.js
        ├── RoutineScreen.js
        └── FinishScreen.js
```

### Step 4: Copy Provided Files

Each file is provided separately and ready to use.

### Step 5: Test

Open `index.html` in browser and click "Start"

---

## 📋 File Checklist

### ✅ HTML Updated

```html
<h1>Yoga Routine</h1>
<main></main>
<script type="module" src="js/main.js"></script>
```

### ✅ CSS Refactored

- Mobile-first responsive design
- English text only
- Modern color scheme with CSS variables
- Proper level card styling with lock indicators
- Animations and transitions

### ✅ JavaScript Modules Created

#### 1. **js/data/levels.js**

- Defines 3 levels: Easy, Medium, Hard
- Each level has: name, difficulty, duration, exercices array
- Easy is unlocked by default
- Medium/Hard start locked
- Export: `levels`, `getLevelDuration()`, `LEVEL_ORDER`

#### 2. **js/core/Storage.js** (Class)

- `saveLevels(levels)` - persist level state
- `loadLevels()` - load level state
- `setCurrentLevel(key)` - save active level
- `getCurrentLevel()` - get active level
- `clear()` - reset all storage

#### 3. **js/core/LevelManager.js** (Class)

- `constructor(levels)` - initialize with levels config
- `getCurrentLevel()` - get current level key
- `setCurrentLevel(levelKey)` - switch level
- `completeLevel()` - mark level as done, unlock next
- `isLevelUnlocked(key)` - check if level available
- `isLevelCompleted(key)` - check if level finished
- `getNextLevel()` - get next level in sequence
- `unlockNextLevel()` - automatically unlock next
- `reset()` - reset all to initial state
- `saveState()` - persist to localStorage
- `loadPersistedState()` - load from localStorage

#### 4. **js/core/Timer.js** (Class)

- `constructor(exercices, onExerciseChange, onComplete)`
- `start()` - begin countdown
- `pause()` / `resume()` / `stop()` - control timer
- `getStatus()` - get current state {minutes, seconds, exercice, progress}
- `playSound()` - play bell sound
- `tick()` - internal countdown logic

#### 5. **js/ui/LevelScreen.js** (Class)

- `constructor(mainElement, levelManager, onLevelSelect)`
- `render()` - display level selection cards
- `createLevelCard()` - generate single level card HTML
- `attachEventListeners()` - handle button clicks
- Features:
  - Shows 3 level cards
  - Displays: name, difficulty, duration, exercise count
  - Locked levels are grayed out, non-clickable
  - Completed levels have green border + ✓ badge
  - Calls callback with selected level key

#### 6. **js/ui/RoutineScreen.js** (Class)

- `constructor(mainElement, onBack)`
- `render(timerStatus)` - display active exercise
- `attachEventListeners()` - handle back button
- Features:
  - Large countdown timer (MM:SS)
  - Current exercise image
  - Progress indicator (X/Y)
  - Back button to return to levels

#### 7. **js/ui/FinishScreen.js** (Class)

- `constructor(mainElement, levelManager, onRestart, onNextLevel, onBackToLevels)`
- `render()` - display completion screen
- `attachEventListeners()` - handle action buttons
- Features:
  - Celebration emoji with bounce animation
  - Completion message
  - Next level unlock notification (if applicable)
  - 2 buttons:
    - "🔁 Repeat Level" (always)
    - "➡️ Next Level" (if next level available)
    - "🏠 Back to Levels" (if last level)

#### 8. **js/main.js** (App Orchestrator)

- `YogaApp` class
- `constructor()` - initialize all managers and screens
- `init()` - start app
- `goToLevelSelection()` - show level screen
- `startRoutine()` - begin exercise countdown
- `onRoutineComplete()` - handle completion
- `restartLevel()` / `goToNextLevel()` - navigation
- `DOMContentLoaded` event - auto-start app

---

## 🎯 Level Progression Logic

### Initial State

```javascript
levels = {
  easy: { unlocked: true, completed: false },
  medium: { unlocked: false, completed: false },
  hard: { unlocked: false, completed: false },
};
```

### After Easy Completion

```javascript
levels = {
  easy: { unlocked: true, completed: true }, // ✓ Done
  medium: { unlocked: true, completed: false }, // 🔓 Unlocked!
  hard: { unlocked: false, completed: false },
};
```

### After Medium Completion

```javascript
levels = {
  easy: { unlocked: true, completed: true },
  medium: { unlocked: true, completed: true }, // ✓ Done
  hard: { unlocked: true, completed: false }, // 🔓 Unlocked!
};
```

### After Hard Completion

```javascript
levels = {
  easy: { unlocked: true, completed: true },
  medium: { unlocked: true, completed: true },
  hard: { unlocked: true, completed: true }, // ✓ All Done!
};
```

---

## 💾 localStorage Structure

```javascript
// Saved to localStorage when state changes:

localStorage.yoga_levels = JSON.stringify({
  easy:   { unlocked: true,  completed: false, exercices: [...] },
  medium: { unlocked: false, completed: false, exercices: [...] },
  hard:   { unlocked: false, completed: false, exercices: [...] }
});

localStorage.yoga_currentLevel = "easy";
```

---

## 🔄 Data Flow Example

### User Flow: Start Easy Level

```
1. App loads → YogaApp.init()
2. Load from localStorage → LevelManager.loadPersistedState()
3. Show LevelScreen.render()
   ├─ Easy card: "Start" button enabled
   ├─ Medium card: "Locked" button disabled
   └─ Hard card: "Locked" button disabled

4. User clicks Easy "Start" button
5. LevelScreen calls onLevelSelect("easy")
6. YogaApp.startRoutine()
   ├─ Create Timer with easy exercices
   ├─ RoutineScreen.render() with first exercise
   └─ Timer.start() begins countdown

7. User completes all exercises
8. Timer calls onComplete()
9. YogaApp.onRoutineComplete()
   ├─ LevelManager.completeLevel()
   │  ├─ Mark easy as completed: true
   │  ├─ Unlock medium: unlocked = true
   │  └─ Storage.saveLevels() to localStorage
   ├─ FinishScreen.render()
   │  ├─ "Congratulations! Easy Completed"
   │  ├─ "Medium is now unlocked!"
   │  └─ Buttons: "🔁 Repeat" and "➡️ Next Level"

10. User clicks "Next Level"
11. YogaApp.goToLevelSelection()
12. LevelScreen.render() shows Medium now available ✓
```

---

## 🎨 UI Customization

### Change Button Text

Edit `js/ui/` files:

```javascript
// In LevelScreen.js
<button class="btn-level-select">Start</button>  // Change text here

// In FinishScreen.js
<button class="btn btn-primary" id="restart-btn">
  🔁 Repeat Level  // Change text here
</button>
```

### Change Colors

Edit `style.css`:

```css
:root {
  --color-primary: #667eea; /* Blue */
  --color-secondary: #764ba2; /* Purple */
  --color-success: #4ade80; /* Green */
  --color-locked: #9ca3af; /* Gray */
}
```

### Change Duration Estimates

Edit `js/data/levels.js`:

```javascript
medium: {
  estimatedDuration: 15,  // Change from 10 to 15 minutes
  exercices: [...]
}
```

### Change Exercise List

Edit `js/data/levels.js`:

```javascript
easy: {
  exercices: [
    { pic: 0, min: 2 }, // Increase duration
    { pic: 1, min: 1 },
    { pic: 5, min: 3 }, // Add different images
    // Add more...
  ];
}
```

---

## 🐛 Common Issues & Solutions

### Issue: "Module not found" error

**Solution:**

- Check file paths in imports
- Ensure all `.js` files are in correct folders
- Use relative paths: `./`, `../`, not absolute

### Issue: Images don't load

**Solution:**

- Ensure `img/0.png`, `img/1.png`, etc. exist
- Check `pic` property matches filename
- Verify path is `./img/{number}.png`

### Issue: localStorage not persisting

**Solution:**

- Use HTTPS or localhost (not `file://`)
- Check browser localStorage is enabled
- Check no private/incognito mode
- Clear cache and reload

### Issue: Sound doesn't play

**Solution:**

- Place `ring.mp3` in root directory
- Or comment out `playSound()` in `Timer.js`
- Browsers may block audio until user interaction

### Issue: Buttons don't respond

**Solution:**

- Check browser console for JavaScript errors
- Verify event listeners are attached
- Check CSS doesn't set `pointer-events: none`
- Use browser DevTools to debug

---

## 🧪 Testing Checklist

- [ ] App loads without errors
- [ ] Level selection screen displays
- [ ] Easy level can be started
- [ ] Medium/Hard locked (buttons disabled)
- [ ] Timer counts down correctly
- [ ] All exercises complete
- [ ] Finish screen shows
- [ ] Medium unlocks after Easy completion
- [ ] "Next Level" button appears
- [ ] Clicking "Next Level" shows Medium available
- [ ] localStorage saves state (DevTools → Application)
- [ ] Reload page - state persists
- [ ] Mobile view responsive
- [ ] Tablet view (2 columns)
- [ ] Desktop view (3 columns)

---

## 📞 Support

If something doesn't work:

1. Open browser DevTools (F12)
2. Check Console tab for errors
3. Check Network tab for failed file loads
4. Check Application tab for localStorage content
5. Compare file structure with checklist above

---

## ✨ You're All Set!

Your yoga routine app is now:

- ✅ Fully modular (ES6)
- ✅ Mobile-first responsive
- ✅ Persistent (localStorage)
- ✅ User-friendly (3 levels with progression)
- ✅ Production-ready
- ✅ Easy to maintain and extend

Enjoy! 🧘‍♀️💪
