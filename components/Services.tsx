import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t, i18n } = useTranslation();
  
  const services = [
    {
      num: "01",
      title: i18n.language === 'es' ? "Espacios phygital" : "Phygital spaces",
      desc: i18n.language === 'es' ? "Retail, showrooms, experiencias inmersivas. Donde el hardware, software y diseño convergen." : "Retail, showrooms, immersive experiences. Where hardware, software, and design converge."
    },
    {
      num: "02",
      title: i18n.language === 'es' ? "Contenido y campañas phygital" : "Phygital content & campaigns",
      desc: i18n.language === 'es' ? "Dirección creativa, contenido vía IA, curaduría de marca. De lo físico a lo digital, como un solo lenguaje visual." : "Creative direction, AI-driven content, brand curation. Physical through digital, as one visual language."
    },
    {
      num: "03",
      title: i18n.language === 'es' ? "Ingeniería de producto digital" : "Digital product engineering",
      desc: i18n.language === 'es' ? "Plataformas, SaaS, herramientas. Producto digital puro, de principio a fin." : "Platforms, SaaS, embedded tools. Pure digital product, end to end."
    }
  ];

  return (
    <section id="services" className="space-y-16 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-3 border-t border-ink pt-4">
          <h2 className="font-mono text-xs tracking-widest uppercase text-earth">{t('services.title')}</h2>
        </div>
        <div className="md:col-span-9 border-t border-ink pt-4">
          <h3 className="font-serif italic text-4xl md:text-5xl mb-16">{t('services.subtitle')}</h3>
          
          <div className="grid grid-cols-1 gap-4">
            {services.map((s, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 bg-stone border border-ink/10 rounded-[2rem] p-8 hover:border-earth transition-colors group">
                <div className="font-mono font-bold text-4xl md:text-5xl text-ink/20 group-hover:text-earth transition-colors">
                  {s.num}
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h4 className="font-serif text-2xl mb-2">{s.title}</h4>
                  <p className="font-sans font-light text-sm text-ink/70 max-w-md leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-dashed border-ink/20 flex items-center justify-center group-hover:border-earth group-hover:text-earth transition-colors">
                    <span className="font-mono text-xl">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Audience Block */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mt-24">
        <div className="md:col-span-3"></div>
        <div className="md:col-span-9 bg-ink text-ink-inverse rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 font-sans font-bold text-[150px] text-ink-inverse/5 leading-none">
            GLOBAL
          </div>
          <div className="relative z-10">
            <div className="inline-block border border-white/20 rounded-full px-4 py-1 mb-6">
              <h4 className="font-mono text-[10px] tracking-widest uppercase text-ink-inverse/70">{t('services.target_aud')}</h4>
            </div>
            <p className="font-serif text-2xl md:text-3xl mb-4 max-w-2xl">
              {i18n.language === 'es' ? "Fundadores y CEOs de marcas que existen en ambos mundos — o necesitan hacerlo." : "Founders and CEOs of brands that exist in both worlds — or need to."}
            </p>
            <p className="font-mono text-xs text-earth mb-8">
              {i18n.language === 'es' ? "GLOBAL. PRIORIDAD INGLÉS. SEIS MERCADOS." : "GLOBAL. ENGLISH-FIRST. SIX MARKETS."}
            </p>
            <div className="flex flex-wrap gap-2">
              {['Colombia', 'Mexico', 'USA', 'France', 'Spain', 'Middle East'].map(market => (
                <span key={market} className="bg-stone/10 px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-wider">
                  {i18n.language === 'es' ? (market === 'Spain' ? 'España' : market === 'Middle East' ? 'Medio Oriente' : market === 'France' ? 'Francia' : market === 'USA' ? 'EE. UU.' : market) : market}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
