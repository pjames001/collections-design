import React from 'react'
import { SelectField } from './SelectField'
import { InputField } from './InputField'
import { RotateCcw } from 'lucide-react'
import { MultiSearchSelect } from './MultiSearchSelect'
import { CheckboxField } from './CheckboxField'
import { FromToDate } from './FromToDate'
import { DateField } from './DateField'

const FilterComponent = ({ theme }: { theme: string }) => {
  return (
    <div className={`w-[90vw] max-w-9xl h-[90vh] overflow-hidden rounded-[25px] border flex flex-col ${theme === 'dark' ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}>
      
      {/* TOP BAR */}
      <div className={`px-8 py-4 border-b flex justify-between items-center ${theme === 'dark' ? 'bg-slate-500/5 border-white/5 ' : 'bg-white border-slate-200'}`}>
        <div>
          <h2 className={`text-2xl font-black uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}>Advanced Parameters</h2>
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
          <button className="px-8 py-3 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all">
            Apply Filters
          </button>
        </div>
      </div>

      {/* SCROLLABLE FILTER CONTENT */}
      <div className={`flex-1 overflow-y-auto p-10 space-y-12 ${theme === 'dark' ? 'bg-slate-900/50' : ''}`}>
        
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
            <div className={`px-6 py-3 rounded-[15px] border space-y-4 ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-sky-50 border-blue-500/50 shadow-sm'}`}>
              <CheckboxField label="Email Consent" theme={theme} />
              <CheckboxField label="Address Consent" theme={theme} />
              <CheckboxField label="Phone Voice Consent" theme={theme} />
              <CheckboxField label="Phone SMS Consent" theme={theme} />
            </div>

            {/* Specialized Card for Reminders */}
            <div className={`px-6 py-3 rounded-[15px] border space-y-4 ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-sky-50 border-blue-500/50 shadow-sm'}`}>
              <CheckboxField label="Cell Voice Consent" theme={theme} />
              <CheckboxField label="Cell SMS Consent" theme={theme} />
              <CheckboxField label="Work Phone Voice Consent" theme={theme} />
              <CheckboxField label="Work Phone SMS Consent" theme={theme} />
              <CheckboxField label="Skip Trace is Marked" theme={theme} />
            </div>

            {/* Range Field for Reminders */}
            <div className={`px-6 py-3 rounded-[15px] border space-y-4 ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-sky-50 border-blue-500/50 shadow-sm'}`}>
              <CheckboxField label="OTH Phone Voice Consent" theme={theme} />
              <CheckboxField label="OTH Phone SMS Consent" theme={theme} />
              <CheckboxField label="Fax Voice Consent" theme={theme} />
              <CheckboxField label="Fax SMS Consent" theme={theme} />
            </div>

            <div className={`px-6 py-3 rounded-[15px] border space-y-4 ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-sky-50 border-blue-500/50 shadow-sm'}`}>
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
              <span className={`absolute top-0 text-md font-medium tracking-widest ${
                theme === 'dark' ? 'text-sky-300' : 'text-blue-600'
              }`}>Total Amount</span>
              <InputField label="" placeholder="" theme={theme} type="number" />
              <span className="text-slate-700 flex items-center">-</span>
              <InputField label="" placeholder="" theme={theme} type="number" />
            </div>
            <FromToDate label="Charge Off Date" theme={theme} />
            <FromToDate label="Last Payment" theme={theme} />
            <div className='flex items-end gap-4 relative'>
              <span className={`absolute top-0 text-md font-medium tracking-widest ${
                theme === 'dark' ? 'text-sky-300' : 'text-blue-600'
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
      </div>
  )
}

export default FilterComponent