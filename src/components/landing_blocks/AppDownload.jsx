import React from 'react';
import { Apple, Play, Check, Smartphone } from 'lucide-react';
import { Container } from '../../layout/Container';
import { SectionWrapper } from '../../layout/SectionWrapper';

export function AppDownload() {
  const features = [
    'تتبع الطلب في الوقت الفعلي',
    'إشعارات فورية بحالة الطلب',
    'عروض حصرية لمستخدمي التطبيق'
  ];

  return (
    <SectionWrapper id="app-download" className="bg-gradient-to-br from-primary to-blue-800 py-24 overflow-hidden relative">
      {/* Background dynamic patterns */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 4px 4px, white 2px, transparent 0)', backgroundSize: '40px 40px' }} />

      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
          
          {/* Content - Right Side in RTL */}
          <div className="flex-1 text-white text-center lg:text-start w-full">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2 rounded-full font-bold text-sm mb-8 shadow-sm">
              <Smartphone size={18} /> حمل التطبيق الآن
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              احجز خدماتك بسهولة 
              <br className="hidden md:block" /> من موبايلك
            </h2>
            
            <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              حمل تطبيق سيارتك دلوقتي واستمتع بتجربة حجز سهلة وسريعة مع عروض خاصة لمستخدمي التطبيق
            </p>
            
            <ul className="space-y-5 mb-12 w-fit mx-auto lg:mx-0 text-start">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 shadow-inner border border-white/5">
                    <Check size={16} className="text-blue-100" />
                  </div>
                  <span className="text-blue-50 font-medium text-lg tracking-wide">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <button className="flex items-center justify-center gap-3 bg-white text-slate-800 px-6 py-3.5 rounded-2xl hover:bg-slate-50 transition-all hover:scale-105 shadow-xl w-48 border border-white/20">
                <Apple size={32} />
                <div className="text-start">
                  <div className="text-[11px] text-slate-500 font-bold mb-0.5">متاح على</div>
                  <div className="font-extrabold leading-tight text-lg">App Store</div>
                </div>
              </button>
              
              <button className="flex items-center justify-center gap-3 bg-white text-slate-800 px-6 py-3.5 rounded-2xl hover:bg-slate-50 transition-all hover:scale-105 shadow-xl w-48 border border-white/20">
                <Play size={30} className="text-blue-600 fill-current" />
                <div className="text-start">
                  <div className="text-[11px] text-slate-500 font-bold mb-0.5">متاح على</div>
                  <div className="font-extrabold leading-tight text-lg">Google Play</div>
                </div>
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-12">
              <div className="text-center lg:text-start">
                <div className="text-3xl font-black text-white mb-1">4.8/5</div>
                <div className="text-blue-200 text-sm font-medium">تقييم</div>
              </div>
              <div className="text-center lg:text-start">
                <div className="text-3xl font-black text-white mb-1">+500K</div>
                <div className="text-blue-200 text-sm font-medium">تحميل</div>
              </div>
            </div>
          </div>
          
          {/* Phone Mockup - Left Side in RTL */}
          <div className="flex-1 w-full relative flex justify-center lg:justify-end mt-10 lg:mt-0">
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300 rounded-full blur-[120px] opacity-20 z-0"></div>
            
            <div className="relative z-10 w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-[12px] border-slate-900 shadow-2xl overflow-hidden transform hover:-translate-y-3 hover:shadow-cyan-500/20 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1486262715619-6708146bcd8c?auto=format&fit=crop&q=80" 
                alt="تطبيق سيارتك" 
                className="w-full h-full object-cover"
              />
              
              {/* Phone Notch */}
              <div className="absolute top-0 inset-x-1/4 h-7 w-1/2 bg-slate-900 rounded-b-2xl z-20"></div>
              
              {/* Floating Notification Bubble */}
              <div className="absolute top-24 -right-14 md:-right-8 bg-white pr-4 pl-3 py-3 rounded-2xl shadow-2xl flex items-center gap-4 animate-[bounce_3s_infinite] shadow-black/30 z-30 border border-slate-100">
                <div className="text-start">
                  <h4 className="font-extrabold text-sm text-slate-800 mb-1 leading-tight">تم الحجز</h4>
                  <p className="text-[11px] text-slate-500 font-medium">الفني في الطريق</p>
                </div>
                <div className="bg-[#25D366] text-white w-9 h-9 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                  <Check size={18} strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </Container>
    </SectionWrapper>
  );
}
