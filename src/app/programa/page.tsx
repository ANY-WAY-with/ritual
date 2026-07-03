import { ProgramaHero } from "@/components/programa/ProgramaHero";
import { ProgramaFeatures } from "@/components/programa/ProgramaFeatures";
import { ProgramaQuoteBanner } from "@/components/programa/ProgramaQuoteBanner";
import { ProgramaCta } from "@/components/programa/ProgramaCta";
import { ProgramaFooter } from "@/components/programa/ProgramaFooter";
import { SiteSwitcher } from "@/components/SiteSwitcher";

export const metadata = {
  title: "Programa — Interior Design Project Management Software",
  description:
    "Stop juggling spreadsheets, email chains, and multiple tools. Programa is project management software built for interior designers.",
};

export default function ProgramaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-inter">
      <ProgramaHero />
      <ProgramaFeatures />
      <ProgramaQuoteBanner />
      <ProgramaCta />
      <ProgramaFooter />
      <SiteSwitcher />
    </div>
  );
}
