import Link from "next/link";
import { notFound } from "next/navigation";
import { getService } from "@/lib/services";

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

  return (
    <section>
      <h1 className="text-3xl font-semibold">{service.title}</h1>
      <p className="mt-3 max-w-2xl text-gray-700">{service.description}</p>

      <h2 className="mt-8 text-2xl font-semibold">What&rsquo;s included</h2>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
        {service.includes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <Link
        href="/contact"
        className="mt-8 inline-block rounded bg-black px-4 py-2 text-sm text-white"
      >
        Enquire about {service.title}
      </Link>
    </section>
  );
}
