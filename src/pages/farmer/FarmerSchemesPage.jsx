import React, { useState } from 'react';
import FarmerSidebar from '../../components/farmer/FarmerSidebar';
import FarmerHeader from '../../components/farmer/FarmerHeader';
import SchemesList from '../../components/farmer/SchemesList';

export const FarmerSchemesPage = ({ onOpenSearch }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B132B] transition-colors duration-300">
      <FarmerSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      
      <div className={`transition-all duration-300 ${collapsed ? 'pl-20' : 'pl-64'}`}>
        <FarmerHeader onOpenSearch={onOpenSearch} pageTitle="Government Schemes Hub" />

        <main className="p-6 sm:p-8 max-w-7xl mx-auto">
          <SchemesList />
        </main>
      </div>
    </div>
  );
};

export default FarmerSchemesPage;
