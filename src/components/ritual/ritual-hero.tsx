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

export function RitualHero() {
  return (
    <FloatingStage media={creativeReferences} presets={presets}>
      <p className={styles.eyebrow}>A workspace for creators</p>
      <h1 className={styles.title}>Good work starts<br />with a ritual.</h1>
      <PresetSearch />
      <div className={styles.actions}>
        <a className={styles.primary} href="#features">Discover Ritual</a>
        <a className={styles.secondary} href="#explore">Explore ideas</a>
      </div>
    </FloatingStage>
  );
}
