import { useRoute, Link } from "wouter";
import { ArrowLeft, ArrowRight, LayoutTemplate } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import NotFound from "./not-found";
import PlanitPrepCaseStudy from "./PlanitPrepCaseStudy";
import MahfoozCaseStudy from "./MahfoozCaseStudy";
import AmanatDiaryCaseStudy from "./AmanatDiaryCaseStudy";
import CrunchTimeFitnessCaseStudy from "./CrunchTimeFitnessCaseStudy";
import ElanFashionCaseStudy from "./ElanFashionCaseStudy";
import MdcnDistributionCaseStudy from "./MdcnDistributionCaseStudy";

export default function WorkDetail() {
  const [match, params] = useRoute("/work/:slug");

  if (!match) return <NotFound />;

  const projectIndex = PROJECTS.findIndex((p) => p.slug === params.slug);
  const project = PROJECTS[projectIndex];

  if (!project) return <NotFound />;

  if (project.slug === "mdcn-distribution") {
    return <MdcnDistributionCaseStudy project={project} />;
  }

  if (project.slug === "planit-prep") {
    return <PlanitPrepCaseStudy project={project} />;
  }

  if (project.slug === "mahfooz") {
    return <MahfoozCaseStudy project={project} />;
  }

  if (project.slug === "amanat-diary") {
    return <AmanatDiaryCaseStudy project={project} />;
  }

  if (project.slug === "crunchtime-fitness") {
    return <CrunchTimeFitnessCaseStudy project={project} />;
  }

  if (project.slug === "elan-fashion") {
    return <ElanFashionCaseStudy project={project} />;
  }

  const nextProject = PROJECTS[projectIndex + 1] || PROJECTS[0]; // Loop around

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="pt-12 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/work"
            className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft size={14} className="mr-2" /> ALL PROJECTS
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-muted font-mono text-xs text-foreground border border-border">
              {project.category}
            </span>
            <span className="px-3 py-1 bg-muted font-mono text-xs text-foreground border border-border">
              {project.industry}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            {project.title}
          </h1>
          <p className="text-2xl text-muted-foreground font-light leading-relaxed mb-12">
            {project.overview}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border">
            <div>
              <div className="text-xs font-mono text-muted-foreground mb-1 uppercase tracking-widest">
                Role
              </div>
              <div className="font-medium text-sm">{project.role}</div>
            </div>
            <div>
              <div className="text-xs font-mono text-muted-foreground mb-1 uppercase tracking-widest">
                Duration
              </div>
              <div className="font-medium text-sm">
                {project.duration ?? project.year}
              </div>
            </div>
            <div className="col-span-2">
              <div className="text-xs font-mono text-muted-foreground mb-1 uppercase tracking-widest">
                Services
              </div>
              <div className="font-medium text-sm text-primary">
                {project.services.join(", ")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image Placeholder */}
      <section className="px-6 mb-24">
        <div className="container mx-auto max-w-5xl">
          <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center relative overflow-hidden">
            <LayoutTemplate size={80} className="text-muted-foreground/20" />
            <div className="absolute inset-0 flex items-center justify-center font-mono text-muted-foreground/40 bg-stripes">
              {project.image}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-20">
            {/* The Challenge */}
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
                <span className="text-primary font-mono text-sm block -mt-1 font-normal tracking-widest">
                  01
                </span>
                The Challenge
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Discovery & Strategy */}
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
                <span className="text-primary font-mono text-sm block -mt-1 font-normal tracking-widest">
                  02
                </span>
                Discovery & Strategy
              </h2>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  <strong>Research:</strong> {project.discovery}
                </p>
                <p>
                  <strong>Approach:</strong> {project.strategy}
                </p>
              </div>
            </div>

            {/* Execution Placeholder Image 1 */}
            <div className="aspect-[16/9] bg-muted border border-border flex items-center justify-center">
              <span className="font-mono text-sm text-muted-foreground/50">
                Process Visual Placeholder
              </span>
            </div>

            {/* Execution */}
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
                <span className="text-primary font-mono text-sm block -mt-1 font-normal tracking-widest">
                  03
                </span>
                Execution
              </h2>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  <strong>Design:</strong> {project.designDecisions}
                </p>
                <p>
                  <strong>Development:</strong> {project.developmentApproach}
                </p>
              </div>

              <div className="mt-8">
                <div className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-widest">
                  Technologies Used
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-background border border-border text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Execution Placeholder Image 2 */}
            <div className="aspect-[16/9] bg-muted border border-border flex items-center justify-center">
              <span className="font-mono text-sm text-muted-foreground/50">
                Final Solution Visual Placeholder
              </span>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
                <span className="text-primary font-mono text-sm block -mt-1 font-normal tracking-widest">
                  04
                </span>
                The Results
              </h2>
              <div className="p-8 bg-foreground text-background border-l-4 border-primary">
                {project.testimonial && (
                  <>
                    <p className="text-xl font-light leading-relaxed mb-8">
                      "{project.testimonial.quote}"
                    </p>
                    <p className="font-mono text-sm text-muted">
                      — {project.testimonial.author}
                    </p>
                  </>
                )}
              </div>
              <p className="mt-8 text-lg font-medium text-foreground">
                Impact: {project.results}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Navigation */}
      <section className="border-t border-border bg-muted/20 hover:bg-muted/40 transition-colors">
        <Link
          href={`/work/${nextProject.slug}`}
          className="block py-20 px-6 container mx-auto text-center group"
        >
          <div className="text-sm font-mono text-muted-foreground mb-4 tracking-widest uppercase">
            Next Project
          </div>
          <h2 className="text-4xl md:text-5xl font-bold group-hover:text-primary transition-colors flex items-center justify-center gap-4">
            {nextProject.title}
            <ArrowRight
              size={32}
              className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
            />
          </h2>
        </Link>
      </section>
    </div>
  );
}
