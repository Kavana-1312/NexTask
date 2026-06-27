# NexTask ✅

A React-based task management application built to help you stay organized 
and productive — with persistent storage, progress tracking, and a clean, 
responsive UI.

---

## 📌 Features

- **Task Input Form** — Add tasks via an input field with a submit button;
  validates input to prevent empty or duplicate entries.
- **Task List** — Displays tasks dynamically with their name and completion 
  status; mark tasks complete or delete them instantly.
- **Persistent Storage** — Uses `localStorage` to save tasks so they remain 
  even after refreshing the page.
- **Progress Tracker** — Visual tracker showing the percentage of tasks 
  completed, updating dynamically as tasks change.
- **Task History** — View completed tasks, with options to restore or 
  permanently delete them.
- **Responsive Design** — Adapts smoothly to desktops, tablets, and mobiles.

---

## 🛠️ Tech Stack

| Category         | Technology              |
|------------------|-------------------------|
| Frontend         | React.js                |
| Data Storage     | localStorage            |
| Version Control  | Git & GitHub            |
| Deployment       | GitHub Pages / Netlify  |

---

## 📦 Prerequisites

Make sure you have the following installed:

- [Node.js & npm](https://nodejs.org/) — to manage dependencies and run the app
- [Visual Studio Code](https://code.visualstudio.com/) — or any code editor
- Google Chrome or any modern browser

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/taskbuddy.git
cd taskbuddy
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App Locally

```bash
npm run dev
```

Open your browser and go to `http://localhost:5173`

---

## 🧪 Running Tests

```bash
npm run test
```

> Built and tested using **Vitest** as part of the Mastering Vitest module.

---

## 🌐 Deployment

### Deploy to GitHub Pages

```bash
npm run build
npm run deploy
```

### Deploy to Netlify

Connect your GitHub repo to [Netlify](https://netlify.com) and set the 
build command to `npm run build` with publish directory as `dist`.

---

