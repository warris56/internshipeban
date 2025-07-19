import Navbar from '@/components/Navbar.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import TrustedBySection from '@/components/TrustedBySection.jsx';
import FeaturesSection from '@/components/FeaturesSection.jsx';
import ServicesSection from '@/components/ServicesSection.jsx';
import ContactPromptSection from '@/components/ContactPromptSection.jsx';
import AppDownloadSection from '@/components/AppDownloadSection.jsx';
import CustomerFeedbackSection from '@/components/CustomerFeedbackSection.jsx';
import VideoBannerSection from '@/components/VideoBannerSection.jsx';
import Footer from '@/components/Footer.jsx';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-900">
        <section id="home">
          <HeroSection />
          <TrustedBySection />
        </section>

        <section id="features">
          <FeaturesSection />
        </section>

        <section id="services">
          <ServicesSection />
        </section>

        <section id="contact">
          <ContactPromptSection />
        </section>

        <section id="downloads">
          <AppDownloadSection />
        </section>

        <CustomerFeedbackSection />
        <VideoBannerSection />
        <Footer />
      </main>
    </>
  );
}
