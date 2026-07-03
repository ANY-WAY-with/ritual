import Image from "next/image";
import { cn } from "@/lib/utils";

const apps = [
  { name: "imessage", label: "iMessage" },
  { name: "gmail", label: "Gmail" },
  { name: "slack", label: "Slack" },
  { name: "notion", label: "Notion" },
  { name: "linear", label: "Linear" },
  { name: "googlecalendar", label: "Google Calendar" },
  { name: "whatsapp", label: "WhatsApp" },
  { name: "outlook", label: "Outlook" },
  { name: "googledrive", label: "Google Drive" },
  { name: "granola", label: "Granola" },
] as const;

function computeOrbitPositions(count: number, radius: number) {
  return Array.from({ length: count }, (_, i) => {
    // Start from top (-π/2) and go clockwise
    const angle = (2 * Math.PI * i) / count - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  });
}

const ORBIT_RADIUS = 180;
const positions = computeOrbitPositions(apps.length, ORBIT_RADIUS);

export function PallyIntegrations() {
  return (
    <section className="font-neue relative py-28 text-center">
      <div className="relative z-10 mx-auto max-w-[900px] px-6">
        {/* Heading */}
        <h2
          className={cn(
            "text-[44px] md:text-[72px] font-medium text-pally-ink",
            "leading-[1.0] tracking-[-0.02em]"
          )}
        >
          All your apps, one thread.
        </h2>

        {/* Sub line */}
        <p className="mt-6 text-base text-pally-muted leading-relaxed max-w-[460px] mx-auto">
          Pally works with the tools you already live in, and it never does
          anything big without asking first. The point isn&apos;t more apps.
          It&apos;s fewer open loops.
        </p>

        {/* Centerpiece orbit */}
        <div className="mt-16 flex items-center justify-center">
          <div className="relative mx-auto h-[420px] w-[420px]">
            {/* Faint orbit ring */}
            <div
              className="absolute inset-0 rounded-full border border-pally-blue/30"
              aria-hidden="true"
            />

            {/* Soft blue glow behind Pally icon */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[220px] w-[220px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(0,122,255,0.18) 0%, rgba(0,122,255,0.06) 55%, transparent 80%)",
              }}
              aria-hidden="true"
            />

            {/* Pally center icon */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/pally/images/app-icon-192.webp"
                alt="Pally"
                width={72}
                height={72}
                className="rounded-2xl"
              />
            </div>

            {/* Orbiting app icons */}
            {apps.map((app, i) => {
              const { x, y } = positions[i];
              return (
                <div
                  key={app.name}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                  title={app.label}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-pally-border bg-white p-2 shadow-sm">
                    <Image
                      src={`/pally/images/${app.name}-168.webp`}
                      alt={app.label}
                      width={32}
                      height={32}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
