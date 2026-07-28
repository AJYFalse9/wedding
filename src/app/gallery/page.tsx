'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { X, ZoomIn } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface GalleryItem {
  id: number;
  title: string;
  subtitle: string;
  span: 'tall' | 'wide' | 'square';
  gradient: string;
  accent: string;
}

const items: GalleryItem[] = [
  { id: 1,  title: 'First Meeting',    subtitle: 'Florence, 2022',       span: 'tall',   gradient: 'linear-gradient(135deg, #f9e4e4 0%, #f2c4c4 50%, #c9956c 100%)', accent: '#b5485a' },
  { id: 2,  title: 'The Proposal',     subtitle: 'Ponte Vecchio',        span: 'square', gradient: 'linear-gradient(135deg, #fdf8f0 0%, #e8c99a 60%, #d4a96a 100%)', accent: '#8b7355' },
  { id: 3,  title: 'Engagement',       subtitle: 'September 2024',       span: 'wide',   gradient: 'linear-gradient(160deg, #f9e4e4 0%, #c9956c 40%, #b5485a 100%)', accent: '#c9956c' },
  { id: 4,  title: 'Villa Toscana',    subtitle: 'Our Venue',            span: 'square', gradient: 'linear-gradient(135deg, #e8c99a 0%, #d4a96a 50%, #8b7355 100%)', accent: '#d4a96a' },
  { id: 5,  title: 'Golden Hour',      subtitle: 'Siena Countryside',    span: 'tall',   gradient: 'linear-gradient(160deg, #fdf8f0 0%, #f9e4e4 40%, #c9956c 100%)', accent: '#c9956c' },
  { id: 6,  title: 'Together',         subtitle: 'Rome, Winter 2023',    span: 'wide',   gradient: 'linear-gradient(135deg, #f2c4c4 0%, #b5485a 60%, #8b7355 100%)', accent: '#b5485a' },
  { id: 7,  title: 'The Ring',         subtitle: 'Sapphire & Gold',      span: 'square', gradient: 'linear-gradient(135deg, #fdf8f0 0%, #e8c99a 40%, #c9956c 100%)', accent: '#c9956c' },
  { id: 8,  title: 'Sunrise Shoot',    subtitle: 'Chianti Hills',        span: 'tall',   gradient: 'linear-gradient(160deg, #f9e4e4 0%, #e8c99a 50%, #d4a96a 100%)', accent: '#d4a96a' },
  { id: 9,  title: 'Laughter',         subtitle: 'Candid Moments',       span: 'wide',   gradient: 'linear-gradient(135deg, #f2c4c4 0%, #f9e4e4 40%, #c9956c 100%)', accent: '#8b7355' },
  { id: 10, title: 'Chapel Steps',     subtitle: 'San Miniato, Florence',span: 'square', gradient: 'linear-gradient(135deg, #e8c99a 0%, #c9956c 50%, #b5485a 100%)', accent: '#b5485a' },
  { id: 11, title: 'Our Families',     subtitle: 'First Meeting',        span: 'wide',   gradient: 'linear-gradient(160deg, #fdf8f0 0%, #f2c4c4 50%, #c9956c 100%)', accent: '#c9956c' },
  { id: 12, title: 'Forever',          subtitle: 'Always & Together',    span: 'tall',   gradient: 'linear-gradient(135deg, #f9e4e4 0%, #b5485a 50%, #8b7355 100%)', accent: '#d4a96a' },
];

const spanClass = {
  tall:   'row-span-2',
  wide:   'col-span-2',
  square: '',
};

export default function GalleryPage() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.gallery-card');
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: (i % 4) * 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, { scope: gridRef });

  return (
    <div style={{ background: 'var(--background)' }}>
      {/* Header */}
      <section
        className="relative flex flex-col items-center justify-center pt-36 pb-20 px-6 text-center overflow-hidden"
        style={{ background: 'var(--cream)' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,149,108,0.1) 0%, transparent 70%)',
          }}
        />
        <ScrollReveal>
          <p
            className="mb-3 text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: 'var(--font-inter)', color: 'var(--rose-gold)' }}
          >
            Our Gallery
          </p>
          <h1
            className="text-5xl sm:text-6xl font-semibold gradient-text"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Moments in Time
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p
            className="mt-6 max-w-md text-base leading-relaxed"
            style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: 'var(--stone-warm)' }}
          >
            A collection of cherished memories — from the very first glance to the moment we said yes.
          </p>
        </ScrollReveal>
      </section>

      {/* Masonry Grid */}
      <section className="px-4 py-16 sm:px-8 lg:px-12">
        <div
          ref={gridRef}
          className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[220px]"
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              className={`gallery-card relative overflow-hidden cursor-pointer group rounded-sm opacity-0 ${spanClass[item.span]}`}
              style={{ background: item.gradient }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={() => setSelected(item)}
            >
              {/* Overlay on hover */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                style={{ background: 'rgba(44, 24, 16, 0.45)' }}
              >
                <ZoomIn size={24} color="white" />
                <p
                  className="text-white text-sm tracking-widest uppercase"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  View
                </p>
              </motion.div>

              {/* Card label */}
              <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: 'linear-gradient(to top, rgba(44,24,16,0.5), transparent)' }}>
                <p
                  className="text-white text-sm font-medium"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {item.title}
                </p>
                <p
                  className="text-white/70 text-xs tracking-wider"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {item.subtitle}
                </p>
              </div>

              {/* Decorative shimmer */}
              <div
                className="absolute top-4 right-4 text-2xl opacity-30"
                style={{ color: item.accent }}
              >
                ♥
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
            style={{ background: 'rgba(44, 24, 16, 0.85)', backdropFilter: 'blur(8px)' }}
          >
            <motion.div
              className="relative max-w-xl w-full rounded-sm overflow-hidden"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
              style={{ background: selected.gradient }}
            >
              <div className="aspect-[4/3] flex items-center justify-center relative">
                <span className="text-6xl opacity-20" style={{ color: selected.accent }}>♥</span>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <p
                    className="text-3xl font-semibold"
                    style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--foreground)', textShadow: '0 1px 8px rgba(255,255,255,0.8)' }}
                  >
                    {selected.title}
                  </p>
                  <p
                    className="text-sm tracking-widest uppercase"
                    style={{ fontFamily: 'var(--font-inter)', color: selected.accent }}
                  >
                    {selected.subtitle}
                  </p>
                </div>
              </div>
              <button
                className="absolute top-4 right-4 p-2 rounded-full transition-opacity hover:opacity-70"
                style={{ background: 'rgba(255,255,255,0.9)' }}
                onClick={() => setSelected(null)}
              >
                <X size={18} style={{ color: 'var(--foreground)' }} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
