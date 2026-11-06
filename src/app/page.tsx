import Link from "next/link";

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Ritual home">ritual<span aria-hidden="true">.</span></Link>
        <a className="text-link" href="mailto:contact@rhetoric.so">Say hello <span aria-hidden="true">↗</span></a>
      </header>
      <main id="main" className="hero">
        <p className="eyebrow"><span className="status-dot" aria-hidden="true" /> A workspace for creators</p>
        <h1>Good work<br />starts with<br /><span>a ritual.</span></h1>
        <div className="hero-bottom">
          <p className="intro">A place to develop your ideas<br className="desktop-break" /> and move your work forward.</p>
          <div className="launch">
            <p>Something new is taking shape.</p>
            <a className="contact-button" href="mailto:contact@rhetoric.so?subject=Hello%20Ritual">Get in touch <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </main>
      <footer className="site-footer">
        <span>Made by <a href="https://rhetoric.so">Rhetoric</a></span>
        <span>© 2026 Rhetoric Intelligence, Inc.</span>
      </footer>
    </div>
  );
}
