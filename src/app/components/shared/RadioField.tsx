export const RadioField: React.FC<{ label: string; name: string; theme: string }> = ({ label, name, theme }) => (
  <label className="flex items-center gap-2 cursor-pointer group">
    <input type="radio" name={name} className="w-4 h-4 border-slate-300 text-blue-600 focus:ring-blue-500" />
    <span className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{label}</span>
  </label>
);