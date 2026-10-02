import { useState } from "react";
import { ImageIcon, Video, X } from "lucide-react";
import { Link } from 'react-router-dom';

const galleryImages = import.meta.glob<string>(
  "../images/gallery/photos/home/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

const images = Object.values(galleryImages);

const galleryVideos = import.meta.glob<string>(
  "../images/gallery/videos/*.mp4",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

const videos = Object.values(galleryVideos);

export default function GallerySection() {
  const [tab, setTab] = useState<"images" | "videos">("images");
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="scroll-mt-20 bg-stone-950 px-6 py-24 scroll-mt-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl text-stone-100 sm:text-4xl">
            Gallery
          </h2>

          <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent" />

          <p className="mt-6 text-sm font-light text-stone-500">
            A collection of photos and videos honoring Roberto's memory.
          </p>
        </div>

        {/* Toggle buttons */}
        <div className="mb-10 flex justify-center gap-4">
          <button
            onClick={() => setTab("images")}
            className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
              tab === "images"
                ? "bg-amber-200/15 text-amber-100 ring-1 ring-amber-200/30"
                : "text-stone-500 hover:text-stone-300"
            }`}
          >
            <ImageIcon className="h-4 w-4" />
            Images
          </button>

          <button
            onClick={() => setTab("videos")}
            className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
              tab === "videos"
                ? "bg-amber-200/15 text-amber-100 ring-1 ring-amber-200/30"
                : "text-stone-500 hover:text-stone-300"
            }`}
          >
            <Video className="h-4 w-4" />
            Video
          </button>
        </div>

        {/* Images grid */}
        {tab === "images" && (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {images.slice(0, 3).map((image, index) => (
                <button
                  key={image}
                  onClick={() => setLightbox(image)}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <img
                    src={image}
                    alt={`Roberto memorial photo ${index + 1}`}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                </button>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/gallery"
                className="text-sm font-light tracking-wide text-amber-200/70 transition-colors hover:text-amber-100"
              >
                View More →
              </Link>
            </div>
          </>
        )}

        {/* Video grid */}
        {tab === "videos" && (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="overflow-hidden rounded-lg bg-black">
                <video
                  src={videos[0]}
                  controls
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-stone-800 p-8 text-center">
                <p className="text-sm font-light text-stone-600">
                  Video tributes will be added as they become available.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/gallery-videos"
                className="text-sm font-light tracking-wide text-amber-200/70 transition-colors hover:text-amber-100"
              >
                View More →
              </Link>
            </div>
          </>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-6 top-6 text-white/70 hover:text-white"
            onClick={() => setLightbox(null)}
          >
            <X className="h-8 w-8" />
          </button>

          <img
            src={lightbox}
            alt="Memorial tribute"
            className="max-h-full max-w-full rounded-lg object-contain"
          />
        </div>
      )}
    </section>
  );
}
