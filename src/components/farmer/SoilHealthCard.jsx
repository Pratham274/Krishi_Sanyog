import React from 'react';
import { useTranslation } from 'react-i18next';
import { Microscope } from 'lucide-react';

export const SoilHealthCard = () => {
  const { t } = useTranslation();

  return (
    <div className="glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-6 shadow-xl">
      
      {/* Card Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
            <Microscope className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 dark:text-white text-base">{t('farmer.soilDiagnosticsTitle')}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">{t('farmer.lastTested')}</p>
          </div>
        </div>

        <div className="px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-extrabold text-xs">
          84 / 100 • {t('farmer.gradeA')}
        </div>
      </div>

      {/* Nutrient N-P-K Bars */}
      <div className="space-y-4">
        {/* Nitrogen */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-slate-700 dark:text-slate-300">{t('farmer.nitrogen')} - Medium</span>
            <span className="text-emerald-600 dark:text-emerald-400">140 kg/ha</span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full w-[65%]"></div>
          </div>
        </div>

        {/* Phosphorus */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-slate-700 dark:text-slate-300">{t('farmer.phosphorus')} - High</span>
            <span className="text-amber-500">42 kg/ha</span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <div className="h-full bg-amber-500 rounded-full w-[85%]"></div>
          </div>
        </div>

        {/* Potassium */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-slate-700 dark:text-slate-300">{t('farmer.potassium')} - Optimal</span>
            <span className="text-teal-600 dark:text-teal-400">210 kg/ha</span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <div className="h-full bg-teal-500 rounded-full w-[78%]"></div>
          </div>
        </div>
      </div>

      {/* pH & Organic Carbon Highlights */}
      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100 dark:border-slate-800/80">
        <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-center">
          <div className="text-xs text-slate-500 dark:text-slate-400">{t('farmer.soilPh')}</div>
          <div className="text-lg font-black text-slate-900 dark:text-white">6.8</div>
        </div>
        <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-center">
          <div className="text-xs text-slate-500 dark:text-slate-400">{t('farmer.organicCarbon')}</div>
          <div className="text-lg font-black text-emerald-600 dark:text-emerald-400">0.72%</div>
        </div>
      </div>

    </div>
  );
};

export default SoilHealthCard;
