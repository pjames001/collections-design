import React from 'react';
import { 
  Home, 
  Search, 
  Calendar, 
  Users, 
  BarChart3, 
  Briefcase, 
  Wrench, 
  Settings,
  LogOut,
  Sun,
  Moon
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, theme, toggleTheme }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'calendar', icon: Calendar, label: 'Calendar' },
    { id: 'crm', icon: Users, label: 'CRM' },
    { id: 'reports', icon: BarChart3, label: 'Reports' },
    { id: 'hr', icon: Briefcase, label: 'HR' },
    { id: 'tools', icon: Wrench, label: 'Tools' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className={`w-20 h-screen flex flex-col items-center py-8 backdrop-blur-xl border-r fixed left-0 top-0 z-50 transition-colors duration-500 ${
      theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-[#fff0db] border-black/5 shadow-2xl shadow-black/5'
    }`}>
      <div className="mb-10">
        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
          <span className="text-white font-bold text-xl">FC</span>
        </div>
      </div>
      
      <nav className="flex-1 flex flex-col gap-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`p-3 rounded-2xl transition-all duration-300 group relative ${
              activeTab === item.id 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/40' 
                : theme === 'dark' 
                  ? 'text-blue-200 hover:bg-white/10 hover:text-white'
                  : 'text-slate-400 hover:bg-blue-50 hover:text-blue-600'
            }`}
            title={item.label}
          >
            <item.icon size={24} />
            <span className="absolute left-full ml-4 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-4">
        <button 
          onClick={toggleTheme}
          className={`p-3 rounded-2xl transition-all duration-300 ${
            theme === 'dark' ? 'text-blue-200 hover:bg-white/10 hover:text-white' : 'text-slate-400 hover:bg-amber-50 hover:text-amber-600'
          }`}
        >
          {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </button>
        <button className={`p-3 rounded-2xl transition-all duration-300 ${
          theme === 'dark' ? 'text-blue-200 hover:bg-red-500/20 hover:text-red-400' : 'text-slate-400 hover:bg-red-50 hover:text-red-500'
        }`}>
          <LogOut size={24} />
        </button>
      </div>
    </aside>
  );
};
