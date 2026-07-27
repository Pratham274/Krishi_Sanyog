import React from 'react';
import Hero from '../components/landing/Hero';
import FeaturesGrid from '../components/landing/FeaturesGrid';
import HowItWorks from '../components/landing/HowItWorks';
import Benefits from '../components/landing/Benefits';
import Testimonials from '../components/landing/Testimonials';
import FAQSection from '../components/landing/FAQSection';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/common/Footer';

export const LandingPage = ({ onOpenSearch }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Hero />
      <FeaturesGrid />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
