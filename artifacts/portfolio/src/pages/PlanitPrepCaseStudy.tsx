import { useEffect, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import type { Project } from "@/data/projects";

const challenges = [
  {
    title: "Personalization complexity",
    copy: "Meal recommendations needed to consider nutritional goals, dietary preferences, allergies, disliked ingredients, cuisine preferences, cooking time, appliances, and meal frequency.",
  },
  {
    title: "Different cooking routines",
    copy: "Some users want fresh daily meals, while others prefer preparing an entire week in advance. The product needed to support both behaviors without creating two disconnected experiences.",
  },
  {
    title: "Maintaining user control",
    copy: "AI-generated plans needed clear controls for regeneration, substitutions, feedback, and portion-related decisions.",
  },
  {
    title: "Information without overload",
    copy: "Calories, protein, carbohydrates, fats, ingredients, preparation time, instructions, and equipment all needed to remain accessible without overwhelming the main interface.",
  },
];

const goals = [
  "Create meal plans around each user’s lifestyle and nutrition goals",
  "Support both Daily Mode and Batch Mode",
  "Reduce the effort required to decide what to cook",
  "Present nutritional information in a clear, approachable way",
  "Give users control over regenerating and adjusting meals",
  "Learn from meal feedback and user preferences",
  "Reduce wasted groceries and last-minute meal decisions",
  "Make the journey from onboarding to meal preparation feel connected",
];

const responsibilities = [
  "Translating product requirements into user flows",
  "Structuring onboarding and preference collection",
  "Designing Daily Mode and Batch Mode experiences",
  "Defining the weekly planning interface",
  "Designing recipe and nutritional-detail screens",
  "Creating regeneration and feedback interactions",
  "Building reusable mobile components",
  "Maintaining visual and interaction consistency",
  "Preparing clear developer-ready designs",
];

const process = [
  {
    number: "01",
    title: "Discover",
    copy: "Mapped the decisions users make before planning meals, including goals, dietary requirements, cooking time, ingredient preferences, and household routines.",
  },
  {
    number: "02",
    title: "Define",
    copy: "Organized the product into focused flows: onboarding, authentication, plan generation, weekly navigation, recipe details, regeneration, feedback, and account management.",
  },
  {
    number: "03",
    title: "Design",
    copy: "Created a clean mobile interface that balances food imagery, nutrition information, actions, and planning controls.",
  },
  {
    number: "04",
    title: "Prototype",
    copy: "Connected the primary journeys to evaluate navigation, hierarchy, modal behavior, feedback states, and meal-plan adjustments.",
  },
  {
    number: "05",
    title: "Prepare for Development",
    copy: "Standardized reusable components, states, spacing, controls, and interaction rules for a consistent handoff.",
  },
];

const onboardingInputs = [
  "Age",
  "Gender",
  "Height and weight",
  "Activity level",
  "Dietary preferences",
  "Allergies",
  "Disliked foods",
  "Cuisine preferences",
  "Cooking time",
  "Meals per day",
  "Available appliances",
  "Daily or batch-cooking preference",
];

const authenticationDecisions = [
  "Familiar social sign-in patterns",
  "Clear primary and secondary actions",
  "Large touch-friendly controls",
  "Simple OTP verification",
  "Minimal visual distraction",
  "Consistent form styling",
  "Clear account-switching links",
];

const dailyExperience = [
  "Personal greeting",
  "Daily Mode and Batch Mode switching",
  "Weekly calendar navigation",
  "Breakfast, lunch, and dinner filters",
  "Meal imagery",
  "Calories and preparation time",
  "Protein, carbohydrate, and fat summaries",
  "Recipe access and regeneration controls",
  "Favorites and bottom navigation",
];

const mealDetails = [
  "Ingredients, Instructions, and Equipment tabs",
  "Total calorie summary",
  "Protein, carbohydrate, and fat totals",
  "Preparation time",
  "Regenerate action",
  "Prepare This Meal action",
];

const uxDecisions = [
  {
    title: "Daily Mode and Batch Mode",
    copy: "Users can choose a planning method that matches how they actually cook.",
  },
  {
    title: "Nutrition at a glance",
    copy: "Essential macros are visible on the home screen without requiring users to open a separate analytics dashboard.",
  },
  {
    title: "Progressive detail",
    copy: "Ingredients, instructions, and equipment are separated into focused tabs.",
  },
  {
    title: "Confirm destructive regeneration",
    copy: "Replacing a weekly plan requires clear confirmation because it affects meals, groceries, and tracking.",
  },
  {
    title: "Actionable feedback",
    copy: "Meal ratings collect specific reasons that can improve future recommendations.",
  },
];

const visualPrinciples = [
  "Clear hierarchy",
  "Generous touch targets",
  "Rounded mobile components",
  "Reusable cards and buttons",
  "Consistent modal behavior",
  "Friendly status colors",
  "Readable nutrition indicators",
  "Strong visual contrast",
  "Predictable navigation",
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 font-mono text-xs tracking-[0.22em] text-primary uppercase">
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
      viewport={{ once: true, amount: 0.12 }}
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
    <ul className={columns ? "grid gap-3 sm:grid-cols-2" : "space-y-3"}>
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-sm leading-relaxed text-foreground/75"
        >
          <Check
            size={17}
            aria-hidden="true"
            className="mt-0.5 shrink-0 text-[#24b8a6]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ImagePanel({
  src,
  alt,
  eager = false,
}: {
  src: string;
  alt: string;
  eager?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-[#dfe2f5] bg-[#eef0ff] shadow-[0_24px_70px_rgba(25,34,70,0.12)] md:rounded-[2rem]">
      <img
        src={src}
        alt={alt}
        width={1033}
        height={769}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding="async"
        className="h-auto w-full"
      />
    </div>
  );
}

function setMetaTag(
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);
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

export default function PlanitPrepCaseStudy({ project }: { project: Project }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Planit Prep 2.0 — Mobile App UI/UX Case Study";

    const restoreMeta = [
      setMetaTag(
        "name",
        "description",
        "A product design case study for Planit Prep 2.0, a personalized meal-planning mobile app supporting daily cooking, batch preparation, AI-generated recipes, nutrition tracking, regeneration, and meal feedback.",
      ),
      setMetaTag(
        "property",
        "og:title",
        "Planit Prep 2.0 — Mobile App UI/UX Case Study",
      ),
      setMetaTag(
        "property",
        "og:description",
        "A product design case study for a personalized meal-planning mobile app built around real routines.",
      ),
      setMetaTag(
        "property",
        "og:image",
        "/projects/planit-prep/planit-prep-cover.png",
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
    <article className="w-full overflow-hidden bg-white">
      <header className="relative bg-foreground px-6 pb-20 pt-16 text-background md:pb-28 md:pt-24">
        <div
          aria-hidden="true"
          className="absolute -right-24 top-8 h-72 w-72 rounded-full bg-[#31c8b2]/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#ff6f61]/10 blur-3xl"
        />

        <div className="container relative mx-auto max-w-6xl">
          <Link
            href="/work"
            className="mb-16 inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-[0.16em] text-muted transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-foreground"
          >
            <ArrowLeft size={15} aria-hidden="true" /> BACK TO SELECTED WORK
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.45fr_0.55fr] lg:items-end">
            <div>
              <div className="mb-6 font-mono text-xs tracking-[0.2em] text-[#6ee3d3] uppercase">
                Mobile Product Design · Health &amp; Wellness
              </div>
              <h1 className="max-w-4xl text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                Planit Prep 2.0
              </h1>
              <p className="mt-8 max-w-3xl text-2xl font-light leading-tight text-white md:text-3xl">
                Personalized meal planning designed around real life.
              </p>
              <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-muted/85">
                {project.overview}
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-7 border-t border-white/15 pt-7 lg:grid-cols-1">
              {[
                ["Role", project.role],
                ["Platform", project.platform ?? "iOS and Android"],
                ["Industry", project.industry],
                [
                  "Services",
                  "UX Strategy · Mobile UI · Prototyping · Design System",
                ],
                ["Year", project.year ?? "2026"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="mb-1 font-mono text-[0.6875rem] tracking-[0.18em] text-muted/60 uppercase">
                    {label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-white">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <Reveal className="mt-16 md:mt-24">
            <ImagePanel
              src="/projects/planit-prep/planit-prep-cover.png"
              alt="Planit Prep AI meal-planning application presented across three mobile screens with daily planning, generated recipe details, and meal feedback features."
              eager
            />
          </Reveal>
        </div>
      </header>

      <section className="px-6 py-24 md:py-32">
        <Reveal className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <SectionLabel>Overview</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              A flexible meal-planning system instead of another rigid diet app.
            </h2>
          </div>
          <div className="space-y-6 text-lg font-light leading-relaxed text-foreground/75">
            <p>
              Meal-planning products often expect users to follow a fixed
              routine. Real users have changing schedules, different cooking
              habits, dietary restrictions, food preferences, and nutrition
              goals.
            </p>
            <p>
              Planit Prep was designed as a flexible planning system. It creates
              personalized meal suggestions while giving users control over how
              they cook, when they prepare food, what they want to replace, and
              how much nutritional detail they need.
            </p>
            <blockquote className="border-l-4 border-[#31c8b2] bg-[#f0fbf8] p-7 text-xl font-medium leading-relaxed text-foreground">
              The goal was to make personalized meal planning feel supportive
              and adaptable—not restrictive.
            </blockquote>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-border bg-muted/20 px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="mb-14 max-w-3xl">
            <SectionLabel>The Challenge</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Turning complex nutrition preferences into a simple daily
              experience.
            </h2>
          </Reveal>
          <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {challenges.map((challenge, index) => (
              <div key={challenge.title} className="bg-white p-7 md:p-10">
                <div className="mb-8 font-mono text-xs tracking-[0.2em] text-[#ff6f61]">
                  0{index + 1}
                </div>
                <h3 className="mb-3 text-2xl font-bold">{challenge.title}</h3>
                <p className="leading-relaxed text-foreground/70">
                  {challenge.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>Project Goals</SectionLabel>
            <h2 className="mb-10 text-4xl font-bold tracking-tight md:text-5xl">
              What the experience needed to achieve.
            </h2>
            <CheckList items={goals} />
          </Reveal>
          <Reveal className="border border-border bg-foreground p-8 text-background md:p-12">
            <SectionLabel>My Role</SectionLabel>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Designing the experience from product structure to developer-ready
              UI.
            </h2>
            <p className="mb-10 leading-relaxed text-muted/85">
              I worked across the product experience, defining how users would
              personalize their meal plans, move between daily and batch
              planning, review recipes, understand nutrition, regenerate plans,
              and provide feedback.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6f61]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f3f1ff] px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="mb-14 max-w-3xl">
            <SectionLabel>Process</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              From lifestyle questions to a practical weekly plan.
            </h2>
          </Reveal>
          <ol className="grid border-l border-[#cfd0e8] md:grid-cols-5 md:border-l-0 md:border-t">
            {process.map((step) => (
              <li
                key={step.number}
                className="relative px-7 pb-10 md:px-5 md:pb-0 md:pt-10"
              >
                <span className="absolute -left-2 top-0 h-4 w-4 rounded-full border-4 border-[#f3f1ff] bg-primary md:-top-2 md:left-5" />
                <div className="mb-5 font-mono text-xs tracking-[0.18em] text-primary">
                  {step.number}
                </div>
                <h3 className="mb-3 text-lg font-bold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/65">
                  {step.copy}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <SectionLabel>01 · Personalized Setup</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Building a plan around the user—not forcing the user into a
                plan.
              </h2>
              <p className="mt-6 leading-relaxed text-foreground/70">
                The onboarding journey introduces the value of the product
                before collecting the information required to create a useful
                meal plan. The experience explains flexibility, reduced food
                waste, and personalized planning in a simple sequence.
              </p>
            </div>
            <ImagePanel
              src="/projects/planit-prep/planit-prep-onboarding.png"
              alt="Three Planit Prep onboarding screens introducing flexible meal preparation, reduced food waste, and personalized meal planning."
            />
          </Reveal>

          <Reveal className="mt-14 grid gap-10 border-t border-border pt-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <h3 className="text-2xl font-bold">
                Complex inputs, manageable decisions.
              </h3>
              <p className="mt-4 leading-relaxed text-foreground/70">
                The wider onboarding system divides personal, dietary, and
                practical information into focused steps instead of presenting
                one overwhelming form.
              </p>
              <p className="mt-6 border-l-4 border-[#ff6f61] pl-5 font-medium leading-relaxed">
                Progressive onboarding reduces cognitive load while helping the
                generated plan become more relevant.
              </p>
            </div>
            <CheckList items={onboardingInputs} columns />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-muted/20 px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <ImagePanel
              src="/projects/planit-prep/planit-prep-authentication.png"
              alt="Planit Prep Sign In, Sign Up, and Email Verification screens."
            />
            <div>
              <SectionLabel>02 · Simple Account Access</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Keeping authentication clear, familiar, and low-friction.
              </h2>
              <p className="my-7 leading-relaxed text-foreground/70">
                The authentication flow uses a focused hierarchy with email or
                phone entry, social sign-in options, verification states, and
                clear navigation between account creation and sign-in.
              </p>
              <CheckList items={authenticationDecisions} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-2">
            <div className="bg-white p-8 md:p-12">
              <SectionLabel>03 · Daily Meal Experience</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                A weekly plan that stays easy to understand one day at a time.
              </h2>
              <p className="my-7 leading-relaxed text-foreground/70">
                The home experience prioritizes the next useful decision:
                selecting the day, reviewing the planned meal, understanding the
                essential nutrition information, and opening the recipe when the
                user is ready to cook.
              </p>
              <CheckList items={dailyExperience} />
              <p className="mt-8 border-l-4 border-[#31c8b2] pl-5 font-medium leading-relaxed">
                Nutrition remains visible, but the food and the user’s next
                action stay central.
              </p>
            </div>
            <div className="bg-foreground p-8 text-background md:p-12">
              <div className="mb-5 font-mono text-xs tracking-[0.22em] text-[#6ee3d3] uppercase">
                04 · AI-Generated Meal Details
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Useful information at the moment the user needs it.
              </h2>
              <p className="my-7 leading-relaxed text-muted/80">
                The generated-meal screen brings together the meal image,
                calories, preparation time, macro totals, ingredients,
                instructions, equipment, and plan-adjustment controls.
              </p>
              <ul className="space-y-3">
                {mealDetails.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <Check
                      size={17}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-[#6ee3d3]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-l-4 border-[#ff6f61] pl-5 leading-relaxed text-white">
                Layered information architecture keeps the meal and primary
                nutrition visible before users move into preparation details.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f3f1ff] px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="mb-12 max-w-3xl">
            <SectionLabel>05 · Flexible Planning</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Helping users change the plan without losing control.
            </h2>
            <p className="mt-6 leading-relaxed text-foreground/70">
              Rather than treating regeneration as an invisible AI action, the
              interface explains what will change and asks for confirmation.
              Feedback options capture useful preference signals without turning
              the experience into a long survey.
            </p>
          </Reveal>
          <Reveal>
            <ImagePanel
              src="/projects/planit-prep/planit-prep-feedback.png"
              alt="Planit Prep controls for Light Bite, Full Indulgence, weekly-plan regeneration, and meal feedback."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Twist the Plan",
                copy: "Choose a Light Bite of 300 calories or less, or a richer Full Indulgence meal.",
              },
              {
                title: "Weekly regeneration",
                copy: "Explain changes to meals, groceries, and portion tracking before requiring explicit confirmation.",
              },
              {
                title: "Meal feedback",
                copy: "Capture Loved it, It’s okay, or Not good—with follow-up reasons for time, expense, taste, or macros.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-[#d9d8ec] bg-white p-7"
              >
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-medium">
            Users should understand the consequence of an action before
            committing to it.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="mb-14 max-w-3xl">
            <SectionLabel>Key UX Decisions</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Design choices that made the experience more practical.
            </h2>
          </Reveal>
          <div className="divide-y divide-border border-y border-border">
            {uxDecisions.map((decision, index) => (
              <div
                key={decision.title}
                className="grid gap-3 py-7 md:grid-cols-[5rem_0.75fr_1.25fr] md:items-start"
              >
                <div className="font-mono text-xs text-primary">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold">{decision.title}</h3>
                <p className="leading-relaxed text-foreground/70">
                  {decision.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground px-6 py-24 text-background md:py-32">
        <div className="container mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="mb-5 font-mono text-xs tracking-[0.22em] text-[#6ee3d3] uppercase">
              Visual System
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              A friendly interface for a product built around everyday habits.
            </h2>
            <p className="mt-7 leading-relaxed text-muted/80">
              The visual system combines a fresh mint primary color with warm
              coral actions, neutral surfaces, soft gradients, rounded cards,
              accessible controls, and food-led imagery. The aim was to make
              nutrition feel approachable rather than clinical.
            </p>
            <div
              className="mt-10 flex gap-3"
              aria-label="Planit Prep supporting colors"
            >
              {[
                ["Mint", "#31c8b2"],
                ["Coral", "#ff6f61"],
                ["Lavender", "#d9dcff"],
                ["Off-white", "#f8f8f5"],
              ].map(([name, color]) => (
                <div key={name} className="flex-1">
                  <div
                    className="h-14 border border-white/15"
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  />
                  <div className="mt-2 font-mono text-[0.625rem] tracking-wide text-muted/60 uppercase">
                    {name}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2">
            {visualPrinciples.map((principle, index) => (
              <div key={principle} className="bg-foreground p-6">
                <div className="mb-4 font-mono text-[0.625rem] text-[#ff8d83]">
                  0{index + 1}
                </div>
                <div className="font-medium text-white">{principle}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionLabel>The Solution</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                One connected experience from personal preferences to meal
                preparation.
              </h2>
              <p className="mt-7 text-lg font-light leading-relaxed text-foreground/70">
                The final product direction connects onboarding, weekly
                planning, meal details, regeneration, and feedback into a
                consistent system. Users can receive personalized meal
                recommendations while retaining control over their routine,
                nutritional visibility, and cooking decisions.
              </p>
            </div>
            <div className="border border-border bg-[#f0fbf8] p-8 md:p-10">
              <h3 className="mb-6 text-xl font-bold">Direction established</h3>
              <CheckList
                items={[
                  "A clearer path from setup to the first personalized plan",
                  "Greater flexibility for different cooking routines",
                  "More transparent control over generated recommendations",
                ]}
              />
            </div>
          </Reveal>

          <Reveal className="mt-20 border-t border-border pt-16">
            <SectionLabel>Outcome</SectionLabel>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                A scalable foundation for a more adaptive meal-planning product.
              </h2>
              <div className="space-y-5 text-lg font-light leading-relaxed text-foreground/70">
                <p>
                  Planit Prep 2.0 establishes a cohesive product experience that
                  can grow with additional personalization, grocery planning,
                  recommendation learning, and meal-preparation features.
                </p>
                <p>
                  The design balances automation with user control, helping the
                  product feel intelligent without making important decisions
                  feel hidden.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <nav
        aria-label="Case study navigation"
        className="border-y border-border bg-muted/20 px-6"
      >
        <div className="container mx-auto grid max-w-6xl md:grid-cols-2">
          <Link
            href="/work"
            className="group flex min-h-32 flex-col justify-center border-b border-border py-8 outline-none focus-visible:ring-2 focus-visible:ring-primary md:border-b-0 md:border-r md:pr-10"
          >
            <span className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
              Back to
            </span>
            <span className="mt-2 flex items-center gap-3 text-2xl font-bold transition-colors group-hover:text-primary">
              <ArrowLeft size={21} aria-hidden="true" /> Selected Work
            </span>
          </Link>
          <Link
            href="/work/fintech-dashboard"
            className="group flex min-h-32 flex-col justify-center py-8 outline-none focus-visible:ring-2 focus-visible:ring-primary md:pl-10 md:text-right"
          >
            <span className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
              Next Project
            </span>
            <span className="mt-2 flex items-center gap-3 text-2xl font-bold transition-colors group-hover:text-primary md:justify-end">
              Aura Financial <ArrowRight size={21} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </nav>

      <section className="bg-primary px-6 py-24 text-center text-white md:py-32">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Have an idea for a product people will use every day?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/85">
            I design clear, scalable digital experiences from early product
            thinking to developer-ready interfaces.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center bg-foreground px-8 py-3 font-medium text-background transition-colors hover:bg-white hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-primary"
            >
              Start a Project
            </Link>
            <Link
              href="/work"
              className="inline-flex min-h-12 items-center justify-center border border-white/60 px-8 py-3 font-medium text-white transition-colors hover:bg-white hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-primary"
            >
              View More Work
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
