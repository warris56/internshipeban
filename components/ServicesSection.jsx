import Image from "next/image";
import serviceImg1 from "@/images/sun.webp";
import serviceImg2 from "@/images/cashier.webp";

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Heading aligned with text block */}
        <h2 className="mb-16 text-3xl font-bold text-gray-800 text-left md:ml-[50%] md:pl-10">
          Our Services
        </h2>

        <div className="flex flex-col items-center gap-16 md:flex-row md:gap-24">
          {/* LEFT – Overlapping Images */}
          <div className="relative flex-1 md:pr-10">
            <Image
              src={serviceImg1}
              alt="Service visual 1"
              width={600}
              height={400}
              className="rounded-xl shadow-md"
            />
            <Image
              src={serviceImg2}
              alt="Service visual 2"
              width={600}
              height={400}
              className="absolute left-8 -top-28 md:left-12 md:-top-32 rounded-xl shadow-lg"
            />
          </div>

          {/* RIGHT – Text Descriptions */}
          <div className="flex flex-1 flex-col gap-16 md:pl-10 -mt-6">
            {/* HR Module */}
            <div className="rounded-2xl border border-transparent shadow-lg bg-white p-16 transition-all w-full max-w-3xl">
              <h3 className="mb-6 text-2xl font-bold flex items-center gap-2">
                <span role="img" aria-label="building">🏢</span> HR Module
              </h3>
              <p className="text-lg text-gray-600 text-lg">
                Keep your employee records, manage their work schedules/shifts, manage their leave requests and performance appraisal and keep track of their attendance. Suitable for organizations of all sizes
              </p>
            </div>

            {/* Membership Module */}
            <div className="rounded-2xl border border-transparent shadow-lg bg-white p-16 transition-all w-full max-w-3xl">
              <h3 className="mb-6 text-2xl font-bold flex items-center gap-3">
                <span role="img" aria-label="members">👥</span> Membership Module
              </h3>
              <p className="text-lg text-gray-700">
                 Keep your member records, manage their meeting times, attendance, lateness and absenteeism. Suitable for religious organizations, schools, event centers, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
