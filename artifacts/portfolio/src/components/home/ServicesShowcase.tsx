import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  type KeyboardEvent,
  type ReactNode,
  useCallback,
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
  visual: "product" | "mobile" | "web" | "ai" | "graphic" | "brand";
};

const SERVICES: readonly Service[] = [
  {
    id: "ui-ux-product-design",
    slug: "ui-ux-product-design",
    name: "UI/UX & Product Design",
    description:
      "Research-led digital experiences, scalable design systems, prototypes, dashboards, websites, mobile apps, and developer-ready interfaces.",
    labels: ["UX Research", "Product Design", "Design Systems"],
    visual: "product",
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    name: "Mobile App Development",
    description:
      "Production-ready mobile applications built for performance, usability, maintainability, and long-term growth.",
    labels: ["React Native", "Expo", "TypeScript"],
    visual: "mobile",
  },
  {
    id: "website-web-app-development",
    slug: "website-web-app-development",
    name: "Website & Web App Development",
    description:
      "Modern websites, SaaS products, dashboards, e-commerce platforms, and responsive web applications.",
    labels: ["React", "Next.js", "Full Stack"],
    visual: "web",
  },
  {
    id: "ai-product-development",
    slug: "ai-product-development",
    name: "AI Product Development",
    description:
      "Practical AI-powered products that automate workflows, personalize experiences, and solve real business problems.",
    labels: ["AI Strategy", "LLM Integration", "Automation"],
    visual: "ai",
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    name: "Graphic Design",
    description:
      "High-impact visual communication for campaigns, digital platforms, products, presentations, and social media.",
    labels: ["Campaign Design", "Social Media", "Marketing Visuals"],
    visual: "graphic",
  },
  {
    id: "branding-visual-identity",
    slug: "branding-visual-identity",
    name: "Branding & Visual Identity",
    description:
      "Strategic identity systems that make products and businesses recognizable, consistent, and memorable.",
    labels: ["Brand Strategy", "Logo Systems", "Visual Identity"],
    visual: "brand",
  },
] as const;

function ProductArtwork() {
  return (
    <div className="service-art service-art--product">
      <span className="product-grid" />
      <span className="product-frame product-frame--one" />
      <span className="product-frame product-frame--two" />
      <span className="product-module product-module--one" />
      <span className="product-module product-module--two" />
      <span className="product-module product-module--three" />
      <span className="product-cursor" />
    </div>
  );
}

function MobileArtwork() {
  return (
    <div className="service-art service-art--mobile">
      <span className="mobile-orbit mobile-orbit--one" />
      <span className="mobile-orbit mobile-orbit--two" />
      <span className="mobile-device mobile-device--back">
        <i />
        <i />
        <i />
      </span>
      <span className="mobile-device mobile-device--front">
        <i />
        <i />
        <i />
      </span>
      <span className="mobile-signal mobile-signal--one" />
      <span className="mobile-signal mobile-signal--two" />
    </div>
  );
}

function WebArtwork() {
  return (
    <div className="service-art service-art--web">
      <span className="web-rail web-rail--one" />
      <span className="web-rail web-rail--two" />
      <span className="web-plane web-plane--back">
        <i />
        <i />
        <i />
      </span>
      <span className="web-plane web-plane--front">
        <i />
        <i />
        <i />
      </span>
      <span className="web-node web-node--one" />
      <span className="web-node web-node--two" />
      <span className="web-node web-node--three" />
    </div>
  );
}

function AiArtwork() {
  return (
    <div className="service-art service-art--ai">
      <span className="ai-ring ai-ring--outer" />
      <span className="ai-ring ai-ring--inner" />
      <span className="ai-core">
        <i />
      </span>
      {Array.from({ length: 10 }, (_, index) => (
        <span
          className={`ai-node ai-node--${index + 1}`}
          key={`ai-node-${index + 1}`}
        />
      ))}
    </div>
  );
}

function GraphicArtwork() {
  return (
    <div className="service-art service-art--graphic">
      <span className="graphic-axis" />
      <span className="graphic-sheet graphic-sheet--one">
        <i />
      </span>
      <span className="graphic-sheet graphic-sheet--two">
        <i />
      </span>
      <span className="graphic-sheet graphic-sheet--three">
        <i />
      </span>
      <span className="graphic-disc graphic-disc--one" />
      <span className="graphic-disc graphic-disc--two" />
    </div>
  );
}

function BrandArtwork() {
  return (
    <div className="service-art service-art--brand">
      <span className="brand-grid" />
      <span className="brand-mark">
        <i />
        <i />
        <i />
      </span>
      <span className="brand-swatch brand-swatch--navy" />
      <span className="brand-swatch brand-swatch--blue" />
      <span className="brand-swatch brand-swatch--gold" />
      <span className="brand-rule brand-rule--one" />
      <span className="brand-rule brand-rule--two" />
    </div>
  );
}

const ARTWORK: Record<Service["visual"], ReactNode> = {
  product: <ProductArtwork />,
  mobile: <MobileArtwork />,
  web: <WebArtwork />,
  ai: <AiArtwork />,
  graphic: <GraphicArtwork />,
  brand: <BrandArtwork />,
};

function ServiceArtwork({
  service,
  paused,
}: {
  service: Service;
  paused: boolean;
}) {
  return (
    <div
      className={`services-artwork${paused ? " services-artwork--paused" : ""}`}
      aria-hidden="true"
    >
      <div className="services-artwork__index">
        {String(SERVICES.indexOf(service) + 1).padStart(2, "0")}
      </div>
      <div className="services-artwork__caption">CONNECTED SYSTEM</div>
      {ARTWORK[service.visual]}
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
  const activeService = SERVICES[activeIndex];
  const artworkPaused = reduceMotion || !isInView;

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
                <ServiceArtwork
                  service={activeService}
                  paused={artworkPaused}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

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
                      initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={
                        reduceMotion
                          ? { opacity: 0, height: 0 }
                          : { opacity: 0, height: 0 }
                      }
                      transition={transition}
                    >
                      <div className="services-mobile__artwork">
                        <ServiceArtwork
                          service={service}
                          paused={artworkPaused}
                        />
                      </div>
                      <ServiceDetails service={service} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
