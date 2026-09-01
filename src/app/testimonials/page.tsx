import type { Metadata } from "next";
import {
  EditorialCta,
  EditorialPage,
  ReplaceableVisual,
} from "@/components/EditorialPage";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Honest feedback from the brands we have worked with. New testimonials are added as we receive them.",
};

export default function TestimonialsPage() {
  return (
    <EditorialPage
      eyebrow="THE WORD / 05"
      title={
        <>
          Good people
          <br />
          make good <em>work.</em>
        </>
      }
      intro="Honest feedback from the brands we have worked with. New testimonials are added as we receive them."
    >
      <section className="container-shell editorial-section">
        <Reveal>
          <div className="quote-stage">
            <ReplaceableVisual label="CLIENT STORY IMAGE" />
            <div className="quote-content">
              {testimonials.length ? (
                testimonials.map((item) => (
                  <blockquote key={item.author}>
                    <p>“{item.quote}”</p>
                    <footer>
                      {item.author}
                      <span>{item.role}</span>
                    </footer>
                  </blockquote>
                ))
              ) : (
                <blockquote>
                  <p>
                    “The best partnerships start with a shared ambition. This
                    space is reserved for the words of the people who helped us
                    make the work.”
                  </p>
                  <footer>
                    CLIENT TESTIMONIALS
                    <span>Coming as the stories are ready to share</span>
                  </footer>
                </blockquote>
              )}
            </div>
          </div>
        </Reveal>
      </section>

      <EditorialCta
        heading={
          <>
            Be the voice
            <br />
            of <em>good work.</em>
          </>
        }
        label="Make something together"
        kicker="A WORD FOR YOUR BRAND"
      />
    </EditorialPage>
  );
}