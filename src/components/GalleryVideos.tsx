import { Video, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const galleryVideos = import.meta.glob<string>(
  "../images/gallery/videos/*.mp4",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

const videos = Object.values(galleryVideos);

export default function GalleryVideos() {
  const navigate = useNavigate();

  const backToGallery = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("gallery")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
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
          <div className="mb-4 flex justify-center">
            <Video className="h-6 w-6 text-amber-200/70" />
          </div>

          <h1 className="font-serif text-4xl text-stone-100 sm:text-5xl">
            Videos
          </h1>

          <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent" />

          <p className="mx-auto mt-6 max-w-2xl text-sm font-light text-stone-500">
            Video memories honoring Roberto's life, music, and the people who
            loved him.
          </p>
        </div>

        {/* Video grid */}
        {videos.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, index) => (
              <div
                key={video}
                className="overflow-hidden rounded-lg bg-black"
              >
                <video
                  src={video}
                  controls
                  className="aspect-[4/3] w-full object-cover"
                  aria-label={`Roberto memorial video ${index + 1}`}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="text-sm font-light text-stone-600">
              Video tributes will be added as they become available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}