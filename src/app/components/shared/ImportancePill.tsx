export const ImportancePill: React.FC<{ level:  'urgent' | 'super high' | 'high' | 'medium' | 'low' | 'none' }> = ({ level }) => {
  const styles = {
    urgent: 'bg-black text-red-500',
    'super high': 'bg-orange-700/20 text-orange-500',
    high: 'bg-orange-500/20 text-red-500',
    medium: 'bg-amber-500/10 text-amber-500',
    low: 'bg-blue-500/10 text-blue-500',
    none: 'bg-slate-500/10 text-slate-500'
  };

  return (
    <span className={`text-[12px] font-bold px-3 py-1 rounded-full ${styles[level]}`}>
      {level.charAt(0).toUpperCase() + level.slice(1)} priority
    </span>
  );
};