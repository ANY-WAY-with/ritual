import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

interface Feature {
  color: string;
  title: string;
  body: string;
  image: string;
  imageSide: "left" | "right";
}

const FEATURES: Feature[] = [
  {
    color: "#b26dc2",
    image: "/images/Frame-1400002967.png",
    imageSide: "right",
    title: "Capture how your product speaks",
    body: "Build a rich, structured model of your product language. Start with existing standards—terminology, voice, tone, reusable content patterns—then let Ditto infer the rest by scanning your codebase.",
  },
  {
    color: "#64a727",
    image: "/images/Frame-1400002967-1.png",
    imageSide: "left",
    title: "Apply the standards everywhere you work",
    body: "Keep copy consistent and on-brand, no matter who—or what—is writing. Ditto brings guidance and enforcement into Figma, Claude Code, pull requests, prototypes—everywhere your team is building.",
  },
  {
    color: "#146ef5",
    image: "/images/Frame-1400002967-2.png",
    imageSide: "right",
    title: "Improve the system as you use it",
    body: "As your team accepts, rejects, and edits suggestions, Ditto identifies gaps in your standards and proposes updates—so guidance stays up-to-date as your product evolves, and suggestions get better every time.",
  },
  {
    color: "#bbb809",
    image: "/images/Frame-1400002967-3.png",
    imageSide: "left",
    title: "Trace and govern every decision",
    body: "Understand the full story behind the words in your product. Track what changed, why, who approved it, what's live, and how your standards perform over time—all in one connected system.",
  },
  {
    color: "#f5c4cc",
    image: "/images/Frame-1400002967-4.png",
    imageSide: "right",
    title: "One source of truth, every step of the way",
    body: "Localize and ship from the same source of truth. Generate translations as you build, then hand off approved copy to code—with the context and decision history behind every version intact.",
  },
];

function FeatureRow({ feature }: { feature: Feature }) {
  // On mobile: image always on top, text below (DOM order: image first, then text).
  // On desktop: imageSide="right" → text left, image right (DOM order preserved).
  //             imageSide="left"  → image left, text right (reorder via lg:order-*).
  const imageFirst = feature.imageSide === "left";

  return (
    <section className="bg-ditto-cream">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center py-12">
          {/* Image column — in DOM first so mobile shows image above text */}
          <div className={cn(imageFirst ? "lg:order-1" : "lg:order-2")}>
            <Image
              src={feature.image}
              alt=""
              width={1440}
              height={834}
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Text column */}
          <div className={cn("flex flex-row gap-[15px]", imageFirst ? "lg:order-2" : "lg:order-1")}>
            {/* Color bullet — solid square, no border radius */}
            <div
              className="h-[34px] w-[34px] shrink-0 mt-1"
              style={{ backgroundColor: feature.color }}
            />

            {/* Text block */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-ditto-ink text-[32px] leading-[1.05] md:text-[48px] md:leading-[48px] tracking-[-0.96px]">
                {feature.title}
              </h3>
              <p className="text-lg md:text-[26px] md:leading-[31.2px] font-light text-ditto-muted">
                {feature.body}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <>
      {FEATURES.map((feature) => (
        <Reveal key={feature.title}>
          <FeatureRow feature={feature} />
        </Reveal>
      ))}
    </>
  );
}
