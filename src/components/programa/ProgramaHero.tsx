import Image from "next/image";

export function ProgramaHero() {
  return (
    <section className="bg-programa-cream min-h-screen">
      {/* Nav */}
      <nav className="max-w-[1200px] mx-auto py-5 px-6 flex justify-between items-center">
        {/* Wordmark */}
        <div className="flex items-center gap-2">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="8" cy="8" r="4.5" fill="#1a1a1a" />
            <circle cx="20" cy="8" r="3" fill="#1a1a1a" />
            <polygon points="14,14 20,24 8,24" fill="#1a1a1a" />
          </svg>
          <span className="font-inter text-[20px] font-medium text-programa-ink tracking-tight">
            Programa
          </span>
        </div>

        {/* Center links */}
        <ul className="hidden md:flex items-center gap-8">
          {["Features", "Solutions", "Pricing", "Learn"].map((link) => (
            <li key={link}>
              <a
                href="#"
                className="font-inter text-base text-programa-ink hover:text-programa-muted transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="font-inter text-base text-programa-ink hover:text-programa-muted transition-colors"
          >
            Log in
          </a>
          <a
            href="#"
            className="bg-programa-yellow text-programa-ink rounded-full px-4 py-2 text-sm font-medium font-inter hover:opacity-90 transition-opacity"
          >
            Start free
          </a>
        </div>
      </nav>

      {/* Hero content */}
      <div className="max-w-[760px] mx-auto pt-16 pb-10 text-center px-6">
        {/* "All-new" pill */}
        <div className="inline-block mb-5">
          <span className="font-inter text-xs text-programa-faint border border-programa-border rounded-full px-3 py-1">
            All-new
          </span>
        </div>

        <h1 className="font-rhymes font-light text-[44px] md:text-[60px] leading-[1.05] tracking-[-1.5px] text-programa-ink">
          Beautiful software for interior designers
        </h1>

        <p className="font-inter text-programa-muted text-lg max-w-[520px] mx-auto mt-4">
          Streamline your workflow and unlock your studio&apos;s potential. Start your 7 day free trial.
        </p>

        <div className="mt-8 flex gap-3 justify-center">
          <a
            href="#"
            className="bg-programa-ink text-white rounded-full px-6 py-3 text-sm font-inter font-medium hover:opacity-90 transition-opacity"
          >
            Get started
          </a>
          <a
            href="#"
            className="bg-white border border-programa-border text-programa-ink rounded-full px-6 py-3 text-sm font-inter font-medium hover:bg-programa-cream2 transition-colors"
          >
            Watch our demo
          </a>
        </div>
      </div>

      {/* Hero image */}
      <div className="mt-12 mx-auto max-w-[960px] rounded-2xl shadow-xl overflow-hidden border border-programa-border px-6 md:px-0">
        <Image
          src="/programa/images/da02fbff20d401cba9288395a6cb8befb4030f07-2955x2024.png"
          alt="Programa projects dashboard"
          width={2955}
          height={2024}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
