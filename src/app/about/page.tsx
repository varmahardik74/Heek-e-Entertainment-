import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Heek-E is a creative digital marketing and influencer marketing agency focused on helping SaaS brands connect with the right audiences through creator-led and digital marketing strategies.",
};

const SIGNAL_BARS = [34, 58, 42, 72, 50, 64, 38, 78, 46, 66, 54, 30];

export default function AboutPage() {
  return (
    <main>
      <section className="ab-hero">
        <div className="ab-hero-grid" aria-hidden="true" />
        <div className="container-shell ab-hero-content">
          <p className="section-kicker">ABOUT HEEK-E</p>
          <h1 className="ab-hero-title">
            Building better distribution
            <br />
            for <em>SaaS brands.</em>
          </h1>
          <p className="ab-hero-intro">
            Heek-E is a creative digital marketing and influencer marketing
            agency focused on helping SaaS brands connect with the right
            audiences through creator-led and digital marketing strategies.
          </p>
          <Link href="/services" className="text-link">
            Explore our services <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="ab-who">
        <div className="container-shell">
          <div className="ab-who-grid">
            <div className="ab-who-copy">
              <Reveal>
                <p className="section-kicker accent-text">WHO IS HEEK-E?</p>
                <h2 className="section-title ab-who-title">
                  Built Around the SaaS Growth Challenge
                </h2>
                <p className="ab-who-text">
                  Heek-E works with SaaS and technology-focused brands that
                  need more than visibility. The agency focuses on building
                  marketing programs that connect products with relevant
                  audiences and turn creator and digital channels into
                  repeatable growth opportunities.
                </p>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="ab-orb-frame" aria-hidden="true">
                <div className="ab-orb">
                  <span className="ab-orb-ring ab-orb-ring--one" />
                  <span className="ab-orb-ring ab-orb-ring--two" />
                  <span className="ab-orb-node ab-orb-node--a" />
                  <span className="ab-orb-node ab-orb-node--b" />
                  <span className="ab-orb-node ab-orb-node--c" />
                  <span className="ab-orb-node ab-orb-node--d" />
                  <b className="ab-orb-core" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="ab-beliefs">
        <div className="container-shell">
          <div className="ab-beliefs-head">
            <Reveal>
              <p className="section-kicker accent-text">WHAT WE BELIEVE</p>
              <h2 className="section-title">What We Believe</h2>
            </Reveal>
          </div>
          <div className="ab-principle-grid">
            <Reveal className="ab-principle">
              <span className="ab-principle-num">01</span>
              <h3 className="ab-principle-title">Relevance Over Reach</h3>
              <p className="ab-principle-text">
                The right audience matters more than simply reaching a larger
                one.
              </p>
            </Reveal>
            <Reveal className="ab-principle" delay={90}>
              <span className="ab-principle-num">02</span>
              <h3 className="ab-principle-title">Creators as Distribution</h3>
              <p className="ab-principle-text">
                Influencer marketing can become more than a campaign; it can
                become a repeatable channel for reaching and engaging SaaS
                audiences.
              </p>
            </Reveal>
            <Reveal className="ab-principle" delay={180}>
              <span className="ab-principle-num">03</span>
              <h3 className="ab-principle-title">Strategy Backed by Data</h3>
              <p className="ab-principle-text">
                Creative ideas become more useful when they are connected to
                performance signals and business objectives.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="ab-channel">
        <div className="container-shell">
          <div className="ab-channel-head">
            <Reveal>
              <p className="section-kicker accent-text">
                HOW WE THINK ABOUT MARKETING
              </p>
              <h2 className="ab-channel-title">
                Make the <em>Channel</em> Work.
              </h2>
            </Reveal>
          </div>
          <div className="ab-channel-grid">
            <Reveal delay={80}>
              <p className="ab-channel-copy">
                We believe effective digital marketing sits at the intersection
                of audience understanding, creative execution and measurement.
                The goal isn&apos;t simply to produce campaigns. It&apos;s to
                build marketing programs that can be understood, tested,
                improved and scaled.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="ab-signal" aria-hidden="true">
                {SIGNAL_BARS.map((h, i) => (
                  <i key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="ab-people">
        <div className="container-shell">
          <div className="ab-people-grid">
            <Reveal className="ab-people-visual-wrap">
              <div className="ab-people-visual" aria-hidden="true">
                <i className="ab-member-line ab-member-line--one" />
                <i className="ab-member-line ab-member-line--two" />
                <i className="ab-member-line ab-member-line--three" />
                <span className="ab-member ab-member--one" />
                <span className="ab-member ab-member--two" />
                <span className="ab-member ab-member--three" />
                <b className="ab-member-core" />
              </div>
            </Reveal>
            <div className="ab-people-copy">
              <Reveal delay={100}>
                <p className="section-kicker accent-text">
                  THE PEOPLE BEHIND HEEK-E
                </p>
                <h2 className="section-title ab-people-title">
                  The People Behind Heek-E
                </h2>
                <p className="ab-people-statement">
                  Marketing experience, creative thinking, and a focus on
                  execution.
                </p>
                <p className="ab-people-text">
                  Heek-E is shaped by a small group of marketers and creatives
                  who care about craft, clarity and follow-through. Specific
                  team profiles will be added here as details are confirmed.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="ab-diff">
        <div className="container-shell">
          <div className="ab-diff-head">
            <Reveal>
              <p className="section-kicker">WHAT MAKES HEEK-E DIFFERENT</p>
              <h2 className="section-title">What Makes Heek-E Different</h2>
            </Reveal>
          </div>
          <div className="ab-diff-grid">
            <Reveal className="ab-diff-item">
              <span className="ab-diff-num">01</span>
              <h3 className="ab-diff-title">Focused</h3>
              <p className="ab-diff-text">
                Built around SaaS and technology-led businesses.
              </p>
            </Reveal>
            <Reveal className="ab-diff-item" delay={90}>
              <span className="ab-diff-num">02</span>
              <h3 className="ab-diff-title">Collaborative</h3>
              <p className="ab-diff-text">
                Marketing works better when the agency and client operate as
                partners.
              </p>
            </Reveal>
            <Reveal className="ab-diff-item" delay={180}>
              <span className="ab-diff-num">03</span>
              <h3 className="ab-diff-title">Measurable</h3>
              <p className="ab-diff-text">
                Campaign thinking should connect creative activity with
                meaningful performance signals.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container-shell">
          <Reveal>
            <p className="section-kicker">READY WHEN YOU ARE</p>
            <h2 className="display-heading">
              Start a <em>conversation.</em>
            </h2>
            <Link href="/contact" className="hero-cta">
              Start a conversation <span aria-hidden>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}