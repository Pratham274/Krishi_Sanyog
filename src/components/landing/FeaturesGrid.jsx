import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlaskConical, Sprout, Microscope, CloudSun, ShieldCheck, Bell, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeaturesGrid = () => {
  const { t } = useTranslation();

  const features = [
    {
      id: 'fertilizer',
      title: t('features.fertilizerTitle'),
      desc: t('features.fertilizerDesc'),
      icon: FlaskConical,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/40',
      borderColor: 'border-emerald-200 dark:border-emerald-800',
      link: '/farmer/advisor',
      badge: 'AI Powered',
    },
    {
      id: 'crop',
      title: t('features.cropTitle'),
      desc: t('features.cropDesc'),
      icon: Sprout,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50 dark:bg-amber-950/40',
      borderColor: 'border-amber-200 dark:border-amber-800',
      link: '/farmer/advisor',
      badge: 'High Yield',
    },
    {
      id: 'soil',
      title: t('features.soilTitle'),
      desc: t('features.soilDesc'),
      icon: Microscope,
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-50 dark:bg-teal-950/40',
      borderColor: 'border-teal-200 dark:border-teal-800',
      link: '/farmer',
      badge: 'NPK Analysis',
    },
    {
      id: 'weather',
      title: t('features.weatherTitle'),
      desc: t('features.weatherDesc'),
      icon: CloudSun,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/40',
      borderColor: 'border-blue-200 dark:border-blue-800',
      link: '/farmer',
      badge: 'Live Radar',
    },
    {
      id: 'schemes',
      title: t('features.schemesTitle'),
      desc: t('features.schemesDesc'),
      icon: ShieldCheck,
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/40',
      borderColor: 'border-indigo-200 dark:border-indigo-800',
      link: '/farmer/schemes',
      badge: 'Direct Subsidies',
    },
    {
      id: 'notices',
      title: t('features.noticesTitle'),
      desc: t('features.noticesDesc'),
      icon: Bell,
      color: 'from-rose-500 to-pink-600',
      bgColor: 'bg-rose-50 dark:bg-rose-950/40',
      borderColor: 'border-rose-200 dark:border-rose-800',
      link: '/farmer/notices',
      badge: 'Instant Alerts',
    },
  ];

  return (
    <section id="features" className="py-24 relative bg-slate-100/50 dark:bg-slate-900/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            {t('features.badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('features.title')}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`p-8 rounded-3xl bg-white dark:bg-slate-900 border ${item.borderColor} shadow-xl shadow-slate-200/40 dark:shadow-none hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center shadow-lg text-white group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-bold">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <Link
                  to={item.link}
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                >
                  <span>Explore Module</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturesGrid;
