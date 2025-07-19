import Image from "next/image";
import googleImg from "@/images/google.webp";
import appstoreImg from "@/images/appstore.webp";

export default function Footer() {
  return (
    <footer className="bg-[rgb(84,122,240)] text-white py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          
          {/* Column 1 */}
          <div>
            <h3 className="text-4xl font-bold mb-10">EbanRegister</h3>
            <p className="text-white/80 mb-10 text-xl leading-relaxed">
              EBAN Register removes admin time and paperwork by automating records.
            </p>
            <div className="flex space-x-6 text-4xl">
              <a href="#" className="text-white/80 hover:text-white">📘</a>
              <a href="#" className="text-white/80 hover:text-white">🐦</a>
              <a href="#" className="text-white/80 hover:text-white">💼</a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-4xl font-semibold mb-10">Company</h4>
            <ul className="space-y-5 text-white/80 text-xl">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
              <li><a href="#" className="hover:text-white">Marketing</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-4xl font-semibold mb-10">Quick Link</h4>
            <ul className="space-y-5 text-white/80 text-xl">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Live Chat</a></li>
            </ul>
          </div>

          {/* Column 4 – Two stacked images */}
          <div>
            <h4 className="text-4xl font-semibold mb-10">Download link</h4>
            <div className="space-y-6">
              <Image
                src={googleImg}
                alt="Get it on Google Play"
                width={220}
                height={70}
                className="object-contain"
              />
              <Image
                src={appstoreImg}
                alt="Download on App Store"
                width={220}
                height={70}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="border-t border-white/30 mt-24 pt-10 text-center text-white/80 text-lg">
          <p>&copy; 2025 EbanRegister. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
