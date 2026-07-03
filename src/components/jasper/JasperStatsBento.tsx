import { cn } from "@/lib/utils";

interface Cell {
  stat?: string;
  label: string;
  quote?: boolean;
  bg: string;
  colSpan?: 2;
  rowSpan?: 2;
  statColor?: string;
}

const CELLS: Cell[] = [
  {
    stat: "10,000+",
    label: "hours saved annually",
    bg: "#eafbe4",
  },
  {
    quote: true,
    label: "Compliant, high-quality, and localized marketing content at scale.",
    bg: "#ddeeff",
    colSpan: 2,
  },
  {
    stat: "60%",
    label: "of SEO now discoverable & actionable",
    bg: "#fce4e4",
    statColor: "#fa4028",
  },
  {
    stat: "7,500",
    label: "marketing content pieces produced",
    bg: "#efefff",
    statColor: "#00063d",
  },
  {
    stat: "3x",
    label: "faster campaign production",
    bg: "#f5eaff",
    statColor: "#00063d",
  },
  {
    stat: "Time-to-market",
    label: "cut dramatically across teams",
    bg: "#f9f9f9",
  },
];

export function JasperStatsBento() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="text-center">
        <h2
          className={cn(
            "font-feature text-jasper-navy text-center",
            "text-[40px] md:text-[64px] leading-[1.02]"
          )}
        >
          Proven strategies,{" "}
          <span className="block md:inline">real results</span>
        </h2>
        <div className="mt-5 flex justify-center">
          <span
            className={cn(
              "border border-jasper-navy/20 rounded-md px-5 py-2.5",
              "text-jasper-navy text-sm inline-block cursor-pointer",
              "hover:bg-jasper-navy/5 transition-colors"
            )}
          >
            Explore Customer Stories
          </span>
        </div>
      </div>

      <div
        className={cn(
          "mt-12 max-w-[1120px] mx-auto",
          "grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[168px]"
        )}
      >
        {CELLS.map((cell, i) => (
          <div
            key={i}
            className={cn(
              "rounded-2xl p-6 flex flex-col justify-between",
              cell.colSpan === 2 && "md:col-span-2",
              cell.rowSpan === 2 && "md:row-span-2"
            )}
            style={{ backgroundColor: cell.bg }}
          >
            {cell.quote ? (
              <p className="font-feature text-jasper-navy text-2xl leading-snug">
                {cell.label}
              </p>
            ) : (
              <>
                <div>
                  {cell.stat && (
                    <p
                      className="font-feature text-3xl md:text-4xl leading-none"
                      style={{ color: cell.statColor ?? "#00063d" }}
                    >
                      {cell.stat}
                    </p>
                  )}
                </div>
                <p className="font-abcrom text-jasper-navy/70 text-sm leading-snug">
                  {cell.label}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
