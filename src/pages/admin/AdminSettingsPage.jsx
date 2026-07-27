import React, { useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';
import { Save, Shield } from 'lucide-react';
import toast from 'react-hot-toast';

export const AdminSettingsPage = ({ onOpenSearch }) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    toast.success('Admin System Settings Updated!');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B132B] transition-colors duration-300">
      <AdminSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      
      <div className={`transition-all duration-300 ${collapsed ? 'pl-20' : 'pl-64'}`}>
        <AdminHeader onOpenSearch={onOpenSearch} title="Admin Portal Settings" />

        <main className="p-6 sm:p-8 max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-6 shadow-xl">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">System Security & API Configurations</h2>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Directorate Name</label>
                <input
                  type="text"
                  defaultValue="Ministry of Agriculture AI Directorate"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">AI Recommendation Model Version</label>
                <input
                  type="text"
                  defaultValue="Krishi-Neural-v4.2 (ICAR Aligned)"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm font-bold"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>Save System Configurations</span>
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminSettingsPage;
