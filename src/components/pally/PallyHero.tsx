import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function PallyHero() {
  return (
    <section className="font-neue relative text-center pt-28 pb-24">
      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        {/* Badge pill */}
        <div className="inline-flex items-center gap-2 bg-white border border-pally-border rounded-full px-4 py-2 shadow-sm text-sm text-pally-ink">
          <img
            src="/pally/images/icon-only.svg"
            alt=""
            className="h-4 w-4"
          />
          Your personal assistant in iMessage.
        </div>

        {/* H1 */}
        <h1 className="mt-8 font-medium text-pally-ink text-[64px] md:text-[112px] leading-[0.95] tracking-[-0.03em]">
          One text away from{" "}
          <span className="text-pally-blue">done.</span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-[560px] text-lg text-pally-muted">
          Pally connects to all your inboxes and tools, and handles the things
          you&apos;d forget, automatically.{" "}
          <span className="font-bold text-pally-ink">Try it today for free.</span>
        </p>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="#text-pally"
            className="relative inline-flex items-center gap-2 bg-pally-blue text-white rounded-full px-6 py-3 font-medium text-base hover:bg-pally-blue/90 transition-colors"
            style={{
              boxShadow: "0 0 32px 8px rgba(0, 122, 255, 0.35)",
            }}
          >
            <MessageCircle className="h-5 w-5" />
            Text Pally
          </Link>
        </div>
      </div>
    </section>
  );
}
