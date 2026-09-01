import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { EditorialPage } from "@/components/EditorialPage";

export const metadata: Metadata = {
  title: "Fulfillment Policy",
  description:
    "How Heek-E plans, delivers, and completes marketing engagements, including deliverables, timelines, and revisions.",
};

function Section({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="border-t border-border py-10">
      <p className="section-kicker accent-text">{kicker}</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[15px] leading-7 text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

function NeedsInfo({ children }: { children: ReactNode }) {
  return (
    <p className="rounded border border-dashed border-border bg-surface p-4 text-sm leading-6">
      <strong className="mb-1 block text-foreground">
        Information needed from Heek-E
      </strong>
      {children}
    </p>
  );
}

export default function FulfillmentPolicyPage() {
  return (
    <EditorialPage
      eyebrow="LEGAL / 03"
      title={
        <>
          The delivery
          <br />
          <em>side of the work.</em>
        </>
      }
      intro="This fulfillment policy explains how Heek-E plans, delivers, and completes marketing engagements. Specific commitments for an individual project are set out in its proposal."
    >
      <section className="container-shell editorial-section">
        <div className="max-w-3xl">
          <Section kicker="1. SCOPE" title="What this policy covers">
            <p>
              This policy covers the delivery and completion of Heek-E
              services, including the timelines, deliverables, and revisions
              that apply to an engagement. If anything in this policy differs
              from your proposal or written agreement, the proposal or
              agreement governs.
            </p>
          </Section>

          <Section kicker="2. PLANNING" title="How work is scoped">
            <p>
              Every engagement begins with understanding your brand, goals, and
              timeline. We then agree the scope, deliverables, and schedule in
              a tailored proposal before work begins.
            </p>
          </Section>

          <Section kicker="3. TIMELINES" title="Schedules">
            <p>
              Timelines are agreed as part of the proposal and depend on the
              scope of the work. We rely on timely feedback and approvals from
              you to keep those timelines on track.
            </p>
          </Section>

          <Section kicker="4. DELIVERY" title="How you receive your work">
            <p>
              Deliverables such as creative files, content, and campaign assets
              are normally delivered digitally through the channels agreed for
              the engagement. We confirm delivery arrangements in the proposal.
            </p>
          </Section>

          <Section kicker="5. REVISIONS" title="Feedback rounds">
            <p>
              Revision rounds, where included, are applied within the scope
              described at the start of the engagement. Requests beyond that
              scope are handled as a new piece of work.
            </p>
          </Section>

          <Section kicker="6. PAYMENTS & REFUNDS" title="Payments, refunds, cancellation">
            <NeedsInfo>
              Payment schedules, refund eligibility, and cancellation rules are
              set per engagement and should be confirmed by Heek-E. They have
              not been filled in here to avoid publishing unsupported details.
            </NeedsInfo>
          </Section>

          <Section kicker="7. CONTACT" title="Questions and support">
            <p>
              Questions about an engagement, its progress, or this policy can
              be sent to{" "}
              <a href="mailto:hello@heek-e.com" className="text-primary">
                hello@heek-e.com
              </a>{" "}
              or raised through the{" "}
              <Link href="/contact" className="text-primary">
                contact page
              </Link>
              .
            </p>
          </Section>
        </div>
      </section>
    </EditorialPage>
  );
}