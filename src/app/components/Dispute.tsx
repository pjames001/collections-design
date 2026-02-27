import { AlertCircle, Download, Mail, Paperclip, Plus, Printer, Trash2 } from 'lucide-react'
import React from 'react'
import { DateField } from './shared/DateField'
import { SelectField } from './shared/SelectField'

const Dispute = ({ theme }: { theme: 'dark' | 'light' }) => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
  
      {/* SECTION HEADER: Stats & Global Actions */}
      <div className={`flex flex-col md:flex-row justify-between items-center p-6 rounded-[30px] border ${
        theme === 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-sky-50 border-blue-500/50 shadow-sm'
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
                theme === 'dark' ? 'bg-white/5 text-white/60 hover:text-white' : 'bg-blue-100 text-blue-500 hover:text-blue-600'
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
            theme === 'dark' ? 'bg-white/5 border-white/10 hover:border-blue-500/30' : 'bg-sky-50 border-blue-500/50 shadow-sm hover:shadow-md'
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
  )
}

export default Dispute