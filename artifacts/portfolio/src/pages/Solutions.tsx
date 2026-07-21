import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowDown,
  ArrowRight,
  Check,
  CircleDot,
  Compass,
  Layers3,
  Sparkles,
} from "lucide-react";
import EditorialReveal from "@/components/brand/EditorialReveal";
import SolutionFinder from "@/components/brand/SolutionFinder";
import { BRAND_DIMENSIONS, VERIFIED_INDUSTRIES } from "@/data/brand";
import { usePageMetadata } from "@/lib/use-page-metadata";

const startingPoints = [
  {
    challenge: "I have an idea but do not know where to start.",
    solution: "Product Strategy and Concept Development",
    href: "#product-strategy",
  },
  {
    challenge:
      "My product exists, but the experience is confusing or outdated.",
    solution: "UX Audit and Product Redesign",
    href: "#product-design",
  },
  {
    challenge: "I need a complete mobile application.",
    solution: "Mobile Product Design and Development",
    href: "#mobile-applications",
  },
  {
    challenge: "I need a website, platform, or web application.",
    solution: "Website and Web Application Design and Development",
    href: "#web-products",
  },
  {
    challenge: "My business needs a professional brand.",
    solution: "Brand Identity and Graphic Design",
    href: "#branding",
  },
  {
    challenge:
      "My product is nearly complete, but I need help preparing it for launch.",
    solution: "Product Refinement, QA, Launch Preparation, and Growth Support",
    href: "#launch",
  },
] as const;

const solutions = [
  {
    id: "product-strategy",
    number: "01",
    title: "Product Strategy and Idea Development",
    headline: "Turn an early idea into a clear, buildable product.",
    bestFor: [
      "Founders with an early idea",
      "Businesses exploring a new digital product",
      "Clients with unclear requirements",
      "Products that need stronger positioning",
      "Ideas needing validation before design or development",
    ],
    capabilities: [
      "Product concept clarification",
      "User problem and target-audience definition",
      "Feature prioritization and competitive direction",
      "User flows and information architecture",
      "MVP planning and roadmap preparation",
      "Technical feasibility discussion",
      "Product-positioning recommendations",
    ],
    outcome:
      "A clearer product direction, realistic feature scope, and structured plan ready for design and development.",
    cta: "Develop My Idea",
  },
  {
    id: "product-design",
    number: "02",
    title: "UI/UX and Product Experience Design",
    headline: "Create an experience people can understand and enjoy using.",
    bestFor: [
      "Mobile applications",
      "SaaS platforms and dashboards",
      "AI products",
      "Marketplaces and e-commerce",
      "Healthcare and business tools",
      "Existing products needing redesign",
    ],
    capabilities: [
      "UX research direction and user journeys",
      "User flows and wireframes",
      "High-fidelity responsive UI",
      "Interactive prototypes",
      "Design systems and component libraries",
      "Accessibility considerations",
      "Developer-ready specifications",
      "UX audits and redesign recommendations",
    ],
    outcome:
      "A polished, intuitive, responsive, and development-ready product experience.",
    cta: "Design My Product",
  },
  {
    id: "mobile-applications",
    number: "03",
    title: "Mobile Application Design and Development",
    headline: "From mobile-product concept to launch-ready application.",
    bestFor: [
      "Startup and business applications",
      "Consumer and lifestyle products",
      "Health and wellness tools",
      "Productivity applications",
      "AI-powered applications",
      "Marketplace applications",
    ],
    capabilities: [
      "Product planning and mobile UI/UX",
      "iOS and Android design",
      "React Native, Expo, and TypeScript development",
      "Authentication, profiles, and dashboards",
      "Notifications and API integration",
      "Cloud database integration",
      "Subscription or payment flows where required",
      "Testing, app-build, and store-launch preparation",
    ],
    outcome:
      "One consistent mobile-product journey from strategy and interface design to development and launch preparation.",
    cta: "Build My Mobile App",
  },
  {
    id: "web-products",
    number: "04",
    title: "Website and Web Application Design and Development",
    headline:
      "Build a digital presence that looks credible and works properly.",
    bestFor: [
      "Business and marketing websites",
      "Startup landing pages",
      "SaaS products and dashboards",
      "E-commerce stores",
      "Client portals and marketplaces",
      "AI web products",
    ],
    capabilities: [
      "Website strategy and information architecture",
      "Responsive UI/UX and landing pages",
      "Web applications and dashboards",
      "E-commerce experiences",
      "Reusable React and TypeScript components",
      "API and CMS integration where required",
      "SEO foundations and accessibility",
      "Performance and deployment preparation",
    ],
    outcome:
      "A responsive, polished, scalable website or web product built around the business goal.",
    cta: "Build My Website",
  },
  {
    id: "branding",
    number: "05",
    title: "Brand Identity and Graphic Design",
    headline:
      "Give the product a visual identity people can recognize and trust.",
    bestFor: [
      "New businesses and startup products",
      "Product launches",
      "Existing brands needing improvement",
      "Digital products without a consistent identity",
      "Businesses needing coordinated marketing assets",
    ],
    capabilities: [
      "Brand positioning and logo design",
      "Visual identity, typography, and color systems",
      "Brand guidelines",
      "Icon and app-icon design",
      "Social-media and marketing graphics",
      "Product-launch visuals",
      "Presentation and website visual direction",
      "Packaging direction where relevant",
    ],
    outcome:
      "A consistent identity that connects the product, website, application, and marketing communication.",
    cta: "Create My Brand",
  },
  {
    id: "launch",
    number: "06",
    title: "Product Refinement, Launch, and Growth Support",
    headline: "Move from almost finished to confidently ready.",
    bestFor: [
      "Products close to launch",
      "Products with inconsistent design",
      "Applications needing final QA",
      "Websites needing responsive fixes",
      "Products requiring launch assets",
      "Existing products needing continuous improvement",
    ],
    capabilities: [
      "Final UX and design-consistency review",
      "Responsive and accessibility QA",
      "Development cleanup and bug identification",
      "Performance review",
      "Launch-page and store-visual preparation",
      "Marketing-asset and product presentation",
      "Ownership-transfer preparation",
      "Post-launch improvement planning",
    ],
    outcome:
      "A more complete, consistent, tested, and professionally presented product prepared for release.",
    cta: "Prepare My Product for Launch",
  },
] as const;

const bundles = [
  {
    name: "Foundation",
    recommended:
      "For ideas that need a clear direction before investment in full production.",
    items: [
      "Idea clarity",
      "Product strategy",
      "Initial UX",
      "Brand direction",
      "MVP planning",
    ],
  },
  {
    name: "Design and Build",
    recommended:
      "For teams ready to turn clear requirements into a working experience.",
    items: [
      "Complete UI/UX",
      "Design system",
      "Website or application development",
      "Integration",
      "Testing",
    ],
  },
  {
    name: "Complete Product",
    recommended:
      "For founders who want one partner across the entire product journey.",
    items: [
      "Strategy",
      "Branding",
      "UI/UX",
      "Development",
      "Launch preparation",
      "Continued improvement",
    ],
  },
] as const;

export default function Solutions() {
  usePageMetadata(
    "Digital Product Solutions — 6D Mind",
    "Explore 6D Mind solutions for product strategy, UI/UX design, mobile applications, websites, web applications, branding, graphic design, development, and launch preparation.",
  );
  const [activeStart, setActiveStart] = useState(0);
  const active = startingPoints[activeStart];

  return (
    <article className="bg-background text-foreground">
      <section className="relative overflow-hidden bg-foreground px-6 py-20 text-background md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="container relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.86fr_1.14fr] xl:gap-20">
          <EditorialReveal>
            <div className="font-mono text-xs tracking-[0.24em] text-primary uppercase">
              Solutions
            </div>
            <h1 className="mt-6 text-5xl font-bold leading-[0.95] tracking-tighter text-white md:text-7xl lg:text-[5.3rem]">
              From an early idea to a complete digital product.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed font-light text-white/68">
              Whether you need to validate an idea, redesign an experience,
              build an application, launch a website, create a brand, or connect
              everything—we shape the solution around your actual goal.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#starting-point"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-primary px-7 py-3 font-semibold text-white hover:bg-white hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Find Your Solution <ArrowDown size={18} aria-hidden="true" />
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center border border-white/25 px-7 py-3 font-semibold text-white hover:border-white hover:bg-white hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Start a Project
              </Link>
            </div>
          </EditorialReveal>
          <EditorialReveal delay={0.08}>
            <figure
              className="relative overflow-hidden border border-white/12 bg-[#111827]/90 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:p-7 md:p-9"
              aria-label="Solution flow from a client challenge through the 6D Mind process to a complete product outcome"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(45,78,235,0.13),transparent_42%)]" />
              <div className="relative">
                <div className="mb-6 flex items-end justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <div className="font-mono text-[0.63rem] tracking-[0.2em] text-primary uppercase">
                      One connected system
                    </div>
                    <figcaption className="mt-2 text-lg font-semibold tracking-tight text-white sm:text-xl">
                      Challenge to product outcome
                    </figcaption>
                  </div>
                  <div className="hidden items-center gap-2 font-mono text-[0.58rem] tracking-[0.14em] text-white/35 uppercase sm:flex">
                    <span>Input</span>
                    <ArrowRight size={12} aria-hidden="true" />
                    <span>Output</span>
                  </div>
                </div>

                <div className="grid gap-3 text-center sm:grid-cols-[minmax(0,1fr)_2rem_minmax(0,1.2fr)_2rem_minmax(0,1fr)] sm:items-stretch sm:gap-2">
                  <div className="flex min-h-44 flex-col items-center justify-center border border-white/14 bg-white/[0.025] p-5 sm:min-h-52">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/45 bg-primary/10">
                      <Compass
                        size={21}
                        className="text-primary"
                        aria-hidden="true"
                      />
                    </span>
                    <div className="mt-4 text-lg font-semibold text-white">
                      Your challenge
                    </div>
                    <p className="mt-2 max-w-32 text-sm leading-relaxed text-white/50">
                      An idea, redesign, build, brand, or launch
                    </p>
                  </div>

                  <div
                    className="flex min-h-8 items-center justify-center sm:min-h-52"
                    aria-hidden="true"
                  >
                    <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-primary/55 sm:block" />
                    <ArrowRight
                      size={18}
                      className="rotate-90 text-primary/75 sm:rotate-0"
                    />
                  </div>

                  <div className="relative flex min-h-48 flex-col items-center justify-center border border-primary/55 bg-primary/[0.12] p-5 shadow-[inset_0_0_45px_rgba(45,78,235,0.08)] sm:min-h-52">
                    <span className="absolute left-3 top-3 font-mono text-[0.55rem] tracking-[0.16em] text-primary/80 uppercase">
                      Six dimensions
                    </span>
                    <img
                      src="/brand/6d-mind/6d-mind-icon.png"
                      width="650"
                      height="650"
                      alt=""
                      aria-hidden="true"
                      className="h-16 w-16 object-contain"
                    />
                    <div className="mt-3 text-lg font-semibold text-white">
                      6D Mind process
                    </div>
                    <p className="mt-2 max-w-40 text-sm leading-relaxed text-white/55">
                      One strategy connecting every product discipline
                    </p>
                  </div>

                  <div
                    className="flex min-h-8 items-center justify-center sm:min-h-52"
                    aria-hidden="true"
                  >
                    <span className="h-px flex-1 bg-gradient-to-r from-primary/55 to-[#e6b01d]/55 sm:block" />
                    <ArrowRight
                      size={18}
                      className="rotate-90 text-[#e6b01d]/80 sm:rotate-0"
                    />
                  </div>

                  <div className="flex min-h-44 flex-col items-center justify-center border border-white/14 bg-white/[0.025] p-5 sm:min-h-52">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e6b01d]/45 bg-[#e6b01d]/10">
                      <Sparkles
                        size={21}
                        className="text-[#e6b01d]"
                        aria-hidden="true"
                      />
                    </span>
                    <div className="mt-4 text-lg font-semibold text-white">
                      Product outcome
                    </div>
                    <p className="mt-2 max-w-36 text-sm leading-relaxed text-white/50">
                      Clear, useful, credible, and launch-ready
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <div className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-3 xl:grid-cols-6">
                    {BRAND_DIMENSIONS.map((item, index) => (
                      <div
                        key={item}
                        className="relative flex min-h-12 items-center justify-center bg-[#111827] px-2 py-3 text-center font-mono text-[0.6rem] tracking-[0.04em] text-white/65 uppercase"
                      >
                        <span className="mr-1.5 text-primary/80">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </figure>
          </EditorialReveal>
        </div>
      </section>

      <section
        id="starting-point"
        className="scroll-mt-24 border-b border-border bg-white px-6 py-24 md:py-32"
      >
        <div className="container mx-auto max-w-6xl">
          <EditorialReveal className="max-w-3xl">
            <div className="font-mono text-xs tracking-[0.22em] text-primary uppercase">
              Where Are You Now?
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Start with the challenge—not the service name.
            </h2>
          </EditorialReveal>
          <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div
              role="tablist"
              aria-label="Choose your current product situation"
              className="border-t border-border"
            >
              {startingPoints.map((item, index) => (
                <button
                  key={item.challenge}
                  id={`starting-tab-${index}`}
                  role="tab"
                  aria-selected={activeStart === index}
                  aria-controls="starting-solution"
                  onClick={() => setActiveStart(index)}
                  className={`flex min-h-16 w-full items-center gap-4 border-b border-border px-3 py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary ${activeStart === index ? "bg-foreground text-background" : "hover:bg-muted/50"}`}
                >
                  <span
                    className={`font-mono text-xs ${activeStart === index ? "text-primary" : "text-muted-foreground"}`}
                  >
                    0{index + 1}
                  </span>
                  <span className="font-medium">{item.challenge}</span>
                </button>
              ))}
            </div>
            <div
              id="starting-solution"
              role="tabpanel"
              aria-labelledby={`starting-tab-${activeStart}`}
              className="flex min-h-[24rem] flex-col justify-between bg-foreground p-8 text-background md:p-12"
            >
              <div>
                <div className="font-mono text-xs tracking-[0.18em] text-[#e6b01d] uppercase">
                  Recommended solution
                </div>
                <h3 className="mt-5 text-3xl font-bold text-white md:text-5xl">
                  {active.solution}
                </h3>
                <p className="mt-6 max-w-xl leading-relaxed text-white/60">
                  We begin with your current problem, then combine only the
                  disciplines needed to move the product forward clearly.
                </p>
              </div>
              <a
                href={active.href}
                className="mt-10 inline-flex min-h-12 items-center gap-2 self-start border-b border-primary pb-1 font-semibold text-white hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                View this solution <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {solutions.map((solution, index) => (
        <section
          key={solution.id}
          id={solution.id}
          className={`scroll-mt-24 border-b border-border px-6 py-24 md:py-32 ${index % 2 ? "bg-white" : "bg-background"}`}
        >
          <div className="container mx-auto max-w-6xl">
            <EditorialReveal className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div>
                <div className="font-mono text-sm text-primary">
                  Solution {solution.number}
                </div>
                <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                  {solution.title}
                </h2>
                <p className="mt-5 text-xl leading-relaxed text-muted-foreground">
                  {solution.headline}
                </p>
                <div className="mt-9 border-l-2 border-primary pl-5">
                  <div className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    Outcome
                  </div>
                  <p className="mt-3 font-medium leading-relaxed">
                    {solution.outcome}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="mt-9 inline-flex min-h-12 items-center gap-2 bg-foreground px-6 py-3 font-semibold text-background hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {solution.cta} <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
                    Best for
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {solution.bestFor.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 border-b border-border pb-3 text-sm text-muted-foreground"
                      >
                        <CircleDot
                          size={15}
                          className="mt-0.5 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
                    What we deliver
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {solution.capabilities.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 border-b border-border pb-3 text-sm text-muted-foreground"
                      >
                        <Check
                          size={15}
                          className="mt-0.5 shrink-0 text-[#b37b00]"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </EditorialReveal>
          </div>
        </section>
      ))}

      <section
        id="complete-product"
        className="scroll-mt-24 bg-primary px-6 py-24 text-white md:py-32"
      >
        <div className="container mx-auto max-w-6xl">
          <EditorialReveal className="max-w-4xl">
            <div className="font-mono text-xs tracking-[0.22em] text-white/65 uppercase">
              Complete Product Partnership
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Need the entire journey? Combine all six dimensions.
            </h2>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/75">
              For founders and businesses that want one reliable partner, 6D
              Mind connects the complete journey—from clarifying the idea and
              designing the experience to building the product, creating the
              identity, preparing the launch, and supporting future
              improvements.
            </p>
          </EditorialReveal>
          <EditorialReveal
            delay={0.06}
            className="mt-14 grid gap-px bg-white/30 md:grid-cols-3 xl:grid-cols-6"
          >
            {BRAND_DIMENSIONS.map((item, index) => (
              <div key={item} className="relative min-h-36 bg-primary p-5">
                <div className="font-mono text-xs text-white/55">
                  0{index + 1}
                </div>
                <div className="mt-10 text-lg font-bold">{item}</div>
                {index < BRAND_DIMENSIONS.length - 1 && (
                  <ArrowRight
                    className="absolute bottom-5 right-4 hidden text-white/35 xl:block"
                    size={18}
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </EditorialReveal>
          <Link
            href="/contact"
            className="mt-10 inline-flex min-h-12 items-center gap-2 bg-white px-7 py-3 font-semibold text-primary hover:bg-foreground hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Build the Complete Product{" "}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <EditorialReveal className="max-w-3xl">
            <div className="font-mono text-xs tracking-[0.22em] text-primary uppercase">
              Engagement Paths
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Choose a practical starting point.
            </h2>
          </EditorialReveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {bundles.map((bundle, index) => (
              <EditorialReveal
                key={bundle.name}
                delay={index * 0.05}
                className={`flex flex-col border p-7 md:p-9 ${index === 2 ? "border-primary bg-primary/[0.035]" : "border-border"}`}
              >
                <div className="font-mono text-xs text-primary">
                  0{index + 1}
                </div>
                <h3 className="mt-6 text-3xl font-bold">{bundle.name}</h3>
                <p className="mt-4 min-h-20 leading-relaxed text-muted-foreground">
                  {bundle.recommended}
                </p>
                <ul className="mt-7 space-y-3 border-t border-border pt-6">
                  {bundle.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm">
                      <Check
                        size={15}
                        className="mt-0.5 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </EditorialReveal>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-10 inline-flex min-h-12 items-center gap-2 border-b border-foreground font-semibold hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Request a Custom Scope <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="border-y border-border px-6 py-20 md:py-24">
        <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <EditorialReveal>
            <div className="font-mono text-xs tracking-[0.22em] text-primary uppercase">
              Industry Experience
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Product thinking shaped across different industries.
            </h2>
          </EditorialReveal>
          <EditorialReveal delay={0.06} className="flex flex-wrap gap-2">
            {VERIFIED_INDUSTRIES.map((industry) => (
              <span
                key={industry}
                className="border border-border bg-white px-4 py-3 text-sm font-medium"
              >
                {industry}
              </span>
            ))}
          </EditorialReveal>
        </div>
      </section>

      <section className="bg-foreground px-6 py-24 text-background md:py-32">
        <div className="container mx-auto max-w-6xl">
          <EditorialReveal className="max-w-3xl">
            <Layers3 className="text-primary" aria-hidden="true" />
            <div className="mt-6 font-mono text-xs tracking-[0.22em] text-primary uppercase">
              Solution Finder
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Find the right starting point in three steps.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              No personal data is collected. Your answers only shape the
              recommendation shown on this page.
            </p>
          </EditorialReveal>
          <EditorialReveal delay={0.06} className="mt-12">
            <SolutionFinder />
          </EditorialReveal>
        </div>
      </section>

      <section className="px-6 py-24 text-center md:py-32">
        <EditorialReveal className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Not sure which service fits your project?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Share the idea, current progress, or problem. We will help define
            the right solution and improve the product direction before the work
            begins.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center bg-foreground px-7 py-3 font-semibold text-background hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Tell Us About Your Project
            </Link>
            <Link
              href="/why-6d-mind"
              className="inline-flex min-h-12 items-center justify-center border border-border px-7 py-3 font-semibold hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Why Work With 6D Mind
            </Link>
          </div>
        </EditorialReveal>
      </section>
    </article>
  );
}
