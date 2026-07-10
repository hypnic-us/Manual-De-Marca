// ─── Imports externos ────────────────────────────────────────────────────────
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'motion/react';
import { Maximize, Minimize, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// ─── Datos ───────────────────────────────────────────────────────────────────
import { projectsData } from '../data/projects';

// ─── Componentes 3D ──────────────────────────────────────────────────────────
import FluorescentModel    from './FluorescentModel';
import FluorescentHeroModel from './FluorescentHeroModel';

// ─── UI Reutilizable (src/components/ui/) ────────────────────────────────────
// Cada uno está documentado en su propio archivo; se exportan como barrel.
import {
  AnimatedCounter,
  BrandLogo,
  LetterReveal,
  ScrollScrub,
  ScrollWordReveal,
} from './ui';


export default function Landing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const carousel3dRef = useRef<HTMLDivElement>(null);
  const wheelLock = useRef(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeVideoCategory, setActiveVideoCategory] = useState<'amplify' | 'echo' | 'stage'>('amplify');

  

  const [isMobile, setIsMobile] = useState(false);
  const [activeClientIndex, setActiveClientIndex] = useState(2);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [filterSegment, setFilterSegment] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isCarouselInView = useInView(carouselRef, { once: true, margin: "-100px" });

  // El video se reproduce solo cuando entra en pantalla y se pausa al salir
  // (no `once`: reacciona cada vez que aparece/desaparece con el scroll)
  const isVideoInView = useInView(videoWrapperRef, { margin: "-15% 0px -15% 0px" });

  const clientsData = projectsData;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const videos = {
    amplify: {
      desktop: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      mobile: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    echo: {
      desktop: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      mobile: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    stage: {
      desktop: "https://firebasestorage.googleapis.com/v0/b/westside-c211b.appspot.com/o/Videos%2FDesktop%2FMP4%2FVideo_Web1MIN.mp4?alt=media&token=e94a5cfa-48cd-4722-9952-3b9c84cb4736",
      mobile: "https://firebasestorage.googleapis.com/v0/b/westside-c211b.appspot.com/o/Videos%2FDesktop%2FMP4%2FVideo_Web1MIN.mp4?alt=media&token=e94a5cfa-48cd-4722-9952-3b9c84cb4736"
    }
  };
  
  // Setup scroll behavior
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Hero Section "camera zoom" effect on scroll
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  // La retícula del héroe: se inclina en 3D, hace zoom y se aleja al escrolear
  // (como un piso que se hunde en perspectiva)
  const heroGridY = useTransform(scrollYProgress, [0, 0.28], [0, -160]);
  const heroGridOpacity = useTransform(scrollYProgress, [0, 0.24], [0.12, 0]);
  const heroGridScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.45]);
  const heroGridRotateX = useTransform(scrollYProgress, [0, 0.3], [0, 32]);

  // Tipografía cinética del héroe: cada palabra escapa en su propia
  // dirección y velocidad al escrolear (el titular se "desarma")
  const heroW1X = useTransform(scrollYProgress, [0, 0.22], [0, -170]);      // EMPOWER / POTENCIALIZA
  const heroW1Rotate = useTransform(scrollYProgress, [0, 0.22], [0, -5]);
  const heroSmallY = useTransform(scrollYProgress, [0, 0.22], [0, -150]);   // texto pequeño: sube más rápido
  const heroW2X = useTransform(scrollYProgress, [0, 0.22], [0, 130]);       // WITH / CON
  const heroPillRotate = useTransform(scrollYProgress, [0, 0.22], [-2, -170]); // la píldora gira al salir
  const heroPillScale = useTransform(scrollYProgress, [0, 0.22], [1, 0.55]);
  const heroW3X = useTransform(scrollYProgress, [0, 0.22], [0, 210]);       // TECHNOLOGY / TECNOLOGÍA
  const heroW3Blur = useTransform(scrollYProgress, [0.05, 0.2], ['blur(0px)', 'blur(10px)']);
  const heroDashScaleX = useTransform(scrollYProgress, [0, 0.22], [1, 3.2]); // el guión se estira
  const heroCtaY = useTransform(scrollYProgress, [0, 0.22], [0, 110]);      // CTA se hunde
  const heroSphereY = useTransform(scrollYProgress, [0, 0.22], [0, -70]);   // la esfera deriva suave hacia arriba



  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to custom event for dynamic category switches
  useEffect(() => {
    const handleCategoryChange = (e: Event) => {
      const category = (e as CustomEvent).detail as 'amplify' | 'echo' | 'stage';
      setActiveVideoCategory(category);
    };
    window.addEventListener('change-video-category', handleCategoryChange);
    return () => window.removeEventListener('change-video-category', handleCategoryChange);
  }, []);

  // Listen to hash changes for initial loading or external page link jumps
  useEffect(() => {
    const hash = location.hash;
    if (!hash) return;

    const timer = setTimeout(() => {
      if (hash === '#amplify' || hash === '#echo' || hash === '#stage') {
        const category = hash.replace('#', '') as 'amplify' | 'echo' | 'stage';
        setActiveVideoCategory(category);
        const element = document.getElementById('gallery');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (hash === '#cases') {
        const element = document.getElementById('cases');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else if (hash === '#experience') {
        const element = document.getElementById('experience');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (hash === '#hero') {
        const element = document.getElementById('hero');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [location.hash]);

  const [introPhase, setIntroPhase] = useState<'initial' | 'moving' | 'done'>('initial');

  useEffect(() => {
    const t1 = setTimeout(() => {
      setIntroPhase('moving');
      const t2 = setTimeout(() => {
        setIntroPhase('done');
      }, 1500);
      return () => clearTimeout(t2);
    }, 1000);
    return () => clearTimeout(t1);
  }, []);

  // Arranca/pausa el video según entre o salga del viewport. React no siempre
  // refleja el atributo `muted`, así que lo forzamos por ref (sin muted el
  // navegador bloquea el autoplay → "Unable to play media")
  useEffect(() => {
    const vid = videoElementRef.current;
    if (!vid) return;
    vid.muted = true;
    if (isVideoInView) {
      const p = vid.play();
      if (p) p.catch(() => { /* el navegador puede rechazar; se reintenta al re-entrar */ });
    } else {
      vid.pause();
    }
  }, [isVideoInView, activeVideoCategory, isMobile]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handleCategoryClick = (category: 'amplify' | 'echo' | 'stage') => {
    setActiveVideoCategory(category);
    setTimeout(() => {
      if (videoWrapperRef.current) {
        videoWrapperRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  // Categorías del carrusel 3D de video (desktop). El orden define su posición
  // en el "tambor" vertical: la activa al frente, las demás inclinadas atrás.
  const videoCategories = [
    { id: 'amplify' as const, num: '01', label: 'Amplify', title: { es: 'Tecnología para mejorar tu negocio', en: 'Technology to improve your business' } },
    { id: 'echo' as const, num: '02', label: 'Echo', title: { es: 'Marketing inmersivo', en: 'Immersive marketing' } },
    { id: 'stage' as const, num: '03', label: 'Stage', title: { es: 'Experiencias físicas con tech', en: 'Physical experiences with tech' } },
  ];

  // Scroll-over: la rueda sobre el carrusel gira el tambor tarjeta por tarjeta.
  // En los extremos NO hacemos preventDefault → la página sigue scrolleando.
  // El handler se agrega UNA SOLA VEZ (sin refresco innecesario) gracias a useCallback.
  const handleCarouselWheel = useCallback((e: WheelEvent) => {
    const idx = videoCategories.findIndex(c => c.id === activeVideoCategory);
    const dir = e.deltaY > 0 ? 1 : -1;
    const next = idx + dir;
    if (next < 0 || next >= videoCategories.length) return; // libera el scroll
    e.preventDefault();
    if (wheelLock.current) return;
    wheelLock.current = true;
    setActiveVideoCategory(videoCategories[next].id);
    setTimeout(() => { wheelLock.current = false; }, 480);
  }, [activeVideoCategory, videoCategories]);

  useEffect(() => {
    const el = carousel3dRef.current;
    if (!el) return;
    el.addEventListener('wheel', handleCarouselWheel as EventListener, { passive: false });
    return () => el.removeEventListener('wheel', handleCarouselWheel as EventListener);
  }, [handleCarouselWheel]);

  const toggleFullscreen = () => {
    const elem = videoWrapperRef.current;
    if (!elem) return;

    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(() => {});
      } else if ((elem as any).webkitRequestFullscreen) {
        (elem as any).webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      }
    }
  };

  return (
    <div ref={containerRef} className="space-y-16 md:space-y-20 pb-32">
      
      {/* Animated Typography Hero */}
      <section id="hero" className="w-full flex flex-col items-start justify-center min-h-[50vh] md:min-h-[70vh] mb-24 md:px-16 lg:px-24 text-left relative z-10 overflow-hidden py-12 md:py-0">
        
        {/* Grid Overlay — al escrolear se inclina en 3D, hace zoom y se aleja
            como un piso hundiéndose en perspectiva */}
        <motion.div className="absolute inset-0 pointer-events-none z-0" style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: 'center center',
            y: heroGridY,
            opacity: heroGridOpacity,
            scale: heroGridScale,
            rotateX: heroGridRotateX,
            transformPerspective: 900,
            transformOrigin: 'center 70%'
        }}></motion.div>

        

        <motion.div
          initial="hidden"
          animate={introPhase === 'initial' ? 'hidden' : 'visible'}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="w-full max-w-5xl mx-auto flex flex-col items-start justify-center relative z-10 px-4 md:px-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          {/* Esfera del héroe: vive en su esquina; entra sutil (fade + foco)
              después de la intro, sin vuelos por la pantalla */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, filter: 'blur(16px)' }}
            animate={
              introPhase === 'initial'
                ? { opacity: 0, scale: 0.85, filter: 'blur(16px)' }
                : { opacity: 0.8, scale: 1, filter: 'blur(0px)' }
            }
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            style={{
              top: isMobile ? '-2.5rem' : '-5rem',
              right: isMobile ? '-1rem' : '2.5rem',
              y: heroSphereY
            }}
            className="absolute z-0 w-48 h-48 md:w-96 md:h-96 pointer-events-auto mix-blend-screen cursor-pointer"
          >
            <FluorescentHeroModel isWireframe={introPhase === 'done'} />
          </motion.div>
          {i18n.language === 'es' ? (
            <>
              {/* Top Row: POTENCIALIZA + small text — cada uno con entrada de scroll */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-12 mb-4 md:mb-8 w-full">
                  <ScrollScrub y={100} endOffset="start 0.2" className="w-full md:w-auto">
                    <motion.div style={{ x: heroW1X, rotate: heroW1Rotate }}>
                      <h1 className="font-sans font-bold text-[6vw] sm:text-[6.5vw] md:text-[7vw] lg:text-[5.25rem] text-white leading-[0.9] tracking-tight m-0 p-0 drop-shadow-lg">
                        <LetterReveal text="POTENCIALIZA." play={introPhase !== 'initial'} delay={0.1} stagger={0.04} />
                      </h1>
                    </motion.div>
                  </ScrollScrub>
                  <ScrollScrub y={80} endOffset="start 0.18" className="md:pt-4">
                    <motion.div
                      variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 70, damping: 20 } } }}
                      className="md:pt-4"
                    >
                        <p className="font-mono font-medium text-[10px] md:text-xs text-white leading-relaxed uppercase tracking-widest max-w-[180px] drop-shadow-md">
                          Tus productos y servicios al máximo nivel.
                        </p>
                    </motion.div>
                  </ScrollScrub>
              </div>

              {/* Second Row: CON [ * ] TECNOLOGÍA — cada uno con entrada de scroll */}
              <ScrollScrub y={110} endOffset="start 0.15" className="flex flex-col w-full">
                  <div className="flex flex-wrap items-center gap-2 md:gap-6 mb-1 md:mb-2">
                      <motion.span style={{ x: heroW2X }} className="font-sans font-bold text-[8vw] sm:text-[8.5vw] md:text-[7vw] lg:text-[5.25rem] text-white leading-[0.9] tracking-tight drop-shadow-lg pr-2 inline-block">
                        <LetterReveal text="CON" play={introPhase !== 'initial'} delay={0.45} />
                      </motion.span>
                      {/* Pill: entra (fade+scale al ritmo del texto) y gira al salir */}
                      <motion.div style={{ rotate: heroPillRotate, scale: heroPillScale }} className="bg-[#FFC107] text-black px-3 py-1 md:px-8 md:py-2 rounded-full flex items-center justify-center shadow-lg">
                          <motion.svg initial={{ opacity: 0, scale: 0 }} animate={introPhase !== 'initial' ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }} transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.65 }} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-8 md:h-8">
                              <path d="M12 2v20M17 5l-10 14M22 12H2M19 19L5 5"/>
                          </motion.svg>
                      </motion.div>
                  </div>
                  <div className="flex items-center gap-2 md:gap-4 mt-1 md:mt-0">
                      <motion.span style={{ x: heroW3X, filter: heroW3Blur }} className="font-sans font-bold text-[6vw] sm:text-[6.5vw] md:text-[6.5vw] lg:text-[4.75rem] text-white leading-[0.9] tracking-tight drop-shadow-lg inline-block">
                        <LetterReveal text="TECNOLOGÍA" play={introPhase !== 'initial'} delay={0.6} stagger={0.04} />
                      </motion.span>
                      <motion.div style={{ scaleX: heroDashScaleX }} className="h-[2px] md:h-2 w-8 md:w-24 bg-white self-center origin-left"></motion.div>
                  </div>
              </ScrollScrub>

              <ScrollScrub y={130} endOffset="start 0.12" className="mt-8 md:mt-16 flex items-center justify-start md:justify-end w-full gap-2 md:gap-3">
                <motion.div style={{ y: heroCtaY }} className="flex items-center gap-2 md:gap-3">
                  <span className="font-sans font-bold text-sm md:text-2xl lg:text-3xl text-[#FFC107] uppercase tracking-wide">
                      <LetterReveal text="ES HORA DE DESPERTAR." play={introPhase !== 'initial'} delay={0.9} stagger={0.03} />
                  </span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFC107] w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </motion.div>
              </ScrollScrub>
            </>
          ) : (
            <>
              {/* Top Row: EMPOWER + small text — cada uno con entrada de scroll */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-12 mb-4 md:mb-8 w-full">
                  <ScrollScrub y={100} endOffset="start 0.2" className="w-full md:w-auto">
                    <motion.div style={{ x: heroW1X, rotate: heroW1Rotate }}>
                      <h1 className="font-sans font-bold text-[11vw] sm:text-[11vw] md:text-[7.5vw] lg:text-[5.5rem] text-white leading-[0.9] tracking-tight m-0 p-0 drop-shadow-lg">
                        <LetterReveal text="EMPOWER." play={introPhase !== 'initial'} delay={0.1} />
                      </h1>
                    </motion.div>
                  </ScrollScrub>
                  <ScrollScrub y={80} endOffset="start 0.18" className="md:pt-4">
                    <motion.div
                      variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 70, damping: 20 } } }}
                      className="md:pt-4"
                    >
                        <p className="font-mono font-medium text-[10px] md:text-xs text-white leading-relaxed uppercase tracking-widest max-w-[180px] drop-shadow-md">
                          Your products and services at the highest level.
                        </p>
                    </motion.div>
                  </ScrollScrub>
              </div>

              {/* Second Row: WITH [ * ] TECHNOLOGY — cada uno con entrada de scroll */}
              <ScrollScrub y={110} endOffset="start 0.15" className="flex flex-col w-full">
                  <div className="flex flex-wrap items-center gap-2 md:gap-6 mb-1 md:mb-2">
                      <motion.span style={{ x: heroW2X }} className="font-sans font-bold text-[8vw] sm:text-[8.5vw] md:text-[7.5vw] lg:text-[5.5rem] text-white leading-[0.9] tracking-tight drop-shadow-lg pr-2 inline-block">
                        <LetterReveal text="WITH" play={introPhase !== 'initial'} delay={0.45} />
                      </motion.span>
                      {/* Pill: entra (fade+scale al ritmo del texto) y gira al salir */}
                      <motion.div style={{ rotate: heroPillRotate, scale: heroPillScale }} className="bg-[#FFC107] text-black px-3 py-1 md:px-8 md:py-2 rounded-full flex items-center justify-center shadow-lg">
                          <motion.svg initial={{ opacity: 0, scale: 0 }} animate={introPhase !== 'initial' ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }} transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.7 }} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-8 md:h-8">
                              <path d="M12 2v20M17 5l-10 14M22 12H2M19 19L5 5"/>
                          </motion.svg>
                      </motion.div>
                  </div>
                  <div className="flex items-center gap-2 md:gap-4 mt-1 md:mt-0">
                      <motion.span style={{ x: heroW3X, filter: heroW3Blur }} className="font-sans font-bold text-[7vw] sm:text-[7vw] md:text-[6vw] lg:text-[4.5rem] text-white leading-[0.9] tracking-tight drop-shadow-lg inline-block">
                        <LetterReveal text="TECHNOLOGY" play={introPhase !== 'initial'} delay={0.6} stagger={0.04} />
                      </motion.span>
                      <motion.div style={{ scaleX: heroDashScaleX }} className="h-[2px] md:h-2 w-8 md:w-20 bg-white self-center origin-left"></motion.div>
                  </div>
              </ScrollScrub>

              <ScrollScrub y={130} endOffset="start 0.12" className="mt-8 md:mt-16 flex items-center justify-start md:justify-end w-full gap-2 md:gap-3">
                <motion.div style={{ y: heroCtaY }} className="flex items-center gap-2 md:gap-3">
                  <span className="font-sans font-bold text-sm md:text-2xl lg:text-3xl text-[#FFC107] uppercase tracking-wide">
                      <LetterReveal text="IT IS TIME TO WAKE UP." play={introPhase !== 'initial'} delay={0.9} stagger={0.03} />
                  </span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFC107] w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </motion.div>
              </ScrollScrub>
            </>
          )}
        </motion.div>
      </section>

      {/* Video Gallery Section */}
      <motion.section 
        ref={galleryRef}
        id="gallery"
        className="relative pt-4 md:pt-6 w-full flex flex-col items-center"
      >
        
        <ScrollScrub y={60} blur={10} className="w-full max-w-4xl mx-auto mb-6 text-center z-20 relative">
          <h2 className="font-serif italic text-2xl md:text-3xl text-ink">
            {i18n.language === 'es' ? '¿Qué estás buscando?' : 'What are you looking for?'}
          </h2>
        </ScrollScrub>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full max-w-5xl mx-auto items-start justify-center relative">
{/* Container: Vertical on mobile. On desktop, exactly 16:9 aspect ratio but constrained by viewport height so the entire video fits on screen */}
        <motion.div 
          ref={videoWrapperRef}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className={
            isFullscreen
              ? "fixed inset-0 z-[100] bg-black flex items-center justify-center"
              : "w-full max-w-[280px] md:max-w-[320px] shrink-0 relative aspect-[9/16] bg-stone rounded-2xl md:rounded-[2.5rem] overflow-hidden group shadow-2xl md:sticky md:top-32"
          }
          
        >
          
          <motion.video 
            ref={videoElementRef}
            key={videos[activeVideoCategory][isMobile ? 'mobile' : 'desktop']}
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src={videos[activeVideoCategory][isMobile ? 'mobile' : 'desktop']}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${isFullscreen ? 'opacity-100 grayscale-0' : 'opacity-80 mix-blend-screen grayscale group-hover:grayscale-0'}`}
          />

          <button
            onClick={toggleFullscreen}
            className={`absolute top-6 right-6 md:top-10 md:right-10 z-30 p-2 md:p-3 bg-stone/50 hover:bg-stone/80 backdrop-blur-md rounded-full text-ink border border-ink/10 transition-colors ${isFullscreen ? 'opacity-100 bg-white/10 text-ink border-white/20 hover:bg-white/20 backdrop-blur-xl' : 'opacity-0 group-hover:opacity-100'}`}
          >
            {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
          </button>

          {/* Text Content Overlays */}
          {!isFullscreen && (
            <>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute top-6 left-6 md:top-10 md:left-10 z-10 pointer-events-none"
              >
                <div className="inline-block border border-ink/20 rounded-full px-4 py-1 bg-stone/50 backdrop-blur-md shadow-sm">
                  <h4 className="font-mono text-[10px] tracking-widest uppercase text-ink/80">{t('landing.portfolio')}</h4>
                </div>
              </motion.div>
              
              <FluorescentModel category={activeVideoCategory} />

              {/* Vertical Text (System 03) */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute top-6 right-4 md:top-12 md:right-8 font-mono text-[8px] md:text-[10px] uppercase tracking-widest text-ink/60" 
                style={{ writingMode: 'vertical-rl' }}
              >
                {t('landing.system_01')}
              </motion.div>
            </>
          )}
          
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="flex flex-col w-full md:flex-1 md:max-w-[400px] shrink-0 z-20 relative"
        >
          {/* Mobile: puntitos selectores */}
          <div className="flex md:hidden flex-row justify-center items-center gap-4 w-full py-4">
            {videoCategories.map((cat) => (
              <button
                key={cat.id}
                data-id={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                aria-label={`${cat.num} / ${cat.label}`}
                className={`w-2 h-2 rounded-full flex-none transition-all ${activeVideoCategory === cat.id ? 'bg-earth scale-150' : 'bg-ink/20'}`}
              />
            ))}
          </div>

          {/* Desktop: carrusel 3D vertical (tambor) — la tarjeta activa al
              frente, las otras giran hacia atrás en rotateX. Scroll/clic = navegar */}
          <div ref={carousel3dRef} className="hidden md:block relative w-full h-[460px]" style={{ perspective: '1400px' }}>
            {/* Indicador de posición (puntos) + pista de scroll */}
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-2">
              {videoCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  aria-label={`${cat.num} / ${cat.label}`}
                  className={`rounded-full transition-all duration-300 ${activeVideoCategory === cat.id ? 'h-6 w-1.5 bg-earth' : 'h-1.5 w-1.5 bg-ink/25 hover:bg-ink/50'}`}
                />
              ))}
            </div>
            <motion.div
              animate={{ y: [0, 6, 0], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-2 bottom-2 z-30 flex flex-col items-center gap-1 pointer-events-none text-ink/50"
            >
              <span className="font-mono text-[8px] uppercase tracking-widest">{i18n.language === 'es' ? 'Scroll' : 'Scroll'}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
            </motion.div>
            <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
              {videoCategories.map((cat, i) => {
                const activeIndex = videoCategories.findIndex(c => c.id === activeVideoCategory);
                const offset = i - activeIndex;
                const isActive = offset === 0;
                return (
                  <div
                    key={cat.id}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    style={{ transformStyle: 'preserve-3d', zIndex: 20 - Math.abs(offset) }}
                  >
                    <motion.button
                      data-id={cat.id}
                      onClick={() => handleCategoryClick(cat.id)}
                      animate={{
                        rotateX: offset * -48,
                        y: offset * 150,
                        z: isActive ? 0 : -190,
                        opacity: Math.abs(offset) > 1 ? 0 : (isActive ? 1 : 0.5),
                        scale: isActive ? 1 : 0.9,
                      }}
                      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                      whileHover={!isActive ? { scale: 0.95, opacity: 0.8 } : {}}
                      style={{ transformStyle: 'preserve-3d', transformOrigin: 'center center', pointerEvents: 'auto' }}
                      className={`w-full max-w-[400px] rounded-2xl px-6 py-8 text-left border backdrop-blur-md shadow-xl group ${isActive ? 'bg-earth text-[#FFCC00] border-earth/40' : 'bg-stone/20 text-ink/60 hover:text-ink border-ink/10 cursor-pointer'}`}
                    >
                      <div className="flex flex-col w-full">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest mb-2 border-b border-current/20 pb-2 flex justify-between w-full items-center">
                          <span>{cat.num} / {cat.label}</span>
                          <span className={`transition-opacity bg-black/10 px-2 py-1 rounded-full text-[8px] hidden sm:block ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                            {i18n.language === 'es' ? 'Ver video ↘' : 'View video ↘'}
                          </span>
                        </span>
                        <span className="font-serif italic text-lg md:text-2xl leading-tight">
                          {i18n.language === 'es' ? cat.title.es : cat.title.en}
                        </span>
                      </div>
                    </motion.button>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="md:hidden flex flex-col items-center text-center mt-2 px-4 h-20 relative">
            {activeVideoCategory === 'amplify' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink/60 block mb-2">01 / Amplify</span>
                <span className="font-serif italic text-lg leading-tight text-ink">{i18n.language === 'es' ? 'Tecnología para mejorar tu negocio' : 'Technology to improve your business'}</span>
              </motion.div>
            )}
            {activeVideoCategory === 'echo' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink/60 block mb-2">02 / Echo</span>
                <span className="font-serif italic text-lg leading-tight text-ink">{i18n.language === 'es' ? 'Marketing inmersivo' : 'Immersive marketing'}</span>
              </motion.div>
            )}
            {activeVideoCategory === 'stage' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink/60 block mb-2">03 / Stage</span>
                <span className="font-serif italic text-lg leading-tight text-ink">{i18n.language === 'es' ? 'Experiencias físicas con tech' : 'Physical experiences with tech'}</span>
              </motion.div>
            )}
          </div>
        </motion.div>

        
        </div>

        {/* Phygital Design Engineer (Moved outside the video) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-6 md:mt-8 flex items-center gap-4 px-2 md:px-6"
        >
          <div className="w-12 md:w-16 h-[2px] bg-ink"></div>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-ink/80">
            {t('landing.phygital_title')}
          </p>
        </motion.div>
      </motion.section>

      {/* Brands Grid */}
      <section id="cases" className="py-16 md:py-24 border-y border-ink/10 overflow-hidden relative">
        <div ref={carouselRef} className="flex flex-col items-center justify-center w-full pb-12">
          <ScrollScrub y={30} className="flex items-center justify-center gap-4 whitespace-nowrap px-6 w-full mb-12">
            <span className="font-mono text-xs tracking-widest uppercase text-ink/50">{t('work.selected_clients')}</span>
          </ScrollScrub>
          
          {/* Cover Flow Carousel */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center perspective-[2500px] overflow-hidden"
          >
            {clientsData.map((client, i) => {
              const offset = i - activeClientIndex;
              const absOffset = Math.abs(offset);
              const isCenter = offset === 0;
              
              // Calculate transforms for 3D effect
              const rotateY = offset * -35; // More dramatic rotation
              const translateZ = absOffset * -200; // Push further back
              const translateX = offset * (isMobile ? 110 : 250); // Wider spread
              const zIndex = 10 - absOffset;
              const opacity = absOffset > 2 ? 0 : 1 - (absOffset * 0.15);

              return (
                <motion.div
                  key={client.name}
                  className="absolute w-[220px] md:w-[320px] aspect-[3/4] cursor-pointer"
                  style={{ zIndex, transformStyle: 'preserve-3d' }}
                  initial={false}
                  animate={{
                    rotateY: isCarouselInView ? rotateY : rotateY + (offset > 0 ? 90 : -90),
                    z: isCarouselInView ? translateZ : translateZ - 800,
                    x: isCarouselInView ? translateX : translateX + (offset > 0 ? 800 : -800),
                    opacity: isCarouselInView ? opacity : 0,
                    scale: isCarouselInView ? (isCenter ? 1.2 : 0.85) : 0.2,
                    filter: isCarouselInView 
                      ? (isCenter ? "blur(0px) brightness(1)" : "blur(4px) brightness(0.5)") 
                      : "blur(20px) brightness(0)",
                    rotateX: isCarouselInView ? (isCenter ? 0 : 5) : 45
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, // Softer stiffness for more fluid motion
                    damping: 15,    // Less damping for a bit more bounce
                    mass: 1.2,
                    delay: isCarouselInView ? Math.abs(offset) * 0.1 : 0 // Stagger based on distance from center
                  }}
                  whileHover={isCenter && isCarouselInView ? { scale: 1.25, rotateY: 5, rotateX: -5 } : {}}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = offset.x;
                    const swipeThreshold = 50;
                    if (swipe < -swipeThreshold) {
                      setActiveClientIndex(Math.min(clientsData.length - 1, activeClientIndex + 1));
                    } else if (swipe > swipeThreshold) {
                      setActiveClientIndex(Math.max(0, activeClientIndex - 1));
                    }
                  }}
                  onClick={() => {
                    if (isCenter) navigate(`/project/${client.id}`);
                    else setActiveClientIndex(i);
                  }}
                >
                  <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative bg-stone border border-ink/10 group transition-all">
                    <motion.img 
                      src={client.thumb} 
                      alt={client.name} 
                      className="w-full h-full object-cover" 
                      animate={{ scale: isCenter ? 1.05 : 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out skew-x-12"></div>

                    <div className="absolute bottom-0 inset-x-0 p-8 flex flex-col items-center justify-end transform transition-all duration-500 group-hover:-translate-y-4">
                      <img src={client.logo} alt={client.name} className="w-32 md:w-40 h-16 object-contain filter invert brightness-0 drop-shadow-lg" />
                      {isCenter && (
                        <div className="mt-6 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          <span className="font-mono text-[10px] text-white/90 uppercase tracking-widest bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 shadow-lg">
                            {i18n.language === 'es' ? 'Ver Proyecto' : 'View Project'}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Reflection */}
                  {isCenter && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="w-full h-1/2 absolute top-full left-0 origin-top pointer-events-none mt-2" 
                      style={{ 
                        transform: 'rotateX(180deg)',
                        WebkitMaskImage: 'linear-gradient(to top, transparent, black 100%)',
                        maskImage: 'linear-gradient(to top, transparent, black 100%)'
                      }}
                    >
                      <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                          <img src={client.thumb} alt="" className="w-full h-full object-cover" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}

            {/* Navigation Buttons */}
            <div className="absolute bottom-4 flex gap-8 z-20">
              <button 
                onClick={(e) => { e.stopPropagation(); setActiveClientIndex(Math.max(0, activeClientIndex - 1)); }}
                className={`p-3 rounded-full bg-stone/50 backdrop-blur border border-ink/10 hover:bg-stone transition-all ${activeClientIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
              >
                <ChevronLeft className="w-5 h-5 text-ink" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setActiveClientIndex(Math.min(clientsData.length - 1, activeClientIndex + 1)); }}
                className={`p-3 rounded-full bg-stone/50 backdrop-blur border border-ink/10 hover:bg-stone transition-all ${activeClientIndex === clientsData.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
              >
                <ChevronRight className="w-5 h-5 text-ink" />
              </button>
            </div>
          </motion.div>
          <ScrollScrub y={20} className="mt-8 flex justify-center w-full z-10 relative">
            <button
              onClick={() => setIsGalleryOpen(true)}
              className="bg-ink text-ink-inverse px-6 py-3 rounded-full font-mono text-xs uppercase tracking-widest hover:bg-ink/90 transition-colors shadow-lg"
            >
              {i18n.language === 'es' ? 'Ver todos' : 'View all'}
            </button>
          </ScrollScrub>
        </div>
      </section>

      {/* ── Años de Experiencia (System 02) ────────────────────────────────────
           Animaciones por variants: el padre dispara, los hijos reaccionan.
           Evita el bug de mobile con overflow-clip donde whileInView anidado
           con x: ±120 nunca se dispara (el elemento está fuera del viewport). */}
      <section
        id="experience"
        className="border-t border-ink/10 relative -mx-6 md:-mx-16 lg:-mx-24 py-20 md:py-32 px-6 md:px-16 lg:px-24"
      >
        {/* Contenedor padre: dispara la animación al entrar en viewport */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0 } }
          }}
        >
          {/* Fila de números + línea */}
          <div className="flex items-center justify-between">
            {/* Número izquierdo: 08 */}
            <motion.span
              variants={{
                hidden:  { opacity: 0, x: -80 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="font-sans font-bold text-6xl md:text-[9rem] tracking-tighter leading-none text-ink/20"
            >
              <AnimatedCounter from={0} to={8} />
            </motion.span>

            {/* Línea central */}
            <div className="flex-1 mx-4 md:mx-12">
              <motion.div
                variants={{
                  hidden:  { scaleX: 0 },
                  visible: { scaleX: 1, transition: { duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="w-full h-1 md:h-2 bg-ink origin-center"
              />
            </div>

            {/* Número derecho: 06 */}
            <motion.span
              variants={{
                hidden:  { opacity: 0, x: 80 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="font-sans font-bold text-6xl md:text-[9rem] tracking-tighter leading-none text-ink/20"
            >
              <AnimatedCounter from={0} to={6} />
            </motion.span>
          </div>

          {/* Labels: Years Experience / Global Markets */}
          <motion.div
            variants={{
              hidden:  { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="flex justify-between items-start mt-2 md:mt-4 mb-12 md:mb-16"
          >
            <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-widest">
              {t('landing.years_experience')}
            </span>
            <div className="text-right">
              <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-widest block">
                {t('landing.global_markets')}
              </span>
              <span className="font-mono text-[8px] md:text-[10px] text-ink/40 uppercase tracking-widest mt-2 block w-32 md:w-auto leading-relaxed">
                {t('landing.markets_list')}
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Manifiesto: animación propia ya que está separado verticalmente */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <ScrollWordReveal
            text={t('landing.hero_scroll_text_1')}
            highlight={t('landing.hero_scroll_text_highlight')}
          />
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="border-t border-ink/10 pt-24">
        <ScrollScrub y={70} blur={10} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <h3 className="font-serif italic text-4xl md:text-5xl">{t('landing.three_lines_1')}<br/>{t('landing.three_lines_2')}</h3>
          <p className="font-sans font-light text-sm text-ink/80 max-w-sm">
            {t('landing.services_subtitle')}
          </p>
        </ScrollScrub>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              num: "01",
              title: t('landing.digital_product'),
              entails: t('landing.digital_product_entails'),
              path: "/system/01",
              wrapperClass: "bg-[#131111]/80 backdrop-blur-xl text-white border border-white/10 hover:border-earth/50 hover:bg-[#131111]/90 relative overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]",
              numberClass: "text-earth/20 group-hover:text-earth",
              lineClass: "bg-earth/50 w-[1px] h-12 ml-4", // Vertical rule
              subtitleClass: "text-earth",
              textClass: "text-white/70",
              accentNode: (
                <div className="absolute top-8 right-4 font-mono text-[8px] uppercase tracking-widest text-white/30" style={{ writingMode: 'vertical-rl' }}>
                  {t('landing.vertical_alignment')}
                </div>
              )
            },
            {
              num: "02",
              title: t('landing.transmedia'),
              entails: t('landing.transmedia_entails'),
              path: "/system/02",
              wrapperClass: "bg-white/10 backdrop-blur-2xl text-white border border-white/20 hover:border-white/40 hover:bg-white/15 relative overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]",
              numberClass: "text-white/20 group-hover:text-white/60",
              lineClass: "bg-white/30 h-[4px]",
              subtitleClass: "text-white",
              textClass: "text-white/80",
              accentNode: (
                <div className="absolute top-8 left-8 right-8">
                  <div className="w-full h-[1px] bg-white/20 mb-1"></div>
                  <div className="w-full h-[1px] bg-white/20 mb-1"></div>
                  <div className="w-full h-[1px] bg-white/20"></div>
                </div>
              )
            },
            {
              num: "03",
              title: t('landing.phygital'),
              entails: t('landing.phygital_entails'),
              path: "/system/03",
              wrapperClass: "bg-gradient-to-br from-earth/40 to-[#131111]/80 backdrop-blur-xl text-white border border-earth/30 hover:border-earth/60 relative overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]",
              numberClass: "text-white/10 group-hover:text-earth",
              lineClass: "bg-white/50 w-8 h-[2px]",
              subtitleClass: "text-earth",
              textClass: "text-white/80",
              accentNode: (
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-earth to-earth/50 opacity-20 blur-2xl transition-transform group-hover:scale-150 origin-center rounded-full"></div>
              )
            }
          ].map((service, i) => (
            <ScrollScrub key={i} y={120 + i * 90} scale={0.94} className="h-full">
              <Link
                to={service.path}
                className={`block rounded-[2rem] p-8 border transition-all duration-500 group flex flex-col h-full hover:-translate-y-2 shadow-sm hover:shadow-xl ${service.wrapperClass}`}
              >
                {service.accentNode}
                <div className={`font-mono font-bold text-7xl md:text-8xl transition-colors mb-12 tracking-tighter relative z-10 ${service.numberClass}`}>
                  {service.num}.
                </div>
                <div className="mt-auto relative z-10">
                  <div className={`mb-6 ${service.lineClass || 'w-8 h-[2px]'}`}></div>
                  <h4 className="font-serif italic text-3xl mb-8 leading-tight">{service.title}</h4>
                  <div className="space-y-6">
                    <div>
                      <p className={`font-sans font-light text-sm leading-relaxed ${service.textClass}`}>
                        {service.entails}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollScrub>
          ))}
        </div>
      </section>



      

      
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-[100] bg-paper overflow-y-auto"
          >
            <div className="min-h-screen px-4 md:px-12 py-12 md:py-24 max-w-[1600px] mx-auto">
              <div className="flex justify-between items-end mb-16 border-b border-ink/10 pb-8">
                <div>
                  <h2 className="font-serif italic text-4xl md:text-6xl text-ink mb-4">
                    {i18n.language === 'es' ? 'Casos de Éxito' : 'Work Gallery'}
                  </h2>
                </div>
                <button 
                  onClick={() => setIsGalleryOpen(false)}
                  className="p-4 bg-stone rounded-full hover:bg-ink/5 transition-colors border border-ink/10 flex items-center justify-center shrink-0"
                >
                  <X className="w-6 h-6 text-ink" />
                </button>
              </div>

              <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                {clientsData.map((client, i) => (
                  <motion.div 
                    key={i} 
                    className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer bg-stone border border-ink/10"
                    onClick={() => {
                      setIsGalleryOpen(false);
                      navigate(`/project/${client.id}`);
                    }}
                  >
                    <div className="relative">
                      <img 
                        src={client.thumb} 
                        alt={client.name} 
                        className="w-full h-auto object-cover filter saturate-50 contrast-125 group-hover:saturate-100 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <div className="flex gap-2 mb-3">
                        {client.category && <span className="bg-earth/80 text-[8px] font-mono uppercase tracking-widest px-2 py-1 rounded-sm">{client.category}</span>}
                        {client.segment && <span className="bg-white/20 backdrop-blur-sm text-[8px] font-mono uppercase tracking-widest px-2 py-1 rounded-sm">{client.segment}</span>}
                      </div>
                      <img src={client.logo} alt={client.name} className="h-6 object-contain filter invert brightness-0 mb-2" />
                      <p className="font-serif italic text-sm text-white/80 line-clamp-2">{client.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      

    </div>
  );
}
