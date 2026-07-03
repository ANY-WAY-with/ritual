import { MapPin, MessageSquare, Gift, Inbox, ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import type { ComponentType } from "react";

interface CardData {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  userPrompt: string;
  replyText: string;
  chips: string[];
}

const CARDS: CardData[] = [
  {
    icon: MapPin,
    title: "Plan the trip",
    description: "Tell it where you're going and when. It handles the rest.",
    userPrompt: "Plan a weekend in Lisbon.",
    replyText: "Flights held, hotel booked, and a 2-day itinerary's in your calendar.",
    chips: ["Gmail", "Calendar"],
  },
  {
    icon: MessageSquare,
    title: "Chase the reply",
    description: "Know exactly who hasn't responded, and nudge them in one tap.",
    userPrompt: "Who hasn't replied about Friday?",
    replyText: "Just Sam and Alex. Want me to nudge them?",
    chips: ["WhatsApp", "Gmail", "Slack"],
  },
  {
    icon: Gift,
    title: "Never miss a birthday",
    description: "It tracks the dates, finds a gift idea, and sends the reminder.",
    userPrompt: "Never let me forget a birthday.",
    replyText: "Got it. Mum's is in 9 days. I'll find a gift and remind you.",
    chips: ["Calendar", "Messages"],
  },
  {
    icon: Inbox,
    title: "Tame the inbox",
    description: "Surface only what matters and draft replies before you even ask.",
    userPrompt: "What actually needs a reply today?",
    replyText: "Three do. I've drafted two. Take a look?",
    chips: ["Gmail", "Outlook"],
  },
  {
    icon: ArrowRight,
    title: "Move work forward",
    description: "Turn messy threads into tickets, summaries, and next steps.",
    userPrompt: "Turn the launch chat into tasks.",
    replyText: "Made 5 Linear tickets and posted a summary to Slack.",
    chips: ["Slack", "Notion", "Linear"],
  },
  {
    icon: Sparkles,
    title: "Catch me up",
    description: "One message to know exactly what needs your attention right now.",
    userPrompt: "What am I forgetting?",
    replyText: "Three things need you today. Everything else can wait.",
    chips: ["WhatsApp", "Gmail", "Calendar", "Linear"],
  },
];

function Card({ card, delay }: { card: CardData; delay: number }) {
  const Icon = card.icon;
  return (
    <Reveal delay={delay}>
      <div className="bg-white border border-pally-border rounded-2xl shadow-sm p-6 h-full">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <Icon className="w-4 h-4 text-pally-ink shrink-0" />
          <span className="font-semibold text-pally-ink text-[15px] leading-snug">
            {card.title}
          </span>
        </div>

        {/* Chat snippet */}
        <div className="rounded-xl bg-[#f4f4f4] p-4 space-y-2 mb-4">
          {/* User bubble — right-aligned blue */}
          <div className="flex justify-end">
            <span className="bg-pally-blue text-white text-[13px] leading-snug px-3 py-1.5 rounded-full max-w-[80%] text-right">
              {card.userPrompt}
            </span>
          </div>
          {/* Reply bubble — left-aligned gray */}
          <div className="flex justify-start">
            <span className="bg-white text-pally-ink text-[13px] leading-snug px-3 py-1.5 rounded-xl border border-pally-border max-w-[90%]">
              {card.replyText}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-pally-muted text-[13px] leading-relaxed mb-4">
          {card.description}
        </p>

        {/* App chips */}
        <div className="flex flex-wrap gap-1.5">
          {card.chips.map((chip) => (
            <span
              key={chip}
              className={cn(
                "text-[11px] font-medium text-pally-muted bg-[#f4f4f4] border border-pally-border",
                "rounded-full px-2.5 py-0.5 leading-none"
              )}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function PallyHelp() {
  return (
    <section className="font-neue relative py-28">
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        {/* Two-column header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start mb-14">
          <Reveal>
            <h2 className="text-[44px] md:text-[72px] font-medium text-pally-ink leading-[1.0] tracking-[-0.02em] max-w-[560px]">
              The kind of help you actually need.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-pally-muted text-base md:text-lg leading-relaxed max-w-[420px] md:pt-4">
              It notices what needs doing, finds the context behind it, and gets it done. You just text it, like a person.
            </p>
          </Reveal>
        </div>

        {/* 6-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CARDS.map((card, i) => (
            <Card key={card.title} card={card} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
