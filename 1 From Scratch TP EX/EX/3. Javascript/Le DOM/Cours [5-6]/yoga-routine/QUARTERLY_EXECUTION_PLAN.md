# 🧘 YOGA APP – 12-MONTH DEVELOPMENT ROADMAP & PRODUCT STRATEGY (2026)

**Role:** Product Team Lead (2026)  
**Perspective:** Premium wellness, minimal design, ethical, sustainable  
**Timeline:** January – December 2026  
**Team:** 1 solo developer + community feedback

---

## 📍 OVERVIEW: THE 12-MONTH JOURNEY

```
Q1 2026 (Jan-Mar)    → MVP+ (Foundation)
Q2 2026 (Apr-Jun)    → Engagement (Retention)
Q3 2026 (Jul-Sep)    → Premium (Differentiation)
Q4 2026 (Oct-Dec)    → Evolution (Sustainability)
```

**North Star Metric:** 60% Day-30 retention (calm apps baseline: 35%)

---

# 🗓️ PART 1: QUARTERLY DEVELOPMENT ROADMAP

---

## Q1 2026: CORE FOUNDATION (MVP+)

**Jan 1 – Mar 31 | 12 weeks**

### Objectives

1. Establish product identity (calm, private, respectful)
2. Fix level progression system (current 3-level → 5-level with Beginner/Grounding)
3. Implement habit loop foundation (streak system)
4. Create metrics infrastructure (skill tracking, mood)
5. Build trust through transparency (clear data policy)

### Features to Deliver

| Feature                     | Category | Priority | Why Q1                                       |
| --------------------------- | -------- | -------- | -------------------------------------------- |
| **Beginner level**          | Core     | P0       | Entry ramp, critical for retention           |
| **Grounding level**         | Core     | P0       | Day 3-7 bridge, confidence builder           |
| **Mood + Energy selector**  | UX       | P0       | Signals user agency, enables personalization |
| **Streak counter**          | Core     | P0       | Habit loop foundation                        |
| **Recovery Mode**           | Core     | P1       | Anti-burnout, retention saver                |
| **Skill tracking (3 axes)** | Data     | P1       | Foundation for Phase 2 personalization       |
| **Post-session reflection** | UX       | P1       | Emotional + data connection                  |
| **UI visual refresh**       | Design   | P1       | Premium feeling from day 1                   |
| **Dark mode native**        | Design   | P1       | Accessibility + premium signal               |
| **Data privacy policy**     | Trust    | P1       | "What data you keep" transparency            |

### Technical Focus

- [ ] Refactor levels.js (add Beginner, Grounding)
- [ ] Create MetricsService.js (streak, skills, mood)
- [ ] Implement mood selector screen
- [ ] Add Recovery Mode logic (conditional routing)
- [ ] CSS refactor: dark mode + premium spacing
- [ ] localStorage schema expansion (metrics, history)

### UX Focus

- [ ] Onboarding flow (Beginner level first, no skipping)
- [ ] Session start: mood + energy question (2 taps, takes 3 sec)
- [ ] Session end: mood reflection (1 tap feedback)
- [ ] Streak display (calm, no pressure)
- [ ] Recovery Mode messaging (kind, not punishing)

### Success Criteria

**Quantitative:**

- ✅ 100+ alpha testers (friends, yoga groups)
- ✅ Day 1 retention: 90%+
- ✅ Day 7 retention: 60%+
- ✅ Day 14 retention: 45%+
- ✅ Avg session duration: 10+ minutes
- ✅ Load time: < 2 seconds

**Qualitative:**

- ✅ Feedback: "This feels calm, not pushy"
- ✅ No complaints about notifications (off by default)
- ✅ Users mention "I like that there's no social pressure"

### Risk Mitigation

- **Risk:** Too many features, launch delayed
  - **Mitigation:** Cut UI polish if needed; ship MVP, iterate
- **Risk:** Users don't like Beginner level (too easy)
  - **Mitigation:** 2-week user test, gather feedback early
- **Risk:** Streak system feels pressuring
  - **Mitigation:** Recovery Mode must be obvious, no guilt messaging

---

## Q2 2026: ENGAGEMENT & PROGRESS (Retention)

**Apr 1 – Jun 30 | 13 weeks**

### Objectives

1. Give users visibility into progress (show impact)
2. Sustain daily habit (without pressure)
3. Implement soft unlock conditions (skill-based)
4. Create PWA experience (native-like feel)
5. Build community trust (testimonials, word-of-mouth)

### Features to Deliver

| Feature                        | Category  | Priority | Why Q2                                    |
| ------------------------------ | --------- | -------- | ----------------------------------------- |
| **Dashboard (weekly heatmap)** | Analytics | P0       | Visual habit proof, motivation            |
| **Skill radar chart**          | Analytics | P0       | Show meaningful progress                  |
| **Mood trend analysis**        | Analytics | P1       | Show yoga's real impact                   |
| **PWA + offline mode**         | Tech      | P0       | Premium UX, works without internet        |
| **Service Worker install**     | Tech      | P1       | "Add to home screen" option               |
| **Weekly Flow suggestions**    | UX        | P1       | Light structure (not mandatory)           |
| **Skill-based unlock system**  | Core      | P1       | Move beyond "just streak"                 |
| **Milestone cards**            | UX        | P2       | Gentle celebration (3-day, 7-day, 30-day) |
| **Ambient audio options**      | Feature   | P2       | Optional background sound                 |
| **User testimonials page**     | Trust     | P2       | Social proof (privacy-respecting)         |

### Technical Focus

- [ ] Create DashboardScreen.js (heatmap visualization)
- [ ] Implement SkillRadar.js component (SVG chart)
- [ ] Build MetricsCalculator (mood trends, consistency score)
- [ ] Add Service Worker (offline-first, caching strategy)
- [ ] Create WeeklyFlowRecommender.js
- [ ] Refactor LevelManager (skill-based unlock conditions)
- [ ] Add audio context (optional ambient sounds)

### UX Focus

- [ ] Dashboard: Single view showing all progress (no tabs)
- [ ] Mood before/after visualization (not points, impact)
- [ ] Unlock conditions visible in level cards ("Balance 80% to unlock")
- [ ] Weekly Flow: Suggestions (not mandates) with skip option
- [ ] Testimonials: Real feedback, privacy-focused (no names, just location/age)

### Success Criteria

**Quantitative:**

- ✅ Day 30 retention: 45%+ (vs. wellness app avg 25%)
- ✅ DAU/MAU ratio: 40%+ (daily active users / monthly)
- ✅ Avg weekly sessions: 5+ (5 days/week practice)
- ✅ Dashboard views: 70%+ of users check progress weekly
- ✅ PWA installs: 20%+ of users install app

**Qualitative:**

- ✅ Feedback: "I love seeing my mood improve"
- ✅ Users mention "No notifications, which I love"
- ✅ Organic word-of-mouth: 30%+ new users from recommendations

### Risk Mitigation

- **Risk:** Dashboard is overwhelming
  - **Mitigation:** Single-screen view, minimal data
- **Risk:** Users game the system (artificially high moods)
  - **Mitigation:** Emphasis on "honest reflection," no rewards for specific moods
- **Risk:** PWA complexity breaks existing app
  - **Mitigation:** Test extensively on iOS + Android before launch

---

## Q3 2026: PREMIUM EXPERIENCE (Differentiation)

**Jul 1 – Sep 30 | 13 weeks**

### Objectives

1. Implement premium UX interactions (gestures, haptics)
2. Add depth for power users (Advanced, Expert levels)
3. Build accessibility foundation (low vision, anxiety-safe modes)
4. Refactor architecture (event-driven, state machine)
5. Establish design system (consistent components)

### Features to Deliver

| Feature                                 | Category      | Priority | Why Q3                                  |
| --------------------------------------- | ------------- | -------- | --------------------------------------- |
| **Gesture navigation**                  | UX            | P0       | Premium interaction (swipe down = back) |
| **Haptic feedback**                     | UX            | P1       | Subtle, elegant feedback                |
| **Advanced level (flex/strength path)** | Core          | P1       | Depth for dedicated users               |
| **Expert level**                        | Core          | P2       | End-game for 1-2% of users              |
| **Low vision mode**                     | Accessibility | P0       | 18pt+ fonts, high contrast              |
| **Anxiety-safe mode**                   | Accessibility | P0       | No timers, custom UX                    |
| **Event-driven refactor**               | Tech          | P0       | Clean architecture, future-proof        |
| **State machine (progression)**         | Tech          | P0       | Clear unlock logic, testable            |
| **Design system (components)**          | Design        | P1       | Button, Card, Modal, Badge standards    |
| **Dark mode optimization**              | Design        | P1       | Equally beautiful as light mode         |
| **Breath guide animation**              | Feature       | P2       | Subtle sine wave for breathing          |

### Technical Focus

- [ ] Refactor main.js → event-driven architecture
- [ ] Implement ProgressionStateMachine.js
- [ ] Create GestureController.js (swipe, long-press)
- [ ] Build AccessibilityMode service
- [ ] Implement HapticFeedback API
- [ ] Create DesignSystem.js (component library)
- [ ] Add animation utilities (breath, transitions)
- [ ] Expand CSS variables (accessibility overrides)

### UX Focus

- [ ] Gesture demo on first launch (interactive tutorial)
- [ ] Low vision mode: Font size selector (14-24pt)
- [ ] Anxiety-safe: Toggle on settings, hides timer + pressure
- [ ] Advanced/Expert: Show unlock progress clearly
- [ ] Animations: Only play if user hasn't disabled (prefers-reduced-motion)

### Success Criteria

**Quantitative:**

- ✅ Gesture adoption: 40%+ of daily sessions use swipe
- ✅ Low vision mode: 2-3% of users (typical for accessibility features)
- ✅ Anxiety-safe mode: 5-8% of users (underserved market)
- ✅ Advanced level completion: 20%+ of users attempt
- ✅ Code complexity: All modules < 300 lines, no circular dependencies

**Qualitative:**

- ✅ Feedback: "This app respects how I use my phone"
- ✅ Users with disabilities: "Finally, an accessible wellness app"
- ✅ Architecture review: No refactoring blockers identified

### Risk Mitigation

- **Risk:** Gestures confuse older users
  - **Mitigation:** Keep buttons visible, gestures optional
- **Risk:** Event-driven refactor introduces bugs
  - **Mitigation:** Extensive testing, version control, rollback plan
- **Risk:** Accessibility features don't work properly
  - **Mitigation:** Test with real users (low vision, anxiety users)

---

## Q4 2026: EVOLUTION & SUSTAINABILITY

**Oct 1 – Dec 31 | 13 weeks**

### Objectives

1. Prepare for long-term maintenance (clean code, tests)
2. Implement adaptive features (AI without cloud)
3. Explore ethical monetization (if needed)
4. Build community (documentation, sharing)
5. Plan 2027 roadmap (feedback-driven)

### Features to Deliver

| Feature                        | Category  | Priority | Why Q4                                 |
| ------------------------------ | --------- | -------- | -------------------------------------- |
| **Adaptive routine generator** | Feature   | P1       | Local AI, personalizes based on skills |
| **Unit + integration tests**   | Tech      | P0       | Long-term maintainability              |
| **Flow Master level**          | Core      | P2       | Ultimate: uninterrupted 60-90 min      |
| **Zen Mode (breathwork)**      | Core      | P2       | Alternative entry point                |
| **Multi-language support**     | i18n      | P2       | Spanish, French, German                |
| **User testimonials video**    | Marketing | P2       | Social proof (opt-in only)             |
| **Monetization experiment**    | Business  | P1       | Optional donation, measure uptake      |
| **Data export feature**        | Privacy   | P1       | User downloads their own data          |
| **Community docs**             | Content   | P2       | How to fork, customize, extend         |
| **2027 roadmap**               | Planning  | P1       | Based on user feedback                 |

### Technical Focus

- [ ] Create AdaptiveRoutineGenerator.js (local ML-like logic)
- [ ] Write unit tests (Jest + Vitest setup)
- [ ] Implement i18n system (locale switching)
- [ ] Create DataExport service (JSON, CSV)
- [ ] Build Donation flow (Stripe/PayPal integration minimal)
- [ ] Document API for community forks
- [ ] Performance optimization (code splitting, lazy loading)

### UX Focus

- [ ] Adaptive routines: Show recommended level based on skills
- [ ] Flow Master: Visual "uninterrupted" mode (no exercise markers)
- [ ] Zen Mode: Breathing-only, no poses required
- [ ] Donation prompt: Subtle, appears only after 30-day retention
- [ ] Settings: Data export button (full transparency)

### Success Criteria

**Quantitative:**

- ✅ 10,000+ total installs/users
- ✅ 60%+ day-30 retention maintained
- ✅ 1,000+ monthly active users
- ✅ Test coverage: 60%+ (unit tests)
- ✅ Lighthouse score: 90+ (performance, accessibility)
- ✅ Donation uptake: 3-5% (if implemented)

**Qualitative:**

- ✅ Zero data privacy complaints
- ✅ Users excited about 2027 features
- ✅ Code is clean, easy for community to contribute
- ✅ Community forks created (shows extensibility)

### Risk Mitigation

- **Risk:** Adaptive routine generator over-engineers
  - **Mitigation:** Start simple, validate with users
- **Risk:** Monetization breaks trust
  - **Mitigation:** Make it optional, never paywalled
- **Risk:** Tests become bloat
  - **Mitigation:** Test critical paths only, not UI details

---

# 🧩 PART 2: DEVELOPMENT TICKETS BREAKDOWN

---

## Q1 2026: DEVELOPMENT TICKETS

### Ticket Q1-001: Add Beginner Level

**Priority:** P0 | **Complexity:** Low | **Effort:** 3-4 hours

**Description:**
Create a new "Beginner" level (5-7 minutes) with 3-4 simple poses. This is the entry point for new users.

**Acceptance Criteria:**

- [ ] Beginner level appears first in level selection
- [ ] Unlocked by default (Day 1)
- [ ] Contains 3-4 poses from easiest set (pics 0-2)
- [ ] Each pose: 1-1.5 minutes
- [ ] Unlocks Grounding when completed

**Implementation:**

```javascript
// In levels.js, add:
beginner: {
  name: "Beginner",
  tier: 1,
  unlock_condition: { type: "day_one" },
  exercices: [
    { pic: 0, min: 1 },
    { pic: 1, min: 1 },
    { pic: 2, min: 1 },
  ],
  // ... other fields
}
```

**Dependencies:** None  
**Tickets that depend on this:** Q1-002, Q1-003

---

### Ticket Q1-002: Add Grounding Level

**Priority:** P0 | **Complexity:** Low | **Effort:** 3-4 hours

**Description:**
Create "Grounding" level (8-10 minutes). Unlocks after 1 Beginner completion. Bridges confidence gap between Beginner and Steady.

**Acceptance Criteria:**

- [ ] Grounding level appears between Beginner and Steady
- [ ] Unlocks after 1 Beginner completion
- [ ] Contains 5-6 poses
- [ ] Each pose: 1.5-2 minutes
- [ ] Unlocks Steady when completed 3 times OR 5-day streak

**Implementation:**

```javascript
grounding: {
  name: "Grounding",
  tier: 1,
  unlock_condition: {
    type: "completions",
    level: "beginner",
    count: 1
  },
  unlock_next_on: {
    type: "or",
    conditions: [
      { type: "completions", count: 3 },
      { type: "streak", days: 5 }
    ]
  },
  // ...
}
```

**Dependencies:** Q1-001  
**Tickets that depend on this:** Q1-005

---

### Ticket Q1-003: Implement Mood + Energy Selector

**Priority:** P0 | **Complexity:** Medium | **Effort:** 6-8 hours

**Description:**
Create pre-session screen where users select mood (Stressed, Calm, Energized, Tired) and energy level (Low, Medium, High). Store selection for post-session reflection.

**Acceptance Criteria:**

- [ ] Screen appears after level selection, before session start
- [ ] 4 mood options with emoji + clear text
- [ ] 3 energy level options with visual indicators
- [ ] Selection stored in sessionHistory
- [ ] Skip option for returning users (optional)
- [ ] Mobile optimized (large buttons, single column)

**Implementation:**
Create new file: `js/ui/MoodEnergyScreen.js`

```javascript
class MoodEnergyScreen {
  constructor(container, onSubmit) {
    this.container = container;
    this.onSubmit = onSubmit;
  }

  render() {
    const html = `
      <div class="mood-energy-selector">
        <h2>How are you today?</h2>
        <div class="mood-grid">
          <!-- 4 mood buttons -->
        </div>
        <div class="energy-grid">
          <!-- 3 energy buttons -->
        </div>
        <button class="btn-continue">Let's go</button>
      </div>
    `;
    this.container.innerHTML = html;
    this.attachListeners();
  }
}
```

**Dependencies:** None  
**Tickets that depend on this:** Q1-007, Q2-001

---

### Ticket Q1-004: Create MetricsService

**Priority:** P0 | **Complexity:** Medium | **Effort:** 8-10 hours

**Description:**
Build service to track streaks, skills (balance, flexibility, breathwork), and mood. This is foundation for all analytics.

**Acceptance Criteria:**

- [ ] Tracks currentStreak, longestStreak, totalSessions
- [ ] Tracks 3 skills (balance 0-100, flexibility 0-100, breathwork 0-100)
- [ ] Logs each session (date, level, duration, mood_before, mood_after)
- [ ] Calculates consistency score (0-100)
- [ ] Persists to localStorage
- [ ] No memory leaks (cleans old data beyond 90 days)

**Implementation:**
Create: `js/services/MetricsService.js`

```javascript
class MetricsService {
  constructor() {
    this.metrics = Storage.loadMetrics();
  }

  recordSession(sessionData) {
    // Update streak
    // Update skills (+1 for all, +2 if streak continues)
    // Log to history
    // Persist
  }

  getConsistencyScore() {
    // Algorithm: (streak * 0.6 + weeklyAvg * 10) * 0.5
  }

  getSkillTree() {
    return this.metrics.skills;
  }
}
```

**Dependencies:** Q1-001 (levels must exist)  
**Tickets that depend on this:** Q1-007, Q2-001, Q2-002

---

### Ticket Q1-005: Implement Recovery Mode

**Priority:** P1 | **Complexity:** Medium | **Effort:** 6-8 hours

**Description:**
When user misses 2+ days, unlock "Recovery Mode" – a 3-5 minute simplified session that counts toward streak without pressure.

**Acceptance Criteria:**

- [ ] Recovery Mode button appears after 2-day gap
- [ ] Session is 3-5 minutes (any simple level)
- [ ] Counts toward streak + consistency
- [ ] Counts toward unlock progress (50% weight)
- [ ] Kind messaging: "Welcome back. Let's ease in."
- [ ] Can be used once per 2-day gap

**Implementation:**
Add to LevelManager.js

```javascript
checkRecoveryMode() {
  const daysSinceLast = this.getDaysSinceLastSession();
  if (daysSinceLast >= 2 && !this.recoveryModeUsedToday) {
    return true;
  }
  return false;
}

useRecoveryMode() {
  // Set flag, create mini-session
}
```

**Dependencies:** Q1-004 (needs metrics)  
**Tickets that depend on this:** Main flow

---

### Ticket Q1-006: Post-Session Mood Reflection

**Priority:** P1 | **Complexity:** Low | **Effort:** 4-5 hours

**Description:**
After session completion, show mood selector again (before finish screen). Calculate mood shift.

**Acceptance Criteria:**

- [ ] Appears immediately after last exercise ends
- [ ] Same 4 mood options
- [ ] Calculate mood shift (after - before)
- [ ] Display shift on finish screen ("Energy: 3 → 7 (+4)")
- [ ] Store in sessionHistory

**Implementation:**
Modify FinishScreen.js to show mood comparison.

**Dependencies:** Q1-003, Q1-004  
**Tickets that depend on this:** Main flow

---

### Ticket Q1-007: UI Visual Refresh + Dark Mode

**Priority:** P1 | **Complexity:** Medium | **Effort:** 10-12 hours

**Description:**
Refactor entire CSS:

- Implement CSS variables (colors, spacing, radius, shadow)
- Add dark mode (native prefers-color-scheme support)
- Update all screens (Level, Routine, Finish, Mood)
- Ensure premium feeling (calm, spacious, elegant)

**Acceptance Criteria:**

- [ ] CSS variables defined for all reusable values
- [ ] Dark mode works without JavaScript toggle
- [ ] All screens tested in light + dark mode
- [ ] Spacing: rhythm system (0.5, 1, 1.5, 2, 3rem)
- [ ] Typography: clear hierarchy (h1, h2, p, small)
- [ ] Animations: smooth transitions (0.3s), no jarring effects
- [ ] Mobile: verified responsive (tested at 320px, 768px, 1024px)

**Implementation:**
Complete CSS refactor with:

```css
:root {
  /* Colors */
  --color-primary: #667eea;
  --color-secondary: #764ba2;
  --color-success: #4ade80;
  /* ... more colors ... */

  /* Dark mode */
  @media (prefers-color-scheme: dark) {
    --bg-primary: #0f172a;
    --text-primary: #f1f5f9;
  }

  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
}
```

**Dependencies:** None (refactor existing CSS)  
**Tickets that depend on this:** All UI

---

### Ticket Q1-008: Data Privacy Policy + Transparency

**Priority:** P1 | **Complexity:** Low | **Effort:** 4-5 hours

**Description:**
Create simple, honest privacy policy explaining:

- What data is stored (localStorage only)
- What data is NOT sent anywhere (nothing!)
- User rights (export, delete all data)
- Update in-app policy link + footer

**Acceptance Criteria:**

- [ ] Privacy policy < 500 words (clear, not legal jargon)
- [ ] Explains localStorage, no cloud
- [ ] Explains: no analytics, no ads, no tracking
- [ ] Link in app footer
- [ ] Users can export their data (button in settings)
- [ ] Users can delete all data (warning modal)

**Implementation:**
Create `privacy.html` or section in app, add to settings.

**Dependencies:** None  
**Tickets that depend on this:** Marketing, trust

---

### Ticket Q1-009: Onboarding Flow

**Priority:** P1 | **Complexity:** Medium | **Effort:** 8-10 hours

**Description:**
Create welcome flow for first-time users:

1. Welcome screen (app purpose, benefits)
2. Force Beginner level first time
3. Quick mood selector tutorial
4. First session encouragement

**Acceptance Criteria:**

- [ ] Shows on first app load (checked via localStorage flag)
- [ ] Welcome screen: 2 bullet points max
- [ ] First level MUST be Beginner (no skipping)
- [ ] Mood selector: Brief explanation
- [ ] After first session: Celebration screen
- [ ] Completed within 2 minutes

**Implementation:**
Add to main.js initialization.

**Dependencies:** Q1-001, Q1-003  
**Tickets that depend on this:** Launch flow

---

### Ticket Q1-010: Core Testing Setup

**Priority:** P1 | **Complexity:** Medium | **Effort:** 6-8 hours

**Description:**
Set up minimal testing infrastructure:

- Simple test runner (no complex setup)
- Unit tests for LevelManager (unlock logic)
- Unit tests for MetricsService (streak calculation)

**Acceptance Criteria:**

- [ ] Can run `npm test` or simple command
- [ ] Tests for: LevelManager, MetricsService
- [ ] At least 60% of core logic covered
- [ ] No external dependencies (use native Node test runner)

**Implementation:**
Use Node's built-in test runner (Node 18+) or minimal Jest setup.

**Dependencies:** Q1-004, Q1-005  
**Tickets that depend on this:** Q3-007

---

## Q2 2026: DEVELOPMENT TICKETS

### Ticket Q2-001: Dashboard Screen (Weekly Heatmap)

**Priority:** P0 | **Complexity:** High | **Effort:** 12-15 hours

**Description:**
Create dashboard showing weekly heatmap (Mo-Su grid with color coding). Minimal, non-overwhelming view of habit consistency.

**Acceptance Criteria:**

- [ ] Shows current week + last 8 weeks (total: 9 weeks)
- [ ] Color coding: 🟢 (full session), 🟡 (recovery), ⚪ (skip), 🔴 (never)
- [ ] Hover shows duration + level name
- [ ] Simple stat line: "5/7 this week" + current streak
- [ ] Mobile: Single column (swipeable weeks)
- [ ] Desktop: Full 9-week view

**Implementation:**
Create `js/ui/DashboardScreen.js` and `components/WeeklyHeatmap.js`

```javascript
class WeeklyHeatmap {
  constructor(metrics) {
    this.metrics = metrics;
  }

  render() {
    const weeks = this.getLast9Weeks();
    return weeks.map((week) => this.renderWeekRow(week)).join("");
  }
}
```

**Dependencies:** Q1-004 (MetricsService)  
**Tickets that depend on this:** Q2-004

---

### Ticket Q2-002: Skill Radar Chart

**Priority:** P0 | **Complexity:** High | **Effort:** 12-15 hours

**Description:**
Create 3-axis skill visualization (Balance, Flexibility, Breathwork) as spider/radar chart. Non-technical users should understand skill growth.

**Acceptance Criteria:**

- [ ] 3-axis chart (Balance, Flexibility, Breathwork)
- [ ] Scale 0-100, visual fill
- [ ] Updates in real-time (after session)
- [ ] Shows weekly progression (last 4 weeks as animation)
- [ ] Accessible (also shows as numbers)

**Implementation:**
Create `components/SkillRadar.js` with canvas/SVG rendering.

**Dependencies:** Q1-004, Q2-001  
**Tickets that depend on this:** Dashboard

---

### Ticket Q2-003: Mood Trend Analysis

**Priority:** P0 | **Complexity:** Medium | **Effort:** 10-12 hours

**Description:**
Show user's mood improvement over 30 days:

- Before/after mood for each session
- Trend arrow (↗️ improving, → stable, ↘️ declining)
- Average improvement (e.g., "+2.1 mood points")
- Visual chart (sparkline, simple line graph)

**Acceptance Criteria:**

- [ ] Shows last 30 days of mood data
- [ ] Visual: Before/after for each session
- [ ] Summary: "70% of sessions improve mood"
- [ ] Trend line (improving/stable/declining)
- [ ] Clear insight: "Yoga helps your mood"

**Implementation:**
Create `components/MoodTrend.js` with chart visualization.

**Dependencies:** Q1-006 (mood reflection)  
**Tickets that depend on this:** Dashboard

---

### Ticket Q2-004: PWA Service Worker + Offline

**Priority:** P0 | **Complexity:** High | **Effort:** 14-16 hours

**Description:**
Implement Service Worker for offline-first experience:

- Cache all assets (HTML, CSS, JS, images)
- Serve from cache if offline
- Sync on reconnection
- Install prompt ("Add to home screen")

**Acceptance Criteria:**

- [ ] App works 100% offline (after first load)
- [ ] Service Worker installed + activated
- [ ] Cache strategy: Cache-first for assets, network-first for data
- [ ] Install prompt appears (iOS and Android)
- [ ] Handles network transitions gracefully
- [ ] Tested on real device (iOS + Android)

**Implementation:**
Create `sw.js` (Service Worker) and update main.js:

```javascript
// sw.js
const CACHE_NAME = 'yoga-v1';
const urlsToCache = ['/index.html', '/style.css', ...];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
```

**Dependencies:** Q1-007  
**Tickets that depend on this:** Q3-001

---

### Ticket Q2-005: Skill-Based Unlock System

**Priority:** P1 | **Complexity:** High | **Effort:** 12-14 hours

**Description:**
Replace pure streak-based unlocking with skill checks:

- Steady → Flowing: Requires 7-day streak OR balance 60%
- Flowing → Strong: Requires 14-day streak OR balance 80%
- Show clear progress ("Balance 65/80, 19 points to unlock")

**Acceptance Criteria:**

- [ ] Unlock conditions in level cards show progress
- [ ] No hard blocking (soft lock with explanation)
- [ ] Skill-based conditions work alongside streak
- [ ] Visual progress bar for unlock conditions
- [ ] Clear messaging: "You're close! 10 points to unlock"

**Implementation:**
Refactor LevelManager.js:

```javascript
canUnlock(levelKey, metrics) {
  const conditions = levels[levelKey].unlock_condition;

  if (conditions.type === 'skill_and_streak') {
    return (
      metrics.streak >= conditions.streak &&
      metrics.skills[conditions.skill] >= conditions.threshold
    );
  }
}
```

**Dependencies:** Q1-004, Q1-005  
**Tickets that depend on this:** Main progression

---

### Ticket Q2-006: Weekly Flow Suggestions

**Priority:** P1 | **Complexity:** Medium | **Effort:** 8-10 hours

**Description:**
Suggest a weekly flow (Monday: recovery, Tuesday: daily challenge, etc.) without mandating it. Users can override any day.

**Acceptance Criteria:**

- [ ] Suggest 7-day flow (Mo-Su)
- [ ] Suggestions include: recovery, challenge, strength, choice
- [ ] Show on home/dashboard
- [ ] User can skip/override suggestions
- [ ] Completion bonus (complete 5/7 → unlock hint)
- [ ] Mobile: Swipeable week view

**Implementation:**
Create `services/WeeklyFlowRecommender.js`

**Dependencies:** Q1-004, Q2-001  
**Tickets that depend on this:** Dashboard

---

### Ticket Q2-007: Milestone Cards

**Priority:** P2 | **Complexity:** Low | **Effort:** 5-6 hours

**Description:**
Show gentle milestone celebrations in dashboard:

- "3-day streak" ✓
- "7-day streak" ✓
- "30-day streak" ✓
- "10 sessions" ✓

**Acceptance Criteria:**

- [ ] Show unlocked milestones in dashboard
- [ ] Next milestone highlighted
- [ ] Non-intrusive animation (no notifications)
- [ ] Appears once per milestone (no spam)

**Implementation:**
Simple component showing progress toward next milestone.

**Dependencies:** Q1-004  
**Tickets that depend on this:** Dashboard

---

### Ticket Q2-008: Ambient Audio System (Optional)

**Priority:** P2 | **Complexity:** Medium | **Effort:** 8-10 hours

**Description:**
Add optional ambient sounds during sessions (gentle nature sounds, optional music). User can toggle on/off.

**Acceptance Criteria:**

- [ ] 3 audio options: Off, Nature, Soft music
- [ ] Toggle in settings
- [ ] Audio continues in background (Web Audio API)
- [ ] Volume control slider
- [ ] Graceful fallback if audio fails

**Implementation:**
Create `services/AudioManager.js`

**Dependencies:** Q2-004 (PWA audio)  
**Tickets that depend on this:** Settings

---

### Ticket Q2-009: Testimonials Section

**Priority:** P2 | **Complexity:** Low | **Effort:** 4-5 hours

**Description:**
Create privacy-respecting testimonials page (age + location only, no names/photos). Show real user feedback.

**Acceptance Criteria:**

- [ ] Testimonials collected via optional form
- [ ] Display: Age, location, quote (max 100 words)
- [ ] No identifying info (no names, photos, socials)
- [ ] Max 5-10 testimonials shown
- [ ] Users can opt-out of display

**Implementation:**
Simple testimonials.json + static page.

**Dependencies:** None (marketing content)  
**Tickets that depend on this:** Website

---

### Ticket Q2-010: Code Architecture Review + Documentation

**Priority:** P1 | **Complexity:** Medium | **Effort:** 6-8 hours

**Description:**
Review codebase quality:

- Identify modules > 300 lines (refactor if needed)
- Add JSDoc comments to all public functions
- Create CODE_STRUCTURE.md (overview for contributors)

**Acceptance Criteria:**

- [ ] All modules < 300 lines
- [ ] All public functions have JSDoc
- [ ] No circular dependencies
- [ ] CODE_STRUCTURE.md complete
- [ ] Passed linting (ESLint)

**Implementation:**
Code review checklist + documentation.

**Dependencies:** None (ongoing)  
**Tickets that depend on this:** Codebase health

---

## Q3 2026: DEVELOPMENT TICKETS

### Ticket Q3-001: Gesture Navigation System

**Priority:** P0 | **Complexity:** High | **Effort:** 14-16 hours

**Description:**
Implement gesture-based navigation:

- Swipe down = back
- Swipe up = next pose
- Long press = pause
- Swipe left/right = navigation (optional)

**Acceptance Criteria:**

- [ ] Gestures work on all touch devices
- [ ] Buttons still visible (gestures optional)
- [ ] Gesture tutorial on first use
- [ ] Can be disabled in settings
- [ ] No accidental triggers (50px swipe minimum)
- [ ] Tested on iOS + Android

**Implementation:**
Create `services/GestureController.js`

```javascript
class GestureController {
  constructor(element, callbacks) {
    this.registerGestures(callbacks);
  }

  registerGestures(callbacks) {
    // Swipe detection with minimal library
  }
}
```

**Dependencies:** Q2-004  
**Tickets that depend on this:** Q3 UX

---

### Ticket Q3-002: Advanced Level (Flexibility/Strength Path)

**Priority:** P1 | **Complexity:** Medium | **Effort:** 8-10 hours

**Description:**
Create Advanced level with choice of specialization:

- User selects: Flexibility OR Strength
- Each path has custom routine
- Unlock: 30-day streak + Strong level 10x

**Acceptance Criteria:**

- [ ] Two Advanced variants (Flex, Strength)
- [ ] User chooses path before starting
- [ ] Clear unlock condition messaging
- [ ] 25-30 minute sessions

**Implementation:**
Add to levels.js with path selection screen.

**Dependencies:** Q1-001, Q2-005  
**Tickets that depend on this:** Level progression

---

### Ticket Q3-003: Expert Level

**Priority:** P2 | **Complexity:** Medium | **Effort:** 6-8 hours

**Description:**
Create Expert level for dedicated users (1-2% of user base):

- 30-45 minute complex flow
- Unlock: 60-day streak + Advanced 5x
- Advanced techniques, transitions

**Acceptance Criteria:**

- [ ] Clearly marked as "Expert"
- [ ] Unlock condition: 60-day streak + Advanced 5x
- [ ] 30-45 minute session
- [ ] Challenging but achievable

**Implementation:**
Add to levels.js

**Dependencies:** Q3-002  
**Tickets that depend on this:** Level progression

---

### Ticket Q3-004: Low Vision Mode

**Priority:** P0 | **Complexity:** Medium | **Effort:** 10-12 hours

**Description:**
Accessibility mode for low vision users:

- Font sizes: 14pt → 24pt selector
- High contrast mode (white text on black)
- Toggle-able in settings
- Persistent setting

**Acceptance Criteria:**

- [ ] Font size selector (14pt, 18pt, 22pt, 24pt)
- [ ] High contrast mode toggle
- [ ] All text readable at maximum zoom
- [ ] Images remain visible
- [ ] Setting persists
- [ ] Tested with real low-vision users

**Implementation:**
Create `services/AccessibilityService.js` with CSS overrides.

**Dependencies:** Q1-007  
**Tickets that depend on this:** Accessibility

---

### Ticket Q3-005: Anxiety-Safe Mode

**Priority:** P0 | **Complexity:** High | **Effort:** 14-16 hours

**Description:**
Create custom UX for users with anxiety:

- Remove timer (user-paced)
- No countdown pressure
- Breathing guide instead
- No session end (user decides when to stop)
- Custom messages (gentle, non-pushy)

**Acceptance Criteria:**

- [ ] Toggle in settings
- [ ] When enabled: no timer visible
- [ ] Show breath guide (animated sine wave)
- [ ] No "session complete" notification
- [ ] User ends session when ready
- [ ] Tested with anxiety users

**Implementation:**
Create `ui/AnxietySafeRoutineScreen.js` and `services/AnxietyService.js`

**Dependencies:** Q1-007  
**Tickets that depend on this:** Accessibility

---

### Ticket Q3-006: Event-Driven Architecture Refactor

**Priority:** P0 | **Complexity:** Very High | **Effort:** 20-24 hours

**Description:**
Refactor main.js + core services to event-driven pattern:

- Implement EventBus (global event system)
- All component communication via events
- Clear data flow (emit → listen → update)

**Acceptance Criteria:**

- [ ] EventBus implemented in `services/EventBus.js`
- [ ] All screen transitions via events
- [ ] No direct method calls between components
- [ ] Event log can be traced (debugging)
- [ ] All existing features work identically
- [ ] No performance regression

**Implementation:**
Comprehensive refactor with extensive testing.

```javascript
// Example:
eventBus.on("session:complete", (data) => {
  levelManager.completeLevel();
  metricsService.recordSession(data);
  dashboardScreen.refresh();
});
```

**Dependencies:** All previous features  
**Tickets that depend on this:** Q4 features

---

### Ticket Q3-007: State Machine for Level Progression

**Priority:** P0 | **Complexity:** High | **Effort:** 12-14 hours

**Description:**
Implement clear state machine for unlock logic:

- States: locked, unlocked, completed
- Transition validation (only valid moves allowed)
- Condition checking (streak, skills, etc.)
- Clear, testable logic

**Acceptance Criteria:**

- [ ] State machine defined in `core/ProgressionStateMachine.js`
- [ ] All transitions logged
- [ ] Unlock conditions validated before transition
- [ ] No invalid state combinations possible
- [ ] 100% test coverage for state logic
- [ ] Debugging: can log all state changes

**Implementation:**
Clean, validated state transitions.

**Dependencies:** Q3-006  
**Tickets that depend on this:** Unlock system

---

### Ticket Q3-008: Design System Documentation

**Priority:** P1 | **Complexity:** Medium | **Effort:** 8-10 hours

**Description:**
Document UI component library:

- Button (primary, secondary, disabled)
- Card (level, session, achievement)
- Modal (confirmation, settings)
- Badge (completed, locked, active)
- Form inputs (text, select, checkbox)
- Each component: visual + code example

**Acceptance Criteria:**

- [ ] Document all UI components
- [ ] Visual examples for each state
- [ ] Code snippets
- [ ] CSS class names documented
- [ ] Accessibility notes
- [ ] COMPONENT_LIBRARY.md created

**Implementation:**
Living documentation with examples.

**Dependencies:** Q1-007  
**Tickets that depend on this:** Future development

---

### Ticket Q3-009: Breath Guide Animation

**Priority:** P2 | **Complexity:** Medium | **Effort:** 8-10 hours

**Description:**
Subtle sine wave animation guide for breathing:

- Smoothly cycles in/out
- Timing: 4-second inhale/exhale cycle
- Very minimal (not overwhelming)
- Optional toggle

**Acceptance Criteria:**

- [ ] Sine wave animates smoothly
- [ ] 4-second cycle (2 in, 2 out)
- [ ] Optional toggle in settings
- [ ] Respects prefers-reduced-motion
- [ ] Visible on all devices

**Implementation:**
CSS animation or Canvas-based.

**Dependencies:** Q1-007  
**Tickets that depend on this:** Premium UX

---

### Ticket Q3-010: Accessibility Testing & Audit

**Priority:** P1 | **Complexity:** Medium | **Effort:** 10-12 hours

**Description:**
Comprehensive accessibility audit:

- Keyboard navigation (no mouse required)
- Screen reader testing (NVDA, VoiceOver)
- Color contrast check (WCAG AA)
- Focus management
- ARIA labels where needed

**Acceptance Criteria:**

- [ ] Keyboard-only navigation works
- [ ] Screen reader tested (2 readers minimum)
- [ ] Contrast ratio: 4.5:1 minimum (AA)
- [ ] No keyboard traps
- [ ] All buttons/inputs labeled
- [ ] Accessibility report generated

**Implementation:**
Audit + fixes based on findings.

**Dependencies:** Q3-004, Q3-005  
**Tickets that depend on this:** Accessibility complete

---

## Q4 2026: DEVELOPMENT TICKETS

### Ticket Q4-001: Adaptive Routine Generator (Local AI)

**Priority:** P1 | **Complexity:** Very High | **Effort:** 16-20 hours

**Description:**
Generate personalized routines based on local data:

- Analyze user's weak skills
- Suggest routine matching current mood/energy
- All logic client-side (no cloud)

**Acceptance Criteria:**

- [ ] Identifies weakest skill
- [ ] Generates 5-10 pose routines
- [ ] Adjusts difficulty based on streak
- [ ] Respects mood + energy selection
- [ ] Can be toggled on/off
- [ ] Tested with 20+ different profiles

**Implementation:**
Create `services/AdaptiveRoutineGenerator.js`

```javascript
class AdaptiveRoutineGenerator {
  generate(metrics, mood, energy) {
    const weakestSkill = this.getWeakestSkill(metrics);
    const difficulty = this.calculateDifficulty(metrics.streak);
    const poses = this.selectPosesForSkill(weakestSkill, difficulty);
    return this.buildRoutine(poses, mood, energy);
  }
}
```

**Dependencies:** Q1-004, Q4-002  
**Tickets that depend on this:** Q4 evolution

---

### Ticket Q4-002: Unit + Integration Test Suite

**Priority:** P0 | **Complexity:** High | **Effort:** 16-18 hours

**Description:**
Comprehensive test coverage:

- Unit tests: LevelManager, MetricsService, ProgressionStateMachine
- Integration tests: Session flow, unlock logic
- Target: 70%+ coverage of core logic

**Acceptance Criteria:**

- [ ] 70%+ coverage of core modules
- [ ] Tests for unlock conditions (all cases)
- [ ] Tests for metric calculations
- [ ] Tests for state transitions
- [ ] Can run `npm test` (automated)
- [ ] CI/CD ready (if desired)

**Implementation:**
Comprehensive test suite with Node test runner or Jest.

**Dependencies:** Q3-007  
**Tickets that depend on this:** Production readiness

---

### Ticket Q4-003: Flow Master Level

**Priority:** P2 | **Complexity:** Medium | **Effort:** 8-10 hours

**Description:**
Ultimate level: 45-90 minute uninterrupted vinyasa flow

- No exercise markers
- Music sync (optional)
- Meditation-through-movement
- Unlock: 90-day streak + Expert 3x + zero skips (14 days)

**Acceptance Criteria:**

- [ ] 45-90 minute flow
- [ ] No timer interruptions
- [ ] Smooth pose transitions
- [ ] Optional music
- [ ] Clear unlock condition

**Implementation:**
Add to levels.js with special UI (no timer, no markers).

**Dependencies:** Q3-003  
**Tickets that depend on this:** End-game content

---

### Ticket Q4-004: Zen Mode (Breathwork-Only)

**Priority:** P2 | **Complexity:** Medium | **Effort:** 8-10 hours

**Description:**
Alternative path: Breathing + meditation only (no poses)

- Variable duration (user chooses 5-60 min)
- Gentle breathing guide
- Unlock: 30-day consistent practice

**Acceptance Criteria:**

- [ ] Duration selector (5-60 min range)
- [ ] Breathing guide animation
- [ ] No poses (optional)
- [ ] Calming background
- [ ] Accessible to beginners

**Implementation:**
Create special Zen session in LevelManager.

**Dependencies:** Q1-004  
**Tickets that depend on this:** Alternative paths

---

### Ticket Q4-005: Multi-Language Support (i18n)

**Priority:** P2 | **Complexity:** High | **Effort:** 14-16 hours

**Description:**
Support multiple languages:

- Spanish, French, German initially
- User can toggle in settings
- All UI text translated
- Persistent setting

**Acceptance Criteria:**

- [ ] 3 languages minimum (ES, FR, DE)
- [ ] Language selector in settings
- [ ] All text translated
- [ ] Date formats localized
- [ ] No hardcoded strings
- [ ] Can be extended to more languages

**Implementation:**
Create `i18n/` directory with locale JSON files.

```javascript
// en.json, es.json, fr.json, etc.
{
  "level.beginner": "Beginner",
  "button.start": "Start",
  // ...
}
```

**Dependencies:** None (modular feature)  
**Tickets that depend on this:** Global expansion

---

### Ticket Q4-006: Data Export Feature

**Priority:** P1 | **Complexity:** Low | **Effort:** 4-5 hours

**Description:**
Let users download their own data as JSON/CSV:

- All sessions, metrics, preferences
- Shows transparency (trust building)
- One-click download button

**Acceptance Criteria:**

- [ ] Export button in settings
- [ ] Downloads JSON or CSV
- [ ] Includes: levels, sessions, metrics, preferences
- [ ] Filename: yoga-data-[date].json
- [ ] Clear confirmation message

**Implementation:**
Simple export utility in `services/DataExport.js`

```javascript
class DataExport {
  static exportToJSON() {
    const data = {
      levels: Storage.loadLevels(),
      sessions: Storage.loadSessionHistory(),
      metrics: Storage.loadMetrics(),
    };
    return JSON.stringify(data, null, 2);
  }
}
```

**Dependencies:** None  
**Tickets that depend on this:** Privacy/trust

---

### Ticket Q4-007: Monetization Experiment (Optional Donation)

**Priority:** P1 | **Complexity:** Medium | **Effort:** 8-10 hours

**Description:**
Optional donation flow (not paywall):

- Appears after 30-day retention (if user qualifies)
- Non-intrusive prompt ("Love this app? Consider supporting")
- Integration with Stripe or PayPal
- No features locked behind donation

**Acceptance Criteria:**

- [ ] Prompt appears once for eligible users
- [ ] Can be dismissed (no guilt)
- [ ] Donation flow works end-to-end
- [ ] Optional amount ($3, $5, $10, custom)
- [ ] Thank you message post-donation
- [ ] Zero impact on free experience

**Implementation:**
Create `services/DonationService.js` with payment integration.

**Dependencies:** Q2-001 (retention metrics)  
**Tickets that depend on this:** Sustainability

---

### Ticket Q4-008: Community Documentation

**Priority:** P2 | **Complexity:** Medium | **Effort:** 8-10 hours

**Description:**
Create documentation for community forks:

- HOW_TO_FORK.md (extend for personal use)
- API_REFERENCE.md (all public functions)
- ARCHITECTURE.md (high-level design)
- CONTRIBUTING.md (code standards)

**Acceptance Criteria:**

- [ ] HOW_TO_FORK.md complete
- [ ] API_REFERENCE.md with code examples
- [ ] ARCHITECTURE.md explains patterns
- [ ] CONTRIBUTING.md defines standards
- [ ] Someone can fork and customize in 30 min

**Implementation:**
Comprehensive documentation files.

**Dependencies:** Q3-010  
**Tickets that depend on this:** Community growth

---

### Ticket Q4-009: Performance Optimization & Code Splitting

**Priority:** P2 | **Complexity:** High | **Effort:** 12-14 hours

**Description:**
Optimize for speed:

- Lazy-load modules (only load when needed)
- Compress assets
- Minify CSS/JS
- Profile and optimize memory usage

**Acceptance Criteria:**

- [ ] Load time: < 1.5 seconds (first load)
- [ ] Time to interactive: < 2.5 seconds
- [ ] Bundle size: < 150KB (gzipped)
- [ ] Lighthouse score: 95+ (performance)
- [ ] Zero memory leaks (tested)

**Implementation:**
Performance audit + optimization.

**Dependencies:** All modules  
**Tickets that depend on this:** Production

---

### Ticket Q4-010: 2027 Roadmap Planning

**Priority:** P2 | **Complexity:** Low | **Effort:** 6-8 hours

**Description:**
Review Q4 2026 results and plan 2027:

- Analyze user feedback
- Identify most-requested features
- Plan Q1 2027 roadmap
- Share vision with community

**Acceptance Criteria:**

- [ ] User feedback analyzed (surveys, emails, etc.)
- [ ] Top 3 requested features identified
- [ ] Q1 2027 roadmap drafted
- [ ] Community update published
- [ ] Team morale + momentum maintained

**Implementation:**
Feedback compilation + strategic planning.

**Dependencies:** All Q4 features  
**Tickets that depend on this:** Future

---

---

# 🎨 PART 3: PREMIUM UI DESIGN SYSTEM

---

## Visual Identity Charter

### 1. Color Philosophy

**Primary Palette:**

```css
--color-primary: #667eea; /* Calming purple-blue (Zen) */
--color-secondary: #764ba2; /* Deeper purple (Grounding) */
--color-accent: #4ade80; /* Soft green (Success, Growth) */
--color-locked: #9ca3af; /* Gray (Disabled, Locked) */
```

**Rationale:**

- Primary (#667eea): Calming, not aggressive. Associated with calm, focus, meditation.
- Secondary (#764ba2): Depth, grounding, stability.
- Accent (#4ade80): Natural green, growth, health (no harsh reds/oranges).
- Locked: Neutral gray, not shame-inducing.

**Context (Light Mode):**

```css
--bg-primary: #ffffff; /* Clean white */
--bg-secondary: #f8fafc; /* Subtle gray-white */
--text-primary: #1f2937; /* Dark gray (readable) */
--text-secondary: #6b7280; /* Medium gray (labels) */
```

**Context (Dark Mode):**

```css
--bg-primary: #0f172a; /* Deep blue-black */
--bg-secondary: #1e293b; /* Slightly lighter */
--text-primary: #f1f5f9; /* Off-white (not harsh) */
--text-secondary: #cbd5e1; /* Medium gray (labels) */
```

**Contrast Compliance:**

- Text on background: 4.5:1 (WCAG AA minimum)
- All colors tested with color blindness simulator
- High contrast mode available (option in accessibility)

---

### 2. Spacing & Layout Rules

**Spacing System (Modular Scale):**

```css
--space-xs: 0.5rem; /* 8px - smallest gap */
--space-sm: 1rem; /* 16px - button padding */
--space-md: 1.5rem; /* 24px - section margin */
--space-lg: 2rem; /* 32px - major spacing */
--space-xl: 3rem; /* 48px - page padding */
```

**Apply consistently:**

- Never use `5px` or `13px` (breaks rhythm)
- Prefer larger gaps (calm, spacious)
- Mobile padding: `--space-md` minimum
- Desktop max-width: 600px for content (focus)

**Grid Layout:**

```css
.container {
  display: grid;
  gap: var(--space-md);
  max-width: 600px;
  margin: 0 auto;
  padding: var(--space-xl) var(--space-md);
}
```

---

### 3. Typography

**Font Stack:**

```css
font-family:
  -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif;
```

**Size Hierarchy:**

```css
h1 {
  font-size: clamp(1.75rem, 5vw, 2.5rem); /* Responsive */
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.5px;
}

h2 {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
}

p,
body {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
}

small,
label {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
}
```

**Readability:**

- Line length: 50-75 characters (not too wide)
- Min font: 16px on mobile (no zooming needed)
- Font smoothing: `-webkit-font-smoothing: antialiased`

---

### 4. Border Radius

**Consistent radius system:**

```css
--radius-sm: 0.5rem; /* 8px - subtle */
--radius-md: 1rem; /* 16px - standard */
--radius-lg: 1.5rem; /* 24px - cards, major elements */
```

**Application:**

- Buttons: `--radius-md`
- Cards: `--radius-lg`
- Inputs: `--radius-sm`
- Images: `--radius-md` (no super-round)

**No hard corners** (modern, friendly look)

---

### 5. Shadows (Depth Without Loudness)

**Shadow System:**

```css
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.15);
--shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.2);
```

**Avoid:**

- ❌ Black shadows (use dark gray/navy)
- ❌ Multiple layered shadows (confusing)
- ❌ Harsh shadows (block shadows, not blur)

**Use:**

- Cards: `--shadow-md`
- Hover state: `--shadow-lg`
- Modals: `--shadow-xl`
- Default: `--shadow-sm` (subtle)

---

### 6. Motion & Animation

**Philosophy:** Motion should be **felt**, not **seen**.

**Timing:**

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-normal: 300ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
```

**Animations:**

- Fade in: 300ms opacity
- Scale: Only on micro-interactions (< 150ms)
- Slide: Vertical slides (bottom-up), smooth easing
- No bounce, no elastic (too playful for zen)

**Respect accessibility:**

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Component Design

### Button Component

**States:**

```css
/* Primary button (CTA) */
.btn-primary {
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-secondary)
  );
  color: white;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  font-weight: 600;
  min-height: 48px; /* Touch target */
  border: none;
  cursor: pointer;
  transition: var(--transition-normal);
}

.btn-primary:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: var(--shadow-md);
}

.btn-primary:disabled {
  background: var(--color-locked);
  cursor: not-allowed;
  opacity: 0.6;
}
```

**Secondary button:**

```css
.btn-secondary {
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--color-locked);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  font-weight: 600;
  min-height: 48px;
  cursor: pointer;
  transition: var(--transition-normal);
}

.btn-secondary:hover {
  background: var(--bg-primary);
  border-color: var(--color-primary);
}
```

**Rules:**

- ✅ Gradient primary, flat secondary
- ✅ Always 48px+ height (mobile touch)
- ✅ No all-caps (harder to read)
- ✅ Icons optional (left side only)

---

### Card Component

```css
.card {
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-md);
  border: 1px solid var(--color-locked);
  box-shadow: var(--shadow-sm);
  transition: var(--transition-normal);
}

.card:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary);
}

.card.locked {
  opacity: 0.65;
  filter: grayscale(60%);
  border-style: dashed;
  cursor: not-allowed;
}

.card.completed {
  border-color: var(--color-accent);
  background: linear-gradient(
    135deg,
    rgba(74, 222, 128, 0.03),
    rgba(74, 222, 128, 0.05)
  );
}
```

**States:**

- Normal: Subtle shadow, clear border
- Hover: Enhanced shadow, highlight border
- Locked: Dashed border, grayscale, not clickable
- Completed: Green border, success gradient background

---

### Modal / Dialog Component

```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.modal {
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  max-width: 500px;
  width: 90%;
  box-shadow: var(--shadow-xl);
  animation: slideUp 300ms ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Rules:**

- Close button (X) top-right
- Max width: 500px
- Padding: minimum `--space-lg`
- Animation: slide-up, not fade

---

### Badge Component

```css
.badge {
  display: inline-block;
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.badge-success {
  background: rgba(74, 222, 128, 0.15);
  color: #16a34a;
}

.badge-warning {
  background: rgba(245, 158, 11, 0.15);
  color: #ca8a04;
}

.badge-locked {
  background: rgba(156, 163, 175, 0.15);
  color: var(--color-locked);
}

.badge-active {
  background: linear-gradient(135deg, #fbbf24, #f97316);
  color: white;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}
```

---

### Level Selector Component

```css
.level-selector {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-md);
  padding: var(--space-md);
}

.level-card {
  /* See Card Component + Level-specific styles */
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.level-card .level-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
}

.level-card .level-info {
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.level-card .level-status {
  display: flex;
  gap: var(--space-xs);
  flex-wrap: wrap;
  min-height: 2rem;
}

.level-card .btn-select {
  margin-top: auto;
  width: 100%;
}
```

---

## Design Do's & Don'ts

### ✅ DO

- ✅ **Spacious design** (breathing room = calm)
- ✅ **Consistent spacing** (rhythm system)
- ✅ **High contrast** (readable for all)
- ✅ **Subtle motion** (feels natural)
- ✅ **One main CTA per screen** (clear direction)
- ✅ **Dark mode native** (not afterthought)
- ✅ **Responsive from 320px** (all devices)
- ✅ **Accessible colors** (not red/green only)
- ✅ **Simple language** (no jargon)
- ✅ **Graceful degradation** (no JavaScript? Still works)

### ❌ DON'T

- ❌ **Aggressive animations** (distracting, anxious)
- ❌ **Neon colors** (harsh, un-calming)
- ❌ **Dense layouts** (overwhelming)
- ❌ **Pop-ups/modals on load** (interrupting)
- ❌ **Auto-playing audio** (jarring)
- ❌ **Infinite scroll** (addiction pattern)
- ❌ **Flashing badges** (overstimulating)
- ❌ **Tiny fonts** (< 14px on mobile)
- ❌ **Hard shadows** (depth without subtlety)
- ❌ **Multiple CTAs per screen** (confusing)

---

---

# 💰 PART 4: ETHICAL MONETIZATION STRATEGY

---

## Monetization Philosophy

**Core Principle:** User trust > Revenue

> The app should feel like it was built _for_ the user, not to extract money _from_ them.

---

## What Is Free Forever (Core Loop)

- ✅ **All 7 levels** (Beginner through Flow Master)
- ✅ **Streak tracking**
- ✅ **Mood reflection**
- ✅ **Dashboard + analytics**
- ✅ **Skill tracking**
- ✅ **Recovery Mode**
- ✅ **Dark mode**
- ✅ **Offline functionality**
- ✅ **Settings + customization**
- ✅ **No ads, no tracking**

**Why:** These are the CORE YOGA EXPERIENCE. Never lock these.

---

## What Could Be Premium (If Needed)

### Option A: Optional Donation (Recommended)

**Model:** "Love this app? Support its development"

**How it works:**

- Appears once after 30-day retention (earned trust)
- Non-intrusive: Single card in settings
- Optional amounts: $2, $5, $10, custom
- Can be dismissed (no guilt, no nag-ware)
- Zero features locked

**Implementation:**

```javascript
if (user.retentionDays >= 30 && !user.hasDonated && !user.dismissedDonation) {
  showDonationPrompt();
}
```

**Expected uptake:** 3-5% of users (realistic for app)

**Revenue per user:** $0.05-$0.15/month (sustainable, not extractive)

**Messaging:**

> "You've been practicing consistently. If this app helps your wellbeing, consider supporting its development."

---

### Option B: Premium Subscription (Not Recommended, But If Required)

**If business requires revenue, only offer:**

| Feature              | Free   | Premium  | Reasoning                         |
| -------------------- | ------ | -------- | --------------------------------- |
| Levels 1-7           | ✅     | ✅       | Core experience never paywalled   |
| Streak tracking      | ✅     | ✅       | Core habit feature                |
| Dashboard            | ✅     | ✅       | Progress tracking, core retention |
| Skill tracking       | ✅     | ✅       | No gatekeeping of basics          |
| Custom audio library | ✅ (3) | ✅ (20+) | Optional, not essential           |
| Adaptive routines    | ❌     | ✅       | Specialized, AI-generated         |
| Statistics reports   | ❌     | ✅       | Advanced analytics (nice-to-have) |
| Multi-device sync    | ❌     | ✅       | Infrastructure cost (cloud)       |

**Pricing (if required):**

- $4.99/month OR $39.99/year (rare: 8/10 go annual)
- 7-day free trial (build trust before asking)
- Free tier must be fully featured (no nag-ware)

**Example messaging:**

> "Premium features are optional. The core app is free forever."

**BUT NEVER:**

- ❌ Lock levels behind paywall
- ❌ Show premium features you can't access
- ❌ Nag-screen pop-ups
- ❌ Limited trials (e.g., "try free for 3 days, then paywall")
- ❌ Fake "limited time" offers
- ❌ Dark patterns

---

## Revenue Model Comparison

| Model                 | User Trust | Revenue                        | Viability                 | Recommendation    |
| --------------------- | ---------- | ------------------------------ | ------------------------- | ----------------- |
| **Free Forever**      | ⭐⭐⭐⭐⭐ | $0                             | Sustainable if 10K+ users | ✅ **Best**       |
| **Optional Donation** | ⭐⭐⭐⭐   | Low ($100-500/mo at 10K users) | Sustainable, ethical      | ✅ **Good**       |
| **Premium Sub**       | ⭐⭐⭐     | Medium ($500-2000/mo)          | Only if core is strong    | ⚠️ **Risky**      |
| **Freemium**          | ⭐         | High (but user anger)          | Churn > revenue           | ❌ **Avoid**      |
| **Ads**               | 💔         | Medium                         | Kills vibe, privacy risk  | ❌ **Never**      |
| **Data selling**      | 💔💔💔     | High (unethical)               | Legal + trust issues      | ❌ **Never ever** |

---

## Implementation Path

### Phase 1 (Q1-Q3 2026): Free Forever

- Build to 10K users
- Measure retention, engagement
- Understand what users value
- Build deep trust

### Phase 2 (Q4 2026): Introduce Donation

- Subtle card in settings
- "If helpful, consider supporting"
- No pressure, full dismissal option
- Measure 3-5% uptake

### Phase 3 (2027+): Evaluate

- If donations hit 5-10% = sufficient (stay simple)
- If donations < 3% AND retention drops = subscription option
- If it works = don't change (avoid greed)

---

## How to Avoid Dark Patterns

### ❌ Dark Patterns (FORBIDDEN)

1. **Dark UX (Hidden costs)**
   - ❌ "Free trial" that auto-charges
   - ❌ Hidden subscription in settings
   - ❌ Charge without confirmation

2. **Pressuring (FOMO, urgency)**
   - ❌ "Limited time offer!"
   - ❌ "This feature expires soon"
   - ❌ "Everyone else bought it"

3. **Complexity (Confusing choices)**
   - ❌ "Which plan should I buy?" (too many)
   - ❌ Complicated refund process
   - ❌ Hard-to-find cancel button

4. **Manipulation (Psychological tricks)**
   - ❌ "Most popular" pre-selected
   - ❌ Saving shown as "per day" (looks cheaper)
   - ❌ Strikethrough fake original price

5. **Nagging (Recurring interruption)**
   - ❌ Daily prompts to upgrade
   - ❌ Feature degradation (make free version worse)
   - ❌ Disabled buttons with "upgrade" tooltip

---

## ✅ Ethical Monetization Principles

### 1. **Transparency**

- [ ] Tell users exactly what they're paying for
- [ ] No hidden fees or auto-renewal surprises
- [ ] Cancel anytime, no questions asked
- [ ] Refund policy clearly stated

### 2. **Optionality**

- [ ] Core features always free
- [ ] Premium is truly optional
- [ ] Upgrade button only when relevant (not everywhere)
- [ ] Ability to dismiss/ignore (no persistent nag)

### 3. **Value Alignment**

- [ ] Premium cost matches real value
- [ ] No artificial scarcity ("25% off today only")
- [ ] No FOMO mechanics
- [ ] Honest about what you get

### 4. **User Control**

- [ ] Users can export their data (even if free)
- [ ] Users can delete all data
- [ ] No data selling (ever)
- [ ] Privacy policy is plain English

### 5. **Sustainability (Not Growth at All Costs)**

- [ ] Make enough to maintain (not maximize)
- [ ] Don't sacrifice user experience for 1% more revenue
- [ ] If users churn because of premium, drop it
- [ ] Success = happy users, not max revenue

---

## Communication Framework

### When Introducing Premium (If Needed)

**Template message:**

> **Update: Supporting the App (Optional)**
>
> Yoga Routine will always be free for the core experience. All 7 levels, streak tracking, mood reflection – these are yours forever.
>
> If you've been practicing consistently and this app helps your wellness, you can optionally support development via a one-time donation or monthly subscription.
>
> This is entirely optional. The app works exactly the same if you don't donate. No features are locked, no experience changes.
>
> Why we're asking:
>
> - Hosting + security (small costs)
> - Feature development (time investment)
> - Accessibility improvements (ongoing work)
>
> Thank you for your practice. That's what matters most.

**Key elements:**

- Clear: What's free, what's not
- Honest: Why we're asking
- Respectful: User choice is paramount
- Non-guilt: "Thank you for your practice" not "You owe us"

---

## Sustainability (Without Monetization)

If you choose to stay **100% free forever:**

**How to stay viable:**

1. **Costs are low**
   - Static website (no servers)
   - No cloud infrastructure
   - CDN: GitHub Pages (free)
   - Total annual cost: ~$0-50

2. **Build community support**
   - Open source (GitHub)
   - Sponsor on GitHub (donations)
   - Patreon (optional, but works)
   - Merch (if demand, but don't over-engineer)

3. **Focus on efficiency**
   - Code stays minimal (no bloat)
   - Bundle size < 200KB (fast)
   - One person maintains (sustainable pace)
   - No growth pressure (good for mental health)

4. **Success metrics**
   - NOT: How much revenue?
   - BUT: How many users happy? How many users retained?
   - Measure: "If I stopped working tomorrow, would users be mad or grateful?"

**Reality check:** 10K users, 3-5% donating = $300-500/month. Not millions, but enough for 1 developer to maintain peacefully.

---

## Checklist: Ethical Monetization

- [ ] **Core yoga experience is free forever** (no paywalls)
- [ ] **Donation/premium only after 30+ day retention** (earned trust)
- [ ] **Clear, honest messaging** (no dark patterns)
- [ ] **Easy to dismiss** (no nag-ware)
- [ ] **User can export/delete data** (control + privacy)
- [ ] **Privacy policy clear** (no tracking, no data selling)
- [ ] **Refund policy simple** (easy cancellation)
- [ ] **No auto-renewal surprises** (explicit confirmation)
- [ ] **No feature degradation** (free version doesn't get worse)
- [ ] **Transparent costs** (exactly what you pay for)

---

## Summary: Revenue Recommendation

**For 2026:**

1. Launch free forever (Q1-Q3)
2. Introduce optional donation (Q4 2026)
3. Measure 3-5% uptake
4. If sufficient ($300+/month) → stay simple
5. If insufficient → consider sub, but don't ruin experience

**Your competitive advantage:** Most wellness apps are predatory. _You_ can be the one that respects users.

> "I'd rather have 10,000 users who love me than 100,000 users who resent me."

---

---

# 📊 PART 5: SUCCESS METRICS & ROADMAP SUMMARY

---

## Quarterly Success Metrics

### Q1 2026

| Metric               | Target       | Rationale                   |
| -------------------- | ------------ | --------------------------- |
| **Alpha testers**    | 100+         | Validate concept            |
| **Day 1 retention**  | 90%+         | First impression matters    |
| **Day 7 retention**  | 60%+         | Habit formation starts      |
| **Day 14 retention** | 45%+         | Weekly rhythm established   |
| **Load time**        | < 2 sec      | Not compromised by features |
| **User feedback**    | "feels calm" | Core value delivered        |

### Q2 2026

| Metric                   | Target | Rationale                      |
| ------------------------ | ------ | ------------------------------ |
| **Day 30 retention**     | 45%+   | Industry-leading (avg 25%)     |
| **DAU/MAU**              | 40%+   | Daily habit formation          |
| **Avg weekly sessions**  | 5+     | 5 days/week practice           |
| **Dashboard engagement** | 70%+   | Progress visibility working    |
| **PWA installs**         | 20%+   | Native-like experience adopted |

### Q3 2026

| Metric                     | Target            | Rationale            |
| -------------------------- | ----------------- | -------------------- |
| **Day 60+ retention**      | 35%+              | Long-term stickiness |
| **Total users**            | 5,000+            | Organic growth       |
| **Word-of-mouth**          | 40%+ of new users | Community-driven     |
| **Gesture adoption**       | 40%+              | Premium UX working   |
| **Accessibility features** | 5-8% adoption     | Inclusive design     |

### Q4 2026

| Metric               | Target  | Rationale         |
| -------------------- | ------- | ----------------- |
| **Total users**      | 10,000+ | Scale achieved    |
| **Day 30 retention** | 45%+    | Maintained        |
| **DAU**              | 1,000+  | 10% DAU/10K users |
| **Donation uptake**  | 3-5%    | Ethical revenue   |
| **Test coverage**    | 70%+    | Code health       |
| **NPS**              | 50+     | Satisfaction      |

---

## Product Roadmap Summary

```
Q1 2026: MVP+ Foundation
├─ Levels (Beginner, Grounding, Steady, Flowing, Strong)
├─ Mood + Energy selector
├─ Streak tracking
├─ Recovery Mode
├─ Post-session reflection
├─ UI refresh + dark mode
└─ Data privacy policy

Q2 2026: Engagement & Progress
├─ Dashboard (weekly heatmap)
├─ Skill radar chart
├─ Mood trend analysis
├─ PWA + offline mode
├─ Skill-based unlocks
├─ Weekly Flow suggestions
├─ Milestone cards
└─ Testimonials

Q3 2026: Premium Experience
├─ Gesture navigation
├─ Advanced level (Flex/Strength path)
├─ Expert level
├─ Low vision mode
├─ Anxiety-safe mode
├─ Event-driven refactor
├─ State machine for progression
├─ Design system
├─ Breath guide animation
└─ Accessibility audit

Q4 2026: Evolution & Sustainability
├─ Adaptive routine generator (local AI)
├─ Unit + integration tests
├─ Flow Master level
├─ Zen Mode (breathwork)
├─ Multi-language support
├─ Data export feature
├─ Optional donation system
├─ Community documentation
├─ Performance optimization
└─ 2027 roadmap planning
```

---

## 12-Month Timeline Overview

```
Jan         Feb         Mar         Apr         May         Jun
Q1: FOUNDATION          →→→→→→→
    Beginner, mood,     ├─ MVP complete ─┤
    streak, recovery    Launch alpha

        Jul         Aug         Sep         Oct         Nov         Dec
        Q2: ENGAGEMENT  →→→→→→→    Q3: PREMIUM     →→→→→→→    Q4: EVOLUTION  →→
            Dashboard, PWA  ├─ Analytics live ─┤  Gestures, A11y  ├─ Tests, i18n  ─┤
            Install app →         Skill unlocks         Refactor →
```

---

## Investment Required

### Time (Solo Developer)

- **Q1:** 40-50 hours/week × 12 weeks = 480-600 hours
- **Q2:** 35-45 hours/week × 13 weeks = 455-585 hours
- **Q3:** 40-50 hours/week × 13 weeks = 520-650 hours
- **Q4:** 35-45 hours/week × 13 weeks = 455-585 hours
- **Total Year 1:** ~1,900-2,400 hours (roughly 1 FTE developer)

### Money (Minimal Infrastructure)

- **Hosting:** $0 (GitHub Pages static)
- **Domain:** $12/year (optional)
- **Tools:** Free (GitHub, Node.js, VS Code)
- **Audio/CDN:** Free tier sufficient
- **Total Year 1:** ~$50 maximum

### Risk (Mitigated)

- ✅ No financial risk (no servers to pay)
- ✅ No employee risk (solo)
- ✅ No vendor lock-in (vanilla JS, no frameworks)
- ✅ High sustainability (cost < $100/year forever)

---

## Success Definition (Non-Financial)

You'll know this succeeded when:

1. **Users say:** "This app respects me"
2. **Users practice:** 5+ days/week on average
3. **Users stay:** 45%+ day-30 retention
4. **Users share:** Word-of-mouth grows 40% of new users
5. **Users return:** 60%+ day-60+ retention (true habit)
6. **Community forms:** GitHub issues, forks, feedback
7. **You're sustainable:** Minimal costs, maximum calm

**Not success if:**

- ❌ Users feel pressured (notifications, nagging)
- ❌ Users distrust you (dark patterns, privacy)
- ❌ Users churn (wrong product-market fit)
- ❌ You're burnt out (unsustainable pace)

---

## Final Recommendations

### Do This First (Q1)

1. ✅ Add Beginner level (entry ramp)
2. ✅ Implement mood selector (personalization signal)
3. ✅ Build MetricsService (foundation for growth)
4. ✅ Recovery Mode (anti-burnout, retention critical)
5. ✅ CSS refresh (premium feeling from day 1)

### Don't Skip (Q2-Q3)

1. ✅ Dashboard (show progress, prove value)
2. ✅ PWA (native-like, builds habit)
3. ✅ Accessibility (inclusive, ethical, differentiates)
4. ✅ Code architecture (prevent bloat, future-proof)

### Be Patient With (Q4+)

1. ⏳ Monetization (wait for trust first)
2. ⏳ Growth hacks (let users find you organically)
3. ⏳ Feature explosion (resist FOMO, stay focused)
4. ⏳ Scaling (1 developer, sustainable pace)

---

## Closing: Build with Purpose

> **Your app's purpose:** To help humans practice yoga consistently, calmly, without judgment or manipulation.
>
> **Your success criteria:** Users come back daily because they _want_ to, not because you _forced_ them to.
>
> **Your constraint:** Front-end only, vanilla JavaScript, privacy-first.
>
> **Your opportunity:** Build the one wellness app people trust.

This roadmap is ambitious but realistic. Execute with discipline, gather feedback ruthlessly, and adjust as you learn.

Good luck. Your practice awaits. 🧘

---

**Document version:** 2.0 (Final, Production-Ready)  
**Last updated:** January 19, 2026  
**Authored by:** Product Team Lead, Wellness Tech  
**Status:** Ready to execute
