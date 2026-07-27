import React, { useState } from 'react';
import FarmerSidebar from '../../components/farmer/FarmerSidebar';
import FarmerHeader from '../../components/farmer/FarmerHeader';
import WelcomeBanner from '../../components/farmer/WelcomeBanner';
import SoilHealthCard from '../../components/farmer/SoilHealthCard';
import WeatherWidget from '../../components/farmer/WeatherWidget';
import CalendarWidget from '../../components/farmer/CalendarWidget';
import SchemesList from '../../components/farmer/SchemesList';
import NoticesList from '../../components/farmer/NoticesList';

export const FarmerDashboard = ({ onOpenSearch }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black transition-colors duration-300">
      <FarmerSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      
      <div className={`transition-all duration-300 ${collapsed ? 'pl-20' : 'pl-64'}`}>
        <FarmerHeader onOpenSearch={onOpenSearch} pageTitle="Farmer Dashboard Overview" />

        <main className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
          <WelcomeBanner />

          {/* Grid Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6">
              <SoilHealthCard />
            </div>
            <div className="lg:col-span-6">
              <WeatherWidget />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <SchemesList />
            </div>
            <div className="lg:col-span-4">
              <CalendarWidget />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FarmerDashboard;
