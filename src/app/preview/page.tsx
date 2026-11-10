import type { Metadata } from "next";
import { SiteHeader } from "@/components/ritual/site-header";
import { RitualHero } from "@/components/ritual/ritual-hero";
import { CreatorSite } from "@/components/ritual/creator-site";

export const metadata: Metadata = { title: "Ritual — Your ideas, in your style", alternates: { canonical: "/preview" }, robots: { index: false, follow: false } };

export default async function CreatorPreview({ searchParams }: { searchParams: Promise<{ motion?: string }> }) {
  const { motion } = await searchParams;
  return <div className="ritual-site">
    <a className="skip-link" href="#main">Skip to content</a>
    <SiteHeader variant="creator" />
    <main id="main"><RitualHero typography="sans" earlyAccess reducedMotion={motion === "reduce"} /><CreatorSite /></main>
  </div>;
}
