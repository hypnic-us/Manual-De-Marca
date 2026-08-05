import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t, i18n } = useTranslation();

  const services = i18n.language === 'es' ? [
    {
      num: "01",
      name: "Amplify",
      title: "Technology for products & operations.",
      desc: "Estudio el negocio por dentro y encuentro los puntos donde la tecnología multiplica lo que ya funciona — no por moda, por evidencia. Después diseño y construyo el sistema completo: software, hardware, integración. Todo conectado como una sola pieza.",
      meta: "Cuándo: amplificar lo existente o construir desde cero plataformas, SaaS y herramientas digitales. Entregable: tecnología que ya está trabajando para el negocio."
    },
    {
      num: "02",
      name: "Echo",
      title: "Transmedia marketing campaigns.",
      desc: "Campañas que arrancan en lo digital y se mueven a todos los puntos donde la marca toca al cliente — redes, físico, email, espacio, producto. La historia es la misma; lo que cambia es la forma. El lenguaje se adapta a cada canal sin perder la voz.",
      meta: "Cuándo: lanzamientos multi-audiencia o campañas que necesitan decir una cosa, fuerte, en todos lados. Entregable: sistema completo — concepto, ejecución, distribución, medición."
    },
    {
      num: "03",
      name: "Stage",
      title: "Physical experiences with technology.",
      desc: "Stands, lanzamientos, instalaciones, activaciones y showrooms experienciales. No tecnología por moda. No pantallas porque sí. Tecnología que hace que la experiencia se sienta distinta a todo lo que ya existe. Un sistema, no una decoración.",
      meta: "Cuándo: lanzamientos de producto, ferias, pop-ups, showrooms, instalaciones interactivas. Entregable: espacios construidos listos para operar — hardware integrado, software corriendo."
    }
  ] : [
    {
      num: "01",
      name: "Amplify",
      title: "Technology for products & operations.",
      desc: "I study the business from the inside and find where technology multiplies what already works — not for fashion, for evidence. Then I design and build the complete system: software, hardware, integration. All connected as one piece.",
      meta: "When: amplifying what exists, or building platforms, SaaS, and digital tools from scratch. Deliverable: technology that is already working for the business."
    },
    {
      num: "02",
      name: "Echo",
      title: "Transmedia marketing campaigns.",
      desc: "Campaigns that start digital and move to every point where the brand touches the customer — social, physical, email, space, product. The story stays the same; the form changes. The language adapts to each channel without losing the voice.",
      meta: "When: multi-audience launches or campaigns that need to say one thing, loudly, everywhere. Deliverable: a complete system — concept, execution, distribution, measurement."
    },
    {
      num: "03",
      name: "Stage",
      title: "Physical experiences with technology.",
      desc: "Stands, launches, installations, activations, and experiential showrooms. Not technology for fashion. Not screens for the sake of it. Technology that makes the experience feel different from anything that already exists. A system, not a decoration.",
      meta: "When: product launches, trade fairs, pop-ups, showrooms, interactive installations. Deliverable: built spaces ready to operate — integrated hardware, software running."
    }
  ];

  return (
    <section id="services" className="space-y-16 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-3 border-t border-ink pt-4">
          <h2 className="font-mono text-xs tracking-widest uppercase text-earth">{t('services.title')}</h2>
        </div>
        <div className="md:col-span-9 border-t border-ink pt-4">
          <h3 className="font-serif italic text-4xl md:text-5xl mb-4">{t('services.subtitle')}</h3>
          <p className="font-sans font-light text-sm text-ink/70 max-w-2xl mb-16">
            {t('services.intro')}
          </p>

          <div className="grid grid-cols-1 gap-4">
            {services.map((s, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 bg-stone border border-ink/10 rounded-[2rem] p-8 hover:border-earth transition-colors group">
                <div className="font-mono font-bold text-4xl md:text-5xl text-ink/20 group-hover:text-earth transition-colors shrink-0">
                  {s.num}
                </div>
                <div className="flex-1 flex flex-col justify-center gap-2">
                  <h4 className="font-serif text-2xl">{s.name}</h4>
                  <p className="font-serif italic text-lg text-earth">{s.title}</p>
                  <p className="font-sans font-light text-sm text-ink/70 max-w-lg leading-relaxed">
                    {s.desc}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-ink/50 max-w-lg leading-relaxed mt-2">
                    {s.meta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Audience Block */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mt-24">
        <div className="md:col-span-3"></div>
        <div className="md:col-span-9 bg-ink text-ink-inverse rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 font-sans font-bold text-[150px] text-ink-inverse/5 leading-none">
            GLOBAL
          </div>
          <div className="relative z-10">
            <div className="inline-block border border-white/20 rounded-full px-4 py-1 mb-6">
              <h4 className="font-mono text-[10px] tracking-widest uppercase text-ink-inverse/70">{t('services.target_aud')}</h4>
            </div>
            <p className="font-serif text-2xl md:text-3xl mb-4 max-w-2xl">
              {i18n.language === 'es' ? "Fundadores y CEOs de marcas que existen en ambos mundos — o necesitan hacerlo." : "Founders and CEOs of brands that exist in both worlds — or need to."}
            </p>
            <p className="font-mono text-xs text-earth mb-8">
              {i18n.language === 'es' ? "GLOBAL. PRIORIDAD INGLÉS. SEIS MERCADOS." : "GLOBAL. ENGLISH-FIRST. SIX MARKETS."}
            </p>
            <div className="flex flex-wrap gap-2">
              {['Colombia', 'Mexico', 'USA', 'France', 'Spain', 'Central America'].map(market => (
                <span key={market} className="bg-stone/10 px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-wider">
                  {i18n.language === 'es' ? (market === 'Spain' ? 'España' : market === 'Central America' ? 'Centroamérica' : market === 'France' ? 'Francia' : market === 'USA' ? 'EE. UU.' : market) : market}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
