import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function CookieBanner() {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a slight delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50, transition: { duration: 0.3 } }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-stone-900 text-stone-100 p-6 md:p-8 border border-stone-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden backdrop-blur-md bg-opacity-95">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-earth/5 pointer-events-none" />
            
            <div className="flex-1 relative z-10">
              <h3 className="font-serif text-xl mb-2 text-white">
                {i18n.language === 'es' ? 'Sobre el uso de cookies' : 'About cookies'}
              </h3>
              <p className="font-sans text-sm text-stone-400 leading-relaxed max-w-2xl">
                {i18n.language === 'es' 
                  ? 'Utilizamos cookies (y tecnologías similares) de análisis para comprender cómo interactúas con nuestra web y mejorar tu experiencia. Al hacer clic en "Aceptar", consientes el uso de estas cookies. Puedes rechazarlas si lo prefieres.' 
                  : 'We use analytics cookies (and similar technologies) to understand how you interact with our website and improve your experience. By clicking "Accept", you consent to the use of these cookies. You can decline them if you prefer.'}
              </p>
            </div>
            
            <div className="flex flex-row md:flex-col gap-3 w-full md:w-auto shrink-0 relative z-10">
              <button 
                onClick={handleAccept}
                className="flex-1 md:flex-none bg-earth text-ink-inverse hover:bg-earth/90 font-mono text-xs uppercase tracking-widest py-3 px-6 transition-colors border border-earth hover:border-earth/90"
              >
                {i18n.language === 'es' ? 'Aceptar' : 'Accept'}
              </button>
              <button 
                onClick={handleDecline}
                className="flex-1 md:flex-none bg-transparent hover:bg-stone-800 text-stone-300 hover:text-white font-mono text-xs uppercase tracking-widest py-3 px-6 transition-colors border border-stone-700 hover:border-stone-500"
              >
                {i18n.language === 'es' ? 'Rechazar' : 'Decline'}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
