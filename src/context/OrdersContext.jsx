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

  const addOrder = (order) => {
    setOrders((prevOrders) => [order, ...prevOrders]);
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrdersContext.Provider>
  );
}

export const useOrders = () => useContext(OrdersContext);
