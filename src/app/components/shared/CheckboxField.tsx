import { Check } from 'lucide-react';
import React from 'react'

export const CheckboxField: React.FC<{ 
  label: string; 
  checked?: boolean; 
  onChange?: (val: boolean) => void;
  theme: string;
}> = ({ label, checked, onChange, theme }) => (
  <label className="flex items-center gap-3 cursor-pointer group select-none">
    <div className="relative flex items-center justify-center">
      <input 
        type="checkbox" 
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="peer sr-only" 
      />
      {/* Custom Checkbox Square */}
      <div className={`w-5 h-5 rounded-lg border-2 transition-all flex items-center justify-center
        ${theme === 'dark' 
          ? 'bg-white/5 border-white/10 peer-checked:bg-blue-600 peer-checked:border-blue-600 group-hover:border-blue-500/50' 
          : 'bg-slate-100 border-slate-300 peer-checked:bg-blue-600 peer-checked:border-blue-600 group-hover:border-blue-400'
        }`}
      >
        <Check 
          size={12} 
          strokeWidth={4} 
          className={`text-white transition-transform duration-200 scale-0 peer-checked:scale-100`} 
        />
      </div>
    </div>
    <span className={`text-[12px] tracking-widest transition-colors
      ${theme === 'dark' 
        ? 'text-white group-hover:text-white' 
        : 'text-slate-500 group-hover:text-slate-900'
      } ${checked ? (theme === 'dark' ? 'text-white' : 'text-slate-900') : ''}`}>
      {label}
    </span>
  </label>
);