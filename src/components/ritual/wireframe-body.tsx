"use client";

import { useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, FileText, Link2, MessageCircle } from "lucide-react";
import styles from "./wireframe-body.module.css";

const steps = [
  { label: "Find the angle", note: "A question worth following" },
  { label: "Follow the research", note: "Something to build on" },
  { label: "Shape a draft", note: "A beginning you can make yours" },
];
const questions = [
  ["Who is Ritual for?", "People with something they want to make. You might write essays, record videos or podcasts, develop visual stories, or move between formats. Ritual is being built around the thinking that connects that work: ideas, research, perspective, and a first draft."],
  ["What can I do in the first version?", "The focus is helping you explore a direction, work through research, and develop a piece of content through conversation. The walkthrough above illustrates that direction. We’ll share the exact first-version features with early access."],
  ["How does my own work fit in?", "Your references, creative brief, and the context you choose to bring give the conversation a starting point. The aim is to help develop your point of view while keeping you involved in the decisions."],
  ["Where will Ritual be available?", "Ritual is being developed as a desktop workspace. Supported platforms and instructions for getting started will be confirmed with early access."],
  ["How will my work and data be handled?", "We’ll publish the product’s data and privacy details before early access opens. This website walkthrough doesn’t connect to your accounts or read your work. For a specific question, contact the Rhetoric team."],
  ["What happens after I join early access?", "The planned signup will let you hear about Ritual’s progress and early-access availability. The form on this layout study is a preview, so it does not send or save your email."],
];

function Walkthrough() {
  const [step, setStep] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const selectWithKeys = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number;
    if (event.key === "ArrowRight") next = (index + 1) % steps.length;
    else if (event.key === "ArrowLeft") next = (index + steps.length - 1) % steps.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = steps.length - 1;
    else return;
    event.preventDefault(); setStep(next); tabs.current[next]?.focus();
  };
  return <section className={`${styles.section} ${styles.walkthrough}`} id="how-it-works" aria-labelledby="walkthrough-title">
    <div className={styles.sectionIntro}>
      <p className={styles.kicker}>01 / From idea to draft</p>
      <h2 id="walkthrough-title">A small thought.<br /><span>Somewhere worth taking it.</span></h2>
      <p className={styles.lead}>Bring a question, an observation, or something you can’t stop thinking about. Find a direction, follow it, and start making.</p>
    </div>
    <div className={styles.stepTabs} role="tablist" aria-label="Creative walkthrough">
      {steps.map((item, index) => <button key={item.label} ref={element => { tabs.current[index] = element; }} id={`walkthrough-tab-${index}`} type="button" role="tab" aria-selected={step === index} aria-controls="walkthrough-panel" tabIndex={step === index ? 0 : -1} onClick={() => setStep(index)} onKeyDown={event => selectWithKeys(event, index)}><span className={styles.stepNumber}>0{index + 1}</span><span><strong>{item.label}</strong><small>{item.note}</small></span><ArrowRight size={17} aria-hidden="true" /></button>)}
    </div>
    <div className={styles.example}>
      <aside className={styles.brief}>
        <div className={styles.briefTop}><span className={styles.smallMark}>r.</span><span>The things we keep</span></div>
        <p className={styles.overline}>Your starting point</p>
        <p className={styles.request}>“I keep an old train ticket in a drawer. Why do we hold on to things we no longer use? Help me find a story in that.”</p>
        <div className={styles.briefBottom}><MessageCircle size={15} aria-hidden="true" /><span>A conversation to think with</span></div>
      </aside>
      <div className={styles.output} id="walkthrough-panel" role="tabpanel" aria-labelledby={`walkthrough-tab-${step}`} tabIndex={0}>
        <div className={styles.outputMeta}><span>{step === 0 ? "Possible directions" : step === 1 ? "Research notebook" : "A working draft"}</span><span>Illustrative walkthrough</span></div>
        {step === 0 ? <div className={styles.angles}>
          <p className={styles.response}>There’s a story here about what an object holds after its practical use is over. Three ways into it:</p>
          <article className={styles.chosenAngle}><span>01</span><div><h3>A ticket to a former self</h3><p>Follow the person you were on that journey. The ticket becomes a way to talk about change.</p><small><Check size={12} aria-hidden="true" /> The direction we’ll explore</small></div></article>
          <article><span>02</span><div><h3>The smallest family archive</h3><p>Receipts, notes, ordinary objects. What do we preserve without meaning to?</p></div></article>
          <article><span>03</span><div><h3>What letting go asks of us</h3><p>Use the drawer as a starting point for a more difficult question: what are we afraid of losing?</p></div></article>
        </div> : step === 1 ? <div className={styles.research}>
          <h3>Objects, memory, and a sense of self.</h3>
          <p>Two research leads to explore before developing the argument. Keep the personal story distinct from what the evidence can support.</p>
          <a href="https://doi.org/10.1086/209154" target="_blank" rel="noreferrer"><Link2 size={17} aria-hidden="true" /><span><strong>Possessions and the Extended Self</strong><small>Russell W. Belk · Journal of Consumer Research · 1988</small><em>Look for: a framework for thinking about possessions and identity.</em></span><ArrowUpRight size={15} aria-hidden="true" /></a>
          <a href="https://doi.org/10.1086/314319" target="_blank" rel="noreferrer"><Link2 size={17} aria-hidden="true" /><span><strong>Older Consumers’ Disposition of Special Possessions</strong><small>Price, Arnould & Curasi · Journal of Consumer Research · 2000</small><em>Look for: how meaning enters decisions about passing possessions on.</em></span><ArrowUpRight size={15} aria-hidden="true" /></a>
          <p className={styles.researchNote}>A question to take back to the story: am I keeping the ticket, or a way of remembering who I was?</p>
        </div> : <div className={styles.draft}>
          <p className={styles.overline}>Opening / first pass</p><h3>A ticket to a former self</h3>
          <p className={styles.draftOpening}>The ticket doesn’t get me anywhere anymore. The date has faded. The journey is over. And still, every time I clear out the drawer, it goes back in.</p>
          <p>Perhaps I’m not keeping it for the place it took me. Perhaps I’m keeping a small piece of the person who went.</p>
          <div className={styles.outline}><span>Where the piece could go</span><ol><li>Start with the ticket and its journey.</li><li>Explore how ordinary things hold personal meaning.</li><li>Return to the drawer. What stays, and why?</li></ol></div>
        </div>}
      </div>
    </div>
    <p className={styles.caption}>One thought, developed together. Sample copy written for this preview; the source links are real research leads.</p>
  </section>;
}

function EarlyAccess() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); };
  return <section className={`${styles.section} ${styles.access}`} id="early-access" aria-labelledby="early-access-title">
    <p className={styles.kicker}>A little room for what comes next.</p>
    <h2 id="early-access-title">Your next idea<br /><span>could start here.</span></h2>
    <p className={styles.lead}>We’re building Ritual for people with something to make.<br />Leave your email to hear about early access.</p>
    {submitted ? <div className={styles.confirmation} role="status"><Check size={23} aria-hidden="true" /><h3>Thanks for your interest.</h3><p>This is the preview confirmation. Your email hasn’t been submitted.</p><button type="button" onClick={() => setSubmitted(false)}>Back to the form <ArrowRight size={14} aria-hidden="true" /></button></div> : <form className={styles.form} onSubmit={submit}>
      <label htmlFor="early-access-email">Email address</label><div className={styles.formRow}><input id="early-access-email" type="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={event => setEmail(event.target.value)} required aria-describedby="signup-preview-note" /><button type="submit">Join early access <ArrowRight size={15} aria-hidden="true" /></button></div>
      <p id="signup-preview-note">Layout preview · This form won’t send or save your email.</p><a href="#privacy-question">Questions about privacy <ArrowUpRight size={11} aria-hidden="true" /></a>
    </form>}
  </section>;
}

export function WireframeBody() {
  return <div className={styles.body}>
    <div className={styles.pageNote}><span>Ritual / Full-page layout study</span><span>Copy & composition · Font direction open</span><ArrowDown size={15} aria-hidden="true" /></div>
    <Walkthrough />
    <section className={`${styles.section} ${styles.context}`} aria-labelledby="context-title">
      <div className={styles.contextCopy}><p className={styles.kicker}>02 / A point of view, not a blank page</p><h2 id="context-title">Your world is<br /><span>part of the work.</span></h2><p className={styles.lead}>The references you return to. The way you tell a story. The thing you’re trying to say this time.</p><p>Bring that context into the conversation. Use Ritual to explore a direction with your own work and intentions in view.</p><a className={styles.textLink} href="#ways-to-create">See where that could take you <ArrowRight size={15} aria-hidden="true" /></a></div>
      <div className={styles.contextExample}><div className={styles.contextInput}><FileText size={17} aria-hidden="true" /><div><span>Your creative brief</span><p>“I write about everyday life. Keep it observant, concrete, and a little understated. Start with a scene, not a big claim.”</p></div></div><div className={styles.contextConnector} aria-hidden="true"><ArrowDown size={20} /></div><article className={styles.contextResult}><p className={styles.overline}>A direction shaped by your brief</p><h3>Stay with the drawer.</h3><p>Let the reader meet the ticket before explaining it. A faded date, the fold in the paper, the pause before throwing it away.</p><span className={styles.marginNote}>Your observation gives the piece its voice.</span></article><p className={styles.caption}>An illustrative brief and response. You bring the perspective; the conversation helps develop it.</p></div>
    </section>
    <section className={`${styles.section} ${styles.ways}`} id="ways-to-create" aria-labelledby="ways-title">
      <div className={styles.sectionIntro}><p className={styles.kicker}>03 / Room for what you make</p><h2 id="ways-title">The format is yours.<br /><span>The starting point can be shared.</span></h2><p className={styles.lead}>A thought can become something written, something recorded, or something seen. Explore the shape that suits what you want to say.</p></div>
      <div className={styles.waysGrid}>
        <article className={styles.writing}><p className={styles.overline}>Writing / Essay & newsletter</p><div className={styles.writtenPiece}><span>Field notes / 01</span><h3>The drawer<br />I never clear.</h3><p>A train ticket, a birthday card, a key that opens nothing. An essay about the ordinary things we make room for.</p><div className={styles.rule} /><small>From a passing observation to an angle and opening.</small></div><h4>Find the thread in a thought.</h4><p>Develop a point of view, work through the research, and give a first draft somewhere to begin.</p></article>
        <article className={styles.recorded}><p className={styles.overline}>Recorded / Video & audio</p><div className={styles.recording}><div className={styles.wave} aria-hidden="true">{Array.from({ length: 33 }, (_, i) => <i key={i} data-height={i % 7} />)}</div><span>Opening / 00:00</span><h3>“What’s the oldest thing in your drawer?”</h3><p>Start with a question the audience can answer. Then tell the story of one object that stayed.</p><small>Scene → question → personal story</small></div><h4>Make the beginning worth following.</h4><p>Find a hook, map the story, and shape words that feel natural to say out loud.</p></article>
        <article className={styles.visual}><p className={styles.overline}>Visual / Concept & narrative</p><div className={styles.visualBrief}>
          {/* Existing illustrative hero asset, reused as a concept reference. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/ritual/sculpture.webp" alt="A sculptural stone form on blue fabric, used as a visual concept reference" width="768" height="512" loading="lazy" />
          <div><span>Concept / A portrait without a face</span><h3>An object.<br />Its place.<br />The space it leaves.</h3></div></div><h4>Give a feeling a direction.</h4><p>Develop a creative brief, connect references, and find the narrative behind a visual idea.</p></article>
      </div><p className={styles.caption}>Examples of creative development across formats—not finished media generated by Ritual.</p>
    </section>
    <section className={`${styles.section} ${styles.questions}`} id="questions" aria-labelledby="questions-title"><div><p className={styles.kicker}>04 / A few practical things</p><h2 id="questions-title">Before<br /><span>you begin.</span></h2><p className={styles.lead}>Something else on your mind?</p><a className={styles.textLink} href="mailto:contact@rhetoric.so">Talk to the team <ArrowUpRight size={14} aria-hidden="true" /></a></div><div className={styles.faqList}>{questions.map(([question, answer], index) => <details key={question} name="wireframe-questions" open={index === 0} id={index === 4 ? "privacy-question" : undefined}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}{index === 4 && <> <a href="mailto:contact@rhetoric.so">contact@rhetoric.so</a></>}</p></details>)}</div></section>
    <EarlyAccess />
    <footer className={styles.footer}><div><a href="#main" className={styles.footerLogo}>ritual.</a><p>Good work starts with a ritual.</p></div><nav aria-label="Footer navigation"><a href="#how-it-works">How it works</a><a href="#ways-to-create">Ways to create</a><a href="#questions">Questions</a><a href="mailto:contact@rhetoric.so">Contact</a></nav><div className={styles.footerBottom}><span>Made by <a href="https://rhetoric.so">Rhetoric</a></span><span>Layout study · Illustrative content · 2026</span></div></footer>
  </div>;
}
