import Link from "next/link";
import { RitualHero } from "@/components/ritual/ritual-hero";

export default function Home() {
  return (
    <div className="ritual-site">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Ritual home">ritual<span aria-hidden="true">.</span></Link>
        <a className="header-contact" href="mailto:contact@rhetoric.so">Say hello <span aria-hidden="true">↗</span></a>
      </header>
      <main id="main"><RitualHero /></main>
      <footer className="site-footer">
        <span>Made by <a href="https://rhetoric.so">Rhetoric</a></span>
        <span>© 2026 Rhetoric Intelligence, Inc.</span>
      </footer>
    </div>
  );
}
