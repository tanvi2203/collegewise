const colleges = [
  {
    id: "1",
    name: "IIT Bombay",
    location: "Mumbai, Maharashtra",
    fees: "₹2.5 Lakhs",
    rating: 4.8,
    placement: "₹25 LPA",
  },
  {
    id: "2",
    name: "IIT Delhi",
    location: "New Delhi, Delhi",
    fees: "₹2.5 Lakhs",
    rating: 4.7,
    placement: "₹24 LPA",
  },
  {
    id: "3",
    name: "IIT Madras",
    location: "Chennai, Tamil Nadu",
    fees: "₹2.4 Lakhs",
    rating: 4.7,
    placement: "₹26 LPA",
  },
  {
    id: "4",
    name: "BITS Pilani",
    location: "Pilani, Rajasthan",
    fees: "₹5.2 Lakhs",
    rating: 4.6,
    placement: "₹18 LPA",
  },
  {
    id: "5",
    name: "VJTI Mumbai",
    location: "Mumbai, Maharashtra",
    fees: "₹1.5 Lakhs",
    rating: 4.5,
    placement: "₹12 LPA",
  },
  {
    id: "6",
    name: "COEP Technological University",
    location: "Pune, Maharashtra",
    fees: "₹1.4 Lakhs",
    rating: 4.5,
    placement: "₹11 LPA",
  },
];

export default async function CollegeDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const college = colleges.find((college) => college.id === id);

  if (!college) {
    return <p className="p-10">College not found.</p>;
  }

  return (
    <main className="min-h-screen bg-gray-50">

      <nav className="bg-white border-b text-black">
        <div className="max-w-6xl mx-auto px-6 py-4">

          <a
            href="/"
            className="text-2xl font-bold text-blue-600"
          >
            CollegeWise
          </a>

        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-6 py-12">

        <a
          href="/colleges"
          className="text-blue-600"
        >
          ← Back to Colleges
        </a>

        <div className="bg-white rounded-xl border p-8 mt-6">

          <h1 className="text-3xl font-bold text-black">
            {college.name}
          </h1>

          <p className="mt-3 text-gray-500">
            📍 {college.location}
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-8">

            <div className="border rounded-lg p-4">
              <p className="text-gray-500">Rating</p>
              <p className="font-bold mt-1">
                ⭐ {college.rating}
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="text-gray-500">Annual Fees</p>
              <p className="font-bold mt-1">
                {college.fees}
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="text-gray-500">Average Placement</p>
              <p className="font-bold mt-1">
                {college.placement}
              </p>
            </div>

          </div>

          <div className="mt-8">

            <h2 className="text-xl font-bold text-black">
              About the College
            </h2>

            <p className="mt-3 text-gray-600">
              This page gives basic information about the college.
              More details such as courses, admission information
              and placements can be added later.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}