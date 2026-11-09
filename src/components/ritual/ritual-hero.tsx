import { FloatingStage, type FloatingMedia } from "@/components/hero/floating-stage";
import styles from "./ritual-hero.module.css";

const creativeReferences: readonly FloatingMedia[] = [
  { src: "/brand/ritual/alpine.webp", kind: "image" },
  { src: "/brand/ritual/fabric.webp", kind: "image" },
  { src: "/brand/ritual/coast.webp", kind: "image" },
];

export function RitualHero() {
  return (
    <FloatingStage media={creativeReferences}>
      <p className={styles.eyebrow}>A workspace for creators</p>
      <h1 className={styles.title}>Good work starts<br />with a ritual.</h1>
      <p className={styles.description}>A place to develop your ideas<br />and move your work forward.</p>
      <div className={styles.actions}>
        <a className={styles.primary} href="mailto:contact@rhetoric.so?subject=Hello%20Ritual">Get in touch <span aria-hidden="true">↗</span></a>
        <a className={styles.secondary} href="https://rhetoric.so">Meet Rhetoric</a>
      </div>
    </FloatingStage>
  );
}
