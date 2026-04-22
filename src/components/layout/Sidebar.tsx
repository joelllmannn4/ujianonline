import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  UserCheck, 
  Users, 
  ClipboardList, 
  GraduationCap, 
  Settings,
  ChevronRight,
  Award
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MENU_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/app', roles: ['ADMIN', 'GURU', 'TENAGA_KEPENDIDIKAN', 'SISWA'] },
  { id: 'ujian', label: 'Ujian Online', icon: ClipboardList, path: '/app/ujian', roles: ['SISWA'] },
  { id: 'hasil-ujian', label: 'Hasil Ujian', icon: Award, path: '/app/hasil-ujian', roles: ['ADMIN', 'GURU'] },
  { id: 'absensi-karyawan', label: 'Absen Mandiri', icon: UserCheck, path: '/app/absensi-karyawan', roles: ['ADMIN', 'GURU', 'TENAGA_KEPENDIDIKAN'] },
  { id: 'absensi-siswa', label: 'Absensi Siswa', icon: ClipboardList, path: '/app/absensi-siswa', roles: ['ADMIN', 'GURU'] },
  { id: 'rekap-absensi', label: 'Rekap Absensi', icon: GraduationCap, isSubmenu: true, children: [
    { id: 'rekap-karyawan', label: 'Absensi Karyawan', path: '/app/rekap-karyawan', roles: ['ADMIN'] },
    { id: 'rekap-siswa', label: 'Absensi Siswa', path: '/app/rekap-siswa', roles: ['ADMIN', 'GURU'] },
  ]},
  { id: 'data-siswa', label: 'Data Siswa', icon: GraduationCap, path: '/app/data-siswa', roles: ['ADMIN'] },
  { id: 'user-management', label: 'User Management', icon: Settings, path: '/app/user-management', roles: ['ADMIN'] },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // MOCK ROLE - For demo we set to ADMIN so all is visible except student specific
  // In real app, this value comes from Auth Context
  const currentRole = 'ADMIN'; 

  const isSelected = (path: string) => location.pathname === path;

  return (
    <aside className="w-72 bg-white border-r border-slate-100 flex flex-col h-full flex-shrink-0 z-20">
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-red-100">P</div>
        <div>
          <h1 className="font-bold text-slate-800 leading-none">Prima Unggul</h1>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 block">Dashboard Panel</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar pt-2">
        {MENU_ITEMS.map((item) => {
          if (!item.isSubmenu) {
            if (!item.roles?.includes(currentRole)) return null;
            return (
              <button
                key={item.id}
                onClick={() => item.path && navigate(item.path)}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-200 group mb-1",
                  isSelected(item.path!) 
                    ? "bg-red-50 text-red-600 shadow-sm" 
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                )}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={20} className={cn(isSelected(item.path!) ? "text-red-600" : "text-slate-400 group-hover:text-slate-600")} />
                  <span className="font-semibold text-sm">{item.label}</span>
                </div>
                {isSelected(item.path!) && <div className="w-1.5 h-1.5 rounded-full bg-red-600" />}
              </button>
            );
          } else {
            // Check if any sub-child is accessible by current role
            const accessibleChildren = item.children?.filter(child => child.roles.includes(currentRole));
            if (!accessibleChildren || accessibleChildren.length === 0) return null;

            return (
              <div key={item.id} className="pt-2">
                <div className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">
                  {item.label}
                </div>
                {accessibleChildren.map((child) => (
                  <button
                    key={child.id}
                    onClick={() => navigate(child.path)}
                    className={cn(
                      "w-full flex items-center px-4 py-3 rounded-2xl transition-all duration-200 mb-1 pl-11 relative",
                      isSelected(child.path) 
                        ? "text-red-600 font-bold" 
                        : "text-slate-500 hover:text-slate-800"
                    )}
                  >
                    <div className={cn(
                      "absolute left-[22px] w-1 h-1 rounded-full",
                      isSelected(child.path) ? "bg-red-600 scale-150" : "bg-slate-300"
                    )} />
                    <span className="text-sm">{child.label}</span>
                  </button>
                ))}
              </div>
            );
          }
        })}
      </nav>

      <div className="p-4">
        <div className="p-5 bg-slate-950 rounded-3xl text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/20 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>
          <div className="relative z-10">
            <h5 className="font-bold text-sm mb-1">Butuh Bantuan?</h5>
            <p className="text-[10px] text-slate-400 mb-4 leading-relaxed">Hubungi IT Support pusat jika mengalami masalah login atau data.</p>
            <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-xl text-[11px] font-bold transition-colors">
              Pusat Bantuan
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
