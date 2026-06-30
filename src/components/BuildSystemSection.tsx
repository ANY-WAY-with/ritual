import { Container } from "@/components/Container";

export function BuildSystemSection() {
  return (
    <section className="relative overflow-hidden bg-ditto-cream pt-20 pb-24">
      {/* Dotted halftone background */}
      <div className="absolute inset-0 bg-dot-grid opacity-100 pointer-events-none" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* Top label */}
        <p className="text-xl font-bold text-ditto-ink tracking-[-0.32px] text-balance sm:text-2xl">
          Build your system
        </p>

        {/* Looping animation video */}
        <div className="mt-8 mb-8 mx-auto w-full max-w-[320px] sm:max-w-[640px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden
            className="w-full h-auto"
          >
            <source
              src="/videos/webDitto-Homepage-Platform-Loop.webm"
              type="video/webm"
            />
          </video>
        </div>

        {/* Bottom label */}
        <p className="text-xl font-bold text-ditto-ink tracking-[-0.32px] text-balance sm:text-2xl">
          Connect it to every surface
        </p>
      </Container>
    </section>
  );
}
