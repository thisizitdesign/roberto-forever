import { Music as MusicIcon, ArrowLeft, X, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  musicTracks,
  type MusicCategory,
} from "@/data/Music";

export default function Music() {
  const [category, setCategory] =
    useState<MusicCategory>("roberto");

  const [selectedTrack, setSelectedTrack] =
    useState<(typeof musicTracks)[number] | null>(null);

  const tracks = musicTracks.filter(
    (track) => track.category === category,
  );

  return (
    <main className="min-h-screen bg-stone-950 px-6 py-24 text-stone-100 sm:px-10">
      <div className="mx-auto max-w-6xl">

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
            A collection of music created by Roberto and music he shared
            with others along the way.
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

        {/* Music Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track) => (
            <button
              key={track.id}
              type="button"
              onClick={() => setSelectedTrack(track)}
              className="group overflow-hidden rounded-xl border border-stone-800 bg-stone-900/40 text-left transition-all hover:border-amber-200/20 hover:bg-stone-900"
            >
              {/* Album Art */}
              <div className="relative aspect-square overflow-hidden bg-stone-900">
                <img
                  src={track.coverImage}
                  alt={`${track.songTitle} album cover`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/40">

                  {/* Play Button */}
                  <div className="flex h-14 w-14 scale-90 items-center justify-center rounded-full bg-black/70 text-stone-200 opacity-90 transition-all duration-300 group-hover:scale-100 group-hover:bg-black/80">
                    <Play
                      className="ml-1 h-6 w-6"
                      fill="currentColor"
                    />
                  </div>
                </div>
              </div>

              {/* Track Information */}
              <div className="min-h-[190px] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-stone-600">
                  {track.category === "roberto"
                    ? "Works by Roberto"
                    : "Works with Roberto"}
                </p>

                <h2 className="mt-3 font-serif text-xl text-stone-100">
                  {track.songTitle}
                </h2>

                {/* Artist */}
                {track.category === "roberto" && (
                  <p className="mt-3 text-sm text-stone-400">
                    <span className="text-stone-600">
                      Artist:
                    </span>{" "}
                    Roberto Solo
                  </p>
                )}

                {/* Members */}
                {track.category === "with_roberto" && (
                  <p className="mt-3 text-sm text-stone-400">
                    <span className="text-stone-600">
                      Members:
                    </span>{" "}
                    {track.members || "Not added yet"}
                  </p>
                )}

                {/* About */}
                <p className="mt-4 line-clamp-2 text-xs leading-5 text-stone-500">
                  <span className="text-stone-600">
                    About:
                  </span>{" "}
                  {track.synopsis || "Not added yet"}
                </p>
              </div>
            </button>
          ))}

          {tracks.length === 0 && (
            <div className="col-span-full rounded-lg border border-dashed border-stone-800 p-12 text-center">
              <p className="text-sm font-light text-stone-600">
                No music has been added to this collection yet.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-sm font-light text-stone-600">
            More music will be added as it becomes available.
          </p>
        </div>
      </div>

      {/* Music Player Modal */}
      {selectedTrack && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/90 p-4 sm:p-8"
          onClick={() => setSelectedTrack(null)}
        >
          <div
            className="mx-auto flex min-h-full max-w-4xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative w-full overflow-hidden rounded-xl border border-stone-800 bg-stone-950 shadow-2xl">

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedTrack(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-stone-300 transition hover:bg-black hover:text-white"
                aria-label="Close music player"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Album Art */}
              <div className="bg-stone-900">
                <img
                  src={selectedTrack.coverImage}
                  alt={`${selectedTrack.songTitle} album cover`}
                  className="mx-auto max-h-[55vh] w-full object-contain"
                />
              </div>

              {/* Information */}
              <div className="p-6 sm:p-8">

                <p className="text-xs uppercase tracking-[0.25em] text-stone-600">
                  {selectedTrack.category === "roberto"
                    ? "Works by Roberto"
                    : "Works with Roberto"}
                </p>

                <h2 className="mt-3 font-serif text-2xl text-stone-100 sm:text-3xl">
                  {selectedTrack.songTitle}
                </h2>

                {/* Artist */}
                {selectedTrack.category === "roberto" && (
                  <p className="mt-3 text-sm text-stone-400">
                    <span className="text-stone-600">
                      Artist:
                    </span>{" "}
                    Roberto Solo
                  </p>
                )}

                {/* Members */}
                {selectedTrack.category === "with_roberto" && (
                  <p className="mt-3 text-sm text-stone-400">
                    <span className="text-stone-600">
                      Members:
                    </span>{" "}
                    {selectedTrack.members || "Not added yet"}
                  </p>
                )}

                {/* About */}
                <p className="mt-5 text-sm leading-7 text-stone-400">
                  <span className="text-stone-600">
                    About:
                  </span>{" "}
                  {selectedTrack.synopsis || "Not added yet"}
                </p>

                {/* Audio Player */}
                {selectedTrack.audioUrl ? (
                  <div className="mt-6">
                    <audio
                      controls
                      autoPlay
                      src={selectedTrack.audioUrl}
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
                  <span className="text-stone-600">
                    Uploaded by:
                  </span>{" "}
                  {selectedTrack.uploadedBy || "Not added yet"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
