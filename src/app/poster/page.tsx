'use client';

import { motion } from 'framer-motion';
import { Heart, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { ParallaxProvider, ParallaxLayer } from '@/components/ParallaxMouse';
import { FloatingHearts } from '@/components/FloatingHearts';
import { ScrollReveal } from '@/components/ScrollReveal';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

function stagger(delay: number) {
  return { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay, ease: EASE } };
}

export default function PosterPage() {
  return (
    <div style={{ background: 'var(--background)' }}>
      {/* ── Hero ── */}
      <ParallaxProvider className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        {/* Floating decorative elements */}
        <FloatingHearts />

        {/* Background radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 70% at 50% 40%, rgba(201,149,108,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Decorative rings */}
        <ParallaxLayer depth={8} className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className="h-[640px] w-[640px] rounded-full border opacity-10"
            style={{ borderColor: 'var(--rose-gold)' }}
          />
        </ParallaxLayer>
        <ParallaxLayer depth={14} className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className="h-[800px] w-[800px] rounded-full border opacity-[0.06]"
            style={{ borderColor: 'var(--rose-gold)' }}
          />
        </ParallaxLayer>

        {/* Main content */}
        <ParallaxLayer depth={4} className="relative z-10 flex flex-col items-center gap-6">
          {/* Monogram */}
          <motion.div {...stagger(0.1)} className="flex items-center gap-4">
            <div className="h-px w-16 opacity-40" style={{ background: 'var(--rose-gold)' }} />
            <Heart
              size={18}
              className="fill-current"
              style={{ color: 'var(--rose-gold)', fill: 'var(--rose-gold)' }}
            />
            <div className="h-px w-16 opacity-40" style={{ background: 'var(--rose-gold)' }} />
          </motion.div>

          {/* Names */}
          <motion.div {...stagger(0.25)} className="flex flex-col items-center gap-1">
            <h1
              className="text-6xl font-bold leading-none tracking-[0.08em] sm:text-7xl md:text-8xl lg:text-9xl gradient-text"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Sophia
            </h1>
            <p
              className="text-lg tracking-[0.35em] uppercase"
              style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: 'var(--stone-warm)' }}
            >
              &amp;
            </p>
            <h1
              className="text-6xl font-bold leading-none tracking-[0.08em] sm:text-7xl md:text-8xl lg:text-9xl gradient-text"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Alexander
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            {...stagger(0.45)}
            className="max-w-md text-lg leading-relaxed"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontStyle: 'italic',
              color: 'var(--stone-warm)',
            }}
          >
            Two souls, one heart, forever entwined beneath the Tuscan sun.
          </motion.p>

          {/* Date */}
          <motion.div {...stagger(0.6)} className="flex flex-col items-center gap-2">
            <div className="ornament-divider w-48">
              <span
                className="text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: 'var(--font-inter)', color: 'var(--stone-warm)' }}
              >
                September 20, 2025
              </span>
            </div>
            <p
              className="text-xs tracking-[0.25em] uppercase"
              style={{ fontFamily: 'var(--font-inter)', color: 'var(--amber-warm)' }}
            >
              Tuscany, Italy
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div {...stagger(0.75)} className="flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/gallery"
              className="px-8 py-3 text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:opacity-80"
              style={{
                fontFamily: 'var(--font-inter)',
                background: 'linear-gradient(135deg, var(--rose-gold), var(--deep-rose))',
                color: 'white',
                borderRadius: '2px',
              }}
            >
              View Gallery
            </Link>
            <Link
              href="/wedding"
              className="px-8 py-3 text-sm tracking-[0.15em] uppercase border transition-all duration-300 hover:bg-rose-blush"
              style={{
                fontFamily: 'var(--font-inter)',
                borderColor: 'var(--rose-gold)',
                color: 'var(--rose-gold)',
                borderRadius: '2px',
              }}
            >
              Wedding Details
            </Link>
          </motion.div>
        </ParallaxLayer>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: 'var(--stone-warm)' }}
        >
          <span className="text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-inter)' }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </ParallaxProvider>

      {/* ── Our Story ── */}
      <section className="relative py-32 px-6" style={{ background: 'var(--cream)' }}>
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <p
              className="text-sm tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: 'var(--font-inter)', color: 'var(--rose-gold)' }}
            >
              Our Story
            </p>
            <h2
              className="text-4xl sm:text-5xl font-semibold mb-8"
              style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--foreground)' }}
            >
              Written in the Stars
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p
              className="text-lg leading-[1.9] mb-6"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--stone-warm)', fontStyle: 'italic' }}
            >
              We first met on a rainy November evening in Florence, both sheltering under the same café awning,
              both pretending not to notice each other until the espresso made us brave.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p
              className="text-lg leading-[1.9]"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--stone-warm)', fontStyle: 'italic' }}
            >
              Three years later, in that same city, on that same street — he asked.
              She said yes before he finished the question.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Countdown / Date highlight ── */}
      <section className="py-28 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-3">
            {[
              { number: '20', label: 'September' },
              { number: '2025', label: 'The Year' },
              { number: 'Tuscany', label: 'Italy' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.12} direction="scale">
                <div className="flex flex-col items-center gap-2">
                  <span
                    className="text-5xl sm:text-6xl font-bold gradient-text"
                    style={{ fontFamily: 'var(--font-cinzel)' }}
                  >
                    {item.number}
                  </span>
                  <span
                    className="text-xs tracking-[0.3em] uppercase"
                    style={{ fontFamily: 'var(--font-inter)', color: 'var(--stone-warm)' }}
                  >
                    {item.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer quote ── */}
      <section className="py-24 px-6 text-center" style={{ background: 'var(--rose-blush)' }}>
        <ScrollReveal>
          <blockquote
            className="mx-auto max-w-xl text-2xl leading-relaxed"
            style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: 'var(--foreground)' }}
          >
            "Whatever our souls are made of, his and mine are the same."
          </blockquote>
          <p
            className="mt-4 text-sm tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-inter)', color: 'var(--rose-gold)' }}
          >
            — Emily Brontë
          </p>
        </ScrollReveal>
      </section>
    </div>
  );
}
