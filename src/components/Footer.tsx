import { Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-stone-950 border-t border-stone-900 px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-200/20 bg-amber-200/5">
            <Mail className="h-6 w-6 text-amber-200/70" />
          </div>
        </div>

        <h2 className="font-serif text-2xl text-stone-100 sm:text-3xl">
          Share a Memory
        </h2>
        <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent" />

        <p className="mt-6 text-base font-light leading-relaxed text-stone-400">
          If you have photos, videos, or stories you would like to contribute
          to this memorial, please reach out. Your memories help keep Roberto's
          spirit alive.
        </p>

        <a
          href="mailto:memorial@riggio.family"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-amber-200/5 px-8 py-3 text-sm font-medium text-amber-100 transition-all hover:bg-amber-200/15 hover:ring-1 hover:ring-amber-200/40"
        >
          <Mail className="h-4 w-4" />
          share@robertoforever.com
        </a>

        <div className="mt-12 flex items-center justify-center gap-2 text-xs font-light text-stone-600">
          <Heart className="h-3 w-3 text-amber-200/40" />
          <span>In Memory of Roberto Paolo Riggio</span>
        </div>
      </div>
    </footer>
  );
}
