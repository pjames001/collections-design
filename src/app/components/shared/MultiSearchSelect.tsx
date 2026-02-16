import React from 'react';
import { ChevronDown } from 'lucide-react';

interface MultiSearchSelectProps {
  label: string;
  theme: string;
}

export const MultiSearchSelect: React.FC<MultiSearchSelectProps> = ({ label, theme }) => (
  <div className="space-y-2">
    <label className={`text-md uppercase tracking-widest ${
        theme === 'dark' ? 'text-blue-300/90' : 'text-blue-600/60'
      }`}>{label}</label>
    <div className={`relative flex items-center justify-between p-3 rounded-xl border transition-all ${theme === 'dark' ? 'bg-white/5 border-white/5 hover:border-blue-500/50' : 'bg-slate-100 border-slate-200'}`}>
      <span className="text-xs font-bold text-slate-400 italic">Select Multiple...</span>
      <ChevronDown size={14} className="text-slate-500" />
    </div>
  </div>
);