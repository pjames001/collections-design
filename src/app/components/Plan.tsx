import { CreditCard, Plus } from 'lucide-react'
import React from 'react'
import { SelectField } from './shared/SelectField'
import { InputField } from './shared/InputField'
import { DateField } from './shared/DateField'
import { AllocationTag } from './shared/AllocationTag'

const Plan = ({ theme }: { theme: string }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

      {/* ZONE 1: ASSIGNMENT & TERMS */}
      <div className={`p-8 rounded-[35px] border ${theme === 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-sky-50 border-blue-500/50 shadow-sm'}`}>
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
              <label className={`text-md tracking-widest ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Calculation Basis</label>
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
                <span className={`text-sm font-black ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Recurring CC / ACH</span>
                <span className={`text-[12px] font-bold tracking-tighter ${theme === 'dark' ? 'text-white/80' : 'text-slate-700'}`}>Enable automatic drafting</span>
              </div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 rounded-md accent-blue-600" />
              <div className="flex flex-col">
                <span className={`text-sm font-black ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Convenience Fees</span>
                <span className={`text-[12px] font-bold tracking-tighter ${theme === 'dark' ? 'text-white/80' : 'text-slate-700'}`}>Apply processing surcharge</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    
      {/* ZONE 2: THE SCHEDULE BUILDER */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Installment Manager */}
        <div className={`p-8 rounded-[35px] border ${theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-sky-50 border-blue-500/50 shadow-sm'}`}>
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-500">Installment Schedule</h4>
            <button className="flex items-center gap-2 py-1.5 px-3 bg-blue-600 text-white rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all">
              <Plus size={14} /> Add Installment
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <DateField label="First Payment On" theme={theme} />
                <InputField label="Payment Amount" placeholder="$0.00" type="number" theme={theme} />
                <InputField label="Description" placeholder="Enter description" type="text" theme={theme} />
            </div>
            {/* Placeholder for dynamic payments */}
            <div className={`flex items-center justify-center p-4 border-2 border-dashed rounded-2xl ${theme === 'dark' ? 'border-white/20' : 'border-slate-300'}`}>
              <span className={`text-[12px] font-black uppercase tracking-widest ${theme === 'dark' ? 'text-white/60' : 'text-slate-400'}`}>Click "Add Installment" to stack payments</span>
            </div>
          </div>
    
          <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                <span className={`text-[12px] font-black tracking-widest ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}>Send Payment Reminders</span>
              </label>
          </div>

          <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                <span className={`text-[12px] font-black tracking-widest ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}>Initial Payment Is Different Amount:</span>
              </label>
          </div>
        </div>
    
        {/* Frequency & Allocation */}
        <div className="space-y-6">
          {/* Frequency Card */}
          <div className={`p-8 rounded-[35px] border ${theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-sky-50 border-blue-500/50 shadow-sm'}`}>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-500 mb-6">Frequency Settings</h4>
            <div className="grid grid-cols-2 gap-6">
              <SelectField label="Repeat Cycle" options={[{value:'1', label:'Indefinite'}, {value:'2', label:'Fixed Count'}]} defaultValue="1" theme={theme} />
              <SelectField label="Interval" options={[{value:'w', label:'Weekly'}, {value:'2w', label:'Bi-Weekly'}, {value:'m', label:'Monthly'}]} defaultValue="m" theme={theme} />
            </div>
          </div>
    
          {/* Allocation Order Card */}
          <div className={`p-8 rounded-[35px] border ${theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-sky-50 border-blue-500/50 shadow-sm'}`}>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-500 mb-6">Allocation Priority</h4>
            <div className="space-y-2">
              <AllocationTag order={1} label="Principal Balance" theme={theme} />
              <AllocationTag order={2} label="Interest Accrued" theme={theme} />
              <AllocationTag order={3} label="Legal & Service Fees" theme={theme} />
            </div>
            <p className="mt-4 text-[14px] font-bold text-slate-500 ">Drag to reorder payment application priority</p>
          </div>
        </div>
      </div>
    
      {/* FINAL ACTION */}
      <button className="w-full py-6 bg-green-600 hover:bg-green-500 text-white rounded-[25px] font-black uppercase tracking-[0.3em] transition-all shadow-xl shadow-green-600/20 text-lg">
        Activate Payment Plan
      </button>
    </div>
  )
}

export default Plan