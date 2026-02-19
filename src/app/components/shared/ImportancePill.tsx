export const ImportancePill: React.FC<{ level: 'high' | 'medium' | 'low' }> = ({ level }) => {
  const styles = {
    high: 'bg-red-500/20 text-red-500',
    medium: 'bg-amber-500/10 text-amber-500',
    low: 'bg-blue-500/10 text-blue-500'
  };

  return (
    <span className={`text-[12px] font-bold px-3 py-1 rounded-full ${styles[level]}`}>
      {level.charAt(0).toUpperCase() + level.slice(1)} priority
    </span>
  );
};