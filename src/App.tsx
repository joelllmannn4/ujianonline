/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/app/Dashboard';
import EmployeeAttendance from './pages/app/EmployeeAttendance';
import StudentAttendance from './pages/app/StudentAttendance';
import RekapKaryawan from './pages/app/RekapKaryawan';
import RekapSiswa from './pages/app/RekapSiswa';
import DataSiswa from './pages/app/DataSiswa';
import UserManagement from './pages/app/UserManagement';
import ExamPage from './pages/app/ExamPage';
import ExamResults from './pages/app/ExamResults';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="absensi-karyawan" element={<EmployeeAttendance />} />
            <Route path="absensi-siswa" element={<StudentAttendance />} />
            <Route path="rekap-karyawan" element={<RekapKaryawan />} />
            <Route path="rekap-siswa" element={<RekapSiswa />} />
            <Route path="data-siswa" element={<DataSiswa />} />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="ujian" element={<ExamPage />} />
            <Route path="hasil-ujian" element={<ExamResults />} />
            <Route path="*" element={<Navigate to="/app" replace />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
