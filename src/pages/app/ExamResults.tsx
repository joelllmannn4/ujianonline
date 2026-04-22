import { useState } from 'react';
import { Search, Trophy, TrendingUp, TrendingDown, Filter, Calendar, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';

const MOCK_RESULTS = [
  { id: '1', name: 'Ahmad Faisal', nisn: '0012345678', score: 85, isPassed: true },
  { id: '2', name: 'Bunga Citra', nisn: '0012345679', score: 92, isPassed: true },
  { id: '3', name: 'Cipto Mulyono', nisn: '0012345680', score: 45, isPassed: false },
  { id: '4', name: 'Dewi Sartika', nisn: '0012345681', score: 70, isPassed: true },
  { id: '5', name: 'Erwin Prasetyo', nisn: '0012345682', score: 35, isPassed: false },
  { id: '6', name: 'Farhan Azis', nisn: '0012345683', score: 49, isPassed: false },
];

export default function ExamResults() {
  const [results] = useState(MOCK_RESULTS);

  return (
    <div className="space-y-8 text-slate-800">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extraBold text-slate-900 tracking-tight mb-2 uppercase">Hasil Ujian Siswa</h2>
          <p className="text-slate-500 font-medium italic italic">Pantau nilai real-time kompetensi dasar SMK Prima Unggul.</p>
        </div>
        <div className="flex items-center gap-4 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm">
           <div className="p-3 bg-red-600 text-white rounded-xl shadow-lg shadow-red-200">
             <BarChart3 size={24} />
           </div>
           <div>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Rata-rata Nilai</p>
             <p className="text-xl font-black text-slate-800">62.16</p>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-8 bg-white rounded-[40px] border border-slate-100 shadow-sm flex flex-col justify-between h-48">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Peserta</p>
          <div className="flex items-center justify-between">
            <p className="text-5xl font-black text-slate-900 tracking-tighter">86</p>
            <Calendar className="text-slate-100" size={48} />
          </div>
        </div>
        <div className="p-8 bg-white rounded-[40px] border border-slate-100 shadow-sm flex flex-col justify-between h-48 border-l-4 border-l-green-500">
          <p className="text-[10px] font-black text-green-600 uppercase tracking-widest">Lulus KKM (50+)</p>
          <div className="flex items-center justify-between">
            <p className="text-5xl font-black text-green-600 tracking-tighter">54</p>
            <TrendingUp className="text-green-50" size={48} />
          </div>
        </div>
        <div className="p-8 bg-white rounded-[40px] border border-slate-100 shadow-sm flex flex-col justify-between h-48 border-l-4 border-l-red-500">
          <p className="text-[10px] font-black text-red-600 uppercase tracking-widest">Tidak Lulus</p>
          <div className="flex items-center justify-between">
            <p className="text-5xl font-black text-red-600 tracking-tighter">32</p>
            <TrendingDown className="text-red-50" size={48} />
          </div>
        </div>
        <div className="p-8 bg-slate-950 rounded-[40px] text-white flex flex-col justify-between h-48">
          <div className="flex items-center gap-2">
            <Trophy className="text-red-500" size={20} />
            <p className="text-[10px] font-black uppercase tracking-widest italic text-red-500">Tertinggi</p>
          </div>
          <p className="text-xl font-bold leading-tight">Bunga Citra <br /><span className="text-3xl font-black text-red-500 tracking-tighter">92.00</span></p>
        </div>
      </div>

      <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div className="flex items-center gap-4 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100 w-full max-w-sm">
             <Search size={18} className="text-slate-400" />
             <input 
               type="text" 
               placeholder="Cari nama siswa atau NISN..." 
               className="bg-transparent border-none outline-none text-sm font-medium text-slate-600 w-full"
             />
           </div>
           <div className="flex items-center gap-3">
             <button className="p-4 bg-slate-50 text-slate-400 hover:text-red-600 rounded-xl border border-slate-100 transition-all">
               <Filter size={20} />
             </button>
             <div className="h-8 w-[1px] bg-slate-100 mx-2"></div>
             <p className="text-[10px] font-black text-red-600 uppercase tracking-widest">KKM Sekolah: 50</p>
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50/50">
              <tr>
                <th className="px-8 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Peringkat</th>
                <th className="px-8 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Siswa</th>
                <th className="px-8 py-6 text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">NISN</th>
                <th className="px-8 py-6 text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Nilai Akhir</th>
                <th className="px-8 py-6 text-right text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Keterangan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {results.sort((a,b) => b.score - a.score).map((res, i) => (
                <tr key={res.id} className="group hover:bg-slate-50/50 transition-all">
                  <td className="px-8 py-6">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs ${i < 3 ? 'bg-red-600 text-white shadow-lg' : 'bg-slate-100 text-slate-400'}`}>
                      {i + 1}
                    </div>
                  </td>
                  <td className="px-8 py-6 font-bold text-slate-800 uppercase tracking-tight">{res.name}</td>
                  <td className="px-8 py-6 text-center font-bold text-slate-400 text-xs">{res.nisn}</td>
                  <td className="px-8 py-6 text-center">
                    <span className={`text-xl font-black tracking-tighter ${res.isPassed ? 'text-green-600' : 'text-red-600'}`}>
                      {res.score}.00
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      res.isPassed ? 'bg-green-100 text-green-600' : 'bg-red-50 text-red-600'
                    }`}>
                      {res.isPassed ? 'LULUS' : 'REMIDIAL'}
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
