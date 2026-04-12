import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Container } from '../../layout/Container';

// Custom SVG components since lucide-react removed brand icons
const FacebookIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const InstagramIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerData = {
    socials: [
      { id: 1, icon: FacebookIcon, href: '#' },
      { id: 2, icon: TwitterIcon, href: '#' },
      { id: 3, icon: InstagramIcon, href: '#' },
      { id: 4, icon: LinkedinIcon, href: '#' }
    ],
    quickLinks: [
      { id: 1, label: 'الرئيسية', href: '#' },
      { id: 2, label: 'خدماتنا', href: '#services' },
      { id: 3, label: 'كيف يعمل', href: '#how-it-works' },
      { id: 4, label: 'الأسعار', href: '#pricing' },
      { id: 5, label: 'آراء العملاء', href: '#testimonials' }
    ],
    services: [
      { id: 1, label: 'تغيير البطارية', href: '#' },
      { id: 2, label: 'تغيير الزيت', href: '#' },
      { id: 3, label: 'خدمة الإطارات', href: '#' },
      { id: 4, label: 'غسيل السيارة', href: '#' },
      { id: 5, label: 'خدمة الطوارئ', href: '#' },
      { id: 6, label: 'خدمة الونش', href: '#' }
    ],
    contactInfo: [
      { id: 1, icon: MapPin, value: 'القاهرة، جمهورية مصر العربية' },
      { id: 2, icon: Phone, value: '19777' },
      { id: 3, icon: Mail, value: 'info@sayartak.com.eg' }
    ],
    legal: [
      { id: 1, label: 'سياسة الخصوصية', href: '#' },
      { id: 2, label: 'الشروط والأحكام', href: '#' },
      { id: 3, label: 'الأسئلة الشائعة', href: '#' }
    ]
  };
  
  return (
    <footer className="bg-[#0B1B3D] text-white pt-20 pb-8 overflow-hidden relative border-t border-[#122A5B]">
      {/* Background radial gradient similar to image */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & About */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 text-white font-extrabold text-2xl mb-6 group">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20">
                <ShieldCheck size={22} />
              </div>
              <div className="leading-tight">
                سيارتك
                <span className="block text-[10px] text-blue-300 font-medium font-sans mt-0.5">خدمة صيانة السيارات</span>
              </div>
            </a>
            <p className="text-blue-100/70 text-sm mb-8 leading-relaxed max-w-xs">
              نقدم لك خدمات صيانة وإصلاح سيارتك في موقعك بأعلى معايير الجودة والاحترافية.
            </p>
            <div className="flex gap-4">
              {footerData.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.id} href={social.href} className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-blue-200 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-sm">
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg text-white mb-6">روابط سريعة</h4>
            <ul className="space-y-4 relative z-10">
              {footerData.quickLinks.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="text-blue-200/70 hover:text-white hover:translate-x-[-4px] transition-all inline-block text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-bold text-lg text-white mb-6">الخدمات</h4>
            <ul className="space-y-4">
              {footerData.services.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="text-blue-200/70 hover:text-white hover:translate-x-[-4px] transition-all inline-block text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-bold text-lg text-white mb-6">تواصل معنا</h4>
            <ul className="space-y-5 mb-8">
              {footerData.contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id} className="flex items-start gap-4 text-sm">
                    <Icon size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-200/70">{item.value}</span>
                  </li>
                )
              })}
            </ul>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-sm w-fit">
              <div className="bg-blue-500/20 text-blue-400 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock size={20} />
              </div>
              <div className="text-start">
                <p className="text-white font-bold text-sm mb-0.5">ساعات العمل</p>
                <p className="text-blue-200/70 text-xs">24/7 - على مدار الساعة</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-blue-200/50 text-xs">
            © {currentYear} سيارتك. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
            {footerData.legal.map((item, index) => (
              <React.Fragment key={item.id}>
                <a href={item.href} className="text-blue-200/50 hover:text-white transition-colors">{item.label}</a>
                {index < footerData.legal.length - 1 && <span className="text-white/10">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
