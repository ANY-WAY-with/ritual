import Image from "next/image";
import { cn } from "@/lib/utils";

export function PallyComesTogether() {
  return (
    <section className={cn("font-neue relative py-28 text-center bg-transparent")}>
      <div className="max-w-[900px] mx-auto px-6 relative z-10">

        {/* Heading */}
        <h2 className="text-[44px] md:text-[72px] font-medium text-pally-ink leading-[1.0] tracking-[-0.02em]">
          It all comes together in{" "}
          <span className="inline-flex items-center gap-2 whitespace-nowrap">
            {/* Inline Pally icon */}
            <span className="inline-flex items-center justify-center align-middle relative" style={{ width: "0.85em", height: "0.85em", marginBottom: "0.04em" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/pally/images/icon-only.svg"
                alt="Pally icon"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </span>
            Pally.
          </span>
        </h2>

        {/* Sub-line */}
        <p className="mt-4 text-[15px] md:text-[16px] text-pally-muted leading-snug max-w-[420px] mx-auto">
          Every loose thread runs into one simple conversation. Scroll, and watch Pally handle the rest.
        </p>

        {/* Phone mockup + glow */}
        <div className="mt-16 flex items-center justify-center relative">
          {/* Blue glow behind the phone */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="w-[340px] h-[340px] rounded-full bg-pally-blue/30 blur-[80px]" />
          </div>

          {/* Phone frame */}
          <div className="relative w-[300px] h-[620px] rounded-[48px] bg-black p-2.5 shadow-2xl">
            {/* Screen */}
            <div className="w-full h-full rounded-[38px] overflow-hidden bg-white flex flex-col">

              {/* Status bar */}
              <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[11px] font-semibold text-black bg-white">
                <span>9:41</span>
                {/* Dynamic Island pill */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[14px] w-[88px] h-[28px] bg-black rounded-full" />
                {/* Right icons */}
                <div className="flex items-center gap-1">
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                    <rect x="0" y="4" width="3" height="8" rx="1" fill="black" />
                    <rect x="4.5" y="2.5" width="3" height="9.5" rx="1" fill="black" />
                    <rect x="9" y="0.5" width="3" height="11.5" rx="1" fill="black" />
                    <rect x="13.5" y="0" width="2" height="12" rx="1" fill="black" fillOpacity="0.3" />
                  </svg>
                  <svg width="15" height="12" viewBox="0 0 15 12" fill="none" aria-hidden="true">
                    <path d="M7.5 2.5C9.5 2.5 11.3 3.4 12.5 4.8L14 3.2C12.4 1.2 10.1 0 7.5 0C4.9 0 2.6 1.2 1 3.2L2.5 4.8C3.7 3.4 5.5 2.5 7.5 2.5Z" fill="black" />
                    <path d="M7.5 5.5C8.7 5.5 9.8 6.1 10.5 7L12 5.4C10.9 4.1 9.3 3.3 7.5 3.3C5.7 3.3 4.1 4.1 3 5.4L4.5 7C5.2 6.1 6.3 5.5 7.5 5.5Z" fill="black" />
                    <circle cx="7.5" cy="10" r="1.5" fill="black" />
                  </svg>
                  <svg width="25" height="12" viewBox="0 0 25 12" fill="none" aria-hidden="true">
                    <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="black" strokeOpacity="0.35" />
                    <rect x="2" y="2" width="16" height="8" rx="2" fill="black" />
                    <path d="M23 4.5C23.8 4.9 23.8 7.1 23 7.5V4.5Z" fill="black" fillOpacity="0.4" />
                  </svg>
                </div>
              </div>

              {/* iMessage nav bar */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100 bg-white">
                {/* Back chevron */}
                <button className="text-pally-blue p-1" aria-label="Back">
                  <svg width="12" height="20" viewBox="0 0 12 20" fill="none" aria-hidden="true">
                    <path d="M10 2L2 10L10 18" stroke="#007AFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Center: avatar + name */}
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-200">
                    <Image
                      src="/pally/images/app-icon-192.webp"
                      alt="Pally"
                      width={36}
                      height={36}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[11px] font-medium text-black leading-none">Pally</span>
                </div>

                {/* Video call icon */}
                <button className="text-pally-blue p-1" aria-label="Video call">
                  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
                    <path d="M1 2C1 1.4 1.4 1 2 1H13C13.6 1 14 1.4 14 2V14C14 14.6 13.6 15 13 15H2C1.4 15 1 14.6 1 14V2Z" stroke="#007AFF" strokeWidth="1.5" />
                    <path d="M14 5.5L20 2.5V13.5L14 10.5V5.5Z" stroke="#007AFF" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {/* Chat messages area */}
              <div className="flex-1 px-3 py-4 flex flex-col justify-end gap-2 bg-white">
                {/* Incoming gray bubble */}
                <div className="flex items-end gap-1.5">
                  <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/pally/images/app-icon-192.webp"
                      alt="Pally"
                      width={24}
                      height={24}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="max-w-[70%] bg-[#e9e9eb] rounded-[18px] rounded-bl-[4px] px-3 py-2 text-[13px] text-black leading-snug">
                    Here&rsquo;s everything on your plate today.
                  </div>
                </div>

                {/* Outgoing blue bubble */}
                <div className="flex justify-end">
                  <div className="max-w-[70%] bg-pally-blue rounded-[18px] rounded-br-[4px] px-3 py-2 text-[13px] text-white leading-snug">
                    Thanks — add the dinner to my calendar.
                  </div>
                </div>

                {/* Incoming gray bubble */}
                <div className="flex items-end gap-1.5">
                  <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/pally/images/app-icon-192.webp"
                      alt="Pally"
                      width={24}
                      height={24}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="max-w-[70%] bg-[#e9e9eb] rounded-[18px] rounded-bl-[4px] px-3 py-2 text-[13px] text-black leading-snug">
                    Done. 7 pm added to Google Calendar.
                  </div>
                </div>
              </div>

              {/* iMessage input bar */}
              <div className="flex items-center gap-2 px-3 py-2.5 border-t border-gray-100 bg-white">
                <button className="text-pally-blue" aria-label="Apps">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <circle cx="10" cy="10" r="9" stroke="#007AFF" strokeWidth="1.5" />
                    <path d="M10 6V14M6 10H14" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                <div className="flex-1 rounded-full border border-gray-300 px-3 py-1.5 text-[12px] text-gray-400">
                  iMessage
                </div>
                <button className="text-pally-blue" aria-label="Voice">
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" aria-hidden="true">
                    <rect x="5" y="1" width="8" height="12" rx="4" stroke="#007AFF" strokeWidth="1.5" />
                    <path d="M1 10C1 14.4 4.6 18 9 18C13.4 18 17 14.4 17 10" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="9" y1="18" x2="9" y2="20" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
