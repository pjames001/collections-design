interface SummaryData {
  label: string;
  value: string | number;
  theme: 'dark' | 'light';
  isTrendPositive?: boolean;
}

export const SummaryItem: React.FC<SummaryData> = ({ label, value, theme, isTrendPositive }) => (
  <div className="flex flex-col gap-1 transition-all duration-300">
      {/* Label: Small, muted, and lowercase */}
      <span className={`text-[11px] tracking-wide font-normal ${
        theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
      }`}>
        {label}
      </span>

      {/* Value: Larger font size but maintaining normal weight */}
      <span className={`text-xl font-normal tracking-tight ${
        isTrendPositive 
          ? 'text-green-500' 
          : theme === 'dark' ? 'text-white' : 'text-slate-900'
      }`}>
        {value}
      </span>
      
      {/* Subtle indicator bar for visual rhythm */}
      <div className={`h-0.5 w-6 rounded-full mt-1 ${
        theme === 'dark' ? 'bg-white/10' : 'bg-slate-100'
      }`} />
    </div>
);

