import { Link } from "wouter";
import { Download, Terminal } from "lucide-react";
import { STATS } from "@/data/stats";

export default function About() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 max-w-3xl">
            I don't just design interfaces. <br />
            <span className="text-primary">I build complete products.</span>
          </h1>
        </div>
      </section>

      {/* Intro & Portrait */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <div className="aspect-[3/4] bg-muted border border-border relative flex items-center justify-center overflow-hidden">
                <div className="text-center p-6 opacity-30">
                  <Terminal size={48} className="mx-auto mb-4" />
                  <p className="font-mono text-sm tracking-widest">[PORTRAIT_PLACEHOLDER.JPG]</p>
                </div>
                {/* Decorative scanning line effect */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary/30 blur-sm animate-[pulse_4s_ease-in-out_infinite]" style={{ animation: "scan 4s linear infinite" }} />
              </div>
            </div>
            
            <div className="md:col-span-7 space-y-8 text-lg font-light leading-relaxed text-foreground/80">
              <p className="text-xl font-normal text-foreground">
                Hi, I'm [Your Name]. I am a multidisciplinary digital product expert bridging the gap between human-centered design and robust software engineering.
              </p>
              <p>
                The traditional agency model is broken. You hire a designer, and the developers complain the designs aren't buildable. You hire developers, and the UI lacks polish. You try to integrate AI, and nobody understands the product strategy.
              </p>
              <p>
                I solve this by being a single point of accountability. I understand typography and state management. I know how to conduct user research and how to configure a React Native build pipeline. I design with data structures in mind, and I code with an obsession for pixel-perfection.
              </p>
              <p>
                For the past {STATS.experience} years, I've partnered with startups, established brands, and visionary founders worldwide to launch over {STATS.projects} successful digital products.
              </p>

              <div className="pt-6 flex gap-4">
                <a href="/placeholder-resume.pdf" download className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium hover:bg-primary transition-colors">
                  <Download size={18} /> Download Résumé
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-border font-medium hover:bg-muted transition-colors">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 px-6 bg-muted/20 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12">Operating Principles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border border-border">
              <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center font-mono font-bold mb-6">01</div>
              <h3 className="text-xl font-bold mb-3">Function Over Form, Always</h3>
              <p className="text-muted-foreground font-light">A beautiful product that confuses users is a failed product. Design must serve the goal, not the ego.</p>
            </div>
            <div className="p-8 bg-white border border-border">
              <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center font-mono font-bold mb-6">02</div>
              <h3 className="text-xl font-bold mb-3">Ship Early, Iterate Fast</h3>
              <p className="text-muted-foreground font-light">Perfectionism is the enemy of progress. Get the core value proposition into users' hands and let data drive the rest.</p>
            </div>
            <div className="p-8 bg-white border border-border">
              <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center font-mono font-bold mb-6">03</div>
              <h3 className="text-xl font-bold mb-3">Maintainable by Default</h3>
              <p className="text-muted-foreground font-light">Code and design systems are written for humans first, machines second. Clarity and structure prevent technical debt.</p>
            </div>
            <div className="p-8 bg-white border border-border">
              <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center font-mono font-bold mb-6">04</div>
              <h3 className="text-xl font-bold mb-3">Transparent Communication</h3>
              <p className="text-muted-foreground font-light">No black boxes. You will always know where the project stands, what the blockers are, and what happens next.</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
