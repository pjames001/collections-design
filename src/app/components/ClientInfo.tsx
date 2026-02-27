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
  LayoutGrid,
  ClipboardList,
  MessageSquare,
  Send,
  User,
  Lock,
  Settings,
  Shield,
  Eye,
  ClipboardMinus,
  TrendingUpDown,
  FileText,
  RectangleEllipsis,
} from "lucide-react";
import { SelectField } from "./shared/SelectField";
import { FromToDate } from "./shared/FromToDate";
import { InputField } from "./shared/InputField";
import { CheckboxField } from "./shared/CheckboxField";
import { DynamicContactList } from "./shared/DynamicContactList";
import { ActionPanel } from "./ActionPanel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { MultiSearchSelect } from "./shared/MultiSearchSelect";

export const ClientInfo: React.FC<{ theme: "dark" | "light" }> = ({
  theme,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [newNote, setNewNote] = useState('');
  const [portalEnabled, setPortalEnabled] = useState(false);


  return (
    <div className="space-y-6 animate-in fade-in duration-500 ">
      {/* BOTTOM: RESULTS & DETAIL VIEW */}
      <div className="flex gap-6  ">
        {/* LEFT PART: RESULTS LEDGER */}

        <div
          className={`flex transition-all duration-300 ease-in-out ${isDrawerOpen ? "translate-x-0 w-sm " : "translate-x-[-100%] w-8"} h-full flex-shrink-0 relative overflow-hidden`}
        >
          {/* Toggle Handle */}
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className={`absolute top-1/2 -translate-y-1/2 right-0 z-20 w-8 h-12 flex items-center justify-center rounded-r-xl transition-colors ${
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
            className={`w-full  rounded-[35px] border overflow-hidden flex flex-col ${theme === "dark" ? "bg-slate-900/40 border-white/5" : "bg-sky-100   border-slate-200"}`}
          >
            <div className="p-5 border-b border-white/5 flex justify-between items-center bg-blue-500/5">
              <span className={`text-md font-black uppercase tracking-widest ${theme === "dark" ? "text-sky-300" : "text-blue-600"}`}>
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
            <div className="ml-10 h-full w-full flex flex-col items-center pt-8 gap-4 opacity-0">
              <div
                className={`w-1 h-1/2 rounded-full ${theme === "dark" ? "bg-white/10" : "bg-slate-200"}`}
              />
            </div>
          )}
        </div>

        {/* RIGHT PART: CLIENT DOSSIER (8/12 columns) */}
        <div
          className={`w-full overflow-y-auto custom-scrollbar`}
        >
          {/* HEADER */}
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-600/10 rounded-2xl">
              <UserPlus className="text-blue-600" size={24} />
            </div>
            <div>
              <h3
                className={`text-2xl tracking-tight ${theme === "dark" ? "text-white" : "text-gray-800"}`}
              >
                Client Profile
              </h3>
              <p className={`text-[11px] font-bold uppercase tracking-widest ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                Complete client information & configuration
              </p>
            </div>
          </div>

          {/* SECTION 1: FIRM INFORMATION */}
          <div className={`p-8 rounded-[30px] border mb-8 ${theme === "dark" ? "bg-slate-900/40 border-white/5" : "bg-sky-50 border-blue-500/50 shadow-sm"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-600">
                <Briefcase size={18} />
              </div>
              <h4 className={`text-lg tracking-tight ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                Firm Identity
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InputField
                label="Name"
                placeholder="e.g. Global Logistics Inc."
                theme={theme}
              />
              <SelectField label="Business Type" options={[{label: "Corporation", value: "corp"}, {label: "LLC", value: "llc"}, {label: "Partnership", value: "partnership"}]} theme={theme} />
              <InputField label="Tax ID (Custom)" placeholder="XX-XXXXXXX" theme={theme} />
              <InputField label="SSN (Custom)" placeholder="XX-XXX-XXXX" theme={theme} />
              <CheckboxField label="Enable Convenience Fee" theme={theme} />
            </div>
          </div>

          {/* SECTION 2: CORPORATE ADDRESS */}
          <div className={`p-8 rounded-[30px] border mb-8 ${theme === "dark" ? "bg-slate-900/40 border-white/5" : "bg-sky-50 border-blue-500/50 shadow-sm"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-green-500/10 rounded-xl text-green-600">
                <MapPin size={18} />
              </div>
              <h4 className={`text-lg tracking-tight ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                Corporate Address
              </h4>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <InputField label="Address Line 1" placeholder="Street address" theme={theme} />
              <InputField label="Address Line 2" placeholder="Suite, apartment, etc." theme={theme} />
              <InputField label="City" theme={theme} />
              <InputField label="State/Province" theme={theme} />
              <InputField label="Zip/Postal Code" theme={theme} />
              <InputField label="Country" theme={theme} />
              <InputField label="Phone" placeholder="+1 (555) 000-0000" theme={theme} />
              <InputField label="Fax" placeholder="+1 (555) 000-0000" theme={theme} />
            </div>
          </div>

          {/* SECTION 3: POINT OF CONTACT */}
          <div className={`p-8 rounded-[30px] border mb-8 ${theme === "dark" ? "bg-slate-900/40 border-white/5" : "bg-sky-50 border-blue-500/50 shadow-sm"}`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-purple-500/10 rounded-xl text-purple-600">
                  <User size={18} />
                </div>
                <h4 className={`text-lg tracking-tight ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                  Primary Contact
                </h4>
              </div>
              <button className={`text-xs font-black uppercase tracking-widest px-4 py-2 rounded-xl transition-all ${
                theme === "dark" ? "bg-blue-600/20 text-blue-400 hover:bg-blue-600/30" : "bg-blue-100 text-blue-600 hover:bg-blue-200"
              }`}>
                <Plus size={14} className="inline mr-2" /> Add Contact
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="First Name" theme={theme} />
              <InputField label="Last Name" theme={theme} />
              <SelectField label="Title/Position" options={[{label: "CEO", value: "ceo"}, {label: "CFO", value: "cfo"}, {label: "Manager", value: "manager"}]} theme={theme} />
              <SelectField label="Department (Custom)" options={[{label: "Finance", value: "finance"}, {label: "Operations", value: "ops"}]} theme={theme} />
              <div className="col-span-2">
                <DynamicContactList
                  label="Email Addresses"
                  icon={<Mail size={14} />}
                  type="email"
                  theme={theme}
                />
              </div>
              <div className="col-span-2">
                <DynamicContactList
                  label="Phone Numbers"
                  icon={<Phone size={14} />}
                  type="tel"
                  theme={theme}
                />
              </div>
            </div>
          </div>

          {/* SECTION 4: ACCOUNT CONFIGURATION */}
          <div className={`p-8 rounded-[30px] border mb-8 ${theme === "dark" ? "bg-slate-900/40 border-white/5" : "bg-sky-50 border-blue-500/50 shadow-sm"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-600">
                <LayoutGrid size={18} />
              </div>
              <h4 className={`text-lg tracking-tight ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                Account Configuration
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SelectField label="Account Type" options={[{label: "Standard", value: "standard"}, {label: "Premium", value: "premium"}]} theme={theme} />
              <SelectField label="Account Status" options={[{label: "Active", value: "active"}, {label: "Inactive", value: "inactive"}]} theme={theme} />
              <SelectField label="Assigned Sales Rep" options={[]} theme={theme} />
              <InputField label="Account Age (Custom)" placeholder="0" theme={theme} />
              <SelectField label="Collection Priority (Custom)" options={[{label: "High", value: "high"}, {label: "Medium", value: "medium"}, {label: "Low", value: "low"}]} theme={theme} />
            </div>
          </div>

          {/* SECTION 5: NOTES & COMMUNICATION */}
          <div className={`p-8 rounded-[30px] border mb-8 ${theme === "dark" ? "bg-slate-900/40 border-white/5" : "bg-sky-50 border-blue-500/50 shadow-sm"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-600">
                <MessageSquare size={18} />
              </div>
              <h4 className={`text-lg tracking-tight ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                Notes & Communication
              </h4>
            </div>

            {/* Note Entry Area */}
            <div className={`p-6 rounded-2xl border-2 mb-6 transition-all ${
              theme === "dark" ? "bg-slate-900/60 border-white/5 focus-within:border-blue-500/30" : "bg-slate-50 border-slate-200 focus-within:border-blue-300"
            }`}>
              <textarea 
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                className={`w-full h-20 bg-transparent outline-none resize-none text-sm leading-relaxed font-medium
                  ${theme === "dark" ? "text-white placeholder:text-slate-600" : "text-slate-800 placeholder:text-slate-500"}`}
                placeholder="Add a note to this client..."
              />
              <div className="flex justify-end mt-4">
                <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all hover:bg-blue-700 shadow-lg shadow-blue-600/20">
                  <Send size={14} />
                  Save Note
                </button>
              </div>
            </div>

            {/* Notes History */}
            <div className={`p-6 rounded-2xl border-2 max-h-64 overflow-y-auto ${theme === "dark" ? "bg-slate-900/40 border-white/5" : "bg-slate-50 border-slate-200"}`}>
              <h5 className={`text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                <ClipboardList size={14} /> Recent Notes
              </h5>
              <div className="space-y-3">
                {[1, 2].map((i) => (
                  <div key={i} className={`p-4 rounded-xl border transition-all ${
                    theme === "dark" ? "bg-white/5 border-white/5 hover:bg-white/10" : "bg-white border-slate-400 hover:shadow-sm"
                  }`}>
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <span className={`text-xs font-bold ${theme === "dark" ? "text-sky-300" : "text-blue-600"}`}>System Admin</span>
                      <span className={`text-[10px] ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}>Feb 20, 2026</span>
                    </div>
                    <p className={`text-xs leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                      Revised account configuration and updated collection settings per client request.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION 6: CLIENT PORTAL SETTINGS */}
          <div className={`p-8 rounded-[30px] border mb-8 ${theme === "dark" ? "bg-slate-900/40 border-white/5" : "bg-sky-50 border-blue-500/50 shadow-sm"}`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-600">
                <Lock size={18} />
              </div>
              <h4 className={`text-lg tracking-tight ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                Client Portal Settings
              </h4>
              
            </div>

            {/* Portal Enable Toggle */}
              <CheckboxField label="Enable Client Portal Access" theme={theme} onChange={(value) => setPortalEnabled(value)} />
              {portalEnabled && (<div className="space-y-6 mt-6">
                {/* Portal User Configuration */}
                <div className={`p-6 rounded-2xl border-2 ${theme === "dark" ? "bg-slate-900/60 border-white/5" : "bg-slate-50 border-slate-200"}`}>
                  <h5 className={`text-sm font-black uppercase tracking-tight mb-6 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>Portal User Account</h5>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <SelectField label="Portal View Type" options={[
                      {label: "Read-Only", value: "readonly"},
                      {label: "Standard", value: "standard"},
                      {label: "Full Access", value: "full"}
                    ]} theme={theme} />
                    <InputField label="Email Address" placeholder="contact@example.com" theme={theme} />
                    <InputField label="Username" placeholder="client_username" theme={theme} />
                    <button className={`h-max py-2.5 self-end bg-blue-600 text-white rounded-2xl text-sm transition-all hover:bg-blue-500 shadow-lg shadow-blue-600/20`}>
                      Send Temporary Password
                    </button>
                    <div></div>
                  </div>

                  
                </div>

                {/* Portal Permissions */}
                <Accordion type="single" collapsible className="space-y-3">
                  <AccordionItem 
                    value="permissions"
                    className={`rounded-2xl border-2 px-6 overflow-hidden ${theme === "dark" ? "bg-slate-900/60 border-white/5" : "bg-slate-50 border-slate-200"}`}
                  >
                    <AccordionTrigger className={`py-4 hover:no-underline ${theme === "dark" ? "hover:text-blue-400" : "hover:text-blue-600"}`}>
                      <div className="flex items-center gap-3">
                        <Shield size={16} className="text-indigo-600" />
                        <span className={`text-sm font-black uppercase tracking-tight ${theme === "dark" ? "text-white" : "text-slate-900"}`}>Permissions</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6 space-y-4 border-t border-white/5">
                      <CheckboxField label="Select All" theme={theme} />
                      <CheckboxField label="Edit Collection Status" theme={theme} />
                      <CheckboxField label="Edit Account Manually" theme={theme} />
                      <CheckboxField label="Upload Bulk Files" theme={theme} />
                      <CheckboxField label="Search for Accounts" theme={theme} />
                      <CheckboxField label="Enter Payments" theme={theme} />
                      <CheckboxField label="Upload Documents" theme={theme} />
                      <CheckboxField label="Upload Client Files" theme={theme} />

                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem 
                    value="show-fields"
                    className={`rounded-2xl border-2 px-6 overflow-hidden ${theme === "dark" ? "bg-slate-900/60 border-white/5" : "bg-slate-50 border-slate-200"}`}
                  >
                    <AccordionTrigger className={`py-4 hover:no-underline ${theme === "dark" ? "hover:text-blue-400" : "hover:text-blue-600"}`}>
                      <div className="flex items-center gap-3">
                        <Eye size={16} className="text-green-600" />
                        <span className={`text-sm font-black uppercase tracking-tight ${theme === "dark" ? "text-white" : "text-slate-900"}`}>Show Fields</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6 space-y-4 border-t border-white/5">
                      <CheckboxField label="Select All" theme={theme} />
                      <CheckboxField label="Date of First Delinquency" theme={theme} />
                      <CheckboxField label="Originated Date" theme={theme} />
                      <CheckboxField label="Debtor Employer" theme={theme} />
                      <CheckboxField label="Show Debtor Notes" theme={theme} />
                      <CheckboxField label="Show Call Notes" theme={theme} />
                      <CheckboxField label="Show Account Notes" theme={theme} />
                      <CheckboxField label="Show Doc Notes" theme={theme} />
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem 
                    value="show-reports"
                    className={`rounded-2xl border-2 px-6 overflow-hidden ${theme === "dark" ? "bg-slate-900/60 border-white/5" : "bg-slate-50 border-slate-200"}`}
                  >
                    <AccordionTrigger className={`py-4 hover:no-underline ${theme === "dark" ? "hover:text-blue-400" : "hover:text-blue-600"}`}>
                      <div className="flex items-center gap-3">
                        <ClipboardMinus size={16} className="text-cyan-600" />
                        <span className={`text-sm font-black uppercase tracking-tight ${theme === "dark" ? "text-white" : "text-slate-900"}`}>Show Reports</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6 space-y-4 border-t border-white/5">
                      <CheckboxField label="Select All" theme={theme} />
                      <CheckboxField label="Accounts Report" theme={theme} />
                      <CheckboxField label="Client Statement No Adjustment" theme={theme} />
                      <CheckboxField label="Client Statement Report No Interest" theme={theme} />
                      <CheckboxField label="Client Statement With Adjustment" theme={theme} />
                      <CheckboxField label="Open / Closed Report" theme={theme} />
                      <CheckboxField label="Payment With Client Distribution" theme={theme} />
                      <CheckboxField label="Payments With Notes" theme={theme} />
                      <CheckboxField label="Portfolio Dashboard Report" theme={theme} />
                      <CheckboxField label="Portfolio Liquidation" theme={theme} />
                      <MultiSearchSelect label="Reports" theme={theme} />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl text-xs font-black uppercase tracking-widest transition-all hover:bg-indigo-700 shadow-lg shadow-indigo-600/20">
                  <Plus size={16} />
                  Add Portal User
                </button>
              </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};