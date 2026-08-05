import React from 'react';
import { useTranslation } from 'react-i18next';

export default function VisualSystem() {
  const { i18n } = useTranslation();
  return (
    <section id="visual" className="space-y-32 pt-20">
      
      {/* Dark Section: Color System & Type Scale */}
      <div className="bg-stone text-ink rounded-[2rem] p-8 md:p-16 space-y-24 shadow-2xl border border-ink/10">
        
        {/* Color System */}
        <div>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-ink/70 mb-8">{i18n.language === 'es' ? "02 — SISTEMA DE COLOR" : "02 — COLOR SYSTEM"}</h2>
          
          <div className="flex w-full h-32 md:h-40 mb-4 rounded-t-lg overflow-hidden border border-ink/10">
            <div className="flex-1 bg-[#1A1A1A]"></div>
            <div className="flex-1 bg-[#E8E4DF]"></div>
            <div className="flex-1 bg-[#F5F3F0] border-x border-ink/10"></div>
            <div className="flex-1 bg-[#FFFFFF]"></div>
            <div className="flex-1 bg-[#C1440E]"></div>
          </div>

          <div className="flex w-full text-left mb-10">
            <div className="flex-1 pr-2">
              <p className="font-sans text-[13px] text-ink/90">Ink</p>
              <p className="font-mono text-[10px] text-ink/60">#1A1A1A</p>
            </div>
            <div className="flex-1 pr-2">
              <p className="font-sans text-[13px] text-ink/90">Stone</p>
              <p className="font-mono text-[10px] text-ink/60">#E8E4DF</p>
            </div>
            <div className="flex-1 pr-2">
              <p className="font-sans text-[13px] text-ink/90">Paper</p>
              <p className="font-mono text-[10px] text-ink/60">#F5F3F0</p>
            </div>
            <div className="flex-1 pr-2">
              <p className="font-sans text-[13px] text-ink/90">White</p>
              <p className="font-mono text-[10px] text-ink/60">#FFFFFF</p>
            </div>
            <div className="flex-1 pr-2">
              <p className="font-sans text-[13px] text-ink/90">Radiant Earth</p>
              <p className="font-mono text-[10px] text-ink/60">#C1440E · Coloro 017-42-31</p>
            </div>
          </div>

          {/* Neutrals / signal ratio */}
          <div className="flex w-full h-16 border border-ink/15 rounded-lg overflow-hidden mb-6">
            <div className="flex items-center pl-5 font-mono text-[10px] uppercase tracking-widest" style={{ flex: 8, background: 'linear-gradient(90deg, var(--color-paper), var(--color-stone))' }}>
              {i18n.language === 'es' ? 'Neutros · 80%' : 'Neutrals · 80%'}
            </div>
            <div className="flex items-center justify-center text-ink-inverse font-mono text-[10px] uppercase tracking-widest bg-earth" style={{ flex: 2 }}>
              {i18n.language === 'es' ? 'Señal · 20% máx' : 'Signal · 20% max'}
            </div>
          </div>

          <p className="font-sans text-[15px] leading-relaxed text-ink/90 max-w-4xl">
            {i18n.language === 'es' ? "Cuatro neutros cargan la marca. Radiant Earth — WGSN × Coloro Colour of the Year 2028 — es el único acento: arcilla, quemado, con tierra. Es la puntuación, no la oración. Nunca como fondo dominante en UI, nunca más del 20% de una composición." : "Four neutrals carry the brand. Radiant Earth — WGSN × Coloro Colour of the Year 2028 — is the only accent: clay, burnt, earthbound. It's the punctuation, not the sentence. Never a dominant UI background, never more than 20% of a composition."}
          </p>
        </div>

        <div className="w-full h-[1px] bg-ink/10"></div>

        {/* Type Scale */}
        <div>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-ink/70 mb-12">{i18n.language === 'es' ? "03 — ESCALA TIPOGRÁFICA" : "03 — TYPE SCALE"}</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="font-serif italic text-5xl md:text-6xl mb-2 text-ink">Display — Playfair italic 36</h3>
              <p className="font-sans text-sm text-ink/60">{i18n.language === 'es' ? "Titulares Hero, características" : "Hero headlines, feature titles"}</p>
            </div>
            <div>
              <h3 className="font-sans font-bold text-3xl md:text-4xl mb-2 text-ink">Heading — Helvetica bold 24</h3>
              <p className="font-sans text-sm text-ink/60">{i18n.language === 'es' ? "Cabeceras de sección, títulos de tarjetas" : "Section headers, card titles"}</p>
            </div>
            <div>
              <h3 className="font-sans font-light text-xl md:text-2xl mb-2 text-ink">Body — Helvetica light 16</h3>
              <p className="font-sans text-sm text-ink/60">{i18n.language === 'es' ? "Párrafos, descripciones" : "Paragraphs, descriptions"}</p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-mono font-medium text-sm md:text-base tracking-[0.2em] uppercase mb-2 text-ink">LABEL — JETBRAINS MONO 12</h3>
                <p className="font-sans text-sm text-ink/60">{i18n.language === 'es' ? "Categorías, metadatos, navegación" : "Categories, metadata, navigation"}</p>
              </div>
              <button className="w-12 h-12 rounded-full border border-ink/20 flex items-center justify-center text-ink hover:bg-ink/10 transition-colors shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M19 12l-7 7-7-7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Graphic Systems (New Section based on references) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-3 border-t border-ink pt-4">
          <h2 className="font-mono text-xs tracking-widest uppercase text-earth">{i18n.language === 'es' ? "04 / Sistemas Gráficos" : "04 / Graphic Systems"}</h2>
        </div>
        <div className="md:col-span-9 border-t border-ink pt-4 space-y-16">
          <h3 className="font-serif text-3xl mb-12">{i18n.language === 'es' ? "Reglas de composición para layouts." : "Compositional rules for layouts."}</h3>

          {/* System 1: The Glassmorphism Block */}
          <div className="bg-stone rounded-[2rem] p-8 md:p-12 border border-ink/10 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-6">
                <div className="inline-block border border-ink/20 rounded-full px-4 py-1">
                  <h4 className="font-mono text-[10px] tracking-widest uppercase text-ink/70">{i18n.language === 'es' ? "Sistema 01" : "System 01"}</h4>
                </div>
                <h4 className="font-serif text-3xl">{i18n.language === 'es' ? "El Bloque de Cristal" : "The Glass Block"}</h4>
                <p className="font-sans font-light text-sm leading-relaxed text-ink/80">
                  {i18n.language === 'es' ? "Un campo de Radiant Atmosphere — radial, orgánico, nunca en bandas — marca la temperatura. El mensaje vive en un glass block encima, siempre en la zona estable del campo, nunca en el centro turbulento." : "A Radiant Atmosphere field — radial, organic, never banded — sets the temperature. The message lives in a glass block on top, always in the stable zone of the field, never the turbulent center."}
                </p>
              </div>
              <div className="relative h-64 md:h-auto rounded-xl overflow-hidden flex items-center justify-center p-8 bg-black/40">
                {/* The Glass Block */}
                <div className="w-full h-full bg-[#131111]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] rounded-2xl p-6 flex flex-col justify-end relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-earth to-earth/50 opacity-20 blur-2xl transition-transform group-hover:scale-150 origin-center rounded-full"></div>
                  <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest relative z-10">{i18n.language === 'es' ? "Ejemplo de Cristal" : "Glass Example"}</p>
                  <p className="font-serif italic text-white text-xl relative z-10">{i18n.language === 'es' ? "Profundidad y luz." : "Depth and light."}</p>
                </div>
              </div>
            </div>
          </div>
          {/* System 2: Typographic Scale & Rules */}
          <div className="bg-stone rounded-[2rem] p-8 md:p-12 border border-ink/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="inline-block border border-ink/20 rounded-full px-4 py-1">
                  <h4 className="font-mono text-[10px] tracking-widest uppercase text-ink/70">{i18n.language === 'es' ? "Sistema 02" : "System 02"}</h4>
                </div>
                <h4 className="font-serif text-3xl">{i18n.language === 'es' ? "Escala Extrema y Reglas" : "Extreme Scale & Rules"}</h4>
                <p className="font-sans font-light text-sm leading-relaxed text-ink/80">
                  {i18n.language === 'es' ? "Contrasta tipografía masiva y audaz con microcopias. Usa reglas horizontales gruesas para anclar la composición y separar pensamientos distintos." : "Contrast massive, bold typography with micro-copy. Use thick horizontal rules to anchor the composition and separate distinct thoughts."}
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-8">
                <div className="flex items-baseline justify-between">
                  <span className="font-sans font-bold text-7xl tracking-tighter">19</span>
                  <div className="flex-1 mx-4">
                    <div className="w-full h-2 bg-ink"></div>
                    <div className="flex justify-between mt-2">
                      <span className="font-mono text-[8px] uppercase tracking-widest">Perceptions</span>
                      <span className="font-mono text-[8px] uppercase tracking-widest">2026©</span>
                    </div>
                  </div>
                  <span className="font-sans font-bold text-7xl tracking-tighter">26</span>
                </div>
              </div>
            </div>
          </div>

          {/* System 3: The "Lab" Layout (Tech + Editorial) */}
          <div className="bg-paper rounded-[2rem] p-8 md:p-12 border border-ink/10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-5 space-y-6">
                <div className="inline-block border border-ink/20 rounded-full px-4 py-1">
                  <h4 className="font-mono text-[10px] tracking-widest uppercase text-ink/70">{i18n.language === 'es' ? "Sistema 03" : "System 03"}</h4>
                </div>
                <h4 className="font-serif text-3xl">{i18n.language === 'es' ? "Tecnología + Editorial" : "Tech + Editorial"}</h4>
                <p className="font-sans font-light text-sm leading-relaxed text-ink/80">
                  {i18n.language === 'es' ? "Combina estructuras de diseño brutalitas (como texto vertical y cuadrículas contundentes) con fotografía editorial cálida." : "Combine brutalist layout structures (like vertical text and stark grids) with warm, editorial photography."}
                </p>
                <div className="pt-8">
                  <h1 className="font-sans font-bold text-6xl tracking-tighter mb-4">lab.</h1>
                  <h2 className="font-sans font-bold text-4xl tracking-tighter rotate-180" style={{ writingMode: 'vertical-rl' }}>001</h2>
                </div>
              </div>
              <div className="md:col-span-7 relative">
                <div className="absolute top-0 right-0 font-mono text-[10px] uppercase tracking-widest text-right" style={{ writingMode: 'vertical-rl' }}>
                  X-LAB<br/>MATERIALS OF<br/>CREATION 2026
                </div>
                <div className="w-full h-48 bg-earth mt-16 relative">
                  <div className="absolute -bottom-8 left-8 w-12 h-12 bg-ink flex items-center justify-center text-ink-inverse">
                    →
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Design Principles (Moved down) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-3 border-t border-ink pt-4">
          <h2 className="font-mono text-xs tracking-widest uppercase text-earth">{i18n.language === 'es' ? "05 / Principios" : "05 / Principles"}</h2>
        </div>
        <div className="md:col-span-9 border-t border-ink pt-4">
          <div className="bg-ink text-ink-inverse rounded-[2rem] p-8 md:p-12">
            <h4 className="font-mono text-[10px] tracking-widest uppercase mb-8 text-ink-inverse/50">{i18n.language === 'es' ? "Principios de Diseño" : "Design Principles"}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h5 className="font-mono text-xs text-earth mb-4 uppercase tracking-widest">{i18n.language === 'es' ? "Hacer" : "Do"}</h5>
                <ul className="space-y-3 font-sans font-light text-sm">
                  <li className="flex items-center gap-3"><span className="text-earth font-mono">+</span> {i18n.language === 'es' ? "Un campo de Radiant Atmosphere por composición" : "One Radiant Atmosphere field per composition"}</li>
                  <li className="flex items-center gap-3"><span className="text-earth font-mono">+</span> {i18n.language === 'es' ? "Mezclar serif cursiva con sans regular" : "Mix serif italic with sans regular"}</li>
                  <li className="flex items-center gap-3"><span className="text-earth font-mono">+</span> {i18n.language === 'es' ? "Grano fino (4–6%) sobre cada campo — arcilla, no plástico" : "Fine grain (4–6%) over every field — clay, not plastic"}</li>
                  <li className="flex items-center gap-3"><span className="text-earth font-mono">+</span> {i18n.language === 'es' ? "Mantener fotografía desaturada" : "Keep photography desaturated"}</li>
                </ul>
              </div>
              <div>
                <h5 className="font-mono text-xs text-earth mb-4 uppercase tracking-widest">{i18n.language === 'es' ? "No Hacer" : "Don't"}</h5>
                <ul className="space-y-3 font-sans font-light text-sm text-ink-inverse/70">
                  <li className="flex items-center gap-3"><span className="text-ink-inverse/30 font-mono">-</span> {i18n.language === 'es' ? "Gradientes en bandas — la luz no se mueve en franjas" : "Banded gradients — light doesn't move in stripes"}</li>
                  <li className="flex items-center gap-3"><span className="text-ink-inverse/30 font-mono">-</span> {i18n.language === 'es' ? "Usar más de un color de acento principal" : "Use more than one accent color"}</li>
                  <li className="flex items-center gap-3"><span className="text-ink-inverse/30 font-mono">-</span> {i18n.language === 'es' ? "Glows en objetos o texto — la atmósfera vive en el fondo" : "Glows on objects or text — atmosphere lives in the background"}</li>
                  <li className="flex items-center gap-3"><span className="text-ink-inverse/30 font-mono">-</span> {i18n.language === 'es' ? "Drop shadows — la profundidad viene del campo y el glass" : "Drop shadows — depth comes from the field and the glass"}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
