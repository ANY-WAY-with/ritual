import { cn } from "@/lib/utils";

export function JasperHero() {
  return (
    <section className="bg-jasper-cloud min-h-screen">
      {/* Nav */}
      <nav className="max-w-[1240px] mx-auto py-5 px-6 flex justify-between items-center">
        {/* Wordmark */}
        <span className="font-feature text-jasper-red text-2xl lowercase select-none">
          jasper
        </span>

        {/* Center links */}
        <ul className="hidden md:flex items-center gap-7">
          {["Platform", "Solutions", "Resources", "Company", "Pricing"].map(
            (item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-abcrom text-base text-jasper-ink hover:opacity-70 transition-opacity"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="font-abcrom text-base text-jasper-ink hover:opacity-70 transition-opacity hidden sm:inline"
          >
            Log In
          </a>
          <a
            href="#"
            className="font-abcrom text-base text-jasper-ink hover:opacity-70 transition-opacity hidden sm:inline"
          >
            Free Trial
          </a>
          <a
            href="#"
            className="bg-jasper-red text-white rounded-md px-5 py-2.5 font-medium font-abcrom text-sm hover:opacity-90 transition-opacity"
          >
            Get A Demo
          </a>
        </div>
      </nav>

      {/* Hero content */}
      <div className="flex flex-col items-center px-6 pb-0">
        {/* "New!" banner pill */}
        <div className="mt-6 inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 text-sm shadow-sm">
          <span className="font-abcrom font-bold text-jasper-green">New!</span>
          <span className="font-abcrom text-jasper-navy">
            Optimize your brand for AI search with our GEO Agent.{" "}
            <a href="#" className="hover:underline">
              Learn more →
            </a>
          </span>
        </div>

        {/* H1 */}
        <h1
          className={cn(
            "font-feature text-jasper-navy text-center",
            "text-[52px] md:text-[80px] leading-[0.98] mt-8",
            "max-w-[860px]"
          )}
        >
          Put AI agents to work for marketing
        </h1>

        {/* Subheading */}
        <p className="font-abcrom text-jasper-navy/80 text-center text-lg max-w-[560px] mx-auto mt-5">
          Orchestrate intelligent agents to run end-to-end marketing
          workflows—delivering speed, control, and measurable impact.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-3 justify-center flex-wrap">
          <a
            href="#"
            className="border border-jasper-navy text-jasper-navy rounded-md px-6 py-3 font-abcrom font-medium hover:bg-jasper-navy/5 transition-colors"
          >
            Start Free Trial
          </a>
          <a
            href="#"
            className="bg-jasper-red text-white rounded-md px-6 py-3 font-abcrom font-medium hover:opacity-90 transition-opacity"
          >
            Get A Demo
          </a>
        </div>
      </div>

      {/* Illustration band */}
      <div className="mt-14 relative h-[240px] md:h-[400px] max-w-[1240px] mx-auto overflow-hidden rounded-xl">
        {/* ── Layer 0: base bright-green background ── */}
        <div className="absolute inset-0 bg-jasper-green-bright" />

        {/* ── Layer 1: blue grid overlay (full width) ── */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(30,80,255,0.25) 0px, rgba(30,80,255,0.25) 1px, transparent 1px, transparent 28px), repeating-linear-gradient(90deg, rgba(30,80,255,0.25) 0px, rgba(30,80,255,0.25) 1px, transparent 1px, transparent 28px)",
          }}
        />

        {/* ── Layer 2: pink triangle (mid-left area) ── */}
        <div
          className="absolute"
          style={{
            left: "18%",
            top: "0",
            width: "220px",
            height: "340px",
            backgroundColor: "#ff6eb0",
            clipPath: "polygon(30% 0%, 100% 100%, 0% 100%)",
          }}
        />

        {/* ── Layer 3: small blue/navy diagonal stripe accent ── */}
        <div
          className="absolute"
          style={{
            left: "55%",
            bottom: "0",
            width: "160px",
            height: "260px",
            backgroundColor: "rgba(30,80,255,0.75)",
            clipPath: "polygon(40% 0%, 100% 0%, 60% 100%, 0% 100%)",
          }}
        />

        {/* ── Layer 4: right bright-green column with dark-green circles ── */}
        <div className="absolute right-0 top-0 h-full w-[100px] md:w-[140px] bg-jasper-green-bright flex flex-col items-center justify-around py-5">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-jasper-green rounded-full w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
            />
          ))}
        </div>

        {/* ── Layer 5: central product card placeholder (mimics screenshot area) ── */}
        <div className="absolute left-[28%] top-[8%] w-[44%] h-[84%] bg-jasper-navy/10 rounded-lg border border-jasper-navy/20 flex items-center justify-center">
          <span className="font-abcrom text-jasper-navy/40 text-sm text-center px-4">
            product UI
          </span>
        </div>
      </div>
    </section>
  );
}
