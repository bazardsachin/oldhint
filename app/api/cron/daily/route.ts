import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
export async function GET() {
  return NextResponse.json({ cron: '9am Calgary', status: 'ARMED' });
}
