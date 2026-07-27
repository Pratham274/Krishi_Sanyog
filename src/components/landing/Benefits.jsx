import React from 'react';
import { TrendingUp, Droplets, Banknote, ShieldAlert, Check } from 'lucide-react';

export const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
              Proven Impact & ROI
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Why Farmers Trust Krishi Sanyog Across India
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Our AI algorithm reduces input costs by avoiding excessive chemical fertilizer usage while simultaneously improving soil microbial health and water retention.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">Up to 25% Reduction in Fertilizer Costs</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Eliminate guesswork with exact bag calculations for Urea, DAP, and Potash.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">35%+ Increase in Harvest Quality & Yield</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Targeted crop selection suited to micro-climate and market price spikes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">Direct Subsidies & Government Scheme Access</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Step-by-step guidance for PM-Kisan, Fasal Bima, and Micro-Irrigation grants.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Progress Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex justify-between items-center text-sm font-bold">
                <span className="text-slate-800 dark:text-slate-200">Soil Nutrient Balance Index</span>
                <span className="text-emerald-600 dark:text-emerald-400">94% Optimal</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-[94%] transition-all duration-1000"></div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex justify-between items-center text-sm font-bold">
                <span className="text-slate-800 dark:text-slate-200">Average Farm Profitability Boost</span>
                <span className="text-amber-500">+₹42,500 / Hectare</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-500 to-orange-400 rounded-full w-[82%] transition-all duration-1000"></div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex justify-between items-center text-sm font-bold">
                <span className="text-slate-800 dark:text-slate-200">Water Conservation Efficiency</span>
                <span className="text-blue-500">30% Water Saved</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full w-[76%] transition-all duration-1000"></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Benefits;
