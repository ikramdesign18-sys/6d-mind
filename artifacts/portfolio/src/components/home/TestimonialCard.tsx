import { Star } from "lucide-react";

import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
  onSelect: () => void;
}

export default function TestimonialCard({
  testimonial,
  isActive,
  onSelect,
}: TestimonialCardProps) {
  const context = [testimonial.role, testimonial.company]
    .filter(Boolean)
    .join(" · ");

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls="featured-testimonial"
      tabIndex={isActive ? 0 : -1}
      onClick={onSelect}
      className={cn(
        "group min-h-44 w-full border p-5 text-left outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4",
        isActive
          ? "border-primary bg-primary/[0.045] text-foreground shadow-xl shadow-primary/8"
          : "border-border bg-background text-foreground hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg hover:shadow-foreground/5",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-semibold tracking-[0.08em]",
            isActive
              ? "border-primary/30 bg-primary/10 text-primary"
              : "border-border bg-muted/40 text-primary",
          )}
          aria-hidden="true"
        >
          {testimonial.initials}
        </div>
        <div
          className={cn(
            "flex items-center gap-0.5",
            isActive ? "text-primary" : "text-primary/80",
          )}
          aria-label={`${testimonial.rating} out of 5 stars`}
        >
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Star
              key={index}
              size={13}
              fill="currentColor"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <div className="font-semibold">{testimonial.name}</div>
        <div className={cn("mt-1 text-sm", "text-muted-foreground")}>
          {context}
        </div>
        {testimonial.country && (
          <div
            className={cn(
              "mt-1 font-mono text-[0.65rem] tracking-[0.1em] uppercase",
              "text-muted-foreground/70",
            )}
          >
            {testimonial.country}
          </div>
        )}
      </div>

      <div
        className={cn(
          "mt-5 h-px origin-left transition-transform duration-300",
          isActive
            ? "scale-x-100 bg-primary"
            : "scale-x-0 bg-foreground group-hover:scale-x-100",
        )}
        aria-hidden="true"
      />
    </button>
  );
}
