import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, CheckCircle2, History, AlertCircle, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export default function EmployeeAttendance() {
  const [time, setTime] = useState(new Date());
  const [status, setStatus] = useState<'IDLE' | 'IN' | 'OUT'>('IDLE');
  const [history, setHistory] = useState([
    { date: '21 Apr 2026', in: '07:15', out: '16:05', status: 'PRESENT' },
    { date: '20 Apr 2026', in: '07:22', out: '16:10', status: 'PRESENT' },
    { date: '19 Apr 2026', in: '07:05', out: '16:00', status: 'PRESENT' },
  ]);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClockIn = () => {
    setStatus('IN');
  };

  const handleClockOut = () => {
    setStatus('OUT');
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extraBold text-slate-900 tracking-tight mb-2 uppercase">Absen Mandiri</h2>
          <p className="text-slate-500 font-medium">Catat kehadiran harian Anda dengan mudah dan akurat.</p>
        </div>
        <div className="flex items-center gap-3 bg-red-600 p-5 rounded-[28px] text-white shadow-xl shadow-red-200">
          <Clock size={32} strokeWidth={2.5} />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 leading-none mb-1">Waktu Saat Ini</p>
            <p className="text-2xl font-black">{format(time, 'HH:mm:ss')}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="mb-8">
            <h4 className="text-xl font-bold text-slate-800 mb-2">Presensi Hari Ini</h4>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg text-[10px] font-bold text-slate-400 border border-slate-100 uppercase tracking-widest">
              {format(time, 'EEEE, dd MMMM yyyy', { locale: id })}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-3xl border border-slate-50">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-red-600 shadow-sm">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Lokasi Sekarang</p>
                <p className="font-bold text-slate-700">SMK Prima Unggul (Gedung A)</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={handleClockIn}
                disabled={status === 'IN' || status === 'OUT'}
                className={`py-6 rounded-3xl font-extraBold flex flex-col items-center justify-center gap-2 transition-all shadow-lg ${
                  status === 'IN' || status === 'OUT' 
                    ? 'bg-slate-50 text-slate-300 border border-slate-100 shadow-none' 
                    : 'bg-green-600 text-white hover:bg-green-700 shadow-green-100 scale-100 active:scale-95'
                }`}
              >
                <CheckCircle2 size={28} />
                <span className="text-sm uppercase tracking-tighter">Absen Masuk</span>
              </button>
              <button 
                onClick={handleClockOut}
                disabled={status === 'IDLE' || status === 'OUT'}
                className={`py-6 rounded-3xl font-extraBold flex flex-col items-center justify-center gap-2 transition-all shadow-lg ${
                  status === 'IDLE' || status === 'OUT'
                    ? 'bg-slate-50 text-slate-300 border border-slate-100 shadow-none' 
                    : 'bg-red-600 text-white hover:bg-red-700 shadow-red-100 scale-100 active:scale-95'
                }`}
              >
                <Clock size={28} />
                <span className="text-sm uppercase tracking-tighter">Absen Pulang</span>
              </button>
            </div>
          </div>

          {status !== 'IDLE' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-2xl flex items-start gap-4"
            >
              <div className="bg-white p-2 rounded-xl text-blue-600">
                <AlertCircle size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-blue-800 uppercase tracking-widest mb-1">Status Kehadiran</p>
                <p className="text-sm text-blue-600 font-medium italic">
                  Anda sudah melakukan absensi {status === 'IN' ? 'masuk' : 'pulang'} hari ini pada jam {format(time, 'HH:mm')}. Tetap semangat bekerja!
                </p>
              </div>
            </motion.div>
          )}
        </div>

        <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-xl font-bold text-slate-800">Riwayat Terakhir</h4>
            <History size={20} className="text-slate-300" />
          </div>

          <div className="space-y-4">
            {history.map((h, i) => (
              <div key={i} className="group p-5 bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl hover:shadow-slate-100 transition-all rounded-3xl flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{h.date}</p>
                  <p className="text-sm font-bold text-slate-700">Jam Kerja: {h.in} - {h.out}</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-[10px] font-bold text-green-600 rounded-xl border border-green-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
                  {h.status}
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-6 py-4 text-slate-400 hover:text-red-600 font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
            Lihat Selengkapnya Presensi <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
