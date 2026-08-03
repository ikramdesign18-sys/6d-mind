import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
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

const CROSSFADE_DURATION_MS = 500;
const SOUND_PREFERENCE_KEY = "6d-mind-services-sound";

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const storyRef = useRef<HTMLElement>(null);
  const activeIndexRef = useRef(0);
  const transitionTimerRef = useRef<number | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const reduceMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ["start start", "end end"],
  });

  const activeService = SERVICES[activeIndex];

  const playVideo = useCallback(
    async (video: HTMLVideoElement, enableSound: boolean) => {
      video.muted = !enableSound;
      try {
        await video.play();
      } catch {
        if (enableSound) {
          video.muted = true;
          await video.play().catch(() => {});
        }
      }
    },
    [],
  );

  const setStoryIndex = useCallback(
    (progress: number) => {
      const nextIndex = Math.min(
        SERVICES.length - 1,
        Math.max(0, Math.floor(progress * SERVICES.length)),
      );

      if (nextIndex === activeIndexRef.current) return;

      const outgoingIndex = activeIndexRef.current;
      const incomingVideo = videoRefs.current[nextIndex];

      if (incomingVideo) {
        incomingVideo.pause();
        incomingVideo.currentTime = 0;
      }

      if (transitionTimerRef.current !== null) {
        window.clearTimeout(transitionTimerRef.current);
      }

      activeIndexRef.current = nextIndex;
      setPreviousIndex(outgoingIndex);
      setActiveIndex(nextIndex);

      transitionTimerRef.current = window.setTimeout(
        () => {
          setPreviousIndex(null);
          transitionTimerRef.current = null;
        },
        reduceMotion ? 0 : CROSSFADE_DURATION_MS,
      );
    },
    [reduceMotion],
  );

  useMotionValueEvent(scrollYProgress, "change", setStoryIndex);

  useEffect(() => {
    setStoryIndex(scrollYProgress.get());
  }, [scrollYProgress, setStoryIndex]);

  useEffect(() => {
    const savedSound = sessionStorage.getItem(SOUND_PREFERENCE_KEY);
    if (savedSound === "on") {
      setSoundEnabled(true);
    }
  }, []);

  useEffect(() => {
    const activeVideo = videoRefs.current[activeIndex];
    const outgoingVideo =
      previousIndex === null ? null : videoRefs.current[previousIndex];

    videoRefs.current.forEach((video, index) => {
      if (!video || index === activeIndex || index === previousIndex) return;
      video.pause();
    });

    if (outgoingVideo) {
      void playVideo(outgoingVideo, soundEnabled);
    }

    if (activeVideo) {
      void playVideo(activeVideo, soundEnabled);
    }
  }, [activeIndex, playVideo, previousIndex, soundEnabled]);

  useEffect(() => {
    const syncDocumentVisibility = () => {
      if (document.hidden) {
        videoRefs.current.forEach((video) => video?.pause());
        return;
      }

      const activeVideo = videoRefs.current[activeIndexRef.current];
      if (activeVideo) void playVideo(activeVideo, soundEnabled);
    };

    document.addEventListener("visibilitychange", syncDocumentVisibility);

    return () => {
      document.removeEventListener("visibilitychange", syncDocumentVisibility);
    };
  }, [playVideo, soundEnabled]);

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current !== null) {
        window.clearTimeout(transitionTimerRef.current);
      }
      videoRefs.current.forEach((video) => video?.pause());
    };
  }, []);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    sessionStorage.setItem(SOUND_PREFERENCE_KEY, nextState ? "on" : "off");
    const activeVideo = videoRefs.current[activeIndex];
    if (activeVideo) {
      activeVideo.muted = !nextState;
      if (nextState) {
        void activeVideo.play().catch(() => {});
      }
    }
  };

  const crossfadeTransition = reduceMotion
    ? { duration: 0 }
    : { duration: CROSSFADE_DURATION_MS / 1000, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section
      id="expertise"
      ref={storyRef}
      className="services-pinned-story"
      aria-label="Services Story"
    >
      <div className="services-pinned-stage">
        {/* Fullscreen Stage Videos */}
        <div className="services-video-stack" aria-hidden="true">
          {SERVICES.map((service, index) => (
            <motion.video
              key={service.id}
              ref={(video) => {
                videoRefs.current[index] = video;
              }}
              className="services-stage-video"
              initial={{ opacity: index === 0 ? 1 : 0 }}
              animate={{ opacity: index === activeIndex ? 1 : 0 }}
              transition={crossfadeTransition}
              style={{
                zIndex:
                  index === activeIndex ? 2 : index === previousIndex ? 1 : 0,
              }}
              autoPlay
              muted={!soundEnabled}
              loop
              playsInline
              preload="auto"
              tabIndex={-1}
            >
              <source src={service.mp4} type="video/mp4" />
            </motion.video>
          ))}
        </div>

        {/* Gradient Scrim for Readability */}
        <div className="services-stage-scrim" aria-hidden="true" />

        {/* Sound Toggle Button */}
        <button
          type="button"
          className="services-sound-control"
          onClick={toggleSound}
          aria-label={
            soundEnabled
              ? "Mute service video sound"
              : "Unmute service video sound"
          }
        >
          {soundEnabled ? (
            <Volume2 size={16} aria-hidden="true" />
          ) : (
            <VolumeX size={16} aria-hidden="true" />
          )}
          <span>🔊 Sound</span>
        </button>

        {/* Bottom-Left Overlay Text */}
        <div className="services-story-bottom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              className="services-story-content"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <p className="services-story-number">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(SERVICES.length).padStart(2, "0")}
              </p>
              <h2 className="services-story-title">{activeService.name}</h2>
              <p className="services-story-description">
                {activeService.description}
              </p>
              <Link
                href={`/expertise/${activeService.slug}`}
                className="services-story-link"
                aria-label={`View ${activeService.name.replace("&", "and")} details`}
              >
                View Details <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

