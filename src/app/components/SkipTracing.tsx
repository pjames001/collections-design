import React from 'react'
import { Activity } from 'lucide-react'
import { SelectField } from './shared/SelectField'
import { AssetStat } from './shared/AssetStat'

const SkipTracing = ({ theme }: { theme: 'dark' | 'light' }) => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          
      {/* TOP ROW: Credit Identity */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Credit Score Hero Card */}
        <div className={`lg:col-span-1 p-6 rounded-[30px] border flex flex-col justify-center items-center relative overflow-hidden ${
          theme === 'dark' ? 'bg-blue-600/10 border-blue-500/20' : 'bg-sky-50 border-blue-500/50 shadow-sm'
        }`}>
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Activity width={60} height={60} className="text-blue-500" />
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
          theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-sky-50 border-blue-500/50 shadow-sm'
        }`}>
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
          
          <AssetStat label="Mortgage Amount" value={null} theme={theme} />
          <AssetStat label="Available Equity" value="$0.00" theme={theme} highlight />
          <AssetStat label="Zillow Valuation" value={null} theme={theme} />
          <AssetStat label="Est. Monthly Rent" value="$6,380" theme={theme} />
        </div>
      </div>
    </div>
  )
}

export default SkipTracing