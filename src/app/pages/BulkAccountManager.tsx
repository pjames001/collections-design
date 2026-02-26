import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Layers, Filter, PlayCircle, ClipboardList, UserPlus, Zap, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import { FromToDate } from '../components/shared/FromToDate';
import { DateField } from '../components/shared/DateField';
import { MultiSearchSelect } from '../components/shared/MultiSearchSelect';
import { SelectField } from '../components/shared/SelectField';
import { InputField } from '../components/shared/InputField';
import { CheckboxField } from '../components/shared/CheckboxField';
import { ChevronRight, Download, Mail } from 'lucide-react';

export const BulkAccountManagement = () => {

  const [activeNav, setActiveNav] = useState('crm');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
  const [filtersApplied, setFiltersApplied] = useState(false);
  const [selectedAccounts, setSelectedAccounts] = useState<Set<string>>(new Set());

  // Mock filtered accounts data
  const filteredAccounts = [
    { id: '1', accountNumber: 'ACC-001', debtorName: 'John Doe', clientName: 'Acme Corporation', collector: 'John Smith', claimStatus: 'Active', legalStanding: 'No Legal', balanceDue: '$12,450.00', nextWorkDate: '2/25/2026', originatedDate: '1/15/2026' },
    { id: '2', accountNumber: 'ACC-002', debtorName: 'Jane Smith', clientName: 'Tech Industries Inc', collector: 'Sarah Johnson', claimStatus: 'Overdue', legalStanding: 'In Litigation', balanceDue: '$8,920.50', nextWorkDate: '2/24/2026', originatedDate: '12/20/2025' },
    { id: '3', accountNumber: 'ACC-003', debtorName: 'Bob Wilson', clientName: 'Global Solutions LLC', collector: 'Mike Davis', claimStatus: 'Pending', legalStanding: 'No Legal', balanceDue: '$15,680.00', nextWorkDate: '2/26/2026', originatedDate: '1/01/2026' },
    { id: '4', accountNumber: 'ACC-004', debtorName: 'Alice Brown', clientName: 'Advanced Systems Co', collector: 'Emily Wilson', claimStatus: 'Active', legalStanding: 'Judgment', balanceDue: '$5,240.75', nextWorkDate: '2/27/2026', originatedDate: '2/01/2026' },
    { id: '5', accountNumber: 'ACC-005', debtorName: 'Charlie Davis', clientName: 'Innovation Partners', collector: 'John Smith', claimStatus: 'Active', legalStanding: 'No Legal', balanceDue: '$22,105.25', nextWorkDate: '2/28/2026', originatedDate: '11/15/2025' },
  ];

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleApplyFilters = () => {
    setFiltersApplied(true);
    setIsFiltersModalOpen(false);
  };

  const toggleAccountSelection = (accountId: string) => {
    const newSelection = new Set(selectedAccounts);
    if (newSelection.has(accountId)) {
      newSelection.delete(accountId);
    } else {
      newSelection.add(accountId);
    }
    setSelectedAccounts(newSelection);
  };

  const toggleSelectAll = () => {
    if (selectedAccounts.size === filteredAccounts.length) {
      setSelectedAccounts(new Set());
    } else {
      setSelectedAccounts(new Set(filteredAccounts.map(acc => acc.id)));
    }
  };

  return (
    <Dialog.Root open={isFiltersModalOpen} onOpenChange={setIsFiltersModalOpen}>
    <div className={`p-8 pl-24 space-y-8 animate-in fade-in duration-700 custom-scrollbar ${
        theme === 'dark' ? 'bg-slate-950 border-white/10' : 'bg-[#e6f0fa] border-slate-200/60 shadow-slate-200/40'
      }`}>
      <Sidebar activeTab={activeNav} setActiveTab={setActiveNav} theme={theme} toggleTheme={toggleTheme} />
      {/* 1. TOP FILTER SECTION */}
      <div className={`p-8 rounded-[35px] border-2 ${
        theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-[#bbdcfd] border-slate-200 shadow-xl shadow-slate-200/40'
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
      <div className={`p-10 rounded-[35px] border-2 ${
        theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-[#bbdcfd] border-slate-200 shadow-xl shadow-slate-200/40'
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
                  theme === 'dark' ? 'bg-white/5 border-white/10 text-white placeholder-white/30' : 'bg-white border-slate-200 text-slate-700 placeholder-slate-400'
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
      {filtersApplied && (
        <div className={`rounded-[35px] border-2 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500 ${
          theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-[#bbdcfd] border-slate-200 shadow-xl shadow-slate-200/40'
        }`}>
          {/* Results Header */}
          <div className={`px-10 py-6 border-b ${theme === 'dark' ? 'border-white/5 bg-slate-800/50' : 'border-slate-200 bg-sky-50/50'}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/10 rounded-xl"><ClipboardList size={24} className="text-green-500" /></div>
                <div>
                  <h3 className={`text-xl font-black uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Filter Results</h3>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter mt-1">{filteredAccounts.length} accounts match your criteria</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${
                  theme === 'dark' ? 'bg-white/5 hover:bg-white/10 text-white' : 'bg-white hover:bg-slate-50 text-slate-700'
                }`}>
                  <Download size={16} />
                  Export
                </button>
                <button className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${
                  theme === 'dark' ? 'bg-white/5 hover:bg-white/10 text-white' : 'bg-white hover:bg-slate-50 text-slate-700'
                }`}>
                  <Mail size={16} />
                  Email Results
                </button>
              </div>
            </div>
          </div>

          {/* Results Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${theme === 'dark' ? 'border-white/5 bg-white/2' : 'border-slate-200 bg-white/50'}`}>
                  <th className="px-6 py-4 text-left">
                    <input
                      type="checkbox"
                      checked={selectedAccounts.size === filteredAccounts.length}
                      onChange={toggleSelectAll}
                      className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                  </th>
                  <th className={`px-6 py-4 text-left text-xs font-black uppercase tracking-widest ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Next Work Date</th>
                  <th className={`px-6 py-4 text-left text-xs font-black uppercase tracking-widest ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Account Number</th>
                  <th className={`px-6 py-4 text-left text-xs font-black uppercase tracking-widest ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Debtor Name</th>
                  <th className={`px-6 py-4 text-left text-xs font-black uppercase tracking-widest ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Client Name</th>
                  <th className={`px-6 py-4 text-left text-xs font-black uppercase tracking-widest ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Collector</th>
                  <th className={`px-6 py-4 text-left text-xs font-black uppercase tracking-widest ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Claim Status</th>
                  <th className={`px-6 py-4 text-left text-xs font-black uppercase tracking-widest ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Legal Standing</th>
                  <th className={`px-6 py-4 text-left text-xs font-black uppercase tracking-widest ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Balance Due</th>
                  <th className={`px-6 py-4 text-left text-xs font-black uppercase tracking-widest ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Originated Date</th>
                  
                </tr>
              </thead>
              <tbody>
                {filteredAccounts.map((account, idx) => (
                  <tr
                    key={account.id}
                    className={`border-b transition-colors ${
                      theme === 'dark'
                        ? `border-white/5 ${selectedAccounts.has(account.id) ? 'bg-blue-500/10' : idx % 2 === 0 ? 'bg-white/2' : 'hover:bg-white/5'}`
                        : `border-slate-200 ${selectedAccounts.has(account.id) ? 'bg-blue-100/30' : idx % 2 === 0 ? 'bg-white/40' : 'hover:bg-white/60'}`
                    }`}
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedAccounts.has(account.id)}
                        onChange={() => toggleAccountSelection(account.id)}
                        className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                      />
                    </td>
                    <td className={`px-6 py-4 text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{account.nextWorkDate}</td>
                    <td className={`px-6 py-4 text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{account.accountNumber}</td>
                    <td className={`px-6 py-4 text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{account.debtorName}</td>
                    <td className={`px-6 py-4 text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{account.clientName}</td>
                    <td className={`px-6 py-4 text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{account.collector}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter ${
                        account.claimStatus === 'Active'
                          ? theme === 'dark'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-green-100/50 text-green-700'
                          : account.claimStatus === 'Overdue'
                          ? theme === 'dark'
                            ? 'bg-red-500/20 text-red-400'
                            : 'bg-red-100/50 text-red-700'
                          : theme === 'dark'
                          ? 'bg-amber-500/20 text-amber-400'
                          : 'bg-amber-100/50 text-amber-700'
                      }`}>
                        {account.claimStatus}
                      </span>
                    </td>
                    <td className={`px-6 py-4 text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{account.legalStanding}</td>
                    <td className={`px-6 py-4 text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{account.balanceDue}</td>
                    <td className={`px-6 py-4 text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{account.originatedDate}</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Results Footer */}
          <div className={`px-10 py-6 border-t flex items-center justify-between ${theme === 'dark' ? 'border-white/5 bg-white/2' : 'border-slate-200 bg-white/30'}`}>
            <div className={`text-xs font-bold uppercase tracking-tighter ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              {selectedAccounts.size} of {filteredAccounts.length} selected
            </div>
            <button className={`px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${
              selectedAccounts.size > 0
                ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20 hover:bg-blue-700'
                : theme === 'dark'
                ? 'bg-white/5 text-slate-500 cursor-not-allowed'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
            disabled={selectedAccounts.size === 0}
            >
              Apply Bulk Actions
            </button>
          </div>
        </div>
      )}
    </div>

    {/* FILTERS MODAL */}
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-md z-[999] animate-in fade-in duration-300" />
      <Dialog.Content className={`fixed top-1/2 left-1/2 -translate-1/2  z-[1000] outline-none animate-in zoom-in-95 duration-300`}>
        <div className={`w-[90vw] max-w-9xl h-[90vh] overflow-hidden rounded-[25px] border flex flex-col ${theme === 'dark' ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200 shadow-2xl'}`}>
        
        {/* TOP BAR */}
        <div className={`px-8 py-4 border-b border-white/5 flex justify-between items-center ${theme === 'dark' ? 'bg-slate-500/5' : 'bg-sky-100'}`}>
          <div>
            <h2 className={`text-2xl font-black uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}>Advanced Parameters</h2>
            <p className="text-[10px] font-black uppercase tracking-widest text-blue-500">Fine-tune your search results</p>
          </div>

          <div className='flex items-end gap-4'>
            <SelectField label="Pre-Defined Filters" options={[]} theme={theme} />
            <InputField label="Name" placeholder="" theme={theme} type="number" />
            <button className="px-6 py-3 w-72 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-blue-600/20">
              Save Filter
            </button>
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-xs transition-all hover:bg-white/5 text-slate-400">
              <RotateCcw size={16} /> Clear All
            </button>
            <button onClick={handleApplyFilters} className="px-8 py-3 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all">
              Apply Filters
            </button>
          </div>
        </div>

        {/* SCROLLABLE FILTER CONTENT */}
        <div className={`flex-1 overflow-y-auto p-10 space-y-12 ${theme === 'dark' ? 'bg-slate-900/50' : 'bg-[#bbdcfd]'}`}>
          
          {/* GROUP 1: Entity & Status (Multi-select Area) */}
          <section className="space-y-6">
            <div className='flex justify-between items-center'>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 flex items-center gap-2">
                <div className="h-1 w-4 bg-blue-500 rounded-full" /> Assignment & Status
              </h4>
              <div>
                <SelectField label="Open Status" options={[]} theme={theme} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <MultiSearchSelect label="Collectors" theme={theme} />
              <MultiSearchSelect label="Co-Collectors" theme={theme} />
              <MultiSearchSelect label="Creditors" theme={theme} />
              <MultiSearchSelect label="Clients" theme={theme} />
              <MultiSearchSelect label="Action Codes" theme={theme} />
              <MultiSearchSelect label="Legal Status" theme={theme} />
              <MultiSearchSelect label="Main Status" theme={theme} />
              <MultiSearchSelect label="Sub-Status" theme={theme} />
              <MultiSearchSelect label="Sub-Sub-Status" theme={theme} />
              <MultiSearchSelect label="Queues" theme={theme} />
              <MultiSearchSelect label="Collection Status" theme={theme} />
              <MultiSearchSelect label="Sales Rep" theme={theme} />
              <MultiSearchSelect label="State/Province" theme={theme} />
              <SelectField label="Account Type" options={[]} theme={theme} />
              <SelectField label="Email Type" options={[]} theme={theme} />
              <SelectField label="Letter Flows" options={[]} theme={theme} />
              <SelectField label="Generated Documents" options={[]} theme={theme} />
              <SelectField label="Skip Trace Type" options={[]} theme={theme} />
              <SelectField label="Debtor Type" options={[]} theme={theme} />
            </div>
          </section>

          {/* GROUP 2: CONSENT & RECOVERY STATUS */}
          <section className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-green-500 flex items-center gap-2">
              <div className="h-1 w-4 bg-green-500 rounded-full" /> Consent & Compliance
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Specialized Card for Consents */}
              <div className={`px-6 py-3 rounded-[15px] border space-y-4 ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                <CheckboxField label="Email Consent" theme={theme} />
                <CheckboxField label="Address Consent" theme={theme} />
                <CheckboxField label="Phone Voice Consent" theme={theme} />
                <CheckboxField label="Phone SMS Consent" theme={theme} />
              </div>

              {/* Specialized Card for Reminders */}
              <div className={`px-6 py-3 rounded-[15px] border space-y-4 ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                <CheckboxField label="Cell Voice Consent" theme={theme} />
                <CheckboxField label="Cell SMS Consent" theme={theme} />
                <CheckboxField label="Work Phone Voice Consent" theme={theme} />
                <CheckboxField label="Work Phone SMS Consent" theme={theme} />
                <CheckboxField label="Skip Trace is Marked" theme={theme} />
              </div>

              {/* Range Field for Reminders */}
              <div className={`px-6 py-3 rounded-[15px] border space-y-4 ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                <CheckboxField label="OTH Phone Voice Consent" theme={theme} />
                <CheckboxField label="OTH Phone SMS Consent" theme={theme} />
                <CheckboxField label="Fax Voice Consent" theme={theme} />
                <CheckboxField label="Fax SMS Consent" theme={theme} />
              </div>

              <div className={`px-6 py-3 rounded-[15px] border space-y-4 ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                <CheckboxField label="Overdue Work Date" theme={theme} />
                <CheckboxField label="Has Not Generated Docs" theme={theme} />
                <CheckboxField label="No Active Reminders" theme={theme} />
                <CheckboxField label="Overdue Reminders" theme={theme} />
                <CheckboxField label="Report to Credit Bureau" theme={theme} />
              </div>
            </div>
          </section>

          {/* GROUP 3: Timelines (The From/To Grids) */}
          <section className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-amber-500 flex items-center gap-2">
              <div className="h-1 w-4 bg-amber-500 rounded-full" /> Date & Range Tracking
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <FromToDate label="Originated Date" theme={theme} />
              <FromToDate label="Account Received" theme={theme} />
              <FromToDate label="Next Work Date" theme={theme} />
              <FromToDate label="Last Updated" theme={theme} />
              <FromToDate label="Last Skip Traced" theme={theme} />
              <FromToDate label="Reminder Due" theme={theme} />
              
              <DateField label="No Payment Made Since" theme={theme} />
              <InputField label="Acc Not Worked in X Days" placeholder="" theme={theme} type="number" />
              <InputField label="No Disposition in X Days" placeholder="" theme={theme} type="number" />
              <InputField label="Days Assigned" placeholder="" theme={theme} type="number" />
              <div className='flex items-end gap-2'>
                <SelectField label="Account Age" options={[{value:'less', label:'Less Than'}, {value:'greater', label:'Greater Than'},]} theme={theme} />
                <InputField label="" placeholder="" theme={theme} type="number" />
              </div>
            </div>
          </section>

          {/* GROUP 4: Financial & Custom */}
          <section className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-violet-500 flex items-center gap-2">
              <div className="h-1 w-4 bg-violet-500 rounded-full" /> Financial Limits & Sorting
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <FromToDate label="Amount Due" theme={theme} />
              <div className='flex items-end gap-4 relative'>
                <span className={`absolute top-0 text-md font-medium tracking-widest ${
                  theme === 'dark' ? 'text-sky-300' : 'text-blue-600'
                }`}>Total Amount</span>
                <InputField label="" placeholder="" theme={theme} type="number" />
                <span className="text-slate-700 flex items-center">-</span>
                <InputField label="" placeholder="" theme={theme} type="number" />
              </div>
              <FromToDate label="Charge Off Date" theme={theme} />
              <FromToDate label="Last Payment" theme={theme} />
              <div className='flex items-end gap-4 relative'>
                <span className={`absolute top-0 text-md font-medium tracking-widest ${
                  theme === 'dark' ? 'text-sky-300' : 'text-blue-600'
                }`}>Cumulative Delinquent Days</span>
                <InputField label="" placeholder="" theme={theme} type="number" />
                <span className="text-slate-700 flex items-center">-</span>
                <InputField label="" placeholder="" theme={theme} type="number" />
              </div>
            </div>
          </section>

          {/* GROUP 6: CUSTOM LOGIC & SORTING */}
          <section className={`p-8 rounded-[30px] border-2 border-dashed ${theme === 'dark' ? 'border-white/10 bg-white/2' : 'border-slate-200 bg-slate-50/50'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
              
              {/* Custom Field Input */}
              <SelectField label="Select Custom Field" options={[]} theme={theme} />

              {/* Global Sorting */}
              <SelectField
                label="Order Results By" 
                options={[{value:'date', label:'Date Received'}, {value:'amt', label:'Total Amount'}, {value:'name', label:'Debtor Name'}]} 
                theme={theme} 
              />
              
              <SelectField 
                label="Sort Direction" 
                options={[{value:'asc', label:'Ascending (A-Z)'}, {value:'desc', label:'Descending (Z-A)'}]} 
                theme={theme} 
              />
            </div>
          </section>
        </div>
        </div>
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