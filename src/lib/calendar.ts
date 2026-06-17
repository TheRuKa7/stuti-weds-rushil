import type { EventItem } from "./content";
import { couple, wedding } from "./content";

/** ISO (with offset) → Google's compact UTC stamp: 20270227T093000Z */
function toStamp(iso: string): string {
  return new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

/** A Google Calendar "add event" link for one ceremony. */
export function googleCalendarUrl(e: EventItem): string {
  const text = `${e.title} — ${couple.bride.first} & ${couple.groom.first}`;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text,
    dates: `${toStamp(e.start)}/${toStamp(e.end)}`,
    details: `${e.blurb}\n\n${wedding.hashtag}`,
    location: `${wedding.venue}, ${wedding.venueCity}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
