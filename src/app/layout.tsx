import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Ditto | Your system to power product copy",
  description:
    "Ditto is your team's content system to generate, integrate, and ship the best product copy",
  icons: {
    icon: "/seo/favicon.png",
    apple: "/seo/webclip.svg",
  },
  openGraph: {
    title: "Ditto | Your system to power product copy",
    description:
      "Ditto is your team's content system to generate, integrate, and ship the best product copy",
    type: "website",
    images: [{ url: "/seo/og-image.png", width: 299, height: 194 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ditto | Your system to power product copy",
    description:
      "Ditto is your team's content system to generate, integrate, and ship the best product copy",
    images: ["/seo/og-image.png"],
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
      className={`${abcSocial.variable} ${abcSocialExtended.variable} ${abcSocialMono.variable} ${abcSocialCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
