import { Video as VideoIcon, ArrowLeft, X, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  videoItems,
  type VideoCategory,
} from "@/data/Video";

export default function Video() {
  const [category, setCategory] =
    useState<VideoCategory>("atash");

  const [selectedVideo, setSelectedVideo] =
    useState<(typeof videoItems)[number] | null>(null);

  const videos = videoItems.filter(
    (video) => video.category === category
  );

  return (
    <main className="min-h-screen bg-stone-950 px-6 py-24 text-stone-100">
      <div className="mx-auto max-w-6xl">

        {/* Back to Gallery */}
        <Link
          to="/#gallery-videos"
          className="mb-10 inline-flex items-center gap-2 text-sm text-stone-400 transition hover:text-amber-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Gallery
        </Link>

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-5 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-amber-200/20 bg-amber-200/5">
              <VideoIcon className="h-7 w-7 text-amber-200/70" />
            </div>
          </div>

          <h1 className="font-serif text-4xl text-stone-100 sm:text-5xl">
            Video
          </h1>

          <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent" />

          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-stone-400">
            A collection of performances, recordings, rehearsals, and
            memories preserved in motion.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setCategory("atash")}
            className={`rounded-full border px-5 py-2 text-sm transition ${
              category === "atash"
                ? "border-amber-200/40 bg-amber-200/10 text-amber-100"
                : "border-stone-700 text-stone-400 hover:border-stone-500 hover:text-stone-200"
            }`}
          >
            Atash
          </button>

          <button
            onClick={() => setCategory("otherBands")}
            className={`rounded-full border px-5 py-2 text-sm transition ${
              category === "otherBands"
                ? "border-amber-200/40 bg-amber-200/10 text-amber-100"
                : "border-stone-700 text-stone-400 hover:border-stone-500 hover:text-stone-200"
            }`}
          >
            Other Bands
          </button>

          <button
            onClick={() => setCategory("withDancers")}
            className={`rounded-full border px-5 py-2 text-sm transition ${
              category === "withDancers"
                ? "border-amber-200/40 bg-amber-200/10 text-amber-100"
                : "border-stone-700 text-stone-400 hover:border-stone-500 hover:text-stone-200"
            }`}
          >
            With Dancers
          </button>

          <button
            onClick={() => setCategory("rehearsals")}
            className={`rounded-full border px-5 py-2 text-sm transition ${
              category === "rehearsals"
                ? "border-amber-200/40 bg-amber-200/10 text-amber-100"
                : "border-stone-700 text-stone-400 hover:border-stone-500 hover:text-stone-200"
            }`}
          >
            Rehearsals
          </button>
        </div>

        {/* Video Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={() => setSelectedVideo(video)}
              className="group text-left"
            >
              <div className="relative aspect-video overflow-hidden rounded-lg border border-stone-800 bg-stone-900">
                <video
                  src={video.videoUrl}
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/35">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-stone-950/80 text-stone-100 shadow-lg transition group-hover:scale-110">
                    <Play className="ml-1 h-7 w-7 fill-current" />
                  </div>
                </div>
              </div>

              {/* Title Only */}
              <h2 className="mt-4 font-serif text-xl text-stone-200 transition group-hover:text-amber-200">
                {video.title}
              </h2>
            </button>
          ))}
        </div>

        {/* Empty State */}
        {videos.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-stone-500">
              No videos have been added to this collection yet.
            </p>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-xl border border-stone-800 bg-stone-950 p-4 sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-stone-900/90 text-stone-300 transition hover:bg-stone-800 hover:text-white"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Video */}
            <div className="overflow-hidden rounded-lg bg-black">
              <video
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                playsInline
                className="max-h-[65vh] w-full"
              />
            </div>

            {/* Video Information */}
            <div className="mt-6">
              <h2 className="font-serif text-2xl text-stone-100 sm:text-3xl">
                {selectedVideo.title}
              </h2>

              <div className="mt-4 space-y-2 text-sm text-stone-400">

                {/* Atash */}
                {selectedVideo.category === "atash" && (
                  <>
                    {selectedVideo.band && (
                      <p>
                        <span className="text-stone-500">Band:</span>{" "}
                        {selectedVideo.band}
                      </p>
                    )}

                    {selectedVideo.songTitle && (
                      <p>
                        <span className="text-stone-500">Song:</span>{" "}
                        {selectedVideo.songTitle}
                      </p>
                    )}

                    {selectedVideo.venue && (
                      <p>
                        <span className="text-stone-500">Venue:</span>{" "}
                        {selectedVideo.venue}
                      </p>
                    )}

                    {selectedVideo.show && (
                      <p>
                        <span className="text-stone-500">Show:</span>{" "}
                        {selectedVideo.show}
                      </p>
                    )}
                  </>
                )}

                {/* Other Bands */}
                {selectedVideo.category === "otherBands" && (
                  <>
                    {selectedVideo.band && (
                      <p>
                        <span className="text-stone-500">Band:</span>{" "}
                        {selectedVideo.band}
                      </p>
                    )}

                    {selectedVideo.songTitle && (
                      <p>
                        <span className="text-stone-500">Song:</span>{" "}
                        {selectedVideo.songTitle}
                      </p>
                    )}

                    {selectedVideo.venue && (
                      <p>
                        <span className="text-stone-500">Venue:</span>{" "}
                        {selectedVideo.venue}
                      </p>
                    )}

                    {selectedVideo.show && (
                      <p>
                        <span className="text-stone-500">Show:</span>{" "}
                        {selectedVideo.show}
                      </p>
                    )}
                  </>
                )}

                {/* With Dancers */}
                {selectedVideo.category === "withDancers" && (
                  <>
                    {selectedVideo.band && (
                      <p>
                        <span className="text-stone-500">Band:</span>{" "}
                        {selectedVideo.band}
                      </p>
                    )}

                    {selectedVideo.ensemble && (
                      <p>
                        <span className="text-stone-500">Ensemble:</span>{" "}
                        {selectedVideo.ensemble}
                      </p>
                    )}

                    {selectedVideo.songTitle && (
                      <p>
                        <span className="text-stone-500">Song:</span>{" "}
                        {selectedVideo.songTitle}
                      </p>
                    )}

                    {selectedVideo.venue && (
                      <p>
                        <span className="text-stone-500">Venue:</span>{" "}
                        {selectedVideo.venue}
                      </p>
                    )}

                    {selectedVideo.show && (
                      <p>
                        <span className="text-stone-500">Show:</span>{" "}
                        {selectedVideo.show}
                      </p>
                    )}
                  </>
                )}

                {/* Rehearsals */}
                {selectedVideo.category === "rehearsals" && (
                  <>
                    {selectedVideo.project && (
                      <p>
                        <span className="text-stone-500">Project:</span>{" "}
                        {selectedVideo.project}
                      </p>
                    )}

                    {selectedVideo.songTitle && (
                      <p>
                        <span className="text-stone-500">Song:</span>{" "}
                        {selectedVideo.songTitle}
                      </p>
                    )}

                    {selectedVideo.venue && (
                      <p>
                        <span className="text-stone-500">Venue:</span>{" "}
                        {selectedVideo.venue}
                      </p>
                    )}

                    {selectedVideo.show && (
                      <p>
                        <span className="text-stone-500">Show:</span>{" "}
                        {selectedVideo.show}
                      </p>
                    )}

                    {selectedVideo.members && (
                      <p>
                        <span className="text-stone-500">Members:</span>{" "}
                        {selectedVideo.members}
                      </p>
                    )}
                  </>
                )}

                {/* Uploaded By */}
                {selectedVideo.uploadedBy && (
                  <p className="pt-2 text-stone-500">
                    Uploaded by {selectedVideo.uploadedBy}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
