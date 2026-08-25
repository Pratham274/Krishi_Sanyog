import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles, Activity, CloudSun, Leaf, Sprout } from 'lucide-react';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-10 pb-20 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none -z-10"></div>

      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/90 dark:bg-emerald-950/70 border border-emerald-300/80 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-extrabold tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 animate-pulse" />
              <span>{t('hero.badge')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.12] tracking-tight">
              {t('hero.titlePrefix')}{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-500 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-200 bg-clip-text text-transparent underline decoration-emerald-500/30 decoration-wavy">
                {t('hero.titleHighlight')}
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-medium">
              {t('hero.description')}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                to="/farmer"
                className="px-8 py-4 rounded-2xl emerald-gradient-btn text-base font-bold flex items-center justify-center gap-3 group shadow-xl hover:scale-[1.02] transition-all"
              >
                <span>{t('hero.ctaFarmer')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/farmer/advisor"
                className="px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-base font-bold border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/80 shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <Leaf className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>{t('hero.ctaAnalyze')}</span>
              </Link>
            </div>

            {/* Micro Highlights */}
            <div className="pt-6 flex flex-wrap items-center gap-8 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Free Soil Diagnostic
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Hindi & English Support
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Direct Mandi Rates
              </div>
            </div>

          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden glass-card p-3.5 shadow-2xl border border-slate-200/80 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200"
                alt="AI Smart Farming Field"
                className="w-full h-96 sm:h-[480px] lg:h-[520px] object-cover rounded-2xl filter brightness-95"
              />
              
              {/* Floating Badge 1: Soil Quality */}
              <div className="absolute top-8 left-8 p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-2xl flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-500 dark:text-slate-400">Soil Quality Index</div>
                  <div className="text-base font-black text-emerald-600 dark:text-emerald-400">88/100 • Optimal</div>
                </div>
              </div>

              {/* Floating Badge 2: Weather */}
              <div className="absolute bottom-8 right-8 p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-2xl flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <CloudSun className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-500 dark:text-slate-400">Live Weather Advisory</div>
                  <div className="text-base font-black text-amber-600 dark:text-amber-400">28°C • Good Sowing</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Animated Statistics Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 sm:p-10 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800 shadow-xl">
          <div className="space-y-1 text-left">
            <div className="text-4xl sm:text-5xl font-black text-emerald-600 dark:text-emerald-400">{t('hero.statFarmers')}</div>
            <div className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t('hero.labelFarmers')}</div>
          </div>
          <div className="space-y-1 text-left">
            <div className="text-4xl sm:text-5xl font-black text-amber-500 dark:text-amber-400">{t('hero.statAccuracy')}</div>
            <div className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t('hero.labelAccuracy')}</div>
          </div>
          <div className="space-y-1 text-left">
            <div className="text-4xl sm:text-5xl font-black text-teal-600 dark:text-teal-400">{t('hero.statYield')}</div>
            <div className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t('hero.labelYield')}</div>
          </div>
          <div className="space-y-1 text-left">
            <div className="text-4xl sm:text-5xl font-black text-blue-600 dark:text-blue-400">{t('hero.statSchemes')}</div>
            <div className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t('hero.labelSchemes')}</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
