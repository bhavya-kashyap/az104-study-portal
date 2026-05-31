# AZ-104 Study Portal

A complete, interactive study portal to help you master the **AZ-104 Azure Administrator** exam.

🌐 **Live Site:** [https://bhavya-kashyap.github.io/az104-study-portal/](https://bhavya-kashyap.github.io/az104-study-portal/)

## Features

- 📚 **Course Modules** — Structured study material across all 5 AZ-104 exam domains
- ❓ **Daily Quizzes** — Domain-specific quizzes with instant feedback and explanations
- 🎓 **Practice Exams** — Full-length timed mock exams with detailed review
- 📈 **Performance Tracking** — Progress across domains, score trends, and recommendations
- 📅 **60-Day Study Plan** — Structured schedule guiding you through all exam topics
- 🎯 **Exam Readiness Score** — Real-time readiness score with actionable advice
- 👤 **Multi-User Support** — Create your own profile and track personal progress
- 📱 **Mobile-Friendly** — Fully responsive design works on phones and tablets

## Hosting

The site is hosted on **GitHub Pages** from the `main` branch root.

- GitHub Pages Source: `main` branch → `/` (root)
- The `.nojekyll` file at the root disables Jekyll processing, ensuring all assets are served correctly.

## Versions

Releases are tracked via [GitHub Releases](https://github.com/bhavya-kashyap/az104-study-portal/releases). The current version is displayed in the sidebar, and users can browse available versions from the version switcher.

## Local Development

Since this is a static site (vanilla HTML/CSS/JS), you can open `index.html` directly in your browser or use any static file server:

```bash
# Using Python
python3 -m http.server 8080

# Using Node.js (npx)
npx serve .
```

Then open [http://localhost:8080](http://localhost:8080).

## Disclaimer

This is a community study tool and is not affiliated with or endorsed by Microsoft Corporation. AZ-104 is a trademark of Microsoft.
