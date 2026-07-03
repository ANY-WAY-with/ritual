import { Reveal } from "@/components/Reveal";

export function ProgramaQuoteBanner() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="bg-programa-ink2 rounded-3xl max-w-[1100px] mx-auto py-24 px-8 text-center">
        <Reveal>
          <blockquote className="font-rhymes text-white text-[32px] md:text-[44px] leading-tight max-w-[760px] mx-auto">
            &ldquo;Honestly, I feel like we&apos;re scalable now.&rdquo;
          </blockquote>
          <p className="mt-6 font-inter text-white/60 text-sm">
            Interior design studio using Programa
          </p>
        </Reveal>
      </div>
    </section>
  );
}
