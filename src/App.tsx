import { useEffect, useState } from 'react';
import backgroundImage from './images/candleinthewind.avif';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Background image with slow zoom animation */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-[20000ms] ease-out ${
          mounted ? 'scale-110' : 'scale-100'
        }`}
        style={{
          backgroundImage:
             `url(${backgroundImage})`,
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

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
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
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
          className={`mt-8 text-sm font-light uppercase tracking-[0.3em] text-white/60 transition-all duration-[4000ms] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Coming Soon
        </p>
      </div>

      <style>{`
        @keyframes float {
          0%   { transform: translateY(0)     translateX(0);    opacity: 0.2; }
          50%  { opacity: 0.6; }
          100% { transform: translateY(-40px) translateX(10px); opacity: 0.1; }
        }
      `}</style>
    </div>
  );
}

export default App;
