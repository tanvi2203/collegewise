"use client";

import { useState } from "react";

const colleges = [
  {
    id: 1,
    name: "IIT Bombay",
    location: "Mumbai",
    score: 90,
  },
  {
    id: 2,
    name: "IIT Delhi",
    location: "Delhi",
    score: 88,
  },
  {
    id: 3,
    name: "IIT Madras",
    location: "Chennai",
    score: 87,
  },
  {
    id: 4,
    name: "BITS Pilani",
    location: "Rajasthan",
    score: 80,
  },
  {
    id: 5,
    name: "VJTI Mumbai",
    location: "Mumbai",
    score: 70,
  },
  {
    id: 6,
    name: "COEP Technological University",
    location: "Pune",
    score: 68,
  },
];

export default function Predictor() {
  const [score, setScore] = useState("");
  const [location, setLocation] = useState("");
  const [results, setResults] = useState<typeof colleges>([]);

  const predictColleges = () => {
    const studentScore = Number(score);

    const suitableColleges = colleges.filter((college) => {
      const scoreMatch = studentScore >= college.score;
      const locationMatch =
        location === "" || college.location === location;

      return scoreMatch && locationMatch;
    });

    setResults(suitableColleges);
  };

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

            <a href="/colleges" className="hover:text-blue-600">
              Colleges
            </a>

            <a href="/compare" className="hover:text-blue-600">
              Compare
            </a>

            <a href="/predictor" className="text-blue-600">
              Predictor
            </a>

          </div>

        </div>
      </nav>

      {/* Heading */}
      <section className="bg-white px-6 py-10">

        <div className="max-w-4xl mx-auto text-center">

         <h2 className="text-3xl font-bold text-black">
         College Predictor
        </h2>
          

          <p className="mt-3 text-gray-600">
            Enter your score and preferred location to find suitable colleges.
          </p>

        </div>

      </section>

      {/* Predictor Form */}
      <section className="max-w-4xl mx-auto px-6 py-10">

        <div className="bg-white border rounded-xl p-6">

          <div className="grid gap-6 md:grid-cols-2">

            {/* Score */}
            <div>

              <label className="block font-medium text-black mb-2">
                Enter your score
              </label>

              <input
                type="number"
                placeholder="Example: 85"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                 className="w-full border rounded-lg px-4 py-3 text-black placeholder:text-gray-500"
              />

            </div>

            {/* Location */}
            <div>
                <label className="block font-medium text-black mb-2">
                Preferred location
              </label>

              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 bg-white text-gray-500"
              >

                <option value="">
                  Any Location
                </option>

                <option value="Mumbai">
                  Mumbai
                </option>

                <option value="Delhi">
                  Delhi
                </option>

                <option value="Chennai">
                  Chennai
                </option>

                <option value="Rajasthan">
                  Rajasthan
                </option>

                <option value="Pune">
                  Pune
                </option>

              </select>

            </div>

          </div>

          <button
            onClick={predictColleges}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Predict Colleges
          </button>

        </div>

      </section>

      {/* Results */}
      <section className="max-w-4xl mx-auto px-6 pb-16">

        {results.length > 0 && (
          <div>

           <h3 className="text-2xl font-bold text-black mb-6">
              Recommended Colleges
            </h3>

            <div className="grid gap-5 md:grid-cols-2">

              {results.map((college) => (
                <div
                  key={college.id}
                  className="bg-white border rounded-xl p-6"
                >

                  <h4 className="text-xl font-bold text-black">
                    {college.name}
                  </h4>

                  <p className="mt-2 text-gray-500">
                    📍 {college.location}
                  </p>

                  <p className="mt-3 text-gray-600">
                    Recommended score: {college.score}
                  </p>

                  <a
                    href={`/colleges/${college.id}`}
                    className="inline-block mt-5 text-blue-600 font-medium"
                  >
                    View College →
                  </a>

                </div>
              ))}

            </div>

          </div>
        )}

        {results.length === 0 && score !== "" && (
          <p className="text-center text-gray-500">
            No suitable colleges found. Try a different score or location.
          </p>
        )}

      </section>

    </main>
  );
}