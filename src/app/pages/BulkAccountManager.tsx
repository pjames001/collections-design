import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Layers, Filter, PlayCircle, ClipboardList, UserPlus, Zap, SlidersHorizontal } from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import { DateField } from '../components/shared/DateField';
import { SelectField } from '../components/shared/SelectField';
import { InputField } from '../components/shared/InputField';
import { CheckboxField } from '../components/shared/CheckboxField';
import FilterComponent from '../components/shared/Filter';
import DynamicTable from '../components/shared/DynamicTable';

export const BulkAccountManagement = () => {

  const [activeNav, setActiveNav] = useState('crm');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);

  // Mock filtered accounts data
  const accounts: Account[] = [
  {
    id: 'ACC-001',
    nextWorkDate: '03/01/2026',
    accountNumber: 'AN-10042',
    debtorName: 'John Martinez',
    clientName: 'Allied Health',
    collector: 'Sarah K.',
    claimStatus: 'Active',
    legalStanding: 'Current',
    balanceDue: '$1,250.00',
    originatedDate: '01/15/2025',
    payment: {
      date: '02/18/2026',
      checkNumber: '#9902',
      description: 'Partial Payment',
      agency: '$50.00',
      client: '$450.00',
      convenienceFees: '$25.00',
      agencyDisb: '$150.00',
      clientDisb: '$100.00',
      attorneyDisb: '$100.00',
    },
  },
  {
    id: 'ACC-002',
    nextWorkDate: '03/05/2026',
    accountNumber: 'AN-10078',
    debtorName: 'Linda Chen',
    clientName: 'Riverside Medical',
    collector: 'Tom B.',
    claimStatus: 'Overdue',
    legalStanding: 'Delinquent',
    balanceDue: '$3,800.00',
    originatedDate: '06/10/2024',
    // payment: {
    //   date: '01/30/2026',
    //   checkNumber: '#8811',
    //   description: 'Full Payment',
    //   agency: '$200.00',
    //   client: '$1,200.00',
    //   convenienceFees: '$40.00',
    //   agencyDisb: '$380.00',
    //   clientDisb: '$250.00',
    //   attorneyDisb: '$180.00',
    // },
  },
];

  const columns = [
    { key: 'nextWorkDate',   title: 'Next Work Date' },
    { key: 'accountNumber',  title: 'Account #' },
    { key: 'debtorName',     title: 'Debtor Name' },
    { key: 'clientName',     title: 'Client Name' },
    { key: 'collector',      title: 'Collector' },
    {
      key: 'claimStatus',
      title: 'Claim Status',
      render: (value, _row, theme) => {
        const status = String(value);
        const isDark = theme === 'dark';
        const colors =
          status === 'Active'   ? isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100/50 text-green-700'
          : status === 'Overdue' ? isDark ? 'bg-red-500/20 text-red-400'    : 'bg-red-100/50 text-red-700'
          :                        isDark ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-100/50 text-amber-700';
        return (
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter ${colors}`}>
            {status}
          </span>
        );
      },
    },
    { key: 'legalStanding',  title: 'Legal Standing' },
    { key: 'balanceDue',     title: 'Balance Due' },
    { key: 'originatedDate', title: 'Originated Date' },
  ];

  // const expandedFields: ExpandedFieldDef<Account>[] = [
  //   { key: 'payment.date',            label: 'Date' },
  //   { key: 'payment.checkNumber',     label: 'ID/Check Number' },
  //   { key: 'payment.description',     label: 'Description' },
  //   { key: 'payment.agencyAmount',    label: 'Agency' },
  //   { key: 'payment.clientAmount',    label: 'Client' },
  //   { key: 'payment.convenienceFees', label: 'Convenience Fees' },
  //   { key: 'payment.agencyDisb',      label: 'Agency',   color: 'text-green-500',  separator: true },
  //   { key: 'payment.clientDisb',      label: 'Client',   color: 'text-yellow-500' },
  //   { key: 'payment.attorneyDisb',    label: 'Attorney', color: 'text-blue-400' },
  //   {
  //     key: 'id',
  //     label: 'View Check',
  //     color: 'text-red-400',
  //     render: (_value, row, _theme) => (
  //       <a href={`/checks/${row.id}`} className="underline text-blue-400 text-xs">Open</a>
  //     ),
  //   },
  // ];

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <Dialog.Root open={isFiltersModalOpen} onOpenChange={setIsFiltersModalOpen}>
    <div className={`p-8 pl-24 space-y-8 animate-in fade-in duration-700 custom-scrollbar ${
        theme === 'dark' ? 'bg-slate-950 border-white/10' : 'bg-white border-slate-200/60 shadow-slate-200/40'
      }`}>
      <Sidebar activeTab={activeNav} setActiveTab={setActiveNav} theme={theme} toggleTheme={toggleTheme} />
      {/* 1. TOP FILTER SECTION */}
      <div className={`p-8 rounded-[35px] border ${
        theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-transparent border-slate-300 shadow-lg shadow-slate-800/40'
      }`}>
        <div className="flex justify-between items-start gap-3">
          <div className='flex items-center gap-3'>
            <div className="p-2 bg-blue-500/10 rounded-xl"><Filter size={20} className="text-blue-500" /></div>
            <h3 className={`text-xl font-black uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Filter Accounts</h3>
          </div>
          <Dialog.Trigger asChild>
            <button className="flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-600/20">
              <SlidersHorizontal size={18} />
              Advanced Filters
            </button>
          </Dialog.Trigger>
        </div>
      </div>

      {/* 2. BULK ACTIONS SECTION */}
      <div className={`p-10 rounded-[35px] border ${
        theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-transparent border-slate-300 shadow-lg shadow-slate-800/40'
      }`}>
        <div className="flex items-center justify-between mb-10 gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-600/10 rounded-xl"><Layers size={24} className="text-blue-600" /></div>
            <div>
              <h3 className={`text-xl font-black uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Bulk Account Updates</h3>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter mt-1">Changes apply to all matching accounts</p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-600/20 active:scale-[0.98] whitespace-nowrap">
            <PlayCircle size={18} />
            Execute Update
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Group: Core Logic & Selection */}
          <div className="space-y-6">
            <h4 className="text-[10px] text-blue-500 font-black uppercase tracking-[0.2em] flex items-center gap-2">
              <Zap size={14} /> Execution Scope
            </h4>
            <div className="flex gap-4 items-end">
              <SelectField label="Quantity" options={[{label: "All", value: "all"}, {label: "Number", value: "number"}, {label: "Percentage", value: "percentage"}]} theme={theme} />
              <InputField label="Quantity" placeholder="0" theme={theme} />
            </div>
            <SelectField label="Set Account Status" options={[]} theme={theme} />
            <div className='flex items-start gap-6'>
              <div className="w-24"><SelectField label="Add/Remove" options={[{label: "Add", value: "add"}, {label: "Remove", value: "remove"}]} theme={theme} /></div>
              <div className="flex flex-col gap-2 w-full">
                <label className={`text-md tracking-wider ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Account Notes</label>
                <textarea className={`w-full h-24 p-4 rounded-2xl border outline-none text-sm font-medium transition-colors ${
                  theme === 'dark' ? 'bg-white/5 border-white/10 text-white placeholder-white/30' : 'bg-white border-gray-400 text-slate-700 placeholder-slate-400'
                }`} placeholder="Append note to all selected..." />
              </div>
            </div>
            <div className='grid grid-cols-4 gap-4'>
               <span className={`text-md  self-end font-medium ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Principal</span>
               <InputField label="Advanced %" placeholder="0.00" theme={theme} />
               <InputField label="Attorney %" placeholder="0.00" theme={theme} />
               <InputField label="Agency %" placeholder="0.00" theme={theme} />

               <span className={`text-md  self-end font-medium ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Interest</span>
               <InputField label="" placeholder="0.00" theme={theme} />
               <InputField label="" placeholder="0.00" theme={theme} />
               <InputField label="" placeholder="0.00" theme={theme} />

               <span className={`text-md  self-end font-medium ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Costs</span>
               <InputField label="" placeholder="0.00" theme={theme} />
               <InputField label="" placeholder="0.00" theme={theme} />
               <InputField label="" placeholder="0.00" theme={theme} />

               <span className={`text-md  self-end font-medium ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Attorney Fees</span>
               <InputField label="" placeholder="0.00" theme={theme} />
               <InputField label="" placeholder="0.00" theme={theme} />
               <InputField label="" placeholder="0.00" theme={theme} />

               <span className={`text-md  self-end font-medium ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Over Payment</span>
               <InputField label="" placeholder="0.00" theme={theme} />
               <InputField label="" placeholder="0.00" theme={theme} />
               <InputField label="" placeholder="0.00" theme={theme} />
            </div>
          </div>

          {/* Group: Assignments & Queues */}
          <div className="space-y-6">
            <h4 className="text-[10px] text-blue-500 font-black uppercase tracking-[0.2em] flex items-center gap-2">
              <UserPlus size={14} /> Assignments
            </h4>
            <SelectField label="Assign to Collector" options={[]} theme={theme} />
            <SelectField label="Assign to Queue" options={[]} theme={theme} />
            <SelectField label="Assign to Client" options={[]} theme={theme} />
            <SelectField label="Assign to Referring" options={[]} theme={theme} />
            <SelectField label="Assign to Sales Rep" options={[]} theme={theme} />
            <div className="grid grid-cols-2 gap-4">
              <InputField label="Account Age" placeholder="Days" theme={theme} />
              {/* <div className="flex flex-col gap-2">
                <label className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Next Work</label>
                <input type="date" className={`w-full p-2.5 rounded-xl border text-sm outline-none font-medium ${
                  theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-700'
                }`} />
              </div> */}
              <DateField label="Next Work Date" theme={theme} />
            </div>
            <CheckboxField label="Clear Next Work Dates" theme={theme} />
          </div>

          {/* Group: Communication & Workflow */}
          <div className="space-y-6">
            <h4 className="text-[10px] text-blue-500 font-black uppercase tracking-[0.2em] flex items-center gap-2">
              <ClipboardList size={14} /> Workflow & Compliance
            </h4>
            <div className="grid grid-cols-2 gap-4">
               <SelectField label="Generate" options={[]} theme={theme} />
               <SelectField label="File Type" options={[]} theme={theme} />
            </div>
            <SelectField label="Email Notification" options={[]} theme={theme} />
            <SelectField label="Add Reminder" options={[]} theme={theme} />
            <div className="flex gap-4">
              <div className="w-52"><SelectField label="Add/Remove" options={[{label: "Add", value: "add"}, {label: "Remove", value: "remove"}]} theme={theme} /></div>
              <SelectField label="Action Codes" options={[]} theme={theme} />
            </div>
            <SelectField label="Status Detail" options={[]} theme={theme} />
            <div className="flex gap-4">
              <div className="w-52"><SelectField label="Add/Remove" options={[{label: "Add", value: "add"}, {label: "Remove", value: "remove"}]} theme={theme} /></div>
              <SelectField label="Flow Letter" options={[]} theme={theme} />
            </div>
            <SelectField label="Credit Bureau Reporting" options={[]} theme={theme} />
            <div className="flex gap-4 items-end">
              <div className="flex-1"><SelectField label="Set" options={[]} theme={theme} /></div>
              <div className="flex-1"><InputField label="To" placeholder="..." theme={theme} /></div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. FILTER RESULTS SECTION */}
      <DynamicTable 
        theme={theme} 
        data={accounts} 
        columns={columns}
        expandable={false}
        icon={<ClipboardList size={24} className="text-green-500" />}
        title="Filter Results"
        // expandedFields={expandedFields}
        rowKey="id"
        onExport={() => console.log('export')}
        onEmailResults={() => console.log('email')}
        onBulkAction={(rows) => console.log('bulk action on', rows)} 
      />

    </div>

    {/* FILTERS MODAL */}
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-md z-[999] animate-in fade-in duration-300" />
      <Dialog.Content className={`fixed top-1/2 left-1/2 -translate-1/2  z-[1000] outline-none animate-in zoom-in-95 duration-300`}>
        <FilterComponent theme={theme} />
      </Dialog.Content>
    </Dialog.Portal>
    </Dialog.Root>
  );
};

// Internal Helper Components
// const SelectField: React.FC<{ label: string; options: any[]; theme: string; containerClassName?: string }> = ({ label, theme, containerClassName }) => (
//   <div className={`flex flex-col gap-2 ${containerClassName || ''}`}>
//     {label && <label className="text-xs text-slate-500 font-bold uppercase tracking-tighter">{label}</label>}
//     <select className={`w-full py-2.5 px-4 rounded-xl border text-sm outline-none cursor-pointer font-medium transition-colors ${
//       theme === 'dark' ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
//     }`}>
//       <option>Select option...</option>
//     </select>
//   </div>
// );

// const InputField: React.FC<{ label: string; placeholder?: string; theme: string }> = ({ label, placeholder, theme }) => (
//   <div className="flex flex-col gap-2 w-full">
//     <label className="text-xs text-slate-500 font-bold uppercase tracking-tighter">{label}</label>
//     <input type="text" placeholder={placeholder} className={`w-full py-2.5 px-4 rounded-xl border text-sm outline-none font-medium transition-colors ${
//       theme === 'dark' ? 'bg-white/5 border-white/10 text-white placeholder-white/30 hover:bg-white/10' : 'bg-white border-slate-200 text-slate-700 placeholder-slate-400 hover:border-slate-300'
//     }`} />
//   </div>
// );

// const CheckboxField: React.FC<{ label: string; theme: string }> = ({ label, theme }) => (
//   <label className="flex items-center gap-3 cursor-pointer group py-2 transition-colors hover:opacity-80">
//     <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
//     <span className={`text-xs font-bold uppercase tracking-tighter ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{label}</span>
//   </label>
// );