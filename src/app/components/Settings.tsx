import React, { useState } from 'react';
import { Settings, ShieldCheck, Percent, XCircle, Building2, Save } from 'lucide-react';
import { RadioField } from './shared/RadioField';
import { SelectField } from './shared/SelectField';
import { InputField } from './shared/InputField';

export const SettingsModule: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const [activeSection, setActiveSection] = useState('company');

  const navItems = [
    { id: 'company', label: 'Company settings', icon: <Building2 size={18} /> },
    { id: 'general', label: 'General settings', icon: <Settings size={18} /> },
    { id: 'authorization', label: 'Authorization', icon: <ShieldCheck size={18} /> },
    { id: 'cancellation', label: 'Cancellation', icon: <XCircle size={18} /> },
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
        theme === 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-white border-slate-100 shadow-sm'
      }`}>
        
        {activeSection === 'company' && (
          <div className="space-y-8 animate-in slide-in-from-right-4">
            <h3 className={`text-xl font-normal ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>Company settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Client id" placeholder="Enter id..." theme={theme} />
              <SelectField label="Sales agent" options={[]} theme={theme} />
              <InputField label="Business type" theme={theme} />
              <div className="flex flex-col gap-3">
                <label className="text-md text-sky-300">Medical</label>
                <div className="flex gap-4">
                  <RadioField label="Yes" name="medical" theme={theme} />
                  <RadioField label="No" name="medical" theme={theme} />
                </div>
              </div>
              <InputField label="Username" theme={theme} />
              <InputField label="Password" type="password" theme={theme} />
            </div>
          </div>
        )}

        {activeSection === 'general' && (
          <div className="space-y-8 animate-in slide-in-from-right-4">
            <h3 className={`text-xl font-normal ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>General settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <InputField label="Settlement authorization %" placeholder="0.00" theme={theme} />
              <InputField label="Accounts under 1 year %" placeholder="0.00" theme={theme} />
              <InputField label="Accounts over 1 years %" placeholder="0.00" theme={theme} />
              <InputField label="International accounts %" placeholder="0.00" theme={theme} />
              <InputField label="Bounced checks %" placeholder="0.00" theme={theme} />
              <InputField label="Second assignment %" placeholder="0.00" theme={theme} />
              <div className="flex gap-4 items-end">
                <div className="flex-1"><SelectField label="Under $" options={[]} theme={theme} /></div>
                <div className="w-24"><InputField label="Rate %" placeholder="0" theme={theme} /></div>
              </div>
              <InputField label="Legal rate %" placeholder="0.00" theme={theme} />
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
              <InputField label="Legal hourly rate %" theme={theme} />
              <div className="md:col-span-2">
                <label className="text-md text-sky-300 block mb-2">Agreement terms</label>
                <textarea className={`w-full h-32 p-4 rounded-2xl border outline-none text-sm ${
                  theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200'
                }`} placeholder="Enter legal terms..." />
              </div>
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

