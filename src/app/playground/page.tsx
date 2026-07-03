import type { ReactNode } from "react";

// Ditto (main clone)
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ImpactSection } from "@/components/ImpactSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";

// Programa
import { ProgramaHero } from "@/components/programa/ProgramaHero";
import { ProgramaFeatures } from "@/components/programa/ProgramaFeatures";
import { ProgramaQuoteBanner } from "@/components/programa/ProgramaQuoteBanner";
import { ProgramaCta } from "@/components/programa/ProgramaCta";
import { ProgramaFooter } from "@/components/programa/ProgramaFooter";

// Jasper
import { JasperHero } from "@/components/jasper/JasperHero";
import { JasperPlatformCards } from "@/components/jasper/JasperPlatformCards";
import { JasperStatsBento } from "@/components/jasper/JasperStatsBento";
import { JasperCta } from "@/components/jasper/JasperCta";
import { JasperFooter } from "@/components/jasper/JasperFooter";

type Site = "ditto" | "programa" | "jasper";

const SITE_STYLE: Record<Site, string> = {
  ditto: "bg-black text-[#ffdd33]",
  programa: "bg-[#1a1a1a] text-[#fdffa2]",
  jasper: "bg-[#fa4028] text-white",
};

/** A labelled wrapper so each stacked "layer" is identifiable while testing. */
function Layer({ site, name, children }: { site: Site; name: string; children: ReactNode }) {
  return (
    <section className="relative">
      <div
        className={`sticky top-0 z-40 flex items-center gap-2 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest ${SITE_STYLE[site]}`}
      >
        <span className="font-bold">{site}</span>
        <span className="opacity-70">· {name}</span>
      </div>
      {children}
    </section>
  );
}

export default function PlaygroundPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="border-b border-black/10 bg-white px-6 py-4">
        <h1 className="font-mono text-sm uppercase tracking-widest text-black/60">
          Section Playground — mix &amp; match layers from all three clones
        </h1>
      </div>

      {/* --- Heroes --- */}
      <Layer site="jasper" name="Hero">
        <JasperHero />
      </Layer>
      <Layer site="programa" name="Hero">
        <ProgramaHero />
      </Layer>
      <Layer site="ditto" name="Hero">
        <HeroSection />
      </Layer>

      {/* --- Content / signature sections --- */}
      <Layer site="jasper" name="Platform Cards">
        <JasperPlatformCards />
      </Layer>
      <Layer site="programa" name="Features">
        <ProgramaFeatures />
      </Layer>
      <Layer site="jasper" name="Stats Bento">
        <JasperStatsBento />
      </Layer>
      <Layer site="ditto" name="Features">
        <FeaturesSection />
      </Layer>
      <Layer site="programa" name="Quote Banner">
        <ProgramaQuoteBanner />
      </Layer>
      <Layer site="ditto" name="Impact">
        <ImpactSection />
      </Layer>

      {/* --- CTAs --- */}
      <Layer site="jasper" name="CTA">
        <JasperCta />
      </Layer>
      <Layer site="programa" name="CTA">
        <ProgramaCta />
      </Layer>
      <Layer site="ditto" name="Final CTA">
        <FinalCtaSection />
      </Layer>

      {/* --- Footers --- */}
      <Layer site="jasper" name="Footer">
        <JasperFooter />
      </Layer>
      <Layer site="programa" name="Footer">
        <ProgramaFooter />
      </Layer>
    </main>
  );
}
