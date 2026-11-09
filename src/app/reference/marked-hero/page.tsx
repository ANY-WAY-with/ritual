import type { Metadata } from "next";
import { MarkedHero } from "@/components/sites/marked/marked-hero";

export const metadata: Metadata = { title: "Marked hero — motion study", robots: { index: false, follow: false } };

export default async function ReferencePage({ searchParams }: { searchParams: Promise<{ motion?: string }> }) {
  const { motion } = await searchParams;
  return <MarkedHero reducedMotion={motion === "reduce"} />;
}
