/**
 * Single source of truth for all portfolio content.
 * Grounded in Raj Gaurav Tiwari's CV.
 */

export const site = {
  name: "Raj Gaurav Tiwari",
  shortName: "Raj Gaurav Tiwari",
  role: "Software Engineer · Machine Learning Engineer",
  tagline: "Building Intelligent Systems at Scale",
  subheading:
    "Software Engineer | Machine Learning Engineer | Microsoft Intern | IIT Guwahati",
  description:
    "Raj Gaurav Tiwari builds intelligent systems that operate at scale — from a 13.4M-tenant fraud-detection platform at Microsoft to fault-tolerant drone control and RAG-powered products.",
  url: "https://rajtiwari.vercel.app",
  location: "Hyderabad / Guwahati, India",
  email: "rajt4656@gmail.com",
  emailAlt: "raj.tiwari@iitg.ac.in",
  phone: "+91-9667782966",
  resumeUrl: "/Raj_Gaurav_Tiwari_CV.pdf",
  // Set NEXT_PUBLIC_GITHUB_USERNAME in .env.local to enable live GitHub stats.
  githubUsername: process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "RajGauravTiwari",
} as const;

export const socials = {
  linkedin: "https://www.linkedin.com/in/rgt2006/",
  github: "https://github.com/RajGauravTiwari",
  codeforces: "https://codeforces.com/profile/uti_raj",
  kaggle: "https://www.kaggle.com/",
  email: "mailto:rajt4656@gmail.com",
} as const;

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Journey", href: "#journey" },
  { label: "Microsoft", href: "#microsoft" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Arena", href: "#arena" },
  { label: "Contact", href: "#contact" },
] as const;

/* -------------------------------------------------------------------------- */
/*  Hero counters                                                             */
/* -------------------------------------------------------------------------- */

export interface HeroStat {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  format?: "compact" | "raw";
}

export const heroStats: HeroStat[] = [
  { value: 13.4, suffix: "M", decimals: 1, label: "Tenants Scored" },
  { value: 284, label: "Engineered Features" },
  { value: 196, suffix: "K", label: "Risk Signals Surfaced" },
  { value: 99.996, suffix: "%", decimals: 3, label: "Precision @ Top 1%" },
];

/* -------------------------------------------------------------------------- */
/*  Career timeline                                                           */
/* -------------------------------------------------------------------------- */

export interface TimelineNode {
  id: string;
  period: string;
  title: string;
  org: string;
  summary: string;
  points: string[];
  tags: string[];
  accent: "iris" | "cyber" | "violet" | "signal";
}

export const timeline: TimelineNode[] = [
  {
    id: "iitg",
    period: "2023 — Present",
    title: "B.Tech, IIT Guwahati",
    org: "Indian Institute of Technology, Guwahati",
    summary:
      "Entered one of India's top engineering institutes and pivoted hard into software, ML and systems.",
    points: [
      "AIR 7393 in JEE Advanced out of 0.2M candidates.",
      "Coursework in DSA, Operating Systems, OOP, Linear Algebra & Real Analysis.",
      "CGPA 7.95 while shipping research, products and competitions.",
    ],
    tags: ["Foundations", "DSA", "Systems", "Mathematics"],
    accent: "iris",
  },
  {
    id: "cp",
    period: "2023 — Present",
    title: "Competitive Programming",
    org: "Codeforces · Expert",
    summary:
      "Sharpened algorithmic thinking to Expert level, building intuition for complexity and data structures.",
    points: [
      "Peak rating 1685 (Expert) — handle uti_raj.",
      "Deep practice across graphs, DP, DSU, trees and shortest paths.",
      "Speed and correctness under contest constraints.",
    ],
    tags: ["Algorithms", "Graphs", "DP", "Optimization"],
    accent: "cyber",
  },
  {
    id: "drones",
    period: "2024 — 2025",
    title: "Drone & Control Engineering",
    org: "Aeromodelling Club · Inter IIT TechMeet",
    summary:
      "Led UAV projects and built fault-tolerant flight control — real-time systems where failure isn't an option.",
    points: [
      "Fault-tolerant quadrotor control with custom PX4 + NMPC modules.",
      "2nd @ Drona Aviation (Inter IIT '25), 6th @ ideaForge (Inter IIT '24).",
      "Mentored 50+ juniors as Project Manager of the Aeromodelling Club.",
    ],
    tags: ["PX4", "ROS2", "NMPC", "Control"],
    accent: "violet",
  },
  {
    id: "ai",
    period: "2024 — 2025",
    title: "AI / ML Research & Builds",
    org: "Hackathons · Coding Club",
    summary:
      "Shipped medical imaging models and RAG-powered products — moving from notebooks to real systems.",
    points: [
      "CVAlign: RAG + local LLaMA resume-evaluation platform.",
      "Pneumonia detector on VGG16 — 94.7% accuracy, 0.931 AUC-ROC.",
      "MLP-based real-time fault classification at 0.2–0.3s latency.",
    ],
    tags: ["Deep Learning", "RAG", "LLMs", "Computer Vision"],
    accent: "signal",
  },
  {
    id: "microsoft",
    period: "May 2026 — Jul 2026",
    title: "Software Engineering Intern",
    org: "Microsoft · Hyderabad",
    summary:
      "Built a dual-detector fraud-detection system scoring 13.4M OneDrive & SharePoint tenants at production scale.",
    points: [
      "XGBoost behavioural model (284 features) fused with SmartCatch identity engine.",
      "0.998 PR-AUC · 0.9996 ROC-AUC · 99.996% precision on the top 1%.",
      "Config-driven CLI with SHAP explainability and 60+ automated tests.",
    ],
    tags: ["XGBoost", "Kusto", "SHAP", "Production ML"],
    accent: "iris",
  },
];

/* -------------------------------------------------------------------------- */
/*  Microsoft showcase                                                        */
/* -------------------------------------------------------------------------- */

export const microsoft = {
  eyebrow: "Microsoft · Software Engineering Intern · Hyderabad",
  title: "Tenant Risk Score",
  subtitle: "A dual-detector fraud-detection system operating at 13.4M-tenant scale.",
  problem: {
    title: "The Problem",
    body: "Fraudulent tenancy ecosystems operate at massive scale across Microsoft OneDrive and SharePoint — cloning genuine tenants and evading purely behavioural signals. Detecting them requires both behavioural intelligence and identity-level reasoning across millions of accounts.",
  },
  solution: {
    title: "The Architecture",
    body: "A dual-detector system that fuses a behavioural model with an identity engine through a gated fusion layer — each detector catching what the other misses.",
    detectors: [
      {
        name: "XGBoost Behavioural Detector",
        icon: "Activity",
        desc: "A gradient-boosted model over 284 engineered features capturing usage, storage, growth and anomaly patterns — surfacing behaviourally suspicious tenants.",
        points: ["284 engineered features", "SHAP explainability", "0.998 PR-AUC"],
      },
      {
        name: "SmartCatch Identity Engine",
        icon: "Fingerprint",
        desc: "A rapidfuzz-powered identity detector that finds cloned-fraud tenants — near-duplicates of genuine tenants that behavioural signals alone cannot catch.",
        points: ["rapidfuzz matching", "102K clones caught", "52% of all flags"],
      },
    ],
  },
  metrics: [
    { value: 13.4, suffix: "M", decimals: 1, label: "Tenants scored", sub: "production scale" },
    { value: 196, suffix: "K", decimals: 0, label: "Risky tenants surfaced", sub: "1.46% for review" },
    { value: 284, suffix: "", decimals: 0, label: "Engineered features", sub: "behavioural signals" },
    { value: 102, suffix: "K", decimals: 0, label: "Cloned-fraud tenants", sub: "52% of all flags" },
    { value: 0.998, suffix: "", decimals: 3, label: "PR-AUC", sub: "precision-recall" },
    { value: 0.9996, suffix: "", decimals: 4, label: "ROC-AUC", sub: "ranking quality" },
  ],
  pipeline: [
    { step: "01", name: "Ingest", desc: "Kusto / CSV ingestion of tenant telemetry", icon: "Database" },
    { step: "02", name: "Feature Engineering", desc: "284 behavioural & identity features", icon: "Boxes" },
    { step: "03", name: "Dual Detection", desc: "XGBoost + SmartCatch run in parallel", icon: "GitBranch" },
    { step: "04", name: "Gated Fusion", desc: "final = max(behavioural, identity)", icon: "Combine" },
    { step: "05", name: "Explain & Score", desc: "SHAP attributions + risk score", icon: "ScanSearch" },
  ],
  // SHAP-style feature contributions (illustrative, ordered by mean |impact|).
  shap: [
    { feature: "doc_per_user", impact: 0.334, direction: "up" },
    { feature: "storage_growth_velocity", impact: 0.281, direction: "up" },
    { feature: "is_empty_shell", impact: 0.223, direction: "up" },
    { feature: "dau_to_mau_ratio", impact: 0.198, direction: "down" },
    { feature: "mailbox_entropy", impact: 0.164, direction: "up" },
    { feature: "signup_burstiness", impact: 0.147, direction: "up" },
    { feature: "geo_dispersion", impact: 0.121, direction: "down" },
    { feature: "sharing_fanout", impact: 0.103, direction: "up" },
  ],
  stack: ["Python", "XGBoost", "scikit-learn", "SHAP", "rapidfuzz", "Kusto / KQL", "Azure", "pandas", "pytest"],
} as const;

/* -------------------------------------------------------------------------- */
/*  Featured projects                                                         */
/* -------------------------------------------------------------------------- */

export interface Project {
  id: string;
  name: string;
  tagline: string;
  period: string;
  context: string;
  description: string;
  highlights: string[];
  stack: string[];
  metrics: { label: string; value: string }[];
  accent: "iris" | "cyber" | "violet" | "signal";
  icon: string;
  href: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "fraud",
    name: "Tenant Fraud Detection",
    tagline: "Large-scale ML risk-scoring platform",
    period: "2026",
    context: "Microsoft",
    description:
      "A dual-detector platform scoring 13.4M OneDrive & SharePoint tenants — fusing an XGBoost behavioural model with a SmartCatch identity engine.",
    highlights: [
      "284 engineered features · gated fusion of two detectors",
      "0.998 PR-AUC · 0.9996 ROC-AUC · 99.996% precision @ top 1%",
      "Config-driven CLI, SHAP explainability, 60+ automated tests",
    ],
    stack: ["Python", "XGBoost", "SHAP", "rapidfuzz", "Kusto", "Azure"],
    metrics: [
      { label: "Tenants", value: "13.4M" },
      { label: "PR-AUC", value: "0.998" },
      { label: "Flags", value: "196K" },
    ],
    accent: "iris",
    icon: "ShieldAlert",
    href: "#microsoft",
    featured: true,
  },
  {
    id: "cvalign",
    name: "CVAlign",
    tagline: "AI-powered resume evaluation platform",
    period: "May — Jun 2025",
    context: "Coding Club, IIT Guwahati",
    description:
      "A full-stack CV-evaluation platform that automates resume screening with a Retrieval-Augmented Generation pipeline powered by a local LLaMA model.",
    highlights: [
      "RAG pipeline scores CVs against JD, CGPA, skills & achievements",
      "Role-based access for admins, recruiters & hiring managers",
      "Ranked outputs with personalized, LLM-generated feedback",
    ],
    stack: ["React", "FastAPI", "MongoDB", "LLaMA", "RAG", "Tailwind"],
    metrics: [
      { label: "Roles", value: "3" },
      { label: "Model", value: "LLaMA" },
      { label: "Pipeline", value: "RAG" },
    ],
    accent: "cyber",
    icon: "FileSearch",
    href: "https://github.com/RajGauravTiwari",
    featured: true,
  },
  {
    id: "quadrotor",
    name: "Fault-Tolerant Quadrotor Control",
    tagline: "Real-time motor-failure recovery in flight",
    period: "Nov — Dec 2024",
    context: "13th Inter IIT TechMeet, IIT Bombay",
    description:
      "Motor-failure detection and post-failure control for quadrotors — combining a threshold detector with an MLP classifier and a custom PX4 recovery module.",
    highlights: [
      "MLP on 1000+ sims — 87.3% acc, 88.4% recall at 0.2–0.3s latency",
      "Custom PX4 module with NMPC control-allocator recovery",
      "ROS ↔ PX4 bridged via MicroXRCE Agent to the GCS",
    ],
    stack: ["PX4", "ROS2", "NMPC", "Python", "C++", "MAVSDK"],
    metrics: [
      { label: "Accuracy", value: "87.3%" },
      { label: "Latency", value: "0.2s" },
      { label: "Sims", value: "1000+" },
    ],
    accent: "violet",
    icon: "Rocket",
    href: "https://github.com/RajGauravTiwari",
    featured: true,
  },
  {
    id: "pneumonia",
    name: "Pneumonia Detector",
    tagline: "Medical imaging AI on chest X-rays",
    period: "Aug — Sep 2024",
    context: "CLASH OF T-AI-TANS, All India AI Hackathon",
    description:
      "A transfer-learning pipeline on VGG16 classifying chest X-rays as pneumonia-positive vs. normal, tuned to resist overfitting on limited medical data.",
    highlights: [
      "VGG16 transfer learning with dropout & data augmentation",
      "94.7% accuracy · 95.4% recall · 94.6% F1 · 0.931 AUC-ROC",
      "Hyperparameter tuning + feature engineering to curb overfitting",
    ],
    stack: ["TensorFlow", "Keras", "VGG16", "OpenCV", "Python"],
    metrics: [
      { label: "Accuracy", value: "94.7%" },
      { label: "Recall", value: "95.4%" },
      { label: "AUC", value: "0.931" },
    ],
    accent: "signal",
    icon: "Stethoscope",
    href: "https://github.com/RajGauravTiwari",
    featured: true,
  },
];

/* -------------------------------------------------------------------------- */
/*  Engineering dashboard (skills)                                            */
/* -------------------------------------------------------------------------- */

export interface SkillGroup {
  category: string;
  icon: string;
  accent: "iris" | "cyber" | "violet" | "signal";
  skills: { name: string; level: number }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    icon: "Code2",
    accent: "iris",
    skills: [
      { name: "Python", level: 95 },
      { name: "C / C++", level: 90 },
      { name: "JavaScript", level: 82 },
      { name: "TypeScript", level: 78 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    category: "ML & Data Science",
    icon: "BrainCircuit",
    accent: "cyber",
    skills: [
      { name: "XGBoost", level: 92 },
      { name: "scikit-learn", level: 90 },
      { name: "SHAP", level: 85 },
      { name: "pandas / NumPy", level: 92 },
      { name: "TensorFlow / Keras", level: 84 },
    ],
  },
  {
    category: "Frameworks",
    icon: "Layers",
    accent: "violet",
    skills: [
      { name: "React", level: 86 },
      { name: "Next.js", level: 80 },
      { name: "FastAPI", level: 84 },
      { name: "Node.js", level: 78 },
      { name: "OpenCV", level: 80 },
    ],
  },
  {
    category: "LLMs & AI Systems",
    icon: "Sparkles",
    accent: "signal",
    skills: [
      { name: "RAG Pipelines", level: 85 },
      { name: "LLaMA / Local LLMs", level: 82 },
      { name: "Prompt Engineering", level: 84 },
      { name: "Vector Retrieval", level: 80 },
    ],
  },
  {
    category: "Cloud & MLOps",
    icon: "Cloud",
    accent: "iris",
    skills: [
      { name: "Azure", level: 80 },
      { name: "Kusto / KQL", level: 85 },
      { name: "Git / CI", level: 88 },
      { name: "Docker", level: 74 },
    ],
  },
  {
    category: "Data Engineering",
    icon: "Database",
    accent: "cyber",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "SQL", level: 80 },
      { name: "KQL", level: 85 },
      { name: "Feature Pipelines", level: 88 },
    ],
  },
  {
    category: "Robotics & Control",
    icon: "Cpu",
    accent: "violet",
    skills: [
      { name: "PX4-Autopilot", level: 85 },
      { name: "ROS2", level: 82 },
      { name: "MAVSDK", level: 80 },
      { name: "NMPC", level: 76 },
    ],
  },
  {
    category: "Systems & Tooling",
    icon: "TerminalSquare",
    accent: "signal",
    skills: [
      { name: "Linux", level: 86 },
      { name: "Windows", level: 88 },
      { name: "pytest", level: 84 },
      { name: "CLI Design", level: 88 },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Competitive programming                                                   */
/* -------------------------------------------------------------------------- */

export const competitive = {
  handle: "uti_raj",
  rank: "Expert",
  maxRating: 1685,
  platform: "Codeforces",
  // Illustrative rating progression to Expert.
  ratingSeries: [
    { contest: "Round 918", rating: 854 },
    { contest: "Round 921", rating: 1002 },
    { contest: "Round 927", rating: 1164 },
    { contest: "Round 934", rating: 1246 },
    { contest: "Round 941", rating: 1198 },
    { contest: "Round 948", rating: 1355 },
    { contest: "Round 955", rating: 1421 },
    { contest: "Round 962", rating: 1389 },
    { contest: "Round 969", rating: 1502 },
    { contest: "Round 976", rating: 1571 },
    { contest: "Round 983", rating: 1618 },
    { contest: "Round 990", rating: 1685 },
  ],
  stats: [
    { label: "Max Rating", value: "1685" },
    { label: "Rank", value: "Expert" },
    { label: "Problems Solved", value: "700+" },
    { label: "Contests", value: "40+" },
  ],
  categories: [
    { name: "Graph Algorithms", value: 92 },
    { name: "Dynamic Programming", value: 88 },
    { name: "DSU", value: 84 },
    { name: "Trees", value: 86 },
    { name: "Greedy", value: 90 },
    { name: "Shortest Path", value: 82 },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/*  Achievements                                                              */
/* -------------------------------------------------------------------------- */

export interface Achievement {
  title: string;
  detail: string;
  meta: string;
  year: string;
  icon: string;
  accent: "iris" | "cyber" | "violet" | "signal";
}

export const achievements: Achievement[] = [
  {
    title: "AIR 7393 · JEE Advanced",
    detail: "Top rank among 0.2 million candidates nationwide.",
    meta: "0.2M candidates",
    year: "2023",
    icon: "Trophy",
    accent: "iris",
  },
  {
    title: "AIR 12900 · JEE Main",
    detail: "Ranked among the top tier of 1.2 million candidates.",
    meta: "1.2M candidates",
    year: "2023",
    icon: "Medal",
    accent: "cyber",
  },
  {
    title: "2nd · Drona Aviation",
    detail: "14th Inter IIT TechMeet, IIT Patna — 2nd of all 23 IITs.",
    meta: "23 IITs",
    year: "2025",
    icon: "Award",
    accent: "violet",
  },
  {
    title: "6th · ideaForge",
    detail: "13th Inter IIT TechMeet, IIT Bombay — 6th of all 23 IITs.",
    meta: "23 IITs",
    year: "2024",
    icon: "Star",
    accent: "signal",
  },
  {
    title: "Codeforces Expert",
    detail: "Peak rating 1685 · handle uti_raj.",
    meta: "Rating 1685",
    year: "Live",
    icon: "Swords",
    accent: "iris",
  },
];

/* -------------------------------------------------------------------------- */
/*  Leadership                                                                */
/* -------------------------------------------------------------------------- */

export interface LeadershipRole {
  role: string;
  org: string;
  period: string;
  summary: string;
  metrics: { value: string; label: string }[];
  icon: string;
  accent: "iris" | "cyber" | "violet" | "signal";
}

export const leadership: LeadershipRole[] = [
  {
    role: "Operations Manager",
    org: "Technical Board, IIT Guwahati",
    period: "Apr 2025 — Apr 2026",
    summary:
      "Coordinating across the entire Technical Board to streamline project execution and equipment logistics.",
    metrics: [
      { value: "15", label: "Clubs coordinated" },
      { value: "1", label: "Technical Board" },
      { value: "100%", label: "Logistics ownership" },
    ],
    icon: "Network",
    accent: "iris",
  },
  {
    role: "Project Manager",
    org: "Aeromodelling Club, IIT Guwahati",
    period: "Apr 2025 — Apr 2026",
    summary:
      "Heading all UAV projects for the tenure — technical mentorship and resource management at scale.",
    metrics: [
      { value: "50+", label: "Juniors mentored" },
      { value: "All", label: "UAV projects led" },
      { value: "2", label: "Inter IIT podiums" },
    ],
    icon: "Users",
    accent: "violet",
  },
];

/* -------------------------------------------------------------------------- */
/*  GitHub dashboard fallback (used when live fetch is unavailable)           */
/* -------------------------------------------------------------------------- */

export const githubFallback = {
  repos: 24,
  stars: 68,
  followers: 40,
  contributions: 1240,
};

/* -------------------------------------------------------------------------- */
/*  Research & learning — knowledge graph                                     */
/* -------------------------------------------------------------------------- */

export interface KnowledgeNode {
  id: string;
  label: string;
  x: number; // 0-100 (%)
  y: number; // 0-100 (%)
  size: number;
  accent: "iris" | "cyber" | "violet" | "signal";
}

export const knowledgeNodes: KnowledgeNode[] = [
  { id: "ai", label: "Artificial Intelligence", x: 50, y: 50, size: 1.35, accent: "iris" },
  { id: "ml", label: "Machine Learning", x: 24, y: 30, size: 1.1, accent: "cyber" },
  { id: "llm", label: "LLM Systems", x: 76, y: 26, size: 1.05, accent: "violet" },
  { id: "cv", label: "Computer Vision", x: 20, y: 68, size: 1, accent: "signal" },
  { id: "dist", label: "Distributed Systems", x: 78, y: 70, size: 1, accent: "iris" },
  { id: "mlops", label: "MLOps", x: 50, y: 84, size: 0.95, accent: "cyber" },
  { id: "fraud", label: "Fraud Detection", x: 50, y: 16, size: 1, accent: "violet" },
  { id: "auto", label: "Autonomous Systems", x: 12, y: 48, size: 0.95, accent: "signal" },
];

export const knowledgeEdges: [string, string][] = [
  ["ai", "ml"],
  ["ai", "llm"],
  ["ai", "cv"],
  ["ai", "fraud"],
  ["ai", "auto"],
  ["ml", "mlops"],
  ["ml", "cv"],
  ["llm", "dist"],
  ["mlops", "dist"],
  ["ml", "fraud"],
  ["auto", "cv"],
];

export const researchAreas = [
  "Artificial Intelligence",
  "Machine Learning",
  "LLM Systems",
  "Computer Vision",
  "Distributed Systems",
  "MLOps",
  "Fraud Detection",
  "Autonomous Systems",
];
