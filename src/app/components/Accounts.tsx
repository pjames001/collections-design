import React, { useState } from 'react';
import { FileDown, ChevronRight } from 'lucide-react';

interface SummaryData {
  label: string;
  value: string;
}

export const AccountsModule: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const summaryStats: SummaryData[] = [
    { label: "Total assigned", value: "10" },
    { label: "Number of accounts", value: "10" },
    { label: "Opened", value: "8" },
    { label: "Legal accounts", value: "1" },
    { label: "Total collected", value: "8" },
    { label: "Client owes", value: "$382,660" }
  ];

  return (
    <div className="p-6 space-y-8 h-full">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>Accounts: 13</h2>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-xl text-sm text-white bg-teal-700">
            <FileDown size={16} /> export pdf / CSV
          </button>
        </div>
      </div>

      {/* Summary Grid */}
      <div className={`grid grid-cols-2 md:grid-cols-6 gap-6 p-8 rounded-[30px] border 
        ${theme === 'dark' ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-100 shadow-sm'}`}>
        {summaryStats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-[14px] text-sky-300">{stat.label}</span>
            <span className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Expandable Table */}
      <div className="overflow-hidden rounded-[30px]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className={theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}>
              <th className="p-4 text-[16px] min-w-[120px] tracking-widest text-sky-300 border-b border-white/5"></th>
              <th className="p-4 text-[16px] min-w-[120px] tracking-widest text-sky-300 border-b border-white/5">Name</th>
              <th className="p-4 text-[16px] min-w-[120px] tracking-widest text-sky-300 border-b border-white/5">Amount</th>
              <th className="p-4 text-[16px] min-w-[120px] tracking-widest text-sky-300 border-b border-white/5">Status</th>
              <th className="p-4 text-[16px] min-w-[120px] tracking-widest text-sky-300 border-b border-white/5">Balance</th>
              <th className="p-4 text-[16px] min-w-[120px] tracking-widest text-sky-300 border-b border-white/5">Actions</th>
            </tr>
          </thead>
          <tbody className={`divide-y ${theme === 'dark' ? 'divide-white/5' : 'divide-slate-100'}`}>
            {[1, 2, 3, 4, 5, 6].map((id) => (
              <React.Fragment key={id}>
                <tr className="cursor-pointer hover:bg-slate-900" onClick={() => setExpandedRow(expandedRow === id ? null : id)}>
                  <td className="p-4 text-white"><ChevronRight size={16} className={`transition-transform ${expandedRow === id ? 'rotate-90' : ''}`} /></td>
                  <td className="p-4 text-white text-sm">global logistics inc</td>
                  <td className="p-4 text-white text-sm">$15,000</td>
                  <td className="p-4 text-white"><span className="text-[12px] px-2 py-0.5 rounded-full font-bold bg-emerald-300 text-emerald-700">Active</span></td>
                  <td className="p-4 text-white text-sm">$8,200</td>
                  <td className="p-4 text-white">
                    <select className="bg-transparent text-xs text-slate-400">
                      <option className='bg-slate-800'>edit</option>
                      <option className='bg-slate-800'>Delete</option>
                    </select>
                  </td>
                </tr>
                {expandedRow === id && (
                  <tr className={theme === 'dark' ? 'bg-white/10' : 'bg-slate-50'}>
                    <td colSpan={6} className="p-6">
                      <div className="grid grid-cols-4 md:grid-cols-8 gap-4 text-sm w-full">
                        <div>
                          <p className="text-sky-300">Date</p>
                          <p className='text-white'>02/18/26</p>
                        </div>
                        <div>
                          <p className="text-sky-300">ID/Check Number</p>
                          <p className='text-white'>#9902</p>
                        </div>
                        <div>
                          <p className="text-sky-300">Description</p>
                          <p className='text-white'>payment</p>
                        </div>
                        <div>
                          <p className="text-sky-300">Agency</p>
                          <p className='text-white'>$50.00</p>
                        </div>
                        <div>
                          <p className="text-sky-300">Client</p>
                          <p className='text-white'>$450.00</p>
                        </div>
                        <div>
                          <p className="text-sky-300">Convenience Fees</p>
                          <p className='text-white'>$250.00</p>
                        </div>
                        <div className='border-l border-white pl-10'>
                          <p className="text-green-500">Agency</p>
                          <p className='text-white'>$150.00</p>
                        </div>
                        <div>
                          <p className="text-yellow-500">Client</p>
                          <p className='text-white'>$100.00</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};