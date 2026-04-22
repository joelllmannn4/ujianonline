import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Download, Filter, GraduationCap, ChevronDown, Table as TableIcon } from 'lucide-react';

const CLASSES = ['XII TKJ 1', 'XII TKJ 2', 'XII DKV', 'XII AK', 'XI TKJ', 'X TKJ'];
const REKAP_SISWA = [
  { id: '1', name: 'Ahmad Faisal', class: 'XII TKJ 1', h: 18, s: 1, i: 0, a: 1 },
  { id: '2', name: 'Bunga Citra', class: 'XII TKJ 1', h: 20, s: 0, i: 0, a: 0 },
  { id: '3', name: 'Cipto Mulyono', class: 'XII TKJ 1', h: 15, s: 2, i: 3, a: 0 },
  { id: '4', name: 'Dewi Sartika', class: 'XII TKJ 1', h: 19, s: 0, i: 1, a: 0 },
  { id: '5', name: 'Erwin Prasetyo', class: 'XII TKJ 1', h: 14, s: 0, i: 0, a: 6 },
];

export default function RekapSiswa() {
  const [selectedClass, setSelectedClass] = useState('XII TKJ 1');

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extraBold text-slate-900 tracking-tight mb-2 uppercase">Rekap Absensi Siswa</h2>
          <p className="text-slate-500 font-medium italic italic">Laporan akumulasi kehadiran siswa per bulan/semester.</p>
        </div>
        <div className="flex gap-4">
          <div className="flex bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm">
             <button className="px-5 py-2.5 bg-red-600 text-white font-bold rounded-xl text-xs shadow-lg shadow-red-100 transition-all">Bulanan</button>
             <button className="px-5 py-2.5 text-slate-400 font-bold rounded-xl text-xs hover:text-slate-600 transition-all">Semester</button>
          </div>
          <button className="px-6 h-14 bg-red-600 text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-red-700 transition-all active:scale-95 shadow-xl shadow-red-100">
            <Download size={20} /> Cetak Laporan
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden text-slate-800">
        <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-50 text-red-600 rounded-2xl">
              <GraduationCap size={24} />
            </div>
            <div>
               <h4 className="font-bold text-lg">Evaluasi Kehadiran Kelas</h4>
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] italic">Bulan: April 2026</p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <select 
                value={selectedClass} 
                onChange={(e) => setSelectedClass(e.target.value)}
                className="appearance-none bg-slate-50 border border-slate-100 rounded-2xl px-5 h-12 pr-10 text-sm font-bold text-slate-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all cursor-pointer"
              >
                {CLASSES.map(cls => <option key={cls} value={cls}>{cls}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
            </div>
            <div className="h-8 w-[1px] bg-slate-100 mx-2"></div>
            <div className="flex items-center gap-4 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
              <Search size={18} className="text-slate-400" />
              <input 
                type="text" 
                placeholder="Cari siswa..." 
                className="bg-transparent border-none outline-none text-sm font-medium text-slate-600 w-40"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50/50">
              <tr>
                <th rowSpan={2} className="px-8 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Nama Siswa</th>
                <th rowSpan={2} className="px-8 py-6 text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Kelas</th>
                <th colSpan={4} className="px-8 py-4 text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100">Akumulasi Absensi</th>
                <th rowSpan={2} className="px-8 py-6 text-right text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Presensi [%]</th>
              </tr>
              <tr>
                <th className="px-4 py-3 text-center text-[10px] font-black text-green-500 uppercase">H</th>
                <th className="px-4 py-3 text-center text-[10px] font-black text-blue-500 uppercase">S</th>
                <th className="px-4 py-3 text-center text-[10px] font-black text-orange-500 uppercase">I</th>
                <th className="px-4 py-3 text-center text-[10px] font-black text-red-500 uppercase">A</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {REKAP_SISWA.map((siswa, i) => (
                <tr key={siswa.id} className="group hover:bg-slate-50/50 transition-all">
                  <td className="px-8 py-5 font-bold text-slate-800 uppercase tracking-tight">{siswa.name}</td>
                  <td className="px-8 py-5 text-center text-xs font-bold text-slate-400">{siswa.class}</td>
                  <td className="px-4 py-5 text-center font-black text-green-600 bg-green-50/20">{siswa.h}</td>
                  <td className="px-4 py-5 text-center font-black text-blue-600">{siswa.s}</td>
                  <td className="px-4 py-5 text-center font-black text-orange-600">{siswa.i}</td>
                  <td className="px-4 py-5 text-center font-black text-red-600 bg-red-50/20">{siswa.a}</td>
                  <td className="px-8 py-5 text-right font-black text-slate-900 tracking-tighter">
                    {Math.round((siswa.h / 20) * 100)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-8 bg-slate-50 border-t border-slate-50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             <div className="flex flex-col">
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">Legenda Tabel</span>
               <div className="flex flex-wrap gap-4 mt-2">
                 <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600"><div className="w-2 h-2 bg-green-500 rounded-full"></div> HADIR [H]</div>
                 <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> SAKIT [S]</div>
                 <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600"><div className="w-2 h-2 bg-orange-500 rounded-full"></div> IZIN [I]</div>
                 <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600"><div className="w-2 h-2 bg-red-500 rounded-full"></div> ALPA [A]</div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
