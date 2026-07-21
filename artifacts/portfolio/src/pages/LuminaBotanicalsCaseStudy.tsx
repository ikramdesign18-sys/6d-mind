import { type ReactNode, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Flower2,
  Gem,
  Leaf,
  PackageCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "wouter";

const ASSET_ROOT = "/projects/lumina-botanicals";

const strategy = [
  {
    label: "Positioning",
    value: "Premium organic skincare",
    icon: Gem,
  },
  {
    label: "Tone",
    value: "Clean, elegant, soft, trustworthy, refined",
    icon: Sparkles,
  },
  {
    label: "Visual direction",
    value: "Botanical luxury with minimalist restraint",
    icon: Leaf,
  },
  {
    label: "Core idea",
    value: "Nature, radiance, calm, and purity",
    icon: Flower2,
  },
];

const tags = [
  "Branding",
  "Packaging",
  "Visual Identity",
  "Skincare",
  "Graphic Design",
  "Art Direction",
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

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="font-mono text-[0.68rem] tracking-[0.18em] text-[#a87e35] uppercase">
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
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  eager?: boolean;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden bg-[#eee8dc] ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        className="block h-auto w-full"
      />
    </div>
  );
}

export default function LuminaBotanicalsCaseStudy() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const previousTitle = document.title;
    const title =
      "Lumina Botanicals — Premium Skincare Branding and Packaging Case Study";
    const description =
      "A premium fictional skincare identity concept spanning logo design, packaging, stationery, retail applications, and editorial campaign art direction.";
    const image = `${window.location.origin}${ASSET_ROOT}/01-lumina-banner.png`;

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
    <article className="w-full overflow-x-hidden bg-[#f5f1e9] text-[#17231d]">
      <header className="border-b border-[#173529]/12 bg-[#f8f5ef] px-6 pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="container mx-auto max-w-7xl">
          <Link
            href="/work"
            className="inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-[0.14em] text-[#173529]/58 uppercase transition-colors hover:text-[#a87e35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a87e35]"
          >
            <ArrowLeft size={15} aria-hidden="true" /> Back to all work
          </Link>

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
            >
              <SectionLabel>Graphic Design · Branding · Packaging</SectionLabel>
              <h1 className="mt-6 text-5xl leading-[0.95] font-bold tracking-[-0.055em] sm:text-6xl md:text-8xl">
                Lumina Botanicals
              </h1>
              <p className="mt-6 text-xl font-medium text-[#a87e35] md:text-2xl">
                Premium Organic Skincare Identity
              </p>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed font-light text-[#173529]/68 md:text-xl">
                A refined visual identity concept for a premium organic skincare
                brand, built around calm luxury, botanical purity, and elevated
                packaging.
              </p>
              <div className="mt-8 flex flex-wrap gap-2" aria-label="Project tags">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#173529]/15 bg-white/45 px-3 py-1.5 font-mono text-xs text-[#173529]/68"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.08 }}
              className="overflow-hidden border border-[#173529]/12 shadow-2xl shadow-[#173529]/10"
            >
              <ShowcaseImage
                src={`${ASSET_ROOT}/01-lumina-banner.png`}
                alt="Lumina Botanicals identity banner featuring the LB botanical monogram, premium wordmark, serum bottle, and matching product carton."
                width={1920}
                height={1080}
                eager
              />
            </motion.div>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-[#173529]/12 bg-[#173529]/12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Project type", "Branding · Packaging"],
              ["Role", "Brand Identity Designer"],
              ["Year", "2026"],
              ["Status", "Independent fictional concept"],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#f8f5ef] p-6">
                <div className="font-mono text-[0.65rem] tracking-[0.14em] text-[#173529]/45 uppercase">
                  {label}
                </div>
                <div className="mt-2 text-sm font-medium">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <SectionLabel>01 · Project overview</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              Quiet luxury, rooted in nature.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-xl leading-relaxed font-light text-[#173529]/72 md:text-2xl">
              Lumina Botanicals was designed as a premium skincare identity
              concept rooted in purity, elegance, and natural care. The branding
              balances soft editorial sophistication with a calm botanical
              character, creating a cohesive system across packaging,
              stationery, logo applications, and campaign visuals.
            </p>
            <p className="mt-6 border-l border-[#a87e35] pl-6 leading-relaxed text-[#173529]/58">
              This is an independent fictional portfolio concept created to
              demonstrate brand strategy, identity, packaging, and art
              direction. It is not presented as a registered trademark,
              launched company, or client-owned brand.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[#173529]/12 bg-[#123b2a] px-6 py-24 text-[#f6f1e6] md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>02 · Brand strategy</SectionLabel>
            <div className="mt-6 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                Premium botanical care with minimalist restraint.
              </h2>
              <p className="text-lg leading-relaxed font-light text-[#f6f1e6]/68">
                The audience values high-quality natural skincare and beautiful
                packaging. Every identity decision was shaped to feel calm,
                trustworthy, refined, and distinct on a premium beauty shelf.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {strategy.map(({ label, value, icon: Icon }, index) => (
              <Reveal key={label} delay={index * 0.04}>
                <div className="h-full bg-[#123b2a] p-7">
                  <Icon size={26} className="text-[#d8b384]" aria-hidden="true" />
                  <div className="mt-6 font-mono text-[0.65rem] tracking-[0.14em] text-[#d8b384] uppercase">
                    {label}
                  </div>
                  <div className="mt-3 leading-relaxed text-[#f6f1e6]/80">
                    {value}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8f1] px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <SectionLabel>03 · Brand identity</SectionLabel>
                <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
                  A flexible botanical logo system.
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-[#173529]/64">
                The LB botanical monogram combines graceful letterforms with
                natural growth. Primary, stacked, and submark lockups allow the
                identity to move from packaging fronts and labels to compact
                digital and retail applications.
              </p>
            </div>
            <ShowcaseImage
              src={`${ASSET_ROOT}/06-logo-variations.png`}
              alt="Lumina Botanicals logo system showing primary monogram, stacked wordmark, and circular submark variations."
              width={1800}
              height={1019}
              className="mt-14 border border-[#173529]/10"
            />
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <SectionLabel>04 · Color and typography</SectionLabel>
                <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
                  Forest depth, warm light, quiet gold.
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-[#173529]/64">
                Deep forest green grounds the identity in botanical confidence.
                Warm ivory keeps the system soft and spacious, while muted gold
                brings measured luxury. Elegant serif typography is balanced by
                a clear modern sans serif for functional information.
              </p>
            </div>
            <ShowcaseImage
              src={`${ASSET_ROOT}/07-color-palette-typography.png`}
              alt="Lumina Botanicals visual system showing forest green, sage, muted gold, ivory, and charcoal colors with serif and sans-serif typography."
              width={1800}
              height={1188}
              className="mt-14 border border-[#173529]/10"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[#173529]/12 bg-[#e8e0d3] px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <SectionLabel>05 · Packaging showcase</SectionLabel>
                <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
                  Calm luxury at the point of care.
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-[#173529]/64">
                The packaging language uses an elegant information hierarchy,
                botanical linework, warm materials, and consistent logo
                placement to create premium organic shelf presence without
                visual noise.
              </p>
            </div>
            <ShowcaseImage
              src={`${ASSET_ROOT}/02-product-packaging.png`}
              alt="Lumina Botanicals Radiance Serum in a forest-green glass dropper bottle beside a coordinated warm-ivory carton."
              width={1800}
              height={926}
              className="mt-14 shadow-2xl shadow-[#173529]/10"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#fbf8f1] px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
              <ShowcaseImage
                src={`${ASSET_ROOT}/04-rigid-packaging-box.png`}
                alt="Open premium Lumina Botanicals forest-green rigid serum box with gold interior details."
                width={1800}
                height={997}
                className="border border-[#173529]/10"
              />
              <div>
                <SectionLabel>06 · Premium rigid packaging</SectionLabel>
                <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
                  A considered unboxing touchpoint.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-[#173529]/64">
                  Forest green, muted gold, and structured botanical details
                  extend the identity into a more ceremonial rigid format—adding
                  depth, tactility, and gifting value while keeping the same
                  visual discipline.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <SectionLabel>07 · Stationery</SectionLabel>
                <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
                  Supporting collateral with editorial restraint.
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-[#173529]/64">
                The business-card system demonstrates how the monogram,
                wordmark, contact information, botanical drawing, and color
                palette translate into professional everyday brand collateral.
              </p>
            </div>
            <ShowcaseImage
              src={`${ASSET_ROOT}/03-business-cards.png`}
              alt="Lumina Botanicals business cards showing a dark forest-green logo front and a warm-ivory contact-information reverse."
              width={1800}
              height={1150}
              className="mt-14 border border-[#173529]/10"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[#173529]/12 bg-[#173529] px-6 py-24 text-[#f8f4ea] md:py-32">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
              <ShowcaseImage
                src={`${ASSET_ROOT}/05-shopping-bag.png`}
                alt="Premium Lumina Botanicals forest-green retail shopping bag with gold rope handles and botanical identity details."
                width={1800}
                height={1086}
              />
              <div>
                <SectionLabel>08 · Retail application</SectionLabel>
                <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
                  Recognition beyond the product.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-[#f8f4ea]/66">
                  The retail bag turns the deep forest palette and botanical
                  monogram into a visible brand signal, supported by tactile
                  gold handles and understated side-panel illustration.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#d8c8b4] px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <SectionLabel>09 · Editorial campaign</SectionLabel>
                <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
                  Radiance expressed through mood and texture.
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-[#173529]/66">
                The campaign direction connects skin, botanical forms, warm
                natural light, and quiet composition. The result carries the
                brand’s calm luxury from packaging into a human, sensory visual
                world.
              </p>
            </div>
            <div className="mt-14 mx-auto max-w-4xl">
              <ShowcaseImage
                src={`${ASSET_ROOT}/08-editorial-campaign.png`}
                alt="Lumina Botanicals editorial campaign portrait showing radiant skin framed by deep-green botanical leaves."
                width={1800}
                height={1870}
                className="shadow-2xl shadow-[#173529]/15"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f8f5ef] px-6 py-24 md:py-32">
        <div className="container mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <PackageCheck size={38} className="text-[#a87e35]" aria-hidden="true" />
            <SectionLabel>10 · Design outcome</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              One cohesive premium skincare experience.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-xl leading-relaxed font-light text-[#173529]/70 md:text-2xl">
              The final identity system delivers a cohesive premium skincare
              brand experience across logo, packaging, print collateral, and
              campaign presentation. Every touchpoint was designed to feel calm,
              polished, and naturally luxurious.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                "Recognizable botanical monogram",
                "Flexible primary and compact lockups",
                "Consistent premium packaging language",
                "Cohesive print and retail applications",
                "Editorial campaign direction",
                "Scalable visual identity foundation",
              ].map((item) => (
                <div key={item} className="border-t border-[#173529]/15 py-4 font-medium">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[#d8b384]/25 bg-[#0f2e22] px-6 py-24 text-center text-[#f8f4ea] md:py-28">
        <div className="container mx-auto max-w-3xl">
          <Reveal>
            <SectionLabel>Build a distinctive brand</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              Need an identity with this level of care?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#f8f4ea]/65">
              I design strategic visual identities, packaging systems, and
              brand applications that connect one clear idea across every
              touchpoint.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#d8b384] px-7 py-3 font-medium text-[#0f2e22] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Start a branding project <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="/work"
                className="inline-flex min-h-12 items-center justify-center border border-white/25 px-7 py-3 font-medium transition-colors hover:border-white hover:bg-white hover:text-[#0f2e22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Explore more work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <nav
        aria-label="Case study navigation"
        className="grid border-b border-[#173529]/12 bg-[#f8f5ef] md:grid-cols-2"
      >
        <Link
          href="/work/graphic-design/logo-branding-collection"
          className="group border-b border-[#173529]/12 px-6 py-14 transition-colors hover:bg-[#eee8dc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a87e35] md:border-r md:border-b-0"
        >
          <div className="container mx-auto max-w-xl">
            <div className="font-mono text-xs tracking-[0.14em] text-[#173529]/45 uppercase">
              Previous project
            </div>
            <div className="mt-4 flex items-center gap-3 text-3xl font-bold">
              <ArrowLeft className="transition-transform group-hover:-translate-x-1" />
              Logo Collection
            </div>
          </div>
        </Link>
        <Link
          href="/work/mahfooz"
          className="group px-6 py-14 transition-colors hover:bg-[#eee8dc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a87e35]"
        >
          <div className="container mx-auto max-w-xl text-left md:text-right">
            <div className="font-mono text-xs tracking-[0.14em] text-[#173529]/45 uppercase">
              Next project
            </div>
            <div className="mt-4 flex items-center gap-3 text-3xl font-bold md:justify-end">
              Mahfooz
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      </nav>
    </article>
  );
}
