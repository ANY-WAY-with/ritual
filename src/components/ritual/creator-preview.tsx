"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FloatingStage } from "@/components/hero/floating-stage";
import { CreatorSite } from "./creator-site";
import { workspaces, type Niche } from "./niche-workspaces";
import { SiteHeader } from "./site-header";
import styles from "./creator-preview.module.css";

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
          extraContentClearance={28}
        >
          <div className={styles.hero}>
            <p className={styles.creator} aria-live="polite">{workspace.creator}</p>
            <h1>Your niche.<br />Your workspace.</h1>
            <p className={styles.description}>{workspace.description}</p>
            <div className={styles.choose}>
              <span>Choose your niche</span>
              <NichePicker active={niche} onSelect={setNiche} />
            </div>
            <div className={styles.actions}>
              <a href="#creator-styles">Explore workspace <ArrowDown size={15} aria-hidden="true" /></a>
              <a href="#early-access">Join early access <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
          </div>
        </FloatingStage>
        <CreatorSite workspace={workspace} picker={<NichePicker active={niche} onSelect={setNiche} />} />
      </main>
    </div>
  );
}
