import React, { useState } from 'react';
import { ShieldAlert, CheckCircle2, Clock, User, Briefcase, Tag, Calendar, DollarSign, Activity, ExternalLink, X, CreditCard, History, Plus, Hexagon } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';
import * as Dialog from '@radix-ui/react-dialog';
import { SelectField } from './shared/SelectField';
import { DateField } from './shared/DateField';
import { StatField } from './shared/StatField';
import { InputField } from './shared/InputField';

interface TabItem {
  id: string;
  label: string;
}

export const DashboardHeader: React.FC<{ 
  theme: 'dark' | 'light';
  activeCreditor: string;
  setActiveCreditor: (id: string) => void;
}> = ({ theme, activeCreditor, setActiveCreditor }) => {
  const topHeader = {
    debtor: "Marcus Thorne",
    business: "Thorne Architecture & Design Ltd.",
    accountNumber: "DC-99281-XT",
    clientNumber: "6512-7981-4503",
    status: "Active / Legal",
    lastUpdated: "Feb 09, 2026 - 14:30"
  };

  const getCreditorData = (id: string) => {
    switch(id) {
      case 'creditor 2': return { name: "Global Credit Corp", client: "Blue Star Logistics", balance: "$12,450.00" };
      case 'creditor 3': return { name: "Vanguard Assets", client: "Peak performance Inc", balance: "$8,900.00" };
      case 'creditor 4': return { name: "Sentinel Recovery", client: "Oceanic Enterprises", balance: "$15,200.00" };
      default: return { name: "Apex Financial Group", client: "Apex Realty Group", balance: "$10,636.67" };
    }
  };

  const currentCreditor = getCreditorData(activeCreditor);

  const accountStats = [
    { label: "Client's Name", value: currentCreditor.client },
    { label: "Creditor", value: currentCreditor.name },
    { label: "Collector", value: "Sarah Jenkins" },
    { label: "Que", value: "Priority High (Q1)" },
    { label: "Referring", value: "Internal Referral" },
    { label: "Account Type", value: "Consumer Credit" },
    { label: "Client Claim", value: currentCreditor.balance },
    { label: "Account Age", value: "142 Days" },
    { label: "Status", value: "Legal Review" },
    { label: "Originated", value: "Sept 12, 2025" },
  ];

  const tabs: TabItem[] = [
    { id: 'creditor 1', label: 'philip james'},
    { id: 'creditor 2', label: 'mark hakim'},
    { id: 'creditor 3', label: 'jason north'},
    { id: 'creditor 4', label: 'allan jones'},
  ];

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isHexagonDialogOpen, setIsHexagonDialogOpen] = useState(false);

  // Mock Payment Data
  const paymentHistory = [
    { date: 'Jan 15, 2026', amount: '$500.00', method: 'ACH Transfer', status: 'Cleared' },
    { date: 'Dec 12, 2025', amount: '$250.00', method: 'Credit Card', status: 'Cleared' },
    { date: 'Nov 10, 2025', amount: '$250.00', method: 'Credit Card', status: 'Cleared' },
  ];

  return (
    <Dialog.Root open={isPaymentModalOpen} onOpenChange={setIsPaymentModalOpen}>
      <Dialog.Root open={isHexagonDialogOpen} onOpenChange={setIsHexagonDialogOpen}>
      <div className={`w-full backdrop-blur-3xl border rounded-[25px] p-4 mb-8 shadow-2xl transition-all duration-500 overflow-hidden relative ${
        theme === 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-[#F8FAFC] border-slate-200/60 shadow-slate-200/40'
      }`}>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />
        
        {/* Row 1: Identity & Tabs */}
        <div className={`flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-6 pb-6 border-b ${
          theme === 'dark' ? 'border-white/5' : 'border-slate-100'
        }`}>
          <div className="flex items-center gap-4">
            <div>
              <h2 className={`text-4xl font-black my-4 tracking-tight leading-none ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                {topHeader.debtor}
              </h2>
              <span className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-500'}`}>{topHeader.accountNumber}</span>
            </div>
            <Tabs.Root value={activeCreditor} onValueChange={setActiveCreditor} className="w-max ">
              <Tabs.List className={`flex gap-1 p-1.5 backdrop-blur-md rounded-2xl border transition-all ${
                theme === 'dark' ? 'bg-black/20 border-white/5' : 'bg-slate-100/80 border-slate-200 shadow-inner'
              }`}>
                {tabs.map((tab) => (
                  <Tabs.Trigger
                    key={tab.id}
                    value={tab.id}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 whitespace-nowrap outline-none cursor-pointer text-lg font-black capitalize tracking-wider ${
                      activeCreditor === tab.id
                        ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/30'
                        : theme === 'dark' ? 'text-white/40 hover:bg-white/5 hover:text-white' : 'text-slate-500 hover:bg-white/50 hover:text-slate-800'
                    }`}
                  >
                    {tab.label}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
            </Tabs.Root>
          </div>

          <Dialog.Trigger asChild>
            <div className='relative cursor-pointer group transition-transform hover:scale-105'>
              <Hexagon size={110} className='text-red-500 group-hover:text-red-400 transition-colors' />
              <span className='absolute top-1/2 left-1/2 -translate-1/2 uppercase text-xs text-red-500 font-bold group-hover:text-red-400'>reported</span>
            </div>
          </Dialog.Trigger>

          <div className='flex flex-col items-end gap-2'>
            <div className={`w-max px-4 py-1.5 rounded-full text-lg font-black uppercase tracking-widest shadow-lg ${
               theme === 'dark' ? 'bg-amber-500 text-black shadow-amber-500/20' : 'bg-amber-400 text-slate-900 shadow-amber-400/20'
             }`}>
               {topHeader.status}
            </div>
            <div className="flex items-center gap-1.5">
              <span className={`text-lg font-black tracking-widest ${theme === 'dark' ? 'text-sky-500' : 'text-sky-600'}`}>
                Account Age
              </span>
              <div className="flex items-center gap-2">
                <Clock size={20} className={`${theme === 'dark' ? 'text-sky-500' : 'text-sky-600'}`} />
                <span className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{accountStats[7].value}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10">
          
          <div className="space-y-6">
            <StatField label="Client's Name" value={accountStats[0].value} theme={theme} />
            <StatField label="Creditor" value={accountStats[1].value} theme={theme} />
            <StatField label="Account #" value={topHeader.accountNumber} theme={theme} />
            <StatField label="Client #" value={topHeader.clientNumber} theme={theme} />
            <StatField label="Court Case #" value='124-49872-320' theme={theme} />
            <img src='https://aoausa.com/wp-content/uploads/2020/10/credit-scale.png' alt="Credit Scale" />
            <span className='text-3xl font-bold ml-10'>Credit score 450</span>
          </div>

          <div className="space-y-6">
            <SelectField label="Status Type" options={[{value:'open', label:'Open'}, {value:'close', label:'Close'}, {value:'legal', label:'Legal'}]} defaultValue="open" theme={theme} />
            <SelectField label="Main Status" options={[{value:'stat1', label:'Processing'}, {value:'stat2', label:'Escalated'}, {value:'stat3', label:'Final Notice'}]} defaultValue="stat1" theme={theme} />
            <SelectField label="Sub-Status" options={[{value:'sec-stat1', label:'Skip Tracing'}, {value:'sec-stat2', label:'Asset Verify'}, {value:'sec-stat3', label:'Legal Prep'}]} defaultValue="sec-stat1" theme={theme} />
            <SelectField label="Sub-sub-Status" options={[{value:'sec-stat1', label:'Field Agent'}, {value:'sec-stat2', label:'Mail Return'}, {value:'sec-stat3', label:'Call Refused'}]} defaultValue="sec-stat1" theme={theme} />
          </div>

          <div className="space-y-6">
            <SelectField label="Account Type" options={[{value:'comm', label:'Commercial'}, {value:'cons', label:'Consumer'}]} defaultValue="comm" theme={theme} />
            <SelectField label="Account Sub-Type" options={[{value:'1', label:'Medical'}, {value:'2', label:'Retail'}, {value:'3', label:'Banking'}]} defaultValue="1" theme={theme} />
            <SelectField label="Primary Collector" options={[{value:'john', label:'John Doe'}, {value:'jane', label:'Sarah Jenkins'}]} defaultValue="jane" theme={theme} />
            <SelectField label="Co-Collector" options={[{value:'jane', label:'Jane Smith'}, {value:'john', label:'John Doe'}]} defaultValue="jane" theme={theme} />
            <SelectField label="Agreement Arrangement" options={[]} defaultValue="jane" theme={theme} />
            <SelectField label="Last Date of Service" options={[]} defaultValue="jane" theme={theme} />
          </div>

          <div className="space-y-6">
            <DateField label="Charged Off" theme={theme} />
            <DateField label="Referring" theme={theme} />
            <DateField label="Originated" theme={theme} />
            <DateField label="Next Work" theme={theme} />
            <DateField label="1st Delinq" theme={theme} />
            <DateField label="Statute of Limitation" theme={theme} />
          </div>

          <div className="flex flex-col gap-3">
            <div className={`py-2 px-4 rounded-2xl border flex flex-col gap-1 transition-all hover:scale-[1.02] ${
              theme === 'dark' ? 'bg-blue-600/40 border-blue-500/20' : 'bg-blue-50/50 border-blue-100 shadow-sm'
            }`}>
              <div className="flex justify-between items-center">
                <span className={`text-[10px] font-black uppercase tracking-wider ${theme === 'dark' ? 'text-blue-300' : 'text-blue-700'}`}>Total Balance</span>
              </div>
              <span className={`text-xl font-black ${theme === 'dark' ? 'text-white' : 'text-blue-900'}`}>{currentCreditor.balance}</span>
            </div>

            <div className={`py-2 px-4 rounded-2xl border flex flex-col gap-1 transition-all hover:scale-[1.02] ${
              theme === 'dark' ? 'bg-slate-600/60 border-blue-500/20' : 'bg-blue-50/50 border-blue-100 shadow-sm'
            }`}>
              <span className={`text-[10px] font-black uppercase tracking-wider ${theme === 'dark' ? 'text-blue-300' : 'text-blue-700'}`}>Principal</span>
              <span className={`text-lg font-black ${theme === 'dark' ? 'text-white' : 'text-blue-900'}`}>
                {activeCreditor === 'creditor 1' ? '$3,507.76' : activeCreditor === 'creditor 2' ? '$4,200.00' : '$2,850.00'}
              </span>
            </div>
            
            <div className={`py-2 px-4 rounded-2xl border flex flex-col gap-1 transition-all hover:scale-[1.02] ${
              theme === 'dark' ? 'bg-slate-600/60 border-blue-500/20' : 'bg-red-50/50 border-red-100 shadow-sm'
            }`}>
              <span className={`text-[10px] font-black uppercase tracking-wider ${theme === 'dark' ? 'text-blue-300' : 'text-red-700'}`}>Interest</span>
              <span className={`text-lg font-black ${theme === 'dark' ? 'text-white' : 'text-red-900'}`}>
                {activeCreditor === 'creditor 1' ? '$6,076.59' : activeCreditor === 'creditor 2' ? '$1,150.00' : '$840.00'}
              </span>
            </div>

            <div className={`py-2 px-4 rounded-2xl border flex flex-col gap-1 transition-all hover:scale-[1.02] ${
              theme === 'dark' ? 'bg-slate-600/60 border-blue-500/20' : 'bg-teal-50/50 border-teal-100 shadow-sm'
            }`}>
              <span className={`text-[10px] font-black uppercase tracking-wider ${theme === 'dark' ? 'text-blue-300' : 'text-teal-700'}`}>Costs/Fees</span>
              <span className={`text-lg font-black ${theme === 'dark' ? 'text-white' : 'text-teal-900'}`}>
                {activeCreditor === 'creditor 1' ? '$1,052.32' : '$450.00'}
              </span>
            </div>

            {/* Payments Trigger */}
            <Dialog.Trigger asChild>
              <div className={`py-2 px-4 rounded-2xl border flex flex-col gap-1 transition-all hover:scale-[1.02] cursor-pointer ${
                theme === 'dark' ? 'bg-slate-600/60 border-blue-500/20' : 'bg-orange-50/50 border-orange-100 shadow-sm'
              }`}>
                <div className="flex justify-between items-center">
                  <span className={`text-[10px] font-black uppercase tracking-wider ${theme === 'dark' ? 'text-blue-300' : 'text-orange-700'}`}>Payments</span>
                  <ExternalLink size={18} className='text-gray-300' />
                </div>
                <span className={`text-lg font-black ${theme === 'dark' ? 'text-white' : 'text-orange-900'}`}>$1,200.00</span>
              </div>
            </Dialog.Trigger>

            {/* Make Payments Trigger */}
            <Dialog.Trigger asChild>
              <div className={`py-4 px-4 rounded-2xl border flex flex-col gap-1 transition-all hover:scale-[1.02] cursor-pointer ${
                theme === 'dark' ? 'bg-yellow-500 border-orange-500/20' : 'bg-yellow-500 border-blue-100 shadow-sm'
              }`}>
                <div className="flex justify-center items-center">
                  <span className={`text-2xl font-extrabold tracking-wider text-[#092B9C]`}>Make Payments</span>
                </div>
              </div>
            </Dialog.Trigger>

            <div className={`mt-2 p-3 rounded-xl border-t flex justify-between items-center ${theme === 'dark' ? 'border-white/5' : 'border-slate-100'}`}>
               <span className={`text-md font-black tracking-widest ${theme === 'dark' ? 'text-white/30' : 'text-slate-600'}`}>Can Settle</span>
               <span className={`text-md font-black ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>$7,445.67</span>
            </div>

            <div className='mt-2 p-3 rounded-xl flex justify-between items-center'>
               <span className={`text-md font-black tracking-widest ${theme === 'dark' ? 'text-white/30' : 'text-slate-600'}`}>Linked Balance</span>
               <span className={`text-md font-black ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>$10,000.00</span>
            </div>

            <div className={`px-4 py-2 border ${theme === 'dark' ? 'border-red-500/60 hover:bg-white/10' : 'border-red-500/70 hover:bg-slate-50'} rounded-xl flex justify-between items-center`}>
               <span className={`text-md  tracking-widest ${theme === 'dark' ? 'text-white' : 'text-slate-600'}`}>John Doe</span>
               <span className={`text-md font-black ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>#125438-0000</span>
            </div>
            <div className={`px-4 py-2 border ${theme === 'dark' ? 'border-red-500/60 hover:bg-white/10' : 'border-red-500/70 hover:bg-slate-50'} rounded-xl flex justify-between items-center`}>
               <span className={`text-md  tracking-widest ${theme === 'dark' ? 'text-white' : 'text-slate-600'}`}>Jane Smith</span>
               <span className={`text-md font-black ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>#125438-0000</span>
            </div>

          </div>
        </div>
      </div>

      {/* PAYMENT HISTORY POPUP */}
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
                  <History className="text-blue-500" size={24} />
                </div>
                <div>
                  <Dialog.Title className={`text-xl font-black uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    Payment History
                  </Dialog.Title>
                  <p className={`text-[10px] font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-white/40' : 'text-slate-400'}`}>
                    Account: {topHeader.accountNumber}
                  </p>
                </div>
              </div>
              <Dialog.Close className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'hover:bg-white/5 text-white/40' : 'hover:bg-slate-100 text-slate-400'}`}>
                <X size={20} />
              </Dialog.Close>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className={`rounded-2xl border overflow-hidden ${theme === 'dark' ? 'border-white/5' : 'border-slate-100'}`}>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className={theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}>
                      <th className="p-4 text-[10px] font-black uppercase tracking-widest text-blue-500">Post Date</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-widest text-blue-500">Method</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-widest text-blue-500 text-right">Amount</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-widest text-blue-500 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${theme === 'dark' ? 'divide-white/5' : 'divide-slate-100'}`}>
                    {paymentHistory.map((item, index) => (
                      <tr key={index} className="transition-colors hover:bg-blue-500/5">
                        <td className={`p-4 text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}>{item.date}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <CreditCard size={14} className="text-slate-400" />
                            <span className={`text-xs font-black uppercase ${theme === 'dark' ? 'text-white/60' : 'text-slate-500'}`}>{item.method}</span>
                          </div>
                        </td>
                        <td className="p-4 text-right text-sm font-black text-green-500">{item.amount}</td>
                        <td className="p-4 text-center">
                          <span className={`px-2 py-1 rounded text-[10px] font-black uppercase tracking-tighter ${
                            item.status === 'Cleared' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Action Button */}
              <button className="w-full mt-6 group flex items-center justify-center gap-2 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-600/20 active:scale-95">
                <Plus size={18} />
                New Payment Transaction
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>

      {/* HEXAGON DIALOG - Account Status */}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-md z-[999] animate-in fade-in duration-300" />
        <Dialog.Content className={`fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90vw] max-w-2xl z-[1000] outline-none animate-in zoom-in-95 duration-300`}>
          <div className={`rounded-[30px] border shadow-2xl overflow-hidden ${theme === 'dark' ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'}`}>
            {/* Modal Header */}
            <div className={`p-6 border-b flex justify-between items-center ${theme === 'dark' ? 'border-white/5' : 'border-slate-100'}`}>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-500/10 rounded-lg">
                  <Hexagon className="text-red-500" size={24} />
                </div>
                <div>
                  <Dialog.Title className={`text-xl font-black uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    Account Status
                  </Dialog.Title>
                  <p className={`text-[10px] font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-white/40' : 'text-slate-400'}`}>
                    Account: {topHeader.accountNumber}
                  </p>
                </div>
              </div>
              <Dialog.Close className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'hover:bg-white/5 text-white/40' : 'hover:bg-slate-100 text-slate-400'}`}>
                <X size={20} />
              </Dialog.Close>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="space-y-6">
                <SelectField 
                  label="Account Status" 
                  options={[{value:'open', label:'Open'}, {value:'closed', label:'Closed'}, {value:'legal', label:'Legal'}, {value:'charged-off', label:'Charged Off'}]} 
                  defaultValue="open" 
                  theme={theme} 
                />
                <SelectField 
                  label="Compliance Condition" 
                  options={[{value:'compliant', label:'Compliant'}, {value:'non-compliant', label:'Non-Compliant'}, {value:'pending', label:'Pending Review'}]} 
                  defaultValue="compliant" 
                  theme={theme} 
                />
                <SelectField 
                  label="Special Comment" 
                  options={[{value:'none', label:'None'}, {value:'bankruptcy', label:'Bankruptcy Filed'}, {value:'dispute', label:'Under Dispute'}, {value:'settlement', label:'Settlement Pending'}]} 
                  defaultValue="none" 
                  theme={theme} 
                />
                <SelectField 
                  label="Consumer Information Indicator" 
                  options={[{value:'active', label:'Active Consumer'}, {value:'inactive', label:'Inactive'}, {value:'deceased', label:'Deceased'}, {value:'military', label:'Military Active'}]} 
                  defaultValue="active" 
                  theme={theme} 
                />
                <SelectField 
                  label="ECOA Code" 
                  options={[]}
                  theme={theme} 
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                <Dialog.Close asChild>
                  <button className={`flex-1 py-3 rounded-2xl font-black uppercase tracking-widest transition-all ${theme === 'dark' ? 'bg-white/5 text-white hover:bg-white/10' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                    Cancel
                  </button>
                </Dialog.Close>
                <button className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-600/20 active:scale-95">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
      </Dialog.Root>
    </Dialog.Root>
  );
};
