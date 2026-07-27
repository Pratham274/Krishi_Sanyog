import React from 'react';

export const SkeletonLoader = ({ type = 'card', count = 1 }) => {
  const items = Array.from({ length: count });

  if (type === 'card') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((_, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl skeleton-pulse"></div>
            <div className="h-5 w-3/4 rounded-lg skeleton-pulse"></div>
            <div className="h-4 w-full rounded-lg skeleton-pulse"></div>
            <div className="h-4 w-2/3 rounded-lg skeleton-pulse"></div>
          </div>
        ))}
      </div>
    );
  }

  if (type === 'table') {
    return (
      <div className="w-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 overflow-hidden">
        <div className="p-4 bg-slate-100 dark:bg-slate-800/50 flex gap-4">
          <div className="h-5 w-1/4 rounded skeleton-pulse"></div>
          <div className="h-5 w-1/4 rounded skeleton-pulse"></div>
          <div className="h-5 w-1/4 rounded skeleton-pulse"></div>
          <div className="h-5 w-1/4 rounded skeleton-pulse"></div>
        </div>
        <div className="p-4 space-y-4">
          {items.map((_, i) => (
            <div key={i} className="h-10 w-full rounded-lg skeleton-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-20 w-full rounded-2xl skeleton-pulse"></div>
  );
};

export default SkeletonLoader;
