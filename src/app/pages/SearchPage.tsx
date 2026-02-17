import React, { useState } from 'react';
import { RotateCcw, Search, SlidersHorizontal } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { SelectField } from '../components/shared/SelectField';
import { MultiSearchSelect } from '../components/shared/MultiSearchSelect';
import { CheckboxField } from '../components/shared/CheckboxField';
import { FromToDate } from '../components/shared/FromToDate';
import { DateField } from '../components/shared/DateField';
import { InputField } from '../components/shared/InputField';

export default function SearchPage({ theme }: { theme: 'dark' | 'light' }) {

  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);

  return (
    <Dialog.Root open={isFiltersModalOpen} onOpenChange={setIsFiltersModalOpen}>
    <div className={`p-8 space-y-8 animate-in fade-in duration-700 ${
        theme === 'dark' ? 'bg-gray-700 border-white/10' : 'bg-white/70 border-slate-200/60 shadow-slate-200/40'
      }`}>
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-2">
          <h1 className={`text-4xl font-black uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Account Search
          </h1>
          
        </div>

        {/* Results per page and Filter Trigger */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-md font-black tracking-widest text-white">Show</span>
            <select className="bg-transparent text-md text-white outline-none cursor-pointer">
              <option className='bg-slate-800'>25</option>
              <option className='bg-slate-800'>50</option>
              <option className='bg-slate-800'>100</option>
            </select>
          </div>
          
          <Dialog.Trigger asChild>
            <button className="flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-600/20">
              <SlidersHorizontal size={18} />
              Advanced Filters
            </button>
          </Dialog.Trigger>
        </div>
      </div>

      {/* PRIMARY SEARCH BARS */}
      <div className={`p-8 rounded-[35px] border ${theme === 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/40'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <label className="text-md tracking-[0.2em] text-white ml-1">First Name</label>
            <div className="relative mt-2">
              <input type="text" placeholder="Search first name..." className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 transition-all outline-none font-bold ${theme === 'dark' ? 'bg-white/5 border-white/5 focus:border-blue-500/50 text-white' : 'bg-slate-50 border-slate-100 focus:border-blue-600/50'}`} />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-md tracking-[0.2em] text-white ml-1">Last Name</label>
            <div className="relative mt-2">
              <input type="text" placeholder="Search last name..." className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 transition-all outline-none font-bold ${theme === 'dark' ? 'bg-white/5 border-white/5 focus:border-blue-500/50 text-white' : 'bg-slate-50 border-slate-100 focus:border-blue-600/50'}`} />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-md tracking-[0.2em] text-white ml-1">Account Number</label>
            <div className="relative mt-2">
              <input type="text" placeholder="Search ACCT#..." className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 transition-all outline-none font-bold ${theme === 'dark' ? 'bg-white/5 border-white/5 focus:border-blue-500/50 text-white' : 'bg-slate-50 border-slate-100 focus:border-blue-600/50'}`} />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Inside your Filter Dialog/Popup */}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-md z-[999] animate-in fade-in duration-300" />
        <Dialog.Content className={`fixed top-1/2 left-1/2 -translate-1/2  z-[1000] outline-none animate-in zoom-in-95 duration-300`}>
      <div className={`w-[90vw] max-w-9xl h-[90vh] overflow-hidden rounded-[25px] border flex flex-col ${theme === 'dark' ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200 shadow-2xl'}`}>
        
        {/* TOP BAR */}
        <div className="px-8 py-4 border-b border-white/5 flex justify-between items-center bg-slate-500/5">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-white">Advanced Parameters</h2>
            <p className="text-[10px] font-black uppercase tracking-widest text-blue-500">Fine-tune your search results</p>
          </div>

          <div className='flex items-end gap-4'>
            <SelectField label="Pre-Defined Filters" options={[]} theme={theme} />
            <InputField label="Name" placeholder="" theme={theme} type="number" />
            <button className="px-6 py-3 w-72 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-blue-600/20">
              Save Filter
            </button>
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-xs transition-all hover:bg-white/5 text-slate-400">
              <RotateCcw size={16} /> Clear All
            </button>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-blue-600/20">
              Apply Filters
            </button>
          </div>
        </div>

        {/* SCROLLABLE FILTER CONTENT */}
        <div className="flex-1 overflow-y-auto p-10 space-y-12">
          
          {/* GROUP 1: Entity & Status (Multi-select Area) */}
          <section className="space-y-6">
            <div className='flex justify-between items-center'>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 flex items-center gap-2">
                <div className="h-1 w-4 bg-blue-500 rounded-full" /> Assignment & Status
              </h4>
              <div>
                <SelectField label="Open Status" options={[]} theme={theme} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <MultiSearchSelect label="Collectors" theme={theme} />
              <MultiSearchSelect label="Co-Collectors" theme={theme} />
              <MultiSearchSelect label="Creditors" theme={theme} />
              <MultiSearchSelect label="Clients" theme={theme} />
              <MultiSearchSelect label="Action Codes" theme={theme} />
              <MultiSearchSelect label="Legal Status" theme={theme} />
              <MultiSearchSelect label="Main Status" theme={theme} />
              <MultiSearchSelect label="Sub-Status" theme={theme} />
              <MultiSearchSelect label="Sub-Sub-Status" theme={theme} />
              <MultiSearchSelect label="Queues" theme={theme} />
              <MultiSearchSelect label="Collection Status" theme={theme} />
              <MultiSearchSelect label="Sales Rep" theme={theme} />
              <MultiSearchSelect label="State/Province" theme={theme} />
              <SelectField label="Account Type" options={[]} theme={theme} />
              <SelectField label="Email Type" options={[]} theme={theme} />
              <SelectField label="Letter Flows" options={[]} theme={theme} />
              <SelectField label="Generated Documents" options={[]} theme={theme} />
              <SelectField label="Skip Trace Type" options={[]} theme={theme} />
              <SelectField label="Debtor Type" options={[]} theme={theme} />
            </div>
          </section>

          {/* GROUP 2: CONSENT & RECOVERY STATUS */}
          <section className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-green-500 flex items-center gap-2">
              <div className="h-1 w-4 bg-green-500 rounded-full" /> Consent & Compliance
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Specialized Card for Consents */}
              <div className={`px-6 py-3 rounded-[15px] border space-y-4 ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                <CheckboxField label="Email Consent" theme={theme} />
                <CheckboxField label="Address Consent" theme={theme} />
                <CheckboxField label="Phone Voice Consent" theme={theme} />
                <CheckboxField label="Phone SMS Consent" theme={theme} />
              </div>

              {/* Specialized Card for Reminders */}
              <div className={`px-6 py-3 rounded-[15px] border space-y-4 ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                <CheckboxField label="Cell Voice Consent" theme={theme} />
                <CheckboxField label="Cell SMS Consent" theme={theme} />
                <CheckboxField label="Work Phone Voice Consent" theme={theme} />
                <CheckboxField label="Work Phone SMS Consent" theme={theme} />
                <CheckboxField label="Skip Trace is Marked" theme={theme} />
              </div>

              {/* Range Field for Reminders */}
              <div className={`px-6 py-3 rounded-[15px] border space-y-4 ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                <CheckboxField label="OTH Phone Voice Consent" theme={theme} />
                <CheckboxField label="OTH Phone SMS Consent" theme={theme} />
                <CheckboxField label="Fax Voice Consent" theme={theme} />
                <CheckboxField label="Fax SMS Consent" theme={theme} />
              </div>

              <div className={`px-6 py-3 rounded-[15px] border space-y-4 ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                <CheckboxField label="Overdue Work Date" theme={theme} />
                <CheckboxField label="Has Not Generated Docs" theme={theme} />
                <CheckboxField label="No Active Reminders" theme={theme} />
                <CheckboxField label="Overdue Reminders" theme={theme} />
                <CheckboxField label="Report to Credit Bureau" theme={theme} />
              </div>
            </div>
          </section>

          {/* GROUP 3: Timelines (The From/To Grids) */}
          <section className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-amber-500 flex items-center gap-2">
              <div className="h-1 w-4 bg-amber-500 rounded-full" /> Date & Range Tracking
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <FromToDate label="Originated Date" theme={theme} />
              <FromToDate label="Account Received" theme={theme} />
              <FromToDate label="Next Work Date" theme={theme} />
              <FromToDate label="Last Updated" theme={theme} />
              <FromToDate label="Last Skip Traced" theme={theme} />
              <FromToDate label="Reminder Due" theme={theme} />
              
              <DateField label="No Payment Made Since" theme={theme} />
              <InputField label="Acc Not Worked in X Days" placeholder="" theme={theme} type="number" />
              <InputField label="No Disposition in X Days" placeholder="" theme={theme} type="number" />
              <InputField label="Days Assigned" placeholder="" theme={theme} type="number" />
              <div className='flex items-end gap-2'>
                <SelectField label="Account Age" options={[{value:'less', label:'Less Than'}, {value:'greater', label:'Greater Than'},]} theme={theme} />
                <InputField label="" placeholder="" theme={theme} type="number" />
              </div>
            </div>
          </section>

          {/* GROUP 4: Financial & Custom */}
          <section className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-violet-500 flex items-center gap-2">
              <div className="h-1 w-4 bg-violet-500 rounded-full" /> Financial Limits & Sorting
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <FromToDate label="Amount Due" theme={theme} />
              <div className='flex items-end gap-4 relative'>
                <span className={`absolute top-0 text-md tracking-widest ${
                  theme === 'dark' ? 'text-sky-300' : 'text-blue-600/60'
                }`}>Total Amount</span>
                <InputField label="" placeholder="" theme={theme} type="number" />
                <span className="text-slate-700 flex items-center">-</span>
                <InputField label="" placeholder="" theme={theme} type="number" />
              </div>
              <FromToDate label="Charge Off Date" theme={theme} />
              <FromToDate label="Last Payment" theme={theme} />
              <div className='flex items-end gap-4 relative'>
                <span className={`absolute top-0 text-md tracking-widest ${
                  theme === 'dark' ? 'text-sky-300' : 'text-blue-600/60'
                }`}>Cumulative Delinquent Days</span>
                <InputField label="" placeholder="" theme={theme} type="number" />
                <span className="text-slate-700 flex items-center">-</span>
                <InputField label="" placeholder="" theme={theme} type="number" />
              </div>
            </div>
          </section>

          {/* GROUP 6: CUSTOM LOGIC & SORTING */}
          <section className={`p-8 rounded-[30px] border-2 border-dashed ${theme === 'dark' ? 'border-white/10 bg-white/2' : 'border-slate-200 bg-slate-50/50'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
              
              {/* Custom Field Input */}
              <SelectField label="Select Custom Field" options={[]} theme={theme} />

              {/* Global Sorting */}
              <SelectField 
                label="Order Results By" 
                options={[{value:'date', label:'Date Received'}, {value:'amt', label:'Total Amount'}, {value:'name', label:'Debtor Name'}]} 
                theme={theme} 
              />
              
              <SelectField 
                label="Sort Direction" 
                options={[{value:'asc', label:'Ascending (A-Z)'}, {value:'desc', label:'Descending (Z-A)'}]} 
                theme={theme} 
              />
            </div>
          </section>
        </div>

        {/* 3. Sticky Footer (Action Buttons) */}
        {/* <div className={`p-6 border-t flex justify-end gap-4 ${theme === 'dark' ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'}`}>
          <button className="...">Clear Filters</button>
          <button className="...">Apply Filters</button>
        </div> */}
      </div>
      </Dialog.Content>
      </Dialog.Portal>
    </div>
    </Dialog.Root>
  );
};