import Image from "next/image";
import { MessageCircle, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function PallyFinalCta() {
  return (
    <section className={cn("font-neue relative py-24")}>
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <div className="bg-[#0e0e0e] text-white rounded-[32px] px-8 py-24 text-center relative overflow-hidden">
          {/* Subtle radial glow in the background */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(0,122,255,0.18) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          {/* Icon */}
          <div className="flex justify-center">
            <Image
              src="/pally/images/icon-only.svg"
              alt="Pally icon"
              width={32}
              height={32}
              className="h-8 w-auto invert"
            />
          </div>

          {/* Headline */}
          <h2 className="mt-6 text-[40px] md:text-[64px] font-medium leading-[1.02] tracking-[-0.02em]">
            Stay on top of... Everything.
          </h2>

          {/* Sub-headline */}
          <p className="mt-4 text-white/60 text-base md:text-lg max-w-md mx-auto leading-relaxed">
            Pally keeps up with the details and helps you get the next thing
            done right from iMessage.
          </p>

          {/* Input row */}
          <div className="mt-8 flex items-center justify-center">
            <div className="flex items-center w-full max-w-sm bg-[#1c1c1e] rounded-full px-5 py-3 gap-3">
              <input
                type="text"
                placeholder="What am I forgetting today?"
                className="flex-1 bg-transparent text-white placeholder-white/40 text-sm outline-none min-w-0"
              />
              <button
                type="button"
                aria-label="Send"
                className="flex-shrink-0 bg-pally-blue text-white rounded-full w-8 h-8 flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CTA pill */}
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 bg-pally-blue text-white rounded-full px-6 py-3 font-medium hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-4 h-4" />
              Text Pally
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
