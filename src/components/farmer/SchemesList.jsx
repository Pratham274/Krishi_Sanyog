import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Search, CheckCircle2, ChevronRight, IndianRupee, Microscope, Droplets, ArrowRight } from 'lucide-react';
import { mockSchemesData } from '../../data/mockSchemes';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';

export const SchemesList = () => {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';
  const { user } = useAuth();
  const [query, setQuery] = useState('');
  const [appliedIds, setAppliedIds] = useState(['SCH-03']); // Pre-applied soil scheme
  const [selectedScheme, setSelectedScheme] = useState(null);

  const filteredSchemes = mockSchemesData.filter(s => {
    const title = isHindi ? s.titleHi : s.title;
    const cat = isHindi ? s.categoryHi : s.category;
    return title.toLowerCase().includes(query.toLowerCase()) || cat.toLowerCase().includes(query.toLowerCase());
  });

  const handleApply = (scheme) => {
    setAppliedIds(prev => [...prev, scheme.id]);
    setSelectedScheme(null);
    const title = isHindi ? scheme.titleHi : scheme.title;
    toast.success(
      isHindi
        ? `${title} के लिए आवेदन सफलतापूर्वक जमा हुआ! संदर्भ आईडी: REF-2026-${Math.floor(1000 + Math.random() * 9000)}`
        : `Application submitted successfully for ${title}! Reference ID: REF-2026-${Math.floor(1000 + Math.random() * 9000)}`
    );
  };

  return (
    <div className="space-y-6">
      {/* Header & Search */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">{t('farmer.govtSchemesPortal')}</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">{t('farmer.schemesSubtitle')}</p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={isHindi ? "योजना या श्रेणी का नाम खोजें..." : "Search scheme name or category..."}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Schemes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSchemes.map((scheme) => {
          const isApplied = appliedIds.includes(scheme.id);
          const title = isHindi ? scheme.titleHi : scheme.title;
          const category = isHindi ? scheme.categoryHi : scheme.category;
          const description = isHindi ? scheme.descriptionHi : scheme.description;
          const subsidy = isHindi ? scheme.subsidyHi : scheme.subsidy;
          const eligibility = isHindi ? scheme.eligibilityHi : scheme.eligibility;

          return (
            <div
              key={scheme.id}
              className="glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-4 shadow-xl hover:-translate-y-1 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                    {category}
                  </span>
                  <span className="text-xs font-bold text-slate-400">{isHindi ? 'आवेदित:' : 'Applied:'} {scheme.appliedCount.toLocaleString()}</span>
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">{title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">{description}</p>

                <div className="mt-4 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">{t('farmer.subsidyRate')}</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{subsidy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{t('farmer.eligibility')}</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 truncate max-w-[200px]">{eligibility}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                {isApplied ? (
                  <button
                    disabled
                    className="w-full py-3 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{t('farmer.appliedActive')}</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setSelectedScheme(scheme)}
                    className="w-full py-3 rounded-2xl emerald-gradient-btn text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{t('farmer.applyNow')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Application Drawer Modal */}
      {selectedScheme && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md">
          <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">
                  {isHindi ? selectedScheme.titleHi : selectedScheme.title}
                </h3>
                <p className="text-xs text-emerald-600 font-bold">
                  {isHindi ? selectedScheme.subsidyHi : selectedScheme.subsidy}
                </p>
              </div>
              <button onClick={() => setSelectedScheme(null)} className="text-slate-400 hover:text-slate-600">✕</button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                <p className="font-bold text-slate-800 dark:text-slate-100">
                  {isHindi ? 'किसान सत्यापन डेटा (स्वचालित)' : 'Farmer Verification Data (Auto-filled)'}
                </p>
                <p className="text-slate-500 mt-1">
                  {isHindi ? 'नाम:' : 'Name:'} {user?.name || 'Ramesh Patel'} • {isHindi ? 'भूमि:' : 'Land:'} {user?.landSize || '4.5'} {isHindi ? 'एकड़' : 'Acres'} • Aadhaar Verified
                </p>
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {isHindi ? 'बैंक खाता संख्या / IFSC कोड *' : 'Bank Account Number / IFSC *'}
                </label>
                <input
                  type="text"
                  defaultValue="SBIN0001234 - A/C *****8942"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-xs font-bold"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {isHindi ? 'खसरा / भू-अभिलेख दस्तावेज़ अपलोड करें' : 'Upload Khasra / Land Record Document'}
                </label>
                <input
                  type="file"
                  className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-emerald-100 file:text-emerald-700"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setSelectedScheme(null)}
                className="flex-1 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold"
              >
                {t('common.cancel')}
              </button>
              <button
                onClick={() => handleApply(selectedScheme)}
                className="flex-1 py-3 rounded-xl emerald-gradient-btn text-xs font-bold cursor-pointer"
              >
                {isHindi ? 'आवेदन की पुष्टि करें और जमा करें' : 'Confirm & Submit Scheme Application'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default SchemesList;
