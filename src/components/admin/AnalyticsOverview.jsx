import React from 'react';
import { Users, Sparkles, Microscope, ShieldCheck, ArrowUpRight, Download } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Legend } from 'recharts';
import { farmerGrowthData, fertilizerDistribution, soilHealthByRegion } from '../../data/mockAnalytics';
import toast from 'react-hot-toast';

export const AnalyticsOverview = () => {
  return (
    <div className="space-y-8">
      
      {/* Top Stat Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-3 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="w-11 h-11 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <span className="text-xs font-extrabold text-emerald-600 flex items-center gap-0.5">
              +18.4% <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">52,400</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Total Registered Farmers</div>
          </div>
        </div>

        <div className="glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-3 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="w-11 h-11 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-xs font-extrabold text-amber-600 flex items-center gap-0.5">
              +24.2% <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">84,100</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">AI Recommendations</div>
          </div>
        </div>

        <div className="glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-3 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="w-11 h-11 rounded-2xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
              <Microscope className="w-6 h-6" />
            </div>
            <span className="text-xs font-extrabold text-teal-600 flex items-center gap-0.5">
              +12.8% <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">43,200</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Soil Tests Processed</div>
          </div>
        </div>

        <div className="glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-3 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="w-11 h-11 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700">Active</span>
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">12 Schemes</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Active Subsidies Cataloged</div>
          </div>
        </div>

      </div>

      {/* Main Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Area Chart: Growth Trends */}
        <div className="lg:col-span-8 glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-6 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">Farmer Onboarding & AI Recommendations Trend</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Monthly progression across 2026</p>
            </div>
            <button
              onClick={() => toast.success('Analytics CSV Exported!')}
              className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 hover:bg-slate-200"
            >
              <Download className="w-4 h-4 text-blue-600" /> Export CSV
            </button>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={farmerGrowthData}>
                <defs>
                  <linearGradient id="colorFarmers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorRecs" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="farmers" name="Registered Farmers" stroke="#10B981" fillOpacity={1} fill="url(#colorFarmers)" strokeWidth={3} />
                <Area type="monotone" dataKey="recommendations" name="AI Recommendations" stroke="#3B82F6" fillOpacity={1} fill="url(#colorRecs)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Pie Chart: Fertilizer Demand Breakdown */}
        <div className="lg:col-span-4 glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-6 shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">Fertilizer Demand Share</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Distribution based on AI advisories</p>
          </div>

          <div className="h-60 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={fertilizerDistribution} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={4} dataKey="value">
                  {fertilizerDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
            {fertilizerDistribution.map((f, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: f.color }}></span>
                  <span className="text-slate-700 dark:text-slate-300 font-semibold">{f.name}</span>
                </div>
                <span className="font-bold text-slate-900 dark:text-white">{f.value}%</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Regional Soil Bar Chart */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-6 shadow-xl">
        <div>
          <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">Soil Quality Index by Major State / Region</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Comparison of average soil health score across states</p>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={soilHealthByRegion}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
              <XAxis dataKey="region" stroke="#94a3b8" fontSize={12} />
              <YAxis stroke="#94a3b8" fontSize={12} domain={[0, 100]} />
              <Tooltip />
              <Bar dataKey="avgScore" name="Avg Soil Score" fill="#10B981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default AnalyticsOverview;
