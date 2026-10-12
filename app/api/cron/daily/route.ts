import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');

    if (process.env.CRON_SECRET && secret !== process.env.CRON_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        cron: '9am Calgary',
        status: 'ARMED needs KEY',
        schedule: '0 15 * * *',
        time: new Date().toLocaleString('en-US', {
          timeZone: 'America/Edmonton'
        })
      });
    }

    const prompt = 'Generate JSON: {"title":"Old Hint Today","body":"150 words","seo_title":"Daily","tags":["wisdom"]}';

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.85 }
        })
      }
    );

    const data = await res.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const m = text.match(/\{[\s\S]*\}/);
    const hint = m ? JSON.parse(m[0]) : null;

    return NextResponse.json({
      cron: '9am Calgary Daily',
      status: 'ARMED FIXED',
      hint,
      time: new Date().toLocaleString('en-US', {
        timeZone: 'America/Edmonton'
      })
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
