import {
    createClient
} from '@supabase/supabase-js'
import env from '../env.json'


const supabase = createClient(env.SUPABASE.URL, env.SUPABASE.ANONYMOUS_KEY)

export default supabase