import React, { useState } from 'react';
import { ChevronDown, FileText, Mail, FileDown, Plus, CreditCard, Scale, Printer, MessageCircle, Link, Check, X, History, CircleDollarSign, Minus } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { IconButton } from './shared/IconButton';
import { SummaryItem } from './shared/SummaryItem';
import { SelectField } from './shared/SelectField';
import { InputField } from './shared/InputField';
import { DateField } from './shared/DateField';
import { CheckboxField } from './shared/CheckboxField';

export const AccountingModule: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const [activeTab, setActiveTab] = useState<'account' | 'legal'>('account');
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentType, setPaymentType] = useState<'credit_card' | 'ach' | 'check' | ''>('');

  return (
    <Dialog.Root open={isPaymentModalOpen} onOpenChange={setIsPaymentModalOpen}>
    <div className="space-y-6 animate-in fade-in duration-500">
     

      {/* 2. Tab Navigation */}
      <div className="flex justify-between items-center gap-8 mt-20">
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
            <span className='text-md font-bold text-white'>Client Owes: $382,660</span>
          </div>

          <div className='p-3 px-8 bg-blue-800 rounded-lg flex flex-col justify-center items-center gap-4'>
            <span className='text-md font-bold text-white'>Company Owes: $382,660</span>
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
                <span className="py-1 px-3 rounded-full bg-green-600 text-sm text-white">Offset Selected Accounts</span>
              </div>
              <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className={theme === 'dark' ? 'bg-white/5' : 'bg-sky-100'}>
                      <th className={`p-4 text-[16px] text-center min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}><input type="checkbox" /></th>
                      <th className={`p-4 text-[16px] text-center min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Account Number</th>
                      <th className={`p-4 text-[16px] text-center min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Status</th>
                      <th className={`p-4 text-[16px] text-center min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>ID/Check Number</th>
                      <th className={`p-4 text-[16px] text-center min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Description</th>
                      <th className={`p-4 text-[16px] text-center min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Attorney Fees</th>
                      <th className={`p-4 text-[16px] text-center min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Agency Fee</th>
                      <th className={`p-4 text-[16px] text-center min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Client Fee</th>
                      <th className={`p-4 text-[16px] text-center min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Conv. Fee</th>
                      <th className={`p-4 text-[16px] text-center min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Attorney Owes</th>
                      <th className={`p-4 text-[16px] text-center min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Agency Owes</th>
                      <th className={`p-4 text-[16px] text-center min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Client Owes</th>
                      <th className={`p-4 text-[16px] text-center min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Actions</th>
                      <th className={`p-4 text-[16px] text-center min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Payments</th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${theme === 'dark' ? 'divide-white/5' : 'divide-slate-100'}`}>
                    {[1, 2].map((i) => (
                      <tr key={i} className={`cursor-pointer ${theme === 'dark' ? 'bg-slate-900 hover:bg-slate-700' : 'bg-white hover:bg-slate-200'}`} onClick={() => setExpandedRow(expandedRow === i ? null : i)}>
                        <td className={`p-4 text-center text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}><input type="checkbox" /></td>
                        <td className={`p-4 text-center text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>#882019</td>
                        <td className={`p-4 text-center text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}><span className="text-[12px] font-bold text-green-500">Active</span></td>
                        <td className={`p-4 text-center text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>Ck-4402</td>
                        <td className={`p-4 text-center text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>Monthly pmt</td>
                        <td className={`p-4 text-center text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>$0.00</td>
                        <td className={`p-4 text-center text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>$25.00</td>
                        <td className={`p-4 text-center text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>$75.00</td>
                        <td className={`p-4 text-center text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>$5.00</td>
                        <td className={`p-4 text-center text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>$0.00</td>
                        <td className={`p-4 text-center text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>$25.00</td>
                        <td className={`p-4 text-center text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>$450.00</td>
                        <td className={`p-4 text-center text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>
                          <select name="" id="">
                            <option value="edit" className={theme === 'dark' ? 'text-slate-300 bg-slate-800' : 'text-slate-700 bg-white'}>Edit</option>
                            <option value="delete" className={theme === 'dark' ? 'text-slate-300 bg-slate-800' : 'text-slate-700 bg-white'}>Delete</option>
                          </select>
                        </td>
                        <td className={`p-4 text-center text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>
                          <Dialog.Trigger asChild>
                            <button className={`px-3 py-1 rounded-full text-sm ${theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>
                              Add Payment
                            </button>
                          </Dialog.Trigger>
                        </td>
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
                <FooterStat theme={theme} label="Total Attorney:" value="$0.00" />
                <FooterStat theme={theme} label="Total Agency:" value="$50.00" />
                <FooterStat theme={theme} label="Total Client:" value="$900.00" />
                <FooterStat theme={theme} label="Total:" value="$1,850.00" highlight />
              </div>
            </div>
          </>
        ) : (
          /* Legal Billing Tab: Expandable Table */
          <>
          <div className="rounded-[30px] overflow-auto custom-scrollbar">
             <table className="w-full text-center text-sm ">
                <thead>
                  <tr className={theme === 'dark' ? 'bg-white/5' : 'bg-sky-100'}>
                    <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}></th>
                    <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Account Number</th>
                    <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Full Name/Company</th>
                    <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Status</th>
                    <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Current Balance Due</th>
                    <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Statute of Limitation</th>
                    <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Client Sent</th>
                    <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Agency Spent</th>
                    <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Total Pending</th>
                    <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Trust Balance</th>
                    <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Actions</th>
                    <th className={`p-4 text-[16px] min-w-[200px] ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'} tracking-widest border-b border-white/5`}>Payments</th>
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
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>$500.00</td>
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>$400.00</td>
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>$270.00</td>
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>$370.00</td>
                        <td className={`p-4 text-center text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>
                          <select name="" id="">
                            <option value="edit" className={theme === 'dark' ? 'text-slate-300 bg-slate-800' : 'text-slate-700 bg-white'}>Edit</option>
                            <option value="delete" className={theme === 'dark' ? 'text-slate-300 bg-slate-800' : 'text-slate-700 bg-white'}>Delete</option>
                          </select>
                        </td>
                        <td className={`p-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>
                          <Dialog.Trigger asChild>
                            <button className={`px-3 py-1 rounded-full text-sm ${theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>
                              Add Payment
                            </button>
                          </Dialog.Trigger>
                        </td>
                        
                      </tr>
                      {expandedRow === i && (
                        <tr className={theme === 'dark' ? 'bg-white/10' : 'bg-blue-500/60'}>
                          <td colSpan={12} className="p-6">
                             <div className="flex justify-between gap-2 text-sm w-full">
                                <div>
                                  <p className={theme === 'dark' ? 'text-sky-300' : 'text-slate-800'}>Date</p>
                                  <p className='text-white text-center'>02/18/26</p>
                                </div>
                                <div>
                                  <p className={theme === 'dark' ? 'text-sky-300' : 'text-slate-800'}>Description</p>
                                  <p className='text-white text-center'>Payment</p>
                                </div>
                                <div>
                                  <p className={theme === 'dark' ? 'text-sky-300' : 'text-slate-800'}>ID/Check Number</p>
                                  <p className='text-white text-center'>#9902</p>
                                </div>
                                <div>
                                  <p className={theme === 'dark' ? 'text-sky-300' : 'text-slate-800'}>Note</p>
                                  <p className='text-white text-center'>payment</p>
                                </div>
                                <div>
                                  <p className={theme === 'dark' ? 'text-sky-300' : 'text-slate-800'}>Agent</p>
                                  <p className='text-white text-center'>John Doe</p>
                                </div>
                                <div>
                                  <p className={theme === 'dark' ? 'text-sky-300' : 'text-slate-800'}>Amount</p>
                                  <p className='text-white text-center'>$50.00</p>
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
                                  <p className={theme === 'dark' ? 'text-sky-300' : 'text-slate-800'}>Client Sent</p>
                                  <p className='text-white text-center'>$350.00</p>
                                </div>
                                <div>
                                  <p className={theme === 'dark' ? 'text-sky-300' : 'text-slate-800'}>Agency Spent</p>
                                  <p className='text-white text-center'>$50.00</p>
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
                                  <p className={theme === 'dark' ? 'text-red-400' : 'text-red-300 font-bold'}>Total</p>
                                  <p className='text-white text-center'>$200.00</p>
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
                <FooterStat theme={theme} label="Client Trust Balance:" value="$850.00" highlight />
              </div>
            </div>
            </>
        )}
      </div>
    </div>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-md z-[999] animate-in fade-in duration-300" />
      <Dialog.Content className={`fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90vw] max-w-2xl z-[1000] outline-none animate-in zoom-in-95 duration-300`}>
        <div className={`rounded-[30px] border shadow-2xl overflow-hidden ${
            theme === 'dark' ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'
          }`}>
            {/* Modal Header */}
            <div className={`p-6 border-b flex justify-between items-center ${theme === 'dark' ? 'border-white/5' : 'border-slate-100'}`}>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <CircleDollarSign className="text-blue-500" size={24} />
                </div>
                <div>
                  <Dialog.Title className={`text-xl font-black uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    New Transaction
                  </Dialog.Title>
                  <p className={`text-[12px] font-bold tracking-widest ${theme === 'dark' ? 'text-white/80' : 'text-slate-400'}`}>
                    Account: #882019 - David and Fisher
                  </p>
                </div>
              </div>
              <Dialog.Close className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'hover:bg-white/5 text-white/40' : 'hover:bg-slate-100 text-slate-400'}`}>
                <X size={20} />
              </Dialog.Close>
            </div>

            {/* Modal Body */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <div className='grid grid-cols-2 gap-4 overflow-hidden'>
                <DateField label="Date" theme={theme} />
                <SelectField 
                  label="Payment Type" 
                  options={[
                    { value: 'credit_card', label: 'Credit Card' },
                    { value: 'ach', label: 'ACH' },
                    { value: 'check', label: 'Check' }
                  ]} 
                  theme={theme}
                  onChange={(value) => setPaymentType(value as 'credit_card' | 'ach' | 'check' | '')}
                />
                <InputField label="ID/Check Number" theme={theme} />
                <InputField label="Description" theme={theme} />
                <InputField label="Amount" theme={theme} />
                <SelectField label="From" options={[]} theme={theme} />
                <SelectField label="To" options={[]} theme={theme} />
                <CheckboxField label="Add Conv. Fee" theme={theme} />
                
              </div>

              {/* Credit Card Fields */}
              {paymentType === 'credit_card' && (
                <div className={`mt-6 p-4 rounded-2xl border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                  <h4 className={`text-sm font-black uppercase tracking-widest mb-4 ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>
                    Credit Card Information
                  </h4>
                  <div className='grid grid-cols-2 gap-4'>
                    <InputField label="First Name" theme={theme} />
                    <InputField label="Last Name" theme={theme} />
                    <InputField label="Email" theme={theme} />
                    <InputField label="Phone Number" theme={theme} />
                    <div className='col-span-2'>
                      <InputField label="Address" theme={theme} />
                    </div>
                    <InputField label="City" theme={theme} />
                    <InputField label="State" theme={theme} />
                    <InputField label="Zip Code" theme={theme} />
                    <InputField label="Credit Card Number" theme={theme} placeholder="1234 5678 9012 3456" />
                    <InputField label="Expiration Date" theme={theme} placeholder="MM/YY" />
                    <InputField label="CVV" theme={theme} placeholder="123" />
                  </div>
                </div>
              )}

              {/* ACH Fields */}
              {paymentType === 'ach' && (
                <div className={`mt-6 p-4 rounded-2xl border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                  <h4 className={`text-sm font-black uppercase tracking-widest mb-4 ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>
                    ACH Information
                  </h4>
                  <div className='grid grid-cols-2 gap-4'>
                    <SelectField 
                      label="Account Type" 
                      options={[
                        { value: 'checking', label: 'Checking' },
                        { value: 'savings', label: 'Savings' }
                      ]} 
                      theme={theme} 
                    />
                    <InputField label="Account Name" theme={theme} />
                    <InputField label="Account Number" theme={theme} />
                    <InputField label="Routing Number" theme={theme} />
                  </div>
                </div>
              )}

              {/* Check Upload Fields */}
              {paymentType === 'check' && (
                <div className={`mt-6 p-4 rounded-2xl border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                  <h4 className={`text-sm font-black uppercase tracking-widest mb-4 ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>
                    Check Upload
                  </h4>
                  <div>
                    <label className={`text-sm font-bold uppercase tracking-tighter ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>
                      Upload Check Image
                    </label>
                    <div className={`mt-2 p-6 border-2 border-dashed rounded-2xl text-center cursor-pointer transition-colors ${
                      theme === 'dark' 
                        ? 'border-white/10 hover:bg-white/5 bg-white/2' 
                        : 'border-slate-300 hover:bg-slate-50 bg-slate-50'
                    }`}>
                      <input 
                        type="file" 
                        accept="image/*,.pdf" 
                        className="hidden" 
                        id="check-upload"
                      />
                      <label htmlFor="check-upload" className="cursor-pointer block">
                        <p className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}>
                          Click to upload or drag and drop
                        </p>
                        <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                          PNG, JPG, PDF up to 10MB
                        </p>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className='flex gap-4'>
                <button className="w-full mt-6 group flex items-center justify-center gap-2 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-600/20 active:scale-95">
                  <Plus size={18} />
                  Process Payment
                </button>
                <button className="w-full mt-6 group flex items-center justify-center gap-2 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-600/20 active:scale-95">
                  <Minus size={18} />
                  Skip Payment Processing
                </button>
              </div>
            </div>
          </div>
      </Dialog.Content>
    </Dialog.Portal>
    </Dialog.Root>
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