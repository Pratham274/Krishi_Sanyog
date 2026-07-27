import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FarmerSidebar from '../../components/farmer/FarmerSidebar';
import FarmerHeader from '../../components/farmer/FarmerHeader';
import AIRecommendationTool from '../../components/farmer/AIRecommendationTool';

export const FarmerAdvisorPage = ({ onOpenSearch }) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black transition-colors duration-300">
      <FarmerSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      
      <div className={`transition-all duration-300 ${collapsed ? 'pl-20' : 'pl-64'}`}>
        <FarmerHeader onOpenSearch={onOpenSearch} pageTitle={t('farmer.advisorTitle')} />

        <main className="p-6 sm:p-8 max-w-7xl mx-auto">
          <AIRecommendationTool />
        </main>
      </div>
    </div>
  );
};

export default FarmerAdvisorPage;
