import React from 'react';

interface DateFieldProps {
  label: string;
  theme: string;
}

export const DateField: React.FC<DateFieldProps> = ({ label, theme }) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label
      className={`text-md tracking-widest ${
        theme === 'dark' ? 'text-sky-300' : 'text-blue-600'
      }`}
    >
      {label}
    </label>
    <input
      type="date"
      className={`w-full appearance-none py-2.5 px-4 pr-10 rounded-xl border text-xs transition-all outline-none cursor-pointer ${
        theme === 'dark'
          ? 'bg-white/5 border-white/10 text-white hover:bg-white/10 focus:border-blue-500/50'
          : 'bg-slate-100 border-slate-400 text-slate-800 hover:bg-slate-200 focus:border-blue-600/50'
      }`}
    />
  </div>
);

