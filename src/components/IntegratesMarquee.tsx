const ITEMS: { file: string; alt: string }[] = [
  { file: "01-Cursor.png", alt: "Cursor" },
  { file: "Integrates.png", alt: "Integrates" },
  { file: "02-Claude.png", alt: "Claude" },
  { file: "Everywhere.png", alt: "Everywhere" },
  { file: "03-Figma.png", alt: "Figma" },
  { file: "Integrates.png", alt: "Integrates" },
  { file: "04-ChatGPT.png", alt: "ChatGPT" },
  { file: "Everywhere.png", alt: "Everywhere" },
  { file: "05-Github.png", alt: "GitHub" },
  { file: "Integrates.png", alt: "Integrates" },
  { file: "06-Storybook.png", alt: "Storybook" },
  { file: "Everywhere.png", alt: "Everywhere" },
];

export function IntegratesMarquee() {
  return (
    <section className="w-full bg-[#f7f5f3] py-6 overflow-hidden">
      <div className="flex w-max animate-marquee items-center gap-8">
        {[...ITEMS, ...ITEMS].map((item, index) => (
          <img
            key={index}
            src={`/images/${item.file}`}
            alt={item.alt}
            className="h-10 md:h-12 lg:h-16 w-auto object-contain"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
