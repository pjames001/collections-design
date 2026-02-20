import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import {
  FileText,
  CreditCard,
  Calendar,
  Folder,
  ClipboardList,
  Activity,
  ChevronRight,
  ChevronLeft,
  LayoutGrid,
  FileSearch,
  History,
  AlertCircle,
  Scale,
  Phone,
  Smartphone,
  Briefcase,
  User,
  Mail,
  Printer,
  Download,
  Plus,
  Trash2,
  Paperclip,
  PenLine,
} from 'lucide-react';
import { SelectField } from './shared/SelectField';
import { DateField } from './shared/DateField';
import { BalanceRow } from './shared/BalanceRow';
import { InfoBox } from './shared/InfoBox';
import { AssetStat } from './shared/AssetStat';
import { IconButton } from './shared/IconButton';
import { InputField } from './shared/InputField';
import { SummaryStat } from './shared/SummaryStat';
import { AllocationTag } from './shared/AllocationTag';

interface TabItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const tabs: TabItem[] = [
  { id: 'details', label: 'Account Details', icon: FileText },
  { id: 'financials', label: 'Financials', icon: CreditCard },
  { id: 'plan', label: 'Payment Plan', icon: Calendar },
  { id: 'folder', label: 'Doc Folder', icon: Folder },
  { id: 'reminders', label: 'Reminders', icon: ClipboardList },
  { id: 'logs', label: 'Audit Logs', icon: Activity },
];

const categories = [
  "Contact Info",
  "Skip Tracing",
  "dispute",
  "experian reports",
  "settlement"
];

export const TabContent: React.FC<{ 
  theme: 'dark' | 'light';
  activeCreditor: string;
}> = ({ theme, activeCreditor }) => {
  const [activeTab, setActiveTab] = useState('details');
  const [activeCategory, setActiveCategory] = useState('Contact Info');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  
  return (
    <div className="flex-1 flex flex-col min-h-[600px] w-full">
      <Tabs.Root value={activeTab} className="flex flex-col h-full" onValueChange={setActiveTab}>
        <Tabs.List className={`flex gap-2 p-1 backdrop-blur-md rounded-2xl mb-6 border overflow-x-auto no-scrollbar transition-colors ${
          theme === 'dark' ? 'bg-white/10 border-white/10' : 'bg-[#e6f0fa] border-slate-300 shadow-inner'
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

        <div className="flex-1 flex gap-4 overflow-hidden min-h-0 relative">
          {/* Content Area wrapped in Tabs.Content for each tab */}
          {tabs.map((tab) => (
            <Tabs.Content key={tab.id} value={tab.id} className="flex-1 flex gap-4 outline-none data-[state=inactive]:hidden">
               {/* Main View Area */}
              <div className={`flex-1 overflow-y-auto rounded-3xl transition-all duration-300 backdrop-blur-md border custom-scrollbar ${
                theme === 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-[#e6f0fa] border-slate-200 shadow-sm'
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
                  {tab.id === 'financials' && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
  
                      {/* SECTION 1: ADD NEW TRANSACTION */}
                      <div className={`p-8 rounded-[35px] border-2 ${theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/40'}`}>
                        <div className="flex items-center gap-3 mb-8">
                          <div className="p-2 bg-green-500/10 rounded-xl"><Plus className="text-green-500" size={20} /></div>
                          <h3 className={`text-xl font-black uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Add New Transaction</h3>
                        </div>
                    
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
                          <DateField label="Post Date" theme={theme} />
                          <SelectField label="Description" options={[{value:'pmt', label:'Payment'}, {value:'adj', label:'Adjustment'}]} defaultValue="pmt" theme={theme} />
                          <InputField label="Amount" placeholder="$0.00" type="number" theme={theme} />
                          <InputField label="Note / Check #" placeholder="Enter details..." theme={theme} />
                          <SelectField label="Collector" options={[{value:'sj', label:'Sarah Jenkins'}]} defaultValue="sj" theme={theme} />
                          <SelectField label="Co-Collector" options={[{value:'none', label:'None'}]} defaultValue="none" theme={theme} />
                        </div>
                    
                        <button className="mt-8 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]">
                          Post Transaction to Ledger
                        </button>
                      </div>
                    
                      {/* SECTION 2: TRANSACTION SUMMARY (The Equation) */}
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        <SummaryStat theme={theme} label="Principal" value="$10,000.00" />
                        <SummaryStat theme={theme} label="Interest" value="$450.32" />
                        <SummaryStat theme={theme} label="Costs" value="$125.00" />
                        <SummaryStat theme={theme} label="Subtotal" value="$10,575.32" />
                        <SummaryStat theme={theme} label="Total Paid" value="-$1,200.00" />
                        <SummaryStat theme={theme} label="Current Balance" value="$9,375.32" isTotal />
                      </div>
                    
                      {/* SECTION 3: TRANSACTION HISTORY TABLE */}
                      <div className={`rounded-[35px] border overflow-hidden ${theme === 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}>
                        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-slate-500/5">
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-500">Transaction History Ledger</h4>
                            <button className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${theme === 'dark' ? 'bg-white/5 text-white hover:bg-white/10' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                                <Printer size={14} /> Print Ledger
                            </button>
                        </div>
                        
                        <div className="max-w-[1300px] overflow-x-scroll custom-scrollbar">
                          <table className="text-left border-collapse">
                            <thead>
                              <tr className={theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}>
                                {['Date', 'Description', 'ID', 'Note', 'Collector', 'Amount', 'Principal', 'Interest', 'Costs', 'Atty Fees', '3rd Party', 'Agency', 'Client', 'Balance', 'Action'].map((head) => (
                                  <th key={head} className="p-4 text-[16px] min-w-[120px] tracking-widest text-sky-300 border-b border-white/5">{head}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className={`divide-y ${theme === 'dark' ? 'divide-white/5' : 'divide-slate-100'}`}>
                              {[1, 2].map((i) => (
                                <tr key={i} className="hover:bg-blue-500/5 transition-colors group">
                                  <td className={`p-4 text-md ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}>02/13/2026</td>
                                  <td className="p-4"><span className="px-2 py-1 rounded bg-green-500/10 text-green-500 text-[10px] font-black uppercase">Payment</span></td>
                                  <td className="p-4 text-md text-gray-300">#TRX-9902</td>
                                  <td className="p-4 text-md text-gray-300">Ck #4402</td>
                                  <td className="p-4 text-md text-gray-300">S. Jenkins</td>
                                  <td className="p-4 text-md text-green-500">$500.00</td>
                                  <td className="p-4 text-md text-gray-300">$400.00</td>
                                  <td className="p-4 text-md text-gray-300">$100.00</td>
                                  <td className="p-4 text-md text-gray-300">$0.00</td>
                                  <td className="p-4 text-md text-gray-300">$0.00</td>
                                  <td className="p-4 text-md text-gray-300">$0.00</td>
                                  <td className="p-4 text-md text-gray-300">$50.00</td>
                                  <td className="p-4 text-md text-gray-300">$450.00</td>
                                  <td className="p-4 text-md text-blue-500">$9,375.32</td>
                                  <td className="p-4">
                                    <select className={`bg-transparent text-[10px] font-black uppercase outline-none cursor-pointer ${theme === 'dark' ? 'text-white/40' : 'text-slate-400'}`}>
                                      <option className='bg-slate-800'>Edit</option>
                                      <option className='bg-slate-800'>Delete</option>
                                      <option className='bg-slate-800'>Void</option>
                                    </select>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {tab.id === 'plan' && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
  
                      {/* ZONE 1: ASSIGNMENT & TERMS */}
                      <div className={`p-8 rounded-[35px] border ${theme === 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/40'}`}>
                        <div className="flex items-center gap-3 mb-8">
                          <div className="p-2 bg-blue-500/10 rounded-xl"><CreditCard className="text-blue-500" size={20} /></div>
                          <h3 className={`text-xl font-black uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Payment Plan Architect</h3>
                        </div>
                    
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                          {/* Assignment Column */}
                          <div className="space-y-6">
                            <SelectField label="Primary Collector" options={[{value:'1', label:'Sarah Jenkins'}]} defaultValue="1" theme={theme} />
                            <SelectField label="Co-Collector" options={[{value:'0', label:'None Assigned'}]} defaultValue="0" theme={theme} />
                          </div>
                    
                          {/* Settlement Math Column */}
                          <div className="space-y-10">
                            <div className="flex flex-col gap-3">
                              <label className="text-md tracking-widest text-sky-300">Calculation Basis</label>
                              <div className="flex gap-4">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                  <input type="radio" name="basis" className="w-4 h-4 accent-blue-600" defaultChecked />
                                  <span className={`text-xs font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}>Current Balance</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer group">
                                  <input type="radio" name="basis" className="w-4 h-4 accent-blue-600" />
                                  <span className={`text-xs font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}>Settlement (Max 30%)</span>
                                </label>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <InputField label="Total Amount" placeholder="$0.00" type="number" theme={theme} />
                              <InputField label="Interest Rate" placeholder="0.00%" type="number" theme={theme} />
                            </div>
                          </div>
                    
                          {/* Compliance Checkboxes */}
                          <div className="flex flex-col gap-4 justify-center p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                            <label className="flex items-center gap-3 cursor-pointer">
                              <input type="checkbox" className="w-5 h-5 rounded-md accent-blue-600" />
                              <div className="flex flex-col">
                                <span className={`text-xs font-black uppercase ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>Recurring CC / ACH</span>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Enable automatic drafting</span>
                              </div>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                              <input type="checkbox" className="w-5 h-5 rounded-md accent-blue-600" />
                              <div className="flex flex-col">
                                <span className={`text-xs font-black uppercase ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>Convenience Fees</span>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Apply processing surcharge</span>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    
                      {/* ZONE 2: THE SCHEDULE BUILDER */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        
                        {/* Installment Manager */}
                        <div className={`p-8 rounded-[35px] border ${theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-white border-slate-100 shadow-sm'}`}>
                          <div className="flex justify-between items-center mb-6">
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-500">Installment Schedule</h4>
                            <button className="flex items-center gap-2 py-1.5 px-3 bg-blue-600 text-white rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all">
                              <Plus size={14} /> Add Installment
                            </button>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                               <DateField label="First Payment On" theme={theme} />
                               <InputField label="Payment Amount" placeholder="$0.00" type="number" theme={theme} />
                            </div>
                            {/* Placeholder for dynamic payments */}
                            <div className="flex items-center justify-center p-4 border-2 border-dashed border-white/5 rounded-2xl">
                              <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Click "Add Installment" to stack payments</span>
                            </div>
                          </div>
                    
                          <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                             <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Send Payment Reminders</span>
                             </label>
                          </div>

                          <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                             <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Initial Payment Is Different Amount:</span>
                             </label>
                          </div>
                        </div>
                    
                        {/* Frequency & Allocation */}
                        <div className="space-y-6">
                          {/* Frequency Card */}
                          <div className={`p-8 rounded-[35px] border ${theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-white border-slate-100'}`}>
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-500 mb-6">Frequency Settings</h4>
                            <div className="grid grid-cols-2 gap-6">
                              <SelectField label="Repeat Cycle" options={[{value:'1', label:'Indefinite'}, {value:'2', label:'Fixed Count'}]} defaultValue="1" theme={theme} />
                              <SelectField label="Interval" options={[{value:'w', label:'Weekly'}, {value:'2w', label:'Bi-Weekly'}, {value:'m', label:'Monthly'}]} defaultValue="m" theme={theme} />
                            </div>
                          </div>
                    
                          {/* Allocation Order Card */}
                          <div className={`p-8 rounded-[35px] border ${theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-white border-slate-100'}`}>
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-500 mb-6">Allocation Priority</h4>
                            <div className="space-y-2">
                              <AllocationTag order={1} label="Principal Balance" theme={theme} />
                              <AllocationTag order={2} label="Interest Accrued" theme={theme} />
                              <AllocationTag order={3} label="Legal & Service Fees" theme={theme} />
                            </div>
                            <p className="mt-4 text-[9px] font-bold text-slate-500 uppercase tracking-tighter">Drag to reorder payment application priority</p>
                          </div>
                        </div>
                      </div>
                    
                      {/* FINAL ACTION */}
                      <button className="w-full py-6 bg-green-600 hover:bg-green-500 text-white rounded-[25px] font-black uppercase tracking-[0.3em] transition-all shadow-xl shadow-green-600/20 text-lg">
                        Activate Payment Plan
                      </button>
                    </div>
                  )}
                  {tab.id === 'folder' && (
                    <div className="max-w-[1300px] animate-in fade-in slide-in-from-bottom-4 duration-700">
                      <table className="text-left border-collapse">
                        <thead>
                          <tr className={theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}>
                            {['#', 'File Name', 'Comments', 'File Size', 'By', 'Upload Date', 'Show in Client Portal', 'Actions'].map((head) => (
                              <th key={head} className="p-4 text-[16px] font-black tracking-widest text-slate-400 border-b border-white/5">{head}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className={`divide-y ${theme === 'dark' ? 'divide-white/5' : 'divide-slate-100'}`}>
                          {[1, 2].map((i) => (
                            <tr key={i} className="hover:bg-blue-500/5 transition-colors group">
                              <td className={`p-4 text-md ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}>
                                <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                              </td>
                              <td className="p-4 text-md text-gray-300">ACCOUNT PAID IN FULL_SETTLED LETTER.docx</td>
                              <td className="p-4 text-md text-gray-300">Generated from the Account Details tab</td>
                              <td className="p-4 text-md text-gray-300">130.54 KB</td>
                              <td className="p-4 text-md text-gray-300">Annabel</td>
                              <td className="p-4 text-md text-gray-300">8/22/2025 2:05:42 PM</td>
                              <td className="p-4 text-md text-gray-300">
                                <input type="checkbox" className="w-4 h-4 accent-blue-600" checked />
                              </td>
                              <td className="p-4">
                                <select className={`bg-transparent text-[10px] font-black uppercase outline-none cursor-pointer ${theme === 'dark' ? 'text-white/40' : 'text-slate-400'}`}>
                                  <option className='bg-slate-800'>Edit</option>
                                  <option className='bg-slate-800'>Download</option>
                                </select>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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
        </div>
      </Tabs.Root>
    </div>
  );
};

const CategoryView: React.FC<{ 
  category: string; 
  theme: 'dark' | 'light';
  activeCreditor: string;
}> = ({ category, theme, activeCreditor }) => {

  // Content rendering based on category
  switch (category) {
    case 'Skip Tracing':
      return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          {/* TOP ROW: Credit Identity */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            
            {/* Credit Score Hero Card */}
            <div className={`lg:col-span-1 p-6 rounded-[30px] border flex flex-col justify-center items-center relative overflow-hidden ${
              theme === 'dark' ? 'bg-blue-600/10 border-blue-500/20' : 'bg-blue-50 border-blue-200 shadow-sm'
            }`}>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Activity size={60} className="text-blue-500" />
              </div>
              <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Credit Score</span>
              <span className={`text-5xl font-black mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>695</span>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-green-500">Good Standing</span>
              </div>
            </div>
        
            {/* Credit Configuration Fields */}
            <div className={`lg:col-span-3 p-6 rounded-[30px] border grid grid-cols-1 md:grid-cols-3 gap-6 items-center ${
              theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-sky-200/70 border-slate-200 shadow-sm'
            }`}>
              <SelectField
                label="Credit Rating" 
                options={[{value:'poor', label:'Poor'}, {value:'fair', label:'Fair'}, {value:'good', label:'Good'}, {value:'very good', label:'Very Good'}, {value:'excellent', label:'Excellent'} ]}
                defaultValue="good"
                theme={theme}
              />
              <SelectField
                label="TRW Bureau Status" 
                options={[{value:'reported', label:'Reported'}, {value:'not reported', label:'Not Reported'} ]}
                defaultValue="reported"
                theme={theme}
              />
              <div className="flex flex-col gap-1.5">
                <label className={`text-md tracking-widest ${theme === 'dark' ? 'text-blue-300' : 'text-blue-600'}`}>
                  Revolving Credit
                </label>
                <div className="flex items-baseline gap-2">
                   <span className={`text-xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>$2,130</span>
                   <span className="text-xs font-bold text-slate-400">/ N/A</span>
                </div>
              </div>
            </div>
          </div>
        
          {/* BOTTOM ROW: Real Estate & Equity Assets */}
          <div className={`p-8 rounded-[30px] border ${
            theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-sky-200/70 border-slate-200'
          }`}>
            <div className="flex items-center gap-2 mb-8">
              <div className="h-5 w-1 bg-violet-500 rounded-full" />
              <h4 className={`text-xs uppercase font-black tracking-[0.2em] ${theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}`}>Property & Asset Valuation</h4>
            </div>
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
              <SelectField
                label="Property Ownership" 
                options={[{value:'none', label:'None'}, {value:'own', label:'Own'}, {value:'rent', label:'Rent'} ]}
                defaultValue="none"
                theme={theme}
              />
              
              <AssetStat label="Mortgage Amount" value={null} theme={theme} />
              <AssetStat label="Available Equity" value="$0.00" theme={theme} highlight />
              <AssetStat label="Zillow Valuation" value={null} theme={theme} />
              <AssetStat label="Est. Monthly Rent" value="$6,380" theme={theme} />
            </div>
          </div>
        </div>
      );
    case 'Contact Info':
      return (
        <div className="grid grid-cols-1 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
  
          {/* Section: Addresses */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-5 w-1 bg-blue-600 rounded-full" />
              <h4 className={`text-xs uppercase font-black tracking-[0.2em] ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Primary Locations</h4>
            </div>
            
            <div className={`grid gap-3 rounded-2xl border transition-all hover:border-blue-500/50 ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-sky-200/70 border-slate-200'}`}>
              {[
                { id: 'home1', addr: '498 Elm Ave, San Bruno, CA 94066', status: 'Good', type: 'Home' },
                { id: 'home2', addr: '269 EL Camino Real, San Francisco, CA 94080', status: 'Unknown', type: 'Work' }
              ].map((item) => (
                <div key={item.id} className={`group flex items-center justify-between p-4`}>
                  <div className="flex items-center gap-4">
                    <input type="checkbox" id={item.id} className="w-5 h-5 rounded-md border-2 border-blue-500 accent-blue-600 cursor-pointer" />
                    <div className="flex flex-col">
                      <label htmlFor={item.id} className={`text-md capitalize tracking-tight cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                        {item.addr}
                      </label>
                      <div>
                        <span className={`text-[14px] mr-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{item.type} Address</span>
                        <span className={`text-[14px] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Consented</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className={`px-3 py-1 rounded-full text-[12px] font-black uppercase tracking-widest ${
                      item.status === 'Good' ? 'bg-green-500/10 text-green-500' : 'bg-slate-500/10 text-slate-400'
                    }`}>
                      {item.status}
                    </div>
                    <PenLine className={`${theme === 'dark' ? 'text-white' : 'text-slate-700'}`} size={20} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        
          {/* Section: Communications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Phone Numbers */}
            <section className="flex flex-col gap-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-5 w-1 bg-orange-500 rounded-full" />
                <h4 className={`text-xs uppercase font-black tracking-[0.2em] ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>Phone Directory</h4>
              </div>
              
              <div className={`space-y-3  rounded-2xl border transition-all hover:border-blue-500/50 ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-sky-200/70 border-slate-200'}`}>
                {[
                  { id: 'ph1', label: 'From Experian', num: '415-310-1981', status: 'Bad', icon: <Phone size={14}/>, color: theme === 'dark' ? 'text-green-500' : 'text-green-600' },
                  { id: 'ph2', label: 'From IDI', num: '415-310-4188', status: 'Good', icon: <Smartphone size={14}/>, color: theme === 'dark' ? 'text-orange-500' : 'text-orange-600' }
                ].map(item => (
                  <div key={item.id} className='flex items-center justify-between p-4'>
                    <div className="flex items-center gap-4">
                      <input type="checkbox" id={item.id} className="w-5 h-5 rounded-md accent-blue-600" />
                      <div>
                        <div className={`flex items-center gap-2 text-[14px] font-semibold tracking-widest mb-1 ${item.color}`}>
                          {item.icon} {item.label} <span className={`${theme === 'dark' ? 'text-sky-300' : 'text-slate-600'}`}>Consented</span>
                        </div>
                        <div className={`text-md ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{item.num}</div>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span className={`px-2 py-1 rounded-full text-[12px] font-black uppercase ${item.status === 'Good' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                        {item.status}
                      </span>
                      <PenLine className={`${theme === 'dark' ? 'text-white' : 'text-slate-700'}`} size={20} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
        
            {/* Email Addresses */}
            <section className="flex flex-col gap-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-5 w-1 bg-teal-500 rounded-full" />
                <h4 className={`text-xs uppercase font-black tracking-[0.2em] ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}>Email Accounts</h4>
              </div>
              
              <div className={`space-y-3  rounded-2xl border transition-all hover:border-blue-500/50 ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-sky-200/70 border-slate-200'}`}>
                {[
                  { id: 'em1', mail: 'boracaygarden@att.net', status: 'Good' },
                  { id: 'em2', mail: 'hyattgirl55@yahoo.com', status: 'Bad' }
                ].map(item => (
                  <div key={item.id} className='flex items-center justify-between p-4'>
                     <div className="flex items-center gap-4">
                      <input type="checkbox" id={item.id} className="w-5 h-5 rounded-md accent-blue-600" />
                      <span className={`text-md tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{item.mail}</span>
                       <span className={`${theme === 'dark' ? 'text-sky-300' : 'text-slate-600'}`}>Consented</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span className={`px-2 py-1 rounded-full text-[12px] font-black uppercase ${item.status === 'Good' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                        {item.status}
                      </span>
                      <PenLine className={`${theme === 'dark' ? 'text-white' : 'text-slate-700'}`} size={20} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        
          {/* Footer: Legal/Employment */}
          <div className={`flex flex-col md:flex-row justify-between gap-4 p-6 rounded-[25px] border-2 border-dashed ${theme === 'dark' ? 'border-white/10 bg-white/2' : 'border-slate-400 bg-slate-50/50'}`}>
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl ${theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-50'}`}>
                <User size={20} className="text-blue-500" />
              </div>
              <div>
                <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${theme === 'dark' ? 'text-white/40' : 'text-slate-500'}`}>Assignee Attorney</p>
                <p className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>John Doe</p>
              </div>
            </div>
        
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl ${theme === 'dark' ? 'bg-violet-500/10' : 'bg-violet-50'}`}>
                <Briefcase size={20} className="text-violet-500" />
              </div>
              <div>
                <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${theme === 'dark' ? 'text-white/40' : 'text-slate-500'}`}>Verified Employer</p>
                <p className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>John Doe Architecture</p>
              </div>
            </div>
          </div>
        </div>
      );
    case 'dispute':
      return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
  
          {/* SECTION HEADER: Stats & Global Actions */}
          <div className={`flex flex-col md:flex-row justify-between items-center p-6 rounded-[30px] border ${
            theme === 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-sky-200/70 border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-500/10 rounded-2xl">
                <AlertCircle className="text-red-500" size={24} />
              </div>
              <div>
                <h3 className={`text-xl font-black uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  Active Account Disputes
                </h3>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Legal Correspondence Track</p>
              </div>
            </div>
        
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              {/* Global Utility Icons */}
              <div className="flex items-center gap-2 pr-6 border-r border-slate-200/20">
                {[
                  { icon: <Mail size={18} />, label: 'Email' },
                  { icon: <Printer size={18} />, label: 'Print' },
                  { icon: <Download size={18} />, label: 'Export' }
                ].map((btn, i) => (
                  <button key={i} className={`p-2.5 rounded-xl transition-all hover:scale-110 ${
                    theme === 'dark' ? 'bg-white/5 text-white/60 hover:text-white' : 'bg-slate-100 text-slate-500 hover:text-blue-600'
                  }`}>
                    {btn.icon}
                  </button>
                ))}
              </div>
              
              {/* Dispute Counter */}
              <div className="text-right">
                <span className="block text-[10px] font-black uppercase tracking-widest text-red-500">Total Disputes</span>
                <span className={`text-3xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>04</span>
              </div>
            </div>
          </div>
        
          {/* DISPUTE LIST */}
          <div className="space-y-4">
            {/* Sample Dispute Card */}
            {[1, 2].map((id) => (
              <div key={id} className={`group relative p-8 rounded-[30px] border transition-all ${
                theme === 'dark' ? 'bg-white/5 border-white/10 hover:border-blue-500/30' : 'bg-sky-200/70 border-slate-200 shadow-sm hover:shadow-md'
              }`}>
                
                {/* Row 1: Primary Controls */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <DateField label="Dispute Date" theme={theme} />
                  <SelectField 
                    label="Dispute Method" 
                    options={[{value:'certified', label:'Certified Mail'}, {value:'online', label:'Online Portal'}, {value:'fax', label:'Fax'}]} 
                    defaultValue="certified"
                    theme={theme}
                  />
                  <SelectField 
                    label="Client Response" 
                    options={[{value:'pending', label:'Waiting...'}, {value:'accepted', label:'Accepted'}, {value:'rejected', label:'Rejected'}]} 
                    defaultValue="pending"
                    theme={theme}
                  />
                  
                  {/* Attachment Input Styled */}
                  <div className="flex flex-col gap-1.5">
                    <label className={`text-md  tracking-widest ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>
                      Proof / Attachment
                    </label>
                    <label className={`flex items-center gap-2 justify-center py-2 px-4 rounded-xl border-2 border-dashed cursor-pointer transition-all ${
                      theme === 'dark' ? 'border-white/10 hover:bg-white/5 text-white/40' : 'border-slate-400 hover:bg-slate-50 text-slate-400'
                    }`}>
                      <Paperclip size={14} />
                      <span className="text-xs font-bold">Upload PDF</span>
                      <input type="file" className="hidden" />
                    </label>
                  </div>
                </div>
        
                {/* Row 2: Action Tracks */}
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t ${theme === 'dark' ? 'border-white/5' : 'border-slate-100'}`}>
                  <SelectField label="Action Step 1" options={[{value:'1', label:'Initial Inquiry'}]} defaultValue="1" theme={theme} />
                  <SelectField label="Action Step 2" options={[{value:'1', label:'Evidence Submission'}]} defaultValue="1" theme={theme} />
                  <SelectField label="Action Step 3" options={[{value:'1', label:'Final Escalation'}]} defaultValue="1" theme={theme} />
                </div>
        
                {/* Floating Delete for individual dispute */}
                <button className="absolute -top-3 -right-3 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg active:scale-90">
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        
          {/* ADD NEW DISPUTE BUTTON */}
          <button className={`w-full py-6 rounded-[25px] border-2 border-dashed flex flex-col items-center gap-2 transition-all ${
            theme === 'dark' 
              ? 'border-white/10 bg-white/2 hover:bg-white/5 text-white/40 hover:text-blue-400' 
              : 'border-slate-400 bg-slate-50/50 hover:bg-slate-50 text-slate-400 hover:text-blue-600'
          }`}>
            <div className="p-2 rounded-full bg-blue-500/10">
              <Plus size={24} className="text-blue-500" />
            </div>
            <span className="text-sm font-black uppercase tracking-widest">Add New Dispute Record</span>
          </button>
        
        </div>
      );
    case 'experian reports':
      return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          {/* Top Row: Legal & Risk Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-6 rounded-[25px] border shadow-sm ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-sky-200/70 border-slate-200'}`}>
              <SelectField
                label="Bankruptcy Filing" 
                options={[{value:'other', label:'Other / General'}, {value:'7', label:'Chapter 7'}, {value:'11', label:'Chapter 11'}, {value:'13', label:'Chapter 13'} ]}
                defaultValue="other"
                theme={theme}
              />
            </div>
            <div className={`p-6 rounded-[25px] border shadow-sm ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-sky-200/70 border-slate-200'}`}>
              <SelectField
                label="Judgments / Liens (12M)" 
                options={[ {value:'yes', label:'Yes - Active'}, {value:'no', label:'No - None'} ]}
                defaultValue="no"
                theme={theme}
              />
            </div>
            <div className={`p-6 rounded-[25px] border border-red-500/20 shadow-sm flex flex-col justify-center ${theme === 'dark' ? 'bg-red-500/5' : 'bg-red-50/50'}`}>
              <span className="text-md font-medium tracking-[0.2em] text-red-500 mb-1">Total Derogatory Accounts</span>
              <span className={`text-3xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>695</span>
            </div>
          </div>
        
          {/* Middle Section: Delinquency Timeline (The "Heatmap") */}
          <div className={`rounded-[30px] border p-8 ${theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-sky-200/70 border-slate-200 shadow-xl shadow-slate-200/50'}`}>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-5 w-1 bg-amber-500 rounded-full" />
              <h4 className={`text-xs uppercase font-black tracking-[0.2em] ${theme === 'dark' ? 'text-amber-400' : 'text-amber-600'}`}>Delinquency Chronology (24 Months)</h4>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "30 Days", value: "0", color: "text-blue-500" },
                { label: "60 Days", value: "0", color: "text-orange-500" },
                { label: "90 Days", value: "6,380", color: "text-red-500" },
                { label: "120-180 Days", value: "6,380", color: "text-red-700" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col">
                  <span className={`text-[12px] font-black uppercase tracking-widest opacity-80 mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}>{item.label}</span>
                  <span className={`text-2xl font-black ${item.value === "0" ? (theme === 'dark' ? 'text-white/20' : 'text-slate-300') : item.color}`}>
                    {item.value === "0" ? "—" : item.value}
                  </span>
                </div>
              ))}
            </div>
            
            <div className={`mt-8 pt-8 border-t grid grid-cols-1 md:grid-cols-2 gap-8 ${theme === 'dark' ? 'border-white/5' : 'border-slate-100'}`}>
               <InfoBox label="Accounts in Collections" value="2,130" subValue="N/A" theme={theme} />
               <InfoBox label="Paid Collections (6 Months)" value="0" theme={theme} />
            </div>
          </div>
        
          {/* Bottom Section: Credit & Debt Balances */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revolving & Installments */}
            <div className={`p-8 rounded-[30px] border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-sky-200/70 border-slate-200'}`}>
              <h4 className={`text-xs uppercase font-black tracking-[0.2em] mb-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Revolving & Installments</h4>
              <div className="space-y-6">
                <BalanceRow label="Monthly Payments (12M)" value="$6,380" theme={theme} />
                <BalanceRow label="Installment Loans" value="$6,380" theme={theme} />
                <BalanceRow label="Revolving Trades (Credit)" value="$6,380" theme={theme} />
                <BalanceRow label="Revolving Trades (Balance)" value="$6,380" theme={theme} />
              </div>
            </div>
        
            {/* Mortgage & Equity */}
            <div className={`p-8 rounded-[30px] border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-sky-200/70 border-slate-200'}`}>
              <h4 className={`text-xs uppercase font-black tracking-[0.2em] mb-6 ${theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}`}>Mortgage & Equity</h4>
              <div className="space-y-6">
                <BalanceRow label="Total Mortgage Credit" value="$6,380" theme={theme} />
                <BalanceRow label="Home Equity / 2nd Mortgage" value="$6,380" theme={theme} />
                <BalanceRow label="1st Mortgage Balance" value="$6,380" theme={theme} />
              </div>
            </div>
          </div>
        </div>
      );
    
    case 'settlement':
      return (
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center bg-blue-600/10 rounded-[40px] border border-blue-500/20 shadow-2xl animate-in zoom-in duration-500">
           <p className="text-[10px] text-blue-400 font-black uppercase tracking-widest mb-2">Approved Settlement Range</p>
           <h3 className={`text-5xl font-black mb-10 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>$9,500 - $11,000</h3>
           <div className="flex gap-4">
             <button className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl shadow-blue-600/40 transition-all active:scale-95">
               Generate Final Offer
             </button>
             <button className={`px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-widest border transition-all active:scale-95 ${theme === 'dark' ? 'border-white/10 text-white hover:bg-white/5' : 'border-slate-300 text-slate-700 hover:bg-slate-50'}`}>
               Manual Override
             </button>
           </div>
        </div>
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

// local helper components moved to shared/ directory
