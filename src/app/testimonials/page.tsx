import Testimonials from "@/components/Testimonials";

export default function TestimonialsPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold">Testimonials</h1>
      <p className="mt-3 max-w-2xl text-gray-700">
        Honest feedback from the brands we&rsquo;ve worked with. New
        testimonials are added as we receive them.
      </p>
      <div className="mt-6">
        <Testimonials />
      </div>
    </section>
  );
}
