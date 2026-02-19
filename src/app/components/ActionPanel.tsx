import React, { useState } from 'react';
import { Send, Hash, MessageSquare, History, Bookmark } from 'lucide-react';

export const ActionPanel: React.FC<{ theme: 'dark' | 'light', className?: string }> = ({ theme, className }) => {
  
  const actionCodes = [
    { code: 'PTP', label: 'Promise to Pay', color: theme === 'dark' ? 'bg-green-500/40 text-green-400 border-green-500/30' : 'bg-green-50 text-green-600 border-green-200' },
    { code: 'LM', label: 'Left Message', color: theme === 'dark' ? 'bg-blue-500/40 text-blue-400 border-blue-500/30' : 'bg-blue-50 text-blue-600 border-blue-200' },
    { code: 'WN', label: 'Wrong Number', color: theme === 'dark' ? 'bg-red-500/40 text-red-400 border-red-500/30' : 'bg-red-50 text-red-600 border-red-200' },
    { code: 'NA', label: 'No Answer', color: theme === 'dark' ? 'bg-amber-500/40 text-amber-400 border-amber-500/30' : 'bg-amber-50 text-amber-600 border-amber-200' },
    { code: 'REF', label: 'Refused Pay', color: theme === 'dark' ? 'bg-purple-500/40 text-purple-400 border-purple-500/30' : 'bg-purple-50 text-purple-600 border-purple-200' },
    { code: 'DIS', label: 'Disputed', color: theme === 'dark' ? 'bg-pink-500/40 text-pink-400 border-pink-500/30' : 'bg-pink-50 text-pink-600 border-pink-200' },
  ];

  const recentNotes = [
    { time: '2h ago', author: 'Sarah J.', text: 'Called debtor, promised to pay $500 by Friday.' },
    { time: '1d ago', author: 'System', text: 'Auto-reminder sent via SMS.' },
    { time: '3d ago', author: 'Sarah J.', text: 'Hard refusal during initial contact. Escalating.' },
  ];

  return (
    <div className={`${className} flex flex-col gap-6 flex-shrink-0`}>
      {/* Action Codes */}
      <div className={`backdrop-blur-xl max-h-110 border rounded-3xl p-6 shadow-xl transition-all duration-500 overflow-y-auto custom-scrollbar ${
        theme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-white border-slate-200 shadow-slate-200/50'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <Hash size={18} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
          <h3 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>Action Codes</h3>
        </div>
        <div className="grid grid-cols-1 gap-2">
          {actionCodes.map((item) => (
            <button
              key={item.code}
              className={`p-2 rounded-xl border text-lg font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer ${item.color}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};
