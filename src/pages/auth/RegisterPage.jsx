import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sprout, User, Phone, MapPin, Layers, ArrowRight, Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    state: 'Madhya Pradesh',
    district: 'Indore',
    landSize: '4.5',
    soilType: 'Black Cotton Soil',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.password) {
      toast.error('Please complete all mandatory fields.');
      return;
    }
    toast.success('Registration successful! Verification code sent to your phone.');
    navigate('/verify-email');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B132B] flex items-center justify-center p-4 transition-colors py-12">
      <div className="w-full max-w-2xl glass-card p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6">
        
        {/* Logo & Title */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center shadow-lg">
              <Sprout className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black text-slate-900 dark:text-white">Krishi Sanyog</span>
          </Link>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Farmer Account Registration</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">Join 50,000+ farmers getting AI precision soil & crop guidance</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Full Name *</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Ramesh Patel"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Mobile Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">State</label>
              <select
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Punjab">Punjab</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Rajasthan">Rajasthan</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">District / Village</label>
              <input
                type="text"
                value={formData.district}
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                placeholder="e.g. Indore"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Total Landholding (Acres)</label>
              <input
                type="number"
                step="0.1"
                value={formData.landSize}
                onChange={(e) => setFormData({ ...formData, landSize: e.target.value })}
                placeholder="e.g. 4.5"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Primary Soil Type</label>
              <select
                value={formData.soilType}
                onChange={(e) => setFormData({ ...formData, soilType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Black Cotton Soil">Black Cotton Soil (काली मिट्टी)</option>
                <option value="Alluvial Soil">Alluvial Soil (जलोढ़ मिट्टी)</option>
                <option value="Red & Yellow Soil">Red & Yellow Soil (लाल मिट्टी)</option>
                <option value="Loamy Soil">Loamy Soil (दोमट मिट्टी)</option>
                <option value="Sandy Soil">Sandy Soil (बलुई मिट्टी)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Create Password *</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="At least 6 characters"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-2xl emerald-gradient-btn font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <span>Register & Proceed to Verification</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
          Already registered?{' '}
          <Link to="/login" className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
            Sign In Here
          </Link>
        </div>

      </div>
    </div>
  );
};

export default RegisterPage;
