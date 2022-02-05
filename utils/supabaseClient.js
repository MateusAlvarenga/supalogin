import {
    createClient
} from '@supabase/supabase-js'

import env from '../env.json'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(env.SUPABASE.SUPABASE_URL, env.SUPABASE.SUPABASE_ANONYMOUS_KEY)