import { Reveal } from "@/components/Reveal";

export function ProgramaCta() {
  return (
    <section className="bg-programa-cream py-24 text-center">
      <Reveal>
        <h2 className="font-rhymes font-light text-[56px] md:text-[80px] leading-[1] tracking-[-2px] text-programa-ink">
          Try Programa free
        </h2>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#"
            className="bg-programa-yellow text-programa-ink rounded-full px-7 py-3.5 font-medium inline-block"
          >
            Get started
          </a>
          <a
            href="#"
            className="border border-programa-ink text-programa-ink rounded-full px-7 py-3.5 font-medium inline-block"
          >
            Watch demo
          </a>
        </div>

        <p className="mt-4 font-inter text-programa-muted text-sm">
          No credit card required · 7 day free trial
        </p>
      </Reveal>
    </section>
  );
}
