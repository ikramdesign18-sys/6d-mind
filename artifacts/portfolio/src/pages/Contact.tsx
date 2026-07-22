import {
  ArrowRight,
  ExternalLink,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
} from "lucide-react";
import { SiDribbble, SiFiverr } from "react-icons/si";

import EditorialReveal from "@/components/brand/EditorialReveal";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/data/contact";
import { usePageMetadata } from "@/lib/use-page-metadata";

const briefPoints = [
  "What you are building or improving",
  "Who the product is for",
  "The current challenge or opportunity",
  "The services you may need",
  "Any preferred timeline or launch date",
] as const;

export default function Contact() {
  usePageMetadata(
    "Start a Project — Contact 6D Mind",
    "Contact 6D Mind to discuss product strategy, UI/UX design, mobile and web development, branding, graphic design, or launch preparation.",
  );

  return (
    <article className="w-full bg-background text-foreground">
      <section className="relative overflow-hidden bg-foreground px-6 py-20 text-background md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="container relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <EditorialReveal>
            <div className="font-mono text-xs tracking-[0.24em] text-primary uppercase">
              Start a Project
            </div>
            <h1 className="mt-6 text-5xl font-bold leading-[0.96] tracking-tighter text-white md:text-7xl lg:text-[5.4rem]">
              Tell us what you are building.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed font-light text-white/70">
              Share your idea, current product, or challenge. We will review the
              requirements and help identify the right strategy, design,
              development, branding, or launch solution.
            </p>
          </EditorialReveal>
          <EditorialReveal
            delay={0.06}
            className="border-t border-white/15 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"
          >
            <p className="text-sm leading-relaxed text-white/55">
              Email is the most reliable way to share a project brief. The
              address below opens your email application directly—there is no
              unverified form or hidden submission service.
            </p>
            <a
              href={CONTACT_INFO.emailHref}
              aria-label={`Email 6D Mind at ${CONTACT_INFO.email}`}
              className="mt-6 inline-flex min-h-12 max-w-full items-center gap-3 bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Mail size={19} aria-hidden="true" />
              <span className="break-all">Send an Email</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </EditorialReveal>
        </div>
      </section>

      <section className="border-b border-border bg-white px-6 py-20 md:py-24">
        <div className="container mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={CONTACT_INFO.emailHref}
            aria-label={`Email 6D Mind at ${CONTACT_INFO.email}`}
            className="group min-h-48 bg-white p-7 transition-colors hover:bg-muted/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
          >
            <Mail className="text-primary" aria-hidden="true" />
            <h2 className="mt-8 text-xl font-bold">Send an Email</h2>
            <p className="mt-2 break-all text-sm text-muted-foreground">
              {CONTACT_INFO.email}
            </p>
          </a>
          <a
            href={CONTACT_INFO.phoneHref}
            aria-label={`Call 6D Mind at ${CONTACT_INFO.phoneDisplay}`}
            className="group min-h-48 bg-white p-7 transition-colors hover:bg-muted/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
          >
            <Phone className="text-primary" aria-hidden="true" />
            <h2 className="mt-8 text-xl font-bold">Call</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {CONTACT_INFO.phoneDisplay}
            </p>
          </a>
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="group min-h-48 bg-white p-7 transition-colors hover:bg-muted/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
            >
              {link.label === "Fiverr" ? (
                <SiFiverr
                  className="text-2xl text-primary"
                  aria-hidden="true"
                />
              ) : (
                <SiDribbble
                  className="text-xl text-primary"
                  aria-hidden="true"
                />
              )}
              <h2 className="mt-8 text-xl font-bold">View {link.label}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {link.label === "Fiverr"
                  ? "View Fiverr Profile"
                  : "View Dribbble Work"}
              </p>
              <ExternalLink
                className="mt-5 text-muted-foreground"
                size={16}
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <EditorialReveal>
            <MessageSquareText
              className="text-primary"
              size={34}
              aria-hidden="true"
            />
            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              A useful first message.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A short, clear brief helps us understand where the project is now
              and what the next useful step should be.
            </p>
          </EditorialReveal>
          <EditorialReveal delay={0.06}>
            <div className="border-t border-border">
              {briefPoints.map((point, index) => (
                <div
                  key={point}
                  className="grid min-h-20 grid-cols-[3rem_1fr] items-center gap-4 border-b border-border py-4"
                >
                  <span className="font-mono text-xs text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium">{point}</span>
                </div>
              ))}
            </div>
          </EditorialReveal>
        </div>
      </section>

      <section className="border-t border-border bg-white px-6 py-20">
        <div className="container mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <EditorialReveal>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="text-primary" size={19} aria-hidden="true" />
              {CONTACT_INFO.location}
            </div>
            <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
              Based in Islamabad and collaborating with clients worldwide.
            </h2>
          </EditorialReveal>
          <a
            href={CONTACT_INFO.emailHref}
            aria-label={`Start a project by emailing ${CONTACT_INFO.email}`}
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-foreground px-7 py-3 font-semibold text-background hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Start a Project <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>
    </article>
  );
}
