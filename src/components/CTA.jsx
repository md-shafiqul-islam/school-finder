// components/CTA.jsx
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-dark/90 to-primary-dark/90 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Register Your School?
      </h2>
      <p className="mb-6 text-gray-700">Get started in just a few clicks.</p>
      <Link
        href="/addSchool"
        className="bg-accent text-foreground-dark px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-yellow-400 transition-all"
      >
        Add School
      </Link>
    </section>
  );
}
