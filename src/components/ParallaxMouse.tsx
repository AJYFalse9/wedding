'use client';

import { createContext, useContext, useEffect, useRef, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';

interface ParallaxContextValue {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

const ParallaxContext = createContext<ParallaxContextValue | null>(null);

export function ParallaxProvider({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    const handleLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseleave', handleLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <ParallaxContext.Provider value={{ mouseX, mouseY }}>
      <div ref={containerRef} className={className}>
        {children}
      </div>
    </ParallaxContext.Provider>
  );
}

function ParallaxLayerInner({
  children,
  depth,
  className,
  mouseX,
  mouseY,
}: {
  children: ReactNode;
  depth: number;
  className?: string;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  const springConfig = { stiffness: 80, damping: 25, mass: 0.6 };
  const x = useSpring(useTransform(mouseX, [-1, 1], [-depth, depth]), springConfig);
  const y = useSpring(useTransform(mouseY, [-1, 1], [-depth * 0.65, depth * 0.65]), springConfig);

  return (
    <motion.div style={{ x, y }} className={className}>
      {children}
    </motion.div>
  );
}

export function ParallaxLayer({
  children,
  depth = 20,
  className,
}: {
  children: ReactNode;
  depth?: number;
  className?: string;
}) {
  const ctx = useContext(ParallaxContext);
  const fallbackX = useMotionValue(0);
  const fallbackY = useMotionValue(0);

  const mouseX = ctx?.mouseX ?? fallbackX;
  const mouseY = ctx?.mouseY ?? fallbackY;

  return (
    <ParallaxLayerInner mouseX={mouseX} mouseY={mouseY} depth={depth} className={className}>
      {children}
    </ParallaxLayerInner>
  );
}
