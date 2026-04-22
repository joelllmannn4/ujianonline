import { supabase } from '../lib/supabase';

export const examService = {
  async submitResult(payload: { 
    student_name: string, 
    nisn: string, 
    score: number, 
    major: string 
  }) {
    const { data, error } = await supabase
      .from('exam_results')
      .insert([
        {
          student_name: payload.student_name,
          nisn: payload.nisn,
          score: payload.score,
          major: payload.major,
          completed_at: new Date().toISOString()
        }
      ]);
    return { data, error };
  }
};
