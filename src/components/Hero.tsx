import { useEffect, useState } from 'react';
import backgroundImage from '../images/assets/candleinthewind.avif';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
      {/* Background image with slow zoom animation */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-[20000ms] ease-out ${
          mounted ? 'scale-110' : 'scale-100'
        }`}
        style={{
          backgroundImage:
            `url('${backgroundImage}')`,
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Subtle floating particle effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full bg-amber-100/30"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animation: `float ${8 + (i % 5)}s ease-in-out ${i * 0.4}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p
          className={`text-sm font-light uppercase tracking-[0.4em] text-amber-100/70 transition-all duration-[3000ms] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          In Loving Memory
        </p>

        <h1
          className={`mt-6 font-serif text-4xl leading-tight text-white drop-shadow-2xl transition-all duration-[3000ms] sm:text-6xl md:text-7xl ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Roberto Paolo Riggio
        </h1>

        {/* Divider */}
        <div
          className={`mt-8 h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent transition-all duration-[4000ms] ${
            mounted ? 'w-48 opacity-100' : 'w-0 opacity-0'
          }`}
        />

        <p
          className={`mt-8 max-w-2xl mx-auto text-sm font-light uppercase tracking-[0.3em] text-white/60 transition-all duration-[4000ms] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          His music, his love, his laughter, and his presence remain with all of us.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-[5000ms] ${
          mounted ? 'opacity-60' : 'opacity-0'
        }`}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%   { transform: translateY(0)     translateX(0);    opacity: 0.2; }
          50%  { opacity: 0.6; }
          100% { transform: translateY(-40px) translateX(10px); opacity: 0.1; }
        }
      `}</style>
    </section>
  );
}
