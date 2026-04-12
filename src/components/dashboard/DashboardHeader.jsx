import React from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Bell, User } from 'lucide-react';

export function DashboardHeader() {
  const location = useLocation();
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/dashboard': return 'لوحة التحكم';
      case '/dashboard/new-request': return 'طلب خدمة جديدة';
      case '/dashboard/requests': return 'طلباتي';
      case '/dashboard/wallet': return 'المحفظة';
      case '/dashboard/notifications': return 'الإشعارات';
      case '/dashboard/support': return 'الدعم';
      case '/dashboard/profile': return 'الملف الشخصي';
      case '/dashboard/settings': return 'الإعدادات';
      default: return 'لوحة التحكم';
    }
  };
  
  return (
    <header className="h-20 bg-white border-b border-slate-200/50 sticky top-0 z-30 px-8 flex items-center justify-between transition-all duration-300">
      
      {/* Title Section */}
      <div className="flex flex-col">
        <h2 className="text-xl font-bold text-slate-800">{getPageTitle()}</h2>
        <p className="text-sm text-slate-500">مرحباً بك في منصة سيارتك</p>
      </div>

      {/* Right Side Actions (visually left in RTL) */}
      <div className="flex items-center gap-6">
        
        {/* Search */}
        <div className="relative hidden md:flex items-center">
          <input 
            type="text" 
            placeholder="ابحث..." 
            className="w-64 h-10 pr-10 pl-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
          />
          <Search className="absolute right-3 text-slate-400" size={18} />
        </div>

        {/* Notifications */}
        <button className="relative p-2 text-slate-600 hover:text-primary transition-colors hover:bg-slate-50 rounded-full">
          <Bell size={22} />
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
        </button>

        {/* Divider */}
        <div className="h-8 w-px bg-slate-200 hidden md:block"></div>

        {/* User Profile */}
        <div className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-1.5 pr-3 rounded-xl transition-colors">
          <div className="flex flex-col items-end">
            <span className="text-sm font-bold text-slate-700">أحمد محمد</span>
          </div>
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary relative overflow-hidden">
            <User size={20} className="mt-1" />
          </div>
        </div>

      </div>

    </header>
  );
}
