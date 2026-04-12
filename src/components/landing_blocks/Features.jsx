import React from 'react';
import { BatteryCharging, Droplet, Disc, ArrowLeft, Droplets, PhoneCall, Truck } from 'lucide-react';
import { Container } from '../../layout/Container';
import { SectionWrapper } from '../../layout/SectionWrapper';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { Reveal } from '../ui/Reveal';

export function Features() {
  const services = [
    {
      id: 1,
      title: 'تغيير البطارية',
      desc: 'نبدل بطارية سيارتك بأفضل الأنواع المتوفرة',
      price: 500,
      icon: <BatteryCharging size={28} />,
      iconClass: 'bg-blue-50 text-secondary border border-blue-100'
    },
    {
      id: 2,
      title: 'تغيير الزيت',
      desc: 'تغيير زيت المحرك والفلتر بزيوت أصلية',
      price: 350,
      icon: <Droplet size={28} />,
      iconClass: 'bg-orange-50 text-accent-orange border border-orange-100'
    },
    {
      id: 3,
      title: 'خدمة الإطارات',
      desc: 'فحص وتبديل وإصلاح جميع أنواع الإطارات',
      price: 250,
      icon: <Disc size={28} />,
      iconClass: 'bg-slate-50 text-accent-gray border border-slate-200'
    },
    {
      id: 4,
      title: 'غسيل السيارة',
      desc: 'غسيل شامل وتنظيف داخلي وخارجي احترافي',
      price: 200,
      icon: <Droplets size={28} />,
      iconClass: 'bg-cyan-50 text-cyan-600 border border-cyan-100'
    },
    {
      id: 5,
      title: 'خدمة الطوارئ',
      desc: 'استجابة سريعة لجميع حالات الطوارئ على الطريق',
      price: 300,
      icon: <PhoneCall size={28} />,
      iconClass: 'bg-red-50 text-red-600 border border-red-100'
    },
    {
      id: 6,
      title: 'خدمة الونش',
      desc: 'نقل سيارتك بأمان إلى أي مكان تريد',
      price: 600,
      icon: <Truck size={28} />,
      iconClass: 'bg-purple-50 text-purple-600 border border-purple-100'
    }
  ];

  return (
    <SectionWrapper id="services" className="bg-white">
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block bg-blue-50 text-secondary px-4 py-1.5 rounded-full font-bold text-sm mb-4">
            خدماتنا
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6">
            خدمات شاملة لسيارتك
          </h2>
          <p className="text-lg text-slate-600">
            نوفر لك مجموعة واسعة من خدمات الصيانة والإصلاح بأعلى معايير الجودة لتضمن سلامة سيارتك على الطريق
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 150}>
              <div 
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 flex flex-col group"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.iconClass}`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-8 flex-1 leading-relaxed">{service.desc}</p>
                
                <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                  <div className="text-start">
                    <div className="text-xs text-slate-500 font-medium tracking-wide">يبدأ من</div>
                    <div className="font-extrabold text-lg text-primary">
                      <AnimatedCounter endValue={service.price} suffix=" جنيه" />
                    </div>
                  </div>
                  <a href="#" className="flex items-center gap-1 font-bold text-primary group-hover:text-secondary transition-colors text-sm">
                    احجز الآن
                    <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}</div>
      </Container>
    </SectionWrapper>
  );
}
