import localFont from "next/font/local";

const newsreader = localFont({ src: "../../../public/brand/ritual/newsreader-variable.ttf", variable: "--font-newsreader", weight: "200 800", display: "swap" });

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <div className={newsreader.variable}>{children}</div>;
}
