import React from 'react';
import { useTranslation } from 'react-i18next';
import { UploadCloud, Cpu, Award, ArrowRight } from 'lucide-react';

export const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: '01',
      title: t('howItWorks.step1Title'),
      desc: t('howItWorks.step1Desc'),
      icon: UploadCloud,
      color: 'bg-emerald-500',
    },
    {
      number: '02',
      title: t('howItWorks.step2Title'),
      desc: t('howItWorks.step2Desc'),
      icon: Cpu,
      color: 'bg-amber-500',
    },
    {
      number: '03',
      title: t('howItWorks.step3Title'),
      desc: t('howItWorks.step3Desc'),
      icon: Award,
      color: 'bg-teal-500',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
            {t('howItWorks.badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('howItWorks.title')}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Three simple steps to transform your traditional farming into precision agriculture.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative glass-card p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-6">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl ${step.color} text-white flex items-center justify-center shadow-lg font-bold text-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-4xl font-black text-slate-200 dark:text-slate-800 font-mono">{step.number}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
