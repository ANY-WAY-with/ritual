import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function CreatorwithCta() {
  return (
    <section className="font-cw py-20 md:py-28">
      <div className="max-w-[1000px] mx-auto rounded-3xl bg-cw-ink text-white text-center px-8 py-20 relative overflow-hidden">
        {/* Subtle amber radial glow */}
        <div
          aria-hidden
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-cw-amber-bg opacity-10 blur-[120px] pointer-events-none"
        />

        <Reveal>
          <h2 className="font-bold text-white text-[32px] md:text-[52px] leading-[1.08] tracking-[-0.02em] max-w-[640px] mx-auto">
            Create with a partner who gets your voice.
          </h2>

          <p className="text-white/70 text-lg mt-4">
            Start free today. No credit card required.
          </p>

          <div className="mt-8 flex gap-3 justify-center flex-wrap">
            <Link
              href="#"
              className={cn(
                "bg-cw-accent text-white rounded-full px-7 py-3.5 font-semibold",
                "hover:bg-cw-accent-hover transition-colors"
              )}
            >
              Start creating free
            </Link>
            <Link
              href="#"
              className="border border-white/25 text-white rounded-full px-7 py-3.5 font-semibold hover:bg-white/5 transition-colors"
            >
              Talk to us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
