import type { Metadata } from "next";
import { CreatorPreview } from "@/components/ritual/creator-preview";

export const metadata: Metadata = {
  title: "Ritual — A workspace for your niche",
  alternates: { canonical: "/preview" },
  robots: { index: false, follow: false },
};

export default async function PreviewPage({ searchParams }: { searchParams: Promise<{ motion?: string }> }) {
  const { motion } = await searchParams;
  return <CreatorPreview reducedMotion={motion === "reduce"} />;
}
