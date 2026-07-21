import { type ReactNode, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Gauge,
  Layers3,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { Link } from "wouter";

import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const challenges = [
  {
    title: "Complex catalog structure",
    copy: "The store spans apparel, complete skateboards, decks, trucks, wheels, shoes, protection, accessories, tools, hardware, and multiple brands.",
  },
  {
    title: "Product discovery",
    copy: "Customers needed understandable ways to narrow products by category, brand, price, color, size, sorting, and display preference.",
  },
  {
    title: "Different product information",
    copy: "A skateboard deck, hoodie, shoe, and protective item each need different imagery, specifications, variations, and supporting information.",
  },
  {
    title: "Responsive navigation",
    copy: "The large desktop navigation and mega-menu needed a smaller-screen strategy without hiding important product categories.",
  },
  {
    title: "Cart transparency",
    copy: "Quantity, individual prices, subtotals, shipping, tax, service charges, promotions, and final totals needed a clear hierarchy.",
  },
  {
    title: "Post-purchase confidence",
    copy: "The confirmation experience needed to reassure customers that the order was received and summarize the selected products and costs.",
  },
];

const goals = [
  "Create a strong skate and streetwear brand experience",
  "Organize a broad product catalog",
  "Support category and brand discovery",
  "Make navigation and search easy to understand",
  "Present a useful mega-menu",
  "Support sorting and grouped filters",
  "Support brand, price, color, and size filtering",
  "Provide consistent product cards",
  "Clearly distinguish sale and original prices",
  "Present detailed product galleries and options",
  "Support quantity, Add to Cart, and Wishlist actions",
  "Make cart totals and charges easy to understand",
  "Support optional promo-code entry",
  "Provide a clear order-confirmation experience",
  "Build reusable responsive components",
  "Support keyboard and touch interaction",
  "Optimize image-heavy product pages",
  "Prepare the project for development and launch",
];

const contributions = [
  {
    number: "01",
    title: "Product Strategy",
    items: [
      "Store and category hierarchy",
      "Brand structure",
      "Product-discovery flows",
      "Product-detail hierarchy",
      "Cart and confirmation journeys",
      "Responsive priorities",
    ],
  },
  {
    number: "02",
    title: "Information Architecture",
    items: [
      "Skate and longboards",
      "Apparel and shoes",
      "Protection and accessories",
      "Brands and sale",
      "Search, account, and wishlist",
      "Cart and order structure",
    ],
  },
  {
    number: "03",
    title: "UI/UX Design",
    items: [
      "Homepage and campaign panels",
      "Navigation and mega-menu",
      "Product listing and filters",
      "Product detail and options",
      "Cart and promo-code flow",
      "Order confirmation",
    ],
  },
  {
    number: "04",
    title: "Responsive Design",
    items: [
      "Desktop and tablet layouts",
      "Mobile navigation strategy",
      "Responsive product grids",
      "Touch-friendly controls",
      "Cart stacking",
      "Image-ratio handling",
    ],
  },
  {
    number: "05",
    title: "Design System",
    items: [
      "Typography and neutral palette",
      "Buttons and product cards",
      "Sale, rating, and price states",
      "Swatches and size controls",
      "Filters, tabs, and accordions",
      "Summary and form patterns",
    ],
  },
  {
    number: "06",
    title: "Frontend Planning",
    items: [
      "Reusable layout components",
      "Responsive navigation",
      "Product-grid patterns",
      "Filter and option states",
      "Cart calculation requirements",
      "SEO and image strategy",
    ],
  },
  {
    number: "07",
    title: "QA and Launch",
    items: [
      "Responsive and browser review",
      "Keyboard and route checks",
      "Image and interaction verification",
      "Accessibility review",
      "Performance review",
      "Build and launch preparation",
    ],
  },
];

const process = [
  {
    stage: "01",
    title: "Discover",
    copy: "Mapped customer needs, store categories, common skate-product attributes, brand browsing, filtering behavior, and important purchase decisions.",
  },
  {
    stage: "02",
    title: "Structure",
    copy: "Organized the experience around homepage discovery, category navigation, mega-menu browsing, listings, filters, product details, cart management, and confirmation.",
  },
  {
    stage: "03",
    title: "Design",
    copy: "Created a clean monochrome interface that lets skate photography, products, brands, and key purchase actions remain visually dominant.",
  },
  {
    stage: "04",
    title: "Prototype",
    copy: "Connected campaign discovery, category browsing, filtering, product selection, quantity changes, cart review, promo entry, checkout entry, and confirmation.",
  },
  {
    stage: "05",
    title: "Develop",
    copy: "Prepared reusable responsive components and documented only the commerce functionality that can be verified from supplied source materials.",
  },
  {
    stage: "06",
    title: "Test and Prepare",
    copy: "Reviewed responsive layouts, interactions, accessibility, direct routes, image loading, performance, build quality, and launch readiness.",
  },
];

const homepageFeatures = [
  "Warranty, return, and rating announcement bar",
  "MDCN identity and prominent product search",
  "Language, account, wishlist, and cart utilities",
  "Category, sale, and brand navigation",
  "Trustpilot presentation visible in the supplied design",
  "Skate and apparel campaign panels",
  "Brand-logo strip and New Arrivals",
  "Product cards with sale, price, color, and size states",
];

const megaMenuGroups = [
  {
    title: "Complete Setups",
    items: [
      "Skateboard completes",
      "Cruiser boards",
      "Surfskates",
      "Mini cruisers",
    ],
  },
  {
    title: "Parts and Components",
    items: ["Skateboard decks", "Shape decks", "Trucks", "Hardware"],
  },
  {
    title: "Accessories",
    items: [
      "Griptape",
      "Shaped decks and accessories",
      "Supporting truck categories",
      "Product imagery and View All",
    ],
  },
];

const listingFeatures = [
  "Category hierarchy and supporting groups",
  "Brand checkboxes",
  "Price range",
  "Color swatches",
  "Size filters",
  "Clear All Filter",
  "Brand, price, size, and color dropdowns",
  "Popularity sorting",
  "Grid and list controls",
  "Responsive product grids and pagination",
];

const productDetailFeatures = [
  "Breadcrumb navigation",
  "Primary image and supporting gallery",
  "Rating and review count shown as design content",
  "Product name, price, color, and size",
  "Quantity control",
  "Add to Cart and Add to Wishlist",
  "Delivery, return, and warranty messages",
  "Description, Care Guide, and Product Data tabs",
  "Related Products",
];

const cartFeatures = [
  "Individual selection and Select All",
  "Product thumbnail, name, and order reference",
  "Unit price and product subtotal",
  "Quantity decrement and increment",
  "Delete action",
  "Subtotal, shipping, VAT, and service charges",
  "Optional promo-code entry",
  "Final total and checkout entry",
];

const confirmationFeatures = [
  "Clear success state",
  "Purchased product list",
  "Product thumbnails and names",
  "Order references shown as design content",
  "Individual prices",
  "Subtotal, tax, discount, and shipping",
  "Grand total",
  "Continue Shopping action",
];

const componentAnatomy = [
  "Product image",
  "Sale badge",
  "Product title",
  "Original and current price",
  "Color swatches",
  "Size preview",
  "Wishlist action where visible",
  "Product-detail link",
  "Rating where applicable",
  "Hover and focus states",
];

const architecture = [
  {
    title: "Primary navigation",
    items: [
      "Skate",
      "Apparel",
      "Protection",
      "Long",
      "Shoes",
      "Stuff",
      "Sale",
      "Brands",
    ],
  },
  {
    title: "Utility navigation",
    items: ["Search", "Language", "Account", "Wishlist", "Cart"],
  },
  {
    title: "Core journeys",
    items: [
      "Campaign to collection",
      "Mega-menu to category",
      "Search to product",
      "Category to filtered listing",
      "Product card to detail",
      "Product detail to cart",
      "Cart to checkout entry",
      "Confirmation to continued shopping",
    ],
  },
];

const commercePrinciples = [
  "Search remains highly visible",
  "Categories match how customers shop",
  "Filters support a broad catalog",
  "Sale prices remain visually distinct",
  "Color and size options stay clear",
  "Quantity changes are reversible",
  "Cart totals are transparent in the designed flow",
  "Tax and shipping appear before checkout",
  "Promo codes remain optional",
  "Purchase actions stay prominent",
  "Return and warranty information is visible",
  "Every state provides a clear next action",
];

const responsiveGroups = [
  {
    title: "Desktop",
    items: [
      "Full search and utility navigation",
      "Category navigation and mega-menu",
      "Four-column product grids",
      "Sidebar or top filters",
      "Multi-image product gallery",
      "Side-by-side cart summary",
    ],
  },
  {
    title: "Tablet",
    items: [
      "Reduced navigation density",
      "Compact product grids",
      "Simplified mega-menu",
      "Rebalanced product gallery",
      "Stacked or compact cart summary",
    ],
  },
  {
    title: "Mobile",
    items: [
      "Collapsed navigation with accessible search",
      "Filter sheet and visible sorting",
      "One- or two-column product grid",
      "Touch-friendly swatches and sizes",
      "Full-width purchase actions",
      "Stacked items with no hidden prices",
    ],
  },
];

const accessibility = [
  "Semantic navigation and heading order",
  "Search and filter labels",
  "Keyboard-accessible cards and menu requirements",
  "Checkbox, range, color, and size labels",
  "Selected states reinforced beyond color",
  "Wishlist, quantity, and delete labels",
  "Accessible tab and accordion requirements",
  "Visible focus states",
  "Descriptive image alternatives",
  "Sufficient contrast and practical touch targets",
  "Reduced-motion support",
  "Errors and success states understandable without color alone",
];

const performance = [
  "Responsive image sizing requirements",
  "Modern image formats where supported",
  "Priority loading for the case-study cover",
  "Lazy loading for every image below the hero",
  "Explicit image dimensions",
  "Stable aspect ratios and reduced layout shift",
  "Efficient product-grid rendering requirements",
  "Route splitting where the storefront stack supports it",
  "No base64 embedding of large imagery",
  "No duplicate screenshot downloads",
  "Mobile-friendly image-delivery planning",
  "Reduced unnecessary animation",
];

const responsibleDesign = [
  "Original and sale prices remain distinguishable",
  "Shipping and tax are visible in the designed summary",
  "Quantity remains user controlled",
  "Items can be removed",
  "Promo codes are optional",
  "Warranty and return information remains visible",
  "Destructive actions require clear intent",
  "Customer and order information must remain private",
  "Checkout wording must not imply payment before confirmation",
  "Ratings are not presented as portfolio outcomes",
  "Product availability is not misrepresented",
];

const launchPreparation = [
  "Responsive QA",
  "Browser and keyboard testing",
  "Navigation and mega-menu testing",
  "Filter and sorting checks",
  "Product-option and quantity checks",
  "Cart-calculation validation where implemented",
  "Promo-code validation where implemented",
  "Direct-route refresh",
  "Image loading and error-state review",
  "Production build",
  "Accessibility and performance review",
  "SEO metadata and Open Graph image",
  "Domain and deployment preparation",
  "Privacy and legal review where applicable",
];

function SectionLabel({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "mb-6 flex items-center gap-3 font-mono text-xs tracking-[0.18em] uppercase",
        dark ? "text-white/58" : "text-[#555]",
      )}
    >
      <span
        className={cn("h-px w-8", dark ? "bg-white/65" : "bg-[#111]")}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
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
            dark ? "text-white/72" : "text-[#222]/70",
          )}
        >
          <span
            className={cn(
              "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
              dark
                ? "border-white/30 text-white"
                : "border-[#111]/30 text-[#111]",
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
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden border border-[#d5d5d5] bg-[#f2f2f2] shadow-2xl shadow-black/8",
        className,
      )}
    >
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
      <figcaption className="border-t border-[#d5d5d5] bg-white px-5 py-4 font-mono text-[0.68rem] tracking-[0.12em] text-[#555] uppercase">
        {caption}
      </figcaption>
    </figure>
  );
}

function InfoCards({
  items,
}: {
  items: Array<{ title: string; copy: string }>;
}) {
  return (
    <div className="grid gap-px border border-[#d8d8d8] bg-[#d8d8d8] md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <Reveal
          key={item.title}
          delay={index * 0.035}
          className="bg-white p-7 md:p-8"
        >
          <div className="font-mono text-[0.65rem] tracking-[0.16em] text-[#777] uppercase">
            {String(index + 1).padStart(2, "0")}
          </div>
          <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
          <p className="mt-3 leading-relaxed text-[#222]/66">{item.copy}</p>
        </Reveal>
      ))}
    </div>
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

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  const previous = element.getAttribute("content");
  element.setAttribute("content", content);

  return () => {
    if (previous === null) {
      element?.remove();
    } else {
      element?.setAttribute("content", previous);
    }
  };
}

export default function MdcnDistributionCaseStudy({
  project,
}: {
  project: Project;
}) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const previousTitle = document.title;
    const title =
      "MDCN Distribution — E-commerce UI/UX and Frontend Development Case Study";
    const description =
      "A complete design-to-development case study for MDCN Distribution, covering skate and streetwear e-commerce strategy, responsive UI/UX, category navigation, mega menus, product filtering, product details, cart management, order confirmation, frontend development, accessibility, performance, and launch preparation.";
    const image = `${window.location.origin}/projects/mdcn-distribution/mdcn-cover.png`;

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
    <article className="w-full overflow-x-hidden bg-[#f7f7f5] text-[#111]">
      <header className="relative overflow-hidden bg-[#0b0b0b] px-6 pt-12 pb-20 text-white md:pt-16 md:pb-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
        <div className="container relative mx-auto max-w-7xl">
          <Link
            href="/work"
            className="inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-[0.14em] text-white/58 uppercase transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ArrowLeft size={15} aria-hidden="true" /> Back to Selected Work
          </Link>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="font-mono text-xs tracking-[0.18em] text-white/50 uppercase">
                Skate Commerce · Responsive E-commerce · Design to Development
              </div>
              <h1 className="mt-7 text-6xl font-bold tracking-[-0.055em] sm:text-7xl lg:text-[7rem] lg:leading-[0.86]">
                MDCN
                <br />
                Distribution
              </h1>
              <p className="mt-8 max-w-3xl text-3xl leading-tight font-light tracking-[-0.025em] text-white/92 md:text-5xl">
                A complete commerce experience built for skate culture.
              </p>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed font-light text-white/62">
                MDCN Distribution is a responsive e-commerce platform designed
                for skateboarding, streetwear, apparel, protective equipment,
                footwear, accessories, and lifestyle products. The experience
                connects brand-led discovery with filtering, product evaluation,
                cart management, promotional pricing, and a clear
                order-confirmation journey.
              </p>
            </motion.div>

            <div className="grid gap-px border border-white/12 bg-white/12 sm:grid-cols-2">
              {[
                ["Role", project.role],
                [
                  "Disciplines",
                  "Product Strategy · Responsive UI/UX · Frontend Development",
                ],
                ["Platforms", project.platform ?? "Responsive Web"],
                ["Industry", project.industry],
                ["Year", project.year ?? "2026"],
                [
                  "Services",
                  "Experience Strategy · E-commerce UI/UX · Design System · Development",
                ],
                [
                  "Technology",
                  "Storefront stack not verified from supplied source",
                ],
              ].map(([label, value]) => (
                <div key={label} className="bg-[#111] p-5">
                  <div className="font-mono text-[0.64rem] tracking-[0.16em] text-white/42 uppercase">
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
              src="/projects/mdcn-distribution/mdcn-cover.png"
              alt="MDCN Distribution e-commerce case-study cover showing the skate and streetwear homepage on a laptop with product, product-detail, cart, and order-confirmation interface previews."
              width={1672}
              height={941}
              caption="MDCN Distribution · Responsive skate and streetwear commerce platform"
              priority
            />
          </Reveal>

          <div
            aria-label="Project expertise"
            className="mt-8 flex flex-wrap gap-2"
          >
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="border border-white/18 px-3 py-1.5 font-mono text-[0.67rem] text-white/62"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <SectionLabel>Overview</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Connecting skate culture with a practical modern shopping system.
            </h2>
          </Reveal>
          <Reveal className="space-y-6 text-lg leading-relaxed text-[#222]/68">
            <p>
              Skate and streetwear customers shop across complete skateboards,
              decks, trucks, wheels, bearings, apparel, shoes, safety equipment,
              tools, bags, hardware, and accessories.
            </p>
            <p>
              MDCN Distribution organizes that broad catalog without losing the
              visual energy of the brand. Customers can discover collections,
              explore brands, narrow products using filters, compare options,
              review product information, manage a cart, apply promotions, and
              move through one connected purchase journey.
            </p>
            <p className="border-l-2 border-[#111] pl-6 text-2xl leading-snug text-[#111]">
              The goal was to combine expressive lifestyle storytelling with the
              clarity required for a large and varied product catalog.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[#d8d8d8] bg-white px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="mb-14 max-w-4xl">
            <SectionLabel>The Challenge</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Making a broad product catalog feel focused and easy to navigate.
            </h2>
          </Reveal>
          <InfoCards items={challenges} />
        </div>
      </section>

      <section className="bg-[#111] px-6 py-24 text-white md:py-32">
        <div className="container mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <SectionLabel dark>Goals</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              What the complete platform needed to achieve.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/58">
              The product direction balanced cultural expression, commerce
              clarity, scalable components, and responsive behavior without
              relying on fabricated business metrics.
            </p>
          </Reveal>
          <Reveal>
            <CheckList items={goals} columns dark />
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="mb-14 max-w-4xl">
            <SectionLabel>My Contribution</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Designing the complete journey from collection discovery to order
              confirmation.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#222]/68">
              My work covered product strategy, information architecture,
              responsive UI/UX, navigation, discovery, filtering, product cards,
              product details, cart interactions, confirmation, reusable
              frontend planning, testing, and launch preparation.
            </p>
          </Reveal>
          <div className="grid gap-px border border-[#d8d8d8] bg-[#d8d8d8] md:grid-cols-2 lg:grid-cols-3">
            {contributions.map((item, index) => (
              <Reveal
                key={item.number}
                delay={index * 0.035}
                className="bg-white p-7"
              >
                <div className="font-mono text-xs tracking-[0.16em] text-[#777]">
                  {item.number}
                </div>
                <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>
                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-[#222]/62">
                  {item.items.map((entry) => (
                    <li key={entry}>— {entry}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8d8d8] bg-white px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="mb-14 max-w-4xl">
            <SectionLabel>Process</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              From product taxonomy to a complete commerce journey.
            </h2>
          </Reveal>
          <div className="grid gap-px bg-[#d8d8d8] md:grid-cols-2 lg:grid-cols-3">
            {process.map((item, index) => (
              <Reveal
                key={item.stage}
                delay={index * 0.04}
                className="bg-[#f7f7f5] p-8"
              >
                <div className="font-mono text-xs tracking-[0.16em] text-[#777]">
                  STAGE {item.stage}
                </div>
                <h3 className="mt-5 text-3xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-[#222]/65">
                  {item.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <SectionLabel>01 · Brand and Product Discovery</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                A homepage that connects lifestyle storytelling with a large
                product catalog.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-[#222]/68">
                The homepage uses two complementary entry points. Large campaign
                panels create emotional discovery, while search, categories,
                brands, and product cards support direct shopping.
              </p>
              <div className="mt-7">
                <CheckList items={homepageFeatures} columns />
              </div>
            </div>
          </Reveal>
          <Reveal className="mt-14">
            <MediaPanel
              src="/projects/mdcn-distribution/mdcn-homepage.png"
              alt="MDCN Distribution homepage showing skate and apparel collection campaigns, category navigation, brand logos, and New Arrivals product cards."
              width={1326}
              height={1073}
              caption="Homepage directions · Campaign storytelling, mega-menu, brands, and New Arrivals"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[#d8d8d8] bg-[#111] px-6 py-24 text-white md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel dark>02 · Navigation System</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                Helping customers move across a complex skate catalog.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/58">
                Categories are grouped by customer intent. Icons, descriptions,
                imagery, and a View All path reduce reliance on specialist
                terminology. The supplied materials verify the designed
                structure, not live link behavior.
              </p>
            </div>
            <div className="grid gap-px bg-white/12 sm:grid-cols-3">
              {megaMenuGroups.map((group) => (
                <div key={group.title} className="bg-[#181818] p-7">
                  <h3 className="text-xl font-bold">{group.title}</h3>
                  <ul className="mt-5 space-y-3 text-sm text-white/60">
                    {group.items.map((item) => (
                      <li key={item}>— {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <SectionLabel>03 · Product Discovery</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                Powerful filtering without turning the page into a control
                panel.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-[#222]/68">
                The supplied listing study compares a detailed sidebar with a
                compact top-filter direction. Both preserve dominant product
                imagery, readable price hierarchy, visible active controls, and
                a clear way to reset the browsing state.
              </p>
              <div className="mt-7">
                <CheckList items={listingFeatures} columns />
              </div>
            </div>
          </Reveal>
          <Reveal className="mt-14">
            <MediaPanel
              src="/projects/mdcn-distribution/mdcn-products.png"
              alt="MDCN Distribution product-listing page showing skateboard products, category filters, brand filters, price controls, color filters, size filters, sorting, and grid-layout options."
              width={1303}
              height={1088}
              caption="Product listing · Sidebar and top-filter directions"
            />
          </Reveal>
          <p className="mt-5 text-sm leading-relaxed text-[#222]/52">
            Filter result logic, inventory counts, and live sorting are not
            claimed as implemented because storefront source was not supplied.
          </p>
        </div>
      </section>

      <section className="border-y border-[#d8d8d8] bg-white px-6 py-24 md:py-32">
        <div className="container mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <MediaPanel
              src="/projects/mdcn-distribution/mdcn-product-detail.png"
              alt="MDCN Distribution skateboard product-detail page showing product gallery, reviews, color options, sizes, quantity, Add to Cart, Wishlist, product information tabs, and related products."
              width={642}
              height={935}
              caption="Product detail · Options, policies, information, and related products"
              className="mx-auto max-w-2xl"
            />
          </Reveal>
          <Reveal>
            <SectionLabel>04 · Product Detail</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Giving customers the context required to choose technical products
              confidently.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#222]/68">
              Images remain the primary source of product understanding, while
              price and option controls stay grouped. Policy information appears
              near the purchase action, technical content remains available in
              tabs, and related products support continued browsing.
            </p>
            <div className="mt-8">
              <CheckList items={productDetailFeatures} columns />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-[#222]/52">
              Rating and review values visible in the screenshot are treated as
              interface content, not verified customer or portfolio results.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionLabel>05 · Cart Management</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                Keeping product changes and final costs understandable before
                checkout.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-[#222]/68">
                Quantity controls remain close to each product, delete actions
                are separated from primary controls, charges are visible before
                checkout, promo codes remain optional, and the final total is
                deliberately emphasized.
              </p>
              <div className="mt-7">
                <CheckList items={cartFeatures} columns />
              </div>
            </div>
          </Reveal>
          <Reveal className="mt-14">
            <MediaPanel
              src="/projects/mdcn-distribution/mdcn-cart.png"
              alt="MDCN Distribution cart page showing selected products, quantity controls, delete actions, prices, subtotals, shipping, VAT, service charges, promo-code entry, total, and checkout action."
              width={1305}
              height={895}
              caption="Cart management · Products, quantities, charges, promotion, and checkout entry"
            />
          </Reveal>
          <p className="mt-5 text-sm text-[#222]/52">
            Payment processing and live checkout are not presented as verified
            implementation.
          </p>
        </div>
      </section>

      <section className="border-y border-[#d8d8d8] bg-white px-6 py-24 md:py-32">
        <div className="container mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal className="lg:order-2">
            <MediaPanel
              src="/projects/mdcn-distribution/mdcn-order-confirmation.png"
              alt="MDCN Distribution order-confirmation page showing a success state, purchased products, order references, price summary, grand total, and Continue Shopping action."
              width={1192}
              height={1108}
              caption="Post-purchase confirmation · Products, costs, and a clear next step"
            />
          </Reveal>
          <Reveal className="lg:order-1">
            <SectionLabel>06 · Post-Purchase Experience</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Reassuring customers that their order has been received.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#222]/68">
              Confirmation is immediate, purchased items remain visible, the
              cost breakdown stays available, and Continue Shopping gives the
              customer a clear next action instead of a blank success state.
            </p>
            <div className="mt-8">
              <CheckList items={confirmationFeatures} />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-[#222]/52">
              Email confirmation, tracking, payment settlement, and fulfillment
              workflows are not verified from the supplied source.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#111] px-6 py-24 text-white md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <SectionLabel dark>Product Components</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                A reusable card system for skateboards, apparel, shoes, and
                accessories.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/58">
                Consistent image ratios, flexible content, readable prices,
                restrained sale states, large targets, and responsive grids
                allow one component family to support varied products.
              </p>
            </div>
            <CheckList items={componentAnatomy} columns dark />
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="mb-14 max-w-4xl">
            <SectionLabel>Commerce Architecture</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              A store structure designed for both experienced skaters and new
              customers.
            </h2>
          </Reveal>
          <div className="grid gap-px border border-[#d8d8d8] bg-[#d8d8d8] md:grid-cols-3">
            {architecture.map((group) => (
              <Reveal key={group.title} className="bg-white p-8">
                <h3 className="text-2xl font-bold">{group.title}</h3>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[#222]/64">
                  {group.items.map((item) => (
                    <li key={item}>— {item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-[#222]/52">
            Search, account, wishlist, checkout, and live cart behavior are
            described as designed flows unless implementation can be verified
            from product source.
          </p>
        </div>
      </section>

      <section className="border-y border-[#d8d8d8] bg-white px-6 py-24 md:py-32">
        <div className="container mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionLabel>Visual System</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              A neutral commerce interface that lets products and culture lead.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#222]/68">
              White surfaces, black announcement and identity elements, charcoal
              copy, light product backgrounds, thin borders, editorial display
              headings, clean interface typography, and large imagery form the
              core language.
            </p>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["Black", "bg-black"],
                ["White", "bg-white"],
                ["Concrete", "bg-[#d9d9d7]"],
                ["Charcoal", "bg-[#353535]"],
                ["Sale", "bg-[#ff4b4b]"],
                ["Trust", "bg-[#00b67a]"],
                ["Selected", "bg-[#1687ff]"],
                ["Surface", "bg-[#f2f2f2]"],
              ].map(([label, swatch]) => (
                <div
                  key={label}
                  className="border border-[#d8d8d8] bg-white p-3"
                >
                  <div
                    className={cn(
                      "aspect-square border border-black/10",
                      swatch,
                    )}
                  />
                  <div className="mt-3 font-mono text-[0.65rem] tracking-[0.12em] text-[#555] uppercase">
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-[#222]/52">
              Color labels describe the visible design language; exact brand
              values and font families are not claimed without source tokens.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#111] px-6 py-24 text-white md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="mb-14 max-w-4xl">
            <SectionLabel dark>Development</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Turning a large commerce design into reusable responsive
              components.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/58">
              The supplied project package contains visual assets rather than
              storefront source code. The implementation status below stays
              deliberately explicit.
            </p>
          </Reveal>
          <div className="grid gap-px bg-white/12 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Implemented",
                title: "Not source-verifiable",
                copy: "No MDCN storefront repository was supplied, so framework, state logic, routes, APIs, checkout, payment, inventory, and authentication are not claimed as complete.",
              },
              {
                label: "Designed",
                title: "Complete commerce journey",
                copy: "Homepage, mega-menu, listing, filters, product detail, cart, promotion entry, checkout entry, confirmation, and responsive states are represented in the supplied designs.",
              },
              {
                label: "Development-ready",
                title: "Reusable component plan",
                copy: "Navigation, grids, cards, filters, swatches, sizes, quantity controls, tabs, summary panels, and route requirements are documented for implementation.",
              },
              {
                label: "Planned",
                title: "Future integrations",
                copy: "Commerce API, inventory, customer accounts, search, wishlist persistence, tax, shipping, promotions, payment, tracking, and fulfillment require product-source verification.",
              },
            ].map((item) => (
              <Reveal key={item.label} className="bg-[#181818] p-7">
                <div className="font-mono text-[0.64rem] tracking-[0.16em] text-white/38 uppercase">
                  {item.label}
                </div>
                <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-white/58">
                  {item.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <SectionLabel>Commerce Experience</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Reducing friction while preserving product detail and pricing
              clarity.
            </h2>
          </Reveal>
          <Reveal>
            <CheckList items={commercePrinciples} columns />
            <p className="mt-7 text-sm leading-relaxed text-[#222]/52">
              Full tax, shipping, inventory, promotion, and payment behavior
              remains unverified until connected product source is available.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[#d8d8d8] bg-white px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="mb-14 max-w-4xl">
            <SectionLabel>Responsive System</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              A complex store adapted for smaller screens without losing
              clarity.
            </h2>
          </Reveal>
          <div className="grid gap-px border border-[#d8d8d8] bg-[#d8d8d8] md:grid-cols-3">
            {responsiveGroups.map((group) => (
              <Reveal key={group.title} className="bg-[#f7f7f5] p-8">
                <h3 className="text-3xl font-bold">{group.title}</h3>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[#222]/64">
                  {group.items.map((item) => (
                    <li key={item}>— {item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#222]/52">
            These are the documented responsive requirements for the MDCN
            storefront; this portfolio case-study route is verified separately
            across the requested viewport widths.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-3">
          <Reveal className="border border-[#d8d8d8] bg-white p-8">
            <ShieldCheck size={34} aria-hidden="true" />
            <SectionLabel>Accessible Commerce</SectionLabel>
            <h2 className="text-3xl font-bold">Usable beyond visual design.</h2>
            <div className="mt-7">
              <CheckList items={accessibility} />
            </div>
          </Reveal>
          <Reveal className="border border-[#d8d8d8] bg-white p-8">
            <Gauge size={34} aria-hidden="true" />
            <SectionLabel>Performance</SectionLabel>
            <h2 className="text-3xl font-bold">
              Supporting image-rich commerce.
            </h2>
            <div className="mt-7">
              <CheckList items={performance} />
            </div>
          </Reveal>
          <Reveal className="border border-[#d8d8d8] bg-white p-8">
            <ShoppingBag size={34} aria-hidden="true" />
            <SectionLabel>Responsible Design</SectionLabel>
            <h2 className="text-3xl font-bold">
              Clear pricing and user-controlled actions.
            </h2>
            <div className="mt-7">
              <CheckList items={responsibleDesign} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[#d8d8d8] bg-[#111] px-6 py-24 text-white md:py-32">
        <div className="container mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <SectionLabel dark>Launch Preparation</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Preparing the commerce experience for dependable real-world use.
            </h2>
            <div className="mt-8 inline-flex items-center gap-3 border border-white/20 px-5 py-3 font-mono text-sm tracking-[0.12em] uppercase">
              <Sparkles size={18} aria-hidden="true" />
              Prepared for launch.
            </div>
          </Reveal>
          <Reveal>
            <CheckList items={launchPreparation} columns dark />
            <p className="mt-7 text-sm leading-relaxed text-white/42">
              Public launch, production commerce configuration, and live store
              integrations are not claimed without a verified product URL and
              source repository.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>The Solution</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              One connected journey from skate discovery to order confirmation.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#222]/68">
              The final MDCN Distribution direction connects campaign
              storytelling, category discovery, brand navigation, filtering,
              reusable product cards, product evaluation, cart management,
              promotion handling, checkout entry, and confirmation through one
              consistent responsive design system.
            </p>
            <div className="mt-8">
              <CheckList
                items={[
                  "Clearer organization of a broad catalog",
                  "Stronger connection between culture and commerce",
                  "More focused product discovery",
                  "More complete product-detail presentation",
                  "Transparent cart and pricing structure",
                  "Clear post-purchase confirmation",
                  "Reusable frontend foundation",
                  "Responsive support across major screen sizes",
                ]}
              />
            </div>
          </Reveal>
          <Reveal>
            <SectionLabel>Outcome</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              A complete e-commerce foundation—from product architecture to
              frontend delivery.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#222]/68">
              MDCN Distribution demonstrates a complete design-to-development
              approach rather than a single homepage concept. The project
              combines strategy, information architecture, responsive UI/UX,
              mega-menu navigation, discovery, filtering, product detail, cart,
              confirmation, reusable component planning, accessibility,
              performance, testing, and launch preparation.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-3" aria-hidden="true">
              <div className="h-1 bg-black" />
              <div className="h-1 bg-[#ff4b4b]" />
              <div className="h-1 bg-[#00b67a]" />
            </div>
          </Reveal>
        </div>
      </section>

      <nav
        aria-label="Case study navigation"
        className="border-y border-[#d8d8d8] bg-white px-6"
      >
        <div className="container mx-auto grid max-w-6xl md:grid-cols-3">
          <Link
            href="/work"
            className="group flex min-h-32 flex-col justify-center border-b border-[#d8d8d8] py-8 outline-none focus-visible:ring-2 focus-visible:ring-[#111] md:border-b-0 md:border-r md:pr-8"
          >
            <span className="font-mono text-xs tracking-[0.16em] text-[#555] uppercase">
              Back to
            </span>
            <span className="mt-2 flex items-center gap-3 text-xl font-bold transition-colors group-hover:text-[#555]">
              <ArrowLeft size={20} aria-hidden="true" /> Selected Work
            </span>
          </Link>
          <Link
            href="/work/fintech-dashboard"
            className="group flex min-h-32 flex-col justify-center border-b border-[#d8d8d8] py-8 outline-none focus-visible:ring-2 focus-visible:ring-[#111] md:border-b-0 md:border-r md:px-8"
          >
            <span className="font-mono text-xs tracking-[0.16em] text-[#555] uppercase">
              Previous Project
            </span>
            <span className="mt-2 text-xl font-bold transition-colors group-hover:text-[#555]">
              Aura Financial
            </span>
          </Link>
          <Link
            href="/work/planit-prep"
            className="group flex min-h-32 flex-col justify-center py-8 outline-none focus-visible:ring-2 focus-visible:ring-[#111] md:pl-8 md:text-right"
          >
            <span className="font-mono text-xs tracking-[0.16em] text-[#555] uppercase">
              Next Project
            </span>
            <span className="mt-2 flex items-center gap-3 text-xl font-bold transition-colors group-hover:text-[#555] md:justify-end">
              Planit Prep 2.0 <ArrowRight size={20} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </nav>

      <section className="bg-[#111] px-6 py-24 text-center text-white md:py-32">
        <div className="container mx-auto max-w-4xl">
          <Layers3 size={38} aria-hidden="true" className="mx-auto mb-8" />
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Building a commerce product that needs both design and development?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed font-light text-white/68">
            I design and build responsive digital products—from product strategy
            and e-commerce UI/UX to reusable frontend implementation and launch
            preparation.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center bg-white px-8 py-3 font-medium text-[#111] transition-colors hover:bg-[#e6e6e6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#111]"
            >
              Start a Project
            </Link>
            <Link
              href="/work"
              className="inline-flex min-h-12 items-center justify-center border border-white/45 px-8 py-3 font-medium text-white transition-colors hover:bg-white hover:text-[#111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#111]"
            >
              View More Work
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
