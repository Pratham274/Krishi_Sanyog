import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, RefreshCw, Home } from 'lucide-react';

export const ServerErrorPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B132B] flex items-center justify-center p-4 text-center transition-colors">
      <div className="max-w-md space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center mx-auto shadow-xl">
          <ShieldAlert className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h1 className="text-7xl font-black text-rose-600 dark:text-rose-400">500</h1>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Internal Agricultural Server Error</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Our AI neural engine is experiencing high traffic. Please retry in a few moments.
          </p>
        </div>

        <div className="flex justify-center gap-3">
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 rounded-2xl bg-rose-600 text-white text-xs font-bold flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" /> Reload Page
          </button>
          <Link
            to="/"
            className="px-6 py-3 rounded-2xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center gap-2"
          >
            <Home className="w-4 h-4" /> Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServerErrorPage;
