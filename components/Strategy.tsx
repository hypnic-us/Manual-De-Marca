import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Strategy() {
  const { t, i18n } = useTranslation();

  const goldenCircle = [
    { q: 'Why', p: `${t('strategy.b_seen')} ${t('strategy.every')}` },
    { q: 'How', p: `${t('strategy.imag')} ${t('strategy.i_design')}` },
    { q: 'What', p: `${t('strategy.spaces_c')} ${t('strategy.eng_end')}` },
  ];

  return (
    <section id="strategy" className="space-y-24 pt-20">
      {/* Purpose & Positioning */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
        <div className="md:col-span-3 border-t border-ink pt-4">
          <h2 className="font-mono text-xs tracking-widest uppercase text-earth">{t('strategy.purpose')}</h2>
        </div>
        <div className="md:col-span-9 space-y-8 border-t border-ink pt-4">
          <h3 className="font-serif text-3xl md:text-5xl leading-tight">
            {t('strategy.brands_live_1')}<br />
            {t('strategy.brands_live_2')}<br />
            {t('strategy.brands_live_3')}<br />
            <span className="text-earth italic">{t('strategy.brands_live_4')}</span>
          </h3>

          <div className="w-full h-[1px] bg-ink/20 border-b border-dashed border-ink/30"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="font-sans font-light text-sm md:text-base leading-relaxed">
              {t('strategy.founders')}
            </p>
            <div className="bg-stone p-6 rounded-2xl border border-ink/10">
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-4">{t('strategy.diff')}</p>
              <p className="font-sans font-medium text-sm">
                {t('strategy.diff_text')}
                <br/><br/>
                {t('strategy.diff_text_2')}
              </p>
            </div>
          </div>

          <p className="font-sans font-light text-sm leading-relaxed text-ink/70 max-w-3xl">
            {t('strategy.story')}
          </p>
        </div>
      </div>

      {/* Golden Circle — Why / How / What */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-3 border-t border-ink pt-4">
          <h2 className="font-mono text-xs tracking-widest uppercase text-earth">{t('strategy.golden')}</h2>
        </div>

        <div className="md:col-span-9 border-t border-ink pt-4">
          <div className="divide-y divide-ink/10">
            {goldenCircle.map((row) => (
              <div key={row.q} className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4 sm:gap-8 py-7 items-baseline">
                <span className="font-serif italic text-2xl text-earth">{row.q}</span>
                <p className="font-sans font-light text-base md:text-lg leading-relaxed max-w-2xl">{row.p}</p>
              </div>
            ))}
          </div>

          {/* Anchor phrases */}
          <div className="mt-16">
            <span className="font-mono text-[10px] tracking-widest uppercase text-earth block mb-5">{t('strategy.anchor_label')}</span>
            <p className="font-serif text-2xl md:text-4xl leading-snug max-w-3xl">
              {t('strategy.anchor_1')} <em className="text-earth not-italic">{t('strategy.anchor_1b')}</em><br/>
              {t('strategy.anchor_2')}<br/>
              {t('strategy.anchor_3')} <em className="text-earth not-italic">{t('strategy.anchor_3b')}</em>
            </p>
          </div>

          {/* Taglines & archetypes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-10 border-t border-ink/10">
            <div className="border-l-2 border-earth pl-6">
              <span className="font-serif italic text-xl block mb-3">{i18n.language === 'es' ? 'Donde la imaginación se encuentra con la ingeniería.' : 'Where imagination meets engineering.'}</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink/50 block mb-2">{i18n.language === 'es' ? 'Eslogan ancla' : 'Anchor tagline'}</span>
              <p className="font-sans font-light text-xs text-ink/70">{i18n.language === 'es' ? 'Para cierres de post, claims, banners y firmas. Nunca como hashtag.' : 'For post closings, claims, banners, and signatures. Never as a hashtag.'}</p>
            </div>
            <div className="border-l-2 border-earth pl-6">
              <span className="font-serif italic text-xl block mb-3">{i18n.language === 'es' ? 'De principio a fin, una sola mente.' : 'End to end, one mind.'}</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink/50 block mb-2">{i18n.language === 'es' ? 'Discurso de ascensor' : 'Elevator line'}</span>
              <p className="font-sans font-light text-xs text-ink/70">{i18n.language === 'es' ? 'La promesa condensada. Para bios, decks y presentaciones.' : 'The promise, condensed. For bios, decks, and presentations.'}</p>
            </div>
            <div className="border-l-2 border-earth pl-6">
              <span className="font-sans font-medium text-xl block mb-3">Explorer · Ruler</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink/50 block mb-2">{i18n.language === 'es' ? 'Arquetipos' : 'Archetypes'}</span>
              <p className="font-sans font-light text-xs text-ink/70">{i18n.language === 'es' ? 'El Explorer que construye lo que encuentra. El Ruler que va primero. El trabajo es complejo; la comunicación es simple.' : 'The Explorer who builds what they find. The Ruler who goes first. The work is complex; the communication is simple.'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
