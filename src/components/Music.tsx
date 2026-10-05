import { Music as MusicIcon, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { musicTracks, type MusicCategory } from "@/data/Music";

export default function Music() {
  const [category, setCategory] =
    useState<MusicCategory>("roberto");

  const tracks = musicTracks.filter(
    (track) => track.category === category,
  );

  return (
    <main className="min-h-screen bg-stone-950 px-6 py-24 text-stone-100 sm:px-10">
      <div className="mx-auto max-w-5xl">

        {/* Back to Gallery */}
        <Link
          to="/#gallery-music"
          className="mb-12 inline-flex items-center gap-2 text-sm font-light tracking-wide text-amber-200/70 transition hover:text-amber-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Gallery
        </Link>

        {/* Header */}
        <div className="text-center">
          <MusicIcon className="mx-auto h-8 w-8 text-stone-400" />

          <h1 className="mt-5 font-serif text-4xl font-light text-stone-100 sm:text-5xl">
            Music
          </h1>

          <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent" />

          <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-7 text-stone-500">
            A collection of music created by Roberto and music he shared with
            others along the way.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setCategory("roberto")}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
              category === "roberto"
                ? "bg-amber-200/15 text-amber-100 ring-1 ring-amber-200/30"
                : "text-stone-500 hover:text-stone-300"
            }`}
          >
            Works by Roberto
          </button>

          <button
            onClick={() => setCategory("with_roberto")}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
              category === "with_roberto"
                ? "bg-amber-200/15 text-amber-100 ring-1 ring-amber-200/30"
                : "text-stone-500 hover:text-stone-300"
            }`}
          >
            Works with Roberto
          </button>
        </div>

        {/* Music */}
        <div className="mt-12 space-y-6">
          {tracks.map((track) => (
            <article
              key={track.id}
              className="overflow-hidden rounded-xl border border-stone-800 bg-stone-900/40"
            >
              <div className="flex flex-col sm:flex-row">

                {/* Album Art */}
                <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-stone-900 sm:w-56">
                  <img
                    src={track.coverImage}
                    alt={`${track.songTitle} album cover`}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Information */}
                <div className="flex min-h-[340px] flex-1 flex-col justify-center p-8">

                  <p className="text-xs uppercase tracking-[0.25em] text-stone-600">
                    {track.category === "roberto"
                      ? "Works by Roberto"
                      : "Works with Roberto"}
                  </p>

                  <h2 className="mt-3 font-serif text-2xl text-stone-100">
                    {track.songTitle}
                  </h2>

                  {/* By Roberto */}
                  {track.category === "roberto" && (
                    <p className="mt-2 text-sm text-stone-400">
                      <span className="text-stone-600">Artist:</span>{" "}
                      Roberto Solo
                    </p>
                  )}

                  {/* With Roberto */}
                  {track.category === "with_roberto" && (
                    <p className="mt-2 text-sm text-stone-400">
                      <span className="text-stone-600">Members:</span>{" "}
                      {track.members || "Not added yet"}
                    </p>
                  )}

                  {/* About / Synopsis */}
                  <p className="mt-5 min-h-[48px] text-sm leading-7 text-stone-400">
                    <span className="text-stone-600">About:</span>{" "}
                    {track.synopsis || "Not added yet"}
                  </p>

                  {/* Audio */}
                  {track.audioUrl ? (
                    <div className="mt-6">
                      <audio
                        controls
                        src={track.audioUrl}
                        className="w-full"
                      />
                    </div>
                  ) : (
                    <p className="mt-6 text-xs text-stone-600">
                      Audio will be added as it becomes available.
                    </p>
                  )}

                  {/* Uploaded By */}
                  <p className="mt-5 text-xs text-stone-400">
                    <span className="text-stone-600">Uploaded by:</span>{" "}
                    {track.uploadedBy || "Not added yet"}
                  </p>

                </div>
              </div>
            </article>
          ))}

          {tracks.length === 0 && (
            <div className="rounded-lg border border-dashed border-stone-800 p-12 text-center">
              <p className="text-sm font-light text-stone-600">
                No music has been added to this collection yet.
              </p>
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm font-light text-stone-600">
            More music will be added as it becomes available.
          </p>
        </div>
      </div>
    </main>
  );
}