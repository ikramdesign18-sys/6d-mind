import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Layers,
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
/* World-Class Real Product Motion Graphic Previews                           */
/* -------------------------------------------------------------------------- */

/* 01: UI/UX & Product Design — Real Figma Canvas Showcase */
function MotionGraphicUIUX() {
  return (
    <div className="product-motion-stage">
      <div className="product-window-frame">
        {/* Top Figma Header */}
        <div className="product-window-topbar font-mono">
          <div className="flex items-center gap-1.5">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <span className="text-xs text-slate-400 font-semibold ml-2">ÉLAN Fashion System — Figma Desktop</span>
        </div>

        {/* Real Product UI Mockup Stage */}
        <div className="product-window-body">
          <motion.img
            src="/projects/elan-fashion/elan-cover.png"
            alt="UI UX Product Design Mockup"
            className="product-main-img"
            initial={{ scale: 1.05 }}
            animate={{ scale: [1.05, 1, 1.05] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating Figma Design Tokens Overlay */}
          <motion.div
            className="product-overlay-card bottom-left font-mono"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: [0, -6, 0], opacity: 1 }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider mb-1">Design System Tokens</div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-indigo-500 ring-2 ring-indigo-300/40" />
              <span className="w-3 h-3 rounded-full bg-purple-500" />
              <span className="w-3 h-3 rounded-full bg-pink-500" />
              <span className="text-[11px] text-white font-medium ml-1">Auto-Layout 4.0</span>
            </div>
          </motion.div>

          {/* Animated Cursor */}
          <motion.g
            className="absolute top-1/3 left-1/2 z-20 pointer-events-none"
            animate={{ x: [-40, 60, -20, -40], y: [-20, 30, -10, -20] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-1 bg-indigo-600 text-white px-2 py-0.5 rounded shadow-lg text-[10px] font-bold">
              <span>Figma Cursor</span>
            </div>
          </motion.g>
        </div>
      </div>
    </div>
  );
}

/* 02: Mobile App Development — Real Native Mobile App Showcase */
function MotionGraphicMobile() {
  return (
    <div className="product-motion-stage">
      <div className="product-mobile-wrapper">
        {/* Floating iPhone Device Chassis */}
        <motion.div
          className="product-phone-chassis"
          initial={{ y: 10, rotate: -2 }}
          animate={{ y: [-6, 6, -6], rotate: [-2, 1, -2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="phone-notch" />
          <img
            src="/projects/amanat-diary/amanat-home-experience.png"
            alt="Mobile App Real Screenshot"
            className="phone-screen-img"
          />
        </motion.div>

        {/* Floating Android Secondary Device Showcase */}
        <motion.div
          className="product-phone-chassis secondary"
          initial={{ y: -10, rotate: 4 }}
          animate={{ y: [6, -6, 6], rotate: [4, -1, 4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="/projects/mahfooz/mahfooz-cover.png"
            alt="React Native App Screen"
            className="phone-screen-img"
          />
        </motion.div>

        {/* Floating Performance Badge */}
        <motion.div
          className="product-overlay-card top-right font-mono"
          animate={{ scale: [0.96, 1.04, 0.96] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="text-blue-400 font-bold text-xs">60 FPS // React Native</span>
        </motion.div>
      </div>
    </div>
  );
}

/* 03: Website & Web App Development — Real Full-Stack Web Platform */
function MotionGraphicWeb() {
  return (
    <div className="product-motion-stage">
      <div className="product-window-frame">
        {/* Safari Browser Header */}
        <div className="product-window-topbar font-mono">
          <div className="flex items-center gap-1.5">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="bg-slate-800/80 px-4 py-0.5 rounded text-[11px] text-emerald-400 mx-auto">
            https://mdcn.6dmind.com // Next.js 15
          </div>
        </div>

        {/* Real Production Web Screenshot Stage */}
        <div className="product-window-body">
          <motion.img
            src="/projects/mdcn-distribution/mdcn-cover.png"
            alt="Web App Real Screenshot"
            className="product-main-img"
            initial={{ y: 0 }}
            animate={{ y: [0, -40, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Lighthouse Score Card */}
          <motion.div
            className="product-overlay-card bottom-right font-mono"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2.8, repeat: Infinity }}
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center">99</span>
              <span className="text-xs text-white font-semibold">Lighthouse Performance</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* 04: AI Product Development — Real AI Assistant & RAG Workflow Showcase */
function MotionGraphicAI() {
  return (
    <div className="product-motion-stage">
      <div className="product-window-frame">
        <div className="product-window-topbar font-mono">
          <div className="flex items-center gap-1.5">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <span className="text-xs text-purple-400 font-semibold ml-2">Mahfooz AI Engine // OpenAI RAG Pipeline</span>
        </div>

        <div className="product-window-body">
          <motion.img
            src="/projects/mahfooz/mahfooz-ai-assistant.png"
            alt="AI Assistant Product Screenshot"
            className="product-main-img"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Streaming Prompt Overlay */}
          <motion.div
            className="product-overlay-card top-left font-mono"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-[10px] text-purple-400 font-bold uppercase mb-1">RAG Vector Agent</div>
            <div className="text-xs text-white font-medium">Streaming 142 tokens/sec...</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* 05: Graphic Design — Real Studio Visual Campaign Showcase */
function MotionGraphicGraphic() {
  return (
    <div className="product-motion-stage">
      <div className="product-window-frame">
        <div className="product-window-topbar font-mono">
          <div className="flex items-center gap-1.5">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <span className="text-xs text-amber-400 font-semibold ml-2">Visual Campaign Studio // 2026</span>
        </div>

        <div className="product-window-body">
          <motion.img
            src="/projects/lumina-botanicals/08-editorial-campaign.png"
            alt="Graphic Design Campaign Mockup"
            className="product-main-img"
            initial={{ scale: 1.04 }}
            animate={{ scale: [1.04, 1, 1.04] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="product-overlay-card bottom-left font-mono"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.2, repeat: Infinity }}
          >
            <span className="text-amber-400 font-bold text-xs">High-Impact Campaign Assets</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* 06: Branding & Visual Identity — Real Brand System Showcase */
function MotionGraphicBranding() {
  return (
    <div className="product-motion-stage">
      <div className="product-window-frame">
        <div className="product-window-topbar font-mono">
          <div className="flex items-center gap-1.5">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <span className="text-xs text-pink-400 font-semibold ml-2">Orphevia Identity Guidelines // Brand System</span>
        </div>

        <div className="product-window-body">
          <motion.img
            src="/projects/orphevia-branding/01-orphevia-portfolio-banner.png"
            alt="Brand Identity System Showcase"
            className="product-main-img"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Color Palette Overlay */}
          <motion.div
            className="product-overlay-card bottom-right font-mono"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="text-[10px] text-pink-400 font-bold mb-1">Brand Guideline Book</div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-pink-500" />
              <span className="w-3.5 h-3.5 rounded bg-purple-600" />
              <span className="w-3.5 h-3.5 rounded bg-slate-900 ring-1 ring-white/20" />
            </div>
          </motion.div>
        </div>
      </div>
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
          {/* Left Column: Real Product Motion Graphic Stage */}
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
                  REAL PRODUCT PREVIEW // {activeDiscipline.num}
                </span>
              </div>

              {/* Animated Motion Canvas */}
              <div className="agency-motion-body">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDiscipline.id}
                    className="w-full h-full"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.03 }}
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




