import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BarChart3, Users, Database, BellRing, Settings, LogOut, Shield, ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const AdminSidebar = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const navItems = [
    { label: 'Dashboard Analytics', path: '/admin', icon: BarChart3 },
    { label: 'Farmer Management', path: '/admin/farmers', icon: Users },
    { label: 'Crop & Fertilizer DB', path: '/admin/database', icon: Database },
    { label: 'Broadcast Notices', path: '/admin/notices', icon: BellRing },
    { label: 'Admin Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 bottom-0 z-30 bg-slate-950 border-r border-slate-800 text-slate-300 flex flex-col justify-between transition-all duration-300 overflow-hidden ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div>
        {/* Brand */}
        <div className="h-20 px-4 flex items-center justify-between border-b border-slate-800">
          <NavLink to="/" className="flex items-center gap-3 overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0 shadow-lg text-white font-bold">
              <Shield className="w-6 h-6" />
            </div>
            {!collapsed && (
              <div className="font-extrabold text-base text-white tracking-tight truncate">
                Krishi Admin
              </div>
            )}
          </NavLink>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-3 space-y-1 mt-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/admin'}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-3 rounded-2xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white'
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

      <div className="p-3 space-y-1 border-t border-slate-800">
        <NavLink
          to="/"
          className="flex items-center gap-3 px-3.5 py-3 rounded-2xl text-xs font-bold text-slate-400 hover:bg-slate-800 hover:text-white"
        >
          <Home className="w-5 h-5 shrink-0" />
          {!collapsed && <span className="truncate text-left">Main Landing Page</span>}
        </NavLink>

        <button
          onClick={() => {
            logout();
            navigate('/');
          }}
          className="w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl text-xs font-bold text-rose-400 hover:bg-rose-950/40 transition-colors cursor-pointer"
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {!collapsed && <span className="truncate text-left">Admin Sign Out</span>}
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
