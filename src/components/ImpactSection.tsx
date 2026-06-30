import { Container } from "@/components/Container";
import { PillButton } from "@/components/ui/pill-button";
import { QuoteIcon } from "@/components/icons";

const stats = [
  { number: "70%", label: "faster resolution of copy fixes" },
  { number: "40hrs", label: "of dev time saved per release" },
  { number: "20%", label: "faster product release cycles" },
] as const;

const testimonials = [
  {
    quote:
      "Numbers aside, the biggest thing is that I have is just way more confidence in the content. With Ditto, we can see problems way faster. It does save me a ton of time, but I never cared about that as much as value for our members.",
    author: "Designer, Big Sky Health",
  },
  {
    quote:
      "With our data in Looker and content in Ditto, we have complete visibility into user states and are able to really rapidly tweak and deploy content…shipping content updates almost daily.",
    author: "Engineer, Big Sky Health",
  },
] as const;

export function ImpactSection() {
  return (
    <section className="bg-ditto-orange text-ditto-ink py-20">
      <Container>
        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {/* Intro cell */}
          <div className="flex flex-col gap-4 pr-0 md:pr-8 pb-8 md:pb-0 border-b border-black/20 md:border-b-0">
            <p className="text-sm font-bold">Small words, massive impact</p>
            <h2 className="text-2xl font-bold leading-[1.2] tracking-[-0.32px] mt-1 text-balance">
              Teams that build on Ditto ship more, fix less.
            </h2>
            <PillButton
              variant="primary"
              size="sm"
              href="#"
              className="mt-4 self-start"
            >
              See Case Studies
            </PillButton>
          </div>

          {/* Stat cells */}
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="flex flex-col border-t border-black/20 pt-6 md:border-t-0 md:pt-0 md:border-l md:border-black/20 md:pl-6 mt-6 md:mt-0"
            >
              <span className="font-extended font-bold text-[56px] md:text-[86.4px] leading-none tracking-[-2px]">
                {stat.number}
              </span>
              <span className="text-xl md:text-2xl font-bold mt-3">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t) => (
            <div key={t.author}>
              <QuoteIcon className="h-8 w-auto text-ditto-ink mb-6" />
              <p className="text-xl md:text-2xl leading-snug">{t.quote}</p>
              <p className="mt-6 text-lg md:text-xl font-bold">{t.author}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
