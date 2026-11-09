"use client";

import { useState } from "react";
import Link from "next/link";
import { RitualHero } from "./ritual-hero";
import { SiteHeader } from "./site-header";
import { RitualLandingBody } from "./landing-body";
import styles from "./hero-study.module.css";

type Typography = "sans" | "serif";

export function HeroStudy({ initialTypography, reducedMotion = false }: { initialTypography: Typography; reducedMotion?: boolean }) {
  const [typography, setTypography] = useState(initialTypography);
  const select = (value: Typography) => {
    setTypography(value);
    const url = new URL(window.location.href);
    url.searchParams.set("type", value);
    window.history.replaceState(null, "", url);
  };
  return <div className="ritual-site">
    <a className="skip-link" href="#main">Skip to content</a>
    <SiteHeader />
    <main id="main"><RitualHero typography={typography} reducedMotion={reducedMotion} /><RitualLandingBody /></main>
    <aside className={styles.controls} aria-label="Hero typography study">
      <span className={styles.label}>Editorial study</span>
      <div className={styles.options} role="group" aria-label="Typography options">
        <button type="button" aria-pressed={typography === "sans"} onClick={() => select("sans")}>A · All sans</button>
        <button type="button" aria-pressed={typography === "serif"} onClick={() => select("serif")}>B · Serif</button>
      </div>
      <Link className={styles.baseline} href="/" aria-label="View the current Ritual version">Current ↗</Link>
    </aside>
  </div>;
}
