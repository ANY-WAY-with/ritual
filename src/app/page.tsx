import { CreatorwithHeader } from "@/components/with/CreatorwithHeader";
import { CreatorwithHero } from "@/components/with/CreatorwithHero";
import { CreatorwithStats } from "@/components/with/CreatorwithStats";
import { CreatorwithCapabilities } from "@/components/with/CreatorwithCapabilities";
import { CreatorwithHowItWorks } from "@/components/with/CreatorwithHowItWorks";
import { CreatorwithPersonas } from "@/components/with/CreatorwithPersonas";
import { CreatorwithVoice } from "@/components/with/CreatorwithVoice";
import { CreatorwithFaq } from "@/components/with/CreatorwithFaq";
import { CreatorwithCta } from "@/components/with/CreatorwithCta";
import { CreatorwithFooter } from "@/components/with/CreatorwithFooter";
import { SiteSwitcher } from "@/components/SiteSwitcher";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-cw-bg2 font-cw text-cw-ink">
      <CreatorwithHeader />
      <main className="flex-1">
        <CreatorwithHero />
        <CreatorwithStats />
        <CreatorwithCapabilities />
        <CreatorwithHowItWorks />
        <CreatorwithPersonas />
        <CreatorwithVoice />
        <CreatorwithFaq />
        <CreatorwithCta />
      </main>
      <CreatorwithFooter />
      <SiteSwitcher />
    </div>
  );
}
