import React, { useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';
import CropFertilizerDb from '../../components/admin/CropFertilizerDb';

export const AdminDatabasePage = ({ onOpenSearch }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B132B] transition-colors duration-300">
      <AdminSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      
      <div className={`transition-all duration-300 ${collapsed ? 'pl-20' : 'pl-64'}`}>
        <AdminHeader onOpenSearch={onOpenSearch} title="Crop & Fertilizer Database" />

        <main className="p-6 sm:p-8 max-w-7xl mx-auto">
          <CropFertilizerDb />
        </main>
      </div>
    </div>
  );
};

export default AdminDatabasePage;
