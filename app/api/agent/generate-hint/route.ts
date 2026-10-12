import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET(request: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        error: 'GEMINI_API_KEY missing',
        fix: 'Add in Vercel > Settings > Environment Variables',
        status: 'File is now deployed! Add env var to finish Step 6'
      }, { status: 200 });
    }
    const prompt = `Generate ONE timeless wisdom hint as JSON only: {"title":"Old Hint for Tough Days","body":"150 words warm grandparent advice timeless","seo_title":"Old Hint: Tough Days","tags":["wisdom"]}`;
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.85, maxOutputTokens: 800 }
      })
    });
    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    const hint = jsonMatch? JSON.parse(jsonMatch[0]) : null;
    return NextResponse.json({
      success: true,
      model: 'gemini-1.5-flash FREE',
      hint,
      generated_at: new Date().toISOString()
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function POST(request: Request) { return GET(request); }
