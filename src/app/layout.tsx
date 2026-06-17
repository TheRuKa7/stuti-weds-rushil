import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Mulish, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const body = Mulish({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const script = Tiro_Devanagari_Hindi({
  variable: "--font-script",
  subsets: ["latin", "devanagari"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stuti-weds-rushil.vercel.app"),
  title: "Stuti weds Rushil · 27–28 February 2027",
  description:
    "You're invited to the wedding of Stuti Suri and Rushil Kaul, 27 & 28 February 2027 at Jim Corbett. Two valleys, one vow — Punjab meets Kashmir across two days of celebration.",
  openGraph: {
    title: "Stuti weds Rushil · 27–28 February 2027",
    description:
      "Two valleys, one vow. Punjab meets Kashmir. Join us for two days of celebration at Jim Corbett.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FBF4E6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-ink">{children}</body>
    </html>
  );
}
