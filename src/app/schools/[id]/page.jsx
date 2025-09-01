import Image from "next/image";
import Link from "next/link";
import { connectDB } from "@/lib/db";

const getSchool = async (id) => {
  const db = await connectDB();
  const [result] = await db.query("SELECT * FROM schools WHERE id = ?", [id]);
  await db.end();

  if (!result[0]) {
    throw new Error("School not found");
  }

  return result[0];
};

export default async function SchoolDetailPage({ params }) {
  const { id } = params;
  const school = await getSchool(id);

  return (
    <section className="bg-background min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/schools"
            className="text-primary-dark font-semibold hover:underline flex items-center gap-2"
          >
            ← Back
          </Link>
        </div>

        {/* School Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark">
            {school.name}
          </h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            {school.city}, {school.state || "N/A"}
          </p>
        </div>

        {/* Image */}
        {school.image ? (
          <div className="w-full h-64 md:h-80 relative mb-8 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={school.image}
              alt={school.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        ) : (
          <div className="w-full h-64 md:h-80 bg-gray-200 rounded-2xl flex items-center justify-center mb-8 text-gray-500 font-medium shadow">
            No Image Available
          </div>
        )}

        {/* School Details */}
        <div className="bg-card-bg shadow-lg rounded-2xl p-6 space-y-4">
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Address:</span>
            <span className="text-gray-600">{school.address}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">City:</span>
            <span className="text-gray-600">{school.city}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">State:</span>
            <span className="text-gray-600">{school.state || "N/A"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Contact:</span>
            <span className="text-gray-600">{school.contact}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Email:</span>
            <span className="text-gray-600">{school.email_id}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
