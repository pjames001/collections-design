import React from 'react'
import { Activity, Save } from 'lucide-react'
import { InputField } from './shared/InputField'
import { SelectField } from './shared/SelectField'

const NewSkipTracing = ({ theme }: { theme: 'dark' | 'light' }) => {
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
          {/* <span className={`text-5xl font-black mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>695</span> */}
          <input type="text" placeholder="695" className={`text-5xl font-black mb-1 w-full text-center bg-transparent outline-none ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`} />
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-green-500">Good Standing</span>
          </div>
        </div>
    
        {/* Credit Configuration Fields */}
        <div className={`lg:col-span-3 p-6 rounded-[30px] border grid grid-cols-1 md:grid-cols-3 gap-6 items-center ${
          theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-sky-50 border-blue-500/50 shadow-sm'
        }`}>
          {/* <div className="flex flex-col gap-1.5">
            <label className={`text-md tracking-widest ${theme === 'dark' ? 'text-blue-300' : 'text-blue-600'}`}>
              Revolving Credit
            </label>
            <div className="flex items-baseline gap-2">
                <span className={`text-xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>$2,130</span>
                <span className="text-xs font-bold text-slate-400">/ N/A</span>
            </div>
          </div> */}
          <InputField label="Revolving Credit" placeholder="$2,130" type="text" theme={theme} />
          <InputField label="Available Credit" placeholder="$1,000" type="text" theme={theme} />
        </div>
      </div>
    
      {/* BOTTOM ROW: Real Estate & Equity Assets */}
      <div className={`p-8 rounded-[30px] border ${
        theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-sky-50 border-blue-500/50 shadow-sm'
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
          
          <InputField label="Mortgage Amount" theme={theme} />
          <InputField label="Available Equity" theme={theme} />
          <InputField label="Zillow Valuation" theme={theme} />
          <InputField label="Est. Monthly Rent" theme={theme} />
        </div>
      </div>
      <div className="pt-8 flex justify-end">
        <button className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-2xl text-sm transition-all hover:bg-blue-500 shadow-lg shadow-blue-600/20">
          <Save size={18} />
          Save changes
        </button>
      </div>
    </div>
  )
}

export default NewSkipTracing