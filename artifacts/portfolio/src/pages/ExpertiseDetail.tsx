import { useRoute, Link } from "wouter";
import { ArrowLeft, CheckCircle2, LayoutTemplate } from "lucide-react";
import { EXPERTISE } from "@/data/expertise";
import { PROJECTS } from "@/data/projects";
import NotFound from "./not-found";

export default function ExpertiseDetail() {
  const [match, params] = useRoute("/expertise/:slug");
  
  if (!match) return <NotFound />;
  
  const expertise = EXPERTISE.find(e => e.slug === params.slug);
  if (!expertise) return <NotFound />;

  const relatedProjects = PROJECTS.filter(p => p.category.includes(expertise.shortName) || expertise.name.includes(p.category)).slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-12 pb-24 px-6 border-b border-border bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <Link href="/" className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={14} className="mr-2" /> BACK TO HOME
          </Link>
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-mono text-xs tracking-widest mb-6 border border-primary/20">
            EXPERTISE AREA
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">{expertise.name}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl leading-relaxed">
            {expertise.statement}
          </p>
        </div>
      </section>

      {/* Problems & Solutions Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-8">The Problems I Solve</h2>
              <ul className="space-y-6">
                {expertise.problemsSolved.map((problem, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-none border border-destructive flex items-center justify-center text-destructive font-mono text-sm">✕</div>
                    <p className="text-foreground pt-1">{problem}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-8">The Deliverables</h2>
              <ul className="space-y-6">
                {expertise.deliverables.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white flex items-center justify-center font-mono text-sm">
                      <CheckCircle2 size={16} />
                    </div>
                    <p className="text-foreground pt-1 font-medium">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-24 px-6 bg-foreground text-background border-y border-border">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-mono tracking-widest text-muted/50 mb-8 uppercase">Technical Skills</h2>
            <div className="flex flex-wrap gap-3">
              {expertise.skills.map(skill => (
                <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 text-white text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-mono tracking-widest text-muted/50 mb-8 uppercase">Toolkit</h2>
            <div className="flex flex-wrap gap-3">
              {expertise.tools.map(tool => (
                <span key={tool} className="px-4 py-2 border border-white/20 text-white text-sm font-mono">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-muted/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12">Discipline Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.process.map(step => (
              <div key={step.step} className="p-6 bg-white border border-border">
                <div className="text-primary font-mono text-4xl font-light mb-4">0{step.step}</div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      {relatedProjects.length > 0 && (
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-3xl font-bold">Selected Work</h2>
              <Link href="/work" className="text-primary hover:underline font-medium text-sm hidden sm:block">View All Work</Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map(project => (
                <Link key={project.id} href={`/work/${project.slug}`} className="group block">
                  <div className="aspect-[4/3] bg-muted mb-4 overflow-hidden border border-border relative flex items-center justify-center">
                    {/* Placeholder image representation */}
                    <LayoutTemplate size={48} className="text-muted-foreground/30" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.industry}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 px-6 bg-white border-t border-border text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Need expertise in {expertise.shortName}?</h2>
          <p className="text-muted-foreground mb-8">Let's discuss how I can bring value to your next project.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-foreground text-background font-medium hover:bg-primary transition-colors">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
