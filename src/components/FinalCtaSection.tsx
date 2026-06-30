import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PillButton } from "@/components/ui/pill-button";

export function FinalCtaSection() {
  return (
    <section className="bg-ditto-ink py-24">
      <Container className="max-w-[900px] mx-auto text-center">
        <Reveal>
          <h2 className="font-bold text-ditto-cream text-balance text-[30px] md:text-[48px] md:leading-[52.8px] max-w-[760px] mx-auto">
            Copy is the last layer of your product without a system.
          </h2>
        </Reveal>

        <p className="mt-5 max-w-[640px] mx-auto text-xl md:text-[26px] md:leading-[31.2px] font-light text-[#aaa79e]">
          Design, development, and now copy. Don&apos;t get lost in the overload of generative AI – build a system to ship copy you can trust.
        </p>

        <div className="mt-8 flex justify-center items-center gap-6 flex-wrap">
          <PillButton variant="blue" href="#">Get a Demo</PillButton>
          <PillButton variant="ghost-light" href="#">Get Started</PillButton>
        </div>
      </Container>
    </section>
  );
}
