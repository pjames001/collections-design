import React, { useState, useRef, useMemo } from 'react'
import { FileText, CreditCard, NotebookPen,  Folder, ClipboardList, Activity, Scale, LayoutGrid, FileSearch, History, Search, Download, SlidersHorizontal } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';
import { ClientInfo } from '../components/ClientInfo';
import { SelectField } from '../components/shared/SelectField';
import { FromToDate } from '../components/shared/FromToDate';
import { InputField } from '../components/shared/InputField';
import { AccountsModule } from '../components/Accounts';
import PrimaryActionCodes from '../components/PrimaryActionCodes';
import Documents from '../components/Documents';
import { AccountingModule } from '../components/Accounting';
import { RemindersFeed } from '../components/Reminders';
import { SettingsModule } from '../components/Settings';
import { AccountStatusModule } from '../components/ClientStatus';
import { TransactionAllocations } from '../components/TransactionAllocations';
import { Sidebar } from '../components/Sidebar';



const ClientPage = () => {

  interface TabItem {
    id: string;
    label: string;
    icon: React.ElementType;
  }

  const tabs: TabItem[] = [
    { id: 'client', label: 'Client Details', icon: FileText },
    { id: 'accounts', label: 'Accounts', icon: CreditCard },
    { id: 'documents', label: 'Documents', icon: Folder },
    { id: 'accounting', label: 'Accounting', icon: NotebookPen},
    { id: 'reminders', label: 'Reminders', icon: ClipboardList },
    { id: 'settings', label: 'Settings', icon: SlidersHorizontal },
  ];

  const submenus: Record<string, string[]> = {
    'client': ['Contact Info', 'Client Status', 'Custom Fields', 'Transaction Allocations', 'Default Value', 'Client Portal Settings'],
    'accounts': ['Summary', 'Active Accounts', 'Closed Accounts', 'Payment Plans'],
    'documents': ['Uploaded Files', 'Generated Docs', 'Templates', 'Archives'],
    'accounting': ['Transactions', 'Allocations', 'Reports', 'Reconciliation'],
    'reminders': ['Upcoming', 'Completed', 'Overdue', 'Calendar'],
    'settings': ['General', 'Billing', 'Notifications', 'Security'],
  };

  const [activeTab, setActiveTab] = useState('client');
  const [activeNav, setActiveNav] = useState('crm');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeCategory, setActiveCategory] = useState('Contact Info');
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

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

  const CategoryView: React.FC<{ 
    category: string; 
    theme: 'dark' | 'light';
    }> = ({ category, theme }) => {
      switch (category) {
        case 'Contact Info':
          return (
            <ClientInfo theme={theme} />
          );
        case 'Client Status':
          return (
            <AccountStatusModule theme={theme} />
          );
        case 'Transaction Allocations':
          return (
            <TransactionAllocations theme={theme} />
          );
    }
  }

  // Memoize client details content to prevent re-render on hoveredTab change
  const clientDetailsContent = useMemo(() => (
    <>
      

      {/* TOP: SEARCH & FILTER BAR */}
      <div className={`relative p-6 mb-10 rounded-[35px] border ${theme === 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/20'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 items-end">
          <SelectField label="Client Type" options={[]} theme={theme} />
          <SelectField label="Status" options={[]} theme={theme} />
          <SelectField label="Sales Rep" options={[]} theme={theme} />
          <FromToDate label="Next Work" theme={theme} className='col-span-2' />
          <div className="lg:col-span-1">
            <InputField label="Client Name" placeholder="Search name..." theme={theme} />
          </div>
          <div className='flex items-center gap-2'>
            <button className={`w-full flex items-center justify-center gap-2 text-sm py-2.5 px-2 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-lg`}>
              <Search size={16} />
              Search
            </button>
            <button className={`w-full flex items-center justify-center gap-2 text-sm py-2.5 px-2 rounded-xl bg-teal-700 text-white font-bold hover:bg-teal-800 transition-all shadow-lg`}>
              <Download size={16} />
              Export
            </button>
            <button className={`absolute -top-11 right-10 w-max flex items-center justify-center gap-2 text-sm py-2.5 px-2 rounded-xl bg-cyan-600 text-white font-bold hover:bg-cyan-700 transition-all shadow-lg`}>
              <SlidersHorizontal size={16} />
              Advanced Filters
            </button>
          </div>
        </div>
        <PrimaryActionCodes theme={theme} className='mt-7 rounded-xl' />
        </div>
        <CategoryView 
          category={activeCategory} 
          theme={theme} 
        />
    </>
  ), [activeCategory, theme]);

  return (
    <div className={`p-8 pl-20 space-y-8 animate-in fade-in duration-700 custom-scrollbar ${
        theme === 'dark' ? 'bg-gray-700 border-white/10' : 'bg-white/70 border-slate-200/60 shadow-slate-200/40'
      }`}>
        <Sidebar activeTab={activeNav} setActiveTab={setActiveNav} theme={theme} toggleTheme={toggleTheme} />
        <div className='flex gap-8'>
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
                theme === 'dark' ? 'bg-white/10 border-white/10' : 'bg-slate-200 border-slate-300 shadow-inner'
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

            {tabs.map((tab) => (
            <Tabs.Content key={tab.id} value={tab.id} className="flex-1 flex outline-none data-[state=inactive]:hidden">
               {/* Main View Area */}
              <div className={`min-h-screen flex-1 overflow-y-auto rounded-3xl transition-all duration-300 backdrop-blur-md border custom-scrollbar ${
                theme === 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="p-8">
                   <div className="flex items-start gap-3 mb-6">
                     <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-500">
                        {tab.id === 'client' ? <LayoutGrid size={20} /> : tab.id === 'accounts' ? <FileSearch size={20} /> : <History size={20} />}
                     </div>

                     <div className='flex justify-between items-start'>
                      <h2 className={`text-xl tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                        {tab.label} / {activeCategory}
                      </h2>

                      
                     </div>
                   </div>
                   
                   {tab.id === 'client' && clientDetailsContent}
                  {tab.id === 'accounts' && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                      <AccountsModule theme={theme} />
                    </div>
                  )}

                  {tab.id === 'documents' && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                      <Documents theme={theme} />
                    </div>
                  )}
                  {tab.id === 'accounting' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                      <AccountingModule theme={theme} />
                    </div>
                  )}
                  {tab.id === 'reminders' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                      <RemindersFeed theme={theme} />
                    </div>
                  )}
                  {tab.id === 'settings' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                      <SettingsModule theme={theme} />
                    </div>
                  )}
                </div>
              </div>
            </Tabs.Content>
          ))}
          </Tabs.Root>
        </div>
        
        </div>
    </div>
  )
}

export default ClientPage