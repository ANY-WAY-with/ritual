import { FloatingStage, PresetSearch, type FloatingMedia, type HeroPreset } from "@/components/hero/floating-stage";
import styles from "./ritual-hero.module.css";

const creativeReferences: readonly FloatingMedia[] = [
  { src: "/brand/ritual/alpine.webp", kind: "image" },
  { src: "/brand/ritual/fabric.webp", kind: "image" },
  { src: "/brand/ritual/coast.webp", kind: "image" },
  { src: "/brand/ritual/sculpture.webp", kind: "image" },
  { src: "/brand/ritual/night.webp", kind: "image" },
  { src: "/brand/ritual/desert.webp", kind: "image" },
];

const presets: readonly HeroPreset[] = [
  { phrase: "cinematic landscapes", media: [creativeReferences[0], creativeReferences[5], creativeReferences[2]] },
  { phrase: "sculptural textures", media: [creativeReferences[3], creativeReferences[1], creativeReferences[5]] },
  { phrase: "a sense of escape", media: [creativeReferences[2], creativeReferences[5], creativeReferences[0]] },
  { phrase: "colour in motion", media: [creativeReferences[1], creativeReferences[4], creativeReferences[3]] },
  { phrase: "quiet moments", media: [creativeReferences[0], creativeReferences[3], creativeReferences[5]] },
];

const studioPresets: readonly HeroPreset[] = [
  { ...presets[0], phrase: "find a fresh angle" },
  { ...presets[1], phrase: "connect these ideas" },
  { ...presets[2], phrase: "research this story" },
  { ...presets[3], phrase: "shape a first draft" },
  { ...presets[4], phrase: "explore a direction" },
];

export function RitualHero({ typography = "original", reducedMotion = false }: { typography?: "original" | "sans" | "serif"; reducedMotion?: boolean }) {
  const studio = typography !== "original";
  return (
    <FloatingStage media={creativeReferences} presets={studio ? studioPresets : presets} reducedMotion={reducedMotion}>
      <div className={styles.heroCopy} data-typography={typography}>
      <p className={styles.eyebrow}>{studio ? "A creative practice, with a partner." : "A workspace for creators"}</p>
      {studio ? <>
        <h1 className={styles.title}><span>An AI partner for</span><span className={styles.emphasis}>your creative world.</span></h1>
        <p className={styles.studioDescription}>Explore ideas, research what matters, and shape your next piece—in your voice.</p>
      </> : <h1 className={styles.title}>Good work starts<br />with a ritual.</h1>}
      <PresetSearch prefix={studio ? "Ask Ritual to" : "Search for"} />
      <div className={styles.actions}>
        <a className={styles.primary} href="#features">Discover Ritual</a>
        <a className={styles.secondary} href="#explore">Explore ideas</a>
      </div>
      </div>
    </FloatingStage>
  );
}
