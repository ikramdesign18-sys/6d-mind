import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
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

type Discipline = {
  id: string;
  slug: string;
  num: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  deliverables: string[];
  color: string;
  accent: string;
};

const DISCIPLINES: readonly Discipline[] = [
  {
    id: "ui-ux-product-design",
    slug: "ui-ux-product-design",
    num: "01",
    name: "UI/UX & Product Design",
    tagline: "Research-led interfaces & scalable design systems",
    description:
      "Transforming complex product vision into intuitive, human-centered digital experiences. From user journeys and interactive prototypes to complete design systems.",
    tags: ["UX Research", "Figma", "Design Systems", "Interactive Prototypes", "Developer Handoff"],
    deliverables: ["High-Fidelity UI", "Comprehensive Design Systems", "Clickable Prototypes", "User Journey Maps"],
    color: "#6366f1",
    accent: "rgba(99, 102, 241, 0.18)",
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    num: "02",
    name: "Mobile App Development",
    tagline: "Native performance for iOS & Android",
    description:
      "Crafting production-ready cross-platform mobile apps using React Native and Expo. Optimized for 60fps performance, offline resilience, and seamless app store launches.",
    tags: ["React Native", "Expo", "iOS & Android", "Offline First", "Push Notifications"],
    deliverables: ["iOS App Store Binary", "Android Play Store APK/AAB", "Native API Integrations", "Clean Architecture"],
    color: "#3b82f6",
    accent: "rgba(59, 130, 246, 0.18)",
  },
  {
    id: "website-web-app-development",
    slug: "website-web-app-development",
    num: "03",
    name: "Website & Web App Development",
    tagline: "Modern web platforms & SaaS products",
    description:
      "Building lightning-fast web applications, marketing sites, and full-stack dashboards with Next.js, React, and TypeScript. Optimized for high conversion and search visibility.",
    tags: ["React & Next.js", "TypeScript", "Tailwind CSS", "SEO & Performance", "Vercel"],
    deliverables: ["Full-Stack Web App", "Lighthouse 95+ Score", "SEO & OpenGraph Meta", "Responsive Components"],
    color: "#10b981",
    accent: "rgba(16, 185, 129, 0.18)",
  },
  {
    id: "ai-product-development",
    slug: "ai-product-development",
    num: "04",
    name: "AI Product Development",
    tagline: "Practical AI integration & LLM workflows",
    description:
      "Embedding intelligent AI capabilities directly into digital products. Custom RAG pipelines, OpenAI / Groq integrations, automated workflows, and smart assistant interfaces.",
    tags: ["LLM Integrations", "OpenAI & Groq", "RAG Pipelines", "Vercel AI SDK", "Workflow Automation"],
    deliverables: ["Custom RAG Pipeline", "AI Assistant UI", "Prompt Engineering Specs", "Automated Agents"],
    color: "#8b5cf6",
    accent: "rgba(139, 92, 246, 0.18)",
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    num: "05",
    name: "Graphic Design",
    tagline: "High-impact visual assets & campaigns",
    description:
      "Creating striking visual communication that captures attention and elevates brand presence across digital campaigns, pitch decks, social channels, and App Store listings.",
    tags: ["Campaign Design", "App Store Visuals", "Pitch Decks", "Social Media Kits", "Vector Graphics"],
    deliverables: ["App Store Screenshot Set", "Investor Pitch Deck", "Social Campaign Assets", "Marketing Banners"],
    color: "#f59e0b",
    accent: "rgba(245, 158, 11, 0.18)",
  },
  {
    id: "branding-visual-identity",
    slug: "branding-visual-identity",
    num: "06",
    name: "Branding & Visual Identity",
    tagline: "Memorable brand identities & design rules",
    description:
      "Building cohesive, strategic visual identities that make companies instantly recognizable. From logo marks and typography pairings to comprehensive brand guidelines.",
    tags: ["Brand Strategy", "Logo Suite", "Color Systems", "Typography Pairs", "Brand Guidelines"],
    deliverables: ["Vector Logo Package", "Brand Guideline Book", "Color & Typography Rules", "Digital Brand Kit"],
    color: "#ec4899",
    accent: "rgba(236, 72, 153, 0.18)",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Detailed Skill-Matched Motion Graphic Preview Components                   */
/* -------------------------------------------------------------------------- */

/* 01: UI/UX & Product Design (Figma Prototype & Design System Wireframe) */
function MotionGraphicUIUX() {
  return (
    <div className="motion-stage-canvas">
      <svg viewBox="0 0 440 300" className="w-full h-full">
        <defs>
          <linearGradient id="uiGlass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="activeWidget" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
        </defs>

        {/* Figma Editor Frame */}
        <rect x="15" y="15" width="410" height="270" rx="14" fill="#0b0f19" stroke="#1e293b" strokeWidth="2" />
        
        {/* Top Control Bar */}
        <rect x="15" y="15" width="410" height="32" fill="#111827" rx="14" />
        <circle cx="35" cy="31" r="4" fill="#ef4444" />
        <circle cx="47" cy="31" r="4" fill="#f59e0b" />
        <circle cx="59" cy="31" r="4" fill="#10b981" />
        <text x="80" y="35" fill="#64748b" fontSize="10" fontFamily="monospace">Figma // AppSystem.fig (Design System v2.4)</text>

        {/* Left Layer Tree Panel */}
        <rect x="25" y="55" width="95" height="215" rx="8" fill="#111827" stroke="#1e293b" strokeWidth="1" />
        <rect x="35" y="68" width="75" height="8" rx="4" fill="#334155" />
        <rect x="35" y="86" width="60" height="6" rx="3" fill="#6366f1" opacity="0.8" />
        <rect x="35" y="100" width="68" height="6" rx="3" fill="#334155" />
        <rect x="35" y="114" width="50" height="6" rx="3" fill="#334155" />
        <rect x="35" y="128" width="72" height="6" rx="3" fill="#a855f7" opacity="0.8" />

        {/* Center Design Artboard */}
        <rect x="130" y="55" width="285" height="215" rx="8" fill="url(#uiGlass)" stroke="#334155" strokeWidth="1" />

        {/* Design System Tokens */}
        <circle cx="150" cy="75" r="8" fill="#6366f1" />
        <circle cx="172" cy="75" r="8" fill="#a855f7" />
        <circle cx="194" cy="75" r="8" fill="#ec4899" />
        <circle cx="216" cy="75" r="8" fill="#10b981" />

        {/* Interactive Dashboard Card Widget */}
        <motion.rect
          x="145"
          y="95"
          width="120"
          height="80"
          rx="10"
          fill="#1e1b4b"
          stroke="#6366f1"
          strokeWidth="1.5"
          animate={{ y: [0, -4, 0], strokeOpacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <rect x="160" y="110" width="60" height="8" rx="4" fill="#818cf8" />
        <rect x="160" y="125" width="90" height="6" rx="3" fill="#4338ca" />
        <motion.rect x="160" y="145" width="70" height="18" rx="6" fill="url(#activeWidget)" animate={{ scale: [0.96, 1.02, 0.96] }} transition={{ duration: 2, repeat: Infinity }} />

        {/* Secondary Wireframe Component */}
        <motion.rect
          x="280"
          y="95"
          width="120"
          height="80"
          rx="10"
          fill="#1f1d2b"
          stroke="#a855f7"
          strokeWidth="1.5"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <rect x="295" y="110" width="70" height="8" rx="4" fill="#c084fc" />
        <rect x="295" y="125" width="80" height="6" rx="3" fill="#581c87" />

        {/* Prototype Connection Wire */}
        <motion.path
          d="M265 135 C 275 135, 270 135, 280 135"
          fill="none"
          stroke="#a855f7"
          strokeWidth="2"
          strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, -16] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        {/* User Journey Bar Chart */}
        <rect x="145" y="190" width="255" height="65" rx="8" fill="#111827" stroke="#1e293b" />
        <motion.rect x="165" y="215" width="16" height="30" rx="3" fill="#6366f1" animate={{ height: [20, 35, 20] }} transition={{ duration: 2.2, repeat: Infinity }} />
        <motion.rect x="195" y="205" width="16" height="40" rx="3" fill="#818cf8" animate={{ height: [35, 45, 35] }} transition={{ duration: 2.5, repeat: Infinity }} />
        <motion.rect x="225" y="220" width="16" height="25" rx="3" fill="#a855f7" animate={{ height: [15, 30, 15] }} transition={{ duration: 1.9, repeat: Infinity }} />
        <motion.rect x="255" y="200" width="16" height="45" rx="3" fill="#c084fc" animate={{ height: [40, 50, 40] }} transition={{ duration: 2.7, repeat: Infinity }} />

        {/* Designer Cursor with Figma Label */}
        <motion.g
          animate={{ x: [0, 110, 190, 0], y: [0, -20, 45, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M190 140 L204 168 L194 172 L185 155 L178 160 Z" fill="#6366f1" stroke="#ffffff" strokeWidth="1.5" />
          <rect x="202" y="165" width="48" height="16" rx="4" fill="#6366f1" />
          <text x="208" y="176" fill="#ffffff" fontSize="9" fontWeight="bold">Designer</text>
        </motion.g>
      </svg>
    </div>
  );
}

/* 02: Mobile App Development (React Native & Expo Multi-Screen App Preview) */
function MotionGraphicMobile() {
  return (
    <div className="motion-stage-canvas">
      <svg viewBox="0 0 440 300" className="w-full h-full">
        <defs>
          <linearGradient id="appHeader" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>

        {/* Dual Phone Frames (iOS & Android) */}
        {/* iOS Chassis */}
        <rect x="80" y="20" width="135" height="260" rx="22" fill="#0b0f19" stroke="#3b82f6" strokeWidth="2.5" />
        <rect x="122" y="28" width="50" height="6" rx="3" fill="#1e293b" />
        
        {/* iOS App UI */}
        <rect x="90" y="42" width="115" height="225" rx="14" fill="#0f172a" />
        <rect x="90" y="42" width="115" height="45" fill="url(#appHeader)" rx="14" />
        <text x="100" y="62" fill="#ffffff" fontSize="10" fontWeight="bold">React Native</text>
        <circle cx="190" cy="58" r="8" fill="#60a5fa" opacity="0.6" />

        {/* Dynamic App Feed Cards */}
        <motion.rect
          x="98"
          y="98"
          width="99"
          height="45"
          rx="8"
          fill="#1e293b"
          stroke="#3b82f6"
          strokeWidth="1"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <rect x="106" y="108" width="55" height="6" rx="3" fill="#60a5fa" />
        <rect x="106" y="120" width="75" height="5" rx="2" fill="#475569" />

        <motion.rect
          x="98"
          y="152"
          width="99"
          height="45"
          rx="8"
          fill="#1e293b"
          stroke="#1e40af"
          strokeWidth="1"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <rect x="106" y="162" width="45" height="6" rx="3" fill="#38bdf8" />
        <rect x="106" y="174" width="65" height="5" rx="2" fill="#475569" />

        {/* Bottom Tab Bar */}
        <rect x="90" y="235" width="115" height="32" fill="#1e293b" rx="8" />
        <circle cx="115" cy="251" r="5" fill="#3b82f6" />
        <circle cx="147" cy="251" r="5" fill="#64748b" />
        <circle cx="179" cy="251" r="5" fill="#64748b" />

        {/* Android Chassis */}
        <rect x="235" y="30" width="130" height="240" rx="18" fill="#0b0f19" stroke="#60a5fa" strokeWidth="2" />
        <circle cx="300" cy="40" r="3" fill="#475569" />
        <rect x="243" y="48" width="114" height="210" rx="10" fill="#111827" />

        {/* Native Code Performance Indicator */}
        <rect x="250" y="60" width="100" height="60" rx="8" fill="#1e3a8a" opacity="0.7" />
        <text x="260" y="78" fill="#93c5fd" fontSize="9" fontFamily="monospace">60 FPS Native</text>
        <motion.path
          d="M260 100 Q 275 80, 290 95 T 320 85 T 340 105"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="2"
          animate={{ pathLength: [0.2, 1, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Animated Tap Ripple */}
        <motion.circle
          cx="147"
          cy="120"
          r="12"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="1.5"
          animate={{ scale: [0.5, 1.8], opacity: [1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}

/* 03: Website & Web App Development (Full-Stack IDE & Responsive Live Web Dashboard) */
function MotionGraphicWeb() {
  return (
    <div className="motion-stage-canvas">
      <svg viewBox="0 0 440 300" className="w-full h-full">
        {/* Left IDE Window */}
        <rect x="15" y="20" width="200" height="260" rx="10" fill="#0b0f19" stroke="#10b981" strokeWidth="1.5" />
        <rect x="15" y="20" width="200" height="28" fill="#111827" rx="10" />
        <circle cx="30" cy="34" r="4" fill="#ef4444" />
        <circle cx="42" cy="34" r="4" fill="#f59e0b" />
        <circle cx="54" cy="34" r="4" fill="#10b981" />
        <text x="70" y="38" fill="#64748b" fontSize="9" fontFamily="monospace">App.tsx — Next.js</text>

        {/* TypeScript Code Editor Syntax */}
        <motion.g animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }}>
          <text x="25" y="65" fill="#f43f5e" fontSize="9" fontFamily="monospace">import</text>
          <text x="65" y="65" fill="#f8fafc" fontSize="9" fontFamily="monospace">&#123; React &#125;</text>
          <text x="110" y="65" fill="#f43f5e" fontSize="9" fontFamily="monospace">from</text>
          <text x="140" y="65" fill="#34d399" fontSize="9" fontFamily="monospace">'react'</text>

          <text x="25" y="85" fill="#3b82f6" fontSize="9" fontFamily="monospace">export default</text>
          <text x="105" y="85" fill="#fbbf24" fontSize="9" fontFamily="monospace">function</text>
          <text x="150" y="85" fill="#60a5fa" fontSize="9" fontFamily="monospace">App()</text>

          <text x="25" y="105" fill="#f8fafc" fontSize="9" fontFamily="monospace">&#123; return (</text>
          <text x="35" y="125" fill="#34d399" fontSize="9" fontFamily="monospace">&lt;Dashboard</text>
          <text x="45" y="145" fill="#a78bfa" fontSize="9" fontFamily="monospace">theme=</text>
          <text x="80" y="145" fill="#34d399" fontSize="9" fontFamily="monospace">"dark"</text>
          <text x="45" y="165" fill="#a78bfa" fontSize="9" fontFamily="monospace">speed=</text>
          <text x="80" y="165" fill="#fbbf24" fontSize="9" fontFamily="monospace">&#123;100&#125;</text>
          <text x="35" y="185" fill="#34d399" fontSize="9" fontFamily="monospace">/&gt;</text>
          <text x="25" y="205" fill="#f8fafc" fontSize="9" fontFamily="monospace">); &#125;</text>
        </motion.g>

        {/* Right Live Render Window */}
        <rect x="225" y="20" width="200" height="260" rx="10" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
        <rect x="225" y="20" width="200" height="28" fill="#1e293b" rx="10" />
        <rect x="240" y="28" width="130" height="12" rx="6" fill="#0f172a" />
        <text x="248" y="37" fill="#10b981" fontSize="8" fontFamily="monospace">https://app.6dmind.com</text>

        {/* Live Responsive Analytics Dashboard */}
        <motion.rect x="240" y="60" width="170" height="65" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="1" animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 2.4, repeat: Infinity }} />
        <text x="252" y="78" fill="#a7f3d0" fontSize="9" fontWeight="bold">SaaS Revenue // +142%</text>
        <motion.path
          d="M252 110 L275 95 L298 102 L320 85 L345 92 L370 78 L395 82"
          fill="none"
          stroke="#34d399"
          strokeWidth="2"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />

        {/* Grid Components */}
        <rect x="240" y="135" width="80" height="60" rx="6" fill="#1e293b" />
        <rect x="250" y="145" width="50" height="6" rx="3" fill="#10b981" />
        <rect x="250" y="160" width="60" height="18" rx="4" fill="#065f46" />

        <rect x="330" y="135" width="80" height="60" rx="6" fill="#1e293b" />
        <rect x="340" y="145" width="50" height="6" rx="3" fill="#6366f1" />
        <rect x="340" y="160" width="60" height="18" rx="4" fill="#3730a3" />

        {/* Lighthouse Score Badge */}
        <rect x="240" y="205" width="170" height="35" rx="6" fill="#064e3b" />
        <circle cx="260" cy="222" r="10" fill="#10b981" />
        <text x="255" y="226" fill="#ffffff" fontSize="9" fontWeight="bold">99</text>
        <text x="278" y="226" fill="#6ee7b7" fontSize="9" fontWeight="bold">Lighthouse Performance</text>
      </svg>
    </div>
  );
}

/* 04: AI Product Development (RAG Pipeline & Neural Waveform Visualizer) */
function MotionGraphicAI() {
  return (
    <div className="motion-stage-canvas">
      <svg viewBox="0 0 440 300" className="w-full h-full">
        {/* RAG Neural Mesh Connections */}
        <g stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="3 3">
          <line x1="70" y1="150" x2="190" y2="70" />
          <line x1="70" y1="150" x2="190" y2="150" />
          <line x1="70" y1="150" x2="190" y2="230" />
          <line x1="190" y1="70" x2="330" y2="150" />
          <line x1="190" y1="150" x2="330" y2="150" />
          <line x1="190" y1="230" x2="330" y2="150" />
        </g>

        {/* Vector Embedding Nodes */}
        <motion.circle cx="70" cy="150" r="18" fill="#6d28d9" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2, repeat: Infinity }} />
        <text x="58" y="154" fill="#ffffff" fontSize="9" fontStyle="bold">User</text>

        <motion.circle cx="190" cy="70" r="14" fill="#8b5cf6" animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.2 }} />
        <motion.circle cx="190" cy="150" r="16" fill="#a78bfa" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.4 }} />
        <motion.circle cx="190" cy="230" r="14" fill="#8b5cf6" animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 2.4, repeat: Infinity, delay: 0.1 }} />

        <motion.circle cx="330" cy="150" r="22" fill="#7c3aed" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} />
        <text x="317" y="154" fill="#ffffff" fontSize="9" fontWeight="bold">LLM</text>

        {/* Glowing Data Flow Tokens */}
        <motion.circle cx="130" cy="110" r="5" fill="#ddd6fe" animate={{ x: [-60, 60], y: [40, -40], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
        <motion.circle cx="260" cy="110" r="5" fill="#ddd6fe" animate={{ x: [-70, 70], y: [-40, 40], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6, ease: "linear" }} />

        {/* Live AI Streaming Response Bubble */}
        <rect x="80" y="15" width="280" height="38" rx="8" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="1" />
        <text x="95" y="38" fill="#c4b5fd" fontSize="9" fontFamily="monospace">AI Agent: Synthesizing vectors &amp; automation...</text>
        <motion.rect x="340" y="28" width="8" height="12" fill="#a78bfa" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} />
      </svg>
    </div>
  );
}

/* 05: Graphic Design (Studio Visual Layout & Dynamic Typography Grid) */
function MotionGraphicGraphic() {
  return (
    <div className="motion-stage-canvas">
      <svg viewBox="0 0 440 300" className="w-full h-full">
        {/* Poster Canvas Frame */}
        <rect x="30" y="20" width="380" height="260" rx="10" fill="#0b0f19" stroke="#f59e0b" strokeWidth="1.5" />

        {/* Golden Ratio Radial Alignment */}
        <motion.circle cx="220" cy="150" r="85" fill="none" stroke="#fbbf24" strokeWidth="1" strokeDasharray="6 6" animate={{ rotate: 360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }} />

        {/* Dynamic Vector Geometry */}
        <motion.polygon
          points="220,70 290,195 150,195"
          fill="rgba(245, 158, 11, 0.3)"
          stroke="#f59e0b"
          strokeWidth="2"
          animate={{ rotate: [0, 180, 360] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "220px 150px" }}
        />

        <motion.rect
          x="180"
          y="110"
          width="80"
          height="80"
          fill="rgba(251, 191, 36, 0.2)"
          stroke="#fde047"
          strokeWidth="2"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "220px 150px" }}
        />

        {/* Typography Overlay Specs */}
        <text x="50" y="50" fill="#fbbf24" fontSize="18" fontWeight="bold" fontFamily="sans-serif">VISUAL / IMPACT</text>
        <text x="50" y="70" fill="#94a3b8" fontSize="9" fontFamily="monospace">DISPLAY TYPE SYSTEM // 2026</text>
      </svg>
    </div>
  );
}

/* 06: Branding & Visual Identity (Complete Brand System & Identity Mark Specimen) */
function MotionGraphicBranding() {
  return (
    <div className="motion-stage-canvas">
      <svg viewBox="0 0 440 300" className="w-full h-full">
        {/* Brand System Specification Board */}
        <rect x="20" y="20" width="400" height="260" rx="12" fill="#0b0f19" stroke="#ec4899" strokeWidth="1.5" />

        {/* Morphing Emblem Brand Symbol */}
        <g style={{ transformOrigin: "130px 150px" }}>
          <motion.rect
            x="80"
            y="100"
            width="100"
            height="100"
            rx="20"
            fill="#ec4899"
            opacity="0.85"
            animate={{ rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "130px 150px" }}
          />
          <motion.circle cx="130" cy="150" r="32" fill="#f472b6" animate={{ scale: [0.85, 1.15, 0.85] }} transition={{ duration: 3, repeat: Infinity }} />
        </g>

        {/* Brand Guidelines Color Swatches */}
        <motion.rect x="260" y="45" width="130" height="38" rx="8" fill="#ec4899" animate={{ x: [0, 6, 0] }} transition={{ duration: 3, repeat: Infinity }} />
        <text x="272" y="68" fill="#ffffff" fontSize="9" fontWeight="bold">PRIMARY // #EC4899</text>

        <motion.rect x="260" y="95" width="130" height="38" rx="8" fill="#f472b6" animate={{ x: [0, 6, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.2 }} />
        <text x="272" y="118" fill="#ffffff" fontSize="9" fontWeight="bold">ACCENT // #F472B6</text>

        <motion.rect x="260" y="145" width="130" height="38" rx="8" fill="#831843" animate={{ x: [0, 6, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.4 }} />
        <text x="272" y="168" fill="#fbcfe8" fontSize="9" fontWeight="bold">DARK // #831843</text>

        {/* Typography Scale Specimen */}
        <text x="40" y="245" fill="#f472b6" fontSize="14" fontWeight="bold">6D MIND BRAND SYSTEM</text>
        <text x="40" y="262" fill="#94a3b8" fontSize="9" fontFamily="monospace">Primary Font: Inter / Outfit Display</text>
      </svg>
    </div>
  );
}

const MOTION_GRAPHICS: Record<string, React.ReactNode> = {
  "ui-ux-product-design": <MotionGraphicUIUX />,
  "mobile-app-development": <MotionGraphicMobile />,
  "website-web-app-development": <MotionGraphicWeb />,
  "ai-product-development": <MotionGraphicAI />,
  "graphic-design": <MotionGraphicGraphic />,
  "branding-visual-identity": <MotionGraphicBranding />,
};

/* -------------------------------------------------------------------------- */
/* Main Services Showcase Component                                           */
/* -------------------------------------------------------------------------- */

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDiscipline = DISCIPLINES[activeIndex];

  return (
    <section id="expertise" className="agency-services-section">
      <div className="agency-services-container">
        {/* Section Header */}
        <header className="agency-services-header">
          <div className="agency-badge">
            <Sparkles size={14} className="text-primary animate-pulse" />
            <span>SIX DIGITAL DIMENSIONS</span>
          </div>
          <h2 className="agency-title">
            Six Disciplines. <br />
            <span className="agency-title-highlight">One Connected Mind.</span>
          </h2>
          <p className="agency-subtitle">
            From research-led UI/UX and mobile apps to modern web architecture, AI integration, and brand strategy—delivered with singular accountability.
          </p>
        </header>

        {/* Main Interactive Stage Grid */}
        <div className="agency-services-grid">
          {/* Left Column: Interactive Motion Graphic Stage */}
          <div className="agency-motion-column">
            <div
              className="agency-motion-card"
              style={{
                borderColor: activeDiscipline.color,
                boxShadow: `0 20px 50px -10px ${activeDiscipline.accent}`,
              }}
            >
              <div className="agency-motion-topbar">
                <span className="agency-motion-dot red" />
                <span className="agency-motion-dot yellow" />
                <span className="agency-motion-dot green" />
                <span className="agency-motion-label font-mono">
                  LIVE MOTION PREVIEW // {activeDiscipline.num}
                </span>
              </div>

              {/* Animated Motion Canvas */}
              <div className="agency-motion-body">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDiscipline.id}
                    className="w-full h-full"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    {MOTION_GRAPHICS[activeDiscipline.id]}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Motion Stage Footer Info */}
              <div className="agency-motion-footer">
                <div className="flex items-center gap-2">
                  <Zap size={15} style={{ color: activeDiscipline.color }} />
                  <span className="font-semibold text-sm text-white">
                    {activeDiscipline.name}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground font-mono">
                  {activeDiscipline.tagline}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Discipline Cards */}
          <div className="agency-cards-column">
            {DISCIPLINES.map((discipline, index) => {
              const isActive = index === activeIndex;
              return (
                <motion.div
                  key={discipline.id}
                  className={`agency-discipline-card ${isActive ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  style={{
                    borderColor: isActive ? discipline.color : "transparent",
                  }}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="agency-card-num" style={{ color: isActive ? discipline.color : undefined }}>
                    {discipline.num}
                  </div>

                  <div className="agency-card-content">
                    <div className="agency-card-header">
                      <h3 className="agency-card-title">{discipline.name}</h3>
                      <Link
                        href={`/expertise/${discipline.slug}`}
                        className="agency-card-action"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Explore ${discipline.name}`}
                      >
                        <span>View Details</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>

                    <p className="agency-card-desc">{discipline.description}</p>

                    {/* Skill Tags */}
                    <div className="agency-card-tags">
                      {discipline.tags.map((tag) => (
                        <span key={tag} className="agency-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Active Expanded Deliverables */}
                    {isActive && (
                      <motion.div
                        className="agency-card-deliverables"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="agency-deliverables-title">Key Deliverables:</span>
                        <div className="agency-deliverables-grid">
                          {discipline.deliverables.map((item) => (
                            <div key={item} className="agency-deliverable-item">
                              <CheckCircle2 size={13} style={{ color: discipline.color }} />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}



