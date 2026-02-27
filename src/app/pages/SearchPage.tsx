import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import FilterComponent from '../components/shared/Filter';

export default function SearchPage({ theme }: { theme: 'dark' | 'light' }) {

  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);

  return (
    <Dialog.Root open={isFiltersModalOpen} onOpenChange={setIsFiltersModalOpen}>
    <div className={`p-8 space-y-8 animate-in fade-in duration-700 ${
        theme === 'dark' ? 'bg-slate-950 border-white/10' : 'bg-white/70 border-slate-200/60 shadow-slate-200/40'
      }`}>
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-2">
          <h1 className={`text-4xl font-black uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Account Search
          </h1>
          
        </div>

        {/* Results per page and Filter Trigger */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-md font-black tracking-widest text-white">Show</span>
            <select className="bg-transparent text-md text-white outline-none cursor-pointer">
              <option className='bg-slate-800'>25</option>
              <option className='bg-slate-800'>50</option>
              <option className='bg-slate-800'>100</option>
            </select>
          </div>
          
          <Dialog.Trigger asChild>
            <button className="flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-600/20">
              <SlidersHorizontal size={18} />
              Advanced Filters
            </button>
          </Dialog.Trigger>
        </div>
      </div>

      {/* PRIMARY SEARCH BARS */}
      <div className={`p-8 rounded-[35px] border ${theme === 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/40'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <label className="text-md tracking-[0.2em] text-white ml-1">First Name</label>
            <div className="relative mt-2">
              <input type="text" placeholder="Search first name..." className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 transition-all outline-none font-bold ${theme === 'dark' ? 'bg-white/5 border-white/5 focus:border-blue-500/50 text-white' : 'bg-slate-50 border-slate-100 focus:border-blue-600/50'}`} />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-md tracking-[0.2em] text-white ml-1">Last Name</label>
            <div className="relative mt-2">
              <input type="text" placeholder="Search last name..." className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 transition-all outline-none font-bold ${theme === 'dark' ? 'bg-white/5 border-white/5 focus:border-blue-500/50 text-white' : 'bg-slate-50 border-slate-100 focus:border-blue-600/50'}`} />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-md tracking-[0.2em] text-white ml-1">Account Number</label>
            <div className="relative mt-2">
              <input type="text" placeholder="Search ACCT#..." className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 transition-all outline-none font-bold ${theme === 'dark' ? 'bg-white/5 border-white/5 focus:border-blue-500/50 text-white' : 'bg-slate-50 border-slate-100 focus:border-blue-600/50'}`} />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Inside your Filter Dialog/Popup */}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-md z-[999] animate-in fade-in duration-300" />
        <Dialog.Content className={`fixed top-1/2 left-1/2 -translate-1/2  z-[1000] outline-none animate-in zoom-in-95 duration-300`}>
          <FilterComponent theme={theme} />
      </Dialog.Content>
      </Dialog.Portal>
    </div>
    </Dialog.Root>
  );
};