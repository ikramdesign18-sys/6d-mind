import { createElement, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  AudioLines,
  Box,
  Cpu,
  Focus,
  Headphones,
  Layers3,
  MonitorSmartphone,
  PackageOpen,
  Radio,
  Sparkles,
  Volume2,
} from "lucide-react";
import { Link } from "wouter";
import { usePageMetadata } from "@/lib/use-page-metadata";

const ASSET_ROOT = "/projects/orphevia-branding";

const metadata = [
  ["Project type", "Independent Fictional Brand Concept"],
  ["Role", "Brand Identity Designer and Art Director"],
  [
    "Disciplines",
    "Brand Strategy · Logo Design · Product Branding · Packaging",
  ],
  ["Industry", "Spatial Audio · Consumer Technology · Digital Products"],
  ["Year", "2026"],
  [
    "Deliverables",
    "Identity System · Hardware Branding · Packaging · Digital Campaign",
  ],
];

const challenges = [
  [
    "Technical credibility",
    "The identity needed to feel appropriate for advanced audio hardware and digital calibration products.",
  ],
  [
    "Emotional connection",
    "Audio is experienced emotionally, so the brand could not feel purely mechanical or engineering-led.",
  ],
  [
    "Distinctive recognition",
    "The symbol needed a recognizable silhouette that could work on headphones, speakers, packaging, applications, and small digital icons.",
  ],
  [
    "Product scalability",
    "The identity needed to expand across multiple products without requiring a new visual style for every device.",
  ],
  [
    "Light and dark environments",
    "The logo system needed to remain clear across dark hardware, light stationery, digital interfaces, and packaging.",
  ],
  [
    "Consistent motion language",
    "The visual system needed a clear relationship between sound waves, orbit, connection, and spatial movement.",
  ],
];

const objectives = [
  "Create a recognizable spatial-audio symbol",
  "Balance technology with emotion",
  "Communicate precision and immersion",
  "Work across hardware and digital products",
  "Remain recognizable at small sizes",
  "Support light and dark applications",
  "Create a premium consumer-technology tone",
  "Establish reusable product-branding rules",
  "Support future headphones and speakers",
  "Create a clear packaging language",
  "Build a professional stationery system",
  "Extend naturally into digital campaigns",
  "Maintain accessibility and clarity",
  "Avoid generic technology-brand aesthetics",
];

const values = [
  ["Immersion", "Sound should create a sense of space and presence."],
  [
    "Precision",
    "Every interaction should feel controlled, clear, and technically credible.",
  ],
  [
    "Adaptability",
    "The product experience should respond to different environments, users, and listening modes.",
  ],
  [
    "Emotion",
    "Technology should strengthen the listener’s connection with sound—not distract from it.",
  ],
];

const palette = [
  ["Midnight", "#070A12"],
  ["Ink", "#111626"],
  ["Graphite", "#222A3C"],
  ["Aurora Violet", "#8C6CFF"],
  ["Electric Cyan", "#38D8FF"],
  ["Pearl", "#F5F2EA"],
];

const unboxing = [
  [
    "01",
    "Recognition",
    "The outer packaging introduces the ORPHEVIA symbol and product family.",
  ],
  [
    "02",
    "Reveal",
    "The internal structure presents the product clearly and protects the hardware.",
  ],
  [
    "03",
    "Guidance",
    "The welcome card provides setup, care, and warranty direction.",
  ],
  [
    "04",
    "Continuity",
    "Accessory sleeves and supporting materials maintain the same brand experience.",
  ],
];

const campaignThemes = [
  "The Sound of Space",
  "ORBIT X1",
  "Focus Mode",
  "360° Immersion",
];

const designPrinciples = [
  [
    "Recognizable at every scale",
    "The standalone symbol remains readable on hardware, applications, packaging, and small digital icons.",
  ],
  [
    "Technology without visual noise",
    "The system communicates innovation through structure and precision rather than excessive decoration.",
  ],
  [
    "Emotion through movement",
    "Orbital lines and audio waves help the brand express immersion and presence.",
  ],
  [
    "Consistency across physical and digital products",
    "The same visual language works across headphones, speakers, print, packaging, websites, and mobile interfaces.",
  ],
];

function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="font-mono text-[0.68rem] tracking-[0.2em] text-[#8c6cff] uppercase">
      {children}
    </div>
  );
}

function ShowcaseImage({
  src,
  alt,
  width,
  height,
  eager = false,
  cover = false,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  eager?: boolean;
  cover?: boolean;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden bg-[#111626] ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        className={`block w-full ${cover ? "h-full object-cover object-center" : "h-auto object-contain"}`}
      />
    </div>
  );
}

function CopyBlock({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal>
      <SectionLabel>{label}</SectionLabel>
      <h2 className="mt-5 text-4xl leading-tight font-bold tracking-[-0.035em] md:text-6xl">
        {title}
      </h2>
      <div className="mt-7 max-w-2xl text-lg leading-relaxed text-[#111626]/65">
        {children}
      </div>
    </Reveal>
  );
}

export default function OrpheviaBrandingCaseStudy() {
  const reduceMotion = useReducedMotion();

  usePageMetadata(
    "ORPHEVIA — Spatial Audio Branding and Visual Identity Case Study",
    "A complete fictional branding case study for ORPHEVIA, covering spatial-audio brand strategy, logo design, product identity, premium hardware branding, packaging, stationery, digital experiences, and campaign direction.",
    `${ASSET_ROOT}/01-orphevia-portfolio-banner.png`,
    "article",
  );

  return (
    <article className="w-full overflow-x-hidden bg-[#f5f2ea] text-[#111626]">
      <header className="relative overflow-hidden bg-[#070a12] px-6 pt-10 pb-16 text-[#f5f2ea] md:pt-14 md:pb-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(56,216,255,0.13),transparent_30%),radial-gradient(circle_at_24%_0%,rgba(140,108,255,0.16),transparent_34%)]"
        />
        <div className="container relative mx-auto max-w-7xl">
          <Link
            href="/work"
            className="inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-[0.14em] text-[#f5f2ea]/55 uppercase transition-colors hover:text-[#38d8ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38d8ff]"
          >
            <ArrowLeft size={15} aria-hidden="true" /> Back to Graphic Design
          </Link>

          <div className="mt-12">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
            >
              <SectionLabel>
                Branding · Product Identity · Spatial Audio
              </SectionLabel>
              <h1 className="mt-6 text-6xl leading-[0.88] font-bold tracking-[-0.065em] sm:text-7xl md:text-9xl">
                ORPHEVIA
              </h1>
              <p className="mt-7 bg-gradient-to-r from-[#8c6cff] to-[#38d8ff] bg-clip-text text-2xl font-semibold text-transparent md:text-4xl">
                Sound, made spatial.
              </p>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed font-light text-[#f5f2ea]/66 md:text-xl">
                ORPHEVIA is a fictional premium spatial-audio identity created
                around immersion, precision, adaptability, and emotional depth.
                The system connects a distinctive audio-wave symbol with product
                hardware, packaging, stationery, and digital experiences.
              </p>
              <p className="mt-6 max-w-3xl border-l border-[#8c6cff] pl-5 text-sm leading-relaxed text-[#f5f2ea]/48">
                Independent fictional portfolio concept. ORPHEVIA is not
                presented as a registered company, trademark, launched product,
                or client-owned brand.
              </p>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.08 }}
              className="mt-12 aspect-video w-full overflow-hidden border border-white/10 shadow-2xl shadow-[#8c6cff]/10"
            >
              <ShowcaseImage
                src={`${ASSET_ROOT}/01-orphevia-portfolio-banner.png`}
                alt="ORPHEVIA spatial-audio branding presentation featuring the brand identity, premium headphones, smart speaker, product packaging, and digital product direction."
                width={1920}
                height={1080}
                eager
                cover
              />
            </motion.div>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {metadata.map(([label, value]) => (
              <div key={label} className="bg-[#0a0e18] p-6">
                <div className="font-mono text-[0.64rem] tracking-[0.15em] text-[#8c6cff] uppercase">
                  {label}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-[#f5f2ea]/78">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <CopyBlock
            label="01 · Project overview"
            title="Creating an identity for sound that surrounds the listener."
          >
            ORPHEVIA explores how spatial sound can become a recognizable visual
            language. The system translates direction, resonance, movement, and
            precision into a premium identity that feels equally natural on a
            headphone shell, product box, mobile screen, or campaign image.
          </CopyBlock>
          <Reveal delay={0.08}>
            <SectionLabel>Objectives</SectionLabel>
            <h3 className="mt-4 mb-7 text-3xl font-bold tracking-tight">
              What the identity system needed to achieve.
            </h3>
            <div className="grid gap-px border border-[#111626]/12 bg-[#111626]/12 sm:grid-cols-2">
              {objectives.map((objective, index) => (
                <div key={objective} className="bg-[#f9f7f2] p-6">
                  <div className="font-mono text-xs text-[#8c6cff]">
                    0{index + 1}
                  </div>
                  <p className="mt-4 leading-relaxed text-[#111626]/72">
                    {objective}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111626] px-6 py-24 text-[#f5f2ea] md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>02 · The challenge</SectionLabel>
            <div className="mt-6 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <h2 className="text-4xl font-bold tracking-[-0.035em] md:text-6xl">
                Making advanced audio technology feel clear, human, and
                memorable.
              </h2>
              <p className="text-lg leading-relaxed text-[#f5f2ea]/60">
                Premium audio brands often lean either clinically technical or
                theatrically futuristic. ORPHEVIA needed a third path: credible
                engineering with a clear sense of emotion and atmosphere.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map(([title, description], index) => (
              <Reveal key={title} delay={index * 0.035}>
                <div className="h-full bg-[#111626] p-7">
                  <span className="font-mono text-xs text-[#38d8ff]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-relaxed text-[#f5f2ea]/64">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f9f7f2] px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-end">
              <div>
                <SectionLabel>03 · Brand strategy</SectionLabel>
                <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] md:text-6xl">
                  Technology designed around presence, clarity, and emotional
                  depth.
                </h2>
              </div>
              <div className="space-y-5 text-lg leading-relaxed text-[#111626]/64">
                <p>
                  <strong className="text-[#111626]">Positioning:</strong>{" "}
                  Premium adaptive spatial-audio systems for users who want
                  immersive sound without unnecessary complexity.
                </p>
                <p>
                  <strong className="text-[#111626]">Brand promise:</strong>{" "}
                  Make digital sound feel more present, dimensional, and
                  personal.
                </p>
                <p>
                  <strong className="text-[#111626]">Tagline:</strong> Hear
                  Beyond the Ordinary.
                </p>
                <p>
                  <strong className="text-[#111626]">Personality:</strong>{" "}
                  Immersive, precise, adaptive, intelligent, refined, human, and
                  forward-looking.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-px border border-[#111626]/12 bg-[#111626]/12 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(([name, description], index) => (
              <Reveal key={name} delay={index * 0.04}>
                <div className="h-full bg-white p-7">
                  {createElement([AudioLines, Focus, Sparkles, Cpu][index], {
                    size: 25,
                    className: "text-[#8c6cff]",
                    "aria-hidden": true,
                  })}
                  <h3 className="mt-6 text-xl font-bold">{name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#111626]/58">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <SectionLabel>04 · Logo system</SectionLabel>
                <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] md:text-6xl">
                  An orbital sound symbol built around movement and connection.
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-[#111626]/64">
                The core O symbol uses radial paths, controlled symmetry, and a
                luminous center to suggest a listener surrounded by positioned
                sound. Primary, horizontal, compact, and icon forms preserve the
                same silhouette across editorial, hardware, and digital scales.
              </p>
            </div>
            <ShowcaseImage
              src={`${ASSET_ROOT}/02-orphevia-logo-system.png`}
              alt="ORPHEVIA logo system showing the radial O symbol, primary and horizontal lockups, verified color palette, and display and interface typography."
              width={1920}
              height={1080}
              className="mt-14 border border-[#111626]/10 shadow-2xl shadow-[#111626]/10"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[#111626]/12 bg-white px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>05 · Color and typography</SectionLabel>
            <div className="mt-5 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <h2 className="text-4xl font-bold tracking-[-0.035em] md:text-6xl">
                A palette balancing deep focus with controlled digital energy.
              </h2>
              <p className="text-lg leading-relaxed text-[#111626]/64">
                Midnight and graphite create depth; aurora violet and electric
                cyan describe motion, signal, and energy; pearl provides calm
                contrast. Noto Serif Display brings expressive editorial scale,
                while Inter Display keeps specifications and interfaces clear.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {palette.map(([name, color]) => (
              <div
                key={name}
                className="border border-[#111626]/10 bg-[#f9f7f2] p-3"
              >
                <div
                  className="aspect-[4/3] border border-black/5"
                  style={{ backgroundColor: color }}
                />
                <div className="mt-4 text-sm font-semibold">{name}</div>
                <div className="mt-1 font-mono text-xs text-[#111626]/48">
                  {color}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-px border border-[#111626]/12 bg-[#111626]/12 md:grid-cols-2">
            <div className="bg-white p-8 md:p-10">
              <div className="font-serif text-7xl">Aa</div>
              <h3 className="mt-5 text-xl font-bold">Noto Serif Display</h3>
              <p className="mt-3 text-[#111626]/58">
                Editorial headlines, product stories, and emotional statements.
              </p>
            </div>
            <div className="bg-white p-8 md:p-10">
              <div className="text-7xl font-semibold tracking-tight">Aa</div>
              <h3 className="mt-5 text-xl font-bold">Inter Display</h3>
              <p className="mt-3 text-[#111626]/58">
                Navigation, specifications, labels, interfaces, and supporting
                copy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#070a12] px-6 py-24 text-[#f5f2ea] md:py-32">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <SectionLabel>06 · Product hardware</SectionLabel>
                <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] md:text-6xl">
                  Extending the identity into premium audio hardware.
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-[#f5f2ea]/62">
                Hardware branding favors purposeful placement, tactile marks,
                calm product surfaces, and light used as a functional signal.
                The identity feels integrated rather than applied after the
                fact.
              </p>
            </div>
            <ShowcaseImage
              src={`${ASSET_ROOT}/03-orphevia-product-hardware.png`}
              alt="ORPHEVIA fictional ORBIT X1 headphones and HALO S1 spatial speaker showing integrated luminous product branding."
              width={1920}
              height={1080}
              className="mt-14 border border-white/10"
            />
          </Reveal>
          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
            <div className="bg-[#0a0e18] p-8 md:p-10">
              <Headphones className="text-[#38d8ff]" aria-hidden="true" />
              <div className="mt-6 font-mono text-xs tracking-[0.16em] text-[#8c6cff] uppercase">
                ORBIT X1 · Fictional concept
              </div>
              <h3 className="mt-3 text-3xl font-bold">Spatial headphones</h3>
              <p className="mt-4 leading-relaxed text-[#f5f2ea]/58">
                A refined over-ear silhouette with restrained surface branding
                and an illuminated orientation cue.
              </p>
            </div>
            <div className="bg-[#0a0e18] p-8 md:p-10">
              <Radio className="text-[#38d8ff]" aria-hidden="true" />
              <div className="mt-6 font-mono text-xs tracking-[0.16em] text-[#8c6cff] uppercase">
                HALO S1 · Fictional concept
              </div>
              <h3 className="mt-3 text-3xl font-bold">Spatial speaker</h3>
              <p className="mt-4 leading-relaxed text-[#f5f2ea]/58">
                A compact room-audio object where the radial brand geometry
                becomes part of the acoustic expression.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Logo remains subtle",
              "Product names stay clear",
              "Light accents remain controlled",
              "Hardware surfaces feel premium",
              "Brand elements support the product",
            ].map((principle) => (
              <div
                key={principle}
                className="border-t border-white/15 py-4 text-sm text-[#f5f2ea]/68"
              >
                {principle}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <SectionLabel>07 · Stationery</SectionLabel>
                <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] md:text-6xl">
                  A professional communication system balancing technology and
                  restraint.
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-[#111626]/64">
                Business cards, letterhead, envelope, and presentation pieces
                use disciplined grids, high-contrast typography, and selective
                light accents to keep the technology identity credible in print.
              </p>
            </div>
            <ShowcaseImage
              src={`${ASSET_ROOT}/04-orphevia-stationery.png`}
              alt="ORPHEVIA stationery system with business cards, letterhead, envelope, grid typography, and violet-to-cyan brand details."
              width={1920}
              height={1080}
              className="mt-14 border border-[#111626]/10"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[#111626]/12 bg-[#e9e8ee] px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <SectionLabel>08 · Packaging and retail</SectionLabel>
                <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] md:text-6xl">
                  Turning product delivery into a premium brand moment.
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-[#111626]/64">
                The packaging system turns the product promise into a staged
                experience: quiet outer surfaces, a luminous inner reveal, clear
                component organization, and materials intended to feel durable
                enough to keep.
              </p>
            </div>
            <ShowcaseImage
              src={`${ASSET_ROOT}/05-orphevia-packaging-retail.png`}
              alt="ORPHEVIA retail packaging system with premium box, shopping bag, welcome card, cable sleeve, and luminous interior details."
              width={1920}
              height={1080}
              className="mt-14 border border-[#111626]/10 shadow-2xl shadow-[#111626]/10"
            />
          </Reveal>
          <Reveal>
            <div className="mt-12 max-w-3xl">
              <SectionLabel>Unboxing</SectionLabel>
              <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                A structured introduction to the product and the brand.
              </h3>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-px border border-[#111626]/12 bg-[#111626]/12 sm:grid-cols-2 lg:grid-cols-4">
            {unboxing.map(([step, title, description], index) => (
              <Reveal key={step} delay={index * 0.04}>
                <div className="h-full bg-[#f5f2ea] p-7">
                  <PackageOpen
                    size={24}
                    className="text-[#8c6cff]"
                    aria-hidden="true"
                  />
                  <div className="mt-5 font-mono text-xs text-[#111626]/42">
                    {step}
                  </div>
                  <h3 className="mt-2 text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#111626]/58">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Product protection",
              "Clear opening sequence",
              "Premium tactile impression",
              "Consistent icon usage",
              "Accessible setup communication",
              "Reusable structure across products",
            ].map((principle) => (
              <div
                key={principle}
                className="border-t border-[#111626]/15 py-4 text-sm text-[#111626]/62"
              >
                {principle}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111626] px-6 py-24 text-[#f5f2ea] md:py-32">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <SectionLabel>09 · Digital brand and campaign</SectionLabel>
                <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] md:text-6xl">
                  Connecting physical hardware with a responsive digital
                  experience.
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-[#f5f2ea]/62">
                Digital direction combines generous dark space, luminous signal
                lines, large product storytelling, and short spatial messages.
                These are brand-direction concepts rather than claims of a live
                website, application, or launched advertising campaign.
              </p>
            </div>
            <ShowcaseImage
              src={`${ASSET_ROOT}/06-orphevia-digital-campaign.png`}
              alt="ORPHEVIA digital brand direction across website, mobile, social, and campaign compositions using spatial imagery and violet-to-cyan light."
              width={1920}
              height={1080}
              className="mt-14 border border-white/10"
            />
          </Reveal>
          <Reveal>
            <div className="mt-12 max-w-3xl">
              <SectionLabel>Campaign Direction</SectionLabel>
              <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Communicating immersive sound through a focused visual language.
              </h3>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {campaignThemes.map((theme, index) => (
              <div key={theme} className="bg-[#111626] p-7">
                <div className="font-mono text-xs text-[#38d8ff]">
                  0{index + 1}
                </div>
                <p className="mt-4 text-lg font-semibold">{theme}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Short confident messaging",
              "Strong contrast",
              "Recognizable icon use",
              "Controlled violet and cyan accents",
              "Product-led visuals",
              "Consistent layout rhythm",
              "Clear campaign hierarchy",
            ].map((principle) => (
              <div
                key={principle}
                className="border-t border-white/15 py-4 text-sm text-[#f5f2ea]/64"
              >
                {principle}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#111626]/12 bg-[#f5f2ea] px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Brand Applications</SectionLabel>
            <div className="mt-5 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <h2 className="text-4xl font-bold tracking-[-0.035em] md:text-6xl">
                One identity designed to remain consistent across every
                touchpoint.
              </h2>
              <p className="text-lg leading-relaxed text-[#111626]/64">
                The identity uses one recognizable symbol, one controlled color
                system, and one consistent hierarchy across physical and digital
                applications.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-px border border-[#111626]/12 bg-[#111626]/12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Logo and symbol", "Recognition"],
              ["Product hardware", "Physical presence"],
              ["Packaging", "Guided reveal"],
              ["Stationery", "Professional clarity"],
              ["Website", "Product storytelling"],
              ["Mobile interface", "Personal calibration"],
              ["Social campaign", "Launch communication"],
            ].map(([application, role]) => (
              <div key={application} className="bg-white p-7">
                <div className="font-semibold">{application}</div>
                <div className="mt-2 text-sm text-[#111626]/52">{role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>10 · Supporting logo files</SectionLabel>
            <div className="mt-5 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <h2 className="text-4xl font-bold tracking-[-0.035em] md:text-6xl">
                One system, prepared for real contexts.
              </h2>
              <p className="text-lg leading-relaxed text-[#111626]/64">
                Light and dark lockups, a transparent icon, a standalone
                wordmark, and an editable vector presentation demonstrate how
                the identity adapts without relying on a single hero treatment.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            <div className="flex min-h-72 items-center justify-center bg-[#070a12] p-8">
              <img
                src={`${ASSET_ROOT}/orphevia-logo-light.png`}
                alt="Light ORPHEVIA logo lockup for dark backgrounds."
                width={1200}
                height={500}
                loading="lazy"
                className="block h-auto w-full object-contain"
              />
            </div>
            <div className="flex min-h-72 items-center justify-center border border-[#111626]/10 bg-[#f5f2ea] p-8">
              <img
                src={`${ASSET_ROOT}/orphevia-logo-dark.png`}
                alt="Dark ORPHEVIA logo lockup for light backgrounds."
                width={1200}
                height={500}
                loading="lazy"
                className="block h-auto w-full object-contain"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-[0.55fr_1.45fr] md:col-span-2">
              <div className="flex min-h-64 items-center justify-center bg-[#111626] p-10">
                <img
                  src={`${ASSET_ROOT}/orphevia-icon-transparent.png`}
                  alt="Transparent ORPHEVIA radial O brand icon."
                  width={512}
                  height={512}
                  loading="lazy"
                  className="block h-auto max-h-44 w-auto max-w-full object-contain"
                />
              </div>
              <div className="flex min-h-64 items-center justify-center border border-[#111626]/10 bg-white p-10">
                <img
                  src={`${ASSET_ROOT}/orphevia-wordmark-dark.png`}
                  alt="Standalone dark ORPHEVIA wordmark."
                  width={1400}
                  height={280}
                  loading="lazy"
                  className="block h-auto w-full object-contain"
                />
              </div>
            </div>
            <div className="flex min-h-72 items-center justify-center border border-[#111626]/10 bg-[#f5f2ea] p-8 md:col-span-2">
              <img
                src={`${ASSET_ROOT}/orphevia-logo-editable.svg`}
                alt="Editable vector ORPHEVIA logo system presentation."
                width={1400}
                height={500}
                loading="lazy"
                className="block h-auto w-full max-w-5xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#111626]/12 bg-[#f5f2ea] px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <SectionLabel>11 · Design principles</SectionLabel>
                <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] md:text-6xl">
                  Every visual decision supports the product experience.
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-[#111626]/64">
                The identity is designed responsively: complex lockups simplify
                to the O symbol, glow falls back to solid high-contrast color,
                and layouts preserve generous reading space from large displays
                to compact mobile surfaces.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-px border border-[#111626]/12 bg-[#111626]/12 md:grid-cols-2">
            {designPrinciples.map(([title, description], index) => (
              <Reveal key={title} delay={index * 0.04}>
                <div className="h-full bg-white p-8 md:p-10">
                  {createElement(
                    [Layers3, Volume2, Box, MonitorSmartphone][index],
                    {
                      size: 27,
                      className: "text-[#8c6cff]",
                      "aria-hidden": true,
                    },
                  )}
                  <h3 className="mt-6 text-2xl font-bold">{title}</h3>
                  <p className="mt-4 leading-relaxed text-[#111626]/58">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-14">
              <SectionLabel>Responsive Identity</SectionLabel>
              <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                A brand system built to remain clear across screen sizes.
              </h3>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-px border border-[#111626]/12 bg-[#111626]/12 md:grid-cols-3">
            {[
              [
                "Desktop",
                "Wide campaign compositions, large product presentations, horizontal logo lockups, and expanded visual storytelling.",
              ],
              [
                "Tablet",
                "Balanced product and content blocks, reduced image width, simplified metadata, and responsive campaign layouts.",
              ],
              [
                "Mobile",
                "Standalone symbols, stacked lockups, full-width mockups, readable headings, and touch-friendly project navigation.",
              ],
            ].map(([viewport, description]) => (
              <div key={viewport} className="bg-white p-7">
                <h4 className="text-xl font-bold">{viewport}</h4>
                <p className="mt-3 text-sm leading-relaxed text-[#111626]/58">
                  {description}
                </p>
              </div>
            ))}
          </div>
          <Reveal>
            <div className="mt-14 grid gap-8 border border-[#111626]/12 bg-white p-8 md:grid-cols-[0.75fr_1.25fr] md:p-10">
              <div>
                <SectionLabel>Accessible Brand Presentation</SectionLabel>
                <h3 className="mt-4 text-3xl font-bold tracking-tight">
                  Premium visuals that remain readable and usable.
                </h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Descriptive alternative text",
                  "Semantic heading hierarchy",
                  "High-contrast light and dark applications",
                  "Keyboard-accessible navigation",
                  "Visible focus states",
                  "Reduced-motion support",
                  "Stable image dimensions",
                  "Touch-friendly controls",
                ].map((item) => (
                  <div
                    key={item}
                    className="border-t border-[#111626]/12 py-3 text-sm text-[#111626]/66"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#070a12] px-6 py-24 text-[#f5f2ea] md:py-32">
        <div className="container mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <Sparkles size={38} className="text-[#38d8ff]" aria-hidden="true" />
            <SectionLabel>12 · Outcome</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] md:text-6xl">
              A complete identity system for a fictional premium audio
              ecosystem.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-xl leading-relaxed font-light text-[#f5f2ea]/68 md:text-2xl">
              The ORPHEVIA concept demonstrates how one strategic identity can
              extend from a recognizable logo and product symbol into hardware,
              packaging, stationery, digital interfaces, and campaign
              communication. The final direction balances technical credibility
              with emotional presence, creating a visual system that feels
              immersive, adaptable, and premium without relying on generic
              technology-brand styling.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                "Distinctive brand symbol",
                "Consistent light and dark identity",
                "Scalable hardware-branding system",
                "Cohesive packaging direction",
                "Professional stationery",
                "Connected physical and digital experience",
                "Reusable campaign language",
                "Clear product-family foundation",
              ].map((item) => (
                <div
                  key={item}
                  className="border-t border-white/12 py-4 font-medium text-[#f5f2ea]/82"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[#8c6cff]/30 bg-[#111626] px-6 py-24 text-center text-[#f5f2ea] md:py-28">
        <div className="container mx-auto max-w-3xl">
          <Reveal>
            <SectionLabel>Build a brand with dimension</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] md:text-6xl">
              Need an identity that can grow with the complete product?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#f5f2ea]/62">
              6D Mind creates strategic brand systems connecting logo design,
              product identity, packaging, digital experience, and launch
              communication.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-gradient-to-r from-[#8c6cff] to-[#38d8ff] px-7 py-3 font-semibold text-[#070a12] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Start a Branding Project{" "}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="/work"
                className="inline-flex min-h-12 items-center justify-center border border-white/25 px-7 py-3 font-medium transition-colors hover:border-white hover:bg-white hover:text-[#070a12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Explore More Graphic Design
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <nav
        aria-label="Case study navigation"
        className="grid border-b border-[#111626]/12 bg-[#f5f2ea] md:grid-cols-2"
      >
        <Link
          href="/work/graphic-design/lumina-botanicals"
          className="group border-b border-[#111626]/12 px-6 py-14 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c6cff] md:border-r md:border-b-0"
        >
          <div className="container mx-auto max-w-xl">
            <div className="font-mono text-xs tracking-[0.14em] text-[#111626]/42 uppercase">
              Previous project
            </div>
            <div className="mt-4 flex items-center gap-3 text-3xl font-bold">
              <ArrowLeft className="transition-transform group-hover:-translate-x-1" />{" "}
              Lumina Botanicals
            </div>
          </div>
        </Link>
        <Link
          href="/work/graphic-design/logo-branding-collection"
          className="group px-6 py-14 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c6cff]"
        >
          <div className="container mx-auto max-w-xl text-left md:text-right">
            <div className="font-mono text-xs tracking-[0.14em] text-[#111626]/42 uppercase">
              Next project
            </div>
            <div className="mt-4 flex items-center gap-3 text-3xl font-bold md:justify-end">
              Logo Collection{" "}
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      </nav>
    </article>
  );
}
