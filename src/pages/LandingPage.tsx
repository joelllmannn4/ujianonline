import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, Award, ChevronRight, GraduationCap } from 'lucide-react';

const JURUSAN = [
  { id: 'TKJ', name: 'Teknik Komputer & Jaringan', icon: '💻' },
  { id: 'DKV', name: 'Desain Komunikasi Visual', icon: '🎨' },
  { id: 'AK', name: 'Akuntansi', icon: '📊' },
  { id: 'BC', name: 'Broadcasting', icon: '📹' },
  { id: 'MPLB', name: 'Manajemen Perkantoran & Layanan Bisnis', icon: '📁' },
  { id: 'BD', name: 'Bisnis Digital', icon: '🛒' },
];

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <nav className="flex items-center justify-between px-6 py-6 border-b border-slate-100 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">P</div>
          <span className="font-bold text-xl tracking-tight text-slate-800">SMK Prima Unggul</span>
        </div>
        <button 
          onClick={() => navigate('/login')}
          className="px-6 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
        >
          Masuk Dashboard
        </button>
      </nav>

      <main>
        <section className="relative px-6 pt-20 pb-32 max-w-7xl mx-auto text-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Membangun Masa Depan <br />
              <span className="text-red-600">Berbasis Kompetensi</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
              SMK Prima Unggul berkomitmen mencetak lulusan profesional yang siap kerja dan berwirausaha dengan kurikulum berbasis industri.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => navigate('/login')}
                className="w-full sm:w-auto px-8 py-4 bg-red-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-red-200"
              >
                Cek Absensi <ChevronRight size={20} />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-50 text-slate-700 font-bold rounded-2xl border border-slate-200 hover:bg-slate-100 transition-colors">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </motion.div>
        </section>

        {/* Stats */}
        <section className="bg-red-600 py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <div className="text-4xl font-bold mb-1">12+</div>
              <div className="text-red-100 text-sm font-medium uppercase tracking-wider">Tahun Berdiri</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">2000+</div>
              <div className="text-red-100 text-sm font-medium uppercase tracking-wider">Alumni Sukses</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">50+</div>
              <div className="text-red-100 text-sm font-medium uppercase tracking-wider">Industri Rekanan</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">100%</div>
              <div className="text-red-100 text-sm font-medium uppercase tracking-wider">Siap Kerja</div>
            </div>
          </div>
        </section>

        {/* Jurusan Section */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="mb-16 text-left">
            <h2 className="text-sm font-bold text-red-600 uppercase tracking-[0.2em] mb-4">Program Keahlian</h2>
            <h3 className="text-4xl font-bold text-slate-900">Menyediakan 6 Pilihan Jurusan Unggulan</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {JURUSAN.map((j, i) => (
              <motion.div
                key={j.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:border-red-200 hover:shadow-2xl hover:shadow-red-50/50 transition-all duration-300"
              >
                <div className="text-4xl mb-6 bg-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm border border-slate-100">
                  {j.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{j.name}</h4>
                <p className="text-slate-500 mb-6 text-sm">
                  Kurikulum terkini yang diselaraskan dengan kebutuhan industri masa depan di bidang {j.id}.
                </p>
                <div className="flex items-center text-red-600 font-bold text-sm gap-1 group-hover:gap-2 transition-all cursor-pointer">
                  Detail Program <ChevronRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Vision Mission */}
        <section className="bg-slate-950 py-32 px-6 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 italic">"Unggul dalam Karakter, Terampil dalam Teknologi"</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1"><Users className="text-red-500" /></div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">Pendidikan Karakter</h5>
                    <p className="text-slate-400 text-sm">Membentuk adab dan etika kerja yang kuat sebelum kompetensi teknis.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><GraduationCap className="text-red-500" /></div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">Kurikulum Merdeka </h5>
                    <p className="text-slate-400 text-sm">Pembelajaran yang menyesuaikan bakat dan minat tiap siswa secara spesifik.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-red-600/10 border border-red-500/20 p-10 rounded-[40px]">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-red-500" size={32} />
                <span className="font-bold text-xl uppercase tracking-widest">Akreditasi A</span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-8">
                SMK Prima Unggul terus berinovasi dalam sistem pendidikan vokasi untuk melahirkan talenta digital dan profesional bisnis yang kompetitif secara global.
              </p>
              <button className="px-8 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all">
                Daftar Sekarang
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-100 text-center text-slate-500 text-sm">
        <p>&copy; 2026 SMK Prima Unggul. Built with excellence.</p>
      </footer>
    </div>
  );
}
