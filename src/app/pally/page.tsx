import { ThreadBackground } from "@/components/pally/ThreadBackground";
import { PallyHeader } from "@/components/pally/PallyHeader";
import { PallyHero } from "@/components/pally/PallyHero";
import { PallyLooseThreads } from "@/components/pally/PallyLooseThreads";
import { PallyComesTogether } from "@/components/pally/PallyComesTogether";
import { PallyHelp } from "@/components/pally/PallyHelp";
import { PallyIntegrations } from "@/components/pally/PallyIntegrations";
import { PallyTestimonials } from "@/components/pally/PallyTestimonials";
import { PallyFaq } from "@/components/pally/PallyFaq";
import { PallyFinalCta } from "@/components/pally/PallyFinalCta";
import { PallyFooter } from "@/components/pally/PallyFooter";
import { SiteSwitcher } from "@/components/SiteSwitcher";

export const metadata = {
  title: "Pally | One text away from done",
  description:
    "Pally connects to all your inboxes and tools, and handles the things you'd forget, automatically.",
};

export default function PallyPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-pally-bg font-neue text-pally-ink">
      {/* Full-page animated thread background (editable paths) */}
      <ThreadBackground />

      <PallyHeader />
      <main className="relative z-10 flex-1">
        <PallyHero />
        <PallyLooseThreads />
        <PallyComesTogether />
        <PallyHelp />
        <PallyIntegrations />
        <PallyTestimonials />
        <PallyFaq />
        <PallyFinalCta />
      </main>
      <PallyFooter />
      <SiteSwitcher />
    </div>
  );
}
