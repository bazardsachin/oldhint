import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET(request: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { 
          error: 'GEMINI_API_KEY missing', 
          fix: 'Add in Vercel env: Production + Preview',
          hint: null
        },
        { status: 200 } // 200 not 500 = prevents Vercel build fail
      );
    }

    const prompt = 'Generate JSON: {"title":"Old Hint","body":"150 words advice","seo_title":"Old Hint","tags":["wisdom"]}';

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
      success: true,
      model: 'gemini-1.5-flash FREE',
      hint
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function POST(r: Request) {
  return GET(r);
}
