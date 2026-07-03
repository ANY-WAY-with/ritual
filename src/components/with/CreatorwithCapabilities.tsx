import { Compass, CalendarDays, AudioLines, TrendingUp, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";

interface CapabilityData {
  title: string;
  desc: string;
  color: string;
  bg: string;
  Icon: LucideIcon;
}

const CAPS: CapabilityData[] = [
  {
    title: "Strategic Thinking",
    desc: "Talk through your content strategy like you would with a creative director.",
    color: "#f59e0b",
    bg: "#fef3c7",
    Icon: Compass,
  },
  {
    title: "Content Planning",
    desc: "Map out weeks of content in a single conversation.",
    color: "#8b5cf6",
    bg: "#ede9fe",
    Icon: CalendarDays,
  },
  {
    title: "Voice Learning",
    desc: "Every output sounds like you — not a machine.",
    color: "#ec4899",
    bg: "#fce7f3",
    Icon: AudioLines,
  },
  {
    title: "Performance Insight",
    desc: "Data-backed suggestions on what to double down on next.",
    color: "#06b6d4",
    bg: "#cffafe",
    Icon: TrendingUp,
  },
];

function CapabilityCard({ title, desc, color, bg, Icon }: CapabilityData) {
  return (
    <div className="rounded-2xl border border-cw-border bg-white p-8">
      <div
        className="w-12 h-12 flex items-center justify-center rounded-xl"
        style={{ backgroundColor: bg }}
      >
        <Icon size={22} style={{ color }} />
      </div>
      <h3 className="text-xl font-bold text-cw-ink mt-5">{title}</h3>
      <p className="text-cw-muted mt-2">{desc}</p>
    </div>
  );
}

export function CreatorwithCapabilities() {
  return (
    <section id="features" className="font-cw bg-cw-bg2 py-20 md:py-28">
      <div className="px-4">
        <p className="text-cw-accent text-xs font-bold uppercase tracking-widest text-center">
          Capabilities
        </p>
        <h2 className="text-cw-ink font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-[-0.02em] text-center max-w-[720px] mx-auto mt-3">
          A creative partner, not just a tool.
        </h2>
        <p className="text-cw-muted text-lg text-center max-w-[560px] mx-auto mt-4">
          with creator brings strategy, planning, and your voice into one conversation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[900px] mx-auto mt-12">
          {CAPS.map((cap) => (
            <Reveal key={cap.title}>
              <CapabilityCard {...cap} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
