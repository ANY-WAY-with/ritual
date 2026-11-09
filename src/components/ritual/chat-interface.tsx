"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import { ArrowUp, ArrowUpRight, Check, Copy, MessageCircle, Plus, Square, X } from "lucide-react";
import styles from "./chat-interface.module.css";

interface Message { id: number; role: "user" | "assistant"; content: string }
interface ChatContextValue { openChat: (prompt?: string) => void }
const ChatContext = createContext<ChatContextValue | null>(null);
export function useRitualChat() {
  const value = useContext(ChatContext);
  if (!value) throw new Error("Chat controls require RitualChatProvider");
  return value;
}
const starters = ["Help me develop an idea", "Turn a reference into a direction", "Plan my next video"];

function sampleReply(prompt: string) {
  if (/plan|video|outline/i.test(prompt)) return "Let’s give your next piece a simple shape.\n\n1. The opening: one moment that makes someone curious.\n2. The middle: three things you want them to discover.\n3. The ending: the thought you want them to leave with.\n\nWho is this for, and what’s the one thing you want to say?";
  if (/reference|image|mood|direction/i.test(prompt)) return "Let’s start with what caught your eye.\n\nWhat is it about the reference: the light, the pacing, the feeling, or the story? Pick one quality to keep and one to change. That gives us a direction of your own.\n\nTell me what you’re making and what you like about the reference.";
  return "Let’s find the interesting part of that idea.\n\nStart with three things: who it’s for, what you’re curious about, and the feeling you want to leave behind. We can use those to shape a premise, an opening, and a next step.\n\nWhat part of the idea keeps coming back to you?";
}

function Composer({ onSend, compact = false, busy = false, onStop }: { onSend: (value: string) => void; compact?: boolean; busy?: boolean; onStop?: () => void }) {
  const [value, setValue] = useState("");
  const [tools, setTools] = useState(false);
  const input = useRef<HTMLTextAreaElement>(null);
  const submit = (event?: FormEvent) => {
    event?.preventDefault();
    if (!value.trim() || busy) return;
    onSend(value.trim());
    setValue("");
    setTools(false);
  };
  return (
    <form className={`${styles.composer} ${compact ? styles.compact : ""}`} onSubmit={submit}>
      <div className={styles.toolWrap} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setTools(false); }}>
        <button type="button" className={styles.toolButton} aria-label="Prompt starters" aria-expanded={tools} onClick={() => setTools(open => !open)}><Plus size={20} /></button>
        {tools && <div className={styles.tools}>
          <p>Start somewhere</p>
          {starters.map(prompt => <button key={prompt} type="button" onClick={() => { setValue(prompt); setTools(false); input.current?.focus(); }}>{prompt}<ArrowUpRight size={14} /></button>)}
        </div>}
      </div>
      <textarea ref={input} rows={1} maxLength={4000} value={value} aria-label={compact ? "Message Ritual" : "Ask Ritual"} placeholder={compact ? "Keep the conversation going…" : "What would you like to create?"} onChange={event => setValue(event.target.value)} onKeyDown={event => {
        if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) { event.preventDefault(); submit(); }
        if (event.key === "Escape") setTools(false);
      }} />
      {busy ? <button className={styles.send} type="button" aria-label="Stop sample response" onClick={onStop}><Square size={13} fill="currentColor" /></button> : <button className={styles.send} type="submit" aria-label="Send message" disabled={!value.trim()}><ArrowUp size={19} /></button>}
    </form>
  );
}

export function HeroChatComposer() {
  const { openChat } = useRitualChat();
  return <div className={styles.heroComposer}><Composer onSend={openChat} /><p className={styles.heroHint}>A little thought can become something.</p></div>;
}

export function ChatTrigger({ children, className }: { children: ReactNode; className?: string }) {
  const { openChat } = useRitualChat();
  return <button type="button" className={className} onClick={() => openChat()}>{children}</button>;
}

export function RitualChatProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState<number | null>(null);
  const [conversation, setConversation] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const transcript = useRef<HTMLDivElement>(null);
  const sequence = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const working = useRef(false);
  const stop = useCallback(() => { if (timer.current) clearTimeout(timer.current); timer.current = null; working.current = false; setBusy(false); }, []);
  const send = useCallback((prompt: string) => {
    if (!prompt.trim() || working.current) return;
    working.current = true;
    const userId = ++sequence.current;
    setMessages(current => [...current, { id: userId, role: "user", content: prompt }]);
    setBusy(true);
    timer.current = setTimeout(() => {
      const assistantId = ++sequence.current;
      setMessages(current => [...current, { id: assistantId, role: "assistant", content: sampleReply(prompt) }]);
      working.current = false;
      setBusy(false);
      timer.current = null;
    }, 650);
  }, []);
  const openChat = useCallback((prompt?: string) => { setOpen(true); if (prompt) send(prompt); }, [send]);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  useEffect(() => {
    const node = dialog.current;
    if (open && !node?.open) { node?.showModal(); node?.querySelector("textarea")?.focus(); }
    else if (!open && node?.open) node.close();
  }, [open]);
  useEffect(() => {
    const node = transcript.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [messages, busy]);
  const context = useMemo(() => ({ openChat }), [openChat]);
  return (
    <ChatContext.Provider value={context}>
      {children}
      <dialog ref={dialog} className={styles.dialog} aria-labelledby="chat-title" onCancel={() => setOpen(false)} onClose={() => setOpen(false)} onClick={event => { if (event.target === event.currentTarget) setOpen(false); }}>
        <div className={styles.chatPanel}>
          <header className={styles.chatHeader}>
            <div><h2 id="chat-title">ritual<span>.</span></h2><span className={styles.previewBadge}>Interface preview</span></div>
            <div className={styles.headerActions}><button type="button" onClick={() => { stop(); setMessages([]); setCopied(null); setConversation(value => value + 1); }} aria-label="New conversation"><Plus size={16} /><span>New chat</span></button><button type="button" onClick={() => setOpen(false)} aria-label="Close chat"><X size={19} /></button></div>
          </header>
          <div ref={transcript} className={styles.transcript} role="log" aria-live="polite" aria-label="Conversation" tabIndex={0}>
            {messages.length === 0 ? <div className={styles.empty}>
              <MessageCircle size={28} strokeWidth={1.4} />
              <h3>What’s on your mind?</h3>
              <p>An idea, a reference, a rough beginning.<br />Start wherever you are.</p>
              <div className={styles.starters}>{starters.map(prompt => <button key={prompt} type="button" onClick={() => send(prompt)}>{prompt}<ArrowUpRight size={15} /></button>)}</div>
            </div> : messages.map(message => <article key={message.id} className={message.role === "user" ? styles.userMessage : styles.assistantMessage}>
              {message.role === "assistant" && <div className={styles.messageLabel}>Ritual <span>Sample reply</span></div>}
              <p>{message.content}</p>
              {message.role === "assistant" && <button className={styles.copy} type="button" aria-label={copied === message.id ? "Response copied" : "Copy response"} onClick={async () => { try { await navigator.clipboard.writeText(message.content); setCopied(message.id); } catch { setCopied(null); } }}>{copied === message.id ? <Check size={14} /> : <Copy size={14} />}{copied === message.id ? "Copied" : "Copy"}</button>}
            </article>)}
            {busy && <p className={styles.loading} role="status"><span /> Loading sample reply…</p>}
          </div>
          <div className={styles.chatBottom}><Composer key={conversation} compact busy={busy} onSend={send} onStop={stop} /><p>Demo conversation · no AI connected · messages stay in this tab</p></div>
        </div>
      </dialog>
    </ChatContext.Provider>
  );
}
