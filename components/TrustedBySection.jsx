import Image from 'next/image';
import logo1 from '@/images/motherlove.png';
import logo2 from '@/images/alisa.jpg';
import logo3 from '@/images/sintex.png';
import logo4 from '@/images/panacea.jpg';
import logo5 from '@/images/cyprus.jpg';
import logo6 from '@/images/christiebrow.png';
import logo7 from '@/images/ansmed.jpg';
import logo8 from '@/images/anthon.jpg';
import logo9 from '@/images/allcare.png';
import logo10 from '@/images/sigma.jpg';

export default function TrustedBySection() {
  return (
    <section className="mt-64 px-6 py-20 bg-gray-50 text-center">
      <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-12">
        Trusted by organizations of all sizes and types
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-12 max-w-6xl mx-auto">
        <Image src={logo1} alt="Logo 1" width={180} height={120} />
        <Image src={logo2} alt="Logo 2" width={180} height={120} />
        <Image src={logo3} alt="Logo 3" width={180} height={120} />
        <Image src={logo4} alt="Logo 4" width={180} height={120} />
        <Image src={logo5} alt="Logo 5" width={180} height={120} />
      </div>
        <div className="flex flex-wrap justify-center items-center gap-12 mt-12 max-w-6xl mx-auto">
            <Image src={logo6} alt="Logo 6" width={180} height={120} />
            <Image src={logo7} alt="Logo 7" width={180} height={120} />
            <Image src={logo8} alt="Logo 8" width={180} height={120} />
            <Image src={logo9} alt="Logo 9" width={180} height={120} />
            <Image src={logo10} alt="Logo 10" width={180} height={120} />
        </div>
    </section>
  );
}
