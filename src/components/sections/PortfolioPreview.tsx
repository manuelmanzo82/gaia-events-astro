import { useState } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  filter: string;
  location: string;
  span: boolean;
}

const items: PortfolioItem[] = [
  { id: 1, title: 'Sara & Marco', category: 'Matrimonio', filter: 'matrimoni', location: 'Villa Cetinale, Toscana', span: true },
  { id: 2, title: 'Gala BNL', category: 'Corporate', filter: 'corporate', location: 'Palazzo Brancaccio, Roma', span: false },
  { id: 3, title: 'Elena & James', category: 'Destination', filter: 'destination', location: 'Borgo Egnazia, Puglia', span: false },
  { id: 4, title: 'Giulia & Andrea', category: 'Matrimonio', filter: 'matrimoni', location: 'Villa Aurelia, Roma', span: false },
  { id: 5, title: 'Launch Event Zurich', category: 'Corporate', filter: 'corporate', location: 'Hotel de Russie, Roma', span: false },
];

const filters = [
  { label: 'Tutti', value: 'tutti' },
  { label: 'Matrimoni', value: 'matrimoni' },
  { label: 'Corporate', value: 'corporate' },
  { label: 'Destination', value: 'destination' },
];

export default function PortfolioPreview() {
  const [activeFilter, setActiveFilter] = useState('tutti');

  const filtered = activeFilter === 'tutti'
    ? items
    : items.filter((item) => item.filter === activeFilter);

  return (
    <section data-navbar-theme="light" className="py-20 px-6">
      {/* Header + Filters */}
      <div className="max-w-[1150px] mx-auto mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-sans text-[0.7rem] tracking-[0.2em] uppercase text-sage mb-4">
              Portfolio
            </p>
            <h2 className="font-serif text-[clamp(1.8rem,4vw,2.5rem)] font-normal text-charcoal">
              Eventi Realizzati
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`font-sans text-[0.7rem] tracking-[0.1em] uppercase px-4 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === f.value
                    ? 'bg-charcoal text-ivory'
                    : 'text-charcoal/60 hover:text-charcoal'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-[1150px] mx-auto grid grid-cols-2 md:grid-cols-3 auto-rows-[280px] md:auto-rows-[320px] gap-2">
        {filtered.map((item) => (
          <a
            key={item.id}
            href="/portfolio"
            className={`group relative overflow-hidden rounded-[3px] cursor-pointer ${
              item.span ? 'row-span-2' : ''
            }`}
          >
            {/* Placeholder Background */}
            <div className="absolute inset-0 bg-beige flex items-center justify-center">
              <span className="text-charcoal/15 text-sm tracking-widest uppercase select-none">
                {item.title}
              </span>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p className="font-sans text-[0.6rem] tracking-[0.15em] uppercase text-gold mb-1">
                {item.category}
              </p>
              <h3 className="font-serif text-[1.2rem] text-white mb-0.5">
                {item.title}
              </h3>
              <p className="font-sans text-[0.7rem] text-white/60">
                {item.location}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* CTA Link */}
      <div className="text-center mt-12">
        <a
          href="/portfolio"
          className="group inline-flex items-center gap-2 font-sans text-[0.8rem] tracking-[0.12em] uppercase text-gold hover:gap-4 transition-all duration-300"
        >
          Vedi Tutti gli Eventi
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
