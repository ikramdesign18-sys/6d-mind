import { Link } from "wouter";
import { ArrowRight, Terminal } from "lucide-react";
import BrainScene from "@/components/3d/BrainScene";
import { EXPERTISE } from "@/data/expertise";
import { STATS, WORK_MESSAGE } from "@/data/stats";
import { CONTACT_INFO } from "@/data/contact";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "@/components/work/ProjectCard";

export default function Home() {
  const selectedProjects = [
    "crunchtime-fitness",
    "amanat-diary",
    "mahfooz",
    "planit-prep",
  ]
    .map((slug) => PROJECTS.find((project) => project.slug === slug))
    .filter((project): project is (typeof PROJECTS)[number] =>
      Boolean(project),
    );

  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <BrainScene />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center mt-12 md:mt-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-border rounded-none text-xs font-mono tracking-widest text-primary mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            {CONTACT_INFO.availability.toUpperCase()}
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-foreground bg-clip-text">
            One Creative Brain.
            <br />
            <span className="text-primary/90">Complete Digital Solutions.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light mb-10 leading-relaxed backdrop-blur-sm bg-background/30 p-2">
            A multidisciplinary digital product expert bridging the gap between
            design, engineering, and AI. Taking your project from pure idea to
            production-ready launch.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#expertise"
              className="px-8 py-4 bg-foreground text-background font-medium hover:bg-primary transition-colors flex items-center gap-2 shadow-lg w-full sm:w-auto justify-center"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("expertise")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore My Expertise <ArrowRight size={18} />
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-foreground border border-border font-medium hover:bg-muted transition-colors flex items-center gap-2 shadow-sm w-full sm:w-auto justify-center"
            >
              Start a Project
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-2 text-sm text-muted-foreground font-mono tracking-tight bg-background/50 px-4 py-2 backdrop-blur-sm border border-border">
            <Terminal size={14} className="text-primary" />
            Based in {CONTACT_INFO.location.split(",")[0]} · Working Worldwide
          </div>
        </div>
      </section>

      {/* Expertise Grid Section */}
      <section
        id="expertise"
        className="py-24 md:py-32 bg-white border-t border-border px-6"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Neural Connections
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl">
              Six core disciplines integrated into a single cohesive workflow. I
              replace the siloed agency model with unified expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERTISE.map((item, index) => (
              <Link
                key={item.id}
                href={`/expertise/${item.slug}`}
                className="group p-8 border border-border bg-background hover:border-primary transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors pointer-events-none" />
                <div className="text-sm font-mono text-muted-foreground mb-4">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted-foreground font-light text-sm mb-8 flex-1">
                  {item.statement}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-muted px-2 py-1 text-muted-foreground border border-border/50"
                    >
                      {skill}
                    </span>
                  ))}
                  {item.skills.length > 3 && (
                    <span className="text-xs text-muted-foreground px-1 py-1">
                      +{item.skills.length - 3}
                    </span>
                  )}
                </div>
                <div className="mt-auto flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  View Detail{" "}
                  <ArrowRight
                    size={14}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      {selectedProjects.length > 0 && (
        <section className="border-t border-border bg-muted/10 px-6 py-24 md:py-32">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-4 font-mono text-xs tracking-[0.2em] text-primary uppercase">
                  Selected Work
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Complete products designed around real needs.
                </h2>
              </div>
              <Link
                href="/work"
                className="inline-flex min-h-11 items-center gap-2 self-start border-b border-foreground pb-1 font-medium transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 md:self-auto"
              >
                View all work <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <div className="space-y-20">
              {selectedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} isWide />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Work With Me */}
      <section className="py-24 md:py-32 bg-foreground text-background px-6">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 leading-tight">
              {WORK_MESSAGE}
            </h2>
            <p className="text-xl text-muted/80 font-light mb-8 max-w-lg">
              Stop coordinating between a designer, an agency, and a freelance
              developer. Get cohesive, premium digital products delivered by one
              accountable expert.
            </p>
            <Link
              href="/process"
              className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors text-lg font-medium group border-b border-primary hover:border-white pb-1"
            >
              See how I work{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-8 w-full">
            <div className="border border-white/20 p-8 flex flex-col justify-center bg-white/5 backdrop-blur-sm">
              <div className="text-5xl font-bold text-white mb-2">
                {STATS.experience}
              </div>
              <div className="font-mono text-sm text-primary tracking-widest uppercase">
                Years Experience
              </div>
            </div>
            <div className="border border-white/20 p-8 flex flex-col justify-center bg-white/5 backdrop-blur-sm">
              <div className="text-5xl font-bold text-white mb-2">
                {STATS.projects}
              </div>
              <div className="font-mono text-sm text-primary tracking-widest uppercase">
                Projects Delivered
              </div>
            </div>
            <div className="border border-white/20 p-8 flex flex-col justify-center bg-white/5 backdrop-blur-sm col-span-2">
              <div className="text-3xl font-bold text-white mb-2">
                {STATS.collaboration}
              </div>
              <div className="font-mono text-sm text-primary tracking-widest uppercase">
                Remote Collaboration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-primary text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Ready to build something exceptional?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-foreground text-background font-bold text-lg hover:bg-white transition-colors shadow-2xl"
          >
            Initiate Project <Terminal size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
