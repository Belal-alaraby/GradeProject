import React, { useState, useEffect } from "react";
import { ShieldCheck, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Container } from "../../layout/Container";
import repairIcon from "../../assets/repair.png";
export  default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "الرئيسية", href: "#", active: true },
    { label: "الخدمات", href: "#services" },
    { label: "كيف يعمل", href: "#how-it-works" },
    { label: "الأسعار", href: "#pricing" },
    { label: "آراء العملاء", href: "#testimonials" },
  ];

  return (
    <nav
      className={`border-b border-slate-200/50 bg-white/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg py-1" : "shadow-sm py-2"}`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* 1. Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="flex items-center gap-2.5 text-primary font-extrabold text-2xl group"
            >
              <div
                className="w-9 h-9 bg-primary group-hover:bg-secondary group-hover:scale-105 transition-all duration-300"
                style={{
                  WebkitMaskImage: `url(${repairIcon})`,
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskImage: `url(${repairIcon})`,
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
                aria-label="CarMa Logo"
              />
              <div className="leading-tight">
                CarMa
                <span className="block text-xs text-slate-500 font-medium">
                  خدمة صيانة السيارات
                </span>
              </div>
            </a>
          </div>

          {/* 2. Centered Navigation Links */}
          <div className="hidden lg:flex items-center justify-center gap-8 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-semibold text-base transition-colors ${link.active ? "text-primary" : "text-slate-500 hover:text-primary"}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="secondary">تسجيل الدخول</Button>
            <Button variant="primary">إنشاء حساب</Button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-primary hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-100 py-4 pb-6 space-y-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 rounded-lg font-semibold ${link.active ? "bg-blue-50 text-primary" : "text-slate-600 hover:bg-slate-50"}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3 px-4 pt-4 border-t border-slate-100">
              <Button variant="secondary" className="w-full justify-center">
                تسجيل الدخول
              </Button>
              <Button variant="primary" className="w-full justify-center">
                إنشاء حساب
              </Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
