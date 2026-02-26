import React, { useState } from 'react';
import { ShieldAlert, CheckCircle2, Clock, User, Briefcase, Tag, Calendar, DollarSign, Activity, ExternalLink, X, CreditCard, History, Plus, Hexagon } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';
import * as Dialog from '@radix-ui/react-dialog';
import { SelectField } from './shared/SelectField';
import { DateField } from './shared/DateField';
import { StatField } from './shared/StatField';
import { InputField } from './shared/InputField';

export const NewDashboardHeader: React.FC<{ 
  theme: 'dark' | 'light';
}> = ({ theme }) => {

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isAddContact, setIsAddContact] = useState(false);
  const [isPersonalGuarantor, setIsPersonalGuarantor] = useState(false);
  const [debtors, setDebtors] = useState([
    { id: 1, name: 'Marcus Thorne' },
  ]);
  const [debtorInputs, setDebtorInputs] = useState<Record<number, string>>({
    1: 'Marcus Thorne',
  });
  const [nextDebtorId, setNextDebtorId] = useState(2);

  const handleAddCoDebtor = () => {
    const newId = nextDebtorId;
    setDebtors([...debtors, { id: newId, name: `Co-Debtor ${newId - 1}` }]);
    setDebtorInputs({ ...debtorInputs, [newId]: `Co-Debtor ${newId - 1}` });
    setNextDebtorId(newId + 1);
  };

  const handleDeleteDebtor = (id: number) => {
    setDebtors(debtors.filter(d => d.id !== id));
    const { [id]: _, ...rest } = debtorInputs;
    setDebtorInputs(rest);
  };

  const handleContact = () => {
    setIsAddContact(prev => !prev);
  }

  const handlePersonalGuarantor = () => {
    setIsPersonalGuarantor(prev => !prev);
  }

  return (
    <Dialog.Root open={isPaymentModalOpen} onOpenChange={setIsPaymentModalOpen}>
      <div className={`w-full backdrop-blur-3xl border rounded-[25px] p-4 mb-8 shadow-2xl transition-all duration-500 overflow-hidden relative ${
        theme === 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-[#bbdcfd] border-slate-200/60 shadow-slate-200/40'
      }`}>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />
        
        {/* Row 1: Identity & Tabs */}
        <div className={`flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-6 pb-6 border-b ${
          theme === 'dark' ? 'border-white/5' : 'border-slate-100'
        }`}>

          <div className="flex items-end gap-4">
            {debtors.map((debtor, index) => (
              <div key={debtor.id} className="flex items-end gap-3">
                <div className="flex gap-2">
                  <Dialog.Trigger asChild>
                    <button 
                      className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black uppercase text-xs tracking-widest transition-all shadow-lg shadow-blue-600/20 active:scale-95"
                    >
                      Add a Debtor
                    </button>
                  </Dialog.Trigger>
                  {index > 0 && (
                    <button 
                      onClick={() => handleDeleteDebtor(debtor.id)}
                      className={`px-4 py-2.5 rounded-xl font-black uppercase text-xs tracking-widest transition-all ${theme === 'dark' ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20' : 'bg-red-50 text-red-600 hover:bg-red-100'}`}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
            <button 
              onClick={handleAddCoDebtor}
              className={`h-10 px-4 rounded-xl font-black uppercase text-xs tracking-widest transition-all border-2 border-dashed ${theme === 'dark' ? 'border-blue-500/30 text-blue-400 hover:bg-blue-500/10' : 'border-blue-300 text-blue-600 hover:bg-blue-50'}`}
            >
              + Add Co-Debtor
            </button>
          </div>

        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10">
          
          <div className="space-y-6">
            <SelectField label="Client's Name" options={[]} theme={theme} />
            <SelectField label="Creditor" options={[]} theme={theme} />
            <InputField label="Client #" theme={theme} />
            <InputField label="Court Case #" theme={theme} />
          </div>

          <div className="space-y-6">
            <SelectField label="Status Type" options={[{value:'open', label:'Open'}, {value:'close', label:'Close'}, {value:'legal', label:'Legal'}]} defaultValue="open" theme={theme} />
            <SelectField label="Main Status" options={[{value:'stat1', label:'Processing'}, {value:'stat2', label:'Escalated'}, {value:'stat3', label:'Final Notice'}]} defaultValue="stat1" theme={theme} />
            <SelectField label="Sub-Status" options={[{value:'sec-stat1', label:'Skip Tracing'}, {value:'sec-stat2', label:'Asset Verify'}, {value:'sec-stat3', label:'Legal Prep'}]} defaultValue="sec-stat1" theme={theme} />
            <SelectField label="Sub-sub-Status" options={[{value:'sec-stat1', label:'Field Agent'}, {value:'sec-stat2', label:'Mail Return'}, {value:'sec-stat3', label:'Call Refused'}]} defaultValue="sec-stat1" theme={theme} />
          </div>

          <div className="space-y-6">
            <SelectField label="Account Type" options={[{value:'comm', label:'Commercial'}, {value:'cons', label:'Consumer'}]} defaultValue="comm" theme={theme} />
            <SelectField label="Medical" options={[{value:'1', label:'Medical'}, {value:'2', label:'Non-Medical'}]} defaultValue="1" theme={theme} />
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

          <div className="flex flex-col gap-6">
            <InputField label="Principal" type='number' theme={theme} />
            <InputField label="Costs/Fees" type='text' theme={theme} />
            <DateField label="Interest Start Date" theme={theme} />
            <InputField label="Interest Rate" type='text' theme={theme} />
            <div className='flex items-end gap-4'>
              <InputField label="Linked Account #" type='text' theme={theme} />
              <button 
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black uppercase text-xs tracking-widest transition-all shadow-lg shadow-blue-600/20 active:scale-95"
              >
                Save
              </button>
            </div>

            <button 
              className="px-6 py-2.5 bg-teal-700 hover:bg-teal-700 text-white rounded-xl font-black uppercase text-xs tracking-widest transition-all shadow-lg shadow-teal-600/20 active:scale-95"
            >
              Add Linked Account
            </button>
            
            <div className='mt-2 p-3 rounded-xl flex justify-between items-center'>
              <span className={`text-md font-black tracking-widest ${theme === 'dark' ? 'text-white/30' : 'text-slate-600'}`}>Linked Balance</span>
              <span className={`text-md font-black ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>$0.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* DEBTOR INFORMATION DIALOG */}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-md z-[999] animate-in fade-in duration-300" />
        <Dialog.Content className={`fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90vw] max-w-4xl max-h-[90vh] z-[1000] outline-none animate-in zoom-in-95 duration-300 overflow-y-auto custom-scrollbar`}>
          <div className={`rounded-[30px] border shadow-2xl overflow-hidden ${
            theme === 'dark' ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'
          }`}>
            {/* Modal Header */}
            <div className={`sticky top-0 p-6 border-b flex justify-between items-center z-10 ${theme === 'dark' ? 'bg-slate-900 border-white/5' : 'bg-white border-slate-100'}`}>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <User className="text-blue-500" size={24} />
                </div>
                <div>
                  <Dialog.Title className={`text-xl font-black uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    Add a Debtor
                  </Dialog.Title>
                  <p className={`text-[10px] font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-white/40' : 'text-slate-400'}`}>
                    Provide detailed debtor information
                  </p>
                </div>
              </div>
              <Dialog.Close className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'hover:bg-white/5 text-white/40' : 'hover:bg-slate-100 text-slate-400'}`}>
                <X size={20} />
              </Dialog.Close>
            </div>

            {/* Modal Body with Tabs */}
            <div className="p-6">
              <Tabs.Root defaultValue="individual" className="flex flex-col w-full">
                {/* Tab List */}
                <Tabs.List className={`flex gap-2 p-1 backdrop-blur-md rounded-2xl border mb-8 transition-colors ${
                  theme === 'dark' ? 'bg-white/10 border-white/10' : 'bg-slate-100 border-slate-300'
                }`}>
                  <Tabs.Trigger
                    value="individual"
                    className={`flex-1 px-6 py-3 rounded-xl transition-all duration-300 outline-none cursor-pointer font-medium text-xs uppercase tracking-widest ${
                      theme === 'dark' 
                      ? 'data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-slate-300 data-[state=inactive]:hover:bg-white/50'
                      : 'data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-slate-500 data-[state=inactive]:hover:bg-slate-200'
                    }`}
                  >
                    Individual
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="company"
                    className={`flex-1 px-6 py-3 rounded-xl transition-all duration-300 outline-none cursor-pointer font-medium text-xs uppercase tracking-widest ${
                      theme === 'dark' 
                      ? 'data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-slate-300 data-[state=inactive]:hover:bg-white/50'
                      : 'data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-slate-500 data-[state=inactive]:hover:bg-slate-200'
                    }`}
                  >
                    Company
                  </Tabs.Trigger>
                </Tabs.List>

                {/* Individual Tab */}
                <Tabs.Content value="individual" className="space-y-6 outline-none">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <InputField label="First Name" placeholder="" type="text" theme={theme} />
                    <InputField label="Middle Name" placeholder="" type="text" theme={theme} />
                    <InputField label="Last Name" placeholder="" type="text" theme={theme} />
                    <InputField label="AKA" placeholder="" type="text" theme={theme} />
                    <InputField label="Prefix" placeholder="" type="text" theme={theme} />
                    <InputField label="Suffix" placeholder="" type="text" theme={theme} />
                    <InputField label="SSN" placeholder="" type="text" theme={theme} />
                    <DateField label="DOB" theme={theme} />
                    <InputField label="Type" type='text' theme={theme} />
                    
                    {/* Deceased Checkbox with Date */}
                    <div className="flex flex-col gap-1.5">
                      <label className={`text-md tracking-widest ${theme === 'dark' ? 'text-blue-300' : 'text-blue-600'}`}>
                        Deceased
                      </label>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="w-5 h-5 rounded-md border-2 border-blue-500 accent-blue-600 cursor-pointer" />
                        <DateField label="" theme={theme} />
                      </div>
                    </div>
                  </div>

                  {/* Address Section */}
                  <div className="pt-4 border-t border-slate-200/20">
                    <h4 className={`text-xs font-black uppercase tracking-widest mb-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Address Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <InputField label="Address 1" placeholder="" type="text" theme={theme} />
                      <InputField label="Address 2" placeholder="" type="text" theme={theme} />
                      <InputField label="City" placeholder="" type="text" theme={theme} />
                      <SelectField label="State" options={[{value:'ca', label:'CA'}, {value:'ny', label:'NY'}, {value:'tx', label:'TX'}]} theme={theme} />
                      <InputField label="Zip Code" placeholder="" type="text" theme={theme} />
                      <InputField label="County" placeholder="" type="text" theme={theme} />
                      <InputField label="Country" placeholder="" type="text" theme={theme} />
                    </div>
                  </div>

                  {/* Contact Section */}
                  <div className="pt-4 border-t border-slate-200/20">
                    <h4 className={`text-xs font-black uppercase tracking-widest mb-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Contact Information</h4>
                    <div className="flex gap-6">
                      <div className="flex items-end gap-2">
                        <InputField label="Cell Number" placeholder="" type="text" theme={theme} />
                        <InputField label="Ext" placeholder="" type="text" theme={theme} />
                      </div>

                      <div className="flex items-end gap-2">
                        <InputField label="Home Number" placeholder="" type="text" theme={theme} />
                        <InputField label="Ext" placeholder="" type="text" theme={theme} />
                      </div>

                      <div className='w-40'>
                        <InputField label="Fax" placeholder="" type="text" theme={theme} />
                      </div>
                    </div>
                  </div>
                </Tabs.Content>

                {/* Company Tab */}
                <Tabs.Content value="company" className="space-y-6 outline-none">

                  {/* Address Section */}
                  <div className="pt-4">
                    <h4 className={`text-xs font-black uppercase tracking-widest mb-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Address Information</h4>
                    <div className="grid grid-cols-4 gap-6">
                      <InputField label="Company Name" placeholder="" type="text" theme={theme} />
                      <InputField label="Address 1" placeholder="" type="text" theme={theme} />
                      <InputField label="Address 2" placeholder="" type="text" theme={theme} />
                      <InputField label="City" placeholder="" type="text" theme={theme} />
                      <SelectField label="State" options={[{value:'ca', label:'CA'}, {value:'ny', label:'NY'}, {value:'tx', label:'TX'}]} theme={theme} />
                      <InputField label="Zip Code" placeholder="" type="text" theme={theme} />
                      <InputField label="County" placeholder="" type="text" theme={theme} />
                      <InputField label="Country" placeholder="" type="text" theme={theme} />
                    </div>
                  </div>

                  {/* Company Contact Section */}
                  <div className="pt-4 border-t border-slate-200/20">
                    <h4 className={`text-xs font-black uppercase tracking-widest mb-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Company Contact Information</h4>
                    <div className="flex gap-6">
                      <InputField label="Office Number" placeholder="" type="text" theme={theme} />
                      <InputField label="Fax" placeholder="" type="text" theme={theme} />
                    </div>
                  </div>

                  {/* New Contact Section */}
                  {isAddContact &&<div className="pt-4 border-t border-slate-200/20">
                    <h4 className={`text-xs font-black uppercase tracking-widest mb-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Contact Information</h4>
                    <div className="grid grid-cols-4 gap-6">
                      <InputField label="First Name" placeholder="" type="text" theme={theme} />
                      <InputField label="Last Name" placeholder="" type="text" theme={theme} />
                      <InputField label="Contact Title" placeholder="" type="text" theme={theme} />
                      <div className='w-full flex flex-col gap-4'>
                        <label htmlFor="primary" className="text-md text-sky-300">Is Personal Guarantor</label>
                        <input type='checkbox' id='primary' onChange={handlePersonalGuarantor} className="w-5 h-5 rounded-md border-2 border-blue-500 accent-blue-600 cursor-pointer" />
                      </div>
                      <InputField label="Phone Number" placeholder="" type="tel" theme={theme} />
                      <button className={`px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-xl font-black uppercase text-md tracking-widest transition-all shadow-lg shadow-teal-500/20 active:scale-95 w-max self-end ${theme === 'dark' ? 'bg-teal-500 hover:bg-teal-600 shadow-teal-500/20' : 'bg-teal-600 hover:bg-teal-700 shadow-teal-600/20'}`}>
                        +
                      </button>
                    </div>
                      {isPersonalGuarantor && (
                        <div className='grid grid-cols-4 gap-6 mt-6'>
                          
                          <InputField label="SSN" placeholder="" type="text" theme={theme} />
                          <DateField label="DOB" theme={theme} />
                          <div className="flex flex-col gap-1.5">
                            <label className={`text-md tracking-widest ${theme === 'dark' ? 'text-blue-300' : 'text-blue-600'}`}>
                              Deceased
                            </label>
                            <div className="flex items-center gap-2">
                              <input type="checkbox" className="w-5 h-5 rounded-md border-2 border-blue-500 accent-blue-600 cursor-pointer" />
                              <DateField label="" theme={theme} />
                            </div>
                          </div>
                          <div></div>
                          <InputField label="Address" type='text' theme={theme} />
                          <button className={`px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-xl font-black uppercase text-md tracking-widest transition-all shadow-lg shadow-teal-500/20 active:scale-95 w-max self-end ${theme === 'dark' ? 'bg-teal-500 hover:bg-teal-600 shadow-teal-500/20' : 'bg-teal-600 hover:bg-teal-700 shadow-teal-600/20'}`}>
                            +
                          </button>
                        </div>
                      )}
                  </div>}


                </Tabs.Content>
              </Tabs.Root>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-end mt-8 pt-6 border-t border-slate-200/20">
                <Dialog.Close asChild>
                  <button className={`px-8 py-3 rounded-2xl font-black uppercase text-xs tracking-widest transition-all ${
                    theme === 'dark' ? 'bg-white/5 text-white hover:bg-white/10' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}>
                    Cancel
                  </button>
                </Dialog.Close>
                <button onClick={handleContact} className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-black uppercase text-xs tracking-widest transition-all shadow-lg shadow-teal-600/20 active:scale-95">
                  {isAddContact ? 'Remove Contact' : 'Add Contact'}
                </button>
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase text-xs tracking-widest transition-all shadow-lg shadow-blue-600/20 active:scale-95">
                  Save Debtor
                </button>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
