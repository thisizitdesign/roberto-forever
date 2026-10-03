import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { journalEntries } from "@/data/Journal";

export default function Journal() {
  const navigate = useNavigate();

  const backToSharedMoments = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("journal")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };
  return (
    <section className="min-h-screen bg-stone-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <button
        onClick={backToSharedMoments}
        className="mb-10 flex items-center gap-2 text-sm font-light tracking-wide text-amber-200/70 transition-colors hover:text-amber-100"
        >
        <ArrowLeft className="h-4 w-4" />
        Back to Shared Moments
        </button>

        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-light uppercase tracking-[0.3em] text-amber-200/60">
            Stories & Memories
          </p>

          <h1 className="font-serif text-4xl font-light tracking-wide text-amber-100 md:text-5xl">
            Shared Moments
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-light leading-7 text-stone-300/70">
            Stories, memories, and moments shared by the people who knew
            Roberto.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {journalEntries.map((entry) => (
            <article
              key={entry.slug}
              className="group overflow-hidden rounded-lg border border-amber-100/10 bg-stone-900/60 transition-all duration-500 hover:border-amber-200/25"
            >
              <Link to={`/journal/${entry.slug}`} className="block">
                <div className="aspect-[8/5] overflow-hidden">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-6">
                  <h2 className="font-serif text-2xl font-light text-amber-100">
                    {entry.title}
                  </h2>

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
      </div>
    </section>
  );
}
