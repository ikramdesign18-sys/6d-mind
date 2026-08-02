import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import {
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
};

const SERVICES: readonly Service[] = [
  {
    id: "ui-ux-product-design",
    slug: "ui-ux-product-design",
    name: "UI/UX & Product Design",
    description:
      "Research-led experiences, scalable design systems, prototypes, dashboards, websites, mobile apps, and developer-ready interfaces.",
    mp4: "/media/services/ui-ux-product-design.mp4",
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    name: "Mobile App Development",
    description:
      "Production-ready mobile applications built for performance, usability, maintainability, and long-term growth.",
    mp4: "/media/services/mobile-app-development.mp4",
  },
  {
    id: "website-web-app-development",
    slug: "website-web-app-development",
    name: "Website & Web App Development",
    description:
      "Modern websites, SaaS products, dashboards, e-commerce platforms, and responsive web applications.",
    mp4: "/media/services/web-development.mp4",
  },
  {
    id: "ai-product-development",
    slug: "ai-product-development",
    name: "AI Product Development",
    description:
      "Practical AI-powered products that automate workflows, personalize experiences, and solve real business problems.",
    mp4: "/media/services/ai-product-development.mp4",
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    name: "Graphic Design",
    description:
      "High-impact visual communication for campaigns, digital platforms, products, presentations, and social media.",
    mp4: "/media/services/graphic-design.mp4",
  },
  {
    id: "branding-visual-identity",
    slug: "branding-visual-identity",
    name: "Branding & Visual Identity",
    description:
      "Strategic identity systems that make products and businesses recognizable, consistent, and memorable.",
    mp4: "/media/services/branding-identity.mp4",
  },
] as const;

const SOUND_PREFERENCE_KEY = "6d-mind-services-sound";
const PLAYBACK_ERROR_MESSAGE =
  "The active service video could not start. Please try scrolling to the next service and back.";

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [playbackError, setPlaybackError] = useState<string | null>(null);
  const activeIndexRef = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionInViewRef = useRef(false);
  const soundEnabledRef = useRef(false);
  const reduceMotion = useReducedMotion() ?? false;
  const sectionInView = useInView(sectionRef, { amount: 0.05 });
  const activeService = SERVICES[activeIndex];

  const activateService = useCallback((index: number) => {
    if (index < 0 || index >= SERVICES.length || activeIndexRef.current === index) {
      return;
    }

    videoRef.current?.pause();
    activeIndexRef.current = index;
    setActiveIndex(index);
  }, []);

  const playVideo = useCallback(
    async (video: HTMLVideoElement, enableSound: boolean) => {
      video.muted = true;

      try {
        await video.play();
        if (enableSound) video.muted = false;
        setPlaybackError(null);
      } catch {
        setPlaybackError(PLAYBACK_ERROR_MESSAGE);
      }
    },
    [],
  );

  useEffect(() => {
    const visibleSteps = new Map<number, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(
            (entry.target as HTMLDivElement).dataset.serviceIndex,
          );

          if (!Number.isInteger(index)) return;

          if (entry.isIntersecting) {
            visibleSteps.set(index, entry);
          } else {
            visibleSteps.delete(index);
          }
        });

        const visibleStep = [...visibleSteps.values()].sort((a, b) => {
          const aCenter =
            a.boundingClientRect.top + a.boundingClientRect.height / 2;
          const bCenter =
            b.boundingClientRect.top + b.boundingClientRect.height / 2;
          const viewportCenter = window.innerHeight / 2;

          return (
            Math.abs(aCenter - viewportCenter) -
              Math.abs(bCenter - viewportCenter) ||
            b.intersectionRatio - a.intersectionRatio
          );
        })[0];

        if (!visibleStep) return;
        const nextIndex = Number(
          (visibleStep.target as HTMLDivElement).dataset.serviceIndex,
        );

        if (Number.isInteger(nextIndex)) activateService(nextIndex);
      },
      {
        rootMargin: "-20% 0px -20% 0px",
        threshold: [0, 0.2, 0.5],
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

  useEffect(() => {
    soundEnabledRef.current = soundEnabled;
    const video = videoRef.current;
    if (!video) return;

    if (!soundEnabled) {
      video.muted = true;
      return;
    }

    if (sectionInViewRef.current && !document.hidden) {
      void playVideo(video, true);
    }
  }, [playVideo, soundEnabled]);

  useEffect(() => {
    sectionInViewRef.current = sectionInView;
    const video = videoRef.current;
    if (!video) return;

    if (!sectionInView || document.hidden) {
      video.pause();
      return;
    }

    void playVideo(video, soundEnabledRef.current);
  }, [playVideo, sectionInView]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let disposed = false;

    const startActiveVideo = () => {
      if (disposed || !sectionInViewRef.current || document.hidden) return;

      video.currentTime = 0;
      void playVideo(video, soundEnabledRef.current);
    };

    const syncVisibility = () => {
      if (document.hidden || !sectionInViewRef.current) {
        video.pause();
        return;
      }

      void playVideo(video, soundEnabledRef.current);
    };

    video.pause();
    video.muted = true;
    video.load();
    video.addEventListener("loadeddata", startActiveVideo, { once: true });
    document.addEventListener("visibilitychange", syncVisibility);

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      startActiveVideo();
    }

    return () => {
      disposed = true;
      video.removeEventListener("loadeddata", startActiveVideo);
      document.removeEventListener("visibilitychange", syncVisibility);
      video.pause();
    };
  }, [activeService.mp4, playVideo]);

  const toggleSound = () => {
    const nextSoundState = !soundEnabled;
    setSoundEnabled(nextSoundState);
    sessionStorage.setItem(SOUND_PREFERENCE_KEY, nextSoundState ? "on" : "off");
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
          <video
            ref={videoRef}
            className="service-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            tabIndex={-1}
            onError={() => setPlaybackError(PLAYBACK_ERROR_MESSAGE)}
          >
            <source
              key={activeService.mp4}
              src={activeService.mp4}
              type="video/mp4"
            />
          </video>
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
        </div>

        <p className="services-story-announcement" aria-live="polite">
          {playbackError ||
            `Showing service ${activeIndex + 1} of ${SERVICES.length}: ${activeService.name}`}
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
            data-service-index={index}
          />
        ))}
      </div>
    </section>
  );
}
