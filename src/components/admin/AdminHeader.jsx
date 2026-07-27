import React from 'react';
import { Search, Shield, Bell } from 'lucide-react';
import ThemeToggle from '../common/ThemeToggle';
import LanguageToggle from '../common/LanguageToggle';
import { useAuth } from '../../context/AuthContext';

export const AdminHeader = ({ onOpenSearch, title = 'Admin Analytics Console' }) => {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-20 h-20 px-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between transition-colors">
      <div>
        <h1 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">{title}</h1>
        <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">Chief Agricultural Directorate • Govt Data Hub</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onOpenSearch}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-700 text-xs font-medium border border-slate-200/60 dark:border-slate-700/60 transition-all cursor-pointer"
        >
          <Search className="w-4 h-4 text-blue-600" />
          <span className="hidden sm:inline">Search admin data...</span>
          <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-[10px] font-mono">Ctrl K</kbd>
        </button>

        <LanguageToggle />
        <ThemeToggle />

        <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-800">
          <img src={user?.avatar} alt="Admin" className="w-8 h-8 rounded-xl object-cover ring-2 ring-blue-500" />
          <span className="text-xs font-bold text-slate-800 dark:text-slate-100 hidden md:inline">{user?.name}</span>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
