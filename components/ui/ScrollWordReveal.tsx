/**
 * ScrollWordReveal
 * ----------------
 * Revela un texto palabra por palabra con stagger + efecto "motion trail":
 * cada palabra tiene fantasmas desenfocados que se desplazan horizontalmente,
 * creando una sensación de velocidad tipográfica / vibración cinética.
 *
 * Props:
 *  - text: frase principal (palabras separadas por espacio)
 *  - highlight: frase secundaria con contraste tipográfico diferente
 */
import React from 'react';
import { motion } from 'motion/react';

interface ScrollWordRevealProps {
  text: string;
  highlight: string;
}

/** Sub-componente interno: fantasmas de motion-blur detrás de cada palabra */
const MotionTrailText = ({ word }: { word: string }) => (
  <span className="relative inline-block whitespace-nowrap">
    <span className="relative z-10">{word}</span>

    {/* Estela 1: movimiento horizontal suave */}
    <motion.span
      animate={{
        x: ['0%', '8%', '0%', '-8%', '0%'],
        opacity: [0.4, 0.8, 0.4, 0.8, 0.4],
        filter: ['blur(4px)', 'blur(12px)', 'blur(4px)', 'blur(12px)', 'blur(4px)'],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute top-0 left-0 origin-center select-none scale-x-110 pointer-events-none text-white/90"
      aria-hidden="true"
    >
      {word}
    </motion.span>

    {/* Estela 2: movimiento más amplio con overlay */}
    <motion.span
      animate={{
        x: ['0%', '-15%', '0%', '15%', '0%'],
        opacity: [0.2, 0.5, 0.2, 0.5, 0.2],
        filter: ['blur(8px)', 'blur(24px)', 'blur(8px)', 'blur(24px)', 'blur(8px)'],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      className="absolute top-0 left-0 origin-center select-none scale-x-150 pointer-events-none mix-blend-overlay text-white"
      aria-hidden="true"
    >
      {word}
    </motion.span>

    {/* Destello horizontal parpadeante (color earth) */}
    <motion.span
      animate={{
        x: ['-20%', '20%', '-10%', '30%', '-20%'],
        opacity: [0, 0.4, 0.1, 0.5, 0],
        filter: ['blur(10px)', 'blur(30px)', 'blur(15px)'],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      className="absolute top-0 left-0 origin-center select-none scale-x-150 scale-y-75 pointer-events-none mix-blend-screen text-earth"
      aria-hidden="true"
      style={{ transformOrigin: 'center' }}
    >
      {word}
    </motion.span>
  </span>
);

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const child = {
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring' as const, damping: 25, stiffness: 60 },
  },
  hidden: { opacity: 0, y: 15, filter: 'blur(4px)' },
};

/** Una sola familia tipográfica (sans): contraste por grosor e italic */
const getWordStyle = (word: string, index: number, isHighlight: boolean): string => {
  if (isHighlight) {
    return index % 2 === 1
      ? 'font-sans font-light italic normal-case text-[0.9em] text-white/85'
      : 'font-sans font-black uppercase tracking-tighter text-[0.8em] md:text-[0.85em]';
  }
  return index % 3 === 0
    ? 'font-sans font-light italic normal-case text-[0.9em] text-white/75'
    : 'font-sans font-bold uppercase tracking-tighter text-[0.8em] md:text-[0.85em]';
};

const ScrollWordReveal = ({ text, highlight }: ScrollWordRevealProps) => {
  const words = text.split(' ');
  const highlightWords = highlight.split(' ');

  return (
    <motion.div
      className="text-[1.1rem] sm:text-2xl md:text-3xl lg:text-[3rem] leading-[1.3] md:leading-[1.15] text-white flex flex-col justify-center items-center w-full max-w-5xl mx-auto text-center pb-4 md:pb-8 relative"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Frase principal */}
      <div className="flex flex-wrap justify-center items-baseline gap-x-1.5 md:gap-x-4 gap-y-1.5 md:gap-y-3 relative z-10">
        {words.map((word, index) => (
          <motion.span
            variants={child}
            key={index}
            className={`inline-block ${getWordStyle(word, index, false)}`}
          >
            <MotionTrailText word={word} />
          </motion.span>
        ))}
      </div>

      {/* Frase de highlight con contraste tipográfico invertido */}
      <div className="flex flex-wrap justify-center items-baseline gap-x-1.5 md:gap-x-4 gap-y-1.5 md:gap-y-3 mt-4 md:mt-8 text-white/90 relative z-10">
        {highlightWords.map((word, index) => (
          <motion.span
            variants={child}
            key={`h-${index}`}
            className={`inline-block text-white ${getWordStyle(word, index, true)}`}
          >
            <MotionTrailText word={word} />
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default ScrollWordReveal;
