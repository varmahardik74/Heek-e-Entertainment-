import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/services";
import {
  EditorialCta,
  EditorialPage,
  ReplaceableVisual,
} from "@/components/EditorialPage";
import { Reveal } from "@/components/Reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service" };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const serviceNumber = String(
    services.findIndex((item) => item.slug === service.slug) + 1,
  ).padStart(2, "0");

  return (
    <EditorialPage
      eyebrow={`CAPABILITIES / ${serviceNumber}`}
      title={<>{service.title}</>}
      intro={service.description}
    >
      <Reveal className="about-grid container-shell editorial-section">
        <div>
          <p className="section-kicker accent-text">WHAT&apos;S INCLUDED</p>
          <h2 className="display-heading mt-5">
            Scoped around
            <br />
            <em>your goals.</em>
          </h2>
          <p className="mt-8 max-w-md text-lg leading-8 text-muted-foreground">
            Every {service.title.toLowerCase()} engagement is scoped around
            your goals, channels, and timeline. The items below are typical of
            what is included, confirmed in your proposal.
          </p>
          <div className="principles">
            {service.includes.map((item, index) => (
              <div className="principle" key={item}>
                <span>0{index + 1}</span>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="transition-transform duration-300 hover:-translate-y-1">
          <div className="service-visual">
            <div className="service-visual-bar">
              <span>CAPABILITY / {serviceNumber}</span>
              <b aria-hidden>✦</b>
            </div>
            <ReplaceableVisual
              label={`${service.title.toUpperCase()} / KEY VISUAL`}
            />
            <div className="service-visual-bar">
              <span>{service.shortDescription}</span>
              <b aria-hidden>↗</b>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="container-shell editorial-section" delay={80}>
        <div className="process-strip">
          <div className="process-step">
            <span>01</span>
            <b>Understand</b>
            <small>
              Goals, audience, and channels — the brief before the creative.
            </small>
          </div>
          <div className="process-step">
            <span>02</span>
            <b>Make</b>
            <small>
              Creative and content built to earn attention, not just fill
              space.
            </small>
          </div>
          <div className="process-step">
            <span>03</span>
            <b>Distribute</b>
            <small>
              Placed where the right people will actually see it.
            </small>
          </div>
          <div className="process-step">
            <span>04</span>
            <b>Refine</b>
            <small>
              Report, learn, and improve against your growth goals.
            </small>
          </div>
        </div>
      </Reveal>

      <EditorialCta
        heading={
          <>
            Bring the brief.
            <br />
            <em>We&apos;ll do the rest.</em>
          </>
        }
        label={`Enquire about ${service.title}`}
        kicker="NEXT STEP"
      />
    </EditorialPage>
  );
}