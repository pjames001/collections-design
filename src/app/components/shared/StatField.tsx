import React from 'react';

interface StatFieldProps {
  label: string;
  value: string;
  isMono?: boolean;
  theme: string;
}

export const StatField: React.FC<StatFieldProps> = ({
  label,
  value,
  isMono,
  theme,
}) => (
  <div className="flex flex-col gap-1.5">
    <span
      className={`text-md tracking-widest ${
        theme === 'dark' ? 'text-sky-300' : 'text-blue-600'
      }`}
    >
      {label}
    </span>
    <span
      className={`text-md truncate ${
        theme === 'dark'
          ? 'text-white'
          : 'text-slate-800'
      }`}
    >
      {value}
    </span>
  </div>
);

