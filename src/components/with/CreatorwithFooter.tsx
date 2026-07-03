import Link from "next/link";

interface LinkItem {
  label: string;
  href: string;
}

interface ColProps {
  heading: string;
  links: LinkItem[];
}

function Col({ heading, links }: ColProps) {
  return (
    <div>
      <p className="text-cw-ink font-semibold text-sm mb-3">{heading}</p>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-cw-muted hover:text-cw-ink block py-1 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CreatorwithFooter() {
  return (
    <footer className="font-cw bg-cw-bg2 border-t border-cw-border pt-16 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left: wordmark + tagline */}
          <div>
            <p className="font-bold text-xl">
              with <span className="text-cw-accent">creator</span>
            </p>
            <p className="text-cw-muted text-sm mt-2 max-w-[260px]">
              An AI that thinks with you — not for you.
            </p>
          </div>

          {/* Right: link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <Col
              heading="Product"
              links={[
                { label: "How it works", href: "#" },
                { label: "Features", href: "#" },
                { label: "Personas", href: "#" },
                { label: "Pricing", href: "#" },
              ]}
            />
            <Col
              heading="Company"
              links={[
                { label: "About", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "#" },
              ]}
            />
            <Col
              heading="Resources"
              links={[
                { label: "Help center", href: "#" },
                { label: "Voice guide", href: "#" },
                { label: "Platforms", href: "#" },
                { label: "FAQ", href: "#" },
              ]}
            />
          </div>
        </div>

        {/* Big watermark wordmark */}
        <p className="mt-14 text-[14vw] leading-none font-bold text-cw-ink/10 select-none">
          with creator
        </p>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-cw-border flex flex-col md:flex-row justify-between gap-2 text-sm text-cw-muted">
          <span>© 2026 with creator</span>
          <span>creatorwith.com</span>
        </div>
      </div>
    </footer>
  );
}
