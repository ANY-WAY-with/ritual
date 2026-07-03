"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const ITEMS = [
  {
    q: "What is with creator?",
    a: "with creator is an AI strategic partner designed specifically for content creators. It helps you plan, create, and optimize content across platforms — in your voice.",
  },
  {
    q: "How does voice learning work?",
    a: "Share your past content — posts, scripts, newsletters — and with creator analyzes your tone, vocabulary, sentence structure, and rhythm. It then generates new content that authentically sounds like you.",
  },
  {
    q: "Which platforms does it support?",
    a: "YouTube, Instagram, TikTok, Twitter/X, LinkedIn, newsletters, podcasts, and blogs. with creator understands the unique requirements and best practices of each platform.",
  },
  {
    q: "Is my content kept private?",
    a: "Yes. All content you share is encrypted and used exclusively to train your personal voice model. We never share your content or use it to train models for other users.",
  },
];

export function CreatorwithFaq() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="font-cw bg-cw-bg2 py-20 md:py-28">
      <div className="max-w-[760px] mx-auto px-6">
        <p className="text-cw-accent text-xs font-bold uppercase tracking-widest text-center">
          FAQ
        </p>
        <h2 className="text-cw-ink font-bold text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.02em] text-center mt-3">
          Questions, answered.
        </h2>
        <ul className="mt-10 divide-y divide-cw-border border-y border-cw-border">
          {ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex justify-between items-center py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-cw-ink">
                    {item.q}
                  </span>
                  {isOpen ? (
                    <Minus className="shrink-0 ml-4 text-cw-accent" size={20} />
                  ) : (
                    <Plus className="shrink-0 ml-4 text-cw-muted" size={20} />
                  )}
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-cw-muted pb-5 pr-8">{item.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
