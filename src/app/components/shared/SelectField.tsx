import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface SelectFieldOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  options: SelectFieldOption[];
  theme: string;
  defaultValue?: string;
  className?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  options,
  theme,
  defaultValue,
  className
}) => (
  <div className={`flex flex-col gap-1.5 w-full ${className}`}>
    <label
      className={`text-md  tracking-widest ${
        theme === 'dark' ? 'text-sky-300' : 'text-blue-600/60'
      }`}
    >
      {label}
    </label>
    <div className="relative group">
      <select
        defaultValue={defaultValue}
        className={`w-full appearance-none py-2.5 px-4 pr-10 rounded-xl border text-xs font-bold transition-all outline-none cursor-pointer ${
          theme === 'dark'
            ? 'bg-white/5 border-white/10 text-white hover:bg-white/10 focus:border-blue-500/50'
            : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200 focus:border-blue-600/50'
        }`}
      >
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            className={
              theme === 'dark'
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-800'
            }
          >
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={14}
        className={`absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none transition-transform group-focus-within:rotate-180 ${
          theme === 'dark' ? 'text-white/40' : 'text-slate-400'
        }`}
      />
    </div>
  </div>
);

