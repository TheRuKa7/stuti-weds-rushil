import { venueInfo, wedding } from "@/lib/content";
import { CornerFlourish, MotifDivider } from "./motifs";
import Reveal from "./Reveal";

export default function Venue() {
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueInfo.mapQuery)}`;

  return (
    <section id="venue" className="section-pad relative px-6">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-saffron-deep">Where it all happens</p>
          <h2 className="mt-3 font-display text-4xl text-red-deep sm:text-5xl">{venueInfo.title}</h2>
          <MotifDivider className="mt-6" />
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-9 overflow-hidden rounded-[28px] border border-gold/40 bg-cream/80 p-8 text-center shadow-card backdrop-blur-sm sm:p-12">
            <CornerFlourish className="pointer-events-none absolute left-3 top-3 h-14 w-14 text-gold/45" />
            <CornerFlourish className="pointer-events-none absolute right-3 top-3 h-14 w-14 -scale-x-100 text-gold/45" />
            <CornerFlourish className="pointer-events-none absolute bottom-3 left-3 h-14 w-14 -scale-y-100 text-gold/45" />
            <CornerFlourish className="pointer-events-none absolute bottom-3 right-3 h-14 w-14 -scale-100 text-gold/45" />

            <h3 className="font-display text-3xl text-red sm:text-4xl">{venueInfo.name}</h3>
            <p className="mt-2 text-xs uppercase tracking-[0.24em] text-ink-soft">{venueInfo.city}</p>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ink-soft">{venueInfo.blurb}</p>
            <p className="mt-4 font-display text-xl text-saffron-deep">{wedding.dates}</p>

            <a
              href={mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-red px-6 py-2.5 text-[12px] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-red-deep"
            >
              <PinIcon /> Open in Maps
            </a>
          </div>
        </Reveal>

        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          {venueInfo.travel.map((t, i) => (
            <Reveal
              key={t.label}
              delay={150 + i * 90}
              className="rounded-2xl border border-gold/35 bg-cream/70 p-5 text-center shadow-card"
            >
              <p className="font-display text-lg text-red">{t.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.value}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
