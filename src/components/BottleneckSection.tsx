import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export function BottleneckSection() {
  return (
    <section className="pt-12 pb-16">
      <Container className="max-w-[900px] mx-auto text-center">
        <Reveal>
          <h2 className="font-bold text-ditto-ink text-balance text-[30px] leading-[1.1] md:text-[44.8px] md:leading-[49.28px]">
            Don&rsquo;t let copy be your bottleneck. Bring structure to your workflows, to write and ship faster.
          </h2>
        </Reveal>
      </Container>
    </section>
  );
}
