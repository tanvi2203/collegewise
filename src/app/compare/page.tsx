"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

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

function ComparePage() {
  const searchParams = useSearchParams();

  const [college1, setCollege1] = useState("1");
  const [college2, setCollege2] = useState("2");
  const [college3, setCollege3] = useState("3");

  useEffect(() => {
    const selectedCollege = searchParams.get("college");

    if (selectedCollege) {
      setCollege1(selectedCollege);
    }
  }, [searchParams]);

  const firstCollege = colleges.find(
    (college) => college.id.toString() === college1
  );

  const secondCollege = colleges.find(
    (college) => college.id.toString() === college2
  );

  const thirdCollege = colleges.find(
    (college) => college.id.toString() === college3
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

            <a href="/colleges" className="hover:text-blue-600">
              Colleges
            </a>

            <a href="/compare" className="text-blue-600">
              Compare
            </a>

            <a href="/predictor" className="hover:text-blue-600">
              Predictor
            </a>

          </div>

        </div>

      </nav>

      {/* Heading */}
      <section className="bg-white px-6 py-10">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-black">
            Compare Colleges
          </h2>

          <p className="mt-2 text-gray-600">
            Compare colleges based on fees, rating and placements.
          </p>

        </div>

      </section>

      {/* College Selection */}
      <section className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid gap-4 md:grid-cols-3">

          {/* College 1 */}
          <select
            value={college1}
            onChange={(e) => setCollege1(e.target.value)}
            className="bg-white border rounded-lg px-4 py-3 text-black"
          >
            {colleges.map((college) => (
              <option key={college.id} value={college.id}>
                {college.name}
              </option>
            ))}
          </select>

          {/* College 2 */}
          <select
            value={college2}
            onChange={(e) => setCollege2(e.target.value)}
            className="bg-white border rounded-lg px-4 py-3 text-black"
          >
            {colleges.map((college) => (
              <option key={college.id} value={college.id}>
                {college.name}
              </option>
            ))}
          </select>

          {/* College 3 */}
          <select
            value={college3}
            onChange={(e) => setCollege3(e.target.value)}
            className="bg-white border rounded-lg px-4 py-3 text-black"
          >
            {colleges.map((college) => (
              <option key={college.id} value={college.id}>
                {college.name}
              </option>
            ))}
          </select>

        </div>

      </section>

      {/* Comparison Table */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="bg-white border rounded-xl overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b bg-gray-50">

                <th className="p-4 text-left text-black font-bold">
                  Details
                </th>

                <th className="p-4 text-left text-black font-bold">
                  {firstCollege?.name}
                </th>

                <th className="p-4 text-left text-black font-bold">
                  {secondCollege?.name}
                </th>

                <th className="p-4 text-left text-black font-bold">
                  {thirdCollege?.name}
                </th>

              </tr>

            </thead>

            <tbody>

              {/* Location */}
              <tr className="border-b">

                <td className="p-4 font-medium text-gray-500">
                  Location
                </td>

                <td className="p-4 text-black">
                  {firstCollege?.location}
                </td>

                <td className="p-4 text-black">
                  {secondCollege?.location}
                </td>

                <td className="p-4 text-black">
                  {thirdCollege?.location}
                </td>

              </tr>

              {/* Rating */}
<tr className="border-b">

  <td className="p-4 font-medium text-gray-500">
    Rating
  </td>

  <td
    className={`p-4 ${
      firstCollege?.rating ===
      Math.max(
        firstCollege?.rating || 0,
        secondCollege?.rating || 0,
        thirdCollege?.rating || 0
      )
        ? "font-bold text-green-600"
        : "text-black"
    }`}
  >
    ⭐ {firstCollege?.rating}
  </td>

  <td
    className={`p-4 ${
      secondCollege?.rating ===
      Math.max(
        firstCollege?.rating || 0,
        secondCollege?.rating || 0,
        thirdCollege?.rating || 0
      )
        ? "font-bold text-green-600"
        : "text-black"
    }`}
  >
    ⭐ {secondCollege?.rating}
  </td>

  <td
    className={`p-4 ${
      thirdCollege?.rating ===
      Math.max(
        firstCollege?.rating || 0,
        secondCollege?.rating || 0,
        thirdCollege?.rating || 0
      )
        ? "font-bold text-green-600"
        : "text-black"
    }`}
  >
    ⭐ {thirdCollege?.rating}
  </td>

</tr>

              {/* Annual Fees */}
<tr className="border-b">

  <td className="p-4 font-medium text-gray-500">
    Annual Fees
  </td>

  <td
    className={`p-4 ${
      firstCollege &&
      firstCollege.fees ===
        colleges
          .filter(
            (college) =>
              college.id === Number(college1) ||
              college.id === Number(college2) ||
              college.id === Number(college3)
          )
          .sort(
            (a, b) =>
              parseFloat(a.fees.replace("₹", "")) -
              parseFloat(b.fees.replace("₹", ""))
          )[0]?.fees
        ? "font-bold text-green-600"
        : "text-black"
    }`}
  >
    {firstCollege?.fees}
  </td>

  <td
    className={`p-4 ${
      secondCollege &&
      secondCollege.fees ===
        colleges
          .filter(
            (college) =>
              college.id === Number(college1) ||
              college.id === Number(college2) ||
              college.id === Number(college3)
          )
          .sort(
            (a, b) =>
              parseFloat(a.fees.replace("₹", "")) -
              parseFloat(b.fees.replace("₹", ""))
          )[0]?.fees
        ? "font-bold text-green-600"
        : "text-black"
    }`}
  >
    {secondCollege?.fees}
  </td>

  <td
    className={`p-4 ${
      thirdCollege &&
      thirdCollege.fees ===
        colleges
          .filter(
            (college) =>
              college.id === Number(college1) ||
              college.id === Number(college2) ||
              college.id === Number(college3)
          )
          .sort(
            (a, b) =>
              parseFloat(a.fees.replace("₹", "")) -
              parseFloat(b.fees.replace("₹", ""))
          )[0]?.fees
        ? "font-bold text-green-600"
        : "text-black"
    }`}
  >
    {thirdCollege?.fees}
  </td>

</tr>

              {/* Placement */}
<tr>

  <td className="p-4 font-medium text-gray-500">
    Average Placement
  </td>

  <td
    className={`p-4 ${
      firstCollege &&
      firstCollege.placement ===
        colleges
          .filter(
            (college) =>
              college.id === Number(college1) ||
              college.id === Number(college2) ||
              college.id === Number(college3)
          )
          .sort(
            (a, b) =>
              parseFloat(b.placement.replace("₹", "")) -
              parseFloat(a.placement.replace("₹", ""))
          )[0]?.placement
        ? "font-bold text-green-600"
        : "text-black"
    }`}
  >
    {firstCollege?.placement}
  </td>

  <td
    className={`p-4 ${
      secondCollege &&
      secondCollege.placement ===
        colleges
          .filter(
            (college) =>
              college.id === Number(college1) ||
              college.id === Number(college2) ||
              college.id === Number(college3)
          )
          .sort(
            (a, b) =>
              parseFloat(b.placement.replace("₹", "")) -
              parseFloat(a.placement.replace("₹", ""))
          )[0]?.placement
        ? "font-bold text-green-600"
        : "text-black"
    }`}
  >
    {secondCollege?.placement}
  </td>

  <td
    className={`p-4 ${
      thirdCollege &&
      thirdCollege.placement ===
        colleges
          .filter(
            (college) =>
              college.id === Number(college1) ||
              college.id === Number(college2) ||
              college.id === Number(college3)
          )
          .sort(
            (a, b) =>
              parseFloat(b.placement.replace("₹", "")) -
              parseFloat(a.placement.replace("₹", ""))
          )[0]?.placement
        ? "font-bold text-green-600"
        : "text-black"
    }`}
  >
    {thirdCollege?.placement}
  </td>

</tr>

            </tbody>

          </table>

        </div>

      </section>

    </main>

    
  );
}

export default function Compare() {
  return (
    <Suspense fallback={<p className="p-10">Loading...</p>}>
      <ComparePage />
    </Suspense>
  );
}