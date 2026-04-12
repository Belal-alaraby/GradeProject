import React from 'react';
import { Search, MapPin, Send, Star } from 'lucide-react';
import { Container } from '../../layout/Container';
import { SectionWrapper } from '../../layout/SectionWrapper';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';

export function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: 'اختر الخدمة',
      desc: 'اختر الخدمة التي تحتاجها من بين خدماتنا المتنوعة',
      icon: <Search size={24} />
    },
    {
      id: 2,
      title: 'حدد موقعك',
      desc: 'أدخل موقعك وسنرسل لك أقرب فني متاح',
      icon: <MapPin size={24} />
    },
    {
      id: 3,
      title: 'تتبع الفني',
      desc: 'تابع موقع الفني في الوقت الفعلي حتى وصوله',
      icon: <Send size={24} />
    },
    {
      id: 4,
      title: 'ادفع وقيّم الخدمة',
      desc: 'ادفع بأمان وقيّم تجربتك مع الفني',
      icon: <Star size={24} />
    }
  ];

  return (
    <SectionWrapper id="how-it-works" className="bg-white relative py-20">
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block bg-blue-50 text-secondary px-6 py-2 rounded-full font-bold text-sm mb-6">
            كيف يعمل
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
            احجز خدمتك في 4 خطوات بسيطة
          </h2>
          <p className="text-lg text-slate-500">
            عملية سهلة وسريعة تضمن لك الحصول على أفضل خدمة في أقل وقت
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-blue-100 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <Reveal key={step.id} delay={index * 200}>
                <div className="relative group flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white text-secondary font-black text-xl rounded-full flex items-center justify-center shadow-lg border-2 border-blue-100 absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                    {step.id}
                  </div>
                  
                  <div className="w-full bg-slate-50 rounded-[2rem] pt-12 pb-8 px-6 border border-slate-100 transition-all duration-300 hover:shadow-xl hover:bg-white hover:-translate-y-2 relative overflow-hidden h-full flex flex-col items-center">
                    <div className="absolute -right-16 -top-16 bg-blue-50 w-32 h-32 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-6 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                      {step.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-800 mb-3 relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed relative z-10 text-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button variant="secondary" className="px-10 py-4 text-base shadow-lg shadow-secondary/20">
            ابدأ الآن - إنه سهل!
          </Button>
        </div>
      </Container>
    </SectionWrapper>
  );
}
