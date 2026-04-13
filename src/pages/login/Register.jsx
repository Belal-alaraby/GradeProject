import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Smartphone, 
  Mail, 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  ChevronDown, 
  Car, 
  Wrench,
  ArrowRight,
  CheckCircle2,
  Trash2,
  Plus,
  MapPin
} from 'lucide-react';
import { useUser } from '../../context/UserContext';
import { Button } from '../../components/ui/Button';

export default function Register() {
  const navigate = useNavigate();
  const { updateUser } = useUser();
  const [role, setRole] = useState('client'); // 'client' or 'tech'
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    governorate: '',
    region: '',
    carBrand: '',
    carModel: '',
    agreedToTerms: false
  });
  
  const [errors, setErrors] = useState({});

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'الاسم بالكامل مطلوب';
    
    if (!formData.phone) {
      newErrors.phone = 'رقم الهاتف مطلوب';
    } else if (!/^[0-9]{11,14}$/.test(formData.phone)) {
      newErrors.phone = 'يرجى إدخال رقم هاتف صحيح (11 رقم على الأقل)';
    }

    if (!formData.email) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (!formData.password) {
      newErrors.password = 'كلمة المرور مطلوبة';
    } else if (formData.password.length < 6) {
      newErrors.password = 'يجب أن تكون كلمة المرور 6 أحرف على الأقل';
    } else if (!specialCharRegex.test(formData.password)) {
      newErrors.password = 'يجب أن تحتوي كلمة المرور على رمز خاص واحد على الأقل (مثال: @, #, $, !)';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'كلمة المرور غير متطابقة';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    if (!formData.governorate) newErrors.governorate = 'يرجى اختيار المحافظة';
    if (!formData.region) newErrors.region = 'المنطقة مطلوبة';
    if (!formData.agreedToTerms) newErrors.agreedToTerms = 'يجب الموافقة على الشروط والأحكام';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    if (e) e.preventDefault();
    
    if (step === 1) {
      if (validateStep1()) setStep(2);
    } else if (step === 2) {
      if (validateStep2()) setStep(3);
    } else if (step === 3) {
      if (validateStep3()) {
        // Final Submission
        updateUser({ name: formData.fullName, role: role });
        
        if (role === 'client') {
          navigate('/dashboard');
        } else {
          alert('شكراً لتسجيلك كفني! سيتم مراجعة حسابك وتفعيل لوحة التحكم الخاصة بك قريباً.');
          navigate('/login');
        }
      }
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 font-sans" dir="rtl">
      
      {/* Top Logo Section */}
      <div className="flex flex-col items-center mb-6 text-center animate-fade-in">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-right">
            <h1 className="text-2xl font-bold text-[#1e3a8a] leading-none">سيارتك</h1>
            <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-bold">خدمة صيانة السيارات</p>
          </div>
          <div className="w-12 h-12 bg-[#1e3a8a] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/20">
            <ChevronDown className="text-white" size={28} strokeWidth={3} />
          </div>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-2xl font-extrabold text-slate-800">إنشاء حساب جديد</h2>
          <span className="text-2xl">🎉</span>
        </div>
        <p className="text-slate-400 text-sm font-medium">انضم إلينا واحصل على أفضل خدمات صيانة السيارات</p>
      </div>

      <div className="bg-white w-full max-w-[32rem] rounded-[2.5rem] shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 transition-all duration-500">
        
        {/* Role Selector Header */}
        <div className="bg-[#1e3a8a] py-4 px-8 text-white relative">
           <p className="text-center text-sm font-bold opacity-90 mb-4">اختر نوع الحساب</p>
           <div className="grid grid-cols-2 gap-4 bg-blue-900/40 p-1.5 rounded-2xl">
              <button 
                type="button"
                onClick={() => setRole('client')}
                className={`flex flex-col items-center justify-center py-3 rounded-xl transition-all gap-1
                  ${role === 'client' ? 'bg-white text-[#1e3a8a] shadow-lg' : 'text-blue-200 hover:text-white'}`}
              >
                <Car size={20} className={role === 'client' ? 'text-[#1e3a8a]' : ''} />
                <span className="text-sm font-bold">عميل</span>
              </button>
              <button 
                type="button"
                onClick={() => setRole('tech')}
                className={`flex flex-col items-center justify-center py-3 rounded-xl transition-all gap-1
                  ${role === 'tech' ? 'bg-white text-[#1e3a8a] shadow-lg' : 'text-blue-200 hover:text-white'}`}
              >
                <Wrench size={20} className={role === 'tech' ? 'text-[#1e3a8a]' : ''} />
                <span className="text-sm font-bold">فني</span>
              </button>
           </div>
        </div>

        <div className="p-8 md:p-10">
          
          {/* Multi-step progress bar */}
          <div className="relative flex justify-between items-center mb-10 px-4">
            <div className="absolute top-5 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 -z-0"></div>
            
            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center gap-2">
               <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300
                 ${step >= 1 ? 'bg-[#1e3a8a] text-white shadow-lg shadow-blue-900/20' : 'bg-slate-100 text-slate-400'}`}>
                 {step > 1 ? <CheckCircle2 size={24} /> : '1'}
               </div>
               <span className={`text-[10px] font-bold transition-colors ${step >= 1 ? 'text-[#1e3a8a]' : 'text-slate-400'}`}>المعلومات الأساسية</span>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center gap-2">
               <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300
                 ${step >= 2 ? 'bg-[#1e3a8a] text-white shadow-lg shadow-blue-900/20' : 'bg-slate-100 text-slate-400'}`}>
                 {step > 2 ? <CheckCircle2 size={24} /> : '2'}
               </div>
               <span className={`text-[10px] font-bold transition-colors ${step >= 2 ? 'text-[#1e3a8a]' : 'text-slate-400'}`}>كلمة المرور</span>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center gap-2">
               <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300
                 ${step >= 3 ? 'bg-[#1e3a8a] text-white shadow-lg shadow-blue-900/20' : 'bg-slate-100 text-slate-400'}`}>
                 3
               </div>
               <span className={`text-[10px] font-bold transition-colors ${step >= 3 ? 'text-[#1e3a8a]' : 'text-slate-400'}`}>التفاصيل الإضافية</span>
            </div>
          </div>

          <form onSubmit={handleNext} className="space-y-6">
            
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in-left">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-800 pr-1">الاسم بالكامل <span className="text-red-500 font-bold">*</span></label>
                  <div className="relative group">
                    <div className={`absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#1e3a8a] ${errors.fullName ? 'text-red-400' : ''}`}>
                      <User size={20} />
                    </div>
                    <input
                      type="text"
                      placeholder="محمد أحمد علي"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full bg-white border-2 rounded-2xl py-4 pr-12 pl-4 outline-none transition-all text-sm font-medium
                        ${errors.fullName ? 'border-red-100 bg-red-50/10 focus:border-red-400' : 'border-slate-100 focus:border-[#1e3a8a] text-slate-700'}`}
                    />
                  </div>
                  {errors.fullName && <p className="text-red-500 text-xs mt-1 pr-1 font-medium">{errors.fullName}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-800 pr-1">رقم الهاتف <span className="text-red-500 font-bold">*</span></label>
                  <div className="relative group">
                    <div className={`absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#1e3a8a] ${errors.phone ? 'text-red-400' : ''}`}>
                      <Smartphone size={20} />
                    </div>
                    <input
                      type="tel"
                      placeholder="01xxxxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-white border-2 rounded-2xl py-4 pr-12 pl-4 outline-none transition-all text-sm font-medium
                        ${errors.phone ? 'border-red-100 bg-red-50/10 focus:border-red-400' : 'border-slate-100 focus:border-[#1e3a8a] text-slate-700'}`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1 pr-1 font-medium">{errors.phone}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-800 pr-1">البريد الإلكتروني <span className="text-red-500 font-bold">*</span></label>
                  <div className="relative group">
                    <div className={`absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#1e3a8a] ${errors.email ? 'text-red-400' : ''}`}>
                      <Mail size={20} />
                    </div>
                    <input
                      type="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-white border-2 rounded-2xl py-4 pr-12 pl-4 outline-none transition-all text-sm font-medium
                        ${errors.email ? 'border-red-100 bg-red-50/10 focus:border-red-400' : 'border-slate-100 focus:border-[#1e3a8a] text-slate-700'}`}
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1 pr-1 font-medium">{errors.email}</p>}
                </div>
              </div>
            )}

            {/* Step 2: Password */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in-left">
                {/* Password */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-800 pr-1">كلمة المرور <span className="text-red-500 font-bold">*</span></label>
                  <div className="relative group">
                    <div className={`absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#1e3a8a] ${errors.password ? 'text-red-400' : ''}`}>
                      <Lock size={20} />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="********"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className={`w-full bg-white border-2 rounded-2xl py-4 pr-12 pl-12 outline-none transition-all text-sm font-medium
                        ${errors.password ? 'border-red-100 bg-red-50/10 focus:border-red-400' : 'border-slate-100 focus:border-[#1e3a8a] text-slate-700'}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  {errors.password && <p className="text-red-500 text-xs mt-1 pr-1 font-medium">{errors.password}</p>}
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-800 pr-1">تأكيد كلمة المرور <span className="text-red-500 font-bold">*</span></label>
                  <div className="relative group">
                    <div className={`absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#1e3a8a] ${errors.confirmPassword ? 'text-red-400' : ''}`}>
                      <Lock size={20} />
                    </div>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="********"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className={`w-full bg-white border-2 rounded-2xl py-4 pr-12 pl-12 outline-none transition-all text-sm font-medium
                        ${errors.confirmPassword ? 'border-red-100 bg-red-50/10 focus:border-red-400' : 'border-slate-100 focus:border-[#1e3a8a] text-slate-700'}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="text-red-500 text-xs mt-1 pr-1 font-medium">{errors.confirmPassword}</p>}
                </div>

                <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50">
                   <p className="text-xs text-blue-800/70 leading-relaxed font-medium">
                      💡 نصيحة: استخدم كلمة مرور قوية تحتوي على أحرف وأرقام ورموز خاصة لزيادة أمان حسابك.
                   </p>
                </div>
              </div>
            )}

            {/* Step 3: Additional Details */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in-left">
                
                {/* Row 1: Governorate & Region */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-800 pr-1">المحافظة <span className="text-red-500 font-bold">*</span></label>
                    <div className="relative group">
                      <div className={`absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#1e3a8a] ${errors.governorate ? 'text-red-400' : ''}`}>
                        <MapPin size={18} />
                      </div>
                      <select 
                        value={formData.governorate}
                        onChange={(e) => setFormData({...formData, governorate: e.target.value})}
                        className={`w-full bg-white border-2 rounded-2xl py-4 pr-12 pl-4 outline-none transition-all text-sm font-bold appearance-none cursor-pointer
                          ${errors.governorate ? 'border-red-100 bg-red-50/10 focus:border-red-400' : 'border-slate-100 focus:border-[#1e3a8a] text-slate-700'}`}
                      >
                        <option value="" disabled>اختر المحافظة</option>
                        <option value="القاهرة">القاهرة</option>
                        <option value="الجيزة">الجيزة</option>
                        <option value="الإسكندرية">الإسكندرية</option>
                      </select>
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ChevronDown size={18} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-800 pr-1">المنطقة <span className="text-red-500 font-bold">*</span></label>
                    <input
                      type="text"
                      placeholder="مدينة نصر، المهندسين..."
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className={`w-full bg-white border-2 rounded-2xl py-4 px-4 outline-none transition-all text-sm font-medium
                        ${errors.region ? 'border-red-100 bg-red-50/10 focus:border-red-400' : 'border-slate-100 focus:border-[#1e3a8a] text-slate-700'}`}
                    />
                  </div>
                </div>

                {/* Row 2: Car Brand & Model (Optional) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-500 pr-1">ماركة السيارة (اختياري)</label>
                    <input
                      type="text"
                      placeholder="تويوتا، هوندا..."
                      value={formData.carBrand}
                      onChange={(e) => setFormData({ ...formData, carBrand: e.target.value })}
                      className="w-full bg-white border-2 border-slate-100 rounded-2xl py-4 px-4 outline-none transition-all focus:border-[#1e3a8a] text-sm text-slate-700 font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-500 pr-1">موديل السيارة (اختياري)</label>
                    <input
                      type="text"
                      placeholder="كامري، أكورد..."
                      value={formData.carModel}
                      onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                      className="w-full bg-white border-2 border-slate-100 rounded-2xl py-4 px-4 outline-none transition-all focus:border-[#1e3a8a] text-sm text-slate-700 font-medium"
                    />
                  </div>
                </div>

                {/* Terms and Conditions Box */}
                <div className={`p-5 rounded-2xl flex items-center gap-3 transition-colors ${errors.agreedToTerms ? 'bg-red-50 border-2 border-red-100' : 'bg-[#f0f7ff] border border-[#e0efff]'}`}>
                  <input 
                    type="checkbox"
                    id="terms"
                    checked={formData.agreedToTerms}
                    onChange={(e) => setFormData({...formData, agreedToTerms: e.target.checked})}
                    className="w-5 h-5 rounded border-slate-300 text-[#1e3a8a] focus:ring-[#1e3a8a] cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-sm font-bold text-slate-700 cursor-pointer select-none">
                    أوافق على الشروط والأحكام و سياسة الخصوصية
                  </label>
                </div>
                {errors.agreedToTerms && <p className="text-red-500 text-xs mt-1 pr-1 font-medium">{errors.agreedToTerms}</p>}

              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-4">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 bg-slate-100 text-slate-600 py-4 rounded-2xl font-extrabold text-lg hover:bg-slate-200 transition-all duration-300 active:scale-[0.98]"
                >
                  رجوع
                </button>
              )}
              <button
                type="submit"
                className={`flex-[2] bg-[#1e3a8a] text-white py-4 rounded-2xl font-extrabold text-lg shadow-lg shadow-blue-900/20 hover:bg-[#142962] transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2
                  ${step < 3 ? 'group' : 'bg-[#94a3b8] hover:bg-[#64748b] shadow-slate-900/10'}`}
              >
                {step === 3 ? 'إنشاء الحساب' : 'التالي'}
                {step < 3 && <ArrowRight size={20} className="transform rotate-180 group-hover:-translate-x-1 transition-transform" />}
              </button>
            </div>
          </form>

          {/* Footer Link */}
          <div className="mt-8 text-center">
            <p className="text-slate-400 font-bold text-sm">
                لديك حساب بالفعل؟{' '}
                <Link to="/login" className="text-[#1e3a8a] hover:underline transition-all underline-offset-4 font-extrabold">سجل دخولك</Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
