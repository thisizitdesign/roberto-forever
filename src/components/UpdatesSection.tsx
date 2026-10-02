import { Bell } from 'lucide-react';

interface UpdateItem {
  date: string;
  title: string;
  body: string;
}

const updates: UpdateItem[] = [
  {
    date: 'October 2026',
    title: 'Memorial Website Launched',
    body: 'This online memorial was created to honor Roberto and provide a space for family and friends to share memories, photos, and tributes.',
  },
];

export default function UpdatesSection() {
  return (
    <section id="updates" className="scroll-mt-20 bg-stone-900/90 py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-amber-200/20 bg-amber-200/5">
              <Bell className="h-7 w-7 text-amber-200/70" />
            </div>
          </div>
          <h2 className="font-serif text-3xl text-stone-100 sm:text-4xl">
            Memorial Updates
          </h2>
          <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent" />
        </div>

        <div className="space-y-6">
          {updates.map((item, i) => (
            <article
              key={i}
              className="rounded-lg border border-stone-800 bg-stone-950/60 p-8 transition-colors hover:border-amber-200/20"
            >
              <time className="text-xs uppercase tracking-[0.3em] text-amber-200/60">
                {item.date}
              </time>
              <h3 className="mt-3 font-serif text-xl text-stone-100">
                {item.title}
              </h3>
              <p className="mt-3 font-light leading-relaxed text-stone-400">
                {item.body}
              </p>
            </article>
          ))}

          <div className="rounded-lg border border-dashed border-stone-800 p-8 text-center">
            <p className="text-sm font-light text-stone-600">
              Future updates about memorial services, tributes, and gatherings
              will be posted here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
