import { MapPin, Activity, ShieldCheck, Users, Zap, CheckCircle2 } from 'lucide-react';
import { Container } from '../../layout/Container';
import { SectionWrapper } from '../../layout/SectionWrapper';
import { Reveal } from '../ui/Reveal';

export function WhyUs() {
  const reasons = [
    {
      id: 1,
      title: 'الخدمة تصلك أينما كنت',
      desc: 'لا حاجة للذهاب لورشة الصيانة، نأتي إليك في منزلك أو مكتبك',
      icon: <MapPin size={24} />,
      iconBg: 'bg-blue-600',
      shapeBg: 'bg-blue-50'
    },
    {
      id: 2,
      title: 'تتبع مباشر للطلب',
      desc: 'تابع موقع الفني والوقت المتوقع للوصول في الوقت الفعلي',
      icon: <Activity size={24} />,
      iconBg: 'bg-green-500',
      shapeBg: 'bg-green-50'
    },
    {
      id: 3,
      title: 'دفع آمن',
      desc: 'خيارات دفع متعددة وآمنة مع حماية كاملة لبياناتك',
      icon: <ShieldCheck size={24} />,
      iconBg: 'bg-purple-500',
      shapeBg: 'bg-purple-50'
    },
    {
      id: 4,
      title: 'فنيون موثوقون',
      desc: 'جميع فنيينا معتمدون ومدربون بأعلى المعايير المهنية',
      icon: <Users size={24} />,
      iconBg: 'bg-orange-500',
      shapeBg: 'bg-orange-50'
    },
    {
      id: 5,
      title: 'سرعة الاستجابة',
      desc: 'استجابة فورية وخدمة سريعة في أقل من 30 دقيقة',
      icon: <Zap size={24} />,
      iconBg: 'bg-red-500',
      shapeBg: 'bg-red-50'
    },
    {
      id: 6,
      title: 'ضمان الجودة',
      desc: 'ضمان شامل على جميع الخدمات والقطع المستخدمة',
      icon: <CheckCircle2 size={24} />,
      iconBg: 'bg-cyan-500',
      shapeBg: 'bg-cyan-50'
    }
  ];

  return (
    <SectionWrapper id="why-us" className="bg-white py-20">
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block bg-blue-50 text-secondary px-6 py-2 rounded-full font-bold text-sm mb-6">
            لماذا نحن
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
            لماذا تختار سيارتك؟
          </h2>
          <p className="text-lg text-slate-500">
            نقدم لك تجربة متميزة تجمع بين الجودة والسرعة والموثوقية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Reveal key={reason.id} delay={index * 150}>
              <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group relative overflow-hidden flex flex-col h-full text-start">
                
                {/* Decorative background shape */}
                <div className={`absolute -left-12 -top-12 w-40 h-40 rounded-full opacity-70 transition-transform duration-500 group-hover:scale-150 ${reason.shapeBg}`}></div>
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md relative z-10 transition-transform duration-300 group-hover:scale-110 ${reason.iconBg}`}>
                  {reason.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3 relative z-10">{reason.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm relative z-10 flex-grow">{reason.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
