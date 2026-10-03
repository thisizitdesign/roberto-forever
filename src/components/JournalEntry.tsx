import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { journalEntries } from "@/data/Journal";

export default function JournalEntry() {
  const { slug } = useParams();

  const entry = journalEntries.find((item) => item.slug === slug);

  if (!entry) {
    return (
      <section className="min-h-screen bg-stone-950 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-serif text-4xl font-light text-amber-100">
            Memory Not Found
          </h1>

          <Link
            to="/journal"
            className="mt-8 inline-flex items-center gap-2 text-sm text-amber-200/70 hover:text-amber-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Shared Moments
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="min-h-screen bg-stone-950 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Back */}
        <Link
          to="/journal"
          className="mb-10 flex items-center gap-2 text-sm font-light tracking-wide text-amber-200/70 transition-colors hover:text-amber-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Shared Moments
        </Link>

        {/* Header */}
        <header className="mb-10 text-center">
          <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-amber-200/60">
            Shared Moment
          </p>

          <h1 className="font-serif text-4xl font-light tracking-wide text-amber-100 md:text-6xl">
            {entry.title}
          </h1>

          <div className="mt-6">
            <p className="text-sm text-amber-200/70">
              {entry.author}
            </p>

            <p className="mt-1 text-xs font-light text-stone-400">
              {entry.relationship} · {entry.date}
            </p>
          </div>
        </header>

        {/* Main Image */}
        <div className="overflow-hidden">
          <img
            src={entry.image}
            alt={entry.title}
            className="w-full"
          />
        </div>

        {/* Story */}
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="space-y-6 font-serif text-lg font-light leading-9 text-stone-300/90">
            <p>
              This is where the full memory will go. You can replace this
              text with the story submitted by {entry.author}.
            </p>

            <p>
              Additional paragraphs can go here, allowing each memory to
              have its own voice and space.
            </p>

            <p>
              The individual pages are intentionally simple so the focus
              stays on the story and the person sharing it.
            </p>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="mt-16 border-t border-amber-100/10 pt-8">
          <Link
            to="/journal"
            className="flex items-center gap-2 text-sm font-light tracking-wide text-amber-200/70 transition-colors hover:text-amber-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Shared Moments
          </Link>
        </div>
      </div>
    </article>
  );
}
