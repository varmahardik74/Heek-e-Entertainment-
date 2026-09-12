import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Influencer marketing and social media marketing for SaaS brands — creative thinking and digital execution to build visibility, engagement and stronger connections with the right audience.",
};

const sequence = ["Reach", "Relevance", "Trust", "Engagement"];

function InfluencerVisual() {
  return (
    <div className="svc-screen" aria-hidden="true">
      <span className="svc-screen-tag">DEMO / CREATOR POST CONCEPT</span>
      <div className="svc-post">
        <div className="svc-post-head">
          <span className="svc-avatar" />
          <div className="svc-lines">
            <span className="svc-line svc-line--lg" />
            <span className="svc-line svc-line--sm" />
          </div>
        </div>
        <div className="svc-post-art" />
        <div className="svc-post-copy">
          <span className="svc-line" />
          <span className="svc-line svc-line--sm" />
        </div>
        <div className="svc-post-meta">
          <span className="svc-dot" />
          <span className="svc-dot svc-dot--muted" />
          <span className="svc-dot svc-dot--muted" />
          <span className="svc-bar" />
        </div>
      </div>
      <div className="svc-mini">
        <span className="svc-line svc-line--lg" />
        <span className="svc-line" />
        <span className="svc-line svc-line--sm" />
      </div>
    </div>
  );
}

function SocialVisual() {
  return (
    <div className="svc-screen" aria-hidden="true">
      <span className="svc-screen-tag">DEMO / FEED + CALENDAR CONCEPT</span>
      <div className="svc-tiles">
        <div className="svc-tile svc-tile--cyan" />
        <div className="svc-tile svc-tile--yellow" />
        <div className="svc-tile svc-tile--paper" />
        <div className="svc-tile svc-tile--ring" />
      </div>
      <div className="svc-cal">
        <span className="svc-cal-day" />
        <span className="svc-cal-day svc-cal-day--on" />
        <span className="svc-cal-day" />
        <span className="svc-cal-day" />
        <span className="svc-cal-day" />
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main>
      {/* 1 — HERO */}
      <section className="svc-hero">
        <div className="svc-hero-grid" aria-hidden="true" />
        <div className="container-shell svc-hero-content">
          <Reveal>
            <p className="section-kicker accent-text">SERVICES / HEEK-E</p>
            <h1 className="svc-hero-title">
              Digital Marketing for <em>SaaS Brands</em>
            </h1>
            <p className="svc-hero-intro">
              Heek-E helps SaaS companies build stronger digital presence and
              reach the right audiences through focused influencer marketing and
              social media marketing.
            </p>
            <div className="svc-hero-meta" aria-hidden="true">
              <span>INFLUENCER MARKETING</span>
              <i />
              <span>SOCIAL MEDIA MARKETING</span>
              <i />
              <span>SAAS FOCUSED</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 — WHAT WE DO */}
      <section className="svc-do">
        <div className="container-shell">
          <Reveal>
            <div className="svc-do-head">
              <div>
                <p className="section-kicker">WHAT WE DO</p>
                <h2 className="section-title">What We Do</h2>
              </div>
              <p className="svc-do-copy">
                We focus on two areas where creative thinking and digital
                execution can help SaaS brands build visibility, engagement and
                stronger connections with their audience.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="svc-index-grid">
              {services.map((service) => (
                <a
                  key={service.slug}
                  href={`#${service.slug}`}
                  className="svc-index-card"
                >
                  <span className="svc-index-num">{service.number}</span>
                  <h3 className="svc-index-title">{service.title}</h3>
                  <p className="svc-index-hint">{service.positioning}</p>
                  <span className="svc-index-arrow" aria-hidden>
                    ↓
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 + 4 — THE TWO SERVICES */}
      {services.map((service, index) => (
        <section
          key={service.slug}
          id={service.slug}
          className="svc-service"
        >
          <div className="container-shell">
            <Reveal>
              <div
                className={`svc-service-grid ${
                  index % 2 === 1 ? "svc-service-grid--flip" : ""
                }`}
              >
                <div className="svc-service-visual">
                  {index === 0 ? <InfluencerVisual /> : <SocialVisual />}
                </div>
                <div className="svc-service-content">
                  <p className="svc-service-kicker">
                    SERVICE / {service.number}
                  </p>
                  <h2 className="svc-service-title">{service.title}</h2>
                  <p className="svc-service-positioning">
                    {service.positioning}
                  </p>
                  <p className="svc-service-desc">{service.description}</p>
                  <div className="svc-cap-list">
                    {service.areas.map((area, i) => (
                      <Reveal
                        className="svc-cap-row"
                        key={area.title}
                        delay={i * 60}
                      >
                        <span className="svc-cap-num">0{i + 1}</span>
                        <div>
                          <h3 className="svc-cap-title">{area.title}</h3>
                          <p className="svc-cap-desc">{area.description}</p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* 5 — BUILT AROUND THE SAAS AUDIENCE */}
      <section className="svc-approach">
        <div className="container-shell">
          <Reveal>
            <div className="svc-approach-head">
              <p className="section-kicker accent-text">APPROACH</p>
              <h2 className="section-title">
                Built Around <em>the SaaS Audience</em>
              </h2>
              <p className="svc-approach-copy">
                SaaS products often need more than broad visibility. They need
                to be understood, trusted and remembered by the right audience.
                Influencer marketing can introduce the brand through trusted
                voices, while social media creates a consistent space for the
                brand to communicate and engage.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <ol className="svc-sequence">
              {sequence.map((step, i) => (
                <li className="svc-seq-item" key={step}>
                  <span className="svc-seq-num">0{i + 1}</span>
                  <span className="svc-seq-word">{step}</span>
                  {i < sequence.length - 1 && (
                    <span className="svc-seq-arrow" aria-hidden>
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* 6 — FINAL CTA */}
      <section className="final-cta">
        <Reveal className="container-shell">
          <p className="section-kicker">NEXT STEP</p>
          <h2 className="display-heading">
            Ready to build your <em>next growth channel?</em>
          </h2>
          <p className="svc-cta-note">
            Tell us what you&apos;re working on, and let&apos;s explore where
            Heek-E can help.
          </p>
          <Link href="/contact" className="hero-cta">
            Start a conversation <span aria-hidden>↗</span>
          </Link>
        </Reveal>
      </section>
    </main>
  );
}