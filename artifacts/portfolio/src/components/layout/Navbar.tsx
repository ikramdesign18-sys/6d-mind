import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import BrandLogo from "@/components/brand/BrandLogo";

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/solutions", label: "Solutions" },
  { href: "/why-6d-mind", label: "Why 6D Mind" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-4 shadow-sm"
          : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link
          href="/"
          aria-label="6D Mind — Go to homepage"
          className="group inline-flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
        >
          <BrandLogo
            compactOnMobile
            iconClassName="h-9 w-9 md:h-10 md:w-10 transition-transform duration-300 group-hover:scale-[1.04] motion-reduce:transition-none"
            wordmarkClassName="group-hover:text-primary transition-colors"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-primary relative py-1",
                location.startsWith(link.href)
                  ? "text-primary"
                  : "text-muted-foreground",
              )}
            >
              {link.label}
              {location.startsWith(link.href) && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-100 transition-transform origin-left" />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 bg-foreground text-background px-5 py-2 text-sm font-medium hover:bg-primary transition-colors"
          >
            Start a Project
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="absolute top-full left-0 w-full bg-background border-b border-border shadow-lg lg:hidden flex flex-col py-4 px-6 gap-4"
        >
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-lg font-medium py-2 border-b border-border",
                location.startsWith(link.href)
                  ? "text-primary"
                  : "text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
