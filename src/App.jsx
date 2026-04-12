import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { DashboardLayout } from './layout/DashboardLayout';
import { DashboardHome } from './pages/DashboardHome';
import { NewRequest } from './pages/NewRequest';
import { Requests } from './pages/Requests';
import { OrdersProvider } from './context/OrdersContext';

function App() {
  return (
    <OrdersProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="new-request" element={<NewRequest />} />
          <Route path="requests" element={<Requests />} />
          <Route path="wallet" element={<div className="p-4">المحفظة</div>} />
          <Route path="notifications" element={<div className="p-4">الإشعارات</div>} />
          <Route path="support" element={<div className="p-4">الدعم</div>} />
          <Route path="profile" element={<div className="p-4">الملف الشخصي</div>} />
          <Route path="settings" element={<div className="p-4">الإعدادات</div>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </OrdersProvider>
  );
}

export default App;
