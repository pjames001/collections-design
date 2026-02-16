import React, { useState } from 'react';
import { MessageSquare, Send, Star } from 'lucide-react';

interface Note {
  id: number;
  time: string;
  author: string;
  text: string;
}

const mockNotes: Note[] = [
  { id: 1, time: '2h ago', author: 'Sarah J.', text: 'Called debtor, promised to pay $500 by Friday.' },
  { id: 2, time: '1d ago', author: 'System', text: 'Auto-reminder sent via SMS.' },
  { id: 3, time: '3d ago', author: 'Sarah J.', text: 'Hard refusal during initial contact. Escalating.' },
  { id: 4, time: '4d ago', author: 'System', text: 'Account transferred to legal review queue.' },
  { id: 5, time: '1 week ago', author: 'Admin', text: 'Initial claim documentation verified.' },
];

export const GlobalNotes: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const [newNote, setNewNote] = useState('');

  return (
    <div className={`w-full backdrop-blur-3xl border rounded-[40px] overflow-hidden transition-all duration-500 mb-12 shadow-2xl ${
      theme === 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-white/70 border-slate-200/60'
    }`}>
      {/* Header */}
      <div className={`flex items-center justify-between px-8 py-6 border-b ${theme === 'dark' ? 'border-white/5' : 'border-slate-100'}`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-500">
            <MessageSquare size={20} />
          </div>
          <div>
            <h3 className={`text-sm font-black uppercase tracking-widest ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
              Account Interaction Notes
            </h3>
            <p className={`text-[10px] font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-white/40' : 'text-slate-400'}`}>
              Chronological log of collector activity
            </p>
          </div>
        </div>
        <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
          theme === 'dark' ? 'bg-white/5 text-blue-300' : 'bg-blue-50 text-blue-600'
        }`}>
          {mockNotes.length} Entries
        </div>
      </div>

      <div className="flex flex-col lg:flex-row min-h-[400px]">
        {/* Notes List */}
        <div className="flex-1 p-8">
          <div className="space-y-4">
            {mockNotes.map((note) => (
              <div key={note.id} className={`px-6 py-3 rounded-3xl border transition-all hover:scale-[1.01] ${
                theme === 'dark' ? 'bg-white/5 border-white/5 hover:bg-white/[0.07]' : 'bg-slate-50 border-slate-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50'
              }`}>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[8px] font-black text-white">
                      {note.author.substring(0, 2).toUpperCase()}
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-wider ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                      {note.author}
                    </span>
                  </div>
                  <span className={`text-[10px] font-bold ${theme === 'dark' ? 'text-white/30' : 'text-slate-400'}`}>
                    {note.time}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-white/80' : 'text-slate-600'}`}>
                  {note.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className={`w-full lg:w-[400px] p-8 border-t lg:border-t-0 lg:border-l flex flex-col gap-4 ${
          theme === 'dark' ? 'border-white/5 bg-black/20' : 'border-slate-100 bg-slate-50/50'
        }`}>
          <div className="flex-1 flex flex-col gap-2">
            <div className='flex justify-between items-center'>
              <label className={`text-[10px] font-black uppercase tracking-widest ${theme === 'dark' ? 'text-white/40' : 'text-slate-400'}`}>
                New Activity Entry
              </label>
              <div className='flex items-center gap-2 text-sm'>
                Important <Star size='16' />
              </div>
            </div>
            <textarea 
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Record call outcome or system update..."
              className={`flex-1 w-full p-6 rounded-3xl border text-sm resize-none focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all ${
                theme === 'dark' 
                  ? 'bg-slate-900 border-white/10 text-white placeholder:text-white/20' 
                  : 'bg-white border-slate-200 text-slate-800 placeholder:text-slate-400 shadow-inner'
              }`}
            />
          </div>
          <button 
            disabled={!newNote}
            className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-2xl shadow-blue-600/30 hover:bg-blue-500 disabled:opacity-30 disabled:grayscale transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
          >
            <Send size={16} />
            Post Entry
          </button>
        </div>
      </div>
    </div>
  );
};
