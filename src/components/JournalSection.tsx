import { Link } from "react-router-dom";
import { journalEntries } from "@/data/Journal";

export { journalEntries };

export default function JournalSection() {
  return (
    <section id="journal" className="bg-stone-950/80 px-6 py-24">      
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-light uppercase tracking-[0.3em] text-amber-200/60">
            Stories & Memories
          </p>

          <h2 className="font-serif text-4xl font-light tracking-wide text-amber-100 md:text-5xl">
            Shared Moments
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-light leading-7 text-stone-300/70">
            Stories, memories, and moments shared by the people who knew
            Roberto.
          </p>
        </div>


        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {journalEntries.map((entry) => (
            <article
              key={entry.slug}
              className="group overflow-hidden rounded-lg border border-amber-100/10 bg-stone-900/60 transition-all duration-500 hover:border-amber-200/25"
            >
              <Link to={`/journal/${entry.slug}`} className="block">
                {/* Image */}
                <div className="aspect-[8/5] overflow-hidden">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-light text-amber-100">
                    {entry.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-stone-300/70">
                    {entry.excerpt}
                  </p>

                  <div className="mt-6 border-t border-amber-100/10 pt-4">
                    <p className="text-xs uppercase tracking-[0.15em] text-amber-200/70">
                      {entry.author}
                    </p>

                    <p className="mt-1 text-xs font-light text-stone-400">
                      {entry.relationship} · {entry.date}
                    </p>
                  </div>

                  <p className="mt-5 text-xs uppercase tracking-[0.2em] text-amber-200/60 transition-colors group-hover:text-amber-100">
                    Read Memory →
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* View all */}
        <div className="mt-12 text-center">
          <Link
            to="/journal"
            className="text-sm font-light tracking-wide text-amber-200/70 transition-colors hover:text-amber-100"
          >
            View All Shared Moments →
          </Link>
        </div>
      </div>
    </section>
  );
}
