import type { Metadata } from "next";
import { MarkedHero } from "@/components/sites/marked/marked-hero";
import { MarkedLandingBody } from "@/components/sites/marked/marked-landing-body";
export const metadata: Metadata = { title: "Marked landing-page reference study", robots: { index: false, follow: false } };
export default function MarkedStudy() {
  return <><MarkedHero /><MarkedLandingBody variant="reference" /></>;
}
