import React from 'react';

interface AllocationTagProps {
  label: string;
  order: number;
  theme: string;
}

export const AllocationTag: React.FC<AllocationTagProps> = ({
  label,
  order,
  theme,
}) => (
  <div
    className={`flex items-center gap-3 p-3 border rounded-xl cursor-grab active:cursor-grabbing transition-all ${
      theme === 'dark'
        ? 'bg-white/5 border-white/10 text-white hover:bg-white/10 focus:border-blue-500/50'
        : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200 focus:border-blue-600/50'
    }`}
  >
    <div className="flex flex-col gap-0.5 opacity-30">
      <div className="h-0.5 w-3 bg-white" />
      <div className="h-0.5 w-3 bg-white" />
      <div className="h-0.5 w-3 bg-white" />
    </div>
    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">
      {order}
    </span>
    <span className="text-xs font-bold text-white">{label}</span>
  </div>
);

