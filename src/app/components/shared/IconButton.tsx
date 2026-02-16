import React from 'react';

interface IconButtonProps {
  icon: React.ReactNode;
  theme: string;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, theme }) => (
  <button
    className={`p-2.5 rounded-xl transition-all hover:scale-110 shadow-sm border ${
      theme === 'dark'
        ? 'bg-white/5 text-white/60 hover:text-white border-white/5'
        : 'bg-white text-slate-500 hover:text-blue-600 border-slate-200'
    }`}
  >
    {icon}
  </button>
);

