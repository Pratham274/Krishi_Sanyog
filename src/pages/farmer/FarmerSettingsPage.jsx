import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FarmerSidebar from '../../components/farmer/FarmerSidebar';
import FarmerHeader from '../../components/farmer/FarmerHeader';
import { useAuth } from '../../context/AuthContext';
import { Save } from 'lucide-react';
import toast from 'react-hot-toast';

export const FarmerSettingsPage = ({ onOpenSearch }) => {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useAuth();
  const [profile, setProfile] = useState({
    name: user?.name || 'Ramesh Patel',
    phone: user?.phone || '+91 98765 43210',
    email: user?.email || 'ramesh.patel@krishisanyog.in',
    location: user?.location || 'Indore, Madhya Pradesh',
    landSize: user?.landSize || 4.5,
    soilType: user?.soilType || 'Black Cotton Soil',
    smsAlerts: true,
    whatsappAlerts: true,
  });

  const handleSave = (e) => {
    e.preventDefault();
    toast.success(isHindi ? 'किसान प्रोफाइल और अलर्ट प्राथमिकताएं सहेजी गईं!' : 'Farmer Profile & Alert Preferences Saved!');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black transition-colors duration-300">
      <FarmerSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      
      <div className={`transition-all duration-300 ${collapsed ? 'pl-20' : 'pl-64'}`}>
        <FarmerHeader onOpenSearch={onOpenSearch} pageTitle={t('farmer.settingsTitle')} />

        <main className="p-6 sm:p-8 max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-6 shadow-xl">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">{t('farmer.accountSettings')}</h2>

            <form onSubmit={handleSave} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">{t('farmer.farmerFullName')}</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:ring-2 focus:ring-emerald-500 font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">{t('farmer.mobileNumber')}</label>
                  <input
                    type="text"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:ring-2 focus:ring-emerald-500 font-bold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">{t('farmer.farmLocation')}</label>
                  <input
                    type="text"
                    value={profile.location}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:ring-2 focus:ring-emerald-500 font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">{t('farmer.landSizeAcres')}</label>
                  <input
                    type="number"
                    step="0.1"
                    value={profile.landSize}
                    onChange={(e) => setProfile({ ...profile, landSize: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:ring-2 focus:ring-emerald-500 font-bold"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">{t('farmer.alertPreferences')}</h3>
                <label className="flex items-center gap-3 text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={profile.smsAlerts}
                    onChange={(e) => setProfile({ ...profile, smsAlerts: e.target.checked })}
                    className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>{t('farmer.smsAlertsLabel')}</span>
                </label>
                <label className="flex items-center gap-3 text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={profile.whatsappAlerts}
                    onChange={(e) => setProfile({ ...profile, whatsappAlerts: e.target.checked })}
                    className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>{t('farmer.whatsappAlertsLabel')}</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl emerald-gradient-btn font-extrabold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Save className="w-4 h-4" />
                <span>{t('farmer.saveProfileBtn')}</span>
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FarmerSettingsPage;
