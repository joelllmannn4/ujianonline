import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Download, Filter, FileText, Calendar, ArrowDown } from 'lucide-react';

const REKAP_DATA = [
  { id: '1', date: '22 Apr 2026', present: 78, absent: 2, leave: 4, late: 2 },
  { id: '2', date: '21 Apr 2026', present: 80, absent: 1, leave: 3, late: 2 },
  { id: '3', date: '20 Apr 2026', present: 82, absent: 0, leave: 2, late: 2 },
  { id: '4', date: '19 Apr 2026', present: 81, absent: 1, leave: 1, late: 3 },
];

export default function RekapKaryawan() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extraBold text-slate-900 tracking-tight mb-2 uppercase">Rekap Absensi Karyawan</h2>
          <p className="text-slate-500 font-medium italic italic">Laporan akumulasi kehadiran seluruh guru dan tenaga kependidikan.</p>
        </div>
        <button className="px-8 h-14 bg-slate-950 text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-900 transition-all active:scale-95 shadow-xl shadow-slate-200">
          <Download size={20} className="text-red-500" /> Unduh Laporan [PDF]
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 bg-white rounded-[40px] border border-slate-100 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Rata-rata Kehadiran</p>
          <div className="flex items-end justify-between">
            <p className="text-4xl font-black text-slate-800 tracking-tighter">94.2%</p>
            <div className="w-12 h-6 bg-green-100 rounded-full flex items-center justify-center text-[10px] font-black text-green-600">+2.1%</div>
          </div>
        </div>
        <div className="p-8 bg-white rounded-[40px] border border-slate-100 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Total Guru & Staf</p>
          <p className="text-4xl font-black text-slate-800 tracking-tighter">86 Orang</p>
        </div>
        <div className="p-8 bg-white rounded-[40px] border border-slate-100 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Paling Sering Terlambat</p>
          <p className="text-4xl font-black text-red-600 tracking-tighter">3 Personil</p>
        </div>
      </div>

      <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden text-slate-800">
        <div className="p-8 border-b border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-4">
             <div className="p-3 bg-red-50 text-red-600 rounded-xl">
               <Calendar size={20} />
             </div>
             <h4 className="font-bold text-lg">Histori Per Hari</h4>
          </div>
          <div className="flex gap-2">
            <button className="px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold text-slate-500 flex items-center gap-2">
              Filter Bulan <ArrowDown size={14} />
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50/50">
              <tr>
                <th className="px-8 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Tanggal</th>
                <th className="px-8 py-6 text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Hadir</th>
                <th className="px-8 py-6 text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Terlambat</th>
                <th className="px-8 py-6 text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Izin</th>
                <th className="px-8 py-6 text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Alpa</th>
                <th className="px-8 py-6 text-right text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Persentase</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {REKAP_DATA.map((item, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-all cursor-default">
                  <td className="px-8 py-6 font-bold text-slate-700">{item.date}</td>
                  <td className="px-8 py-6 text-center text-sm font-bold text-green-600 bg-green-50/30">{item.present}</td>
                  <td className="px-8 py-6 text-center text-sm font-bold text-orange-600">{item.late}</td>
                  <td className="px-8 py-6 text-center text-sm font-bold text-blue-600">{item.leave}</td>
                  <td className="px-8 py-6 text-center text-sm font-bold text-red-600">{item.absent}</td>
                  <td className="px-8 py-6 text-right">
                    <span className="font-black text-slate-900 tracking-tighter">
                      {Math.round((item.present / 86) * 100)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
