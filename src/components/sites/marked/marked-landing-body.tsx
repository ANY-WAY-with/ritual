"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { ArrowUpRight, BadgeCheck, Bookmark, ChevronLeft, ChevronRight, FileText, FolderOpen, Layers, Link2, MessageCircle, Search, Sparkles, X } from "lucide-react";
import styles from "./marked-landing-body.module.css";

type Variant = "reference" | "ritual";
type ReferenceItem = { src: string; title: string; credit: string; detail: string };
type Category = { label: string; count?: number; description: string; image: number; href?: string };

const referenceItems: ReferenceItem[] = [
  { src: "/sites/marked/landing-0.jpg", title: "An empty state that reacts to cursor proximity", credit: "Max Podgorski", detail: "A dark email-analysis empty state reacts as the pointer moves close to it." },
  { src: "/sites/marked/landing-1.jpg", title: "Ace Studio website with an animated typographic hero", credit: "rico", detail: "A dark studio website combines a serif hero, compact navigation and a project grid." },
  { src: "/sites/marked/landing-2.jpg", title: "A workspace overview with tasks and deadlines", credit: "Elia Kuratli", detail: "A light workspace arranges billing tasks across a series of status columns." },
  { src: "/sites/marked/landing-3.jpg", title: "A compact interface reference", credit: "Max Podgorski", detail: "A saved interface detail from the Marked reference library." },
  { src: "/sites/marked/landing-4.jpg", title: "A workspace detail worth keeping", credit: "C. Nijhof", detail: "A saved interface reference from the Marked library." },
  { src: "/sites/marked/landing-5.jpg", title: "Stacked row tags that expand on hover", credit: "Gabriel", detail: "Priority and assignee tags overlap at rest, then spread into readable labels on hover." },
  { src: "/sites/marked/landing-6.jpg", title: "An AI chat auto-scroll threshold comparison", credit: "Chloé", detail: "A chat interaction explores when auto-scroll should resume after rereading an answer." },
  { src: "/sites/marked/landing-7.jpg", title: "An expressive interface detail", credit: "keviduk", detail: "An interaction reference saved from the Marked library." },
];
const ritualItems: ReferenceItem[] = [
  { src: "/brand/ritual/alpine.webp", title: "A different sense of scale", credit: "Landscape study", detail: "A small figure, a wide landscape, and the feeling of beginning. An original illustrative reference for exploring a story's setting and scale." },
  { src: "/brand/ritual/fabric.webp", title: "Follow the movement", credit: "Material study", detail: "Light passing through orange fabric. A starting point for thinking about rhythm, texture, and the movement inside a frame." },
  { src: "/brand/ritual/coast.webp", title: "Make room for the journey", credit: "Film study", detail: "A coastal road in soft afternoon light. A reference for atmosphere, pacing, and the details that make a scene feel lived in." },
  { src: "/brand/ritual/fabric.webp", title: "Find the light", credit: "Colour study", detail: "A study of warm colour and directional light. Keep the feeling, then find a way to make it your own." },
  { src: "/brand/ritual/alpine.webp", title: "Start somewhere quiet", credit: "Atmosphere study", detail: "A quiet landscape can become the beginning of a scene, a question, or an entirely different idea." },
  { src: "/brand/ritual/coast.webp", title: "A story between places", credit: "Composition study", detail: "Explore the relationship between a subject and the space around it. These original illustrative references are part of Ritual's first website preview." },
];

const referenceCategories: Category[] = [
  { label: "Hover", count: 9, description: "Cards that lift, links that reveal, cursors that react.", image: 0, href: "https://marked.dev/explore?tag=hover" },
  { label: "Scroll", count: 9, description: "Sections that pin, images that fly in, text that unfolds.", image: 1, href: "https://marked.dev/explore?tag=scroll,parallax" },
  { label: "Drag", count: 7, description: "Stacks to shuffle, items to sort, things to throw around.", image: 2, href: "https://marked.dev/explore?tag=drag,stack" },
  { label: "Menus", count: 13, description: "Pickers, palettes and actions that unfold in place.", image: 3, href: "https://marked.dev/explore?tag=menu,command,picker,popover" },
  { label: "Panels", count: 12, description: "Side panels and sheets that make room for more.", image: 4, href: "https://marked.dev/explore?tag=panel" },
  { label: "Feedback", count: 17, description: "Loaders, states and confirmations that keep you posted.", image: 5, href: "https://marked.dev/explore?tag=feedback,loading,states" },
  { label: "Cards", count: 12, description: "Cards that flip, expand, stack and lift.", image: 6, href: "https://marked.dev/explore?tag=card" },
  { label: "Canvas", count: 5, description: "Boards to pan, zoom and draw on.", image: 7, href: "https://marked.dev/explore?tag=canvas" },
  { label: "Reveal", count: 4, description: "Content that appears as you go.", image: 1, href: "https://marked.dev/explore?tag=reveal,open" },
  { label: "AI", count: 30, description: "Prompts, suggestions and agents at work.", image: 0, href: "https://marked.dev/explore?tag=ai" },
  { label: "Lists", count: 10, description: "Lists that stagger, sort and reorder.", image: 2, href: "https://marked.dev/explore?tag=list" },
  { label: "Data", count: 17, description: "Charts, tables and numbers that move.", image: 4, href: "https://marked.dev/explore?tag=data,chart,table" },
];
const ritualCategories: Category[] = [
  { label: "Ideas", description: "A small thought is enough to get started.", image: 0 },
  { label: "Visuals", description: "Follow a colour, a texture, or the feeling in a frame.", image: 1 },
  { label: "Stories", description: "Find a point of view and give it somewhere to go.", image: 2 },
  { label: "Atmosphere", description: "Keep the references that capture the feeling you are after.", image: 4 },
  { label: "Composition", description: "Try a different relationship between your subject and the space around it.", image: 5 },
  { label: "Movement", description: "Think in rhythm, transitions, and the moments between.", image: 3 },
];
const referenceFaq = [
  ["What is marked?", "A library of the interfaces, interactions and motion you save from X, Pinterest and the web, that your coding agent can read. It builds from your taste, not from the average of the internet."],
  ["How do I save a ref?", "Paste a link. marked pulls the media, plays it in place and credits the person who made it."],
  ["How does my agent read my refs?", "Through MCP. Connect Claude Code, Codex or Cursor, and it searches your collections before it builds."],
  ["Are my collections private?", "Yes. Your collections are yours alone; nothing you save shows up for anyone else."],
  ["Who gets the credit?", "Every ref keeps its maker and links back to the original post."],
  ["Is it free?", "Yes. Joining is free, and your agent gets 100 searches of your refs a month."],
];
const ritualFaq = [
  ["What is Ritual?", "Ritual is a workspace for creators to develop ideas and move their work forward. This first website version introduces the direction and gives you a place to try the conversation interface."],
  ["What can I try here?", "Start with a thought in the chat input, browse the creative references, and explore the kinds of questions that can move an idea forward. This is an early interface preview."],
  ["Are these screenshots of the product?", "No. The floating images and visual studies are original illustrative creative references. They show a mood and a direction, rather than product features or client work."],
  ["Can I sign up yet?", "For now, get in touch with the Rhetoric team to hear more about Ritual. Product access and the full sign-up flow are still being developed."],
  ["Who is building Ritual?", "Ritual is made by Rhetoric. You can learn about the company at rhetoric.so or contact us at contact@rhetoric.so."],
  ["How can I share feedback?", "We would like to hear what you are working on and where your creative process gets stuck. Send a note to contact@rhetoric.so."],
];

function SplitHeading({ first, second, className = "" }: { first: string; second: string; className?: string }) {
  return <h2 className={`${styles.heading} ${className}`}><span>{first}</span><span>{second}</span></h2>;
}
function MediaImage({ item, className = "", decorative = false }: { item: ReferenceItem; className?: string; decorative?: boolean }) {
  return <Image src={item.src} alt={decorative ? "" : item.title} width={720} height={480} className={className} sizes="(max-width: 760px) 90vw, 520px" />;
}

export function MarkedLandingBody({ variant = "reference", onStart }: { variant?: Variant; onStart?: (prompt?: string) => void }) {
  const ritual = variant === "ritual";
  const root = useRef<HTMLDivElement>(null);
  const shelf = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const prefix = useId();
  const items = ritual ? ritualItems : referenceItems;
  const categories = ritual ? ritualCategories : referenceCategories;
  const faqs = ritual ? ritualFaq : referenceFaq;
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedItem, setSelectedItem] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [shelfPosition, setShelfPosition] = useState({ start: true, end: false });
  const selectedCategory = categories[selectedTab];
  const cta = ritual ? "#main" : "https://marked.dev/";
  const contact = ritual ? "mailto:contact@rhetoric.so" : "mailto:contact@marked.dev";

  useEffect(() => {
    const container = root.current;
    if (!container) return;
    const reveal = container.querySelectorAll<HTMLElement>("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).dataset.waiting = "false";
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.08 });
    reveal.forEach(element => {
      if (element.getBoundingClientRect().top > window.innerHeight) element.dataset.waiting = "true";
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const updateShelf = () => {
    const row = shelf.current;
    if (!row) return;
    const start = row.scrollLeft <= 2;
    const end = row.scrollWidth - row.clientWidth - row.scrollLeft <= 2;
    setShelfPosition(previous => previous.start === start && previous.end === end ? previous : { start, end });
  };
  useEffect(() => {
    const row = shelf.current;
    if (!row) return;
    const observer = new ResizeObserver(() => {
      const start = row.scrollLeft <= 2;
      const end = row.scrollWidth - row.clientWidth - row.scrollLeft <= 2;
      setShelfPosition(previous => previous.start === start && previous.end === end ? previous : { start, end });
    });
    observer.observe(row);
    return () => observer.disconnect();
  }, []);

  const moveShelf = (direction: number) => {
    const row = shelf.current;
    if (!row) return;
    const card = row.querySelector("button");
    row.scrollBy({ left: direction * ((card?.getBoundingClientRect().width ?? 300) + 15), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };
  const showItem = (index: number) => {
    setSelectedItem(index);
    dialog.current?.showModal();
  };
  const navigateTabs = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const direction = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 0;
    let next = index;
    if (direction) next = (index + direction + categories.length) % categories.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = categories.length - 1;
    else return;
    event.preventDefault();
    setSelectedTab(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div ref={root} className={styles.body} data-variant={variant}>
      <section className={styles.logoWall} aria-label={ritual ? "Creative starting points" : "Patterns you'll recognize from"}>
        <p>{ritual ? "Good ideas can start anywhere" : "Patterns you’ll recognize from"}</p>
        <div className={styles.logoNames} aria-hidden="true">{(ritual ? ["A thought", "A reference", "A conversation", "A new perspective"] : ["Linear", "Arc", "Perplexity", "Figma", "Notion", "Stripe"]).map(name => <span key={name}>{name}</span>)}</div>
      </section>

      <section id="features" className={`${styles.section} ${styles.features}`} data-reveal aria-labelledby={`${prefix}-features`}>
        <div id={`${prefix}-features`}><SplitHeading first={ritual ? "You had a thought." : "You saved it."} second={ritual ? "Give it somewhere to go." : "Your agent never saw it."} /></div>
        <div className={styles.featureGrid}>
          <article className={`${styles.featureCard} ${styles.large}`}>
            <div className={styles.searchIllustration} aria-hidden="true">
              <div className={styles.imageMosaic}>{[0, 1, 2, 3, 4, 5].map(index => <MediaImage key={index} item={items[index % items.length]} decorative />)}</div>
              <div className={styles.miniSearch}><Search size={16} /><span>{ritual ? "Find the feeling…" : "hover"}</span><kbd>/</kbd></div>
            </div>
            <div className={styles.featureCopy}><h3>{ritual ? "Start with what’s on your mind" : "Find by interaction"}</h3><p>{ritual ? "An unfinished thought, a feeling, a question. You don’t need a perfect brief to begin." : "Type what moves: hover, scroll, drag. Every ref you saved, from X, Pinterest or any site, answers."}</p></div>
          </article>
          <article className={`${styles.featureCard} ${styles.large}`}>
            <div className={styles.saveIllustration} aria-hidden="true">{[2, 1, 0].map((item, index) => <div key={item} className={styles.saveCard}><MediaImage item={items[item]} decorative /><div><strong>{ritual ? ["A quiet beginning", "A study in movement", "The way the light falls"][index] : ["A workspace overview with tasks…", "An invoice activity timeline…", "A colour swatch picker…"][index]}</strong><span>{ritual ? "Added to your thinking" : "Saved from ◉ Web"}</span></div><small>{index === 2 ? "Just now" : "2m"}</small></div>)}</div>
            <div className={styles.featureCopy}><h3>{ritual ? "Bring something that moved you" : "Save from anywhere"}</h3><p>{ritual ? "A frame, a colour, a moment. Creative references can help you find words for the thing you want to make." : "Paste a link: the video, the author and the source come with it, filed in the collection you pick."}</p></div>
          </article>
          <article className={`${styles.featureCard} ${styles.small}`}><Layers className={styles.featureIcon} size={26} /><div className={styles.featureCopy}><h3>{ritual ? "Keep the thread" : "Private collections"}</h3><p>{ritual ? "A space to explore the connections between your ideas, instead of starting from a blank page each time." : "One per project, pattern or client. A ref can live in several."}</p></div></article>
          <article className={`${styles.featureCard} ${styles.small}`}><BadgeCheck className={styles.blueIcon} size={26} /><div className={styles.featureCopy}><h3>{ritual ? "Make it your own" : "Credited authors"}</h3><p>{ritual ? "Use a reference as a beginning. Find the point of view and the details that make the work yours." : "Every ref keeps its maker and links back to the original post."}</p></div></article>
          <article className={`${styles.featureCard} ${styles.small}`}><div className={styles.iconGroup} aria-hidden="true"><MessageCircle /><Sparkles /><FileText /></div><div className={styles.featureCopy}><h3>{ritual ? "Move toward the work" : "Read by your agent"}</h3><p>{ritual ? "From a question to a direction, from a direction to something you can start making." : "Claude Code, Codex and Cursor read your collections through MCP, then build from them."}</p></div></article>
        </div>
        <div className={styles.featureProof}><div className={styles.proofIcon} aria-hidden="true"><Bookmark size={25} /></div><p><strong>{ritual ? "A first look at Ritual" : "Refs from 56 makers, each credited"}</strong><span>{ritual ? "A workspace taking shape around the way creators think." : "Every ref links back to the person who made it."}</span></p><a className={styles.whiteButton} href={cta} onClick={ritual && onStart ? event => { event.preventDefault(); onStart(); } : undefined}>{ritual ? "Try the conversation" : "Join for free"}</a></div>
      </section>

      <section id="explore" className={styles.section} data-reveal aria-labelledby={`${prefix}-explore`}>
        <div id={`${prefix}-explore`}><SplitHeading first={ritual ? "Follow what draws you in." : "Browse by what moves."} second={ritual ? "A feeling, a frame, a new direction." : "Hover, scroll, drag, and more."} /></div>
        <div className={styles.categoryLayout}>
          <div className={styles.tabs} role="tablist" aria-label={ritual ? "Creative directions" : "Interactions"}>
            {categories.map((category, index) => <button key={category.label} ref={element => { tabRefs.current[index] = element; }} type="button" role="tab" aria-selected={selectedTab === index} aria-controls={`${prefix}-category-panel`} id={`${prefix}-tab-${index}`} tabIndex={selectedTab === index ? 0 : -1} onClick={() => setSelectedTab(index)} onKeyDown={event => navigateTabs(event, index)}>{category.label}{category.count !== undefined && <span>{category.count}</span>}</button>)}
          </div>
          <div className={styles.categoryPanel} role="tabpanel" id={`${prefix}-category-panel`} aria-labelledby={`${prefix}-tab-${selectedTab}`}>
            <div className={styles.categoryVisual} key={selectedTab}><MediaImage item={items[selectedCategory.image % items.length]} decorative />{!ritual && <div className={styles.sidePreview}><MediaImage item={items[(selectedCategory.image + 2) % items.length]} decorative /></div>}</div>
            <div className={styles.categoryCaption}><div><h3>{selectedCategory.label}</h3><p>{selectedCategory.description}</p></div>{ritual ? <button className={styles.darkButton} type="button" onClick={() => showItem(selectedCategory.image % items.length)}>Take a closer look<ArrowUpRight size={13} /></button> : <a className={styles.darkButton} href={selectedCategory.href}>Explore<ArrowUpRight size={13} /></a>}</div>
          </div>
        </div>
      </section>

      <section id="workflow" className={`${styles.section} ${styles.splitSection}`} data-reveal aria-labelledby={`${prefix}-workflow`}>
        <div className={styles.splitCopy}><div id={`${prefix}-workflow`}><SplitHeading first={ritual ? "Start a conversation." : "Ask for a screen."} second={ritual ? "See where the idea takes you." : "Get it in your taste."} /></div><a className={styles.darkButton} href={cta} onClick={ritual && onStart ? event => { event.preventDefault(); onStart(); } : undefined}>{ritual ? "Try Ritual" : "Join for free"}</a><div className={styles.workflowIcons} aria-label={ritual ? "Ideas, references, conversation" : "Works with coding agents"}><Sparkles /><MessageCircle /><Layers /><FolderOpen /><Link2 /></div></div>
        <div className={styles.agentDemo} aria-label={ritual ? "An illustrative creative conversation" : "An illustrative agent conversation"}><p className={styles.demoTag}>{ritual ? "A first look" : "Your references, in context"}</p><div className={styles.userBubble}>{ritual ? "I have a feeling for this film, but I don’t know where to begin." : "Show me the pickers I saved that make choosing feel effortless"}</div><div className={styles.assistantBubble}><Sparkles size={17} /><p>{ritual ? "Start with that feeling. What is one moment you can already picture?" : "Found 5 refs that make choosing feel effortless."}</p></div><div className={styles.demoReferences}>{[0, 1, 2].map(index => <MediaImage key={index} item={items[index]} decorative />)}</div><span className={styles.demoNote}>{ritual ? "Illustrative conversation" : "Searching your refs · Gathering insights"}</span></div>
      </section>

      <section className={`${styles.section} ${styles.splitSection} ${styles.reverse}`} data-reveal aria-labelledby={`${prefix}-context`}>
        <div className={styles.referenceStack} aria-hidden="true"><div className={styles.stackBack} /><div className={styles.stackMiddle} /><div className={styles.stackFront}><div className={styles.stackTitle}><span className={styles.roundMark}>{ritual ? "r." : "m."}</span><strong>{ritual ? "The shape of an idea" : "Max Podgorski"}</strong><small>{ritual ? "Creative studies" : "7 refs in the library"}</small></div><div className={styles.stackImages}>{[0, 1, 2].map(index => <MediaImage key={index} item={items[index]} decorative />)}</div></div></div>
        <div className={styles.splitCopy}><div id={`${prefix}-context`}><SplitHeading first={ritual ? "The references matter." : "Every ref credits"} second={ritual ? "So does your point of view." : "its maker."} /></div><p className={styles.sectionNote}>{ritual ? "Collect a feeling. Explore a connection. Make something that feels like you." : "56 makers, linked from every ref"}</p><a className={styles.darkButton} href={ritual ? "#explore" : "https://marked.dev/explore"}>{ritual ? "Explore the references" : "Explore refs"}</a></div>
      </section>

      <section className={styles.section} data-reveal aria-labelledby={`${prefix}-shelf`}>
        <div id={`${prefix}-shelf`}><SplitHeading first={ritual ? "A few places to begin." : "Refs that move."} second={ritual ? "Keep looking. Something will stay with you." : "Watch them before you save them."} /></div>
        <div className={styles.shelf} ref={shelf} onScroll={updateShelf} aria-label={ritual ? "Creative reference gallery" : "Reference gallery"}>
          {items.map((item, index) => <button className={styles.shelfCard} key={`${item.title}-${index}`} type="button" onClick={() => showItem(index)}><div className={styles.shelfImage}><MediaImage item={item} decorative /></div><h3>{item.title}</h3><p><span className={styles.creditDot} aria-hidden="true" />{item.credit}{!ritual && <BadgeCheck size={12} className={styles.blueIcon} />}</p></button>)}
        </div>
        <div className={styles.shelfControls}><button type="button" aria-label="Previous references" disabled={shelfPosition.start} onClick={() => moveShelf(-1)}><ChevronLeft size={18} /></button><button type="button" aria-label="Next references" disabled={shelfPosition.end} onClick={() => moveShelf(1)}><ChevronRight size={18} /></button></div>
      </section>

      <section id="faq" className={`${styles.section} ${styles.faq}`} data-reveal aria-labelledby={`${prefix}-faq`}>
        <div><div id={`${prefix}-faq`}><SplitHeading first="Questions," second="answered." /></div><p className={styles.sectionNote}>Something else? We read every message.</p><a className={styles.darkButton} href={contact}>Contact us</a></div>
        <div className={styles.faqList}>{faqs.map(([question, answer], index) => <div className={styles.faqItem} key={question}><h3><button type="button" id={`${prefix}-faq-question-${index}`} aria-expanded={openFaq === index} aria-controls={`${prefix}-faq-answer-${index}`} onClick={() => setOpenFaq(openFaq === index ? null : index)}>{question}<span aria-hidden="true">{openFaq === index ? "×" : "+"}</span></button></h3><div className={styles.faqAnswer} role="region" aria-labelledby={`${prefix}-faq-question-${index}`} id={`${prefix}-faq-answer-${index}`} hidden={openFaq !== index}><p>{answer}</p></div></div>)}</div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}><div className={styles.footerBrand}><a href={ritual ? "#main" : "https://marked.dev/"} className={styles.footerLogo}>{!ritual && <Bookmark size={17} />}{ritual ? "ritual." : "marked.dev"}</a><p>{ritual ? "Good work starts with a ritual." : "Give your agent taste."}</p><div className={styles.footerSymbols} aria-hidden="true"><Sparkles size={18} /><MessageCircle size={18} /><Layers size={18} /></div></div>
          <div><h3>{ritual ? "Ritual" : "Product"}</h3><a href={ritual ? "#features" : "https://marked.dev/explore"}>{ritual ? "A first look" : "Explore"}</a><a href={ritual ? "#explore" : "https://marked.dev/collections"}>{ritual ? "Creative references" : "Collections"}</a><a href={ritual ? "#workflow" : "https://marked.dev/mcp"}>{ritual ? "How to begin" : "MCP"}</a>{!ritual && <a href="https://marked.dev/changelog">Changelog</a>}</div>
          <div><h3>Company</h3><a href={ritual ? "https://rhetoric.so" : "https://marked.dev/manifesto"}>{ritual ? "Rhetoric" : "Manifesto"}</a>{!ritual && <a href="https://marked.dev/sponsor">Sponsor</a>}<a href={contact}>Contact</a><a href={ritual ? "mailto:contact@rhetoric.so?subject=Ritual%20feedback" : "mailto:contact@marked.dev?subject=Feedback"}>Give feedback</a></div>
          <div><h3>{ritual ? "More" : "Legal"}</h3>{ritual ? <><a href="#faq">Questions</a><a href="#main" onClick={onStart ? event => { event.preventDefault(); onStart(); } : undefined}>Try the conversation</a></> : <><a href="https://marked.dev/privacy">Privacy</a><a href="https://marked.dev/terms">Terms</a></>}</div>
        </div>
        <div className={styles.footerBottom}><span>{ritual ? <>Made by <a href="https://rhetoric.so">Rhetoric</a>.</> : <>Made with care by the design team at <a href="https://enobase.com/en">Eno</a>.</>}</span><span>{ritual ? "© 2026 Rhetoric Intelligence, Inc." : "Reference study · marked.dev"}</span></div>
      </footer>

      <dialog ref={dialog} className={styles.detailDialog} aria-labelledby={`${prefix}-detail-title`} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        <div className={styles.dialogSurface}><button className={styles.dialogClose} type="button" aria-label="Close reference" onClick={() => dialog.current?.close()}><X size={20} /></button><MediaImage item={items[selectedItem]} className={styles.dialogImage} /><div className={styles.dialogCopy}><p>{ritual ? "Creative reference · Illustrative image" : items[selectedItem].credit}</p><h2 id={`${prefix}-detail-title`}>{items[selectedItem].title}</h2><p>{items[selectedItem].detail}</p><a className={styles.darkButton} href={ritual ? "#main" : "https://marked.dev/explore"} onClick={event => { dialog.current?.close(); if (ritual && onStart) { event.preventDefault(); onStart(`Help me develop an idea inspired by ${items[selectedItem].title.toLowerCase()}`); } }}>{ritual ? "Start with this feeling" : "View the source library"}<ArrowUpRight size={14} /></a></div></div>
      </dialog>
    </div>
  );
}
