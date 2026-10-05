import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const hashValue = decodeURIComponent(hash.slice(1));

      const galleryHashes = ["gallery", "gallery-videos", "gallery-music"];

      const targetId = galleryHashes.includes(hashValue)
        ? "gallery"
        : hashValue;

      requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
