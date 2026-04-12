import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  PlusCircle, 
  ClipboardList, 
  Wallet, 
  Bell, 
  HeadphonesIcon, 
  UserCircle, 
  Settings, 
  LogOut,
  CarFront
} from 'lucide-react';

export function Sidebar() {
  const location = useLocation();

  const navItems = [
    { label: 'الرئيسية', icon: <LayoutDashboard size={20} />, href: '/dashboard' },
    { label: 'طلب خدمة', icon: <PlusCircle size={20} />, href: '/dashboard/new-request' },
    { label: 'طلباتي', icon: <ClipboardList size={20} />, href: '/dashboard/requests' },
    { label: 'المحفظة', icon: <Wallet size={20} />, href: '/dashboard/wallet' },
    { label: 'الإشعارات', icon: <Bell size={20} />, href: '/dashboard/notifications' },
    { label: 'الدعم', icon: <HeadphonesIcon size={20} />, href: '/dashboard/support' },
    { label: 'الملف الشخصي', icon: <UserCircle size={20} />, href: '/dashboard/profile' },
    { label: 'الإعدادات', icon: <Settings size={20} />, href: '/dashboard/settings' },
  ];

  return (
    <aside className="fixed right-0 top-0 h-screen w-64 bg-primary text-white flex flex-col z-40 transition-all duration-300">
      
      {/* Brand Logo */}
      <Link to="/" className="h-20 flex items-center gap-3 px-6 border-b border-primary-dark/30 hover:bg-white/5 transition-colors cursor-pointer">
        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary">
          <CarFront size={24} />
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl leading-tight">سيارتك</h1>
          <span className="text-xs text-blue-200">لوحة التحكم</span>
        </div>
      </Link>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-1 custom-scrollbar">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.href || (item.href !== '/dashboard' && location.pathname.startsWith(item.href));
          
          return (
            <React.Fragment key={item.href}>
              {index === 5 && <div className="h-px bg-primary-dark/30 my-4 mx-2"></div>}
              <Link 
                to={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                  ${isActive 
                    ? 'bg-white/10 text-white font-bold' 
                    : 'text-blue-100 hover:bg-white/5 hover:text-white'
                  }`}
              >
                <div className={`${isActive ? 'text-white' : 'text-blue-200 group-hover:text-white transition-colors'}`}>
                  {item.icon}
                </div>
                <span>{item.label}</span>
                {item.label === 'الإشعارات' && (
                  <span className="mr-auto w-2 h-2 rounded-full bg-accent-orange"></span>
                )}
              </Link>
            </React.Fragment>
          );
        })}
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-primary-dark/30">
        <Link 
          to="/"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-blue-200 hover:bg-white/5 hover:text-white transition-all duration-200"
        >
          <LogOut size={20} className="transform rotate-180" />
          <span>تسجيل الخروج</span>
        </Link>
      </div>
      
    </aside>
  );
}
