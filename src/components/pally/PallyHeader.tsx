"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Integrations", href: "#integrations" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function PallyHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="font-neue sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-pally-border">
      <div className="max-w-[1200px] mx-auto px-6 h-[65px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="/pally/images/logo.svg"
            alt="Pally"
            className="h-6 w-auto"
          />
        </Link>

        {/* Center nav — desktop only */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-pally-ink/80 hover:text-pally-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA — desktop */}
        <div className="hidden md:flex items-center">
          <Link
            href="#text-pally"
            className="inline-flex items-center gap-1.5 bg-pally-blue text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-pally-blue/90 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Text Pally
          </Link>
        </div>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden text-pally-ink p-1"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-pally-border bg-white/95 backdrop-blur px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-pally-ink/80 hover:text-pally-ink transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#text-pally"
            className="inline-flex items-center gap-1.5 bg-pally-blue text-white rounded-full px-4 py-2 text-sm font-medium w-fit hover:bg-pally-blue/90 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            <MessageCircle className="h-4 w-4" />
            Text Pally
          </Link>
        </div>
      )}
    </header>
  );
}
