import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function SystemPage() {
  const { id } = useParams();
  const { i18n, t } = useTranslation();

  const systemIds: Record<string, string> = {
    "01": "amplify",
    "02": "echo",
    "03": "stage"
  };

  const sysKey = id ? systemIds[id] : null;

  if (!sysKey) {
    return <div>System not found.</div>;
  }

  const sysData = t(`systems.${sysKey}`, { returnObjects: true }) as any;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-12 pb-32"
    >
      {/* Structural Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 border-t-2 border-ink pt-4">
        <div className="md:col-span-3">
          <Link 
            to="/" 
            className="font-mono text-[10px] uppercase tracking-widest text-ink/50 hover:text-earth transition-colors flex items-center gap-2"
          >
            ← {i18n.language === 'es' ? "Volver" : "Return Home"}
          </Link>
        </div>
        <div className="md:col-span-9 flex justify-between items-end">
          <h1 className="font-mono text-xs tracking-widest uppercase text-earth">
            {sysKey.toUpperCase()}
          </h1>
          <div className="font-mono text-[8px] uppercase tracking-widest text-ink/40" style={{ writingMode: 'vertical-rl' }}>
            REF_2026_{id}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="mb-24">
        <div className="flex items-baseline space-x-6 mb-8">
          <span className="font-sans font-bold text-[15vw] md:text-[12rem] tracking-tighter leading-none text-ink">
            {sysKey}
          </span>
          <div className="w-full h-2 bg-ink/20"></div>
        </div>
        <h2 className="font-serif italic text-3xl md:text-5xl max-w-4xl text-ink leading-tight">
          {sysData.hero}
        </h2>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        
        {/* Left Column Structure */}
        <div className="md:col-span-4 space-y-16">
          <div className="border-t border-ink/20 pt-6">
            <h3 className="font-mono text-[10px] tracking-widest uppercase text-ink/50 mb-6">
              {sysData.intro_title}
            </h3>
            <div className="font-sans font-light text-xl md:text-2xl leading-relaxed whitespace-pre-wrap text-ink">
              {sysData.intro}
            </div>
          </div>
        </div>

        {/* Right Column Structure */}
        <div className="md:col-span-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            
            <div className="border-t border-ink/20 pt-6">
              <h3 className="font-mono text-xs tracking-widest uppercase text-earth mb-6">
                {sysData.how}
              </h3>
              <p className="font-sans text-base text-ink/80 leading-relaxed whitespace-pre-wrap">
                {sysData.how_text}
              </p>
            </div>

            <div className="border-t border-ink/20 pt-6">
              <h3 className="font-mono text-xs tracking-widest uppercase text-earth mb-6">
                {sysData.when}
              </h3>
              <p className="font-sans text-base text-ink/80 leading-relaxed whitespace-pre-wrap">
                {sysData.when_text}
              </p>
            </div>

          </div>

          <div className="bg-stone border border-ink/10 rounded-[2rem] p-8 md:p-12">
            <h3 className="font-mono text-xs tracking-widest uppercase text-ink mb-6">
              {sysData.deliver}
            </h3>
            <p className="font-serif italic text-2xl md:text-3xl max-w-2xl text-ink leading-tight mb-12">
              {sysData.deliver_text}
            </p>
            
            <div className="w-full h-[1px] bg-ink/10 mb-8"></div>
            
            <p className="font-mono text-[10px] tracking-widest uppercase text-ink/60 max-w-sm">
              {sysData.closing}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
