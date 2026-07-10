import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const BrandLogoDark = ({ name, src }: { name: string, src: string }) => {
  return (
    <div className="flex items-center justify-center shrink-0 w-40 md:w-56 aspect-[3/2] bg-gradient-to-br from-neutral-200 to-neutral-400 rounded-3xl p-6 shadow-xl mx-4 border border-white/20">
      <img 
        src={src} 
        alt={name} 
        className="h-10 md:h-16 w-full object-contain opacity-80 hover:opacity-100 transition-opacity drop-shadow-sm" 
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default function VerbalIdentity() {
  const { t, i18n } = useTranslation();
  return (
    <section id="verbal" className="space-y-16 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-3 border-t border-ink pt-4">
          <h2 className="font-mono text-xs tracking-widest uppercase text-earth">{i18n.language === 'es' ? "04 / Identidad Verbal" : "04 / Verbal Identity"}</h2>
        </div>
        <div className="md:col-span-9 space-y-16 border-t border-ink pt-4">
          
          <div className="bg-stone rounded-[2rem] p-8 md:p-12 border border-ink/10">
            <h4 className="font-mono text-[10px] tracking-widest uppercase mb-6 text-ink/50">{i18n.language === 'es' ? "Eslogan" : "Tagline"}</h4>
            <h3 className="font-serif italic text-4xl md:text-5xl text-earth">
              {i18n.language === 'es' ? (
                <>Donde la imaginación<br />se encuentra con la ingeniería.</>
              ) : (
                <>Where imagination<br />meets engineering.</>
              )}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-mono text-[10px] tracking-widest uppercase mb-6 text-ink/50 border-b border-dashed border-ink/20 pb-4">{i18n.language === 'es' ? "Discurso del Elevador" : "Elevator Pitch"}</h4>
              <p className="font-sans font-light text-sm leading-relaxed">
                {i18n.language === 'es' ? "Con 8 años uniendo la imaginación y la ingeniería, diseño y construyo cómo existen las marcas en lo físico y lo digital. Desde diseño espacial hasta IA, desde dirección creativa hasta software — ingenio sistemas phygital de principio a fin. Una sola mente, desde el concepto hasta la ejecución." : "With 8 years bringing imagination and engineering together, I design and build how brands exist across physical and digital. From spatial design to AI, from creative direction to software — I engineer phygital systems end to end. One mind, from concept to execution."}
              </p>
            </div>

            <div>
              <h4 className="font-mono text-[10px] tracking-widest uppercase mb-6 text-ink/50 border-b border-dashed border-ink/20 pb-4">{i18n.language === 'es' ? "Tono de Voz" : "Tone of Voice"}</h4>
              <p className="font-sans font-medium text-base mb-4">
                {i18n.language === 'es' ? "Cálido pero contenido. Confianza a través de la moderación, no del volumen." : "Warm but contained. Confidence through restraint, not volume."}
              </p>
              <ul className="space-y-3 font-mono text-[10px] uppercase tracking-wider text-ink/70 list-none pl-0">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-earth rounded-sm"></div>
                  {i18n.language === 'es' ? "Sin signos de exclamación." : "No exclamation marks."}
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-earth rounded-sm"></div>
                  {i18n.language === 'es' ? "Sin amontonar palabras de moda." : "No buzzword stacking."}
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-earth rounded-sm"></div>
                  {i18n.language === 'es' ? "Sensibilidad tipo Aesop / Byredo." : "Aesop / Byredo sensibility."}
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Brands Banner - Techy Marquee Style */}
      <div className="bg-ink text-ink-inverse py-6 overflow-hidden relative flex items-center border-y-4 border-earth">
        {/* Gradient fades for smooth entry/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-12 px-4 md:px-6">
              {[
                { name: "L'OREAL", src: "https://firebasestorage.googleapis.com/v0/b/landing-tangible.firebasestorage.app/o/Proyectos%2FJM%2FArchivos%2Floreal_negro_transparent.webp?alt=media&token=84a9e73c-4006-4784-a2c2-ca06d0d4ea09" },
                { name: "Yamaha", src: "https://firebasestorage.googleapis.com/v0/b/landing-tangible.firebasestorage.app/o/Proyectos%2FJM%2FArchivos%2Fyamaha_negro_transparent_1.webp?alt=media&token=faeb3f6a-5935-488b-aa24-ab2a6c5185ce" },
                { name: "Chevignon", src: "https://firebasestorage.googleapis.com/v0/b/landing-tangible.firebasestorage.app/o/Proyectos%2FJM%2FArchivos%2Fchevignon_negro_transparent.webp?alt=media&token=74c554ae-0b8a-4bdb-9fe7-f54b286388ba" },
                { name: "TUGO", src: "https://firebasestorage.googleapis.com/v0/b/landing-tangible.firebasestorage.app/o/Proyectos%2FJM%2FArchivos%2Ftugo_negro_transparent.webp?alt=media&token=122db7fd-256a-4c39-895a-6906023031bd" },
                { name: "Leonisa", src: "https://firebasestorage.googleapis.com/v0/b/landing-tangible.firebasestorage.app/o/Proyectos%2FJM%2FArchivos%2Fleonisa_negro_transparent.webp?alt=media&token=b807e5bb-2145-4870-88e3-9109f2d7ba2b" },
                { name: "Alfa", src: "https://firebasestorage.googleapis.com/v0/b/landing-tangible.firebasestorage.app/o/Proyectos%2FJM%2FArchivos%2Falfa_negro_transparent.webp?alt=media&token=40b9fa53-72fb-4332-ad3b-71e000b1542e" }
              ].map((brand, j) => (
                <React.Fragment key={j}>
                  <BrandLogoDark name={brand.name} src={brand.src} />
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
