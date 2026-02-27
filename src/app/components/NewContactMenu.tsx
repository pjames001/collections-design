import React from 'react'
import { InputField } from './shared/InputField'
import { SelectField } from './shared/SelectField'
import { Briefcase, Save, User } from 'lucide-react'

const NewContactMenu = ({ theme }: { theme: string }) => {
  return (
   <div className="grid grid-cols-1 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
    
      {/* Section: Communications */}
      <div className="grid grid-cols-3 gap-8">
        {/* Section: Addresses */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-5 w-1 bg-blue-600 rounded-full" />
            <h4 className={`text-xs uppercase font-black tracking-[0.2em] ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Primary Locations</h4>
          </div>
          
          <div className={`p-8 flex flex-col gap-3 rounded-2xl border transition-all hover:border-blue-500/50 ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-sky-50 border-blue-500/50 shadow-sm'}`}>
          
            <InputField label="Address 1" placeholder="" type='text' theme={theme} />
            <SelectField label="Address Type" options={[{value:'home', label:'Home'}, {value:'work', label:'Work'}, {value:'other', label:'Other'}]} defaultValue="home" theme={theme} />
            <SelectField label="Verification Status" options={[{value:'good', label:'Good'}, {value:'unknown', label:'Unknown'}, {value:'bad', label:'Bad'}]} defaultValue="good" theme={theme} />
            <SelectField label="Consent Status" options={[{value:'consented', label:'Consented'}, {value:'not consented', label:'Not Consented'}]} defaultValue="consented" theme={theme} />
            <button className="self-end w-full mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase text-xs tracking-widest transition-all shadow-lg shadow-blue-600/20">
              Add Address
            </button>
          </div>
        </section>
        
        {/* Phone Numbers */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-5 w-1 bg-orange-500 rounded-full" />
            <h4 className={`text-xs uppercase font-black tracking-[0.2em] ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>Phone Directory</h4>
          </div>
          
          <div className={`space-y-3 p-8 rounded-2xl border transition-all hover:border-blue-500/50 ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-sky-50 border-blue-500/50 shadow-sm'}`}>

            <SelectField label="Phone Number" options={[{value:'415-310-1981', label:'415-310-1981'}, {value:'415-310-4188', label:'415-310-4188'}]} defaultValue="415-310-1981" theme={theme} />
            <SelectField label="Phone Type" options={[{value:'mobile', label:'Mobile'}, {value:'home', label:'Home'}, {value:'work', label:'Work'}]} defaultValue="mobile" theme={theme} />
            <SelectField label="Source" options={[{value:'experian', label:'From Experian'}, {value:'idi', label:'From IDI'}]} defaultValue="experian" theme={theme} />
            <SelectField label="Verification Status" options={[{value:'good', label:'Good'}, {value:'unknown', label:'Unknown'}, {value:'bad', label:'Bad'}]} defaultValue="good" theme={theme} />
            <SelectField label="Consent Status" options={[{value:'consented', label:'Consented'}, {value:'not consented', label:'Not Consented'}]} defaultValue="consented" theme={theme} />
            <button className="self-end w-full h-max mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase text-xs tracking-widest transition-all shadow-lg shadow-blue-600/20">
              Add Phone Number
            </button>
          </div>
        </section>
    
        {/* Email Addresses */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-5 w-1 bg-teal-500 rounded-full" />
            <h4 className={`text-xs uppercase font-black tracking-[0.2em] ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}>Email Accounts</h4>
          </div>
          
          <div className={`space-y-3 p-8 rounded-2xl border transition-all hover:border-blue-500/50 ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-sky-50 border-blue-500/50 shadow-sm'}`}>
            <InputField label="Email Address" type='email' theme={theme} />
            <SelectField label="Verification Status" options={[{value:'good', label:'Good'}, {value:'unknown', label:'Unknown'}, {value:'bad', label:'Bad'}]} defaultValue="good" theme={theme} />
            <SelectField label="Consent Status" options={[{value:'consented', label:'Consented'}, {value:'not consented', label:'Not Consented'}]} defaultValue="consented" theme={theme} />
            <button className="self-end w-full h-max mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase text-xs tracking-widest transition-all shadow-lg shadow-blue-600/20">
              Add Email Address
            </button>
          </div>
        </section>
      </div>
    
      {/* Footer: Legal/Employment */}
      <div className={`flex flex-row justify-between gap-4 p-6 rounded-[25px] border-2 border-dashed ${theme === 'dark' ? 'border-white/10 bg-white/2' : 'border-slate-400 bg-slate-50/50'}`}>
        <div className="flex items-start gap-3">
          <div className={`p-3 rounded-xl ${theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-50'}`}>
            <User size={20} className="text-blue-500" />
          </div>
          <InputField label="Assignee Attorney" type='text' theme={theme} />
        </div>
    
        <div className="flex items-start gap-3">
          <div className={`p-3 rounded-xl ${theme === 'dark' ? 'bg-violet-500/10' : 'bg-violet-50'}`}>
            <Briefcase size={20} className="text-violet-500" />
          </div>
          <InputField label="Verified Employer" type='text' theme={theme} />
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

export default NewContactMenu