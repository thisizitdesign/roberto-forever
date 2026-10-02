import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Remember', href: '#remember' },
  { label: 'Updates', href: '#updates' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-40 w-full transition-all duration-500 ${
        scrolled
          ? 'bg-stone-950/90 backdrop-blur-md border-b border-stone-800/80'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Name / logo */}
        <a
          href="#top"
          className={`font-serif text-lg tracking-wide transition-colors ${
            scrolled ? 'text-stone-100' : 'text-white/90'
          }`}
        >
          R. P. Riggio
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-light tracking-wide transition-colors ${
                scrolled
                  ? 'text-stone-400 hover:text-amber-200/80'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className={`sm:hidden ${scrolled ? 'text-stone-300' : 'text-white/80'}`}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-px w-6 bg-current transition-transform ${
                menuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-px w-6 bg-current transition-opacity ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-px w-6 bg-current transition-transform ${
                menuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-stone-800 bg-stone-950/95 px-6 py-4 sm:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-light text-stone-400 hover:text-amber-200/80"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
