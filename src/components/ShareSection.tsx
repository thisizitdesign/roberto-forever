import { Link } from "react-router-dom";
import { Image, BookOpen, Music } from "lucide-react";

export default function ShareSection() {
  return (
    <section
      id="share"
      className="bg-stone-950 px-6 py-24 text-stone-100 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
            Help Keep His Memory Alive
          </p>

          <h2 className="mt-4 font-serif text-3xl font-light tracking-wide sm:text-4xl">
            Share with the Community
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-400">
            Do you have a photograph, memory, or song that reminds you of
            Roberto?
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Link
            to="/share/photo"
            className="group rounded-lg border border-stone-800 bg-stone-900/50 p-8 text-center transition hover:border-stone-600 hover:bg-stone-900"
          >
            <Image
              className="mx-auto text-stone-400 transition group-hover:text-stone-200"
              size={30}
              strokeWidth={1.5}
            />

            <h3 className="mt-5 font-serif text-xl text-stone-200">
              Share a Photo
            </h3>

            <p className="mt-3 text-sm leading-7 text-stone-500">
              Share a photograph or collection of photographs that captures a
              moment with Roberto.
            </p>
          </Link>

          <Link
            to="/share/memory"
            className="group rounded-lg border border-stone-800 bg-stone-900/50 p-8 text-center transition hover:border-stone-600 hover:bg-stone-900"
          >
            <BookOpen
              className="mx-auto text-stone-400 transition group-hover:text-stone-200"
              size={30}
              strokeWidth={1.5}
            />

            <h3 className="mt-5 font-serif text-xl text-stone-200">
              Share a Memory
            </h3>

            <p className="mt-3 text-sm leading-7 text-stone-500">
              Tell a story or share a moment about Roberto that you would like
              to be remembered.
            </p>
          </Link>

          <Link
            to="/share/music"
            className="group rounded-lg border border-stone-800 bg-stone-900/50 p-8 text-center transition hover:border-stone-600 hover:bg-stone-900"
          >
            <Music
              className="mx-auto text-stone-400 transition group-hover:text-stone-200"
              size={30}
              strokeWidth={1.5}
            />

            <h3 className="mt-5 font-serif text-xl text-stone-200">
              Share Music
            </h3>

            <p className="mt-3 text-sm leading-7 text-stone-500">
              Share recordings of Roberto's music from a rehearsal, project or a music that you may have been working on with him and tell why it was
              why it was meaningful.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
