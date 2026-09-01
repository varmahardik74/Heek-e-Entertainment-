import type { Metadata } from "next";
import {
  EditorialCta,
  EditorialPage,
  ReplaceableVisual,
} from "@/components/EditorialPage";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "A small, focused team bringing strategy, creative, and distribution together for brands with somewhere meaningful to go.",
};

export default function AboutPage() {
  return (
    <EditorialPage
      eyebrow="ABOUT HEEK-E / 02"
      title={
        <>
          Good work starts
          <br />
          with a <em>point of view.</em>
        </>
      }
      intro="We are a small, focused team bringing strategy, creative, and distribution together for brands with somewhere meaningful to go."
    >
      <Reveal className="about-grid container-shell editorial-section">
        <ReplaceableVisual label="TEAM / BRAND IMAGE" />
        <div className="editorial-copy">
          <p className="section-kicker">OUR STORY</p>
          <h2>
            Build the signal.
            <br />
            <em>Keep the human.</em>
          </h2>
          <p>
            We started with a simple belief: great marketing should be clear,
            consistent, and built around the audience — not the algorithm of
            the week.
          </p>
          <p>
            Over time we pulled together the disciplines brands actually need
            under one roof. The result is a partner that can see the big
            picture and still care about the last detail.
          </p>
          <p>
            Every engagement starts with understanding your brand and your
            goals, then building a plan that fits. No inflated promises. No
            jargon for its own sake.
          </p>
        </div>
      </Reveal>

      <Reveal className="container-shell editorial-section">
        <div className="about-head">
          <p className="section-kicker accent-text">THE STACK</p>
          <h2 className="display-heading">
            Three parts.
            <br />
            One <em>signal.</em>
          </h2>
          <p>
            We bring the disciplines brands actually need under one roof — so
            the big picture and the last detail live in the same plan.
          </p>
        </div>
        <div className="stack-grid">
          <div className="stack-item">
            <span>01 / STRATEGY</span>
            <h3>Direction before volume.</h3>
            <p>
              Audience, positioning, and the plan you can hold onto — before
              anything gets made.
            </p>
          </div>
          <div className="stack-item">
            <span>02 / CREATIVE</span>
            <h3>Made to be remembered.</h3>
            <p>
              Ideas and craft that work because they are built around the
              audience, not the algorithm of the week.
            </p>
          </div>
          <div className="stack-item">
            <span>03 / DISTRIBUTION</span>
            <h3>In motion, in the right places.</h3>
            <p>
              Campaigns and channels that put the message where the right
              people are paying attention.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="word-marquee" delay={60}>
        <div className="logo-marquee">
          <div className="logo-track">
            <span>STRATEGY</span>
            <span>CREATIVE</span>
            <span>DISTRIBUTION</span>
            <span>RESULTS</span>
            <span>STRATEGY</span>
            <span>CREATIVE</span>
            <span>DISTRIBUTION</span>
            <span>RESULTS</span>
          </div>
        </div>
      </Reveal>

      <Reveal className="container-shell editorial-section">
        <div className="about-head">
          <p className="section-kicker accent-text">WHAT WE STAND FOR</p>
          <h2 className="display-heading">
            Small, but not
            <br />
            <em>small-minded.</em>
          </h2>
        </div>
        <div className="values-row">
          <div className="value-item">
            <span>CLEAR</span>
            <h3>No jargon for its own sake.</h3>
            <p>
              Marketing that is clear and consistent, built around the audience
              it is for.
            </p>
          </div>
          <div className="value-item">
            <span>HUMAN</span>
            <h3>The signal, without losing the human.</h3>
            <p>
              Craft that still cares about the last detail — no inflated
              promises.
            </p>
          </div>
          <div className="value-item">
            <span>FOCUSED</span>
            <h3>Small enough to care.</h3>
            <p>
              A focused team that can see the big picture without giving up on
              the finish.
            </p>
          </div>
        </div>
      </Reveal>

      <EditorialCta
        heading={
          <>
            Let&apos;s build it
            <br />
            <em>together.</em>
          </>
        }
        label="Introduce yourself"
        kicker="GOOD PARTNERSHIPS START SMALL"
      />
    </EditorialPage>
  );
}