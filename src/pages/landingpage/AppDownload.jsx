import React from "react";
import { Apple, Play, Check, Smartphone } from "lucide-react";
import { Container } from "../../layout/Container";
import { SectionWrapper } from "../../layout/SectionWrapper";

export default function AppDownload() {
  const features = [
    "تتبع الطلب في الوقت الفعلي",
    "إشعارات فورية بحالة الطلب",
    "عروض حصرية لمستخدمي التطبيق",
  ];

  return (
    <SectionWrapper
      id="app-download"
      className="bg-gradient-to-br from-primary to-blue-800 py-24 overflow-hidden relative"
    >
      {/* background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 4px 4px, white 2px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">

          {/* TEXT */}
          <div className="flex-1 text-white text-center lg:text-start">

            <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full mb-6">
              <Smartphone size={18} />
              حمل التطبيق الآن
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              احجز خدمات السيارات
              <br />
              من موبايلك بسهولة
            </h2>

            <p className="text-blue-100 text-lg mb-10 max-w-xl">
              تجربة ذكية وسريعة لحجز خدمات الصيانة في أي وقت ومن أي مكان
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Check size={16} className="text-blue-100" />
                  </div>
                  <span className="text-blue-50">{feature}</span>
                </li>
              ))}
            </ul>

            {/* buttons */}
            <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
              <button className="bg-white text-black px-6 py-3 rounded-xl flex items-center gap-3 font-semibold hover:scale-105 transition shadow-lg">
                <Apple size={20} />
                App Store
              </button>

              <button className="bg-white text-black px-6 py-3 rounded-xl flex items-center gap-3 font-semibold hover:scale-105 transition shadow-lg">
                <Play size={20} />
                Google Play
              </button>
            </div>
          </div>

          {/* IMAGE - BIGGER + STYLE */}
          <div className="flex-1 flex justify-center">
            <div className="relative group">

              {/* glow background */}
              <div className="absolute -inset-6 bg-white/10 blur-3xl rounded-[2.5rem] opacity-80 group-hover:scale-105 transition duration-700" />

              {/* border glow frame */}
              <div className="absolute -inset-2 rounded-[2.5rem] border border-white/20" />

              <img
                src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1200&q=85"
                alt="car service app"
                className="w-[420px] md:w-[520px] lg:w-[560px] rounded-[2rem] shadow-2xl object-cover relative z-10 transform group-hover:scale-[1.02] transition duration-500"
              />
            </div>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}