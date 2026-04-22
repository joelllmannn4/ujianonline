import { useState } from 'react';
import { Search, Plus, Filter, FileSpreadsheet, Download, MoreVertical } from 'lucide-react';
import { motion } from 'motion/react';

const MOCK_DATA = [
  { id: '1', nis: '202401', name: 'Ahmad Faisal', class: 'XII TKJ 1' },
  { id: '2', nis: '202402', name: 'Bunga Citra', class: 'XII TKJ 1' },
  { id: '3', nis: '202403', name: 'Cipto Mulyono', class: 'XII DKV' },
  { id: '4', nis: '202404', name: 'Dewi Sartika', class: 'XI TKJ' },
  { id: '5', nis: '202405', name: 'Erwin Prasetyo', class: 'XII AK' },
];

export default function DataSiswa() {
  const [students] = useState(MOCK_DATA);

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extraBold text-slate-900 tracking-tight mb-2 uppercase">Master Data Siswa</h2>
          <p className="text-slate-500 font-medium italic italic">Kelola profil biodata dan rombel seluruh siswa sekolah.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 h-14 bg-white border border-slate-100 text-slate-600 font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-50 transition-all active:scale-95 shadow-sm">
            <Download size={20} /> Export Excel
          </button>
          <button className="bg-red-600 text-white px-8 h-14 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-red-700 shadow-xl shadow-red-200 transition-all active:scale-95">
            <Plus size={20} /> Siswa Baru [F1]
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden text-slate-800">
        <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4 bg-slate-50 px-5 py-2.5 rounded-2xl border border-slate-100 w-full max-w-sm">
            <Search size={18} className="text-slate-400" />
            <input 
              type="text" 
              placeholder="Cari siswa (Nama/NIS/Kelas)..." 
              className="bg-transparent border-none outline-none text-sm font-medium text-slate-600 w-full"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
              {['SEMUA', 'XII', 'XI', 'X'].map(grade => (
                <button key={grade} className={`px-4 py-2 rounded-xl text-[10px] font-black transition-all ${grade === 'SEMUA' ? 'bg-white text-red-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}>{grade}</button>
              ))}
            </div>
            <button className="p-3 bg-slate-50 text-slate-400 hover:text-red-600 rounded-xl border border-slate-100 transition-all">
              <Filter size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50/50 text-slate-400">
                <th className="px-8 py-6 text-left text-[10px] font-black uppercase tracking-[0.2em]">NIS / Profil Siswa</th>
                <th className="px-8 py-6 text-left text-[10px] font-black uppercase tracking-[0.2em]">Rombongan Belajar [Kelas]</th>
                <th className="px-8 py-6 text-left text-[10px] font-black uppercase tracking-[0.2em]">Tgl ditambahkan</th>
                <th className="px-8 py-6 text-right text-[10px] font-black uppercase tracking-[0.2em]">Opsi</th>
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
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center font-black text-slate-300 text-sm italic">
                        #{student.id}
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 uppercase tracking-tight">{student.name}</p>
                        <p className="text-xs font-bold text-red-600 tracking-widest">{student.nis}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-slate-800">
                    <span className="px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-[11px] font-black text-slate-600 tracking-wide">
                      {student.class}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-bold text-slate-400 italic">22 April 2026</p>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center justify-end gap-2">
                       <button className="p-3 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
