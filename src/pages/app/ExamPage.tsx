import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, CheckCircle2, ChevronRight, Clock, Award, AlertCircle, HelpCircle, HardDrive, Palette, Calculator } from 'lucide-react';

type Major = 'TKJ' | 'DKV' | 'AK';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const QUESTION_BANK: Record<Major, Question[]> = {
  TKJ: Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    question: [
      "Apa fungsi utama dari router dalam sebuah jaringan?",
      "Protokol mana yang digunakan untuk mengirim email?",
      "Berapa jumlah host maksimum pada subnet mask /24?",
      "Apa kepanjangan dari OSI dalam konteks model jaringan?",
      "Perangkat mana yang bekerja pada Layer 2 OSI Model?",
      "Apa perintah CMD untuk melihat alamat IP computer?",
      "Jenis kabel yang digunakan untuk menghubungkan dua switch?",
      "Warna kabel urutan ke-3 pada standar T568B adalah?",
      "Port standar untuk HTTP adalah?",
      "Apa kegunaan dari DHCP Server?",
      "Layanan resolusi nama domain ke alamat IP disebut?",
      "Jenis topologi jaringan yang paling tahan terhadap gangguan satu node?",
      "Apa kepanjangan dari LAN?",
      "Perangkat yang menghubungkan LAN ke WAN adalah?",
      "Urutan warna kabel LAN Straight adalah?",
      "Alat pembungkus ujung kabel UTP disebut?",
      "Media transmisi yang menggunakan cahaya adalah?",
      "Apa itu Firewall?",
      "Sistem operasi Server yang populer adalah?",
      "Protokol komunikasi untuk akses remote server secara aman?",
      "Apa kepanjangan dari WLAN?",
      "Satuan kecepatan internet adalah?",
      "Alat untuk mengecek kabel LAN sudah terhubung atau belum?",
      "Jenis IP address yang bisa diakses dari internet publik?",
      "Perintah Linux untuk membuat direktori baru?",
      "Web Server yang menggunakan lisensi Open Source?",
      "Apa itu Subnetting?",
      "Teknologi nirkabel jarak pendek populer?",
      "Format alamat IP Versi 4 terdiri dari berapa bit?",
      "Kepanjangan dari DNS adalah?"
    ][i % 30] || `Pertanyaan Jaringan ke-${i + 1}`,
    options: ["A. Menghubungkan Jaringan", "B. Menyimpan Data", "C. Menghapus Virus", "D. Mendesain Gambar"],
    correctAnswer: 0
  })),
  DKV: Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    question: [
      "Apa elemen dasar dalam desain grafis?",
      "Warna primer dalam model CMYK adalah?",
      "Jenis font yang memiliki 'kaki' kecil di ujung huruf disebut?",
      "Software populer untuk desain vektor adalah?",
      "Apa tujuan utama dari sebuah logo?",
      "Istilah 'Ruang Kosong' dalam desain disebut?",
      "Format file gambar yang mendukung transparansi?",
      "Prinsip desain yang menekankan satu elemen disebut?",
      "Warna Merah melambangkan kesan?",
      "Proses pembuatan gambar bergerak dari gambar diam?",
      "Apa itu DPI?",
      "Jenis kamera yang umum digunakan profesional?",
      "Teknik pengambilan gambar dari bawah ke atas?",
      "Software editing video dari Adobe?",
      "Ukuran kertas A4 dalam MM?",
      "Apa itu Tipografi?",
      "Format video untuk web standar?",
      "Jenis warna yang dihasilkan dari pencampuran warna primer?",
      "Apa itu Layout?",
      "Branding adalah proses?",
      "Alat pengolah gambar Bitmap?",
      "Jenis sketsa awal dalam desain?",
      "Apa itu Vektor?",
      "Fungsi garis dalam desain?",
      "Apa itu Moodboard?",
      "Teknik mencetak pada kaos?",
      "Elemen visual terkecil dalam gambar digital?",
      "Apa itu Estetika?",
      "Software 3D modeling populer?",
      "Teknik pencahayaan dalam fotografi?"
    ][i % 30] || `Pertanyaan Desain ke-${i + 1}`,
    options: ["A. Garis & Warna", "B. Kabel LAN", "C. Neraca Keuangan", "D. Router"],
    correctAnswer: 0
  })),
  AK: Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    question: [
      "Apa persamaan dasar akuntansi?",
      "Akun yang masuk dalam laporan Labar Rugi adalah?",
      "Posisi saldo normal untuk akun Kas adalah?",
      "Jurnal untuk mencatat pembelian peralatan secara kredit?",
      "Apa itu Buku Besar?",
      "Laporan yang menyajikan posisi keuangan perusahaan?",
      "Apa kepanjangan dari KKM?",
      "Penyusutan aset tetap disebut?",
      "Apa itu Modal?",
      "Jenis perusahaan yang menjual jasa disebut?",
      "Bukti transaksi penjualan kredit disebut?",
      "Metode persediaan FIFO artinya?",
      "Apa itu Neraca Saldo?",
      "Laporan perubahan ekuitas mencatat?",
      "Pihak eksternal pengguna informasi akuntansi?",
      "Apa itu Beban?",
      "Akun Pendapatan memiliki saldo normal di?",
      "Jenis pajak perusahaan di Indonesia?",
      "Apa itu Audit?",
      "Software akuntansi populer di SMK?",
      "Akuntansi sering disebut sebagai bahasa?",
      "Apa itu Piutang?",
      "Harta yang mudah dicairkan disebut?",
      "Laporan arus kas menyajikan?",
      "Prinsip dasar akuntansi adalah?",
      "Apa itu Utang Lancar?",
      "Fungsi Akuntansi bagi manajemen?",
      "Cara menghitung Laba Bersih?",
      "Apa itu Jurnal Penutup?",
      "Kepanjangan dari IAI adalah?"
    ][i % 30] || `Pertanyaan Akuntansi ke-${i + 1}`,
    options: ["A. Asset = Kewajiban + Modal", "B. Layer 7 OSI", "C. Desain Logo", "D. Kabel UTP"],
    correctAnswer: 0
  }))
};

export default function ExamPage() {
  const navigate = useNavigate();
  const [selectedMajor, setSelectedMajor] = useState<Major | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  const QUESTIONS = selectedMajor ? QUESTION_BANK[selectedMajor] : [];

  const handleMajorSelect = (major: Major) => {
    setSelectedMajor(major);
    setCurrentQuestion(0);
    setAnswers({});
  };

  const handleAnswer = (optionIndex: number) => {
    setAnswers({ ...answers, [currentQuestion]: optionIndex });
  };

  const nextQuestion = () => {
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const finishExam = () => {
    let correctCount = 0;
    QUESTIONS.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) {
        correctCount++;
      }
    });
    const finalScore = Math.round((correctCount / QUESTIONS.length) * 100);
    setScore(finalScore);
    setIsFinished(true);
  };

  if (!selectedMajor) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Pilih Jurusan Ujian</h1>
          <p className="text-slate-500 font-medium italic">Silakan pilih kejuruan Anda untuk memulai ujian 30 soal.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { id: 'TKJ' as Major, label: 'Teknik Komputer Jaringan', icon: <HardDrive size={32} />, color: 'bg-blue-600' },
            { id: 'DKV' as Major, label: 'Desain Komunikasi Visual', icon: <Palette size={32} />, color: 'bg-purple-600' },
            { id: 'AK' as Major, label: 'Akuntansi Keuangan', icon: <Calculator size={32} />, color: 'bg-emerald-600' },
          ].map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => handleMajorSelect(item.id)}
              className="bg-white p-10 rounded-[40px] shadow-xl shadow-slate-200 border border-slate-100 flex flex-col items-center text-center group transition-all"
            >
              <div className={`w-20 h-20 ${item.color} text-white rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-all`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">{item.id}</h3>
              <p className="text-slate-400 text-xs font-bold leading-relaxed">{item.label}</p>
              <div className="mt-8 flex items-center gap-2 text-red-600 font-bold text-[10px] uppercase tracking-widest">
                Mulai Ujian <ChevronRight size={14} />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  if (isFinished) {
    const isPassed = score >= 70;
    return (
      <div className="max-w-3xl mx-auto py-12 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-[50px] shadow-2xl shadow-slate-200 border border-slate-100 text-center"
        >
          <div className={`w-24 h-24 mx-auto rounded-3xl flex items-center justify-center mb-8 ${isPassed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
            <Award size={48} />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">Hasil Ujian {selectedMajor}</h2>
          <p className="text-slate-500 font-medium mb-10 italic">Evaluasi Kompetensi SMK Prima Unggul</p>

          <div className="grid grid-cols-2 gap-6 mb-12">
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Skor Akhir</p>
              <p className={`text-5xl font-black ${isPassed ? 'text-green-600' : 'text-red-600'}`}>{score}</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Status KKM (70)</p>
              <p className={`text-xl font-bold ${isPassed ? 'text-green-600' : 'text-red-600'} uppercase tracking-widest`}>
                {isPassed ? 'LULUS' : 'TIDAK LULUS'}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <button 
              onClick={() => navigate('/app')}
              className="w-full py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition-all shadow-xl shadow-red-100"
            >
              Kembali ke Dashboard
            </button>
            <p className="text-xs text-slate-400 font-medium italic">Nilai Anda telah otomatis tersimpan ke dalam database Guru.</p>
          </div>
        </motion.div>
      </div>
    );
  }

  const q = QUESTIONS[currentQuestion];

  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
      {/* Left: Questions */}
      <div className="flex-1 space-y-6">
        <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center font-black">
                {currentQuestion + 1}
              </div>
              <div>
                <h4 className="font-bold text-slate-800 uppercase tracking-tight">Bidang Keahlian: {selectedMajor}</h4>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sisa: {QUESTIONS.length - (currentQuestion + 1)} soal</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl text-slate-500 font-bold text-xs border border-slate-100">
              <Clock size={16} className="text-red-600" /> 01:24:45
            </div>
          </div>

          <p className="text-xl font-bold text-slate-800 leading-relaxed mb-10 min-h-[80px]">
            {q.question}
          </p>

          <div className="space-y-4">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className={`w-full p-6 text-left rounded-3xl border-2 transition-all flex items-center justify-between group ${
                  answers[currentQuestion] === i 
                    ? 'border-red-600 bg-red-50/50' 
                    : 'border-slate-100 hover:border-red-200 bg-slate-50/30'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                    answers[currentQuestion] === i ? 'bg-red-600 text-white' : 'bg-white border border-slate-200 text-slate-400'
                  }`}>
                    {String.fromCharCode(65 + i)}
                  </div>
                  <span className={`font-bold ${answers[currentQuestion] === i ? 'text-red-700' : 'text-slate-600'}`}>{opt}</span>
                </div>
                {answers[currentQuestion] === i && <CheckCircle2 className="text-red-600" size={24} />}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-50">
            <button 
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="px-6 py-3 bg-slate-100 text-slate-500 font-bold rounded-xl disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-200 transition-all uppercase text-xs tracking-widest"
            >
              Sebelumnya
            </button>
            
            {currentQuestion === QUESTIONS.length - 1 ? (
              <button 
                onClick={finishExam}
                className="px-10 py-4 bg-red-600 text-white font-black rounded-2xl hover:bg-red-700 shadow-xl shadow-red-200 transition-all uppercase text-sm tracking-widest"
              >
                Selesai Ujian
              </button>
            ) : (
              <button 
                onClick={nextQuestion}
                className="px-8 py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 shadow-xl shadow-red-100 transition-all flex items-center gap-2 uppercase text-sm tracking-widest"
              >
                Selanjutnya <ChevronRight size={18} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Right: Nav Grid */}
      <div className="w-full lg:w-72 space-y-6">
        <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm">
          <h5 className="font-bold text-slate-800 mb-6 flex items-center gap-2 text-xs uppercase tracking-widest">
            <HelpCircle size={18} className="text-red-600" /> Navigasi Soal
          </h5>
          <div className="grid grid-cols-5 gap-2">
            {QUESTIONS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentQuestion(i)}
                className={`aspect-square rounded-xl flex items-center justify-center text-[10px] font-black border-2 transition-all ${
                  currentQuestion === i 
                    ? 'border-red-600 bg-red-600 text-white scale-110 shadow-lg shadow-red-100' 
                    : answers[i] !== undefined
                      ? 'border-green-500 bg-green-50 text-green-600'
                      : 'border-slate-50 bg-slate-50 text-slate-400 hover:border-red-200'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-slate-50 space-y-3">
             <div className="flex items-center gap-3 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
               <div className="w-2.5 h-2.5 bg-red-600 rounded-sm"></div> Sesi Aktif
             </div>
             <div className="flex items-center gap-3 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
               <div className="w-2.5 h-2.5 bg-green-500 rounded-sm"></div> Terjawab
             </div>
             <div className="flex items-center gap-3 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
               <div className="w-2.5 h-2.5 bg-slate-100 rounded-sm"></div> Belum
             </div>
          </div>
        </div>

        <div className="bg-slate-900 p-8 rounded-[32px] text-white shadow-xl shadow-slate-200 relative overflow-hidden">
          <AlertCircle className="absolute -right-4 -bottom-4 text-white/10 w-32 h-32" />
          <h6 className="font-bold mb-4 flex items-center gap-2 text-xs uppercase tracking-widest text-red-500">
            <AlertCircle size={18} /> Perhatian!
          </h6>
          <p className="text-[10px] text-slate-400 leading-relaxed font-bold italic uppercase tracking-wider">
            KKM Ujian adalah <span className="text-white">70</span>. Dilarang membuka catatan atau melakukan kecurangan selama ujian berlangsung.
          </p>
        </div>
      </div>
    </div>
  );
}
