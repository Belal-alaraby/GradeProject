import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/dashboard/Sidebar';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-50 flex shadow-inner text-slate-800" dir="rtl">
      {/* Sidebar - fixed to the right */}
      <Sidebar />
      
      {/* Main Content Wrapper */}
      <div className="flex-1 mr-64 flex flex-col min-h-screen">
        <DashboardHeader />
        
        {/* Page Content */}
        <main className="flex-1 p-8 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
