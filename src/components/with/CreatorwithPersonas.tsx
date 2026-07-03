import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";
import {
  Video,
  Camera,
  Music2,
  Mail,
  Mic,
  Layers,
  type LucideIcon,
} from "lucide-react";

interface Persona {
  label: string;
  desc: string;
  Icon: LucideIcon;
  tintBg: string;
  tintColor: string;
}

const PERSONAS: Persona[] = [
  {
    label: "YouTubers",
    desc: "Script ideation, title testing, and series planning.",
    Icon: Video,
    tintBg: "#fce7f3",
    tintColor: "#ec4899",
  },
  {
    label: "Instagram Creators",
    desc: "Captions, carousels, Reels hooks, and posting strategy.",
    Icon: Camera,
    tintBg: "#ede9fe",
    tintColor: "#8b5cf6",
  },
  {
    label: "TikTokers",
    desc: "Trend analysis, hooks, and content calendars.",
    Icon: Music2,
    tintBg: "#cffafe",
    tintColor: "#06b6d4",
  },
  {
    label: "Newsletter Writers",
    desc: "Topic research, outlines, and subject lines.",
    Icon: Mail,
    tintBg: "#fef3c7",
    tintColor: "#f59e0b",
  },
  {
    label: "Podcasters",
    desc: "Episode planning, show notes, and clip strategy.",
    Icon: Mic,
    tintBg: "#fce7f3",
    tintColor: "#ec4899",
  },
  {
    label: "Multi-platform",
    desc: "Cross-platform repurposing with a unified voice.",
    Icon: Layers,
    tintBg: "#ede9fe",
    tintColor: "#8b5cf6",
  },
];

interface PersonaCardProps {
  persona: Persona;
}

function PersonaCard({ persona }: PersonaCardProps) {
  const { label, desc, Icon, tintBg, tintColor } = persona;
  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-cw-border p-6",
        "hover:shadow-lg transition-shadow"
      )}
    >
      <div
        className="w-11 h-11 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: tintBg }}
      >
        <Icon size={22} style={{ color: tintColor }} strokeWidth={1.75} />
      </div>
      <p className="text-lg font-bold text-cw-ink mt-4">{label}</p>
      <p className="text-cw-muted text-sm mt-1.5">{desc}</p>
    </div>
  );
}

export function CreatorwithPersonas() {
  return (
    <section
      id="personas"
      className="font-cw bg-cw-bg2 py-20 md:py-28 px-4"
    >
      <p className="text-cw-accent text-xs font-bold uppercase tracking-widest text-center">
        Who it&apos;s for
      </p>
      <h2
        className={cn(
          "text-cw-ink font-bold text-[32px] md:text-[48px]",
          "leading-[1.1] tracking-[-0.02em] text-center mt-3"
        )}
      >
        Built for every kind of creator.
      </h2>

      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
          "max-w-[1080px] mx-auto mt-12"
        )}
      >
        {PERSONAS.map((persona) => (
          <Reveal key={persona.label}>
            <PersonaCard persona={persona} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
