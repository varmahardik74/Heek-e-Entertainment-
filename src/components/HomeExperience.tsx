"use client";

import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const faqs = [
  ["What does Heek-E specialize in?", "Heek-E is a creative digital marketing agency focused on helping SaaS brands grow through influencer marketing and social media marketing."],
  ["Do you only work with SaaS companies?", "Our primary focus is SaaS brands, allowing us to build strategies around the needs of SaaS businesses and their audiences."],
  ["What does your influencer marketing service include?", "It can include creator research, creator selection, campaign planning, coordination and execution, depending on the engagement."],
  ["Can you help us develop our social media strategy?", "Yes. Social media engagements can cover strategy, content direction, platform management and audience engagement."],
  ["How do you decide which creators are right for a SaaS brand?", "We consider factors such as audience relevance, content fit, creator credibility and alignment with the campaign objective."],
  ["Can you work with an existing marketing team?", "Yes. Heek-E can work alongside an existing internal team or support specific marketing requirements."],
  ["How does a new project with Heek-E begin?", "We first understand the brand, goals, audience and current marketing situation before defining the appropriate approach."],
  ["How do we get started?", "Start a conversation with us through the contact form and tell us about your brand, goals and what you're looking to achieve."],
];

const whatIsPoints = [
  ["01", "SaaS Focus", "We work with the unique challenges of SaaS companies and the audiences they need to reach."],
  ["02", "Marketing Expertise", "Our team brings experience across digital marketing, helping brands turn ideas into focused marketing initiatives."],
  ["03", "Creative Thinking", "We combine creative ideas with strategic marketing to help SaaS brands communicate, engage and grow."],
];

const whyPoints = [
  ["01", "Built Around SaaS", "Our focus on SaaS gives us a clearer understanding of the products, audiences and marketing challenges involved."],
  ["02", "Experienced Professionals", "Work with marketing professionals who bring practical digital marketing experience to every engagement."],
  ["03", "Creative Meets Strategy", "We bring creative thinking and strategic direction together instead of treating them as separate parts of marketing."],
];

const servicesShowcase = [
  {
    number: "01",
    title: "Influencer Marketing",
    tag: "CREATOR-LED GROWTH",
    accent: "cyan",
    description:
      "Connect your SaaS brand with relevant creators and voices who already have the attention of your target audience. From identifying the right creators to planning and executing campaigns, we build influencer programs around your brand and objectives.",
  },
  {
    number: "02",
    title: "Social Media Marketing",
    tag: "CONSISTENT PRESENCE",
    accent: "yellow",
    description:
      "Turn your social presence into a consistent brand experience. We help SaaS companies shape their social strategy, create engaging content and build stronger connections with the people they want to reach.",
  },
];

const wallImages = [
  { src: "/testimonials/testimonial-01.png", width: 2378, height: 1760, alt: "Client testimonial photograph 1" },
  { src: "/testimonials/testimonial-02.png", width: 2438, height: 1728, alt: "Client testimonial photograph 2" },
  { src: "/testimonials/testimonial-03.png", width: 2610, height: 1632, alt: "Client testimonial photograph 3" },
  { src: "/testimonials/testimonial-04.png", width: 2460, height: 1728, alt: "Client testimonial photograph 4" },
  { src: "/testimonials/testimonial-05.png", width: 2246, height: 1888, alt: "Client testimonial photograph 5" },
  { src: "/testimonials/testimonial-06.png", width: 2432, height: 1742, alt: "Client testimonial photograph 6" },
  { src: "/testimonials/testimonial-07.png", width: 2432, height: 1760, alt: "Client testimonial photograph 7" },
  { src: "/testimonials/testimonial-08.png", width: 2238, height: 1888, alt: "Client testimonial photograph 8" },
];

export default function HomeExperience() {
  return (
    <div className="home-page">
      <section className="hero-stage">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="container-shell hero-content">
          <p className="eyebrow hero-eyebrow">HEEK-E / INFLUENCER MARKETING</p>
          <h1 className="hero-title">
            <span className="hero-line hero-line-yellow">The Influencer Marketing</span>
            <span className="hero-line hero-line-cyan">Agency For SaaS Brands</span>
          </h1>
          <p className="hero-copy">
            We help SaaS brands build effective influencer marketing programs
            that connect them with the right audiences and support sustainable
            growth.
          </p>
          <Link href="/contact" className="hero-cta">
            Get in touch <span aria-hidden>↗</span>
          </Link>
          <div className="hero-sketch" aria-hidden="true">
            <span>✧</span>
            <i />
            <b>◌</b>
            <small>
              people
              <br />
              power
            </small>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          SCROLL TO EXPLORE <span>↓</span>
        </div>
      </section>

      <section className="whatis-section">
        <Reveal className="container-shell">
          <div className="whatis-head">
            <div>
              <p className="section-kicker accent-text">WHAT IS HEEK-E?</p>
              <h2 className="section-title">
                Creative Marketing <em>Built for SaaS.</em>
              </h2>
            </div>
            <p className="whatis-intro">
              Heek-E is a creative digital marketing agency focused on helping
              SaaS brands build their presence, connect with the right
              audiences, and scale through smarter digital marketing.
            </p>
          </div>
        </Reveal>
        <div className="container-shell">
          <div className="whatis-grid">
            {whatIsPoints.map(([number, title, body], index) => (
              <Reveal className="whatis-point" key={number} delay={index * 100}>
                <span className="point-number">{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="do-section">
        <div className="container-shell">
          <Reveal>
            <div className="split-heading do-heading">
              <div>
                <p className="section-kicker">WHAT WE DO</p>
                <h2 className="section-title">
                  Two Disciplines. <em>One Growth Focus.</em>
                </h2>
              </div>
              <p>
                We focus on the digital channels where SaaS brands can build
                visibility, credibility and meaningful connections with their
                audience.
              </p>
            </div>
          </Reveal>
          <div className="service-showcase">
            {servicesShowcase.map((service, index) => (
              <Reveal
                className={`showcase-card showcase-card--${service.accent}`}
                key={service.number}
                delay={index * 120}
              >
                <div className="showcase-visual" aria-hidden="true">
                  <span className="showcase-number">{service.number}</span>
                  <span className="showcase-glyph" />
                  <span className="showcase-watermark">{service.title}</span>
                </div>
                <div className="showcase-body">
                  <p className="showcase-tag">{service.tag}</p>
                  <h3>{service.title}</h3>
                  <p className="showcase-desc">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link href="/services" className="text-link do-link">
              Explore Our Services <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="why-section">
        <Reveal className="container-shell">
          <div className="why-head">
            <p className="section-kicker accent-text">WHY HEEK-E?</p>
            <h2 className="section-title">Why Heek-E?</h2>
            <p className="why-intro">
              SaaS marketing needs more than visibility. It needs the right
              audience, the right message and the right execution.
            </p>
          </div>
        </Reveal>
        <div className="container-shell">
          <div className="why-grid">
            {whyPoints.map(([number, title, body], index) => (
              <Reveal className="why-point" key={number} delay={index * 100}>
                <span className="point-number">{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="clients-section">
        <div className="container-shell">
          <Reveal>
            <div className="clients-head">
              <p className="section-kicker">OUR CLIENTS</p>
              <h2 className="section-title">What Our Clients Say</h2>
              <p className="clients-intro">
                A few words from the people we&apos;ve worked with.
              </p>
            </div>
          </Reveal>
          <div className="client-wall">
            {wallImages.map((image, index) => (
              <Reveal
                className="wall-cell"
                key={image.src}
                delay={(index % 4) * 80}
              >
                <figure className="wall-figure">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 767px) 92vw, (max-width: 1023px) 47vw, 30vw"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <Reveal className="container-shell faq-layout">
          <div>
            <p className="section-kicker accent-text">FAQ</p>
            <h2 className="display-heading">
              Let&apos;s make it
              <br />
              <em>simple.</em>
            </h2>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <span aria-hidden>+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="final-cta">
        <Reveal className="container-shell">
          <p className="section-kicker">READY WHEN YOU ARE</p>
          <h2 className="display-heading">
            Have a good problem?
            <br />
            <em>Let&apos;s solve it well.</em>
          </h2>
          <Link href="/contact" className="hero-cta">
            Start a conversation <span aria-hidden>↗</span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}