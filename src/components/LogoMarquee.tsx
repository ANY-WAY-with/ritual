const LOGOS: { file: string; alt: string }[] = [
  { file: "staffbase.webp", alt: "Staffbase" },
  { file: "root.webp", alt: "Root" },
  { file: "microsoft.webp", alt: "Microsoft" },
  { file: "ebay.webp", alt: "eBay" },
  { file: "stash.svg", alt: "Stash" },
  { file: "bigcommerce.webp", alt: "BigCommerce" },
  { file: "ownup.svg", alt: "OwnUp" },
  { file: "uber-carshare.webp", alt: "Uber Carshare" },
  { file: "mcafee.webp", alt: "McAfee" },
  { file: "zero.svg", alt: "Zero" },
  { file: "curology.svg", alt: "Curology" },
  { file: "happy-money.svg", alt: "Happy Money" },
  { file: "step.svg", alt: "Step" },
  { file: "immutable.svg", alt: "Immutable" },
  { file: "rakuten.webp", alt: "Rakuten" },
];

export function LogoMarquee() {
  return (
    <section className="relative w-full overflow-hidden bg-ditto-cream py-6">
      {/* Left fade mask */}
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-[5] w-24 bg-gradient-to-r from-ditto-cream to-transparent" />

      {/* Right fade mask */}
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-[5] w-24 bg-gradient-to-l from-ditto-cream to-transparent" />

      {/* Center pill */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ditto-cream px-5 py-2 text-base font-bold text-ditto-ink shadow-sm whitespace-nowrap">
        8,000+ teams trust Ditto
      </div>

      {/* Marquee track — renders LOGOS twice for seamless loop */}
      <div className="flex w-max animate-marquee items-center gap-14">
        {[...LOGOS, ...LOGOS].map((logo, index) => (
          <img
            key={`${logo.file}-${index}`}
            src={`/images/${logo.file}`}
            alt={logo.alt}
            className="h-[22px] w-auto object-contain"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
