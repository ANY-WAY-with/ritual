import { cn } from "@/lib/utils";

interface CardData {
  title: string;
  body: string;
  bg: string;
  gridLine: string;
}

const CARDS: CardData[] = [
  {
    title: "Agents",
    body: "Purpose-built AI agents that execute real marketing work from idea to launch.",
    bg: "#eafbe4",
    gridLine: "rgba(32,122,0,.15)",
  },
  {
    title: "Content Pipelines",
    body: "Repeatable workflows that move work from idea to launch.",
    bg: "#ffe9e4",
    gridLine: "rgba(250,64,40,.15)",
  },
  {
    title: "Jasper IQ",
    body: "Maintain quality and authenticity with a rich context hub.",
    bg: "#e6ecff",
    gridLine: "rgba(19,69,235,.15)",
  },
];

function Card({ title, body, bg, gridLine }: CardData) {
  return (
    <div
      className="rounded-2xl p-8 min-h-[320px] flex flex-col justify-between"
      style={{
        backgroundColor: bg,
        backgroundImage: `repeating-linear-gradient(0deg, ${gridLine} 0px, ${gridLine} 1px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, ${gridLine} 0px, ${gridLine} 1px, transparent 1px, transparent 24px)`,
      }}
    >
      <div>
        <h3 className="font-feature text-jasper-navy text-2xl">{title}</h3>
        <p className="font-abcrom text-jasper-navy/70 text-sm mt-2">{body}</p>
      </div>
      <div className="flex justify-end">
        <span className="font-abcrom text-jasper-navy text-lg leading-none">→</span>
      </div>
    </div>
  );
}

export function JasperPlatformCards() {
  return (
    <section className="bg-white py-20">
      <div className="px-4">
        <p className="font-abcrom-mono uppercase text-xs tracking-wide text-jasper-red text-center">
          The Jasper Platform
        </p>
        <h2
          className={cn(
            "font-feature text-jasper-navy text-center text-[36px] md:text-[54px] leading-[1.05]",
            "max-w-[820px] mx-auto mt-3"
          )}
        >
          The execution platform for intelligent marketing
        </h2>
        <p className="font-abcrom text-jasper-navy/70 text-center max-w-[640px] mx-auto mt-4">
          Jasper is the agentic execution layer built for modern marketing teams. With 100+ specialized AI agents and connected context, execute more workflows and drive results across your channel and content.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 max-w-[1120px] mx-auto">
          {CARDS.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
