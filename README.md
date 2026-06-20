# Hindu Patrini — Developer Portfolio

A premium, fully responsive portfolio website built to showcase full-stack MERN projects and freelance services.

**Live Site:** portfolio-rho-ten-isf8pbecyn.vercel.app

---

## ✨ Features

- **Premium dark/light theme** with smooth toggle and persisted preference
- **Icon-only sidebar navigation** — expands on hover (desktop), slides in via hamburger menu (mobile)
- **Animated sections** powered by Framer Motion (scroll-reveal, hover micro-interactions)
- **Project showcase** with live demo links, GitHub links, tech stack tags, and screenshot galleries
- **Services section** outlining freelance offerings
- **Education timeline** and categorized skills grid (Frontend / Backend / Tools)
- **Contact form** powered by Formspree — sends email notifications on submission
- **Fully responsive** — optimized for mobile, tablet, and desktop
- **No backend required** — fully static, deployable on Vercel

---

## 🛠 Tech Stack

- **React** (Vite)
- **Tailwind CSS v3**
- **Framer Motion**
- **React Icons / Lucide React**
- **Formspree** (contact form handling)

---

## 📁 Project Structure

\`\`\`
portfolio/
├── public/
│   └── photos/
│       ├── cinescope/   (ss1.jpg, ss2.jpg, ss3.jpg)
│       ├── flavr/       (ss1.jpg, ss2.jpg, ss3.jpg)
│       └── chattr/      (ss1.jpg, ss2.jpg, ss3.jpg)
│
├── src/
│   ├── components/      # Sidebar, Hero, About, Services, Projects, Contact, Footer
│   ├── data/             # projects.js, services.js, skills.js, site.js
│   ├── context/          # ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── tailwind.config.js
├── postcss.config.js
└── index.html
\`\`\`

---

## 🚀 Getting Started

### 1. Clone the repository
\`\`\`bash
git clone https://github.com/HinduPatrini/Portfolio.git
cd Portfolio
\`\`\`

### 2. Install dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Run the development server
\`\`\`bash
npm run dev
\`\`\`
Visit \`http://localhost:5173\` to view it locally.

### 4. Build for production
\`\`\`bash
npm run build
\`\`\`

### 5. Preview the production build
\`\`\`bash
npm run preview
\`\`\`

---

## 🖼 Adding Project Screenshots

Drop your screenshots into the matching folder under \`public/photos/\`, named exactly:

\`\`\`
public/photos/cinescope/ss1.jpg
public/photos/cinescope/ss2.jpg
public/photos/cinescope/ss3.jpg

public/photos/flavr/ss1.jpg
public/photos/flavr/ss2.jpg
public/photos/flavr/ss3.jpg

public/photos/chattr/ss1.jpg
public/photos/chattr/ss2.jpg
public/photos/chattr/ss3.jpg
\`\`\`

---

## 📦 Featured Projects

| Project | Description | Live | Source |
|---|---|---|---|
| **CineScope** | Movie discovery platform using OMDB API | [Live](https://cine-scope-eight-nu.vercel.app/) | [GitHub](https://github.com/HinduPatrini/CineScope) |
| **Flavr** | AI-powered recipe finder with Google OAuth | [Live](https://flavr-seven.vercel.app/) | [GitHub](https://github.com/HinduPatrini/Flavr) |
| **Chattr** | Real-time chat app with Socket.io | [Live](https://chattr-sandy.vercel.app/) | [GitHub](https://github.com/HinduPatrini/Chattr) |

---

## ☁️ Deployment (Vercel)

This project is configured for zero-config deployment on Vercel.

1. Push the repository to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New → Project**
3. Import the repository
4. Framework Preset: **Vite** (auto-detected)
   - Build Command: \`npm run build\`
   - Output Directory: \`dist\`
5. Click **Deploy**

Every push to \`main\` will automatically trigger a redeploy.

---

## 📬 Contact

- **Email:** hindupatrini16@gmail.com
- **GitHub:** [HinduPatrini](https://github.com/HinduPatrini)
- **LinkedIn:** [hindu-patrini](https://www.linkedin.com/in/hindu-patrini-7ab07a37a)
- **Instagram:** [@hinduu_16](https://www.instagram.com/hinduu_16/)

---

## 📄 License

This project is open for reference and learning purposes. Please do not copy content (bio, project descriptions) directly — feel free to use the structure/code as inspiration for your own portfolio.
