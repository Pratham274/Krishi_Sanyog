import React, { useState, useEffect } from 'react';
import { Search, X, ShieldCheck, Sprout, Bell, ChevronRight, CornerDownLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockSchemesData } from '../../data/mockSchemes';
import { cropDatabase } from '../../data/mockCropsFertilizers';
import { mockNoticesData } from '../../data/mockNotices';

export const GlobalSearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredSchemes = mockSchemesData.filter(s =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredCrops = cropDatabase.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredNotices = mockNoticesData.filter(n =>
    n.title.toLowerCase().includes(query.toLowerCase()) ||
    n.type.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Bar Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 gap-3">
          <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search schemes, crops, fertilizers, notices... (Type to search)"
            className="w-full bg-transparent text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none text-base font-medium"
            autoFocus
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 font-mono"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-6 flex-1">
          {/* Quick Pages */}
          {!query && (
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Quick Navigation</div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleSelect('/farmer')}
                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 hover:bg-emerald-100/50 dark:hover:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 font-medium text-sm transition-colors text-left"
                >
                  <span>🌾 Farmer Dashboard</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleSelect('/farmer/advisor')}
                  className="flex items-center justify-between p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 hover:bg-amber-100/50 dark:hover:bg-amber-900/30 text-amber-800 dark:text-amber-300 font-medium text-sm transition-colors text-left"
                >
                  <span>🧪 AI Soil Advisor</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleSelect('/farmer/schemes')}
                  className="flex items-center justify-between p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 hover:bg-blue-100/50 dark:hover:bg-blue-900/30 text-blue-800 dark:text-blue-300 font-medium text-sm transition-colors text-left"
                >
                  <span>🏛️ Govt Schemes Portal</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleSelect('/admin')}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium text-sm transition-colors text-left"
                >
                  <span>📊 Admin Analytics Console</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Schemes Section */}
          {filteredSchemes.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Government Schemes
              </div>
              <div className="space-y-1.5">
                {filteredSchemes.map((scheme) => (
                  <div
                    key={scheme.id}
                    onClick={() => handleSelect('/farmer/schemes')}
                    className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                        {scheme.title}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{scheme.category} • Subsidy: {scheme.subsidy}</div>
                    </div>
                    <CornerDownLeft className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Crops Section */}
          {filteredCrops.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                <Sprout className="w-3.5 h-3.5 text-amber-500" /> Crops & Nutrient Profiles
              </div>
              <div className="space-y-1.5">
                {filteredCrops.map((crop) => (
                  <div
                    key={crop.id}
                    onClick={() => handleSelect('/farmer/advisor')}
                    className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400">
                        {crop.name}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Season: {crop.season} • Target NPK: {crop.targetNPK}</div>
                    </div>
                    <CornerDownLeft className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notices Section */}
          {filteredNotices.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                <Bell className="w-3.5 h-3.5 text-blue-500" /> Agricultural Advisories
              </div>
              <div className="space-y-1.5">
                {filteredNotices.map((notice) => (
                  <div
                    key={notice.id}
                    onClick={() => handleSelect('/farmer/notices')}
                    className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {notice.title}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{notice.type} • {notice.publisher}</div>
                    </div>
                    <CornerDownLeft className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {query && filteredSchemes.length === 0 && filteredCrops.length === 0 && filteredNotices.length === 0 && (
            <div className="py-12 text-center text-slate-500 dark:text-slate-400">
              No results found for "{query}". Try searching for "Wheat", "Urea", "PM Kisan", or "Soil Test".
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-400 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span><kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700">↑↓</kbd> to navigate</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700">↵</kbd> to select</span>
          </div>
          <span>Krishi Sanyog Search</span>
        </div>
      </div>
    </div>
  );
};

export default GlobalSearchModal;
