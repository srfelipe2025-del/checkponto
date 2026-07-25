import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://jhyblxcvaslemwzsghfg.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_ufCKGcWkGjhyWhaw2oGQ5w_QWOSAm-s';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
