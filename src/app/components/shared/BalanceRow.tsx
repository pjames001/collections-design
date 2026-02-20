import React from 'react';

interface BalanceRowProps {
  label: string;
  value: string;
  theme: string;
}

export const BalanceRow: React.FC<BalanceRowProps> = ({
  label,
  value,
  theme,
}) => (
  <div
    className={`flex justify-between items-end pb-2 border-b ${
      theme === 'dark' ? 'border-white/5' : 'border-slate-200'
    }`}
  >
    <span
      className={`text-sm font-bold ${
        theme === 'dark' ? 'text-white' : 'text-slate-700'
      }`}
    >
      {label}
    </span>
    <span
      className={`text-lg font-black ${
        theme === 'dark' ? 'text-white' : 'text-slate-900'
      }`}
    >
      {value}
    </span>
  </div>
);

