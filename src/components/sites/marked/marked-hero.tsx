import { FloatingStage, type FloatingMedia } from "@/components/hero/floating-stage";
import styles from "./marked-hero.module.css";

const media: readonly FloatingMedia[] = [
  { src: "/sites/marked/tags.mp4", kind: "video" },
  { src: "/sites/marked/preview.mp4", kind: "video" },
  { src: "/sites/marked/controls.mp4", kind: "video" },
];

export function MarkedHero({ reducedMotion = false }: { reducedMotion?: boolean }) {
  return (
    <div className={styles.reference}>
      <header className={styles.nav}>
        <a href="https://marked.dev/" aria-label="Marked home">▱</a>
        <a href="https://marked.dev/explore">Explore</a>
        <a href="https://marked.dev/collections">Collections</a>
        <a href="https://marked.dev/mcp">MCP</a>
      </header>
      <FloatingStage media={media} reducedMotion={reducedMotion} reference>
        <h1 className={styles.title}>Show your agent<br />the refs you saved</h1>
        <div className={styles.search} aria-hidden="true">⌕ <span>Search for <strong>command menus</strong></span><kbd>/</kbd></div>
        <div className={styles.actions}>
          <a href="https://marked.dev/">Join for free</a>
          <a href="https://marked.dev/explore">Explore refs</a>
        </div>
      </FloatingStage>
    </div>
  );
}
