import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sprout, Eye, EyeOff, Lock, UserCheck, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [role, setRole] = useState('farmer'); // 'farmer' | 'admin'
  const [emailOrPhone, setEmailOrPhone] = useState('ramesh.patel@krishisanyog.in');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailOrPhone || !password) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      login(role);
      setIsLoading(false);
      toast.success(`Welcome back! Logged in as ${role === 'admin' ? 'Admin' : 'Farmer'}`);
      navigate(role === 'admin' ? '/admin' : '/farmer');
    }, 700);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B132B] flex items-center justify-center p-4 transition-colors">
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden glass-card border border-slate-200 dark:border-slate-800 shadow-2xl">
        
        {/* Left Branding Panel */}
        <div className="lg:col-span-5 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-4 relative z-10">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black">Krishi Sanyog</span>
            </Link>
            <h2 className="text-3xl font-extrabold leading-tight pt-6">
              AI Precision Agriculture Platform
            </h2>
            <p className="text-sm text-emerald-100 leading-relaxed">
              Log in to access your soil health diagnostics, custom fertilizer recommendations, and active government subsidies.
            </p>
          </div>

          <div className="space-y-2 relative z-10 pt-12 text-xs text-emerald-100">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>Real-time Soil N-P-K Diagnostics</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>Instant PM-Kisan & Fasal Bima Integration</span>
            </div>
          </div>
        </div>

        {/* Right Login Form */}
        <div className="lg:col-span-7 p-8 sm:p-10 bg-white dark:bg-slate-900 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full space-y-6">
            
            {/* Header */}
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Account Login</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Select your account type to proceed</p>
            </div>

            {/* Role Toggle Selector */}
            <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800">
              <button
                type="button"
                onClick={() => {
                  setRole('farmer');
                  setEmailOrPhone('ramesh.patel@krishisanyog.in');
                }}
                className={`py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  role === 'farmer'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <UserCheck className="w-4 h-4" />
                <span>Farmer Portal</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setRole('admin');
                  setEmailOrPhone('ananya.admin@krishisanyog.gov.in');
                }}
                className={`py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  role === 'admin'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Shield className="w-4 h-4" />
                <span>Admin Console</span>
              </button>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  {role === 'admin' ? 'Admin Official Email' : 'Email Address or Phone Number'}
                </label>
                <input
                  type="text"
                  required
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  placeholder="Enter email or phone"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Password</label>
                  <Link to="/forgot-password" className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
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
                disabled={isLoading}
                className={`w-full py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 text-white transition-all cursor-pointer ${
                  role === 'admin'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-blue-500/20'
                    : 'emerald-gradient-btn shadow-emerald-600/25'
                }`}
              >
                {isLoading ? (
                  <span>Logging in...</span>
                ) : (
                  <>
                    <span>Sign In to {role === 'admin' ? 'Admin Portal' : 'Farmer Dashboard'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Footer Registration Link */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
              Don't have a farmer account yet?{' '}
              <Link to="/register" className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                Register as New Farmer
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
