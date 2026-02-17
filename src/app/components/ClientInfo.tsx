import React, { useState } from "react";
import {
  Search,
  UserPlus,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Plus,
  Trash2,
  Activity,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { SelectField } from "./shared/SelectField";
import { FromToDate } from "./shared/FromToDate";
import { InputField } from "./shared/InputField";
import { CheckboxField } from "./shared/CheckboxField";
import { DynamicContactList } from "./shared/DynamicContactList";

export const ClientInfo: React.FC<{ theme: "dark" | "light" }> = ({
  theme,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in duration-500 ">
      {/* BOTTOM: RESULTS & DETAIL VIEW */}
      <div className="flex gap-6 h-[700px] ">
        {/* LEFT PART: RESULTS LEDGER (4/12 columns) */}

        <div
          className={`flex transition-all duration-300 ease-in-out ${isDrawerOpen ? "translate-x-0 w-sm " : "translate-x-[-100%] w-8"} h-full flex-shrink-0 relative overflow-hidden`}
        >
          {/* Toggle Handle */}
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className={`absolute top-1/2 -translate-y-1/2 right-0 z-20 w-8 h-12 flex items-center justify-center rounded-l-xl transition-colors ${
              theme === "dark"
                ? "bg-blue-600 hover:bg-blue-500 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
            }`}
          >
            {isDrawerOpen ? (
              <ChevronLeft size={18} />
            ) : (
              <ChevronRight size={18} />
            )}
          </button>

          {/* List Content */}
          <div
            className={`w-full  rounded-[35px] border overflow-hidden flex flex-col ${theme === "dark" ? "bg-slate-900/40 border-white/5" : "bg-slate-50   border-slate-200"}`}
          >
            <div className="p-5 border-b border-white/5 flex justify-between items-center bg-blue-500/5">
              <span className="text-md font-black uppercase tracking-widest text-sky-300">
                Search Results
              </span>
              <span className="px-2 py-1 rounded-md bg-blue-500 text-white text-md font-black">
                24 Clients
              </span>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${i === 1 ? "border-blue-500 bg-blue-500/10" : "border-transparent hover:bg-white/5"}`}
                >
                  <p
                    className={` tracking-tight ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                  >
                    Global Logistics Inc.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Collapsed state placeholder */}
          {!isDrawerOpen && (
            <div className="ml-4 h-full w-full flex flex-col items-center pt-8 gap-4 opacity-100">
              <div
                className={`w-1 h-1/2 rounded-full ${theme === "dark" ? "bg-white/10" : "bg-slate-200"}`}
              />
            </div>
          )}
        </div>

        {/* RIGHT PART: CLIENT DOSSIER (8/12 columns) */}
        <div
          className={`w-full rounded-[35px] border overflow-y-auto custom-scrollbar p-8 ${theme === "dark" ? "bg-slate-900/60 border-white/10" : "bg-white border-slate-200 shadow-sm"}`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-600/10 rounded-2xl">
              <UserPlus className="text-blue-600" size={24} />
            </div>
            <div>
              <h3
                className={`text-2xl tracking-tight ${theme === "dark" ? "text-white" : "text-slate-900"}`}
              >
                Client Info
              </h3>
              <p className="text-[14px] tracking-widest text-gray-300">
                Profile & Contact Configuration
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* General Info */}
            <div className="space-y-4">
              <h4 className="text-[16px] tracking-[0.3em] text-blue-600 font-bold">
                Firm Identity
              </h4>
              <InputField
                label="Short Name"
                placeholder="e.g. GLI"
                theme={theme}
              />
              <InputField
                label="Full Name"
                placeholder="e.g. Global Logistics Inc."
                theme={theme}
              />
              <SelectField label="Business Type" options={[]} theme={theme} />
              <CheckboxField label="Enable Convenience Fee" theme={theme} />
            </div>

            {/* Address Info */}
            <div className="space-y-4">
              <h4 className="text-[16px] tracking-[0.3em] text-blue-600 font-bold">
                Corporate Address
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <InputField label="Address line 1" theme={theme} />
                </div>
                <div className="col-span-2">
                  <InputField label="Address line 2" theme={theme} />
                </div>
                <InputField label="City" theme={theme} />
                <InputField label="State" theme={theme} />
                <InputField label="Zip Code" theme={theme} />
                <InputField label="Country" theme={theme} />
              </div>
            </div>
          </div>

          <hr className="my-10 border-white/5" />

          {/* Contact Details (Dynamic Parts) */}
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h4 className="text-[16px] tracking-[0.3em] text-green-500">
                Point of Contact
              </h4>
              <button className="text-[14px] tracking-widest text-blue-500 border border-blue-500/20 px-3 py-1 rounded-lg hover:bg-blue-500/10 transition-all">
                Add Personnel
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <InputField label="POC Full Name" theme={theme} />
                <InputField label="Title / Position" theme={theme} />
              </div>

              <div className="space-y-6">
                <DynamicContactList
                  label="Email Addresses"
                  icon={<Mail size={14} />}
                  type="email"
                  theme={theme}
                />
                <DynamicContactList
                  label="Phone Numbers"
                  icon={<Phone size={14} />}
                  type="tel"
                  theme={theme}
                />
              </div>
            </div>

            {/* Secondary Firm Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/5">
              <InputField label="Region" theme={theme} />
              <InputField label="Voucher Code" theme={theme} />
              <InputField label="Fax" theme={theme} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryView: React.FC<{
  category: string;
  theme: "dark" | "light";
  activeCreditor: string;
}> = ({ category, theme, activeCreditor }) => {
  // Content rendering based on category
  switch (category) {
    case "Skip Tracing":
      return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700"></div>
      );
    case "Contact Info":
      return (
        <div className="grid grid-cols-1 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700"></div>
      );
    case "dispute":
      return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700"></div>
      );
    case "experian reports":
      return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700"></div>
      );

    case "settlement":
      return (
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center bg-blue-600/10 rounded-[40px] border border-blue-500/20 shadow-2xl animate-in zoom-in duration-500">
          <p className="text-[10px] text-blue-400 font-black uppercase tracking-widest mb-2">
            Approved Settlement Range
          </p>
          <h3
            className={`text-5xl font-black mb-10 ${theme === "dark" ? "text-white" : "text-slate-800"}`}
          >
            $9,500 - $11,000
          </h3>
          <div className="flex gap-4">
            <button className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl shadow-blue-600/40 transition-all active:scale-95">
              Generate Final Offer
            </button>
            <button
              className={`px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-widest border transition-all active:scale-95 ${theme === "dark" ? "border-white/10 text-white hover:bg-white/5" : "border-slate-300 text-slate-700 hover:bg-slate-50"}`}
            >
              Manual Override
            </button>
          </div>
        </div>
      );
    default:
      return (
        <div className="flex flex-col items-center justify-center py-20 opacity-40 animate-pulse">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
            <Activity size={32} />
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest">
            Developing specialized workflow for {category}...
          </p>
        </div>
      );
  }
};
