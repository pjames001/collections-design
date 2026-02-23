import React, { useState } from 'react';
import { ChevronDown, FileText, Mail, FileDown, Plus, CreditCard, Scale, Printer, MessageCircle, Link } from 'lucide-react';
import { IconButton } from './shared/IconButton';
import { SummaryItem } from './shared/SummaryItem';
import { SelectField } from './shared/SelectField';
import { InputField } from './shared/InputField';
import { DateField } from './shared/DateField';

export const AccountingModule: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const [activeTab, setActiveTab] = useState<'account' | 'legal'>('account');
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* 1. Shared Action Header: Add payment */}
      <div className={`p-8 rounded-[35px] border ${theme === 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-sky-100 border-slate-200 shadow-sm'}`}>
        <div className="flex items-center gap-2 mb-6 text-blue-500">
          <Plus size={18} />
          <span className="text-sm">Add</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 items-end">
          <SelectField label="Payment" options={[]} theme={theme} />
          <DateField label="Date" theme={theme} />
          <SelectField label="Description" options={[]} theme={theme} />
          <InputField label="Check number" theme={theme} />
          <InputField label="Amount" theme={theme} />
          <SelectField label="From" options={[]} theme={theme} />
          <SelectField label="To" options={[]} theme={theme} />
          <button className="h-[42px] bg-blue-600 text-white rounded-xl text-xs px-4 whitespace-nowrap">
            Add payment
          </button>
        </div>
      </div>

      {/* 2. Tab Navigation */}
      <div className="flex justify-between items-center gap-8">
        <div className='flex gap-8'>
          <button 
            onClick={() => setActiveTab('account')}
            className={`pb-4 text-lg transition-all ${activeTab === 'account' ? 'text-sky-500 border-b-2 border-sky-500' : theme === 'dark' ? 'text-white' : 'text-slate-600'}`}
          >
            Account Billing
          </button>
          <button 
            onClick={() => setActiveTab('legal')}
            className={`pb-4 text-lg transition-all ${activeTab === 'legal' ? 'text-sky-500 border-b-2 border-sky-500' : theme === 'dark' ? 'text-white' : 'text-slate-600'}`}
          >
            Legal Billing
          </button>
        </div>

        <div className="flex gap-8">
          {/* <SummaryItem label="Client owes" value="$12,400.00" theme={theme} />
          <SummaryItem label="Company owes" value="$3,150.00" theme={theme} /> */}
          <div className='p-3 px-8 bg-teal-700 rounded-lg flex flex-col justify-center items-center gap-4'>
            <span className='text-md font-bold text-white'>Client owes: $382,660</span>
          </div>

          <div className='p-3 px-8 bg-blue-800 rounded-lg flex flex-col justify-center items-center gap-4'>
            <span className='text-md font-bold text-white'>Company owes: $382,660</span>
          </div>
        </div>
      </div>

      {/* 3. Tab Content */}
      <div className="space-y-6">
        {activeTab === 'account' ? (
          <>
            {/* Quick Summary */}
            

            {/* Main Ledger Table */}
            <div className={`rounded-[30px] border overflow-hidden ${theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-white border-slate-100'}`}>
              <div className={`p-4 flex justify-between ${theme === 'dark' ? 'bg-blue-900' : 'bg-blue-400'}`}>
                <span className="text-sm text-white">Account Billing Ledger</span>
                <span className="text-sm text-white">Offset Selected Accounts</span>
              </div>
              <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className={theme === 'dark' ? 'bg-white/5' : 'bg-sky-100'}>
                      <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}><input type="checkbox" /></th>
                      <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Account Number</th>
                      <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Status</th>
                      <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Id/Check Number</th>
                      <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Description</th>
                      <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Attorney Fees</th>
                      <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Agency Fee</th>
                      <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Client Fee</th>
                      <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Conv. Fee</th>
                      <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Attorney Owes</th>
                      <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Agency Owes</th>
                      <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Client Owes</th>
                      <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Actions</th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${theme === 'dark' ? 'divide-white/5' : 'divide-slate-100'}`}>
                    {[1, 2].map((i) => (
                      <tr key={i} className={`cursor-pointer ${theme === 'dark' ? 'bg-slate-900 hover:bg-slate-700' : 'bg-white hover:bg-slate-200'}`} onClick={() => setExpandedRow(expandedRow === i ? null : i)}>
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}><input type="checkbox" /></td>
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>#882019</td>
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}><span className="text-[12px] font-bold text-green-500">Active</span></td>
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>Ck-4402</td>
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>Monthly pmt</td>
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>$0.00</td>
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>$25.00</td>
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>$75.00</td>
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>$5.00</td>
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>$0.00</td>
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>$25.00</td>
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>$450.00</td>
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}><MoreHorizontal size={14} className="text-slate-400" /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Footer Actions & Totals */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="flex gap-3">
                <IconButton icon={<FileDown size={14} />} theme={theme} />
                <IconButton icon={<Mail size={14} />} theme={theme} />
                <IconButton icon={<Printer size={14} />} theme={theme} />
                <IconButton icon={<MessageCircle size={14} />} theme={theme} />
                <IconButton icon={<Link size={14} />} theme={theme} />
              </div>
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 p-6 rounded-3xl ${theme === 'dark' ? 'bg-slate-900 border border-blue-600' : 'bg-sky-100 border border-slate-100 shadow-sm'}`}>
                <FooterStat theme={theme} label="Total attorney:" value="$0.00" />
                <FooterStat theme={theme} label="Agency:" value="$50.00" />
                <FooterStat theme={theme} label="Client:" value="$900.00" />
                <FooterStat theme={theme} label="Owed to client:" value="$850.00" highlight />
              </div>
            </div>
          </>
        ) : (
          /* Legal Billing Tab: Expandable Table */
          <>
          <div className="rounded-[30px] overflow-hidden">
             <table className="w-full text-left text-sm ">
                <thead>
                  <tr className={theme === 'dark' ? 'bg-white/5' : 'bg-sky-100'}>
                    <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}></th>
                    <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Account Number</th>
                    <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Full Name/Company</th>
                    <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Status</th>
                    <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Current Balance Due</th>
                    <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Statute of Limitation</th>
                    <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Follow Up Date</th>
                    <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Balance</th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${theme === 'dark' ? 'divide-white/5' : 'divide-slate-100'}`}>
                  {[1, 2].map((i) => (
                    <React.Fragment key={i}>
                      <tr 
                        className={`cursor-pointer ${theme === 'dark' ? 'bg-slate-900 hover:bg-slate-700' : 'bg-white hover:bg-slate-200'}`}
                        onClick={() => setExpandedRow(expandedRow === i ? null : i)}
                      >
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}><input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>65487-9201</td>
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>David and Fisher</td>
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>Law Suit Pending</td>
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>$85.00</td>
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>2-25-2023</td>
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>5-1-2023</td>
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>$370.00</td>
                      </tr>
                      {expandedRow === i && (
                        <tr className={theme === 'dark' ? 'bg-white/10' : 'bg-blue-500/60'}>
                          <td colSpan={8} className="p-6">
                             <div className="grid grid-cols-4 md:grid-cols-8 gap-4 text-sm w-full">
                                <div>
                                  <p className={theme === 'dark' ? 'text-sky-300' : 'text-slate-800'}>Date</p>
                                  <p className='text-white'>02/18/26</p>
                                </div>
                                <div>
                                  <p className={theme === 'dark' ? 'text-sky-300' : 'text-slate-800'}>ID/Check Number</p>
                                  <p className='text-white'>#9902</p>
                                </div>
                                <div>
                                  <p className={theme === 'dark' ? 'text-sky-300' : 'text-slate-800'}>Description</p>
                                  <p className='text-white'>payment</p>
                                </div>
                                <div>
                                  <p className={theme === 'dark' ? 'text-sky-300' : 'text-slate-800'}>Agency</p>
                                  <p className='text-white'>$50.00</p>
                                </div>
                                <div>
                                  <p className={theme === 'dark' ? 'text-sky-300' : 'text-slate-800'}>Client</p>
                                  <p className='text-white'>$450.00</p>
                                </div>
                                <div>
                                  <p className={theme === 'dark' ? 'text-sky-300' : 'text-slate-800'}>Convenience Fees</p>
                                  <p className='text-white'>$250.00</p>
                                </div>
                                <div className='border-l border-white pl-10'>
                                  <p className={theme === 'dark' ? 'text-green-500' : 'text-green-300 font-bold'}>Agency</p>
                                  <p className='text-white'>$150.00</p>
                                </div>
                                <div>
                                  <p className={theme === 'dark' ? 'text-yellow-500' : 'text-yellow-300 font-bold'}>Client</p>
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
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="flex gap-3">
                <IconButton icon={<FileDown size={14} />} theme={theme} />
                <IconButton icon={<Mail size={14} />} theme={theme} />
                <IconButton icon={<Printer size={14} />} theme={theme} />
                <IconButton icon={<MessageCircle size={14} />} theme={theme} />
                <IconButton icon={<Link size={14} />} theme={theme} />
              </div>
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 p-6 rounded-3xl ${theme === 'dark' ? 'bg-slate-900 border border-blue-600' : 'bg-sky-100 border border-slate-100 shadow-sm'}`}>
                <FooterStat theme={theme} label="Agency Spent:" value="$0.00" />
                <FooterStat theme={theme} label="Client Spent:" value="$50.00" />
                <FooterStat theme={theme} label="Pending:" value="$900.00" />
                <FooterStat theme={theme} label="client Trust Balance:" value="$850.00" highlight />
              </div>
            </div>
            </>
        )}
      </div>
    </div>
  );
};

// Internal Helpers
const FooterStat = ({ label, value, theme, highlight  = false }: { label: string; value: string; theme: 'dark' | 'light'; highlight?: boolean }) => (
  <div className="flex flex-col">
    <span className="text-md text-blue-500">{label}</span>
    <span className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{value}</span>
  </div>
);

const MoreHorizontal = ({ size, className }: { size: number; className: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" />
  </svg>
);