import React from 'react';
import { Settings, Car, Star, MapPin, Clock, PhoneCall, MessageSquare, CarFront, Droplets, Plus, Package, Wallet, Battery, Droplet, CircleDot, Truck, ArrowLeft, CheckCircle2, XCircle, HelpCircle, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/Button'; // reusing existing button

export function DashboardHome() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      
      {/* Welcome Banner */}
      <div className="bg-primary rounded-2xl p-8 text-white relative overflow-hidden shadow-lg">
        {/* Decorative background elements if needed */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="flex items-center justify-between relative z-10">
          <div>
            <h1 className="text-3xl font-extrabold mb-2 flex items-center gap-3">
              مرحباً، أحمد! 👋
            </h1>
            <p className="text-blue-100 text-lg">نتمنى لك يوم سعيد. كيف يمكننا مساعدتك اليوم؟</p>
          </div>
          
          <div className="hidden md:flex bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
             {/* Simple car graphic matched from the image */}
             <div className="text-white relative">
               <CarFront size={64} className="text-red-500 fill-red-500 drop-shadow-md" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-3 bg-red-800 rounded-sm mt-1"></div>
             </div>
          </div>
        </div>
      </div>

      {/* Active Order Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-800">الطلب النشط</h2>
          <div className="flex items-center gap-3">
            <span className="text-slate-500 text-sm font-medium">#12845</span>
            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              قيد التنفيذ
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200/60 rounded-2xl shadow-sm p-6 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-slate-100">
            
            {/* Service Info (Right visual side in RTL) */}
            <div className="flex items-start gap-4 p-2">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-orange-500 shrink-0">
                <Droplets size={28} className="fill-orange-500/20" />
              </div>
              <div className="space-y-3 flex-1">
                <div>
                  <h3 className="font-bold text-lg text-slate-800">تغيير زيت المحرك</h3>
                  <p className="text-sm text-slate-500">زيت كاسترول 40-5W</p>
                </div>
                
                <div className="space-y-2 mt-4 pt-4 border-t border-slate-50 border-dashed">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <MapPin size={16} className="text-slate-400" />
                    <span>القاهرة، مدينة نصر</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Clock size={16} className="text-slate-400" />
                    <span>متوقع خلال 25 دقيقة</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mechanic Info (Left visual side in RTL) */}
            <div className="bg-slate-50/50 rounded-xl p-4 md:m-2">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center">
                    <UserCircleIcon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">محمد أحمد</h4>
                    <p className="text-xs text-slate-500">فني متخصص</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-md shadow-sm border border-slate-100">
                  <span className="font-bold text-sm">4.9</span>
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-white border border-slate-200 text-slate-700 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
                  رسالة
                </button>
                <button className="flex-1 bg-primary text-white py-2.5 rounded-xl font-bold text-sm hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 shadow-md shadow-primary/20">
                  اتصال
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Actions */}
          <div className="mt-6 pt-6 border-t border-slate-100 flex gap-4">
            <button className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors text-sm">
              تفاصيل الطلب
            </button>
            <button className="flex-1 bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors text-sm flex items-center justify-center gap-2 shadow-md shadow-primary/20">
              <MapPin size={18} />
              تتبع الطلب
            </button>
          </div>
        </div>
      </div>
    
      {/* Quick Actions Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        {/* Box 1 */}
        <button className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-4 hover:shadow-md transition-all group">
          <div className="w-14 h-14 bg-green-500 text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <Plus size={28} />
          </div>
          <span className="font-bold text-slate-800">احجز خدمة جديدة</span>
        </button>

        {/* Box 2 */}
        <button className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-4 hover:shadow-md transition-all group">
          <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <MapPin size={28} />
          </div>
          <span className="font-bold text-slate-800">تتبع الطلب</span>
        </button>

        {/* Box 3 */}
        <button className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-4 hover:shadow-md transition-all group">
          <div className="w-14 h-14 bg-purple-500 text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <Package size={28} />
          </div>
          <span className="font-bold text-slate-800">إعادة طلب خدمة</span>
        </button>

        {/* Box 4 */}
        <button className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-4 hover:shadow-md transition-all group">
          <div className="w-14 h-14 bg-orange-500 text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <Wallet size={28} />
          </div>
          <span className="font-bold text-slate-800">شحن المحفظة</span>
        </button>

      </div>

      {/* Quick Services Section */}
      <div className="pt-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">الخدمات السريعة</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          
          {[
            { name: "تغيير البطارية", price: "500 جنيه", icon: <Battery size={24} />, bg: "bg-blue-600" },
            { name: "تغيير الزيت", price: "350 جنيه", icon: <Droplet size={24} />, bg: "bg-orange-500" },
            { name: "خدمة الإطارات", price: "250 جنيه", icon: <CircleDot size={24} />, bg: "bg-slate-600" },
            { name: "غسيل السيارة", price: "200 جنيه", icon: <Droplets size={24} />, bg: "bg-cyan-500" },
            { name: "خدمة الطوارئ", price: "300 جنيه", icon: <PhoneCall size={24} />, bg: "bg-red-500" },
            { name: "خدمة الونش", price: "600 جنيه", icon: <Truck size={24} />, bg: "bg-purple-500" },
          ].map((service, idx) => (
            <button key={idx} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-3 hover:shadow-md hover:-translate-y-1 transition-all group">
              <div className={`w-14 h-14 ${service.bg} text-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}>
                {service.icon}
              </div>
              <div className="text-center space-y-1">
                <span className="block font-bold text-slate-800 text-sm whitespace-nowrap">{service.name}</span>
                <span className="block text-xs text-slate-500">{service.price}</span>
              </div>
            </button>
          ))}
          
        </div>
      </div>

      {/* Bottom Section: Wallet, Support & Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
        
        {/* Recent Orders (Right Column - taking 2/3 width) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold text-slate-800">الطلبات الأخيرة</h2>
            <button className="text-secondary text-sm font-bold flex items-center gap-1 hover:text-primary transition-colors">
              عرض الكل
              <ArrowLeft size={16} />
            </button>
          </div>
          
          <div className="space-y-3">
            {[
              { name: "تغيير الزيت", date: "25 مارس 2026", price: "350 جنيه", status: "مكتمل", icon: <Droplet size={24} />, bg: "bg-orange-500", statusBg: "bg-green-100", statusColor: "text-green-700", StatusIcon: CheckCircle2 },
              { name: "تغيير البطارية", date: "20 مارس 2026", price: "500 جنيه", status: "مكتمل", icon: <Battery size={24} />, bg: "bg-blue-600", statusBg: "bg-green-100", statusColor: "text-green-700", StatusIcon: CheckCircle2 },
              { name: "غسيل السيارة", date: "15 مارس 2026", price: "200 جنيه", status: "مكتمل", icon: <Droplets size={24} />, bg: "bg-cyan-500", statusBg: "bg-green-100", statusColor: "text-green-700", StatusIcon: CheckCircle2 },
              { name: "خدمة الإطارات", date: "10 مارس 2026", price: "250 جنيه", status: "ملغي", icon: <CircleDot size={24} />, bg: "bg-slate-600", statusBg: "bg-red-100", statusColor: "text-red-700", StatusIcon: XCircle },
            ].map((order, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${order.bg} text-white rounded-xl flex items-center justify-center shadow-sm`}>
                    {order.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{order.name}</h4>
                    <p className="text-xs text-slate-500">{order.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className={`hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${order.statusBg} ${order.statusColor}`}>
                    <span>{order.status}</span>
                    <order.StatusIcon size={14} />
                  </div>
                  <div className="font-bold text-slate-800 text-sm">{order.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wallet & Support Section (Left Column - taking 1/3 width) */}
        <div className="space-y-6">
          
          {/* Wallet Card */}
          <div className="bg-gradient-to-br from-[#a855f7] to-[#9333ea] rounded-3xl p-6 text-white shadow-lg shadow-purple-500/20">
            <div className="flex justify-between items-start mb-6">
              <h3 className="font-bold text-lg">المحفظة</h3>
              <Wallet size={24} className="text-white" />
            </div>
            <div className="mb-6 flex justify-end">
              <div className="text-right">
                <p className="text-purple-100 text-sm mb-1">الرصيد الحالي</p>
                <div className="text-3xl font-bold flex items-center justify-end gap-1">
                  1,250 <span className="text-xl font-normal">جنيه</span>
                </div>
              </div>
            </div>
            <div className="bg-purple-800/20 rounded-xl p-4 mb-6">
              <div className="flex flex-col items-end gap-1 text-right">
                 <p className="text-xs text-purple-200">آخر معاملة</p>
                 <p className="text-sm font-semibold">دفع 350 جنيه - تغيير الزيت</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-purple-400/30 text-white font-bold py-3 rounded-xl text-sm hover:bg-purple-400/50 transition-colors backdrop-blur-sm">العمليات</button>
              <button className="flex-1 bg-white text-purple-600 font-bold py-3 rounded-xl text-sm hover:bg-slate-50 transition-colors">شحن الرصيد</button>
            </div>
          </div>

          {/* Support Card */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg text-slate-800">الدعم</h3>
              <MessageCircle size={24} className="text-blue-500" />
            </div>
            <p className="text-slate-500 text-sm mb-6">هل تحتاج مساعدة؟ نحن هنا لخدمتك</p>
            
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 bg-blue-50/50 hover:bg-blue-50 text-blue-700 rounded-xl transition-colors group border border-blue-100">
                <div className="flex items-center gap-3">
                  <HelpCircle size={18} />
                  <span className="font-bold text-sm">الأسئلة الشائعة</span>
                </div>
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              
              <button className="w-full flex items-center justify-between p-3 bg-green-50/50 hover:bg-green-50 text-green-700 rounded-xl transition-colors group border border-green-100">
                <div className="flex items-center gap-3">
                  <MessageSquare size={18} />
                  <span className="font-bold text-sm">محادثة مباشرة</span>
                </div>
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              </button>

              <button className="w-full flex items-center justify-between p-3 bg-purple-50/50 hover:bg-purple-50 text-purple-700 rounded-xl transition-colors group border border-purple-100">
                <div className="flex items-center gap-3">
                  <PhoneCall size={18} />
                  <span className="font-bold text-sm">اتصل بنا 19777</span>
                </div>
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

// Inline helper for Avatar icon to match image
function UserCircleIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
      <path d="M4 22v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2"></path>
    </svg>
  )
}
