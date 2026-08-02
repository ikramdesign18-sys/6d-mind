import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  type KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link } from "wouter";

import "./ServicesShowcase.css";

type Service = {
  id: string;
  slug: string;
  name: string;
  description: string;
  labels: readonly string[];
  mp4: string;
  poster: string;
};

const SERVICES: readonly Service[] = [
  {
    id: "ui-ux-product-design",
    slug: "ui-ux-product-design",
    name: "UI/UX & Product Design",
    description:
      "Research-led digital experiences, scalable design systems, prototypes, dashboards, websites, mobile apps, and developer-ready interfaces.",
    labels: ["UX Research", "Product Design", "Design Systems"],
    mp4: "/media/services/ui-ux-product-design.mp4",
    poster: "/media/services/ui-ux-product-design-poster.jpg",
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    name: "Mobile App Development",
    description:
      "Production-ready mobile applications built for performance, usability, maintainability, and long-term growth.",
    labels: ["React Native", "Expo", "TypeScript"],
    mp4: "/media/services/mobile-app-development.mp4",
    poster: "/media/services/mobile-app-development-poster.jpg",
  },
  {
    id: "website-web-app-development",
    slug: "website-web-app-development",
    name: "Website & Web App Development",
    description:
      "Modern websites, SaaS products, dashboards, e-commerce platforms, and responsive web applications.",
    labels: ["React", "Next.js", "Full Stack"],
    mp4: "/media/services/web-development.mp4",
    poster: "/media/services/web-development-poster.jpg",
  },
  {
    id: "ai-product-development",
    slug: "ai-product-development",
    name: "AI Product Development",
    description:
      "Practical AI-powered products that automate workflows, personalize experiences, and solve real business problems.",
    labels: ["AI Strategy", "LLM Integration", "Automation"],
    mp4: "/media/services/ai-product-development.mp4",
    poster: "/media/services/ai-product-development-poster.jpg",
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    name: "Graphic Design",
    description:
      "High-impact visual communication for campaigns, digital platforms, products, presentations, and social media.",
    labels: ["Campaign Design", "Social Media", "Marketing Visuals"],
    mp4: "/media/services/graphic-design.mp4",
    poster: "/media/services/graphic-design-poster.jpg",
  },
  {
    id: "branding-visual-identity",
    slug: "branding-visual-identity",
    name: "Branding & Visual Identity",
    description:
      "Strategic identity systems that make products and businesses recognizable, consistent, and memorable.",
    labels: ["Brand Strategy", "Logo Systems", "Visual Identity"],
    mp4: "/media/services/branding-identity.mp4",
    poster: "/media/services/branding-identity-poster.jpg",
  },
] as const;

function useMobileLayout() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window === "undefined"
      ? false
      : window.matchMedia("(max-width: 900px)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
    const updateLayout = () => setIsMobile(mediaQuery.matches);

    updateLayout();
    mediaQuery.addEventListener("change", updateLayout);
    return () => mediaQuery.removeEventListener("change", updateLayout);
  }, []);

  return isMobile;
}

function ServiceMedia({
  service,
  shouldPlay,
  reduceMotion,
}: {
  service: Service;
  shouldPlay: boolean;
  reduceMotion: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;

    const syncPlayback = () => {
      if (!shouldPlay || document.hidden) {
        video.pause();
        return;
      }

      const playPromise = video.play();
      if (playPromise) void playPromise.catch(() => undefined);
    };

    syncPlayback();
    document.addEventListener("visibilitychange", syncPlayback);

    return () => {
      document.removeEventListener("visibilitychange", syncPlayback);
      video.pause();
    };
  }, [reduceMotion, service.mp4, shouldPlay]);

  if (reduceMotion) {
    return (
      <div className="services-media" aria-hidden="true">
        <img src={service.poster} alt="" />
      </div>
    );
  }

  return (
    <div className="services-media" aria-hidden="true">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay={shouldPlay}
        preload="metadata"
        poster={service.poster}
        tabIndex={-1}
      >
        <source src={service.mp4} type="video/mp4" />
      </video>
    </div>
  );
}

function ServiceDetails({ service }: { service: Service }) {
  return (
    <div className="services-details">
      <p className="services-details__number">
        {String(SERVICES.indexOf(service) + 1).padStart(2, "0")} / 06
      </p>
      <h3>{service.name}</h3>
      <p className="services-details__description">{service.description}</p>
      <ul className="services-details__labels" aria-label="Capabilities">
        {service.labels.map((label) => (
          <li key={label}>{label}</li>
        ))}
      </ul>
      <Link
        href={`/expertise/${service.slug}`}
        className="services-details__link"
        aria-label={`View ${service.name.replace("&", "and")} details`}
      >
        View Details
        <ArrowRight size={17} aria-hidden="true" />
      </Link>
    </div>
  );
}

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const reduceMotion = useReducedMotion() ?? false;
  const isInView = useInView(sectionRef, { amount: 0.15 });
  const isMobile = useMobileLayout();
  const activeService = SERVICES[activeIndex];
  const shouldPlayVideo = isInView && !reduceMotion;

  const activate = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex: number | undefined;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (index + 1) % SERVICES.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = (index - 1 + SERVICES.length) % SERVICES.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = SERVICES.length - 1;
    }

    if (nextIndex === undefined) return;

    event.preventDefault();
    activate(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.34, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="services-showcase"
      aria-labelledby="services-heading"
    >
      <div className="services-showcase__inner">
        <header className="services-showcase__header">
          <p className="services-showcase__eyebrow">Our capabilities</p>
          <div>
            <h2 id="services-heading">
              Six Disciplines. <span>One Complete Product Journey.</span>
            </h2>
            <p className="services-showcase__intro">
              Strategy, design, development, AI, visual communication, and
              branding—connected through one focused workflow.
            </p>
          </div>
        </header>

        {!isMobile ? (
          <div className="services-desktop">
            <div
              className="services-nav"
              role="tablist"
              aria-label="Select a service"
              aria-orientation="vertical"
            >
              {SERVICES.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    type="button"
                    role="tab"
                    id={`service-tab-${service.id}`}
                    aria-controls={`service-panel-${service.id}`}
                    aria-selected={isActive}
                    tabIndex={isActive ? 0 : -1}
                    className="services-nav__item"
                    key={service.id}
                    ref={(element) => {
                      tabRefs.current[index] = element;
                    }}
                    onClick={() => activate(index)}
                    onMouseEnter={() => activate(index)}
                    onKeyDown={(event) => handleTabKeyDown(event, index)}
                  >
                    {isActive && (
                      <motion.span
                        className="services-nav__indicator"
                        layoutId="service-indicator"
                        transition={transition}
                      />
                    )}
                    <span className="services-nav__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{service.name}</span>
                    <span className="services-nav__state" aria-hidden="true">
                      {isActive ? "Active" : "View"}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="services-stage">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={activeService.id}
                  id={`service-panel-${activeService.id}`}
                  role="tabpanel"
                  aria-labelledby={`service-tab-${activeService.id}`}
                  className="services-stage__panel"
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
                  transition={transition}
                >
                  <ServiceDetails service={activeService} />
                  <ServiceMedia
                    service={activeService}
                    shouldPlay={shouldPlayVideo}
                    reduceMotion={reduceMotion}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <div className="services-mobile" aria-label="Services">
            {SERVICES.map((service, index) => {
              const isActive = activeIndex === index;
              const buttonId = `mobile-service-button-${service.id}`;
              const panelId = `mobile-service-panel-${service.id}`;

              return (
                <div
                  className={`services-mobile__item${isActive ? " is-active" : ""}`}
                  key={service.id}
                >
                  <button
                    type="button"
                    id={buttonId}
                    className="services-mobile__button"
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    onClick={() => activate(index)}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{service.name}</strong>
                    <i aria-hidden="true">{isActive ? "−" : "+"}</i>
                  </button>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className="services-mobile__panel"
                        initial={
                          reduceMotion ? false : { opacity: 0, height: 0 }
                        }
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={transition}
                      >
                        <ServiceMedia
                          service={service}
                          shouldPlay={shouldPlayVideo}
                          reduceMotion={reduceMotion}
                        />
                        <ServiceDetails service={service} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
