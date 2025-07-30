import { supabase } from '../lib/supabase';
import type { ConsultantRequestInsert } from '../types/database';

export class ConsultantService {
  static async submitRequest(data: ConsultantRequestInsert) {
    try {
      const { data: result, error } = await supabase
        .from('consultant_requests')
        .insert([data])
        .select()
        .single();

      if (error) {
        console.error('Error submitting consultant request:', error);
        throw new Error(error.message);
      }

      return result;
    } catch (error) {
      console.error('Service error:', error);
      throw error;
    }
  }

  static async getRequestsByEmail(email: string) {
    try {
      const { data, error } = await supabase
        .from('consultant_requests')
        .select('*')
        .eq('email', email)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching consultant requests:', error);
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      console.error('Service error:', error);
      throw error;
    }
  }
}