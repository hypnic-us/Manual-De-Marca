import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Instagram, Linkedin, Mail, ChevronDown, Globe as GlobeIcon } from 'lucide-react';
import { motion, useAnimation } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function TopNav() {
  const location = useLocation();
  const isLanding = location.pathname === '/';
  const { t, i18n } = useTranslation();
  
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const workDropdownRef = useRef<HTMLDivElement>(null);
  const contactDropdownRef = useRef<HTMLDivElement>(null);
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const logoControls = useAnimation();

  const handleWorkLinkClick = (targetId: string, category?: 'amplify' | 'echo' | 'stage') => {
    setIsWorkOpen(false);
    if (isLanding) {
      if (targetId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: targetId === 'cases' ? 'center' : 'start' });
        }
      }
      if (category) {
        const event = new CustomEvent('change-video-category', { detail: category });
        window.dispatchEvent(event);
      }
    }
  };

  const [isNavVisible, setIsNavVisible] = useState(true);
  const isAnyDropdownOpen = isWorkOpen || isContactOpen || isLanguageOpen;

  useEffect(() => {
    let timeoutId;

    const handleActivity = () => {
      setIsNavVisible(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsNavVisible(false);
      }, 3000);
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('scroll', handleActivity, { passive: true });
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('click', handleActivity);
    window.addEventListener('touchstart', handleActivity, { passive: true });

    handleActivity();

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
    };
  }, []);

  useEffect(() => {
    if (isAnyDropdownOpen) {
      setIsNavVisible(true);
    }
  }, [isAnyDropdownOpen]);


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (workDropdownRef.current && !workDropdownRef.current.contains(event.target as Node)) {
        setIsWorkOpen(false);
      }
      if (contactDropdownRef.current && !contactDropdownRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
      }
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    let isActive = true;
    const sequence = async () => {
      if (!isActive) return;
      await logoControls.start({ 
        scale: 1, 
        opacity: 1, 
        rotate: 0, 
        transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] } 
      });
      
      if (isActive) {
        logoControls.start({ 
          y: [0, -3, 0], 
          rotate: [0, 1, -1, 0],
          scale: [1, 1.02, 1],
          transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } 
        });
      }
    };
    sequence();
    return () => { isActive = false; };
  }, [logoControls]);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: isNavVisible || isAnyDropdownOpen ? 0 : "-100%", opacity: isNavVisible || isAnyDropdownOpen ? 1 : 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsNavVisible(true)}
      className="sticky top-2 md:top-4 left-0 w-full p-2 md:px-4 flex flex-wrap gap-2 items-center justify-between z-50 bg-paper/80 backdrop-blur-md border border-ink/10 shadow-sm"
    >
      <div className="flex items-center gap-3 shrink-0 lg:w-[250px]">
        <motion.div 
          initial={{ scale: 0, opacity: 0, rotate: -45 }}
          animate={logoControls}
          className="h-8 md:h-12 flex items-center justify-center shrink-0 relative"
        >
          <Logo size={32} color="var(--color-ink)" />
        </motion.div>
        <div className="hidden sm:block">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-bold text-[10px] uppercase tracking-[0.2em] text-ink leading-none mb-0.5"
          >
            Juan Manuel
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif italic text-[10px] text-earth leading-none"
          >
            Montoya.
          </motion.div>
        </div>
      </div>
      
      {/* View Switcher */}
      <div className="flex bg-stone rounded-full p-1 border border-ink/10 shrink-0 lg:mx-auto">
        <div className="relative" ref={workDropdownRef}>
          <button 
            onClick={() => setIsWorkOpen(!isWorkOpen)}
            className={`px-4 md:px-5 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-1 ${location.pathname === '/' ? 'bg-ink text-ink-inverse shadow-sm' : 'text-ink/60 hover:text-ink'}`}
          >
            {t('nav.work')}
            <ChevronDown className={`w-3 h-3 transition-transform ${isWorkOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isWorkOpen && (
            <div className="absolute left-0 top-full mt-2 w-48 bg-paper border border-ink/10 rounded-2xl shadow-xl overflow-hidden flex flex-col z-50 animate-in slide-in-from-top-2 fade-in duration-200">
              <Link 
                to="/#hero" 
                className={`flex items-center gap-3 px-4 py-3 hover:bg-stone transition-colors text-xs font-mono uppercase tracking-wider border-b border-ink/5 ${isLanding && !location.hash ? 'text-earth font-bold' : 'text-ink/80 hover:text-ink'}`}
                onClick={() => handleWorkLinkClick('hero')}
              >
                {i18n.language === 'es' ? 'Inicio' : 'Overview'}
              </Link>
              <Link 
                to="/#amplify" 
                className={`flex items-center gap-3 px-4 py-3 hover:bg-stone transition-colors text-xs font-mono uppercase tracking-wider border-b border-ink/5 ${location.hash === '#amplify' ? 'text-earth font-bold' : 'text-ink/80 hover:text-ink'}`}
                onClick={() => handleWorkLinkClick('gallery', 'amplify')}
              >
                01 / Amplify
              </Link>
              <Link 
                to="/#echo" 
                className={`flex items-center gap-3 px-4 py-3 hover:bg-stone transition-colors text-xs font-mono uppercase tracking-wider border-b border-ink/5 ${location.hash === '#echo' ? 'text-earth font-bold' : 'text-ink/80 hover:text-ink'}`}
                onClick={() => handleWorkLinkClick('gallery', 'echo')}
              >
                02 / Echo
              </Link>
              <Link 
                to="/#stage" 
                className={`flex items-center gap-3 px-4 py-3 hover:bg-stone transition-colors text-xs font-mono uppercase tracking-wider border-b border-ink/5 ${location.hash === '#stage' ? 'text-earth font-bold' : 'text-ink/80 hover:text-ink'}`}
                onClick={() => handleWorkLinkClick('gallery', 'stage')}
              >
                03 / Stage
              </Link>
              <Link 
                to="/#cases" 
                className={`flex items-center gap-3 px-4 py-3 hover:bg-stone transition-colors text-xs font-mono uppercase tracking-wider border-b border-ink/5 ${location.hash === '#cases' ? 'text-earth font-bold' : 'text-ink/80 hover:text-ink'}`}
                onClick={() => handleWorkLinkClick('cases')}
              >
                {i18n.language === 'es' ? '04 / Casos' : '04 / Cases'}
              </Link>
              <Link 
                to="/#experience" 
                className={`flex items-center gap-3 px-4 py-3 hover:bg-stone transition-colors text-xs font-mono uppercase tracking-wider ${location.hash === '#experience' ? 'text-earth font-bold' : 'text-ink/80 hover:text-ink'}`}
                onClick={() => handleWorkLinkClick('experience')}
              >
                {i18n.language === 'es' ? '05 / Años Experiencia' : '05 / Experience'}
              </Link>
            </div>
          )}
        </div>
        <NavLink 
          to="/me"
          className={({ isActive }) => `px-4 md:px-5 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-mono uppercase tracking-wider transition-colors ${isActive ? 'bg-earth text-ink-inverse shadow-sm' : 'text-ink/60 hover:text-ink'}`}
        >
          {t('nav.me')}
        </NavLink>
        <NavLink 
          to="/manual"
          className={({ isActive }) => `hidden lg:block px-4 md:px-5 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-mono uppercase tracking-wider transition-colors ${isActive ? 'bg-ink text-ink-inverse shadow-sm' : 'text-ink/60 hover:text-ink'}`}
        >
          {t('nav.manual')}
        </NavLink>
      </div>

      <div className="flex-1 border border-dashed border-ink/30 rounded-full px-6 py-3 text-center text-xs font-mono uppercase tracking-widest text-ink/50 hidden 2xl:block truncate mx-2">
        {isLanding ? t('nav.portfolio') : t('nav.engineer')}
      </div>
      
      <div className="flex shrink-0 items-center md:gap-2 ml-auto lg:w-[250px] lg:justify-end">
        <div className="relative mr-2 md:mr-0" ref={languageDropdownRef}>
          <button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="flex items-center justify-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-stone hover:bg-ink/5 transition-colors border border-ink/10"
            title={i18n.language === 'es' ? "Cambiar idioma" : "Switch Language"}
          >
            <span className="font-mono text-[10px] uppercase font-bold text-ink/70">
              {i18n.language === 'es' ? 'ES' : 'EN'}
            </span>
            <ChevronDown className={`w-3 h-3 text-ink/50 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
          </button>

          {isLanguageOpen && (
            <div className="absolute right-0 top-full mt-2 w-32 bg-paper border border-ink/10 rounded-2xl shadow-xl overflow-hidden flex flex-col z-50 animate-in slide-in-from-top-2 fade-in duration-200">
              <button 
                onClick={() => { i18n.changeLanguage('es'); setIsLanguageOpen(false); }} 
                className={`flex items-center gap-3 px-4 py-3 hover:bg-stone transition-colors text-xs font-mono uppercase tracking-wider ${i18n.language === 'es' ? 'text-earth font-bold' : 'text-ink/80 hover:text-ink'} border-b border-ink/5 text-left`}
              >
                Español
              </button>
              <button 
                onClick={() => { i18n.changeLanguage('en'); setIsLanguageOpen(false); }} 
                className={`flex items-center gap-3 px-4 py-3 hover:bg-stone transition-colors text-xs font-mono uppercase tracking-wider ${i18n.language === 'en' ? 'text-earth font-bold' : 'text-ink/80 hover:text-ink'} text-left`}
              >
                English
              </button>
            </div>
          )}
        </div>

        <div className="relative" ref={contactDropdownRef}>
          <button 
            onClick={() => setIsContactOpen(!isContactOpen)}
            className="bg-earth hover:bg-earth/90 text-ink-inverse px-4 md:px-5 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-2"
          >
            <span className="hidden sm:inline">{t('nav.contact')}</span>
            <span className="sm:hidden">
               <Mail className="w-3 h-3" />
            </span>
            <ChevronDown className={`w-3 h-3 transition-transform ${isContactOpen ? 'rotate-180' : ''}`} />
          </button>

          {isContactOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-paper border border-ink/10 rounded-2xl shadow-xl overflow-hidden flex flex-col z-50 animate-in slide-in-from-top-2 fade-in duration-200">
              <a href="mailto:montosierra@gmail.com" className="flex items-center gap-3 px-4 py-3 hover:bg-stone transition-colors text-xs font-mono uppercase tracking-wider text-ink/80 hover:text-ink border-b border-ink/5" onClick={() => setIsContactOpen(false)}>
                <Mail className="w-4 h-4" /> Email
              </a>
              <a href="https://www.linkedin.com/in/juan-manuel-montoya-sierra-58b698174/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 hover:bg-stone transition-colors text-xs font-mono uppercase tracking-wider text-ink/80 hover:text-ink border-b border-ink/5" onClick={() => setIsContactOpen(false)}>
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href="https://www.instagram.com/jmontosierra/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 hover:bg-stone transition-colors text-xs font-mono uppercase tracking-wider text-ink/80 hover:text-ink" onClick={() => setIsContactOpen(false)}>
                <Instagram className="w-4 h-4" /> Instagram
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
