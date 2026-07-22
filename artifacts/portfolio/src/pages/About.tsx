import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { SiDribbble, SiFiverr } from "react-icons/si";
import { Link } from "wouter";

import ConnectedDimensions from "@/components/brand/ConnectedDimensions";
import EditorialReveal from "@/components/brand/EditorialReveal";
import { BRAND_DIMENSIONS } from "@/data/brand";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/data/contact";
import { STATS } from "@/data/stats";
import { usePageMetadata } from "@/lib/use-page-metadata";

const expertise = [
  "Product strategy",
  "UI/UX and product design",
  "Mobile application design and development",
  "Website and web application development",
  "Branding and graphic design",
  "Product refinement and launch preparation",
] as const;

const proof = [
  [STATS.experience, "Years of multidisciplinary experience"],
  [STATS.projects, "Completed projects"],
  [STATS.collaboration, "Remote client collaboration"],
  ["6", "Connected digital disciplines"],
] as const;

export default function About() {
  usePageMetadata(
    "About 6D Mind — Multidisciplinary Digital Product Studio",
    "Meet Ikram, the multidisciplinary product designer and developer behind 6D Mind, connecting strategy, UI/UX, development, branding, and launch preparation.",
  );

  return (
    <article className="w-full bg-background text-foreground">
      <section className="relative overflow-hidden bg-foreground px-6 py-20 text-background md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="container relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <EditorialReveal>
            <div className="font-mono text-xs tracking-[0.24em] text-primary uppercase">
              About 6D Mind
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[0.98] tracking-tighter text-white md:text-7xl">
              One multidisciplinary mind behind complete digital products.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed font-light text-white/72">
              6D Mind is a multidisciplinary digital studio led by Ikram,
              combining product strategy, UI/UX design, mobile and web
              development, branding, graphic design, and launch preparation
              through one connected process.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-primary px-7 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Start a Project <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center border border-white/25 px-7 py-3 font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Contact 6D Mind
              </Link>
            </div>
          </EditorialReveal>
          <EditorialReveal delay={0.08}>
            <ConnectedDimensions />
          </EditorialReveal>
        </div>
      </section>

      <section className="border-b border-border bg-white px-6">
        <div className="container mx-auto grid max-w-6xl divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {proof.map(([value, label], index) => (
            <EditorialReveal
              key={label}
              delay={index * 0.04}
              className="px-0 py-10 sm:px-6 lg:py-14 first:pl-0 last:pr-0"
            >
              <div className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
                {value}
              </div>
              <p className="mt-3 max-w-44 text-sm leading-relaxed text-muted-foreground">
                {label}
              </p>
            </EditorialReveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <EditorialReveal>
            <div className="font-mono text-xs tracking-[0.22em] text-primary uppercase">
              The Person Behind the Studio
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Product thinking, design craft, and technical execution.
            </h2>
          </EditorialReveal>
          <EditorialReveal
            delay={0.06}
            className="space-y-6 text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              Over the past seven years, I have worked across more than 300
              projects, helping founders and businesses transform early ideas,
              improve existing products, design clear user experiences, build
              digital platforms, and prepare products for launch.
            </p>
            <p>
              I work closely with clients, study the complete product rather
              than only the requested screen or feature, and remain focused on
              creating a result that is useful, practical, polished, and ready
              for the next stage.
            </p>
            <p className="border-l-2 border-primary pl-6 text-xl font-medium text-foreground">
              You work directly with the person shaping the strategy, design,
              brand, and implementation direction.
            </p>
          </EditorialReveal>
        </div>
      </section>

      <section className="border-y border-border bg-white px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <EditorialReveal className="max-w-3xl">
            <div className="font-mono text-xs tracking-[0.22em] text-primary uppercase">
              Connected Expertise
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Six disciplines, one consistent product direction.
            </h2>
          </EditorialReveal>
          <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item, index) => (
              <EditorialReveal
                key={item}
                delay={(index % 3) * 0.04}
                className="min-h-44 bg-white p-7 md:p-9"
              >
                <div className="font-mono text-sm text-primary">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-8 text-2xl font-bold">{item}</h3>
                <div className="mt-5 font-mono text-[0.65rem] tracking-[0.14em] text-muted-foreground uppercase">
                  {BRAND_DIMENSIONS[index]}
                </div>
              </EditorialReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-28">
        <div className="container mx-auto grid max-w-6xl gap-12 bg-foreground p-7 text-background md:p-12 lg:grid-cols-[1.15fr_0.85fr]">
          <EditorialReveal>
            <div className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
              Based in Islamabad · Working Worldwide
            </div>
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Let&apos;s build the next stage of your product.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
              {CONTACT_INFO.worldwide}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center gap-2 bg-primary px-7 py-3 font-semibold text-white hover:bg-white hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Let&apos;s Work Together{" "}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </EditorialReveal>
          <EditorialReveal
            delay={0.06}
            className="space-y-5 border-t border-white/15 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"
          >
            <a
              href={CONTACT_INFO.emailHref}
              aria-label={`Email 6D Mind at ${CONTACT_INFO.email}`}
              className="flex min-h-11 items-center gap-4 text-white/75 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Mail className="text-primary" size={19} aria-hidden="true" />
              <span className="break-all">{CONTACT_INFO.email}</span>
            </a>
            <a
              href={CONTACT_INFO.phoneHref}
              aria-label={`Call 6D Mind at ${CONTACT_INFO.phoneDisplay}`}
              className="flex min-h-11 items-center gap-4 text-white/75 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Phone className="text-primary" size={19} aria-hidden="true" />
              {CONTACT_INFO.phoneDisplay}
            </a>
            <div className="flex min-h-11 items-center gap-4 text-white/75">
              <MapPin className="text-primary" size={19} aria-hidden="true" />
              {CONTACT_INFO.location}
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="inline-flex min-h-11 items-center border border-white/20 px-4 py-2 text-white hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {link.label === "Fiverr" ? (
                    <SiFiverr className="mr-2 text-lg" aria-hidden="true" />
                  ) : (
                    <SiDribbble className="mr-2" aria-hidden="true" />
                  )}
                  {link.label}
                </a>
              ))}
            </div>
          </EditorialReveal>
        </div>
      </section>
    </article>
  );
}
