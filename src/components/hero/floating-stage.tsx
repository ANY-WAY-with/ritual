"use client";

import { useEffect, useRef, useState, useSyncExternalStore, createContext, useContext, type ReactNode } from "react";
import { desktopLayouts, mobileLayouts, type Depth } from "./scene-layouts";
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

export interface HeroPreset { phrase: string; media: readonly FloatingMedia[] }
const PresetContext = createContext({ text: "", paused: false });

export function PresetSearch() {
  const { text, paused } = useContext(PresetContext);
  return <div className={styles.search} aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg><span>Search for <strong>{text}</strong><i data-still={paused} /></span><kbd>/</kbd></div>;
}

interface FloatingStageProps {
  presets?: readonly HeroPreset[];
  media: readonly FloatingMedia[];
  children: ReactNode;
  reducedMotion?: boolean;
  reference?: boolean;
}

// Placement, drift and optical depth live in CSS. Only the shared pointer
// offset is updated per animation frame; pointer movement never rerenders React.
export function FloatingStage({ media, presets, children, reducedMotion = false, reference = false }: FloatingStageProps) {
  const stage = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);
  const prefersReduced = useSyncExternalStore(subscribeReduced, getReduced, getServerReduced);
  const reduced = prefersReduced || reducedMotion;

  const [cycle, setCycle] = useState({ text: presets?.[0].phrase ?? "", turn: 0, previous: -1 });
  const elapsed = useRef(0);
  const running = useRef(true);
  useEffect(() => {
    if (!presets?.length || reduced || paused) return;
    let frame = 0;
    let last = 0;
    const tick = (now: number) => {
      if (last && running.current && !document.hidden) elapsed.current += Math.min(now - last, 100);
      last = now;
      const time = elapsed.current;
      const targetTurn = Math.floor(time / 5000);
      const target = presets[targetTurn % presets.length].phrase;
      const old = presets[(targetTurn - 1 + presets.length) % presets.length].phrase;
      const phase = time % 5000;
      const eraseEnd = old.length * 16;
      const typed = Math.max(0, Math.floor((phase - eraseEnd - 250) / 40) + 1);
      const text = targetTurn === 0 ? target : phase < eraseEnd ? old.slice(0, Math.max(0, old.length - Math.floor(phase / 16))) : target.slice(0, typed);
      const completeAt = eraseEnd + 250 + (target.length - 1) * 40;
      const turn = targetTurn > 0 && phase < completeAt ? targetTurn - 1 : targetTurn;
      const previous = targetTurn > 0 && phase >= completeAt && phase < completeAt + 650 ? turn - 1 : -1;
      setCycle(value => value.text === text && value.turn === turn && value.previous === previous ? value : { text, turn, previous });
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [presets, paused, reduced]);

  useEffect(() => {
    const root = stage.current;
    if (!root) return;
    const layout = () => {
      const mobile = root.clientWidth <= 760;
      const scale = mobile ? Math.max(.85, Math.min(1.15, root.clientWidth / 375, root.clientHeight / 812)) : Math.max(.78, Math.min(1.25, root.clientWidth / 1440, root.clientHeight / 900));
      root.querySelectorAll<HTMLElement>(`.${styles.scene}`).forEach(scene => {
        const placements = (mobile ? mobileLayouts : desktopLayouts)[Number(scene.dataset.layout)];
        scene.querySelectorAll<HTMLElement>(`.${styles.layer}`).forEach(layer => {
          const depth = layer.dataset.depth as Depth;
          const slots = placements.filter(place => place[0] === depth);
          layer.querySelectorAll<HTMLElement>(`.${styles.placement}`).forEach((element, index) => {
            const place = slots[index];
            element.hidden = !place;
            if (!place) return;
            const [, px, py, pw, ph] = place;
            const width = pw * scale, height = ph * scale;
            let x = px * scale, y = py * scale;
            const overlapX = (mobile ? 190 : 290) + width / 2 - Math.abs(x);
            const overlapY = (mobile ? 170 : 166) + height / 2 - Math.abs(y);
            if (overlapX > 0 && overlapY > 0) {
              if (overlapY <= overlapX) y = Math.sign(y || 1) * ((mobile ? 170 : 166) + height / 2);
              else x = Math.sign(x || 1) * ((mobile ? 190 : 290) + width / 2);
            }
            const distance = Math.hypot(px, py) || 1;
            const push = depth === "near" ? 1.7 : depth === "far" ? .55 : 1;
            const values = { "--width": `${width}px`, "--height": `${height}px`, "--left": `calc(50% + ${x}px)`, "--top": `calc(50% + ${y + 32}px)`, "--enter-x": `${px / distance * 340 * push}px`, "--enter-y": `${py / distance * 340 * push}px`, "--exit-x": `${px / distance * 260 * push}px`, "--exit-y": `${py / distance * 260 * push}px`, "--arrival-delay": `${(cycle.turn === 0 ? 0 : .32) + distance / 900 * 6 * .045}s`, "--exit-delay": `${distance / 900 * 4 * .045}s`, "--duration-x": `${9 + index % 5 * 1.3}s`, "--duration-y": `${11 + index % 4 * 1.1}s` };
            Object.entries(values).forEach(([key, value]) => element.style.setProperty(key, value));
          });
        });
      });
    };
    layout();
    const observer = new ResizeObserver(layout);
    observer.observe(root);
    return () => observer.disconnect();
  }, [cycle.turn, cycle.previous]);

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
      running.current = visible && !document.hidden;
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
  }, [paused, reduced, cycle.turn]);

  return (
    <section ref={stage} className={styles.stage} data-scene={cycle.turn} data-paused={paused} data-reduced={reduced} data-reference={reference} aria-label={reference ? "Reference hero study" : "Ritual introduction"}>
      <div className={styles.images} aria-hidden="true">
        {(cycle.previous < 0 ? [cycle.turn] : [cycle.previous, cycle.turn]).map(turn => (
          <div key={turn} className={styles.scene} data-layout={turn % 3} data-exit={turn !== cycle.turn}>
            {(["far", "mid", "near"] as const).map((depth, layer) => (
              <div key={depth} className={styles.layer} data-depth={depth}>
                {Array.from({ length: depth === "far" ? 4 : depth === "mid" ? 3 : 2 }, (_, index) => {
                  const pool = depth === "mid" ? presets?.[turn % presets.length].media ?? media : media;
                  const item = pool[(index + layer + turn) % pool.length];
                  return <div key={index} className={styles.placement} data-slot={index}>
                    <div className={styles.travel}><div className={styles.driftX}><div className={styles.driftY}>
                      <div className={styles.frame}>
                        {item.kind === "video" ? <video src={item.src} poster={item.poster} muted loop playsInline preload="metadata" /> : (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={item.src} alt="" width="768" height="512" draggable={false} loading="eager" decoding="async" />
                        )}
                      </div>
                    </div></div></div>
                  </div>;
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
      <PresetContext.Provider value={{ text: cycle.text, paused: paused || reduced }}><div className={styles.content}>{children}</div></PresetContext.Provider>
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
