import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Pause, Play, Quote, Star } from "lucide-react";

import TestimonialCard from "@/components/home/TestimonialCard";
import { TESTIMONIALS } from "@/data/testimonials";

const SWIPE_THRESHOLD = 48;
const AUTO_ADVANCE_DELAY = 6500;

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();
  const activeTestimonial = TESTIMONIALS[activeIndex];
  const context = [activeTestimonial.role, activeTestimonial.company]
    .filter(Boolean)
    .join(" · ");

  const showPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
  };

  useEffect(() => {
    if (reduceMotion || isPaused || isInteracting) return;

    const timer = window.setTimeout(showNext, AUTO_ADVANCE_DELAY);
    return () => window.clearTimeout(timer);
  }, [activeIndex, isInteracting, isPaused, reduceMotion]);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="border-t border-border bg-background px-6 py-24 md:py-32"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 border-b border-border pb-12 md:grid-cols-[0.55fr_1.45fr] md:items-end md:gap-14">
          <div className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
            Client trust · Selected feedback
          </div>
          <div>
            <h2
              id="testimonials-heading"
              className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
            >
              What clients say about working with me.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed font-light text-muted-foreground">
              Product founders and teams value clear thinking, thoughtful
              execution, and design that adds practical value to the business.
            </p>
          </div>
        </div>

        <div
          className="mt-10 overflow-hidden border border-border bg-background shadow-2xl shadow-foreground/8"
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
          onFocusCapture={() => setIsInteracting(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsInteracting(false);
            }
          }}
          onTouchStart={(event) => {
            touchStartX.current = event.changedTouches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return;

            const endX =
              event.changedTouches[0]?.clientX ?? touchStartX.current;
            const distance = endX - touchStartX.current;
            touchStartX.current = null;

            if (Math.abs(distance) < SWIPE_THRESHOLD) return;
            if (distance > 0) showPrevious();
            else showNext();
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={activeTestimonial.id}
              id="featured-testimonial"
              role="tabpanel"
              aria-live="polite"
              aria-atomic="true"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: reduceMotion ? 0 : 0.35 }}
              className="grid min-h-[31rem] gap-10 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_38%)] p-7 sm:p-10 lg:min-h-[28rem] lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:p-14"
            >
              <div className="flex flex-col justify-between border-b border-border pb-8 lg:border-r lg:border-b-0 lg:pr-10 lg:pb-0">
                <div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/25 bg-primary/[0.07] font-mono text-sm font-semibold tracking-[0.12em] text-primary">
                    {activeTestimonial.initials}
                  </div>
                  <div className="mt-7 text-xl font-bold text-foreground">
                    {activeTestimonial.name}
                  </div>
                  <div className="mt-2 text-muted-foreground">{context}</div>
                  {activeTestimonial.country && (
                    <div className="mt-2 font-mono text-[0.68rem] tracking-[0.12em] text-muted-foreground/70 uppercase">
                      {activeTestimonial.country}
                    </div>
                  )}
                </div>

                <div className="mt-10 flex items-center gap-2 text-primary">
                  <span className="sr-only">
                    {activeTestimonial.rating} out of 5 stars
                  </span>
                  {Array.from({ length: activeTestimonial.rating }).map(
                    (_, index) => (
                      <Star
                        key={index}
                        size={18}
                        fill="currentColor"
                        aria-hidden="true"
                      />
                    ),
                  )}
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <Quote
                    size={58}
                    strokeWidth={1.25}
                    aria-hidden="true"
                    className="text-primary/70"
                  />
                  <blockquote className="mt-7 text-2xl leading-[1.35] font-light tracking-[-0.025em] text-foreground sm:text-3xl lg:text-4xl">
                    “{activeTestimonial.review}”
                  </blockquote>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-6">
                  <div className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(TESTIMONIALS.length).padStart(2, "0")}
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setIsPaused((current) => !current)}
                      aria-label={
                        isPaused
                          ? "Resume automatic testimonial rotation"
                          : "Pause automatic testimonial rotation"
                      }
                      className="inline-flex min-h-11 min-w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      {isPaused ? (
                        <Play size={17} aria-hidden="true" />
                      ) : (
                        <Pause size={17} aria-hidden="true" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={showPrevious}
                      aria-label="Show previous client testimonial"
                      className="inline-flex min-h-11 min-w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      <ArrowLeft size={18} aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      aria-label="Show next client testimonial"
                      className="inline-flex min-h-11 min-w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      <ArrowRight size={18} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div
          role="tablist"
          aria-label="Choose a client testimonial"
          onKeyDown={(event) => {
            if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
              return;
            }

            event.preventDefault();
            const direction = event.key === "ArrowRight" ? 1 : -1;
            const nextIndex =
              (activeIndex + direction + TESTIMONIALS.length) %
              TESTIMONIALS.length;
            setActiveIndex(nextIndex);
            window.requestAnimationFrame(() => {
              const tabs =
                event.currentTarget.querySelectorAll<HTMLElement>(
                  '[role="tab"]',
                );
              tabs[nextIndex]?.focus();
            });
          }}
          className="mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 [scrollbar-width:thin]"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="w-[82%] shrink-0 snap-start sm:w-[48%] lg:w-[calc(25%-0.6rem)]"
            >
              <TestimonialCard
                testimonial={testimonial}
                isActive={index === activeIndex}
                onSelect={() => setActiveIndex(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
