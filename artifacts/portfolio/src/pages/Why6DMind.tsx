import { Link } from "wouter";
import {
  ArrowRight,
  Check,
  CircleDot,
  GitMerge,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import ConnectedDimensions from "@/components/brand/ConnectedDimensions";
import EditorialReveal from "@/components/brand/EditorialReveal";
import { BRAND_PROOF } from "@/data/brand";
import { TESTIMONIALS } from "@/data/testimonials";
import { usePageMetadata } from "@/lib/use-page-metadata";

const fragmented = [
  "Separate specialists and repeated explanations",
  "Conflicting decisions and slower handoffs",
  "Unclear responsibility across the journey",
  "Inconsistent quality between disciplines",
  "More project management for the client",
];

const connected = [
  "One product direction and connected process",
  "Unified design, brand, and development decisions",
  "Faster answers with clear responsibility",
  "Product improvement throughout the journey",
  "Support through the agreed completion",
];

const reasons = [
  {
    number: "01",
    title: "Strong multidisciplinary expertise",
    copy: "Our experience connects UI/UX design, product thinking, branding, graphic design, mobile applications, websites, frontend development, and launch preparation. Every decision is considered as part of the complete product—not as an isolated task.",
    span: "lg:col-span-7",
  },
  {
    number: "02",
    title: "Everything in one place",
    copy: "You do not need to search for a different designer, developer, brand specialist, or launch partner at every stage. We connect the complete workflow through one consistent direction.",
    span: "lg:col-span-5",
  },
  {
    number: "03",
    title: "We improve the idea",
    copy: "We do not simply copy instructions into screens or code. We study the idea, identify weaknesses, improve the experience, clarify the product, and suggest stronger solutions before implementation.",
    span: "lg:col-span-5",
  },
  {
    number: "04",
    title: "Real product experience",
    copy: "We have worked on owned digital products as well as client products. We understand that useful flows, clear positioning, practical development decisions, and a realistic launch path matter as much as attractive screens.",
    span: "lg:col-span-7",
  },
  {
    number: "05",
    title: "Partnership until completion",
    copy: "We remain involved through the agreed project journey, review the details, solve problems, and work toward a complete result rather than disappearing after the first delivery.",
    span: "lg:col-span-7",
  },
  {
    number: "06",
    title: "Premium quality, practical execution",
    copy: "We combine strong design craft with responsive behavior, usability, accessibility, performance, maintainable development, and launch preparation.",
    span: "lg:col-span-5",
  },
];

const productMindset = [
  "User problem",
  "Business goal",
  "Product strategy",
  "User experience",
  "Visual identity",
  "Technical feasibility",
  "Launch readiness",
  "Continuous improvement",
];

const workingStages = [
  [
    "Understand deeply",
    "We study the product, goals, users, market context, existing work, constraints, and priorities.",
  ],
  [
    "Improve strategically",
    "We identify missing requirements, weak flows, confusing ideas, technical risks, and opportunities to make the product stronger.",
  ],
  [
    "Create clearly",
    "We translate direction into structured flows, premium design, reusable systems, and development-ready decisions.",
  ],
  [
    "Build responsibly",
    "We implement verified requirements with responsive, maintainable, and practical development.",
  ],
  [
    "Refine until agreed completion",
    "We test, review, improve, and resolve agreed project issues before final delivery.",
  ],
] as const;

export default function Why6DMind() {
  usePageMetadata(
    "Why Work With 6D Mind — End-to-End Digital Product Partner",
    "Discover why founders and businesses choose 6D Mind for connected product strategy, UI/UX, branding, application development, website development, launch preparation, and ongoing product improvement.",
  );

  const testimonial = TESTIMONIALS.find(
    (item) => item.source === "real" && item.featured,
  );

  return (
    <article className="bg-background text-foreground">
      <section className="relative overflow-hidden bg-foreground px-6 py-20 text-background md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="container relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.02fr_0.98fr]">
          <EditorialReveal>
            <div className="mb-6 font-mono text-xs tracking-[0.24em] text-primary uppercase">
              Why 6D Mind
            </div>
            <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tighter text-white md:text-7xl lg:text-[5.4rem]">
              One partner for the entire product journey.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed font-light text-white/68">
              Strategy, design, branding, development, launch, and
              growth—connected through one experienced product mind.
            </p>
            <p className="mt-6 max-w-2xl leading-relaxed text-white/58">
              Most digital projects become difficult because each stage is
              handled by people with different priorities. 6D Mind brings the
              complete journey together, giving you one clear partner from the
              first idea to the final product.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-primary px-7 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Start a Project <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/25 px-7 py-3 font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Explore Our Solutions
              </Link>
            </div>
          </EditorialReveal>
          <EditorialReveal delay={0.08}>
            <ConnectedDimensions />
          </EditorialReveal>
        </div>
      </section>

      <section
        aria-label="6D Mind experience and delivery proof"
        className="border-b border-border bg-white px-6"
      >
        <div className="container mx-auto grid max-w-6xl divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0 xl:grid-cols-4">
          {BRAND_PROOF.map((item, index) => (
            <EditorialReveal
              key={item.label}
              delay={index * 0.05}
              className="px-0 py-10 md:px-7 md:py-14 first:pl-0 last:pr-0"
            >
              <div className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
                {item.value}
              </div>
              <div className="mt-3 font-semibold">{item.label}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </EditorialReveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <EditorialReveal className="max-w-3xl">
            <div className="font-mono text-xs tracking-[0.22em] text-primary uppercase">
              The Difference
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              You do not need to manage five different specialists.
            </h2>
          </EditorialReveal>
          <div className="mt-14 grid overflow-hidden border border-border lg:grid-cols-2">
            <EditorialReveal className="bg-muted/35 p-7 md:p-11">
              <div className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                Fragmented approach
              </div>
              <div className="mt-8 space-y-5">
                {fragmented.map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 border-b border-border pb-5 text-muted-foreground"
                  >
                    <GitMerge
                      className="mt-0.5 shrink-0"
                      size={19}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </EditorialReveal>
            <EditorialReveal
              delay={0.06}
              className="bg-foreground p-7 text-background md:p-11"
            >
              <div className="font-mono text-xs tracking-[0.16em] text-primary uppercase">
                6D Mind approach
              </div>
              <div className="mt-8 space-y-5">
                {connected.map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 border-b border-white/12 pb-5 text-white/78"
                  >
                    <Check
                      className="mt-0.5 shrink-0 text-[#e6b01d]"
                      size={19}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-9 text-2xl font-bold text-white">
                One vision. One process. One accountable partner.
              </p>
            </EditorialReveal>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <EditorialReveal className="max-w-3xl">
            <div className="font-mono text-xs tracking-[0.22em] text-primary uppercase">
              Why Clients Choose Us
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              More than execution. We help shape the product.
            </h2>
          </EditorialReveal>
          <div className="mt-14 grid gap-px bg-border lg:grid-cols-12">
            {reasons.map((reason, index) => (
              <EditorialReveal
                key={reason.number}
                delay={(index % 2) * 0.05}
                className={`${reason.span} bg-white p-7 md:p-10`}
              >
                <div className="font-mono text-sm text-primary">
                  {reason.number}
                </div>
                <h3 className="mt-8 text-2xl font-bold md:text-3xl">
                  {reason.title}
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                  {reason.copy}
                </p>
              </EditorialReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <EditorialReveal>
            <div className="font-mono text-xs tracking-[0.22em] text-primary uppercase">
              Product Mindset
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              We think beyond the screen.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A beautiful interface matters, but it is not enough. We consider
              users, the business, feasibility, scale, and what may prevent the
              product from succeeding.
            </p>
          </EditorialReveal>
          <EditorialReveal delay={0.06}>
            <div
              className="relative grid gap-3 sm:grid-cols-2"
              role="list"
              aria-label="Connected product-thinking framework"
            >
              <div
                className="absolute bottom-6 left-6 top-6 hidden w-px bg-gradient-to-b from-primary to-[#e6b01d] sm:block"
                aria-hidden="true"
              />
              {productMindset.map((item, index) => (
                <div
                  key={item}
                  role="listitem"
                  className="relative flex min-h-20 items-center gap-4 border border-border bg-white p-5 sm:pl-10"
                >
                  <CircleDot
                    size={18}
                    className={index > 3 ? "text-[#c58d08]" : "text-primary"}
                    aria-hidden="true"
                  />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-7 border-l-2 border-primary pl-5 text-xl font-medium leading-relaxed">
              Every decision should move the product closer to a useful,
              credible, and successful outcome.
            </p>
          </EditorialReveal>
        </div>
      </section>

      <section className="bg-foreground px-6 py-24 text-background md:py-32">
        <div className="container mx-auto max-w-6xl">
          <EditorialReveal className="max-w-3xl">
            <div className="font-mono text-xs tracking-[0.22em] text-primary uppercase">
              How We Work
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Direct, transparent, and focused on completion.
            </h2>
          </EditorialReveal>
          <div className="mt-16 border-t border-white/15">
            {workingStages.map(([title, copy], index) => (
              <EditorialReveal
                key={title}
                className="grid gap-4 border-b border-white/15 py-8 md:grid-cols-[7rem_0.7fr_1.3fr] md:items-start"
              >
                <div className="font-mono text-sm text-primary">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <p className="leading-relaxed text-white/62">{copy}</p>
              </EditorialReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-primary px-6 py-20 text-white md:py-28">
        <EditorialReveal className="container mx-auto max-w-6xl">
          <ShieldCheck size={40} aria-hidden="true" />
          <h2 className="mt-7 max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
            No handoff chaos. No disconnected decisions. No unfinished product
            thinking.
          </h2>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/78">
            You receive one connected product journey with clear responsibility,
            direct collaboration, and a partner who understands both the
            creative and technical sides of the work.
          </p>
          <div className="mt-10 grid gap-px bg-white/25 md:grid-cols-3">
            {[
              "Clear ownership",
              "Consistent quality",
              "Complete product thinking",
            ].map((item) => (
              <div
                key={item}
                className="bg-primary px-0 py-5 text-lg font-semibold md:px-6"
              >
                {item}
              </div>
            ))}
          </div>
        </EditorialReveal>
      </section>

      {testimonial && (
        <section className="bg-white px-6 py-24 md:py-28">
          <div className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <EditorialReveal>
              <Sparkles className="text-primary" aria-hidden="true" />
              <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                Trusted by founders who value detail, clarity, and product
                thinking.
              </h2>
              <Link
                href="/#testimonials"
                className="mt-7 inline-flex min-h-11 items-center gap-2 border-b border-foreground font-semibold hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Read Client Reviews <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </EditorialReveal>
            <EditorialReveal
              delay={0.06}
              className="border-l-2 border-primary pl-7 md:pl-10"
            >
              <blockquote className="text-2xl leading-relaxed font-light md:text-4xl">
                “{testimonial.review}”
              </blockquote>
              <div className="mt-7 font-semibold">{testimonial.name}</div>
              <div className="text-sm text-muted-foreground">
                {testimonial.role}
                {testimonial.company ? ` · ${testimonial.company}` : ""}
              </div>
            </EditorialReveal>
          </div>
        </section>
      )}

      <section className="border-t border-border px-6 py-24 text-center md:py-32">
        <EditorialReveal className="container mx-auto max-w-4xl">
          <Target
            className="mx-auto text-primary"
            size={38}
            aria-hidden="true"
          />
          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Have an idea that needs more than just design?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Work with one product partner who can help clarify, design, build,
            brand, and prepare it for launch.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center bg-foreground px-7 py-3 font-semibold text-background hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Discuss Your Project
            </Link>
            <Link
              href="/solutions"
              className="inline-flex min-h-12 items-center justify-center border border-border px-7 py-3 font-semibold hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              View Solutions
            </Link>
          </div>
        </EditorialReveal>
      </section>
    </article>
  );
}
