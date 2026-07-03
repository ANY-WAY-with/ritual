const STATS: { value: string; label: string }[] = [
  { value: "500+", label: "Creators" },
  { value: "10K+", label: "Content pieces" },
  { value: "5+", label: "Platforms" },
  { value: "24/7", label: "Available" },
];

export function CreatorwithStats() {
  return (
    <section className="font-cw bg-cw-bg2 border-y border-cw-border py-10">
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl md:text-4xl font-bold text-cw-ink">{stat.value}</p>
            <p className="text-sm text-cw-muted mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
