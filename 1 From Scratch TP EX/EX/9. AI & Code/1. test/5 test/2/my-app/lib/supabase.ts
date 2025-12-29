import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL and Anon Key must be set in environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types pour les données
export interface Client {
  id: string;
  name: string;
  email: string | null;
  website: string | null;
  status: 'actif' | 'inactif';
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  name: string;
  client_id: string;
  description: string | null;
  budget: number | null;
  status: 'termine' | 'non_acheve';
  start_date: string | null;
  end_date: string | null;
  created_at: string;
  updated_at: string;
}

export interface ClientWithStats extends Client {
  project_count: number;
  total_budget: number;
}

