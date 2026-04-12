import React, { useState } from 'react';
import { Check, CheckCircle, Info, Trash2, Star, AlertCircle } from 'lucide-react';

export function Notifications() {
  const [activeTab, setActiveTab] = useState('all');

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'info',
      title: 'تم قبول الطلب',
      time: 'منذ ساعة',
      desc: 'تم قبول طلبك #12848 وجاري تعيين فني لك.',
      hasActions: false,
      icon: <Info size={24} />,
      iconColors: 'bg-blue-100/50 text-blue-500 border border-blue-200'
    },
    {
      id: 2,
      type: 'success',
      title: 'تم إضافة رصيد',
      time: 'منذ ساعتين',
      desc: 'تم إضافة 500 جنيه إلى محفظتك بنجاح.',
      hasActions: false,
      icon: <CheckCircle size={24} />,
      iconColors: 'bg-green-100/50 text-green-500 border border-green-200'
    },
    {
      id: 3,
      type: 'warning',
      title: 'تذكير بالموعد',
      time: 'منذ 3 ساعات',
      desc: 'لديك موعد لخدمة غسيل السيارة غداً الساعة 10:00 صباحاً.',
      hasActions: false,
      icon: <AlertCircle size={24} />,
      iconColors: 'bg-amber-100/50 text-amber-500 border border-amber-200'
    },
    {
      id: 4,
      type: 'info',
      title: 'عرض خاص',
      time: 'منذ يوم',
      desc: 'احصل على خصم 20% على خدمة تغيير الزيت هذا الأسبوع!',
      hasActions: false,
      icon: <Info size={24} />,
      iconColors: 'bg-blue-100/50 text-blue-500 border border-blue-200'
    }
  ]);

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="space-y-6 animate-fade-in-up pb-12 relative">
      
      {/* Header Banner */}
      <div className="bg-[#1e3a8a] text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl shadow-blue-900/10">
         <div>
            <h2 className="text-3xl font-bold mb-2 text-right">الإشعارات</h2>
            <p className="text-blue-200 text-sm">لديك 0 إشعار جديدة</p>
         </div>
         <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-6 py-3 rounded-xl border border-white/10 backdrop-blur-sm text-sm font-bold" dir="ltr">
            <Check size={18} />
            تعليم الكل كمقروء
         </button>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl p-1.5 border border-slate-100 shadow-sm flex items-center">
         <button 
           onClick={() => setActiveTab('all')}
           className={`flex-1 py-3.5 rounded-xl text-[15px] font-bold transition-all ${
             activeTab === 'all' ? 'bg-[#1e3a8a] text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
           }`}
         >
            جميع الإشعارات (6)
         </button>
         <button 
           onClick={() => setActiveTab('unread')}
           className={`flex-1 py-3.5 rounded-xl text-[15px] font-bold transition-all ${
             activeTab === 'unread' ? 'bg-[#1e3a8a] text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
           }`}
         >
            غير المقروءة
         </button>
      </div>

      {/* List */}
      <div className="space-y-4">
         {notifications.map((notif) => (
            <div key={notif.id} className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8 flex flex-col md:flex-row justify-between gap-6 hover:shadow-md transition-shadow">
               
               {/* RTL Start / Physical Right - Icon & Desc */}
               <div className="flex-1 text-right flex flex-col items-start">
                  <div className="flex items-center justify-start gap-4 mb-4">
                     <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${notif.iconColors}`}>
                        {notif.icon}
                     </div>
                     <button 
                       onClick={() => removeNotification(notif.id)}
                       className="text-slate-300 hover:text-red-500 transition-colors"
                     >
                        <Trash2 size={18} />
                     </button>
                  </div>
                  <p className="text-slate-600 font-medium text-[15px] leading-relaxed">{notif.desc}</p>
               </div>

               {/* RTL End / Physical Left - Title & Time & Actions */}
               <div className="flex flex-col items-end text-right w-full md:w-64">
                  <h3 className="font-bold text-slate-800 text-[17px] mb-1">{notif.title}</h3>
                  <span className="text-slate-400 text-[13px] font-medium mb-6">{notif.time}</span>
                  
                  {notif.hasActions && (
                     <div className="flex items-center gap-3 w-full justify-end">
                        <button className="px-5 py-2.5 rounded-xl bg-[#1e3a8a] text-white text-sm font-bold flex items-center gap-2 shadow-lg shadow-blue-900/20 hover:bg-blue-800 transition-colors">
                           <Star size={16} />
                           تقييم الخدمة
                        </button>
                        <button 
                           onClick={() => removeNotification(notif.id)}
                           className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-500 text-sm font-bold hover:bg-slate-200 transition-colors"
                        >
                           تجاهل
                        </button>
                     </div>
                  )}
               </div>

            </div>
         ))}
      </div>
    </div>
  );
}
