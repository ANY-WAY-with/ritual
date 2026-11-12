import type { FloatingMedia, HeroPreset } from "@/components/hero/floating-stage";

export type Niche = "fashion" | "science" | "beauty";

interface CreatorReference {
  title: string;
  source: string;
  type: string;
  url: string;
  image: string;
  takeaway: string;
}

export interface NicheWorkspace {
  id: Niche;
  label: string;
  creator: string;
  description: string;
  references: readonly CreatorReference[];
  media: readonly FloatingMedia[];
  presets: readonly HeroPreset[];
  brief: string;
  title: string;
  angle: string;
  opening: string;
  outline: readonly string[];
}

const image = (name: string) => `/brand/ritual/workspaces/${name}.webp`;

function workspace(data: Omit<NicheWorkspace, "media" | "presets">): NicheWorkspace {
  const media = data.references.map((reference) => ({ src: reference.image, kind: "image" as const }));
  const presets = data.references.map((reference, index) => ({
    phrase: reference.title,
    media: [...media.slice(index), ...media.slice(0, index)],
  }));
  return { ...data, media, presets };
}

export const workspaces: Record<Niche, NicheWorkspace> = {
  fashion: workspace({
    id: "fashion",
    label: "Fashion",
    creator: "Fashion creator",
    description: "Runway moments, designer news, and the formats fashion creators use to turn a look into a story.",
    references: [
      {
        title: "Spring–Summer 2027 runway",
        source: "CHANEL",
        type: "Runway film",
        url: "https://www.youtube.com/watch?v=weNFjc2l1Hw",
        image: image("runway"),
        takeaway: "Find a silhouette you can pull apart on camera.",
      },
      {
        title: "Resort fashion week roast",
        source: "HauteLeMode",
        type: "Creator video",
        url: "https://www.youtube.com/watch?v=U_e4pvIc9c8",
        image: image("fashion-creator"),
        takeaway: "Study how each look gives the commentary a new beat.",
      },
      {
        title: "Matthieu Blazy at Chanel",
        source: "CHANEL",
        type: "Designer context",
        url: "https://www.chanel.com/au/fashion/event/chanel-fashion-new-artistic-director/",
        image: image("blazy-show"),
        takeaway: "Give the styling choice a little history.",
      },
    ],
    brief: "Turn one runway detail into a short my audience can try.",
    title: "One runway move, three ways to wear it.",
    angle: "Use the show as your first frame. Then take the proportions into your own wardrobe, keeping the principle and changing the clothes.",
    opening: "Pause on that silhouette. The thing that makes it work is where the volume sits. Here’s how I’d try it with three pieces I already own.",
    outline: ["Freeze the runway frame and point out the proportion.", "Show three versions with pieces from your wardrobe.", "End with a side-by-side so the difference reads instantly."],
  }),
  science: workspace({
    id: "science",
    label: "Science",
    creator: "Science explainer",
    description: "Curiosity-led videos, real experiments, and space imagery for making big ideas easy to see.",
    references: [
      {
        title: "What If the Earth Stopped Spinning?",
        source: "Vsauce",
        type: "Creator video",
        url: "https://www.youtube.com/watch?v=K0-GxoJ_Pcg",
        image: image("vsauce"),
        takeaway: "Start with a question viewers want to answer themselves.",
      },
      {
        title: "Starship’s fifth flight test",
        source: "SpaceX",
        type: "Launch footage",
        url: "https://www.youtube.com/watch?v=hI9HQfCAw64",
        image: image("starship"),
        takeaway: "Use liftoff to make the question feel concrete.",
      },
      {
        title: "Apollo 17’s Blue Marble",
        source: "NASA",
        type: "Archive image",
        url: "https://www.nasa.gov/image-article/apollo-17-blue-marble/",
        image: image("earth"),
        takeaway: "Pull back from the launchpad to the planet.",
      },
    ],
    brief: "Explain why rockets often launch east in 60 seconds.",
    title: "The head start a rocket gets from Earth.",
    angle: "Start with a launch, then use a spinning globe to show how an eastward launch can benefit from Earth’s rotation.",
    opening: "This rocket is already moving before the engines fire. The launchpad looks still, but the whole planet is turning under it.",
    outline: ["Open on a real liftoff and ask where the motion starts.", "Mark the pad on a spinning globe and trace an eastward launch.", "Explain why the target orbit matters more than any one rule."],
  }),
  beauty: workspace({
    id: "beauty",
    label: "Beauty",
    creator: "Beauty creator",
    description: "Product details, shade references, and honest wear tests you can turn into your own review.",
    references: [
      {
        title: "Soft’Lit foundation in 420",
        source: "Fenty Beauty",
        type: "Product",
        url: "https://fentybeauty.com/products/softlit-naturally-luminous-longwear-foundation-420",
        image: image("foundation"),
        takeaway: "Show the shade and texture before you apply it.",
      },
      {
        title: "Seven-hour Soft’Lit wear test",
        source: "Fayy Lenee",
        type: "Creator video",
        url: "https://www.youtube.com/watch?v=OxGT-dDOTUI",
        image: image("wear-test"),
        takeaway: "Use a later check-in to give the first impression a payoff.",
      },
      {
        title: "Soft’Lit makeup review and wear test",
        source: "Valentina",
        type: "Creator video",
        url: "https://www.youtube.com/watch?v=sP3jbtAwyDc",
        image: image("beauty-review"),
        takeaway: "Compare how a second reviewer frames coverage and finish.",
      },
    ],
    brief: "Plan a foundation review that shows how it actually wears.",
    title: "Same foundation. Same light. Eight hours apart.",
    angle: "Shoot the application and evening check-in by the same window. Use close-ups to show where the finish held and where it changed.",
    opening: "Here’s one pump at nine in the morning. I’ll come back to this exact window at five so you can see what actually changed.",
    outline: ["Swatch the shade and show one side applied.", "Film an unfiltered check-in in the same light.", "Give a verdict for your skin type and routine."],
  }),
};
