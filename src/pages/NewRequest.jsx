import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Battery, Droplet, CircleDot, Droplets, PhoneCall, Truck, Clock, CheckCircle2, Home, Briefcase, MapPin, LocateFixed, Calendar, Car, Edit, Check, CreditCard, Smartphone, Wallet, Banknote, ShieldCheck } from 'lucide-react';
import { useOrders } from '../context/OrdersContext';

export function NewRequest() {
  const navigate = useNavigate();
  const location = useLocation();
  const { addOrder } = useOrders();

  const initialService = location.state?.serviceId || null;

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(initialService);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    carModel: '',
    notes: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const handleStep3Next = () => {
    const errors = {};
    if (!formData.date) errors.date = 'هذا الحقل مطلوب';
    if (!formData.time) errors.time = 'هذا الحقل مطلوب';
    if (!formData.carModel) errors.carModel = 'هذا الحقل مطلوب';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setCurrentStep(4);
  };

  const handleConfirmBooking = () => {
    const serviceInfo = services.find(s => s.id === selectedService);

    const newOrder = {
       id: Math.floor(10000 + Math.random() * 90000).toString(),
       serviceId: selectedService, 
       serviceName: serviceInfo?.name || 'خدمة غير معروفة',
       serviceDesc: serviceInfo?.desc || 'وصف الخدمة غير متاح',
       date: formData.date || new Date().toISOString().split('T')[0],
       time: formData.time === "12" ? "12:00 م" : formData.time === "15" ? "03:00 م" : "09:00 ص",
       status: 'review',
       location: selectedAddress === 'home' ? 'المنزل - جدة، حي الشاطئ' : selectedAddress === 'work' ? 'العمل - مركز المدينة' : 'موقع محدد عبر الخريطة',
       technician: 'جاري التعيين...',
       details: formData.carModel + (formData.notes ? ` - ${formData.notes}` : ''),
       carModel: formData.carModel || 'لم يحدد',
       notes: formData.notes || 'لا توجد ملاحظات إضافية',
       paymentMethod: paymentMethod || 'cash',
       pricing: { base: serviceInfo?.price || 150, travel: 0, discount: 0, total: serviceInfo?.price || 150 },
       price: serviceInfo?.price || 150,
       iconColor: serviceInfo?.solidColor || 'bg-blue-500' 
    };

    addOrder(newOrder);
    navigate('/dashboard/requests');
  };
  
  const steps = [
    { id: 1, label: 'اختر الخدمة' },
    { id: 2, label: 'حدد الموقع' },
    { id: 3, label: 'ملخص الطلب' },
    { id: 4, label: 'طريقة الدفع' },
    { id: 5, label: 'تأكيد الحجز' },
  ];

  const services = [
    { id: 'battery', name: 'تغيير البطارية', icon: <Battery size={24} />, bg: 'bg-blue-600', desc: 'بطاريات أصلية بضمان شامل مع التركيب في موقعك', bullets: ['فحص مجاني', 'ضمان سنة', 'تركيب فوري'], price: '450', time: '30-45' },
    { id: 'oil', name: 'تغيير الزيت', icon: <Droplet size={24} />, bg: 'bg-orange-500', desc: 'زيوت محركات عالية الجودة مع الفلتر وفحص شامل', bullets: ['فحص مجاني', 'زيوت أصلية', 'استبدال الفلتر'], price: '300', time: '45-60' },
    { id: 'tires', name: 'خدمة الإطارات', icon: <CircleDot size={24} />, bg: 'bg-slate-600', desc: 'فحص وضبط وتغيير الإطارات مع ضمان السلامة', bullets: ['فحص مجاني', 'ضبط الهواء', 'خدمة احترافية'], price: '200', time: '30-45' },
    { id: 'wash', name: 'غسيل السيارة', icon: <Droplets size={24} />, bg: 'bg-cyan-500', desc: 'غسيل شامل مع تلميع وتنظيف داخلي كامل', bullets: ['تنظيف داخلي', 'تلميع خارجي', 'عطور فاخرة'], price: '150', time: '60-90' },
    { id: 'emergency', name: 'خدمة الطوارئ', icon: <PhoneCall size={24} />, bg: 'bg-red-500', desc: 'دعم فني عاجل على مدار الساعة أينما كنت', bullets: ['متاح 24/7', 'وصول سريع', 'دعم فوري'], price: '250', time: '20-30' },
    { id: 'towing', name: 'خدمة الونش', icon: <Truck size={24} />, bg: 'bg-purple-500', desc: 'سحب آمن لسيارتك إلى الوجهة المطلوبة', bullets: ['ونش حديث', 'سحب آمن', 'تأمين شامل'], price: '500', time: '30-60' },
  ];

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold text-slate-800">طلب خدمة جديدة</h2>
      </div>
      
      {/* Stepper Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-6 relative overflow-hidden">
        <div className="flex items-center justify-between relative max-w-4xl mx-auto px-4">
          
          {/* Connecting Line (Background) */}
          <div className="absolute top-6 right-12 left-12 h-0.5 bg-slate-200 -z-10"></div>
          
          {/* Active Line (Foreground) */}
          <div 
             className="absolute top-6 right-12 h-0.5 bg-primary -z-10 transition-all duration-500"
             style={{ width: `calc(${((currentStep - 1) / (steps.length - 1)) * 100}% - 24px)` }}
          ></div>

          {steps.map((step) => {
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;
            
            return (
              <div key={step.id} className="flex flex-col items-center gap-4 relative z-10 w-24">
                <button 
                  onClick={() => setCurrentStep(step.id)} // For demo purposes
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300
                    ${isActive ? 'bg-secondary text-white shadow-lg shadow-secondary/30 scale-110' : 
                      isCompleted ? 'bg-green-500 text-white scale-100' : 
                      'bg-slate-100 text-slate-500 hover:bg-slate-200 scale-100'}`}
                >
                  {isCompleted ? <Check size={24} /> : step.id}
                </button>
                <span className={`text-sm font-bold whitespace-nowrap transition-colors duration-300 ${isActive ? 'text-secondary' : 'text-slate-500'}`}>
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Content Area */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 min-h-[400px]">
        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-in-up">
            <div className="mb-8 text-right">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">اختر الخدمة التي تحتاجها</h3>
              <p className="text-slate-500">اختر من بين خدماتنا المتنوعة لصيانة سيارتك</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const isSelected = selectedService === service.id;
                
                return (
                  <button 
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`relative p-6 rounded-2xl border-2 transition-all duration-300 text-right flex flex-col h-full
                      ${isSelected ? 'border-primary shadow-md bg-blue-50/10' : 'border-slate-100 shadow-sm hover:border-slate-300 hover:shadow-md'}`}
                  >
                    {/* Top Section: Icon & Title */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1 ml-4 pt-1 text-right">
                        <h4 className="font-bold text-lg text-slate-800 mb-1">{service.name}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed min-h-[40px]">{service.desc}</p>
                      </div>
                      <div className={`w-14 h-14 ${service.bg} text-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm relative`}>
                        {service.icon}
                        {isSelected && (
                          <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full p-0.5 border-2 border-white shadow-sm">
                            <CheckCircle2 size={16} className="fill-primary" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="flex-1 mb-6">
                      <ul className="space-y-2">
                        {service.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer: Price & Time */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between w-full mt-auto">
                      <div className="text-right">
                        <span className="block text-xs text-slate-400 mb-1">يبدأ من</span>
                        <div className="font-bold text-slate-800 text-lg flex gap-1">
                          {service.price} <span className="text-sm font-normal mt-1">جنيه</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                        <Clock size={16} />
                        <span dir="ltr">{service.time} دقيقة</span>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
               <button 
                  onClick={() => setCurrentStep(2)}
                  disabled={!selectedService}
                  className="px-10 py-3 bg-primary text-white rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-dark transition-colors shadow-md shadow-primary/20"
               >
                  التالي
               </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-8 animate-fade-in-up">
            <div className="text-right">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">حدد موقع الخدمة</h3>
              <p className="text-slate-500">اختر من عناوينك المحفوظة أو حدد موقعك على الخريطة</p>
            </div>

            {/* Saved Addresses */}
            <div>
              <h4 className="font-bold text-slate-800 mb-4 text-right">العناوين المحفوظة</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Address 1 - Home */}
                <button 
                  onClick={() => setSelectedAddress('home')}
                  className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all text-right
                    ${selectedAddress === 'home' ? 'border-primary bg-primary/5 shadow-sm' : 'border-slate-100 hover:border-slate-300 hover:shadow-sm'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors
                      ${selectedAddress === 'home' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
                      <Home size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-800">المنزل</h5>
                      <p className="text-sm text-slate-500 mt-1">القاهرة، مدينة نصر، شارع عباس العقاد 45</p>
                    </div>
                  </div>
                </button>

                {/* Address 2 - Work */}
                <button 
                  onClick={() => setSelectedAddress('work')}
                  className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all text-right
                    ${selectedAddress === 'work' ? 'border-primary bg-primary/5 shadow-sm' : 'border-slate-100 hover:border-slate-300 hover:shadow-sm'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors
                      ${selectedAddress === 'work' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-800">العمل</h5>
                      <p className="text-sm text-slate-500 mt-1">القاهرة، التجمع الخامس، جنوب الأكاديمية</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Or Add New Address */}
            <div>
              <h4 className="font-bold text-slate-800 mb-4 text-right">أو أضف عنواناً جديداً</h4>
              <div className="border border-slate-200 rounded-2xl p-4 space-y-4">
                 {/* Tall Text Area / Input */}
                 <div className="relative">
                    <MapPin size={20} className="absolute top-4 right-4 text-slate-400" />
                    <textarea 
                      rows={4}
                      placeholder="اكتب العنوان بالتفصيل (المحافظة، المنطقة، الشارع، رقم المبنى)"
                      className="w-full bg-transparent border border-slate-200 rounded-xl py-3 pr-12 pl-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none text-sm placeholder:text-slate-400"
                      onChange={(e) => {
                         if(e.target.value.length > 0) setSelectedAddress('new');
                      }}
                    ></textarea>
                 </div>

                 {/* Current Location Button */}
                 <button 
                   onClick={() => setSelectedAddress('current')}
                   className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors
                     ${selectedAddress === 'current' ? 'bg-primary text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                 >
                   <LocateFixed size={20} />
                   استخدم موقعي الحالي
                 </button>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end gap-4">
               <button 
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-colors"
               >
                  السابق
               </button>
               <button 
                  onClick={() => setCurrentStep(3)}
                  disabled={!selectedAddress}
                  className="px-10 py-3 bg-primary text-white rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-dark transition-colors shadow-md shadow-primary/20"
               >
                  التالي
               </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-8 animate-fade-in-up">
            <div className="text-right">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">ملخص الطلب</h3>
              <p className="text-slate-500">راجع تفاصيل طلبك قبل المتابعة</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form Column - Right visually */}
              <div className="space-y-6">
                
                {/* Date & Time */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <h4 className="font-bold text-slate-800 mb-4 text-right">التاريخ والوقت</h4>
                  
                  <div className="space-y-4">
                    <div className="text-right">
                      <label className="block text-sm text-slate-500 mb-2">التاريخ</label>
                      <div className="relative flex items-center">
                        <Calendar size={20} className={`absolute right-4 pointer-events-none transition-colors ${formErrors.date ? 'text-red-400' : 'text-slate-400'}`} />
                        <input 
                          type="date" 
                          value={formData.date}
                          onChange={(e) => {
                            setFormData({...formData, date: e.target.value});
                            if (formErrors.date) setFormErrors({...formErrors, date: null});
                          }}
                          className={`w-full bg-transparent border rounded-xl py-3 pr-12 pl-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-sm placeholder:text-slate-400 text-right ${formErrors.date ? 'border-red-500 bg-red-50/10' : 'border-slate-200'}`}
                        />
                      </div>
                      {formErrors.date && <p className="text-red-500 text-xs mt-1 text-right">{formErrors.date}</p>}
                    </div>
                    
                    <div className="text-right">
                      <label className="block text-sm text-slate-500 mb-2">الوقت</label>
                      <div className="relative flex items-center">
                        <Clock size={20} className={`absolute right-4 pointer-events-none transition-colors ${formErrors.time ? 'text-red-400' : 'text-slate-400'}`} />
                        <select 
                          value={formData.time}
                          onChange={(e) => {
                            setFormData({...formData, time: e.target.value});
                            if (formErrors.time) setFormErrors({...formErrors, time: null});
                          }}
                          className={`w-full bg-transparent border rounded-xl py-3 pr-12 pl-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-sm text-slate-500 appearance-none ${formErrors.time ? 'border-red-500 bg-red-50/10' : 'border-slate-200'}`}
                        >
                          <option value="" disabled>اختر الوقت</option>
                          <option value="1">10:00 صباحاً</option>
                          <option value="12">12:00 مساءً</option>
                          <option value="15">03:00 مساءً</option>
                        </select>
                      </div>
                      {formErrors.time && <p className="text-red-500 text-xs mt-1 text-right">{formErrors.time}</p>}
                    </div>
                  </div>
                </div>

                {/* Car Details */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <h4 className="font-bold text-slate-800 mb-4 text-right">تفاصيل السيارة</h4>
                  <div className="text-right">
                    <label className="block text-sm text-slate-500 mb-2">طراز السيارة</label>
                    <div className="relative flex items-center">
                      <Car size={20} className={`absolute right-4 pointer-events-none transition-colors ${formErrors.carModel ? 'text-red-400' : 'text-slate-400'}`} />
                      <input 
                        type="text" 
                        placeholder="مثال: تويوتا كامري 2020"
                        value={formData.carModel}
                        onChange={(e) => {
                          setFormData({...formData, carModel: e.target.value});
                          if (formErrors.carModel) setFormErrors({...formErrors, carModel: null});
                        }}
                        className={`w-full bg-transparent border rounded-xl py-3 pr-12 pl-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-sm placeholder:text-slate-300 ${formErrors.carModel ? 'border-red-500 bg-red-50/10' : 'border-slate-200'}`}
                      />
                    </div>
                    {formErrors.carModel && <p className="text-red-500 text-xs mt-1 text-right">{formErrors.carModel}</p>}
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <h4 className="font-bold text-slate-800 mb-4 text-right">ملاحظات إضافية (اختياري)</h4>
                  <div className="relative">
                    <textarea 
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      placeholder="أضف أي تفاصيل إضافية تريد إبلاغ الفني بها..."
                      className="w-full bg-transparent border border-slate-200 rounded-xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none text-sm placeholder:text-slate-300 text-right"
                    ></textarea>
                  </div>
                </div>

              </div>

              {/* Summary Column - Left visually */}
              <div className="space-y-6">
                
                {/* Selected Service Container */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-bold text-slate-800">الخدمة المختارة</h4>
                    <button onClick={() => setCurrentStep(1)} className="text-secondary text-sm font-bold flex items-center gap-1.5 hover:text-primary transition-colors">
                      <Edit size={16} />
                      تعديل
                    </button>
                  </div>

                  {/* Service Card Mini (Mockup reflects Oil Change) */}
                  <div className="flex justify-between items-start">
                    <div className="flex-1 ml-4 text-right">
                      <h5 className="font-bold text-slate-800 mb-1.5 text-lg">تغيير الزيت</h5>
                      <p className="text-sm text-slate-500 mb-4">زيوت محركات عالية الجودة مع الفلتر وفحص شامل</p>
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs justify-end">
                        <Clock size={16} />
                        <span dir="ltr">45-60 دقيقة</span>
                      </div>
                    </div>
                    <div className="w-14 h-14 bg-orange-500 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform">
                      <Droplet size={26} />
                    </div>
                  </div>
                </div>

                {/* Location Container */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-bold text-slate-800">الموقع</h4>
                    <button onClick={() => setCurrentStep(2)} className="text-secondary text-sm font-bold flex items-center gap-1.5 hover:text-primary transition-colors">
                      <Edit size={16} />
                      تعديل
                    </button>
                  </div>

                  <div className="flex items-start gap-4 text-right justify-between">
                    <div className="flex-1 ml-4">
                      <h5 className="font-bold text-slate-800 mb-1.5 text-lg">عنوان جديد</h5>
                      <p className="text-sm text-slate-500 leading-relaxed">كوبري عبد العزيز آل سعود، المنيل، القاهرة، 11111، مصر</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-50 text-secondary rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={22} />
                    </div>
                  </div>
                </div>

                {/* Price Details */}
                <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <h4 className="font-bold text-slate-800 mb-6 text-right">تفاصيل السعر</h4>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500">سعر الخدمة</span>
                      <span className="font-bold text-slate-800">300 جنيه</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500">رسوم الانتقال</span>
                      <span className="font-bold text-slate-800">0 جنيه</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-green-600">
                      <span>خصم الطلب الأول</span>
                      <span className="font-bold" dir="ltr">-50 جنيه</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200/60 flex justify-between items-center">
                    <span className="font-bold text-slate-800 text-lg">الإجمالي</span>
                    <div className="font-extrabold text-2xl text-slate-800">250 <span className="text-sm font-bold">جنيه</span></div>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end gap-4">
               <button 
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-colors"
               >
                  السابق
               </button>
               <button 
                  onClick={handleStep3Next}
                  className="px-10 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-md shadow-primary/20"
               >
                  التالي
               </button>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-8 animate-fade-in-up">
            <div className="text-right">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">اختر طريقة الدفع</h3>
              <p className="text-slate-500">اختر طريقة الدفع المناسبة لك</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Credit Card */}
              <button 
                onClick={() => setPaymentMethod('card')}
                className={`flex items-center justify-between p-6 rounded-2xl border-2 transition-all text-right
                  ${paymentMethod === 'card' ? 'border-primary bg-primary/5 shadow-sm' : 'border-slate-100 hover:border-slate-300 hover:shadow-sm'}`}
              >
                <div>
                  <h5 className="font-bold text-slate-800 text-lg mb-1">بطاقة الائتمان</h5>
                  <p className="text-sm text-slate-500" dir="ltr">Visa أو Mastercard</p>
                </div>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors
                  ${paymentMethod === 'card' ? 'bg-primary text-white' : 'bg-blue-50 text-blue-500'}`}>
                  <CreditCard size={28} />
                </div>
              </button>

              {/* Apple Pay */}
              <button 
                onClick={() => setPaymentMethod('apple')}
                className={`flex items-center justify-between p-6 rounded-2xl border-2 transition-all text-right
                  ${paymentMethod === 'apple' ? 'border-primary bg-primary/5 shadow-sm' : 'border-slate-100 hover:border-slate-300 hover:shadow-sm'}`}
              >
                <div>
                  <h5 className="font-bold text-slate-800 text-lg mb-1" dir="ltr">Apple Pay</h5>
                  <p className="text-sm text-slate-500">الدفع السريع والآمن</p>
                </div>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors
                  ${paymentMethod === 'apple' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  <Smartphone size={28} />
                </div>
              </button>

              {/* Wallet */}
              <button 
                onClick={() => setPaymentMethod('wallet')}
                className={`flex items-center justify-between p-6 rounded-2xl border-2 transition-all text-right
                  ${paymentMethod === 'wallet' ? 'border-primary bg-primary/5 shadow-sm' : 'border-slate-100 hover:border-slate-300 hover:shadow-sm'}`}
              >
                <div>
                  <h5 className="font-bold text-slate-800 text-lg mb-1">المحفظة</h5>
                  <p className="text-sm text-slate-500">الرصيد الحالي: 750 جنيه</p>
                </div>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors
                  ${paymentMethod === 'wallet' ? 'bg-purple-500 text-white' : 'bg-purple-50 text-purple-500'}`}>
                  <Wallet size={28} />
                </div>
              </button>

              {/* Cash */}
              <button 
                onClick={() => setPaymentMethod('cash')}
                className={`flex items-center justify-between p-6 rounded-2xl border-2 transition-all text-right
                  ${paymentMethod === 'cash' ? 'border-primary bg-primary/5 shadow-sm' : 'border-slate-100 hover:border-slate-300 hover:shadow-sm'}`}
              >
                <div>
                  <h5 className="font-bold text-slate-800 text-lg mb-1">الدفع نقداً</h5>
                  <p className="text-sm text-slate-500">ادفع للفني عند الوصول</p>
                </div>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors
                  ${paymentMethod === 'cash' ? 'bg-green-500 text-white' : 'bg-green-50 text-green-500'}`}>
                  <Banknote size={28} />
                </div>
              </button>
            </div>

            {/* Security Notice */}
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6 flex items-start justify-between">
              <div className="flex-1 text-right ml-4 pt-1">
                <h5 className="font-bold text-green-800 mb-1">المدفوعات آمنة ومشفرة</h5>
                <p className="text-sm text-green-700">جميع معاملاتك محمية بتقنية التشفير SSL. نحن لا نحتفظ بمعلومات بطاقتك الائتمانية.</p>
              </div>
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                <ShieldCheck size={20} />
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end gap-4">
               <button 
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-colors"
               >
                  السابق
               </button>
               <button 
                  onClick={() => setCurrentStep(5)}
                  disabled={!paymentMethod}
                  className="px-10 py-3 bg-primary text-white rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-dark transition-colors shadow-md shadow-primary/20"
               >
                  التالي
               </button>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div className="space-y-8 animate-fade-in-up pb-12">
            {/* Header */}
            <div className="text-center space-y-4 mb-10">
              <div className="w-20 h-20 bg-green-500 rounded-full mx-auto flex items-center justify-center shadow-lg shadow-green-500/30 text-white">
                <CheckCircle2 size={40} />
              </div>
              <div>
                 <h3 className="text-3xl font-bold text-slate-800 mb-2">تأكيد الحجز</h3>
                 <p className="text-slate-500">راجع جميع التفاصيل قبل تأكيد الحجز</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form Column - Right visually */}
              <div className="space-y-6">
                
                {/* Payment Method */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-400 mb-4 text-right">طريقة الدفع</h4>
                  <div className="flex items-center justify-between text-right">
                    <div>
                      <h5 className="font-bold text-slate-800 text-lg mb-1" dir="ltr">
                         {paymentMethod === 'apple' ? 'Apple Pay' : 
                          paymentMethod === 'card' ? 'بطاقة الائتمان' :
                          paymentMethod === 'wallet' ? 'المحفظة' : 'الدفع نقداً'}
                      </h5>
                      <p className="text-sm text-slate-500">
                         {paymentMethod === 'apple' ? 'الدفع السريع والآمن' : 
                          paymentMethod === 'card' ? 'Visa أو Mastercard' :
                          paymentMethod === 'wallet' ? 'الرصيد الحالي: 750 جنيه' : 'ادفع للفني عند الوصول'}
                      </p>
                    </div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 
                       ${paymentMethod === 'apple' ? 'bg-slate-100 text-slate-700' :
                         paymentMethod === 'card' ? 'bg-blue-50 text-blue-500' :
                         paymentMethod === 'wallet' ? 'bg-purple-50 text-purple-500' : 'bg-green-50 text-green-500'}`}
                    >
                      {paymentMethod === 'apple' ? <Smartphone size={24} /> :
                       paymentMethod === 'card' ? <CreditCard size={24} /> :
                       paymentMethod === 'wallet' ? <Wallet size={24} /> :  <Banknote size={24} />}
                    </div>
                  </div>
                </div>

                {/* Total Payment Card */}
                <div className="bg-primary/95 border border-primary-dark rounded-2xl p-6 shadow-lg shadow-primary/25 text-white">
                  <h4 className="font-bold text-blue-100/90 mb-6 text-right">المبلغ الإجمالي</h4>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-blue-100">سعر الخدمة</span>
                      <span className="font-bold">450 جنيه</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-blue-100">رسوم الانتقال</span>
                      <span className="font-bold">0 جنيه</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-blue-200">خصم</span>
                      <span className="font-bold" dir="ltr">-50 جنيه</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-blue-400/30 flex justify-between items-center">
                    <span className="font-bold text-lg">الإجمالي</span>
                    <div className="font-extrabold text-3xl">400 <span className="text-base font-bold">جنيه</span></div>
                  </div>
                </div>

                {/* Notes */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm min-h-[100px]">
                  <h4 className="text-sm font-bold text-slate-400 mb-4 text-right">ملاحظات</h4>
                  <p className="text-right text-slate-800 font-medium whitespace-pre-line">
                     {formData.notes || "لا توجد ملاحظات إضافية."}
                  </p>
                </div>

                {/* Confirm Button */}
                <button 
                  onClick={handleConfirmBooking}
                  className="w-full py-4 bg-[#0a9e3a] hover:bg-green-700 text-white rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-green-600/30 transform hover:-translate-y-1 text-lg group"
                >
                  <CheckCircle2 size={24} className="group-hover:scale-110 transition-transform" />
                  تأكيد الحجز الآن
                </button>

              </div>

              {/* Summary Column - Left visually */}
              <div className="space-y-6">
                
                {/* Service Details */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-400 mb-4 text-right">الخدمة</h4>
                  <div className="flex justify-between items-start">
                    <div className="flex-1 ml-4 text-right">
                      <h5 className="font-bold text-slate-800 mb-1.5 text-lg">تغيير البطارية</h5>
                      <p className="text-sm text-slate-500 leading-relaxed">بطاريات أصلية بضمان شامل مع التركيب في موقعك</p>
                    </div>
                    <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                      <Battery size={26} />
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-400 mb-4 text-right">الموقع</h4>
                  <div className="flex items-start gap-4 text-right justify-between">
                    <div className="flex-1 ml-4">
                      <p className="font-bold text-slate-800 leading-relaxed">القاهرة، مدينة نصر، شارع عباس العقاد 45</p>
                    </div>
                    <div className="w-10 h-10 text-primary flex items-center justify-center shrink-0">
                      <MapPin size={22} className="text-blue-500" />
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-400 mb-4 text-right">التاريخ والوقت</h4>
                  <div className="space-y-3 w-full" dir="ltr">
                    <div className="flex items-center gap-3 text-slate-800 font-bold">
                       <Calendar size={20} className="text-blue-500" />
                       <span>{formData.date || "2024-02-22"}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-800 font-bold">
                       <Clock size={20} className="text-blue-500" />
                       <span>{formData.time === "12" ? "12:00 PM" : formData.time === "15" ? "03:00 PM" : "09:00 AM"}</span>
                    </div>
                  </div>
                </div>

                {/* Car details */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-400 mb-4 text-right">السيارة</h4>
                  <div className="flex items-center gap-3 text-slate-800 font-bold w-full" dir="ltr">
                     <Car size={20} className="text-blue-500" />
                     <span>{formData.carModel || "تويوتا كامري 2020"}</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="flex justify-end mt-8">
               <button 
                  onClick={() => setCurrentStep(4)}
                  className="px-6 py-2 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-colors"
               >
                  السابق
               </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
