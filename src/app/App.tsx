import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { DashboardHeader } from './components/DashboardHeader';
import { TabContent } from './components/TabContent';
import { ActionPanel } from './components/ActionPanel';
import { GlobalNotes } from './components/GlobalNotes';
import { Toaster } from 'sonner';

const App: React.FC = () => {
  const [activeNav, setActiveNav] = useState('crm');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeCreditor, setActiveCreditor] = useState('creditor 1');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const primaryActionCodes = [
    { code: 'CALL', label: 'DO NOT CALL', color: 'bg-red-600' },
    { code: 'SMS', label: 'EMAILS ONLY', color: 'bg-lime-500' },
    { code: 'EMAIL', label: 'ENFORCE JUDGEMENT', color: 'bg-amber-400' },
    { code: 'PTP', label: 'ABC', color: 'bg-emerald-600' },
  ];

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 overflow-hidden flex flex-col ${
      theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Dynamic Background */}
      <div 
        className="fixed inset-0 z-0 opacity-40 pointer-events-none transition-opacity duration-1000"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1730327442005-b5d3d854eb49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjBibHVlJTIwZ2VvbWV0cmljJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzA1NDg3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: theme === 'dark' ? 'blur(100px)' : 'blur(100px) brightness(1.5) saturate(0.5)'
        }}
      />
      
      {/* Sidebar */}
      <Sidebar activeTab={activeNav} setActiveTab={setActiveNav} theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Area */}
      <main className="pl-20 h-screen relative z-10 flex flex-col">
        {/* Top Header */}
        <header className="h-16 flex items-center justify-between px-8 bg-transparent flex-shrink-0">
          <div className="flex items-center gap-4">
            <h1 className={`text-xl font-bold bg-clip-text text-transparent ${
              theme === 'dark' ? 'bg-gradient-to-r from-blue-400 to-white' : 'bg-gradient-to-r from-blue-600 to-blue-900'
            }`}>
              Debt Collection Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-4">
             <div className={`px-4 py-1.5 rounded-full backdrop-blur-md border text-xs font-bold transition-all ${
               theme === 'dark' 
                ? 'bg-white/10 border-white/10 text-blue-300' 
                : 'bg-blue-600/10 border-blue-600/20 text-blue-700'
             }`}>
               Live Queue: 14 Pending
             </div>
             <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white shadow-lg">
               SJ
             </div>
          </div>
        </header>

        {/* Primary Action Codes Strip */}
        <div className={`px-8 py-3 border-y flex justify-center items-center gap-3 overflow-x-auto no-scrollbar flex-shrink-0 ${
          theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          {primaryActionCodes.map((action) => (
            <button 
              key={action.code}
              className={`${action.color} text-white px-5 py-1.5 rounded-full text-xl font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-sm`}
            >
              {action.label}
            </button>
          ))}
        </div>

        {/* Dashboard Content - Scrollable area */}
        <div className="flex-1 overflow-y-auto p-8 pt-4 custom-scrollbar">
          <div className="max-w-[1800px] mx-auto space-y-8 pb-12">
            <DashboardHeader 
              theme={theme} 
              activeCreditor={activeCreditor} 
              setActiveCreditor={setActiveCreditor} 
            />
            
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Central Detailed View */}
              <TabContent 
                theme={theme} 
                activeCreditor={activeCreditor} 
              />
              
              {/* Right Side Action Panel */}
              <ActionPanel theme={theme} className='w-80' />
            </div>

            {/* Global Notes as a regular section at the bottom */}
            <GlobalNotes theme={theme} />
          </div>
        </div>
      </main>

      <Toaster position="bottom-right" theme={theme} />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideDown {
          from { height: 0; opacity: 0; }
          to { height: var(--radix-accordion-content-height); opacity: 1; }
        }
        @keyframes slideUp {
          from { height: var(--radix-accordion-content-height); opacity: 1; }
          to { height: 0; opacity: 0; }
        }
        .animate-slideDown {
          animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
        }
        .animate-slideUp {
          animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}} />
    </div>
  );
};

export default App;
