import { useState } from "react";
import Masonry from "react-masonry-css";
import { Users, Heart, Music, X, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const familyImages = Object.values(
  import.meta.glob<string>(
    "../images/gallery/photos/family/*.{jpg,jpeg,png,webp,avif}",
    {
      eager: true,
      query: "?url",
      import: "default",
    },
  ),
);

const friendsImages = Object.values(
  import.meta.glob<string>(
    "../images/gallery/photos/friends/*.{jpg,jpeg,png,webp,avif}",
    {
      eager: true,
      query: "?url",
      import: "default",
    },
  ),
);

const atashImages = Object.values(
  import.meta.glob<string>(
    "../images/gallery/photos/atash/*.{jpg,jpeg,png,webp,avif}",
    {
      eager: true,
      query: "?url",
      import: "default",
    },
  ),
);

const musicImages = Object.values(
  import.meta.glob<string>(
    "../images/gallery/photos/music/*.{jpg,jpeg,png,webp,avif}",
    {
      eager: true,
      query: "?url",
      import: "default",
    },
  ),
);

const robertoImages = Object.values(
  import.meta.glob<string>(
    "../images/gallery/photos/roberto/*.{jpg,jpeg,png,webp,avif}",
    {
      eager: true,
      query: "?url",
      import: "default",
    },
  ),
);

export default function GalleryPhotos() {
  const navigate = useNavigate();

  const [category, setCategory] = useState<
    "family" | "friends" | "atash" | "music" | "roberto">("family");

  const [lightbox, setLightbox] = useState<string | null>(null);

  const images =
    category === "family"
      ? familyImages
      : category === "friends"
        ? friendsImages
        : category === "atash"
          ? atashImages
          : category === "music"
            ? musicImages
            : robertoImages;

  const backToGallery = () => {
    navigate("/");

    setTimeout(() => {
      document.getElementById("gallery")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1,
  };

  return (
    <section className="min-h-screen bg-stone-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Back to Gallery */}
        <button
          onClick={backToGallery}
          className="mb-8 flex items-center gap-2 text-sm font-light tracking-wide text-amber-200/70 transition-colors hover:text-amber-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Gallery
        </button>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl text-stone-100 sm:text-5xl">
            Photos
          </h1>

          <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent" />

          <p className="mx-auto mt-6 max-w-2xl text-sm font-light text-stone-500">
            Memories of Roberto, shared through family, friendship, and music.
          </p>
        </div>

        {/* Category buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">

          {/* Family */}
          <button
            onClick={() => setCategory("family")}
            className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
              category === "family"
                ? "bg-amber-200/15 text-amber-100 ring-1 ring-amber-200/30"
                : "text-stone-500 hover:text-stone-300"
            }`}
          >
            <Heart className="h-4 w-4" />
            Family
          </button>

          {/* Friends */}
          <button
            onClick={() => setCategory("friends")}
            className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
              category === "friends"
                ? "bg-amber-200/15 text-amber-100 ring-1 ring-amber-200/30"
                : "text-stone-500 hover:text-stone-300"
            }`}
          >
            <Users className="h-4 w-4" />
            Friends
          </button>

          {/* Atash */}
          <button
            onClick={() => setCategory("atash")}
            className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
              category === "atash"
                ? "bg-amber-200/15 text-amber-100 ring-1 ring-amber-200/30"
                : "text-stone-500 hover:text-stone-300"
            }`}          >
            <Music className="h-4 w-4" />
            Atash
          </button>

          {/* Music */}
          <button
            onClick={() => setCategory("music")}
            className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
              category === "music"
                ? "bg-amber-200/15 text-amber-100 ring-1 ring-amber-200/30"
                : "text-stone-500 hover:text-stone-300"
            }`}
          >
            <Music className="h-4 w-4" />
            Music
          </button>

          {/* Roberto */}
          <button
            onClick={() => setCategory("roberto")}
            className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
              category === "roberto"
                ? "bg-amber-200/15 text-amber-100 ring-1 ring-amber-200/30"
                : "text-stone-500 hover:text-stone-300"
            }`}          >
            <Heart className="h-4 w-4" />
            Roberto
          </button>

        </div>

        {/* Masonry Gallery */}
        {images.length > 0 ? (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto -ml-6"
            columnClassName="pl-6 bg-clip-padding"
          >
            {images.map((image, index) => (
              <button
                key={image}
                onClick={() => setLightbox(image)}
                className="group mb-6 block w-full overflow-hidden rounded-lg"
              >
                <img
                  src={image}
                  alt={`${category} memory ${index + 1}`}
                  className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </button>
            ))}
          </Masonry>
        ) : (
          <div className="py-24 text-center">
            <p className="text-sm font-light text-stone-600">
              Photos will be added as they become available.
            </p>
          </div>
        )}

      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-6 top-6 text-white/70 transition-colors hover:text-white"
            onClick={() => setLightbox(null)}
            aria-label="Close image"
          >
            <X className="h-8 w-8" />
          </button>

          <img
            src={lightbox}
            alt="Roberto memorial"
            className="max-h-full max-w-full rounded-lg object-contain"
          />
        </div>
      )}
    </section>
  );
}
