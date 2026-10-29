export type Project = {
  slug: string;
  title: string;
  category: "Desktop" | "Web" | "Full stack" | "Mobile" | "Unity / AR";
  oneLiner: string;
  description: string;
  role: string;
  stack: string[];
  links?: { label: string; href: string }[];
  media?: { type: "image" | "video"; src: string; alt: string }[];
  theme: {
    accent: string;
    accentSecondary: string;
    bg: string;
    displayFont: "spectral" | "playfair" | "pixel" | "sans";
  };
};

export const projects: Project[] = [
  {
    slug: "idsc-pulse",
    title: "IDSC Pulse",
    category: "Web",
    oneLiner: "A technical publication platform for university students to share research and engineering write-ups.",
    description: "Designed and developed a digital platform for students to discover technical logs, capstone research, and engineering write-ups.",
    role: "Lead Developer",
    stack: ["React", "Vite", "Tailwind CSS"],
    links: [
      { label: "Live Site", href: "https://idscpulse.netlify.app/" }
    ],
    theme: {
      accent: "#059669",
      accentSecondary: "#047857",
      bg: "#FFFFFF",
      displayFont: "playfair"
    }
  },
  {
    slug: "saray",
    title: "Saray",
    category: "Desktop",
    oneLiner: "A desktop app that helps museum staff catalog artifacts without manual paperwork.",
    description: "A custom desktop application built with Vue and Tauri to automate artifact cataloging and document generation.",
    role: "Solo developer (Internship)",
    stack: ["Tauri", "Vue", "JavaScript", "CSS"],
    links: [
      { label: "Source Code", href: "https://github.com/CremaCrem/saray" }
    ],
    theme: {
      accent: "#6366F1",
      accentSecondary: "#818CF8",
      bg: "#0B0F19",
      displayFont: "sans"
    }
  },
  {
    slug: "museum-repository",
    title: "Artifact Repository",
    category: "Full stack",
    oneLiner: "A centralized database system for managing and archiving digital museum records.",
    description: "Engineered a comprehensive museum artifact repository using the MERN stack (MongoDB, Express, React, Node.js) to centralize digital archives.",
    role: "Solo developer (Internship)",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    links: [
      { label: "Live Dashboard", href: "https://mdi-repository.vercel.app/dashboard" }
    ],
    theme: {
      accent: "#6B8E23",
      accentSecondary: "#C9A227",
      bg: "#2C1E16",
      displayFont: "sans"
    }
  },
  {
    slug: "museo-de-isarog",
    title: "Museo de Isarog",
    category: "Web",
    oneLiner: "A public-facing website improving the digital presence of a cultural heritage institution.",
    description: "Designed and deployed a static landing page for the museum using React and Tailwind CSS to improve digital presence and showcase exhibits.",
    role: "Solo developer (Internship)",
    stack: ["React", "Tailwind CSS", "JavaScript"],
    links: [
      { label: "Live Site", href: "https://museodeisarog.vercel.app/" }
    ],
    theme: {
      accent: "#6B8E23",
      accentSecondary: "#C9A227",
      bg: "#2C1E16",
      displayFont: "sans"
    }
  },
  {
    slug: "paratanom",
    title: "Paratanom",
    category: "Unity / AR",
    oneLiner: "An augmented reality farming game that teaches agricultural concepts.",
    description: "Developed a custom object-detection model and integrated neural network inference within the Unity engine using YOLOv8N to power real-time augmented reality interactions for a farming game.",
    role: "Lead Developer",
    stack: ["Unity", "C#", "YOLOv8N", "Machine Learning"],
    links: [
      { label: "Live Demo", href: "https://cremacrem.github.io/paratanom/" }
    ],
    theme: {
      accent: "#22C55E",
      accentSecondary: "#EA580C",
      bg: "#F8F9FA",
      displayFont: "pixel"
    }
  },
  {
    slug: "pageant-tabulator",
    title: "PageantTabulator",
    category: "Desktop",
    oneLiner: "The scoring system judges used live at the Mr. and Ms. IDSC 2026 pageant, with results tallied instantly and no internet needed.",
    description: "Offline-first Tauri v2 desktop app: the admin laptop runs an embedded Rust (axum) HTTP + WebSocket server with SQLite storage, while judges score from any browser on the venue Wi-Fi. React 19 + TypeScript frontend; GitHub Actions builds the Windows installer.",
    role: "Solo developer (used at the IDSC 18th Founding Anniversary, Sept 10, 2026)",
    stack: ["Tauri", "Rust", "axum", "WebSocket", "SQLite", "React", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "Source Code", href: "https://github.com/CremaCrem/pageanttabulator" }
    ],
    theme: {
      accent: "#D4AF37",
      accentSecondary: "#B76E79",
      bg: "#1C0F1A",
      displayFont: "playfair"
    }
  },
  {
    slug: "shelloc",
    title: "SHELLOC",
    category: "Full stack",
    oneLiner: "Web and phone dashboards that let operators watch and guide a water-cleaning robot boat in real time.",
    description: "Python backend ingests live robot telemetry (turbidity, pH, TDS, temperature, GPS), enforces a 9-stage remediation state machine, and pushes updates over WebSockets to a React (Vite + TypeScript) web portal and a React Native (Expo) mobile app, with Leaflet GPS maps and a Google Gemini assistant for plain-language diagnostics.",
    role: "Software developer (backend, web portal, and mobile app)",
    stack: ["Python", "WebSocket", "React", "TypeScript", "React Native", "Expo", "Leaflet", "Google Gemini"],
    links: [
      { label: "Live Dashboard", href: "https://shelloc-web.vercel.app" },
      { label: "Source Code", href: "https://github.com/CremaCrem/shelloc-backend" }
    ],
    theme: {
      accent: "#22D3EE",
      accentSecondary: "#0EA5E9",
      bg: "#04131C",
      displayFont: "sans"
    }
  },
  {
    slug: "kys",
    title: "KYS – Keep Yourself Safe",
    category: "Desktop",
    oneLiner: "A password manager for families sharing one computer: everyone gets their own locked profile, and nothing goes to the cloud.",
    description: "Electron + React desktop app with master-password encrypted local storage, per-profile vaults, auto-lock, a printable recovery kit, and password-protected export/import. Shipped as a Windows installer across 7 releases.",
    role: "Solo developer",
    stack: ["Electron", "React", "JavaScript", "Encryption"],
    links: [
      { label: "Download (Windows)", href: "https://github.com/CremaCrem/K.Y.S/releases" },
      { label: "Source Code", href: "https://github.com/CremaCrem/K.Y.S" }
    ],
    theme: {
      accent: "#F59E0B",
      accentSecondary: "#FBBF24",
      bg: "#0F1417",
      displayFont: "sans"
    }
  },
  {
    slug: "stack-and-trace",
    title: "Stack & Trace",
    category: "Web",
    oneLiner: "A playful study site that teaches data structures and algorithms through short animations and step-by-step labs.",
    description: "Dependency-free static site (vanilla JavaScript, SVG scenes, pixel art) built for IDSC's CC 104 course. Each topic pairs an animated lesson with labs students can play, rewind, and test themselves on in a PREDICT mode; it runs by opening index.html, with no build step.",
    role: "Solo developer (built for the CC 104 class I teach)",
    stack: ["JavaScript", "SVG", "HTML", "CSS"],
    links: [
      { label: "Source Code", href: "https://github.com/CremaCrem/stack-and-trace" }
    ],
    theme: {
      accent: "#7C3AED",
      accentSecondary: "#F59E0B",
      bg: "#FFFBEB",
      displayFont: "pixel"
    }
  },
  {
    slug: "jvcm-songbook",
    title: "JVCM Songbook",
    category: "Full stack",
    oneLiner: "A chord-chart and set-list app that replaced a worship band's spreadsheet and is used weekly by 10–20 members on their phones.",
    description: "React + Vite PWA with an Express 5 + MongoDB API. Features a ChordPro chord engine with display-only transposition and capo hints, an arrangement builder, per-service set lists, role-based accounts, and offline viewing on stage. Tested with Vitest against an in-memory MongoDB.",
    role: "Solo developer",
    stack: ["React", "TypeScript", "PWA", "Express", "MongoDB", "Vitest"],
    theme: {
      accent: "#9F1239",
      accentSecondary: "#B45309",
      bg: "#FAF6EE",
      displayFont: "spectral"
    }
  },
  {
    slug: "nutribox",
    title: "NutriBox",
    category: "Mobile",
    oneLiner: "A phone app that shows the nutrition breakdown of a meal after a smart device photographs and weighs it.",
    description: "React Native (Expo Router, TypeScript) companion app for a Raspberry Pi device that identifies ingredients with Google Gemini Vision and looks up nutrients from the USDA FoodData Central API. The app shows meal history, daily calorie and macro tracking, weekly progress, and nutrition goals.",
    role: "Mobile app developer",
    stack: ["React Native", "Expo", "TypeScript", "Google Gemini", "USDA API"],
    links: [
      { label: "Source Code", href: "https://github.com/CremaCrem/nutribox-mobile-app" }
    ],
    theme: {
      accent: "#C2410C",
      accentSecondary: "#65A30D",
      bg: "#FFF7ED",
      displayFont: "sans"
    }
  }
];
