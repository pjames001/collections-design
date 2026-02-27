import { Briefcase, PenLine, Phone, Smartphone, User } from 'lucide-react'
import React from 'react'

const ContactInfoMenu = ({ theme }: { theme: 'dark' | 'light' }) => {
  return (
    <div className="grid grid-cols-1 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
  
      {/* Section: Addresses */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-5 w-1 bg-blue-600 rounded-full" />
          <h4 className={`text-xs uppercase font-black tracking-[0.2em] ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Primary Locations</h4>
        </div>
        
        <div className={`grid gap-3 rounded-2xl border transition-all hover:border-blue-500/50 ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-sky-50 border-blue-500/50 shadow-sm'}`}>
          {[
            { id: 'home1', addr: '498 Elm Ave, San Bruno, CA 94066', status: 'Good', type: 'Home' },
            { id: 'home2', addr: '269 EL Camino Real, San Francisco, CA 94080', status: 'Unknown', type: 'Work' }
          ].map((item) => (
            <div key={item.id} className={`group flex items-center justify-between p-4`}>
              <div className="flex items-center gap-4">
                <input type="checkbox" id={item.id} className="w-5 h-5 rounded-md border-2 border-blue-500 accent-blue-600 cursor-pointer" />
                <div className="flex flex-col">
                  <label htmlFor={item.id} className={`text-md capitalize tracking-tight cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                    {item.addr}
                  </label>
                  <div>
                    <span className={`text-[14px] mr-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{item.type} Address</span>
                    <span className={`text-[14px] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Consented</span>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <div className={`px-3 py-1 rounded-full text-[12px] font-black uppercase tracking-widest ${
                  item.status === 'Good' ? 'bg-green-500/10 text-green-500' : 'bg-slate-500/10 text-slate-400'
                }`}>
                  {item.status}
                </div>
                <PenLine className={`${theme === 'dark' ? 'text-white' : 'text-slate-700'}`} size={20} />
              </div>
            </div>
          ))}
        </div>
      </section>
    
      {/* Section: Communications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Phone Numbers */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-5 w-1 bg-orange-500 rounded-full" />
            <h4 className={`text-xs uppercase font-black tracking-[0.2em] ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>Phone Directory</h4>
          </div>
          
          <div className={`space-y-3  rounded-2xl border transition-all hover:border-blue-500/50 ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-sky-50 border-blue-500/50 shadow-sm'}`}>
            {[
              { id: 'ph1', label: 'From Experian', num: '415-310-1981', status: 'Bad', icon: <Phone size={14}/>, color: theme === 'dark' ? 'text-green-500' : 'text-green-600' },
              { id: 'ph2', label: 'From IDI', num: '415-310-4188', status: 'Good', icon: <Smartphone size={14}/>, color: theme === 'dark' ? 'text-orange-500' : 'text-orange-600' }
            ].map(item => (
              <div key={item.id} className='flex items-center justify-between p-4'>
                <div className="flex items-center gap-4">
                  <input type="checkbox" id={item.id} className="w-5 h-5 rounded-md accent-blue-600" />
                  <div>
                    <div className={`flex items-center gap-2 text-[14px] font-semibold tracking-widest mb-1 ${item.color}`}>
                      {item.icon} {item.label} <span className={`${theme === 'dark' ? 'text-sky-300' : 'text-slate-600'}`}>Consented</span>
                    </div>
                    <div className={`text-md ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{item.num}</div>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <span className={`px-2 py-1 rounded-full text-[12px] font-black uppercase ${item.status === 'Good' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                    {item.status}
                  </span>
                  <PenLine className={`${theme === 'dark' ? 'text-white' : 'text-slate-700'}`} size={20} />
                </div>
              </div>
            ))}
          </div>
        </section>
    
        {/* Email Addresses */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-5 w-1 bg-teal-500 rounded-full" />
            <h4 className={`text-xs uppercase font-black tracking-[0.2em] ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}>Email Accounts</h4>
          </div>
          
          <div className={`space-y-3  rounded-2xl border transition-all hover:border-blue-500/50 ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-sky-50 border-blue-500/50 shadow-sm'}`}>
            {[
              { id: 'em1', mail: 'boracaygarden@att.net', status: 'Good' },
              { id: 'em2', mail: 'hyattgirl55@yahoo.com', status: 'Bad' }
            ].map(item => (
              <div key={item.id} className='flex items-center justify-between p-4'>
                  <div className="flex items-center gap-4">
                  <input type="checkbox" id={item.id} className="w-5 h-5 rounded-md accent-blue-600" />
                  <span className={`text-md tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{item.mail}</span>
                    <span className={`${theme === 'dark' ? 'text-sky-300' : 'text-slate-600'}`}>Consented</span>
                </div>
                <div className='flex items-center gap-2'>
                  <span className={`px-2 py-1 rounded-full text-[12px] font-black uppercase ${item.status === 'Good' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                    {item.status}
                  </span>
                  <PenLine className={`${theme === 'dark' ? 'text-white' : 'text-slate-700'}`} size={20} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    
      {/* Footer: Legal/Employment */}
      <div className={`flex flex-col md:flex-row justify-between gap-4 p-6 rounded-[25px] border-2 border-dashed ${theme === 'dark' ? 'border-white/10 bg-white/2' : 'border-slate-400 bg-slate-50/50'}`}>
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-xl ${theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-50'}`}>
            <User size={20} className="text-blue-500" />
          </div>
          <div>
            <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${theme === 'dark' ? 'text-white/40' : 'text-slate-500'}`}>Assignee Attorney</p>
            <p className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>John Doe</p>
          </div>
        </div>
    
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-xl ${theme === 'dark' ? 'bg-violet-500/10' : 'bg-violet-50'}`}>
            <Briefcase size={20} className="text-violet-500" />
          </div>
          <div>
            <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${theme === 'dark' ? 'text-white/40' : 'text-slate-500'}`}>Verified Employer</p>
            <p className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>John Doe Architecture</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfoMenu