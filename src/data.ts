export interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "ReadinTime",
    tagline: "Storyteller for neurodiverse children",
    description:
      "Cross-platform desktop app that creates personalized reading experiences for neurodiverse children, with voice-cloning TTS powered by the Chatterbox model. Electron frontend, refactored Python backend, packaged with PyInstaller.",
    tech: ["Electron", "Python", "Chatterbox TTS", "PyInstaller"],
    link: "https://github.com/Jack5316/ReadinTime",
    image: "/images/portfolio/readintime.png",
    featured: true,
  },
  {
    title: "Minimus",
    tagline: "AI-in-education showcase platform",
    description:
      "Full-stack platform showcasing AI applications in education. Passwordless magic-link auth, Castle threat detection, reCAPTCHA, and a carefully designed PostgreSQL schema — deployed on Azure.",
    tech: ["Next.js", "React", "PostgreSQL", "Azure"],
    link: "https://github.com/Jack5316/Minimus",
    image: "/images/portfolio/minimus.png",
    featured: true,
  },
  {
    title: "LLM Wiki",
    tagline: "Agent-maintained knowledge base",
    description:
      "An AI agent that continuously integrates new sources into an interconnected markdown wiki — inspired by Andrej Karpathy's LLM Wiki concept. Knowledge compounds over time instead of being re-derived per query like RAG.",
    tech: ["Markdown", "LLM Agents", "Obsidian"],
    link: "https://github.com/Jack5316/llm-wiki",
  },
  {
    title: "Modern Socratic Method",
    tagline: "AI-powered philosophical dialogue",
    description:
      "Brings the ancient Socratic method into the LLM era. Structured prompt templates around elenchus, aporia, and dialectic drive dialogues that probe assumptions and surface contradictions, powered by the Deepseek API.",
    tech: ["Python", "Deepseek API", "Prompt Engineering"],
    link: "https://github.com/Jack5316/Modern_Socratic_Method",
  },
  {
    title: "Obsidian Flomo Plugin",
    tagline: "Instant note sync to Flomo",
    description:
      "Obsidian community plugin that bridges your local markdown vault with Flomo's micro-note platform. Push any note or selection to Flomo with a single command — zero context switching.",
    tech: ["TypeScript", "Obsidian API", "esbuild"],
    link: "https://github.com/Jack5316/obsidian-flomo-plugin",
  },
  {
    title: "Cubox CLI",
    tagline: "Command-line client for Cubox",
    description:
      "Fast, cross-platform Go CLI for saving URLs, memos, and entire RSS feeds to the Cubox read-later platform via its Open API. Pre-built binaries for macOS, Linux, and Windows.",
    tech: ["Go", "REST API", "Make"],
    link: "https://github.com/Jack5316/Cubox_CLI",
  },
  {
    title: "Flomo CLI",
    tagline: "Terminal client for Flomo notes",
    description:
      "Lightweight Python CLI to capture thoughts to Flomo without leaving the terminal — inline args, stdin pipes, file input, and #hashtag tagging. pipx-installable for clean isolation.",
    tech: ["Python", "Webhook API", "pipx"],
    link: "https://github.com/Jack5316/Flomo_CLI",
  },
  {
    title: "GetNote CLI",
    tagline: "Client for Get笔记 open API",
    description:
      "Minimal, zero-dependency Python 3.9+ CLI for the Get笔记 open platform — list notes with cursor pagination, retrieve, and create from text, stdin, or files. Standard library only.",
    tech: ["Python", "Open API", "Zero-dependency"],
    link: "https://github.com/Jack5316/GetNote_CLI",
  },
];

export interface TimelineEntry {
  period: string;
  title: string;
  org: string;
  location?: string;
  detail?: string;
  kind: "work" | "education" | "research";
}

export const timeline: TimelineEntry[] = [
  {
    period: "Mar 2026 — Present",
    title: "Process Engineer",
    org: "EPG (易普集) · Process Equipment Department",
    kind: "work",
  },
  {
    period: "Sep 2024 — Dec 2025",
    title: "MSc Computer Science",
    org: "University College London",
    location: "London, UK",
    kind: "education",
  },
  {
    period: "Summer 2023",
    title: "Hardware Engineer",
    org: "Kangway Technology Company",
    detail: "PCB circuit design and layout drawing",
    kind: "work",
  },
  {
    period: "Summer 2022",
    title: "Research Assistant",
    org: "XJTLU · School of Advanced Technology",
    detail:
      "Investigation on the transition characteristics of GaN inverters — circuit analysis, simulation and testing. Advisor: Prof. Sang Lam",
    kind: "research",
  },
  {
    period: "Sep 2020 — Aug 2024",
    title: "BEng Electronic Science & Technology",
    org: "Xi'an Jiaotong-Liverpool University",
    location: "Suzhou, China",
    detail: "Dual degree with the University of Liverpool",
    kind: "education",
  },
];

export const skillRows: string[][] = [
  ["Python", "TypeScript", "React", "Next.js", "Go", "C", "PostgreSQL", "Electron"],
  ["Verilog HDL", "FPGA", "CMOS Circuit Design", "Assembly", "LLM Agents", "Prompt Engineering", "Vibe Coding", "Azure"],
];

export const languages = [
  { name: "Mandarin", level: "Fluent" },
  { name: "English", level: "Fluent" },
  { name: "Cantonese", level: "Basic" },
  { name: "Spanish", level: "Basic" },
];
