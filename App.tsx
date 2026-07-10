import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, MotionConfig } from 'motion/react';
import { useTranslation } from 'react-i18next';
import IntroAnimation from './components/IntroAnimation';

// Components
import TopNav from './components/TopNav';
import BackgroundTerrain from './components/BackgroundTerrain';
import Landing from './components/Landing';
import Hero from './components/Hero';
import Strategy from './components/Strategy';
import Services from './components/Services';
import VerbalIdentity from './components/VerbalIdentity';
import VisualSystem from './components/VisualSystem';
import SystemPage from './components/SystemPage';
import ProjectCaseStudy from './components/ProjectCaseStudy';
import Me from './components/Me';
import CookieBanner from './components/CookieBanner';

function Manual() {
  return (
    <div className="max-w-6xl mx-auto space-y-40 animate-in fade-in duration-700">
      <Hero />
      <Strategy />
      <Services />
      <VerbalIdentity />
      <VisualSystem />
    </div>
  );
}

function MainContent() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <main className="flex-1 relative scroll-smooth">
      <div className="px-6 md:px-16 lg:px-24 pb-32">
        
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/me" element={<Me />} />
          <Route path="/manual" element={<Manual />} />
          <Route path="/system/:id" element={<SystemPage />} />
          <Route path="/project/:id" element={<ProjectCaseStudy />} />
        </Routes>
        
        {/* Footer / Contact */}
        <motion.footer 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-ink/10 pt-16 mt-32 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8"
        >
          <div className="w-full md:w-1/2">
            <h2 className="font-serif text-3xl mb-4">
              {t('nav.contact')}
            </h2>
            <div className="flex flex-col gap-3 mb-8">
              <a href="mailto:juan@hypnic.us" className="font-sans text-xl tracking-tight hover:text-earth transition-colors break-all">
                juan@hypnic.us
              </a>
              <a
                href="https://wa.me/573193774860"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm tracking-widest uppercase hover:text-earth transition-colors"
              >
                {/* WhatsApp icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L.057 23.486a.5.5 0 00.611.61l5.534-1.446A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 01-5.17-1.444l-.37-.22-3.833 1.002 1.028-3.736-.242-.384A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                +57 319 377 4860
              </a>
            </div>
            <form 
              className="flex flex-col gap-6 w-full max-w-md"
              onSubmit={(e) => { e.preventDefault(); alert(i18n.language === 'es' ? '¡Gracias! Nos pondremos en contacto pronto.' : 'Thank you! We will get in touch soon.'); }}
            >
              <div className="flex flex-col">
                <label className="font-mono text-[10px] uppercase tracking-widest text-ink/70 mb-2">
                  {i18n.language === 'es' ? 'Mi problema es:' : 'My problem is:'}
                </label>
                <textarea 
                  required
                  className="bg-transparent border-b border-ink/20 focus:border-earth outline-none py-2 text-sm resize-none h-16 transition-colors text-ink" 
                  placeholder={i18n.language === 'es' ? 'Describe tu reto...' : 'Describe your challenge...'}
                ></textarea>
              </div>
              <div className="flex flex-col">
                <label className="font-mono text-[10px] uppercase tracking-widest text-ink/70 mb-2">
                  {i18n.language === 'es' ? 'Mi marca es:' : 'My brand is:'}
                </label>
                <input 
                  type="text" 
                  required
                  className="bg-transparent border-b border-ink/20 focus:border-earth outline-none py-2 text-sm transition-colors text-ink" 
                  placeholder={i18n.language === 'es' ? 'Nombre de tu empresa' : 'Your company name'}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-mono text-[10px] uppercase tracking-widest text-ink/70 mb-2">
                  {i18n.language === 'es' ? 'Mi correo es:' : 'My email is:'}
                </label>
                <input 
                  type="email" 
                  required
                  className="bg-transparent border-b border-ink/20 focus:border-earth outline-none py-2 text-sm transition-colors text-ink" 
                  placeholder="tu@email.com" 
                />
              </div>
              <button 
                type="submit" 
                className="mt-4 bg-earth text-ink-inverse font-mono text-[10px] sm:text-xs uppercase tracking-widest py-4 px-6 rounded-full hover:bg-earth/90 transition-colors self-start"
              >
                {i18n.language === 'es' ? '¡Te daremos una propuesta!' : 'We will give you a proposal!'}
              </button>
            </form>
          </div>
          <div className="text-left md:text-right flex flex-col justify-end h-full mt-auto">
            <p className="font-mono text-xs uppercase tracking-widest text-ink/70 mb-1">Juan Manuel Montoya</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-4">{t('nav.engineer')}</p>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}

export default function App() {
  const [introComplete, setIntroComplete] = useState(() => {
    // ?intro en la URL fuerza la animación aunque ya se haya visto en esta sesión
    if (new URLSearchParams(window.location.search).has('intro')) return false;
    return sessionStorage.getItem('intro_seen') === 'true';
  });

  const handleIntroComplete = () => {
    sessionStorage.setItem('intro_seen', 'true');
    setIntroComplete(true);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    if (!introComplete) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [introComplete]);

  return (
    <MotionConfig reducedMotion="user">
      <Router>
        {!introComplete && (
          <IntroAnimation onComplete={handleIntroComplete} />
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: introComplete ? 1 : 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <BackgroundTerrain />
          <CookieBanner />
          <div className="flex bg-transparent p-2 md:p-6 font-sans selection:bg-earth selection:text-white items-start justify-center min-h-screen">
            <div className="w-full max-w-[1600px] min-h-[calc(100vh-1rem)] md:min-h-[calc(100vh-3rem)] bg-transparent relative flex flex-col overflow-clip">
              <TopNav />
              <MainContent />
            </div>
          </div>
        </motion.div>
      </Router>
    </MotionConfig>
  );
}
