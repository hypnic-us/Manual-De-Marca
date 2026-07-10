import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Briefcase, GraduationCap, Globe, Lightbulb, TrendingUp, PlayCircle, X, Book } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Video Modal Component
const VideoModal = ({ isOpen, onClose, videoId }: { isOpen: boolean, onClose: () => void, videoId: string }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <React.Fragment>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl cursor-default border border-white/10"
            >
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-earth text-ink-inverse p-2 rounded-full transition-colors backdrop-blur-md"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
};

const TimelineItem = ({ 
  year, 
  title, 
  subtitle, 
  description, 
  highlights, 
  icon,
  align = 'left'
}: { 
  year: string, 
  title: string, 
  subtitle: string, 
  description?: string, 
  highlights?: (string | React.ReactNode)[],
  icon?: React.ReactNode,
  align?: 'left' | 'right' | 'full'
}) => {
  return (
    <div className={`relative flex items-start w-full mt-12 mb-20 group ${align === 'right' ? 'md:flex-row-reverse flex-row' : 'flex-row'}`}>
      {/* Timeline Bullet */}
      <div className="absolute top-2 left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-ink border-4 border-paper z-10 group-hover:bg-earth transition-colors duration-500"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className={`flex-1 w-full pl-12 md:px-12 ${align === 'right' ? 'md:text-right text-left' : 'text-left'} md:w-1/2`}
      >
        <div className={`mb-4 font-mono text-xs uppercase tracking-widest text-earth`}>
          {year}
        </div>
        
        <h3 className="font-serif text-3xl md:text-5xl mb-2 break-words">{title}</h3>
        <h4 className={`font-sans font-medium text-base sm:text-lg uppercase tracking-wider text-ink/60 mb-6 flex items-center gap-3 ${align === 'right' ? 'md:justify-end justify-start' : 'justify-start'}`}>
          {icon && <span className="text-earth shrink-0">{icon}</span>}
          <span className="break-words leading-tight">{subtitle}</span>
        </h4>
        
        {description && (
          <p className="font-sans font-light text-ink/80 leading-relaxed mb-6">
            {description}
          </p>
        )}

        {highlights && highlights.length > 0 && (
          <ul className="space-y-3 font-sans text-sm text-ink/70">
            {highlights.map((h, i) => (
              <li key={i} className={`flex items-start gap-2 ${align === 'right' ? 'md:justify-end md:flex-row-reverse flex-row' : 'flex-row'}`}>
                {typeof h === 'string' && <span className="text-earth mt-1 font-bold">+</span>}
                <span className="block">{h}</span>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
      
      {/* Empty space for centering */}
      <div className="hidden md:block flex-1"></div>
    </div>
  );
};

export default function Me() {
  const { t } = useTranslation();
  const [videoState, setVideoState] = useState({ isOpen: false, videoId: 'x-C31cWDe2s' });
  const timelineRef = React.useRef<HTMLDivElement>(null);
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end end"]
  });
  const { scrollXProgress } = useScroll({
    container: carouselRef
  });
  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="max-w-6xl mx-auto py-24 px-4 overflow-hidden md:overflow-visible">
      
      {/* Intro Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-40 grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
      >
        <div className="md:col-span-5 relative">
          <div className="aspect-[3/4] w-full bg-stone rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
            <a href="https://www.linkedin.com/in/juan-manuel-montoya-sierra-58b698174/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <div className="absolute inset-0 bg-ink/5 mix-blend-screen pointer-events-none"></div>
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/landing-tangible.firebasestorage.app/o/Proyectos%2FJM%2FArchivos%2FScreenshot%202026-04-21%20at%209.42.19%E2%80%AFPM.webp?alt=media&token=e4b8d1ea-7db0-4d29-bab6-2a2ae2d3abb9" 
                alt="Juan Manuel Montoya" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 border border-white/20 px-4 py-1 rounded-full backdrop-blur-md">
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-inverse">ID_01 // JMM</span>
              </div>
            </a>
          </div>
          <p className="font-mono text-[10px] md:text-[11px] text-ink/60 mt-4 tracking-widest text-center w-full uppercase">Juan Manuel Montoya Sierra</p>
        </div>
        <div className="md:col-span-7 space-y-6">
          <h1 className="font-serif italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight break-words">
            {t('me.scale')} <span className="font-sans font-bold not-italic text-ink">{t('me.products')}</span>
          </h1>
          <div className="w-16 h-2 bg-earth"></div>
          <p className="font-sans text-xl leading-relaxed text-ink/80 max-w-xl">
            {t('me.description')}
          </p>
          <div className="flex flex-col gap-6 pt-4">
            
            {/* Nationalities */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">{t('me.nationalities', 'Nationalities')}</span>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 border border-ink/10 rounded-full font-mono text-[10px] uppercase tracking-widest text-ink/80 bg-ink/10 backdrop-blur-sm flex items-center gap-2">
                  <span className="text-sm">🇨🇴</span> {t('me.colombian')}
                </span>
                <span className="px-4 py-2 border border-ink/10 rounded-full font-mono text-[10px] uppercase tracking-widest text-ink/80 bg-ink/10 backdrop-blur-sm flex items-center gap-2">
                  <span className="text-sm">🇪🇸</span> {t('me.spanish')}
                </span>
              </div>
            </div>

            {/* Core Competencies */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">{t('me.core_competencies', 'Core Competencies')}</span>
              <div className="flex flex-wrap gap-2">
                {[
                  t('me.skill_1', 'Product Management'), 
                  t('me.skill_2', 'Strategic Planning'), 
                  t('me.skill_3', 'Team Leadership'), 
                  t('me.skill_4', 'Business Development'), 
                  t('me.skill_5', 'Operational Management'), 
                  t('me.skill_6', 'Innovation Management')
                ].map(skill => (
                  <span key={skill} className="px-4 py-2 border border-ink/10 rounded-full font-mono text-[10px] uppercase tracking-widest text-ink/60 bg-stone border-ink/10">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <section className="relative w-full">
        <VideoModal 
          isOpen={videoState.isOpen} 
          onClose={() => setVideoState({ ...videoState, isOpen: false })} 
          videoId={videoState.videoId} 
        />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter mb-4 break-words">{t('me.trajectory')}</h2>
          <p className="font-mono text-xs text-earth uppercase tracking-widest">{t('me.chronological')}</p>
        </motion.div>

        <div className="relative" ref={timelineRef}>
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 transform -translate-x-1/2 w-[2px] bg-ink/10"></div>
          {/* Animated Draw Line */}
          <motion.div 
            className="absolute top-0 bottom-0 left-4 md:left-1/2 transform -translate-x-1/2 w-[2px] bg-earth origin-top"
            style={{ scaleY: timelineHeight }}
          ></motion.div>

          <TimelineItem 
            year="1989"
            title={t('me.born')}
            subtitle="Medellín, Colombia"
            description={t('me.born_desc')}
            align="left"
          />

          <TimelineItem 
            year="2007"
            title={t('me.school')}
            subtitle={t('me.school_subtitle')}
            description={t('me.school_desc')}
            icon={<Book className="w-5 h-5" />}
            align="right"
          />

          <TimelineItem 
            year="2008"
            title={t('me.university', "University Studies")}
            subtitle={t('me.engineer_subtitle', "Product Design Engineer")}
            description={t('me.university_desc', "Started Product Design Engineering studies at Universidad EAFIT.")}
            icon={<GraduationCap className="w-5 h-5" />}
            align="left"
          />

          <TimelineItem 
            year="2014"
            title={t('me.cairo')}
            subtitle={t('me.cairo_subtitle')}
            description={t('me.cairo_desc')}
            icon={<Globe className="w-5 h-5" />}
            align="right"
          />

          <TimelineItem 
            year="2018"
            title={t('me.quimera')}
            subtitle="Co-founder"
            description={t('me.quimera_desc')}
            icon={<Lightbulb className="w-5 h-5" />}
            align="left"
          />

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full my-32 py-16 border-y border-ink/10 bg-stone/50 backdrop-blur-md rounded-3xl text-center relative z-10 overflow-hidden"
          >
             {/* Background noise/pattern could go here */}
             <div className="relative z-10 space-y-6 max-w-2xl mx-auto px-4 flex flex-col items-center">
                <TrendingUp className="w-12 h-12 text-earth mx-auto mb-6" />
                <h3 className="font-serif italic text-4xl md:text-5xl">TANGIBLE</h3>
                <h4 className="font-sans font-bold text-xl uppercase tracking-widest">{t('me.tangible_role', "Co-founder & Head of Product (8 Years)")}</h4>
                
                <div className="flex flex-col gap-3 mt-4 items-center">
                  <p className="font-mono text-xs uppercase tracking-widest text-ink/50 bg-stone inline-block px-4 py-2 rounded-full">
                    {t('me.tangible_stats', "28 Employees • $1M/yr Revenue • 4 Software as a Service")}
                  </p>
                  <p className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest text-ink-inverse bg-earth inline-block px-4 py-2 rounded-full shadow-lg">
                    🏆 #1 Forbes 15 Pequeñas Gigantes 2026
                  </p>
                </div>
             </div>
          </motion.div>

          <TimelineItem 
            year="2019"
            title={t('me.timeline_2019_title', "Product-Market Fit & Operations")}
            subtitle="TANGIBLE"
            description={t('me.timeline_2019_desc', "Led the commercial strategy and initial product discovery. Prototyped and launched architectural products, establishing the core business model and validating market demand.")}
            highlights={[
              <button 
                key={1}
                onClick={() => setVideoState({ isOpen: true, videoId: 'sOK8RS1cVcI' })}
                className="flex items-center gap-2 px-3 py-1 bg-stone hover:bg-earth hover:text-ink-inverse rounded-full transition-colors text-ink font-medium"
              >
                <PlayCircle className="w-4 h-4" />
                <span>{t('me.timeline_2019_highlight', "Play Showreel")}</span>
              </button>
            ]}
            align="right"
          />

          <TimelineItem 
            year="2020"
            title={t('me.timeline_2020_title', "Building the Design Engine")}
            subtitle="TANGIBLE"
            description={t('me.timeline_2020_desc', "Productized the 3D visualization division. Hired and structured the initial design team, establishing aesthetic curation, standardizing delivery processes, and scaling output.")}
            highlights={[
              <button 
                key={1}
                onClick={() => setVideoState({ isOpen: true, videoId: 'x-C31cWDe2s' })}
                className="flex items-center gap-2 px-3 py-1 bg-stone hover:bg-earth hover:text-ink-inverse rounded-full transition-colors text-ink font-medium"
              >
                <PlayCircle className="w-4 h-4" />
                <span>{t('me.timeline_2020_highlight', "Launched Official Core Capabilities Reel")}</span>
              </button>
            ]}
            align="left"
          />

          <TimelineItem 
            year="2021"
            title={t('me.timeline_2021_title', "Scaling Software & Engineering")}
            subtitle="TANGIBLE"
            description={t('me.timeline_2021_desc', "Spearheaded the software development division. Built the foundational tech stack, recruited engineering talent, and aligned agile development cycles with client needs.")}
            highlights={[
              <button 
                key={1}
                onClick={() => setVideoState({ isOpen: true, videoId: 'sOK8RS1cVcI' })}
                className="flex items-center gap-2 px-3 py-1 bg-stone hover:bg-earth hover:text-ink-inverse rounded-full transition-colors text-ink font-medium"
              >
                <PlayCircle className="w-4 h-4" />
                <span>{t('me.timeline_2021_highlight', "Play Showreel")}</span>
              </button>
            ]}
            align="right"
          />

          <TimelineItem 
            year="2022"
            title={t('me.timeline_2022_title', "R&D and Product Innovation")}
            subtitle="TANGIBLE"
            description={t('me.timeline_2022_desc', "Directed product innovation and R&D. Bridged commercial strategy with technical execution to launch industry-first spatial computing products.")}
            highlights={[
              t('me.timeline_2022_highlight_1', "Launched Colombia's first Augmented Reality (AR) furniture application."),
              t('me.timeline_2022_highlight_2', "Launched pioneering Virtual Reality (VR) experiences for retail.")
            ]}
            align="left"
          />

          <TimelineItem 
            year="2023"
            title={t('me.timeline_2023_title', "Omnichannel Product Strategy")}
            subtitle="TANGIBLE"
            description={t('me.timeline_2023_desc', "Designed and integrated tech-enabled physical retail experiences. Managed the complete product lifecycle for new digital tools that connected in-store users with broader digital ecosystems.")}
            align="right"
          />

          <TimelineItem 
            year="2024"
            title={t('me.timeline_2024_title', "Market Expansion & Portfolio")}
            subtitle="TANGIBLE"
            description={t('me.timeline_2024_desc', "Expanded the product portfolio into new industry verticals (fashion, cosmetics). Adapted core software offerings to solve distinct user problems in adjacent consumer markets.")}
            align="left"
          />

          <TimelineItem 
            year="2025"
            title={t('me.timeline_2025_title', "The Pivot: Services to SaaS")}
            subtitle="TANGIBLE"
            description={t('me.timeline_2025_desc', "Authored and led the company-wide strategic pivot from a traditional agency model to a Product-Led Growth (PLG) organization. Architected the transformation framework for scalable software products.")}
            icon={<Briefcase className="w-5 h-5" />}
            align="right"
          />

          <TimelineItem 
            year="2026"
            title={t('me.timeline_2026_title', "C-Level SaaS Consolidation")}
            subtitle="TANGIBLE"
            description={t('me.timeline_2026_desc', "Successfully managed a portfolio of 4 proprietary SaaS products. Optimized P&L, reduced churn, and achieved top-tier national recognition through operational and product excellence.")}
            highlights={[
              t('me.timeline_2026_highlight_1', "Consolidated 4 software products under a unified SaaS model."),
              t('me.timeline_2026_highlight_2', "Ranked #1 in Forbes '15 Pequeñas Gigantes' (2026)")
            ]}
            icon={<TrendingUp className="w-5 h-5" />}
            align="left"
          />

        </div>
      </section>

      {/* Publications Carousel Section */}
      <section className="relative w-full mt-40">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-ink/10 pb-6 px-4"
        >
          <div>
            <h2 className="font-serif italic text-4xl md:text-5xl break-words">{t('me.press')}</h2>
            <p className="font-mono text-xs text-earth uppercase tracking-widest mt-4 break-words">{t('me.milestones')}</p>
          </div>
          <div className="hidden md:block font-mono text-[10px] uppercase tracking-widest text-ink/50 mt-4 md:mt-0">
            {t('me.swipe')}
          </div>
        </motion.div>

        {/* Carousel Container (Native CSS Scroll Snap) */}
        <div ref={carouselRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {[
            {
              year: "2026",
              title: t('me.press_1_title', 'Las 15 Pequeñas Gigantes de Forbes'),
              description: t('me.press_1_desc', 'Reconocimiento nacional en 2026 a TANGIBLE como la empresa número 1 por su modelo SaaS escalable, crecimiento sostenido y visión de producto.'),
              image: "https://firebasestorage.googleapis.com/v0/b/landing-tangible.firebasestorage.app/o/Proyectos%2FJM%2FArchivos%2FTANGIBLE.webp?alt=media&token=d9027fd8-3c2e-4a4d-bf80-d16155bb2b58",
              link: "https://forbes.co/editors-picks/las-pequenas-gigantes-de-forbes-colombia-2026"
            },
            {
              year: "2025",
              title: t('me.press_2_title', 'Cámara FM: La historia de TANGIBLE'),
              description: t('me.press_2_desc', 'Entrevista para Cámara FM detallando los orígenes arquitectónicos de TANGIBLE, nuestra evolución y el enfoque en el diseño como motor de innovación e interacciones espaciales.'),
              image: "https://firebasestorage.googleapis.com/v0/b/landing-tangible.firebasestorage.app/o/Proyectos%2FJM%2FArchivos%2FScreenshot%202026-04-21%20at%2010.19.00%E2%80%AFPM.webp?alt=media&token=449c2af4-6418-42d1-b94f-6b36665cf641",
              link: "https://www.instagram.com/reel/DKuKIIROXLT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA="
            },
            {
              year: "2024",
              title: t('me.press_3_title', 'Las tiendas del futuro serán laboratorios de experiencias'),
              description: t('me.press_3_desc', 'Artículo en Portafolio sobre nuestra visión de cómo el retail se transforma en espacios híbridos (phygital) y el rol estratégico de TANGIBLE en esa evolución.'),
              image: "https://firebasestorage.googleapis.com/v0/b/landing-tangible.firebasestorage.app/o/Proyectos%2FJM%2FArchivos%2FScreenshot%202026-04-21%20at%209.56.56%E2%80%AFPM.webp?alt=media&token=24ac47c7-730e-4d77-b630-eb5836ed6880",
              link: "https://blogs.portafolio.co/negocios-e-inspiracion/las-tiendas-del-futuro-seran-laboratorios-de-experiencias-tangible/amp/"
            }
          ].map((pub, i) => (
            <motion.a 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              key={i} 
              href={pub.link}
              target={pub.link ? "_blank" : undefined}
              rel={pub.link ? "noopener noreferrer" : undefined}
              className="flex-none w-[80vw] sm:w-80 md:w-96 snap-start group cursor-pointer block"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-stone mb-6 relative">
                <img 
                  src={pub.image} 
                  alt={pub.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 object-top" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute top-4 left-4 bg-paper/90 backdrop-blur-md px-3 py-1 rounded-full border border-ink/10 shadow-sm">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-earth">{pub.year}</span>
                </div>
              </div>
              <div className="pr-4">
                <h3 className="font-serif text-2xl sm:text-3xl mb-3 group-hover:text-earth transition-colors leading-tight break-words">{pub.title}</h3>
                <p className="font-sans font-light text-sm leading-relaxed text-ink/70">
                  {pub.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Custom Progress Bar */}
        <div className="px-4 -mt-4 mb-12 max-w-[200px] md:hidden">
          <div className="h-[2px] w-full bg-ink/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-earth rounded-full"
              style={{ scaleX: scrollXProgress, transformOrigin: 'left' }}
            />
          </div>
        </div>
      </section>

    </div>
  );
}
