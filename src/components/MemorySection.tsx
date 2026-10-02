import { Flame } from 'lucide-react';

export default function MemorySection() {
  return (
    <section id="remember" className="scroll-mt-20 bg-stone-950/90 py-24 px-6">
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
            Roberto Paolo Riggio touched the lives of everyone who knew him.
            His warmth, generosity, and spirit left an indelible mark on his
            family, friends, and community.
          </p>
          <p>
            This space is dedicated to preserving his memory — a place to
            share stories, photographs, and moments that celebrate the life
            he lived and the love he gave.
          </p>
          <p className="text-stone-500">
            <em>
              More details about his life and legacy will be added here soon.
            </em>
          </p>
        </div>
      </div>
    </section>
  );
}
