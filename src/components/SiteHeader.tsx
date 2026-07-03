"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PillButton } from "@/components/ui/pill-button";
import { DittoWordmark, CaretDownIcon } from "@/components/icons";

interface NavLink {
  label: string;
  href: string;
  hasCaret?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { label: "Product", href: "#" },
  { label: "Solutions", href: "#", hasCaret: true },
  { label: "Resources", href: "#", hasCaret: true },
  { label: "Enterprise", href: "#" },
  { label: "Pricing", href: "#" },
];

// Other cloned sites, reachable from the nav.
const SITE_LINKS: NavLink[] = [
  { label: "Programa", href: "/programa" },
  { label: "Jasper", href: "/jasper" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Main bar */}
      <div className="flex h-[67px] items-center justify-between px-5 md:px-8">
        {/* Logo */}
        <Link href="/ditto" aria-label="Ditto home">
          <DittoWordmark className="h-7 w-auto text-ditto-ink" />
        </Link>

        {/* Desktop nav — ≥1024px */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center rounded-full px-2.5 py-2 text-base font-bold tracking-[0.13px] text-ditto-muted transition-colors hover:text-ditto-ink"
            >
              {link.label}
              {link.hasCaret && (
                <CaretDownIcon className="ml-1 inline h-2 w-2" />
              )}
            </a>
          ))}

          {/* Other cloned sites */}
          <span className="mx-1 h-4 w-px bg-ditto-muted/30" aria-hidden="true" />
          {SITE_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="inline-flex items-center rounded-full px-2.5 py-2 text-base font-bold tracking-[0.13px] text-ditto-muted transition-colors hover:text-ditto-ink"
            >
              {link.label}
            </Link>
          ))}

          <div className="ml-3 flex items-center gap-2">
            <PillButton variant="primary" withArrow={false} href="#">
              Get Started
            </PillButton>
            <PillButton variant="beige" withArrow={false} href="#">
              Book a Demo
            </PillButton>
          </div>
        </nav>

        {/* Mobile hamburger — <1024px */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="flex items-center justify-center rounded-full p-2 text-ditto-ink transition-colors hover:bg-ditto-surface lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? (
            /* X icon */
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M2 2L18 18M18 2L2 18"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1 1H21M1 8H21M1 15H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown panel */}
      <div
        className={cn(
          "w-full overflow-hidden bg-ditto-cream shadow-md transition-all duration-200 lg:hidden",
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
        )}
        aria-hidden={!mobileOpen}
      >
        <nav
          className="flex flex-col gap-1 px-5 pb-5 pt-2"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center rounded-full px-2.5 py-3 text-base font-bold tracking-[0.13px] text-ditto-muted transition-colors hover:text-ditto-ink"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
              {link.hasCaret && (
                <CaretDownIcon className="ml-1 inline h-2 w-2" />
              )}
            </a>
          ))}

          {/* Other cloned sites */}
          <span className="my-1 h-px w-full bg-ditto-muted/20" aria-hidden="true" />
          {SITE_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="inline-flex items-center rounded-full px-2.5 py-3 text-base font-bold tracking-[0.13px] text-ditto-muted transition-colors hover:text-ditto-ink"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-3 flex flex-col gap-2">
            <PillButton
              variant="primary"
              withArrow={false}
              href="#"
              className="w-full justify-center"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </PillButton>
            <PillButton
              variant="beige"
              withArrow={false}
              href="#"
              className="w-full justify-center"
              onClick={() => setMobileOpen(false)}
            >
              Book a Demo
            </PillButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
