"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is Pally?",
    answer:
      "Pally is a personal assistant that lives in iMessage. You text it like a sharp, capable friend, not a chatbot. It remembers what matters, follows up at the right time, researches things properly, reaches people, and quietly handles the busywork that would otherwise slip. The more you use it, the more personal and proactive it gets.",
  },
  {
    question: "Is Pally free?",
    answer:
      "Pally offers a free trial so you can experience it before committing. After that, a subscription covers full access to all features. Pricing details are available when you sign up.",
  },
  {
    question: "Do I need an iPhone?",
    answer:
      "Yes. Pally lives in iMessage, so an iPhone is required. It works through your existing Messages app — no additional app download needed.",
  },
  {
    question: "What does Pally connect to?",
    answer:
      "Pally connects to the tools you already use — Gmail, Calendar, Slack, WhatsApp, Notion, Linear, and more. You grant access once, and it uses those connections to take action on your behalf.",
  },
  {
    question: "Can Pally act for me?",
    answer:
      "Yes. Pally doesn't just surface information — it takes real action. It can send messages, book things, create tasks, draft replies, and follow up with people. It always keeps you informed about what it's doing.",
  },
  {
    question: "How is Pally different from a chatbot?",
    answer:
      "Chatbots respond to prompts. Pally builds a model of your life and acts proactively. It knows your context, remembers your preferences, notices what needs doing without being asked, and gets things done across your actual tools.",
  },
  {
    question: "Is Pally private?",
    answer:
      "Privacy is a core principle. Pally only accesses the accounts you explicitly connect, uses your data solely to serve you, and never sells or shares it. You can review and revoke access at any time.",
  },
  {
    question: "How do I get started?",
    answer:
      "Text Pally your number and it'll walk you through setup in a few minutes. Connect the tools you use, tell it a bit about your life, and you're good to go.",
  },
];

export function PallyFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="font-neue relative py-28">
      <div className="max-w-[820px] mx-auto px-6 relative z-10">
        {/* Left-aligned header */}
        <div className="mb-10">
          <p className="text-pally-blue text-[13px] font-semibold tracking-wide uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-[36px] md:text-[48px] font-medium text-pally-ink leading-[1.05] tracking-[-0.02em]">
            A few practical details.
          </h2>
        </div>

        {/* Accordion container */}
        <div className="bg-white rounded-2xl border border-pally-border overflow-hidden">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={cn(index !== 0 && "border-t border-pally-border")}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center py-5 px-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={cn(
                      "font-medium text-pally-ink text-[15px] leading-snug pr-4",
                      isOpen && "text-pally-ink"
                    )}
                  >
                    {item.question}
                  </span>
                  <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#f0f0f0] text-pally-ink">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-pally-muted text-[14px] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
