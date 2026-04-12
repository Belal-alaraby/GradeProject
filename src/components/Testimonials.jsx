import React from 'react';
import { Container } from '../layout/Container';
import { SectionWrapper } from '../layout/SectionWrapper';
import { Star, Quote } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "أحمد محمود",
      role: "عميل منذ 2022",
      content: "خدمة ممتازة وسريعة، الفنيين محترفين جداً والمواعيد دقيقة. أنصح بهم بشدة لأي صيانة طارئة.",
      rating: 5
    },
    {
      id: 2,
      name: "سارة خالد",
      role: "عميلة مسجلة",
      content: "غيرت البطارية في مكان عملي بدون أي تعطيل ليومي. فعلاً فكرة رائعة وتطبيق سهل الاستخدام.",
      rating: 5
    },
    {
      id: 3,
      name: "محمد عبدالجواد",
      role: "عميل شهري",
      content: "أفضل خدمة صيانة تعاملت معاها. أسعار واضحة من البداية بدون أي مفاجآت.",
      rating: 4
    }
  ];

  return (
    <SectionWrapper id="testimonials" className="bg-slate-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">آراء عملائنا</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            نفخر بثقة الآلاف من العملاء في خدماتنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Reveal key={review.id} delay={index * 150}>
              <div className="bg-slate-50 rounded-3xl p-8 relative border border-slate-100 hover:shadow-xl hover:bg-white hover:-translate-y-2 transition-all duration-300">
                <Quote className="absolute top-6 left-6 text-blue-100 w-12 h-12 rotate-180" />
                <div className="flex text-yellow-400 mb-6 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < review.rating ? "currentColor" : "none"} className={i >= review.rating ? "text-slate-300" : ""} />
                  ))}
                </div>
                <p className="text-slate-700 mb-8 leading-relaxed italic">"{review.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{review.name}</h4>
                    <p className="text-sm text-slate-500">{review.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
