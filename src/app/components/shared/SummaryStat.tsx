import React from 'react';

interface SummaryStatProps {
  label: string;
  value: string;
  isTotal?: boolean;
  theme: string;
}

export const SummaryStat: React.FC<SummaryStatProps> = ({
  label,
  value,
  isTotal,
  theme,
}) => (
  <div
    className={`flex flex-col p-4 rounded-2xl ${
      isTotal
        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
        : theme === 'dark'
        ? 'bg-white/5 border border-white/5'
        : 'bg-sky-50 border border-blue-500/50 shadow-sm'
    }`}
  >
    <span
      className={`text-[14px] font-black tracking-[0.2em] ${
        isTotal ? 'text-white' : 'text-blue-600'
      }
      ${theme === 'dark' ? 'text-sky-300' : ''}`}
    >
      {label}
    </span>
    <span
      className={`text-lg font-black ${
        isTotal
          ? 'text-white'
          : theme === 'dark'
          ? 'text-white'
          : 'text-slate-700'
      }`}
    >
      {value}
    </span>
  </div>
);

