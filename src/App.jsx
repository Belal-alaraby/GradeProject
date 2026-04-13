import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/landingpage/Home';
import { DashboardLayout } from './layout/DashboardLayout';
import { UserDashboard } from './pages/UserDashboard';
import { NewRequest } from './pages/NewRequest';
import { Requests } from './pages/Requests';
import { Wallet } from './pages/Wallet';
import { Notifications } from './pages/Notifications';
import LoginForm from './pages/login/loginform';
import Register from './pages/login/Register';
import { OrdersProvider } from './context/OrdersContext';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <OrdersProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="new-request" element={<NewRequest />} />
          <Route path="requests" element={<Requests />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="support" element={<div className="p-4">الدعم</div>} />
          <Route path="profile" element={<div className="p-4">الملف الشخصي</div>} />
          <Route path="settings" element={<div className="p-4">الإعدادات</div>} />
        </Route>
      </Routes>
        </BrowserRouter>
      </OrdersProvider>
    </UserProvider>
  );
}

export default App;
