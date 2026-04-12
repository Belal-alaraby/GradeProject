import React from "react";
import { Container } from "../../layout/Container";
import { SectionWrapper } from "../../layout/SectionWrapper";
import { Star, Quote } from "lucide-react";
import { Reveal } from "../../components/ui/Reveal";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "أحمد محمود",
      role: "عميل مميز",
      content:
        "خدمة ممتازة وسريعة، الفنيين محترفين جداً والمواعيد دقيقة.",
      rating: 5,
    },
    {
      id: 2,
      name: "سارة خالد",
      role: "عميلة مسجلة",
      content:
        "غيرت البطارية في مكان عملي بدون أي تعطيل ليومي. تجربة ممتازة.",
      rating: 5,
    },
    {
      id: 3,
      name: "محمد عبدالجواد",
      role: "عميل شهري",
      content:
        "أفضل خدمة صيانة تعاملت معها. أسعار واضحة بدون مفاجآت.",
      rating: 4,
    },
  ];

  return (
    <SectionWrapper id="testimonials" className="bg-white py-24">
      <Container>

        {/* Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="inline-block bg-blue-50 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            آراء العملاء
          </div>

          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">
            ماذا يقول عملاؤنا؟
          </h2>

          <p className="text-slate-500 text-lg">
            ثقة الآلاف من العملاء هي أكبر دليل على جودة خدمتنا
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {reviews.map((review, index) => (
            <Reveal key={review.id} delay={index * 150}>
              <div className="relative group bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">

                {/* Glow background */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition" />

                {/* Quote */}
                <Quote className="absolute top-6 left-6 text-blue-100 w-10 h-10" />

                {/* Stars */}
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill={i < review.rating ? "currentColor" : "none"}
                      className={i < review.rating ? "text-yellow-400" : "text-slate-300"}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-700 mb-8 leading-relaxed">
                  {review.content}
                </p>

                {/* User */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800">
                      {review.name}
                    </h4>
                    <p className="text-sm text-slate-500">
                      {review.role}
                    </p>
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