import { useEffect, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const challenges = [
  {
    title: "Multiple family members",
    copy: "A single account needed to support different family relationships, ages, health routines, medicines, reports, notes, and individual circumstances.",
  },
  {
    title: "Different kinds of health information",
    copy: "Reports, medicines, doctor notes, reminders, appointments, pregnancy details, and daily habits required different interfaces while still belonging to one coherent system.",
  },
  {
    title: "Routine complexity",
    copy: "A person may need several medicine, hydration, exercise, or care actions across morning, afternoon, and night.",
  },
  {
    title: "Fast access during important moments",
    copy: "Users needed to locate and share reports or medicine information without navigating through a complicated record-management system.",
  },
  {
    title: "Trust and clarity",
    copy: "The interface needed to feel safe, calm, and understandable without making unsupported medical promises.",
  },
];

const goals = [
  "Create individual health profiles for family members",
  "Keep medicines, reports, notes, and routines organized",
  "Make daily health responsibilities easier to understand",
  "Support morning, afternoon, and night schedules",
  "Provide clear completion and missed-routine states",
  "Make reports searchable and easy to share",
  "Support pregnancy-specific information when relevant",
  "Provide useful reminders without overwhelming users",
  "Offer AI-assisted organization while keeping users in control",
  "Build a visual identity that communicates protection, family, and care",
  "Create reusable marketing graphics for product promotion",
  "Prepare the mobile experience for scalable development",
];

const contributions = [
  {
    number: "01",
    title: "Product Strategy",
    items: [
      "Product structure",
      "Feature planning",
      "Family-member architecture",
      "User flows",
      "Information hierarchy",
      "Feature prioritization",
    ],
  },
  {
    number: "02",
    title: "UI/UX Design",
    items: [
      "Mobile screens and navigation",
      "Reports and medicine routines",
      "Member profiles and reminder states",
      "Pregnancy and AI-assistance flows",
      "Interactive prototypes",
      "Developer-ready design system",
    ],
  },
  {
    number: "03",
    title: "Branding",
    items: [
      "Brand concept",
      "Logo direction",
      "Brand colors and typography",
      "Iconography",
      "Visual consistency",
      "Family-care positioning",
    ],
  },
  {
    number: "04",
    title: "Graphic and Social Design",
    items: [
      "Product feature graphics",
      "Social-media campaigns",
      "App promotional graphics",
      "Feature storytelling",
      "Marketing layouts",
    ],
  },
  {
    number: "05",
    title: "Full-Stack Development",
    items: [
      "React Native application",
      "Expo and TypeScript implementation",
      "Routing and local functionality",
      "API and backend integration",
      "AI feature integration",
      "Notifications and mobile build preparation",
    ],
  },
  {
    number: "06",
    title: "Product Delivery",
    items: [
      "Responsive behavior",
      "Runtime debugging",
      "Developer checks",
      "Website presentation",
      "Deployment preparation",
      "Ongoing feature refinement",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    copy: "Mapped the information families commonly need to organize, including medicines, reports, appointments, doctor notes, reminders, pregnancy records, and everyday health routines.",
  },
  {
    number: "02",
    title: "Structure",
    copy: "Created a member-based architecture so every family member could have independent routines and records while remaining accessible from one family account.",
  },
  {
    number: "03",
    title: "Design",
    copy: "Built a calm visual system with clear navigation, readable health statuses, large actions, reusable cards, and accessible information hierarchy.",
  },
  {
    number: "04",
    title: "Prototype",
    copy: "Connected key journeys including adding members, scheduling routines, viewing reports, tracking completion, reviewing profiles, and interacting with the AI assistant.",
  },
  {
    number: "05",
    title: "Build",
    copy: "Implemented the mobile product using React Native, Expo, TypeScript, API integration, notifications, and a backend service.",
  },
  {
    number: "06",
    title: "Refine",
    copy: "Improved responsive behavior, runtime stability, feature states, copy, developer handoff, and visual consistency across the application.",
  },
];

const familyRelationships = [
  "Self",
  "Husband or wife",
  "Son or daughter",
  "Father or mother",
  "Grandparents",
  "Other family relationships",
];

const familyDecisions = [
  "Clear member identity",
  "Relationship labels",
  "Individual record counts",
  "Quick switching between profiles",
  "One family overview",
  "Member-specific health history",
  "Conditional pregnancy information for relevant profiles",
];

const dashboardHighlights = [
  "Done, Today, and Missed counts",
  "Family-member filters",
  "Individual completion progress",
  "Notifications",
  "Quick access to detailed routines",
  "Home, Family, AI, and Profile navigation",
];

const routineHighlights = [
  "Routine progress",
  "Completed and missed states",
  "Time-of-day tabs",
  "Medicine actions",
  "Water-intake tracking",
  "Exercise and daily care",
  "Reminder strength",
  "Repeating routines",
  "Simple completion controls",
];

const medicineFields = [
  "Medicine name",
  "Dosage",
  "Timing",
  "Times per day",
  "Before or after food",
  "Routine period",
  "Completion state",
  "Reminder behavior",
  "Ongoing or fixed duration",
];

const habitHighlights = [
  "Daily goals",
  "Visual progress",
  "Increment controls",
  "Completion feedback",
  "Routine consistency",
  "Easy-to-understand status indicators",
];

const reportCapabilities = [
  "Default and custom folders",
  "Search by name, hospital, or doctor",
  "Date filtering and report categories",
  "Gallery or camera upload",
  "Multiple-image selection",
  "Report priority labels",
  "Folder-level and image sharing",
  "PDF export and selection mode",
  "Full-screen doctor view",
  "Swipe navigation and zoom",
  "Report metadata",
];

const assistantActions = [
  "Family summary",
  "Missed routines",
  "Recent reports",
  "Routine list",
  "Explanation of user-provided report information",
  "Navigation to relevant health records",
];

const designPrinciples = [
  "Calm visual hierarchy",
  "Large touch-friendly actions",
  "Consistent member identity",
  "Reusable profile and routine cards",
  "Clear completion states",
  "Searchable information",
  "Accessible typography",
  "Predictable modal behavior",
  "Color supported by labels and icons",
  "Consistent bottom navigation",
  "Scalable empty, loading, completed, pending, and missed states",
];

const responsiblePrinciples = [
  "Member-specific data organization",
  "Clear delete and sharing actions",
  "User-controlled report upload",
  "Explicit confirmation for destructive actions",
  "No hidden automatic diagnosis",
  "Clear distinction between organization and medical advice",
  "Private information not used as marketing content",
  "Error messages that do not expose service-provider details",
  "Accessible status communication",
  "Sensitive information shown only where relevant",
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
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function CheckList({
  items,
  columns = false,
  light = false,
}: {
  items: string[];
  columns?: boolean;
  light?: boolean;
}) {
  return (
    <ul className={columns ? "grid gap-3 sm:grid-cols-2" : "space-y-3"}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "flex gap-3 text-sm leading-relaxed",
            light ? "text-white/75" : "text-foreground/75",
          )}
        >
          <Check
            size={17}
            aria-hidden="true"
            className="mt-0.5 shrink-0 text-[#16b8aa]"
          />
          <span>{item}</span>
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
  portrait = false,
  eager = false,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  portrait?: boolean;
  eager?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.5rem] border border-[#cde5e2] bg-[#f3fbfa] p-2 shadow-[0_24px_70px_rgba(2,70,76,0.12)] md:rounded-[2rem] md:p-4",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding="async"
        className={cn(
          "h-auto max-w-full rounded-[1rem] md:rounded-[1.25rem]",
          portrait ? "mx-auto max-h-[56rem] w-auto object-contain" : "w-full",
        )}
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

export default function MahfoozCaseStudy({ project }: { project: Project }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title =
      "Mahfooz — Family Health Organizer UI/UX, Branding and Development Case Study";

    const restoreMeta = [
      setMetaTag(
        "name",
        "description",
        "A multidisciplinary case study covering product strategy, UI/UX design, branding, app-icon design, social-media graphics, and full-stack development for Mahfooz, a family health organizer.",
      ),
      setMetaTag(
        "property",
        "og:title",
        "Mahfooz — Family Health Organizer UI/UX, Branding and Development Case Study",
      ),
      setMetaTag(
        "property",
        "og:description",
        "Product strategy, UI/UX, brand identity, campaign design, and full-stack mobile development for a family health organizer.",
      ),
      setMetaTag("property", "og:image", "/projects/mahfooz/mahfooz-cover.png"),
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
      <header className="relative bg-[#062b33] px-6 pb-20 pt-16 text-white md:pb-28 md:pt-24">
        <div
          aria-hidden="true"
          className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#17c3b2]/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-primary/15 blur-3xl"
        />

        <div className="container relative mx-auto max-w-6xl">
          <Link
            href="/work"
            className="mb-16 inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-[0.16em] text-white/65 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#28d8c6] focus-visible:ring-offset-4 focus-visible:ring-offset-[#062b33]"
          >
            <ArrowLeft size={15} aria-hidden="true" /> BACK TO SELECTED WORK
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div>
              <div className="mb-6 font-mono text-xs tracking-[0.2em] text-[#68e4d8] uppercase">
                HealthTech · Mobile Product · Brand &amp; Development
              </div>
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                Mahfooz
              </h1>
              <p className="mt-8 max-w-3xl text-2xl font-light leading-tight text-white md:text-3xl">
                One secure place for the everyday health of the whole family.
              </p>
              <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/70">
                Mahfooz is a family health organizer designed to bring
                medicines, reports, doctor notes, reminders, daily routines,
                pregnancy information, and family health records into one clear
                and manageable experience.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-7 border-t border-white/15 pt-7 lg:grid-cols-1">
              {[
                ["Role", "Product Designer and Full-Stack Mobile Developer"],
                [
                  "Additional disciplines",
                  "UI/UX · Branding · Graphic Design · App Icon · Social Media",
                ],
                ["Platform", project.platform ?? "iOS and Android"],
                ["Industry", "Family Health · Health Technology"],
                ["Year", project.year ?? "2026"],
                [
                  "Services",
                  "Product Strategy · UI/UX · Brand Identity · Mobile Development",
                ],
                ["Technology", "React Native · Expo · TypeScript · FastAPI"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="mb-1 font-mono text-[0.6875rem] tracking-[0.18em] text-white/45 uppercase">
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
            <MediaPanel
              src="/projects/mahfooz/mahfooz-cover.png"
              alt="Mahfooz family health organizer branding and three mobile screens showing family records, the daily health dashboard, and a pregnancy profile."
              width={1024}
              height={500}
              eager
              className="border-white/10 bg-[#0a6268] p-1 md:p-2"
            />
          </Reveal>
        </div>
      </header>

      <section className="px-6 py-24 md:py-32">
        <Reveal className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <SectionLabel>Overview</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Family health information is important—but often scattered.
            </h2>
          </div>
          <div className="space-y-6 text-lg font-light leading-relaxed text-foreground/75">
            <p>
              Families commonly manage medicine schedules, laboratory reports,
              prescriptions, doctor notes, appointments, routines, and pregnancy
              information through separate chats, paper files, photo galleries,
              alarms, and memory.
            </p>
            <p>
              Mahfooz was designed to turn that fragmented experience into one
              organized family health space. Each family member receives an
              individual profile while the primary user can understand routines,
              records, reminders, and recent activity from one connected
              dashboard.
            </p>
            <blockquote className="border-l-4 border-[#16b8aa] bg-[#effaf8] p-7 text-xl font-medium leading-relaxed text-foreground">
              The product goal was not to replace healthcare professionals. It
              was to help families organize everyday health information and
              routines more clearly.
            </blockquote>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-border bg-muted/20 px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="mb-14 max-w-3xl">
            <SectionLabel>The Challenge</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Organizing complex family information without making the product
              feel clinical.
            </h2>
          </Reveal>
          <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {challenges.map((challenge, index) => (
              <div
                key={challenge.title}
                className={cn(
                  "bg-white p-7 md:p-10",
                  index === challenges.length - 1 && "md:col-span-2",
                )}
              >
                <div className="mb-8 font-mono text-xs tracking-[0.2em] text-[#078b83]">
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
        <div className="container mx-auto max-w-6xl">
          <Reveal className="mb-12 max-w-3xl">
            <SectionLabel>Goals</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              What the complete product needed to achieve.
            </h2>
          </Reveal>
          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {goals.map((goal, index) => (
              <div key={goal} className="bg-white p-6 md:p-7">
                <div className="mb-5 font-mono text-[0.6875rem] text-[#16a89d]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="font-medium leading-relaxed">{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#062b33] px-6 py-24 text-white md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="mb-14 max-w-4xl">
            <div className="mb-5 font-mono text-xs tracking-[0.22em] text-[#68e4d8] uppercase">
              My Contribution
            </div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Designing, branding, and building the product as one connected
              system.
            </h2>
            <p className="mt-6 max-w-3xl text-lg font-light leading-relaxed text-white/70">
              My work covered the full product journey—from defining the
              information architecture and designing the mobile experience to
              creating the brand identity, app icon, launch graphics,
              social-media designs, and full-stack mobile implementation.
            </p>
          </Reveal>
          <div className="grid gap-px overflow-hidden border border-white/15 bg-white/15 md:grid-cols-2 lg:grid-cols-3">
            {contributions.map((contribution) => (
              <div key={contribution.title} className="bg-[#062b33] p-7 md:p-9">
                <div className="mb-8 font-mono text-xs text-[#62dcd0]">
                  {contribution.number}
                </div>
                <h3 className="mb-6 text-2xl font-bold">
                  {contribution.title}
                </h3>
                <CheckList items={contribution.items} light />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eff8f7] px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="mb-14 max-w-3xl">
            <SectionLabel>Process</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              From fragmented health tasks to one manageable family system.
            </h2>
          </Reveal>
          <ol className="grid border-l border-[#b9d9d5] md:grid-cols-3 md:border-l-0 md:border-t lg:grid-cols-6">
            {process.map((step) => (
              <li
                key={step.number}
                className="relative px-7 pb-10 md:px-5 md:pb-10 md:pt-10"
              >
                <span className="absolute -left-2 top-0 h-4 w-4 rounded-full border-4 border-[#eff8f7] bg-[#0aa296] md:-top-2 md:left-5" />
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
          <Reveal className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <MediaPanel
              src="/projects/mahfooz/mahfooz-family-management.png"
              alt="Mahfooz family management graphic showing father, mother, son, and daughter profiles connected to one protected family account."
              width={1254}
              height={1254}
            />
            <div>
              <SectionLabel>01 · Family Organization</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Separate health information for every member, managed from one
                account.
              </h2>
              <p className="my-7 leading-relaxed text-foreground/70">
                Mahfooz uses a member-based system rather than storing all
                information in one shared list. Each family member has an
                individual profile with personal routines, reports, notes, and
                relevant health information.
              </p>
              <h3 className="mb-4 text-lg font-bold">
                Supported relationships
              </h3>
              <CheckList items={familyRelationships} columns />
            </div>
          </Reveal>
          <Reveal className="mt-14 grid gap-10 border-t border-border pt-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h3 className="text-2xl font-bold">
                One family, clear individual context.
              </h3>
              <p className="mt-4 leading-relaxed text-foreground/70">
                Profile identity remains visible throughout the experience so
                records and routines stay connected to the correct person.
              </p>
            </div>
            <CheckList items={familyDecisions} columns />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-muted/20 px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <SectionLabel>02 · Daily Overview</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Making today’s responsibilities immediately visible.
              </h2>
              <p className="my-7 leading-relaxed text-foreground/70">
                The home dashboard summarizes what is completed, what is
                scheduled today, and what has been missed. Family filters make
                each member’s routine status accessible without leaving the main
                screen.
              </p>
              <CheckList items={dashboardHighlights} />
              <p className="mt-8 border-l-4 border-[#16b8aa] pl-5 font-medium leading-relaxed">
                Prioritize what requires attention now while keeping the wider
                family context available.
              </p>
            </div>
            <MediaPanel
              src="/projects/mahfooz/mahfooz-home-routines.png"
              alt="Mahfooz home dashboard displaying completed, scheduled, and missed family health routines."
              width={941}
              height={1672}
              portrait
            />
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="mb-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <SectionLabel>03 · Routine Tracking</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Organizing medicines, water, exercise, and daily care by time of
                day.
              </h2>
            </div>
            <div>
              <p className="leading-relaxed text-foreground/70">
                Health routines are grouped into morning, afternoon, and night
                so users can understand their day without reviewing one long
                undifferentiated task list. High-level progress appears first,
                with individual actions available when needed.
              </p>
              <div className="mt-7">
                <CheckList items={routineHighlights} columns />
              </div>
            </div>
          </Reveal>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <MediaPanel
                src="/projects/mahfooz/mahfooz-routine-system.png"
                alt="Mahfooz routine system organizing medicines, water, exercise, and daily care into morning, afternoon, and night."
                width={1254}
                height={1254}
              />
            </Reveal>
            <Reveal>
              <MediaPanel
                src="/projects/mahfooz/mahfooz-routine-detail.png"
                alt="Mahfooz detailed routine screen showing progress, medicine completion, and water-intake controls."
                width={941}
                height={1672}
                portrait
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#eff8f7] px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <MediaPanel
              src="/projects/mahfooz/mahfooz-medicine-management.png"
              alt="Mahfooz medicine routine showing multiple medicines, doses, timing, meal instructions, and completion states."
              width={1254}
              height={1254}
            />
            <div>
              <SectionLabel>04 · Medicine Management</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Multiple medicines organized into practical routines.
              </h2>
              <p className="my-7 leading-relaxed text-foreground/70">
                Users can organize medicines by routine, dosage, schedule, and
                meal instruction, reducing the need to manage separate alarms
                for every medicine.
              </p>
              <CheckList items={medicineFields} columns />
              <p className="mt-8 border border-[#c7e3df] bg-white p-5 text-sm leading-relaxed text-foreground/70">
                Mahfooz helps organize medicine routines but does not provide
                prescriptions or replace advice from qualified healthcare
                professionals.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <SectionLabel>05 · Habit Progress</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Helping small everyday actions remain visible.
              </h2>
              <p className="my-7 leading-relaxed text-foreground/70">
                Not every health responsibility is a medical record. Mahfooz
                also supports everyday habits such as hydration, exercise,
                sleep, and general health checks.
              </p>
              <CheckList items={habitHighlights} />
              <p className="mt-8 border-l-4 border-[#16b8aa] pl-5 font-medium leading-relaxed">
                Progress should feel encouraging and informative rather than
                punitive.
              </p>
            </div>
            <MediaPanel
              src="/projects/mahfooz/mahfooz-health-habits.png"
              alt="Mahfooz health-habit graphic showing water-intake progress and medicine, exercise, health-check, and sleep routines."
              width={1254}
              height={1254}
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-muted/20 px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <MediaPanel
              src="/projects/mahfooz/mahfooz-report-management.png"
              alt="Mahfooz reports screen showing member information, report folders, search, date filters, report categories, and upload controls."
              width={941}
              height={1672}
              portrait
            />
            <div>
              <SectionLabel>06 · Reports</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Reports organized by member, folder, date, and type.
              </h2>
              <p className="my-7 leading-relaxed text-foreground/70">
                The reports experience helps users store and find medical
                documents without depending on an unorganized phone gallery.
              </p>
              <CheckList items={reportCapabilities} />
              <p className="mt-7 text-sm leading-relaxed text-foreground/60">
                Standard report upload remains user-controlled. The Smart Report
                Analyzer is a separate optional experience rather than an
                automatic part of every upload.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <SectionLabel>07 · AI-Assisted Organization</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Quick access to family summaries, reports, and routine
                information.
              </h2>
              <p className="my-7 leading-relaxed text-foreground/70">
                The AI assistant provides a conversational entry point for
                navigating family information, reviewing summaries, and
                accessing relevant records or routines.
              </p>
              <CheckList items={assistantActions} />
              <p className="mt-8 border border-[#c7e3df] bg-[#effaf8] p-5 text-sm leading-relaxed text-foreground/70">
                The assistant supports information organization and general
                explanation. It is not a doctor, diagnostic system, emergency
                service, or substitute for professional medical advice.
              </p>
            </div>
            <MediaPanel
              src="/projects/mahfooz/mahfooz-ai-assistant.png"
              alt="Mahfooz AI assistant screen offering family summaries, missed routines, recent reports, and routine-list actions."
              width={941}
              height={1672}
              portrait
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#062b33] px-6 py-24 text-white md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="mb-5 font-mono text-xs tracking-[0.22em] text-[#68e4d8] uppercase">
                08 · Relevant Personal Tracking
              </div>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Supporting pregnancy information within the same family profile.
              </h2>
              <p className="mt-7 leading-relaxed text-white/70">
                For relevant family profiles, the product can include
                pregnancy-specific information alongside reports, routines,
                notes, and appointments. The pregnancy profile remains visible
                in the hero presentation as part of the same family system.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2">
              {[
                "Pregnancy status",
                "Trimester",
                "Week and day count",
                "Estimated due date",
                "Appointments",
                "Weight records",
                "Notes",
                "Member-specific organization",
              ].map((item) => (
                <div key={item} className="bg-[#062b33] p-6 font-medium">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
          <p className="mt-10 border-l-4 border-[#16b8aa] pl-5 text-sm leading-relaxed text-white/65">
            Pregnancy information is organizational and remains attached to the
            correct family profile; it does not provide clinical pregnancy
            monitoring.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="mx-auto w-full max-w-md">
              <MediaPanel
                src="/projects/mahfooz/mahfooz-app-icon.png"
                alt="Mahfooz teal app icon featuring a family protected inside a shield with a crescent and supportive hands."
                width={1254}
                height={1254}
              />
            </div>
            <div>
              <SectionLabel>Brand Identity</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                A symbol of family, care, protection, and trust.
              </h2>
              <p className="mt-6 text-xl font-medium text-[#087b74]">
                Care. Protect. Thrive Together.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  ["Shield", "Protection and privacy"],
                  ["Family figures", "Shared family care"],
                  ["Supporting hands", "Help and organization"],
                  ["Crescent", "A meaningful, recognizable element"],
                  ["Teal", "Calmness, clarity, trust, and wellbeing"],
                  ["Rounded form", "A modern mobile-platform fit"],
                ].map(([title, copy]) => (
                  <div key={title} className="border border-border p-5">
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-1 text-sm text-foreground/65">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#eff8f7] px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <MediaPanel
              src="/projects/mahfooz/mahfooz-social-reminders.png"
              alt="Mahfooz social-media campaign graphic about medicine, water, exercise, daily care, and on-time health routine reminders."
              width={1254}
              height={1254}
            />
            <div>
              <SectionLabel>Campaign Design</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Turning product features into clear, shareable visual stories.
              </h2>
              <p className="my-7 leading-relaxed text-foreground/70">
                The graphic-design system translates complex app features into
                simple campaign messages. Each visual uses a consistent brand
                framework while focusing on one clear benefit.
              </p>
              <CheckList
                items={[
                  "Consistent logo placement",
                  "Reusable headline hierarchy",
                  "Teal brand palette",
                  "Product UI as supporting evidence",
                  "Family-centered visual storytelling",
                  "Clear feature icons",
                  "Repeatable footer and CTA structure",
                  "Social-friendly square compositions",
                ]}
                columns
              />
              <p className="mt-7 text-sm leading-relaxed text-foreground/60">
                The campaign covers family management, medicine organization,
                reminders, water and habit tracking, reports, daily care, and AI
                assistance without repeating the duplicate supplied graphic.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel>Product Design System</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                One reusable visual language across health records, routines,
                and family profiles.
              </h2>
              <p className="mt-7 leading-relaxed text-foreground/70">
                The mobile design system combines neutral content surfaces with
                teal actions, readable status colors, rounded containers,
                generous touch targets, and consistent navigation.
              </p>
              <div
                className="mt-9 flex gap-3"
                aria-label="Mahfooz brand colors"
              >
                {[
                  ["Deep teal", "#006b70"],
                  ["Turquoise", "#16b8aa"],
                  ["Soft mint", "#dff5f1"],
                  ["Dark navy", "#062b33"],
                  ["White", "#ffffff"],
                ].map(([name, color]) => (
                  <div key={name} className="min-w-0 flex-1">
                    <div
                      aria-hidden="true"
                      className="h-14 border border-border"
                      style={{ backgroundColor: color }}
                    />
                    <div className="mt-2 truncate font-mono text-[0.5625rem] tracking-wide text-muted-foreground uppercase">
                      {name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
              {designPrinciples.map((principle, index) => (
                <div key={principle} className="bg-white p-6">
                  <div className="mb-4 font-mono text-[0.625rem] text-[#078b83]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="font-medium">{principle}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-foreground px-6 py-24 text-background md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="mb-14 max-w-4xl">
            <div className="mb-5 font-mono text-xs tracking-[0.22em] text-[#68e4d8] uppercase">
              Development
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Moving from interface design to a functioning mobile product.
            </h2>
            <p className="mt-7 max-w-3xl text-lg font-light leading-relaxed text-muted/80">
              Mahfooz was developed as a React Native mobile application using
              Expo and TypeScript, with a FastAPI backend service supporting
              connected functionality and AI-assisted features.
            </p>
          </Reveal>
          <div className="grid gap-px overflow-hidden border border-white/15 bg-white/15 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Mobile frontend",
                items: [
                  "React Native, Expo SDK, and TypeScript",
                  "Expo Router and mobile navigation",
                  "Reusable UI components",
                  "Forms, state, and device permissions",
                  "Report-image and notification workflows",
                ],
              },
              {
                title: "Backend",
                items: [
                  "FastAPI endpoints",
                  "Validation and error handling",
                  "AI-service integration",
                  "Environment-based configuration",
                ],
              },
              {
                title: "Product functionality",
                items: [
                  "Family profiles and routines",
                  "Reports, folders, and notes",
                  "Pregnancy tracking",
                  "Sharing and PDF export",
                  "AI-assisted information access",
                ],
              },
              {
                title: "Delivery",
                items: [
                  "Product website presentation",
                  "Android build preparation",
                  "Runtime and TypeScript checks",
                  "Responsive testing",
                  "Deployment preparation",
                ],
              },
            ].map((area) => (
              <div key={area.title} className="bg-foreground p-7 md:p-9">
                <h3 className="mb-6 text-xl font-bold text-white">
                  {area.title}
                </h3>
                <CheckList items={area.items} light />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionLabel>Responsible Product Design</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Health information requires clarity, restraint, and user control.
            </h2>
            <div className="mt-8 flex items-start gap-4 border border-[#c7e3df] bg-[#effaf8] p-6">
              <ShieldCheck
                size={28}
                aria-hidden="true"
                className="shrink-0 text-[#078b83]"
              />
              <p className="text-sm leading-relaxed text-foreground/70">
                Mahfooz is presented as an organizational product. No
                regulatory, clinical, diagnostic, or medical-outcome claims are
                made.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <CheckList items={responsiblePrinciples} columns />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-muted/20 px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionLabel>The Solution</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                One connected product across records, routines, family care, and
                communication.
              </h2>
              <p className="mt-7 text-lg font-light leading-relaxed text-foreground/70">
                The final Mahfooz product direction combines family profiles,
                medicines, reports, reminders, routines, pregnancy information,
                and AI-assisted access inside one consistent experience. Brand
                identity, interface design, promotional graphics, and mobile
                implementation were developed as parts of the same system.
              </p>
            </div>
            <div className="border border-[#c7e3df] bg-white p-8 md:p-10">
              <h3 className="mb-6 text-xl font-bold">Foundation established</h3>
              <CheckList
                items={[
                  "A clearer structure for multiple family members",
                  "One connected experience for records and everyday routines",
                  "Easier access to reports and medicine information",
                  "Consistent design across the app and marketing materials",
                  "A scalable foundation for future product development",
                ]}
              />
            </div>
          </Reveal>

          <Reveal className="mt-20 border-t border-border pt-16">
            <SectionLabel>Outcome</SectionLabel>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                A complete family-health product foundation—from identity to
                implementation.
              </h2>
              <div className="space-y-5 text-lg font-light leading-relaxed text-foreground/70">
                <p>
                  Mahfooz demonstrates a full product approach rather than a
                  single design deliverable. The work brings together product
                  strategy, UI/UX, brand identity, app-icon design, campaign
                  graphics, social-media communication, mobile development,
                  backend integration, and delivery preparation.
                </p>
                <p>
                  The result is a cohesive foundation for helping families
                  organize health information and everyday care more clearly.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <nav
        aria-label="Case study navigation"
        className="border-y border-border bg-white px-6"
      >
        <div className="container mx-auto grid max-w-6xl md:grid-cols-3">
          <Link
            href="/work"
            className="group flex min-h-32 flex-col justify-center border-b border-border py-8 outline-none focus-visible:ring-2 focus-visible:ring-primary md:border-b-0 md:border-r md:pr-8"
          >
            <span className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
              Back to
            </span>
            <span className="mt-2 flex items-center gap-3 text-xl font-bold transition-colors group-hover:text-primary">
              <ArrowLeft size={20} aria-hidden="true" /> Selected Work
            </span>
          </Link>
          <Link
            href="/work/planit-prep"
            className="group flex min-h-32 flex-col justify-center border-b border-border py-8 outline-none focus-visible:ring-2 focus-visible:ring-primary md:border-b-0 md:border-r md:px-8"
          >
            <span className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
              Previous Project
            </span>
            <span className="mt-2 text-xl font-bold transition-colors group-hover:text-primary">
              Planit Prep 2.0
            </span>
          </Link>
          <Link
            href="/work/amanat-diary"
            className="group flex min-h-32 flex-col justify-center py-8 outline-none focus-visible:ring-2 focus-visible:ring-primary md:pl-8 md:text-right"
          >
            <span className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
              Next Project
            </span>
            <span className="mt-2 flex items-center gap-3 text-xl font-bold transition-colors group-hover:text-primary md:justify-end">
              Amanat Diary <ArrowRight size={20} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </nav>

      <section className="bg-primary px-6 py-24 text-center text-white md:py-32">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Building a product that needs design, branding, and development?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/85">
            I help turn product ideas into complete digital experiences—from
            strategy and interface design to brand identity and working
            applications.
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
