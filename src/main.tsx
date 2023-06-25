import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import setupMSW from './msw/setup';
import { createClient } from '@supabase/supabase-js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

setupMSW();

// Create a single supabase client for interacting with your database
const supabaseUrl = 'https://lbzqqqytvtefwzrdympi.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey || '');
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
