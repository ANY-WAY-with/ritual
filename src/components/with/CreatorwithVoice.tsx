import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function CreatorwithVoice() {
  return (
    <section className={cn("font-cw bg-cw-bg2 py-20 md:py-28")}>
      <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT — copy */}
        <Reveal>
          <p className="text-cw-accent text-xs font-bold uppercase tracking-widest">
            Voice learning
          </p>

          <h2 className="text-cw-ink font-bold text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.02em] mt-3">
            It sounds like you. Because it learned from you.
          </h2>

          <p className="text-cw-muted text-lg mt-4 max-w-[440px]">
            Share your past posts, scripts, and newsletters. with creator
            studies your tone, vocabulary, and rhythm — then writes new content
            that&apos;s unmistakably yours.
          </p>

          <a
            href="#"
            className="mt-6 inline-flex items-center gap-1 text-cw-accent font-semibold"
          >
            See how voice learning works
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>

        {/* RIGHT — chat mockup card */}
        <Reveal>
          <div className="bg-white rounded-2xl border border-cw-border shadow-xl p-5">
            {/* Header row */}
            <div className="flex items-center gap-2 mb-4">
              <span className="block h-2.5 w-2.5 rounded-full bg-cw-accent" />
              <span className="text-sm font-semibold text-cw-ink">
                with creator
              </span>
              <Sparkles className="h-4 w-4 text-cw-accent ml-auto" />
            </div>

            {/* Chat bubbles */}
            <div className="flex flex-col gap-3">
              {/* User bubble — right */}
              <div className="flex justify-end">
                <div className="bg-cw-ink text-white rounded-2xl px-4 py-2.5 text-sm max-w-[80%]">
                  can you also draft a YouTube title?
                </div>
              </div>

              {/* AI bubble — left */}
              <div className="flex flex-col items-start">
                <div className="bg-cw-amber-bg text-cw-ink rounded-2xl px-4 py-2.5 text-sm max-w-[88%]">
                  &ldquo;Our New Studio Tour (we&apos;re definitely in over our
                  heads)&rdquo; — plays on the self-deprecating angle while
                  being descriptive enough for search.
                </div>
                <p className="text-xs text-cw-muted mt-2">
                  Matched to your voice ✓
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
