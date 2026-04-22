# SMK Prima Unggul - Sistem Ujian Online & Absensi Terpadu

Aplikasi web modern untuk manajemen sekolah yang mencakup fitur Absensi Karyawan, Absensi Siswa, dan Ujian Online berbasis kejuruan.

## Fitur Utama
- **Login Multi-Role**: Sistem login aman untuk Guru (Email) dan Siswa (NISN).
- **Ujian Online 30 Soal**: Bank soal spesifik untuk jurusan TKJ, DKV, dan Akuntansi dengan KKM 70.
- **Absensi Real-time**: Pencatatan kehadiran karyawan dan siswa yang terintegrasi dengan database.
- **Teknologi Modern**: Dibangun menggunakan React 18, Vite, Tailwind CSS, dan Supabase.
- **SPA Routing**: Navigasi mulus tanpa reload menggunakan Express server untuk menghindari error 404.

## Cara Instalasi Lokal
1. Clone repositori ini:
   ```bash
   git clone <url-repo-anda>
   ```
2. Instal dependensi:
   ```bash
   npm install
   ```
3. Setel Environment Variables (.env):
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Jalankan aplikasi:
   ```bash
   npm run dev
   ```

## Konfigurasi Database
Aplikasi ini menggunakan Supabase. Kode SQL untuk membuat tabel, trigger, dan kebijakan keamanan (RLS) tersedia di dalam direktori proyek ini (atau bisa merujuk pada histori chat di AI Studio).

---
*Dibuat dengan dedikasi untuk kemajuan pendidikan di SMK Prima Unggul.*
