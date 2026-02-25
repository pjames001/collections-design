import React, { useState } from 'react';
import { LayoutGrid, ClipboardList, Calendar, DollarSign, MessageSquare, Send, User } from 'lucide-react';
import { SelectField } from './shared/SelectField';
import { ActionPanel } from './ActionPanel';

export const AccountStatusModule: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const [newNote, setNewNote] = useState('');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-500">
      
      {/* 1. Primary Metrics & Status (Left Side - 5/12 columns) */}
      <div className={`lg:col-span-5 p-8 rounded-[40px] border space-y-8 h-fit
        ${theme === 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-sky-100 border-slate-100 shadow-sm'}`}>
        
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-600">
            <LayoutGrid size={20} />
          </div>
          <div>
            <h3 className={`text-lg font-normal ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>Account configuration</h3>
            <p className="text-[11px] text-slate-500">Classification and assignment</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <SelectField label="Type" options={[]} theme={theme} />
          <SelectField label="Status" options={[]} theme={theme} />
          <SelectField label="Sales rep" options={[]} theme={theme} />
          
          
        </div>
        
      </div>

      {/* 2. Communication Hub & Notes (Right Side - 7/12 columns) */}
      <div className={`lg:col-span-7 flex flex-col gap-6`}>
        
        {/* Note Entry Area */}
        <div className={`p-8 rounded-[40px] border transition-all
          ${theme === 'dark' ? 'bg-slate-900/60 border-white/10 focus-within:border-blue-500/30' : 'bg-sky-100 border-slate-200 shadow-sm focus-within:border-blue-200'}`}>
          <div className="flex items-center gap-2 mb-4 text-slate-400">
            <MessageSquare size={16} />
            <span className="text-xs">Add a note</span>
          </div>
          <textarea 
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            className={`w-full h-24 bg-transparent outline-none resize-none text-sm leading-relaxed
              ${theme === 'dark' ? 'text-white placeholder:text-slate-600' : 'text-slate-800 placeholder:text-slate-400'}`}
            placeholder="Type your update here..."
          />
          <div className="flex justify-end mt-4">
            <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl text-xs transition-all hover:bg-blue-500 shadow-lg shadow-blue-600/10">
              <Send size={14} />
              Save note
            </button>
          </div>
        </div>

        {/* Notes History / Client Notes */}
        <div className={`flex-1 p-8 rounded-[40px] border flex flex-col gap-6 overflow-hidden
          ${theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-sky-100 border-slate-200'}`}>
          <div className="flex items-center justify-between">
            <h4 className="text-xs text-slate-400 flex items-center gap-2">
              <ClipboardList size={14} />
              Client notes history
            </h4>
          </div>

          <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
            {/* Mock Notes */}
            {[1, 2].map((i) => (
              <div key={i} className={`p-5 rounded-3xl border transition-all hover:translate-x-1
                ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-white border-slate-100'}`}>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <User size={12} />
                    </div>
                    <span className="text-xs text-slate-500">System admin</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Feb 20, 2026</span>
                </div>
                <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                  Revised the account cap following the quarterly review. Client requested a lower threshold for automated legal escalations.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};