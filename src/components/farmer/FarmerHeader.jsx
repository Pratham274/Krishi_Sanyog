import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Bell, X } from 'lucide-react';
import ThemeToggle from '../common/ThemeToggle';
import LanguageToggle from '../common/LanguageToggle';
import { useAuth } from '../../context/AuthContext';
import { mockNoticesData } from '../../data/mockNotices';

export const FarmerHeader = ({ onOpenSearch, pageTitle }) => {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';
  const { user } = useAuth();
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const displayTitle = pageTitle || t('farmer.overviewTitle');

  return (
    <header className="sticky top-0 z-20 h-20 px-6 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between transition-colors">
      
      {/* Page Title & Breadcrumb */}
      <div>
        <h1 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">{displayTitle}</h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">{t('farmer.hubSubtitle')} • {user?.location || 'Indore, MP'}</p>
      </div>

      {/* Header Actions */}
      <div className="flex items-center gap-3">
        {/* Search Bar Button */}
        <button
          onClick={onOpenSearch}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 text-xs font-medium border border-slate-200/60 dark:border-slate-700/60 transition-all cursor-pointer"
        >
          <Search className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span className="hidden sm:inline">{t('common.search')}</span>
          <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-[10px] font-mono text-slate-600 dark:text-slate-300">Ctrl K</kbd>
        </button>

        {/* Notifications Center Bell */}
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors relative cursor-pointer"
            title="Notifications"
          >
            <Bell className="w-5 h-5 text-amber-500" />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 rounded-full animate-ping"></span>
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 rounded-full"></span>
          </button>

          {/* Notifications Dropdown */}
          {notificationsOpen && (
            <div className="absolute right-0 mt-3 w-80 sm:w-96 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-4 z-50 animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-amber-500" />
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">{t('farmer.noticesTitle')}</h4>
                </div>
                <button onClick={() => setNotificationsOpen(false)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="py-2 space-y-2 max-h-72 overflow-y-auto">
                {mockNoticesData.map((notice) => {
                  const type = isHindi ? notice.typeHi : notice.type;
                  const title = isHindi ? notice.titleHi : notice.title;
                  const content = isHindi ? notice.contentHi : notice.content;

                  return (
                    <div key={notice.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className={`font-bold px-2 py-0.5 rounded ${notice.severity === 'High' ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300' : 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'}`}>
                          {type}
                        </span>
                        <span className="text-[10px] text-slate-400">{notice.date}</span>
                      </div>
                      <h5 className="text-xs font-bold text-slate-800 dark:text-slate-100">{title}</h5>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2">{content}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Language & Theme Controls */}
        <LanguageToggle />
        <ThemeToggle />

      </div>
    </header>
  );
};

export default FarmerHeader;
