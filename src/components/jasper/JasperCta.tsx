import Image from "next/image";

export function JasperCta() {
  return (
    <section className="bg-jasper-cloud py-20">
      <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="relative">
          {/* Decorative circles — sit behind the content, peeking from the left */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 -top-10 z-0 hidden flex-col gap-3 lg:flex"
          >
            <span className="block h-16 w-16 rounded-full bg-jasper-green/90" />
            <span className="block h-16 w-16 rounded-full bg-jasper-green-bright/80" />
          </div>

          <div className="relative z-10">
            <h2 className="font-feature text-jasper-navy text-[40px] md:text-[64px] leading-[1.02]">
              Put AI agents to work, on your terms
            </h2>

            <p className="font-abcrom text-jasper-navy/70 mt-4 max-w-[440px]">
              Explore how Jasper agents automate real work across every team,
              strategy, and function.
            </p>

            <a
              href="#"
              className="mt-6 bg-jasper-red text-white rounded-md px-6 py-3 inline-block font-abcrom font-medium"
            >
              Get A Demo
            </a>
          </div>

          {/* Circle accents at the bottom-left corner */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-8 left-0 z-0 flex gap-3"
          >
            <span className="block h-14 w-14 rounded-full bg-jasper-green/90" />
            <span className="block h-14 w-14 rounded-full bg-jasper-green-bright/70" />
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <Image
            src="/jasper/images/Closing_photo_1.avif"
            alt="Marketing team collaborating"
            width={941}
            height={900}
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
