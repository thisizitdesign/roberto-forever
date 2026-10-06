import { Flame, ExternalLink } from "lucide-react";

export default function MemorySection() {
  return (
    <section id="remember" className="bg-stone-950/90 py-24 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-amber-200/20 bg-amber-200/5">
            <Flame className="h-7 w-7 text-amber-200/70" />
          </div>
        </div>

        <h2 className="font-serif text-3xl text-stone-100 sm:text-4xl">
          A Life Remembered
        </h2>

        <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent" />

        <div className="mt-10 space-y-6 text-lg font-light leading-relaxed text-stone-400">
          <p>
            Roberto Paolo Riggio touched the lives of everyone who knew him. His
            warmth, generosity, and spirit left an indelible mark on his family,
            friends, and community.
          </p>
          <p>
            This space is dedicated to preserving his memory — a place to share
            stories, photographs, and moments that celebrate the life he lived
            and the love he gave.
          </p>

          <div className="mx-auto !mt-10  h-px w-32 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent" />

          <div className="flex flex-col items-center">
            <p className="max-w-xl italic text-stone-400">
              For a more complete account of Roberto's life, music, and legacy,
              you can read his official obituary on Legacy.com.
            </p>

            <a
              href="https://www.legacy.com/legacy/roberto-riggio"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-amber-200/5 px-5 py-2.5 text-sm font-light tracking-wide text-amber-200/80 transition-colors hover:border-amber-200/40 hover:bg-amber-200/10 hover:text-amber-100"
            >
              Read the Official Obituary
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
