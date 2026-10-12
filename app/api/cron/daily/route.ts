import { NextResponse } from 'next/server';
export async function GET(req: Request) {
  const secret = new URL(req.url).searchParams.get('secret');
  if (process.env.CRON_SECRET && secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://oldhint.com';
  const res = await fetch(`${baseUrl}/api/agent/generate-hint?secret=${process.env.CRON_SECRET}`, { cache: 'no-store' });
  const data = await res.json();
  return NextResponse.json({ cron: '9am Calgary', status: 'ARMED', generated: data, time: new Date().toLocaleString('en-US', { timeZone: 'America/Edmonton' }) });
}
export const dynamic = 'force-dynamic';
