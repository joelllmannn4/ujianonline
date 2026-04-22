import { useState } from 'react';
import { Search, Plus, Trash2, Edit3, UserPlus, Filter } from 'lucide-react';
import { motion } from 'motion/react';

const MOCK_USERS = [
  { id: '1', name: 'Galuh Saputra', email: 'galuh@smkprimaunggul.sch.id', role: 'ADMIN', lastLogin: '2 jam yang lalu' },
  { id: '2', name: 'Eko Prasetyo', email: 'eko@smkprimaunggul.sch.id', role: 'GURU', lastLogin: '1 hari yang lalu' },
  { id: '3', name: 'Siti Aminah', email: 'siti@smkprimaunggul.sch.id', role: 'TENAGA_KEPENDIDIKAN', lastLogin: 'Baru saja' },
  { id: '4', name: 'Budi Santoso', email: 'budi@smkprimaunggul.sch.id', role: 'GURU', lastLogin: '3 hari yang lalu' },
];

export default function UserManagement() {
  const [users] = useState(MOCK_USERS);

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extraBold text-slate-900 tracking-tight mb-2 uppercase">User Management</h2>
          <p className="text-slate-500 font-medium italic italic">Kelola akun dan hak akses seluruh personil sekolah.</p>
        </div>
        <button className="bg-red-600 text-white px-8 h-14 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-red-700 shadow-xl shadow-red-200 transition-all active:scale-95">
          <UserPlus size={20} /> Tambah User Baru
        </button>
      </div>

      <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4 bg-slate-50 px-5 py-2.5 rounded-2xl border border-slate-100 w-full max-w-sm">
            <Search size={18} className="text-slate-400" />
            <input 
              type="text" 
              placeholder="Cari user berdasarkan nama atau email..." 
              className="bg-transparent border-none outline-none text-sm font-medium text-slate-600 w-full"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="p-3 bg-slate-50 text-slate-400 hover:text-red-600 rounded-xl border border-slate-100 transition-all">
              <Filter size={18} />
            </button>
            <div className="h-8 w-[1px] bg-slate-100"></div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Urut Berdasarkan: <span className="text-slate-800">Terbaru</span></p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50/50 text-slate-400">
                <th className="px-8 py-6 text-left text-[10px] font-black uppercase tracking-[0.2em]">Nama User</th>
                <th className="px-8 py-6 text-left text-[10px] font-black uppercase tracking-[0.2em]">Akses Role</th>
                <th className="px-8 py-6 text-left text-[10px] font-black uppercase tracking-[0.2em]">Login Terakhir</th>
                <th className="px-8 py-6 text-right text-[10px] font-black uppercase tracking-[0.2em]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {users.map((user, i) => (
                <motion.tr 
                  key={user.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group hover:bg-slate-50/50 transition-colors"
                >
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-lg">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-800">{user.name}</p>
                        <p className="text-xs font-medium text-slate-400">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      user.role === 'ADMIN' ? 'bg-red-600 text-white shadow-lg shadow-red-100' :
                      user.role === 'GURU' ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' :
                      'bg-slate-800 text-white shadow-lg shadow-slate-100'
                    }`}>
                      {user.role.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-semibold text-slate-500">{user.lastLogin}</p>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-3 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                        <Edit3 size={18} />
                      </button>
                      <button className="p-3 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-8 border-t border-slate-50 bg-slate-50/30">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500 italic">Menampilkan <span className="font-bold text-slate-800">4</span> dari <span className="font-bold text-slate-800">12</span> total user personil sekolah.</p>
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-slate-100 text-slate-400 hover:text-red-600 transition-all font-bold">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-400 transition-all font-bold">2</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
