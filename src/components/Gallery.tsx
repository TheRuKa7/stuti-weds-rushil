"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gallery } from "@/lib/content";
import { galleryItems } from "@/lib/media";
import { MotifDivider } from "./motifs";
import Reveal from "./Reveal";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const depth = Number(el.dataset.parallax) || 0;
        gsap.fromTo(
          el,
          { yPercent: -depth },
          {
            yPercent: depth,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.8 },
          },
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="gallery" className="section-pad relative px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-saffron-deep">Our favourite frames</p>
          <h2 className="mt-3 font-display text-4xl text-red-deep sm:text-5xl">{gallery.title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-soft">{gallery.caption}</p>
          <MotifDivider className="mt-6" />
        </Reveal>

        <div className="mt-10 columns-2 gap-4 sm:columns-3 sm:gap-5 [&>*]:mb-4 sm:[&>*]:mb-5">
          {galleryItems.map((item, i) => (
            <Reveal
              key={item.src}
              delay={(i % 3) * 90}
              className="group relative block break-inside-avoid overflow-hidden rounded-2xl border border-gold/40 bg-cream-deep shadow-card"
            >
              <div className="overflow-hidden">
                <div data-parallax={i % 2 === 0 ? 4 : 6}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1200}
                    height={item.span === "wide" ? 800 : 1600}
                    sizes="(min-width: 640px) 33vw, 50vw"
                    className="h-auto w-full scale-[1.06] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="p-4 font-display text-lg text-cream">{item.caption}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
