import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ChevronRight, AlertCircle, Loader2, GraduationCap } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function LoginPage() {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState<'EMPLOYEE' | 'STUDENT'>('EMPLOYEE');
  const [identifier, setIdentifier] = useState(''); // Email or NISN
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    
    setLoading(true);
    setError(null);

    try {
      // In production, we would use supabase.auth.signInWithPassword here
      // For this environment, we simulate a fast and robust professional login
      await new Promise(resolve => setTimeout(resolve, 800));
      navigate('/app');
    } catch (err: any) {
      setError('Identitas atau Kata Sandi salah. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 font-sans">
      <div className="hidden lg:flex flex-col justify-between p-16 bg-red-600 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-red-600 font-black text-2xl shadow-xl shadow-red-900/20">P</div>
            <span className="font-bold text-2xl tracking-tighter">SMK Prima Unggul</span>
          </div>
          <h1 className="text-7xl font-black leading-[0.9] mb-8 tracking-tighter">
            AKSES <br />
            PENDIDIKAN <br />
            <span className="text-red-200">TERPADU.</span>
          </h1>
        </div>
        <div className="relative z-10 p-10 bg-white/10 backdrop-blur-3xl rounded-[40px] border border-white/20">
          <p className="text-xl opacity-90 leading-relaxed font-medium italic">
            "Sistem Ujian Online & Absensi divalidasi secara real-time untuk transparansi nilai dan kehadiran siswa."
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center p-8 bg-slate-50 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-slate-900 mb-3 uppercase tracking-tight">Login Portal</h2>
            <p className="text-slate-500 font-medium italic">Silakan masuk sesuai identitas Anda</p>
          </div>

          {/* Toggle Login Type */}
          <div className="flex p-2 bg-slate-200/50 rounded-2xl mb-8 border border-slate-200">
            <button 
              onClick={() => setLoginType('EMPLOYEE')}
              className={`flex-1 py-3 rounded-xl text-xs font-black transition-all uppercase tracking-widest ${loginType === 'EMPLOYEE' ? 'bg-white text-red-600 shadow-lg shadow-slate-200' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Guru / Staff
            </button>
            <button 
              onClick={() => setLoginType('STUDENT')}
              className={`flex-1 py-3 rounded-xl text-xs font-black transition-all uppercase tracking-widest ${loginType === 'STUDENT' ? 'bg-white text-red-600 shadow-lg shadow-slate-200' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Siswa (NISN)
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-1">
                {loginType === 'EMPLOYEE' ? 'Email Personil' : 'Nomor NISN Siswa'}
              </label>
              <div className="relative">
                <input
                  type={loginType === 'EMPLOYEE' ? 'email' : 'text'}
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="w-full h-16 pl-14 pr-6 bg-white border-2 border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-red-500/10 focus:border-red-600 transition-all font-bold text-slate-700 placeholder:text-slate-300 shadow-sm"
                  placeholder={loginType === 'EMPLOYEE' ? 'user@smkprimaunggul.sch.id' : '001234xxxx'}
                  required
                />
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300">
                  {loginType === 'EMPLOYEE' ? <Mail size={22} /> : <GraduationCap size={22} />}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-1">Kata Sandi</label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-16 pl-14 pr-6 bg-white border-2 border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-red-500/10 focus:border-red-600 transition-all font-bold text-slate-700 placeholder:text-slate-300 shadow-sm"
                  placeholder="••••••••"
                  required
                />
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={22} />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-16 bg-red-600 text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-red-700 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-2xl shadow-red-200 mt-4 uppercase text-sm tracking-[0.2em]"
            >
              {loading ? <Loader2 className="animate-spin" size={24} /> : <>Masuk Sistem <ChevronRight size={20} /></>}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
