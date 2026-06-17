"use client";

import { useEffect, useState } from "react";
import { nav, couple, wedding } from "@/lib/content";
import { onGateOpen } from "@/lib/gate";

export default function Nav() {
  const [open, setOpen] = useState(false); // gate opened → show nav
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [menu, setMenu] = useState(false); // mobile drawer

  useEffect(() => onGateOpen(() => setOpen(true)), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const ids = nav.map((n) => n.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [open]);

  if (!open) return null;

  return (
    <header
      className={`fixed inset-x-0 top-[22px] z-[60] transition-all duration-500 md:top-[44px] ${
        scrolled ? "py-2" : "py-3.5"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full px-4 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "mx-3 border border-gold/40 bg-cream/85 py-2 shadow-card backdrop-blur-md md:mx-auto"
            : "border border-transparent py-1"
        }`}
      >
        <a href="#top" className="flex items-baseline gap-2 whitespace-nowrap">
          <span className="font-display text-lg text-red-deep sm:text-xl">
            {couple.bride.first} <span className="text-saffron-deep">&</span> {couple.groom.first}
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.24em] text-ink-soft sm:inline">
            {wedding.datesShort}
          </span>
        </a>

        {/* desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className={`rounded-full px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] transition-colors ${
                  active === n.href ? "bg-red/10 text-red" : "text-ink-soft hover:text-red"
                }`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile toggle */}
        <button
          onClick={() => setMenu((m) => !m)}
          aria-label="Menu"
          aria-expanded={menu}
          className="grid h-9 w-9 place-items-center rounded-full border border-gold/50 bg-cream/80 text-red md:hidden"
        >
          <span className="relative block h-3.5 w-4">
            <span className={`absolute left-0 h-0.5 w-4 bg-current transition-all ${menu ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-4 bg-current transition-opacity ${menu ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-4 bg-current transition-all ${menu ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </nav>

      {/* mobile drawer */}
      {menu && (
        <ul className="mx-3 mt-2 grid gap-1 rounded-3xl border border-gold/40 bg-cream/95 p-3 shadow-card backdrop-blur-md md:hidden">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                onClick={() => setMenu(false)}
                className={`block rounded-2xl px-4 py-2.5 text-sm uppercase tracking-[0.18em] ${
                  active === n.href ? "bg-red/10 text-red" : "text-ink-soft"
                }`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
