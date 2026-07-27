import React from 'react';
import { useTranslation } from 'react-i18next';
import { Bell, AlertTriangle, CloudSun, TrendingUp, Info, Tag } from 'lucide-react';
import { mockNoticesData } from '../../data/mockNotices';

export const NoticesList = () => {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';

  return (
    <div className="space-y-6">
      <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-2">
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">{t('farmer.noticesTitle')}</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">{t('farmer.noticesSubtitle')}</p>
      </div>

      <div className="space-y-4">
        {mockNoticesData.map((notice) => {
          const title = isHindi ? notice.titleHi : notice.title;
          const type = isHindi ? notice.typeHi : notice.type;
          const publisher = isHindi ? notice.publisherHi : notice.publisher;
          const content = isHindi ? notice.contentHi : notice.content;

          return (
            <div
              key={notice.id}
              className="glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-3 shadow-xl hover:-translate-y-0.5 transition-transform"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    notice.severity === 'High' ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300' : 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                  }`}>
                    {type}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{publisher}</span>
                </div>
                <span className="text-xs text-slate-400">{notice.date}</span>
              </div>

              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">{title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{content}</p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                {notice.tags.map((tag, i) => (
                  <span key={i} className="px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold flex items-center gap-1">
                    <Tag className="w-3 h-3 text-emerald-500" /> {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NoticesList;
