import React from "react";
import { SelectField } from "./shared/SelectField";
import { InputField } from "./shared/InputField";
import { MultiSearchSelect } from "./shared/MultiSearchSelect";
import { CheckboxField } from "./shared/CheckboxField";
import { FromToDate } from "./shared/FromToDate";
import { DateField } from "./shared/DateField";
import { RotateCcw } from "lucide-react";

const AddReminder = ({ theme }: { theme: "dark" | "light" }) => {
  return (
    <div
      className={`w-3xl max-w-4xl h-[90vh] overflow-hidden rounded-[25px] border flex flex-col ${theme === "dark" ? "bg-slate-900 border-white/10" : "bg-sky-100 border-slate-200 shadow-2xl"}`}
    >
      {/* TOP BAR */}
      <div className={`px-8 py-4 border-b border-white/5 flex justify-between items-center ${theme === 'dark' ? 'bg-slate-900/50' : 'bg-blue-300'}`}>
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tight text-white">
            Add New Reminder
          </h2>
        </div>
      </div>

      {/* SCROLLABLE FILTER CONTENT */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-10 space-y-12">
        {/* GROUP 1: Entity & Status (Multi-select Area) */}
        <section className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <SelectField label="Description" options={[]} theme={theme} />
            <MultiSearchSelect isFilter={false} label="Collectors" theme={theme} />
            <MultiSearchSelect isFilter={false} label="Department" theme={theme} />
            <MultiSearchSelect isFilter={false} label="Custom Group" theme={theme} />
            <MultiSearchSelect isFilter={false} label="Add Custom Group" theme={theme} />
            <MultiSearchSelect isFilter={false} label="Created For" theme={theme} />
            <SelectField label="Priority" options={[]} theme={theme} />
            <DateField label="Due Date" theme={theme} />
            <SelectField label="Repitition" options={[]} theme={theme} />
            <DateField label="Days" theme={theme} />
            <SelectField label="Time" options={[]} theme={theme} />
            <DateField label="Completed" theme={theme} />
            <textarea 
              placeholder="Add a Note"
              className={`col-span-2 w-full p-6 rounded-3xl border text-sm resize-none focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all ${
                theme === 'dark' 
                  ? 'bg-slate-900 border-white/10 text-white placeholder:text-white/20' 
                  : 'bg-white border-slate-200 text-slate-800 placeholder:text-slate-400 shadow-inner'
              }`}
            />

          </div>
        </section>

        
      </div>

      {/* 3. Sticky Footer (Action Buttons) */}
      <div className={`p-6 border-t flex justify-end gap-4 ${theme === 'dark' ? 'bg-slate-900 border-white/10' : 'bg-blue-300 border-slate-200'}`}>
        <button className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-xs transition-all hover:bg-white/5 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-700'}`}>
          <RotateCcw size={16} /> Cancel
        </button>
        <button className="px-8 py-3 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-blue-600/20">
          Save Reminder
        </button>
      </div>
    </div>
  );
};

export default AddReminder;
