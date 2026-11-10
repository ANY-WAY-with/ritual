export interface CreatorExample {
  id: string;
  name: string;
  descriptor: string;
  mark: string;
  audience: string;
  voice: string;
  references: readonly string[];
  title: string;
  angle: string;
  opening: string;
  outline: readonly string[];
}

// Authored illustrative examples. These are not live model outputs or creator endorsements.
export const creatorExamples: readonly CreatorExample[] = [
  {
    id: "explainer", name: "The explainer", descriptor: "Make the complex click.", mark: "01",
    audience: "Curious people who want to understand", voice: "Clear. Structured. Evidence first.",
    references: ["An annotated interface", "My last explainer", "Questions from my audience"],
    title: "Different apps. The same feed?",
    angle: "Unpack the question through what we follow, what gets recommended, and the habits we bring to each app.",
    opening: "Three apps. Three promises of discovery. So why do I keep seeing the same things? Let’s break the question into what we follow, what gets recommended, and what we actually stop to watch.",
    outline: ["Start with a side-by-side observation", "Investigate the choices behind the feed", "Leave the audience with a useful experiment"],
  },
  {
    id: "visual", name: "The visual storyteller", descriptor: "Find the feeling in the frame.", mark: "02",
    audience: "People drawn to design and culture", voice: "Observant. Cinematic. Image led.",
    references: ["A collection of visual rhythms", "An opening from my last film", "The mood I want to explore"],
    title: "An internet that looks like itself.",
    angle: "Build a visual essay around repetition: the gestures, frames, and rhythms that make separate feeds start to feel familiar.",
    opening: "Swipe. A face. A room. A perfect little moment. Swipe again. Different people, familiar shapes. After a while, I stop noticing what I’m looking at—and start noticing how it all looks.",
    outline: ["Open with a rhythm of repeated gestures", "Find the small details that break the pattern", "End on a frame that feels unmistakably personal"],
  },
  {
    id: "writer", name: "The opinionated writer", descriptor: "Give the idea a point of view.", mark: "03",
    audience: "Readers who come for a perspective", voice: "Direct. Witty. A little sceptical.",
    references: ["An essay I keep returning to", "Notes in the margin", "The voice my readers recognise"],
    title: "The feed has a uniform.",
    angle: "Make a personal argument about the odd sameness of an online world that keeps promising to be made for you.",
    opening: "I opened three apps this morning and met the same personality in each. Mine, apparently. Recommended for me, selected for me, almost aggressively me. So why did it feel like everyone else’s internet?",
    outline: ["Lead with the contradiction", "Work through a specific personal experience", "Finish with a question worth arguing about"],
  },
];
