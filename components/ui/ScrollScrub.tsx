/**
 * ScrollScrub
 * -----------
 * Wrapper de parallax scrubbing: la opacidad y posición siguen el scroll
 * de forma reversible (estilo Apple — el contenido se "toca" con el dedo).
 *
 * Props:
 *  - y: distancia vertical inicial en px (por defecto 110)
 *  - scale: escala inicial (por defecto 1 = sin escala)
 *  - blur: blur inicial en px (por defecto 0 = sin blur)
 *  - endOffset: cuándo termina el scrub en referencia al viewport
 */
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ScrollScrubProps {
  children: React.ReactNode;
  className?: string;
  y?: number;
  scale?: number;
  blur?: number;
  endOffset?: string;
}

const ScrollScrub = ({
  children,
  className = '',
  y = 110,
  scale = 1,
  blur = 0,
  endOffset = 'start 0.3',
}: ScrollScrubProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 1', endOffset as any],
  });

  const opacity  = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const yT       = useTransform(scrollYProgress, [0, 1], [y, 0]);
  const scaleT   = useTransform(scrollYProgress, [0, 1], [scale, 1]);
  const filter   = useTransform(scrollYProgress, [0, 0.8], [`blur(${blur}px)`, 'blur(0px)']);

  const style = blur
    ? { opacity, y: yT, scale: scaleT, filter }
    : { opacity, y: yT, scale: scaleT };

  return (
    <motion.div ref={ref} style={style} className={className}>
      {children}
    </motion.div>
  );
};

export default ScrollScrub;
