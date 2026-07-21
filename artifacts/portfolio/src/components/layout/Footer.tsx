import { Link } from "wouter";
import { SOCIAL_LINKS } from "@/data/contact";
import BrandLogo from "@/components/brand/BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 mt-auto">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
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
            <p className="text-muted text-lg max-w-sm mb-8 font-light">
              One Mind. Six Digital Dimensions.
            </p>
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 font-medium transition-colors inline-block"
            >
              Start a Project with 6D Mind
            </Link>
          </div>

          <div>
            <h4 className="font-mono text-sm tracking-widest text-muted/50 uppercase mb-6">
              Expertise
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/expertise/ui-ux-product-design"
                  className="text-muted hover:text-white transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise/mobile-app-development"
                  className="text-muted hover:text-white transition-colors"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise/website-web-app-development"
                  className="text-muted hover:text-white transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise/ai-product-development"
                  className="text-muted hover:text-white transition-colors"
                >
                  AI Products
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise/graphic-design"
                  className="text-muted hover:text-white transition-colors"
                >
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise/branding-visual-identity"
                  className="text-muted hover:text-white transition-colors"
                >
                  Branding
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-sm tracking-widest text-muted/50 uppercase mb-6">
              Connect
            </h4>
            <ul className="space-y-4">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-white transition-colors flex items-center gap-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted/60">
            &copy; {new Date().getFullYear()} 6D Mind. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted/60">
            <span>Based in Islamabad</span>
            <span>·</span>
            <span>Working Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
