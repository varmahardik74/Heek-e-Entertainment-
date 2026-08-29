import Link from "next/link";

export default function PricingPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold">Pricing</h1>
      <p className="mt-3 max-w-2xl text-gray-700">
        Every brand is different, so we don&rsquo;t publish fixed price lists or
        one-size-fits-all tiers. Instead, we scope each engagement around your
        goals, channels, and timeline.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">
        Book a call for custom pricing
      </h2>
      <p className="mt-3 max-w-2xl text-gray-700">
        Tell us what you&rsquo;re working on and we&rsquo;ll put together a
        tailored proposal. There&rsquo;s no obligation &mdash; just a
        conversation about what fits.
      </p>
      <Link
        href="/contact"
        className="mt-4 inline-block rounded bg-black px-4 py-2 text-sm text-white"
      >
        Book a call
      </Link>
    </section>
  );
}
