// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://werlnfyntqcahsqitmuf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndlcmxuZnludHFjYWhzcWl0bXVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzOTgzODcsImV4cCI6MjA0OTk3NDM4N30.KQw4UV-5RsO6dYJcuzkvINtZkP0zb8Oyn4ayqip1aFQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);