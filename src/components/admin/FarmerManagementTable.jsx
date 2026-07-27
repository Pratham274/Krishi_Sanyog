import React, { useState } from 'react';
import { Search, Filter, Download, Plus, Edit2, Trash2, CheckCircle2, AlertCircle } from 'lucide-react';
import { mockFarmersData } from '../../data/mockFarmers';
import toast from 'react-hot-toast';

export const FarmerManagementTable = () => {
  const [farmers, setFarmers] = useState(mockFarmersData);
  const [search, setSearch] = useState('');
  const [selectedState, setSelectedState] = useState('All');
  const [selectedFarmer, setSelectedFarmer] = useState(null);

  const filteredFarmers = farmers.filter((f) => {
    const matchesSearch = f.name.toLowerCase().includes(search.toLowerCase()) || f.district.toLowerCase().includes(search.toLowerCase());
    const matchesState = selectedState === 'All' || f.state === selectedState;
    return matchesSearch && matchesState;
  });

  const handleDelete = (id) => {
    setFarmers(farmers.filter((f) => f.id !== id));
    toast.success(`Farmer record ${id} removed.`);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Filter Bar */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-4 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Farmer Directory Management</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">View, search, filter, and manage registered farmer records across states</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => toast.success('CSV Export Downloaded!')}
              className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-blue-600" /> Export CSV
            </button>
            <button
              onClick={() => toast.success('New farmer registration modal opened.')}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-2 shadow-lg cursor-pointer"
            >
              <Plus className="w-4 h-4" /> Add Farmer
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {/* Search */}
          <div className="relative sm:col-span-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search farmer name, district..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* State Filter */}
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All States</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Punjab">Punjab</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
          </select>
        </div>
      </div>

      {/* Table Container */}
      <div className="glass-card rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 font-extrabold uppercase tracking-wider border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-4">Farmer ID & Name</th>
                <th className="p-4">Location</th>
                <th className="p-4">Land (Acres)</th>
                <th className="p-4">Soil Type</th>
                <th className="p-4">Soil Score</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-800 dark:text-slate-200 font-medium">
              {filteredFarmers.map((f) => (
                <tr key={f.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-bold">
                    <div className="text-sm font-extrabold text-slate-900 dark:text-white">{f.name}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{f.id} • {f.phone}</div>
                  </td>
                  <td className="p-4">{f.district}, {f.state}</td>
                  <td className="p-4 font-bold">{f.landSize} Acres</td>
                  <td className="p-4">{f.soilType}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full font-bold text-[11px] ${
                      f.soilScore >= 80 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {f.soilScore} / 100
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full font-bold text-[11px] ${
                      f.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {f.status}
                    </span>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    <button
                      onClick={() => setSelectedFarmer(f)}
                      className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-blue-600"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(f.id)}
                      className="p-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 text-rose-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default FarmerManagementTable;
