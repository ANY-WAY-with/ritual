import { Container } from "@/components/Container";
import { DittoWordmark, HeartIcon } from "@/components/icons";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColProps {
  heading?: string;
  links: FooterLink[];
  className?: string;
}

function FooterCol({ heading, links, className }: FooterColProps) {
  return (
    <div className={className}>
      {heading && (
        <p className="text-ditto-muted text-base border-l border-white/20 pl-3.5 mb-4">
          {heading}
        </p>
      )}
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-ditto-cream text-base hover:opacity-70 transition-opacity"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ditto-ink text-ditto-cream py-16">
      <Container className="max-w-[1320px]">
        {/* Top columns grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Solutions column */}
          <div>
            <FooterCol
              heading="Solutions"
              links={[
                { label: "For Content Designers", href: "#" },
                { label: "For Developers", href: "#" },
                { label: "For Localization Managers", href: "#" },
                { label: "For Product Designers", href: "#" },
              ]}
            />
            <FooterCol
              className="mt-6"
              links={[
                { label: "Build a Reusable Library", href: "#" },
                { label: "Centralize Copy Reviews", href: "#" },
                { label: "Localize Product Copy", href: "#" },
                { label: "Integrate with Engineering", href: "#" },
                { label: "Keep Designs in Sync", href: "#" },
                { label: "Build an AI Content System", href: "#" },
                { label: "For Financial Services", href: "#" },
              ]}
            />
          </div>

          {/* Product column */}
          <div>
            <FooterCol
              heading="Product"
              links={[
                { label: "Ditto Overview", href: "#" },
                { label: "Enterprise", href: "#" },
                { label: "Pricing", href: "#" },
              ]}
            />
          </div>

          {/* Resources column */}
          <div>
            <FooterCol
              heading="Resources"
              links={[
                { label: "User Help Guides", href: "#" },
                { label: "Developer Documentation", href: "#" },
                { label: "Blog", href: "#" },
                { label: "What's New", href: "#" },
                { label: "Log In", href: "#" },
                { label: "Book a call", href: "#" },
              ]}
            />
          </div>

          {/* Company column */}
          <div>
            <FooterCol
              heading="Company"
              links={[{ label: "Careers", href: "#" }]}
            />
            <div className="mt-6">
              <FooterCol
                heading="Legal"
                links={[
                  { label: "Terms of Service", href: "#" },
                  { label: "Privacy Policy", href: "#" },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 max-w-[560px] ml-auto">
          <p className="text-2xl font-bold text-ditto-cream">
            Never miss an update: Sign up for updates, exclusive insights, and
            product releases.
          </p>
          <div className="mt-6 rounded-full bg-white flex items-center pl-6 pr-2 py-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent text-ditto-ink outline-none placeholder:text-ditto-muted"
            />
            <button
              type="submit"
              className="rounded-full px-5 py-2 font-bold text-ditto-ink"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="mt-16">
          <DittoWordmark className="w-full h-auto text-ditto-cream" />
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col md:flex-row justify-between gap-2 text-sm font-bold">
          <span>
            Made with{" "}
            <HeartIcon className="inline h-4 w-auto text-ditto-cream mx-1" />
            {" "}in San Francisco
          </span>
          <span>© 2026 Ditto Tech Inc.</span>
        </div>
      </Container>
    </footer>
  );
}
