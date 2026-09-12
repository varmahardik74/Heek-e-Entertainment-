export type ServiceArea = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  positioning: string;
  description: string;
  areas: ServiceArea[];
};

export const services: Service[] = [
  {
    slug: "influencer-marketing",
    number: "01",
    title: "Influencer Marketing",
    positioning:
      "Turn trusted voices into a growth channel for your SaaS brand.",
    description:
      "We help SaaS brands build influencer marketing programs around the creators, audiences and objectives that matter to them. Our work can span creator discovery, audience and content-fit assessment, campaign planning, outreach and coordination, campaign execution, and performance review.",
    areas: [
      {
        title: "Creator Discovery",
        description:
          "Identify creators whose audience, content and positioning align with the SaaS brand.",
      },
      {
        title: "Audience & Content Fit",
        description:
          "Assess relevance beyond follower count, including audience alignment, content style and credibility.",
      },
      {
        title: "Campaign Strategy",
        description:
          "Define the campaign direction, objectives, messaging and creator approach.",
      },
      {
        title: "Outreach & Coordination",
        description:
          "Coordinate communication, deliverables, timelines and campaign requirements.",
      },
      {
        title: "Campaign Execution",
        description:
          "Support the rollout of creator partnerships and campaign content.",
      },
      {
        title: "Performance Review",
        description:
          "Review campaign activity and available performance signals to understand what worked and where to improve.",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    number: "02",
    title: "Social Media Marketing",
    positioning:
      "Build a social presence that gives your SaaS brand something meaningful to say.",
    description:
      "We help SaaS companies build a consistent and purposeful social presence through strategy, content direction and ongoing management. The focus is on creating content that fits the brand, reaches the right audience and gives the team a clearer way to manage and improve its social channels.",
    areas: [
      {
        title: "Social Strategy",
        description:
          "Define the role of social media, priority platforms, audience and communication direction.",
      },
      {
        title: "Content Planning",
        description:
          "Develop content themes, formats and publishing plans around the brand's goals.",
      },
      {
        title: "Content Direction",
        description:
          "Shape the messaging, creative direction and presentation of social content.",
      },
      {
        title: "Social Management",
        description:
          "Maintain consistency across selected social channels and publishing workflows.",
      },
      {
        title: "Audience Engagement",
        description:
          "Support meaningful interaction and ongoing communication with the audience.",
      },
      {
        title: "Performance Optimisation",
        description:
          "Review content performance and use those signals to refine future activity.",
      },
    ],
  },
];