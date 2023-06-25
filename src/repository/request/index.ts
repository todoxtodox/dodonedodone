import { supabase } from '@/main';

export const getUser = async () => {
  return supabase.auth.getUser();
};
