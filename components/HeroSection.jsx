import Image from 'next/image';
import dashboardImg from '@/images/ebanlapi.webp';
import mobileAppImg from '@/images/ebanphone.webp';

export default function HeroSection() {
  return (
    <section className="relative bg-[rgb(86,125,244)] text-white px-4 py-20 min-h-[85vh] w-full flex items-center rounded-bl-[120px] rounded-br-[120px] overflow-visible">
      <div className="absolute inset-0 bg-black/5 rounded-bl-[120px] rounded-br-[120px]"></div>
      
      <div className="relative max-w-6xl mx-auto text-center w-full">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          HR & Payroll management system!
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          An all-in-one software designed to streamline and organize your HR and payroll processes
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-32">
          <button className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Request Demo
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors">
            Start now
          </button>
        </div>

        {/* BIGGER Images below buttons */}
        <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-36 flex flex-col md:flex-row items-center justify-center gap-20 w-full px-8 z-10">
          {/* Super-Sized Dashboard Image */}
          <div className="w-[8000px] max-w-full">
            <Image
              src={dashboardImg}
              alt="Dashboard Preview"
              width={1600}
              height={800}
              className="rounded-xl shadow-2xl"
            />
          </div>

          {/* Larger Mobile App Image */}
          <div className="w-[2720px] max-w-full">
            <Image
              src={mobileAppImg}
              alt="Mobile App Screenshot"
              width={350}
              height={700}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
