import React from 'react';
import { ChevronDown } from 'lucide-react';

interface MultiSearchSelectProps {
  label: string;
  theme: string;
  isFilter?: boolean;
}

export const MultiSearchSelect: React.FC<MultiSearchSelectProps> = ({ label, isFilter, theme }) => (
  <div className="space-y-2">
    <label className={`text-md tracking-widest ${
        theme === 'dark' ? 'text-sky-300' : 'text-blue-600'
      }`}>{label}</label>
    <div className={`relative flex items-center justify-between p-3 rounded-xl border transition-all ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white hover:bg-white/10 focus:border-blue-500/50'
            : 'bg-slate-100 border-slate-400 text-slate-800 hover:bg-slate-200 focus:border-blue-600/50'}`}>
      <span className="text-xs font-bold text-slate-400 italic">Select Multiple...</span>
      <ChevronDown size={14} className="text-slate-500" />
      {isFilter && <span className='absolute -bottom-5 right-3 bg-orange-500 text-white text-[10px] py-[2px] px-1 rounded-sm font-bold'>Advanced Filter</span>}
    </div>
  </div>
);