import { Bell, Search, LogOut, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 z-10 sticky top-0">
      <div className="flex items-center gap-4 bg-slate-50 px-5 py-2.5 rounded-2xl border border-slate-100 w-full max-w-md group focus-within:border-red-200 focus-within:bg-white transition-all">
        <Search size={18} className="text-slate-400 group-focus-within:text-red-500 transition-colors" />
        <input 
          type="text" 
          placeholder="Cari fitur, siswa, atau rekap..." 
          className="bg-transparent border-none outline-none text-sm font-medium text-slate-600 placeholder:text-slate-400 w-full"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-600 border-2 border-white rounded-full"></span>
        </button>

        <div className="h-8 w-[1px] bg-slate-100"></div>

        <div className="flex items-center gap-4 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-800 leading-none mb-1">Galuh Saputra</p>
            <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest">Administrator</p>
          </div>
          <div className="group relative">
            <button className="flex items-center gap-2 p-1 pl-1 pr-3 bg-slate-50 hover:bg-slate-100 border border-slate-100 rounded-full transition-all">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-sm border-2 border-white ring-1 ring-slate-100">
                GA
              </div>
              <ChevronDown size={14} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-3 w-56 bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
              <button className="w-full px-4 py-3 flex items-center gap-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-red-600 transition-all">
                Profile Saya
              </button>
              <button className="w-full px-4 py-3 flex items-center gap-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-red-600 transition-all">
                Pengaturan
              </button>
              <div className="my-1 border-t border-slate-100"></div>
              <button 
                onClick={handleLogout}
                className="w-full px-4 py-3 flex items-center gap-3 text-sm font-bold text-red-600 hover:bg-red-50 transition-all"
              >
                <LogOut size={18} />
                Keluar Aplikasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
