import Image from "next/image";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  name: string;
  handle: string;
  avatar: string;
}

const QUOTES: Testimonial[] = [
  {
    quote:
      "I captain a five-a-side team of 14 who never reply. Now I just ask who's in for Thursday and Pally chases the stragglers itself.",
    name: "Marcus Bell",
    handle: "Captains the five-a-side",
    avatar: "marcus",
  },
  {
    quote:
      "Every Sunday I text 'what am I forgetting?' and it surfaces the two or three things buried across WhatsApp and email I'd have genuinely dropped.",
    name: "Grace Lin",
    handle: "Founder, two under five",
    avatar: "grace",
  },
  {
    quote:
      "Pally dug the Q3 deck out of my Drive, drafted the email to the client, and just waited for me to say send. Saved me an hour I didn't have.",
    name: "Tom Wallace",
    handle: "Account exec",
    avatar: "tom",
  },
  {
    quote:
      "Booked the whole family holiday — flights, a villa with a pool, and car hire, all in one thread while I was making the kids' dinner.",
    name: "Priya Desai",
    handle: "Mum of three",
    avatar: "priya",
  },
  {
    quote:
      "Our group chat spent four days arguing about where to eat. I forwarded the lot to Pally and it booked the one place everyone had agreed on.",
    name: "Sofia Reyes",
    handle: "Referees the group chat",
    avatar: "sofia",
  },
  {
    quote:
      "Came back from two weeks off to 600 emails. Pally pointed me at the four that mattered and had three replies already drafted.",
    name: "Mark Sutton",
    handle: "Solicitor, allergic to email",
    avatar: "mark",
  },
  {
    quote:
      "It quietly takes notes in my meetings, and by the time I'm out the follow-ups are drafted and the action points are sitting in Notion.",
    name: "Layla Hassan",
    handle: "Back-to-back all day",
    avatar: "layla",
  },
  {
    quote:
      "It flagged my sister's birthday days out, found a gift she'd love, and ordered it the second I said go. First year I wasn't late.",
    name: "Arjun Nair",
    handle: "Big family, worse memory",
    avatar: "arjun",
  },
  {
    quote:
      "My calendar used to run me. Now I tell Pally what the week needs to look like and it rearranges everything without a single back-and-forth.",
    name: "Bianca Torres",
    handle: "Runs her own studio",
    avatar: "bianca",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="mb-5 break-inside-avoid bg-white border border-pally-border rounded-2xl shadow-sm p-5 text-left">
      <p className="text-sm text-pally-ink leading-relaxed mb-4">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-2.5">
        <Image
          src={`/pally/images/${testimonial.avatar}-80.webp`}
          alt={testimonial.name}
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-medium text-sm text-pally-ink leading-tight">
            {testimonial.name}
          </p>
          <p className="text-xs text-pally-muted leading-tight mt-0.5">
            {testimonial.handle}
          </p>
        </div>
      </div>
    </div>
  );
}

export function PallyTestimonials() {
  return (
    <section className={cn("font-neue relative py-28 text-center")}>
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <h2 className="text-[44px] md:text-[72px] font-medium text-pally-ink leading-[1.0] tracking-[-0.02em]">
          People who let Pally run their week.
        </h2>

        <div className="columns-1 md:columns-3 gap-5 mt-14">
          {QUOTES.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
