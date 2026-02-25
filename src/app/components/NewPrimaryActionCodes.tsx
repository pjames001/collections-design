import React from 'react'
import { MultiSearchSelect } from './shared/MultiSearchSelect'

const NewPrimaryActionCodes = ({ theme, className }: { theme: 'dark' | 'light', className?: string }) => {

  return (
    <div className={` ${className} px-8 py-3 border-y flex justify-center items-end gap-3 overflow-x-auto no-scrollbar flex-shrink-0 ${
      theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-sky-200/70 border-slate-200 shadow-sm'
    }`}>
      <div className='h-16'>
        <MultiSearchSelect
          label="Primary Action Codes"
          theme={theme}
        />
      </div>
      <button 
        className={`bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-sm`}
      >
        Save
      </button>
    </div>
  )
}

export default NewPrimaryActionCodes