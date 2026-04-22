import { motion } from 'motion/react';
import { Users, UserCheck, ClipboardCheck, Calendar, ArrowUpRight } from 'lucide-react';

const STATS = [
  { label: 'Total Siswa', value: '1,240', icon: Users, color: 'bg-blue-500', trend: '+12%' },
  { label: 'Hadir Hari Ini', value: '98%', icon: UserCheck, color: 'bg-green-500', trend: '+0.5%' },
  { label: 'Karyawan Aktif', value: '86', icon: ClipboardCheck, color: 'bg-red-500', trend: 'Stabil' },
  { label: 'Kegiatan Sekolah', value: '4', icon: Calendar, color: 'bg-purple-500', trend: 'Minggu ini' },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-extraBold text-slate-900 tracking-tight mb-2 uppercase">Informasi Dashboard</h2>
        <p className="text-slate-500 font-medium italic">Selamat datang kembali di sistem manajemen kehadiran SMK Prima Unggul.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-2xl text-white shadow-lg shadow-current/20`}>
                <stat.icon size={24} />
              </div>
              <div className="flex items-center gap-1 text-[11px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                {stat.trend} <ArrowUpRight size={12} />
              </div>
            </div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-3xl font-black text-slate-900">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm overflow-hidden relative">
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-xl font-bold text-slate-900">Grafik Kehadiran Mingguan</h4>
            <div className="flex gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-2 h-2 rounded-full bg-red-600"></div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Siswa</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Guru</span>
              </div>
            </div>
          </div>
          
          <div className="h-64 flex items-end justify-between gap-4 py-4">
            {[65, 40, 80, 55, 90, 70, 45].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-3">
                <div className="w-full flex gap-1 justify-center items-end h-48">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${val}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="w-4 bg-red-500 rounded-lg group-hover:bg-red-600 transition-colors"
                  ></motion.div>
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${val - 10}%` }}
                    transition={{ duration: 1, delay: i * 0.1 + 0.1 }}
                    className="w-4 bg-blue-400 rounded-lg"
                  ></motion.div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Min-{i+1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-red-600 p-8 rounded-[32px] text-white flex flex-col justify-between shadow-2xl shadow-red-200 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20"></div>
          <div className="relative z-10">
            <h4 className="text-xl font-bold mb-2">Pemberitahuan Utama</h4>
            <p className="text-red-100 text-sm leading-relaxed mb-8 opacity-80 italic">
              "Pekan ini akan diadakan survei kepuasan layanan akademik. Harap semua guru memastikan rekap absensi kelas masing-masing sudah di-submit."
            </p>
            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Kegiatan Terdekat</p>
                <p className="font-bold text-sm">Rapat Kerja Kurikulum 2026</p>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Update Sistem</p>
                <p className="font-bold text-sm">V.2.4.1 - Modul Rekap Otomatis</p>
              </div>
            </div>
          </div>
          <button className="w-full py-4 mt-8 bg-white text-red-600 font-bold rounded-2xl hover:bg-red-50 transition-colors shadow-lg">
            Lihat Semua Agenda
          </button>
        </div>
      </div>
    </div>
  );
}
