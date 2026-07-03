import { cn } from "@/lib/utils";

interface ColProps {
  heading: string;
  links: string[];
}

function Col({ heading, links }: ColProps) {
  return (
    <div className="flex flex-col">
      <span
        className={cn(
          "font-abcrom-mono uppercase text-xs tracking-wide text-white/50 mb-3"
        )}
      >
        {heading}
      </span>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-white/85 hover:text-white transition-colors font-abcrom"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function JasperFooter() {
  return (
    <footer className="bg-jasper-navy text-white py-16 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Nav columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-abcrom">
          <Col
            heading="Platform"
            links={[
              "Agents",
              "Content Pipelines",
              "Jasper IQ",
              "Integrations",
              "Security",
            ]}
          />
          <Col
            heading="Solutions"
            links={["By Team", "By Use Case", "By Industry", "Enterprise"]}
          />
          <Col
            heading="Resources"
            links={[
              "Blog",
              "Foundations",
              "Customer Stories",
              "Help Center",
              "Community",
            ]}
          />
          <Col
            heading="Company"
            links={["About", "Careers", "Contact", "Trust Center"]}
          />
        </div>

        {/* Giant wordmark */}
        <div className="mt-12 font-feature text-jasper-red leading-none text-[16vw]">
          jasper
        </div>

        {/* Bottom bar */}
        <div
          className={cn(
            "mt-8 pt-6 border-t border-white/15",
            "flex flex-col md:flex-row justify-between gap-3 text-sm text-white/60"
          )}
        >
          <span>© 2026 Jasper AI, Inc.</span>
          <div className="flex flex-row gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
