import React from 'react';
import Logo from './Logo';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t, i18n } = useTranslation();
  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-center relative pt-20">
      {/* Background Graphic matching the reference style */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl flex justify-center items-center -z-10 opacity-90 pointer-events-none">
        <div className="w-[80vw] max-w-[800px] flex items-center justify-center opacity-80 mix-blend-overlay">
          <Logo size="clamp(120px, 20vw, 300px)" color="var(--color-paper)" />
        </div>
        {/* Sharp geometric orange shape to replace the glow, keeping it techy but adhering to brand rules */}
        <div className="absolute right-[10%] top-[20%] w-64 h-64 md:w-96 md:h-96 bg-earth mix-blend-screen" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end h-full w-full max-w-6xl mx-auto">
        <div className="md:col-span-4 space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-ink/60 border-b border-dashed border-ink/20 pb-4">
            {t('hero.est')} <span className="float-right">{t('hero.available')}</span>
          </div>
          <p className="font-mono text-[10px] leading-relaxed text-ink/70 uppercase max-w-xs">
            {t('hero.desc')}
          </p>
        </div>
        
        <div className="md:col-span-4 flex justify-center">
           {/* Center empty space for the "device" or main graphic */}
        </div>

        <div className="md:col-span-4 space-y-4 text-right md:text-left">
          <div className="font-mono text-xs uppercase tracking-widest text-ink/60 border-b border-dashed border-ink/20 pb-4 flex justify-between">
            <span>{t('hero.system')}</span> <span>{t('hero.engineer')}</span>
          </div>
          <ul className="font-mono text-[10px] leading-relaxed text-ink/70 uppercase list-none space-y-1">
            <li>• {t('hero.spaces')}</li>
            <li>• {t('hero.immersive')}</li>
            <li>• {t('hero.creative')}</li>
            <li>• {t('hero.ai_content')}</li>
            <li>• {t('hero.digital_plats')}</li>
            <li>• {t('hero.saas')}</li>
            <li>• {t('hero.end_to_end')}</li>
          </ul>
        </div>
      </div>

      {/* Overlay text */}
      <div className="absolute top-1/3 left-4 md:left-16 max-w-2xl">
        <h1 className="font-serif italic text-4xl md:text-6xl lg:text-7xl leading-tight mb-4 text-ink drop-shadow-lg">
          {i18n.language === 'es' ? t('hero.title_es', 'Potencializa tus productos') : t('hero.title_en', 'Boost your products')}<br />
          <span className="not-italic font-sans font-medium tracking-tight">{i18n.language === 'es' ? t('hero.subtitle_es', 'con el uso de tecnología.') : t('hero.subtitle_en', 'with the use of technology.')}</span>
        </h1>
        <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-ink/80 mt-6 max-w-lg border-l-2 border-earth pl-4">
          {i18n.language === 'es' ? t('hero.arch_title_es', 'Servicios arquitectónicos') : t('hero.arch_title_en', 'Architectural services')}<br/>
          <span className="text-ink/60">{i18n.language === 'es' ? t('hero.arch_subtitle_es', 'usando tecnología inmersiva para disrumpir la industria.') : t('hero.arch_subtitle_en', 'using immersive tech to disrupt the industry.')}</span>
        </p>
      </div>
    </section>
  );
}
