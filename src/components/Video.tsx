import { Video as VideoIcon, ArrowLeft, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { videoItems, type VideoCategory } from "@/data/Video";

export default function Video() {
  const [category, setCategory] = useState<VideoCategory>("atash");

  const videos = videoItems.filter((video) => video.category === category);

  return (
    <main className="min-h-screen bg-stone-950 px-6 py-24 text-stone-100 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/#gallery-videos"
          className="mb-12 inline-flex items-center gap-2 text-sm font-light tracking-wide text-amber-200/70 transition hover:text-amber-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Gallery
        </Link>

        <div className="text-center">
          <VideoIcon className="mx-auto h-8 w-8 text-stone-400" />

          <h1 className="mt-5 font-serif text-4xl font-light text-stone-100 sm:text-5xl">
            Video
          </h1>

          <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent" />

          <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-7 text-stone-500">
            A collection of performances, rehearsals, and musical moments from
            Roberto's life and work.
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

        {/* Videos */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {videos.map((video) => (
            <article
              key={video.id}
              className="overflow-hidden rounded-xl border border-stone-800 bg-stone-900/40"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                <video
                  src={video.videoUrl}
                  controls
                  preload="metadata"
                  className="h-full w-full object-cover"
                />

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity hover:opacity-100">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/60">
                    <Play className="ml-1 h-6 w-6 text-stone-100" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h2 className="font-serif text-2xl text-stone-100">
                  {video.title}
                </h2>

                <div className="mt-5 space-y-2 text-sm">
                  {video.category === "atash" && (
                    <>
                      <p className="text-stone-400">
                        <span className="text-stone-600">Band:</span>{" "}
                        {video.band || "Not added yet"}
                      </p>
                      <p className="text-stone-400">
                        <span className="text-stone-600">Song:</span>{" "}
                        {video.songTitle || "Not added yet"}
                      </p>
                      <p className="text-stone-400">
                        <span className="text-stone-600">Show / Location:</span>{" "}
                        {video.showLocation || "Not added yet"}
                      </p>
                    </>
                  )}

                  {video.category === "otherBands" && (
                    <>
                      <p className="text-stone-400">
                        <span className="text-stone-600">Band:</span>{" "}
                        {video.band || "Not added yet"}
                      </p>
                      <p className="text-stone-400">
                        <span className="text-stone-600">Song:</span>{" "}
                        {video.songTitle || "Not added yet"}
                      </p>
                      <p className="text-stone-400">
                        <span className="text-stone-600">Show / Location:</span>{" "}
                        {video.showLocation || "Not added yet"}
                      </p>
                    </>
                  )}

                  {video.category === "withDancers" && (
                    <>
                      <p className="text-stone-400">
                        <span className="text-stone-600">Band:</span>{" "}
                        {video.band || "Not added yet"}
                      </p>
                      <p className="text-stone-400">
                        <span className="text-stone-600">Ensemble:</span>{" "}
                        {video.ensemble || "Not added yet"}
                      </p>
                      <p className="text-stone-400">
                        <span className="text-stone-600">Song:</span>{" "}
                        {video.songTitle || "Not added yet"}
                      </p>
                      <p className="text-stone-400">
                        <span className="text-stone-600">Show / Location:</span>{" "}
                        {video.showLocation || "Not added yet"}
                      </p>
                    </>
                  )}

                  {video.category === "rehearsals" && (
                    <>
                      <p className="text-stone-400">
                        <span className="text-stone-600">Project:</span>{" "}
                        {video.project || "Not added yet"}
                      </p>
                      <p className="text-stone-400">
                        <span className="text-stone-600">Song:</span>{" "}
                        {video.songTitle || "Not added yet"}
                      </p>
                      <p className="text-stone-400">
                        <span className="text-stone-600">Location:</span>{" "}
                        {video.location || "Not added yet"}
                      </p>
                      <p className="text-stone-400">
                        <span className="text-stone-600">Members:</span>{" "}
                        {video.members || "Not added yet"}
                      </p>
                    </>
                  )}

                  <p className="pt-3 text-stone-400">
                    <span className="text-stone-600">Uploaded by:</span>{" "}
                    {video.uploadedBy || "Not added yet"}
                  </p>
                </div>
              </div>
            </article>
          ))}

          {videos.length === 0 && (
            <div className="sm:col-span-2 rounded-lg border border-dashed border-stone-800 p-12 text-center">
              <p className="text-sm font-light text-stone-600">
                No videos have been added to this collection yet.
              </p>
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm font-light text-stone-600">
            More videos will be added as they become available.
          </p>
        </div>
      </div>
    </main>
  );
}
