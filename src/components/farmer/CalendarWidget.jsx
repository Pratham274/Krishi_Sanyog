import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar as CalendarIcon } from 'lucide-react';

export const CalendarWidget = () => {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';

  const tasks = [
    {
      title: 'DAP Basal Application',
      titleHi: 'DAP खाद की पहली खुराक',
      crop: 'Wheat Field 1',
      cropHi: 'गेहूं खेत 1',
      date: 'Tomorrow',
      dateHi: 'कल',
    },
    {
      title: 'First Irrigation Schedule',
      titleHi: 'प्रथम सिंचाई का समय',
      crop: 'Wheat Field 2',
      cropHi: 'गेहूं खेत 2',
      date: 'Jul 30',
      dateHi: '30 जुलाई',
    },
    {
      title: 'Pesticide Foliar Check',
      titleHi: 'कीटनाशक छिड़काव जांच',
      crop: 'Soybean Plot',
      cropHi: 'सोयाबीन प्लॉट',
      date: 'Aug 02',
      dateHi: '02 अगस्त',
    },
  ];

  return (
    <div className="glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-4 shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
            <CalendarIcon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 dark:text-white text-base">{t('farmer.agriTaskCalendar')}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">{t('farmer.julySchedule')}</p>
          </div>
        </div>
      </div>

      <div className="space-y-2.5">
        {tasks.map((task, i) => (
          <div key={i} className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs">
            <div>
              <div className="font-bold text-slate-900 dark:text-white">{isHindi ? task.titleHi : task.title}</div>
              <div className="text-[11px] text-slate-500">{isHindi ? task.cropHi : task.crop}</div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold">{isHindi ? task.dateHi : task.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarWidget;
