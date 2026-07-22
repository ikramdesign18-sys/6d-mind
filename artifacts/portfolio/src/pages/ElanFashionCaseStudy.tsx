import { type ReactNode, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Gauge,
  MonitorSmartphone,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { Link } from "wouter";

import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const challenges = [
  {
    title: "Brand and commerce balance",
    copy: "The homepage needed strong fashion imagery without hiding navigation, collection links, product information, and shopping actions.",
  },
  {
    title: "Responsive composition",
    copy: "The desktop layout needed to adapt to tablet and mobile without losing hierarchy, campaign impact, or product visibility.",
  },
  {
    title: "Product discovery",
    copy: "Customers needed a clear way to browse categories, styles, colors, and sizes without being overwhelmed by filters.",
  },
  {
    title: "Product confidence",
    copy: "The product-detail page needed to clearly present imagery, pricing, colors, sizes, fit information, care instructions, and purchase actions.",
  },
  {
    title: "Scalable frontend structure",
    copy: "The experience needed reusable components that could support future products, collections, campaigns, and categories.",
  },
];

const goals = [
  "Create a premium editorial first impression",
  "Make navigation easy to understand",
  "Support desktop, tablet, and mobile",
  "Make new arrivals easy to discover",
  "Create reusable product cards",
  "Clearly display original and sale prices",
  "Support wishlist actions",
  "Provide useful product filters",
  "Make color selection easy to scan",
  "Make size selection understandable",
  "Keep Add to Cart prominent",
  "Keep Buy It Now visible",
  "Present fit and care details clearly",
  "Build a reusable responsive design system",
  "Support keyboard and touch interactions",
  "Optimize image-heavy pages",
  "Prepare the project for development and launch",
];

const contributions = [
  {
    number: "01",
    title: "Product Strategy",
    items: [
      "Store structure and navigation hierarchy",
      "Product categories and collection strategy",
      "Shopping journeys",
      "Product-detail hierarchy",
      "Responsive priorities",
      "Conversion path",
    ],
  },
  {
    number: "02",
    title: "UI/UX Design",
    items: [
      "Homepage and campaign hero",
      "Collections and product cards",
      "Wishlist and filters",
      "Color swatches and size selection",
      "Product gallery and information",
      "Cart-entry actions and accordions",
    ],
  },
  {
    number: "03",
    title: "Responsive Design",
    items: [
      "Desktop composition",
      "Tablet layout",
      "Mobile hierarchy and navigation",
      "Responsive product grids",
      "Responsive typography",
      "Touch-friendly controls and image ratios",
    ],
  },
  {
    number: "04",
    title: "Design System",
    items: [
      "Typography hierarchy",
      "Neutral palette and spacing",
      "Buttons and product cards",
      "Filter controls and swatches",
      "Size selectors and accordions",
      "Navigation, labels, and responsive tokens",
    ],
  },
  {
    number: "05",
    title: "Frontend Development",
    items: [
      "Reusable component specification",
      "Responsive layouts and routing behavior",
      "Product-card interactions",
      "Filter and product-option states",
      "Cart-entry workflow where verified",
      "SEO and image-performance planning",
    ],
  },
  {
    number: "06",
    title: "QA and Launch Preparation",
    items: [
      "Responsive and cross-browser review",
      "Keyboard and accessibility testing",
      "Image and route review",
      "Performance review",
      "Production build validation",
      "Deployment preparation",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    copy: "Defined the brand direction, product categories, customer browsing habits, shopping actions, and responsive requirements.",
  },
  {
    number: "02",
    title: "Structure",
    copy: "Organized the experience around the homepage, navigation, collections, filters, product cards, product details, and cart-entry actions.",
  },
  {
    number: "03",
    title: "Design",
    copy: "Created a restrained editorial system using neutral surfaces, strong photography, refined typography, and clear commerce controls.",
  },
  {
    number: "04",
    title: "Prototype",
    copy: "Connected homepage discovery, collection browsing, filtering, wishlist interactions, product options, and cart-entry flows.",
  },
  {
    number: "05",
    title: "Prepare for development",
    copy: "Defined reusable responsive components and documented interaction states using the existing product direction.",
  },
  {
    number: "06",
    title: "Test and prepare",
    copy: "Reviewed responsive layouts, accessibility, browser behavior, direct routes, loading, errors, performance, and build readiness.",
  },
];

const homepageElements = [
  "Shipping announcement",
  "Main navigation",
  "Seasonal campaign hero",
  "New arrivals",
  "Product carousel",
  "Reusable product cards",
  "Wishlist controls",
  "Original and sale prices",
  "Color swatches",
  "Editorial content",
  "Collection action",
  "Desktop, tablet, and mobile layouts",
];

const discoveryPrinciples = [
  "Keep product imagery dominant",
  "Group product, style, color, and size filters",
  "Keep original and sale pricing easy to compare",
  "Make discounted pricing visually clear",
  "Show color choices before opening a product",
  "Provide wishlist access directly from the grid",
];

const productCardAnatomy = [
  "Consistent product image",
  "Labelled wishlist action",
  "Optional bestseller label",
  "Product name",
  "Original price",
  "Current price",
  "Color swatches",
  "Product-detail link",
  "Hover state",
  "Visible focus state",
];

const productCardPrinciples = [
  "Consistent image ratios",
  "Clear sale-price hierarchy",
  "Large clickable product area",
  "Keyboard accessibility",
  "Minimal visual noise",
  "Reusable across homepage and collections",
];

const productDetailElements = [
  "Breadcrumb navigation",
  "Product title",
  "Original and sale prices",
  "Color name and swatches",
  "Size selection",
  "Add to Cart",
  "Buy It Now",
  "Product details",
  "Fit details",
  "Fabrication and care",
  "Product-image gallery",
];

const productDetailPrinciples = [
  "Keep purchase actions visible",
  "Clearly show the selected color",
  "Clearly show the selected size",
  "Make pricing easy to understand",
  "Provide fit information before purchase",
  "Keep care information available without overwhelming the page",
  "Give product imagery enough visual space",
];

const responsiveModes = [
  {
    title: "Desktop",
    copy: "A multi-image gallery and product information sit side by side, keeping color, size, price, and purchase actions visible.",
  },
  {
    title: "Tablet",
    copy: "Spacing compresses while the gallery and product information remain balanced and option controls become comfortably touch-friendly.",
  },
  {
    title: "Mobile",
    copy: "The gallery becomes a single column with product information below, full-width actions, clear price hierarchy, and no horizontal overflow.",
  },
];

const storeStructure = [
  "New Arrivals",
  "Shop",
  "Get the Look",
  "Accessories",
  "Collections",
  "About",
  "Search",
  "Log In",
  "Cart",
];

const shoppingPaths = [
  "Campaign to collection",
  "Homepage product to product detail",
  "Category to filtered collection",
  "Product detail to cart entry",
  "Search to product result where implemented",
  "Wishlist to saved products where implemented",
];

const visualPrinciples = [
  "Warm white backgrounds",
  "Chocolate-brown announcement treatment",
  "Charcoal primary text",
  "Neutral supporting copy",
  "Editorial type hierarchy",
  "Thin dividers and generous spacing",
  "Minimal action styling",
  "Outlined Add to Cart action",
  "Filled Buy It Now action",
  "Circular color swatches",
  "Wishlist icons",
  "Consistent image ratios",
  "Responsive grids",
  "Subtle hover and focus states",
];

const commercePrinciples = [
  "Clear pricing",
  "Honest sale-price hierarchy",
  "Visible color and size selection",
  "Purchase actions at the correct moment",
  "Product details before commitment",
  "Accessible option states",
  "Clear disabled states",
  "Cart feedback where implemented",
  "Wishlist confirmation where implemented",
  "Shipping and returns information where available",
  "No hidden costs in the visible product UI",
];

const accessibilityPrinciples = [
  "Semantic navigation",
  "Keyboard-accessible product cards",
  "Visible focus states",
  "Accessible wishlist buttons",
  "Labels for color swatches",
  "Selected states for size and color",
  "Sufficient contrast",
  "Descriptive image alt text",
  "Correct heading hierarchy",
  "Accessible accordions",
  "Touch-friendly controls",
  "Reduced-motion support",
  "No reliance on color alone",
  "Meaningful button labels",
];

const performancePrinciples = [
  "Responsive screenshot sizing",
  "Modern formats where supported by the storefront",
  "Lazy loading below the hero",
  "Priority hero image",
  "Explicit image dimensions",
  "Reduced layout shift",
  "Route splitting where supported",
  "Efficient product-card rendering",
  "Optimized font delivery",
  "No duplicate image requests",
  "Mobile-friendly image delivery",
  "Avoid unnecessary rerenders",
];

const launchPreparation = [
  "Production-configuration review",
  "Environment-variable separation",
  "Responsive QA",
  "Browser and keyboard testing",
  "Image-loading review",
  "Route and direct-refresh testing",
  "Filter-state testing",
  "Product-option testing",
  "Cart-entry checks where implemented",
  "Production build validation",
  "Accessibility and performance review",
  "SEO metadata and Open Graph image",
  "Domain and deployment preparation",
  "Error-state review",
];

const solutionOutcomes = [
  "Stronger connection between brand and shopping",
  "Clearer product discovery",
  "Consistent product-card system",
  "Focused product-detail experience",
  "Responsive behavior across screen sizes",
  "Scalable frontend foundation",
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 font-mono text-xs tracking-[0.22em] text-[#7a513f] uppercase">
      {children}
    </div>
  );
}

function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function CheckList({
  items,
  columns = false,
  dark = false,
}: {
  items: string[];
  columns?: boolean;
  dark?: boolean;
}) {
  return (
    <ul className={cn("grid gap-4", columns && "sm:grid-cols-2")}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "flex gap-3",
            dark ? "text-white/72" : "text-[#2e2926]/72",
          )}
        >
          <span
            className={cn(
              "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
              dark
                ? "border-[#d8c6b9]/50 text-[#f0ddd0]"
                : "border-[#8a6754]/45 text-[#7a513f]",
            )}
          >
            <Check size={12} aria-hidden="true" />
          </span>
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function MediaPanel({
  src,
  alt,
  width,
  height,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure className="overflow-hidden border border-[#cdbfb5] bg-[#eee8e2] shadow-2xl shadow-[#3b2b22]/10">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="h-auto w-full object-contain"
      />
      <figcaption className="border-t border-[#d7cbc3] bg-[#f8f4ef] px-5 py-4 font-mono text-[0.68rem] leading-relaxed tracking-[0.08em] text-[#5c5049]/65 uppercase sm:px-7">
        {caption}
      </figcaption>
    </figure>
  );
}

function setMetaTag(
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );
  const created = !element;
  const previousContent = element?.content;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;

  return () => {
    if (created) {
      element?.remove();
    } else if (element && previousContent !== undefined) {
      element.content = previousContent;
    }
  };
}

export default function ElanFashionCaseStudy({
  project,
}: {
  project: Project;
}) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title =
      "ÉLAN — Fashion E-commerce UI/UX and Frontend Development Case Study";

    const restoreMeta = [
      setMetaTag(
        "name",
        "description",
        "A complete design-to-development case study for ÉLAN, covering responsive fashion e-commerce UI/UX, homepage design, product discovery, filtering, product details, reusable components, frontend development, accessibility, performance, and launch preparation.",
      ),
      setMetaTag(
        "property",
        "og:title",
        "ÉLAN — Fashion E-commerce UI/UX and Frontend Development Case Study",
      ),
      setMetaTag(
        "property",
        "og:description",
        "A responsive fashion-commerce experience connecting editorial storytelling, product discovery, collections, and purchase-focused product details.",
      ),
      setMetaTag(
        "property",
        "og:image",
        "/projects/elan-fashion/elan-cover.png",
      ),
      setMetaTag("property", "og:type", "article"),
    ];

    window.scrollTo({ top: 0, behavior: "auto" });

    return () => {
      document.title = previousTitle;
      restoreMeta.forEach((restore) => restore());
    };
  }, []);

  return (
    <article className="w-full overflow-hidden bg-[#f7f3ee] text-[#241f1c]">
      <header className="relative overflow-hidden bg-[#211a17] px-6 pb-20 pt-16 text-white md:pb-28 md:pt-24">
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-24 h-96 w-96 rounded-full bg-[#a98068]/14 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#d8c6b9]/8 blur-3xl"
        />

        <div className="container relative mx-auto max-w-6xl">
          <Link
            href="/work"
            className="mb-16 inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-[0.16em] text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8bfae] focus-visible:ring-offset-4 focus-visible:ring-offset-[#211a17]"
          >
            <ArrowLeft size={15} aria-hidden="true" /> BACK TO SELECTED WORK
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <div>
              <div className="mb-6 font-mono text-xs tracking-[0.2em] text-[#d8bfae] uppercase">
                Fashion E-commerce · Responsive Web · Design to Development
              </div>
              <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl">
                ÉLAN
              </h1>
              <p className="mt-8 max-w-4xl text-2xl font-light leading-tight text-white md:text-3xl">
                Editorial fashion, designed for effortless discovery.
              </p>
              <p className="mt-6 max-w-3xl text-lg font-light leading-relaxed text-white/68">
                ÉLAN is a responsive fashion e-commerce experience combining
                editorial brand storytelling with clear product discovery,
                curated collections, filtering, product details, and
                purchase-focused interactions across desktop, tablet, and
                mobile.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/15 bg-white/15 text-sm sm:grid-cols-2 lg:grid-cols-1">
              {[
                ["Role", "UI/UX Designer and Frontend Developer"],
                [
                  "Disciplines",
                  "Product Design · Responsive UI/UX · Frontend Development",
                ],
                ["Platforms", project.platform ?? "Desktop · Tablet · Mobile"],
                ["Industry", "Fashion · Lifestyle · Retail"],
                ["Year", project.year ?? "2026"],
                [
                  "Services",
                  "Experience Strategy · UI/UX · Design System · Frontend Development",
                ],
                [
                  "Technology",
                  "Storefront stack not verified from supplied source",
                ],
              ].map(([label, value]) => (
                <div key={label} className="bg-[#2b2320] p-5">
                  <div className="font-mono text-[0.64rem] tracking-[0.16em] text-[#d8bfae] uppercase">
                    {label}
                  </div>
                  <div className="mt-2 leading-relaxed text-white/78">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Reveal className="mt-14">
            <MediaPanel
              src="/projects/elan-fashion/elan-cover.png"
              alt="ÉLAN responsive fashion e-commerce homepage shown across desktop, tablet, and mobile with a seasonal campaign hero and curated products."
              width={1672}
              height={941}
              caption="Responsive homepage · Desktop, tablet, and mobile presentation"
              priority
            />
          </Reveal>

          <div
            aria-label="Project expertise"
            className="mt-8 flex flex-wrap gap-2"
          >
            {[
              "UI/UX",
              "Website",
              "E-commerce",
              "Responsive Design",
              "Frontend Development",
              "Fashion",
              "Product Design",
            ].map((item) => (
              <span
                key={item}
                className="border border-white/15 bg-white/[0.035] px-3 py-2 font-mono text-[0.68rem] tracking-[0.08em] text-white/62 uppercase"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </header>

      <section className="border-b border-[#d8ccc4] bg-[#fffdf9] px-6 py-20 md:py-28">
        <Reveal className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionLabel>Overview</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              A fashion store that balances brand emotion with shopping clarity.
            </h2>
          </div>
          <div className="space-y-6 text-lg font-light leading-relaxed text-[#332d29]/70">
            <p>
              Fashion e-commerce has two responsibilities: presenting the brand
              with confidence and helping customers find the right product
              without friction.
            </p>
            <p>
              ÉLAN was designed around both. Editorial campaign imagery creates
              a strong first impression, while structured collections, filters,
              product cards, color options, favorites, product details, and
              direct purchase actions keep the shopping journey understandable.
            </p>
            <p className="border-l-2 border-[#7a513f] pl-6 text-[#241f1c]">
              The goal was to create a premium shopping experience that feels
              visually calm while remaining practical and easy to use.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>The Challenge</SectionLabel>
            <h2 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
              Preserving an editorial identity across every shopping screen.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {challenges.map((item, index) => (
              <Reveal
                key={item.title}
                className="border border-[#d8ccc4] bg-[#fffdf9] p-6"
              >
                <div className="font-mono text-xs text-[#7a513f]">
                  0{index + 1}
                </div>
                <h3 className="mt-10 text-xl font-bold">{item.title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-[#332d29]/62">
                  {item.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8ccc4] bg-[#ece4dd] px-6 py-20 md:py-28">
        <Reveal className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <SectionLabel>Goals</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              What the experience needed to achieve.
            </h2>
          </div>
          <CheckList items={goals} columns />
        </Reveal>
      </section>

      <section className="bg-[#fffdf9] px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="max-w-4xl">
            <SectionLabel>My Contribution</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Designing and developing the complete shopping journey.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-[#332d29]/68">
              My work covered the project from responsive product strategy and
              UI/UX design to reusable frontend specification, testing, and
              launch preparation.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {contributions.map((area) => (
              <Reveal
                key={area.number}
                className="border border-[#d8ccc4] bg-[#f8f3ee] p-7"
              >
                <div className="font-mono text-xs tracking-widest text-[#7a513f]">
                  {area.number}
                </div>
                <h3 className="mt-8 text-2xl font-bold">{area.title}</h3>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[#332d29]/65">
                  {area.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#7a513f]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#211a17] px-6 py-20 text-white md:py-28">
        <div className="container mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-5 font-mono text-xs tracking-[0.22em] text-[#d8bfae] uppercase">
              Process
            </div>
            <h2 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
              From fashion direction to a responsive commerce system.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {process.map((stage) => (
              <Reveal key={stage.number} className="bg-[#28201d] p-8">
                <div className="font-mono text-xs text-[#d8bfae]">
                  STAGE {stage.number}
                </div>
                <h3 className="mt-10 text-2xl font-bold">{stage.title}</h3>
                <p className="mt-4 font-light leading-relaxed text-white/62">
                  {stage.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <Reveal className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <SectionLabel>01 · Responsive Homepage</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              One campaign, carefully adapted across every screen.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-[#332d29]/68">
              The responsive homepage preserves the same brand feeling while
              adjusting image crops, navigation density, text size, spacing, and
              product visibility for each screen.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-[#332d29]/55">
              The full desktop, tablet, and mobile comparison appears once in
              the hero. This section documents the responsive system without
              requesting the same large asset a second time.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {homepageElements.map((item) => (
              <div
                key={item}
                className="flex min-h-24 items-end border border-[#d8ccc4] bg-[#fffdf9] p-5 font-medium"
              >
                <span className="mr-3 text-[#7a513f]">—</span>
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-y border-[#d8ccc4] bg-[#ece4dd] px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="max-w-4xl">
            <SectionLabel>02 · Product Discovery</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Helping customers narrow a collection without losing visual
              clarity.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-[#332d29]/68">
              Product type, style, color, and size controls are grouped beside a
              consistent product grid. Wishlist buttons, bestseller labels,
              names, prices, and color swatches remain easy to scan without
              competing with the photography.
            </p>
          </Reveal>
          <Reveal className="mt-12">
            <MediaPanel
              src="/projects/elan-fashion/elan-collection.png"
              alt="ÉLAN collection page showing fashion products, category filters, color and size controls, wishlist buttons, prices, sale prices, and color swatches."
              width={865}
              height={771}
              caption="Collection page · Filters, product grid, wishlist, pricing, and color options"
            />
          </Reveal>
          <Reveal className="mt-10 border border-[#cdbfb5] bg-[#fffdf9] p-7 md:p-9">
            <div className="mb-7 flex items-center gap-3">
              <SlidersHorizontal
                className="text-[#7a513f]"
                aria-hidden="true"
              />
              <h3 className="text-2xl font-bold">
                Product-discovery principles
              </h3>
            </div>
            <CheckList items={discoveryPrinciples} columns />
          </Reveal>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-[#332d29]/50">
            The supplied interface verifies the designed filter controls and
            product states. Live inventory filtering is not claimed without
            storefront source or commerce data.
          </p>
        </div>
      </section>

      <section className="bg-[#fffdf9] px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <SectionLabel>03 · Product Cards</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                A reusable unit for browsing, comparison, and product intent.
              </h2>
              <div className="mt-8">
                <CheckList items={productCardPrinciples} />
              </div>
            </div>
            <div className="grid gap-px overflow-hidden border border-[#d8ccc4] bg-[#d8ccc4] sm:grid-cols-2">
              {productCardAnatomy.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 bg-[#f8f3ee] p-5"
                >
                  <span className="font-mono text-xs text-[#7a513f]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[#d8ccc4] px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="max-w-4xl">
            <SectionLabel>04 · Product Detail</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Giving customers the information needed to choose confidently.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-[#332d29]/68">
              The product page gives imagery generous space while keeping
              pricing, color, size, purchase actions, fit, fabrication, and care
              information in a clear decision sequence.
            </p>
          </Reveal>
          <Reveal className="mt-12">
            <MediaPanel
              src="/projects/elan-fashion/elan-product-detail.png"
              alt="ÉLAN product-detail page showing a product gallery, breadcrumb, title, pricing, color options, size options, Add to Cart, Buy It Now, fit details, and care information."
              width={1087}
              height={1031}
              caption="Product detail · Gallery, pricing, color, size, purchase actions, fit, and care"
            />
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <Reveal className="border border-[#d8ccc4] bg-[#fffdf9] p-7">
              <h3 className="mb-7 text-2xl font-bold">
                Product information structure
              </h3>
              <CheckList items={productDetailElements} columns />
            </Reveal>
            <Reveal className="border border-[#d8ccc4] bg-[#ece4dd] p-7">
              <h3 className="mb-7 text-2xl font-bold">Decision principles</h3>
              <CheckList items={productDetailPrinciples} />
            </Reveal>
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-[#332d29]/50">
            Stock availability, automated size recommendations, checkout, and
            payment behavior are not presented as verified without product
            source and commerce integration evidence.
          </p>
        </div>
      </section>

      <section className="bg-[#211a17] px-6 py-20 text-white md:py-28">
        <div className="container mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-5 font-mono text-xs tracking-[0.22em] text-[#d8bfae] uppercase">
              05 · Responsive Purchase Flow
            </div>
            <h2 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
              Maintaining product clarity from desktop to mobile.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {responsiveModes.map((mode, index) => (
              <Reveal
                key={mode.title}
                className="border border-white/12 bg-white/[0.035] p-7"
              >
                <div className="flex items-center justify-between">
                  <MonitorSmartphone
                    className="text-[#d8bfae]"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs text-white/35">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-10 text-2xl font-bold">{mode.title}</h3>
                <p className="mt-4 font-light leading-relaxed text-white/62">
                  {mode.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <Reveal className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Store Structure</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              A simple architecture supporting exploration and direct shopping.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-[#332d29]/68">
              The visible navigation supports seasonal discovery, focused
              collection browsing, and direct product access without exposing
              unnecessary storefront complexity.
            </p>
          </div>
          <div>
            <div className="grid gap-px overflow-hidden border border-[#d8ccc4] bg-[#d8ccc4] sm:grid-cols-3">
              {storeStructure.map((item) => (
                <div
                  key={item}
                  className="flex min-h-20 items-center bg-[#fffdf9] p-5 font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-7">
              <h3 className="mb-5 text-xl font-bold">Primary shopping paths</h3>
              <CheckList items={shoppingPaths} columns />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-[#d8ccc4] bg-[#ece4dd] px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <SectionLabel>Visual System</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                A restrained interface that lets fashion imagery lead.
              </h2>
              <p className="mt-6 text-lg font-light leading-relaxed text-[#332d29]/68">
                Warm neutral surfaces, charcoal text, subtle brown accents,
                generous spacing, and restrained controls create an editorial
                rhythm without inventing unsupported font or token
                specifications.
              </p>
            </div>
            <div
              aria-label="ÉLAN visual palette"
              className="grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {[
                ["Warm Ivory", "bg-[#f7f3ee]"],
                ["Soft White", "bg-[#fffdf9]"],
                ["Taupe", "bg-[#b7a49a]"],
                ["Chocolate", "bg-[#3b2b25]"],
              ].map(([name, colorClass]) => (
                <div
                  key={name}
                  className="border border-[#cdbfb5] bg-[#fffdf9] p-3"
                >
                  <div
                    className={cn(
                      "aspect-square border border-[#b9aaa0]",
                      colorClass,
                    )}
                  />
                  <div className="mt-3 text-sm font-medium">{name}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="mt-10 border border-[#cdbfb5] bg-[#fffdf9] p-7 md:p-9">
            <CheckList items={visualPrinciples} columns />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#fffdf9] px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="max-w-4xl">
            <SectionLabel>Development</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Turning editorial UI into reusable responsive commerce components.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-[#332d29]/68">
              The supplied ÉLAN archive contains the responsive design assets
              shown here, but not the storefront source. The case study
              therefore separates visible design evidence, development-ready
              behavior, and technical areas that require implementation proof.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
            {[
              {
                eyebrow: "Fully implemented",
                title: "Not verifiable from supplied source",
                items: [
                  "Storefront source was not included",
                  "No framework claim is made",
                  "No persistent state claim is made",
                  "No production-release claim is made",
                ],
              },
              {
                eyebrow: "Designed workflows",
                title: "Visible product evidence",
                items: [
                  "Responsive homepage",
                  "Collection and filters",
                  "Reusable product cards",
                  "Product-detail experience",
                  "Color, size, and cart-entry states",
                ],
              },
              {
                eyebrow: "Development-ready",
                title: "Prepared interactions",
                items: [
                  "Responsive component behavior",
                  "Navigation and route structure",
                  "Filter and option states",
                  "Wishlist and cart feedback states",
                  "Loading and error-state planning",
                ],
              },
              {
                eyebrow: "Future or unverified",
                title: "Requires technical evidence",
                items: [
                  "Commerce API or platform",
                  "Live inventory filtering",
                  "Wishlist persistence",
                  "Cart and checkout state",
                  "Payment, shipping, and tax behavior",
                ],
              },
            ].map((group) => (
              <Reveal
                key={group.eyebrow}
                className="border border-[#d8ccc4] bg-[#f8f3ee] p-7"
              >
                <div className="font-mono text-xs tracking-[0.14em] text-[#7a513f] uppercase">
                  {group.eyebrow}
                </div>
                <h3 className="mt-5 text-2xl font-bold">{group.title}</h3>
                <div className="mt-7">
                  <CheckList items={group.items} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#211a17] px-6 py-20 text-white md:py-28">
        <Reveal className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <div className="mb-5 font-mono text-xs tracking-[0.22em] text-[#d8bfae] uppercase">
              Commerce Design
            </div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Reducing shopping friction without overwhelming the interface.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-white/65">
              Product imagery remains the visual priority while pricing,
              options, product information, and purchase entry points appear at
              the moment customers need them.
            </p>
          </div>
          <CheckList items={commercePrinciples} columns dark />
        </Reveal>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal className="border border-[#d8ccc4] bg-[#fffdf9] p-8">
              <ShieldCheck
                size={30}
                className="text-[#7a513f]"
                aria-hidden="true"
              />
              <SectionLabel>Accessible Experience</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight">
                Editorial design that remains usable and understandable.
              </h2>
              <div className="mt-8">
                <CheckList items={accessibilityPrinciples} columns />
              </div>
            </Reveal>
            <Reveal className="border border-[#d8ccc4] bg-[#ece4dd] p-8">
              <Gauge size={30} className="text-[#7a513f]" aria-hidden="true" />
              <SectionLabel>Performance</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight">
                Protecting image quality without making the store feel slow.
              </h2>
              <div className="mt-8">
                <CheckList items={performancePrinciples} columns />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8ccc4] bg-[#ece4dd] px-6 py-20 md:py-28">
        <Reveal className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <SectionLabel>Launch Preparation</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Preparing the storefront for dependable real-world use.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-[#332d29]/68">
              Prepared for launch. Public release, live commerce credentials,
              and production storefront availability are not claimed without
              verified deployment evidence.
            </p>
          </div>
          <CheckList items={launchPreparation} columns />
        </Reveal>
      </section>

      <section className="bg-[#fffdf9] px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <SectionLabel>The Solution</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                One cohesive journey from seasonal campaign to product decision.
              </h2>
            </div>
            <div>
              <p className="text-lg font-light leading-relaxed text-[#332d29]/68">
                The final ÉLAN experience connects editorial campaign
                storytelling, responsive navigation, product discovery, filters,
                reusable product cards, wishlist actions, color and size
                options, product details, and purchase entry points through one
                consistent design system.
              </p>
              <div className="mt-8">
                <CheckList items={solutionOutcomes} columns />
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-20 border-t border-[#d8ccc4] pt-16">
            <SectionLabel>Outcome</SectionLabel>
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                A complete responsive fashion-commerce foundation—from design
                direction to frontend delivery.
              </h2>
              <p className="text-lg font-light leading-relaxed text-[#332d29]/68">
                ÉLAN demonstrates a complete design-to-development approach
                rather than a single homepage concept. The project brings
                together product strategy, responsive UI/UX, fashion-focused
                visual direction, collection design, product-detail design,
                reusable frontend planning, accessibility, performance, testing,
                and launch preparation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <nav
        aria-label="Case study navigation"
        className="border-y border-[#d8ccc4] bg-[#f7f3ee] px-6"
      >
        <div className="container mx-auto grid max-w-6xl md:grid-cols-3">
          <Link
            href="/work"
            className="group flex min-h-32 flex-col justify-center border-b border-[#d8ccc4] py-8 outline-none focus-visible:ring-2 focus-visible:ring-[#7a513f] md:border-b-0 md:border-r md:pr-8"
          >
            <span className="font-mono text-xs tracking-[0.16em] text-[#332d29]/45 uppercase">
              Back to
            </span>
            <span className="mt-2 flex items-center gap-3 text-xl font-bold transition-colors group-hover:text-[#7a513f]">
              <ArrowLeft size={20} aria-hidden="true" /> Selected Work
            </span>
          </Link>
          <Link
            href="/work/crunchtime-fitness"
            className="group flex min-h-32 flex-col justify-center border-b border-[#d8ccc4] py-8 outline-none focus-visible:ring-2 focus-visible:ring-[#7a513f] md:border-b-0 md:border-r md:px-8"
          >
            <span className="font-mono text-xs tracking-[0.16em] text-[#332d29]/45 uppercase">
              Previous Project
            </span>
            <span className="mt-2 text-xl font-bold transition-colors group-hover:text-[#7a513f]">
              CrunchTime Fitness
            </span>
          </Link>
          <Link
            href="/work/graphic-design/logo-branding-collection"
            className="group flex min-h-32 flex-col justify-center py-8 outline-none focus-visible:ring-2 focus-visible:ring-[#7a513f] md:pl-8 md:text-right"
          >
            <span className="font-mono text-xs tracking-[0.16em] text-[#332d29]/45 uppercase">
              Next Project
            </span>
            <span className="mt-2 flex items-center gap-3 text-xl font-bold transition-colors group-hover:text-[#7a513f] md:justify-end">
              Logo &amp; Brand Identity Collection
              <ArrowRight size={20} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </nav>

      <section className="bg-[#3b2b25] px-6 py-24 text-center text-white md:py-32">
        <div className="container mx-auto max-w-4xl">
          <Sparkles size={38} aria-hidden="true" className="mx-auto mb-8" />
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Building a commerce experience that needs both design and
            development?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/72">
            I design and build responsive digital products—from product strategy
            and UI/UX to reusable frontend implementation and launch
            preparation.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center bg-white px-8 py-3 font-medium text-[#3b2b25] transition-colors hover:bg-[#e7d8cd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#3b2b25]"
            >
              Start a Project
            </Link>
            <Link
              href="/work"
              className="inline-flex min-h-12 items-center justify-center border border-white/55 px-8 py-3 font-medium text-white transition-colors hover:bg-white hover:text-[#3b2b25] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#3b2b25]"
            >
              View More Work
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
