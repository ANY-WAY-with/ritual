"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const SITES = [
  { label: "with", href: "/" },
  { label: "Ditto", href: "/ditto" },
  { label: "Programa", href: "/programa" },
  { label: "Jasper", href: "/jasper" },
  { label: "Pally", href: "/pally" },
];

/**
 * Small fixed pill for hopping between the cloned sites. Rendered on the
 * demo pages so there's always a way back to the Ditto landing page.
 */
export function SiteSwitcher() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Cloned sites"
      className="fixed bottom-4 left-1/2 z-[100] -translate-x-1/2 rounded-full border border-white/10 bg-black/85 p-1 shadow-lg backdrop-blur"
    >
      <ul className="flex items-center gap-1">
        {SITES.map((site) => {
          const active = pathname === site.href;
          return (
            <li key={site.href}>
              <Link
                href={site.href}
                className={cn(
                  "block rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                  active ? "bg-white text-black" : "text-white/70 hover:text-white",
                )}
              >
                {site.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
