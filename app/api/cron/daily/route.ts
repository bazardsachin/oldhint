import { NextResponse } from 'next/server';
export async function GET() {
  return NextResponse.json({ 
    success: true, 
    status: 'Step 6 FIXED - File deployed!',
    time: new Date().toISOString(),
    message: 'If you see this, your file is live. Now add GEMINI_API_KEY in Vercel to get real hints.',
    secret_test: 'Use ?secret=goldy_oldhint_91_secure'
  });
}
export async function POST() { return GET(); }
