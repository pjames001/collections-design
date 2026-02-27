import { CheckCircle2, Save, Scale } from 'lucide-react'
import React, { useState } from 'react'
import { DateField } from './shared/DateField'
import { InputField } from './shared/InputField'
import { SelectField } from './shared/SelectField'

const NewJudgment = ({ theme }: { theme: 'dark' | 'light' }) => {

  const [postJudgmentInterest, setPostJudgmentInterest] = useState(false);
  const [preJudgmentPayments, setPreJudgmentPayments] = useState(false);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* SECTION 1: JUDGMENT SETTINGS */}
      <div className={`p-8 rounded-[35px] border ${theme === 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-sky-50 border-blue-500/50 shadow-sm'}`}>
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-blue-500/10 rounded-xl"><Scale className="text-blue-500" size={20} /></div>
          <h3 className={`text-xl font-black uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Judgment Settings</h3>
        </div>

        <div className="space-y-8">
          {/* Base Judgment Fields */}
          <div className="grid grid-cols-3 gap-6">
            <DateField label="Judgment Date" theme={theme} />
            <InputField label="Judgment Amount" placeholder="$0.00" type="number" theme={theme} />
            <SelectField label="Pre-Judgment Interest" options={[{value:'simple', label:'Simple Interest'}, {value:'compound', label:'Compound Interest'}, {value:'none', label:'None'}]} defaultValue="simple" theme={theme} />
          </div>

          {/* Post-Judgment Interest Section */}
          <div className={`p-6 rounded-2xl border-2 ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'}`}>
            <label className="flex items-center gap-3 cursor-pointer mb-6">
              <input 
                type="checkbox" 
                checked={postJudgmentInterest}
                onChange={(e) => setPostJudgmentInterest(e.target.checked)}
                className="w-5 h-5 rounded border-slate-300 text-blue-600" 
              />
              <span className={`text-sm font-black uppercase tracking-widest ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}>Apply Post-Judgment Interest</span>
            </label>

            {!postJudgmentInterest && (
              <div className="grid grid-cols-3 gap-6 items-end">
                <InputField label="Interest Amount" placeholder="0.00%" type="text" theme={theme} />
                <SelectField label="Compounding" options={[{value:'daily', label:'Daily'}, {value:'monthly', label:'Monthly'}, {value:'annually', label:'Annually'}]} defaultValue="daily" theme={theme} />
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase text-xs tracking-widest transition-all shadow-lg shadow-blue-600/20">
                  Add Step
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SECTION 2: PRE-JUDGMENT PAYMENTS */}
      <div className={`p-8 rounded-[35px] border ${theme === 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-sky-50 border-blue-500/50 shadow-sm'}`}>
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-violet-500/10 rounded-xl"><CheckCircle2 className="text-violet-500" size={20} /></div>
          <h3 className={`text-xl font-black uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Pre-Judgment Components</h3>
        </div>

        <div className="space-y-8">
          {/* Pre-Judgment Payments Toggle */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input 
              type="checkbox" 
              checked={preJudgmentPayments}
              onChange={(e) => setPreJudgmentPayments(e.target.checked)}
              className="w-5 h-5 rounded border-slate-300 text-blue-600" 
            />
            <span className={`text-sm font-black uppercase tracking-widest ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}>Include Pre-Judgment Payments</span>
          </label>

          {/* Conditional Component Display */}
          <div className="flex justify-between gap-4">
            {/* Pre-Judgment Interest */}
            <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-blue-500/50'}`}>
              <h4 className={`text-sm font-black uppercase tracking-widest mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Pre-Judgment Interest</h4>
              <div className="flex gap-6 items-center">
                {preJudgmentPayments ? (
                  <label className="flex items-center gap-3 cursor-pointer group py-2 transition-colors hover:opacity-80">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                    <span className={`text-xs font-bold uppercase tracking-tighter ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Remaining Balance</span>
                  </label>
                ) : (
                  <>
                    <label className="flex items-center gap-3 cursor-pointer group py-2 transition-colors hover:opacity-80">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                      <span className={`text-xs font-bold uppercase tracking-tighter ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Total</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group py-2 transition-colors hover:opacity-80">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                      <span className={`text-xs font-bold uppercase tracking-tighter ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Remaining Balance</span>
                    </label>
                  </>
                )}
              </div>
            </div>

            {/* Pre-Judgment Costs */}
            <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-blue-500/50'}`}>
              <h4 className={`text-sm font-black uppercase tracking-widest mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Pre-Judgment Costs</h4>
              <div className="flex gap-6 items-center">
                {preJudgmentPayments ? (
                  <label className="flex items-center gap-3 cursor-pointer group py-2 transition-colors hover:opacity-80">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                    <span className={`text-xs font-bold uppercase tracking-tighter ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Remaining Balance</span>
                  </label>
                ) : (
                  <>
                    <label className="flex items-center gap-3 cursor-pointer group py-2 transition-colors hover:opacity-80">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                      <span className={`text-xs font-bold uppercase tracking-tighter ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Total</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group py-2 transition-colors hover:opacity-80">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                      <span className={`text-xs font-bold uppercase tracking-tighter ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Remaining Balance</span>
                    </label>
                  </>
                )}
              </div>
            </div>

            {/* Pre-Judgment Fees */}
            <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-blue-500/50'}`}>
              <h4 className={`text-sm font-black uppercase tracking-widest mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Pre-Judgment Fees</h4>
              <div className="flex gap-6 items-center">
                {preJudgmentPayments ? (
                  <label className="flex items-center gap-3 cursor-pointer group py-2 transition-colors hover:opacity-80">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                    <span className={`text-xs font-bold uppercase tracking-tighter ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Remaining Balance</span>
                  </label>
                ) : (
                  <>
                    <label className="flex items-center gap-3 cursor-pointer group py-2 transition-colors hover:opacity-80">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                      <span className={`text-xs font-bold uppercase tracking-tighter ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Total</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group py-2 transition-colors hover:opacity-80">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                      <span className={`text-xs font-bold uppercase tracking-tighter ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Remaining Balance</span>
                    </label>
                  </>
                )}
              </div>
            </div>
          {/* Apply to Post-Judgment Section */}
          <div className={`p-6 rounded-2xl border-2 border-dashed ${theme === 'dark' ? 'border-blue-500/20 bg-blue-500/5' : 'border-blue-300 bg-blue-50/30'}`}>
            <h4 className={`text-sm font-black uppercase tracking-widest mb-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Judgment Amount Composition</h4>
            <p className={`text-sm font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
              Judgment Amount = Principal +
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-4">
              <label className="flex items-center gap-3 cursor-pointer group py-2 transition-colors hover:opacity-80">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" defaultChecked />
                <span className={`text-xs font-bold uppercase tracking-tighter ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Pre-Judgment Interest</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group py-2 transition-colors hover:opacity-80">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                <span className={`text-xs font-bold uppercase tracking-tighter ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Pre-Judgment Costs</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group py-2 transition-colors hover:opacity-80">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                <span className={`text-xs font-bold uppercase tracking-tighter ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Pre-Judgment Fees</span>
              </label>
            </div>
          </div>
          </div>

        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-2xl text-sm transition-all hover:bg-blue-500 shadow-lg shadow-blue-600/20">
          <Save size={18} />
          Save Judgment
        </button>
      </div>
    </div>
  )
}

export default NewJudgment