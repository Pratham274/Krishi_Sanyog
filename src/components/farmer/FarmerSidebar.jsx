import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FlaskConical, ShieldCheck, Bell, Settings, LogOut, Sprout, ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const FarmerSidebar = ({ collapsed, setCollapsed }) => {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const navItems = [
    { label: isHindi ? 'डैशबोर्ड अवलोकन' : 'Dashboard Overview', path: '/farmer', icon: LayoutDashboard },
    { label: isHindi ? 'स्मार्ट उर्वरक सलाहकार' : 'AI Soil Advisor', path: '/farmer/advisor', icon: FlaskConical },
    { label: isHindi ? 'सरकारी योजनाएं' : 'Govt Schemes Portal', path: '/farmer/schemes', icon: ShieldCheck },
    { label: isHindi ? 'सूचनाएं और मंडी भाव' : 'Notices & Mandi Rates', path: '/farmer/notices', icon: Bell },
    { label: isHindi ? 'पोर्टल सेटिंग्स' : 'Portal Settings', path: '/farmer/settings', icon: Settings },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 bottom-0 z-30 bg-white dark:bg-[#080808] border-r border-slate-200/80 dark:border-slate-800 flex flex-col justify-between transition-all duration-300 overflow-hidden ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Top Header & Collapse Button */}
      <div>
        <div className="h-20 px-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center shrink-0 shadow-md">
              <Sprout className="w-6 h-6 text-white" />
            </div>
            {!collapsed && (
              <div className="font-extrabold text-base text-slate-900 dark:text-white tracking-tight truncate">
                Krishi Sanyog
              </div>
            )}
          </NavLink>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer shrink-0"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* User Card Header */}
        {!collapsed && user && (
          <div className="m-4 p-3 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/60 flex items-center gap-3">
            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-xl object-cover ring-2 ring-emerald-500 shrink-0" />
            <div className="overflow-hidden">
              <h4 className="text-xs font-extrabold text-slate-900 dark:text-white truncate">{user.name}</h4>
              <p className="text-[11px] text-emerald-700 dark:text-emerald-300 font-medium truncate">{user.location}</p>
            </div>
          </div>
        )}

        {/* Navigation Items */}
        <nav className="p-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/farmer'}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-3 rounded-2xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                  }`
                }
              >
                <Icon className="w-5 h-5 shrink-0" />
                {!collapsed && <span className="truncate text-left">{item.label}</span>}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Footer Return Home & Logout */}
      <div className="p-3 space-y-1 border-t border-slate-100 dark:border-slate-800">
        <NavLink
          to="/"
          className="flex items-center gap-3 px-3.5 py-3 rounded-2xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <Home className="w-5 h-5 shrink-0 text-slate-400" />
          {!collapsed && <span className="truncate text-left">{t('nav.home')}</span>}
        </NavLink>

        <button
          onClick={() => {
            logout();
            navigate('/');
          }}
          className="w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl text-xs font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer"
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {!collapsed && <span className="truncate text-left">{t('farmer.logout')}</span>}
        </button>
      </div>

    </aside>
  );
};

export default FarmerSidebar;
