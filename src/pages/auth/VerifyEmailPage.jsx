import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';

export const VerifyEmailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  
  // Read actual phone number entered by user
  const userPhone = location.state?.phone || localStorage.getItem('pendingUserPhone') || '+91 79068 91436';
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isResending, setIsResending] = useState(false);

  const handleChange = (index, value) => {
    if (value.length > 1) return;
    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleResend = () => {
    setIsResending(true);
    setTimeout(() => {
      setIsResending(false);
      toast.success(`Verification code re-sent to ${userPhone}`);
    }, 800);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const enteredCode = otp.join('');
    if (enteredCode.length < 6) {
      toast.error('Please enter any 6-digit code (e.g. 123456).');
      return;
    }
    
    toast.success(`Mobile number (${userPhone}) verified! Opening your Farmer Portal...`);
    login('farmer');
    navigate('/farmer');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black flex items-center justify-center p-4 transition-colors">
      <div className="w-full max-w-md glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 text-center">
        
        <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-md">
          <ShieldCheck className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Verify Mobile Number</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Enter the 6-digit verification code for <span className="font-extrabold text-emerald-600 dark:text-emerald-400">{userPhone}</span>
          </p>
        </div>

        <form onSubmit={handleVerify} className="space-y-6">
          <div className="flex justify-center gap-2">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                id={`otp-${idx}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
                className="w-11 h-12 text-center text-xl font-bold font-mono rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 font-bold"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl emerald-gradient-btn font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Verify & Access Dashboard</span>
          </button>
        </form>

        <div className="text-xs text-slate-500 dark:text-slate-400">
          Didn't receive code on {userPhone}?{' '}
          <button
            onClick={handleResend}
            disabled={isResending}
            className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
          >
            {isResending ? 'Sending...' : 'Resend OTP'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default VerifyEmailPage;
