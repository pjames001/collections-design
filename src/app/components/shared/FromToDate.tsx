import React from 'react';

interface FromToDateProps {
  label: string;
  theme: string;
  className?: string;
}

export const FromToDate: React.FC<FromToDateProps> = ({ label, className, theme }) => (
  <div className={`space-y-2 ${className}`}>
    <label className={`text-md tracking-widest ${
        theme === 'dark' ? 'text-sky-300' : 'text-blue-600/60'
      }`}>{label}</label>
    <div className="flex gap-2">
      <input type="date" className={`w-full border rounded-xl py-2.5 px-4 text-xs ${
        theme === 'dark'
          ? 'bg-white/5 border-white/10 text-white hover:bg-white/10 focus:border-blue-500/50'
          : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200 focus:border-blue-600/50'
      }`} />
      <span className="text-slate-700 flex items-center">-</span>
      <input type="date" className={`w-full border rounded-xl py-2.5 px-4 text-xs ${
        theme === 'dark'
          ? 'bg-white/5 border-white/10 text-white hover:bg-white/10 focus:border-blue-500/50'
          : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200 focus:border-blue-600/50'
      }`} />
    </div>
  </div>
);