import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Strategy() {
  const { t } = useTranslation();

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
        </div>
      </div>

      {/* Golden Circle (Bento Grid Style) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-3 border-t border-ink pt-4">
          <h2 className="font-mono text-xs tracking-widest uppercase text-earth">{t('strategy.golden')}</h2>
        </div>
        
        <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-ink pt-4">
          
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {/* Top Left Card - Dark */}
            <div className="border border-ink/20 rounded-[2rem] p-8 hover:border-earth transition-colors group bg-[#09090B] relative">
              <div className="flex justify-between items-start mb-12">
                <div className="bg-ink text-ink-inverse w-12 h-12 rounded-full flex items-center justify-center font-mono text-lg">
                  <div className="flex flex-wrap w-5 h-5 gap-[2px]">
                     <div className="w-[8px] h-[8px] bg-ink-inverse rounded-sm"></div>
                     <div className="w-[8px] h-[8px] bg-ink-inverse rounded-full"></div>
                     <div className="w-[8px] h-[8px] bg-ink-inverse rounded-bl-lg"></div>
                     <div className="w-[8px] h-[8px] bg-ink-inverse rounded-sm"></div>
                  </div>
                </div>
                <div className="flex gap-4 text-right font-mono text-[8px] uppercase tracking-widest text-ink/70">
                  <div className="text-center"><span className="text-ink text-xs block font-bold mb-1">38</span> Posts</div>
                  <div className="text-center"><span className="text-ink text-xs block font-bold mb-1">3640</span> Followers</div>
                  <div className="text-center"><span className="text-ink text-xs block font-bold mb-1">14</span> Following</div>
                </div>
              </div>
              <h3 className="font-sans font-bold text-[10px] mb-1 uppercase tracking-widest">"FUSION" AGENCY</h3>
              <p className="font-sans font-light text-[10px] leading-relaxed text-ink/70">
                Consulting agency
              </p>
            </div>

            {/* Bottom Left Card - Orange Gradient */}
            <div className="rounded-[2rem] p-8 relative overflow-hidden bg-gradient-to-br from-[#FF5E2E] via-[#aa3514] to-[#09090B] border border-ink/10 h-full flex flex-col justify-center min-h-[400px]">
              <div className="absolute top-8 left-8 flex gap-2 items-center">
                <div className="w-4 h-4 rounded-full border border-ink-inverse flex items-center justify-center"><span className="text-[8px] text-ink-inverse">©</span></div>
                <div className="w-4 h-4 rounded-full bg-ink-inverse"></div>
              </div>
              
              <div className="mt-auto mb-16 relative z-10 text-center md:text-left">
                 <h3 className="font-sans text-3xl mb-4 text-ink-inverse tracking-tighter leading-tight font-light">
                   CONSULTING<br/><span className="font-bold">AGENCY</span>
                 </h3>
                 <p className="font-sans font-light text-[10px] leading-relaxed text-ink-inverse/90 max-w-[200px] mx-auto md:mx-0">
                   Providing clients with high quality consulting services based on a thorough understanding of their needs and goals.
                 </p>
              </div>

              {/* Decorative silhouette circle (simulating the person's shadow) */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-black/80 blur-2xl rounded-full pointer-events-none"></div>
              
              <div className="absolute bottom-6 left-8 right-8 flex justify-between font-mono text-[6px] uppercase tracking-widest text-ink-inverse/60 z-10">
                <span>FUSIONAGENCY©</span>
                <span>FUSIONAGENCY©</span>
                <span>FUSIONAGENCY©</span>
              </div>
            </div>
          </div>

          {/* Right Column - Tall Vertical Gradient */}
          <div className="rounded-[2rem] p-8 border border-ink/10 bg-gradient-to-b from-[#09090B] via-[#2A1108] to-[#FF5E2E] flex flex-col justify-between min-h-[500px] relative overflow-hidden">
             <div className="flex justify-between items-center text-ink-inverse relative z-10">
                <div className="flex flex-wrap w-6 h-6 gap-[2px]">
                   <div className="w-[10px] h-[10px] bg-ink-inverse rounded-sm"></div>
                   <div className="w-[10px] h-[10px] bg-ink-inverse rounded-full"></div>
                   <div className="w-[10px] h-[10px] bg-ink-inverse rounded-bl-lg"></div>
                   <div className="w-[10px] h-[10px] bg-ink-inverse rounded-sm"></div>
                </div>
                <span className="font-mono text-sm font-bold tracking-widest">fusion.</span>
             </div>
             
             <div className="flex flex-col h-full justify-center my-12 relative z-10">
                <h3 className="font-sans font-light text-2xl mb-8 text-ink-inverse uppercase tracking-tighter leading-tight">
                  —RELIABLE<br/><span className="font-bold">PARTNER AND<br/>COMPREHENSIVE SUPPORT</span>
                </h3>
                <p className="font-sans font-light text-[10px] leading-relaxed text-ink-inverse/90 max-w-[220px]">
                  We flexibly adapt to the needs of each client, providing a personalized approach to each project.
                </p>
             </div>
             
             <div className="absolute right-0 top-1/2 -translate-y-1/2 origin-bottom-right pointer-events-none opacity-20 rotate-180" style={{ writingMode: 'vertical-rl' }}>
                <span className="font-sans font-bold text-8xl tracking-widest uppercase text-transparent" style={{ WebkitTextStroke: '1px white' }}>ADAPTABILITY</span>
             </div>

             <div className="flex justify-between items-center text-ink-inverse font-mono text-[7px] uppercase tracking-widest z-10 w-full mt-auto">
                <span>INNOVATIONS</span>
                <span>ADAPTABILITY</span>
                <span>PROFESSIONALISM</span>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
