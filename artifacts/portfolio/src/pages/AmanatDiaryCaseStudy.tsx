import { type ReactNode, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarClock,
  Check,
  Cloud,
  Code2,
  Database,
  Feather,
  LockKeyhole,
  Mic2,
  ShieldCheck,
  Sparkles,
  Smartphone,
  TestTube2,
} from "lucide-react";
import { Link } from "wouter";

import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const challenges = [
  {
    title: "Trust before registration",
    copy: "Users needed to understand that writing and reading could work without creating an account.",
  },
  {
    title: "Multiple memory formats",
    copy: "Written pages, voice recordings, future messages, images, and meaningful dates needed to feel like parts of one diary.",
  },
  {
    title: "Privacy without friction",
    copy: "Local storage, PIN access, backup, synchronization, and export choices needed plain language instead of security theatre.",
  },
  {
    title: "Future delivery with clarity",
    copy: "People needed to understand who a future memory was for, what it contained, and when it would become available.",
  },
  {
    title: "Warmth with technical credibility",
    copy: "The experience had to feel reflective and literary while still communicating dependable product behavior.",
  },
];

const productPrinciples = [
  {
    icon: LockKeyhole,
    title: "Private by choice",
    copy: "Core writing and reading remain available without requiring an account.",
  },
  {
    icon: Database,
    title: "Local-first core",
    copy: "Personal diary content begins on the user’s device, with cloud features presented as optional.",
  },
  {
    icon: Feather,
    title: "Human before technical",
    copy: "Actions use calm, familiar language that supports reflection instead of exposing system complexity.",
  },
  {
    icon: Cloud,
    title: "Explicit optional services",
    copy: "Backup and synchronization are framed as clear choices with understandable benefits.",
  },
];

const homeCapabilities = [
  "Quick writing and voice capture from the first screen",
  "Multiple diaries with distinct names, categories, covers, and accents",
  "A visible path to future memories without interrupting daily writing",
  "A simple timeline, calendar, and profile structure",
];

const privacyDecisions = [
  "No account required for core diary writing and reading",
  "Optional account creation for backup, restore, and synchronization",
  "Local PIN protection designed as an access-control layer",
  "Clear export and recovery choices",
  "Sensitive content kept out of promotional examples",
  "No claim of end-to-end encryption without implementation evidence",
];

const voiceFlow = [
  {
    step: "01",
    title: "Record naturally",
    copy: "Capture a spoken memory without forcing it into a written structure first.",
  },
  {
    step: "02",
    title: "Review the transcript",
    copy: "Keep the original recording visible while checking and editing the transcribed text.",
  },
  {
    step: "03",
    title: "Choose optional polish",
    copy: "Apply focused assistance such as grammar cleanup, diary style, or a more concise version.",
  },
  {
    step: "04",
    title: "Save as a diary page",
    copy: "Store the result in the selected diary so voice and written memories remain organized together.",
  },
];

const futureFlow = [
  "Choose whether the memory is for a future self, a loved one, an unlock date, or a reminder",
  "Select an existing diary page or record a new voice memory",
  "Add a personal title and message",
  "Choose tomorrow, one month, one year, or a custom date",
  "Review the delivery date before saving",
];

const systemAreas = [
  {
    icon: Smartphone,
    title: "Mobile application",
    items: ["React Native", "Expo", "TypeScript", "Responsive mobile UI"],
  },
  {
    icon: Database,
    title: "Local data",
    items: [
      "SQLite foundation",
      "Offline access",
      "Diary organization",
      "Export preparation",
    ],
  },
  {
    icon: Cloud,
    title: "Optional cloud",
    items: [
      "Authentication when requested",
      "Backup and restore",
      "Cross-device synchronization",
      "Supabase services",
    ],
  },
  {
    icon: Sparkles,
    title: "Assisted workflows",
    items: [
      "Voice transcription",
      "Editable transcripts",
      "Optional text polishing",
      "Notification scheduling",
    ],
  },
];

const launchPreparation = [
  "Core writing, editing, deleting, and diary-management states",
  "Audio permission, recording, interruption, and recovery behavior",
  "Future-memory scheduling and notification states",
  "PIN creation, retry, reset, and local access behavior",
  "Optional authentication, backup, restore, and synchronization paths",
  "Empty, loading, offline, error, and destructive-confirmation states",
  "Accessibility, readable contrast, touch targets, and reduced motion",
  "Store-listing assets, privacy language, and release-readiness review",
];

const palette = [
  { name: "Warm ivory", value: "#F8F1E7" },
  { name: "Soft cream", value: "#EFE1CC" },
  { name: "Sepia brown", value: "#6C452A" },
  { name: "Bronze", value: "#9C6B35" },
  { name: "Muted gold", value: "#C49A56" },
  { name: "Olive", value: "#66705A" },
  { name: "Dark chocolate", value: "#2D1A10" },
];

function SectionLabel({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "mb-5 font-mono text-xs tracking-[0.22em] uppercase",
        light ? "text-[#dfbb78]" : "text-[#8a5a2b]",
      )}
    >
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
  light = false,
  columns = false,
}: {
  items: string[];
  light?: boolean;
  columns?: boolean;
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
            className="mt-0.5 shrink-0 text-[#b67b39]"
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
        "overflow-hidden rounded-[1.5rem] border border-[#ddc9aa] bg-[#fbf6ee] p-2 shadow-[0_24px_70px_rgba(75,45,21,0.13)] md:rounded-[2rem] md:p-4",
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
          portrait ? "mx-auto max-h-[60rem] w-auto object-contain" : "w-full",
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

export default function AmanatDiaryCaseStudy({
  project,
}: {
  project: Project;
}) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title =
      "Amanat Diary — Private Voice and Memory Journal Case Study";

    const restoreMeta = [
      setMetaTag(
        "name",
        "description",
        "A multidisciplinary Amanat Diary case study covering product strategy, UI/UX, privacy design, brand identity, app-icon design, promotional graphics, and full-stack mobile launch preparation.",
      ),
      setMetaTag(
        "property",
        "og:title",
        "Amanat Diary — Private Voice and Memory Journal",
      ),
      setMetaTag(
        "property",
        "og:description",
        "A local-first diary for written memories, voice entries, multiple journals, future messages, and optional backup and synchronization.",
      ),
      setMetaTag(
        "property",
        "og:image",
        "/projects/amanat-diary/amanat-diary-cover.png",
      ),
      setMetaTag("property", "og:type", "article"),
    ];

    return () => {
      document.title = previousTitle;
      restoreMeta.forEach((restore) => restore());
    };
  }, []);

  return (
    <article className="w-full overflow-hidden bg-white">
      <header className="relative bg-[#28180f] px-6 pb-20 pt-16 text-white md:pb-28 md:pt-24">
        <div
          aria-hidden="true"
          className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-[#a66f34]/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
        />

        <div className="container relative mx-auto max-w-6xl">
          <Link
            href="/work"
            className="mb-16 inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-[0.16em] text-white/65 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a65e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#28180f]"
          >
            <ArrowLeft size={15} aria-hidden="true" /> BACK TO SELECTED WORK
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div>
              <div className="mb-6 font-mono text-xs tracking-[0.2em] text-[#dfbb78] uppercase">
                Private Journal · Mobile Product · Full-Stack
              </div>
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                Amanat Diary
              </h1>
              <p className="mt-8 max-w-3xl text-2xl font-light leading-tight text-white md:text-3xl">
                Private memories, beautifully kept.
              </p>
              <p className="mt-6 max-w-3xl text-lg font-light leading-relaxed text-white/70">
                Amanat Diary is a local-first personal memory vault that helps
                people write private journal entries, record voice memories,
                organize multiple diaries, schedule letters for the future, and
                preserve meaningful stories with optional backup and
                synchronization.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/15 bg-white/15 text-sm sm:grid-cols-2 lg:grid-cols-1">
              {[
                ["Role", "Product Designer & Full-Stack Mobile Developer"],
                ["Disciplines", "UI/UX · Branding · Graphic Design · App Icon"],
                ["Platform", project.platform ?? "iOS and Android"],
                ["Industry", "Personal Journaling · Memory Preservation"],
                ["Year", project.year ?? "2026"],
                [
                  "Technology",
                  "React Native · Expo · TypeScript · SQLite · Supabase",
                ],
              ].map(([label, value]) => (
                <div key={label} className="bg-[#28180f] p-4">
                  <div className="font-mono text-[0.68rem] tracking-[0.16em] text-white/45 uppercase">
                    {label}
                  </div>
                  <div className="mt-2 leading-relaxed text-white/85">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Reveal className="mt-16 md:mt-24">
            <MediaPanel
              src="/projects/amanat-diary/amanat-diary-cover.png"
              alt="Amanat Diary brand presentation and mobile home screen showing personal diaries, voice notes, future letters, backup, and synchronization features."
              width={1794}
              height={876}
              eager
            />
          </Reveal>
        </div>
      </header>

      <section className="border-b border-border px-6 py-24 md:py-32">
        <Reveal className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <SectionLabel>Overview</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              A diary designed to preserve more than written words.
            </h2>
          </div>
          <div className="space-y-6 text-lg font-light leading-relaxed text-foreground/70">
            <p>
              Traditional diary apps usually focus on typed entries. Amanat
              Diary was designed around a broader idea: people remember through
              writing, speaking, images, meaningful dates, and messages intended
              for the future.
            </p>
            <p>
              The product brings these formats into one private environment
              while allowing people to use the core diary without first creating
              an account.
            </p>
            <p className="border-l-2 border-[#b67b39] pl-6 text-xl font-medium text-foreground">
              The goal was to make digital journaling feel as personal and
              lasting as a physical diary, while adding the security, search,
              audio, scheduling, export, and backup benefits of a modern
              application.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-[#fbf8f3] px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="mb-14 max-w-4xl">
            <SectionLabel>The Challenge</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Creating emotional value without compromising privacy or
              simplicity.
            </h2>
          </Reveal>
          <div className="grid gap-px overflow-hidden border border-[#dfd2bf] bg-[#dfd2bf] md:grid-cols-2">
            {challenges.map((challenge, index) => (
              <Reveal
                key={challenge.title}
                className={cn(
                  "bg-white p-8 md:p-10",
                  index === challenges.length - 1 && "md:col-span-2",
                )}
              >
                <div className="mb-6 font-mono text-sm text-[#9c6b35]">
                  0{index + 1}
                </div>
                <h3 className="mb-3 text-2xl font-bold">{challenge.title}</h3>
                <p className="leading-relaxed text-foreground/65">
                  {challenge.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground px-6 py-24 text-background md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="mb-14 max-w-4xl">
            <SectionLabel light>Product Strategy</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Privacy is part of the product model—not a settings-page
              afterthought.
            </h2>
            <p className="mt-6 max-w-3xl text-lg font-light leading-relaxed text-white/65">
              The strategy separates the local diary experience from optional
              services. People can begin writing immediately, then decide later
              whether backup and cross-device access are valuable to them.
            </p>
          </Reveal>
          <div className="grid gap-px overflow-hidden border border-white/15 bg-white/15 md:grid-cols-2 lg:grid-cols-4">
            {productPrinciples.map(({ icon: Icon, title, copy }) => (
              <Reveal key={title} className="bg-foreground p-7">
                <Icon size={27} aria-hidden="true" className="text-[#dfbb78]" />
                <h3 className="mt-8 text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="mb-14 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <SectionLabel>Home Experience</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                A calm place to write, speak, and return.
              </h2>
            </div>
            <p className="text-lg font-light leading-relaxed text-foreground/70">
              The home experience makes today’s writing actions immediate while
              keeping multiple diaries and future memories visible without
              turning the screen into a dashboard.
            </p>
          </Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <Reveal>
              <MediaPanel
                src="/projects/amanat-diary/amanat-home-experience.png"
                alt="Amanat Diary home experience showing quick writing, voice capture, multiple diaries, and upcoming future memories."
                width={941}
                height={1672}
                portrait
              />
            </Reveal>
            <div className="space-y-10">
              <Reveal className="border-t border-border pt-8">
                <h3 className="mb-5 text-2xl font-bold">
                  One home for everyday memory keeping
                </h3>
                <CheckList items={homeCapabilities} />
              </Reveal>
              <Reveal>
                <MediaPanel
                  src="/projects/amanat-diary/amanat-diary-creation.png"
                  alt="Amanat Diary creation screen with diary name, category, cover style, and accent-color choices."
                  width={941}
                  height={1672}
                  portrait
                />
              </Reveal>
              <Reveal>
                <h3 className="mb-4 text-xl font-bold">
                  Personal structure without visual clutter
                </h3>
                <p className="leading-relaxed text-foreground/65">
                  Categories, cover styles, and accent colors help each diary
                  feel distinct while the underlying interaction model stays
                  consistent and easy to learn.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[#fbf8f3] px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <MediaPanel
              src="/projects/amanat-diary/amanat-private-by-choice.png"
              alt="Amanat Diary privacy screen explaining that an account is optional and only needed for backup, restore, and synchronization."
              width={941}
              height={1672}
              portrait
            />
            <div>
              <SectionLabel>Local-First Privacy</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Useful before an account ever exists.
              </h2>
              <p className="mt-6 text-lg font-light leading-relaxed text-foreground/70">
                The account decision is presented around benefits—not pressure.
                Writing, reading, and local diary protection remain available,
                while backup, restore, and synchronization are clearly described
                as optional services.
              </p>
              <div className="mt-10 border-t border-[#ddc9aa] pt-8">
                <CheckList items={privacyDecisions} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="mb-14 max-w-4xl">
            <SectionLabel>Security Design</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Clear controls, careful claims, and understandable recovery.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-foreground/70">
              Security language focuses on what the product can explain and
              support: local access control, explicit account choices, backup,
              restore, export, and visible confirmation for sensitive actions.
              The case study does not claim end-to-end encryption without
              verified implementation evidence.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: LockKeyhole,
                title: "Local access",
                copy: "PIN protection is treated as a clear device-access layer with retry and recovery states.",
              },
              {
                icon: ShieldCheck,
                title: "Explicit consent",
                copy: "Cloud features, destructive actions, exports, and restores require clear user intent.",
              },
              {
                icon: Cloud,
                title: "Optional resilience",
                copy: "Backup and synchronization are positioned as optional continuity features, not registration gates.",
              },
            ].map(({ icon: Icon, title, copy }) => (
              <Reveal key={title} className="border border-border p-8">
                <Icon size={28} aria-hidden="true" className="text-[#9c6b35]" />
                <h3 className="mt-8 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                  {copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground px-6 py-24 text-background md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div>
              <SectionLabel light>Voice &amp; AI-Assisted Writing</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                Keep the speaker’s meaning, then offer help by choice.
              </h2>
              <p className="mt-6 text-lg font-light leading-relaxed text-white/65">
                Voice memories retain the original recording beside an editable
                transcript. Assistance is optional and scoped to understandable
                actions instead of silently rewriting a personal memory.
              </p>
              <div className="mt-10 grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2">
                {voiceFlow.map((item) => (
                  <div key={item.step} className="bg-foreground p-6">
                    <div className="font-mono text-xs text-[#dfbb78]">
                      {item.step}
                    </div>
                    <h3 className="mt-5 font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {item.copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <MediaPanel
              src="/projects/amanat-diary/amanat-voice-diary.png"
              alt="Amanat Diary voice journal showing language selection, original audio, editable transcription, and optional AI-assisted text polishing."
              width={941}
              height={1672}
              portrait
            />
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
            <MediaPanel
              src="/projects/amanat-diary/amanat-future-memories.png"
              alt="Amanat Diary future-memory screen for choosing a recipient, selecting content, writing a message, and scheduling a delivery date."
              width={941}
              height={1672}
              portrait
            />
            <div>
              <SectionLabel>Future Memories</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Write now for a meaningful moment later.
              </h2>
              <p className="mt-6 text-lg font-light leading-relaxed text-foreground/70">
                Future memories extend the diary beyond reflection. A guided
                sequence helps people prepare a message for themselves or
                someone they care about, then choose exactly when it should
                become relevant.
              </p>
              <div className="mt-10">
                <CheckList items={futureFlow} />
              </div>
              <div className="mt-10 flex items-start gap-4 border-t border-border pt-8">
                <CalendarClock
                  size={26}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-[#9c6b35]"
                />
                <p className="leading-relaxed text-foreground/65">
                  Delivery language stays precise: the interface confirms the
                  chosen date and notification behavior without implying a
                  guaranteed external delivery service.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-[#fbf8f3] px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="mb-14 max-w-4xl">
            <SectionLabel>Brand Identity</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              A literary identity built around safekeeping and expression.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-foreground/70">
              The open book represents an ongoing personal record. The feather
              brings voice, authorship, and memory into the same mark, while
              warm materials and restrained metallic accents make the product
              feel enduring rather than nostalgic.
            </p>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <MediaPanel
                src="/projects/amanat-diary/amanat-brand-identity.png"
                alt="Amanat Diary brand identity with an open-book and feather mark, wordmark, and the line Your thoughts. Safely yours."
                width={1254}
                height={1254}
              />
            </Reveal>
            <Reveal>
              <MediaPanel
                src="/projects/amanat-diary/amanat-app-icon.png"
                alt="Amanat Diary app icon featuring a warm ivory book and bronze feather."
                width={512}
                height={512}
              />
              <div className="mt-8 grid gap-px overflow-hidden border border-[#ddc9aa] bg-[#ddc9aa] sm:grid-cols-2">
                {[
                  ["Book", "Personal records and continuity"],
                  ["Feather", "Voice, writing, and expression"],
                  ["Rounded icon", "A warm fit for modern mobile platforms"],
                  ["Bronze detail", "A sense of care and permanence"],
                ].map(([title, copy]) => (
                  <div key={title} className="bg-white p-5">
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-2 text-sm text-foreground/60">{copy}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-10 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <MediaPanel
              src="/projects/amanat-diary/amanat-brand-mark.png"
              alt="Embossed Amanat Diary open-book and feather brand mark on a warm bronze field."
              width={1024}
              height={1024}
            />
            <div>
              <SectionLabel>Visual System</SectionLabel>
              <h3 className="text-3xl font-bold tracking-tight">
                Warm enough to feel personal. Structured enough to scale.
              </h3>
              <p className="mt-5 max-w-2xl leading-relaxed text-foreground/65">
                Editorial hierarchy, generous spacing, readable controls, and
                restrained decorative details carry the brand from the product
                interface into promotional graphics and launch materials.
              </p>
              <div
                className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
                aria-label="Amanat Diary brand colors"
              >
                {palette.map((color) => (
                  <div
                    key={color.name}
                    className="border border-border bg-white p-3"
                  >
                    <div
                      aria-hidden="true"
                      className="h-16 border border-black/5"
                      style={{ backgroundColor: color.value }}
                    />
                    <div className="mt-3 text-xs font-medium">{color.name}</div>
                    <div className="mt-1 font-mono text-[0.65rem] text-muted-foreground">
                      {color.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#28180f] px-6 py-24 text-white md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="mb-14 max-w-4xl">
            <SectionLabel light>Full-Stack Development</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              A local-first product architecture with optional connected
              services.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-white/65">
              The development direction mirrors the product promise: core diary
              access is designed around device-local data, while identity,
              backup, restore, and synchronization are separate capabilities
              that can be introduced when a user chooses them.
            </p>
          </Reveal>
          <div className="grid gap-px overflow-hidden border border-white/15 bg-white/15 md:grid-cols-2 lg:grid-cols-4">
            {systemAreas.map(({ icon: Icon, title, items }) => (
              <Reveal key={title} className="bg-[#28180f] p-7">
                <Icon size={27} aria-hidden="true" className="text-[#dfbb78]" />
                <h3 className="mt-8 text-xl font-bold">{title}</h3>
                <ul className="mt-5 space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-sm text-white/55">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 grid gap-8 border-t border-white/15 pt-12 lg:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "Clear boundaries",
                copy: "Local content, optional identity, cloud backup, notifications, and assisted text workflows are treated as distinct responsibilities.",
              },
              {
                icon: ShieldCheck,
                title: "Privacy-aware behavior",
                copy: "Permissions, exports, cloud actions, and destructive changes are designed around explicit user intent.",
              },
              {
                icon: Mic2,
                title: "Resilient media flows",
                copy: "Voice capture accounts for permissions, interruptions, editing, saving, and recoverable error states.",
              },
            ].map(({ icon: Icon, title, copy }) => (
              <div key={title}>
                <Icon size={25} aria-hidden="true" className="text-[#dfbb78]" />
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {copy}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="grid gap-12 lg:grid-cols-[0.74fr_1.26fr]">
            <div>
              <SectionLabel>Testing &amp; Launch Preparation</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Preparing the complete experience—not claiming a launch before
                the evidence exists.
              </h2>
              <div className="mt-8 flex gap-4 border-t border-border pt-8">
                <TestTube2
                  size={27}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-[#9c6b35]"
                />
                <p className="leading-relaxed text-foreground/65">
                  Release work focuses on predictable states, privacy language,
                  permissions, recovery, accessibility, promotional assets, and
                  store-readiness review.
                </p>
              </div>
            </div>
            <div className="border border-border p-8 md:p-10">
              <CheckList items={launchPreparation} columns />
            </div>
          </Reveal>

          <Reveal className="mt-20 border-t border-border pt-16">
            <SectionLabel>Outcome</SectionLabel>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                One cohesive foundation for private writing, voice, and future
                memories.
              </h2>
              <div className="space-y-5 text-lg font-light leading-relaxed text-foreground/70">
                <p>
                  Amanat Diary brings product strategy, information
                  architecture, UI/UX, brand identity, logo and app-icon design,
                  promotional graphics, local-first mobile development,
                  voice-assisted workflows, optional cloud services, testing,
                  and launch preparation into one connected product direction.
                </p>
                <p>
                  The result is a technically credible, human-centered
                  foundation for preserving personal stories without making an
                  account the price of entry.
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
            href="/work/mahfooz"
            className="group flex min-h-32 flex-col justify-center border-b border-border py-8 outline-none focus-visible:ring-2 focus-visible:ring-primary md:border-b-0 md:border-r md:px-8"
          >
            <span className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
              Previous Project
            </span>
            <span className="mt-2 text-xl font-bold transition-colors group-hover:text-primary">
              Mahfooz
            </span>
          </Link>
          <Link
            href="/work/crunchtime-fitness"
            className="group flex min-h-32 flex-col justify-center py-8 outline-none focus-visible:ring-2 focus-visible:ring-primary md:pl-8 md:text-right"
          >
            <span className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
              Next Project
            </span>
            <span className="mt-2 flex items-center gap-3 text-xl font-bold transition-colors group-hover:text-primary md:justify-end">
              CrunchTime Fitness <ArrowRight size={20} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </nav>

      <section className="bg-primary px-6 py-24 text-center text-white md:py-32">
        <div className="container mx-auto max-w-4xl">
          <BookOpen size={38} aria-hidden="true" className="mx-auto mb-8" />
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Building a product that needs thoughtful design and dependable
            development?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/85">
            I help shape complete digital products—from strategy and interface
            design to brand identity, working applications, and launch
            preparation.
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
