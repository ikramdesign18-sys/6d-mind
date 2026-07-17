import { Link } from "wouter";
import { SOCIAL_LINKS } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 mt-auto">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-background text-foreground flex items-center justify-center font-mono font-bold text-lg tracking-tighter group-hover:bg-primary group-hover:text-white transition-colors">
                CB
              </div>
              <span className="font-bold tracking-tight text-xl text-background">
                Creative Brain
              </span>
            </Link>
            <p className="text-muted text-lg max-w-sm mb-8 font-light">
              Designing intelligence. Building experiences. Creating complete digital products.
            </p>
            <Link href="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 font-medium transition-colors inline-block">
              Let's Discuss Your Project
            </Link>
          </div>

          <div>
            <h4 className="font-mono text-sm tracking-widest text-muted/50 uppercase mb-6">Expertise</h4>
            <ul className="space-y-4">
              <li><Link href="/expertise/ui-ux-product-design" className="text-muted hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link href="/expertise/mobile-app-development" className="text-muted hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link href="/expertise/website-web-app-development" className="text-muted hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/expertise/ai-product-development" className="text-muted hover:text-white transition-colors">AI Products</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-sm tracking-widest text-muted/50 uppercase mb-6">Connect</h4>
            <ul className="space-y-4">
              {SOCIAL_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors flex items-center gap-2">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted/60">
            &copy; {new Date().getFullYear()} Creative Brain. All rights reserved.
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
