'use client';

import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';

interface Props {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
}

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export function ScrollReveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-8% 0px' });

  const hiddenState = {
    opacity: 0,
    y: direction === 'up' ? 48 : direction === 'down' ? -48 : 0,
    x: direction === 'left' ? 48 : direction === 'right' ? -48 : 0,
    scale: direction === 'scale' ? 0.9 : 1,
  };

  return (
    <motion.div
      ref={ref}
      initial={hiddenState}
      animate={isInView ? { opacity: 1, y: 0, x: 0, scale: 1 } : hiddenState}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
