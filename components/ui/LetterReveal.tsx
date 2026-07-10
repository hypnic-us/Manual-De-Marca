/**
 * LetterReveal
 * ------------
 * Construye una palabra letra por letra: cada carácter sube desde abajo,
 * se enfoca (blur → nítido) y aparece con stagger. Se dispara con `play`
 * para poder encadenar con el fin de la intro.
 *
 * Accesible: aria-label muestra el texto completo; cada letra tiene aria-hidden.
 */
import React from 'react';
import { motion } from 'motion/react';

interface LetterRevealProps {
  text: string;
  play?: boolean;
  stagger?: number;
  delay?: number;
  className?: string;
}

const LetterReveal = ({
  text,
  play = true,
  stagger = 0.045,
  delay = 0,
  className = '',
}: LetterRevealProps) => {
  const letters = Array.from(text);

  return (
    <motion.span
      aria-label={text}
      className={`inline-block ${className}`}
      initial="hidden"
      animate={play ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="inline-block"
          style={{ whiteSpace: 'pre' }}
          variants={{
            hidden:  { opacity: 0, y: '0.5em', filter: 'blur(8px)' },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { type: 'spring', damping: 14, stiffness: 170 },
            },
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default LetterReveal;
