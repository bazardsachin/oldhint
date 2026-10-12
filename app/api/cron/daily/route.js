export const dynamic = 'force-dynamic';

export async function GET() {
  // Call our agent
  const base = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://oldhint.com';
  try {
    const res = await fetch(`${base}/api/agent/generate-hint`, { cache: 'no-store' });
    const data = await res.json();
    console.log("Daily Cron Generated:", data.hint);
    // Here later we will save to DB — for now log
    return Response.json({ 
      success: true, 
      time: new Date().toISOString(), 
      hint: data.hint,
      message: "Cron ran at 9am Calgary — Agent posted on behalf of Sachin"
    });
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
