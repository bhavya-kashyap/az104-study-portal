# AZ-104 Study Portal

A complete, interactive study portal to help you master the **Microsoft AZ-104 Azure Administrator** exam.  
Track your progress, take quizzes, review study material, and monitor your exam readiness — all in one place.

---

## Overview

| | |
|---|---|
| **Version** | v2.0.1 |
| **Type** | Static Single-Page Application (SPA) |
| **Stack** | Vanilla HTML · CSS · JavaScript (no build tools, no backend) |
| **Entry point** | `index.html` |

---

## Features

- **60-Day Study Schedule** — Structured daily plan across all 5 AZ-104 exam domains
- **Course Modules** — Domain-by-domain reference material with exam-focused tips
- **Daily Quizzes** — Domain-specific quizzes with instant feedback; ≥ 90% unlocks day completion
- **Weekend Practice Exams** — Full-length timed mock exams
- **Performance Tracking** — Score history, domain breakdown, trend charts
- **Exam Readiness Score** — Real-time readiness indicator with recommendations
- **Study Material Viewer** — Per-day study notes linked directly from the schedule
- **Multi-user** — Local authentication with per-user progress stored in `localStorage`

---

## Project Structure

```
az104-study-portal/
├── index.html                  # Single HTML file — full app shell
└── assets/
    ├── css/
    │   └── main.css            # All styles
    └── js/
        ├── core/
        │   ├── config.js       # APP_CONFIG (version, feature flags)
        │   ├── auth.js         # Login / register / session management
        │   ├── storage.js      # Per-user localStorage helpers
        │   ├── router.js       # Client-side router (hash-based)
        │   └── app.js          # App bootstrap, sidebar, modal helpers
        ├── data/
        │   ├── course-data.js  # 60-day schedule + 5 domain definitions
        │   ├── quiz-data.js    # 200+ quiz & exam questions
        │   ├── cloud-shell-1.js  ← Cloud Shell Unit 1: Introduction (Day 1)
        │   ├── cloud-shell-2.js  ← Cloud Shell Unit 2: What is Cloud Shell (Day 2)
        │   ├── cloud-shell-3.js  ← Cloud Shell Unit 3: How it Works (Day 3)
        │   ├── cloud-shell-4.js  ← Cloud Shell Unit 4: When to Use (Day 4)
        │   ├── cloud-shell-5.js  ← Cloud Shell Unit 5: Knowledge Check (Day 5)
        │   └── cloud-shell-6.js  ← Cloud Shell Unit 6: Summary (Day 6)
        └── pages/
            ├── dashboard.js    # Dashboard page
            ├── schedule.js     # 60-day calendar + day detail modal
            ├── study.js        # Study material viewer (reads STUDY_LESSONS)
            ├── modules.js      # Course Modules page (all 5 domains + Cloud Shell)
            ├── quiz.js         # Daily quiz engine
            ├── exam.js         # Practice exam engine
            ├── performance.js  # Score charts and history
            ├── readiness.js    # Exam readiness score
            ├── resources.js    # External links
            └── profile.js      # User profile / exam date settings
```

### Script Load Order (`index.html`)

```
config.js → auth.js → course-data.js → quiz-data.js
  → cloud-shell-1…6.js → storage.js → router.js
  → page scripts → app.js
```

Data files must load before `storage.js` and `router.js`.

---

## Study Content Architecture

### `window.STUDY_LESSONS`

Study material is stored in a global object populated by data files before the router initialises.  
Each key is a **schedule day number** (1–60); the value is a lesson object:

```js
window.STUDY_LESSONS[dayNumber] = {
  domain: 'D1',           // Domain ID matching COURSE_DATA.domains
  title: 'Lesson title',
  msLearnUrl: 'https://learn.microsoft.com/...',  // linked from study viewer
  sections: [
    { title: 'Section heading', content: '<p>HTML content…</p>' },
    // ...
  ]
};
```

### Adding New Study Content

1. Create a new file in `assets/js/data/`, e.g. `study-day7.js`
2. Use `Object.assign(window.STUDY_LESSONS, { 7: { … } })` — wrapping the whole file in an IIFE:

```js
(function () {
  if (!window.STUDY_LESSONS) window.STUDY_LESSONS = {};
  Object.assign(window.STUDY_LESSONS, {
    7: {
      domain: 'D1',
      title: 'Management Groups, Subscriptions & Cost Management',
      msLearnUrl: 'https://learn.microsoft.com/en-us/training/...',
      sections: [
        { title: 'Section 1', content: `<p>…</p>` }
      ]
    }
  });
})();
```

3. Add a `<script>` tag to `index.html` **before** `storage.js`:

```html
<script src="assets/js/data/study-day7.js"></script>
```

---

## Azure Cloud Shell Module

The first 6 days of the 60-day plan cover the official Microsoft Learn prerequisite module  
**"Introduction to Azure Cloud Shell"** ([learn.microsoft.com](https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cloud-shell/)).

Each MS Learn unit is its own JS file so content can be maintained independently:

| File | Unit | Schedule Day | Content |
|---|---|---|---|
| `cloud-shell-1.js` | Unit 1 | Day 1 | Introduction, learning objectives, AZ-104 exam overview |
| `cloud-shell-2.js` | Unit 2 | Day 2 | What is Cloud Shell — shells, access points, storage, tools, session lifecycle |
| `cloud-shell-3.js` | Unit 3 | Day 3 | How it works — architecture, auth flow, first-launch storage, Monaco editor, Azure: drive |
| `cloud-shell-4.js` | Unit 4 | Day 4 | When to use — decision framework, exam scenarios, limitations, comparison table |
| `cloud-shell-5.js` | Unit 5 | Day 5 | Knowledge check — 10 interactive Q&A with answer explanations |
| `cloud-shell-6.js` | Unit 6 | Day 6 | Summary — full recap, key-facts reference, next steps |

### Accessing Cloud Shell Content in the App

**From the Schedule:**  
Click any of Days 1–6 in the Study Schedule → the day detail modal shows a **Study Material** button → opens the study viewer for that unit.

**From Course Modules:**  
The **"Prerequisite: Introduction to Azure Cloud Shell"** card appears at the top of the Course Modules page with a **Study** button for each unit.

---

## Running Locally

Because this is a fully static app you can serve it with any static file server:

```bash
# Python (built-in)
python3 -m http.server 8080

# Node.js (npx)
npx serve .

# VS Code
# Install the "Live Server" extension and click "Go Live"
```

Then open `http://localhost:8080` in your browser.

> **No build step required.** All dependencies are loaded from CDN (Font Awesome, Google Fonts).

---

## Data Storage

All user data is stored in the browser — nothing is sent to a server.

| Key | Storage | Contents |
|---|---|---|
| `az104_users` | `localStorage` | Registered user accounts |
| `az104_data_{username}` | `localStorage` | Per-user progress, quiz results, exam results |
| `az104_session` | `sessionStorage` | Current logged-in user |

---

## Exam Domains

| ID | Domain | Exam Weight |
|---|---|---|
| D1 | Manage Azure Identities & Governance | 20–25% |
| D2 | Implement & Manage Storage | 15–20% |
| D3 | Deploy & Manage Azure Compute Resources | 20–25% |
| D4 | Implement & Manage Virtual Networking | 15–20% |
| D5 | Monitor & Maintain Azure Resources | 10–15% |

**Exam format:** 40–60 questions · 115 minutes · Passing score 700 / 1000

---

## Disclaimer

This is a community study tool and is **not affiliated with or endorsed by Microsoft Corporation**.  
All Azure trademarks and product names are the property of Microsoft.
