import React from 'react';

interface AssetStatProps {
  label: string;
  value: string | null;
  theme: string;
  highlight?: boolean;
}

export const AssetStat: React.FC<AssetStatProps> = ({
  label,
  value,
  theme,
  highlight,
}) => (
  <div className="flex flex-col gap-1">
    <span
      className={`text-[12px] font-black tracking-widest mb-1 ${
        theme === 'dark' ? 'text-sky-300' : 'text-slate-400'
      }`}
    >
      {label}
    </span>
    <span
      className={`text-lg font-black ${
        !value
          ? theme === 'dark'
            ? 'text-white/10'
            : 'text-slate-200'
          : highlight
          ? 'text-green-500'
          : theme === 'dark'
          ? 'text-white'
          : 'text-slate-900'
      }`}
    >
      {value || '—'}
    </span>
  </div>
);

