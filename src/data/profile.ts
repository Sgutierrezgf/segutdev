export const SITE_URL = "https://segutdev.vercel.app";
export const EMAIL = "segutierrezdev@gmail.com";
export const PHONE_E164 = "573012363606";
export const GITHUB_URL = "https://github.com/Sgutierrezgf";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/sebastian-gutierrez-54b403148/";
export const CV_EN_URL = "/Sebastian_Gutierrez_CV_EN.pdf";
export const CV_ES_URL = "/Sebastian_Gutierrez_CV_ES.pdf";

export const MAILTO_URL = `mailto:${EMAIL}`;
export const WHATSAPP_URL = `https://wa.me/${PHONE_E164}`;

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  url?: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

export const experience: ExperienceItem[] = [
  {
    period: "2023 — Present",
    role: "Full-Stack Developer",
    company: "hakme.ai (Freelance)",
    url: "https://hakme.ai",
    summary:
      "End-to-end development of a mental health platform: a shared backend and two apps (patients and therapists/admins) for web, iOS and Android — from database schema and APIs to UI, native push notifications and production deployment.",
    highlights: [
      "Built an automated patient segmentation and re-engagement system with AI-generated personalized messages and send-frequency control.",
      "Shipped an admin-configurable survey engine (no new app builds) with audience targeting, deep-linked push notifications and real-time results.",
      "Fixed critical production push-notification bugs (out-of-sync badges, stale FCM tokens).",
      "Set up a safe release policy: pytest and Vitest suites as a mandatory gate, plus versioned, idempotent database migrations.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "OpenAI API",
      "React",
      "TypeScript",
      "Capacitor",
      "Firebase",
      "Docker",
      "AWS",
    ],
  },
  {
    period: "2021 — 2022",
    role: "Software Engineer Mid I",
    company: "Jikkosoft",
    url: "https://jikkosoft.com/silin/",
    summary:
      "Frontend for Silin, a platform that centralizes tax collection for municipalities and regional governments, working in Scrum with design, QA and product.",
    highlights: [
      "Developed and evolved the UI component architecture with React, TypeScript and Material UI, focused on scalability and maintainability.",
      "Integrated client and server through REST APIs for a reliable data flow.",
    ],
    tech: ["React", "TypeScript", "Material UI", "REST APIs", "Scrum"],
  },
  {
    period: "2019 — 2021",
    role: "Database Trainee",
    company: "SETI S.A.S.",
    summary:
      "Database support for a financial institution: queries, changes, roles and access permissions.",
    highlights: [
      "Automated access to internal information with a JavaScript chatbot, speeding up team decisions.",
      "Managed data integrity, security and permissions through SQL scripts.",
    ],
    tech: ["SQL", "JavaScript"],
  },
];

export interface Project {
  name: string;
  url: string;
  repo?: string;
  image?: string;
  description: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    name: "BlockProc",
    url: "https://github.com/Sgutierrezgf/blockproc",
    repo: "https://github.com/Sgutierrezgf/blockproc",
    description:
      "Android app that adds mindful friction to distracting apps: time-based or scheduled blocks, a focus message and a 3-question challenge before access. Fully local (no accounts, no network), with a custom Kotlin native module to detect the foreground app.",
    tech: ["React Native", "Expo", "TypeScript", "Kotlin", "NativeWind", "Jest"],
  },
  {
    name: "Sausage shop manager",
    url: "https://repartidor-de-mi-chorizo.vercel.app",
    repo: "https://github.com/Sgutierrezgf/repartidor-de-mi-chorizo",
    description:
      "Order and sales manager for a small food business: public order page, sales cycles, deliveries, recipes and profit summaries. Bilingual (ES/EN) with light and dark themes.",
    tech: ["React", "TypeScript", "Supabase", "Zod", "React Hook Form", "Tailwind"],
  },
  {
    name: "Silin",
    url: "https://jikkosoft.com/silin/",
    image:
      "https://raw.githubusercontent.com/Sgutierrezgf/imagenes/main/portfolio/silin.webp",
    description:
      "Tax-collection platform for municipalities and regional governments, built at Jikkosoft in a Scrum team with design and QA.",
    tech: ["React", "TypeScript", "Material UI", "Styled Components"],
  },
  {
    name: "Marvel explorer",
    url: "https://dcnext-sgutierrezgf.vercel.app",
    image:
      "https://raw.githubusercontent.com/Sgutierrezgf/imagenes/main/portfolio/marvel.webp",
    description:
      "Next.js app that consumes the Marvel API to browse characters and comics. Built as a hiring challenge.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    name: "Pokédex with auth",
    url: "https://pokenext-three-rust.vercel.app/pokemons",
    image:
      "https://raw.githubusercontent.com/Sgutierrezgf/imagenes/main/portfolio/pokeApi.webp",
    description:
      "Full-stack Pokédex with login, built from a provided design. Built as a hiring challenge.",
    tech: ["Next.js", "Prisma", "MongoDB", "Tailwind"],
  },
];
