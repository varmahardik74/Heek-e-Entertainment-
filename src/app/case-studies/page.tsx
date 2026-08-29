import CaseStudies from "@/components/CaseStudies";

export default function CaseStudiesPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold">Case Studies</h1>
      <p className="mt-3 max-w-2xl text-gray-700">
        A growing index of work we&rsquo;re proud of. New projects are added as
        they&rsquo;re completed.
      </p>
      <div className="mt-6">
        <CaseStudies />
      </div>
    </section>
  );
}
