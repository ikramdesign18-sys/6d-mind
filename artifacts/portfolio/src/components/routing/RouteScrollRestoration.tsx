import { useCallback, useLayoutEffect, useRef } from "react";
import { useLocation } from "wouter";

function getHashTarget(hash: string) {
  if (!hash || hash === "#") return null;

  const rawId = hash.slice(1);
  let id = rawId;

  try {
    id = decodeURIComponent(rawId);
  } catch {
    // Keep the raw value when the URL contains malformed escape sequences.
  }

  return document.getElementById(id);
}

function scrollWindowToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });
}

export default function RouteScrollRestoration() {
  const [pathname] = useLocation();
  const observerRef = useRef<MutationObserver | null>(null);
  const handledPathRef = useRef(window.location.pathname);
  const handledUrlRef = useRef(
    `${window.location.pathname}${window.location.search}${window.location.hash}`,
  );

  const restoreScrollPosition = useCallback(() => {
    observerRef.current?.disconnect();
    observerRef.current = null;

    const hash = window.location.hash;
    const target = getHashTarget(hash);

    if (target) {
      target.scrollIntoView({
        block: "start",
        behavior: "auto",
      });
      return;
    }

    scrollWindowToTop();

    if (!hash || hash === "#") return;

    const observer = new MutationObserver(() => {
      const deferredTarget = getHashTarget(window.location.hash);

      if (!deferredTarget) return;

      observer.disconnect();
      observerRef.current = null;
      deferredTarget.scrollIntoView({
        block: "start",
        behavior: "auto",
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
    observerRef.current = observer;
  }, []);

  useLayoutEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      observerRef.current?.disconnect();
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    handledPathRef.current = window.location.pathname;
    handledUrlRef.current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    restoreScrollPosition();

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, [pathname, restoreScrollPosition]);

  useLayoutEffect(() => {
    const handleSamePathNavigation = () => {
      if (window.location.pathname !== handledPathRef.current) return;

      const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      if (currentUrl === handledUrlRef.current) return;

      handledUrlRef.current = currentUrl;
      restoreScrollPosition();
    };

    window.addEventListener("hashchange", handleSamePathNavigation);
    window.addEventListener("popstate", handleSamePathNavigation);
    window.addEventListener("pushState", handleSamePathNavigation);
    window.addEventListener("replaceState", handleSamePathNavigation);

    return () => {
      window.removeEventListener("hashchange", handleSamePathNavigation);
      window.removeEventListener("popstate", handleSamePathNavigation);
      window.removeEventListener("pushState", handleSamePathNavigation);
      window.removeEventListener("replaceState", handleSamePathNavigation);
    };
  }, [restoreScrollPosition]);

  return null;
}
