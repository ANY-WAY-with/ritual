import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { LogoMarquee } from "@/components/LogoMarquee";
import { IntroSection } from "@/components/IntroSection";
import { BuildSystemSection } from "@/components/BuildSystemSection";
import { BottleneckSection } from "@/components/BottleneckSection";
import { IntegratesMarquee } from "@/components/IntegratesMarquee";
import { PlatformSection } from "@/components/PlatformSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ImpactSection } from "@/components/ImpactSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-ditto-cream">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <LogoMarquee />
        <IntroSection />
        <BuildSystemSection />
        <BottleneckSection />
        <IntegratesMarquee />
        <PlatformSection />
        <FeaturesSection />
        <ImpactSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
