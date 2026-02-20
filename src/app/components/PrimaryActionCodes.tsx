import React from 'react'

const PrimaryActionCodes = ({ theme, className }: { theme: 'dark' | 'light', className?: string }) => {

  const primaryActionCodes = [
    { code: 'CALL', label: 'DO NOT CALL', color: 'bg-red-600' },
    { code: 'SMS', label: 'EMAILS ONLY', color: 'bg-lime-500' },
    { code: 'EMAIL', label: 'ENFORCE JUDGEMENT', color: 'bg-amber-400' },
    { code: 'PTP', label: 'ABC', color: 'bg-emerald-600' },
  ];

  return (
    <div className={` ${className} px-8 py-3 border-y flex justify-center items-center gap-3 overflow-x-auto no-scrollbar flex-shrink-0 ${
      theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-sky-200/70 border-slate-200 shadow-sm'
    }`}>
      {primaryActionCodes.map((action) => (
        <button 
          key={action.code}
          className={`${action.color} text-white px-5 py-1.5 rounded-full text-xl font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-sm`}
        >
          {action.label}
        </button>
      ))}
    </div>
  )
}

export default PrimaryActionCodes