export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <nav className="bg-white border-b text-black">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold text-blue-600">
            CollegeWise
          </h1>

          <div className="flex gap-6">
            <a href="/" className="text-blue-600">
              Home
            </a>

            <a href="/colleges" className="hover:text-blue-600">
              Colleges
            </a>

            <a href="/compare" className="hover:text-blue-600">
              Compare
            </a>

            <a href="/predictor" className="hover:text-blue-600">
              Predictor
            </a>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">

        <h2 className="text-4xl font-bold text-black">
          Find the Right College for Your Future
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Search colleges, compare them and find the best option
          for your education and career.
        </p>

        <a
          href="/colleges"
          className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Explore Colleges
        </a>

      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-2xl font-bold text-center mb-8 text-black">
          What You Can Do
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-black">
              Search Colleges
            </h3>

            <p className="mt-3 text-gray-600">
              Find colleges based on location, fees and ratings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-black">
              Compare Colleges
            </h3>

            <p className="mt-3 text-gray-600">
              Compare different colleges and check their details.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-black">
              College Predictor
            </h3>

            <p className="mt-3 text-gray-600">
              Get college suggestions based on your score.
            </p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-white border-t text-center py-6">
        <p className="text-gray-500">
          © 2026 CollegeWise
        </p>
      </footer>

    </main>
  );
}