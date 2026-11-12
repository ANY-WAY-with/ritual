"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Check, FileText, Layers, Focus } from "lucide-react";
import type { NicheWorkspace } from "./niche-workspaces";
import workspaceStyles from "./creator-preview.module.css";
import styles from "./creator-site.module.css";

function Workspace({ workspace, picker }: { workspace: NicheWorkspace; picker: ReactNode }) {
  return (
    <section className={styles.section} id="creator-styles" aria-labelledby="creator-title">
      <div className={workspaceStyles.sectionIntro}>
        <div>
          <p className={styles.eyebrow}>{workspace.creator}</p>
          <h2 id="creator-title">Inside your workspace</h2>
          <p className={workspaceStyles.workspaceDescription}>{workspace.description}</p>
        </div>
        {picker}
      </div>
      <div className={workspaceStyles.workspace}>
        <aside className={workspaceStyles.referencePane} aria-labelledby="reference-heading">
          <h3 id="reference-heading">References for your next piece</h3>
          <ul>
            {workspace.references.map((reference) => (
              <li key={reference.url}>
                <a className={workspaceStyles.reference} href={reference.url} target="_blank" rel="noreferrer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={reference.image} alt="" width={144} height={100} loading="lazy" decoding="async" />
                  <div>
                    <p className={workspaceStyles.referenceType}>{reference.source} · {reference.type}</p>
                    <strong>{reference.title}</strong>
                    <p className={workspaceStyles.referenceNote}>{reference.takeaway}</p>
                  </div>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </aside>
        <article className={workspaceStyles.draft} aria-labelledby="draft-title">
          <p className={workspaceStyles.label}>Your brief</p>
          <p className={workspaceStyles.brief}>{workspace.brief}</p>
          <p className={workspaceStyles.label}>Suggested direction</p>
          <h3 id="draft-title">{workspace.title}</h3>
          <p className={workspaceStyles.angle}>{workspace.angle}</p>
          <blockquote className={workspaceStyles.opening}>
            <span className={workspaceStyles.label}>Try an opening</span>
            <p>“{workspace.opening}”</p>
          </blockquote>
          <p className={workspaceStyles.label}>A possible structure</p>
          <ol>
            {workspace.outline.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </article>
      </div>
      <p className={styles.caption}>Sample workspace with curated references and an illustrative draft.</p>
    </section>
  );
}

const faq = [
  ["What does Ritual help me do?", "Explore directions, connect references, and develop the structure and language of a piece through conversation. This preview shows the kind of collaboration we’re building. First-version features will be confirmed with early access."],
  ["Is Ritual for a particular content format?", "It’s for creators who work with ideas—whether the result is written, recorded, or visual. The examples focus on creative development: a direction, a story, a brief, or a draft."],
  ["How does my style come into it?", "Start with a niche, then bring in your own references, past work, and creative choices. Each sample workspace shows how those inputs can shape the next piece."],
  ["When can I try it?", "Join early access to hear about availability and how to get started. Ritual is being developed as a desktop workspace; supported platforms and the invitation process will be shared with early access."],
  ["How will my work and data be handled?", "We’ll publish product data and privacy details before early access opens. This preview doesn’t connect to your accounts, read your work, or submit your email. Contact contact@rhetoric.so with a specific question."],
];

function Signup() {
  const [email, setEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setConfirmed(true); };
  return <section className={styles.signup} id="early-access" aria-labelledby="access-title"><div className={styles.signupInner}><p className={styles.eyebrow}>A little more you. In everything you make.</p><h2 id="access-title">Make your next piece<br /><span>feel like you.</span></h2><p>Help shape a more thoughtful creative partner.<br />Join Ritual’s early access.</p>{confirmed ? <div className={styles.confirmation} role="status"><Check size={24} aria-hidden="true" /><h3>Thanks for your interest.</h3><p>This is the preview confirmation. Your email hasn’t been submitted.</p><button type="button" onClick={() => setConfirmed(false)}>Back to the form <ArrowRight size={14} aria-hidden="true" /></button></div> : <form className={styles.signupForm} onSubmit={submit}><label htmlFor="creator-email">Email address</label><div><input id="creator-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required value={email} onChange={event => setEmail(event.target.value)} aria-describedby="creator-form-note" /><button type="submit">Join early access <ArrowUpRight size={17} aria-hidden="true" /></button></div><p id="creator-form-note">Preview only. No email is sent or saved. <a href="#privacy-question">Privacy questions</a></p></form>}</div></section>;
}

export function CreatorSite({ workspace, picker }: { workspace: NicheWorkspace; picker: ReactNode }) {
  return <div className={styles.site}>
    <Workspace workspace={workspace} picker={picker} />
    <section className={styles.contextSection} id="how-it-works" aria-labelledby="context-heading"><div className={styles.contextInner}><div className={styles.contextCopy}><p className={styles.eyebrow}>Bring your world into the work</p><h2 id="context-heading">It starts with<br /><span>what makes you, you.</span></h2><p>Your references, your past work, your intent for this piece. Keep what matters in the conversation—and develop a direction with that context in view.</p><a href="#early-access">Get to know Ritual <ArrowUpRight size={16} aria-hidden="true" /></a></div><div className={styles.contextMap} aria-label="Illustration of creator-provided context informing a direction"><div className={styles.contextInputs}><div><FileText size={18} aria-hidden="true" /><span><strong>Your work</strong><small>What you’ve made</small></span></div><div><Layers size={18} aria-hidden="true" /><span><strong>Your references</strong><small>What catches your eye</small></span></div><div><Focus size={18} aria-hidden="true" /><span><strong>Your intent</strong><small>What you’re making next</small></span></div></div><div className={styles.contextOutput}><span className={styles.outputMonogram}>r.</span><span>A starting point with context</span><h3>A direction<br />you recognise.</h3><div><span /> Your point of view, in progress</div></div></div></div><div className={styles.contextFoot}><span>Context you choose to bring.</span><span>You stay in the creative decisions.</span></div></section>
    <section className={`${styles.section} ${styles.faq}`} id="questions" aria-labelledby="faq-heading"><div><p className={styles.eyebrow}>A few practical things</p><h2 id="faq-heading">Good questions.<br /><span>Clear answers.</span></h2><a href="mailto:contact@rhetoric.so">Talk to the team <ArrowUpRight size={14} aria-hidden="true" /></a></div><div className={styles.faqList}>{faq.map(([question, answer], index) => <details key={question} name="creator-faq" open={index === 0} id={index === 4 ? "privacy-question" : undefined}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
    <Signup />
    <footer className={styles.footer}><div className={styles.footerTop}><div><a href="#main" className={styles.footerLogo}>ritual.</a><p>Good work starts with a ritual.</p></div><nav aria-label="Footer navigation"><a href="#how-it-works">How it works</a><a href="#creator-styles">Workspaces</a><a href="#questions">Questions</a><a href="mailto:contact@rhetoric.so">Contact</a></nav></div><div className={styles.footerBottom}><span>Made by <a href="https://rhetoric.so">Rhetoric</a></span><div><span>Product preview · Font direction open</span><Link href="/wireframe">Compare wireframe <ArrowUpRight size={10} aria-hidden="true" /></Link></div></div></footer>
  </div>;
}
