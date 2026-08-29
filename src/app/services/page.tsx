import Link from "next/link";
import { services } from "@/lib/services";

export default function ServicesPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold">Services</h1>
      <p className="mt-3 max-w-2xl text-gray-700">
        We offer a focused set of marketing capabilities, each available on its
        own or combined into a broader campaign. Explore each service to see
        what&rsquo;s included.
      </p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <li key={service.slug} className="rounded border border-gray-200 p-4">
            <h2 className="text-xl font-semibold">
              <Link href={`/services/${service.slug}`} className="underline">
                {service.title}
              </Link>
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              {service.shortDescription}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
