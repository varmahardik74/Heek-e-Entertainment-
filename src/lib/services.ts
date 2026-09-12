export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  includes: string[];
};

export const services: Service[] = [
  {
    slug: "ppc-advertising",
    title: "PPC Advertising",
    shortDescription:
      "Targeted paid campaigns across search and social to put your offers in front of ready-to-buy audiences.",
    description:
      "We plan, launch, and manage pay-per-click campaigns across search engines and social platforms. This includes audience research, ad creative, bid management, and ongoing optimization to improve reach and return over time.",
    includes: [
      "Campaign strategy and audience targeting",
      "Ad creative and copywriting",
      "Bid management and budget pacing",
      "Performance reporting and optimization",
    ],
  },
  {
    slug: "poster-design",
    title: "Poster Design",
    shortDescription:
      "Eye-catching poster and print-ready artwork for events, launches, and in-store promotion.",
    description:
      "From concept to print-ready files, we design posters that communicate your message clearly and look great at any size.",
    includes: [
      "Custom poster concepts",
      "Print-ready file delivery",
      "Brand-aligned visual design",
      "Revision rounds",
    ],
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    shortDescription:
      "Scroll-stopping social content — images, captions, and posts — built for your channels.",
    description:
      "We produce on-brand content for your social channels, including static posts, short-form copy, and content calendars.",
    includes: [
      "Social post design",
      "Caption and copywriting",
      "Content calendars",
      "Channel-specific formatting",
    ],
  },
  {
    slug: "video-marketing",
    title: "Video Marketing",
    shortDescription:
      "Short-form and long-form video built to explain, promote, and convert.",
    description:
      "We concept, script, and produce video content for ads, social, and your website — from quick cuts to longer brand stories.",
    includes: [
      "Video concepts and scripts",
      "Editing and motion graphics",
      "Platform-ready exports",
      "Thumbnail and title design",
    ],
  },
  {
    slug: "brand-identity",
    title: "Brand Identity",
    shortDescription:
      "Logos, color systems, and guidelines that make your brand instantly recognizable.",
    description:
      "We build brand identities from the ground up — or refresh existing ones — with logos, palettes, typography, and a usable style guide.",
    includes: [
      "Logo design",
      "Color and typography systems",
      "Brand guidelines",
      "Asset kits",
    ],
  },
];
