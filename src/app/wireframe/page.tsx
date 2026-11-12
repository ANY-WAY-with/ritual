import type { Metadata } from "next";
import { SiteHeader } from "@/components/ritual/site-header";
import { RitualHero } from "@/components/ritual/ritual-hero";
import { WireframeBody } from "@/components/ritual/wireframe-body";

export const metadata: Metadata = { title: "Ritual — full-page layout study", alternates: { canonical: "/wireframe" }, robots: { index: false, follow: false } };

export default async function WireframePage({ searchParams }: { searchParams: Promise<{ motion?: string }> }) {
  const { motion } = await searchParams;
  return <div className="ritual-site">
    <a className="skip-link" href="#main">Skip to content</a>
    <SiteHeader variant="wireframe" />
    <main id="main"><RitualHero typography="sans" earlyAccess reducedMotion={motion === "reduce"} /><WireframeBody /></main>
  </div>;
}
