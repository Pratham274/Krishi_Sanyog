import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Lock, Eye, EyeOff, CheckCircle2, Smartphone, Zap } from 'lucide-react';
import toast from 'react-hot-toast';

export const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userPhone = location.state?.phone || localStorage.getItem('pendingUserPhone') || '+91 98765 43210';
  const demoOtp = '584920';

  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    toast.success(`📲 Reset OTP Sent to ${userPhone}! Code: ${demoOtp}`, {
      duration: 6000,
    });
  }, [userPhone]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }
    toast.success(`Password updated successfully for ${userPhone}! Please login with your new credentials.`);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black flex items-center justify-center p-4 transition-colors">
      <div className="w-full max-w-md glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6">
        
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Reset Password</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Enter the 6-digit OTP sent to <span className="font-extrabold text-emerald-600 dark:text-emerald-400">{userPhone}</span> & setup a new password.
          </p>
        </div>

        {/* Demo OTP Banner */}
        <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
            <div>
              <span className="font-bold text-amber-900 dark:text-amber-200">Reset OTP: </span>
              <span className="font-extrabold text-amber-600 dark:text-amber-400 font-mono tracking-widest text-sm">{demoOtp}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setOtp(demoOtp);
              toast.success(`OTP ${demoOtp} Auto-filled!`);
            }}
            className="px-2.5 py-1 rounded-xl bg-amber-500 text-white font-bold text-[11px] flex items-center gap-1 hover:bg-amber-600 transition-all cursor-pointer shrink-0 shadow-xs"
          >
            <Zap className="w-3 h-3 fill-current" /> Auto-fill
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">6-Digit Verification OTP *</label>
            <input
              type="text"
              required
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="e.g. 584920"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-center font-mono text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-emerald-500 font-bold"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">New Password *</label>
            <div className="relative">
              <input
                type={showPass ? 'text' : 'password'}
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New password"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 pr-10 font-bold"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              >
                {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Confirm New Password *</label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-bold"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl emerald-gradient-btn font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <span>Update Password & Login</span>
          </button>
        </form>

      </div>
    </div>
  );
};

export default ResetPasswordPage;
