import { NextResponse } from 'next/server';
import { COLLEGES } from '@/lib/mock-data';
import { supabase } from '@/lib/supabase';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const stream = searchParams.get('stream');
  const city = searchParams.get('city');
  const query = searchParams.get('q')?.toLowerCase();

  // Try Supabase if configured and table populated
  if (supabase) {
    try {
      let dbQuery = supabase.from('colleges').select('*');
      if (city) dbQuery = dbQuery.ilike('city', `%${city}%`);
      if (stream) dbQuery = dbQuery.contains('streams', [stream]);
      const { data, error } = await dbQuery;
      if (!error && data && data.length > 0) {
        return NextResponse.json({ colleges: data });
      }
    } catch (e) {
      console.warn('Falling back to local colleges data');
    }
  }

  // Local fallback
  let filtered = [...COLLEGES];

  if (stream && stream !== 'all') {
    filtered = filtered.filter(c => 
      c.streams.some(s => s.toLowerCase().includes(stream.toLowerCase()))
    );
  }

  if (city && city !== 'all') {
    filtered = filtered.filter(c => 
      c.city.toLowerCase().includes(city.toLowerCase()) || 
      c.state.toLowerCase().includes(city.toLowerCase())
    );
  }

  if (query) {
    filtered = filtered.filter(c => 
      c.name.toLowerCase().includes(query) ||
      c.shortName.toLowerCase().includes(query) ||
      c.city.toLowerCase().includes(query) ||
      c.streams.some(s => s.toLowerCase().includes(query))
    );
  }

  return NextResponse.json({ colleges: filtered });
}
