import { cn } from "@/lib/utils";

type ColProps = {
  heading: string;
  links: string[];
};

function Col({ heading, links }: ColProps) {
  return (
    <div>
      <p className={cn("uppercase text-xs tracking-wide text-programa-faint mb-3 font-inter")}>
        {heading}
      </p>
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm text-programa-ink hover:text-programa-muted transition-colors font-inter"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

export function ProgramaFooter() {
  return (
    <footer className="bg-white border-t border-programa-border py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Col
            heading="PRODUCT"
            links={[
              "All features",
              "Specification tools",
              "Management tools",
              "Presentation tools",
              "Client dashboard",
              "Integrations",
              "Pricing",
            ]}
          />
          <Col
            heading="ABOUT"
            links={["About us", "Careers", "Blog", "Contact"]}
          />
          <Col
            heading="RESOURCES"
            links={["Help center", "Tutorials", "Community", "What's new"]}
          />
          <Col
            heading="LEGAL"
            links={["Terms of Service", "Privacy Policy"]}
          />
        </div>

        <div className="mt-12 pt-6 border-t border-programa-border flex justify-between items-center">
          <span className="font-inter font-medium text-programa-ink">
            Programa
          </span>
          <span className="text-sm text-programa-faint font-inter">
            © 2026 Programa
          </span>
        </div>
      </div>
    </footer>
  );
}
