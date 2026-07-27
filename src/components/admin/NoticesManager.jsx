import React, { useState } from 'react';
import { BellRing, Send, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';

export const NoticesManager = () => {
  const [formData, setFormData] = useState({
    title: '',
    type: 'Pest Advisory',
    severity: 'High',
    content: '',
    targetState: 'All India',
  });

  const handleBroadcast = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      toast.error('Please complete title and content.');
      return;
    }
    toast.success(`Advisory "${formData.title}" broadcasted to 52,400 farmers!`);
    setFormData({ title: '', type: 'Pest Advisory', severity: 'High', content: '', targetState: 'All India' });
  };

  return (
    <div className="space-y-6">
      <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-2">
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Broadcast Emergency Farmers Advisory</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">Push instant alerts regarding pest attacks, severe weather, or government price announcements directly to farmers' mobile portals</p>
      </div>

      <div className="glass-card p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 max-w-2xl shadow-xl">
        <form onSubmit={handleBroadcast} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Advisory Title *</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g. Locust Outbreak Alert in Western Rajasthan"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Category Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-xs font-bold"
              >
                <option value="Pest Advisory">Pest Advisory</option>
                <option value="Weather Notice">Weather Notice</option>
                <option value="Market Notice">Market Notice (Mandi)</option>
                <option value="Scheme Circular">Scheme Circular</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Target Region</label>
              <select
                value={formData.targetState}
                onChange={(e) => setFormData({ ...formData, targetState: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-xs font-bold"
              >
                <option value="All India">All India</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Punjab">Punjab</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Notice Content *</label>
            <textarea
              rows={4}
              required
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="Enter exact instructions for farmers..."
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-xs focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <Send className="w-4 h-4" />
            <span>Broadcast Live Advisory Notice</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoticesManager;
