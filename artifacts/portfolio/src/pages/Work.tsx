import { useState } from "react";
import { Link } from "wouter";
import { PROJECTS } from "@/data/projects";
import { EXPERTISE } from "@/data/expertise";
import { cn } from "@/lib/utils";
import ProjectCard from "@/components/work/ProjectCard";

const FILTERS = ["All", ...EXPERTISE.map((e) => e.shortName)];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter(
          (project) =>
            project.category.includes(activeFilter) ||
            project.filterTags?.includes(activeFilter),
        );

  return (
    <div className="w-full">
      {/* Header */}
      <section className="pt-20 pb-12 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Selected Work.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl font-light">
            A showcase of digital products, interfaces, and brands I've built
            from the ground up.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 px-6 sticky top-[73px] z-40 bg-white/80 backdrop-blur-md border-y border-border">
        <div className="container mx-auto max-w-6xl flex overflow-x-auto pb-2 sm:pb-0 hide-scrollbar gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "whitespace-nowrap px-4 py-2 text-sm font-mono transition-colors border",
                activeFilter === filter
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground border-transparent hover:border-border hover:text-foreground",
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-6 bg-muted/10 min-h-[50vh]">
        <div className="container mx-auto max-w-6xl">
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center border border-dashed border-border">
              <p className="text-muted-foreground font-mono">
                No projects found for this category yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={cn(
                    "block",
                    index % 3 === 0 ? "md:col-span-2" : "md:col-span-1", // Mix large and small cards
                  )}
                >
                  <ProjectCard project={project} isWide={index % 3 === 0} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white border-t border-border text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Like what you see?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Let's create something equally impactful for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
