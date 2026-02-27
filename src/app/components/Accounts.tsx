import React, { useState } from 'react';
import { FileDown, ChevronRight, ArrowBigUpDashIcon, SquareArrowOutUpRight, FileText, XCircle } from 'lucide-react';

interface SummaryData {
  label: string;
  value: string;
}

export const AccountsModule: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const summaryStats: SummaryData[] = [
    { label: "Total Accounts", value: "10" },
    { label: "Total Accounts Collected", value: "4" },
    { label: "Opened", value: "8" },
    { label: "Closed", value: "2" },
    { label: "Legal Accounts", value: "1" },
    { label: "Total Amount Collected", value: "$4,000" },
    { label: "Total Face Value", value: "$100.00" },
    { label: "Client Owes", value: "$382,660" },
    { label: "Agency Owes", value: "$1,660" },
    { label: "Last Placement Date", value: "01/01/2024" },
  ];

  const handleCancelAccounts = () => {
    confirm("Would you like to bill these accounts?");
  }

  return (
    <div className="p-6 space-y-8 h-full">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className='space-y-2'>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-xl text-sm text-white bg-teal-700">
            <FileDown size={16} /> Export PDF / CSV
          </button>

          <button onClick={handleCancelAccounts}className="flex items-center gap-2 px-4 py-2 border rounded-xl text-sm text-white bg-red-600">
            <XCircle size={16} /> Cancel Selected Accounts
          </button>
        </div>
      </div>

      {/* Summary Grid */}
      <div className={`flex justify-between items-start flex-wrap p-8 rounded-[30px] border 
        ${theme === 'dark' ? 'bg-slate-900 border-white/10' : 'bg-sky-50 border-blue-500/50 shadow-sm'}`}>
        {summaryStats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className={`text-[14px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>{stat.label}</span>
            <span className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Expandable Table */}
      <div className="overflow-hidden rounded-[30px] border border-blue-500/50 shadow-sm">
        <table className="w-full text-left border-collapse ">
          <thead>
            <tr className={theme === 'dark' ? 'bg-white/5' : 'bg-sky-100'}>
              <th className={`p-4 text-[16px] min-w-[120px] tracking-widest border-b border-white/5 ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>
                <input type="checkbox" className="w-4 h-4" />
              </th>
              <th className={`p-4 text-[16px] min-w-[120px] tracking-widest border-b border-white/5 ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Status</th>
              <th className={`p-4 text-[16px] min-w-[120px] tracking-widest border-b border-white/5 ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Name</th>
              <th className={`p-4 text-[16px] min-w-[120px] tracking-widest border-b border-white/5 ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Total Amount</th>
              <th className={`p-4 text-[16px] min-w-[120px] tracking-widest border-b border-white/5 ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Total Collected</th>
              <th className={`p-4 text-[16px] min-w-[120px] tracking-widest border-b border-white/5 ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Current Balance</th>
              <th className={`p-4 text-[16px] min-w-[120px] tracking-widest border-b border-white/5 ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Go to Account</th>
            </tr>
          </thead>
          <tbody className={`divide-y ${theme === 'dark' ? 'divide-white/5' : 'divide-slate-100'}`}>
            {[1, 2, 3, 4, 5, 6].map((id) => (
              <React.Fragment key={id}>
                <tr className={`cursor-pointer ${theme === 'dark' ? 'hover:bg-slate-900' : 'hover:bg-slate-100'}`} onClick={() => setExpandedRow(expandedRow === id ? null : id)}>
                  <td className={`p-4 ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}><input type="checkbox" className="w-4 h-4" /></td>
                  <td className="p-4 text-white"><span className="text-[12px] px-2 py-0.5 rounded-full font-bold bg-emerald-300 text-emerald-700">Active</span></td>
                  <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}>global logistics inc</td>
                  <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}>$15,000</td>
                  <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}>$5,200</td>
                  <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}>$8,200</td>
                  <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}>
                    <button className={`px-3 py-1 rounded-full text-sm ${theme === 'dark' ? 'bg-blue-500 text-white' : 'bg-blue-600 text-white'}`}>
                      <SquareArrowOutUpRight size={16} /> 
                    </button>
                  </td>
                </tr>
                {expandedRow === id && (
                  <tr className={theme === 'dark' ? 'bg-white/10' : 'bg-blue-500/60'}>
                    <td colSpan={7} className="p-6">
                      <div className="grid grid-cols-10 justify-items-center gap-4 text-sm w-full">
                        <div>
                          <p className={theme === 'dark' ? 'text-sky-300' : 'text-slate-800'}>Date</p>
                          <p className='text-white text-center'>02/18/26</p>
                        </div>
                        <div>
                          <p className={theme === 'dark' ? 'text-sky-300' : 'text-slate-800'}>ID/Check Number</p>
                          <p className='text-white text-center'>#9902</p>
                        </div>
                        <div>
                          <p className={theme === 'dark' ? 'text-sky-300' : 'text-slate-800'}>Description</p>
                          <p className='text-white text-center'>payment</p>
                        </div>
                        <div>
                          <p className={theme === 'dark' ? 'text-sky-300' : 'text-slate-800'}>Agency</p>
                          <p className='text-white text-center'>$50.00</p>
                        </div>
                        <div>
                          <p className={theme === 'dark' ? 'text-sky-300' : 'text-slate-800'}>Client</p>
                          <p className='text-white text-center'>$450.00</p>
                        </div>
                        <div>
                          <p className={theme === 'dark' ? 'text-sky-300' : 'text-slate-800'}>Convenience Fees</p>
                          <p className='text-white text-center'>$250.00</p>
                        </div>
                        <div className='border-l border-white pl-10'>
                          <p className={theme === 'dark' ? 'text-green-500' : 'text-green-300 font-bold'}>Agency</p>
                          <p className='text-white text-center'>$150.00</p>
                        </div>
                        <div>
                          <p className={theme === 'dark' ? 'text-yellow-500' : 'text-yellow-300 font-bold'}>Client</p>
                          <p className='text-white text-center'>$100.00</p>
                        </div>
                        <div>
                          <p className={theme === 'dark' ? 'text-blue-400' : 'text-blue-300 font-bold'}>Attorney</p>
                          <p className='text-white text-center'>$100.00</p>
                        </div>
                        <div>
                          <p className={theme === 'dark' ? 'text-red-400' : 'text-purple-300 font-bold'}>View Check</p>
                          <p className='text-white'><FileText size={16} className='mx-auto' /></p>
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