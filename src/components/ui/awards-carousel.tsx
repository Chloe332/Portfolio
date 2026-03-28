import { AnimatePresence, motion } from 'motion/react';
import {
  Award,
  ChevronLeft,
  ChevronRight,
  Medal,
  Sparkles,
  Trophy,
  X,
} from 'lucide-react';
import { useState } from 'react';

export type AwardItem = {
  title: string;
  issuer: string;
  year: string;
  short: string;
  details: string[];
  icon: 'award' | 'trophy' | 'medal' | 'sparkles';
};

const iconMap = {
  award: Award,
  trophy: Trophy,
  medal: Medal,
  sparkles: Sparkles,
};

export function AwardsCarousel({ items }: { items: AwardItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const faceCount = Math.max(items.length, 1);
  const angle = 360 / faceCount;
  const faceWidth = 250;
  const radius = Math.max(
    300,
    Math.round(faceWidth / (2 * Math.tan(Math.PI / faceCount)))
  );

  const previous = () =>
    setActiveIndex((prev) => (prev - 1 + faceCount) % faceCount);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % faceCount);

  const selected = selectedIndex !== null ? items[selectedIndex] : null;

  return (
    <div className="w-full">
      <div className="relative mx-auto h-[460px] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 shadow-2xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_32%)]" />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-slate-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-slate-950 to-transparent" />

        <button
          onClick={previous}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20"
          aria-label="Previous award"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20"
          aria-label="Next award"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute inset-0 flex items-center justify-center [perspective:1400px]">
          <motion.div
            className="relative h-[320px] w-full max-w-5xl [transform-style:preserve-3d]"
            animate={{ rotateY: -activeIndex * angle }}
            transition={{ type: 'spring', stiffness: 90, damping: 18 }}
          >
            {items.map((item, i) => {
              const Icon = iconMap[item.icon];
              const isFront = i === activeIndex;

              return (
                <div
                  key={`${item.title}-${i}`}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotateY(${
                      i * angle
                    }deg) translateZ(${radius}px)`,
                  }}
                >
                  <button
                    onClick={() => setSelectedIndex(i)}
                    className={`group relative block h-[300px] w-[240px] overflow-hidden rounded-[1.75rem] border border-white/15 p-5 text-left backdrop-blur-md transition duration-300 ${
                      isFront
                        ? 'scale-105 bg-white/12 shadow-2xl'
                        : 'scale-95 bg-white/8 opacity-75'
                    }`}
                    aria-label={`Open details for ${item.title}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent" />

                    <div className="relative z-10 flex h-full flex-col">
                      <div className="mb-5 flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                          <Icon size={22} />
                        </div>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90">
                          {item.year}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <p className="text-xs uppercase tracking-[0.25em] text-indigo-200/90">
                          {item.issuer}
                        </p>
                        <h3 className="text-2xl font-bold leading-tight text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-white/80">
                          {item.short}
                        </p>
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-6 text-white/90">
                        <span className="text-sm font-semibold">View details</span>
                        <ChevronRight size={18} />
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === activeIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/35'
              }`}
              aria-label={`Go to award ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white p-8 shadow-2xl"
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-indigo-500">
                    {selected.issuer}
                  </p>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {selected.title}
                  </h3>
                  <p className="mt-2 text-gray-500">{selected.year}</p>
                </div>

                <button
                  onClick={() => setSelectedIndex(null)}
                  className="rounded-full bg-gray-100 p-2 text-gray-600 transition hover:bg-gray-200"
                  aria-label="Close award details"
                >
                  <X size={22} />
                </button>
              </div>

              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                {selected.short}
              </p>

              <div className="space-y-3">
                {selected.details.map((detail, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl bg-indigo-50 px-4 py-3"
                  >
                    <span className="mt-1 text-indigo-600">✦</span>
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}