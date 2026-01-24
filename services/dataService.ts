import { supabase } from '../lib/supabase';
import { Activity, Enquiry } from '../lib/types';
import { MOCK_ACTIVITIES } from '../lib/constants';

// Activities
export const fetchActivities = async (): Promise<Activity[]> => {
  if (!supabase) {
    console.warn('Supabase not configured, using mock data for activities.');
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_ACTIVITIES), 800); // Simulate network delay
    });
  }

  try {
    const { data, error } = await supabase.from('activities').select('*');
    if (error) throw error;
    return data as Activity[];
  } catch (err) {
    console.error('Error fetching activities:', err);
    return MOCK_ACTIVITIES; // Fallback even if configured but fails
  }
};

// Enquiries
export const submitEnquiry = async (enquiry: Omit<Enquiry, 'id' | 'created_at'>): Promise<{ success: boolean; message: string }> => {
  if (!supabase) {
    console.warn('Supabase not configured, simulating enquiry submission.');
    return new Promise((resolve) => {
      setTimeout(() => resolve({ success: true, message: 'Enquiry received! (Mock Mode)' }), 1000);
    });
  }

  try {
    // Mapping camelCase to snake_case for Supabase if needed, or assume table columns match
    // Standard practice: JS uses camelCase, DB uses snake_case. 
    // We'll map it here for safety.
    const dbPayload = {
      name: enquiry.name,
      phone: enquiry.phone,
      room_type: enquiry.roomType,
      check_in_date: enquiry.checkInDate,
      check_out_date: enquiry.checkOutDate,
      message: enquiry.message
    };

    const { error } = await supabase.from('enquiries').insert([dbPayload]);
    
    if (error) {
       // Fallback: try inserting without mapping if columns are camelCase
       const { error: error2 } = await supabase.from('enquiries').insert([enquiry]);
       if (error2) throw error;
    }
    
    return { success: true, message: 'Enquiry sent successfully!' };
  } catch (err) {
    console.error('Error submitting enquiry:', err);
    return { success: false, message: 'Failed to send enquiry. Please try again.' };
  }
};