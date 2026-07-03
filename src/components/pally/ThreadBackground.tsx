import { cn } from "@/lib/utils";
import { THREAD_PATHS, THREAD_VIEWBOX } from "@/components/pally/thread-paths";

/**
 * Full-page animated "thread" background. Each path in THREAD_PATHS is rendered
 * twice: a solid strand that draws itself in, and a dashed packet that flows
 * along the same curve. Sits behind page content (absolute, non-interactive).
 *
 * Stretches to the height of its relatively-positioned parent, so the threads
 * span whatever the page height is.
 */
export function ThreadBackground({ className }: { className?: string }) {
  return (
    <svg
      className={cn("thread-spine pointer-events-none absolute inset-0 h-full w-full", className)}
      viewBox={`0 0 ${THREAD_VIEWBOX.width} ${THREAD_VIEWBOX.height}`}
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="thread-grad"
          x1="0"
          y1="0"
          x2="0"
          y2={THREAD_VIEWBOX.height}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#121212" stopOpacity="0.5" />
          <stop offset="0.5" stopColor="#3a6ea5" stopOpacity="0.62" />
          <stop offset="1" stopColor="#007AFF" stopOpacity="0.95" />
        </linearGradient>
      </defs>

      {/* Solid strands — draw themselves in once */}
      {THREAD_PATHS.map((d, i) => (
        <path key={`strand-${i}`} d={d} className="thread-strand" pathLength={1} />
      ))}

      {/* Dashed packets — flow continuously, staggered per strand */}
      {THREAD_PATHS.map((d, i) => (
        <path
          key={`flow-${i}`}
          d={d}
          className="thread-flow"
          style={{ animationDelay: `${1.4 + i * 0.42}s` }}
        />
      ))}
    </svg>
  );
}
