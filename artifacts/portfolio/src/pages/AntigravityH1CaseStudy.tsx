import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Maximize2,
  X,
  Zap,
  Volume2,
  Sliders,
  Layers,
  ShoppingBag,
  Disc,
  Feather,
  Cpu,
  CheckCircle2,
  Eye,
  Radio,
} from "lucide-react";
import { Link } from "wouter";

const VISUAL_ASSETS = [
  {
    id: "hero",
    src: "/projects/antigravity-h1/hero.png",
    title: "01. Hero Product Shot",
    purpose: "Hero landing section showcasing physical materials, moss-pedestal foundation, and floating aura lighting.",
    mood: "Moody, premium, organic",
    badge: "HERO LANDING",
  },
  {
    id: "portrait",
    src: "/projects/antigravity-h1/portrait.png",
    title: "02. Editorial Portrait",
    purpose: "Lifestyle context demonstrating fit, scale, and high-fashion appeal on a male model.",
    mood: "Cinematic, dramatic rim light",
    badge: "EDITORIAL LIFESTYLE",
  },
  {
    id: "workspace",
    src: "/projects/antigravity-h1/workspace.png",
    title: "03. Workspace Scene",
    purpose: "In-situ desk placement alongside luxury stationery and obsidian ceramics for productivity contexts.",
    mood: "Warm ambient, sophisticated",
    badge: "IN-SITU WORKSPACE",
  },
];

const MATERIALS = [
  {
    name: "Dark Walnut Wood",
    desc: "Sculpted outer earcups engineered for natural acoustic resonance and organic visual warmth.",
    color: "from-amber-900 to-stone-900",
    tag: "Acoustic Resonance",
  },
  {
    name: "Brushed Champagne Gold",
    desc: "Precision-machined dual-arch aluminum frame ensuring ultra-lightweight structural integrity.",
    color: "from-amber-400 to-yellow-600",
    tag: "Ultra-Lightweight Frame",
  },
  {
    name: "Emerald Green Leather",
    desc: "Hand-stitched plush ear cushions and headband lining offering high ergonomics and acoustic isolation.",
    color: "from-emerald-800 to-emerald-950",
    tag: "Ergonomic Isolation",
  },
  {
    name: "Gold-Plated Braided Cable",
    desc: "Custom strain-relieved green woven cable terminating in a solid gold quarter-inch jack.",
    color: "from-[#a855f7] to-[#8b5cf6]",
    tag: "Zero Signal Distortion",
  },
];

const UX_HIGHLIGHTS = [
  {
    title: "360° Material Inspector",
    desc: "Smooth macro zoom allowed visitors to inspect the grain of the walnut wood and stitching on the emerald leather.",
    icon: Eye,
  },
  {
    title: "Acoustic Wave Visualization",
    desc: "Dynamic glowing audio rings reacting in real time as users previewed sample audio tracks.",
    icon: Radio,
  },
  {
    title: "Minimalist Checkout Flow",
    desc: "Direct single-click purchasing flow maintaining high-conversion UI patterns without breaking brand immersion.",
    icon: ShoppingBag,
  },
];

export default function AntigravityH1CaseStudy() {
  const [activeAssetIndex, setActiveAssetIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeAsset = VISUAL_ASSETS[activeAssetIndex];

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
              FLAGSHIP AUDIO EXPERIENCE
            </span>
            <Link
              href="/contact"
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] text-white hover:brightness-110 transition-all shadow-lg shadow-purple-500/25 flex items-center gap-1.5"
            >
              <span>Request Audio Hardware Visuals</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Case Study Hero */}
      <section className="relative pt-12 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-purple-600/15 via-emerald-900/10 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-slate-900/90 border border-white/15 text-purple-400 mb-6 backdrop-blur-md">
              <Zap size={14} className="text-[#a855f7]" />
              <span>HAUTE ARTISAN CRAFTSMANSHIP &amp; ACOUSTIC ENGINEERING</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              The Antigravity H1{" "}
              <span className="bg-gradient-to-r from-[#8b5cf6] via-[#a855f7] to-[#10b981] bg-clip-text text-transparent">
                Headphone Experience
              </span>
            </h1>

            <p className="text-lg sm:text-2xl text-slate-300 font-light max-w-3xl leading-relaxed mb-10">
              Antigravity H1 is a flagship audiophile headphone combining precision-milled dark walnut wood, brushed champagne-gold aluminum framing, and dark emerald green leather—balancing raw organic textures with high-fashion luxury tech aesthetics.
            </p>
          </motion.div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-2xl">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Product Category
              </span>
              <p className="text-sm sm:text-base font-semibold text-white">
                Flagship Audiophile Hardware
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Primary Materials
              </span>
              <p className="text-sm sm:text-base font-semibold text-white">
                Walnut, Gold &amp; Emerald Leather
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Design Scope
              </span>
              <p className="text-sm sm:text-base font-semibold text-white">
                Brand Identity &amp; Digital Showcase
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                UX Highlight
              </span>
              <p className="text-sm sm:text-base font-semibold text-emerald-400 flex items-center gap-1.5">
                <Radio size={14} /> Real-time Acoustic Wave
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Banner Showcase */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Layers className="text-[#a855f7]" size={22} />
              <span>Production Visual Asset Suite</span>
            </h2>
            <span className="text-xs font-mono text-slate-400">
              CLICK TO VIEW FULLSCREEN RENDERS
            </span>
          </div>

          {/* Main Hero Banner Container */}
          <div className="relative group rounded-2xl overflow-hidden border-2 border-white/15 bg-slate-950 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:border-purple-500/50">
            <div
              className="relative w-full aspect-[16/9] cursor-pointer overflow-hidden bg-slate-950"
              onClick={() => setLightboxOpen(true)}
            >
              <img
                src={activeAsset.src}
                alt={activeAsset.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-slate-900/90 border border-purple-500/40 text-purple-300 backdrop-blur-md">
                  {activeAsset.badge}
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-black/60 border border-white/10 text-slate-300 backdrop-blur-md">
                  {activeAssetIndex + 1} / {VISUAL_ASSETS.length}
                </span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="px-5 py-2.5 rounded-full bg-slate-900/90 border border-purple-500/50 text-white font-mono text-xs flex items-center gap-2 shadow-2xl backdrop-blur-md">
                  <Maximize2 size={16} className="text-[#a855f7]" />
                  <span>Click for Fullscreen 4K View</span>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="text-xs font-mono text-purple-400 mb-1">
                  ATMOSPHERE &amp; MOOD: {activeAsset.mood}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {activeAsset.title}
                </h3>
                <p className="text-sm text-slate-300 max-w-2xl font-light leading-relaxed">
                  {activeAsset.purpose}
                </p>
              </div>
            </div>
          </div>

          {/* Thumbnails Row */}
          <div className="grid grid-cols-3 gap-4">
            {VISUAL_ASSETS.map((asset, idx) => (
              <button
                type="button"
                key={asset.id}
                onClick={() => setActiveAssetIndex(idx)}
                className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 aspect-[16/9] group text-left ${
                  activeAssetIndex === idx
                    ? "border-[#a855f7] ring-4 ring-purple-500/20 scale-[1.02]"
                    : "border-white/10 opacity-65 hover:opacity-100 hover:border-white/30"
                }`}
              >
                <img
                  src={asset.src}
                  alt={asset.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 text-left">
                  <span className="text-[10px] font-mono text-purple-300 block">
                    0{idx + 1} // {asset.badge}
                  </span>
                  <span className="text-xs font-semibold text-white truncate block">
                    {asset.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Content Sections */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section 1: Problem & Vision */}
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-xl space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-purple-400 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#a855f7]" />
              01 // Problem &amp; Vision
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Bridging Heirloom Fashion with Audiophile Engineering
            </h2>
            <div className="space-y-3 text-slate-300 text-base leading-relaxed font-light">
              <p>
                <strong className="text-white">The Problem:</strong> High-end audiophile hardware often suffers from a sterile, hyper-industrial design language that leans heavily into utilitarian plastics and carbon fiber.
              </p>
              <p>
                <strong className="text-white">The Goal:</strong> Develop a visual brand identity and digital showcase landing page that bridges luxury lifestyle fashion with pristine audio engineering—positioning the headphones not just as a piece of tech, but as an heirloom accessory.
              </p>
            </div>
          </div>

          {/* Section 2: Design Philosophy & Materiality */}
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-xl space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-purple-400 tracking-wider uppercase">
              <Feather size={14} className="text-[#a855f7]" />
              02 // Design Philosophy &amp; Materiality
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Tactile Luxury &amp; Acoustic Warmth
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {MATERIALS.map((mat) => (
                <div
                  key={mat.name}
                  className="p-5 rounded-xl bg-slate-950/60 border border-white/10 space-y-2 hover:border-purple-500/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white text-base">{mat.name}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {mat.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {mat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Visual Assets & Production */}
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-purple-500/20 backdrop-blur-xl space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-purple-400 tracking-wider uppercase">
              <Sparkles size={14} className="text-[#a855f7]" />
              03 // Visual Assets &amp; Production Table
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Versatile Product Storytelling Across Touchpoints
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-950/80 text-xs font-mono uppercase text-purple-300 border-b border-white/10">
                  <tr>
                    <th className="p-3.5">Asset Type</th>
                    <th className="p-3.5">Visual Purpose</th>
                    <th className="p-3.5">Atmosphere &amp; Mood</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {VISUAL_ASSETS.map((asset) => (
                    <tr key={asset.id} className="hover:bg-slate-950/40">
                      <td className="p-3.5 font-bold text-white font-mono">{asset.title}</td>
                      <td className="p-3.5 font-light">{asset.purpose}</td>
                      <td className="p-3.5 font-mono text-xs text-emerald-400">{asset.mood}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: Interactive UX Highlights */}
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-xl space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-purple-400 tracking-wider uppercase">
              <Sliders size={14} className="text-[#a855f7]" />
              04 // Interactive UX Highlights
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Immersive Digital Experience
            </h2>

            <div className="grid sm:grid-cols-3 gap-4">
              {UX_HIGHLIGHTS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-xl bg-slate-950/60 border border-white/10 space-y-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-[#a855f7]">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="font-bold text-white text-sm">{item.title}</h3>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Interactive Acoustic Wave Audio Preview Simulation */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-slate-950 via-purple-950/30 to-slate-950 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform"
                >
                  <Volume2 size={22} className={isPlayingAudio ? "animate-bounce" : ""} />
                </button>
                <div>
                  <div className="text-sm font-bold text-white">Acoustic Wave Preview</div>
                  <div className="text-xs font-mono text-purple-300">
                    {isPlayingAudio ? "Playing 24-bit 96kHz Lossless Master..." : "Click to test audio frequency rings"}
                  </div>
                </div>
              </div>

              {/* Animated Wave Bars */}
              <div className="flex items-center gap-1.5 h-8">
                {[40, 75, 100, 60, 90, 45, 80, 55, 95, 30].map((height, i) => (
                  <div
                    key={i}
                    className={`w-1 rounded-full bg-gradient-to-t from-purple-500 to-emerald-400 transition-all duration-300 ${
                      isPlayingAudio ? "animate-pulse" : "opacity-40"
                    }`}
                    style={{ height: isPlayingAudio ? `${height}%` : "30%" }}
                  />
                ))}
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
              <span>Request Audio Hardware Visuals</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
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
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-12 right-0 p-2 text-slate-400 hover:text-white rounded-full bg-slate-900/80 border border-white/20 transition-colors z-50"
              >
                <X size={20} />
              </button>

              <img
                src={activeAsset.src}
                alt={activeAsset.title}
                className="max-w-full max-h-[75vh] object-contain rounded-xl border border-white/20 shadow-2xl"
              />

              <div className="mt-4 text-center space-y-1">
                <span className="text-xs font-mono text-purple-400 block">
                  {activeAsset.badge} // {activeAsset.mood}
                </span>
                <h4 className="text-lg font-bold text-white">
                  {activeAsset.title}
                </h4>
                <p className="text-xs text-slate-400 max-w-xl">
                  {activeAsset.purpose}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
