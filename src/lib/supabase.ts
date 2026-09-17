import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'https://your-project.supabase.co' &&
  supabaseAnonKey !== 'your-anon-public-key-here' &&
  supabaseUrl.trim() !== ''
);

// Export standard Supabase client if configured, otherwise null
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null;

export interface CounsellingLead {
  id?: string;
  created_at?: string;
  full_name: string;
  email: string;
  phone: string;
  city?: string;
  class_level: string;
  interested_stream: string;
  preferred_location?: string;
  message?: string;
  status?: string;
}

export interface InstitutionLead {
  id?: string;
  created_at?: string;
  institute_name: string;
  contact_person: string;
  designation?: string;
  email: string;
  phone: string;
  location?: string;
  services_requested?: string[];
  annual_intake_goal?: string;
  message?: string;
  status?: string;
}

// In-memory fallback for local demo mode
const mockCounsellingLeads: CounsellingLead[] = [];
const mockInstitutionLeads: InstitutionLead[] = [];

export async function submitCounsellingRequest(lead: CounsellingLead): Promise<{ success: boolean; data?: any; error?: string }> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('counselling_requests')
        .insert([lead])
        .select()
        .single();
      
      if (error) {
        console.warn('Supabase insert failed, saving to local state:', error.message);
        mockCounsellingLeads.push({ ...lead, id: `local-${Date.now()}`, created_at: new Date().toISOString() });
        return { success: true, data: lead };
      }
      return { success: true, data };
    } catch (err: any) {
      console.error('Supabase exception:', err);
      mockCounsellingLeads.push({ ...lead, id: `local-${Date.now()}`, created_at: new Date().toISOString() });
      return { success: true, data: lead };
    }
  }

  // Graceful fallback when Supabase keys are not set up yet
  const savedRecord = {
    ...lead,
    id: `local-${Date.now()}`,
    created_at: new Date().toISOString(),
    status: 'pending'
  };
  mockCounsellingLeads.push(savedRecord);
  return { success: true, data: savedRecord };
}

export async function submitInstitutionInquiry(inquiry: InstitutionLead): Promise<{ success: boolean; data?: any; error?: string }> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('institution_inquiries')
        .insert([inquiry])
        .select()
        .single();

      if (error) {
        console.warn('Supabase insert failed, saving to local state:', error.message);
        mockInstitutionLeads.push({ ...inquiry, id: `local-${Date.now()}`, created_at: new Date().toISOString() });
        return { success: true, data: inquiry };
      }
      return { success: true, data };
    } catch (err: any) {
      console.error('Supabase exception:', err);
      mockInstitutionLeads.push({ ...inquiry, id: `local-${Date.now()}`, created_at: new Date().toISOString() });
      return { success: true, data: inquiry };
    }
  }

  const savedRecord = {
    ...inquiry,
    id: `local-${Date.now()}`,
    created_at: new Date().toISOString(),
    status: 'new'
  };
  mockInstitutionLeads.push(savedRecord);
  return { success: true, data: savedRecord };
}
