import { Plus, Printer } from 'lucide-react'
import React from 'react'
import { DateField } from './shared/DateField'
import { SelectField } from './shared/SelectField'
import { InputField } from './shared/InputField'
import { SummaryStat } from './shared/SummaryStat'

const Financials = ({ theme }: { theme: 'dark' | 'light' }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
  
      {/* SECTION 1: ADD NEW TRANSACTION */}
      <div className={`p-8 rounded-[35px] border ${theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-sky-50 border-blue-500/50 shadow-sm'}`}>
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-green-500/10 rounded-xl"><Plus className="text-green-500" size={20} /></div>
          <h3 className={`text-xl font-black uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Add New Transaction</h3>
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <DateField label="Post Date" theme={theme} />
          <SelectField label="Description" options={[{value:'pmt', label:'Payment'}, {value:'adj', label:'Adjustment'}]} defaultValue="pmt" theme={theme} />
          <InputField label="Amount" placeholder="$0.00" type="number" theme={theme} />
          <InputField label="Note / Check #" placeholder="Enter details..." theme={theme} />
          <SelectField label="Collector" options={[{value:'sj', label:'Sarah Jenkins'}]} defaultValue="sj" theme={theme} />
          <SelectField label="Co-Collector" options={[{value:'none', label:'None'}]} defaultValue="none" theme={theme} />
        </div>
    
        <button className="mt-8 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]">
          Post Transaction to Ledger
        </button>
      </div>
    
      {/* SECTION 2: TRANSACTION SUMMARY (The Equation) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <SummaryStat theme={theme} label="Principal" value="$10,000.00" />
        <SummaryStat theme={theme} label="Interest" value="$450.32" />
        <SummaryStat theme={theme} label="Costs" value="$125.00" />
        <SummaryStat theme={theme} label="Subtotal" value="$10,575.32" />
        <SummaryStat theme={theme} label="Total Paid" value="-$1,200.00" />
        <SummaryStat theme={theme} label="Current Balance" value="$9,375.32" isTotal />
      </div>
    
      {/* SECTION 3: TRANSACTION HISTORY TABLE */}
      <div className={`rounded-[35px] border overflow-hidden ${theme === 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-sky-50 border-blue-500/50 shadow-sm'}`}>
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-slate-500/5">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-500">Transaction History Ledger</h4>
            <button className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${theme === 'dark' ? 'bg-white/5 text-white hover:bg-white/10' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                <Printer size={14} /> Print Ledger
            </button>
        </div>
        
        <div className="max-w-[1300px] overflow-x-scroll custom-scrollbar">
          <table className="text-left border-collapse">
            <thead>
              <tr className={theme === 'dark' ? 'bg-white/5' : 'bg-sky-100'}>
                {['Date', 'Description', 'ID', 'Note', 'Collector', 'Amount', 'Principal', 'Interest', 'Costs', 'Atty Fees', '3rd Party', 'Agency', 'Client', 'Balance', 'Action'].map((head) => (
                  <th key={head} className={`p-4 text-[16px] min-w-[120px] tracking-widest border-b border-white/5 ${theme === 'dark' ? 'text-sky-300' : 'text-slate-700'}`}>{head}</th>
                ))}
              </tr>
            </thead>
            <tbody className={`divide-y ${theme === 'dark' ? 'divide-white/5' : 'divide-slate-100'}`}>
              {[1, 2].map((i) => (
                <tr key={i} className="hover:bg-blue-500/5 transition-colors group">
                  <td className={`p-4 text-md ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}>02/13/2026</td>
                  <td className="p-4"><span className="px-2 py-1 rounded bg-green-500/10 text-green-500 text-[10px] font-black uppercase">Payment</span></td>
                  <td className="p-4 text-md text-gray-700">#TRX-9902</td>
                  <td className="p-4 text-md text-gray-700">Ck #4402</td>
                  <td className="p-4 text-md text-gray-700">S. Jenkins</td>
                  <td className="p-4 text-md text-green-500">$500.00</td>
                  <td className="p-4 text-md text-gray-700">$400.00</td>
                  <td className="p-4 text-md text-gray-700">$100.00</td>
                  <td className="p-4 text-md text-gray-700">$0.00</td>
                  <td className="p-4 text-md text-gray-700">$0.00</td>
                  <td className="p-4 text-md text-gray-700">$0.00</td>
                  <td className="p-4 text-md text-gray-700">$50.00</td>
                  <td className="p-4 text-md text-gray-700">$450.00</td>
                  <td className="p-4 text-md text-blue-500">$9,375.32</td>
                  <td className="p-4">
                    <select className={`bg-transparent text-[10px] font-black uppercase outline-none cursor-pointer ${theme === 'dark' ? 'text-white/40' : 'text-slate-400'}`}>
                      <option className='bg-slate-800'>Edit</option>
                      <option className='bg-slate-800'>Delete</option>
                      <option className='bg-slate-800'>Void</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Financials