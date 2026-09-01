import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import {
  EditorialCta,
  EditorialPage,
  ReplaceableVisual,
} from "@/components/EditorialPage";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "PPC advertising, poster design, content creation, video marketing, and brand identity — a focused set of capabilities for brands ready to be remembered.",
};

export default function ServicesPage() {
  return (
    <EditorialPage
      eyebrow="CAPABILITIES / 01"
      title={
        <>
          The work behind
          <br />
          <em>the wow.</em>
        </>
      }
      intro="A focused set of capabilities to take a brand from unknown to unmissable. Choose the piece you need, or bring us the whole brief."
    >
      <Reveal className="container-shell editorial-section">
        <div className="service-index">
          <div className="service-list editorial-service-list">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-row"
              >
                <span className="service-number">0{index + 1}</span>
                <div>
                  <h2>{service.title}</h2>
                  <p>{service.shortDescription}</p>
                </div>
                <span className="service-arrow" aria-hidden>
                  ↗
                </span>
              </Link>
            ))}
          </div>
          <aside className="service-rail">
            <ReplaceableVisual label="THE FULL STACK / VISUAL" />
            <div className="service-rail-note">
              <p className="section-kicker accent-text">
                BRIEF THE PIECE, OR THE WHOLE STACK
              </p>
              <p>
                Start with a single capability or bring the full brief. Every
                engagement is scoped to your brand, channels, and timeline —
                then confirmed in a proposal.
              </p>
              <Link href="/contact" className="text-link">
                Scope a service <span aria-hidden>↗</span>
              </Link>
            </div>
          </aside>
        </div>
      </Reveal>

      <EditorialCta
        heading={
          <>
            Pick the piece.
            <br />
            We&apos;ll <em>shape the plan.</em>
          </>
        }
        label="Scope a service"
        kicker="ONE CAPABILITY OR THE WHOLE STACK"
      />
    </EditorialPage>
  );
}