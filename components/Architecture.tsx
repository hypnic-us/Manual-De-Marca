import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Architecture() {
  const { t, i18n } = useTranslation();

  return (
    <section id="architecture" className="space-y-16 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-3 border-t border-ink pt-4">
          <h2 className="font-mono text-xs tracking-widest uppercase text-earth">{t('architecture.title')}</h2>
        </div>
        <div className="md:col-span-9 space-y-8 border-t border-ink pt-4">
          <h3 className="font-serif text-3xl md:text-5xl leading-tight">
            {t('architecture.headline_1')}<br />
            <span className="text-earth italic">{t('architecture.headline_2')}</span>
          </h3>
          <p className="font-sans font-light text-sm md:text-base leading-relaxed max-w-3xl">
            {t('architecture.lead')}
          </p>
          <p className="font-sans font-light text-sm leading-relaxed text-ink/70 max-w-3xl">
            {t('architecture.note')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            <div className="bg-ink text-ink-inverse rounded-[2rem] p-8 md:p-10 border border-ink">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-inverse/60 block mb-4">{t('architecture.b2b_channel')}</span>
              <span className="font-serif text-2xl block mb-4"><em className="italic">{t('architecture.b2b_first')}</em> <strong>{t('architecture.b2b_last')}</strong></span>
              <p className="font-sans font-light text-sm leading-relaxed text-ink-inverse/85">{t('architecture.b2b_desc')}</p>
            </div>
            <div className="bg-stone rounded-[2rem] p-8 md:p-10 border border-ink/10">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink/50 block mb-4">{t('architecture.b2c_channel')}</span>
              <span className="font-serif text-2xl block mb-4"><em className="italic">{t('architecture.b2c_first')}</em> <strong>{t('architecture.b2c_last')}</strong></span>
              <p className="font-sans font-light text-sm leading-relaxed text-ink/80">{t('architecture.b2c_desc')}</p>
            </div>
          </div>

          <div className="divide-y divide-ink/10 border-t border-ink/10 mt-4 max-w-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-3 sm:gap-8 py-5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-earth">{t('architecture.naming_b2b_label')}</span>
              <p className="font-sans font-light text-sm">{t('architecture.naming_b2b')}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-3 sm:gap-8 py-5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-earth">{t('architecture.naming_b2c_label')}</span>
              <p className="font-sans font-light text-sm">{t('architecture.naming_b2c')}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-3 sm:gap-8 py-5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-earth">{t('architecture.rule_label')}</span>
              <p className="font-sans font-light text-sm">{t('architecture.rule')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
