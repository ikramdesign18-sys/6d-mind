import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Code2,
  Cpu,
  Figma,
  Globe,
  Layers,
  Layout,
  Palette,
  Smartphone,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

import "./ServicesShowcase.css";

type ServiceCategory = {
  id: string;
  slug: string;
  num: string;
  name: string;
  tagline: string;
  description: string;
  skills: string[];
  deliverables: string[];
  gradient: string;
  glow: string;
  accent: string;
  badge: string;
};

const SERVICES_DATA: readonly ServiceCategory[] = [
  {
    id: "ui-ux-product-design",
    slug: "ui-ux-product-design",
    num: "01",
    name: "UI/UX & Product Design",
    tagline: "Research-led interfaces & scalable design systems",
    description:
      "Transforming complex product vision into intuitive, human-centered digital experiences. From user journeys and interactive prototypes to complete design systems.",
    skills: ["UX Research", "Figma", "Design Systems", "Interactive Prototypes", "Developer Handoff"],
    deliverables: ["High-Fidelity UI", "Comprehensive Design Systems", "Clickable Prototypes", "User Journey Maps"],
    gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
    glow: "rgba(99, 102, 241, 0.3)",
    accent: "#818cf8",
    badge: "PRODUCT DESIGN",
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    num: "02",
    name: "Mobile App Development",
    tagline: "Native performance for iOS & Android",
    description:
      "Crafting production-ready cross-platform mobile apps using React Native and Expo. Optimized for 60fps performance, offline resilience, and seamless app store launches.",
    skills: ["React Native", "Expo", "iOS & Android", "Offline First", "Push Notifications"],
    deliverables: ["iOS App Store Binary", "Android Play Store APK/AAB", "Native API Integrations", "Clean Architecture"],
    gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
    glow: "rgba(59, 130, 246, 0.3)",
    accent: "#60a5fa",
    badge: "MOBILE ENGINEERING",
  },
  {
    id: "website-web-app-development",
    slug: "website-web-app-development",
    num: "03",
    name: "Website & Web App Development",
    tagline: "Modern web platforms & SaaS products",
    description:
      "Building lightning-fast web applications, marketing sites, and full-stack dashboards with Next.js, React, and TypeScript. Optimized for high conversion and search visibility.",
    skills: ["React & Next.js", "TypeScript", "Tailwind CSS", "SEO & Performance", "Vercel"],
    deliverables: ["Full-Stack Web App", "Lighthouse 95+ Score", "SEO & OpenGraph Meta", "Responsive Components"],
    gradient: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
    glow: "rgba(16, 185, 129, 0.3)",
    accent: "#34d399",
    badge: "FULL-STACK WEB",
  },
  {
    id: "ai-product-development",
    slug: "ai-product-development",
    num: "04",
    name: "AI Product Development",
    tagline: "Practical AI integration & LLM workflows",
    description:
      "Embedding intelligent AI capabilities directly into digital products. Custom RAG pipelines, OpenAI / Groq integrations, automated workflows, and smart assistant interfaces.",
    skills: ["LLM Integrations", "OpenAI & Groq", "RAG Pipelines", "Vercel AI SDK", "Workflow Automation"],
    deliverables: ["Custom RAG Pipeline", "AI Assistant UI", "Prompt Engineering Specs", "Automated Agents"],
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
    glow: "rgba(139, 92, 246, 0.3)",
    accent: "#c084fc",
    badge: "AI ENGINEERING",
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    num: "05",
    name: "Graphic Design",
    tagline: "High-impact visual assets & campaigns",
    description:
      "Creating striking visual communication that captures attention and elevates brand presence across digital campaigns, pitch decks, social channels, and App Store listings.",
    skills: ["Campaign Design", "App Store Visuals", "Pitch Decks", "Social Media Kits", "Vector Graphics"],
    deliverables: ["App Store Screenshot Set", "Investor Pitch Deck", "Social Campaign Assets", "Marketing Banners"],
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    glow: "rgba(245, 158, 11, 0.3)",
    accent: "#fbbf24",
    badge: "VISUAL ASSETS",
  },
  {
    id: "branding-visual-identity",
    slug: "branding-visual-identity",
    num: "06",
    name: "Branding & Visual Identity",
    tagline: "Memorable brand identities & design rules",
    description:
      "Building cohesive, strategic visual identities that make companies instantly recognizable. From logo marks and typography pairings to comprehensive brand guidelines.",
    skills: ["Brand Strategy", "Logo Suite", "Color Systems", "Typography Pairs", "Brand Guidelines"],
    deliverables: ["Vector Logo Package", "Brand Guideline Book", "Color & Typography Rules", "Digital Brand Kit"],
    gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
    glow: "rgba(236, 72, 153, 0.3)",
    accent: "#f472b6",
    badge: "BRAND SYSTEM",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Custom Interactive 3D/Motion Graphic Previews                             */
/* -------------------------------------------------------------------------- */

/* 01: UI/UX Motion Canvas */
function MotionCanvasUIUX() {
  return (
    <div className="motion-canvas-wrapper">
      <svg viewBox="0 0 500 340" className="w-full h-full">
        <defs>
          <linearGradient id="uiGradient1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glowUi" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Figma Workspace Canvas Grid */}
        <rect x="15" y="15" width="470" height="310" rx="16" fill="#090d16" stroke="#1e293b" strokeWidth="2" />

        {/* Isometric Grid Background Lines */}
        <path d="M 15,100 L 485,100 M 15,180 L 485,180 M 15,260 L 485,260 M 150,15 L 150,325 M 310,15 L 310,325" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />

        {/* Left Layers Panel */}
        <rect x="30" y="35" width="110" height="270" rx="10" fill="#0f172a" stroke="#334155" strokeWidth="1" />
        <rect x="42" y="50" width="86" height="10" rx="4" fill="#334155" />
        <rect x="42" y="70" width="65" height="8" rx="3" fill="#6366f1" />
        <rect x="42" y="88" width="75" height="8" rx="3" fill="#334155" />
        <rect x="42" y="106" width="55" height="8" rx="3" fill="#334155" />

        {/* Center UI Artboard with Animated Glass Cards */}
        <motion.rect
          x="165"
          y="35"
          width="305"
          height="160"
          rx="12"
          fill="url(#uiGradient1)"
          stroke="#6366f1"
          strokeWidth="1.5"
          filter="url(#glowUi)"
          animate={{ scale: [0.98, 1.01, 0.98], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Interactive Components inside Artboard */}
        <rect x="185" y="55" width="120" height="35" rx="8" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1" />
        <circle cx="205" cy="72" r="8" fill="#6366f1" />
        <rect x="222" y="68" width="60" height="8" rx="3" fill="#c7d2fe" />

        <rect x="320" y="55" width="135" height="35" rx="8" fill="#1e1b4b" stroke="#a855f7" strokeWidth="1" />
        <rect x="335" y="68" width="85" height="8" rx="3" fill="#e9d5ff" />

        {/* Animated Connecting Prototype Wires */}
        <motion.path
          d="M 245,90 C 245,130 387,90 387,130"
          fill="none"
          stroke="#818cf8"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          animate={{ strokeDashoffset: [0, -24] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Bottom Design System Palette */}
        <rect x="165" y="210" width="305" height="95" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1" />
        <circle cx="195" cy="245" r="14" fill="#6366f1" />
        <circle cx="235" cy="245" r="14" fill="#a855f7" />
        <circle cx="275" cy="245" r="14" fill="#ec4899" />
        <circle cx="315" cy="245" r="14" fill="#10b981" />
        <text x="185" y="285" fill="#64748b" fontSize="11" fontFamily="monospace">Token System // Auto-Layout 4.0</text>

        {/* Animated Cursor Dragging Component */}
        <motion.g
          animate={{ x: [0, 80, 160, 0], y: [0, 40, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M 280,120 L 296,152 L 284,156 L 274,136 L 266,142 Z" fill="#6366f1" stroke="#ffffff" strokeWidth="2" />
          <rect x="294" y="148" width="60" height="20" rx="5" fill="#6366f1" />
          <text x="300" y="162" fill="#ffffff" fontSize="10" fontWeight="bold">Designer</text>
        </motion.g>
      </svg>
    </div>
  );
}

/* 02: Mobile App Motion Canvas */
function MotionCanvasMobile() {
  return (
    <div className="motion-canvas-wrapper">
      <svg viewBox="0 0 500 340" className="w-full h-full">
        <defs>
          <linearGradient id="phoneGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>

        {/* 3D Perspective Mobile Chassis */}
        <g transform="translate(100, 20)">
          {/* Main iPhone Chassis */}
          <rect x="60" y="10" width="180" height="300" rx="28" fill="#090d16" stroke="#3b82f6" strokeWidth="3" />
          <rect x="120" y="20" width="60" height="8" rx="4" fill="#1e293b" />

          {/* Screen Content */}
          <rect x="72" y="38" width="156" height="260" rx="18" fill="#0f172a" />
          <rect x="72" y="38" width="156" height="55" fill="url(#phoneGrad)" rx="18" />
          <text x="88" y="65" fill="#ffffff" fontSize="12" fontWeight="bold">React Native 60fps</text>

          {/* Animated Card Feed */}
          <motion.rect
            x="84"
            y="105"
            width="132"
            height="55"
            rx="10"
            fill="#1e293b"
            stroke="#60a5fa"
            strokeWidth="1.5"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <rect x="96" y="118" width="70" height="8" rx="4" fill="#60a5fa" />
          <rect x="96" y="132" width="100" height="6" rx="3" fill="#475569" />

          <motion.rect
            x="84"
            y="172"
            width="132"
            height="55"
            rx="10"
            fill="#1e293b"
            stroke="#2563eb"
            strokeWidth="1.5"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <rect x="96" y="185" width="80" height="8" rx="4" fill="#93c5fd" />
          <rect x="96" y="199" width="90" height="6" rx="3" fill="#475569" />

          {/* Bottom Tab Bar */}
          <rect x="72" y="260" width="156" height="38" fill="#1e293b" rx="10" />
          <circle cx="110" cy="279" r="6" fill="#3b82f6" />
          <circle cx="150" cy="279" r="6" fill="#64748b" />
          <circle cx="190" cy="279" r="6" fill="#64748b" />
        </g>

        {/* Secondary Floating Android App Frame */}
        <g transform="translate(280, 50)">
          <rect x="0" y="0" width="150" height="260" rx="20" fill="#090d16" stroke="#60a5fa" strokeWidth="2.5" opacity="0.85" />
          <rect x="10" y="20" width="130" height="225" rx="12" fill="#111827" />
          <motion.path
            d="M 25,80 Q 50,40 75,70 T 125,50"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="3"
            animate={{ pathLength: [0.2, 1, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </g>
      </svg>
    </div>
  );
}

/* 03: Web App Motion Canvas */
function MotionCanvasWeb() {
  return (
    <div className="motion-canvas-wrapper">
      <svg viewBox="0 0 500 340" className="w-full h-full">
        {/* Full-Stack Split View: Code Editor + Live Render Browser */}
        {/* IDE Editor Left Window */}
        <rect x="15" y="20" width="225" height="300" rx="12" fill="#090d16" stroke="#10b981" strokeWidth="2" />
        <rect x="15" y="20" width="225" height="32" fill="#111827" rx="12" />
        <circle cx="32" cy="36" r="4" fill="#ef4444" />
        <circle cx="44" cy="36" r="4" fill="#f59e0b" />
        <circle cx="56" cy="36" r="4" fill="#10b981" />
        <text x="75" y="40" fill="#64748b" fontSize="10" fontFamily="monospace">Next.js // App.tsx</text>

        {/* Animated Code Typing */}
        <motion.g animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }}>
          <text x="28" y="70" fill="#f43f5e" fontSize="10" fontFamily="monospace">import</text>
          <text x="75" y="70" fill="#f8fafc" fontSize="10" fontFamily="monospace">&#123; Server &#125;</text>
          <text x="135" y="70" fill="#f43f5e" fontSize="10" fontFamily="monospace">from</text>
          <text x="170" y="70" fill="#34d399" fontSize="10" fontFamily="monospace">'next'</text>

          <text x="28" y="95" fill="#3b82f6" fontSize="10" fontFamily="monospace">export default</text>
          <text x="120" y="95" fill="#fbbf24" fontSize="10" fontFamily="monospace">async</text>

          <text x="28" y="120" fill="#34d399" fontSize="10" fontFamily="monospace">function</text>
          <text x="85" y="120" fill="#60a5fa" fontSize="10" fontFamily="monospace">Dashboard()</text>
          <text x="160" y="120" fill="#f8fafc" fontSize="10" fontFamily="monospace">&#123;</text>

          <text x="40" y="145" fill="#f43f5e" fontSize="10" fontFamily="monospace">const</text>
          <text x="80" y="145" fill="#f8fafc" fontSize="10" fontFamily="monospace">data =</text>
          <text x="125" y="145" fill="#fbbf24" fontSize="10" fontFamily="monospace">await</text>

          <text x="40" y="170" fill="#a78bfa" fontSize="10" fontFamily="monospace">fetchAPI()</text>
          <text x="40" y="195" fill="#f8fafc" fontSize="10" fontFamily="monospace">return &lt;UI data=&#123;data&#125; /&gt;</text>
          <text x="28" y="220" fill="#f8fafc" fontSize="10" fontFamily="monospace">&#125;</text>
        </motion.g>

        {/* Right Live Browser Window */}
        <rect x="255" y="20" width="230" height="300" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="2" />
        <rect x="255" y="20" width="230" height="32" fill="#1e293b" rx="12" />
        <rect x="270" y="28" width="160" height="15" rx="7" fill="#090d16" />
        <text x="280" y="39" fill="#10b981" fontSize="9" fontFamily="monospace">https://app.6dmind.com</text>

        {/* Live Dashboard Widgets */}
        <motion.rect
          x="270"
          y="65"
          width="200"
          height="80"
          rx="10"
          fill="#064e3b"
          stroke="#10b981"
          strokeWidth="1.5"
          animate={{ opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <text x="285" y="88" fill="#a7f3d0" fontSize="11" fontWeight="bold">SaaS Conversion // +184%</text>

        <motion.path
          d="M 285,125 L 320,105 L 355,115 L 390,95 L 430,102 L 455,85"
          fill="none"
          stroke="#34d399"
          strokeWidth="3"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Performance Score Metric */}
        <rect x="270" y="160" width="200" height="50" rx="10" fill="#1e293b" stroke="#334155" />
        <circle cx="295" cy="185" r="14" fill="#10b981" />
        <text x="289" y="190" fill="#090d16" fontSize="11" fontWeight="bold">99</text>
        <text x="318" y="189" fill="#6ee7b7" fontSize="11" fontWeight="bold">Lighthouse Core Web Vitals</text>
      </svg>
    </div>
  );
}

/* 04: AI Product Motion Canvas */
function MotionCanvasAI() {
  return (
    <div className="motion-canvas-wrapper">
      <svg viewBox="0 0 500 340" className="w-full h-full">
        {/* RAG Vector Embedding Neural Mesh */}
        <g stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 4">
          <line x1="80" y1="170" x2="220" y2="70" />
          <line x1="80" y1="170" x2="220" y2="170" />
          <line x1="80" y1="170" x2="220" y2="270" />
          <line x1="220" y1="70" x2="380" y2="170" />
          <line x1="220" y1="170" x2="380" y2="170" />
          <line x1="220" y1="270" x2="380" y2="170" />
        </g>

        {/* Neural Vector Nodes */}
        <motion.circle cx="80" cy="170" r="22" fill="#6d28d9" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2, repeat: Infinity }} />
        <text x="65" y="174" fill="#ffffff" fontSize="11" fontWeight="bold">User</text>

        <motion.circle cx="220" cy="70" r="16" fill="#8b5cf6" animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.2 }} />
        <motion.circle cx="220" cy="170" r="20" fill="#a78bfa" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.4 }} />
        <motion.circle cx="220" cy="270" r="16" fill="#8b5cf6" animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 2.4, repeat: Infinity, delay: 0.1 }} />

        <motion.circle cx="380" cy="170" r="26" fill="#7c3aed" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} />
        <text x="365" y="174" fill="#ffffff" fontSize="11" fontWeight="bold">LLM</text>

        {/* Flowing Energy Particles */}
        <motion.circle cx="150" cy="120" r="6" fill="#ddd6fe" animate={{ x: [-70, 70], y: [50, -50], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
        <motion.circle cx="300" cy="120" r="6" fill="#ddd6fe" animate={{ x: [-80, 80], y: [-50, 50], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.7, ease: "linear" }} />

        {/* AI Agent Streaming Prompt Window */}
        <rect x="80" y="20" width="340" height="42" rx="10" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="1.5" />
        <text x="100" y="45" fill="#c4b5fd" fontSize="11" fontFamily="monospace">AI Agent: Executing RAG &amp; Automated Pipeline...</text>
        <motion.rect x="390" y="32" width="10" height="16" fill="#a78bfa" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} />
      </svg>
    </div>
  );
}

/* 05: Graphic Design Motion Canvas */
function MotionCanvasGraphic() {
  return (
    <div className="motion-canvas-wrapper">
      <svg viewBox="0 0 500 340" className="w-full h-full">
        {/* Poster Canvas Frame */}
        <rect x="25" y="20" width="450" height="300" rx="14" fill="#090d16" stroke="#f59e0b" strokeWidth="2" />

        {/* Golden Ratio Alignment Guides */}
        <motion.circle cx="250" cy="170" r="100" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="8 8" animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />

        {/* Rotating Vector Geometry */}
        <motion.polygon
          points="250,75 330,225 170,225"
          fill="rgba(245, 158, 11, 0.3)"
          stroke="#f59e0b"
          strokeWidth="2.5"
          animate={{ rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "250px 170px" }}
        />

        <motion.rect
          x="200"
          y="120"
          width="100"
          height="100"
          fill="rgba(251, 191, 36, 0.2)"
          stroke="#fde047"
          strokeWidth="2.5"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "250px 170px" }}
        />

        <text x="50" y="55" fill="#fbbf24" fontSize="22" fontWeight="bold" fontFamily="sans-serif">VISUAL / CAMPAIGN</text>
        <text x="50" y="80" fill="#94a3b8" fontSize="11" fontFamily="monospace">HIGH-IMPACT ASSET STUDIO // 2026</text>
      </svg>
    </div>
  );
}

/* 06: Branding & Visual Identity Motion Canvas */
function MotionCanvasBranding() {
  return (
    <div className="motion-canvas-wrapper">
      <svg viewBox="0 0 500 340" className="w-full h-full">
        {/* Brand Guideline Specification Frame */}
        <rect x="25" y="20" width="450" height="300" rx="14" fill="#090d16" stroke="#ec4899" strokeWidth="2" />

        {/* Morphing Logo Mark Symbol */}
        <g style={{ transformOrigin: "150px 170px" }}>
          <motion.rect
            x="90"
            y="110"
            width="120"
            height="120"
            rx="24"
            fill="#ec4899"
            opacity="0.85"
            animate={{ rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "150px 170px" }}
          />
          <motion.circle cx="150" cy="170" r="38" fill="#f472b6" animate={{ scale: [0.85, 1.15, 0.85] }} transition={{ duration: 3, repeat: Infinity }} />
        </g>

        {/* Brand System Color Chips */}
        <motion.rect x="300" y="50" width="145" height="45" rx="10" fill="#ec4899" animate={{ x: [0, 6, 0] }} transition={{ duration: 3, repeat: Infinity }} />
        <text x="315" y="76" fill="#ffffff" fontSize="10" fontWeight="bold">PRIMARY // #EC4899</text>

        <motion.rect x="300" y="110" width="145" height="45" rx="10" fill="#f472b6" animate={{ x: [0, 6, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.2 }} />
        <text x="315" y="136" fill="#ffffff" fontSize="10" fontWeight="bold">ACCENT // #F472B6</text>

        <motion.rect x="300" y="170" width="145" height="45" rx="10" fill="#831843" animate={{ x: [0, 6, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.4 }} />
        <text x="315" y="196" fill="#fbcfe8" fontSize="10" fontWeight="bold">DARK // #831843</text>

        <text x="45" y="275" fill="#f472b6" fontSize="16" fontWeight="bold">6D MIND BRAND SYSTEM</text>
        <text x="45" y="295" fill="#94a3b8" fontSize="10" fontFamily="monospace">Identity Guidelines &amp; Typography Specs</text>
      </svg>
    </div>
  );
}

const MOTION_CANVAS_COMPONENTS: Record<string, React.ReactNode> = {
  "ui-ux-product-design": <MotionCanvasUIUX />,
  "mobile-app-development": <MotionCanvasMobile />,
  "website-web-app-development": <MotionCanvasWeb />,
  "ai-product-development": <MotionCanvasAI />,
  "graphic-design": <MotionCanvasGraphic />,
  "branding-visual-identity": <MotionCanvasBranding />,
};

/* -------------------------------------------------------------------------- */
/* Main Award-Winning Services Showcase Component                              */
/* -------------------------------------------------------------------------- */

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = SERVICES_DATA[activeIndex];

  return (
    <section id="expertise" className="award-services-section">
      <div className="award-services-container">
        {/* Kinetic Header */}
        <header className="award-services-header">
          <motion.div
            className="award-badge font-mono"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles size={14} className="text-primary animate-pulse" />
            <span>DIGITAL DIMENSIONS // 01 - 06</span>
          </motion.div>

          <motion.h2
            className="award-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            One Mind. <br />
            <span className="award-title-highlight">Six Dimensions of Craft.</span>
          </motion.h2>

          <motion.p
            className="award-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A unified creative director and full-stack engineer connecting product research, mobile app development, web architecture, AI integration, and strategic brand design.
          </motion.p>
        </header>

        {/* Category Navigation Pills */}
        <div className="award-category-pills">
          {SERVICES_DATA.map((service, index) => (
            <button
              type="button"
              key={service.id}
              className={`award-pill ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              style={{
                borderColor: index === activeIndex ? service.accent : undefined,
              }}
            >
              <span className="font-mono text-xs opacity-60 mr-1.5">{service.num}</span>
              <span>{service.name}</span>
            </button>
          ))}
        </div>

        {/* Main Interactive Stage & Details Showcase */}
        <div className="award-services-stage">
          {/* Left Column: Interactive 3D/Motion Canvas Preview */}
          <div className="award-motion-col">
            <div
              className="award-motion-frame"
              style={{
                borderColor: activeService.accent,
                boxShadow: `0 25px 60px -15px ${activeService.glow}`,
              }}
            >
              {/* Window Top Bar */}
              <div className="award-window-bar font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="window-dot red" />
                  <span className="window-dot yellow" />
                  <span className="window-dot green" />
                </div>
                <span className="text-xs text-slate-400 font-semibold ml-3">
                  STAGE PREVIEW // {activeService.badge}
                </span>
                <span className="ml-auto text-[11px] text-slate-500">{activeService.num}/06</span>
              </div>

              {/* Motion Canvas Body */}
              <div className="award-window-canvas">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.id}
                    className="w-full h-full"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {MOTION_CANVAS_COMPONENTS[activeService.id]}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Stage Footer Bar */}
              <div className="award-window-footer">
                <div className="flex items-center gap-2">
                  <Zap size={16} style={{ color: activeService.accent }} />
                  <span className="font-semibold text-sm text-white">{activeService.name}</span>
                </div>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">{activeService.tagline}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Service Card Deck */}
          <div className="award-cards-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                className="award-active-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                style={{ borderColor: activeService.accent }}
              >
                <div className="award-card-header">
                  <div className="award-card-num font-mono" style={{ color: activeService.accent }}>
                    {activeService.num} // {activeService.badge}
                  </div>
                  <h3 className="award-card-title">{activeService.name}</h3>
                  <p className="award-card-desc">{activeService.description}</p>
                </div>

                {/* Skills Tags */}
                <div className="award-tags-section">
                  <span className="award-section-label font-mono">Core Skills &amp; Stack:</span>
                  <div className="award-tags-flex">
                    {activeService.skills.map((skill) => (
                      <span key={skill} className="award-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Deliverables */}
                <div className="award-deliverables-section">
                  <span className="award-section-label font-mono">Guaranteed Deliverables:</span>
                  <div className="award-deliverables-grid">
                    {activeService.deliverables.map((item) => (
                      <div key={item} className="award-deliverable-item">
                        <CheckCircle2 size={14} style={{ color: activeService.accent }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="award-card-cta">
                  <Link
                    href={`/expertise/${activeService.slug}`}
                    className="award-cta-btn"
                    style={{ background: activeService.gradient }}
                  >
                    <span>Explore Discipline Details</span>
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
