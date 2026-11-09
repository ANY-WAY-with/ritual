"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import styles from "./floating-stage.module.css";

const reducedQuery = "(prefers-reduced-motion: reduce)";
function subscribeReduced(callback: () => void) {
  const media = window.matchMedia(reducedQuery);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
function getReduced() { return window.matchMedia(reducedQuery).matches; }
function getServerReduced() { return false; }

export interface FloatingMedia {
  src: string;
  kind: "image" | "video";
  poster?: string;
}

interface FloatingStageProps {
  media: readonly FloatingMedia[];
  children: ReactNode;
  reducedMotion?: boolean;
  reference?: boolean;
}

// Placement, drift and optical depth live in CSS. Only the shared pointer
// offset is updated per animation frame; pointer movement never rerenders React.
export function FloatingStage({ media, children, reducedMotion = false, reference = false }: FloatingStageProps) {
  const stage = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);
  const prefersReduced = useSyncExternalStore(subscribeReduced, getReduced, getServerReduced);
  const reduced = prefersReduced || reducedMotion;

  useEffect(() => {
    const root = stage.current;
    if (!root) return;
    const videos = root.querySelectorAll("video");
    let visible = true;
    let frame = 0;
    let previousTime = 0;
    let x = Number(root.style.getPropertyValue("--pointer-x")) || 0;
    let y = Number(root.style.getPropertyValue("--pointer-y")) || 0;
    let vx = 0, vy = 0, targetX = x, targetY = y;
    const fine = window.matchMedia("(pointer: fine)");
    const active = () => !paused && !reduced && visible && !document.hidden;
    const updateMedia = () => {
      root.dataset.visible = String(visible && !document.hidden);
      videos.forEach(video => {
        if (active()) void video.play().catch(() => {});
        else video.pause();
      });
    };
    const draw = (time: number) => {
      frame = 0;
      if (!active() || !fine.matches) return;
      const dt = Math.min((time - (previousTime || time - 16.67)) / 1000, 0.032);
      previousTime = time;
      // Match the measured reference spring: stiffness 60, damping 20.
      vx += ((targetX - x) * 60 - vx * 20) * dt;
      vy += ((targetY - y) * 60 - vy * 20) * dt;
      x += vx * dt;
      y += vy * dt;
      root.style.setProperty("--pointer-x", x.toFixed(5));
      root.style.setProperty("--pointer-y", y.toFixed(5));
      if (Math.abs(targetX - x) + Math.abs(targetY - y) + Math.abs(vx) + Math.abs(vy) > 0.0001) frame = requestAnimationFrame(draw);
    };
    const wake = () => {
      if (!frame && active() && fine.matches) {
        previousTime = 0;
        frame = requestAnimationFrame(draw);
      }
    };
    const pointer = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || !active() || !fine.matches) return;
      const bounds = root.getBoundingClientRect();
      targetX = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
      targetY = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
      wake();
    };
    const reset = () => { targetX = 0; targetY = 0; wake(); };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updateMedia();
      if (visible) wake();
      else { cancelAnimationFrame(frame); frame = 0; }
    });
    observer.observe(root);
    root.addEventListener("pointermove", pointer, { passive: true });
    root.addEventListener("pointerleave", reset);
    window.addEventListener("blur", reset);
    document.addEventListener("visibilitychange", updateMedia);
    if (reduced) {
      root.style.setProperty("--pointer-x", "0");
      root.style.setProperty("--pointer-y", "0");
    }
    updateMedia();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      root.removeEventListener("pointermove", pointer);
      root.removeEventListener("pointerleave", reset);
      window.removeEventListener("blur", reset);
      document.removeEventListener("visibilitychange", updateMedia);
      videos.forEach(video => video.pause());
    };
  }, [paused, reduced]);

  return (
    <section ref={stage} className={styles.stage} data-paused={paused} data-reduced={reduced} data-reference={reference} aria-label={reference ? "Reference hero study" : "Ritual introduction"}>
      <div className={styles.images} aria-hidden="true">
        {(["far", "mid", "near"] as const).map((depth, layer) => (
          <div key={depth} className={styles.layer} data-depth={depth}>
            {Array.from({ length: depth === "far" ? 3 : depth === "mid" ? 3 : 2 }, (_, index) => {
              const item = media[(index + layer) % media.length];
              return (
                <div key={index} className={styles.placement} data-slot={index}>
                  <div className={styles.driftX}><div className={styles.driftY}>
                    <div className={styles.frame}>
                      {item.kind === "video" ? (
                        <video src={item.src} poster={item.poster} muted loop playsInline preload="metadata" />
                      ) : (
                        // Decorative, locally optimized WebP assets; a plain image
                        // avoids decoding multiple Next image variants for depth copies.
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={item.src} alt="" width="768" height="512" draggable={false} loading="eager" decoding="async" />
                      )}
                    </div>
                  </div></div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className={styles.content}>{children}</div>
      <button className={styles.pause} type="button" aria-label={reduced ? "Motion reduced" : paused ? "Resume motion" : "Pause motion"} aria-pressed={paused} disabled={reduced} onClick={() => setPaused(value => !value)}>
        {paused || reduced ? (
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 9 6-9 6Z" /></svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 6h4v12H7zM14 6h4v12h-4z" /></svg>
        )}
      </button>
    </section>
  );
}
