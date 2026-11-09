"use client";

import Link from "next/link";
import { useEffect, useRef, useSyncExternalStore } from "react";
import { Menu, X } from "lucide-react";
import styles from "./site-header.module.css";

const links = [{ label: "Explore", href: "#explore" }, { label: "How it works", href: "#workflow" }, { label: "FAQ", href: "#faq" }];
function subscribeScroll(callback: () => void) { window.addEventListener("scroll", callback, { passive: true }); return () => window.removeEventListener("scroll", callback); }
function getScrolled() { return window.scrollY > 30; }
function serverScrolled() { return false; }

export function SiteHeader() {
  const scrolled = useSyncExternalStore(subscribeScroll, getScrolled, serverScrolled);
  const menu = useRef<HTMLDialogElement>(null);
  const close = () => menu.current?.close();
  useEffect(() => {
    const query = window.matchMedia("(min-width: 761px)");
    const changed = () => { if (query.matches) menu.current?.close(); };
    query.addEventListener("change", changed);
    return () => query.removeEventListener("change", changed);
  }, []);
  return <>
    <header className={styles.header} data-scrolled={scrolled}>
      <div className={styles.left}>
        <Link className={styles.wordmark} href="/" aria-label="Ritual home">ritual<span aria-hidden="true">.</span></Link>
        <nav aria-label="Main navigation" className={styles.desktopNav}>{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
      </div>
      <div className={styles.right}><a href="https://rhetoric.so" className={styles.byline}>By Rhetoric</a><a href="#features" className={styles.tryButton}>Discover Ritual <span aria-hidden="true">↗</span></a></div>
      <button className={styles.menuButton} type="button" aria-label="Open navigation" onClick={() => menu.current?.showModal()}><Menu size={22} /></button>
    </header>
    <dialog ref={menu} className={styles.drawer} aria-labelledby="navigation-title" onClick={event => { if (event.target === event.currentTarget) close(); }}>
      <div className={styles.drawerPanel}>
        <div className={styles.drawerTop}><h2 id="navigation-title">ritual.</h2><button type="button" aria-label="Close navigation" onClick={close}><X size={20} /></button></div>
        <nav aria-label="Mobile navigation">{links.map(link => <a href={link.href} key={link.href} onClick={close}>{link.label}</a>)}<a href="#features" onClick={close}>A first look</a><a href="https://rhetoric.so">Rhetoric <span aria-hidden="true">↗</span></a><a href="mailto:contact@rhetoric.so">Contact</a></nav>
        <div onClick={close}><a href="#features" className={styles.drawerCTA}>Discover Ritual <span aria-hidden="true">↗</span></a></div>
      </div>
    </dialog>
  </>;
}
