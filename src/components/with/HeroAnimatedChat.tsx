"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const SEARCH_SOURCES = [
  { type: "Voice", path: "past posts & captions" },
  { type: "Analytics", path: "audience engagement" },
  { type: "Strategy", path: "content calendar" },
  { type: "Platform", path: "YouTube best practices" },
  { type: "Trends", path: "studio tour hooks" },
  { type: "Voice", path: "tone & vocabulary" },
] as const;

const QUERIES = [
  "I want to post about our new studio setup but keep it casual, not braggy",
  "Can you draft a YouTube title for our studio tour?",
  "What's my best posting time on Instagram this week?",
] as const;

type Phase = "idle" | "searching" | "sources" | "typed";

const SOURCE_SLOT_HEIGHT = 22;
const SOURCE_SLOTS = SEARCH_SOURCES.length;

export function HeroAnimatedChat() {
  const [phase, setPhase] = useState<Phase>("searching");
  const [queryIndex, setQueryIndex] = useState(0);
  const [visibleSources, setVisibleSources] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const query = QUERIES[queryIndex];
  const isLoading = phase === "searching" || phase === "sources";

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const run = () => {
      if (cancelled) return;
      setPhase("searching");
      setTypedText("");
      setVisibleSources(0);

      timers.push(
        setTimeout(() => {
          if (cancelled) return;
          setPhase("sources");
        }, 1800),
      );

      SEARCH_SOURCES.forEach((_, i) => {
        timers.push(
          setTimeout(() => {
            if (cancelled) return;
            setVisibleSources(i + 1);
          }, 2000 + i * 300),
        );
      });

      timers.push(
        setTimeout(() => {
          if (cancelled) return;
          setPhase("typed");
        }, 2000 + SEARCH_SOURCES.length * 300 + 500),
      );
    };

    run();
    const loop = setInterval(() => {
      if (cancelled) return;
      setQueryIndex((i) => (i + 1) % QUERIES.length);
    }, 10000);

    return () => {
      cancelled = true;
      clearInterval(loop);
      timers.forEach(clearTimeout);
    };
  }, [queryIndex]);

  useEffect(() => {
    if (phase !== "typed") return;
    let i = 0;
    setTypedText("");
    const id = setInterval(() => {
      i += 1;
      setTypedText(query.slice(0, i));
      if (i >= query.length) clearInterval(id);
    }, 32);
    return () => clearInterval(id);
  }, [phase, query]);

  const inputText =
    phase === "searching" || phase === "sources"
      ? "Thinking with your voice..."
      : typedText;

  return (
    <div
      className="mx-auto mt-10 w-full max-w-[560px] text-left"
      style={{ height: SOURCE_SLOTS * SOURCE_SLOT_HEIGHT + 56 }}
    >
      <div
        className="mb-3 flex flex-col gap-0"
        style={{ height: SOURCE_SLOTS * SOURCE_SLOT_HEIGHT }}
      >
        {SEARCH_SOURCES.map((src, i) => (
          <div
            key={`${i}-${src.type}-${src.path}`}
            className={cn(
              "flex items-center gap-2 overflow-hidden text-[12px] text-cw-muted transition-opacity duration-300",
              i < visibleSources ? "opacity-100" : "opacity-0",
            )}
            style={{ height: SOURCE_SLOT_HEIGHT }}
          >
            <span className="shrink-0 font-medium text-cw-ink">{src.type}</span>
            <span className="text-cw-border">·</span>
            <span className="truncate font-mono text-[11px]">{src.path}</span>
          </div>
        ))}
      </div>

      <div className="relative h-11">
        {isLoading && (
          <>
            <div
              className="pointer-events-none absolute -inset-x-6 -inset-y-4 rounded-full blur-2xl motion-reduce:hidden"
              style={{
                background:
                  "radial-gradient(ellipse 90% 70% at 50% 50%, rgba(165,180,252,0.2), rgba(252,165,165,0.12), transparent 68%)",
                animation: "get-answers-glow-pulse 3s ease-in-out infinite",
              }}
              aria-hidden
            />
            {(["top", "bottom"] as const).map((edge) => (
              <div
                key={edge}
                className={cn(
                  "pointer-events-none absolute left-1/2 z-0 w-[54%] -translate-x-1/2 motion-reduce:hidden",
                  edge === "top" ? "-top-px" : "-bottom-px",
                )}
                aria-hidden
              >
                <div
                  className={cn(
                    "absolute inset-x-0 h-3",
                    edge === "top" ? "top-[-6px]" : "bottom-[-6px]",
                  )}
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(165,180,252,0.6) 12%, rgba(196,181,253,0.5) 50%, rgba(252,165,165,0.55) 88%, transparent 100%)",
                    filter: "blur(10px)",
                    animation: `get-answers-glow-pulse 2.6s ease-in-out infinite ${
                      edge === "bottom" ? "0.35s" : "0s"
                    }`,
                  }}
                />
              </div>
            ))}
          </>
        )}

        <div className="relative h-full rounded-full">
          <div
            className={cn(
              "relative flex h-full items-center gap-2 overflow-hidden rounded-full border bg-white px-3 transition-shadow duration-300",
              isLoading
                ? "border-[#e4edf9] shadow-[0_6px_32px_rgba(165,180,252,0.22),0_10px_36px_rgba(252,165,165,0.12)]"
                : "border-cw-border shadow-[0_4px_24px_rgba(0,0,0,0.06)]",
            )}
          >
            {isLoading && (
              <div
                className="pointer-events-none absolute inset-0 overflow-hidden rounded-full motion-reduce:hidden"
                aria-hidden
              >
                <div
                  className="absolute inset-y-0 w-[58%]"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 20%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0.05) 80%, transparent 100%)",
                    animation: "get-answers-shimmer-band 1.7s ease-in-out infinite",
                  }}
                />
              </div>
            )}

            <button
              type="button"
              aria-label="Attach"
              className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f0f0f0] text-cw-muted"
            >
              <Plus className="h-3.5 w-3.5" strokeWidth={2} />
            </button>

            <div className="relative z-10 flex h-6 min-w-0 flex-1 items-center text-[14px]">
              {isLoading && (
                <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cw-ink" />
              )}
              <span
                className={cn(
                  "truncate",
                  isLoading ? "text-cw-muted" : "text-cw-ink",
                )}
              >
                {inputText}
              </span>
              {!isLoading && (
                <span
                  className={cn(
                    "ml-0.5 inline-block h-4 w-[2px] shrink-0 bg-cw-ink motion-reduce:opacity-0",
                    showCursor ? "opacity-100" : "opacity-0",
                  )}
                />
              )}
            </div>

            <button
              type="button"
              aria-label="Submit"
              className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cw-ink text-white"
            >
              <ArrowUp className="h-3.5 w-3.5" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
