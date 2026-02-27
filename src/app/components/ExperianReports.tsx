import React from 'react'
import { SelectField } from './shared/SelectField'
import { InfoBox } from './shared/InfoBox'
import { BalanceRow } from './shared/BalanceRow'

const ExperianReports = ({ theme }: { theme: 'dark' | 'light' }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          
      {/* Top Row: Legal & Risk Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`p-6 rounded-[25px] border shadow-sm ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-sky-50 border-blue-500/50 shadow-sm'}`}>
          <SelectField
            label="Bankruptcy Filing" 
            options={[{value:'other', label:'Other / General'}, {value:'7', label:'Chapter 7'}, {value:'11', label:'Chapter 11'}, {value:'13', label:'Chapter 13'} ]}
            defaultValue="other"
            theme={theme}
          />
        </div>
        <div className={`p-6 rounded-[25px] border shadow-sm ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-sky-50 border-blue-500/50 shadow-sm'}`}>
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
      <div className={`rounded-[30px] border p-8 ${theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-sky-50 border-blue-500/50 shadow-sm shadow-xl shadow-slate-200/50'}`}>
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
        <div className={`p-8 rounded-[30px] border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-sky-50 border-blue-500/50 shadow-sm'}`}>
          <h4 className={`text-xs uppercase font-black tracking-[0.2em] mb-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Revolving & Installments</h4>
          <div className="space-y-6">
            <BalanceRow label="Monthly Payments (12M)" value="$6,380" theme={theme} />
            <BalanceRow label="Installment Loans" value="$6,380" theme={theme} />
            <BalanceRow label="Revolving Trades (Credit)" value="$6,380" theme={theme} />
            <BalanceRow label="Revolving Trades (Balance)" value="$6,380" theme={theme} />
          </div>
        </div>
    
        {/* Mortgage & Equity */}
        <div className={`p-8 rounded-[30px] border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-sky-50 border-blue-500/50 shadow-sm'}`}>
          <h4 className={`text-xs uppercase font-black tracking-[0.2em] mb-6 ${theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}`}>Mortgage & Equity</h4>
          <div className="space-y-6">
            <BalanceRow label="Total Mortgage Credit" value="$6,380" theme={theme} />
            <BalanceRow label="Home Equity / 2nd Mortgage" value="$6,380" theme={theme} />
            <BalanceRow label="1st Mortgage Balance" value="$6,380" theme={theme} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperianReports