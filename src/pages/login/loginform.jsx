import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Smartphone, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ChevronDown, 
  Apple, 
  Globe 
} from 'lucide-react';
import { useUser } from '../../context/UserContext';

export default function LoginForm() {
  const navigate = useNavigate();
  const { updateUser } = useUser();
  const [loginType, setLoginType] = useState('phone'); // 'phone' or 'email'
  const [userRole, setUserRole] = useState('client'); // 'client', 'tech', 'admin'
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    identifier: '', // phone or email
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Identifier validation
    if (!formData.identifier) {
      newErrors.identifier = loginType === 'phone' ? 'رقم الهاتف مطلوب' : 'البريد الإلكتروني مطلوب';
    } else if (loginType === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.identifier)) {
        newErrors.identifier = 'يرجى إدخال بريد إلكتروني صحيح';
      }
    } else if (loginType === 'phone') {
      const phoneRegex = /^[0-9]{11,14}$/;
      if (!phoneRegex.test(formData.identifier)) {
        newErrors.identifier = 'يرجى إدخال رقم هاتف صحيح (11-14 رقم)';
      }
    }

    // Password validation
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!formData.password) {
      newErrors.password = 'كلمة المرور مطلوبة';
    } else if (formData.password.length < 6) {
      newErrors.password = 'يجب أن تكون كلمة المرور 6 أحرف على الأقل';
    } else if (!specialCharRegex.test(formData.password)) {
      newErrors.password = 'يجب أن تحتوي كلمة المرور على رمز خاص واحد على الأقل (مثال: @, #, $, !)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted:', { loginType, userRole, ...formData });
      
      // Update context name for demo purposes (e.g., if phone is 01234567891, set name to 'أحمد محمد')
      updateUser({ name: 'أحمد محمد', role: userRole });
      
      // Only redirect clients to dashboard for now
      if (userRole === 'client') {
        navigate('/dashboard');
      } else {
        alert('تسجيل دخول الفنيين سيتاح قريباً');
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans" dir="rtl">
      <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-xl shadow-slate-200/50 p-8 md:p-10 border border-slate-100">
        
        {/* Header / Logo */}
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-right">
              <h1 className="text-2xl font-bold text-[#1e3a8a] leading-none">سيارتك</h1>
              <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-bold">خدمة صيانة السيارات</p>
            </div>
            <div className="w-12 h-12 bg-[#1e3a8a] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/20">
              <ChevronDown className="text-white" size={28} strokeWidth={3} />
            </div>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-800 mb-2">مرحباً بعودتك! 👋</h2>
          <p className="text-slate-400 text-sm">سجل دخولك للوصول إلى حسابك</p>
        </div>

        {/* Login Type Tabs (Phone / Email) */}
        <div className="bg-slate-100/80 p-1.5 rounded-2xl flex mb-8">
          <button
            onClick={() => { setLoginType('phone'); setErrors({}); }}
            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2
              ${loginType === 'phone' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
          >
            <Smartphone size={18} className={loginType === 'phone' ? 'text-[#1e3a8a]' : ''} />
            رقم الهاتف
          </button>
          <button
            onClick={() => { setLoginType('email'); setErrors({}); }}
            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2
              ${loginType === 'email' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
          >
            <Mail size={18} className={loginType === 'email' ? 'text-[#1e3a8a]' : ''} />
            البريد الإلكتروني
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Role Selection */}
          <div className="space-y-3">
            <label className="block text-sm font-bold text-slate-500 pr-1">تسجيل الدخول كـ</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'client', label: 'عميل' },
                { id: 'tech', label: 'فني' },
                { id: 'admin', label: 'مسؤول' }
              ].map((role) => (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setUserRole(role.id)}
                  className={`py-3 px-2 rounded-xl text-sm font-bold transition-all border-2
                    ${userRole === role.id 
                      ? 'bg-[#1e3a8a] border-[#1e3a8a] text-white shadow-md shadow-blue-900/20' 
                      : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200'}`}
                >
                  {role.label}
                </button>
              ))}
            </div>
          </div>

          {/* Identifier Input (Phone or Email) */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-800 pr-1">
              {loginType === 'phone' ? 'رقم الهاتف' : 'البريد الإلكتروني'}
            </label>
            <div className="relative group">
              <div className={`absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#1e3a8a]
                ${errors.identifier ? 'text-red-400' : ''}`}>
                {loginType === 'phone' ? <Smartphone size={20} /> : <Mail size={20} />}
              </div>
              <input
                type={loginType === 'phone' ? 'tel' : 'email'}
                placeholder={loginType === 'phone' ? '01xxxxxxxxx' : 'example@mail.com'}
                value={formData.identifier}
                onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                className={`w-full bg-white border-2 rounded-2xl py-4 pr-12 pl-4 outline-none transition-all text-sm font-medium
                  ${errors.identifier 
                    ? 'border-red-100 text-red-600 focus:border-red-400 bg-red-50/10' 
                    : 'border-slate-100 focus:border-[#1e3a8a] text-slate-700'}`}
              />
            </div>
            {errors.identifier && <p className="text-red-500 text-xs mt-1 pr-1 font-medium">{errors.identifier}</p>}
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-800 pr-1">كلمة المرور</label>
            <div className="relative group">
              <div className={`absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#1e3a8a]
                ${errors.password ? 'text-red-400' : ''}`}>
                <Lock size={20} />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="********"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className={`w-full bg-white border-2 rounded-2xl py-4 pr-12 pl-12 outline-none transition-all text-sm font-medium
                  ${errors.password 
                    ? 'border-red-100 text-red-600 focus:border-red-400 bg-red-50/10' 
                    : 'border-slate-100 focus:border-[#1e3a8a] text-slate-700'}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1 pr-1 font-medium">{errors.password}</p>}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between px-1">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                  className="peer hidden"
                />
                <div className="w-5 h-5 border-2 border-slate-200 rounded-md transition-all peer-checked:bg-[#1e3a8a] peer-checked:border-[#1e3a8a]"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white scale-0 peer-checked:scale-100 transition-transform">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
              </div>
              <span className="text-sm font-bold text-slate-500 group-hover:text-slate-700 transition-colors">تذكرني</span>
            </label>
            <a href="#" className="text-sm font-bold text-slate-400 hover:text-[#1e3a8a] transition-colors">نسيت كلمة المرور؟</a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#1e3a8a] text-white py-4 rounded-2xl font-extrabold text-lg shadow-lg shadow-blue-900/20 hover:bg-[#152a6a] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 mt-2"
          >
            تسجيل الدخول
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-100"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-4 text-slate-400 font-bold">أو سجل دخولك باستخدام</span>
          </div>
        </div>

        {/* Social Logins */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-3 py-3 border-2 border-slate-100 rounded-2xl font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-200 transition-all group">
            <Apple size={22} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm">Apple</span>
          </button>
          <button className="flex items-center justify-center gap-3 py-3 border-2 border-slate-100 rounded-2xl font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-200 transition-all group">
            <Globe size={22} className="text-[#4285F4] group-hover:scale-110 transition-transform" />
            <span className="text-sm">Google</span>
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="mt-10 text-center">
          <p className="text-slate-400 font-bold text-sm">
            ليس لديك حساب؟{' '}
            <Link to="/register" className="text-[#1e3a8a] hover:underline transition-all underline-offset-4">سجل الآن</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
