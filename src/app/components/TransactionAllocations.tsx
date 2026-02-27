import React from 'react';
import { Calculator } from 'lucide-react';
import { ActionPanel } from './ActionPanel'; // Adjust path as needed

interface AllocationRowProps {
  label: string;
  theme: 'dark' | 'light';
}

const AllocationRow: React.FC<AllocationRowProps> = ({ label, theme }) => (
  <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 items-center p-4  transition-all
    ${theme === 'dark' ? 'hover:bg-white/5 border-b border-white/10' : 'hover:bg-blue-200 border-b border-gray-300'}`}>
    
    <div className="md:col-span-1">
      <span className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
        {label}
      </span>
    </div>

    <div className="md:col-span-3 grid grid-cols-3 gap-4">
      <div className="relative">
        <input 
          type="text" 
          placeholder="0.00"
          className={`w-full py-2 px-3 pl-12 rounded-xl border text-xs outline-none transition-all
            ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white focus:border-blue-500/50' : 'bg-white border-slate-400 text-slate-700 focus:border-blue-400'}`} 
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400">adv %</span>
      </div>

      <div className="relative">
        <input 
          type="text" 
          placeholder="0.00"
          className={`w-full py-2 px-3 pl-12 rounded-xl border text-xs outline-none transition-all
            ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white focus:border-blue-500/50' : 'bg-white border-slate-400 text-slate-700 focus:border-blue-400'}`}
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400">atty %</span>
      </div>

      <div className="relative">
        <input 
          type="text" 
          placeholder="0.00"
          className={`w-full py-2 px-3 pl-12 rounded-xl border text-xs outline-none transition-all
            ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white focus:border-blue-500/50' : 'bg-white border-slate-400 text-slate-700 focus:border-blue-400'}`} 
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400">age %</span>
      </div>
    </div>
  </div>
);

export const TransactionAllocations: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const categories = [
    "Principal",
    "Interest",
    "Cost",
    "Attorney fees",
    "Over payment",
    "Payment convenience fee",
    "Legal costs",
    "Collector Percentage",
  ];

  return (
    <div className="animate-in fade-in duration-500 max-w-[1600px] mx-auto">
      
      {/* MAIN ALLOCATIONS SECTION (Left 9 Columns) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <div>
            <h2 className={`text-2xl font-normal ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
              Transaction allocations
            </h2>
            <p className="text-xs text-blue-500">Define percentage distribution for payment types</p>
          </div>
          <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-500">
            <Calculator size={24} />
          </div>
        </div>

        <div className={`p-6 rounded-[40px] border shadow-sm ${
          theme === 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-sky-50 border-blue-500/50 shadow-sm'
        }`}>
          {/* Table Header Guide */}
          <div className="grid grid-cols-4 gap-4 px-4 mb-4">
            <span className={`text-md font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}>Category type</span>
            <span className={`text-md font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-700'} text-center`}>Client %</span>
            <span className={`text-md font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-700'} text-center`}>Attorney %</span>
            <span className={`text-md font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-700'} text-center`}>Agency %</span>
          </div>

          {/* Mapping Categories */}
          <div className="space-y-1">
            {categories.map((cat) => (
              <AllocationRow key={cat} label={cat} theme={theme} />
            ))}
          </div>

        </div>
      </div>

      {/* SIDEBAR ACTION PANEL (Right 3 Columns) */}
      {/* <div className="lg:col-span-4 xl:col-span-3">
        <div className="sticky top-8">
          <ActionPanel theme={theme} className="w-full" />
        </div>
      </div> */}
      
    </div>
  );
};