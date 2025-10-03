# accounts/supabase_client.py
import os
from supabase import create_client

# Prefer environment variables. Replace the defaults only for local dev/testing.
SUPABASE_URL = os.environ.get("SUPABASE_URL", "https://pdtcnqitjifyqcoijmqi.supabase.co")
SUPABASE_KEY = os.environ.get("SUPABASE_KEY", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkdGNucWl0amlmeXFjb2lqbXFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4NzQyMDAsImV4cCI6MjA3NDQ1MDIwMH0.caD3UITuB2oW_P0TUuxY3xvesPRwgL5KuaHW9VzbyzM")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
