"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { itinerary, wedding, type EventItem } from "@/lib/content";
import { googleCalendarUrl } from "@/lib/calendar";
import { Marigold, ChinarLeaf, PhulkariFlower, HexagonMonogram, MotifDivider } from "./motifs";
import Reveal from "./Reveal";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const MOTIF = {
  marigold: Marigold,
  chinar: ChinarLeaf,
  phulkari: PhulkariFlower,
  monogram: HexagonMonogram,
} as const;

const ORIGIN_LABEL: Record<EventItem["origin"], string> = {
  Punjabi: "Punjabi",
  Kashmiri: "Kashmiri",
  Both: "Punjabi · Kashmiri",
};

function EventCard({ e, side }: { e: EventItem; side: "left" | "right" }) {
  const Icon = MOTIF[e.motif];
  return (
    <Reveal
      className={`relative md:w-[calc(50%-2.25rem)] ${
        side === "right" ? "md:ml-auto md:text-left" : "md:text-right"
      }`}
    >
      {/* node on the spine */}
      <span
        className={`absolute top-7 hidden h-3.5 w-3.5 rounded-full border-2 border-gold bg-cream shadow-[0_0_0_4px_rgba(251,244,230,1)] md:block ${
          side === "right" ? "-left-[3.05rem]" : "-right-[3.05rem]"
        }`}
        aria-hidden
      />
      <article className="group relative overflow-hidden rounded-3xl border border-gold/40 bg-cream/80 p-6 shadow-card backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1 sm:p-7">
        <div className={`flex items-start gap-4 ${side === "left" ? "md:flex-row-reverse md:text-right" : ""}`}>
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/50 bg-cream text-saffron-deep">
            <Icon className="h-7 w-7" />
          </span>
          <div className="min-w-0">
            <div className={`flex flex-wrap items-baseline gap-x-3 gap-y-1 ${side === "left" ? "md:justify-end" : ""}`}>
              <h3 className="font-display text-2xl text-red-deep sm:text-3xl">{e.title}</h3>
              {e.hindi && <span className="font-script text-lg text-saffron-deep">{e.hindi}</span>}
            </div>
            <span className="mt-1.5 inline-block rounded-full border border-gold/50 px-3 py-0.5 text-[10px] uppercase tracking-[0.22em] text-gold-deep">
              {ORIGIN_LABEL[e.origin]}
            </span>
          </div>
        </div>

        <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{e.blurb}</p>

        <div className={`mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm ${side === "left" ? "md:justify-end" : ""}`}>
          <span className="inline-flex items-center gap-1.5 font-medium text-ink">
            <ClockIcon /> {e.time}
          </span>
          <span className="inline-flex items-center gap-1.5 text-ink">
            <PinIcon /> {e.venue}
          </span>
        </div>

        <a
          href={googleCalendarUrl(e)}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-5 inline-flex items-center gap-2 rounded-full border border-red/40 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-red transition-colors hover:bg-red hover:text-cream ${
            side === "left" ? "md:ml-auto md:flex" : ""
          }`}
        >
          <CalendarIcon /> Add to calendar
        </a>

        {/* corner shimmer accent */}
        <span className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-marigold/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-60" aria-hidden />
      </article>
    </Reveal>
  );
}

export default function Events() {
  const root = useRef<HTMLElement>(null);
  const spine = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = spine.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top 70%", end: "bottom 75%", scrub: 0.6 },
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="events" className="section-pad relative px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-saffron-deep">Two days of celebration</p>
          <h2 className="mt-3 font-display text-4xl text-red-deep sm:text-5xl">The Celebrations</h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-soft">
            Six ceremonies, two traditions, woven across {wedding.datesShort} at {wedding.venue}.
          </p>
          <MotifDivider className="mt-6" />
        </Reveal>

        <div className="relative mt-12">
          {/* center spine (desktop) */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block" aria-hidden>
            <div className="h-full w-full bg-gold/25" />
            <div
              ref={spine}
              className="absolute inset-0 origin-top bg-gradient-to-b from-saffron via-gold to-red"
              style={{ transform: "scaleY(0)" }}
            />
          </div>

          {itinerary.map((day) => (
            <div key={day.label} className="relative mb-12 last:mb-0">
              <Reveal className="relative z-10 mb-9 flex justify-center">
                <div className="rounded-full border border-gold/50 bg-cream px-6 py-2 text-center shadow-card">
                  <p className="font-display text-xl text-red sm:text-2xl">{day.label}</p>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-ink-soft">
                    {day.weekday} · {day.dateLong}
                  </p>
                </div>
              </Reveal>

              <div className="flex flex-col gap-9">
                {day.events.map((e, i) => (
                  <EventCard key={e.key} e={e} side={i % 2 === 0 ? "left" : "right"} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-saffron-deep" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-saffron-deep" fill="none" aria-hidden>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden>
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
