import { RitualHero } from "@/components/ritual/ritual-hero";
import { RitualChatProvider } from "@/components/ritual/chat-interface";
import { SiteHeader } from "@/components/ritual/site-header";
import { RitualLandingBody } from "@/components/ritual/landing-body";

export default function Home() {
  return (
    <RitualChatProvider>
      <div className="ritual-site">
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main"><RitualHero /><RitualLandingBody /></main>
      </div>
    </RitualChatProvider>
  );
}
