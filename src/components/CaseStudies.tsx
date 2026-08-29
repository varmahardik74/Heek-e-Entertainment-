import { caseStudies } from "@/lib/case-studies";

export default function CaseStudies() {
  if (caseStudies.length === 0) {
    return <p className="text-gray-600">Case studies are coming soon.</p>;
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {caseStudies.map((caseStudy) => (
        <li
          key={caseStudy.slug}
          className="rounded border border-gray-200 p-4"
        >
          <h3 className="font-semibold">{caseStudy.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{caseStudy.summary}</p>
        </li>
      ))}
    </ul>
  );
}
