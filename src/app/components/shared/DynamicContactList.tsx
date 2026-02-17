import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

export const DynamicContactList: React.FC<{ label: string; icon: React.ReactNode; type: string; theme: string }> = ({ label, icon, type, theme }) => (
  <div className="space-y-0.5">
    <div className="flex justify-between items-center">
      <label className="text-md tracking-widest text-sky-300">{label}</label>
      <button className="text-blue-500 hover:text-blue-400 transition-colors">
        <Plus size={16} />
      </button>
    </div>
    <div className="space-y-2">
      <div className="relative group">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">{icon}</div>
        <input 
          type={type} 
          className={`w-full pl-10 pr-10 py-2.5 text-xs font-bold rounded-xl border ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200'}`} 
          defaultValue="contact@firm.com"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 opacity-0 group-hover:opacity-100 transition-all">
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  </div>
);