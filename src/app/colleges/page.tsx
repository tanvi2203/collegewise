"use client";

import { useState } from "react";

const colleges = [
  {
    id : 1,
    name: "IIT Bombay",
    location: "Mumbai, Maharashtra",
    fees: "₹2.5 Lakhs",
    rating: 4.8,
    placement: "₹25 LPA",
  },
  {
    id : 2,
    name: "IIT Delhi",
    location: "New Delhi, Delhi",
    fees: "₹2.5 Lakhs",
    rating: 4.7,
    placement: "₹24 LPA",
  },
  {
    id : 3,
    name: "IIT Madras",
    location: "Chennai, Tamil Nadu",
    fees: "₹2.4 Lakhs",
    rating: 4.7,
    placement: "₹26 LPA",
  },
  {
    id : 4,
    name: "BITS Pilani",
    location: "Pilani, Rajasthan",
    fees: "₹5.2 Lakhs",
    rating: 4.6,
    placement: "₹18 LPA",
  },
  {
    id : 5,
    name: "VJTI Mumbai",
    location: "Mumbai, Maharashtra",
    fees: "₹1.5 Lakhs",
    rating: 4.5,
    placement: "₹12 LPA",
  },
  {
    id : 6,
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
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold text-blue-600">
            CollegeWise
          </h1>

          <div className="flex gap-6">
            <a href="/" className="hover:text-blue-600">
              Home
            </a>

            <a href="/colleges" className="text-blue-600">
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

      {/* Page Heading */}
      <section className="bg-white px-6 py-10">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-black">
            Explore Colleges
          </h2>

          <p className="mt-2 text-gray-600">
            Find colleges and check their basic information.
          </p>

        </div>
      </section>

      <div className="mb-8">
  <input
    type="text"
    placeholder="Search college..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full rounded-lg border bg-white px-4 py-3 text-gray-700"
  />
</div>

      {/* College Cards */}
      <section className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

         {filteredColleges.map((college) => (
            <div
              key={college.name}
              className="bg-white border rounded-xl p-6 shadow-sm"
            >

              <h3 className="text-xl font-bold text-black" >
                {college.name}
              </h3>

              <p className="mt-2 text-gray-600">
                📍 {college.location}
              </p>

              <div className="mt-5">

                <p className="mt-4 text-gray-600">
                  <span className="text-black">
                    Rating:
                  </span>{" "}
                  ⭐ {college.rating}
                </p>

                <p className="mt-4 text-gray-600">
                  <span className="text-black">
                    Annual Fees:
                  </span>{" "}
                  {college.fees}
                </p>

                <p className="mt-4 text-gray-600">
                  <span className="text-black">
                    Average Placement:
                  </span>{" "}
                  {college.placement}
                </p>

              </div>

              <a href={`/colleges/${college.id}`}
                    className="block text-center mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                View College
                </a>

            <a href={`/compare?college=${college.id}`}
                  className="block text-center mt-3 w-full border border-blue-600 text-blue-600 py-3 rounded-lg">
                Compare
            </a>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}