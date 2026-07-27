import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sprout, Mail, ArrowRight, ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';

export const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [emailOrPhone, setEmailOrPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailOrPhone) {
      toast.error('Please enter your email or phone.');
      return;
    }
    toast.success('Reset link & OTP sent to your registered mobile/email.');
    navigate('/reset-password');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B132B] flex items-center justify-center p-4 transition-colors">
      <div className="w-full max-w-md glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6">
        
        <Link to="/login" className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-emerald-600">
          <ArrowLeft className="w-4 h-4" /> Back to Login
        </Link>

        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Forgot Password?</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">Enter your mobile number or registered email to receive a password reset verification code.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Registered Mobile or Email</label>
            <input
              type="text"
              required
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              placeholder="e.g. +91 98765 43210 or name@example.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl emerald-gradient-btn font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <span>Send Reset Verification Code</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};

export default ForgotPasswordPage;
