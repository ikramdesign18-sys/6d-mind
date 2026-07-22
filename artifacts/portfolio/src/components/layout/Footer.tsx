import { Mail, Phone } from "lucide-react";
import { SiDribbble, SiFiverr } from "react-icons/si";
import { Link } from "wouter";

import BrandLogo from "@/components/brand/BrandLogo";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/data/contact";

const FOOTER_LINKS = [
  ["Work", "/work"],
  ["Solutions", "/solutions"],
  ["Why 6D Mind", "/why-6d-mind"],
  ["Process", "/process"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export default function Footer() {
  return (
    <footer className="mt-auto bg-foreground py-20 text-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              aria-label="6D Mind — Go to homepage"
              className="group mb-6 inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-foreground"
            >
              <BrandLogo
                inverted
                iconClassName="h-11 w-11 transition-transform duration-300 group-hover:scale-[1.04] motion-reduce:transition-none"
                wordmarkClassName="text-xl"
              />
            </Link>
            <p className="mb-8 max-w-sm text-lg font-light text-muted">
              One Mind. Six Digital Dimensions.
            </p>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Start a Project with 6D Mind
            </Link>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="mb-6 font-mono text-sm tracking-widest text-muted/50 uppercase">
              Navigate
            </h2>
            <ul className="space-y-1">
              {FOOTER_LINKS.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-flex min-h-11 items-center text-muted transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-6 font-mono text-sm tracking-widest text-muted/50 uppercase">
              Connect
            </h2>
            <ul className="space-y-1">
              <li>
                <a
                  href={CONTACT_INFO.emailHref}
                  aria-label={`Email 6D Mind at ${CONTACT_INFO.email}`}
                  className="inline-flex min-h-11 max-w-full items-center gap-3 break-all text-muted transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Mail size={16} aria-hidden="true" /> {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.phoneHref}
                  aria-label={`Call 6D Mind at ${CONTACT_INFO.phoneDisplay}`}
                  className="inline-flex min-h-11 items-center gap-3 text-muted transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Phone size={16} aria-hidden="true" />
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </li>
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="inline-flex min-h-11 items-center text-muted transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {link.label === "Fiverr" ? (
                      <SiFiverr className="mr-2 text-lg" aria-hidden="true" />
                    ) : (
                      <SiDribbble className="mr-2" aria-hidden="true" />
                    )}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-muted/60">
            &copy; {new Date().getFullYear()} 6D Mind. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-muted/60">
            <span>Based in Islamabad</span>
            <span aria-hidden="true">·</span>
            <span>Working Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
