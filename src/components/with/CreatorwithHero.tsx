import Link from "next/link";
import { AgentBurstIcon } from "@/components/icons";
import { HeroAnimatedChat } from "@/components/with/HeroAnimatedChat";

export function CreatorwithHero() {
  return (
    <section className="bg-cw-dots font-cw pt-16 pb-20">
      <div className="mx-auto max-w-[860px] text-center px-6">
        {/* Badge + hand-drawn arrow */}
        <div className="relative mx-auto flex max-w-max items-center justify-center">
          <svg
            className="absolute -left-11 top-7 hidden h-9 w-11 text-[#3b5bdb] md:block"
            viewBox="0 0 60 50"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M58 6C32 -1 10 8 7 42"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M7 42L3 29M7 42L19 36"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="inline-flex items-center gap-2 text-lg font-medium text-[#0b1440] md:text-2xl">
            the
            <AgentBurstIcon className="inline-block h-6 w-6 align-middle md:h-7 md:w-7" />
            Claude for content creators
          </span>
        </div>

        {/* H1 */}
        <h1 className="mt-4 text-[44px] leading-[1.02] tracking-[-0.03em] md:text-[84px]">
          <span className="inline-block bg-[#ccd4f5] px-4 pb-1 font-extrabold text-[#0b1440]">
            Self Management
          </span>
          <br />
          <span className="font-semibold text-cw-ink">for content creators</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-[720px] text-base leading-relaxed text-cw-muted md:text-xl">
          <span className="font-bold text-cw-ink">with/</span> runs everything behind your
          channel: strategy, recommendations, analytics, scheduling, replies, brand-deal sales
          from one place,{" "}
          <span className="font-semibold text-cw-ink">
            so the hours you lose to admin go back into creating
          </span>
        </p>

        <HeroAnimatedChat />

        <div className="mx-auto mt-6 flex max-w-[560px] flex-wrap justify-center gap-2.5">
          <Link
            href="#"
            className="inline-flex h-11 items-center justify-center rounded-full bg-cw-cta px-6 text-[15px] font-medium text-white transition-colors hover:bg-cw-cta-hover"
          >
            Start creating free
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex h-11 items-center justify-center rounded-full border border-[#e5e7eb] bg-white px-6 text-[15px] font-medium text-cw-ink transition-colors hover:bg-[#fafafa]"
          >
            See how it works
          </Link>
        </div>
      </div>
    </section>
  );
}
