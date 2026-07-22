import { type ReactNode, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ClipboardCheck,
  Dumbbell,
  MonitorSmartphone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Video,
  WalletCards,
} from "lucide-react";
import { Link } from "wouter";

import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const GOLD = "#e5af1f";

const challenges = [
  {
    title: "Different user needs",
    copy: "Some users only need app access, while others need structured programs, meal planning, trainer calls, form reviews, and frequent support.",
  },
  {
    title: "Complex booking states",
    copy: "Trainer requests, approval, payment, promotion codes, confirmation, and session status needed to feel like one clear flow.",
  },
  {
    title: "Mobile and web consistency",
    copy: "The mobile application and responsive website needed to share one premium identity while serving different user actions.",
  },
  {
    title: "Transparent pricing",
    copy: "Multiple access and coaching levels needed clear differences without forcing users to compare dense feature tables.",
  },
  {
    title: "Trust and support",
    copy: "Payments, video sessions, account deletion, billing questions, and support requests required clear and professional experiences.",
  },
];

const goals = [
  "Connect clients with professional trainers",
  "Support self-guided and trainer-led fitness journeys",
  "Provide personalized workout routines",
  "Support custom meal plans and nutrition guidance",
  "Allow users to request one-to-one coaching sessions",
  "Show clear booking and approval states",
  "Support payment workflows where implemented",
  "Provide video-consultation access where implemented",
  "Show progress and important fitness information",
  "Offer clear subscription and coaching packages",
  "Present the product through a premium responsive website",
  "Provide account, billing, refund, and support pathways",
  "Maintain one consistent design system across mobile and web",
  "Prepare the product for scalable development and launch",
];

const contributions = [
  {
    number: "01",
    title: "Product Strategy",
    items: [
      "Product structure and user types",
      "Feature and access-level planning",
      "Coaching-package structure",
      "Booking-state architecture",
      "Website information architecture",
    ],
  },
  {
    number: "02",
    title: "Mobile App UI/UX",
    items: [
      "Home dashboard and workout discovery",
      "Progress and meal-plan experiences",
      "Trainer communication and booking",
      "Video-call entry and notifications",
      "Light and dark interface directions",
    ],
  },
  {
    number: "03",
    title: "Website UI/UX",
    items: [
      "Homepage and feature presentation",
      "Pricing, about, and contact",
      "Support and account guidance",
      "Responsive navigation",
      "Footer and legal navigation",
    ],
  },
  {
    number: "04",
    title: "Design System",
    items: [
      "Dark visual foundation and gold accent",
      "Typography, buttons, and form controls",
      "Pricing and feature-flow cards",
      "Status indicators and mobile components",
      "Responsive spacing rules",
    ],
  },
  {
    number: "05",
    title: "Development",
    items: [
      "Responsive website interface specification",
      "Mobile implementation states where evidenced",
      "Routing, forms, and state behavior",
      "Integration-ready payment and video flows",
      "Error and responsive behavior",
    ],
  },
  {
    number: "06",
    title: "Testing and Launch Preparation",
    items: [
      "Cross-device and responsive QA",
      "Form and route testing",
      "Pricing and booking-flow checks",
      "Build and performance review",
      "Deployment preparation",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    copy: "Mapped the needs of self-guided fitness users, coaching clients, and trainers across workouts, scheduling, communication, nutrition, payments, and progress.",
  },
  {
    number: "02",
    title: "Define",
    copy: "Organized the platform around mobile training experiences and a public website covering product value, features, pricing, trust, support, and conversion.",
  },
  {
    number: "03",
    title: "Design",
    copy: "Created a high-contrast black-and-gold visual system with clear actions, readable data, structured pricing, and premium fitness positioning.",
  },
  {
    number: "04",
    title: "Prototype",
    copy: "Connected important flows including workout access, trainer requests, booking approval, payment, video sessions, pricing selection, and support submission.",
  },
  {
    number: "05",
    title: "Prepare for development",
    copy: "Defined reusable mobile and web interfaces, responsive layouts, routing behavior, forms, and documented integration states.",
  },
  {
    number: "06",
    title: "Test and prepare",
    copy: "Reviewed desktop and mobile layouts, interaction states, validation, build quality, direct-route behavior, loading, errors, and deployment readiness.",
  },
];

const mobileHighlights = [
  "Recommended workout, duration, and difficulty",
  "Estimated calorie and weekly-progress summaries",
  "Contextual BMI summary",
  "Chat and trainer booking",
  "Video submission and consultation entry",
  "Workout, progress, meal, and profile navigation",
  "Notifications",
  "Dark and light interface themes",
];

const websiteHighlights = [
  "Premium brand navigation",
  "Focused product positioning",
  "Clear action hierarchy",
  "Mobile-product preview",
  "Product statistics",
  "Dark premium identity",
  "Direct paths to features and pricing",
  "Visually represented store actions",
];

const featureCategories = [
  {
    icon: ClipboardCheck,
    title: "Request and approval",
    copy: "Session requests, trainer review, acceptance or decline, and visible booking status.",
  },
  {
    icon: WalletCards,
    title: "Payment and access",
    copy: "Payment or eligible promotional access appears at the correct stage of the booking flow.",
  },
  {
    icon: Video,
    title: "Coaching communication",
    copy: "Consultation entry, messaging, form review, and follow-up states are designed as connected experiences.",
  },
  {
    icon: Dumbbell,
    title: "Training and nutrition",
    copy: "Custom workouts, meal plans, nutrition guidance, and ongoing coaching support share one structure.",
  },
];

const bookingFlow = [
  "Browse or identify a trainer",
  "Request a suitable session",
  "Submit the required context",
  "Trainer reviews the request",
  "Request is accepted or declined",
  "Complete payment or use eligible access",
  "Receive booking confirmation",
  "Track upcoming status",
  "Join the consultation when available",
  "Access follow-up actions",
];

const bookingPrinciples = [
  "Clear pending states",
  "Explicit trainer response",
  "Transparent pricing",
  "Payment only at the correct stage",
  "Visible session status",
  "Clear cancellation or support path",
  "No hidden transitions",
];

const pricingLevels = [
  {
    title: "Basic App Access",
    copy: "App access, basic progress tracking, a standard workout library, and a self-guided experience.",
  },
  {
    title: "Bronze · Starter",
    copy: "A personalized workout routine, exercise-video library, basic meal planning, and periodic progress support.",
  },
  {
    title: "Silver · Standard",
    copy: "Expanded meal planning, trainer calls, video form review, more frequent check-ins, and customized guidance.",
  },
  {
    title: "Gold · Premium",
    copy: "Advanced coaching access, more direct video support, priority communication, and habit-focused guidance.",
  },
];

const pricingPrinciples = [
  "Four clearly separated levels",
  "Outcome-focused package descriptions",
  "A restrained Most Popular emphasis",
  "Consistent comparison hierarchy",
  "High-contrast primary actions",
  "Repeated monthly context",
  "A clear promotional note",
  "Minimal pricing ambiguity",
];

const supportPrinciples = [
  "Account deletion remains easy to locate",
  "Billing and refunds have a dedicated path",
  "Direct contact remains available",
  "Forms use persistent, descriptive labels",
  "Validation messages identify the problem",
  "Success and error states explain what happens next",
  "Contact information stays consistent",
];

const websiteStructure = [
  "Home",
  "Features",
  "Pricing",
  "About",
  "Support",
  "Contact",
  "Account deletion guidance",
  "Billing and refund guidance",
  "Privacy policy",
  "Terms of service",
];

const visualPrinciples = [
  "Black and charcoal foundations",
  "Gold reserved for primary emphasis",
  "White for high-priority information",
  "Neutral gray for supporting copy",
  "Strong visual hierarchy",
  "Large primary actions",
  "Consistent card radii and thin borders",
  "Subtle shadows and restrained glows",
  "Clear active navigation",
  "Reusable workflow blocks",
  "Accessible form fields",
  "Responsive spacing",
];

const commercePrinciples = [
  "Show price before commitment",
  "Explain what is included",
  "Indicate monthly context clearly",
  "Distinguish app access from coaching",
  "Explain promotional eligibility",
  "Confirm a successful payment state",
  "Provide a billing-support path",
  "Avoid hidden fees",
  "Show cancellation or refund information where applicable",
];

const responsibilityPrinciples = [
  "Fitness information is not medical diagnosis",
  "BMI is contextual, not a complete health assessment",
  "Estimated calories are presented as estimates",
  "Personalized programs should reflect qualified trainer input",
  "Pricing appears before purchase",
  "Video sessions require clear consent",
  "Progress messaging avoids harmful shame-based language",
  "Meal guidance avoids unsupported medical claims",
  "Accessibility matters across mobile and web",
  "Destructive account actions require confirmation",
  "Private fitness information is not exposed publicly",
];

const launchPreparation = [
  "Production-configuration review",
  "Environment-variable separation",
  "Responsive and mobile-device QA",
  "Route and direct-refresh testing",
  "Form validation",
  "Payment-state review",
  "Booking-state testing",
  "Support-form testing",
  "Build checks and performance review",
  "Accessibility review",
  "SEO metadata and social-preview assets",
  "App-icon and store-asset preparation",
  "Domain and deployment preparation",
  "Error-state refinement",
  "Privacy and legal-page review",
];

const solutionOutcomes = [
  "A clear journey from product discovery to coaching access",
  "Consistent visual identity across mobile and web",
  "Structured packages for different coaching needs",
  "Clear trainer-booking and support pathways",
  "A scalable foundation for connected fitness services",
  "A reusable product design system",
  "A responsive website supporting marketing and operations",
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 font-mono text-xs tracking-[0.22em] text-[#e5af1f] uppercase">
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
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
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
}: {
  items: string[];
  columns?: boolean;
}) {
  return (
    <ul className={cn("grid gap-4", columns && "sm:grid-cols-2")}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-white/72">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#e5af1f]/55 text-[#e5af1f]">
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
    <figure className="overflow-hidden border border-white/15 bg-[#111] shadow-2xl shadow-black/40">
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
      <figcaption className="border-t border-white/10 px-5 py-4 font-mono text-[0.68rem] leading-relaxed tracking-[0.08em] text-white/45 uppercase sm:px-7">
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

export default function CrunchTimeFitnessCaseStudy({
  project,
}: {
  project: Project;
}) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title =
      "CrunchTime Fitness — Mobile App, Website UI/UX and Development Case Study";

    const restoreMeta = [
      setMetaTag(
        "name",
        "description",
        "A multidisciplinary case study covering mobile app UI/UX, responsive website design, trainer booking, coaching packages, pricing, video consultations, support design, development, and launch preparation for CrunchTime Fitness.",
      ),
      setMetaTag(
        "property",
        "og:title",
        "CrunchTime Fitness — Mobile App, Website UI/UX and Development Case Study",
      ),
      setMetaTag(
        "property",
        "og:description",
        "A premium fitness and coaching platform connecting users with trainers, workouts, meal plans, booking, progress tools, and support.",
      ),
      setMetaTag(
        "property",
        "og:image",
        "/projects/crunchtime-fitness/crunchtime-cover.png",
      ),
      setMetaTag("property", "og:type", "article"),
    ];

    return () => {
      document.title = previousTitle;
      restoreMeta.forEach((restore) => restore());
    };
  }, []);

  return (
    <article className="w-full overflow-hidden bg-[#080808] text-white">
      <header className="relative px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div
          aria-hidden="true"
          className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#e5af1f]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#e5af1f]/5 blur-3xl"
        />

        <div className="container relative mx-auto max-w-6xl">
          <Link
            href="/work"
            className="mb-16 inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-[0.16em] text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e5af1f] focus-visible:ring-offset-4 focus-visible:ring-offset-[#080808]"
          >
            <ArrowLeft size={15} aria-hidden="true" /> BACK TO SELECTED WORK
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div>
              <div className="mb-6 font-mono text-xs tracking-[0.2em] text-[#e5af1f] uppercase">
                Fitness Technology · Mobile App · Responsive Web
              </div>
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                CrunchTime Fitness
              </h1>
              <p className="mt-8 max-w-4xl text-2xl font-light leading-tight text-white md:text-3xl">
                Discipline meets a connected coaching experience.
              </p>
              <p className="mt-6 max-w-3xl text-lg font-light leading-relaxed text-white/68">
                CrunchTime Fitness is a premium digital coaching platform
                designed to connect users with trainers, personalized workouts,
                meal plans, booking, progress tracking, messaging, and video
                consultations through one connected mobile and web experience.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/15 bg-white/15 text-sm sm:grid-cols-2 lg:grid-cols-1">
              {[
                ["Role", "Product Designer & Full-Stack Product Developer"],
                ["Disciplines", "Mobile UI/UX · Website UI/UX · Development"],
                ["Platforms", project.platform ?? "iOS · Android · Web"],
                ["Industry", "Fitness · Wellness · Coaching"],
                ["Year", project.year ?? "2026"],
                [
                  "Services",
                  "Product Strategy · UI/UX · Mobile App · Website Development",
                ],
                [
                  "Technology",
                  "Implementation stack not verified from supplied source",
                ],
              ].map(([label, value]) => (
                <div key={label} className="bg-[#111] p-5">
                  <div className="font-mono text-[0.64rem] tracking-[0.16em] text-[#e5af1f] uppercase">
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
              src="/projects/crunchtime-fitness/crunchtime-cover.png"
              alt="CrunchTime Fitness premium platform presented across a laptop and mobile fitness dashboards beside black-and-gold training, coaching, nutrition, and progress messaging."
              width={1672}
              height={941}
              caption="Responsive product website and mobile application direction"
              priority
            />
          </Reveal>

          <div
            aria-label="Project expertise"
            className="mt-8 flex flex-wrap gap-2"
          >
            {[
              "Mobile App UI/UX",
              "Website UI/UX",
              "Product Design",
              "Mobile Development",
              "Website Development",
              "Full-Stack Development",
              "Booking & Payments",
              "Launch Preparation",
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

      <section className="border-y border-white/10 bg-[#0d0d0d] px-6 py-20 md:py-28">
        <Reveal className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Overview</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              A complete digital connection between clients, trainers, workouts,
              and nutrition.
            </h2>
          </div>
          <div className="space-y-6 text-lg font-light leading-relaxed text-white/68">
            <p>
              Fitness users often rely on separate products for workout
              tracking, trainer communication, video calls, meal plans, progress
              monitoring, payments, and scheduling.
            </p>
            <p>
              CrunchTime Fitness was designed to bring those experiences
              together in one premium platform. Users can access structured
              workouts, communicate with trainers, request coaching sessions,
              review personalized plans, follow progress, and select the level
              of coaching that matches their goals.
            </p>
            <p className="border-l-2 border-[#e5af1f] pl-6 text-white">
              The product goal was to make professional coaching feel organized
              and accessible without reducing the importance of real trainer
              guidance.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>The Challenge</SectionLabel>
            <h2 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
              Combining self-guided fitness and professional coaching without
              creating a complicated product.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {challenges.map((item, index) => (
              <Reveal
                key={item.title}
                className="border border-white/12 bg-[#111] p-6"
              >
                <div className="font-mono text-xs text-[#e5af1f]">
                  0{index + 1}
                </div>
                <h3 className="mt-10 text-xl font-bold">{item.title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-white/60">
                  {item.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d0d0d] px-6 py-20 md:py-28">
        <Reveal className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <SectionLabel>Goals</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              What the platform needed to achieve.
            </h2>
          </div>
          <CheckList items={goals} columns />
        </Reveal>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="max-w-4xl">
            <SectionLabel>My Contribution</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Designing and developing both sides of the product experience.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-white/65">
              My work covered the complete CrunchTime product journey—from
              mobile application flows and website architecture to pricing,
              trainer booking, support interactions, responsive frontend
              specification, connected development planning, testing, and launch
              preparation.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {contributions.map((area) => (
              <Reveal
                key={area.number}
                className="border border-white/12 bg-[#111] p-7"
              >
                <div className="font-mono text-xs tracking-widest text-[#e5af1f]">
                  {area.number}
                </div>
                <h3 className="mt-8 text-2xl font-bold">{area.title}</h3>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/62">
                  {area.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#e5af1f]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d0d0d] px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>Process</SectionLabel>
            <h2 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
              Structuring a premium coaching journey from discovery to ongoing
              support.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {process.map((stage) => (
              <Reveal key={stage.number} className="bg-[#0a0a0a] p-8">
                <div className="font-mono text-xs text-[#e5af1f]">
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
            <SectionLabel>01 · Mobile Training Experience</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Fitness guidance, coaching access, and progress tools in one
              mobile product.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-white/65">
              The mobile experience gives users quick access to their current
              workout, progress information, BMI status, trainer actions,
              booking, video communication, meal planning, and profile tools.
            </p>
            <p className="mt-6 border-l-2 border-[#e5af1f] pl-6 text-sm leading-relaxed text-white/72">
              Fitness and nutrition information supports general wellness and
              should not replace professional medical advice.
            </p>
          </div>
          <div className="border border-white/12 bg-[#111] p-7 md:p-9">
            <div className="mb-7 flex items-center gap-3">
              <Smartphone className="text-[#e5af1f]" aria-hidden="true" />
              <h3 className="text-xl font-bold">Visible mobile capabilities</h3>
            </div>
            <CheckList items={mobileHighlights} columns />
          </div>
        </Reveal>
      </section>

      <section className="border-y border-white/10 bg-[#0d0d0d] px-6 py-20 md:py-28">
        <Reveal className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            {websiteHighlights.map((item) => (
              <div
                key={item}
                className="flex min-h-28 items-end border border-white/12 bg-[#111] p-5 font-medium"
              >
                <span className="mr-3 text-[#e5af1f]">—</span>
                {item}
              </div>
            ))}
          </div>
          <div>
            <SectionLabel>02 · Product Website</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Presenting the platform through a focused premium landing
              experience.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-white/65">
              The homepage balances brand positioning with practical product
              evidence. Visitors see the app, understand the service model, and
              can move directly to features, pricing, or product-access actions.
              Store buttons remain visual product-interface examples until
              verified destination URLs are available.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="max-w-4xl">
            <SectionLabel>03 · Feature Architecture</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Connecting scheduling, payments, consultations, workouts, and
              nutrition.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-white/65">
              The feature page explains important product workflows through
              visual process diagrams and focused benefit-led copy rather than
              presenting a long undifferentiated feature list.
            </p>
          </Reveal>
          <Reveal className="mt-12">
            <MediaPanel
              src="/projects/crunchtime-fitness/crunchtime-features.png"
              alt="CrunchTime Fitness features page showing a trainer-booking workflow, payment or promotional access, live status tracking, and secure video-consultation flow."
              width={2043}
              height={1356}
              caption="Feature architecture · Booking and consultation workflow presentation"
            />
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {featureCategories.map(({ icon: Icon, title, copy }) => (
              <Reveal
                key={title}
                className="border border-white/12 bg-[#111] p-6"
              >
                <Icon className="text-[#e5af1f]" aria-hidden="true" />
                <h3 className="mt-8 text-xl font-bold">{title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-white/60">
                  {copy}
                </p>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-white/48">
            The supplied screenshot presents integrated payment and secure video
            concepts. Provider choice, production integration, and specific
            encryption behavior are not treated as verified without the
            underlying product source.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d0d0d] px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel>04 · Trainer Booking</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Making one-to-one coaching requests clear from start to
                confirmation.
              </h2>
              <p className="mt-6 text-lg font-light leading-relaxed text-white/65">
                The booking experience was structured around explicit states so
                users always understand what happens next.
              </p>
              <div className="mt-8">
                <CheckList items={bookingPrinciples} />
              </div>
            </div>
            <ol className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
              {bookingFlow.map((step, index) => (
                <li key={step} className="flex gap-4 bg-[#0a0a0a] p-5">
                  <span className="font-mono text-xs text-[#e5af1f]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <Reveal className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex min-h-80 items-center justify-center border border-white/12 bg-[radial-gradient(circle_at_center,_rgba(229,175,31,0.14),_transparent_65%)]">
            <div className="text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#e5af1f]/50 bg-[#e5af1f]/10">
                <Video
                  size={38}
                  className="text-[#e5af1f]"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-6 font-mono text-xs tracking-[0.16em] text-white/50 uppercase">
                Booking-gated coaching access
              </div>
            </div>
          </div>
          <div>
            <SectionLabel>05 · Coaching Communication</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Connecting users and trainers beyond static workout plans.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-white/65">
              Video-consultation flows allow coaching to extend beyond written
              routines and messages. Users can access face-to-face guidance,
              form review, and follow-up support through the platform where the
              functionality is enabled.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-white/48">
              The designed experience includes confirmed-session entry,
              availability and status states, form-review submission, trainer
              response, and consultation history. It does not claim medical
              consultation, guaranteed availability, unlimited calls, end-to-end
              encryption, or regulatory compliance.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-white/10 bg-[#0d0d0d] px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="max-w-4xl">
            <SectionLabel>06 · Pricing Experience</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Clear access levels for different levels of coaching.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-white/65">
              Four packages separate self-guided access from increasingly
              involved coaching. The case-study narrative keeps prices editable
              by leaving them inside the supplied product screenshot rather than
              hard-coding them into page copy.
            </p>
          </Reveal>
          <Reveal className="mt-12">
            <MediaPanel
              src="/projects/crunchtime-fitness/crunchtime-pricing.png"
              alt="CrunchTime Fitness pricing page showing Basic App Access, Bronze Starter, Silver Standard, and Gold Premium monthly plans."
              width={2048}
              height={1291}
              caption="Pricing architecture · App access and coaching packages"
            />
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {pricingLevels.map((level) => (
              <Reveal
                key={level.title}
                className="border border-white/12 bg-[#111] p-6"
              >
                <h3 className="text-xl font-bold">{level.title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-white/60">
                  {level.copy}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 border border-[#e5af1f]/25 bg-[#e5af1f]/[0.04] p-7">
            <h3 className="mb-6 text-xl font-bold">Pricing UX decisions</h3>
            <CheckList items={pricingPrinciples} columns />
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="max-w-4xl">
            <SectionLabel>07 · Support Experience</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Making account, billing, and product support easy to find.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-white/65">
              The support center gives users direct paths for common and
              sensitive tasks instead of hiding them behind a generic contact
              form.
            </p>
          </Reveal>
          <Reveal className="mt-12">
            <MediaPanel
              src="/projects/crunchtime-fitness/crunchtime-support.png"
              alt="CrunchTime Fitness support center with account-deletion, billing and refund, direct email, and support-ticket options."
              width={1951}
              height={1359}
              caption="Support center · Quick links, direct contact, and labelled ticket form"
            />
          </Reveal>
          <Reveal className="mt-10 grid gap-8 border border-white/12 bg-[#111] p-7 md:grid-cols-[0.8fr_1.2fr] md:p-9">
            <div>
              <h3 className="text-2xl font-bold">Visible support structure</h3>
              <p className="mt-4 font-light leading-relaxed text-white/60">
                Quick links cover account deletion, billing and refunds, and
                direct email. The ticket form asks for a full name, email,
                subject category, and message before submission.
              </p>
            </div>
            <CheckList items={supportPrinciples} columns />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d0d0d] px-6 py-20 md:py-28">
        <Reveal className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionLabel>Website Structure</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              A complete public product experience beyond the landing page.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-white/65">
              The website was structured to support both product discovery and
              operational trust. Marketing pages explain the product, while
              support and legal pages make important account information
              accessible.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
            {websiteStructure.map((page, index) => (
              <div
                key={page}
                className="flex items-center gap-4 bg-[#0a0a0a] p-5"
              >
                <span className="font-mono text-xs text-[#e5af1f]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-medium">{page}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <SectionLabel>Visual System</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                A high-performance identity built around contrast, focus, and
                premium coaching.
              </h2>
              <p className="mt-6 text-lg font-light leading-relaxed text-white/65">
                The interface uses deep black surfaces, charcoal cards, warm
                gold accents, white typography, restrained glows, and strong
                spacing to create a premium fitness identity.
              </p>
            </div>
            <div
              aria-label="CrunchTime Fitness color palette"
              className="grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {[
                ["Deep Black", "#080808"],
                ["Charcoal", "#151515"],
                ["Warm Gold", GOLD],
                ["Off White", "#F7F5EF"],
              ].map(([name, color]) => (
                <div
                  key={name}
                  className="border border-white/12 bg-[#111] p-3"
                >
                  <div
                    className="aspect-square border border-white/10"
                    style={{ backgroundColor: color }}
                  />
                  <div className="mt-3 text-sm font-medium">{name}</div>
                  <div className="mt-1 font-mono text-[0.62rem] text-white/45">
                    {color}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="mt-10 border border-white/12 bg-[#111] p-7 md:p-9">
            <CheckList items={visualPrinciples} columns />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d0d0d] px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>Cross-Platform Experience</SectionLabel>
            <h2 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
              One brand system adapted to different user contexts.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              {
                icon: Smartphone,
                title: "Mobile application",
                copy: "Daily training, progress, meals, trainer communication, booking, video access, notifications, and personal profile tools.",
              },
              {
                icon: MonitorSmartphone,
                title: "Responsive website",
                copy: "Product discovery, feature education, pricing, trust, support, contact, legal information, and product-access paths.",
              },
            ].map(({ icon: Icon, title, copy }) => (
              <Reveal
                key={title}
                className="border border-white/12 bg-[#111] p-8"
              >
                <Icon size={30} className="text-[#e5af1f]" aria-hidden="true" />
                <h3 className="mt-10 text-2xl font-bold">{title}</h3>
                <p className="mt-4 font-light leading-relaxed text-white/62">
                  {copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="max-w-4xl">
            <SectionLabel>Development</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Turning the design system into a connected mobile and web product.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-white/65">
              The supplied CrunchTime materials verify the designed mobile and
              responsive-web experiences shown in this case study. They do not
              include the application source, so the presentation separates
              visible product evidence from development-ready and unverified
              technical areas.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
            {[
              {
                eyebrow: "Implemented functionality",
                title: "Not verifiable from supplied source",
                items: [
                  "Product application source was not included",
                  "No framework or backend claim is made",
                  "No live integration claim is made",
                  "No production-release claim is made",
                ],
              },
              {
                eyebrow: "Designed workflows",
                title: "Visible product evidence",
                items: [
                  "Responsive website UI",
                  "Mobile dashboard UI",
                  "Pricing architecture",
                  "Booking and consultation diagrams",
                  "Support-center interface",
                ],
              },
              {
                eyebrow: "Development-ready",
                title: "Prepared product behavior",
                items: [
                  "Responsive component states",
                  "Routing and form behavior",
                  "Booking-state architecture",
                  "Payment and video integration points",
                  "Error and validation states",
                ],
              },
              {
                eyebrow: "Future or unverified",
                title: "Requires technical evidence",
                items: [
                  "Frontend or mobile framework",
                  "Backend and API stack",
                  "Payment provider",
                  "Video provider or encryption behavior",
                  "Store publication or production release",
                ],
              },
            ].map((group) => (
              <Reveal
                key={group.eyebrow}
                className="border border-white/12 bg-[#111] p-7"
              >
                <div className="font-mono text-xs tracking-[0.14em] text-[#e5af1f] uppercase">
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

      <section className="border-y border-white/10 bg-[#0d0d0d] px-6 py-20 md:py-28">
        <Reveal className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionLabel>Commerce Experience</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Supporting simple app access and higher-touch coaching packages.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-white/65">
              The model distinguishes entry-level app access, guided starter
              coaching, standard coaching, and premium coaching in a monthly
              context, with promotional access represented where supported.
              Recurring-billing behavior and trainer-controlled package updates
              require implementation verification.
            </p>
          </div>
          <CheckList items={commercePrinciples} columns />
        </Reveal>
      </section>

      <section className="px-6 py-20 md:py-28">
        <Reveal className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionLabel>Responsible Product Design</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Fitness guidance should remain transparent and user-centered.
            </h2>
            <div className="mt-8 flex items-center gap-4 border border-[#e5af1f]/25 bg-[#e5af1f]/[0.04] p-5">
              <ShieldCheck
                className="shrink-0 text-[#e5af1f]"
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-white/68">
                The product is positioned for general fitness and wellness. It
                does not claim clinical or medical certification.
              </p>
            </div>
          </div>
          <CheckList items={responsibilityPrinciples} columns />
        </Reveal>
      </section>

      <section className="border-y border-white/10 bg-[#0d0d0d] px-6 py-20 md:py-28">
        <Reveal className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <SectionLabel>Launch Preparation</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Preparing the mobile application and website for dependable
              release.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-white/65">
              Launch preparation completed for the current product stage,
              without claiming public App Store, Google Play, or production
              release status.
            </p>
          </div>
          <CheckList items={launchPreparation} columns />
        </Reveal>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <SectionLabel>The Solution</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                One platform supporting the complete coaching relationship.
              </h2>
            </div>
            <div>
              <p className="text-lg font-light leading-relaxed text-white/65">
                The final CrunchTime product direction connects fitness
                discovery, workout guidance, trainer booking, progress,
                nutrition, communication, pricing, payments, video
                consultations, support, and public product information through
                one consistent mobile and web experience.
              </p>
              <div className="mt-8">
                <CheckList items={solutionOutcomes} columns />
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-20 border-t border-white/12 pt-16">
            <SectionLabel>Outcome</SectionLabel>
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                A complete fitness-product foundation—from application
                experience to responsive website.
              </h2>
              <p className="text-lg font-light leading-relaxed text-white/65">
                CrunchTime Fitness demonstrates a full product-development
                approach rather than a single landing-page deliverable. The
                project combines product strategy, mobile UI/UX, website UI/UX,
                pricing architecture, trainer workflows, support design,
                responsive frontend direction, connected application planning,
                testing, and launch preparation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <nav
        aria-label="Case study navigation"
        className="border-y border-white/12 bg-[#0d0d0d] px-6"
      >
        <div className="container mx-auto grid max-w-6xl md:grid-cols-3">
          <Link
            href="/work"
            className="group flex min-h-32 flex-col justify-center border-b border-white/12 py-8 outline-none focus-visible:ring-2 focus-visible:ring-[#e5af1f] md:border-b-0 md:border-r md:pr-8"
          >
            <span className="font-mono text-xs tracking-[0.16em] text-white/45 uppercase">
              Back to
            </span>
            <span className="mt-2 flex items-center gap-3 text-xl font-bold transition-colors group-hover:text-[#e5af1f]">
              <ArrowLeft size={20} aria-hidden="true" /> Selected Work
            </span>
          </Link>
          <Link
            href="/work/amanat-diary"
            className="group flex min-h-32 flex-col justify-center border-b border-white/12 py-8 outline-none focus-visible:ring-2 focus-visible:ring-[#e5af1f] md:border-b-0 md:border-r md:px-8"
          >
            <span className="font-mono text-xs tracking-[0.16em] text-white/45 uppercase">
              Previous Project
            </span>
            <span className="mt-2 text-xl font-bold transition-colors group-hover:text-[#e5af1f]">
              Amanat Diary
            </span>
          </Link>
          <Link
            href="/work/elan-fashion"
            className="group flex min-h-32 flex-col justify-center py-8 outline-none focus-visible:ring-2 focus-visible:ring-[#e5af1f] md:pl-8 md:text-right"
          >
            <span className="font-mono text-xs tracking-[0.16em] text-white/45 uppercase">
              Next Project
            </span>
            <span className="mt-2 flex items-center gap-3 text-xl font-bold transition-colors group-hover:text-[#e5af1f] md:justify-end">
              ÉLAN <ArrowRight size={20} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </nav>

      <section className="bg-[#e5af1f] px-6 py-24 text-center text-[#080808] md:py-32">
        <div className="container mx-auto max-w-4xl">
          <Sparkles size={38} aria-hidden="true" className="mx-auto mb-8" />
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Building a product that needs mobile, web, and full-stack execution?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-black/70">
            I design and build complete digital products—from strategy and
            cross-platform UI/UX to development, testing, and launch
            preparation.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center bg-[#080808] px-8 py-3 font-medium text-white transition-colors hover:bg-white hover:text-[#080808] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#080808] focus-visible:ring-offset-4 focus-visible:ring-offset-[#e5af1f]"
            >
              Start a Project
            </Link>
            <Link
              href="/work"
              className="inline-flex min-h-12 items-center justify-center border border-black/50 px-8 py-3 font-medium text-[#080808] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#080808] focus-visible:ring-offset-4 focus-visible:ring-offset-[#e5af1f]"
            >
              View More Work
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
