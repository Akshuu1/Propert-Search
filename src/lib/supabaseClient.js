// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://hyktsrkqrzwexgefwgah.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5a3Rzcmtxcnp3ZXhnZWZ3Z2FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1NTczMzQsImV4cCI6MjA2OTEzMzMzNH0.WZ4vOcoBb_WBhrDctUL_LyKy9wf0ApSSwyJJ3Dg8tLQ"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
