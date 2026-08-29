import Link from "next/link";
import { services } from "@/lib/services";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <section>
        <h1 className="text-3xl font-semibold">
          Influencer marketing that puts your brand in front of the right
          audience
        </h1>
        <p className="mt-3 max-w-2xl text-gray-700">
          We help brands reach the people who matter through paid media,
          creative content, and a clear, consistent identity. From first
          impression to repeat purchase, we build the pieces that make
          campaigns work.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded bg-black px-4 py-2 text-sm text-white"
        >
          Get in touch
        </Link>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Services</h2>
        <p className="mt-2 max-w-2xl text-gray-700">
          A focused set of capabilities to take a brand from unknown to
          unmissable. Explore the full list on the{" "}
          <Link href="/services" className="underline">
            services page
          </Link>
          .
        </p>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.slug}
              className="rounded border border-gray-200 p-4"
            >
              <h3 className="font-semibold">
                <Link href={`/services/${service.slug}`} className="underline">
                  {service.title}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                {service.shortDescription}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Work</h2>
        <p className="mt-2 max-w-2xl text-gray-700">
          A selection of recent projects. See the full index on the{" "}
          <Link href="/case-studies" className="underline">
            case studies page
          </Link>
          .
        </p>
        <div className="mt-4">
          <CaseStudies />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">What clients say</h2>
        <p className="mt-2 max-w-2xl text-gray-700">
          Kind words from the brands we work with. Read more on the{" "}
          <Link href="/testimonials" className="underline">
            testimonials page
          </Link>
          .
        </p>
        <div className="mt-4">
          <Testimonials />
        </div>
      </section>

      <section className="mt-12 rounded border border-gray-200 p-6">
        <h2 className="text-2xl font-semibold">Ready to get started?</h2>
        <p className="mt-2 max-w-2xl text-gray-700">
          Tell us about your brand and what you want to achieve. We&rsquo;ll
          figure out the right mix of services from there.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded bg-black px-4 py-2 text-sm text-white"
        >
          Contact us
        </Link>
      </section>
    </>
  );
}
