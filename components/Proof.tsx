import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Proof() {
  const { i18n } = useTranslation();
  const es = i18n.language === 'es';

  const stats = [
    { n: '+59%', d: es ? 'Ticket promedio retail: $2.2M → $3.5M en seis meses, bajo su dirección.' : 'Average retail ticket: $2.2M → $3.5M in six months, under his direction.' },
    { n: '#1', d: es ? 'Forbes "15 Pequeñas Gigantes" 2026 — la compañía que fundó y vendió.' : 'Forbes "15 Small Giants" 2026 — the company he founded and sold.' },
    { n: '8', d: es ? 'Años liderando producto, diseño e ingeniería end to end.' : 'Years leading product, design, and engineering end to end.' },
    { n: '6', d: es ? 'Mercados: EE. UU., México, España, Francia, Centroamérica, Colombia.' : 'Markets: USA, Mexico, Spain, France, Central America, Colombia.' },
  ];

  const clients = [
    { name: "L'Oréal", tag: es ? 'Campaña interactiva AR' : 'Interactive AR Campaign' },
    { name: 'Yamaha', tag: es ? 'Showroom digital · Config 3D' : 'Digital Showroom · 3D Config' },
    { name: 'Chevignon', tag: es ? 'Retail inmersivo' : 'Immersive Retail' },
    { name: 'Tugó', tag: es ? 'E-commerce · Muebles AR' : 'E-commerce · AR Furniture' },
    { name: 'Leonisa', tag: es ? 'Probador virtual' : 'Virtual Fitting Room' },
    { name: 'Alfa', tag: es ? 'Visualización de materiales' : 'Material Visualization' },
    { name: 'Totto', tag: es ? 'Flagship interactivo' : 'Interactive Flagship' },
    { name: 'Studio F', tag: es ? 'Pop-ups phygital' : 'Phygital Pop-ups' },
    { name: 'Postobón', tag: es ? 'Transmedia · Empaque AR' : 'Transmedia · AR Packaging' },
    { name: 'Bancolombia', tag: es ? 'Diseño de sucursales · Kioskos' : 'Branch Design · Kiosks' },
    { name: 'Avianca', tag: es ? 'UI de entretenimiento a bordo' : 'Boarding · Entertainment UI' },
  ];

  return (
    <section id="proof" className="space-y-16 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-3 border-t border-ink pt-4">
          <h2 className="font-mono text-xs tracking-widest uppercase text-earth">{es ? '05 / Prueba' : '05 / Proof'}</h2>
        </div>
        <div className="md:col-span-9 border-t border-ink pt-4">
          <h3 className="font-serif text-3xl md:text-5xl leading-tight mb-16">
            {es ? <>Resultados, <span className="italic text-earth">no promesas.</span></> : <>Results, <span className="italic text-earth">not claims.</span></>}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((s) => (
              <div key={s.n} className="border-t-2 border-earth pt-4">
                <p className="font-serif font-bold text-earth text-4xl md:text-5xl mb-3">{s.n}</p>
                <p className="font-sans font-light text-xs text-ink/70 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>

          <h4 className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-6">{es ? 'Clientes — lista canónica' : 'Clients — canonical list'}</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10 border border-ink/10 rounded-2xl overflow-hidden">
            {clients.map((c) => (
              <div key={c.name} className="bg-white p-5 min-h-[96px] flex flex-col justify-center">
                <span className="font-sans font-medium text-sm">{c.name}</span>
                <span className="font-mono text-[8px] uppercase tracking-widest text-ink/40 mt-1.5">{c.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
