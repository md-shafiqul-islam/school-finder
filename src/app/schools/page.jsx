import { connectDB } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

export default async function AllSchoolsPage() {
  const db = await connectDB();
  const [schools] = await db.query("SELECT * FROM schools");
  await db.end();

  return (
    <section className="bg-background min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-primary-dark mb-12">
          Explore Schools
        </h1>

        {/* Schools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {schools.map((school) => (
            <div
              key={school.id}
              className="bg-card-bg shadow-md hover:shadow-xl rounded-2xl flex flex-col transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              {school.image ? (
                <div className="relative w-full h-48 rounded-t-2xl overflow-hidden">
                  <Image
                    src={school.image}
                    alt={school.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              ) : (
                <div className="w-full h-48 bg-gray-200 rounded-t-2xl flex items-center justify-center text-gray-500 font-medium">
                  No Image
                </div>
              )}

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold text-foreground-dark line-clamp-1">
                  {school.name}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-2 mt-2">
                  {school.address}, {school.city}
                </p>

                {/* View Details Button */}
                <div className="mt-auto">
                  <Link href={`/schools/${school.id}`}>
                    <button className="w-full cursor-pointer bg-accent text-foreground-dark py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-yellow-400 transition-all mt-4">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Schools Message */}
        {schools.length === 0 && (
          <p className="text-center text-gray-500 mt-12">
            No schools found. Be the first to{" "}
            <Link
              href="/addSchool"
              className="text-accent font-semibold hover:underline"
            >
              add a school
            </Link>
            !
          </p>
        )}
      </div>
    </section>
  );
}
