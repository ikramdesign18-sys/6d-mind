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
  "Multiple separate specialists",
  "Repeated explanations",
  "Conflicting decisions",
  "Slow handoffs",
  "Inconsistent execution",
  "Unclear responsibility",
  "More client management",
];

const connected = [
  "One connected product direction",
  "Strategy before execution",
  "Design and development alignment",
  "Consistent visual identity",
  "Clear communication",
  "Fewer handoff problems",
  "Continued involvement until agreed completion",
];

const reasons = [
  {
    number: "01",
    title: "Strong Multidisciplinary Expertise",
    copy: "We combine product strategy, UI/UX, branding, graphic design, mobile applications, websites, frontend development, and launch preparation. This allows every decision to support the complete product rather than one isolated task.",
    span: "lg:col-span-7",
  },
  {
    number: "02",
    title: "More Than 300 Completed Projects",
    copy: "Experience across hundreds of projects has helped us understand different industries, user needs, product challenges, client expectations, and practical delivery requirements.",
    span: "lg:col-span-5",
  },
  {
    number: "03",
    title: "Seven Years of Experience",
    copy: "Our experience connects creative direction with product thinking and technical execution, helping us identify risks, improve decisions, and maintain quality across the complete journey.",
    span: "lg:col-span-5",
  },
  {
    number: "04",
    title: "Everything in One Place",
    copy: "You do not need to hire a separate strategist, designer, developer, branding specialist, and launch partner. 6D Mind connects these disciplines through one clear direction and one consistent workflow.",
    span: "lg:col-span-7",
  },
  {
    number: "05",
    title: "We Improve the Original Idea",
    copy: "We do not simply follow instructions without thinking. We study the concept, identify weaknesses, improve flows, recommend stronger features, simplify unnecessary complexity, and help shape a more useful product.",
    span: "lg:col-span-7",
  },
  {
    number: "06",
    title: "We Understand Product Ownership",
    copy: "We have worked on our own digital products as well as client products. That experience helps us think beyond attractive screens and consider usability, business goals, technical feasibility, launch readiness, and long-term product quality.",
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
              One partner for your complete product journey.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed font-light text-white/68">
              6D Mind brings strategy, design, development, branding, launch
              preparation, and product improvement together through one
              connected process—so you do not need to coordinate separate
              specialists at every stage.
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
              Client Experience
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              A Clearer Way to Build
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
              Six Reasons
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Why Choose 6D Mind
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
          <EditorialReveal className="mt-12 border-l-2 border-primary pl-6 text-2xl font-semibold leading-relaxed md:text-3xl">
            You bring the vision. We help make it clearer, stronger, and ready
            to become a complete product.
          </EditorialReveal>
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
            We stay involved until the agreed project is complete.
          </h2>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/78">
            Our work does not stop after the first design delivery. We review
            details, solve agreed issues, refine the experience, support
            implementation, and keep the complete product goal in view
            throughout the project.
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
