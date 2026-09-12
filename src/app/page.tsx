export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <nav className="bg-white border-b text-black">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

          <h1 className="text-2xl font-bold text-blue-600">
            CollegeWise
          </h1>

          <div className="flex gap-8">
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
      <section className="relative h-[520px] overflow-hidden">

        {/* Campus Image */}
        <img
          src="/campus image.png"
          alt="College campus"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-white/70"></div>


        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 h-full flex items-center">

          <div className="max-w-2xl">

            <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight">
              Find the Right College
              <span className="block text-blue-600">
                for Your Future
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-700 max-w-xl leading-8">
              Search colleges, compare them and find the best option
              for your education and career.
            </p>

            <a
              href="/colleges"
              className="inline-block mt-8 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700"
            >
              Explore Colleges →
            </a>

          </div>

        </div>

      </section>


      {/* Features */}
      <section className="max-w-7xl mx-auto px-8 py-16">

        <h2 className="text-3xl font-bold text-black text-center mb-10">
          What You Can Do
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          {/* Search */}
          <div className="bg-white p-8 rounded-xl shadow-sm border">

            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
              🔍
            </div>

            <h3 className="text-xl font-bold text-black mt-6">
              Search Colleges
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Find colleges based on location, fees and ratings.
            </p>

            <a
              href="/colleges"
              className="inline-block mt-6 text-blue-600 font-medium hover:underline"
            >
              Explore Colleges →
            </a>

          </div>


          {/* Compare */}
          <div className="bg-white p-8 rounded-xl shadow-sm border">

            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
              ⚖️
            </div>

            <h3 className="text-xl font-bold text-black mt-6">
              Compare Colleges
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Compare different colleges and check their details.
            </p>

            <a
              href="/compare"
              className="inline-block mt-6 text-blue-600 font-medium hover:underline"
            >
              Compare Colleges →
            </a>

          </div>


          {/* Predictor */}
          <div className="bg-white p-8 rounded-xl shadow-sm border">

            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
              🎓
            </div>

            <h3 className="text-xl font-bold text-black mt-6">
              College Predictor
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Get college suggestions based on your score.
            </p>

            <a
              href="/predictor"
              className="inline-block mt-6 text-blue-600 font-medium hover:underline"
            >
              Try Predictor →
            </a>

          </div>

        </div>

      </section>


      {/* Footer */}
      <footer className="bg-white border-t text-center py-8">

        <p className="text-gray-500">
          © 2026 CollegeWise
        </p>

      </footer>

    </main>
  );
}