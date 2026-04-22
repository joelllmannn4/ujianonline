export type UserRole = 'ADMIN' | 'GURU' | 'TENAGA_KEPENDIDIKAN' | 'SISWA';

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  nisn?: string; // Khusus Siswa
  created_at: string;
}

export interface ExamResult {
  id: string;
  student_name: string;
  nisn: string;
  score: number;
  is_passed: boolean;
  date: string;
}

export interface Student {
  id: string;
  nis: string;
  name: string;
  class: string;
  created_at: string;
}

export interface TeacherAttendance {
  id: string;
  user_id: string;
  date: string;
  clock_in: string | null;
  clock_out: string | null;
  status: 'PRESENT' | 'ABSENT' | 'LATE' | 'LEAVE';
  created_at: string;
}

export interface StudentAttendance {
  id: string;
  student_id: string;
  teacher_id: string;
  date: string;
  status: 'PRESENT' | 'SICK' | 'PERMIT' | 'ABSENT';
  created_at: string;
}
