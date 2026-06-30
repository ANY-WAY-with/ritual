import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export function IntroSection() {
  return (
    <section className="py-16 md:py-20">
      <Container className="max-w-[900px] mx-auto text-center">
        <Reveal>
          <h2 className="font-bold text-ditto-ink text-balance text-[30px] leading-[1.1] md:text-[44.8px] md:leading-[49.28px]">
            Shipping great copy is hard. Shipping great copy on every team, in every tool, across every line of code, is even harder.
          </h2>
        </Reveal>
        <p className="mt-4 max-w-[700px] mx-auto text-xl md:text-[26px] md:leading-[31.2px] font-light text-ditto-muted">
          Ditto makes it easy. Centralize your standards, strings, and decisions in one content system, and connect that system wherever your team builds.
        </p>
      </Container>
    </section>
  );
}
