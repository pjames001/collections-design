import React, { useState, useEffect, useRef } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import {
  FileText,
  Folder,
  Activity,
  LayoutGrid,
  FileSearch,
  History,
  Scale,
  Percent,
  Save,
} from 'lucide-react';

import { TransactionAllocations } from './TransactionAllocations';
import Documents from './Documents';
import NewContactMenu from './NewContactMenu';
import NewSkipTracing from './NewSkipTracing';
import NewExperianReports from './NewExperianReports';
import NewJudgment from './NewJudgment';
import NewLegalDetails from './NewLegalDetails';

interface TabItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const tabs: TabItem[] = [
  { id: 'details', label: 'Account Details', icon: FileText },
  { id: 'folder', label: 'Doc Folder', icon: Folder },
  { id: 'judgment', label: 'Judgment', icon: Scale },
  { id: 'legal', label: 'Legal Details', icon: FileText },
  { id: 'allocations', label: 'Transactions Allocations', icon: Percent },
];

const submenus: Record<string, string[]> = {
  'details': ['Contact Info', 'Skip Tracing', 'experian reports'],
  'folder': ['Uploaded Files', 'Generated Docs', 'Templates', 'Archives'],
  'judgment': [],
  'legal': [],
  'allocations': [],
};

export const NewTabContent: React.FC<{ 
  theme: 'dark' | 'light';
  activeCreditor: string;
}> = ({ theme, activeCreditor }) => {
  const [activeTab, setActiveTab] = useState('details');
  const [activeCategory, setActiveCategory] = useState('Contact Info');
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  
  
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (tabId: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHoveredTab(tabId);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredTab(null);
    }, 200);
  };

  return (
    <div className="flex-1 flex flex-col min-h-[600px] w-full">
      <Tabs.Root value={activeTab} className="flex flex-col h-full" onValueChange={setActiveTab}>
        <div className="mb-6 relative z-40">
          <style>{`
            @keyframes fadeInDown {
              from {
                opacity: 0;
                transform: translateY(-8px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
          <Tabs.List className={`flex gap-2 p-1 backdrop-blur-md rounded-2xl border overflow-visible no-scrollbar transition-colors ${
            theme === 'dark' ? 'bg-white/10 border-white/10' : 'bg-transparent border-slate-300 shadow-lg shadow-slate-800/40'
          }`}>
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(tab.id)}
                onMouseLeave={() => handleMouseLeave()}
              >
                <Tabs.Trigger
                  value={tab.id}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 whitespace-nowrap outline-none cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : theme === 'dark' ? 'text-blue-100 hover:bg-white/5' : 'text-slate-600 hover:bg-white/50'
                  }`}
                >
                  <tab.icon size={18} />
                  <span className="font-medium text-xs uppercase tracking-widest">{tab.label}</span>
                </Tabs.Trigger>

                {/* Dropdown Menu */}
                {hoveredTab === tab.id && (
                  <div 
                    className={`absolute top-full left-0 mt-0 min-w-max rounded-2xl border shadow-2xl backdrop-blur-md z-50 overflow-visible ${
                      theme === 'dark' ? 'bg-slate-900/98 border-white/20' : 'bg-white/98 border-slate-300'
                    }`}
                    style={{ animation: 'fadeInDown 0.2s ease-out', pointerEvents: 'auto' }}
                    onMouseEnter={() => handleMouseEnter(tab.id)}
                    onMouseLeave={() => handleMouseLeave()}
                  >
                    {submenus[tab.id].map((item, idx) => (
                      <button
                        key={item}
                        onClick={() => setActiveCategory(item)}
                        className={`block w-full text-left px-5 py-3 text-sm font-bold uppercase tracking-wide transition-all whitespace-nowrap first:rounded-t-xl last:rounded-b-xl ${
                          idx > 0 ? 'border-t ' + (theme === 'dark' ? 'border-white/5' : 'border-slate-200') : ''
                        } ${
                          activeCategory === item
                            ? 'bg-blue-600 text-white'
                            : theme === 'dark'
                            ? 'text-white/80 hover:bg-white/10 hover:text-white'
                            : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </Tabs.List>
        </div>

        <div className="flex-1 flex min-h-0 relative">
          {/* Content Area wrapped in Tabs.Content for each tab */}
          {tabs.map((tab) => (
            <Tabs.Content key={tab.id} value={tab.id} className="flex-1 flex outline-none data-[state=inactive]:hidden">
               {/* Main View Area */}
              <div className={`flex-1 overflow-y-auto rounded-3xl transition-all duration-300 backdrop-blur-md border custom-scrollbar ${
                theme === 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-transparent border-slate-300 shadow-lg shadow-slate-800/40'
              }`}>
                <div className="p-8">
                   <div className="flex items-center gap-3 mb-6">
                     <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-500">
                        {tab.id === 'details' ? <LayoutGrid size={20} /> : tab.id === 'financials' ? <FileSearch size={20} /> : <History size={20} />}
                     </div>
                     <h2 className={`text-xl font-bold uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                       {tab.label} / {activeCategory}
                     </h2>
                   </div>
                   
                   {tab.id === 'details' && (
                     <CategoryView 
                        category={activeCategory} 
                        theme={theme} 
                        activeCreditor={activeCreditor}
                      />
                  )}
                  
                  {tab.id === 'folder' && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                      <Documents theme={theme} />
                    </div>
                  )}
                  {tab.id === 'judgment' && (
                    <NewJudgment theme={theme} />
                  )}
                  {tab.id === 'legal' && (
                    <NewLegalDetails theme={theme} />
                  )}
                  {tab.id === 'allocations' && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                      <TransactionAllocations theme={theme} />

                      <div className="pt-8 flex justify-end">
                        <button className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-2xl text-sm transition-all hover:bg-blue-500 shadow-lg shadow-blue-600/20">
                          <Save size={18} />
                          Save changes
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Tabs.Content>
          ))}
        </div>
      </Tabs.Root>
    </div>
  );
};

const CategoryView: React.FC<{ 
  category: string; 
  theme: 'dark' | 'light';
  activeCreditor: string;
  judgementEntered?: boolean;
  setJudgementEntered?: (value: boolean) => void;
}> = ({ category, theme, activeCreditor, judgementEntered = false, setJudgementEntered = () => {} }) => {

  // Content rendering based on category
  switch (category) {
    case 'Skip Tracing':
      return (
        <NewSkipTracing theme={theme} />
      );
    case 'Contact Info':
      return (
        <NewContactMenu theme={theme} />
      );
    case 'experian reports':
      return (
        <NewExperianReports theme={theme} />
      );
    
    default:
      return (
        <div className="flex flex-col items-center justify-center py-20 opacity-40 animate-pulse">
           <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <Activity size={32} />
           </div>
           <p className="text-[10px] font-black uppercase tracking-widest">Developing specialized workflow for {category}...</p>
        </div>
      );
  }
};