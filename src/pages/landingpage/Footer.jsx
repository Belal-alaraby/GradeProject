import React from "react";
import { ShieldCheck, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "../../layout/Container";

// Social Icons
const FacebookIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerData = {
    socials: [
      { id: 1, icon: FacebookIcon, href: "#" },
      { id: 2, icon: TwitterIcon, href: "#" },
      { id: 3, icon: InstagramIcon, href: "#" },
      { id: 4, icon: LinkedinIcon, href: "#" },
    ],
    quickLinks: [
      { id: 1, label: "الرئيسية", href: "#" },
      { id: 2, label: "خدماتنا", href: "#services" },
      { id: 3, label: "كيف يعمل", href: "#how-it-works" },
      { id: 4, label: "الأسعار", href: "#pricing" },
      { id: 5, label: "آراء العملاء", href: "#testimonials" },
    ],
    services: [
      { id: 1, label: "تغيير البطارية", href: "#" },
      { id: 2, label: "تغيير الزيت", href: "#" },
      { id: 3, label: "خدمة الإطارات", href: "#" },
      { id: 4, label: "غسيل السيارة", href: "#" },
      { id: 5, label: "خدمة الطوارئ", href: "#" },
      { id: 6, label: "خدمة الونش", href: "#" },
    ],
    contactInfo: [
      { id: 1, icon: MapPin, value: "القاهرة، مصر" },
      { id: 2, icon: Phone, value: "19777" },
      { 
        id: 3, 
        icon: Mail, 
        value: "info@carma.com"   // ✅ التعديل هنا
      },
    ],
    legal: [
      { id: 1, label: "سياسة الخصوصية", href: "#" },
      { id: 2, label: "الشروط والأحكام", href: "#" },
      { id: 3, label: "الأسئلة الشائعة", href: "#" },
    ],
  };

  return (
    <footer className="bg-[#0B1B3D] text-white pt-20 pb-8 overflow-hidden relative border-t border-[#122A5B]">

      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <Container className="relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6 font-bold text-2xl">
              <div className="bg-blue-600 w-10 h-10 rounded-xl flex items-center justify-center">
                <ShieldCheck size={20} />
              </div>
              CarMA
            </div>

            <p className="text-blue-200/70 text-sm mb-6">
              خدمات صيانة سيارات في موقعك بسرعة واحترافية.
            </p>

            <div className="flex gap-3">
              {footerData.socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.id}
                    href={s.href}
                    className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-blue-600 transition"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4">روابط</h3>
            <ul className="space-y-2 text-sm text-blue-200/70">
              {footerData.quickLinks.map((l) => (
                <li key={l.id}>{l.label}</li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">الخدمات</h3>
            <ul className="space-y-2 text-sm text-blue-200/70">
              {footerData.services.map((s) => (
                <li key={s.id}>{s.label}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-3 text-sm text-blue-200/70">
              {footerData.contactInfo.map((c) => {
                const Icon = c.icon;
                return (
                  <li key={c.id} className="flex items-center gap-2">
                    <Icon size={16} />
                    {c.value}
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 text-xs text-blue-300">
              24/7 متاحين طول الوقت
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-blue-300">
          © {currentYear} CarMA. جميع الحقوق محفوظة.
        </div>

      </Container>
    </footer>
  );
}