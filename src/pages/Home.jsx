import React from 'react';
import { Navbar } from '../components/landing_blocks/Navbar';
import { Hero } from '../components/landing_blocks/Hero';
import { Stats } from '../components/landing_blocks/Stats';
import { Features } from '../components/landing_blocks/Features';
import { HowItWorks } from '../components/landing_blocks/HowItWorks';
import { WhyUs } from '../components/landing_blocks/WhyUs';
import { Pricing } from '../components/landing_blocks/Pricing';
import { Testimonials } from '../components/landing_blocks/Testimonials';
import { MessageCircle } from 'lucide-react';
import { CTA } from '../components/landing_blocks/CTA';
import { AppDownload } from '../components/landing_blocks/AppDownload';
import { Footer } from '../components/landing_blocks/Footer';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <WhyUs />
        <Pricing />
        <Testimonials />
        <CTA />
        <AppDownload />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300"
      >
        <MessageCircle size={30} />
        {/* Optional notification dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full"></span>
      </a>
    </div>
  );
}
