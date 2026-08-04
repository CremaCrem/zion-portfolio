export type Project = {
  slug: string;
  title: string;
  category: "Desktop" | "Web" | "Full stack" | "Unity / AR";
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
  }
];
