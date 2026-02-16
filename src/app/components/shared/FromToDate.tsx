import React from 'react';

interface FromToDateProps {
  label: string;
  theme: string;
}

export const FromToDate: React.FC<FromToDateProps> = ({ label, theme }) => (
  <div className="space-y-2">
    <label className={`text-md uppercase font-black tracking-widest ${
        theme === 'dark' ? 'text-blue-300/90' : 'text-blue-600/60'
      }`}>{label}</label>
    <div className="flex gap-2">
      <input type="date" className={`w-full border rounded-xl p-2 text-xs font-bold${
        theme === 'dark'
          ? 'bg-white/5 border-white/10 text-white hover:bg-white/10 focus:border-blue-500/50'
          : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200 focus:border-blue-600/50'
      }`} />
      <span className="text-slate-700 flex items-center">-</span>
      <input type="date" className={`w-full border rounded-xl p-2 text-xs font-bold${
        theme === 'dark'
          ? 'bg-white/5 border-white/10 text-white hover:bg-white/10 focus:border-blue-500/50'
          : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200 focus:border-blue-600/50'
      }`} />
    </div>
  </div>
);