import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B132B] flex items-center justify-center p-4 text-center transition-colors">
      <div className="max-w-md space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
          <Sprout className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h1 className="text-7xl font-black text-emerald-600 dark:text-emerald-400">404</h1>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Field Not Found!</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            The agricultural page or soil record you are looking for has been moved or does not exist.
          </p>
        </div>

        <div className="flex justify-center gap-3">
          <Link
            to="/"
            className="px-6 py-3 rounded-2xl emerald-gradient-btn text-xs font-bold flex items-center gap-2"
          >
            <Home className="w-4 h-4" /> Return to Home
          </Link>
          <Link
            to="/farmer"
            className="px-6 py-3 rounded-2xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Farmer Portal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
