import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { WhyUs } from '../components/WhyUs';
import { Pricing } from '../components/Pricing';
import { Testimonials } from '../components/Testimonials';
import { MessageCircle } from 'lucide-react';
import { CTA } from '../components/CTA';
import { AppDownload } from '../components/AppDownload';
import { Footer } from '../components/Footer';

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
