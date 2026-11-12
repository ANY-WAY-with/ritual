import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({ src: "../../public/brand/ritual/inter-latin.woff2", variable: "--font-inter", weight: "100 900", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://madeinritual.com"),
  title: "Ritual — A workspace for creators",
  description: "A workspace for creators to develop ideas and move their work forward. Made by Rhetoric.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ritual — A workspace for creators",
    description: "Develop ideas. Move your work forward.",
    url: "https://madeinritual.com",
    siteName: "Ritual",
    type: "website",
  },
  twitter: { card: "summary", title: "Ritual — A workspace for creators" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
