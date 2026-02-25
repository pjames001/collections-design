import React, { useState } from 'react';
import { Settings, ShieldCheck, Percent, XCircle, Building2, Save, Calculator } from 'lucide-react';
import { RadioField } from './shared/RadioField';
import { SelectField } from './shared/SelectField';
import { InputField } from './shared/InputField';
import { CheckboxField } from './shared/CheckboxField';
import { TransactionAllocations } from './TransactionAllocations';

export const SettingsModule: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const [activeSection, setActiveSection] = useState('company');

  const navItems = [
    { id: 'company', label: 'Company Settings', icon: <Building2 size={18} /> },
    { id: 'general', label: 'General Settings', icon: <Settings size={18} /> },
    { id: 'authorization', label: 'Authorization', icon: <ShieldCheck size={18} /> },
    { id: 'cancellation', label: 'Cancellation', icon: <XCircle size={18} /> },
    { id: 'allocations', label: 'Transaction Allocations', icon: <Calculator size={18} /> },
    { id: 'defaults', label: 'Default values', icon: <Percent size={18} /> },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in duration-500">
      {/* Navigation Sidebar */}
      <div className="w-full lg:w-64 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl text-sm transition-all ${
              activeSection === item.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                : theme === 'dark' ? 'text-slate-400 hover:bg-white/5' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>

      {/* Settings Form Content */}
      <div className={`flex-1 p-10 rounded-[40px] border ${
        theme === 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-sky-100 border-slate-100 shadow-sm'
      }`}>
        
        {activeSection === 'company' && (
          <div className="space-y-8 animate-in slide-in-from-right-4">
            <h3 className={`text-xl font-normal ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>Company settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Client ID" placeholder="Enter id..." theme={theme} />
              <SelectField label="Sales Agent" options={[]} theme={theme} />
              <InputField label="Business Type" theme={theme} />
              <div className="flex flex-col gap-3">
                <label className={`text-md ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Medical</label>
                <div className="flex gap-4">
                  <RadioField label="Yes" name="medical" theme={theme} />
                  <RadioField label="No" name="medical" theme={theme} />
                </div>
              </div>
              <InputField label="Username" theme={theme} />
              <button className={`h-max py-2.5 self-end bg-blue-600 text-white rounded-2xl text-sm transition-all hover:bg-blue-500 shadow-lg shadow-blue-600/20`}>
                Send Temporary Password
              </button>
            </div>
          </div>
        )}

        {activeSection === 'general' && (
          <div className="space-y-8 animate-in slide-in-from-right-4">
            <h3 className={`text-xl font-normal ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>General settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <InputField label="Accounts Under 1 Year %" placeholder="0.00" theme={theme} />
              <InputField label="Accounts Over 1 Year %" placeholder="0.00" theme={theme} />
              <InputField label="International Accounts %" placeholder="0.00" theme={theme} />
              <InputField label="Bounced Checks %" placeholder="0.00" theme={theme} />
              <InputField label="Second Assignment %" placeholder="0.00" theme={theme} />
              <div className="flex gap-4 items-end">
                <div className="flex-1"><SelectField label="Under $" options={[]} theme={theme} /></div>
                <div className="w-24"><InputField label="Rate %" placeholder="0" theme={theme} /></div>
              </div>
              <InputField label="Legal Rate %" placeholder="0.00" theme={theme} />
            </div>
          </div>
        )}

        {activeSection === 'authorization' && (
          <div className="space-y-8 animate-in slide-in-from-right-4">
            <h3 className={`text-xl font-normal ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>Authorization</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SelectField label="Credit reporting" options={[]} theme={theme} />
              <SelectField label="Legal authorization" options={[]} theme={theme} />
              <InputField label="Settlement authorization %" theme={theme} />
            </div>
          </div>
        )}

        {activeSection === 'cancellation' && (
          <div className="space-y-8 animate-in slide-in-from-right-4">
            <h3 className={`text-xl font-normal ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>Cancellation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Hourly rate" theme={theme} />
              <InputField label="Legal hourly rate" theme={theme} />
              {/* <div className="md:col-span-2">
                <label className={`text-md block mb-2 ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Agreement terms</label>
                <textarea className={`w-full h-32 p-4 rounded-2xl border outline-none text-sm ${
                  theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200'
                }`} placeholder="Enter legal terms..." />
              </div> */}
              <InputField label="Pre Lit" theme={theme} />
              <InputField label="Post Lit" theme={theme} />
            </div>
          </div>
        )}

        {activeSection === 'allocations' && (
          <div className="space-y-8 animate-in slide-in-from-right-4">
            <TransactionAllocations theme={theme} />
          </div>
        )}

        {activeSection === 'defaults' && (
          <div className="space-y-8 animate-in slide-in-from-right-4">
            <h3 className={`text-xl font-normal ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>Default values</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Default Commission Rate" placeholder="0.00" theme={theme} />
              <InputField label="Default Attorney Contingency" placeholder="0.00" theme={theme} />
              <InputField label="Default Pre-Judgment Interest Rate" placeholder="0.00" theme={theme} />
              <SelectField label="Default Pre-Judgment Interest Setting" options={[{label: 'Simple', value: 'simple'}, {label: 'Compound', value: 'compound'}, {label: 'Fixed', value: 'fixed'}]} theme={theme} />
              <div className="col-span-2">
                <label className={`text-md ${theme === 'dark' ? 'text-sky-300' : 'text-blue-600'}`}>Apply to Post-Judgment</label>
                <div className="mt-2"><input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-blue-600" /></div>
              </div>
            </div>

            <div className={`p-6 rounded-2xl border-2 ${theme === 'dark' ? 'bg-slate-900/60 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
              <h4 className={`text-sm font-black uppercase tracking-widest mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Pre-Judgment Interest</h4>
              <div className="flex gap-6 items-center">
                <CheckboxField label="Total" theme={theme} />
                <CheckboxField label="Remaining Balance" theme={theme} />
              </div>
            </div>

            <div className={`p-6 rounded-2xl border-2 ${theme === 'dark' ? 'bg-slate-900/60 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
              <h4 className={`text-sm font-black uppercase tracking-widest mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Pre-Judgment Costs</h4>
              <div className="flex gap-6 items-center">
                <CheckboxField label="Total" theme={theme} />
                <CheckboxField label="Remaining Balance" theme={theme} />
              </div>
            </div>

            <div className={`p-6 rounded-2xl border-2 ${theme === 'dark' ? 'bg-slate-900/60 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
              <h4 className={`text-sm font-black uppercase tracking-widest mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Pre-Judgment Fees</h4>
              <div className="flex gap-6 items-center">
                <CheckboxField label="Total" theme={theme} />
                <CheckboxField label="Remaining Balance" theme={theme} />
              </div>
            </div>

            <div className={`p-6 rounded-2xl border-2 ${theme === 'dark' ? 'bg-slate-900/60 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
              <h4 className={`text-sm font-black uppercase tracking-widest mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Judgment Amount Composition</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <CheckboxField label="Include Principal" theme={theme} />
                <CheckboxField label="Include Pre-Judgment Interest" theme={theme} />
                <CheckboxField label="Include Pre-Judgment Costs" theme={theme} />
                <CheckboxField label="Include Pre-Judgment Fees" theme={theme} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Collector Commission Fee" placeholder="0.00" theme={theme} />
            </div>
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-white/5 flex justify-end">
          <button className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-2xl text-sm transition-all hover:bg-blue-500 shadow-lg shadow-blue-600/20">
            <Save size={18} />
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

