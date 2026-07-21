import { type ReactNode, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  Gem,
  Layers3,
  Sparkles,
} from "lucide-react";
import { Link } from "wouter";

const ASSET_ROOT = "/projects/logo-branding-collection";

const identities = [
  {
    number: "01",
    name: "Aureline",
    sector: "Luxury fashion",
    image: `${ASSET_ROOT}/aureline-logo.png`,
    alt: "Aureline luxury fashion AL monogram and wordmark in gold and black on warm ivory.",
    idea: "An interlocking AL monogram that turns two initials into one continuous luxury signature.",
    positioning: "Elegant · Aspirational · Timeless",
    palette: ["#c79b2f", "#111111", "#fbf7ef"],
    details: [
      "Custom monogram",
      "High-contrast serif",
      "Metallic gold direction",
    ],
  },
  {
    number: "02",
    name: "NovaForge",
    sector: "Technology and engineering",
    image: `${ASSET_ROOT}/novaforge-logo.png`,
    alt: "NovaForge technology logo with geometric NF symbol, circuit details, and navy-to-cyan wordmark.",
    idea: "A modular NF symbol combines engineered geometry with circuit endpoints to signal intelligent systems.",
    positioning: "Precise · Progressive · Engineered",
    palette: ["#06245b", "#0bc3d0", "#ffffff"],
    details: ["Geometric symbol", "Circuit language", "Futuristic wordmark"],
  },
  {
    number: "03",
    name: "Verdelle",
    sector: "Organic skincare",
    image: `${ASSET_ROOT}/verdelle-logo.png`,
    alt: "Verdelle organic skincare botanical V logo in sage green and gold on warm ivory.",
    idea: "A botanical V grows naturally inside a fine circular seal, balancing care, purity, and premium ritual.",
    positioning: "Natural · Refined · Restorative",
    palette: ["#586548", "#b98f32", "#fbf7ef"],
    details: ["Botanical monogram", "Circular seal", "Soft serif typography"],
  },
  {
    number: "04",
    name: "IronPeak",
    sector: "Fitness and performance",
    image: `${ASSET_ROOT}/ironpeak-logo.png`,
    alt: "IronPeak fitness logo combining an angular IP monogram, mountain peak, black steel, and gold.",
    idea: "An angular IP monogram becomes a mountain summit—an immediate symbol of strength, progress, and ambition.",
    positioning: "Powerful · Focused · Uncompromising",
    palette: ["#181818", "#bd8825", "#ffffff"],
    details: ["IP monogram", "Peak silhouette", "Athletic display type"],
  },
  {
    number: "05",
    name: "Soluna Roasters",
    sector: "Specialty coffee",
    image: `${ASSET_ROOT}/soluna-roasters-logo.png`,
    alt: "Soluna Roasters coffee identity with a sun, crescent moon, coffee plant, and cultivated landscape.",
    idea: "Sun, moon, coffee cherries, and cultivated land form a story-led emblem for coffee from origin to ritual.",
    positioning: "Warm · Artisanal · Story-rich",
    palette: ["#432d22", "#b76443", "#fbf7ef"],
    details: ["Illustrative emblem", "Day-and-night story", "Editorial serif"],
  },
  {
    number: "06",
    name: "Atelier North",
    sector: "Architecture and interiors",
    image: `${ASSET_ROOT}/atelier-north-logo.png`,
    alt: "Atelier North architecture identity with building linework, north marker, and copper accents.",
    idea: "Architectural linework and a north marker create a composed symbol for direction, structure, and place.",
    positioning: "Considered · Modern · Directional",
    palette: ["#151515", "#a96c3e", "#fbf7ef"],
    details: [
      "Architectural symbol",
      "North-axis detail",
      "Wide-set serif wordmark",
    ],
  },
];

const services = [
  "Logo strategy",
  "Brand naming concepts",
  "Monogram design",
  "Symbol development",
  "Typography selection",
  "Color direction",
  "Visual identity design",
  "Brand positioning",
  "Logo presentation",
  "Digital identity preparation",
];

function setMetaTag(
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  const previous = element.getAttribute("content");
  element.setAttribute("content", content);

  return () => {
    if (previous === null) element?.remove();
    else element?.setAttribute("content", previous);
  };
}

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
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function LogoBrandIdentityCollection() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const previousTitle = document.title;
    const title =
      "Logo & Brand Identity Collection — Graphic Design Case Study";
    const description =
      "Six premium logo and brand identity concepts for fashion, technology, skincare, fitness, coffee, and architecture brands.";
    const image = `${window.location.origin}${ASSET_ROOT}/aureline-logo.png`;

    document.title = title;
    const restoreMeta = [
      setMetaTag("name", "description", description),
      setMetaTag("property", "og:title", title),
      setMetaTag("property", "og:description", description),
      setMetaTag("property", "og:image", image),
      setMetaTag("property", "og:type", "article"),
      setMetaTag("name", "twitter:card", "summary_large_image"),
      setMetaTag("name", "twitter:title", title),
      setMetaTag("name", "twitter:description", description),
      setMetaTag("name", "twitter:image", image),
    ];

    return () => {
      document.title = previousTitle;
      restoreMeta.forEach((restore) => restore());
    };
  }, []);

  return (
    <article className="w-full overflow-x-hidden bg-[#f8f6f1] text-[#121212]">
      <header className="border-b border-black/10 px-6 pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="container mx-auto max-w-7xl">
          <Link
            href="/work"
            className="inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-[0.14em] text-black/55 uppercase transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ArrowLeft size={15} aria-hidden="true" /> Back to all work
          </Link>

          <div className="mt-14 grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
                Graphic Design · Branding · Logo Design
              </div>
              <h1 className="mt-6 max-w-4xl text-5xl leading-[0.95] font-bold tracking-[-0.055em] sm:text-6xl md:text-8xl">
                Logo &amp; Brand Identity Collection
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-relaxed font-light text-black/62 md:text-2xl">
                Six distinctive logo systems created for fashion, technology,
                skincare, fitness, coffee, and architecture brands.
              </p>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="grid aspect-[3/2] grid-cols-3 grid-rows-2 gap-px overflow-hidden border border-black/10 bg-black/10"
            >
              {identities.map((identity, index) => (
                <img
                  key={identity.name}
                  src={identity.image}
                  alt={identity.alt}
                  width={1254}
                  height={1254}
                  loading={index < 3 ? "eager" : "lazy"}
                  className="h-full w-full object-cover"
                />
              ))}
            </motion.div>
          </div>

          <div className="mt-16 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Year", "2026"],
              ["Role", "Logo & Brand Identity Designer"],
              ["Collection", "Six identity systems"],
              ["Output", "Digital and print ready"],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#f8f6f1] p-6">
                <div className="font-mono text-[0.65rem] tracking-[0.15em] text-black/45 uppercase">
                  {label}
                </div>
                <div className="mt-2 font-medium">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <div className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
              The collection
            </div>
            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              One discipline. Six different brand worlds.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-xl leading-relaxed font-light text-black/66 md:text-2xl">
              A curated collection of six logo and visual identity concepts,
              each designed around a different audience, industry, personality,
              and positioning strategy.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                { icon: Compass, label: "Positioning first" },
                { icon: Gem, label: "Distinctive symbols" },
                { icon: Layers3, label: "Scalable systems" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="border border-black/10 bg-white p-5"
                >
                  <Icon size={24} aria-hidden="true" />
                  <div className="mt-4 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
                Identity showcases
              </div>
              <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
                Six identities, individually considered.
              </h2>
            </div>
            <p className="max-w-md leading-relaxed text-black/58">
              Every concept pairs a memorable central idea with purposeful
              typography, color, and visual character.
            </p>
          </div>

          <div className="space-y-20 md:space-y-28">
            {identities.map((identity, index) => (
              <Reveal key={identity.name}>
                <section
                  aria-labelledby={`identity-${identity.number}`}
                  className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16"
                >
                  <div className={index % 2 ? "lg:order-2" : undefined}>
                    <div className="overflow-hidden border border-black/10 bg-[#fbf8f1]">
                      <img
                        src={identity.image}
                        alt={identity.alt}
                        width={1254}
                        height={1254}
                        loading="lazy"
                        className="block h-auto w-full transition-transform duration-700 hover:scale-[1.015]"
                      />
                    </div>
                  </div>
                  <div className={index % 2 ? "lg:order-1" : undefined}>
                    <div className="flex items-center gap-4 font-mono text-xs tracking-[0.15em] text-primary uppercase">
                      <span>{identity.number}</span>
                      <span className="h-px w-12 bg-primary/40" />
                      <span>{identity.sector}</span>
                    </div>
                    <h3
                      id={`identity-${identity.number}`}
                      className="mt-5 text-4xl font-bold tracking-tight md:text-5xl"
                    >
                      {identity.name}
                    </h3>
                    <p className="mt-6 text-xl leading-relaxed font-light text-black/64">
                      {identity.idea}
                    </p>
                    <div className="mt-8 border-y border-black/10 py-5">
                      <div className="font-mono text-[0.65rem] tracking-[0.14em] text-black/45 uppercase">
                        Brand character
                      </div>
                      <div className="mt-2 font-medium">
                        {identity.positioning}
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {identity.details.map((detail) => (
                        <span
                          key={detail}
                          className="border border-black/10 px-3 py-1.5 font-mono text-xs text-black/58"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                    <div
                      className="mt-7 flex gap-2"
                      aria-label={`${identity.name} color palette`}
                    >
                      {identity.palette.map((color) => (
                        <span
                          key={color}
                          className="h-10 w-10 border border-black/10"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] px-6 py-24 text-white md:py-32">
        <div className="container mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Sparkles size={36} className="text-primary" aria-hidden="true" />
            <div className="mt-7 font-mono text-xs tracking-[0.18em] text-primary uppercase">
              Identity toolkit
            </div>
            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              Strategy, symbol, type, and color—designed as one idea.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2">
              {services.map((service, index) => (
                <div key={service} className="bg-[#111] p-5">
                  <span className="mr-3 font-mono text-xs text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white/78">{service}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <nav
        aria-label="Case study navigation"
        className="grid border-y border-black/10 bg-white md:grid-cols-2"
      >
        <Link
          href="/work/mahfooz"
          className="group border-b border-black/10 px-6 py-14 transition-colors hover:bg-[#f8f6f1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:border-r md:border-b-0"
        >
          <div className="container mx-auto max-w-xl">
            <div className="font-mono text-xs tracking-[0.14em] text-black/45 uppercase">
              Previous project
            </div>
            <div className="mt-4 flex items-center gap-3 text-3xl font-bold">
              <ArrowLeft className="transition-transform group-hover:-translate-x-1" />
              Mahfooz
            </div>
          </div>
        </Link>
        <Link
          href="/work/amanat-diary"
          className="group px-6 py-14 transition-colors hover:bg-[#f8f6f1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <div className="container mx-auto max-w-xl text-left md:text-right">
            <div className="font-mono text-xs tracking-[0.14em] text-black/45 uppercase">
              Next project
            </div>
            <div className="mt-4 flex items-center gap-3 text-3xl font-bold md:justify-end">
              Amanat Diary
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      </nav>
    </article>
  );
}
