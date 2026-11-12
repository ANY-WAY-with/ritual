"use client";

import { useState } from "react";
import { FloatingStage } from "@/components/hero/floating-stage";
import { CreatorSite } from "./creator-site";
import { workspaces, type Niche } from "./niche-workspaces";
import { SiteHeader } from "./site-header";
import styles from "./creator-preview.module.css";
import hero from "./ritual-hero.module.css";

interface NichePickerProps {
  active: Niche;
  onSelect: (niche: Niche) => void;
}

function NichePicker({ active, onSelect }: NichePickerProps) {
  return (
    <div className={styles.picker} role="group" aria-label="Creator niche">
      {Object.values(workspaces).map(({ id, label }) => (
        <button
          key={id}
          type="button"
          aria-pressed={active === id}
          onClick={() => onSelect(id)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function CreatorPreview({ reducedMotion }: { reducedMotion: boolean }) {
  const [niche, setNiche] = useState<Niche>("fashion");
  const workspace = workspaces[niche];

  return (
    <div className={`ritual-site ${styles.preview}`} data-niche={niche} data-motion={reducedMotion ? "reduce" : undefined}>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader variant="creator" />
      <main id="main">
        <FloatingStage
          media={workspace.media}
          presets={workspace.presets}
          reducedMotion={reducedMotion}
          extraContentClearance={16}
        >
          <div className={hero.heroCopy} data-typography="sans">
            <p className={hero.eyebrow} aria-live="polite">{workspace.creator} workspace</p>
            <h1 className={hero.title}>
              <span>An AI partner for</span>
              <span className={hero.emphasis}>your creative world.</span>
            </h1>
            <p className={hero.studioDescription}>Explore ideas, research what matters, and shape your next piece—in your voice.</p>
            <div className={styles.choose}>
              <NichePicker active={niche} onSelect={setNiche} />
            </div>
            <div className={hero.actions}>
              <a className={hero.primary} href="#early-access">Join early access</a>
              <a className={hero.secondary} href="#creator-styles">Explore workspace</a>
            </div>
          </div>
        </FloatingStage>
        <CreatorSite workspace={workspace} picker={<NichePicker active={niche} onSelect={setNiche} />} />
      </main>
    </div>
  );
}
