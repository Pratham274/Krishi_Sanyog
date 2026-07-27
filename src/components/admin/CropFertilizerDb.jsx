import React from 'react';
import { Sprout, FlaskConical, Plus } from 'lucide-react';
import { cropDatabase, fertilizerDatabase } from '../../data/mockCropsFertilizers';
import toast from 'react-hot-toast';

export const CropFertilizerDb = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-2">
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Agricultural Knowledge & Nutrient Database</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">Configure target N-P-K ratios, pH ranges, water requirements, and fertilizer price tables</p>
      </div>

      {/* Crops Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-extrabold text-lg text-slate-900 dark:text-white flex items-center gap-2">
            <Sprout className="w-5 h-5 text-emerald-600" /> Crops Nutrient Profiles
          </h3>
          <button
            onClick={() => toast.success('Add Crop modal opened.')}
            className="px-3 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" /> Add New Crop
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cropDatabase.map((c) => (
            <div key={c.id} className="glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 font-mono">{c.id}</span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">{c.season}</span>
              </div>

              <h4 className="text-base font-extrabold text-slate-900 dark:text-white">{c.name}</h4>
              
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Target N-P-K:</span>
                  <span className="font-bold text-emerald-600">{c.targetNPK}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Ideal pH:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{c.idealPh}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Average Yield:</span>
                  <span className="font-bold text-blue-600">{c.avgYield}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fertilizers Section */}
      <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
        <h3 className="font-extrabold text-lg text-slate-900 dark:text-white flex items-center gap-2">
          <FlaskConical className="w-5 h-5 text-amber-500" /> Fertilizer Specifications & Pricing
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fertilizerDatabase.map((f) => (
            <div key={f.id} className="glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white">{f.name}</h4>
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-extrabold text-xs">{f.pricePerBag}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">{f.bestFor}</p>
              <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">Primary Nutrient: {f.primaryNutrient}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CropFertilizerDb;
