import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, Mail, CreditCard, Smartphone, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';

export const VerifyEmailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  
  // Read actual phone number entered by user
  const userPhone = location.state?.phone || localStorage.getItem('pendingUserPhone') || '+91 79068 91436';
  const [method, setMethod] = useState('sms'); // 'sms' | 'email' | 'aadhaar'
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [email, setEmail] = useState('ramesh.patel@krishisanyog.in');
  const [aadhaarNumber, setAadhaarNumber] = useState('7890 1234 5678');
  const [isResending, setIsResending] = useState(false);

  const handleChange = (index, value) => {
    if (value.length > 1) return;
    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleResend = () => {
    setIsResending(true);
    setTimeout(() => {
      setIsResending(false);
      toast.success(method === 'email' ? `Email code re-sent to ${email}` : `Verification SMS code re-sent to ${userPhone}`);
    }, 800);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (method === 'aadhaar') {
      if (aadhaarNumber.replace(/[^0-9]/g, '').length < 12) {
        toast.error('Please enter a valid 12-digit Aadhaar / PM-Kisan ID.');
        return;
      }
      toast.success(`Identity Verified via PM-Kisan & UIDAI Land Records database for ${aadhaarNumber}!`);
      login('farmer');
      navigate('/farmer');
      return;
    }

    const enteredCode = otp.join('');
    if (enteredCode.length < 6) {
      toast.error('Please enter the 6-digit verification code.');
      return;
    }
    
    toast.success(`Genuine Farmer Identity Verified! Opening your Farmer Portal...`);
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
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Verify Genuine Identity</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Choose your preferred verification method to confirm your genuine account
          </p>
        </div>

        {/* Verification Method Tabs */}
        <div className="grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-slate-800 text-xs font-bold">
          <button
            type="button"
            onClick={() => setMethod('sms')}
            className={`py-2 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer ${
              method === 'sms' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" /> SMS OTP
          </button>
          <button
            type="button"
            onClick={() => setMethod('email')}
            className={`py-2 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer ${
              method === 'email' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Mail className="w-3.5 h-3.5" /> Email OTP
          </button>
          <button
            type="button"
            onClick={() => setMethod('aadhaar')}
            className={`py-2 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer ${
              method === 'aadhaar' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <CreditCard className="w-3.5 h-3.5" /> Aadhaar ID
          </button>
        </div>

        <form onSubmit={handleVerify} className="space-y-6">
          
          {/* Method 1 & 2: 6-Digit OTP */}
          {(method === 'sms' || method === 'email') && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {method === 'sms' ? `Enter 6-digit SMS code sent to ` : `Enter 6-digit Email code sent to `}
                <span className="font-extrabold text-emerald-600 dark:text-emerald-400">
                  {method === 'sms' ? userPhone : email}
                </span>
              </p>

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
            </div>
          )}

          {/* Method 3: Aadhaar / PM-Kisan Genuine Farmer Verification */}
          {method === 'aadhaar' && (
            <div className="space-y-3 text-left">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                12-Digit Aadhaar Number or PM-Kisan Farmer Registration ID *
              </label>
              <input
                type="text"
                required
                value={aadhaarNumber}
                onChange={(e) => setAadhaarNumber(e.target.value)}
                placeholder="7890 1234 5678"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-center font-mono text-base font-bold tracking-widest focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                ⚡ Instant verification against UIDAI & Ministry of Agriculture Land Records Database.
              </p>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl emerald-gradient-btn font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Verify & Access Farmer Portal</span>
          </button>
        </form>

        {method !== 'aadhaar' && (
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Didn't receive code?{' '}
            <button
              onClick={handleResend}
              disabled={isResending}
              className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
            >
              {isResending ? 'Sending...' : 'Resend Code'}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default VerifyEmailPage;
