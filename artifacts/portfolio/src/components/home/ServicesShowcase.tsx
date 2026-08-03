import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Compass,
  Cpu,
  Figma,
  Globe,
  Layers,
  Layout,
  Palette,
  Smartphone,
  Sparkles,
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
    accent: "rgba(99, 102, 241, 0.15)",
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
    accent: "rgba(59, 130, 246, 0.15)",
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
    accent: "rgba(16, 185, 129, 0.15)",
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
    accent: "rgba(139, 92, 246, 0.15)",
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
    accent: "rgba(245, 158, 11, 0.15)",
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
    accent: "rgba(236, 72, 153, 0.15)",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Custom Motion Graphic Preview Components (2-3s loops)                    */
/* -------------------------------------------------------------------------- */

function MotionGraphicUIUX() {
  return (
    <div className="motion-stage-canvas">
      <svg viewBox="0 0 400 280" className="w-full h-full">
        <defs>
          <linearGradient id="uiGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* Wireframe Grid */}
        <rect x="20" y="20" width="360" height="240" rx="12" fill="#0d1322" stroke="#1e293b" strokeWidth="2" />
        <rect x="35" y="35" width="90" height="210" rx="8" fill="#151d30" stroke="#334155" strokeWidth="1" />
        <rect x="140" y="35" width="225" height="40" rx="6" fill="#151d30" stroke="#334155" strokeWidth="1" />
        
        {/* Animated Components */}
        <motion.rect
          x="140"
          y="90"
          width="105"
          height="70"
          rx="8"
          fill="url(#uiGrad)"
          initial={{ opacity: 0.5, scale: 0.95 }}
          animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1, 0.95] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect
          x="260"
          y="90"
          width="105"
          height="70"
          rx="8"
          fill="#1e293b"
          stroke="#6366f1"
          strokeWidth="1.5"
          initial={{ y: 0 }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dynamic Nodes */}
        <line x1="80" y1="80" x2="192" y2="125" stroke="#6366f1" strokeDasharray="4 4" strokeWidth="1.5" />
        <line x1="192" y1="125" x2="312" y2="125" stroke="#a855f7" strokeDasharray="4 4" strokeWidth="1.5" />

        <motion.circle
          cx="192"
          cy="125"
          r="6"
          fill="#818cf8"
          animate={{ r: [5, 9, 5], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Animated Cursor */}
        <motion.g
          animate={{ x: [0, 80, 140, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M120 180 L132 204 L124 207 L116 193 L110 197 Z" fill="#6366f1" stroke="#ffffff" strokeWidth="1.5" />
        </motion.g>
      </svg>
    </div>
  );
}

function MotionGraphicMobile() {
  return (
    <div className="motion-stage-canvas">
      <svg viewBox="0 0 400 280" className="w-full h-full">
        {/* Phone Frame */}
        <rect x="135" y="15" width="130" height="250" rx="20" fill="#0d1322" stroke="#3b82f6" strokeWidth="3" />
        <rect x="175" y="25" width="50" height="6" rx="3" fill="#1e293b" />

        {/* Layered App Cards */}
        <motion.rect
          x="150"
          y="45"
          width="100"
          height="55"
          rx="8"
          fill="#1e3a8a"
          initial={{ y: 0 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect
          x="150"
          y="110"
          width="100"
          height="75"
          rx="8"
          fill="#1d4ed8"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="200"
          cy="215"
          r="16"
          fill="#3b82f6"
          animate={{ scale: [0.9, 1.15, 0.9] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />

        {/* Signal Waves */}
        <motion.circle
          cx="200"
          cy="215"
          r="26"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="1.5"
          animate={{ opacity: [1, 0], scale: [0.8, 1.4] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}

function MotionGraphicWeb() {
  return (
    <div className="motion-stage-canvas">
      <svg viewBox="0 0 400 280" className="w-full h-full">
        {/* IDE & Browser Windows */}
        <rect x="20" y="25" width="170" height="230" rx="8" fill="#0d1322" stroke="#10b981" strokeWidth="1.5" />
        <circle cx="35" cy="42" r="4" fill="#ef4444" />
        <circle cx="47" cy="42" r="4" fill="#f59e0b" />
        <circle cx="59" cy="42" r="4" fill="#10b981" />

        {/* Animated Code Typing */}
        <motion.line x1="35" y1="65" x2="130" y2="65" stroke="#10b981" strokeWidth="3" strokeLinecap="round" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.8, repeat: Infinity }} />
        <motion.line x1="45" y1="85" x2="160" y2="85" stroke="#34d399" strokeWidth="3" strokeLinecap="round" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }} />
        <motion.line x1="45" y1="105" x2="110" y2="105" stroke="#6ee7b7" strokeWidth="3" strokeLinecap="round" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />

        {/* Live UI Render Window */}
        <rect x="210" y="25" width="170" height="230" rx="8" fill="#111827" stroke="#334155" strokeWidth="1.5" />
        <motion.rect x="225" y="45" width="140" height="80" rx="6" fill="#065f46" animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.5, repeat: Infinity }} />
        <motion.rect x="225" y="138" width="65" height="50" rx="6" fill="#10b981" animate={{ y: [0, -3, 0] }} transition={{ duration: 2.8, repeat: Infinity }} />
        <motion.rect x="300" y="138" width="65" height="50" rx="6" fill="#047857" animate={{ y: [0, 3, 0] }} transition={{ duration: 2.8, repeat: Infinity }} />
      </svg>
    </div>
  );
}

function MotionGraphicAI() {
  return (
    <div className="motion-stage-canvas">
      <svg viewBox="0 0 400 280" className="w-full h-full">
        {/* Neural Network Nodes */}
        <g stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="3 3">
          <line x1="80" y1="140" x2="200" y2="60" />
          <line x1="80" y1="140" x2="200" y2="140" />
          <line x1="80" y1="140" x2="200" y2="220" />
          <line x1="200" y1="60" x2="320" y2="140" />
          <line x1="200" y1="140" x2="320" y2="140" />
          <line x1="200" y1="220" x2="320" y2="140" />
        </g>

        {/* Pulsing Nodes */}
        <motion.circle cx="80" cy="140" r="16" fill="#8b5cf6" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.circle cx="200" cy="60" r="12" fill="#a78bfa" animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.2 }} />
        <motion.circle cx="200" cy="140" r="14" fill="#c084fc" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.4 }} />
        <motion.circle cx="200" cy="220" r="12" fill="#a78bfa" animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 2.4, repeat: Infinity, delay: 0.1 }} />
        <motion.circle cx="320" cy="140" r="18" fill="#8b5cf6" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} />

        {/* Flowing Energy Particles */}
        <motion.circle cx="140" cy="100" r="4" fill="#ffffff" animate={{ x: [-60, 60], y: [40, -40], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
        <motion.circle cx="260" cy="100" r="4" fill="#ffffff" animate={{ x: [-60, 60], y: [-40, 40], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.7, ease: "linear" }} />
      </svg>
    </div>
  );
}

function MotionGraphicGraphic() {
  return (
    <div className="motion-stage-canvas">
      <svg viewBox="0 0 400 280" className="w-full h-full">
        {/* Golden Ratio Grid */}
        <rect x="40" y="30" width="320" height="220" rx="8" fill="#0d1322" stroke="#f59e0b" strokeWidth="1.5" />
        <motion.circle cx="200" cy="140" r="75" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="6 6" animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} />
        
        {/* Rotating Color Shapes */}
        <motion.polygon
          points="200,65 265,180 135,180"
          fill="rgba(245, 158, 11, 0.35)"
          stroke="#f59e0b"
          strokeWidth="2"
          animate={{ rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "200px 140px" }}
        />
        <motion.rect
          x="160"
          y="100"
          width="80"
          height="80"
          fill="rgba(251, 191, 36, 0.25)"
          stroke="#fde047"
          strokeWidth="2"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "200px 140px" }}
        />
      </svg>
    </div>
  );
}

function MotionGraphicBranding() {
  return (
    <div className="motion-stage-canvas">
      <svg viewBox="0 0 400 280" className="w-full h-full">
        {/* Brand Identity Specimen */}
        <rect x="30" y="30" width="340" height="220" rx="10" fill="#0d1322" stroke="#ec4899" strokeWidth="1.5" />

        {/* Morphing Brand Symbol */}
        <motion.g style={{ transformOrigin: "120px 140px" }} animate={{ rotate: [0, 90, 180, 270, 360] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}>
          <rect x="80" y="100" width="80" height="80" rx="16" fill="#ec4899" opacity="0.8" />
          <circle cx="120" cy="140" r="28" fill="#f472b6" />
        </motion.g>

        {/* Brand Palette Cards */}
        <motion.rect x="230" y="55" width="110" height="35" rx="6" fill="#ec4899" animate={{ x: [0, 6, 0] }} transition={{ duration: 3, repeat: Infinity }} />
        <motion.rect x="230" y="100" width="110" height="35" rx="6" fill="#f472b6" animate={{ x: [0, 6, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.2 }} />
        <motion.rect x="230" y="145" width="110" height="35" rx="6" fill="#fbcfe8" animate={{ x: [0, 6, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.4 }} />
        <motion.rect x="230" y="190" width="110" height="35" rx="6" fill="#831843" animate={{ x: [0, 6, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.6 }} />
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
                  LIVE PREVIEW // {activeDiscipline.num}
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



