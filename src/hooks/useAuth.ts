import { supabase } from '@/main';

const useAuth = () => {
  //TODO: error handling
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
  }

  async function singOut() {
    const { error } = await supabase.auth.signOut();
  }

  return { signInWithGoogle, singOut };
};

export default useAuth;
