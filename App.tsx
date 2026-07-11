import React from 'react';
import { MotionConfig } from 'motion/react';
import { useTranslation } from 'react-i18next';
import Logo from './components/Logo';
import BackgroundTerrain from './components/BackgroundTerrain';
import Hero from './components/Hero';
import Strategy from './components/Strategy';
import Services from './components/Services';
import VerbalIdentity from './components/VerbalIdentity';
import VisualSystem from './components/VisualSystem';

function Header() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <nav className="sticky top-2 md:top-4 left-0 w-full p-2 md:px-4 flex items-center justify-between z-50 bg-paper/80 backdrop-blur-md border border-ink/10 shadow-sm rounded-full">
      <div className="flex items-center gap-3 shrink-0 pl-2">
        <Logo size={28} color="var(--color-ink)" />
        <span className="hidden sm:block font-mono text-[10px] uppercase tracking-[0.2em] text-ink/70">
          {i18n.language === 'es' ? 'Manual de Marca' : 'Brand Manual'}
        </span>
      </div>
      <button
        onClick={toggleLanguage}
        className="flex items-center justify-center px-4 py-1.5 md:py-2 rounded-full bg-stone hover:bg-ink/5 transition-colors border border-ink/10 font-mono text-[10px] uppercase font-bold text-ink/70"
        title={i18n.language === 'es' ? 'Switch to English' : 'Cambiar a español'}
      >
        {i18n.language === 'es' ? 'ES' : 'EN'}
      </button>
    </nav>
  );
}

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

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BackgroundTerrain />
      <div className="flex bg-transparent p-2 md:p-6 font-sans selection:bg-earth selection:text-white items-start justify-center min-h-screen">
        <div className="w-full max-w-[1600px] min-h-[calc(100vh-1rem)] md:min-h-[calc(100vh-3rem)] bg-transparent relative flex flex-col overflow-clip">
          <Header />
          <main className="flex-1 relative scroll-smooth">
            <div className="px-6 md:px-16 lg:px-24 pb-32 pt-12">
              <Manual />
            </div>
          </main>
        </div>
      </div>
    </MotionConfig>
  );
}
