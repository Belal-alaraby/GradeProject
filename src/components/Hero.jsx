import React from 'react';
import { ShieldCheck, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';
import { Container } from '../layout/Container';
import { SectionWrapper } from '../layout/SectionWrapper';
import heroImg from '../assets/hero-winter.png';

export function Hero() {
  return (
    <SectionWrapper id="hero" className="overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          <div className="flex-1 w-full lg:pe-4 text-center lg:text-start z-10">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full font-semibold text-sm text-secondary shadow-sm mb-8">
              <ShieldCheck size={18} />
              <span>خدمة صيانة السيارات في موقعك</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight mb-6">
              صيانة عربيتك
              <br className="hidden sm:block"/>
              {" "}في أي مكان
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              فنيون محترفون يصلون إليك أينما كنت. مع حجز سريع وتتبع مباشر ودفع آمن
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button variant="primary" icon={<ArrowLeft size={18} />}>
                احجز الآن
              </Button>
              <Button variant="secondary" icon={<ArrowLeft size={18} />}>
                عرض الخدمات
              </Button>
            </div>
          </div>
          
          <div className="flex-1 w-full relative flex justify-center items-center">
            {/* Glow effect */}
            <div className="absolute w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-3xl z-0 -top-[10%]"></div>
            
            <div className="relative z-10 animate-[float_6s_ease-in-out_infinite]">
              <img 
                src={heroImg} 
                alt="صيانة سيارات" 
                className="w-full max-w-[500px] h-auto rounded-3xl shadow-2xl shadow-primary/20 object-cover border-4 border-white"
              />
            </div>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
