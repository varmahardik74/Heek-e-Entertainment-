import type { Metadata } from "next";
import {
  EditorialCta,
  EditorialPage,
  ReplaceableVisual,
} from "@/components/EditorialPage";
import { Reveal } from "@/components/Reveal";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "A growing index of work we are proud of. Selected case studies are being prepared for launch.",
};

export default function CaseStudiesPage() {
  return (
    <EditorialPage
      eyebrow="SELECTED WORK / 04"
      title={
        <>
          Ideas that
          <br />
          <em>move markets.</em>
        </>
      }
      intro="A growing index of work we are proud of. New projects are added as they are completed. Nothing here is invented — when it appears, it is real."
    >
      <section className="container-shell editorial-section">
        {caseStudies.length ? (
          <Reveal>
            <div className="editorial-cards">
              {caseStudies.map((study) => (
                <article className="editorial-card" key={study.slug}>
                  <ReplaceableVisual label="CASE STUDY IMAGE" />
                  <p className="section-kicker">{study.slug}</p>
                  <h2>{study.title}</h2>
                  <p>{study.summary}</p>
                </article>
              ))}
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <div className="cs-grid">
              <ReplaceableVisual label="CASE STUDY / 01 / RESERVED" />
              <div className="cs-note">
                <div>
                  <p className="section-kicker accent-text">NO INVENTED WORK</p>
                  <h3>
                    We would rather show nothing
                    <br />
                    than fake a result.
                  </h3>
                </div>
                <p>
                  This index is reserved for real client work — the strategy,
                  the thinking, and the outcomes. It grows as projects complete
                  and details are ready to share.
                </p>
              </div>
            </div>
            <div className="cs-track">
              <div className="cs-slot">
                <span>SLOT 01 / CASE STUDY</span>
                <b>RESERVED</b>
              </div>
              <div className="cs-slot">
                <span>SLOT 02 / CAMPAIGN</span>
                <b>RESERVED</b>
              </div>
              <div className="cs-slot">
                <span>SLOT 03 / PROJECT</span>
                <b>RESERVED</b>
              </div>
            </div>
          </Reveal>
        )}
      </section>

      <EditorialCta
        heading={
          <>
            Your work could
            <br />
            <em>be the next entry.</em>
          </>
        }
        label="Start a project"
        kicker="THE INDEX IS GROWING"
      />
    </EditorialPage>
  );
}