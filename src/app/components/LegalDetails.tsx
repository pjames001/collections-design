import React, { useState } from 'react'
import { SelectField } from './shared/SelectField'
import { DateField } from './shared/DateField'
import { InputField } from './shared/InputField'
import { Save } from 'lucide-react'

const LegalDetails = ({ theme }: { theme: 'dark' | 'light' }) => {

  const [judgementEntered, setJudgementEntered] = useState(false);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* SECTION 1: Complaint Information */}
      <div className={`p-8 rounded-[30px] border ${
        theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-sky-50 border-blue-500/50 shadow-sm'
      }`}>
        <div className="flex items-center gap-2 mb-8">
          <div className="h-5 w-1 bg-blue-500 rounded-full" />
          <h4 className={`text-xs uppercase font-black tracking-[0.2em] ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Complaint Information</h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SelectField label="County" options={[{value:'la', label:'Los Angeles'}, {value:'sf', label:'San Francisco'}, {value:'sd', label:'San Diego'}]} defaultValue="la" theme={theme} />
          <SelectField label="Court" options={[{value:'superior', label:'Superior Court'}, {value:'district', label:'District Court'}, {value:'municipal', label:'Municipal Court'}]} defaultValue="superior" theme={theme} />
          <DateField label="Complaint Sent Date" theme={theme} />
          <DateField label="Complaint Filed Date" theme={theme} />
          <InputField label="Court Number" placeholder="" type="text" theme={theme} />
          <DateField label="Sent For Service Date" theme={theme} />
          <SelectField label="Process Server" options={[{value:'server1', label:'Server 1'}, {value:'server2', label:'Server 2'}]} defaultValue="server1" theme={theme} />
          <DateField label="Complaint Served Date" theme={theme} />
          <DateField label="Answer Filed Date" theme={theme} />
        </div>
      </div>

      {/* SECTION 2: Judgement Information */}
      <div className={`p-8 rounded-[30px] border ${
        theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-sky-50 border-blue-500/50 shadow-sm'
      }`}>
        <div className="flex items-center gap-2 mb-8">
          <div className="h-5 w-1 bg-violet-500 rounded-full" />
          <h4 className={`text-xs uppercase font-black tracking-[0.2em] ${theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}`}>Judgement Information</h4>
        </div>
        
        <div className="flex items-center gap-3 mb-8 p-4 rounded-lg bg-white/5">
          <input 
            type="checkbox" 
            id="judgement-checkbox"
            checked={judgementEntered}
            onChange={(e) => setJudgementEntered(e.target.checked)}
            className="w-5 h-5 rounded-md border-2 border-blue-500 accent-blue-600 cursor-pointer" 
          />
          <label htmlFor="judgement-checkbox" className={`text-sm font-bold uppercase tracking-widest cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Judgement Entered
          </label>
        </div>

        {judgementEntered && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DateField label="Judgement Sent Date" theme={theme} />
            <DateField label="Judgement Entered Date" theme={theme} />
            <DateField label="Abstract Recorded Date" theme={theme} />
            <DateField label="Satisfaction of Judgement Sent Date" theme={theme} />
            <InputField label="Attorney Fees Sought" placeholder="$0.00" type="text" theme={theme} />
            <InputField label="Attorney Fees Awarded" placeholder="$0.00" type="text" theme={theme} />
            <InputField label="Name of Judge" placeholder="" type="text" theme={theme} />
            <SelectField label="County Abstracted" options={[{value:'la', label:'Los Angeles'}, {value:'sf', label:'San Francisco'}, {value:'sd', label:'San Diego'}]} defaultValue="la" theme={theme} />
            <SelectField label="Court Abstracted" options={[{value:'superior', label:'Superior Court'}, {value:'district', label:'District Court'}]} defaultValue="superior" theme={theme} />
            <DateField label="Judgement Expiration Date" theme={theme} />
            <DateField label="Judgement Reminder Date" theme={theme} />
          </div>
        )}
      </div>

      {/* SECTION 3: Garnishment Information */}
      <div className={`p-8 rounded-[30px] border ${
        theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-sky-50 border-blue-500/50 shadow-sm'
      }`}>
        <div className="flex items-center gap-2 mb-8">
          <div className="h-5 w-1 bg-amber-500 rounded-full" />
          <h4 className={`text-xs uppercase font-black tracking-[0.2em] ${theme === 'dark' ? 'text-amber-400' : 'text-amber-600'}`}>Garnishment Information</h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DateField label="Writ Sent For Filing Date" theme={theme} />
          <DateField label="Writ Returned Date" theme={theme} />
          <DateField label="Garnish Wages Sent Date" theme={theme} />
          <DateField label="Garnish Wages Received Date" theme={theme} />
          <DateField label="Bank Garnish Sent Date" theme={theme} />
          <DateField label="Bank Garnish Received Date" theme={theme} />
          <DateField label="Unsatisfied Return Rec'd Date" theme={theme} />
          <DateField label="Garnish Recheck Date" theme={theme} />
          <SelectField label="County Executed" options={[{value:'la', label:'Los Angeles'}, {value:'sf', label:'San Francisco'}, {value:'sd', label:'San Diego'}]} defaultValue="la" theme={theme} />
          <SelectField label="Court Executed" options={[{value:'superior', label:'Superior Court'}, {value:'district', label:'District Court'}]} defaultValue="superior" theme={theme} />
        </div>
      </div>

      {/* Save Button */}
      <div className="pt-8 flex justify-end">
        <button className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-2xl text-sm transition-all hover:bg-blue-500 shadow-lg shadow-blue-600/20">
          <Save size={18} />
          Save changes
        </button>
      </div>
    </div>
  )
}

export default LegalDetails