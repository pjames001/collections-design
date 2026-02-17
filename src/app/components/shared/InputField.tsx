import React from 'react';

interface InputFieldProps {
  label: string;
  placeholder?: string;
  theme: string;
  type?: string;
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  theme,
  type = 'text',
  className
}) => (
  <div className={`flex flex-col gap-1.5 w-full ${className}`}>
    <label
      className={`text-md tracking-widest ${
        theme === 'dark' ? 'text-sky-300' : 'text-blue-600/60'
      }`}
    >
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full py-2.5 px-4 rounded-xl border text-xs font-bold transition-all outline-none ${
        theme === 'dark'
          ? 'bg-white/5 border-white/10 text-white hover:bg-white/10 focus:border-blue-500/50'
          : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200 focus:border-blue-600/50'
      }`}
    />
  </div>
);

