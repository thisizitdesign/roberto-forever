import { useEffect, useState } from "react";
import { ImageIcon, Video, Music, X, Play } from "lucide-react";
import { Link } from "react-router-dom";

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
  "../images/gallery/videos/home/*.{mp4,mov,webm}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

const videos = Object.values(galleryVideos);

const galleryMusic = import.meta.glob<string>(
  "../images/gallery/music/home/*.{mp3,wav,m4a,ogg}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

const music = Object.entries(galleryMusic).map(
  ([path, audioUrl], index) => ({
    id: `home-music-${index}`,
    title:
      path
        .split("/")
        .pop()
        ?.replace(/\.[^/.]+$/, "")
        .replace(/[-_]+/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase()) ??
      "Untitled",
    audioUrl,
  }),
);

export default function GallerySection() {
  const [tab, setTab] =
    useState<"images" | "videos" | "music">("images");

  const [lightbox, setLightbox] =
    useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash === "#gallery-videos") {
      setTab("videos");
    } else if (hash === "#gallery-music") {
      setTab("music");
    } else if (hash === "#gallery") {
      setTab("images");
    }
  }, []);

  return (
    <section id="gallery" className="bg-stone-950 px-6 py-24">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl text-stone-100 sm:text-4xl">
            Gallery
          </h2>

          <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent" />

          <p className="mt-6 text-sm font-light text-stone-500">
            A collection of photos, videos, and music honoring
            Roberto's memory.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex justify-center gap-4">
          <button
            onClick={() => setTab("images")}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
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
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
              tab === "videos"
                ? "bg-amber-200/15 text-amber-100 ring-1 ring-amber-200/30"
                : "text-stone-500 hover:text-stone-300"
            }`}
          >
            <Video className="h-4 w-4" />
            Video
          </button>

          <button
            onClick={() => setTab("music")}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
              tab === "music"
                ? "bg-amber-200/15 text-amber-100 ring-1 ring-amber-200/30"
                : "text-stone-500 hover:text-stone-300"
            }`}
          >
            <Music className="h-4 w-4" />
            Music
          </button>
        </div>

        {/* IMAGES */}
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

        {/* VIDEOS */}
        {tab === "videos" && (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {videos.slice(0, 3).map((video) => (
                <div
                  key={video}
                  className="overflow-hidden rounded-lg bg-black"
                >
                  <video
                    src={video}
                    controls
                    preload="metadata"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              ))}
            </div>

            {videos.length === 0 && (
              <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-stone-800 p-8 text-center">
                <p className="text-sm font-light text-stone-600">
                  Video tributes will be added as they become available.
                </p>
              </div>
            )}

            <div className="mt-8 text-center">
              <Link
                to="/video"
                className="text-sm font-light tracking-wide text-amber-200/70 transition-colors hover:text-amber-100"
              >
                View More →
              </Link>
            </div>
          </>
        )}

        {/* MUSIC */}
        {tab === "music" && (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {music.slice(0, 3).map((track, index) => (
                <Link
                  key={track.id}
                  to="/music"
                  className="group block overflow-hidden rounded-lg border border-stone-800 bg-stone-900/40 transition-all hover:border-stone-700 hover:bg-stone-900"
                >
                  {/* Album Cover */}
                  <div className="relative aspect-square overflow-hidden bg-stone-900">
                    <img
                      src={
                        new URL(
                          `../images/gallery/photos/albumArt/albumPlaceHolder${
                            (index % 3) + 1
                          }.png`,
                          import.meta.url,
                        ).href
                      }
                      alt={`${track.title} album cover`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Play Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40">
                      <div className="flex h-12 w-12 scale-90 items-center justify-center rounded-full bg-black/70 text-stone-200 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                        <Play
                          className="ml-0.5 h-5 w-5"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Song Information */}
                  <div className="min-h-[145px] p-5">
                    <h3 className="font-serif text-lg text-stone-200">
                      {track.title}
                    </h3>

                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-600">
                      Music
                    </p>

                    <p className="mt-4 text-xs text-stone-500">
                      About: Not added yet
                    </p>

                    <p className="mt-2 text-xs text-stone-600">
                      Uploaded by: Not added yet
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {music.length === 0 && (
              <div className="flex aspect-square items-center justify-center rounded-lg border border-dashed border-stone-800 p-8 text-center">
                <p className="text-sm font-light text-stone-600">
                  Music will be added as it becomes available.
                </p>
              </div>
            )}

            <div className="mt-8 text-center">
              <Link
                to="/music"
                className="text-sm font-light tracking-wide text-amber-200/70 transition-colors hover:text-amber-100"
              >
                View All Music →
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
