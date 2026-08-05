import React from 'react';
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
  const es = i18n.language === 'es';

  const wordsUse = es
    ? ['Engineer · Design · Build', 'System · Coherence · Integration', 'Phygital · Physical-digital', 'Direct · End to end', 'Imagination · Vision · Criteria']
    : ['Engineer · Design · Build', 'System · Coherence · Integration', 'Phygital · Physical-digital', 'Direct · End to end', 'Imagination · Vision · Criteria'];

  const wordsAvoid = ['Synergy · Leverage · Disruptive', 'Passionate about · Excited to · Thrilled', 'Guru · Ninja · Rockstar', 'Solutions · Optimize · Scalable', 'Game-changer · Next-level · Seamless', 'Transformation · Innovation · Holistic', 'Cutting-edge · World-class · Best-in-class'];

  const phrasesAvoid = es
    ? ['"Emocionado de anunciar" · "Honrado de compartir"', '"Me apasiona..." · "Mantente atento"', '"Sin más preámbulo"', '"¿Qué opinas?" · "¿Están de acuerdo?"', '"Escríbeme por DM para saber más" · "Click en el link de la bio"']
    : ['Thrilled to announce · Honored to share', "I'm passionate about... · Stay tuned", 'Without further ado', 'Thoughts? · Agree?', 'DM me to learn more · Click the link in bio'];

  const formatsAvoid = es
    ? ['Hilos motivacionales sin sustancia', 'Listas de "10 tips para..."', '"Plot twist:" y cualquier hook clickbait', '"Stop scrolling" y similares']
    : ['Motivational threads with no substance', '"10 tips for..." listicles', '"Plot twist:" and any clickbait hook', '"Stop scrolling" and similar']

  const filter = es
    ? [
        { n: '01', p: '¿Hay un caso real que se pueda contar?' },
        { n: '02', p: '¿Hay una opinión clara que aporte criterio?' },
        { n: '03', p: '¿Hay un experimento personal que documentar?' },
        { n: 'Si no', p: 'No publiques. Mejor no decir, que decir vacío. La marca se construye por la calidad de lo que se dice, no por la frecuencia.' },
        { n: 'Test final', p: '¿Lo diría Aesop? Si suena a marca premium que respeta a su audiencia y no le grita, va bien. ¿Lo diría Juan en una cena con cuatro personas más?' },
      ]
    : [
        { n: '01', p: 'Is there a real case that can be told?' },
        { n: '02', p: 'Is there a clear opinion that adds criteria?' },
        { n: '03', p: 'Is there a personal experiment to document?' },
        { n: 'If not', p: "Don't publish. Better to say nothing than to say something empty. The brand is built by the quality of what's said, not the frequency." },
        { n: 'Final test', p: 'Would Aesop say this? If it sounds like a premium brand that respects its audience and never shouts, it works. Would Juan say this at dinner with four other people?' },
      ];

  return (
    <section id="verbal" className="space-y-16 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-3 border-t border-ink pt-4">
          <h2 className="font-mono text-xs tracking-widest uppercase text-earth">{es ? "03 / Voz e Identidad Verbal" : "03 / Voice & Verbal Identity"}</h2>
        </div>
        <div className="md:col-span-9 space-y-16 border-t border-ink pt-4">

          <div className="bg-stone rounded-[2rem] p-8 md:p-12 border border-ink/10">
            <h4 className="font-mono text-[10px] tracking-widest uppercase mb-6 text-ink/50">{es ? "Eslogan" : "Tagline"}</h4>
            <h3 className="font-serif italic text-4xl md:text-5xl text-earth">
              {es ? (
                <>Donde la imaginación<br />se encuentra con la ingeniería.</>
              ) : (
                <>Where imagination<br />meets engineering.</>
              )}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-mono text-[10px] tracking-widest uppercase mb-6 text-ink/50 border-b border-dashed border-ink/20 pb-4">{es ? "Discurso del Elevador" : "Elevator Pitch"}</h4>
              <p className="font-sans font-light text-sm leading-relaxed">
                {es ? "Con 8 años uniendo la imaginación y la ingeniería, diseño y construyo cómo existen las marcas en lo físico y lo digital. Desde diseño espacial hasta IA, desde dirección creativa hasta software — ingenio sistemas phygital de principio a fin. Una sola mente, desde el concepto hasta la ejecución." : "With 8 years bringing imagination and engineering together, I design and build how brands exist across physical and digital. From spatial design to AI, from creative direction to software — I engineer phygital systems end to end. One mind, from concept to execution."}
              </p>
            </div>

            <div>
              <h4 className="font-mono text-[10px] tracking-widest uppercase mb-6 text-ink/50 border-b border-dashed border-ink/20 pb-4">{es ? "Tono de Voz" : "Tone of Voice"}</h4>
              <p className="font-sans font-medium text-base mb-4">
                {es ? "Cálido pero contenido. Confianza a través de la moderación, no del volumen." : "Warm but contained. Confidence through restraint, not volume."}
              </p>
              <ul className="space-y-3 font-mono text-[10px] uppercase tracking-wider text-ink/70 list-none pl-0">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-earth rounded-sm"></div>
                  {es ? "Sin signos de exclamación." : "No exclamation marks."}
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-earth rounded-sm"></div>
                  {es ? "Sin amontonar palabras de moda." : "No buzzword stacking."}
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-earth rounded-sm"></div>
                  {es ? "Cero emojis en B2B; con criterio y rara vez en B2C." : "Zero emojis in B2B; used sparingly and with judgment in B2C."}
                </li>
              </ul>
            </div>
          </div>

          {/* Words we use / never use */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4 border-t border-ink/10">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-earth mb-5">{es ? "Palabras que usamos" : "Words we use"}</h4>
              <ul className="divide-y divide-ink/10 font-sans text-sm">
                {wordsUse.map((w) => <li key={w} className="py-3">{w}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-ink/40 mb-5">{es ? "Palabras que nunca usamos — en ningún canal" : "Words we never use — any channel"}</h4>
              <ul className="divide-y divide-ink/10 font-sans text-sm text-ink/40">
                {wordsAvoid.map((w) => <li key={w} className="py-3 line-through decoration-earth/60">{w}</li>)}
              </ul>
            </div>
          </div>

          {/* Forbidden phrases / formats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-ink/40 mb-5">{es ? "Frases prohibidas" : "Forbidden phrases"}</h4>
              <ul className="divide-y divide-ink/10 font-sans text-sm text-ink/40">
                {phrasesAvoid.map((w) => <li key={w} className="py-3 line-through decoration-earth/60">{w}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-ink/40 mb-5">{es ? "Formatos prohibidos" : "Forbidden formats"}</h4>
              <ul className="divide-y divide-ink/10 font-sans text-sm text-ink/40">
                {formatsAvoid.map((w) => <li key={w} className="py-3 line-through decoration-earth/60">{w}</li>)}
              </ul>
            </div>
          </div>

          {/* The filter */}
          <div className="pt-4 border-t border-ink/10">
            <h4 className="font-mono text-xs uppercase tracking-widest text-earth mb-6">{es ? "El filtro — antes de publicar" : "The filter — before publishing"}</h4>
            <div className="divide-y divide-ink/10 max-w-3xl">
              {filter.map((row) => (
                <div key={row.n} className="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-2 sm:gap-8 py-5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink/50">{row.n}</span>
                  <p className={`font-sans text-sm leading-relaxed ${row.n === 'Final test' || row.n === 'Test final' ? 'italic font-serif text-base' : ''}`}>{row.p}</p>
                </div>
              ))}
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
