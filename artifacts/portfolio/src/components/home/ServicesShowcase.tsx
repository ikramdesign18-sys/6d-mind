import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import {
  type RefCallback,
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
  mp4: string;
  productionReady: boolean;
};

const SERVICES: readonly Service[] = [
  {
    id: "ui-ux-product-design",
    slug: "ui-ux-product-design",
    name: "UI/UX & Product Design",
    description:
      "Research-led experiences, scalable design systems, prototypes, dashboards, websites, mobile apps, and developer-ready interfaces.",
    mp4: "/media/services/ui-ux-product-design.mp4",
    productionReady: false,
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    name: "Mobile App Development",
    description:
      "Production-ready mobile applications built for performance, usability, maintainability, and long-term growth.",
    mp4: "/media/services/mobile-app-development.mp4",
    productionReady: false,
  },
  {
    id: "website-web-app-development",
    slug: "website-web-app-development",
    name: "Website & Web App Development",
    description:
      "Modern websites, SaaS products, dashboards, e-commerce platforms, and responsive web applications.",
    mp4: "/media/services/web-development.mp4",
    productionReady: false,
  },
  {
    id: "ai-product-development",
    slug: "ai-product-development",
    name: "AI Product Development",
    description:
      "Practical AI-powered products that automate workflows, personalize experiences, and solve real business problems.",
    mp4: "/media/services/ai-product-development.mp4",
    productionReady: false,
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    name: "Graphic Design",
    description:
      "High-impact visual communication for campaigns, digital platforms, products, presentations, and social media.",
    mp4: "/media/services/graphic-design.mp4",
    productionReady: false,
  },
  {
    id: "branding-visual-identity",
    slug: "branding-visual-identity",
    name: "Branding & Visual Identity",
    description:
      "Strategic identity systems that make products and businesses recognizable, consistent, and memorable.",
    mp4: "/media/services/branding-identity.mp4",
    productionReady: false,
  },
] as const;

const SOUND_PREFERENCE_KEY = "6d-mind-services-sound";

function ServiceMedia({
  service,
  serviceIndex,
  shouldPlay,
  soundEnabled,
  reduceMotion,
  registerVideo,
}: {
  service: Service;
  serviceIndex: number;
  shouldPlay: boolean;
  soundEnabled: boolean;
  reduceMotion: boolean;
  registerVideo: (index: number, video: HTMLVideoElement | null) => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const assignVideoRef: RefCallback<HTMLVideoElement> = useCallback(
    (video) => {
      videoRef.current = video;
      registerVideo(serviceIndex, video);
    },
    [registerVideo, serviceIndex],
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !service.productionReady || reduceMotion) return;

    video.muted = !soundEnabled;
    video.currentTime = 0;

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
  }, [reduceMotion, service, shouldPlay, soundEnabled]);

  if (!service.productionReady || reduceMotion) {
    return (
      <div className="services-clean-poster" aria-hidden="true">
        <img
          src="/brand/6d-mind/6d-mind-icon.png"
          width="650"
          height="650"
          alt=""
        />
      </div>
    );
  }

  return (
    <video
      ref={assignVideoRef}
      muted={!soundEnabled}
      loop
      playsInline
      autoPlay={shouldPlay}
      preload="metadata"
      tabIndex={-1}
      aria-hidden="true"
    >
      <source src={service.mp4} type="video/mp4" />
    </video>
  );
}

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const activeIndexRef = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const videoRefs = useRef(new Map<number, HTMLVideoElement>());
  const reduceMotion = useReducedMotion() ?? false;
  const sectionInView = useInView(sectionRef, { amount: 0.05 });
  const activeService = SERVICES[activeIndex];

  const registerVideo = useCallback(
    (index: number, video: HTMLVideoElement | null) => {
      if (video) {
        videoRefs.current.set(index, video);
      } else {
        videoRefs.current.delete(index);
      }
    },
    [],
  );

  const activateService = useCallback((index: number) => {
    if (activeIndexRef.current === index) return;

    videoRefs.current.forEach((video) => video.pause());
    activeIndexRef.current = index;
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleStep = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleStep) return;
        const nextIndex = Number(
          (visibleStep.target as HTMLDivElement).dataset.service,
        );

        if (Number.isInteger(nextIndex)) activateService(nextIndex);
      },
      {
        rootMargin: "-44% 0px -44% 0px",
        threshold: [0, 0.05],
      },
    );

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, [activateService]);

  useEffect(() => {
    setSoundEnabled(sessionStorage.getItem(SOUND_PREFERENCE_KEY) === "on");
  }, []);

  const toggleSound = () => {
    const nextSoundState = !soundEnabled;
    setSoundEnabled(nextSoundState);
    sessionStorage.setItem(SOUND_PREFERENCE_KEY, nextSoundState ? "on" : "off");

    const activeVideo = videoRefs.current.get(activeIndex);
    if (!activeVideo) return;

    activeVideo.muted = !nextSoundState;
    if (nextSoundState) {
      const playPromise = activeVideo.play();
      if (playPromise) void playPromise.catch(() => undefined);
    }
  };

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.48, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="services-scroll-story"
      aria-labelledby="services-story-heading"
    >
      <div className="services-sticky-stage">
        <div className="services-media-stack" aria-hidden="true">
          <AnimatePresence initial={false}>
            <motion.div
              key={activeService.id}
              className="services-media-layer"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
            >
              <ServiceMedia
                service={activeService}
                serviceIndex={activeIndex}
                shouldPlay={sectionInView && !reduceMotion}
                soundEnabled={soundEnabled}
                reduceMotion={reduceMotion}
                registerVideo={registerVideo}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="services-video-scrim" aria-hidden="true" />

        <header className="services-story-intro">
          <p>Our capabilities</p>
          <h2 id="services-story-heading">
            Six Disciplines. <span>One Complete Product Journey.</span>
          </h2>
          <div>
            Strategy, design, development, AI, visual communication, and
            branding—connected through one focused workflow.
          </div>
        </header>

        {activeService.productionReady && !reduceMotion && (
          <button
            type="button"
            className="services-sound-control"
            onClick={toggleSound}
            aria-label={
              soundEnabled
                ? "Turn service video sound off"
                : "Turn service video sound on"
            }
          >
            {soundEnabled ? (
              <Volume2 size={16} aria-hidden="true" />
            ) : (
              <VolumeX size={16} aria-hidden="true" />
            )}
            <span>{soundEnabled ? "Sound Off" : "Sound On"}</span>
          </button>
        )}

        <div className="services-story-bottom">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={activeService.id}
              className="services-story-content"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
              transition={transition}
            >
              <p className="services-story-number">
                {String(activeIndex + 1).padStart(2, "0")} / 06
              </p>
              <h3>{activeService.name}</h3>
              <p className="services-story-description">
                {activeService.description}
              </p>
              <Link
                href={`/expertise/${activeService.slug}`}
                className="services-story-link"
                aria-label={`View ${activeService.name.replace("&", "and")} details`}
              >
                View Details
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </motion.div>
          </AnimatePresence>

          <div
            className="services-story-progress"
            role="progressbar"
            aria-label={`Service ${activeIndex + 1} of ${SERVICES.length}: ${activeService.name}`}
            aria-valuemin={1}
            aria-valuemax={SERVICES.length}
            aria-valuenow={activeIndex + 1}
          >
            <span>{String(activeIndex + 1).padStart(2, "0")} / 06</span>
            <div aria-hidden="true">
              {SERVICES.map((service, index) => (
                <i
                  key={service.id}
                  className={index <= activeIndex ? "is-complete" : ""}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="services-story-announcement" aria-live="polite">
          Showing service {activeIndex + 1} of {SERVICES.length}:{" "}
          {activeService.name}
        </p>
      </div>

      <div className="services-scroll-steps" aria-hidden="true">
        {SERVICES.map((service, index) => (
          <div
            key={service.id}
            ref={(step) => {
              stepRefs.current[index] = step;
            }}
            className="services-scroll-step"
            data-service={index}
          />
        ))}
      </div>
    </section>
  );
}
