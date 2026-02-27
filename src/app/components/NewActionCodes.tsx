import React, { useState } from 'react';
import { Send, Hash, MessageSquare, History, Bookmark } from 'lucide-react';
import { MultiSearchSelect } from './shared/MultiSearchSelect';

export const NewActionPanel: React.FC<{ theme: 'dark' | 'light', className?: string }> = ({ theme, className }) => {

  return (
    <div className={`${className} flex flex-col gap-6 flex-shrink-0`}>
      {/* Action Codes */}
      <div className={`backdrop-blur-xl max-h-110 border rounded-3xl p-6 shadow-lg transition-all duration-500 overflow-y-auto custom-scrollbar ${
        theme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-transparent border-slate-300 shadow-slate-800/40'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <Hash size={18} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
          <h3 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>Action Codes</h3>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <MultiSearchSelect label='Select Action Codes' theme={theme} />
        </div>
      </div>

    </div>
  );
};
