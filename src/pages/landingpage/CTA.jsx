import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../layout/Container";
import { SectionWrapper } from "../../layout/SectionWrapper";
import { ArrowLeft } from "lucide-react";

export default function CTA() {
  const navigate = useNavigate();
  return (
    <SectionWrapper className="py-14">
      <Container>

        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 md:px-12 py-14 text-center group">

          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 2px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Stronger glow layers */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl group-hover:scale-110 transition duration-700" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-xl mx-auto">

            {/* Better badge */}
            <div className="inline-flex items-center px-4 py-1 mb-6 text-xs font-bold text-white/90 bg-white/10 rounded-full backdrop-blur border border-white/10">
              متاح في أي وقت - بدون انتظار
            </div>

            {/* Strong headline */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              خليك على الطريق بدون تعطيل
              <br />
              إحنا نوصل لك فورًا
            </h2>

            {/* Value-focused description */}
            <p className="text-blue-100 text-sm md:text-base mb-8 leading-relaxed">
              احجز صيانة سيارتك في دقائق وخلي الفني ييجي لحد عندك أينما كنت
              بدون أي مجهود
            </p>

            {/* Primary CTA */}
            <button 
              onClick={() => navigate('/login')}
              className="group/button inline-flex items-center gap-2 bg-white text-primary px-8 py-3.5 rounded-full font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >

              احجز خدمتك الآن

              <ArrowLeft
                size={16}
                className="group-hover/button:-translate-x-1 transition-transform"
              />
            </button>

          </div>
        </div>

      </Container>
    </SectionWrapper>
  );
}