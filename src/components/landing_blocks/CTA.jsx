import React from 'react';
import { Container } from '../../layout/Container';
import { SectionWrapper } from '../../layout/SectionWrapper';
import { Button } from '../ui/Button';

export function CTA() {
  return (
    <SectionWrapper className="py-20">
      <Container>
        <div className="bg-primary rounded-3xl relative overflow-hidden py-16 px-6 md:px-16 text-center">
          {/* Subtle dotted pattern background */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              جاهز لتجربة الخدمة؟
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              انضم إلى أكثر من 50,000 عميل راضٍ واحجز خدمتك الآن
            </p>
            <div className="flex justify-center">
              <button className="bg-white text-primary hover:bg-slate-50 px-10 py-3.5 text-lg rounded-full font-bold shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                ابدأ الحجز الآن
              </button>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
