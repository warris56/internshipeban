import Image from "next/image";
import serviceImg1 from "@/images/sun.webp"; // Replace with your actual images
import serviceImg2 from "@/images/cashier.webp";

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Heading aligned with text block */}
        <h2 className="mb-12 text-3xl font-bold text-gray-800 text-left md:ml-[50%] md:pl-10">
          Our Services
        </h2>

        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-20 lg:gap-24">
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
          <div className="flex flex-1 flex-col gap-12 md:pl-10">
            {/* HR Module */}
            <div>
              <h3 className="mb-3 text-xl font-semibold">HR Module</h3>
              <p className="max-w-md text-gray-600">
                Keep employee records, manage shifts, leave requests and attendance.
              </p>
            </div>

            {/* Membership Module */}
            <div>
              <h3 className="mb-3 text-xl font-semibold">Membership Module</h3>
              <p className="max-w-md text-gray-600">
                Manage member records, meeting times, attendance and absenteeism.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
