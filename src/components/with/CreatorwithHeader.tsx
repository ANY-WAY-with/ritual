"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Personas", href: "#personas" },
  { label: "FAQ", href: "#faq" },
];

export function CreatorwithHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-cw-border font-cw">
      <div className="max-w-[1200px] mx-auto px-6 h-[68px] flex justify-between items-center">
        {/* Wordmark */}
        <Link href="/" className="font-bold text-lg text-cw-ink">
          with <span className="text-cw-accent">creator</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cw-muted hover:text-cw-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="#" className="text-sm text-cw-ink hover:text-cw-accent transition-colors">
            Sign in
          </Link>
          <Link
            href="#"
            className="bg-cw-accent text-white rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-cw-accent-hover transition-colors"
          >
            Start free
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-cw-ink"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-cw-bg2 shadow-lg border-t border-cw-border">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-cw-muted hover:text-cw-ink transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-cw-border flex flex-col gap-3">
              <Link
                href="#"
                className="text-sm text-cw-ink text-center"
                onClick={() => setMobileOpen(false)}
              >
                Sign in
              </Link>
              <Link
                href="#"
                className="bg-cw-accent text-white rounded-full px-5 py-2.5 text-sm font-semibold text-center hover:bg-cw-accent-hover transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Start free
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
