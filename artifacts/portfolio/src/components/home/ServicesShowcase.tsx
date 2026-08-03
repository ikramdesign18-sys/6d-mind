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
  motionGraphicImage: string;
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
    glow: "rgba(99, 102, 241, 0.35)",
    accent: "#818cf8",
    badge: "PRODUCT DESIGN",
    motionGraphicImage: "/motion-graphics/ui-ux-motion.jpg",
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
    glow: "rgba(59, 130, 246, 0.35)",
    accent: "#60a5fa",
    badge: "MOBILE ENGINEERING",
    motionGraphicImage: "/motion-graphics/mobile-app-motion.jpg",
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
    glow: "rgba(16, 185, 129, 0.35)",
    accent: "#34d399",
    badge: "FULL-STACK WEB",
    motionGraphicImage: "/motion-graphics/web-dev-motion.jpg",
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
    glow: "rgba(139, 92, 246, 0.35)",
    accent: "#c084fc",
    badge: "AI ENGINEERING",
    motionGraphicImage: "/motion-graphics/ai-product-motion.jpg",
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
    glow: "rgba(245, 158, 11, 0.35)",
    accent: "#fbbf24",
    badge: "VISUAL ASSETS",
    motionGraphicImage: "/motion-graphics/graphic-design-motion.jpg",
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
    glow: "rgba(236, 72, 153, 0.35)",
    accent: "#f472b6",
    badge: "BRAND SYSTEM",
    motionGraphicImage: "/motion-graphics/branding-identity-motion.jpg",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Main Services Showcase Component                                           */
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
          {/* Left Column: Motion Graphic Showcase Canvas */}
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
                <span className="text-xs text-slate-300 font-semibold ml-3">
                  MOTION GRAPHIC // {activeService.badge}
                </span>
                <span className="ml-auto text-[11px] text-slate-400 font-mono">{activeService.num}/06</span>
              </div>

              {/* Motion Graphic Canvas Body */}
              <div className="award-window-canvas">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.id}
                    className="w-full h-full relative overflow-hidden"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    {/* Animated Ken Burns Panning Image Motion Graphic */}
                    <motion.img
                      src={activeService.motionGraphicImage}
                      alt={`${activeService.name} Motion Graphic`}
                      className="w-full h-full object-cover object-center"
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Glowing Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Overlay Motion Badge */}
                    <motion.div
                      className="absolute bottom-4 left-4 z-10 font-mono text-xs px-3.5 py-1.5 rounded-lg border backdrop-blur-md bg-slate-900/80 text-white flex items-center gap-2 shadow-2xl"
                      style={{ borderColor: activeService.accent }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Sparkles size={13} style={{ color: activeService.accent }} className="animate-spin" />
                      <span>{activeService.badge} MOTION SHOWCASE</span>
                    </motion.div>
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
