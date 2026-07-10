import React from 'react';
import Logo from './Logo';

export default function Sidebar() {
  return (
    <aside className="w-full md:w-64 bg-ink text-ink-inverse md:fixed md:h-screen flex flex-col justify-between p-8 border-r border-ink z-50">
      <div>
        <div className="mb-12">
          <Logo size={40} color="var(--color-ink-inverse)" />
          <p className="font-sans font-medium text-[10px] tracking-widest uppercase mt-4 text-stone/70">
            Brand Manual v1.0
          </p>
        </div>
        
        <nav className="space-y-6">
          <a href="#hero" className="block font-sans font-light text-sm hover:text-earth transition-colors">00 / Intro</a>
          <a href="#strategy" className="block font-sans font-light text-sm hover:text-earth transition-colors">01 / Strategy</a>
          <a href="#services" className="block font-sans font-light text-sm hover:text-earth transition-colors">02 / Services</a>
          <a href="#verbal" className="block font-sans font-light text-sm hover:text-earth transition-colors">03 / Verbal Identity</a>
          <a href="#visual" className="block font-sans font-light text-sm hover:text-earth transition-colors">04 / Visual System</a>
        </nav>
      </div>

      <div className="hidden md:block">
        <div className="w-8 h-8 bg-earth"></div>
        <p className="font-sans font-medium text-[10px] tracking-widest uppercase mt-4 text-stone/50">
          Confidential
        </p>
      </div>
    </aside>
  );
}
