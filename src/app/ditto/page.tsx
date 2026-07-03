import { SiteHeader } from "@/components/SiteHeader";
import { CreatorwithHero } from "@/components/with/CreatorwithHero";
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
import { SiteSwitcher } from "@/components/SiteSwitcher";

export const metadata = {
  title: "Ditto | Your system to power product copy",
  description:
    "Ditto is your team's content system to generate, integrate, and ship the best product copy",
};

export default function DittoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ditto-cream">
      <SiteHeader />
      <main className="flex-1">
        <CreatorwithHero />
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
      <SiteSwitcher />
    </div>
  );
}
