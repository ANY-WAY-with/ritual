import type { Metadata } from "next";
import { HeroStudy } from "@/components/ritual/hero-study";

export const metadata: Metadata = { title: "Ritual — editorial studio study", alternates: { canonical: "/studio" }, robots: { index: false, follow: false } };

export default async function StudioPage({ searchParams }: { searchParams: Promise<{ type?: string; motion?: string }> }) {
  const params = await searchParams;
  return <HeroStudy initialTypography={params.type === "serif" ? "serif" : "sans"} reducedMotion={params.motion === "reduce"} />;
}
