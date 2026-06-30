import Image from "next/image";
import { PillButton } from "@/components/ui/pill-button";

export function PlatformSection() {
  return (
    <section className="bg-ditto-ink py-20">
      {/* Heading block */}
      <div className="max-w-[800px] mx-auto px-6 mb-10 text-center">
        <h2 className="font-bold text-ditto-cream text-balance text-center text-[30px] md:text-[48px] md:leading-[52.8px]">
          The system that works, everywhere you work
        </h2>
        <div className="mt-6 flex justify-center">
          <PillButton variant="yellow" href="#">
            See the full Ditto platform
          </PillButton>
        </div>
      </div>

      {/* Bento grid */}
      <div className="max-w-[1360px] mx-auto px-2 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Left column */}
          <div className="flex flex-col gap-5">
            <Image
              src="/images/Product-Grid-1.png"
              alt=""
              width={1340}
              height={972}
              className="w-full h-auto rounded-2xl"
            />
            <div className="grid grid-cols-2 gap-5">
              <Image
                src="/images/Product-Grid-3.png"
                alt=""
                width={650}
                height={466}
                className="w-full h-auto rounded-2xl"
              />
              <Image
                src="/images/Product-Grid-4.png"
                alt=""
                width={650}
                height={466}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-5">
            <Image
              src="/images/Product-Grid-2.png"
              alt=""
              width={1340}
              height={972}
              className="w-full h-auto rounded-2xl"
            />
            <Image
              src="/images/Product-Grid-5.png"
              alt=""
              width={1340}
              height={466}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
