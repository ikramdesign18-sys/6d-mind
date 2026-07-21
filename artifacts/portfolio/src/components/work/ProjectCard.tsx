import { ArrowRight, LayoutTemplate } from "lucide-react";
import { Link } from "wouter";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  isWide?: boolean;
}

export default function ProjectCard({
  project,
  isWide = false,
}: ProjectCardProps) {
  const hasProjectArtwork = Boolean(project.imageWidth && project.imageHeight);

  return (
    <Link
      href={project.detailPath ?? `/work/${project.slug}`}
      aria-label={`View ${project.title} case study`}
      className="group block outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
    >
      <div
        className={cn(
          "relative mb-6 flex aspect-video w-full items-center justify-center overflow-hidden border border-border p-0",
          hasProjectArtwork ? "bg-transparent" : "bg-muted",
        )}
      >
        {project.galleryImages?.length ? (
          <div className="grid h-full w-full grid-cols-3 grid-rows-2 gap-px bg-border">
            {project.galleryImages.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="block h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
            ))}
          </div>
        ) : hasProjectArtwork ? (
          <img
            src={project.image}
            width={project.imageWidth}
            height={project.imageHeight}
            alt={project.imageAlt ?? `${project.title} project presentation`}
            loading="lazy"
            className="block h-full w-full max-w-none object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.015]"
          />
        ) : (
          <LayoutTemplate
            size={isWide ? 64 : 48}
            aria-hidden="true"
            className="text-muted-foreground/20"
          />
        )}

        <div className="absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-primary/10" />

        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background/90 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:p-8">
          <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">
            <span className="inline-flex min-h-11 items-center gap-2 bg-white/95 px-4 py-2 text-sm font-medium text-primary shadow-sm">
              View Case Study <ArrowRight size={14} aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col gap-4",
          isWide && "md:flex-row md:items-start md:justify-between",
        )}
      >
        <div className="min-w-0 max-w-2xl">
          <h2 className="text-2xl font-bold transition-colors group-hover:text-primary group-focus-visible:text-primary">
            {project.title}
          </h2>
          <p className="font-light text-muted-foreground">
            {project.shortLabel ?? project.category}
          </p>
          {project.summary && (
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/70">
              {project.summary}
            </p>
          )}
          {project.tags && (
            <div
              className="mt-4 flex flex-wrap gap-2"
              aria-label="Project tags"
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-border bg-background px-2.5 py-1 font-mono text-[0.6875rem] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div
          className={cn(
            "min-w-0 font-mono text-sm text-muted-foreground/70",
            isWide
              ? "md:max-w-[44%] md:shrink-0 md:text-right"
              : "w-full border-t border-border pt-3",
          )}
        >
          <div className="break-words">
            {project.cardCategory ?? project.category}
          </div>
          <div className="mt-1 break-words">{project.industry}</div>
        </div>
      </div>
    </Link>
  );
}
