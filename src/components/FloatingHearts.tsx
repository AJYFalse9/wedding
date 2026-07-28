'use client';

import { motion } from 'framer-motion';

const floaters = [
  { symbol: '♥', x: 5,  size: 14, dur: 14, delay:  0,   opacity: 0.12, drift:  40 },
  { symbol: '✿', x: 12, size: 20, dur: 18, delay: -4,   opacity: 0.09, drift: -30 },
  { symbol: '♥', x: 22, size: 10, dur: 12, delay: -8,   opacity: 0.14, drift:  20 },
  { symbol: '❋', x: 35, size: 18, dur: 20, delay: -2,   opacity: 0.08, drift: -50 },
  { symbol: '♥', x: 48, size: 26, dur: 16, delay: -10,  opacity: 0.07, drift:  60 },
  { symbol: '✾', x: 58, size: 12, dur: 22, delay: -6,   opacity: 0.11, drift: -25 },
  { symbol: '♥', x: 70, size: 20, dur: 15, delay: -14,  opacity: 0.09, drift:  35 },
  { symbol: '❋', x: 78, size: 16, dur: 19, delay: -3,   opacity: 0.10, drift: -40 },
  { symbol: '✿', x: 88, size: 24, dur: 13, delay: -9,   opacity: 0.08, drift:  15 },
  { symbol: '♥', x: 95, size: 11, dur: 17, delay: -7,   opacity: 0.13, drift: -35 },
  { symbol: '✿', x: 28, size: 16, dur: 21, delay: -11,  opacity: 0.07, drift:  45 },
  { symbol: '♥', x: 64, size: 22, dur: 11, delay: -5,   opacity: 0.10, drift: -20 },
];

export function FloatingHearts({ count }: { count?: number }) {
  const items = count ? floaters.slice(0, count) : floaters;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {items.map((f, i) => (
        <motion.span
          key={i}
          className="absolute select-none"
          style={{
            left: `${f.x}%`,
            bottom: '-8%',
            fontSize: f.size,
            color: '#c9956c',
            opacity: f.opacity,
          }}
          animate={{
            y: [0, -2200],
            x: [0, f.drift],
            rotate: [0, f.drift > 0 ? 180 : -180],
          }}
          transition={{
            duration: f.dur,
            delay: f.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {f.symbol}
        </motion.span>
      ))}
    </div>
  );
}
