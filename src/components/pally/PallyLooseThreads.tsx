import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

interface Card {
  source: string;
  message: string;
  col: number; // 0-3 for rough column placement
  offset: "none" | "sm" | "md" | "lg" | "xl"; // vertical stagger
}

const CARDS: Card[] = [
  { source: "WhatsApp",  message: "Let's do Kolae at 8",          col: 0, offset: "sm"  },
  { source: "Gmail",     message: "BA 117 check-in is open",       col: 1, offset: "none" },
  { source: "Calendar",  message: "Mum's birthday Sunday",         col: 2, offset: "sm"  },
  { source: "Slack",     message: "Launch date moved",             col: 3, offset: "none" },
  { source: "Messages",  message: "Pay Jess for the tickets",      col: 1, offset: "lg"  },
  { source: "Calendar",  message: "Flight to NYC tomorrow",        col: 3, offset: "md"  },
  { source: "Granola",   message: "Action item: send pricing",     col: 0, offset: "lg"  },
  { source: "Linear",    message: "Launch milestone",              col: 2, offset: "lg"  },
  { source: "Drive",     message: "Pricing deck final",            col: 1, offset: "xl"  },
  { source: "Web",       message: "Reservation slot available",    col: 3, offset: "xl"  },
];

const OFFSET_CLASS: Record<Card["offset"], string> = {
  none: "mt-0",
  sm:   "mt-6",
  md:   "mt-12",
  lg:   "mt-20",
  xl:   "mt-28",
} as const;

export function PallyLooseThreads() {
  return (
    <section className="font-neue relative py-24 bg-transparent">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16 mb-16">
          <Reveal>
            <h2 className={cn(
              "text-[44px] md:text-[72px] font-medium text-pally-ink",
              "leading-[1.0] tracking-[-0.02em] max-w-[560px]",
            )}>
              You have loose<br />threads everywhere.
            </h2>
          </Reveal>

          <Reveal delay={80} className="md:pt-4 md:max-w-[360px]">
            <p className="text-pally-muted text-base leading-relaxed">
              The plan&rsquo;s in WhatsApp. The receipt&rsquo;s in Gmail. The
              decision&rsquo;s in Slack. The file&rsquo;s in Drive. And
              you&rsquo;re the one holding it all together.
            </p>
          </Reveal>
        </div>

        {/* Scattered card grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-start">
          {CARDS.map((card, i) => (
            <Reveal
              key={i}
              delay={i * 60}
              className={OFFSET_CLASS[card.offset]}
            >
              <div className={cn(
                "bg-white border border-pally-border rounded-2xl shadow-sm p-4",
                "flex flex-col gap-2",
              )}>
                {/* Source label row */}
                <div className="flex items-center justify-between gap-2">
                  <span className={cn(
                    "text-xs text-pally-muted font-medium",
                    "border border-pally-border rounded-full px-2 py-0.5",
                    "leading-none",
                  )}>
                    {card.source}
                  </span>
                  {/* Unread indicator dot */}
                  <span className="w-2 h-2 rounded-full bg-pally-blue flex-shrink-0" />
                </div>

                {/* Message text */}
                <p className="text-sm text-pally-ink leading-snug">
                  {card.message}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
