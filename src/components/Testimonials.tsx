import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  if (testimonials.length === 0) {
    return <p className="text-gray-600">Testimonials are coming soon.</p>;
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <li
          key={index}
          className="rounded border border-gray-200 p-4"
        >
          <blockquote className="text-sm text-gray-700">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <p className="mt-2 text-sm font-medium">{testimonial.author}</p>
          <p className="text-xs text-gray-500">{testimonial.role}</p>
        </li>
      ))}
    </ul>
  );
}
