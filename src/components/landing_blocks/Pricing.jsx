import React from 'react';
import { Check, Star } from 'lucide-react';
import { Container } from '../../layout/Container';
import { SectionWrapper } from '../../layout/SectionWrapper';
import { Reveal } from '../ui/Reveal';

export function Pricing() {
  const plans = [
    {
      id: 1,
      name: 'الباقة الأساسية',
      nameBg: 'bg-slate-700',
      price: '999',
      desc: 'مثالية للاستخدام الشخصي',
      popular: false,
      features: [
        'خصم 10% على جميع الخدمات',
        'خدمة فحص دوري مجانية',
        'دعم فني على مدار الساعة',
        'أولوية في الحجز',
        'تقارير الصيانة الشهرية'
      ],
      buttonClass: 'bg-slate-100 text-slate-700 hover:bg-slate-200'
    },
    {
      id: 2,
      name: 'الباقة المميزة',
      nameBg: 'bg-primary-dark', // Darker blue matching the theme
      price: '1,699',
      desc: 'الأكثر شعبية للعائلات',
      popular: true,
      features: [
        'خصم 20% على جميع الخدمات',
        'خدمتين فحص مجانية شهرياً',
        'دعم فني VIP على مدار الساعة',
        'أولوية قصوى في الحجز',
        'تقارير مفصلة وتوصيات',
        'خدمة غسيل مجانية شهرياً',
        'تأمين شامل على الخدمات'
      ],
      buttonClass: 'bg-primary-dark text-white hover:bg-slate-800'
    },
    {
      id: 3,
      name: 'باقة الشركات',
      nameBg: 'bg-purple-600',
      price: '3,499',
      desc: 'للشركات والأساطيل',
      popular: false,
      features: [
        'خصم 30% على جميع الخدمات',
        'فحص دوري غير محدود',
        'مدير حساب مخصص',
        'أولوية قصوى وخدمة فورية',
        'تقارير وإحصائيات تفصيلية',
        'صيانة وقائية مجدولة',
        'تأمين شامل وضمانات ممتدة',
        'فاتورة موحدة شهرياً'
      ],
      buttonClass: 'bg-slate-100 text-slate-700 hover:bg-slate-200'
    }
  ];

  return (
    <SectionWrapper id="pricing" className="bg-white py-20 pb-32">
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block bg-blue-50 text-secondary px-6 py-2 rounded-full font-bold text-sm mb-6 shadow-sm">
            الأسعار
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-4">
            اختر الباقة المناسبة لك
          </h2>
          <p className="text-lg text-slate-500">
            باقات مرنة تناسب احتياجاتك وميزانيتك مع ضمان أفضل قيمة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 150}>
              <div 
                className={`relative bg-white rounded-3xl flex flex-col items-center p-8 text-center transition-transform duration-300 hover:-translate-y-2
                  ${plan.popular 
                    ? 'border-2 border-primary-dark shadow-2xl md:scale-105 z-10 py-12' 
                    : 'border border-slate-100 shadow-xl shadow-slate-200/50'
                  }`}
              >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-dark text-white px-5 py-1.5 rounded-full flex items-center gap-1.5 text-sm font-bold shadow-lg w-max">
                  <Star size={16} className="fill-current" /> الأكثر شعبية
                </div>
              )}

              <div className={`text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 ${plan.nameBg}`}>
                {plan.name}
              </div>

              <div className="flex flex-col items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-400">جنيه</span>
                  <span className="text-5xl font-black text-slate-800 tracking-tight">{plan.price}</span>
                </div>
                <span className="text-slate-400 mt-2 text-sm font-medium">شهرياً</span>
              </div>

              <div className="text-slate-500 text-sm font-medium mt-4 mb-8">
                {plan.desc}
              </div>

              <div className="w-full h-px bg-slate-100 mb-8"></div>

              <ul className="flex flex-col gap-4 w-full text-start mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className={`mt-0.5 flex-shrink-0 ${plan.popular ? 'text-primary-dark' : 'text-green-500'}`} />
                    <span className="text-slate-600 font-medium text-[15px]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-full font-bold transition-colors ${plan.buttonClass}`}>
                اشترك الآن
              </button>
            </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-500 font-medium mb-3">هل تحتاج باقة مخصصة؟</p>
          <a href="#" className="font-bold text-primary hover:text-secondary underline underline-offset-8 decoration-2 decoration-blue-200 hover:decoration-secondary transition-all">
            تواصل معنا للحصول على عرض خاص
          </a>
        </div>
      </Container>
    </SectionWrapper>
  );
}
