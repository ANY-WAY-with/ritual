import Image from "next/image";
import { Reveal } from "@/components/Reveal";

interface RowData {
  title: string;
  body: string;
  cta: string;
  image: string;
  width: number;
  height: number;
}

const ROWS: RowData[] = [
  {
    title: "Specification, streamlined",
    body: "Specify in real-time meaning no double handling data or version control.",
    cta: "Get started",
    image: "/programa/images/f0bb1633e6826388616ba8a088b476619df21455-4000x2400.webp",
    width: 4000,
    height: 2400,
  },
  {
    title: "Management, minimized",
    body: "Manage projects effortlessly with our intuitive and agile platform.",
    cta: "Get started",
    image: "/programa/images/5ec8e56c0ec3f52c248b118fdbebb68383b275d9-1392x1104.png",
    width: 1392,
    height: 1104,
  },
  {
    title: "Presentations, perfected",
    body: "Purpose-built presentation tools provide a single-source-of-truth from concept to completion.",
    cta: "Explore Presentations",
    image: "/programa/images/5ec8e56c0ec3f52c248b118fdbebb68383b275d9-1392x1104.png",
    width: 1392,
    height: 1104,
  },
];

function Row({ row, index }: { row: RowData; index: number }) {
  const isEven = index % 2 === 1;

  return (
    <Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[1100px] mx-auto py-12">
        {/* Text column */}
        <div className={`flex flex-col${isEven ? " lg:order-2" : ""}`}>
          <h3 className="font-rhymes text-[28px] md:text-[32px] text-programa-ink leading-tight">
            {row.title}
          </h3>
          <p className="font-inter text-programa-muted text-base mt-3 max-w-[420px]">
            {row.body}
          </p>
          <a
            href="#"
            className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-programa-ink"
          >
            {row.cta} <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Image column */}
        <div className={isEven ? "lg:order-1" : ""}>
          <Image
            src={row.image}
            alt={row.title}
            width={row.width}
            height={row.height}
            className="rounded-2xl w-full h-auto border border-programa-border"
          />
        </div>
      </div>
    </Reveal>
  );
}

export function ProgramaFeatures() {
  return (
    <section className="bg-white py-20 px-6">
      <h2 className="font-rhymes text-[36px] md:text-[44px] text-programa-ink text-center mb-12 leading-tight">
        More time to design
      </h2>
      {ROWS.map((row, index) => (
        <Row key={row.title} row={row} index={index} />
      ))}
    </section>
  );
}
