import React, { useState } from 'react';
import { FileText, Clock, CheckCircle2, XCircle, Search, Eye, MapPin, User, Settings, Navigation, Calendar, Droplet, Battery, CircleDot, Droplets, PhoneCall, CreditCard, Smartphone, Wallet, Banknote, X, Car } from 'lucide-react';
import { useOrders } from '../context/OrdersContext';

export function Requests() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const { orders } = useOrders();

  const stats = [
    { id: 1, title: 'إجمالي الطلبات', value: orders.length, icon: <FileText size={20} />, iconBg: 'bg-slate-100 text-slate-600' },
    { id: 2, title: 'قيد التنفيذ', value: orders.filter(o => o.status === 'progress').length, icon: <Clock size={20} />, iconBg: 'bg-blue-50 text-blue-500' },
    { id: 3, title: 'مكتملة', value: orders.filter(o => o.status === 'completed').length, icon: <CheckCircle2 size={20} />, iconBg: 'bg-green-50 text-green-500' },
    { id: 4, title: 'ملغية', value: orders.filter(o => o.status === 'cancelled').length, icon: <XCircle size={20} />, iconBg: 'bg-red-50 text-red-500' },
    { id: 5, title: 'إجمالي الإنفاق', value: orders.reduce((sum, o) => sum + o.price, 0), icon: <span className="font-bold text-sm">جنيه</span>, iconBg: 'bg-purple-50 text-purple-500' },
  ];

  const filters = [
    { id: 'all', label: 'الكل', count: orders.length },
    { id: 'review', label: 'قيد المراجعة', count: orders.filter(o => o.status === 'review').length },
    { id: 'approved', label: 'تمت الموافقة', count: orders.filter(o => o.status === 'approved').length },
    { id: 'progress', label: 'جاري التنفيذ', count: orders.filter(o => o.status === 'progress').length },
    { id: 'completed', label: 'مكتمل', count: orders.filter(o => o.status === 'completed').length },
    { id: 'cancelled', label: 'ملغي', count: orders.filter(o => o.status === 'cancelled').length },
  ];

  const getStatusDisplay = (status) => {
     switch(status) {
        case 'review': return { label: 'قيد المراجعة', color: 'bg-slate-50 text-slate-600 border-slate-200', icon: <Clock size={16} /> };
        case 'approved': return { label: 'تمت الموافقة', color: 'bg-yellow-50 text-yellow-600 border-yellow-200', icon: <CheckCircle2 size={16} /> };
        case 'progress': return { label: 'جاري التنفيذ', color: 'bg-blue-50 text-blue-600 border-blue-100', icon: <Clock size={16} /> };
        case 'completed': return { label: 'مكتمل', color: 'bg-green-50 text-green-600 border-green-200', icon: <CheckCircle2 size={16} /> };
        case 'cancelled': return { label: 'ملغي', color: 'bg-red-50 text-red-600 border-red-200', icon: <XCircle size={16} /> };
        default: return { label: status, color: 'bg-slate-50 text-slate-600 border-slate-200', icon: <Clock size={16} /> };
     }
  };

  const getServiceIcon = (serviceId) => {
     switch(serviceId) {
        case 'battery': return <Battery size={26} />;
        case 'oil': return <Droplet size={26} />;
        case 'tires': return <CircleDot size={26} />;
        case 'wash': return <Droplets size={26} />;
        default: return <Settings size={26} />;
     }
  };

  const filteredOrders = activeFilter === 'all' ? orders : orders.filter(o => o.status === activeFilter);

  return (
    <div className="space-y-6 animate-fade-in-up pb-12">
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex flex-col justify-between h-32 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start w-full">
               <span className="text-slate-400 text-sm font-bold">{stat.title}</span>
               <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${stat.iconBg}`}>
                 {stat.icon}
               </div>
            </div>
            <div className="text-right mt-auto">
               <span className="text-3xl font-extrabold text-slate-800">{stat.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 space-y-5 relative z-10">
        {/* Search */}
        <div className="relative">
          <Search size={20} className="absolute right-4 top-3.5 text-slate-400" />
          <input 
            type="text" 
            placeholder="ابحث برقم الطلب، الخدمة، الموقع، أو اسم الفني..."
            className="w-full bg-slate-50/50 border border-slate-200 rounded-xl py-3 pr-12 pl-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-sm placeholder:text-slate-400"
          />
        </div>
        
        {/* Chips */}
        <div className="flex flex-wrap items-center gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button 
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all
                  ${isActive ? 'bg-secondary text-white shadow-md shadow-secondary/20 scale-105' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}
                `}
              >
                {filter.label}
                <span className={`min-w-[20px] h-5 px-1.5 flex items-center justify-center rounded-full text-[11px] font-extrabold
                  ${isActive ? 'bg-white/20 text-white' : 'bg-white text-slate-500 shadow-sm'}
                `}>
                  {filter.count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
         {filteredOrders.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-100">
               <FileText size={48} className="mx-auto text-slate-300 mb-4" />
               <h3 className="text-lg font-bold text-slate-600">لا توجد طلبات هنا</h3>
            </div>
         ) : (
            filteredOrders.map(order => {
               const statusObj = getStatusDisplay(order.status);
               return (
                 <div key={order.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden text-right hover:border-slate-200 transition-colors">
                    {/* Header */}
                    <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                       <div className="flex items-center gap-4">
                          <div className={`w-14 h-14 text-white rounded-2xl flex items-center justify-center shadow-sm shrink-0 ${order.iconColor || 'bg-slate-500'}`}>
                             {getServiceIcon(order.serviceId)}
                          </div>
                          <div>
                             <h4 className="font-bold text-slate-800 text-xl mb-1.5">{order.serviceName}</h4>
                             <div className="flex items-center gap-1.5 text-sm text-slate-500">
                                <Calendar size={16} />
                                <span>{order.time} ، {order.date}</span>
                             </div>
                          </div>
                       </div>

                       <div className="flex items-center gap-4">
                          <div className={`px-4 py-1.5 rounded-full flex items-center gap-2 text-sm font-bold border shadow-sm ${statusObj.color}`}>
                             {statusObj.icon}
                             {statusObj.label}
                          </div>
                          <span className="text-slate-400 font-bold text-sm" dir="ltr">#{order.id}</span>
                       </div>
                    </div>

                    {/* Details Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 border-b border-slate-100 bg-slate-50/50">
                       {/* Location */}
                       <div>
                          <div className="flex items-center gap-1.5 text-slate-400 mb-2">
                             <MapPin size={16} />
                             <span className="text-xs font-bold">الموقع</span>
                          </div>
                          <p className="text-sm font-bold text-slate-700">{order.location}</p>
                       </div>
                       {/* Technician */}
                       <div>
                          <div className="flex items-center gap-1.5 text-slate-400 mb-2">
                             <User size={16} />
                             <span className="text-xs font-bold">الفني</span>
                          </div>
                          <p className="text-sm font-bold text-slate-700">{order.technician}</p>
                       </div>
                       {/* Details */}
                       <div>
                          <div className="flex items-center gap-1.5 text-slate-400 mb-2">
                             <Settings size={16} />
                             <span className="text-xs font-bold">التفاصيل</span>
                          </div>
                          <p className="text-sm font-bold text-slate-700">{order.details}</p>
                       </div>
                    </div>

                    {/* Footer */}
                    <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-white">
                       <div className="text-right w-full md:w-auto">
                          <span className="block text-xs font-bold text-slate-400 mb-1">الإجمالي</span>
                          <div className="font-extrabold text-secondary text-2xl">{order.price} <span className="text-sm font-bold">جنيه</span></div>
                       </div>
                       <div className="flex items-center gap-3 w-full md:w-auto">
                          <button 
                             onClick={() => setSelectedOrder(order)}
                             className="flex-1 md:flex-none px-6 py-3 rounded-xl border-2 border-slate-100 text-slate-600 font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-slate-200 transition-all">
                             <Eye size={18} />
                             عرض التفاصيل
                          </button>
                          <button className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-[#0a9e3a] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-green-700 transition-all shadow-md shadow-green-600/20 w-[140px]">
                             <Navigation size={18} />
                             تتبع الطلب
                          </button>
                       </div>
                    </div>
                 </div>
               )
            })
         )}
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6" dir="rtl">
           {/* Backdrop */}
           <div 
             className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
             onClick={() => setSelectedOrder(null)}
           ></div>
           
           {/* Modal Body */}
           <div className="bg-slate-50 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 animate-fade-in-up border border-slate-200 shadow-2xl">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex justify-between items-center z-20">
                 <div className="flex items-center gap-3">
                    <div className={`px-4 py-1.5 rounded-full flex items-center gap-1.5 text-sm font-bold border shadow-sm ${getStatusDisplay(selectedOrder.status).color}`}>
                       {getStatusDisplay(selectedOrder.status).icon}
                       {getStatusDisplay(selectedOrder.status).label}
                    </div>
                    <span className="font-bold text-slate-800 text-lg">طلب #{selectedOrder.id}</span>
                 </div>
                 <button 
                   onClick={() => setSelectedOrder(null)}
                   className="w-10 h-10 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center hover:bg-slate-200 hover:text-slate-800 transition-colors"
                 >
                    <X size={20} />
                 </button>
              </div>

              {/* Modal Content - Mirrored from Step 5 */}
              <div className="p-6 md:p-8 space-y-8 text-right">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* Right Visually Column */}
                    <div className="space-y-6">
                       {/* Payment Method */}
                       <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                          <h4 className="text-sm font-bold text-slate-400 mb-4 text-right">طريقة الدفع</h4>
                          <div className="flex items-center justify-between text-right">
                             <div>
                                <h5 className="font-bold text-slate-800 text-lg mb-1" dir="ltr">
                                  {selectedOrder.paymentMethod === 'apple' ? 'Apple Pay' : 
                                   selectedOrder.paymentMethod === 'card' ? 'بطاقة الائتمان' :
                                   selectedOrder.paymentMethod === 'wallet' ? 'المحفظة' : 'الدفع نقداً'}
                                </h5>
                                <p className="text-sm text-slate-500">
                                  {selectedOrder.paymentMethod === 'apple' ? 'الدفع السريع والآمن' : 
                                   selectedOrder.paymentMethod === 'card' ? 'Visa أو Mastercard' :
                                   selectedOrder.paymentMethod === 'wallet' ? 'الرصيد المحفظة' : 'الدفع للفني'}
                                </p>
                             </div>
                             <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 
                                ${selectedOrder.paymentMethod === 'apple' ? 'bg-slate-100 text-slate-700' :
                                  selectedOrder.paymentMethod === 'card' ? 'bg-blue-50 text-blue-500' :
                                  selectedOrder.paymentMethod === 'wallet' ? 'bg-purple-50 text-purple-500' : 'bg-green-50 text-green-500'}`}
                             >
                                {selectedOrder.paymentMethod === 'apple' ? <Smartphone size={24} /> :
                                 selectedOrder.paymentMethod === 'card' ? <CreditCard size={24} /> :
                                 selectedOrder.paymentMethod === 'wallet' ? <Wallet size={24} /> : <Banknote size={24} />}
                             </div>
                          </div>
                       </div>

                       {/* Total Pricing */}
                       <div className="bg-primary/95 border border-primary-dark rounded-2xl p-6 shadow-lg shadow-primary/25 text-white">
                          <h4 className="font-bold text-blue-100/90 mb-6 text-right">المبلغ الإجمالي</h4>
                          <div className="space-y-4 mb-6">
                             <div className="flex justify-between items-center text-sm">
                                <span className="text-blue-100">سعر الخدمة</span>
                                <span className="font-bold">{selectedOrder.pricing?.base || selectedOrder.price} جنيه</span>
                             </div>
                             <div className="flex justify-between items-center text-sm">
                                <span className="text-blue-100">رسوم الانتقال</span>
                                <span className="font-bold">{selectedOrder.pricing?.travel || 0} جنيه</span>
                             </div>
                             <div className="flex justify-between items-center text-sm">
                                <span className="text-blue-200">خصم</span>
                                <span className="font-bold" dir="ltr">-{selectedOrder.pricing?.discount || 0} جنيه</span>
                             </div>
                          </div>
                          <div className="pt-6 border-t border-blue-400/30 flex justify-between items-center">
                             <span className="font-bold text-lg">الإجمالي</span>
                             <div className="font-extrabold text-3xl">{selectedOrder.pricing?.total || selectedOrder.price} <span className="text-base font-bold">جنيه</span></div>
                          </div>
                       </div>

                       {/* Notes */}
                       <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm min-h-[100px]">
                          <h4 className="text-sm font-bold text-slate-400 mb-4 text-right">ملاحظات</h4>
                          <p className="text-right text-slate-800 font-medium whitespace-pre-line">
                             {selectedOrder.notes || "لا توجد ملاحظات إضافية."}
                          </p>
                       </div>
                    </div>

                    {/* Left Visually Column */}
                    <div className="space-y-6">
                       {/* Service */}
                       <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                          <h4 className="text-sm font-bold text-slate-400 mb-4 text-right">الخدمة</h4>
                          <div className="flex justify-between items-start">
                             <div className="flex-1 ml-4 text-right">
                                <h5 className="font-bold text-slate-800 mb-1.5 text-lg">{selectedOrder.serviceName}</h5>
                                <p className="text-sm text-slate-500 leading-relaxed">{selectedOrder.serviceDesc}</p>
                             </div>
                             <div className={`w-14 h-14 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${selectedOrder.iconColor || 'bg-slate-500'}`}>
                                {getServiceIcon(selectedOrder.serviceId)}
                             </div>
                          </div>
                       </div>

                       {/* Location */}
                       <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                          <h4 className="text-sm font-bold text-slate-400 mb-4 text-right">الموقع</h4>
                          <div className="flex items-start gap-4 text-right justify-between">
                             <div className="flex-1 ml-4">
                                <p className="font-bold text-slate-800 leading-relaxed">{selectedOrder.location}</p>
                             </div>
                             <div className="w-10 h-10 text-primary flex items-center justify-center shrink-0">
                                <MapPin size={22} className="text-blue-500" />
                             </div>
                          </div>
                       </div>

                       {/* Date / Time */}
                       <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                          <h4 className="text-sm font-bold text-slate-400 mb-4 text-right">التاريخ والوقت</h4>
                          <div className="space-y-3 w-full" dir="ltr">
                             <div className="flex items-center gap-3 text-slate-800 font-bold">
                                <Calendar size={20} className="text-blue-500" />
                                <span>{selectedOrder.date}</span>
                             </div>
                             <div className="flex items-center gap-3 text-slate-800 font-bold">
                                <Clock size={20} className="text-blue-500" />
                                <span>{selectedOrder.time}</span>
                             </div>
                          </div>
                       </div>

                       {/* Car */}
                       <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                          <h4 className="text-sm font-bold text-slate-400 mb-4 text-right">السيارة</h4>
                          <div className="flex items-center gap-3 text-slate-800 font-bold w-full" dir="ltr">
                             <Car size={20} className="text-blue-500" />
                             <span>{selectedOrder.carModel}</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}
