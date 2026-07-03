import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

/* ---- creatorwith.com (with creator) ---- */
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-cw",
  subsets: ["latin"],
  display: "swap",
});

/* ---- pally.com ---- */
const neueMontreal = localFont({
  variable: "--font-neue",
  display: "swap",
  src: [
    { path: "../../public/pally/fonts/NeueMontreal-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/pally/fonts/NeueMontreal-Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/pally/fonts/NeueMontreal-Bold.otf", weight: "700", style: "normal" },
  ],
});

/* ---- programa.design fonts ---- */
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const rhymesDisplay = localFont({
  variable: "--font-rhymes",
  display: "swap",
  src: [{ path: "../../public/programa/fonts/RhymesDisplay-Regular.ttf", weight: "300 400", style: "normal" }],
});

/* ---- jasper.ai fonts ---- */
const abcRom = localFont({
  variable: "--font-abcrom",
  display: "swap",
  src: [
    { path: "../../public/jasper/fonts/ABCROM-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/jasper/fonts/ABCROM-Book.woff2", weight: "500", style: "normal" },
    { path: "../../public/jasper/fonts/ABCROM-Medium.woff2", weight: "600", style: "normal" },
    { path: "../../public/jasper/fonts/ABCROM-Bold.woff2", weight: "700", style: "normal" },
  ],
});
const abcRomMono = localFont({
  variable: "--font-abcrom-mono",
  display: "swap",
  src: [{ path: "../../public/jasper/fonts/ABCROMMono.woff2", weight: "400", style: "normal" }],
});
const feature = localFont({
  variable: "--font-feature",
  display: "swap",
  src: [{ path: "../../public/jasper/fonts/Feature-Upright.ttf", weight: "100 900", style: "normal" }],
});

const abcSocial = localFont({
  variable: "--font-abc-social",
  display: "swap",
  src: [
    { path: "../../public/fonts/ABCSocial-Book.otf", weight: "300", style: "normal" },
    { path: "../../public/fonts/ABCSocial-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/ABCSocial-Bold.otf", weight: "700", style: "normal" },
  ],
});

const abcSocialExtended = localFont({
  variable: "--font-abc-extended",
  display: "swap",
  src: [
    { path: "../../public/fonts/ABCSocialExtended-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/ABCSocialExtended-Bold.otf", weight: "700", style: "normal" },
  ],
});

const abcSocialMono = localFont({
  variable: "--font-abc-mono",
  display: "swap",
  src: [{ path: "../../public/fonts/ABCSocialMono-Regular.otf", weight: "400", style: "normal" }],
});

const abcSocialCondensed = localFont({
  variable: "--font-abc-condensed",
  display: "swap",
  src: [{ path: "../../public/fonts/ABCSocialCondensed-Black.otf", weight: "900", style: "normal" }],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://creatorwith.com"),
  title: "with creator — An AI that thinks with you",
  description:
    "Your strategic partner for content that matters. Plan smarter, create faster, and stay true to your voice across every platform.",
  openGraph: {
    title: "with creator — An AI that thinks with you",
    description:
      "Your strategic partner for content that matters. Plan smarter, create faster, and stay true to your voice across every platform.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "with creator — An AI that thinks with you",
    description:
      "Your strategic partner for content that matters. Plan smarter, create faster, and stay true to your voice across every platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${abcSocial.variable} ${abcSocialExtended.variable} ${abcSocialMono.variable} ${abcSocialCondensed.variable} ${inter.variable} ${rhymesDisplay.variable} ${abcRom.variable} ${abcRomMono.variable} ${feature.variable} ${plusJakarta.variable} ${neueMontreal.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
