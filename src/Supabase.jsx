
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://dlejdwgtvltjwhzesoqz.supabase.co'
const supabaseKey = 'sb_publishable_hNIDnc9IKccvfP1lW7Jw6w_sH-ggWhF'
export const supabase = createClient(supabaseUrl, supabaseKey)

