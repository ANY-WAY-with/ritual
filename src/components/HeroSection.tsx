import { Container } from "@/components/Container";
import { PillButton } from "@/components/ui/pill-button";
import { CaretDownIcon, AgentBurstIcon } from "@/components/icons";

export function HeroSection() {
  return (
    <section className="bg-ditto-cream pt-10 pb-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* Floating badge — "Assign to · Lyra Chen" pill (default collapsed state) */}
          <div className="relative mb-6">
            {/* hand-drawn squiggle accent above-right */}
            <svg
              className="absolute -top-3 right-3 h-4 w-8 text-ditto-ink/70"
              viewBox="0 0 40 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 13C6 5 9 5 12 11s6 6 9-2 6-6 9 2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="inline-flex items-center gap-2 rounded-xl bg-white p-1.5 shadow-[0_6px_24px_rgba(0,0,0,0.10)]">
              <span className="inline-flex items-center gap-1.5 px-2 text-sm font-medium text-ditto-ink">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-ditto-ink text-white">
                  <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="currentColor" aria-hidden="true">
                    <circle cx="8" cy="5" r="3" />
                    <path d="M2 14c0-3 2.7-5 6-5s6 2 6 5" />
                  </svg>
                </span>
                Assign to
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-[#ece7f3] px-3 py-1.5 text-sm text-ditto-ink">
                Lyra Chen
                <CaretDownIcon className="h-2 w-2 text-ditto-muted" />
              </span>
            </div>
          </div>

          {/* H1 */}
          <h1
            className={[
              "max-w-[960px] text-balance font-sans font-normal text-ditto-ink",
              "text-[40px] leading-[40px]",
              "md:text-[64px] md:leading-[64px]",
              "lg:text-[89.6px] lg:leading-[89.6px]",
              "tracking-[-2.16px]",
            ].join(" ")}
          >
            Get teams and{" "}
            <AgentBurstIcon className="inline-block align-middle h-[0.82em] w-[0.82em] mx-1" />{" "}
            agents shipping product copy from{" "}
            <span className="bg-ditto-yellow px-2 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
              one source of truth.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-[640px] mx-auto text-xl md:text-[26px] md:leading-[31.2px] font-light text-ditto-muted">
            Structured context behind every word — so that it&#8217;s accurate, consistent, and on-brand by default.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex items-center justify-center gap-6 flex-wrap">
            <PillButton variant="primary" href="#">
              Get a Demo
            </PillButton>
            <PillButton variant="ghost" href="#">
              Get Started Free
            </PillButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
