import React, { createContext, useContext, useState } from 'react';

const OrdersContext = createContext();

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([
    {
      id: '12845',
      serviceId: 'oil', 
      serviceName: 'تغيير الزيت',
      serviceDesc: 'تغيير زيت تخليقي بالكامل للحفاظ على أداء المحرك',
      date: '2024-03-31',
      time: '02:30 م',
      status: 'progress', 
      location: 'القاهرة، مدينة نصر، شارع عباس العقاد 45',
      technician: 'أحمد محمد',
      details: 'زيت كاسترول 5W-40 بالكامل',
      carModel: 'هيونداي إلنترا 2021',
      notes: 'الرجاء الاتصال قبل الوصول للفيلا',
      paymentMethod: 'card',
      pricing: { base: 350, travel: 50, discount: 50, total: 350 },
      price: 350,
      iconColor: 'bg-orange-500',
    }
  ]);

  const [transactions, setTransactions] = useState([
    { id: 11, type: 'payment', title: 'دفع - تغيير الزيت', date: '31 مارس 2026', time: '02:30 م', amount: -350 },
    { id: 12, type: 'recharge', title: 'شحن المحفظة بتطبيق بنكي', date: '30 مارس 2026', time: '10:15 ص', amount: 1500 },
    { id: 13, type: 'payment', title: 'دفع - فحص شامل للسيارة', date: '28 مارس 2026', time: '05:45 م', amount: -250 },
    { id: 14, type: 'recharge', title: 'شحن بالبطاقة الائتمانية', date: '25 مارس 2026', time: '01:00 م', amount: 2500 }
  ]);

  const addOrder = (order) => {
    setOrders((prevOrders) => [order, ...prevOrders]);

    const newTransaction = {
      id: Math.floor(Math.random() * 90000),
      type: 'payment',
      title: `دفع - ${order.serviceName}`,
      date: order.date,
      time: order.time,
      amount: -order.price
    };
    
    setTransactions((prev) => [newTransaction, ...prev]);
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder, transactions }}>
      {children}
    </OrdersContext.Provider>
  );
}

export const useOrders = () => useContext(OrdersContext);
