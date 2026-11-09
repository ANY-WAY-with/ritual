import { FloatingStage, type FloatingMedia } from "@/components/hero/floating-stage";
import styles from "./ritual-hero.module.css";
import { HeroChatComposer, ChatTrigger } from "./chat-interface";

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
      <HeroChatComposer />
      <div className={styles.actions}>
        <ChatTrigger className={styles.primary}>Try Ritual</ChatTrigger>
        <a className={styles.secondary} href="#explore">Explore ideas</a>
      </div>
    </FloatingStage>
  );
}
