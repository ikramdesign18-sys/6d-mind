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

export function usePageMetadata(
  title: string,
  description: string,
  imagePath = "/brand/6d-mind/6d-mind-logo.png",
  type = "website",
) {
  useEffect(() => {
    const previousTitle = document.title;
    const socialImage = imagePath.startsWith("http")
      ? imagePath
      : `${window.location.origin}${imagePath}`;
    document.title = title;

    const cleanups = [
      setMetaTag("name", "description", description),
      setMetaTag("property", "og:title", title),
      setMetaTag("property", "og:description", description),
      setMetaTag("property", "og:type", type),
      setMetaTag("property", "og:image", socialImage),
      setMetaTag("name", "twitter:card", "summary_large_image"),
      setMetaTag("name", "twitter:title", title),
      setMetaTag("name", "twitter:description", description),
      setMetaTag("name", "twitter:image", socialImage),
    ];

    return () => {
      document.title = previousTitle;
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [description, imagePath, title, type]);
}
