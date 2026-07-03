import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const exploreLinks = [
  { label: "Story", href: "/story" },
  { label: "Brand", href: "/brand" },
  { label: "Careers", href: "/careers" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function PallyFooter() {
  return (
    <footer
      className={cn(
        "font-neue relative bg-white border-t border-pally-border py-14"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Top row: left brand col + right link columns */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Left: logo, tagline, CTA */}
          <div className="flex flex-col items-start gap-0">
            <Image
              src="/pally/images/logo.svg"
              alt="Pally"
              width={80}
              height={24}
              className="h-6 w-auto"
            />
            <p className="text-pally-muted text-sm mt-2">
              One text away from done.
            </p>
            <button
              type="button"
              className="mt-4 inline-flex items-center gap-2 bg-pally-blue text-white rounded-full px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-4 h-4" />
              Text Pally
            </button>
          </div>

          {/* Right: link columns */}
          <div className="grid grid-cols-1 gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-pally-muted">
                Explore
              </p>
              <ul className="flex flex-col gap-3">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-pally-ink text-sm hover:text-pally-blue transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-pally-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-pally-muted">
          <span>© 2026 Pally Technologies, Inc</span>
          <span className="inline-flex items-center gap-1.5">
            <Image
              src="/pally/images/icon-only.svg"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4"
              aria-hidden="true"
            />
            Made to keep your thread.
          </span>
        </div>
      </div>
    </footer>
  );
}
