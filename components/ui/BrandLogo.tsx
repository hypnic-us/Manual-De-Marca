/**
 * BrandLogo
 * ---------
 * Tarjeta de logo de marca con animación de entrada blur→nítido.
 * El índice `index` controla el delay escalonado del stagger.
 */
import React from 'react';
import { motion } from 'motion/react';

interface BrandLogoProps {
  name: string;
  src: string;
  index?: number;
}

const BrandLogo = ({ name, src, index = 0 }: BrandLogoProps) => {
  return (
    <div className="flex items-center justify-center w-full aspect-[3/2] bg-gradient-to-br from-neutral-200 to-neutral-400 rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-white/20">
      <motion.img
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.05 }}
        src={src}
        alt={name}
        className="h-10 md:h-16 w-full max-w-[120px] md:max-w-[160px] object-contain opacity-80 hover:opacity-100 transition-opacity drop-shadow-sm"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default BrandLogo;
