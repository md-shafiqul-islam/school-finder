// components/Hero.jsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Smart School Management Made Easy
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-100">
            Register, manage, and track schools efficiently with our platform.
          </p>
          <Link
            href="/addSchool"
            className="bg-accent text-foreground-dark px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-yellow-400 transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative w-full min-h-[250px] md:min-h-[380px]">
          <Image
            src="/assets/hero_school.jpg"
            alt="School illustration"
            fill
            className="rounded-lg object-cover shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
