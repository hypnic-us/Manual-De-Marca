/**
 * AnimatedCounter
 * ---------------
 * Anima un número desde `from` hasta `to` cuando el elemento entra al viewport.
 * Usa spring easing para un movimiento fluido tipo Apple.
 */
import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useInView, animate } from 'motion/react';

interface AnimatedCounterProps {
  from: number;
  to: number;
}

const AnimatedCounter = ({ from, to }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px' });
  const count = useMotionValue(from);

  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toString().padStart(2, '0')
  );

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [inView, count, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default AnimatedCounter;
