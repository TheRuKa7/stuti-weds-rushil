import { story, couple } from "@/lib/content";
import { ChinarLeaf, PhulkariFlower, MotifDivider } from "./motifs";
import Reveal from "./Reveal";

export default function Story() {
  return (
    <section id="story" className="section-pad relative px-6">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-script text-2xl text-red">{story.hindi}</p>
          <h2 className="mt-2 font-display text-4xl text-red-deep sm:text-5xl">{story.title}</h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-7 flex items-center justify-center gap-8 text-gold">
            <figure className="flex flex-col items-center gap-2">
              <PhulkariFlower className="float-soft h-10 w-10 text-saffron" />
              <figcaption className="text-[11px] uppercase tracking-[0.2em] text-ink-soft">
                {couple.bride.first} · {couple.bride.tradition}
              </figcaption>
            </figure>
            <span className="font-script text-3xl text-rose">✶</span>
            <figure className="flex flex-col items-center gap-2">
              <ChinarLeaf className="float-soft h-10 w-10 text-pine" style={{ animationDelay: "-2s" }} />
              <figcaption className="text-[11px] uppercase tracking-[0.2em] text-ink-soft">
                {couple.groom.first} · {couple.groom.tradition}
              </figcaption>
            </figure>
          </div>
        </Reveal>

        {story.paragraphs.map((p, i) => (
          <Reveal key={i} delay={180 + i * 80}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{p}</p>
          </Reveal>
        ))}

        <Reveal delay={360}>
          <MotifDivider className="mt-9" />
        </Reveal>
      </div>
    </section>
  );
}
