import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { EditorialPage } from "@/components/EditorialPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Heek-E handles the information provided through this website, including contact details and enquiries.",
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

export default function PrivacyPolicyPage() {
  return (
    <EditorialPage
      eyebrow="LEGAL / 01"
      title={
        <>
          Your data.
          <br />
          <em>Handled clearly.</em>
        </>
      }
      intro="Heek-E is an independent marketing agency. This page explains how we handle the information you provide through this website."
    >
      <section className="container-shell editorial-section">
        <div className="max-w-3xl">
          <Section kicker="1. OVERVIEW" title="What this policy covers">
            <p>
              This policy explains how Heek-E (“we”, “us”) handles information
              provided through this website. It applies to the details you
              share with us on the site, including through our contact form.
            </p>
            <p>
              We do not publish details about practices we do not have. Where a
              legally accurate policy needs specific information that has not
              been provided to us, that section is clearly marked as needing
              confirmation rather than completed with invented details.
            </p>
          </Section>

          <Section kicker="2. INFORMATION YOU PROVIDE" title="What we collect">
            <p>
              When you use our contact form, we collect the details you choose
              to provide. The form asks for your name, your email address, an
              optional company name, and your message.
            </p>
          </Section>

          <Section kicker="3. HOW WE USE IT" title="Why we keep it">
            <p>
              We use the information you provide to respond to your enquiry,
              prepare a proposal, and follow up on work you have discussed with
              us. We keep this type of communication for a reasonable period
              while it is relevant.
            </p>
            <p>
              We do not sell personal information. We share information only as
              needed to operate the website and carry out our work.
            </p>
            <NeedsInfo>
              Specific retention periods, storage locations, and any
              third-party data processors Heek-E uses should be confirmed by
              Heek-E before launch and added here.
            </NeedsInfo>
          </Section>

          <Section kicker="4. COOKIES & ANALYTICS" title="Cookies and analytics">
            <NeedsInfo>
              Whether this website uses cookies or analytics tools, which ones
              they are, and how you can control them should be confirmed by
              Heek-E and added here.
            </NeedsInfo>
          </Section>

          <Section kicker="5. YOUR RIGHTS" title="Access, correction, deletion">
            <p>
              You can contact us at{" "}
              <a href="mailto:hello@heek-e.com" className="text-primary">
                hello@heek-e.com
              </a>{" "}
              to request access to, correction, or deletion of the information
              you have provided to us. We will respond to reasonable requests.
            </p>
          </Section>

          <Section kicker="6. LEGAL ENTITY & CONTACT" title="About us and contacting us">
            <NeedsInfo>
              The legal name, registered address, and jurisdiction of the Heek-E
              entity should be confirmed by Heek-E and added here. Until then,
              you can reach us by email at{" "}
              <a href="mailto:hello@heek-e.com" className="text-primary">
                hello@heek-e.com
              </a>{" "}
              or through the{" "}
              <Link href="/contact" className="text-primary">
                contact page
              </Link>
              .
            </NeedsInfo>
          </Section>
        </div>
      </section>
    </EditorialPage>
  );
}