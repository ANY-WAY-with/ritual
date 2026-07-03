import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    num: "01",
    title: "Talk",
    desc: "Share your ideas, goals, and audience.",
  },
  {
    num: "02",
    title: "Plan",
    desc: "Get a structured content strategy tailored to your platforms.",
  },
  {
    num: "03",
    title: "Create",
    desc: "Produce content that sounds like you — ready to publish.",
  },
];

export function CreatorwithHowItWorks() {
  return (
    <section
      id="how-it-works"
      className={cn("font-cw bg-cw-dots py-20 md:py-28")}
    >
      <div className="px-4">
        <p className="text-cw-accent text-xs font-bold uppercase tracking-widest text-center">
          How it works
        </p>
        <h2 className="text-cw-ink font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-[-0.02em] text-center max-w-[680px] mx-auto mt-3">
          From idea to published in three steps.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto mt-14">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 100}>
              <div className="bg-white rounded-2xl border border-cw-border p-8">
                <span className="text-cw-accent font-bold text-5xl">
                  {step.num}
                </span>
                <h3 className="text-xl font-bold text-cw-ink mt-4">
                  {step.title}
                </h3>
                <p className="text-cw-muted mt-2">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
