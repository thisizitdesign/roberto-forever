import { Video as VideoIcon, ArrowLeft, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { videoItems, type VideoCategory } from "@/data/Video";

export default function Video() {
  const [category, setCategory] =
    useState<VideoCategory>("atash");

  const [selectedVideo, setSelectedVideo] =
    useState<(typeof videoItems)[number] | null>(null);

  const videos = videoItems.filter(
    (video) => video.category === category,
  );

  return (
    <main className="min-h-screen bg-stone-950 px-6 py-24 text-stone-100 sm:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Back to Gallery */}
        <Link
          to="/#gallery-videos"
          className="mb-12 inline-flex items-center gap-2 text-sm font-light tracking-wide text-amber-200/70 transition hover:text-amber-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Gallery
        </Link>

        {/* Header */}
        <div className="text-center">
          <VideoIcon className="mx-auto h-8 w-8 text-stone-400" />

          <h1 className="mt-5 font-serif text-4xl font-light text-stone-100 sm:text-5xl">
            Video
          </h1>

          <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent" />

          <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-7 text-stone-500">
            A collection of performances, collaborations, rehearsals, and
            other moments from Roberto's musical life.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setCategory("atash")}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
              category === "atash"
                ? "bg-amber-200/15 text-amber-100 ring-1 ring-amber-200/30"
                : "text-stone-500 hover:text-stone-300"
            }`}
          >
            Atash
          </button>

          <button
            onClick={() => setCategory("otherBands")}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
              category === "otherBands"
                ? "bg-amber-200/15 text-amber-100 ring-1 ring-amber-200/30"
                : "text-stone-500 hover:text-stone-300"
            }`}
          >
            Other Bands
          </button>

          <button
            onClick={() => setCategory("withDancers")}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
              category === "withDancers"
                ? "bg-amber-200/15 text-amber-100 ring-1 ring-amber-200/30"
                : "text-stone-500 hover:text-stone-300"
            }`}
          >
            With Dancers
          </button>

          <button
            onClick={() => setCategory("rehearsals")}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
              category === "rehearsals"
                ? "bg-amber-200/15 text-amber-100 ring-1 ring-amber-200/30"
                : "text-stone-500 hover:text-stone-300"
            }`}
          >
            Rehearsals
          </button>
        </div>

        {/* Video Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={() => setSelectedVideo(video)}
              className="group overflow-hidden rounded-xl border border-stone-800 bg-stone-900/40 text-left transition-all hover:border-amber-200/20 hover:bg-stone-900"
            >
              {/* Video Preview */}
              <div className="relative aspect-video overflow-hidden bg-black">
                <video
                  src={video.videoUrl}
                  preload="metadata"
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />

                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/40">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/70 text-stone-200 transition-transform duration-300 group-hover:scale-110">
                    <span className="ml-1 text-xl">
                      ▶
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Information */}
              <div className="p-5">
                <h2 className="font-serif text-xl text-stone-100">
                  {video.title}
                </h2>

                <div className="mt-4 space-y-1.5 text-xs text-stone-500">

                  {/* Atash */}
                  {video.category === "atash" && (
                    <>
                      <p>
                        <span className="text-stone-600">
                          Band:
                        </span>{" "}
                        {video.band || "Not added yet"}
                      </p>

                      <p>
                        <span className="text-stone-600">
                          Song:
                        </span>{" "}
                        {video.songTitle || "Not added yet"}
                      </p>

                      <p>
                        <span className="text-stone-600">
                          Venue:
                        </span>{" "}
                        {video.venue || "Not added yet"}
                      </p>

                      <p>
                        <span className="text-stone-600">
                          Show:
                        </span>{" "}
                        {video.show || "Not added yet"}
                      </p>
                    </>
                  )}

                  {/* Other Bands */}
                  {video.category === "otherBands" && (
                    <>
                      <p>
                        <span className="text-stone-600">
                          Band:
                        </span>{" "}
                        {video.band || "Not added yet"}
                      </p>

                      <p>
                        <span className="text-stone-600">
                          Song:
                        </span>{" "}
                        {video.songTitle || "Not added yet"}
                      </p>

                      <p>
                        <span className="text-stone-600">
                          Venue:
                        </span>{" "}
                        {video.venue || "Not added yet"}
                      </p>

                      <p>
                        <span className="text-stone-600">
                          Show:
                        </span>{" "}
                        {video.show || "Not added yet"}
                      </p>
                    </>
                  )}

                  {/* With Dancers */}
                  {video.category === "withDancers" && (
                    <>
                      <p>
                        <span className="text-stone-600">
                          Band:
                        </span>{" "}
                        {video.band || "Not added yet"}
                      </p>

                      <p>
                        <span className="text-stone-600">
                          Ensemble:
                        </span>{" "}
                        {video.ensemble || "Not added yet"}
                      </p>

                      <p>
                        <span className="text-stone-600">
                          Song:
                        </span>{" "}
                        {video.songTitle || "Not added yet"}
                      </p>

                      <p>
                        <span className="text-stone-600">
                          Venue:
                        </span>{" "}
                        {video.venue || "Not added yet"}
                      </p>

                      <p>
                        <span className="text-stone-600">
                          Show:
                        </span>{" "}
                        {video.show || "Not added yet"}
                      </p>
                    </>
                  )}

                  {/* Rehearsals */}
                  {video.category === "rehearsals" && (
                    <>
                      <p>
                        <span className="text-stone-600">
                          Project:
                        </span>{" "}
                        {video.project || "Not added yet"}
                      </p>

                      <p>
                        <span className="text-stone-600">
                          Song:
                        </span>{" "}
                        {video.songTitle || "Not added yet"}
                      </p>

                      <p>
                        <span className="text-stone-600">
                          Venue:
                        </span>{" "}
                        {video.venue || "Not added yet"}
                      </p>

                      <p>
                        <span className="text-stone-600">
                          Show:
                        </span>{" "}
                        {video.show || "Not added yet"}
                      </p>

                      <p>
                        <span className="text-stone-600">
                          Members:
                        </span>{" "}
                        {video.members || "Not added yet"}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </button>
          ))}

          {videos.length === 0 && (
            <div className="col-span-full rounded-lg border border-dashed border-stone-800 p-12 text-center">
              <p className="text-sm font-light text-stone-600">
                No videos have been added to this collection yet.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/90 p-4 sm:p-8"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="mx-auto flex min-h-full max-w-5xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative w-full overflow-hidden rounded-xl border border-stone-800 bg-stone-950 shadow-2xl">

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-stone-300 transition hover:bg-black hover:text-white"
                aria-label="Close video"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Large Video */}
              <div className="bg-black">
                <video
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[70vh] w-full object-contain"
                />
              </div>

              {/* Information */}
              <div className="p-6 sm:p-8">
                <h2 className="font-serif text-2xl text-stone-100 sm:text-3xl">
                  {selectedVideo.title}
                </h2>

                <div className="mt-5 space-y-2 text-sm">

                  {/* Atash */}
                  {selectedVideo.category === "atash" && (
                    <>
                      <p className="text-stone-400">
                        <span className="text-stone-600">
                          Band:
                        </span>{" "}
                        {selectedVideo.band || "Not added yet"}
                      </p>

                      <p className="text-stone-400">
                        <span className="text-stone-600">
                          Song:
                        </span>{" "}
                        {selectedVideo.songTitle || "Not added yet"}
                      </p>

                      <p className="text-stone-400">
                        <span className="text-stone-600">
                          Venue:
                        </span>{" "}
                        {selectedVideo.venue || "Not added yet"}
                      </p>

                      <p className="text-stone-400">
                        <span className="text-stone-600">
                          Show:
                        </span>{" "}
                        {selectedVideo.show || "Not added yet"}
                      </p>
                    </>
                  )}

                  {/* Other Bands */}
                  {selectedVideo.category === "otherBands" && (
                    <>
                      <p className="text-stone-400">
                        <span className="text-stone-600">
                          Band:
                        </span>{" "}
                        {selectedVideo.band || "Not added yet"}
                      </p>

                      <p className="text-stone-400">
                        <span className="text-stone-600">
                          Song:
                        </span>{" "}
                        {selectedVideo.songTitle || "Not added yet"}
                      </p>

                      <p className="text-stone-400">
                        <span className="text-stone-600">
                          Venue:
                        </span>{" "}
                        {selectedVideo.venue || "Not added yet"}
                      </p>

                      <p className="text-stone-400">
                        <span className="text-stone-600">
                          Show:
                        </span>{" "}
                        {selectedVideo.show || "Not added yet"}
                      </p>
                    </>
                  )}

                  {/* With Dancers */}
                  {selectedVideo.category === "withDancers" && (
                    <>
                      <p className="text-stone-400">
                        <span className="text-stone-600">
                          Band:
                        </span>{" "}
                        {selectedVideo.band || "Not added yet"}
                      </p>

                      <p className="text-stone-400">
                        <span className="text-stone-600">
                          Ensemble:
                        </span>{" "}
                        {selectedVideo.ensemble || "Not added yet"}
                      </p>

                      <p className="text-stone-400">
                        <span className="text-stone-600">
                          Song:
                        </span>{" "}
                        {selectedVideo.songTitle || "Not added yet"}
                      </p>

                      <p className="text-stone-400">
                        <span className="text-stone-600">
                          Venue:
                        </span>{" "}
                        {selectedVideo.venue || "Not added yet"}
                      </p>

                      <p className="text-stone-400">
                        <span className="text-stone-600">
                          Show:
                        </span>{" "}
                        {selectedVideo.show || "Not added yet"}
                      </p>
                    </>
                  )}

                  {/* Rehearsals */}
                  {selectedVideo.category === "rehearsals" && (
                    <>
                      <p className="text-stone-400">
                        <span className="text-stone-600">
                          Project:
                        </span>{" "}
                        {selectedVideo.project || "Not added yet"}
                      </p>

                      <p className="text-stone-400">
                        <span className="text-stone-600">
                          Song:
                        </span>{" "}
                        {selectedVideo.songTitle || "Not added yet"}
                      </p>

                      <p className="text-stone-400">
                        <span className="text-stone-600">
                          Venue:
                        </span>{" "}
                        {selectedVideo.venue || "Not added yet"}
                      </p>

                      <p className="text-stone-400">
                        <span className="text-stone-600">
                          Show:
                        </span>{" "}
                        {selectedVideo.show || "Not added yet"}
                      </p>

                      <p className="text-stone-400">
                        <span className="text-stone-600">
                          Members:
                        </span>{" "}
                        {selectedVideo.members || "Not added yet"}
                      </p>
                    </>
                  )}

                  {/* Uploaded By */}
                  <p className="pt-3 text-stone-400">
                    <span className="text-stone-600">
                      Uploaded by:
                    </span>{" "}
                    {selectedVideo.uploadedBy || "Not added yet"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
