import { JasperHero } from "@/components/jasper/JasperHero";
import { JasperPlatformCards } from "@/components/jasper/JasperPlatformCards";
import { JasperStatsBento } from "@/components/jasper/JasperStatsBento";
import { JasperCta } from "@/components/jasper/JasperCta";
import { JasperFooter } from "@/components/jasper/JasperFooter";
import { SiteSwitcher } from "@/components/SiteSwitcher";

export const metadata = {
  title: "Jasper — Put AI agents to work for marketing",
  description:
    "Orchestrate intelligent agents to run end-to-end marketing workflows — delivering speed, control, and measurable impact.",
};

export default function JasperPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-abcrom">
      <JasperHero />
      <JasperPlatformCards />
      <JasperStatsBento />
      <JasperCta />
      <JasperFooter />
      <SiteSwitcher />
    </div>
  );
}
