"use client";

import { useState } from "react";

const colleges = [
  {
    id: 1,
    name: "IIT Bombay",
    location: "Mumbai, Maharashtra",
    fees: "₹2.5 Lakhs",
    rating: 4.8,
    placement: "₹25 LPA",
  },
  {
    id: 2,
    name: "IIT Delhi",
    location: "New Delhi, Delhi",
    fees: "₹2.5 Lakhs",
    rating: 4.7,
    placement: "₹24 LPA",
  },
  {
    id: 3,
    name: "IIT Madras",
    location: "Chennai, Tamil Nadu",
    fees: "₹2.4 Lakhs",
    rating: 4.7,
    placement: "₹26 LPA",
  },
  {
    id: 4,
    name: "BITS Pilani",
    location: "Pilani, Rajasthan",
    fees: "₹5.2 Lakhs",
    rating: 4.6,
    placement: "₹18 LPA",
  },
  {
    id: 5,
    name: "VJTI Mumbai",
    location: "Mumbai, Maharashtra",
    fees: "₹1.5 Lakhs",
    rating: 4.5,
    placement: "₹12 LPA",
  },
  {
    id: 6,
    name: "COEP Technological University",
    location: "Pune, Maharashtra",
    fees: "₹1.4 Lakhs",
    rating: 4.5,
    placement: "₹11 LPA",
  },
];

export default function Colleges() {
  const [search, setSearch] = useState("");

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <nav className="bg-white border-b text-black">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

          <a
            href="/"
            className="text-2xl font-bold text-blue-600"
          >
            CollegeWise
          </a>

          <div className="flex gap-8">

            <a
              href="/"
              className="hover:text-blue-600 transition"
            >
              Home
            </a>

            <a
              href="/colleges"
              className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1"
            >
              Colleges
            </a>

            <a
              href="/compare"
              className="hover:text-blue-600 transition"
            >
              Compare
            </a>

            <a
              href="/predictor"
              className="hover:text-blue-600 transition"
            >
              Predictor
            </a>

          </div>

        </div>
      </nav>


      {/* Page Heading */}
      <section className="bg-white border-b">

        <div className="max-w-7xl mx-auto px-8 py-12">

          <p className="text-blue-600 font-semibold">
            College Discovery
          </p>

          <h1 className="text-4xl font-bold text-black mt-2">
            Explore Colleges
          </h1>

          <p className="mt-3 text-gray-600 text-lg">
            Find colleges and check their basic information.
          </p>

        </div>

      </section>


      {/* Search Section */}
      <section className="max-w-7xl mx-auto px-8 pt-10">

        <div className="bg-white border rounded-xl p-6 shadow-sm">

          <label
            htmlFor="college-search"
            className="block text-black font-medium mb-3"
          >
            Search for a college
          </label>

          <input
            id="college-search"
            type="text"
            placeholder="Search college by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <p className="mt-3 text-sm text-gray-600">
            Showing {filteredColleges.length} colleges
          </p>

        </div>

      </section>


      {/* College Cards */}
      <section className="max-w-7xl mx-auto px-8 py-10">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {filteredColleges.map((college) => (

            <div
              key={college.id}
              className="bg-white border rounded-xl p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition"
            >

              {/* College Name */}
              <h2 className="text-xl font-bold text-black">
                {college.name}
              </h2>

              {/* Location */}
              <p className="mt-3 text-gray-600">
                📍 {college.location}
              </p>


              {/* College Information */}
              <div className="mt-6 space-y-4">

                <div className="flex justify-between items-center border-b pb-3">

                  <span className="text-gray-600">
                    Rating
                  </span>

                  <span className="font-semibold text-black">
                    ⭐ {college.rating}
                  </span>

                </div>


                <div className="flex justify-between items-center border-b pb-3">

                  <span className="text-gray-600">
                    Annual Fees
                  </span>

                  <span className="font-semibold text-black">
                    {college.fees}
                  </span>

                </div>


                <div className="flex justify-between items-center">

                  <span className="text-gray-600">
                    Average Placement
                  </span>

                  <span className="font-semibold text-black">
                    {college.placement}
                  </span>

                </div>

              </div>


              {/* Buttons */}
              <div className="mt-7">

                <a
                  href={`/colleges/${college.id}`}
                  className="block text-center w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  View College
                </a>

                <a
                  href={`/compare?college=${college.id}`}
                  className="block text-center mt-3 w-full border border-blue-600 text-blue-600 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
                >
                  Compare
                </a>

              </div>

            </div>

          ))}

        </div>


        {/* No Results */}
        {filteredColleges.length === 0 && (

          <div className="bg-white border rounded-xl p-10 text-center">

            <p className="text-lg font-medium text-black">
              No colleges found.
            </p>

            <p className="mt-2 text-gray-600">
              Try searching with a different college name.
            </p>

          </div>

        )}

      </section>


      {/* Footer */}
      <footer className="bg-white border-t text-center py-8 mt-8">

        <p className="text-gray-500">
          © 2026 CollegeWise
        </p>

      </footer>

    </main>
  );
}