/*
  Generated assets (Higgsfield). Each video has a mobile (9:16) and optional
  desktop (16:9) source; AmbientVideo picks per viewport. Empty string = use the
  built-in static fallback.
*/
export const media: {
  heroVideo: string;
  heroVideoDesktop: string;
  gateVideo: string;
  gateVideoDesktop: string;
  footerVideo: string;
  footerVideoDesktop: string;
  ganesha: string;
} = {
  heroVideo: "/video/hero.mp4", // 9:16 ambient marigold loop
  heroVideoDesktop: "/video/hero-desktop.mp4", // 16:9
  gateVideo: "/video/gate.mp4", // 9:16 envelope opening
  gateVideoDesktop: "/video/gate-desktop.mp4", // 16:9
  footerVideo: "/video/hero.mp4", // reuse the ambient loop behind the footer
  footerVideoDesktop: "/video/hero-desktop.mp4",
  ganesha: "/ganesha.webp",
};

/** Gallery — a mix of real moments and hand-painted illustrations of the couple. */
export type GalleryItem = { src: string; alt: string; caption: string; span?: "tall" | "wide" };

export const galleryItems: GalleryItem[] = [
  { src: "/gallery-wedding.webp", alt: "Stuti and Rushil under the wedding mandap", caption: "The vow", span: "tall" },
  { src: "/ghibli-1.webp", alt: "Stuti and Rushil together, illustrated", caption: "Us" },
  { src: "/gallery-mehndi.webp", alt: "Stuti and Rushil at the mehndi and haldi", caption: "Marigold mornings" },
  { src: "/ghibli-2.webp", alt: "Stuti and Rushil by a waterfall", caption: "Wandering" },
  { src: "/gallery-sangeet.webp", alt: "Stuti and Rushil dancing at the sangeet", caption: "The first dance", span: "tall" },
  { src: "/ghibli-3.webp", alt: "Stuti and Rushil by candlelight", caption: "Quiet evenings" },
  { src: "/couple.webp", alt: "Stuti and Rushil", caption: "Soon to be Mr & Mrs", span: "wide" },
];
