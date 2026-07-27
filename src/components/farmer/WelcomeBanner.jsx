import React from 'react';
import { useTranslation } from 'react-i18next';
import { Leaf, ArrowUpRight, Sparkles, CloudSun } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export const WelcomeBanner = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  return (
    <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 text-white shadow-xl shadow-emerald-600/20 overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 backdrop-blur-3xl rounded-l-full pointer-events-none"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>{t('farmer.agronomistConnected')}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {t('farmer.welcome')}, {user?.name || 'Ramesh Patel'}! 🙏
          </h2>

          <p className="text-xs sm:text-sm text-emerald-100 max-w-xl leading-relaxed">
            {t('farmer.subHeading')}
          </p>
        </div>

        {/* Action Pills */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Link
            to="/farmer/advisor"
            className="px-5 py-3 rounded-2xl bg-white text-emerald-800 font-bold text-xs hover:bg-emerald-50 transition-all flex items-center gap-2 shadow-lg"
          >
            <Leaf className="w-4 h-4 text-emerald-600" />
            <span>{t('farmer.newSoilTestBtn')}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <div className="px-4 py-3 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-white font-semibold text-xs flex items-center gap-2">
            <CloudSun className="w-4 h-4 text-amber-300" />
            <span>28°C • Good Soil Moisture</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WelcomeBanner;
