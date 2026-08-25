import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sprout, Search, Menu, X, Shield, UserCheck, ChevronRight, Smartphone, Share, PlusSquare, CheckCircle2, LogOut } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

export const Navbar = ({ onOpenSearch }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallModal, setShowInstallModal] = useState(false);

  const isPortal = location.pathname.startsWith('/farmer') || location.pathname.startsWith('/admin');

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallApp = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        toast.success('Krishi Sanyog App installed successfully!');
      }
      setDeferredPrompt(null);
    } else {
      setShowInstallModal(true);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-nav transition-colors duration-300">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 via-green-600 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-600/30 group-hover:scale-105 transition-transform duration-300">
              <Sprout className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-700 via-green-600 to-teal-600 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-200 bg-clip-text text-transparent">
                Krishi Sanyog
              </span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400 -mt-1">
                Smart Agri Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          {!isPortal && (
            <nav className="hidden lg:flex items-center gap-10 text-sm font-semibold text-slate-700 dark:text-slate-200">
              <a href="#features" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{t('nav.features')}</a>
              <a href="#how-it-works" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{t('nav.howItWorks')}</a>
              <a href="#benefits" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{t('nav.benefits')}</a>
              <a href="#testimonials" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{t('nav.testimonials')}</a>
              <a href="#faq" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{t('nav.faq')}</a>
              <a href="#contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{t('nav.contact')}</a>
            </nav>
          )}

          {/* Right Action Tools */}
          <div className="flex items-center gap-3 shrink-0">
            
            {/* PWA Install App Button */}
            <button
              onClick={handleInstallApp}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300/60 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-xs font-bold transition-all cursor-pointer shadow-xs"
              title="Install Krishi App on Android, iOS or Desktop"
            >
              <Smartphone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Install App</span>
            </button>

            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 text-xs font-medium border border-slate-200/60 dark:border-slate-700/60 transition-all cursor-pointer"
            >
              <Search className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Search...</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-[10px] font-mono text-slate-600 dark:text-slate-300">Ctrl K</kbd>
            </button>

            {/* Language Toggle */}
            <LanguageToggle />

            {/* Theme Switcher */}
            <ThemeToggle />

            {/* User Profile / Portal Switcher */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2.5 p-1.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors cursor-pointer"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-xl object-cover ring-2 ring-emerald-500"
                  />
                  <div className="hidden md:block text-left pr-1">
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-100 leading-tight">{user.name}</div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold uppercase">{user.role}</div>
                  </div>
                </button>

                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl py-2 z-50 animate-in fade-in duration-200">
                    <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-100">{user.name}</p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">{user.email}</p>
                    </div>

                    <div className="py-1">
                      <button
                        onClick={() => { navigate('/farmer'); setProfileDropdownOpen(false); }}
                        className="w-full px-4 py-2 text-left text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 flex items-center gap-2 cursor-pointer"
                      >
                        <UserCheck className="w-4 h-4 text-emerald-600" /> Farmer Dashboard
                      </button>
                      <button
                        onClick={() => { navigate('/admin'); setProfileDropdownOpen(false); }}
                        className="w-full px-4 py-2 text-left text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2 cursor-pointer"
                      >
                        <Shield className="w-4 h-4 text-blue-600" /> Admin Console
                      </button>
                    </div>

                    <div className="border-t border-slate-100 dark:border-slate-800 pt-1">
                      <button
                        onClick={() => { logout(); navigate('/'); setProfileDropdownOpen(false); }}
                        className="w-full px-4 py-2 text-left text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 flex items-center gap-2 cursor-pointer"
                      >
                        <LogOut className="w-4 h-4" /> Log out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-3">
                <Link
                  to="/login"
                  className="px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-emerald-600 transition-colors"
                >
                  {t('nav.login')}
                </Link>
                <Link
                  to="/farmer"
                  className="px-5 py-2.5 rounded-xl emerald-gradient-btn text-xs font-bold flex items-center gap-1.5 shadow-md"
                >
                  <span>{t('nav.farmerDashboard')}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Install Mobile & Desktop Modal */}
      {showInstallModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-white dark:bg-[#090d16] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Install Krishi Sanyog App</h3>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">Android & iOS Native PWA</p>
                </div>
              </div>
              <button onClick={() => setShowInstallModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="text-base">🤖</span> Android Devices (Chrome/Edge):
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Tap Chrome menu (⋮ top right) ➔ Select <span className="font-bold text-emerald-600 dark:text-emerald-400">"Install app"</span> or <span className="font-bold text-emerald-600 dark:text-emerald-400">"Add to Home Screen"</span>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="text-base">🍏</span> iOS Devices (iPhone / iPad Safari):
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Tap the Safari <span className="font-bold text-blue-600 dark:text-blue-400">Share button</span> (Square with ↑) ➔ Scroll down & tap <span className="font-bold text-emerald-600 dark:text-emerald-400">"Add to Home Screen"</span> ➔ Tap <span className="font-bold">Add</span>.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowInstallModal(false)}
              className="w-full py-3 rounded-2xl emerald-gradient-btn text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Got It! Close Window</span>
            </button>
          </div>
        </div>
      )}

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <button
            onClick={handleInstallApp}
            className="w-full py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-bold text-xs flex items-center justify-center gap-2 shadow-xs"
          >
            <Smartphone className="w-4 h-4 text-emerald-600" />
            <span>Install Krishi App on Android / iOS</span>
          </button>

          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-emerald-600"
          >
            {t('nav.features')}
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-emerald-600"
          >
            {t('nav.howItWorks')}
          </a>
          <a
            href="#benefits"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-emerald-600"
          >
            {t('nav.benefits')}
          </a>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <Link
              to="/farmer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl emerald-gradient-btn text-center text-xs font-semibold"
            >
              🌾 {t('nav.farmerDashboard')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
