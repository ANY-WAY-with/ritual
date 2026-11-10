"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, FileText, Layers, Focus, MessageSquare, Sparkles } from "lucide-react";
import { creatorExamples } from "./creator-examples";
import styles from "./creator-site.module.css";

function ReferenceWorld({ profile }: { profile: string }) {
  if (profile === "visual") return <div className={styles.visualRefs} aria-label="Illustrative visual reference collection">
    {(["night", "fabric", "coast"] as const).map((name, index) => (
      // Existing original creative assets, not screenshots or work by a customer.
      // eslint-disable-next-line @next/next/no-img-element
      <img key={name} src={`/brand/ritual/${name}.webp`} alt={["A city scene at blue hour", "Light and movement in orange fabric", "A coastal road, used as a mood reference"][index]} width="768" height="512" loading="lazy" />
    ))}
    <span>Frames, colour, rhythm.</span>
  </div>;
  if (profile === "writer") return <div className={styles.writerRefs} aria-label="Illustrative writing references"><div><span>A note to myself</span><p>Start with the thing that doesn’t quite add up.</p></div><div><span>Voice / working notes</span><p>A clear argument.<br />A sideways observation.<br />Something worth saying.</p></div></div>;
  return <div className={styles.explainerRefs} aria-label="Illustrative explainer references"><div className={styles.miniDiagram}><span>What I follow</span><ArrowDown size={12} aria-hidden="true" /><span>What I’m shown</span><ArrowDown size={12} aria-hidden="true" /><span>What I watch</span></div><div className={styles.referenceNote}><FileText size={14} aria-hidden="true" /><span>Make the question visible.<br />Then work through it.</span></div></div>;
}

function CreatorSwitcher() {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const example = creatorExamples[selected];
  const handleKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number;
    if (event.key === "ArrowRight") next = (index + 1) % creatorExamples.length;
    else if (event.key === "ArrowLeft") next = (index + creatorExamples.length - 1) % creatorExamples.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = creatorExamples.length - 1;
    else return;
    event.preventDefault(); setSelected(next); tabs.current[next]?.focus();
  };
  return <section className={`${styles.section} ${styles.creatorSection}`} id="how-it-works" aria-labelledby="creator-title">
    <div className={styles.intro} id="creator-styles"><div><p className={styles.eyebrow}>A creative partner. A point of view.</p><h2 id="creator-title">One idea.<br /><span>Unmistakably yours.</span></h2></div><p className={styles.lead}>The same starting point can lead somewhere completely different. Explore how references, voice, and perspective change the work.</p></div>
    <div className={styles.profileTabs} role="tablist" aria-label="Creator styles">
      {creatorExamples.map((item, index) => <button key={item.id} ref={element => { tabs.current[index] = element; }} type="button" id={`creator-tab-${item.id}`} role="tab" aria-selected={selected === index} aria-controls="creator-output" tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={event => handleKey(event, index)}><span className={styles.profileMark}>{item.mark}</span><span><strong>{item.name}</strong><small>{item.descriptor}</small></span><ArrowRight size={16} aria-hidden="true" /></button>)}
    </div>
    <div className={styles.creatorFrame} data-profile={example.id} id="creator-output" role="tabpanel" aria-labelledby={`creator-tab-${example.id}`} tabIndex={0}>
      <div className={styles.frameTop}><div><span className={styles.frameMark}>ritual.</span><span className={styles.frameDivider} /><span>Your next piece</span></div><span className={styles.demoLabel}><span /> Illustrative example</span></div>
      <div className={styles.ideaBar}><span>The same starting idea</span><p>“Why do all my feeds start to feel the same?”</p><span className={styles.ideaTag}>Explore an angle</span></div>
      <div className={styles.workspace}>
        <aside className={styles.contextPane}><div className={styles.paneLabel}><Layers size={14} aria-hidden="true" /> Creative context</div><ReferenceWorld profile={example.id} /><div className={styles.voice}><span>Your voice</span><p>{example.voice}</p></div><div className={styles.voice}><span>Your audience</span><p>{example.audience}</p></div><div className={styles.referenceList}>{example.references.map(reference => <span key={reference}><FileText size={12} aria-hidden="true" />{reference}</span>)}</div></aside>
        <article className={styles.resultPane}><div className={styles.resultLabel}><Sparkles size={13} aria-hidden="true" /><span>A direction, shaped by your context</span></div><h3>{example.title}</h3><p className={styles.angle}>{example.angle}</p><div className={styles.opening}><span>Try an opening</span><p>{example.opening}</p></div><div className={styles.outline}><span>A possible structure</span>{example.outline.map((line, index) => <p key={line}><small>0{index + 1}</small>{line}</p>)}</div></article>
      </div>
      <div className={styles.frameBottom}><span><Check size={12} aria-hidden="true" /> Your perspective stays in the picture.</span><span>References → angle → first draft</span></div>
    </div>
    <p className={styles.caption}>Switch creator styles to compare the references, angle, opening, and structure. These are authored examples, not live AI results.</p>
  </section>;
}

const faq = [
  ["What does Ritual help me do?", "Explore directions, connect references, and develop the structure and language of a piece through conversation. This preview shows the kind of collaboration we’re building. First-version features will be confirmed with early access."],
  ["Is Ritual for a particular content format?", "It’s for creators who work with ideas—whether the result is written, recorded, or visual. The examples focus on creative development: a direction, a story, a brief, or a draft."],
  ["How does my style come into it?", "Your work, references, and creative choices give the conversation a starting point. The examples above use different briefs and preferences to show how a direction can change. You still decide what feels right."],
  ["When can I try it?", "Join early access to hear about availability and how to get started. Ritual is being developed as a desktop workspace; supported platforms and the invitation process will be shared with early access."],
  ["How will my work and data be handled?", "We’ll publish product data and privacy details before early access opens. This preview doesn’t connect to your accounts, read your work, or submit your email. Contact contact@rhetoric.so with a specific question."],
];

function Signup() {
  const [email, setEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setConfirmed(true); };
  return <section className={styles.signup} id="early-access" aria-labelledby="access-title"><div className={styles.signupInner}><p className={styles.eyebrow}>A little more you. In everything you make.</p><h2 id="access-title">Make your next piece<br /><span>feel like you.</span></h2><p>Help shape a more thoughtful creative partner.<br />Join Ritual’s early access.</p>{confirmed ? <div className={styles.confirmation} role="status"><Check size={24} aria-hidden="true" /><h3>Thanks for your interest.</h3><p>This is the preview confirmation. Your email hasn’t been submitted.</p><button type="button" onClick={() => setConfirmed(false)}>Back to the form <ArrowRight size={14} aria-hidden="true" /></button></div> : <form className={styles.signupForm} onSubmit={submit}><label htmlFor="creator-email">Email address</label><div><input id="creator-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required value={email} onChange={event => setEmail(event.target.value)} aria-describedby="creator-form-note" /><button type="submit">Join early access <ArrowUpRight size={17} aria-hidden="true" /></button></div><p id="creator-form-note">Preview only. No email is sent or saved. <a href="#privacy-question">Privacy questions</a></p></form>}</div></section>;
}

export function CreatorSite() {
  return <div className={styles.site}>
    <div className={styles.seam}><p>A place to think.<br /><strong>A partner to make with.</strong></p><span>Ideas. References. Your point of view.</span><ArrowDown size={18} aria-hidden="true" /></div>
    <CreatorSwitcher />
    <section className={styles.contextSection} aria-labelledby="context-heading"><div className={styles.contextInner}><div className={styles.contextCopy}><p className={styles.eyebrow}>Bring your world into the work</p><h2 id="context-heading">It starts with<br /><span>what makes you, you.</span></h2><p>Your references, your past work, your intent for this piece. Keep what matters in the conversation—and develop a direction with that context in view.</p><a href="#early-access">Get to know Ritual <ArrowUpRight size={16} aria-hidden="true" /></a></div><div className={styles.contextMap} aria-label="Illustration of creator-provided context informing a direction"><div className={styles.contextInputs}><div><FileText size={18} aria-hidden="true" /><span><strong>Your work</strong><small>What you’ve made</small></span></div><div><Layers size={18} aria-hidden="true" /><span><strong>Your references</strong><small>What catches your eye</small></span></div><div><Focus size={18} aria-hidden="true" /><span><strong>Your intent</strong><small>What you’re making next</small></span></div></div><div className={styles.contextOutput}><span className={styles.outputMonogram}>r.</span><span>A starting point with context</span><h3>A direction<br />you recognise.</h3><div><span /> Your point of view, in progress</div></div></div></div><div className={styles.contextFoot}><span>Context you choose to bring.</span><span>You stay in the creative decisions.</span></div></section>
    <section className={`${styles.section} ${styles.workSection}`} id="ways-to-create" aria-labelledby="work-title"><div className={styles.intro}><div><p className={styles.eyebrow}>Room for what you make</p><h2 id="work-title">Different forms.<br /><span>The same creative instinct.</span></h2></div><p className={styles.lead}>An essay, an episode, a visual story. Work through the idea and find the form that makes it land.</p></div><div className={styles.workGrid}><article><div className={styles.filmArtifact}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/ritual/night.webp" alt="A city at blue hour, used as an illustrative visual-story reference" width="768" height="512" loading="lazy" /><div><span>Visual story / A working direction</span><strong>Find the frame<br />only you would notice.</strong></div></div><div className={styles.workCaption}><span>01 / Visual</span><h3>Give a feeling a direction.</h3><p>Connect references, develop a concept, and find the story inside the images.</p></div></article><article><div className={styles.essayArtifact}><span>A point of view / First pass</span><strong>Your feed.<br />Your rules.</strong><div /><p>Start with a contradiction.<br />Follow it somewhere interesting.</p><span>Angle → argument → opening</span></div><div className={styles.workCaption}><span>02 / Written</span><h3>Make something worth reading.</h3><p>Find the thread in an observation and shape a draft with a point of view.</p></div></article><article><div className={styles.audioArtifact}><span>An opening / Work in progress</span><div className={styles.wave} aria-hidden="true">{Array.from({ length: 35 }, (_, i) => <i key={i} data-height={i % 9} />)}</div><strong>“Let’s start with<br />a better question.”</strong><div><MessageSquare size={14} aria-hidden="true" /><span>Hook. Rhythm. Story.</span></div></div><div className={styles.workCaption}><span>03 / Recorded</span><h3>Make the beginning count.</h3><p>Find a hook, map the story, and shape words that feel natural out loud.</p></div></article></div><p className={styles.caption}>Illustrative creative artifacts, not finished media generated by Ritual.</p></section>
    <section className={`${styles.section} ${styles.faq}`} id="questions" aria-labelledby="faq-heading"><div><p className={styles.eyebrow}>A few practical things</p><h2 id="faq-heading">Good questions.<br /><span>Clear answers.</span></h2><a href="mailto:contact@rhetoric.so">Talk to the team <ArrowUpRight size={14} aria-hidden="true" /></a></div><div className={styles.faqList}>{faq.map(([question, answer], index) => <details key={question} name="creator-faq" open={index === 0} id={index === 4 ? "privacy-question" : undefined}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
    <Signup />
    <footer className={styles.footer}><div className={styles.footerTop}><div><a href="#main" className={styles.footerLogo}>ritual.</a><p>Good work starts with a ritual.</p></div><nav aria-label="Footer navigation"><a href="#how-it-works">How it works</a><a href="#creator-styles">Creator styles</a><a href="#questions">Questions</a><a href="mailto:contact@rhetoric.so">Contact</a></nav></div><div className={styles.footerBottom}><span>Made by <a href="https://rhetoric.so">Rhetoric</a></span><div><span>Product preview · Font direction open</span><Link href="/wireframe">Compare wireframe <ArrowUpRight size={10} aria-hidden="true" /></Link></div></div></footer>
  </div>;
}
