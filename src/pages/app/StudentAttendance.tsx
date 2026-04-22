import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Save, Calendar, Filter, Users, UserCheck, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

const CLASSES = ['XII TKJ 1', 'XII TKJ 2', 'XII DKV', 'XII AK', 'XI TKJ', 'X TKJ'];
const MOCK_STUDENTS = [
  { id: '1', nis: '202401', name: 'Ahmad Faisal', status: 'PRESENT' },
  { id: '2', nis: '202402', name: 'Bunga Citra', status: 'PRESENT' },
  { id: '3', nis: '202403', name: 'Cipto Mulyono', status: 'SICK' },
  { id: '4', nis: '202404', name: 'Dewi Sartika', status: 'PERMIT' },
  { id: '5', nis: '202405', name: 'Erwin Prasetyo', status: 'ABSENT' },
  { id: '6', nis: '202406', name: 'Farhan Azis', status: 'PRESENT' },
];

export default function StudentAttendance() {
  const [selectedClass, setSelectedClass] = useState('XII TKJ 1');
  const [students, setStudents] = useState<any[]>(MOCK_STUDENTS);

  const setStatus = (id: string, status: string) => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, status } : s));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PRESENT': return 'bg-green-500 text-white ring-green-100';
      case 'SICK': return 'bg-blue-500 text-white ring-blue-100';
      case 'PERMIT': return 'bg-orange-500 text-white ring-orange-100';
      case 'ABSENT': return 'bg-red-500 text-white ring-red-100';
      default: return 'bg-slate-100 text-slate-400 ring-slate-50';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extraBold text-slate-900 tracking-tight mb-2 uppercase">Absensi Siswa</h2>
          <p className="text-slate-500 font-medium italic">Manajemen kehadiran siswa per kelas harian.</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-white p-2 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-2">
            {CLASSES.map(cls => (
              <button
                key={cls}
                onClick={() => setSelectedClass(cls)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedClass === cls 
                    ? 'bg-red-600 text-white shadow-lg shadow-red-100' 
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                {cls}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center font-bold">
                <Users size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800">Daftar Siswa - {selectedClass}</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{students.length} Siswa Terdaftar</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative group hidden sm:block">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-500" />
                <input 
                  type="text" 
                  placeholder="Cari nama atau NIS..." 
                  className="pl-10 pr-4 h-11 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white w-56"
                />
              </div>
              <button className="bg-red-600 text-white px-5 h-11 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-red-700 shadow-lg shadow-red-100 transition-all">
                <Save size={18} /> Simpan Presensi
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-8 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Siswa</th>
                  <th className="px-8 py-4 text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Status Kehadiran</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {students.map((student, i) => (
                  <motion.tr 
                    key={student.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-slate-400 text-xs">
                          {student.nis.slice(-2)}
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">{student.name}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{student.nis}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center justify-center gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-100 w-fit mx-auto">
                        {['PRESENT', 'SICK', 'PERMIT', 'ABSENT'].map(status => (
                          <button
                            key={status}
                            onClick={() => setStatus(student.id, status)}
                            className={`flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all ${
                              student.status === status 
                                ? getStatusColor(status) + ' shadow-lg transform scale-110' 
                                : 'text-slate-400 hover:bg-white hover:text-slate-600'
                            }`}
                          >
                            <span className="text-[10px] font-bold uppercase tracking-tighter">
                              {status === 'PRESENT' ? 'Hadir' : status === 'SICK' ? 'Sakit' : status === 'PERMIT' ? 'Izin' : 'Alpa'}
                            </span>
                          </button>
                        ))}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-950 p-8 rounded-[40px] text-white shadow-2xl shadow-slate-200 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 rounded-full -mr-16 -mt-16 blur-2xl opacity-40"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="text-red-500" />
                <span className="text-sm font-bold uppercase tracking-widest italic">{format(new Date(), 'dd MMMM yyyy', { locale: id })}</span>
              </div>
              <h5 className="text-xl font-bold mb-6">Instruksi Absensi</h5>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold">1</div>
                  <p className="text-slate-400 opacity-80 leading-relaxed italic">Pilih kelas yang akan di-absen pada menu tab di atas.</p>
                </li>
                <li className="flex gap-3 text-sm">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold">2</div>
                  <p className="text-slate-400 opacity-80 leading-relaxed italic">Klik pada label status (Hadir/Sakit/Izin/Alpa) untuk tiap siswa.</p>
                </li>
                <li className="flex gap-3 text-sm">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold">3</div>
                  <p className="text-slate-400 opacity-80 leading-relaxed italic">Klik tombol "Simpan Presensi" di pojok kanan atas tabel setelah selesai.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h5 className="font-bold text-slate-800">Cepat Ringkasan</h5>
              <Filter size={16} className="text-slate-300" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-2xl border border-green-100">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-xs font-bold text-green-700">TOTAL HADIR</span>
                </div>
                <span className="font-black text-green-600">32</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-red-50 rounded-2xl border border-red-100">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-xs font-bold text-red-700">TOTAL ALPA</span>
                </div>
                <span className="font-black text-red-600">01</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
