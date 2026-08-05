import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Maximize2,
  X,
  Zap,
  Clock,
  TrendingUp,
  ShieldCheck,
  Quote,
  Eye,
  Layers,
} from "lucide-react";
import { Link } from "wouter";

const GALLERY_IMAGES = [
  {
    id: "hero",
    src: "/projects/aethelgard-watch/hero.png",
    title: "Hero Showcase",
    subtitle: "Centralized Studio Render",
    desc: "Centralized studio render highlighting the brushed rose-gold casing and deep emerald sunburst dial against lapis lazuli and organic moss textures.",
    aspect: "aspect-[16/9]",
    badge: "MAIN HERO",
  },
  {
    id: "detail",
    src: "/projects/aethelgard-watch/detail.jpg",
    title: "Detail View",
    subtitle: "Macro Perspective",
    desc: "Macro-perspective asset capturing the precision texture of the Italian leather strap, brushed fluted bezel, and double-deployant clasp geometry.",
    aspect: "aspect-[16/9]",
    badge: "MACRO DETAIL",
  },
  {
    id: "lifestyle",
    src: "/projects/aethelgard-watch/lifestyle.jpg",
    title: "Ecosystem Layout",
    subtitle: "Lifestyle Context",
    desc: "Expanded promotional asset featuring luxury accessories and luxury vehicle interior styling to establish brand prestige and real-world elegance.",
    aspect: "aspect-[16/9]",
    badge: "LIFESTYLE",
  },
];

export default function AethelgardWatchCaseStudy() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeImage = GALLERY_IMAGES[activeImageIndex];

  return (
    <div className="w-full bg-[#060911] text-[#f8fafc] min-h-screen selection:bg-purple-500/30">
      {/* Top Banner Navigation */}
      <nav className="sticky top-0 z-40 w-full bg-[#060911]/80 backdrop-blur-xl border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/work"
            className="inline-flex items-center text-sm font-mono text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="mr-2 group-hover:-translate-x-1 transition-transform text-[#a855f7]"
            />
            BACK TO CASE STUDIES
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 border border-purple-500/30 text-[#a855f7]">
              <Sparkles size={12} className="animate-pulse" />
              AI ARTIST CASE STUDY
            </span>
            <Link
              href="/contact"
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] text-white hover:brightness-110 transition-all shadow-lg shadow-purple-500/25 flex items-center gap-1.5"
            >
              <span>Request Similar Product Visuals</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Case Study Header Hero */}
      <section className="relative pt-12 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-purple-600/15 via-purple-900/5 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-slate-900/90 border border-white/15 text-purple-400 mb-6 backdrop-blur-md">
              <Zap size={14} className="text-[#a855f7]" />
              <span>HIGH-END E-COMMERCE &amp; DTC HOROLOGY</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Aethelgard Luxury Timepiece{" "}
              <span className="bg-gradient-to-r from-[#8b5cf6] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
                3D Visual Asset Suite
              </span>
            </h1>

            <p className="text-lg sm:text-2xl text-slate-300 font-light max-w-3xl leading-relaxed mb-10">
              Photorealistic studio lighting renders, macro watch details, and lifestyle marketing assets created via custom 100% virtual AI generation workflows.
            </p>
          </motion.div>

          {/* Metadata Grid Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-2xl">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Client Category
              </span>
              <p className="text-sm sm:text-base font-semibold text-white">
                DTC Horology &amp; Luxury E-Com
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Services Provided
              </span>
              <p className="text-sm sm:text-base font-semibold text-white">
                AI Visualization &amp; 3D Renders
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Deliverables
              </span>
              <p className="text-sm sm:text-base font-semibold text-white">
                4K PNG Assets (16:9 &amp; 1:1)
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Turnaround Time
              </span>
              <p className="text-sm sm:text-base font-semibold text-purple-400 flex items-center gap-1.5">
                <Clock size={14} /> Under 48 Hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive High-Contrast Gallery Showcase */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Layers className="text-[#a855f7]" size={22} />
              <span>Visual Asset Gallery Lightbox</span>
            </h2>
            <span className="text-xs font-mono text-slate-400">
              CLICK IMAGE TO ENLARGE (3 HIGH-RES RENDERS)
            </span>
          </div>

          {/* Featured Hero Display */}
          <div className="relative group rounded-2xl overflow-hidden border-2 border-white/15 bg-slate-950 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:border-purple-500/50">
            <div
              className="relative w-full aspect-[16/9] sm:aspect-[16/9] cursor-pointer overflow-hidden bg-slate-950"
              onClick={() => setLightboxOpen(true)}
            >
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-slate-900/90 border border-purple-500/40 text-purple-300 backdrop-blur-md">
                  {activeImage.badge}
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-black/60 border border-white/10 text-slate-300 backdrop-blur-md">
                  {activeImageIndex + 1} / {GALLERY_IMAGES.length}
                </span>
              </div>

              {/* Center Click to Enlarge Hover Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="px-5 py-2.5 rounded-full bg-slate-900/90 border border-purple-500/50 text-white font-mono text-xs flex items-center gap-2 shadow-2xl backdrop-blur-md">
                  <Maximize2 size={16} className="text-[#a855f7]" />
                  <span>Click for Fullscreen 4K Lightbox</span>
                </div>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="text-xs font-mono text-purple-400 mb-1">
                  {activeImage.subtitle}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {activeImage.title}
                </h3>
                <p className="text-sm text-slate-300 max-w-2xl font-light leading-relaxed">
                  {activeImage.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Thumbnails Row */}
          <div className="grid grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <button
                type="button"
                key={img.id}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 aspect-[16/9] group text-left ${
                  activeImageIndex === idx
                    ? "border-[#a855f7] ring-4 ring-purple-500/20 scale-[1.02]"
                    : "border-white/10 opacity-65 hover:opacity-100 hover:border-white/30"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 text-left">
                  <span className="text-[10px] font-mono text-purple-300 block">
                    0{idx + 1} // {img.badge}
                  </span>
                  <span className="text-xs font-semibold text-white truncate block">
                    {img.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Written Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section 1: Overview */}
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-xl space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-purple-400 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#a855f7]" />
              01 // Project Overview
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Luxury Horology Pre-Launch Visuals Without Studio Overhead
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              Aethelgard, a boutique luxury watchmaker, required high-impact marketing visuals for an upcoming pre-launch DTC campaign without incurring the traditional $15,000+ cost of physical studio photography and macro-lens production.
            </p>
          </div>

          {/* Section 2: The Challenge */}
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-xl space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-purple-400 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#a855f7]" />
              02 // The Challenge
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Complex Material Reflections &amp; Photorealistic Macro Precision
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              Capturing complex materials—specifically brushed rose gold, sunburst dial reflections, and organic moss/marble studio pedestals—demanded photorealistic accuracy, precise depth-of-field control, and consistent brand aesthetic across all promotional assets.
            </p>
          </div>

          {/* Section 3: The AI Solution */}
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-purple-500/20 backdrop-blur-xl space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-purple-400 tracking-wider uppercase">
              <Sparkles size={14} className="text-[#a855f7]" />
              03 // The AI Solution
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Multi-Pass AI Generation &amp; Studio Composition Workflow
            </h2>
            <p className="text-slate-300 text-base leading-relaxed font-light">
              Using custom multi-pass AI generation and studio-grade composition workflows, we created a suite of hyper-realistic 3D product visuals:
            </p>

            <div className="grid gap-4">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 space-y-1">
                <span className="text-xs font-mono font-bold text-purple-400 block">
                  HERO SHOWCASE
                </span>
                <p className="text-sm text-slate-200">
                  Centralized studio render highlighting the brushed rose-gold casing and deep emerald sunburst dial against lapis lazuli and organic moss textures.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 space-y-1">
                <span className="text-xs font-mono font-bold text-purple-400 block">
                  ECOSYSTEM LAYOUT
                </span>
                <p className="text-sm text-slate-200">
                  Expanded promotional asset featuring luxury accessories (matching cufflinks and watchmaker’s loupe) to establish brand prestige.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 space-y-1">
                <span className="text-xs font-mono font-bold text-purple-400 block">
                  DETAIL VIEW
                </span>
                <p className="text-sm text-slate-200">
                  Macro-perspective asset capturing the precision texture of the Italian leather strap and double-deployant clasp geometry.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Client Results & Impact */}
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-xl space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-purple-400 tracking-wider uppercase">
              <TrendingUp size={14} className="text-[#a855f7]" />
              04 // Client Results &amp; Impact
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Measurable E-Commerce Performance
            </h2>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-slate-950/60 border border-white/10 text-center space-y-2">
                <div className="text-3xl font-bold text-purple-400 font-mono">
                  100%
                </div>
                <div className="text-xs font-mono text-slate-400 uppercase">
                  Virtual Workflow
                </div>
                <p className="text-xs text-slate-300">
                  Zero physical prototype shipping or studio rental costs.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-950/60 border border-white/10 text-center space-y-2">
                <div className="text-3xl font-bold text-purple-400 font-mono">
                  3.4x
                </div>
                <div className="text-xs font-mono text-slate-400 uppercase">
                  Engagement Boost
                </div>
                <p className="text-xs text-slate-300">
                  Deployed across landing pages &amp; Instagram ad campaigns.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-950/60 border border-white/10 text-center space-y-2">
                <div className="text-3xl font-bold text-purple-400 font-mono">
                  &lt;48h
                </div>
                <div className="text-xs font-mono text-slate-400 uppercase">
                  Rapid Delivery
                </div>
                <p className="text-xs text-slate-300">
                  Complete visual suite generated and delivered end-to-end.
                </p>
              </div>
            </div>
          </div>

          {/* Client Testimonial Card */}
          <div className="relative p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-purple-900/30 via-slate-900/80 to-slate-950 border border-purple-500/30 backdrop-blur-2xl shadow-2xl space-y-6">
            <Quote className="text-purple-400/40 w-12 h-12" />
            <blockquote className="text-lg sm:text-xl text-white font-medium italic leading-relaxed">
              &ldquo;Ikram transformed our raw CAD specs into breathtaking, campaign-ready product renders that rival top-tier luxury horology advertisements. The attention to material reflections and lighting composition is unmatched.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white text-sm">
                MV
              </div>
              <div>
                <div className="text-sm font-bold text-white">Marcus Vance</div>
                <div className="text-xs font-mono text-purple-300">
                  Founder &amp; Creative Lead at Aethelgard
                </div>
              </div>
            </div>
          </div>

          {/* Navigation & CTA Links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
            <Link
              href="/work"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/15 bg-slate-900 hover:bg-slate-800 text-slate-200 text-sm font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <ArrowLeft size={16} />
              <span>Back to Case Studies</span>
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] hover:brightness-110 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-xl shadow-purple-500/25"
            >
              <span>Request Similar Product Visuals</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal Dialog */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxOpen(false)}
          >
            <div
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-12 right-0 p-2 text-slate-400 hover:text-white rounded-full bg-slate-900/80 border border-white/20 transition-colors z-50"
              >
                <X size={20} />
              </button>

              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="max-w-full max-h-[75vh] object-contain rounded-xl border border-white/20 shadow-2xl"
              />

              <div className="mt-4 text-center space-y-1">
                <span className="text-xs font-mono text-purple-400 block">
                  {activeImage.badge} // {activeImage.subtitle}
                </span>
                <h4 className="text-lg font-bold text-white">
                  {activeImage.title}
                </h4>
                <p className="text-xs text-slate-400 max-w-xl">
                  {activeImage.desc}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
