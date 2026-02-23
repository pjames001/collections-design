import React, { useState } from 'react';
import { Calendar, Clock, AlertCircle, CheckCircle2, MoreHorizontal, StickyNote, User, Plus } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { ImportancePill } from './shared/ImportancePill';
import AddReminder from './AddReminder';

interface Reminder {
  id: string;
  dueDate: string;
  timeOfDay: string;
  accountRef: string;
  description: string;
  notes: string;
  importance: 'urgent' | 'super high' | 'high' | 'medium' | 'low' | 'none';
  collector: string;
  dateCompleted?: string;
}

export const RemindersFeed: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {

  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);

  const reminders: Reminder[] = [
    {
      id: '1',
      dueDate: '02/20/2026',
      timeOfDay: '10:30 am',
      accountRef: '#882019',
      description: 'Follow up on settlement',
      notes: 'Client mentioned they would have funds by friday afternoon.',
      importance: 'urgent',
      collector: 'Jacob King',
    },
    {
      id: '2',
      dueDate: '02/22/2026',
      timeOfDay: '02:00 pm',
      accountRef: '#774012',
      description: 'Verify bank wire',
      notes: 'Check if the $500.00 posted to account via the portal.',
      importance: 'medium',
      collector: 'Jonathan Oswald',
      dateCompleted: '02/18/2026'
    }
  ];

  return (
    <Dialog.Root open={isFiltersModalOpen} onOpenChange={setIsFiltersModalOpen}>
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header Area */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className={`text-2xl font-normal ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
            Reminders
          </h2>
          <p className="text-xs text-blue-500 mt-1">Daily task queue and follow-ups</p>
        </div>
        <div className='flex items-center gap-5'>
          <Dialog.Trigger asChild>
            <button className={`px-4 py-2 rounded-xl text-sm transition-all border
              ${theme === 'dark' 
                ? 'border-blue-500/30 text-blue-400 hover:bg-blue-500/10' 
                : 'border-blue-100 text-blue-600 hover:bg-blue-50'}`}>
              <Plus size={16} className='inline mb-1' /> Add New Reminder
            </button>
          </Dialog.Trigger>
          <button className={`px-4 py-2 rounded-xl text-sm transition-all border
            ${theme === 'dark' 
              ? 'border-blue-500/30 text-blue-400 hover:bg-blue-500/10' 
              : 'border-blue-100 text-blue-600 hover:bg-blue-50'}`}>
            View completed archive
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reminders.map((item) => (
          <div 
            key={item.id} 
            className={`relative p-6 rounded-[30px] border transition-all duration-300 hover:shadow-xl  
              ${theme === 'dark' 
                ? 'bg-slate-900/60 border-white/10 hover:border-white/20 hover:shadow-slate-200/20' 
                : 'bg-sky-100 border-slate-100 shadow-sm hover:border-blue-100 hover:shadow-gray-700/30'}`}
          >
            {/* Importance Indicator */}
            <div className="flex justify-between items-start mb-4">
              <ImportancePill level={item.importance} />
              <button className={`transition-colors ${theme === 'dark' ? 'text-slate-300 hover:text-slate-200' : 'text-slate-500 hover:text-slate-700'}`}>
                <MoreHorizontal size={18} />
              </button>
            </div>

            {/* Main Content */}
            <div className="space-y-4">
              <div>
                <p className="text-md font-bold text-blue-500 mb-1">{item.accountRef}</p>
                <h3 className={`text-base font-normal leading-tight ${theme === 'dark' ? 'text-slate-100' : 'text-slate-600'}`}>
                  {item.description}
                </h3>
              </div>

              {/* Notes Box */}
              <div className={`p-4 rounded-2xl text-sm leading-relaxed ${theme === 'dark' ? 'bg-white/5 text-white' : 'bg-slate-50 text-slate-600'}`}>
                <div className="flex gap-2">
                  <StickyNote size={14} className="shrink-0 mt-0.5 opacity-50" />
                  <p>{item.notes}</p>
                </div>
              </div>

              {/* Metadata Row */}
              <div className="flex flex-wrap gap-y-3 gap-x-6 pt-2">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className={theme === 'dark' ? 'text-slate-400' : 'text-slate-500'} />
                  <span className={`text-md ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{item.dueDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className={theme === 'dark' ? 'text-slate-400' : 'text-slate-500'} />
                  <span className={`text-md ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{item.timeOfDay}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={14} className={theme === 'dark' ? 'text-slate-400' : 'text-slate-500'} />
                  <span className={`text-md ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{item.collector}</span>
                </div>
              </div>

              {/* Action/Completion Footer */}
              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-white/5">
                {item.dateCompleted ? (
                  <div className={`flex items-center gap-2 text-xs ${theme === 'dark' ? 'text-green-500' : 'text-green-700'}`}>
                    <CheckCircle2 size={16} />
                    <span>Completed on {item.dateCompleted}</span>
                  </div>
                ) : (
                  <button className={`w-full py-2.5 rounded-xl text-xs transition-all border
                    ${theme === 'dark' 
                      ? 'border-blue-500/30 text-blue-400 hover:bg-blue-500/10' 
                      : 'border-blue-300 text-blue-600 hover:bg-blue-200'}`}>
                    Mark as completed
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-md z-[999] animate-in fade-in duration-300" />
      <Dialog.Content className={`fixed top-1/2 left-1/2 -translate-1/2  z-[1000] outline-none animate-in zoom-in-95 duration-300`}>
        <AddReminder theme={theme} />
      </Dialog.Content>
    </Dialog.Portal>
    </Dialog.Root>
  );
};
