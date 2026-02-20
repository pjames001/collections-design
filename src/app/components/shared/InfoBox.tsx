import React from 'react';

interface InfoBoxProps {
  label: string;
  value: string;
  subValue?: string;
  theme: string;
}

export const InfoBox: React.FC<InfoBoxProps> = ({
  label,
  value,
  subValue,
  theme,
}) => (
  <div className="flex flex-col">
    <span
      className={`text-[12px] font-black tracking-widest mb-1 ${
        theme === 'dark' ? 'text-white/80' : 'text-slate-700'
      }`}
    >
      {label}
    </span>
    <div className="flex items-baseline gap-2">
      <span
        className={`text-xl font-black ${
          theme === 'dark' ? 'text-white' : 'text-slate-800'
        }`}
      >
        {value || '—'}
      </span>
      {subValue && (
        <span className="text-xs font-bold text-slate-400">/ {subValue}</span>
      )}
    </div>
  </div>
);

