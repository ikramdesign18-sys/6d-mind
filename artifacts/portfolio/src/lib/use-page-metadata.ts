import { useEffect } from "react";

type Attribute = "name" | "property";

function setMetaTag(attribute: Attribute, key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`;
  const existing = document.head.querySelector<HTMLMetaElement>(selector);
  const element = existing ?? document.createElement("meta");
  const previous = existing?.content;

  if (!existing) {
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;

  return () => {
    if (existing && previous !== undefined) {
      existing.content = previous;
    } else {
      element.remove();
    }
  };
}

export function usePageMetadata(title: string, description: string) {
  useEffect(() => {
    const previousTitle = document.title;
    const brandImage = `${window.location.origin}/brand/6d-mind/6d-mind-logo.png`;
    document.title = title;

    const cleanups = [
      setMetaTag("name", "description", description),
      setMetaTag("property", "og:title", title),
      setMetaTag("property", "og:description", description),
      setMetaTag("property", "og:type", "website"),
      setMetaTag("property", "og:image", brandImage),
      setMetaTag("name", "twitter:card", "summary_large_image"),
      setMetaTag("name", "twitter:title", title),
      setMetaTag("name", "twitter:description", description),
      setMetaTag("name", "twitter:image", brandImage),
    ];

    return () => {
      document.title = previousTitle;
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [description, title]);
}
