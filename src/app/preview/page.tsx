import type { Metadata } from "next";
import { CreatorPreview } from "@/components/ritual/creator-preview";

export const metadata: Metadata = {
  title: "Ritual — A workspace for your niche",
  alternates: { canonical: "/preview" },
  robots: { index: false, follow: false },
};

export default async function PreviewPage({ searchParams }: { searchParams: Promise<{ motion?: string; niche?: string }> }) {
  const { motion, niche } = await searchParams;
  const initialNiche = niche === "science" || niche === "beauty" ? niche : "fashion";
  return <CreatorPreview initialNiche={initialNiche} reducedMotion={motion === "reduce"} />;
}
