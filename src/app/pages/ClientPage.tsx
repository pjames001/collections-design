import React, { useState } from 'react'
import { FileText, CreditCard, Calendar, Folder, ClipboardList, Activity, Scale, LayoutGrid, FileSearch, History, ChevronRight, ChevronLeft, Search, Download, SlidersHorizontal } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';
import { ClientInfo } from '../components/ClientInfo';
import { SelectField } from '../components/shared/SelectField';
import { FromToDate } from '../components/shared/FromToDate';
import { InputField } from '../components/shared/InputField';
import { ActionPanel } from '../components/ActionPanel';

const ClientPage = ({ theme }: { theme: 'dark' | 'light' }) => {

  interface TabItem {
    id: string;
    label: string;
    icon: React.ElementType;
  }

  const tabs: TabItem[] = [
    { id: 'client', label: 'Client Details', icon: FileText },
    { id: 'financials', label: 'Financials', icon: CreditCard },
    { id: 'plan', label: 'Payment Plan', icon: Calendar },
    { id: 'folder', label: 'Doc Folder', icon: Folder },
    { id: 'reminders', label: 'Reminders', icon: ClipboardList },
    { id: 'logs', label: 'Audit Logs', icon: Activity },
    { id: 'legal', label: 'Legal Department', icon: Scale },
  ];

  const categories = [
    "Contact Info",
    "Client Status",
    "Activity Code",
    "Notes",
    "Custom Fields",
    "Default Value",
    "Client Portal Settings"
  ];

  const [activeTab, setActiveTab] = useState('client');
  const [activeCategory, setActiveCategory] = useState('Contact Info');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className={`p-8 space-y-8 animate-in fade-in duration-700 custom-scrollbar ${
        theme === 'dark' ? 'bg-gray-700 border-white/10' : 'bg-white/70 border-slate-200/60 shadow-slate-200/40'
      }`}>
        <div className='flex gap-8'>
        <div className="flex-1 flex flex-col min-h-[600px] w-full">
          <Tabs.Root value={activeTab} className="flex flex-col h-full" onValueChange={setActiveTab}>
            <Tabs.List className={`flex gap-2 p-1 backdrop-blur-md rounded-2xl mb-6 border overflow-x-auto no-scrollbar transition-colors ${
              theme === 'dark' ? 'bg-white/10 border-white/10' : 'bg-slate-200 border-slate-300 shadow-inner'
            }`}>
              {tabs.map((tab) => (
                <Tabs.Trigger
                  key={tab.id}
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
              ))}
            </Tabs.List>

            {tabs.map((tab) => (
            <Tabs.Content key={tab.id} value={tab.id} className="flex-1 flex gap-4 outline-none data-[state=inactive]:hidden">
               {/* Main View Area */}
              <div className={`flex-1 overflow-y-auto rounded-3xl transition-all duration-300 backdrop-blur-md border custom-scrollbar ${
                theme === 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="p-8">
                   <div className="flex items-start gap-3 mb-6">
                     <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-500">
                        {tab.id === 'client' ? <LayoutGrid size={20} /> : tab.id === 'financials' ? <FileSearch size={20} /> : <History size={20} />}
                     </div>

                     <div className='flex justify-between items-start'>
                      <h2 className={`text-xl tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                        {tab.label} / {activeCategory}
                      </h2>

                      
                     </div>
                   </div>
                   
                   {tab.id === 'client' && (
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
                            <button className={`absolute -top-10 right-10 w-max flex items-center justify-center gap-2 text-sm py-2.5 px-2 rounded-xl bg-orange-600 text-white font-bold hover:bg-orange-700 transition-all shadow-lg`}>
                              <SlidersHorizontal size={16} />
                              Advanced Filters
                            </button>
                          </div>
                        </div>
                        </div>
                      <ClientInfo theme={theme} />
                    </>
                  )}
                  {tab.id === 'financials' && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
  
                    </div>
                  )}

                  {tab.id === 'plan' && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                      
                    </div>
                  )}
                  {tab.id === 'folder' && (
                    <div className="max-w-[1300px] animate-in fade-in slide-in-from-bottom-4 duration-700">
                      
                    </div>
                  )}
                </div>
              </div>

              {/* Drawer for Categories (Vertical list) */}
              <div className={`flex transition-all duration-300 ease-in-out ${isDrawerOpen ? 'w-64' : 'w-12'} h-full flex-shrink-0 relative overflow-hidden`}>
                {/* Toggle Handle */}
                <button 
                  onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                  className={`absolute top-1/2 -translate-y-1/2 left-0 z-20 w-8 h-12 flex items-center justify-center rounded-l-xl transition-colors ${
                    theme === 'dark' ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                  }`}
                >
                  {isDrawerOpen ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                </button>

                {/* List Content */}
                <div className={`ml-4 h-full w-full rounded-3xl backdrop-blur-md border overflow-y-auto custom-scrollbar p-4 flex flex-col gap-2 transition-all duration-300 ${
                  theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-slate-200'
                } ${!isDrawerOpen && 'opacity-0 pointer-events-none transform translate-x-4'}`}>
                   <p className={`text-[10px] uppercase font-black tracking-widest mb-2 px-2 ${theme === 'dark' ? 'text-blue-300/50' : 'text-slate-400'}`}>Sub-Sections</p>
                   {categories.map((cat) => (
                     <button
                       key={cat}
                       onClick={() => setActiveCategory(cat)}
                       className={`text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wide transition-all ${
                         activeCategory === cat
                           ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 translate-x-1'
                           : theme === 'dark' ? 'text-white/60 hover:bg-white/5 hover:text-white' : 'text-slate-600 hover:bg-white hover:shadow-sm'
                       }`}
                     >
                       {cat}
                     </button>
                   ))}
                </div>
                
                {/* Collapsed state placeholder */}
                {!isDrawerOpen && (
                   <div className="ml-4 h-full w-full flex flex-col items-center pt-8 gap-4 opacity-100">
                      <div className={`w-1 h-1/2 rounded-full ${theme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}`} />
                   </div>
                )}
              </div>
            </Tabs.Content>
          ))}
          </Tabs.Root>
        </div>
        <ActionPanel theme={theme} />
        </div>
    </div>
  )
}

export default ClientPage