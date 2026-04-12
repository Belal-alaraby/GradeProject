import React from 'react';
import { Wallet as WalletIcon, Smartphone, Building2, CreditCard, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { useOrders } from '../context/OrdersContext';

export function Wallet() {
  const { transactions } = useOrders();

  const totalSpent = transactions.filter(t => t.amount < 0).reduce((sum, t) => sum + Math.abs(t.amount), 0);
  const totalRecharge = transactions.filter(t => t.amount > 0).reduce((sum, t) => sum + t.amount, 0);
  const currentBalance = totalRecharge - totalSpent;

  return (
    <div className="space-y-6 animate-fade-in-up pb-12">
      
      {/* Huge Wallet Gradient Card */}
      <div className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-[2rem] p-8 md:p-10 text-white shadow-xl shadow-purple-500/20 relative overflow-hidden h-[400px] flex flex-col">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

        {/* Top visual Row */}
        <div className="flex justify-between items-start mb-auto relative z-10">
           <h3 className="text-2xl font-bold p-2">المحفظة الإلكترونية</h3>
           <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-inner border border-white/10">
              <WalletIcon size={32} />
           </div>
        </div>

        {/* Balance Row */}
        <div className="text-right mb-12 relative z-10 px-2 mt-4">
           <p className="text-purple-200 text-sm mb-3">الرصيد الحالي</p>
           <div className="text-6xl font-extrabold flex items-baseline justify-end gap-3 mb-4 font-mono tracking-tight" dir="ltr">
              <span className="text-2xl font-bold font-sans">جنيه</span>
               {currentBalance.toLocaleString()}
           </div>
           <p className="text-xs text-purple-200/80 font-medium">آخر تحديث: اليوم، 02:30 م</p>
        </div>

        {/* 3 Columns block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
           
           {/* Card 1 */}
           <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex flex-col justify-center items-end hover:bg-white/20 transition-colors cursor-pointer" style={{ boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.05)' }}>
              <span className="block text-[13px] font-medium text-purple-200 mb-2">إجمالي الإنفاق</span>
              <div className="text-xl font-bold">{totalSpent.toLocaleString()} <span className="text-sm font-medium">جنيه</span></div>
           </div>

           {/* Card 2 */}
           <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex flex-col justify-center items-end hover:bg-white/20 transition-colors cursor-pointer" style={{ boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.05)' }}>
              <span className="block text-[13px] font-medium text-purple-200 mb-2">إجمالي الشحن</span>
              <div className="text-xl font-bold">{totalRecharge.toLocaleString()} <span className="text-sm font-medium">جنيه</span></div>
           </div>

           {/* Card 3 */}
           <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex flex-col justify-center items-end hover:bg-white/20 transition-colors cursor-pointer" style={{ boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.05)' }}>
              <span className="block text-[13px] font-medium text-purple-200 mb-2">عدد المعاملات</span>
              <div className="text-2xl font-extrabold font-mono" dir="ltr">{transactions.length}</div>
           </div>

        </div>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        
        {/* Action 1 */}
        <button className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center justify-between text-right hover:border-orange-200 group">
           <div className="w-16 h-16 bg-[#ff5a00] text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/30 group-hover:scale-105 transition-transform duration-300">
              <Smartphone size={28} />
           </div>
           <div className="flex-1 mr-5">
              <h4 className="font-bold text-slate-800 text-[17px] mb-1.5 group-hover:text-[#ff5a00] transition-colors">محفظة إلكترونية</h4>
              <p className="text-[13px] text-slate-500 font-medium">فودافون كاش، إلخ</p>
           </div>
        </button>

        {/* Action 2 */}
        <button className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center justify-between text-right hover:border-green-200 group">
           <div className="w-16 h-16 bg-[#00b050] text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-green-500/30 group-hover:scale-105 transition-transform duration-300">
              <Building2 size={28} />
           </div>
           <div className="flex-1 mr-5">
              <h4 className="font-bold text-slate-800 text-[17px] mb-1.5 group-hover:text-[#00b050] transition-colors">تحويل بنكي</h4>
              <p className="text-[13px] text-slate-500 font-medium">من حسابك البنكي</p>
           </div>
        </button>

        {/* Action 3 */}
        <button className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center justify-between text-right hover:border-blue-200 group">
           <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-transform duration-300">
              <CreditCard size={28} />
           </div>
           <div className="flex-1 mr-5">
              <h4 className="font-bold text-slate-800 text-[17px] mb-1.5 group-hover:text-blue-600 transition-colors">شحن بالبطاقة</h4>
              <p className="text-[13px] text-slate-500 font-medium">Visa, Mastercard</p>
           </div>
        </button>

      </div>

      {/* Transactions History */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
         <div className="p-6 md:p-8 border-b border-slate-50/80">
            <h3 className="text-xl font-bold text-slate-800 text-right">سجل المعاملات</h3>
         </div>
         <div className="p-6 md:p-8 space-y-4">
            {transactions.map((tx) => (
               <div key={tx.id} className="bg-slate-50/60 hover:bg-slate-50 transition-colors rounded-2xl p-5 md:p-6 flex items-center justify-between">
                  {/* Amount / Icon (RTL End - Physically Left) */}
                  <div className="flex items-center gap-4">
                     <span className={`font-bold text-lg ${tx.amount > 0 ? 'text-green-600' : 'text-red-600'}`} dir="ltr">
                        <span className="text-sm ml-1 font-bold">جنيه</span> {tx.amount > 0 ? `+${tx.amount}` : tx.amount}
                     </span>
                     <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${tx.amount > 0 ? 'bg-green-100/70 text-green-600' : 'bg-red-100/70 text-red-500'}`}>
                        {tx.amount > 0 ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                     </div>
                  </div>

                  {/* Title / Date (RTL Start - Physically Right) */}
                  <div className="text-right">
                     <h4 className="font-bold text-slate-800 text-[15px] mb-1.5">{tx.title}</h4>
                     <div className="text-[13px] text-slate-400 font-medium whitespace-nowrap">
                        {tx.date} - {tx.time}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>

    </div>
  );
}
