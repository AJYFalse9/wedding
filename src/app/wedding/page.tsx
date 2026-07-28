'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Heart, Shirt, Music, Utensils, Star, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { FloatingHearts } from '@/components/FloatingHearts';

const schedule = [
  { time: '3:00 PM', title: 'Ceremony',          desc: 'Chapel of San Miniato al Monte, Florence',    icon: Heart   },
  { time: '4:30 PM', title: 'Cocktail Hour',      desc: 'Garden terrace of Villa Toscana',             icon: Music   },
  { time: '6:00 PM', title: 'Reception Dinner',   desc: 'Grand ballroom, Villa Toscana',               icon: Utensils},
  { time: '8:00 PM', title: 'Toasts & Dancing',   desc: 'Open bar and dance floor until midnight',     icon: Star    },
  { time: '10:00 PM',title: 'Late Night Treats',  desc: 'Gelato bar and Florentine pastries',          icon: Star    },
];

const dressCodes = [
  { code: 'Men',      hint: 'Black tie preferred · Dark suits welcome',   icon: '🤵' },
  { code: 'Women',    hint: 'Floor-length gowns or formal cocktail dress', icon: '👗' },
  { code: 'Colors',   hint: 'Please avoid white and ivory',               icon: '🎨' },
];

const faqItems = [
  {
    q: 'Is there parking at the venue?',
    a: 'Yes, complimentary valet parking is available at Villa Toscana from 2:30 PM onwards.',
  },
  {
    q: 'Are children welcome?',
    a: 'We adore your little ones, but we have chosen to make our reception adults-only (18+). We hope you understand and enjoy a relaxing evening!',
  },
  {
    q: 'What about dietary restrictions?',
    a: 'Please note your dietary needs in the RSVP form. We cater to vegetarian, vegan, gluten-free, and most common allergies.',
  },
  {
    q: 'Can I take photos during the ceremony?',
    a: 'We ask for an unplugged ceremony — our photographer will capture every moment. You are welcome to photograph during cocktail hour and reception.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: 'rgba(201,149,108,0.25)' }}>
      <button
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-opacity hover:opacity-70"
        onClick={() => setOpen(!open)}
      >
        <span style={{ fontFamily: 'var(--font-playfair)', color: 'var(--foreground)', fontSize: '1rem' }}>{q}</span>
        {open ? <ChevronUp size={16} style={{ color: 'var(--rose-gold)', flexShrink: 0 }} /> : <ChevronDown size={16} style={{ color: 'var(--rose-gold)', flexShrink: 0 }} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-8 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-inter)', color: 'var(--stone-warm)' }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function WeddingPage() {
  const [rsvpStatus, setRsvpStatus] = useState<'idle' | 'submitted'>('idle');
  const [attending, setAttending] = useState<boolean | null>(null);

  function handleRsvp(e: React.FormEvent) {
    e.preventDefault();
    setRsvpStatus('submitted');
  }

  return (
    <div style={{ background: 'var(--background)' }}>
      {/* ── Hero ── */}
      <section
        className="relative flex flex-col items-center justify-center pt-36 pb-24 px-6 text-center overflow-hidden"
        style={{ background: 'var(--cream)' }}
      >
        <FloatingHearts count={6} />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(201,149,108,0.1) 0%, transparent 70%)' }}
        />
        <ScrollReveal>
          <p className="mb-3 text-xs tracking-[0.4em] uppercase" style={{ fontFamily: 'var(--font-inter)', color: 'var(--rose-gold)' }}>
            Wedding Details
          </p>
          <h1 className="text-5xl sm:text-6xl font-semibold gradient-text" style={{ fontFamily: 'var(--font-cinzel)' }}>
            Our Special Day
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="mt-6 max-w-md text-base leading-relaxed" style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: 'var(--stone-warm)' }}>
            September 20, 2025 · Tuscany, Italy
          </p>
        </ScrollReveal>
      </section>

      {/* ── Venue Card ── */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="mb-4 text-center text-xs tracking-[0.4em] uppercase" style={{ fontFamily: 'var(--font-inter)', color: 'var(--rose-gold)' }}>
              The Venue
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <motion.div
              className="rounded-sm p-10 border"
              style={{ background: 'var(--warm-white)', borderColor: 'rgba(201,149,108,0.25)' }}
              whileHover={{ boxShadow: '0 8px 40px rgba(201,149,108,0.18)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-8">
                <div
                  className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ background: 'linear-gradient(135deg, var(--rose-blush), var(--petal-pink))' }}
                >
                  <MapPin size={22} style={{ color: 'var(--deep-rose)' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-1" style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--foreground)' }}>
                    Villa Toscana
                  </h3>
                  <p className="text-sm mb-4" style={{ fontFamily: 'var(--font-inter)', color: 'var(--stone-warm)' }}>
                    Via delle Colline 12, 50022 Greve in Chianti, Firenze, Italy
                  </p>
                  <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: 'var(--stone-warm)' }}>
                    A 16th-century estate nestled among Chianti vineyards, Villa Toscana offers sweeping
                    views of olive groves and rolling hills. The perfect setting for a timeless celebration.
                  </p>
                  <div className="mt-6 inline-block">
                    <a
                      href="#"
                      className="text-sm tracking-[0.15em] uppercase border-b pb-0.5 transition-all hover:pb-1"
                      style={{ fontFamily: 'var(--font-inter)', color: 'var(--rose-gold)', borderColor: 'var(--rose-gold)' }}
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 px-6" style={{ background: 'var(--cream)' }}>
        <div className="mx-auto max-w-2xl">
          <ScrollReveal>
            <p className="mb-4 text-center text-xs tracking-[0.4em] uppercase" style={{ fontFamily: 'var(--font-inter)', color: 'var(--rose-gold)' }}>
              Schedule
            </p>
            <h2 className="mb-14 text-center text-4xl font-semibold" style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--foreground)' }}>
              Day of Events
            </h2>
          </ScrollReveal>
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[29px] top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(to bottom, transparent, var(--rose-gold), var(--rose-gold), transparent)' }}
            />
            <div className="flex flex-col gap-10">
              {schedule.map((item, i) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={i} delay={i * 0.1} direction="left">
                    <div className="flex gap-8 items-start">
                      <div
                        className="relative z-10 flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-full"
                        style={{ background: 'linear-gradient(135deg, var(--rose-blush), var(--petal-pink))' }}
                      >
                        <Icon size={20} style={{ color: 'var(--deep-rose)' }} />
                      </div>
                      <div className="pt-3">
                        <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'var(--font-inter)', color: 'var(--rose-gold)' }}>
                          {item.time}
                        </p>
                        <p className="text-lg font-semibold mb-1" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--foreground)' }}>
                          {item.title}
                        </p>
                        <p className="text-sm" style={{ fontFamily: 'var(--font-inter)', color: 'var(--stone-warm)' }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Dress Code ── */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="mb-4 text-center text-xs tracking-[0.4em] uppercase" style={{ fontFamily: 'var(--font-inter)', color: 'var(--rose-gold)' }}>
              Attire
            </p>
            <h2 className="mb-14 text-center text-4xl font-semibold" style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--foreground)' }}>
              Dress Code
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {dressCodes.map((d, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="scale">
                <motion.div
                  className="rounded-sm p-8 text-center border"
                  style={{ background: 'var(--warm-white)', borderColor: 'rgba(201,149,108,0.2)' }}
                  whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(201,149,108,0.15)' }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="text-4xl block mb-4">{d.icon}</span>
                  <p className="text-base font-semibold mb-2" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--foreground)' }}>
                    {d.code}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ fontFamily: 'var(--font-inter)', color: 'var(--stone-warm)' }}>
                    {d.hint}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RSVP ── */}
      <section className="py-20 px-6 relative overflow-hidden" style={{ background: 'var(--rose-blush)' }}>
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(201,149,108,0.15) 0%, transparent 70%)' }}
        />
        <div className="mx-auto max-w-xl relative z-10">
          <ScrollReveal>
            <p className="mb-3 text-center text-xs tracking-[0.4em] uppercase" style={{ fontFamily: 'var(--font-inter)', color: 'var(--rose-gold)' }}>
              RSVP
            </p>
            <h2 className="mb-4 text-center text-4xl font-semibold" style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--foreground)' }}>
              Will You Join Us?
            </h2>
            <p className="mb-10 text-center text-sm" style={{ fontFamily: 'var(--font-inter)', color: 'var(--stone-warm)' }}>
              Please respond by August 1, 2025
            </p>
          </ScrollReveal>

          <AnimatePresence mode="wait">
            {rsvpStatus === 'submitted' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-sm p-10 text-center border"
                style={{ background: 'var(--warm-white)', borderColor: 'rgba(201,149,108,0.3)' }}
              >
                <div
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ background: 'linear-gradient(135deg, var(--rose-gold), var(--deep-rose))' }}
                >
                  <Check size={28} color="white" />
                </div>
                <h3 className="text-2xl font-semibold mb-2" style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--foreground)' }}>
                  {attending ? `We're so excited!` : `We'll miss you!`}
                </h3>
                <p className="text-sm" style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: 'var(--stone-warm)' }}>
                  {attending
                    ? `Your RSVP has been received. We can't wait to celebrate with you!`
                    : `Thank you for letting us know. You'll be in our hearts on the day.`}
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleRsvp}
                className="rounded-sm p-8 sm:p-10 border flex flex-col gap-5"
                style={{ background: 'var(--warm-white)', borderColor: 'rgba(201,149,108,0.3)' }}
              >
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'First Name', id: 'first', placeholder: 'Jane' },
                    { label: 'Last Name',  id: 'last',  placeholder: 'Smith' },
                  ].map(({ label, id, placeholder }) => (
                    <div key={id} className="flex flex-col gap-1.5">
                      <label className="text-xs tracking-[0.12em] uppercase" style={{ fontFamily: 'var(--font-inter)', color: 'var(--stone-warm)' }}>
                        {label}
                      </label>
                      <input
                        type="text"
                        placeholder={placeholder}
                        required
                        className="rounded-sm px-4 py-3 text-sm border outline-none transition-all focus:border-[var(--rose-gold)]"
                        style={{
                          fontFamily: 'var(--font-inter)',
                          color: 'var(--foreground)',
                          borderColor: 'rgba(201,149,108,0.3)',
                          background: 'var(--background)',
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs tracking-[0.12em] uppercase" style={{ fontFamily: 'var(--font-inter)', color: 'var(--stone-warm)' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    required
                    className="rounded-sm px-4 py-3 text-sm border outline-none transition-all focus:border-[var(--rose-gold)]"
                    style={{ fontFamily: 'var(--font-inter)', color: 'var(--foreground)', borderColor: 'rgba(201,149,108,0.3)', background: 'var(--background)' }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-xs tracking-[0.12em] uppercase" style={{ fontFamily: 'var(--font-inter)', color: 'var(--stone-warm)' }}>
                    Attending?
                  </p>
                  <div className="flex gap-3">
                    {[{ val: true, label: 'Joyfully Accepts' }, { val: false, label: 'Regretfully Declines' }].map(({ val, label }) => (
                      <button
                        key={String(val)}
                        type="button"
                        onClick={() => setAttending(val)}
                        className="flex-1 py-3 text-xs tracking-wider uppercase border rounded-sm transition-all"
                        style={{
                          fontFamily: 'var(--font-inter)',
                          background: attending === val ? 'linear-gradient(135deg, var(--rose-gold), var(--deep-rose))' : 'transparent',
                          color: attending === val ? 'white' : 'var(--stone-warm)',
                          borderColor: attending === val ? 'transparent' : 'rgba(201,149,108,0.3)',
                        }}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs tracking-[0.12em] uppercase" style={{ fontFamily: 'var(--font-inter)', color: 'var(--stone-warm)' }}>
                    Dietary Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Any dietary restrictions or allergies?"
                    className="rounded-sm px-4 py-3 text-sm border outline-none transition-all resize-none focus:border-[var(--rose-gold)]"
                    style={{ fontFamily: 'var(--font-inter)', color: 'var(--foreground)', borderColor: 'rgba(201,149,108,0.3)', background: 'var(--background)' }}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 py-4 text-sm tracking-[0.2em] uppercase text-white transition-opacity hover:opacity-90"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    background: 'linear-gradient(135deg, var(--rose-gold), var(--deep-rose))',
                    borderRadius: '2px',
                  }}
                >
                  Send RSVP
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-2xl">
          <ScrollReveal>
            <p className="mb-3 text-center text-xs tracking-[0.4em] uppercase" style={{ fontFamily: 'var(--font-inter)', color: 'var(--rose-gold)' }}>
              Questions
            </p>
            <h2 className="mb-10 text-center text-4xl font-semibold" style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--foreground)' }}>
              FAQ
            </h2>
          </ScrollReveal>
          <div>
            {faqItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <FaqItem q={item.q} a={item.a} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-16 px-6 text-center" style={{ background: 'var(--cream)' }}>
        <ScrollReveal>
          <p className="text-2xl mb-2" style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--foreground)' }}>
            Sophia &amp; Alexander
          </p>
          <p className="text-sm" style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: 'var(--stone-warm)' }}>
            September 20, 2025 · Tuscany, Italy
          </p>
          <p className="mt-6 text-2xl" style={{ color: 'var(--rose-gold)' }}>♥</p>
        </ScrollReveal>
      </footer>
    </div>
  );
}
