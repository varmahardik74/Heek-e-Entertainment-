import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { EditorialPage } from "@/components/EditorialPage";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "The terms and conditions for using the Heek-E website and engaging our marketing services.",
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

export default function TermsPage() {
  return (
    <EditorialPage
      eyebrow="LEGAL / 02"
      title={
        <>
          How we work
          <br />
          <em>together.</em>
        </>
      }
      intro="These terms apply to your use of the Heek-E website and to our marketing services. Where a proposal or separate written agreement is in place, that document takes precedence."
    >
      <section className="container-shell editorial-section">
        <div className="max-w-3xl">
          <Section kicker="1. OUR SERVICES" title="What we do">
            <p>
              Heek-E provides marketing services for ambitious brands. Our
              current services include PPC advertising, poster design, content
              creation, video marketing, and brand identity. Each engagement is
              scoped individually around your goals, channels, and timeline.
            </p>
          </Section>

          <Section kicker="2. PROPOSALS & SCOPE" title="Agreeing the work">
            <p>
              We do not publish fixed price lists or one-size-fits-all tiers.
              Before work begins, we confirm the scope and approach in a
              proposal specific to your engagement. That proposal, together
              with these terms, forms the basis of the agreement between us.
            </p>
          </Section>

          <Section kicker="3. CLIENT RESPONSIBILITIES" title="What we need from you">
            <p>
              To deliver good work, we rely on accurate, timely information
              from you, clear feedback and approvals, and access to the brand
              assets and context relevant to the engagement.
            </p>
          </Section>

          <Section kicker="4. DELIVERABLES & REVISIONS" title="The work itself">
            <p>
              Deliverables are agreed in the proposal. Where revision rounds
              are included, they apply within the scope described at the start
              of the engagement. Anything beyond that scope is covered by a new
              proposal.
            </p>
          </Section>

          <Section kicker="5. FEES & PAYMENTS" title="Fees, payments and refunds">
            <NeedsInfo>
              Payment terms, fees, invoicing, and any refund or cancellation
              rules are set per engagement and should be confirmed by Heek-E.
              They have not been filled in here to avoid publishing unsupported
              details.
            </NeedsInfo>
          </Section>

          <Section kicker="6. INTELLECTUAL PROPERTY" title="Ownership of work">
            <p>
              Ownership of the work we deliver is addressed in the proposal or
              written agreement for the engagement. To the extent those
              documents are silent, please confirm the intended arrangements
              with us in writing.
            </p>
            <NeedsInfo>
              The specific ownership and licensing terms Heek-E offers should
              be confirmed and documented here before launch.
            </NeedsInfo>
          </Section>

          <Section kicker="7. LIABILITY" title="Limitation of liability">
            <p>
              To the extent permitted by law, our liability in connection with
              a project is limited as set out in the relevant proposal or
              written agreement, and we are not liable for indirect or
              consequential losses.
            </p>
          </Section>

          <Section kicker="8. CHANGES TO THESE TERMS" title="Updates">
            <p>
              We may update these terms from time to time. We will post the
              current version on this page.
            </p>
          </Section>

          <Section kicker="9. GOVERNING LAW" title="Applicable law">
            <NeedsInfo>
              The governing law and jurisdiction for these terms should be
              confirmed by Heek-E and added here.
            </NeedsInfo>
          </Section>

          <Section kicker="10. CONTACT" title="Getting in touch">
            <p>
              Questions about these terms can be sent to{" "}
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