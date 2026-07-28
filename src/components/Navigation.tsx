'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart } from 'lucide-react';

const links = [
  { href: '/poster',  label: 'Our Story' },
  { href: '/gallery', label: 'Gallery'   },
  { href: '/wedding', label: 'Wedding'   },
];

export function Navigation() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const shadow = useTransform(scrollY, [0, 80], ['0 0 0 0 transparent', '0 4px 30px rgba(44,24,16,0.08)']);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{ boxShadow: shadow }}
    >
      <motion.div
        className="absolute inset-0 backdrop-blur-md"
        style={{
          opacity: bgOpacity,
          backgroundColor: 'rgba(253, 250, 247, 0.85)',
        }}
      />
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/poster" className="flex items-center gap-2 group">
          <Heart
            size={16}
            className="text-rose-gold fill-rose-gold transition-transform group-hover:scale-125"
            style={{ color: 'var(--rose-gold)', fill: 'var(--rose-gold)' }}
          />
          <span
            className="font-display text-sm font-semibold tracking-[0.2em] uppercase"
            style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--foreground)' }}
          >
            S &amp; A
          </span>
        </Link>

        <ul className="flex items-center gap-8">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="relative text-sm tracking-widest uppercase transition-colors"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    color: active ? 'var(--rose-gold)' : 'var(--stone-warm)',
                    letterSpacing: '0.12em',
                  }}
                >
                  {label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px"
                      style={{ background: 'var(--rose-gold)' }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
}
