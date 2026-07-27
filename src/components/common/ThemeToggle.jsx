import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="relative p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 flex items-center gap-2 group cursor-pointer"
      title={`Switch to ${theme === 'dark' ? t('common.light') : t('common.dark')} mode`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-amber-400 transform group-hover:rotate-45 transition-transform duration-300" />
        ) : (
          <Moon className="w-5 h-5 text-slate-700 transform group-hover:-rotate-12 transition-transform duration-300" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
