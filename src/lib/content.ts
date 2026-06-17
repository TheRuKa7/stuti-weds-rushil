/*
  Full wedding INVITATION content (no RSVP).
  Two traditions — Punjabi (bride) and Kashmiri Pandit (groom) — braided across
  two days of celebration at Jim Corbett.

  ── EDIT ME ──────────────────────────────────────────────────────────────────
  The event days/times/venues below are sensible placeholders laid out in a
  natural Punjabi + Kashmiri two-day flow. Replace the `time` and `venue` strings
  (and reorder if needed) once the family confirms the final itinerary. Nothing
  else needs to change for the times to update everywhere on the page.
  ───────────────────────────────────────────────────────────────────────────-
*/

export const couple = {
  bride: { first: "Stuti", last: "Suri", tradition: "Punjabi" },
  groom: { first: "Rushil", last: "Kaul", tradition: "Kashmiri Pandit" },
} as const;

export const wedding = {
  dates: "27 & 28 February 2027",
  datesShort: "27–28 Feb 2027",
  venue: "The Jungle Trail Corbett Resort & Spa",
  venueCity: "Jim Corbett, Uttarakhand",
  hashtag: "#StutiWedsRushil",
} as const;

export const invite = {
  invocation: "शुभ विवाह",
  kicker: "Together with their families",
  // Hosted by the bride's parents.
  brideParents: "Rita & Atul Suri",
  inviteLine: "request the pleasure of your company at the wedding of their beloved daughter",
  gateLine: "request the pleasure of your company at the wedding of their daughter",
  groomLine: "son of Neetu & Anil Kaul",
  joinLine: "and warmly invite you to celebrate two days, two traditions, one love",
  formalNote: "We can't wait to celebrate with you",
} as const;

export const story = {
  hindi: "शुभ विवाह",
  title: "Two valleys, one vow",
  paragraphs: [
    "Stuti is Punjabi, Rushil is Kashmiri Pandit — and over two joyful days we are bringing our families and our traditions together as one.",
    "From the marigold of a Punjabi mehndi to the quiet grace of a Kashmiri nethar, every ritual is a thread we are weaving between our two homes. We would love for you to be there as we tie them together.",
  ],
} as const;

export type EventItem = {
  key: string;
  title: string;
  hindi?: string;
  /** Which tradition the ritual draws from. */
  origin: "Punjabi" | "Kashmiri" | "Both";
  time: string;
  venue: string;
  blurb: string;
  motif: "marigold" | "chinar" | "phulkari" | "monogram";
  /** ISO start + end used for the "add to calendar" links. Update with `time`. */
  start: string;
  end: string;
};

export type EventDay = {
  label: string;
  date: string;
  dateLong: string;
  weekday: string;
  events: EventItem[];
};

export const itinerary: EventDay[] = [
  {
    label: "Day One",
    date: "27 Feb 2027",
    dateLong: "27 February 2027",
    weekday: "Saturday",
    events: [
      {
        key: "mehndi-maenziraat",
        title: "Mehndi & Maenziraat",
        hindi: "मेहंदी",
        origin: "Both",
        time: "3:00 PM onwards",
        venue: "Marigold Lawn",
        blurb:
          "Henna for the bride and both families — the Punjabi mehndi and the Kashmiri maenziraat, the night the bride's hands are adorned, celebrated as one.",
        motif: "phulkari",
        start: "2027-02-27T15:00:00+05:30",
        end: "2027-02-27T18:00:00+05:30",
      },
      {
        key: "sangeet",
        title: "Sangeet",
        hindi: "संगीत",
        origin: "Punjabi",
        time: "8:00 PM onwards",
        venue: "The Riverside Deck",
        blurb:
          "An evening of music, dhol and dancing as both families take the floor. Bring your best moves — and your appetite.",
        motif: "marigold",
        start: "2027-02-27T20:00:00+05:30",
        end: "2027-02-27T23:30:00+05:30",
      },
    ],
  },
  {
    label: "Day Two",
    date: "28 Feb 2027",
    dateLong: "28 February 2027",
    weekday: "Sunday",
    events: [
      {
        key: "haldi",
        title: "Haldi",
        hindi: "हल्दी",
        origin: "Both",
        time: "10:00 AM",
        venue: "Garden Courtyard",
        blurb:
          "Turmeric, laughter and a golden glow. A bright, messy morning blessing for the bride and groom before the vows.",
        motif: "marigold",
        start: "2027-02-28T10:00:00+05:30",
        end: "2027-02-28T12:00:00+05:30",
      },
      {
        key: "chooda-devgon",
        title: "Chooda & Devgon",
        hindi: "चूड़ा",
        origin: "Both",
        time: "12:30 PM",
        venue: "Garden Courtyard",
        blurb:
          "The Punjabi chooda — ivory-and-red bridal bangles blessed by the family — alongside the Kashmiri devgon, a tender pre-wedding rite of blessing and purification.",
        motif: "chinar",
        start: "2027-02-28T12:30:00+05:30",
        end: "2027-02-28T14:00:00+05:30",
      },
      {
        key: "lagan-nethar",
        title: "Lagan & Nethar",
        hindi: "विवाह",
        origin: "Both",
        time: "6:30 PM",
        venue: "The Grand Lawn",
        blurb:
          "The wedding itself. Punjabi lagan around the sacred fire meets the Kashmiri nethar — the heart of two days, the moment two valleys become one home.",
        motif: "monogram",
        start: "2027-02-28T18:30:00+05:30",
        end: "2027-02-28T21:00:00+05:30",
      },
      {
        key: "reception",
        title: "Reception",
        hindi: "स्वागत",
        origin: "Both",
        time: "8:30 PM onwards",
        venue: "The Grand Lawn",
        blurb:
          "Dinner, toasts and one last dance under the stars as Mr & Mrs. Come hungry, leave family.",
        motif: "phulkari",
        start: "2027-02-28T20:30:00+05:30",
        end: "2027-02-28T23:59:00+05:30",
      },
    ],
  },
];

export const gallery = {
  title: "This is us",
  caption:
    "A few of our favourite moments. We honestly cannot wait to make more of them with the people we love — we hope that means you.",
} as const;

export const venueInfo = {
  title: "The setting",
  name: "The Jungle Trail Corbett Resort & Spa",
  city: "Jim Corbett, Uttarakhand",
  blurb:
    "Tucked against the forest at the edge of Jim Corbett, our two days unfold across the resort's lawns, courtyards and riverside decks — wide skies by day, lantern-light by night.",
  travel: [
    { label: "By air", value: "Pantnagar Airport (~85 km); Delhi (DEL) is the major hub, ~260 km by road." },
    { label: "By rail", value: "Ramnagar station (~20 min) is the closest railhead to the resort." },
    { label: "By road", value: "A scenic 6–7 hour drive from Delhi. We'll share travel notes closer to the dates." },
  ],
  mapQuery: "The Jungle Trail Corbett Resort and Spa, Jim Corbett",
} as const;

export const closing = {
  kicker: "Counting down to the celebration",
  note: "Save the dates, pack for two days of festivities, and come ready to dance.",
} as const;

export const nav = [
  { label: "Our Story", href: "#story" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Venue", href: "#venue" },
] as const;
