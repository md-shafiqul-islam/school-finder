// components/Features.jsx
export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-foreground-dark">
          Features We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card-bg p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-2 text-primary-dark">
              School Profiles
            </h3>
            <p className="text-gray-600">
              Add and manage complete school details with ease.
            </p>
          </div>
          <div className="bg-card-bg p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-2 text-primary-dark">
              Image Upload
            </h3>
            <p className="text-gray-600">
              Store school logos and images securely in the cloud.
            </p>
          </div>
          <div className="bg-card-bg p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-2 text-primary-dark">
              Quick Access
            </h3>
            <p className="text-gray-600">
              Search and filter schools by name, city, or contact details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
