import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { projectsData } from '../data/projects';

export default function ProjectCaseStudy() {
  const { id } = useParams();
  const { i18n } = useTranslation();
  
  const project = projectsData.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center">
        <h1 className="font-serif text-4xl mb-4">Project not found</h1>
        <Link to="/" className="text-earth underline hover:opacity-80 transition-opacity">
          Return to home
        </Link>
      </div>
    );
  }

  // Use the detailed case study data if available, fallback to basic info
  const study = project.caseStudy;

  if (!study) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center">
        <h1 className="font-serif text-4xl mb-4">Case study incoming...</h1>
        <p className="font-mono text-sm uppercase tracking-widest text-ink/60 mb-8">{project.name}</p>
        <Link to="/" className="text-earth hover:opacity-80 transition-opacity flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
          ← Back to work
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-12 pb-32"
    >
      {/* 1. Identification Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-t-2 border-ink pt-4 gap-6">
        <div className="w-full md:w-auto">
          <Link 
            to="/" 
            className="font-mono text-[10px] uppercase tracking-widest text-ink/50 hover:text-earth transition-colors flex items-center gap-2 mb-8 md:mb-12"
          >
            ← {i18n.language === 'es' ? "Volver al portafolio" : "Back to work"}
          </Link>
          <div className="font-mono text-xs tracking-widest uppercase text-earth mb-2">
            {study.client} — {study.year}
          </div>
          <h1 className="font-serif italic text-4xl md:text-6xl max-w-3xl leading-tight">
            {study.title}
          </h1>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-1 gap-x-8 gap-y-4 md:text-right font-mono text-[10px] uppercase tracking-widest text-ink/70">
          <div>
            <span className="text-ink/40 block mb-1">Location</span>
            {study.location}
          </div>
          <div>
            <span className="text-ink/40 block mb-1">Sector</span>
            {study.sector}
          </div>
          <div>
            <span className="text-ink/40 block mb-1">Service</span>
            {study.service}
          </div>
          <div>
            <span className="text-ink/40 block mb-1">Role</span>
            {study.role}
          </div>
        </div>
      </div>

      {/* Hero Image (Tratamiento: cálido apagado espacios, desaturado producto. Nunca saturado) */}
      <div className="w-full aspect-video md:aspect-[21/9] bg-stone rounded-2xl md:rounded-[2rem] overflow-hidden mb-24 border border-ink/10 relative">
        <img 
          src={study.images[0] || project.thumb} 
          alt={study.title} 
          className="w-full h-full object-cover filter saturate-50 contrast-125"
        />
        {/* Overlay subtle grain or tint if needed */}
        <div className="absolute inset-0 bg-paper/10 mix-blend-multiply"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        {/* Left Column Structure */}
        <div className="md:col-span-4 space-y-16">
          <div className="border-t border-ink/20 pt-6 sticky top-24">
            <h3 className="font-mono text-[10px] tracking-widest uppercase text-ink/50 mb-6">
              The Goal
            </h3>
            <div className="font-sans font-medium text-lg leading-relaxed mb-6">
              {study.goal_context}
            </div>
            <ul className="space-y-3 font-sans font-light text-sm text-ink/80">
              {study.challenges.map((chal, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-earth">—</span> {chal}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column Structure */}
        <div className="md:col-span-8 space-y-24">
          
          {/* Achievements / Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 border-t border-ink/20 pt-6">
            {study.metrics.map((metric, i) => (
              <div key={i}>
                <div className="font-sans font-bold text-4xl md:text-5xl tracking-tighter mb-2 text-ink">
                  {metric.value}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink/60">
                  {metric.label}
                </div>
              </div>
            ))}
            <div className="sm:col-span-2 md:col-span-1">
              <div className="font-mono text-[10px] uppercase tracking-widest text-earth mb-2">
                Milestone
              </div>
              <div className="font-serif italic text-lg leading-tight">
                {study.qualitative_achievement}
              </div>
            </div>
          </div>

          {/* Video / Secondary Image */}
          {study.video ? (
            <div className="w-full aspect-video bg-stone rounded-2xl overflow-hidden shadow-xl border border-ink/10">
              <video 
                src={study.video} 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
                autoPlay loop muted playsInline
              />
            </div>
          ) : (
             study.images[1] && (
               <div className="w-full aspect-video bg-stone rounded-2xl overflow-hidden border border-ink/10">
                 <img src={study.images[1]} alt="Process" className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-1000" />
               </div>
             )
          )}

          {/* The Experience */}
          <div className="bg-stone border border-ink/10 rounded-[2rem] p-8 md:p-12">
            <h3 className="font-mono text-xs tracking-widest uppercase text-ink mb-6">
              The Experience
            </h3>
            <p className="font-serif italic text-2xl md:text-4xl max-w-2xl text-ink leading-tight mb-16">
              {study.manifesto}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {study.narrative.map((block, i) => (
                <div key={i}>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-earth mb-4">
                    {block.title}
                  </div>
                  <p className="font-sans text-sm md:text-base text-ink/80 leading-relaxed">
                    {block.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-full h-[1px] bg-ink/10 my-12"></div>
            
            <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-end">
              <div className="max-w-md">
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-2">
                  Technical Architecture
                </div>
                <p className="font-mono text-xs text-ink/80 leading-relaxed">
                  {study.tech_detail}
                </p>
              </div>
              
              {study.methodology && (
                <div className="w-full md:w-auto">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-4">
                    Methodology
                  </div>
                  <div className="flex gap-4">
                    {study.methodology.map((step, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="font-serif italic text-xl text-earth mb-1">0{i+1}</span>
                        <span className="font-mono text-[8px] uppercase tracking-widest max-w-[100px]">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Social Proof & Conclusion */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-ink/20 pt-16">
            <div>
              {study.social_proof && (
                <blockquote className="mb-12">
                  <p className="font-sans font-light text-xl italic text-ink mb-6">
                    "{study.social_proof.quote}"
                  </p>
                  <footer>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-ink">{study.social_proof.author}</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-ink/50">{study.social_proof.role}</div>
                  </footer>
                </blockquote>
              )}
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-earth mb-4">
                Conclusion
              </div>
              <p className="font-sans text-lg text-ink/90 leading-relaxed">
                {study.conclusion}
              </p>
              {study.concept_doc && (
                <a href={study.concept_doc} target="_blank" rel="noreferrer" className="inline-block mt-8 font-mono text-[10px] uppercase tracking-widest text-ink hover:text-earth border-b border-ink/20 pb-1 transition-colors">
                  Read the conceptual basis ↗
                </a>
              )}
            </div>
          </div>

          {/* Gallery */}
          {study.images.length > 2 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              {study.images.slice(2).map((img, i) => (
                <div key={i} className={`rounded-xl overflow-hidden bg-stone border border-ink/10 aspect-square ${i === 2 && study.images.length % 2 !== 0 ? 'sm:col-span-2 aspect-video' : ''}`}>
                  <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover filter saturate-50 contrast-125 hover:saturate-100 transition-all duration-700" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
