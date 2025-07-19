import Image from 'next/image';
import scanImage from '@/images/app-checkmark.webp';
import checkmarkImage from '@/images/app-scan.webp';
import playstoreImg from '@/images/google.webp';
import appstoreImg from '@/images/appstore.webp';

export default function AppDownloadSection() {
  return (
    <section className="bg-white py-44 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Text */}
        <div>
          <h2 className="text-5xl md:text-6xl font-bold text-blue-800 mb-10">
            Download Our Client App
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed mb-10">
            Eban Register mobile app for your employees and members is available on Play Store and App Store.
          </p>

          {/* Store buttons */}
          <div className="flex gap-6">
            <Image
              src={playstoreImg}
              alt="Get it on Play Store"
              width={200}
              height={60}
              className="object-contain"
            />
            <Image
              src={appstoreImg}
              alt="Download on App Store"
              width={200}
              height={60}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Side: Overlapping Images */}
        <div className="relative w-full flex justify-center items-center">
          {/* Back image */}
          <div className="relative w-[280px] h-[580px]">
            <Image
              src={checkmarkImage}
              alt="App Checkmark"
              fill
              className="rounded-2xl shadow-2xl object-contain"
            />
          </div>

          {/* Enlarged front image (scanImage) */}
          <div className="absolute top-8 left-38 w-[500px] h-[700px]">
            <Image
              src={scanImage}
              alt="App Scan"
              fill
              className="rounded-2xl shadow-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
